"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { asc, eq } from "drizzle-orm";
import { db } from "@/db";
import { menuCategories, menuItems, reservations } from "@/db/schema";
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_MAX_AGE_SECONDS,
  checkAdminPassword,
  createSessionValue,
} from "@/lib/auth";

export type LoginState = { status: "idle" | "error"; message?: string };

export async function loginAdmin(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  if (!checkAdminPassword(password)) {
    return { status: "error", message: "Incorrect password." };
  }
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE, createSessionValue(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_SESSION_MAX_AGE_SECONDS,
  });
  redirect("/admin");
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_SESSION_COOKIE);
  redirect("/admin/login");
}

function revalidateMenu() {
  revalidatePath("/admin/menu");
  revalidatePath("/");
}

export async function createMenuItem(formData: FormData) {
  const categoryId = Number(formData.get("categoryId"));
  const name = String(formData.get("name") ?? "").trim();
  const descriptionEn = String(formData.get("descriptionEn") ?? "").trim();
  const descriptionPt = String(formData.get("descriptionPt") ?? "").trim();
  const priceEuros = String(formData.get("priceEuros") ?? "0").trim();
  const isVeg = formData.get("isVeg") === "on";
  const isSpicy = formData.get("isSpicy") === "on";
  const sortOrder = Number(formData.get("sortOrder") ?? 0);

  if (!categoryId || !name || !priceEuros) return;

  await db.insert(menuItems).values({
    categoryId,
    name,
    descriptionEn,
    descriptionPt,
    priceEuros,
    isVeg,
    isSpicy,
    sortOrder,
  });

  revalidateMenu();
}

export async function updateMenuItem(formData: FormData) {
  const id = Number(formData.get("id"));
  if (!id) return;

  const name = String(formData.get("name") ?? "").trim();
  const descriptionEn = String(formData.get("descriptionEn") ?? "").trim();
  const descriptionPt = String(formData.get("descriptionPt") ?? "").trim();
  const priceEuros = String(formData.get("priceEuros") ?? "0").trim();
  const isVeg = formData.get("isVeg") === "on";
  const isSpicy = formData.get("isSpicy") === "on";
  const sortOrder = Number(formData.get("sortOrder") ?? 0);

  await db
    .update(menuItems)
    .set({ name, descriptionEn, descriptionPt, priceEuros, isVeg, isSpicy, sortOrder })
    .where(eq(menuItems.id, id));

  revalidateMenu();
}

export async function deleteMenuItem(formData: FormData) {
  const id = Number(formData.get("id"));
  if (!id) return;
  await db.delete(menuItems).where(eq(menuItems.id, id));
  revalidateMenu();
}

export async function moveMenuItem(formData: FormData) {
  const id = Number(formData.get("id"));
  const direction = String(formData.get("direction") ?? "");
  if (!id || (direction !== "up" && direction !== "down")) return;

  const [item] = await db.select().from(menuItems).where(eq(menuItems.id, id));
  if (!item) return;

  const siblings = await db
    .select()
    .from(menuItems)
    .where(eq(menuItems.categoryId, item.categoryId))
    .orderBy(asc(menuItems.sortOrder));

  const index = siblings.findIndex((i) => i.id === id);
  const swapWith = direction === "up" ? index - 1 : index + 1;
  if (index === -1 || swapWith < 0 || swapWith >= siblings.length) return;

  const current = siblings[index];
  const neighbor = siblings[swapWith];

  await db.update(menuItems).set({ sortOrder: neighbor.sortOrder }).where(eq(menuItems.id, current.id));
  await db.update(menuItems).set({ sortOrder: current.sortOrder }).where(eq(menuItems.id, neighbor.id));

  revalidateMenu();
}

export async function updateCategoryNames(formData: FormData) {
  const id = Number(formData.get("id"));
  if (!id) return;
  const nameEn = String(formData.get("nameEn") ?? "").trim();
  const namePt = String(formData.get("namePt") ?? "").trim();
  if (!nameEn || !namePt) return;

  await db.update(menuCategories).set({ nameEn, namePt }).where(eq(menuCategories.id, id));
  revalidateMenu();
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function createCategory(formData: FormData) {
  const nameEn = String(formData.get("nameEn") ?? "").trim();
  const namePt = String(formData.get("namePt") ?? "").trim();
  if (!nameEn || !namePt) return;

  const slug = slugify(nameEn) || `category-${Date.now()}`;
  const existing = await db.select().from(menuCategories);
  const nextSortOrder = existing.reduce((max, c) => Math.max(max, c.sortOrder), -1) + 1;

  await db
    .insert(menuCategories)
    .values({ slug, nameEn, namePt, sortOrder: nextSortOrder })
    .onConflictDoNothing({ target: menuCategories.slug });

  revalidateMenu();
}

export async function deleteCategory(formData: FormData) {
  const id = Number(formData.get("id"));
  if (!id) return;
  // Cascades to delete every menu item in this category too (see schema's onDelete: "cascade").
  await db.delete(menuCategories).where(eq(menuCategories.id, id));
  revalidateMenu();
}

export async function moveCategory(formData: FormData) {
  const id = Number(formData.get("id"));
  const direction = String(formData.get("direction") ?? "");
  if (!id || (direction !== "up" && direction !== "down")) return;

  const all = await db.select().from(menuCategories).orderBy(asc(menuCategories.sortOrder));
  const index = all.findIndex((c) => c.id === id);
  const swapWith = direction === "up" ? index - 1 : index + 1;
  if (index === -1 || swapWith < 0 || swapWith >= all.length) return;

  const current = all[index];
  const neighbor = all[swapWith];

  await db.update(menuCategories).set({ sortOrder: neighbor.sortOrder }).where(eq(menuCategories.id, current.id));
  await db.update(menuCategories).set({ sortOrder: current.sortOrder }).where(eq(menuCategories.id, neighbor.id));

  revalidateMenu();
}

export async function updateReservationStatus(formData: FormData) {
  const id = Number(formData.get("id"));
  const status = String(formData.get("status") ?? "");
  if (!id || !["pending", "confirmed", "declined"].includes(status)) return;

  await db.update(reservations).set({ status }).where(eq(reservations.id, id));
  revalidatePath("/admin");
}
