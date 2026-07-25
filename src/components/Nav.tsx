"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang, useT } from "@/lib/lang-context";

export default function Nav() {
  const t = useT();
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <nav className="nav-links nav-left">
          <a href="#story">{t("Our Story", "A Nossa História")}</a>
          <a href="#menu">{t("Menu", "Ementa")}</a>
          <a href="#gallery">{t("Gallery", "Galeria")}</a>
        </nav>
        <a href="#top" className="brand">
          <Image src="/logo.png" alt="Eurasia Restaurant & Bar" width={1370} height={1148} priority />
        </a>
        <div className="nav-right">
          <nav className="nav-links nav-right-links">
            <a href="#reviews">{t("Reviews", "Avaliações")}</a>
            <a href="#visit">{t("Visit", "Visitar")}</a>
          </nav>
          <div className="lang" role="group" aria-label="Language">
            <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>
              EN
            </button>
            <button className={lang === "pt" ? "on" : ""} onClick={() => setLang("pt")}>
              PT
            </button>
          </div>
          <a href="#visit" className="btn btn-primary nav-reserve">
            {t("Reserve", "Reservar")}
          </a>
          <button className="nav-burger" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className={`nav-drawer${open ? " open" : ""}`} onClick={() => setOpen(false)}>
        <a href="#story">{t("Our Story", "A Nossa História")}</a>
        <a href="#menu">{t("Menu", "Ementa")}</a>
        <a href="#gallery">{t("Gallery", "Galeria")}</a>
        <a href="#reviews">{t("Reviews", "Avaliações")}</a>
        <a href="#visit">{t("Visit", "Visitar")}</a>
      </div>
    </header>
  );
}
