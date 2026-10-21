// Loads the chain menus (data/chains.json, built from data/chains/*.csv by `npm run chains:build`) into
// the `chain_items` table for What to order. Runs when the server starts and only writes when the table
// doesn't hold this version yet. Items no longer in the file are retired, never deleted (logged meals
// may point at them). By hand: `npm run db:chains` (uses DATABASE_URL).
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import pg from 'pg';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILE = path.join(root, 'data', 'chains.json');
const BATCH = 200;
const COLUMNS = [
  'chain_slug',
  'chain',
  'section',
  'name',
  'serving',
  'serving_grams',
  'kind',
  'calories',
  'nutrients',
  'trans_fat_g',
  'source_url',
  'checked_on',
  'version',
];

export async function loadChainItems(pool) {
  if (!existsSync(FILE)) return { version: null, count: 0, loaded: false };
  const data = JSON.parse(await readFile(FILE, 'utf8'));
  const { rows } = await pool.query(
    `select count(*)::int as n from chain_items where version = $1 and status = 'live'`,
    [data.version],
  );
  if (rows[0].n === data.items.length) return { version: data.version, count: rows[0].n, loaded: false };

  const client = await pool.connect();
  try {
    await client.query('begin');
    for (let start = 0; start < data.items.length; start += BATCH) {
      const params = [];
      const tuples = data.items.slice(start, start + BATCH).map((item) => {
        params.push(
          item.chainSlug,
          item.chain,
          item.section,
          item.name,
          item.serving,
          item.servingGrams,
          item.kind,
          item.calories,
          JSON.stringify(item.nutrients),
          item.transFatG,
          item.sourceUrl,
          item.checkedOn,
          data.version,
        );
        const n = params.length - COLUMNS.length;
        return `(${COLUMNS.map((column, i) => `$${n + i + 1}${column === 'nutrients' ? '::jsonb' : ''}`).join(', ')}, 'live')`;
      });
      await client.query(
        `insert into chain_items (${COLUMNS.join(', ')}, status) values ${tuples.join(', ')}
         on conflict (chain_slug, name, serving) do update set chain = excluded.chain, section = excluded.section,
           serving_grams = excluded.serving_grams, kind = excluded.kind, calories = excluded.calories,
           nutrients = excluded.nutrients, trans_fat_g = excluded.trans_fat_g, source_url = excluded.source_url,
           checked_on = excluded.checked_on, version = excluded.version, status = 'live', updated_at = now()`,
        params,
      );
    }
    const retired = await client.query(
      `update chain_items set status = 'retired', updated_at = now() where version <> $1 and status = 'live'`,
      [data.version],
    );
    await client.query('commit');
    return { version: data.version, count: data.items.length, retired: retired.rowCount, loaded: true };
  } catch (error) {
    await client.query('rollback');
    throw error;
  } finally {
    client.release();
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  if (!process.env.DATABASE_URL) throw new Error('Set DATABASE_URL first.');
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, max: 2 });
  try {
    const result = await loadChainItems(pool);
    console.log(
      !result.version
        ? 'No data/chains.json yet: run npm run chains:build'
        : result.loaded
          ? `Loaded ${result.count} chain items (${result.version}), retired ${result.retired}`
          : `Chain items are up to date (${result.version})`,
    );
  } finally {
    await pool.end();
  }
}
