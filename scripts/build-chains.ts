/**
 * Checks the chain menus in data/chains/menus/*.csv (one file per chain, from the chain's own nutrition
 * guide, see data/chains/README.md) and builds data/chains.json for the server.
 * Usage: npm run chains:build              (check and write)
 *        npm run chains:build -- --check   (check only, writes nothing)
 * Errors stop the build; warnings are listed for a person to look at; `pending` lines (the two drafts
 * disagreed) are left out until a person checks them. The server loads the file into the
 * `chain_items` table when it starts (server/chains.mjs).
 */
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import {
  CHAIN_CSV_COLUMNS,
  chainCsvRowSchema,
  chainItemNutrients,
  chainSlug,
  checkChainItem,
  type ChainItemsFile,
} from '../src/shared/chains';
import { parseCsv } from './csv';

const DIR = path.join(__dirname, '..', 'data', 'chains', 'menus');
const OUT = path.join(__dirname, '..', 'data', 'chains.json');
const CHECK_COLUMN = CHAIN_CSV_COLUMNS.indexOf('check');

const checkOnly = process.argv.includes('--check');
const today = new Date().toISOString().slice(0, 10);
const files = readdirSync(DIR)
  .filter((name) => name.endsWith('.csv') && !name.startsWith('_'))
  .sort();

const items: ChainItemsFile['items'] = [];
const seen = new Map<string, string>();
let errorCount = 0;
let warningCount = 0;
let pendingCount = 0;

for (const file of files) {
  const [header, ...lines] = parseCsv(readFileSync(path.join(DIR, file), 'utf8'));
  if (header?.join(',') !== CHAIN_CSV_COLUMNS.join(',')) {
    console.error(`${file}: the first line must be exactly:\n  ${CHAIN_CSV_COLUMNS.join(',')}`);
    errorCount++;
    continue;
  }
  const chains = new Set<string>();
  let fileItems = 0;
  lines.forEach((values, index) => {
    const where = `${file}:${index + 2}`;
    // The two drafts disagreed: a person fixes the numbers and sets check to "person".
    if (values[CHECK_COLUMN]?.trim() === 'pending') {
      pendingCount++;
      return;
    }
    const parsed = chainCsvRowSchema.safeParse(Object.fromEntries(CHAIN_CSV_COLUMNS.map((column, i) => [column, values[i] ?? ''])));
    if (!parsed.success) {
      for (const issue of parsed.error.issues) console.error(`${where} ${issue.path.join('.')}: ${issue.message}`);
      errorCount += parsed.error.issues.length;
      return;
    }
    const row = parsed.data;
    const { errors, warnings } = checkChainItem(row, today);
    for (const error of errors) console.error(`${where} ${row.name}: ${error}`);
    for (const warning of warnings) console.warn(`${where} ${row.name}: ${warning}`);
    errorCount += errors.length;
    warningCount += warnings.length;
    const slug = chainSlug(row.chain);
    const key = `${slug}|${row.name.toLowerCase()}|${row.serving.toLowerCase()}`;
    if (seen.has(key)) {
      console.error(`${where} ${row.name} (${row.serving}): already on ${seen.get(key)}`);
      errorCount++;
      return;
    }
    seen.set(key, where);
    chains.add(row.chain);
    if (errors.length > 0) return;
    fileItems++;
    items.push({
      chainSlug: slug,
      chain: row.chain,
      section: row.section,
      name: row.name,
      serving: row.serving,
      servingGrams: row.serving_g,
      kind: row.kind,
      calories: row.calories,
      nutrients: chainItemNutrients(row),
      transFatG: row.trans_fat_g,
      sourceUrl: row.source_url,
      checkedOn: row.checked_on,
    });
  });
  if (chains.size > 1) {
    console.error(`${file}: one chain per file (found ${[...chains].join(', ')})`);
    errorCount++;
  }
  console.log(`${file}: ${fileItems} item${fileItems === 1 ? '' : 's'}${chains.size === 1 ? ` (${[...chains][0]})` : ''}`);
}

const count = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`;
console.log(
  `${count(items.length, 'item')} from ${count(files.length, 'chain')}, ${count(errorCount, 'error')}, ` +
    `${count(warningCount, 'warning')}, ${count(pendingCount, 'pending line')} left out until a person checks them`,
);
if (errorCount > 0) {
  console.error('Fix the errors above; nothing was written.');
  process.exit(1);
}
if (!checkOnly) {
  const sorted = [...items].sort((a, b) => `${a.chainSlug}|${a.section}|${a.name}`.localeCompare(`${b.chainSlug}|${b.section}|${b.name}`));
  const version = `chains-${createHash('sha256').update(JSON.stringify(sorted)).digest('hex').slice(0, 12)}`;
  const file: ChainItemsFile = { version, items: sorted };
  writeFileSync(OUT, `${JSON.stringify(file)}\n`);
  console.log(`Wrote data/chains.json (${version}).`);
}
