"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { useT } from "@/lib/lang-context";
import { createReservation, type ReservationState } from "@/actions/reservation";

const initialState: ReservationState = { status: "idle" };

const SEATING_OPTIONS = [
  { en: "Indoor", pt: "Interior" },
  { en: "Terrace", pt: "Esplanada" },
  { en: "No preference", pt: "Sem preferência" },
];

function ConfirmButton() {
  const t = useT();
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="m-cta" disabled={pending}>
      {pending ? t("Sending…", "A enviar…") : t("Confirm reservation", "Confirmar reserva")}
    </button>
  );
}

export default function ReservationSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const t = useT();
  const [state, formAction] = useActionState(createReservation, initialState);
  const [guests, setGuests] = useState(2);
  const [seatingIndex, setSeatingIndex] = useState(0);
  const seatingValue = t(SEATING_OPTIONS[seatingIndex].en, SEATING_OPTIONS[seatingIndex].pt);

  return (
    <>
      <div className={`m-scrim${open ? " open" : ""}`} onClick={onClose} />
      <div className={`m-sheet${open ? " open" : ""}`} role="dialog" aria-modal="true" aria-hidden={!open}>
        <div className="grab" />
        {state.status === "success" ? (
          <div className="sheet-ok">
            <div className="tick">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2>{t("Table requested", "Mesa pedida")}</h2>
            <p>
              {t(
                "We've received your request and will confirm shortly by phone.",
                "Recebemos o seu pedido e vamos confirmar em breve por telefone."
              )}
            </p>
            <button type="button" className="m-cta" onClick={onClose}>
              {t("Done", "Concluído")}
            </button>
          </div>
        ) : (
          <form action={formAction}>
            <h2>{t("Book a table", "Reservar mesa")}</h2>
            <p className="sub">
              {t("We'll hold your table for 15 minutes.", "Guardamos a sua mesa por 15 minutos.")}
            </p>

            <div className="m-field">
              <label>{t("Guests", "Pessoas")}</label>
              <div className="stepper">
                <button
                  type="button"
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  aria-label={t("Fewer guests", "Menos pessoas")}
                >
                  −
                </button>
                <span className="val">{guests}</span>
                <button
                  type="button"
                  onClick={() => setGuests((g) => Math.min(12, g + 1))}
                  aria-label={t("More guests", "Mais pessoas")}
                >
                  +
                </button>
              </div>
              <input type="hidden" name="guests" value={guests} />
            </div>

            <div className="m-two">
              <div className="m-field">
                <label>{t("Date", "Data")}</label>
                <input type="date" name="date" required />
              </div>
              <div className="m-field">
                <label>{t("Time", "Hora")}</label>
                <input type="time" name="time" required defaultValue="19:30" />
              </div>
            </div>

            <div className="m-field">
              <label>{t("Seating", "Lugar")}</label>
              <div className="seg">
                {SEATING_OPTIONS.map((opt, i) => (
                  <button
                    type="button"
                    key={opt.en}
                    className={i === seatingIndex ? "on" : ""}
                    onClick={() => setSeatingIndex(i)}
                  >
                    {t(opt.en, opt.pt)}
                  </button>
                ))}
              </div>
              <input type="hidden" name="seating" value={seatingValue} />
            </div>

            <div className="m-two">
              <div className="m-field">
                <label>{t("Name", "Nome")}</label>
                <input type="text" name="name" required placeholder={t("Your name", "O seu nome")} />
              </div>
              <div className="m-field">
                <label>{t("Phone", "Telefone")}</label>
                <input type="tel" name="phone" required placeholder="+351 ..." />
              </div>
            </div>

            <ConfirmButton />
            {state.status === "error" && <p className="m-err">{state.message}</p>}
          </form>
        )}
      </div>
    </>
  );
}
