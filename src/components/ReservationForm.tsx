"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useT } from "@/lib/lang-context";
import { createReservation, type ReservationState } from "@/actions/reservation";

const initialState: ReservationState = { status: "idle" };

function SubmitButton() {
  const t = useT();
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary"
      style={{ width: "100%", justifyContent: "center", padding: 15 }}
      disabled={pending}
    >
      {pending ? t("Sending…", "A enviar…") : t("Request reservation", "Pedir reserva")}
    </button>
  );
}

export default function ReservationForm() {
  const t = useT();
  const [state, formAction] = useActionState(createReservation, initialState);

  return (
    <form className="book" action={formAction}>
      <div className="two">
        <div className="field">
          <label>{t("Name", "Nome")}</label>
          <input type="text" name="name" required placeholder={t("Your name", "O seu nome")} />
        </div>
        <div className="field">
          <label>{t("Phone", "Telefone")}</label>
          <input type="tel" name="phone" required placeholder="+351 ..." />
        </div>
      </div>
      <div className="two">
        <div className="field">
          <label>{t("Date", "Data")}</label>
          <input type="date" name="date" required />
        </div>
        <div className="field">
          <label>{t("Time", "Hora")}</label>
          <input type="time" name="time" required defaultValue="19:30" />
        </div>
      </div>
      <div className="two">
        <div className="field">
          <label>{t("Guests", "Pessoas")}</label>
          <select name="guests" defaultValue="2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option value="7">{t("7+", "7+")}</option>
          </select>
        </div>
        <div className="field">
          <label>{t("Seating", "Lugar")}</label>
          <select name="seating" defaultValue={t("Indoor", "Interior")}>
            <option>{t("Indoor", "Interior")}</option>
            <option>{t("Terrace", "Esplanada")}</option>
            <option>{t("No preference", "Sem preferência")}</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label>{t("Notes (allergies, occasion…)", "Notas (alergias, ocasião…)")}</label>
        <textarea name="notes" placeholder={t("Anything we should know?", "Algo que devamos saber?")} />
      </div>
      <SubmitButton />
      {state.status === "success" && (
        <div className="ok show">
          {t(
            "✓ Thanks! We've received your request and will confirm shortly by phone.",
            "✓ Obrigado! Recebemos o seu pedido e vamos confirmar em breve por telefone."
          )}
        </div>
      )}
      {state.status === "error" && (
        <div className="err">{state.message}</div>
      )}
    </form>
  );
}
