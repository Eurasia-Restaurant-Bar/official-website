import { asc } from "drizzle-orm";
import { db } from "@/db";
import { menuCategories, menuItems } from "@/db/schema";
import AdminBar from "@/components/admin/AdminBar";
import CategoryNameForm from "@/components/admin/CategoryNameForm";
import MenuItemRow from "@/components/admin/MenuItemRow";
import NewMenuItemForm from "@/components/admin/NewMenuItemForm";

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
          <h2 style={{ marginBottom: 24 }}>Menu</h2>

          {error && (
            <div className="admin-card">
              <p>
                Database not connected yet. Add <code>DATABASE_URL</code> to <code>.env.local</code>, then run{" "}
                <code>npm run db:migrate</code> and <code>npm run db:seed</code> to load the starting menu.
              </p>
            </div>
          )}

          {!error &&
            categories.map((c) => (
              <div className="admin-card" key={c.id}>
                <CategoryNameForm id={c.id} nameEn={c.nameEn} namePt={c.namePt} />
                <div className="item-row item-row-head">
                  <span>Name</span>
                  <span>Description (EN)</span>
                  <span>Description (PT)</span>
                  <span>Price €</span>
                  <span>Veg</span>
                  <span>🌶</span>
                  <span>Order</span>
                  <span></span>
                </div>
                {items
                  .filter((i) => i.categoryId === c.id)
                  .map((i) => (
                    <MenuItemRow key={i.id} item={i} />
                  ))}
                <NewMenuItemForm categoryId={c.id} />
              </div>
            ))}
        </div>
      </main>
    </>
  );
}
