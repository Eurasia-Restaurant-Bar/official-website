"use client";

import { useT } from "@/lib/lang-context";
import { HOURS, useToday } from "@/lib/hours";

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Eurasia%20Restaurant%20%26%20Bar%2C%20R.%20dos%20Lus%C3%ADadas%2010D%2C%201300-370%20Lisboa%2C%20Portugal";
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Eurasia%20Restaurant%20%26%20Bar%2C%20R.%20dos%20Lus%C3%ADadas%2010D%2C%201300-370%20Lisboa%2C%20Portugal&output=embed";

export default function VisitScreen() {
  const t = useT();
  const today = useToday();

  return (
    <>
      <div className="pad">
        <h2 className="sec-title">{t("Visit us", "Visite-nos")}</h2>
        <p className="sec-sub">R. dos Lusíadas 10D, Lisboa</p>
      </div>

      <div className="m-map">
        <iframe src={MAP_EMBED_URL} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Eurasia Restaurant & Bar location" />
      </div>

      <a className="contact-row" href={DIRECTIONS_URL} target="_blank" rel="noopener">
        <span className="ci">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 21s7-6.7 7-12a7 7 0 10-14 0c0 5.3 7 12 7 12z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
        </span>
        <div>
          <b>{t("Get directions", "Obter rota")}</b>
          <span>R. dos Lusíadas 10D, 1300-370 Lisboa</span>
        </div>
        <span className="chev">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </span>
      </a>

      <a className="contact-row" href="tel:+351920230244">
        <span className="ci">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M5 3h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 5a2 2 0 012-2z" />
          </svg>
        </span>
        <div>
          <b>{t("Call the restaurant", "Ligar ao restaurante")}</b>
          <span>+351 920 230 244</span>
        </div>
        <span className="chev">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </span>
      </a>

      <a className="contact-row" href="mailto:eurasiarestaurant7@gmail.com">
        <span className="ci">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
        </span>
        <div>
          <b>{t("Email us", "Enviar email")}</b>
          <span>eurasiarestaurant7@gmail.com</span>
        </div>
        <span className="chev">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </span>
      </a>

      <a className="contact-row" href="https://www.facebook.com/p/Eurasia-Restaurant-Bar-61579302237652/" target="_blank" rel="noopener">
        <span className="ci">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 22v-8h3l1-4h-4V8c0-1 .3-1.7 1.8-1.7H17V2.8C16.5 2.7 15.3 2.6 14 2.6c-2.8 0-4.7 1.7-4.7 4.8V10H6v4h3.3v8H13z" />
          </svg>
        </span>
        <div>
          <b>Facebook</b>
          <span>{t("Follow for updates", "Siga para novidades")}</span>
        </div>
        <span className="chev">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </span>
      </a>

      <a className="contact-row" href="https://www.instagram.com/lisbon.eurasia" target="_blank" rel="noopener">
        <span className="ci">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </span>
        <div>
          <b>Instagram</b>
          <span>{t("Follow for updates", "Siga para novidades")}</span>
        </div>
        <span className="chev">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </span>
      </a>

      <div className="pad">
        <h3 className="sec-title" style={{ fontSize: 22 }}>
          {t("Opening hours", "Horário")}
        </h3>
      </div>
      <div className="m-hours">
        {HOURS.map((row) => (
          <div className={`hrow${row.dayIndex === today ? " today" : ""}`} key={row.dayIndex}>
            <span className="d">{t(row.en, row.pt)}</span>
            <span className="t">{row.hours}</span>
          </div>
        ))}
      </div>
    </>
  );
}
