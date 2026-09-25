// Production server (Railway). Serves:
//   /api/*               the Expo Router API routes, exported by `npm run build:server` into dist/server
//   /, /privacy, /terms  the landing page and legal pages from legal/
// and brings the database schema up to date (drizzle/ migrations) before it starts listening.
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import pg from 'pg';

import { loadFoods } from './foods.mjs';

// expo-server's ESM build uses extensionless imports that Node cannot load; its CommonJS build works.
const { createRequestHandler } = createRequire(import.meta.url)('expo-server/adapter/http');

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const legalDir = path.join(root, 'legal');
const port = Number(process.env.PORT) || 3000;

async function runMigrations() {
  if (!process.env.DATABASE_URL) {
    console.warn('[server] DATABASE_URL is not set, skipping migrations');
    return;
  }
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  try {
    await migrate(drizzle(pool), { migrationsFolder: path.join(root, 'drizzle') });
    console.log('[server] database schema is up to date');
    // The food database (USDA FNDDS) for meal analysis; a failure only turns matching off.
    try {
      const foods = await loadFoods(pool);
      console.log(`[server] foods ${foods.loaded ? 'loaded' : 'up to date'}: ${foods.count} (${foods.version})`);
    } catch (error) {
      console.error('[server] could not load the food database', error);
    }
  } finally {
    await pool.end();
  }
}

const CONTENT_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};
const PAGES = { '/': 'index.html', '/privacy': 'privacy.html', '/terms': 'terms.html' };

async function sendFile(res, file, status, method) {
  const body = await readFile(path.join(legalDir, file));
  res.writeHead(status, {
    'Content-Type': CONTENT_TYPES[path.extname(file)] ?? 'application/octet-stream',
    'Cache-Control': file.endsWith('.html') ? 'no-cache' : 'public, max-age=86400',
    'X-Content-Type-Options': 'nosniff',
  });
  res.end(method === 'HEAD' ? undefined : body);
}

async function serveSite(req, res) {
  const { pathname } = new URL(req.url, 'http://localhost');

  // Old links like /privacy.html → /privacy
  if (pathname.endsWith('.html')) {
    const clean = pathname === '/index.html' ? '/' : pathname.slice(0, -'.html'.length);
    if (PAGES[clean]) {
      res.writeHead(301, { Location: clean });
      res.end();
      return;
    }
  }

  let file = PAGES[pathname];
  if (!file && (pathname === '/style.css' || /^\/images\/[\w.-]+$/.test(pathname))) file = pathname.slice(1);
  if (file) {
    try {
      await sendFile(res, file, 200, req.method);
      return;
    } catch {
      // Missing file: fall through to the 404 page.
    }
  }
  await sendFile(res, '404.html', 404, req.method);
}

const handleApi = createRequestHandler({ build: path.join(root, 'dist', 'server') });

await runMigrations();

createServer((req, res) => {
  const pathname = (req.url ?? '/').split('?')[0];

  if (pathname === '/api' || pathname.startsWith('/api/')) {
    handleApi(req, res, (error) => {
      if (error) console.error('[server] API error', error);
      if (res.headersSent) return;
      res.writeHead(error ? 500 : 404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: error ? 'Something went wrong. Please try again.' : 'Not found' }));
    });
    return;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    res.end();
    return;
  }
  serveSite(req, res).catch((error) => {
    console.error('[server] page error', error);
    if (!res.headersSent) res.writeHead(500);
    res.end();
  });
}).listen(port, () => console.log(`[server] EatME listening on port ${port}`));
