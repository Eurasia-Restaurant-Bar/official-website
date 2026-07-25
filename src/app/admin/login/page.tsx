"use client";

import { useActionState } from "react";
import { loginAdmin, type LoginState } from "@/actions/admin";

const initialState: LoginState = { status: "idle" };

export default function LoginPage() {
  const [state, formAction] = useActionState(loginAdmin, initialState);

  return (
    <div className="login-card">
      <h2 style={{ marginBottom: 20 }}>Admin Login</h2>
      <form action={formAction} className="book">
        <div className="field">
          <label>Password</label>
          <input type="password" name="password" required autoFocus />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%", justifyContent: "center", padding: 15 }}
        >
          Log in
        </button>
        {state.status === "error" && (
          <div className="err" style={{ marginTop: 12 }}>
            {state.message}
          </div>
        )}
      </form>
    </div>
  );
}
