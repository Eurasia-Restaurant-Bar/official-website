"use client";

import { updateReservationStatus } from "@/actions/admin";

export default function ReservationStatusForm({ id, status }: { id: number; status: string }) {
  return (
    <form
      action={updateReservationStatus}
      style={{ display: "flex", gap: 8, alignItems: "center" }}
    >
      <input type="hidden" name="id" value={id} />
      <span className={`badge badge-${status}`}>{status}</span>
      <select
        name="status"
        defaultValue={status}
        className="admin-field"
        style={{ width: "auto" }}
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
      >
        <option value="pending">pending</option>
        <option value="confirmed">confirmed</option>
        <option value="declined">declined</option>
      </select>
    </form>
  );
}
