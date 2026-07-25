"use client";

import Image from "next/image";
import { useLang } from "@/lib/lang-context";

export default function AppBar({ onHero, onBookClick }: { onHero: boolean; onBookClick: () => void }) {
  const { lang, setLang } = useLang();

  return (
    <div className={`appbar${onHero ? " on-hero" : ""}`}>
      <button className="icon-btn" aria-label="Reserve a table" onClick={onBookClick}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
      <Image className="logo" src="/logo.png" alt="Eurasia Restaurant & Bar" width={1370} height={1148} priority />
      <button
        className="icon-btn lang-mini"
        aria-label="Language"
        onClick={() => setLang(lang === "en" ? "pt" : "en")}
      >
        <span className={lang !== "en" ? "off" : ""}>EN</span>
        <span className={lang !== "pt" ? "off" : ""}>PT</span>
      </button>
    </div>
  );
}
