"use client";

import Image from "next/image";
import { useT } from "@/lib/lang-context";

export default function Footer() {
  const t = useT();

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="brand">
              <Image
                src="/logo.png"
                alt="Eurasia Restaurant & Bar"
                width={1370}
                height={1148}
                style={{ height: 64, width: "auto" }}
              />
              <small>NEPALESE KITCHEN · LISBOA</small>
            </div>
            <p>
              {t(
                "Handmade Himalayan food in the heart of Lisbon. Momo, sekuwa, dal bhat and warm Nepali hospitality.",
                "Comida himalaia artesanal no coração de Lisboa. Momo, sekuwa, dal bhat e a calorosa hospitalidade nepalesa."
              )}
            </p>
          </div>
          <div className="foot-col">
            <h5>{t("Explore", "Explorar")}</h5>
            <a href="#story">{t("Our Story", "A Nossa História")}</a>
            <a href="#menu">{t("Menu", "Ementa")}</a>
            <a href="#gallery">{t("Gallery", "Galeria")}</a>
            <a href="#visit">{t("Visit & Book", "Visitar & Reservar")}</a>
          </div>
          <div className="foot-col">
            <h5>{t("Follow", "Seguir")}</h5>
            <a
              href="https://www.facebook.com/p/Eurasia-Restaurant-Bar-61579302237652/"
              target="_blank"
              rel="noopener"
            >
              Facebook
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=R.%20dos%20Lus%C3%ADadas%2010D%2C%201300-370%20Lisboa%2C%20Portugal" target="_blank" rel="noopener">
              Google Maps
            </a>
            <a href="https://www.instagram.com/lisbon.eurasia" target="_blank" rel="noopener">
              {t("Instagram", "Instagram")}
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Eurasia Restaurant &amp; Bar · Lisboa, Portugal</span>
          <div className="socials">
            <a
              href="https://www.facebook.com/p/Eurasia-Restaurant-Bar-61579302237652/"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 22v-8h3l1-4h-4V8c0-1 .3-1.7 1.8-1.7H17V2.8C16.5 2.7 15.3 2.6 14 2.6c-2.8 0-4.7 1.7-4.7 4.8V10H6v4h3.3v8H13z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/lisbon.eurasia" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=R.%20dos%20Lus%C3%ADadas%2010D%2C%201300-370%20Lisboa%2C%20Portugal"
              target="_blank"
              rel="noopener"
              aria-label="Map"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s7-6.7 7-12a7 7 0 10-14 0c0 5.3 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
