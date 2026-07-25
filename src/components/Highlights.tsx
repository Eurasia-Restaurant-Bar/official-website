"use client";

import Image from "next/image";
import { useT } from "@/lib/lang-context";

const DISHES = [
  {
    label: "Steamed momo",
    photo: "/photos/dish-jhol-momo.jpg",
    nameEn: "Jhol Momo",
    namePt: "Jhol Momo",
    price: "€10,00",
    descEn: "Ten steamed dumplings swimming in a warm sesame-tomato broth. The Kathmandu street classic.",
    descPt: "Dez dumplings ao vapor num caldo morno de sésamo e tomate. O clássico de rua de Katmandu.",
    tagEn: "House favourite",
    tagPt: "Favorito da casa",
  },
  {
    label: "Charcoal grill",
    photo: "/photos/dish-chicken-sekuwa.jpg",
    nameEn: "Chicken Sekuwa",
    namePt: "Sekuwa de Frango",
    price: "€13,00",
    descEn: "Charcoal-grilled marinated chicken with timur pepper, served with beaten rice and pickle.",
    descPt: "Frango marinado grelhado no carvão com pimenta timur, servido com arroz batido e pickle.",
    tagEn: "Over charcoal",
    tagPt: "Sobre carvão",
  },
  {
    label: "Thakali thali set",
    photo: "/photos/dish-thakali-thali.jpg",
    nameEn: "Thakali Thali",
    namePt: "Thali Thakali",
    price: "€14,50",
    descEn: "A full mountain feast: rice, lentils, seasonal greens, curry, pickle and papad on one brass plate.",
    descPt: "Um banquete de montanha: arroz, lentilhas, verduras, caril, pickle e papad num prato de latão.",
    tagEn: "Best value",
    tagPt: "Melhor valor",
  },
];

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
          {DISHES.map((d) => (
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
