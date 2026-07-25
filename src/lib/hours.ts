import { useSyncExternalStore } from "react";

export type HoursRow = { dayIndex: number; en: string; pt: string; hours: string };

export const HOURS: HoursRow[] = [
  { dayIndex: 1, en: "Monday", pt: "Segunda", hours: "11:30 – 02:00" },
  { dayIndex: 2, en: "Tuesday", pt: "Terça", hours: "11:30 – 23:00" },
  { dayIndex: 3, en: "Wednesday", pt: "Quarta", hours: "11:30 – 02:00" },
  { dayIndex: 4, en: "Thursday", pt: "Quinta", hours: "11:30 – 02:00" },
  { dayIndex: 5, en: "Friday", pt: "Sexta", hours: "11:30 – 02:00" },
  { dayIndex: 6, en: "Saturday", pt: "Sábado", hours: "11:30 – 02:00" },
  { dayIndex: 0, en: "Sunday", pt: "Domingo", hours: "11:30 – 02:00" },
];

function toMinutes(t: string): number {
  const [h, m] = t.trim().split(":").map(Number);
  return h * 60 + m;
}

function splitRange(hours: string): [string, string] {
  const [start, end] = hours.split("–").map((s) => s.trim());
  return [start, end];
}

export type OpenStatus =
  | { open: true; closesAt: string }
  | { open: false; opensAt: string; opensToday: boolean };

export function getOpenStatus(now: Date): OpenStatus {
  const day = now.getDay();
  const minutesNow = now.getHours() * 60 + now.getMinutes();

  const today = HOURS.find((r) => r.dayIndex === day)!;
  const [todayStart, todayEnd] = splitRange(today.hours);
  const startMin = toMinutes(todayStart);
  const endMin = toMinutes(todayEnd);
  const wraps = endMin <= startMin;

  const withinToday = wraps
    ? minutesNow >= startMin || minutesNow < endMin
    : minutesNow >= startMin && minutesNow < endMin;

  if (withinToday) return { open: true, closesAt: todayEnd };

  // Still inside yesterday's overnight window (e.g. it's 1am, yesterday ran past midnight)
  const yesterday = HOURS.find((r) => r.dayIndex === (day + 6) % 7)!;
  const [, yesterdayEnd] = splitRange(yesterday.hours);
  const yEndMin = toMinutes(yesterdayEnd);
  const yStartMin = toMinutes(splitRange(yesterday.hours)[0]);
  if (yEndMin <= yStartMin && minutesNow < yEndMin) {
    return { open: true, closesAt: yesterdayEnd };
  }

  if (minutesNow < startMin) {
    return { open: false, opensAt: todayStart, opensToday: true };
  }

  const tomorrow = HOURS.find((r) => r.dayIndex === (day + 1) % 7)!;
  const [tomorrowStart] = splitRange(tomorrow.hours);
  return { open: false, opensAt: tomorrowStart, opensToday: false };
}

function subscribeNever() {
  return () => {};
}

function getServerDay() {
  return -1; // no day matches server-render; client hydrates with the real value
}

/** Client-only "today" day index (0-6). Returns -1 during SSR/hydration so nothing is highlighted until the client takes over. */
export function useToday(): number {
  return useSyncExternalStore(subscribeNever, () => new Date().getDay(), getServerDay);
}

function getServerOpenStatus(): OpenStatus | null {
  return null; // unknown until the client can read the real clock
}

// getOpenStatus() builds a fresh object every call, but useSyncExternalStore requires
// getSnapshot to return a referentially stable value when nothing has actually changed
// (otherwise it treats every render as a store change and loops). Cache by the minute —
// status only needs minute-level granularity anyway.
let cachedMinuteKey = -1;
let cachedStatus: OpenStatus | null = null;

function getCachedOpenStatus(): OpenStatus {
  const now = new Date();
  const minuteKey = Math.floor(now.getTime() / 60000);
  if (minuteKey !== cachedMinuteKey || cachedStatus === null) {
    cachedMinuteKey = minuteKey;
    cachedStatus = getOpenStatus(now);
  }
  return cachedStatus;
}

/** Client-only live open/closed status. Returns null during SSR/hydration. */
export function useOpenStatus(): OpenStatus | null {
  return useSyncExternalStore(subscribeNever, getCachedOpenStatus, getServerOpenStatus);
}
