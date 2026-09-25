import { inArray, sql } from 'drizzle-orm';

import { db } from '@/db';
import { foods, type FoodRow } from '@/db/schema';

/** Words that don't help find a food ("NS" and "NFS" mean "not specified" in FNDDS). */
const STOP_WORDS = new Set(['and', 'or', 'with', 'of', 'the', 'a', 'an', 'in', 'on', 'for', 'to', 'ns', 'nfs', 'as', 'from']);

/** Search words for Postgres full-text search: letters only, no stop words, at most 8. */
export function searchWords(text: string) {
  const words = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP_WORDS.has(w));
  return [...new Set(words)].slice(0, 8);
}

/**
 * Foods whose description shares words with `text`, best first: descriptions with every word
 * first, then by rank (shorter descriptions win ties). `prefix` makes the last word a prefix
 * (search as you type).
 */
export async function searchFoods(text: string, limit = 8, { prefix = false } = {}): Promise<FoodRow[]> {
  const words = searchWords(text);
  if (words.length === 0) return [];
  const terms = words.map((w, i) => (prefix && i === words.length - 1 ? `${w}:*` : w));
  const vector = sql`to_tsvector('english', ${foods.description})`;
  const any = sql`to_tsquery('english', ${terms.join(' | ')})`;
  const every = sql`to_tsquery('english', ${terms.join(' & ')})`;
  return db
    .select()
    .from(foods)
    .where(sql`${vector} @@ ${any}`)
    .orderBy(sql`(${vector} @@ ${every}) desc`, sql`ts_rank(${vector}, ${any}, 1) desc`, foods.description)
    .limit(limit);
}

export async function foodsByIds(ids: readonly number[]) {
  if (ids.length === 0) return new Map<number, FoodRow>();
  const rows = await db.select().from(foods).where(inArray(foods.id, [...ids]));
  return new Map(rows.map((row) => [row.id, row]));
}

let available: { value: boolean; checkedAt: number } | null = null;

/** Whether the food database is loaded (checked at most once a minute). */
export async function foodsAvailable() {
  if (available && Date.now() - available.checkedAt < 60_000) return available.value;
  const result = await db.execute<{ found: boolean }>(sql`select exists (select 1 from ${foods}) as found`);
  available = { value: !!result.rows[0]?.found, checkedAt: Date.now() };
  return available.value;
}
