"use client";

import { useState } from "react";
import { createMenuItem } from "@/actions/admin";

export default function NewMenuItemForm({ categoryId }: { categoryId: number }) {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button type="button" className="btn btn-ghost btn-sm add-trigger" onClick={() => setOpen(true)}>
        + Add item
      </button>
    );
  }

  return (
    <form
      action={async (formData) => {
        await createMenuItem(formData);
        setOpen(false);
      }}
      className="menu-item-edit"
    >
      <input type="hidden" name="categoryId" value={categoryId} />
      <div className="field">
        <label>Name</label>
        <input type="text" name="name" placeholder="e.g. Chicken Momo" required autoFocus className="admin-field" />
      </div>
      <div className="field">
        <label>Description (EN)</label>
        <input type="text" name="descriptionEn" className="admin-field" />
      </div>
      <div className="field">
        <label>Description (PT)</label>
        <input type="text" name="descriptionPt" className="admin-field" />
      </div>
      <div className="field-row">
        <div className="field">
          <label>Price (€)</label>
          <input type="number" step="0.01" min="0" name="priceEuros" placeholder="0.00" required className="admin-field" />
        </div>
        <label className="checkbox">
          <input type="checkbox" name="isVeg" /> Veg
        </label>
        <label className="checkbox">
          <input type="checkbox" name="isSpicy" /> Spicy
        </label>
      </div>
      <input type="hidden" name="sortOrder" value={9999} />
      <div className="menu-item-edit-actions">
        <button type="submit" className="btn btn-primary btn-sm">
          Add item
        </button>
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => setOpen(false)}>
          Cancel
        </button>
      </div>
    </form>
  );
}
