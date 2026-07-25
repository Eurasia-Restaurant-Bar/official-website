import { asc } from "drizzle-orm";
import { db } from "@/db";
import { menuCategories, menuItems } from "@/db/schema";
import AdminBar from "@/components/admin/AdminBar";
import CategoryCard from "@/components/admin/CategoryCard";
import NewCategoryForm from "@/components/admin/NewCategoryForm";

// Admin-only, always shows live data — never statically cache this page.
export const dynamic = "force-dynamic";

type CategoryRow = { id: number; slug: string; nameEn: string; namePt: string };
type ItemRow = {
  id: number;
  categoryId: number;
  name: string;
  descriptionEn: string;
  descriptionPt: string;
  priceEuros: string;
  isVeg: boolean;
  isSpicy: boolean;
  sortOrder: number;
};

async function getMenuData(): Promise<{
  categories: CategoryRow[];
  items: ItemRow[];
  error: string | null;
}> {
  try {
    const categories = await db
      .select()
      .from(menuCategories)
      .orderBy(asc(menuCategories.sortOrder));
    const items = await db.select().from(menuItems).orderBy(asc(menuItems.sortOrder));
    return { categories, items, error: null };
  } catch (err) {
    return { categories: [], items: [], error: err instanceof Error ? err.message : String(err) };
  }
}

export default async function AdminMenuPage() {
  const { categories, items, error } = await getMenuData();

  return (
    <>
      <AdminBar />
      <main className="admin-main">
        <div className="wrap">
          <div className="admin-page-head">
            <h2>Menu</h2>
            <p className="admin-page-hint">Tap a category to see its items. Tap &ldquo;Edit&rdquo; on an item to change it.</p>
          </div>

          {error && (
            <div className="admin-card">
              <p>
                Database not connected yet. Add <code>DATABASE_URL</code> to <code>.env.local</code>, then run{" "}
                <code>npm run db:migrate</code> and <code>npm run db:seed</code> to load the starting menu.
              </p>
            </div>
          )}

          {!error &&
            categories.map((c, index) => (
              <CategoryCard
                key={c.id}
                id={c.id}
                nameEn={c.nameEn}
                namePt={c.namePt}
                items={items.filter((i) => i.categoryId === c.id)}
                isFirst={index === 0}
                isLast={index === categories.length - 1}
                defaultOpen={categories.length <= 1}
              />
            ))}

          {!error && <NewCategoryForm />}
        </div>
      </main>
    </>
  );
}
