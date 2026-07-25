"use server";

import { db } from "@/db";
import { reservations } from "@/db/schema";
import { sendReservationNotification } from "@/lib/email";

export type ReservationState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function createReservation(
  _prevState: ReservationState,
  formData: FormData
): Promise<ReservationState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const time = String(formData.get("time") ?? "").trim();
  const guests = Number(formData.get("guests") ?? 2);
  const seating = String(formData.get("seating") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();

  if (!name || !phone || !date || !time) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  try {
    await db.insert(reservations).values({ name, phone, date, time, guests, seating, notes });
  } catch (err) {
    console.error("Failed to save reservation", err);
    return {
      status: "error",
      message: "Something went wrong saving your reservation. Please call us instead.",
    };
  }

  try {
    await sendReservationNotification({ name, phone, date, time, guests, seating, notes });
  } catch (err) {
    console.error("Failed to send reservation email", err);
  }

  return { status: "success" };
}
