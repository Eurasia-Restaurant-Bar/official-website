import { desc } from "drizzle-orm";
import { db } from "@/db";
import { reservations } from "@/db/schema";
import AdminBar from "@/components/admin/AdminBar";
import ReservationStatusForm from "@/components/admin/ReservationStatusForm";

// Admin-only, always shows live data — never statically cache this page.
export const dynamic = "force-dynamic";

type ReservationRow = {
  id: number;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seating: string;
  notes: string;
  status: string;
};

async function getReservations(): Promise<{ rows: ReservationRow[]; error: string | null }> {
  try {
    const rows = await db.select().from(reservations).orderBy(desc(reservations.createdAt));
    return { rows, error: null };
  } catch (err) {
    return { rows: [], error: err instanceof Error ? err.message : String(err) };
  }
}

export default async function AdminHome() {
  const { rows, error } = await getReservations();

  return (
    <>
      <AdminBar />
      <main className="admin-main">
        <div className="wrap">
          <h2 style={{ marginBottom: 24 }}>Reservations</h2>

          {error && (
            <div className="admin-card">
              <p>
                Database not connected yet. Add <code>DATABASE_URL</code> to <code>.env.local</code> (see{" "}
                <code>.env.example</code>) to start receiving reservation requests.
              </p>
            </div>
          )}

          {!error && rows.length === 0 && (
            <div className="admin-card">
              <p>No reservation requests yet.</p>
            </div>
          )}

          {!error && rows.length > 0 && (
            <div className="admin-card">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Guests</th>
                    <th>Seating</th>
                    <th>Notes</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id}>
                      <td>{r.name}</td>
                      <td>{r.phone}</td>
                      <td>{r.date}</td>
                      <td>{r.time}</td>
                      <td>{r.guests}</td>
                      <td>{r.seating}</td>
                      <td>{r.notes || "—"}</td>
                      <td>
                        <ReservationStatusForm id={r.id} status={r.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
