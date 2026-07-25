import { config } from "dotenv";
config({ path: ".env.local" });

import { db } from "./index";
import { menuCategories, menuItems } from "./schema";
import { seedCategories, seedItems } from "./seed-data";

async function main() {
  console.log("Clearing existing menu (categories cascade-delete their items)...");
  await db.delete(menuCategories);

  console.log("Seeding menu categories...");
  const categories = await db.insert(menuCategories).values(seedCategories).returning();
  const categoryIdBySlug = new Map(categories.map((c) => [c.slug, c.id]));

  console.log("Seeding menu items...");
  const rows = seedItems.map((i) => ({
    categoryId: categoryIdBySlug.get(i.categorySlug)!,
    name: i.name,
    descriptionEn: i.descriptionEn,
    descriptionPt: i.descriptionPt,
    priceEuros: i.priceEuros,
    isVeg: i.isVeg,
    isSpicy: i.isSpicy,
    sortOrder: i.sortOrder,
  }));

  await db.insert(menuItems).values(rows);

  console.log(`Done — ${categories.length} categories, ${rows.length} items.`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
