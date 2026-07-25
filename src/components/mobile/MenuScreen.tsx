"use client";

import { useState } from "react";
import { useT } from "@/lib/lang-context";
import { formatEuros } from "@/lib/format";
import type { MenuCategoryVM, MenuItemVM } from "../MenuSection";

export default function MenuScreen({
  categories,
  items,
}: {
  categories: MenuCategoryVM[];
  items: MenuItemVM[];
}) {
  const t = useT();
  const [activeCat, setActiveCat] = useState("all");

  const visibleItems = activeCat === "all" ? items : items.filter((i) => i.categorySlug === activeCat);

  return (
    <>
      <div className="menu-head">
        <h2 className="sec-title">{t("Menu", "Ementa")}</h2>
        <p className="sec-sub">{t("Prices in €, VAT included", "Preços em €, IVA incluído")}</p>
      </div>
      <div className="chips">
        <button className={`chip${activeCat === "all" ? " on" : ""}`} onClick={() => setActiveCat("all")}>
          {t("All", "Tudo")}
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            className={`chip${activeCat === c.slug ? " on" : ""}`}
            onClick={() => setActiveCat(c.slug)}
          >
            {t(c.nameEn, c.namePt)}
          </button>
        ))}
      </div>
      <div>
        {visibleItems.map((i) => (
          <div className="mrow" key={i.id}>
            <div className="mimg" />
            <div className="mc">
              <div className="mtop">
                <span className="mname">
                  {i.name}
                  {i.isVeg && <span className="m-badge v">VEG</span>}
                  {i.isSpicy && <span className="m-badge s">🌶</span>}
                </span>
                <span className="mprice">{formatEuros(i.priceEuros)}</span>
              </div>
              <p className="mdesc">{t(i.descriptionEn, i.descriptionPt)}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="menu-note">
        {t(
          "Prices in euro (€), VAT included at the legally applicable rate. Items not requested or consumed will not be charged. VEG = vegetarian · 🌶 = spicier.",
          "Preços em euro (€), com IVA incluído à taxa legal em vigor. Itens não solicitados ou não consumidos não serão cobrados. VEG = vegetariano · 🌶 = mais picante."
        )}
      </p>
    </>
  );
}
