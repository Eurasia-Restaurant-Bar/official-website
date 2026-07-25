"use client";

import { useT } from "@/lib/lang-context";
import { HOURS, useToday } from "@/lib/hours";
import ReservationForm from "./ReservationForm";

export default function Visit() {
  const t = useT();
  const today = useToday();

  return (
    <section id="visit" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <span className="eyebrow">{t("Visit & Reserve", "Visitar & Reservar")}</span>
        <h2 style={{ marginBottom: 44 }}>{t("Find us. Book a table.", "Encontre-nos. Reserve mesa.")}</h2>
        <div className="visit-grid">
          <div>
            <div className="info-block">
              <h4>{t("Address", "Morada")}</h4>
              <p style={{ fontSize: 16, color: "var(--ink)" }}>
                Eurasia Restaurant &amp; Bar
                <br />
                R. dos Lusíadas 10D
                <br />
                1300-370 Lisboa, Portugal
              </p>
            </div>
            <div className="info-block">
              <h4>{t("Contact", "Contacto")}</h4>
              <p style={{ fontSize: 16, color: "var(--ink)" }}>
                <a href="tel:+351920230244">+351 920 230 244</a>
                <br />
                <a href="mailto:eurasiarestaurant7@gmail.com">eurasiarestaurant7@gmail.com</a>
              </p>
            </div>
            <div className="info-block">
              <h4>{t("Opening Hours", "Horário")}</h4>
              <table className="hours">
                <tbody>
                  {HOURS.map((row) => (
                    <tr key={row.dayIndex} className={row.dayIndex === today ? "today" : ""}>
                      <td>{t(row.en, row.pt)}</td>
                      <td>{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps?q=Eurasia%20Restaurant%20%26%20Bar%2C%20R.%20dos%20Lus%C3%ADadas%2010D%2C%201300-370%20Lisboa%2C%20Portugal&output=embed"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eurasia Restaurant & Bar location"
              />
              <a
                className="maplink"
                href="https://www.google.com/maps/search/?api=1&query=Eurasia%20Restaurant%20%26%20Bar%2C%20R.%20dos%20Lus%C3%ADadas%2010D%2C%201300-370%20Lisboa%2C%20Portugal"
                target="_blank"
                rel="noopener"
              >
                {t("Open in Maps →", "Abrir no Maps →")}
              </a>
            </div>
          </div>

          <div>
            <ReservationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
