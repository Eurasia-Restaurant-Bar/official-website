"use client";

import { useState, useTransition } from "react";
import { updateMenuItem, deleteMenuItem, moveMenuItem } from "@/actions/admin";
import { formatEuros } from "@/lib/format";

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

export default function MenuItemRow({
  item,
  isFirst,
  isLast,
}: {
  item: MenuItemRowData;
  isFirst: boolean;
  isLast: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [pending, startTransition] = useTransition();

  function handleMove(direction: "up" | "down") {
    startTransition(async () => {
      const fd = new FormData();
      fd.set("id", String(item.id));
      fd.set("direction", direction);
      await moveMenuItem(fd);
    });
  }

  function handleDelete() {
    if (!confirm(`Delete "${item.name}"? This can't be undone.`)) return;
    startTransition(async () => {
      const fd = new FormData();
      fd.set("id", String(item.id));
      await deleteMenuItem(fd);
    });
  }

  if (editing) {
    return (
      <form
        action={async (formData) => {
          await updateMenuItem(formData);
          setEditing(false);
        }}
        className="menu-item-edit"
      >
        <input type="hidden" name="id" value={item.id} />
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" defaultValue={item.name} required className="admin-field" />
        </div>
        <div className="field">
          <label>Description (EN)</label>
          <input type="text" name="descriptionEn" defaultValue={item.descriptionEn} className="admin-field" />
        </div>
        <div className="field">
          <label>Description (PT)</label>
          <input type="text" name="descriptionPt" defaultValue={item.descriptionPt} className="admin-field" />
        </div>
        <div className="field-row">
          <div className="field">
            <label>Price (€)</label>
            <input
              type="number"
              step="0.01"
              min="0"
              name="priceEuros"
              defaultValue={item.priceEuros}
              required
              className="admin-field"
            />
          </div>
          <label className="checkbox">
            <input type="checkbox" name="isVeg" defaultChecked={item.isVeg} /> Veg
          </label>
          <label className="checkbox">
            <input type="checkbox" name="isSpicy" defaultChecked={item.isSpicy} /> Spicy
          </label>
        </div>
        <input type="hidden" name="sortOrder" value={item.sortOrder} />
        <div className="menu-item-edit-actions">
          <button type="submit" className="btn btn-primary btn-sm">
            Save
          </button>
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => setEditing(false)}>
            Cancel
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="menu-item-row" aria-busy={pending}>
      <div className="menu-item-order">
        <button
          type="button"
          className="icon-btn"
          disabled={isFirst || pending}
          onClick={() => handleMove("up")}
          aria-label={`Move ${item.name} up`}
        >
          ↑
        </button>
        <button
          type="button"
          className="icon-btn"
          disabled={isLast || pending}
          onClick={() => handleMove("down")}
          aria-label={`Move ${item.name} down`}
        >
          ↓
        </button>
      </div>
      <div className="menu-item-main">
        <div className="menu-item-title-row">
          <span className="menu-item-name">{item.name}</span>
          {item.isVeg && <span className="badge badge-veg">Veg</span>}
          {item.isSpicy && <span className="badge badge-spicy">🌶 Spicy</span>}
        </div>
        {(item.descriptionEn || item.descriptionPt) && (
          <p className="menu-item-desc">{item.descriptionEn}</p>
        )}
      </div>
      <div className="menu-item-price">{formatEuros(item.priceEuros)}</div>
      <div className="menu-item-actions">
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => setEditing(true)}>
          Edit
        </button>
        <button type="button" className="btn btn-danger btn-sm" onClick={handleDelete} disabled={pending}>
          Delete
        </button>
      </div>
    </div>
  );
}
