import { createMenuItem } from "@/actions/admin";

export default function NewMenuItemForm({ categoryId }: { categoryId: number }) {
  return (
    <form action={createMenuItem} className="item-row" style={{ borderBottom: "none", paddingTop: 14 }}>
      <input type="hidden" name="categoryId" value={categoryId} />
      <input type="text" name="name" placeholder="New item name" required className="admin-field" />
      <input type="text" name="descriptionEn" placeholder="Description (EN)" className="admin-field" />
      <input type="text" name="descriptionPt" placeholder="Description (PT)" className="admin-field" />
      <input type="number" step="0.01" name="priceEuros" placeholder="0.00" required className="admin-field" />
      <label className="checkbox">
        <input type="checkbox" name="isVeg" /> Veg
      </label>
      <label className="checkbox">
        <input type="checkbox" name="isSpicy" /> 🌶
      </label>
      <input type="number" name="sortOrder" placeholder="0" defaultValue={0} className="admin-field" />
      <button type="submit" className="btn btn-primary btn-sm">
        Add
      </button>
    </form>
  );
}
