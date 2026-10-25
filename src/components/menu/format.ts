import { fromIsoDate } from '@/lib/time';
import type { MenuRow } from '@/shared/menus';

/** "640 kcal", or "540–760 kcal" for an estimate (its range, never one falsely exact number). */
export function caloriesText(row: Pick<MenuRow, 'calories' | 'range'>) {
  return row.range ? `${row.range.low.toLocaleString()}–${row.range.high.toLocaleString()} kcal` : `${row.calories.toLocaleString()} kcal`;
}

/** Where a row's numbers come from: the chain's own information, or an estimate. */
export function sourceText(row: Pick<MenuRow, 'source' | 'citation'>) {
  if (row.citation) return `From ${row.citation.chain}`;
  return row.source === 'quick' ? 'Quick estimate' : 'Estimate';
}

/** The day a chain's numbers were checked, in the reader's own date format ("Oct 22, 2026"). */
export function checkedText(isoDate: string) {
  return fromIsoDate(isoDate).toLocaleDateString([], { day: 'numeric', month: 'short', year: 'numeric' });
}

/** "McDonald's guide", "Starbucks' guide", "Chick-fil-A's guide": a chain's name as the owner of something. */
export function possessive(name: string) {
  if (/['’]s$/i.test(name)) return name;
  if (/['’]$/.test(name)) return `${name}s`;
  return /s$/i.test(name) ? `${name}'` : `${name}'s`;
}
