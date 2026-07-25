import { Resend } from "resend";

let client: Resend | null = null;

function getClient(): Resend | null {
  if (!process.env.RESEND_API_KEY) return null;
  if (!client) client = new Resend(process.env.RESEND_API_KEY);
  return client;
}

export async function sendReservationNotification(reservation: {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seating: string;
  notes: string;
}) {
  const resend = getClient();
  const to = process.env.RESTAURANT_NOTIFY_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!resend || !to) {
    console.warn(
      "Resend not configured (RESEND_API_KEY / RESTAURANT_NOTIFY_EMAIL missing) — skipping reservation email."
    );
    return;
  }

  await resend.emails.send({
    from,
    to,
    subject: `New reservation request — ${reservation.name} (${reservation.date} ${reservation.time})`,
    text: [
      `Name: ${reservation.name}`,
      `Phone: ${reservation.phone}`,
      `Date: ${reservation.date}`,
      `Time: ${reservation.time}`,
      `Guests: ${reservation.guests}`,
      `Seating: ${reservation.seating}`,
      `Notes: ${reservation.notes || "—"}`,
    ].join("\n"),
  });
}
