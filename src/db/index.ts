import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

type Db = NeonHttpDatabase<typeof schema>;

let instance: Db | null = null;

function getInstance(): Db {
  if (!instance) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not set. Add it to .env.local (see .env.example).");
    }
    const sql = neon(process.env.DATABASE_URL);
    instance = drizzle(sql, { schema });
  }
  return instance;
}

// Lazily connects on first query instead of at import time, so modules that
// import `db` but don't always use it (e.g. admin actions like login) don't
// crash before DATABASE_URL is configured.
export const db: Db = new Proxy({} as Db, {
  get(_target, prop, receiver) {
    return Reflect.get(getInstance() as object, prop, receiver);
  },
});
