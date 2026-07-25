import crypto from "crypto";

export const ADMIN_SESSION_COOKIE = "eurasia_admin_session";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 7; // 7 days
export const ADMIN_SESSION_MAX_AGE_SECONDS = SESSION_DURATION_MS / 1000;

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not set. Add it to .env.local.");
  return secret;
}

function sign(payload: string): string {
  return crypto.createHmac("sha256", getSecret()).update(payload).digest("hex");
}

function timingSafeEqualStr(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

export function checkAdminPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) throw new Error("ADMIN_PASSWORD is not set. Add it to .env.local.");
  return timingSafeEqualStr(password, expected);
}

export function createSessionValue(): string {
  const expires = Date.now() + SESSION_DURATION_MS;
  const payload = `admin.${expires}`;
  return `${payload}.${sign(payload)}`;
}

export function isValidSession(value: string | undefined | null): boolean {
  if (!value) return false;
  const parts = value.split(".");
  if (parts.length !== 3) return false;
  const [role, expiresStr, signature] = parts;
  const payload = `${role}.${expiresStr}`;
  if (!timingSafeEqualStr(signature, sign(payload))) return false;
  const expires = Number(expiresStr);
  if (!Number.isFinite(expires) || Date.now() > expires) return false;
  return role === "admin";
}
