import { updateMenuItem, deleteMenuItem } from "@/actions/admin";

export type MenuItemRowData = {
  id: number;
  name: string;
  descriptionEn: string;
  descriptionPt: string;
  priceEuros: string;
  isVeg: boolean;
  isSpicy: boolean;
  sortOrder: number;
};

export default function MenuItemRow({ item }: { item: MenuItemRowData }) {
  return (
    <form className="item-row">
      <input type="hidden" name="id" value={item.id} />
      <input type="text" name="name" defaultValue={item.name} className="admin-field" />
      <input type="text" name="descriptionEn" defaultValue={item.descriptionEn} className="admin-field" placeholder="Description (EN)" />
      <input type="text" name="descriptionPt" defaultValue={item.descriptionPt} className="admin-field" placeholder="Description (PT)" />
      <input type="number" step="0.01" name="priceEuros" defaultValue={item.priceEuros} className="admin-field" />
      <label className="checkbox">
        <input type="checkbox" name="isVeg" defaultChecked={item.isVeg} /> Veg
      </label>
      <label className="checkbox">
        <input type="checkbox" name="isSpicy" defaultChecked={item.isSpicy} /> 🌶
      </label>
      <input type="number" name="sortOrder" defaultValue={item.sortOrder} className="admin-field" title="Sort order" />
      <div style={{ display: "flex", gap: 6 }}>
        <button type="submit" formAction={updateMenuItem} className="btn btn-ghost btn-sm">
          Save
        </button>
        <button type="submit" formAction={deleteMenuItem} className="btn btn-danger btn-sm">
          Delete
        </button>
      </div>
    </form>
  );
}
