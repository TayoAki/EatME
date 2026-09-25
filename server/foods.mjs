// Loads the USDA FNDDS foods (data/fndds.json.gz, built by `npm run foods:build`) into the `foods`
// table. Runs when the server starts and only writes when the table does not hold this version yet.
// By hand: `npm run db:foods` (uses DATABASE_URL).
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { gunzipSync } from 'node:zlib';

import pg from 'pg';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BATCH = 500;

export async function loadFoods(pool) {
  const data = JSON.parse(gunzipSync(await readFile(path.join(root, 'data', 'fndds.json.gz'))).toString('utf8'));
  const { rows } = await pool.query('select count(*)::int as n from foods where version = $1', [data.version]);
  if (rows[0].n === data.foods.length) return { version: data.version, count: rows[0].n, loaded: false };

  const client = await pool.connect();
  try {
    await client.query('begin');
    // Foods of an older dataset go; meals keep their numbers (meal_items.food_id becomes empty).
    await client.query('delete from foods where version <> $1', [data.version]);
    for (let start = 0; start < data.foods.length; start += BATCH) {
      const params = [];
      const tuples = data.foods.slice(start, start + BATCH).map(([id, code, description, category, values, portions]) => {
        const nutrients = {};
        values.forEach((value, i) => {
          if (value !== null) nutrients[data.keys[i]] = value;
        });
        params.push(id, code, description, category, JSON.stringify(nutrients), JSON.stringify(portions), data.version);
        const n = params.length;
        return `($${n - 6}, $${n - 5}, $${n - 4}, $${n - 3}, $${n - 2}::jsonb, $${n - 1}::jsonb, $${n})`;
      });
      await client.query(
        `insert into foods (id, code, description, category, nutrients, portions, version) values ${tuples.join(', ')}
         on conflict (id) do update set code = excluded.code, description = excluded.description,
           category = excluded.category, nutrients = excluded.nutrients, portions = excluded.portions,
           version = excluded.version`,
        params,
      );
    }
    await client.query('commit');
  } catch (error) {
    await client.query('rollback');
    throw error;
  } finally {
    client.release();
  }
  return { version: data.version, count: data.foods.length, loaded: true };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  if (!process.env.DATABASE_URL) throw new Error('Set DATABASE_URL first.');
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, max: 2 });
  try {
    const result = await loadFoods(pool);
    console.log(result.loaded ? `Loaded ${result.count} foods (${result.version})` : `Foods are up to date (${result.version})`);
  } finally {
    await pool.end();
  }
}
