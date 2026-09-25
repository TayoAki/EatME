import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import * as schema from './schema';

/**
 * Drizzle client for Postgres (Railway). Server only: never import this from a screen.
 * For a database outside Railway's private network (e.g. from your laptop) use the public URL and
 * append `?sslmode=no-verify` to encrypt the connection.
 */
function createDb() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error('DATABASE_URL is not set. Add your Postgres connection string to .env.');
  const pool = new Pool({ connectionString, max: 20, idleTimeoutMillis: 30_000 });
  pool.on('error', (error) => console.error('[db] idle client error', error));
  return drizzle(pool, { schema, casing: 'snake_case' });
}

type Database = ReturnType<typeof createDb>;

/**
 * Every API route is bundled on its own, each with its own copy of this module. Keeping the client
 * on `globalThis` gives the whole server process one pool (instead of one pool per route, which
 * would run Postgres out of connections), and survives reloads in development.
 */
const shared = globalThis as typeof globalThis & { __eatmeDb?: Database };

/**
 * Created on first use, so importing this module never throws — a route can still answer 401
 * before touching the database, and a missing DATABASE_URL surfaces as a handled error.
 */
export const db = new Proxy({} as Database, {
  get(_target, property) {
    const instance = (shared.__eatmeDb ??= createDb());
    const value = Reflect.get(instance, property, instance);
    return typeof value === 'function' ? value.bind(instance) : value;
  },
});

export { schema };
