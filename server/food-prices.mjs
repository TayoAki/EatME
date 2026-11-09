// Loads the food prices (data/food-prices.json, built by `npm run prices:build`) into the `food_prices` table for
// Plan tomorrow's meal costs. Runs when the server starts, after the foods, and only writes when the table doesn't
// hold this version yet. By hand: `npm run db:prices` (uses DATABASE_URL).
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import pg from 'pg';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FILE = path.join(root, 'data', 'food-prices.json');
const BATCH = 1000;

export async function loadFoodPrices(pool) {
  if (!existsSync(FILE)) return { version: null, count: 0, loaded: false };
  const data = JSON.parse(await readFile(FILE, 'utf8'));
  // Only foods the database holds (the file is built from the same FNDDS release).
  const { rows: known } = await pool.query('select id from foods');
  const ids = new Set(known.map((row) => row.id));
  const prices = data.prices.filter(([id]) => ids.has(id));
  const { rows } = await pool.query('select count(*)::int as n from food_prices where version = $1', [data.version]);
  if (rows[0].n === prices.length) return { version: data.version, count: rows[0].n, loaded: false };

  const client = await pool.connect();
  try {
    await client.query('begin');
    await client.query('delete from food_prices');
    for (let start = 0; start < prices.length; start += BATCH) {
      const params = [];
      const tuples = prices.slice(start, start + BATCH).map(([id, cents, basis]) => {
        params.push(id, cents, basis, data.version);
        const n = params.length;
        return `($${n - 3}, $${n - 2}, $${n - 1}, $${n})`;
      });
      await client.query(`insert into food_prices (food_id, cents_per100g, basis, version) values ${tuples.join(', ')}`, params);
    }
    await client.query('commit');
  } catch (error) {
    await client.query('rollback');
    throw error;
  } finally {
    client.release();
  }
  return { version: data.version, count: prices.length, loaded: true };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  if (!process.env.DATABASE_URL) throw new Error('Set DATABASE_URL first.');
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, max: 2 });
  try {
    const result = await loadFoodPrices(pool);
    console.log(result.loaded ? `Loaded ${result.count} food prices (${result.version})` : `Food prices are up to date (${result.version})`);
  } finally {
    await pool.end();
  }
}
