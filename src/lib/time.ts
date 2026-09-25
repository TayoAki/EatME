import { getCalendars } from 'expo-localization';

/** IANA time zone of the device, e.g. "Asia/Makassar". */
export function deviceTimeZone() {
  return getCalendars()[0]?.timeZone ?? Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'UTC';
}

const pad = (n: number) => String(n).padStart(2, '0');

/** YYYY-MM-DD in the device's local time. */
export function toIsoDate(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function fromIsoDate(isoDate: string) {
  const [y, m, d] = isoDate.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

export const todayIso = () => toIsoDate(new Date());

export function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}

export function formatDay(isoDate: string) {
  if (isoDate === todayIso()) return 'Today';
  if (isoDate === toIsoDate(addDays(new Date(), -1))) return 'Yesterday';
  return fromIsoDate(isoDate).toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' });
}

/** "Today", "Yesterday" or a short "Tue 23" (day chips). */
export function formatShortDay(isoDate: string) {
  if (isoDate === todayIso()) return 'Today';
  if (isoDate === toIsoDate(addDays(new Date(), -1))) return 'Yesterday';
  const date = fromIsoDate(isoDate);
  return `${date.toLocaleDateString([], { weekday: 'short' })} ${date.getDate()}`;
}

/** The last `count` days, today first, as YYYY-MM-DD. */
export function recentDays(count: number) {
  const today = new Date();
  return Array.from({ length: count }, (_, i) => toIsoDate(addDays(today, -i)));
}

export function formatLongDate(date: Date) {
  return date.toLocaleDateString([], { month: 'long', day: 'numeric', year: 'numeric' });
}
