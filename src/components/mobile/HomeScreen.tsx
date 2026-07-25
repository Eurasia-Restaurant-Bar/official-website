"use client";

import Image from "next/image";
import { useT } from "@/lib/lang-context";
import { useOpenStatus } from "@/lib/hours";
import { CHEFS_PICKS } from "@/lib/dishes";
import type { MobileScreen } from "./TabBar";

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Eurasia%20Restaurant%20%26%20Bar%2C%20R.%20dos%20Lus%C3%ADadas%2010D%2C%201300-370%20Lisboa%2C%20Portugal";

export default function HomeScreen({
  onBookClick,
  onNavigate,
}: {
  onBookClick: () => void;
  onNavigate: (screen: MobileScreen) => void;
}) {
  const t = useT();
  const status = useOpenStatus();

  return (
    <>
      <div className="m-hero">
        <div className="m-hero-bg">
          <Image
            src="/photos/hero-momo.jpg"
            alt="Freshly steamed momo dumplings with dipping sauce"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "right center" }}
          />
        </div>
        <div className="m-hero-overlay"></div>
        <div className="m-hero-content">
          <span className="greet">{t("Namaste, Lisboa", "Namaste, Lisboa")}</span>
          <h1>
            {t("Handmade momo & ", "Momo artesanal & ")}
            <em>{t("Himalayan", "fogo")}</em>
            {t(" fire.", " do Himalaia.")}
          </h1>
          <p>
            {t(
              "Nepalese family recipes, served warm in the heart of the city.",
              "Receitas de família nepalesas, servidas no coração da cidade."
            )}
          </p>
          {status && (
            <span className="open-chip">
              <span className={`m-dot${status.open ? "" : " closed"}`}></span>
              <span>
                {status.open
                  ? t(`Open now · closes ${status.closesAt}`, `Aberto agora · fecha às ${status.closesAt}`)
                  : status.opensToday
                    ? t(`Closed · opens ${status.opensAt}`, `Fechado · abre às ${status.opensAt}`)
                    : t(
                        `Closed · opens tomorrow ${status.opensAt}`,
                        `Fechado · abre amanhã às ${status.opensAt}`
                      )}
              </span>
            </span>
          )}
        </div>
      </div>

      <div className="quick">
        <button className="qa" onClick={onBookClick}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="5" width="18" height="16" rx="3" />
            <path d="M3 9h18M8 3v4M16 3v4" />
          </svg>
          <b>{t("Reserve", "Reservar")}</b>
        </button>
        <a className="qa" href="tel:+351920230244">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M5 3h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 5a2 2 0 012-2z" />
          </svg>
          <b>{t("Call", "Ligar")}</b>
        </a>
        <a className="qa" href={DIRECTIONS_URL} target="_blank" rel="noopener">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 21s7-6.7 7-12a7 7 0 10-14 0c0 5.3 7 12 7 12z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <b>{t("Directions", "Rota")}</b>
        </a>
      </div>

      <div className="pad">
        <h2 className="sec-title">{t("Chef's picks", "Escolhas do chef")}</h2>
      </div>
      <div className="hscroll">
        {CHEFS_PICKS.map((d) => (
          <article className="pick" key={d.nameEn}>
            <div className="ph">
              <Image src={d.photo} alt={t(d.nameEn, d.namePt)} fill sizes="76vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="pb">
              <div className="r">
                <h3>{t(d.nameEn, d.namePt)}</h3>
                <span className="price">{d.price}</span>
              </div>
              <p>{t(d.descEn, d.descPt)}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="story-card">
        <div className="story-card-bg">
          <Image
            src="/photos/story-team.jpg"
            alt="Eurasia staff hand-folding momo dumplings"
            fill
            sizes="92vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="story-card-overlay"></div>
        <div className="story-card-content">
          <span className="m-eyebrow">{t("Our story", "A nossa história")}</span>
          <h3>{t("Two continents, one table.", "Dois continentes, uma mesa.")}</h3>
          <p>
            {t(
              "We carried our grandmother's spice tin from Kathmandu to Lisbon. Every momo is folded by hand each morning.",
              "Trouxemos a lata de especiarias da avó de Katmandu para Lisboa. Cada momo é dobrado à mão todas as manhãs."
            )}
          </p>
          <button type="button" className="link" onClick={() => onNavigate("menu")}>
            {t("Explore the menu →", "Ver a ementa →")}
          </button>
        </div>
      </div>
    </>
  );
}
