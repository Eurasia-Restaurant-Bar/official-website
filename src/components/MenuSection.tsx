"use client";

import { useState } from "react";
import { useT } from "@/lib/lang-context";
import { formatEuros } from "@/lib/format";

export type MenuCategoryVM = {
  slug: string;
  nameEn: string;
  namePt: string;
};

export type MenuItemVM = {
  id: number | string;
  categorySlug: string;
  name: string;
  descriptionEn: string;
  descriptionPt: string;
  priceEuros: string;
  isVeg: boolean;
  isSpicy: boolean;
};

export default function MenuSection({
  categories,
  items,
}: {
  categories: MenuCategoryVM[];
  items: MenuItemVM[];
}) {
  const t = useT();
  const [active, setActive] = useState(categories[0]?.slug ?? "");

  return (
    <section id="menu" className="menu">
      <div className="wrap">
        <span className="eyebrow">{t("The Full Menu", "Ementa Completa")}</span>
        <h2>{t("From momo to masala.", "Do momo ao masala.")}</h2>
        <div className="menu-tabs">
          {categories.map((c) => (
            <button
              key={c.slug}
              className={active === c.slug ? "on" : ""}
              onClick={() => setActive(c.slug)}
            >
              {t(c.nameEn, c.namePt)}
            </button>
          ))}
        </div>

        {categories.map((c) => (
          <div className={`menu-panel${active === c.slug ? " on" : ""}`} key={c.slug}>
            <div className="menu-list">
              {items
                .filter((i) => i.categorySlug === c.slug)
                .map((i) => (
                  <div className="mrow" key={i.id}>
                    <div>
                      <span className="mname">
                        {i.name}
                        {i.isVeg && <span className="veg">VEG</span>}
                        {i.isSpicy && <span className="spicy">🌶</span>}
                      </span>
                      <span className="mdesc">{t(i.descriptionEn, i.descriptionPt)}</span>
                    </div>
                    <span className="dots"></span>
                    <span className="mprice">{formatEuros(i.priceEuros)}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}

        <p className="menu-note">
          {t(
            "Prices in euro (€). This is a sample menu — final dishes, prices and allergen info to be confirmed with the restaurant. Vegetarian dishes marked VEG; 🌶 indicates a spicier plate.",
            "Preços em euro (€). Esta é uma ementa de exemplo — pratos, preços e informação de alergénios a confirmar com o restaurante. Pratos vegetarianos marcados VEG; 🌶 indica um prato mais picante."
          )}
        </p>
      </div>
    </section>
  );
}
