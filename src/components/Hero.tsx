"use client";

import Image from "next/image";
import { useT } from "@/lib/lang-context";

export default function Hero() {
  const t = useT();

  return (
    <section className="hero">
      <div className="hero-bg">
        <Image
          src="/photos/hero-momo.jpg"
          alt="Freshly steamed momo dumplings with dipping sauce"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "right center" }}
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{t("Himalaya meets the Tejo", "O Himalaia encontra o Tejo")}</span>
            <h1>
              {t("Handmade momo & ", "Momo artesanal & ")}
              <em>{t("Himalayan", "fogo")}</em>
              {t(" fire, in Lisbon.", " do Himalaia, em Lisboa.")}
            </h1>
            <p className="lead">
              {t(
                "Family recipes from the foothills of Nepal — steamed dumplings, charcoal sekuwa and slow-cooked dal bhat — served warm in the heart of the city.",
                "Receitas de família dos sopés do Nepal — dumplings ao vapor, sekuwa na brasa e dal bhat cozinhado lentamente — servido no coração da cidade."
              )}
            </p>
            <div className="hero-cta">
              <a href="#visit" className="btn btn-primary">
                {t("Book a table", "Reservar mesa")}
              </a>
              <a href="#menu" className="btn btn-outline-light">
                {t("Explore the menu", "Ver a ementa")}
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <b>Nepalese</b>
                <span>{t("Authentic kitchen", "Cozinha autêntica")}</span>
              </div>
              <div>
                <b>Lisboa</b>
                <span>{t("Open 6 days", "Aberto 6 dias")}</span>
              </div>
              <div>
                <b>Halal</b>
                <span>{t("& Veg options", "& opções Veg")}</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="food-badge">
              €8,50
              <span>{t("Chicken Momo", "Momo de Frango")}</span>
            </div>
            <div className="food-frame" data-label="Signature momo platter"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
