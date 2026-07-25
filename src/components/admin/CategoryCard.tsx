"use client";

import { useState, useTransition } from "react";
import { updateCategoryNames, deleteCategory, moveCategory } from "@/actions/admin";
import MenuItemRow, { type MenuItemRowData } from "./MenuItemRow";
import NewMenuItemForm from "./NewMenuItemForm";

export default function CategoryCard({
  id,
  nameEn,
  namePt,
  items,
  isFirst,
  isLast,
  defaultOpen,
}: {
  id: number;
  nameEn: string;
  namePt: string;
  items: MenuItemRowData[];
  isFirst: boolean;
  isLast: boolean;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [renaming, setRenaming] = useState(false);
  const [pending, startTransition] = useTransition();

  function handleMove(direction: "up" | "down") {
    startTransition(async () => {
      const fd = new FormData();
      fd.set("id", String(id));
      fd.set("direction", direction);
      await moveCategory(fd);
    });
  }

  function handleDelete() {
    const warning =
      items.length > 0
        ? `Delete "${nameEn}" and all ${items.length} item${items.length === 1 ? "" : "s"} inside it? This can't be undone.`
        : `Delete "${nameEn}"? This can't be undone.`;
    if (!confirm(warning)) return;
    startTransition(async () => {
      const fd = new FormData();
      fd.set("id", String(id));
      await deleteCategory(fd);
    });
  }

  return (
    <div className="cat-card">
      <div className="cat-card-header">
        <button
          type="button"
          className="cat-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          <span className="cat-chevron" aria-hidden="true">
            {open ? "⌄" : "›"}
          </span>
          <span className="cat-title">{nameEn}</span>
          <span className="cat-count">
            {items.length} item{items.length === 1 ? "" : "s"}
          </span>
        </button>
        <div className="cat-actions">
          <button
            type="button"
            className="icon-btn"
            disabled={isFirst || pending}
            onClick={() => handleMove("up")}
            aria-label={`Move ${nameEn} category up`}
          >
            ↑
          </button>
          <button
            type="button"
            className="icon-btn"
            disabled={isLast || pending}
            onClick={() => handleMove("down")}
            aria-label={`Move ${nameEn} category down`}
          >
            ↓
          </button>
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => setRenaming((r) => !r)}>
            Rename
          </button>
          <button type="button" className="btn btn-danger btn-sm" onClick={handleDelete} disabled={pending}>
            Delete
          </button>
        </div>
      </div>

      {renaming && (
        <form
          action={async (formData) => {
            await updateCategoryNames(formData);
            setRenaming(false);
          }}
          className="cat-rename-form"
        >
          <input type="hidden" name="id" value={id} />
          <div className="field">
            <label>Name (EN)</label>
            <input type="text" name="nameEn" defaultValue={nameEn} required autoFocus className="admin-field" />
          </div>
          <div className="field">
            <label>Name (PT)</label>
            <input type="text" name="namePt" defaultValue={namePt} required className="admin-field" />
          </div>
          <div className="menu-item-edit-actions">
            <button type="submit" className="btn btn-primary btn-sm">
              Save name
            </button>
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => setRenaming(false)}>
              Cancel
            </button>
          </div>
        </form>
      )}

      {open && (
        <div className="cat-card-body">
          {items.length === 0 && <p className="cat-empty">No items yet — add the first one below.</p>}
          {items.map((item, index) => (
            <MenuItemRow
              key={item.id}
              item={item}
              isFirst={index === 0}
              isLast={index === items.length - 1}
            />
          ))}
          <NewMenuItemForm categoryId={id} />
        </div>
      )}
    </div>
  );
}
