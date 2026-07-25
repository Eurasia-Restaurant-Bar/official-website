"use client";

import { useT } from "@/lib/lang-context";

export type MobileScreen = "home" | "menu" | "reviews" | "visit";

export default function TabBar({
  active,
  onNavigate,
  onBookClick,
}: {
  active: MobileScreen;
  onNavigate: (screen: MobileScreen) => void;
  onBookClick: () => void;
}) {
  const t = useT();

  return (
    <nav className="tabbar">
      <button className={`tab${active === "home" ? " on" : ""}`} onClick={() => onNavigate("home")}>
        <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 11l8-7 8 7M6 10v9h12v-9" />
        </svg>
        <span>{t("Home", "Início")}</span>
      </button>
      <button className={`tab${active === "menu" ? " on" : ""}`} onClick={() => onNavigate("menu")}>
        <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 3v18M5 3c2 0 2 6 0 6M18 3v7m0 0c2 0 2-7 0-7m0 7v11" />
        </svg>
        <span>{t("Menu", "Ementa")}</span>
      </button>
      <button className="tab book" onClick={onBookClick}>
        <span className="fab">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="5" width="18" height="16" rx="3" />
            <path d="M3 9h18M8 3v4M16 3v4" />
          </svg>
        </span>
        <span>{t("Book", "Reservar")}</span>
      </button>
      <button className={`tab${active === "reviews" ? " on" : ""}`} onClick={() => onNavigate("reviews")}>
        <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 4l2.3 4.7 5.2.8-3.7 3.6.9 5.1L12 15.8 7.3 18.2l.9-5.1L4.5 9.5l5.2-.8L12 4z" />
        </svg>
        <span>{t("Reviews", "Avaliações")}</span>
      </button>
      <button className={`tab${active === "visit" ? " on" : ""}`} onClick={() => onNavigate("visit")}>
        <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 21s7-6.7 7-12a7 7 0 10-14 0c0 5.3 7 12 7 12z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
        <span>{t("Visit", "Visitar")}</span>
      </button>
    </nav>
  );
}
