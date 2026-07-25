"use client";

import Image from "next/image";
import { useT } from "@/lib/lang-context";
import { CHEFS_PICKS } from "@/lib/dishes";

export default function Highlights() {
  const t = useT();

  return (
    <section id="highlights" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div className="hl-head">
          <div>
            <span className="eyebrow">{t("Chef's Picks", "Escolhas do Chef")}</span>
            <h2>{t("Three plates to start with.", "Três pratos para começar.")}</h2>
          </div>
          <a href="#menu" className="btn btn-ghost">
            {t("See full menu →", "Ver ementa completa →")}
          </a>
        </div>
        <div className="cards-3">
          {CHEFS_PICKS.map((d) => (
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
