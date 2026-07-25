"use client";

import { useState } from "react";
import Image from "next/image";
import { useT } from "@/lib/lang-context";
import { CHEFS_PICKS } from "@/lib/dishes";

const PAGE_SIZE = 3;

export default function Highlights() {
  const t = useT();
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(CHEFS_PICKS.length / PAGE_SIZE);
  const visible = CHEFS_PICKS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  function prevPage() {
    setPage((p) => (p - 1 + pageCount) % pageCount);
  }
  function nextPage() {
    setPage((p) => (p + 1) % pageCount);
  }

  return (
    <section id="highlights" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div className="hl-head">
          <div>
            <span className="eyebrow">{t("Chef's Picks", "Escolhas do Chef")}</span>
            <h2>{t("Three plates to start with.", "Três pratos para começar.")}</h2>
          </div>
          <div className="hl-actions">
            {pageCount > 1 && (
              <div className="hl-nav">
                <button
                  type="button"
                  className="hl-chevron"
                  onClick={prevPage}
                  aria-label={t("Previous picks", "Escolhas anteriores")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="hl-chevron"
                  onClick={nextPage}
                  aria-label={t("Next picks", "Próximas escolhas")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            )}
            <a href="#menu" className="btn btn-ghost">
              {t("See full menu →", "Ver ementa completa →")}
            </a>
          </div>
        </div>
        <div className="cards-3">
          {visible.map((d) => (
            <article className="dish-card" key={d.nameEn}>
              <div className="ph-img" data-label={d.label}>
                <Image
                  src={d.photo}
                  alt={t(d.nameEn, d.namePt)}
                  fill
                  sizes="(max-width: 1000px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="dish-body">
                <div className="row">
                  <h3>{t(d.nameEn, d.namePt)}</h3>
                  <span className="price">{d.price}</span>
                </div>
                <p>{t(d.descEn, d.descPt)}</p>
                <span className="tag">{t(d.tagEn, d.tagPt)}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
