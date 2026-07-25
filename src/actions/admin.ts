"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
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

export async function updateCategoryNames(formData: FormData) {
  const id = Number(formData.get("id"));
  if (!id) return;
  const nameEn = String(formData.get("nameEn") ?? "").trim();
  const namePt = String(formData.get("namePt") ?? "").trim();
  if (!nameEn || !namePt) return;

  await db.update(menuCategories).set({ nameEn, namePt }).where(eq(menuCategories.id, id));
  revalidateMenu();
}

export async function updateReservationStatus(formData: FormData) {
  const id = Number(formData.get("id"));
  const status = String(formData.get("status") ?? "");
  if (!id || !["pending", "confirmed", "declined"].includes(status)) return;

  await db.update(reservations).set({ status }).where(eq(reservations.id, id));
  revalidatePath("/admin");
}
