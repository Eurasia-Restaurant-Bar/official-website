"use client";

import { useState } from "react";
import { createCategory } from "@/actions/admin";

export default function NewCategoryForm() {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button type="button" className="btn btn-primary add-category-trigger" onClick={() => setOpen(true)}>
        + Add category
      </button>
    );
  }

  return (
    <form
      action={async (formData) => {
        await createCategory(formData);
        setOpen(false);
      }}
      className="admin-card new-category-form"
    >
      <h3 style={{ fontSize: 16 }}>New category</h3>
      <div className="field-row">
        <div className="field">
          <label>Name (EN)</label>
          <input type="text" name="nameEn" placeholder="e.g. Desserts" required autoFocus className="admin-field" />
        </div>
        <div className="field">
          <label>Name (PT)</label>
          <input type="text" name="namePt" placeholder="e.g. Sobremesas" required className="admin-field" />
        </div>
      </div>
      <div className="menu-item-edit-actions">
        <button type="submit" className="btn btn-primary btn-sm">
          Add category
        </button>
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => setOpen(false)}>
          Cancel
        </button>
      </div>
    </form>
  );
}
