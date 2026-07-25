import { asc } from "drizzle-orm";
import { db } from "@/db";
import { menuCategories, menuItems } from "@/db/schema";
import HomeClient from "@/components/HomeClient";
import { seedCategories, seedItems } from "@/db/seed-data";
import type { MenuCategoryVM, MenuItemVM } from "@/components/MenuSection";
import { getGooglePlaceData } from "@/lib/google-places";

async function getMenu(): Promise<{ categories: MenuCategoryVM[]; items: MenuItemVM[] }> {
  try {
    const categoryRows = await db.select().from(menuCategories).orderBy(asc(menuCategories.sortOrder));
    if (categoryRows.length === 0) throw new Error("no categories in db yet");

    const itemRows = await db.select().from(menuItems).orderBy(asc(menuItems.sortOrder));
    const categorySlugById = new Map(categoryRows.map((c) => [c.id, c.slug]));

    return {
      categories: categoryRows.map((c) => ({ slug: c.slug, nameEn: c.nameEn, namePt: c.namePt })),
      items: itemRows.map((i) => ({
        id: i.id,
        categorySlug: categorySlugById.get(i.categoryId) ?? "",
        name: i.name,
        descriptionEn: i.descriptionEn,
        descriptionPt: i.descriptionPt,
        priceEuros: i.priceEuros,
        isVeg: i.isVeg,
        isSpicy: i.isSpicy,
      })),
    };
  } catch (err) {
    console.warn(
      "[menu] falling back to static seed data — DB not reachable yet:",
      err instanceof Error ? err.message : err
    );
    return {
      categories: seedCategories.map((c) => ({ slug: c.slug, nameEn: c.nameEn, namePt: c.namePt })),
      items: seedItems.map((i, idx) => ({
        id: idx,
        categorySlug: i.categorySlug,
        name: i.name,
        descriptionEn: i.descriptionEn,
        descriptionPt: i.descriptionPt,
        priceEuros: i.priceEuros,
        isVeg: i.isVeg,
        isSpicy: i.isSpicy,
      })),
    };
  }
}

async function getReviews() {
  const { data, error } = await getGooglePlaceData();
  if (error) {
    console.warn("[reviews] falling back to sample reviews:", error);
  }
  return data;
}

export default async function Page() {
  const { categories, items } = await getMenu();
  const googlePlace = await getReviews();
  return <HomeClient categories={categories} items={items} googlePlace={googlePlace} />;
}
