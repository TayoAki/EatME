import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import * as schema from './schema';

/**
 * Drizzle client for Neon Postgres over HTTP — works in Expo API routes (Node, EAS Hosting)
 * and in Trigger.dev tasks. Server only: never import this from a screen.
 */
function createDb() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL is not set. Add your Neon connection string to .env.');
  return drizzle(neon(url), { schema, casing: 'snake_case' });
}

type Database = ReturnType<typeof createDb>;
let instance: Database | undefined;

/**
 * Created on first use, so importing this module never throws — a route can still answer 401
 * before touching the database, and a missing DATABASE_URL surfaces as a handled error.
 */
export const db = new Proxy({} as Database, {
  get(_target, property) {
    instance ??= createDb();
    const value = Reflect.get(instance, property, instance);
    return typeof value === 'function' ? value.bind(instance) : value;
  },
});

export { schema };
