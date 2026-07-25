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
              <em>{t("Nepali", "sabores")}</em>
              {t(" flavours, in Lisbon.", " nepaleses, em Lisboa.")}
            </h1>
            <p className="lead">
              {t(
                "Hand-folded momo, wok-fried noodles and hearty rice plates — Nepali recipes served warm in the heart of the city.",
                "Momo dobrado à mão, noodles salteados e pratos de arroz substanciais — receitas nepalesas servidas no coração da cidade."
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
                <b>{t("Full Bar", "Bar Completo")}</b>
                <span>{t("Wine, spirits & sangria", "Vinho, licores & sangria")}</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="food-frame" data-label="Signature momo platter"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
