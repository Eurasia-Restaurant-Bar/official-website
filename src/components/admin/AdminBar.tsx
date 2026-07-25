import Link from "next/link";
import { logoutAdmin } from "@/actions/admin";

export default function AdminBar() {
  return (
    <header className="admin-bar">
      <div className="wrap">
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, color: "#fff" }}>
          Eurasia Admin
        </span>
        <nav>
          <Link href="/admin">Reservations</Link>
          <Link href="/admin/menu">Menu</Link>
        </nav>
        <form action={logoutAdmin} style={{ marginLeft: 16 }}>
          <button type="submit" className="btn btn-outline-light btn-sm">
            Log out
          </button>
        </form>
      </div>
    </header>
  );
}
