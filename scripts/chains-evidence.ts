/**
 * What to order: help for the person who checks the review lists (`data/chains/review/<chain>.md`).
 * For every line the two drafts disagreed on, it looks for the item's name in the guide text the drafts
 * were read from (the local cache, `data/chains/.cache`, which `npm run chains:draft` fills) and checks
 * whether each draft's numbers sit right after it: on the same table row, or in the next few dozen
 * numbers when the guide spreads them out. No AI, and nothing is accepted on its own: the person still
 * fixes the CSV and sets `check` to `person`. The result is a column in each review list.
 *
 *   npm run chains:evidence                       every chain with a review list
 *   npm run chains:evidence -- --chains subway    some of them (slugs, comma-separated)
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.join(__dirname, '..', 'data', 'chains');
const REVIEW = path.join(ROOT, 'review');
const CACHE = path.join(ROOT, '.cache');
const COLUMN = 'In the guide text (no AI)';
const NOTE =
  "The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a \"6 pack\"): check those against the guide, then fix the line and set its check to `person`.";
/** Numbers looked at after a name that sits alone on its line (guides that spread an item over many lines). */
const SPREAD_WINDOW = 40;

type Found = { status: 'match' | 'partial' | 'no-name'; line?: number; missing?: number[] };

/** The guide as the drafts read it: one file, or one file per item page. Null when it isn't cached here. */
function guideText(slug: string): string | null {
  const file = path.join(CACHE, `${slug}.md`);
  if (existsSync(file)) return readFileSync(file, 'utf8');
  const dir = path.join(CACHE, slug);
  if (!existsSync(dir)) return null;
  return readdirSync(dir)
    .filter((name) => name.endsWith('.md'))
    .sort()
    .map((name) => readFileSync(path.join(dir, name), 'utf8'))
    .join('\n');
}

const ENTITIES: Record<string, string> = { amp: '&', quot: '"', apos: "'", '#39': "'", nbsp: ' ', reg: '', trade: '' };

const normalize = (text: string) =>
  text
    .replace(/&(amp|quot|apos|#39|nbsp|reg|trade);/g, (_, name: string) => ENTITIES[name])
    .toLowerCase()
    .replace(/[®™*†‡§]/g, '')
    .replace(/[’‘`]/g, "'")
    .replace(/[–—]/g, '-')
    .replace(/\s+/g, ' ')
    .trim();

/** The numbers in a piece of guide text, in order. "<1" is written 0.5 in our CSVs (half the bound). */
function numbersIn(text: string): number[] {
  const out: number[] = [];
  for (const match of text.matchAll(/(<\s*)?(\d+(?:\.\d+)?)/g)) {
    const value = Number(match[2]);
    out.push(match[1] ? value / 2 : value);
  }
  return out;
}

/** Whether every expected number is among `window` (each one used once). */
function missingFrom(window: readonly number[], expected: readonly number[]) {
  const left = [...window];
  const missing: number[] = [];
  for (const value of expected) {
    const i = left.findIndex((n) => Math.abs(n - value) < 1e-9);
    if (i >= 0) left.splice(i, 1);
    else missing.push(value);
  }
  return missing;
}

/**
 * Looks for `name` in the guide's lines; at each place, the numbers after it on that line (a table row)
 * or, when the line has few, the next `SPREAD_WINDOW` numbers. The best place wins.
 */
function findInGuide(lines: readonly string[], name: string, expected: readonly number[]): Found {
  const names = [normalize(name), normalize(name.replace(/\s*\([^)]*\)\s*/g, ' '))].filter((n, i, all) => n.length >= 3 && all.indexOf(n) === i);
  let best: Found = { status: 'no-name' };
  for (const wanted of names) {
    for (let i = 0; i < lines.length; i++) {
      const at = lines[i].indexOf(wanted);
      if (at < 0) continue;
      const rest = numbersIn(lines[i].slice(at + wanted.length));
      let window = rest;
      if (rest.length < 5) {
        window = [...rest];
        for (let j = i + 1; j < lines.length && window.length < SPREAD_WINDOW; j++) window.push(...numbersIn(lines[j]));
        window = window.slice(0, SPREAD_WINDOW);
      }
      const missing = missingFrom(window, expected);
      if (missing.length === 0) return { status: 'match', line: i + 1 };
      if (best.status === 'no-name' || (best.missing && missing.length < best.missing.length)) best = { status: 'partial', line: i + 1, missing };
    }
    if (best.status !== 'no-name') break;
  }
  return best;
}

/** "250 / 11 / 2.5 / – / …" → the numbers a draft read (skipping the ones it couldn't), or null for "not found". */
function draftNumbers(cell: string): number[] | null {
  if (/not found/i.test(cell)) return null;
  return cell
    .split('/')
    .map((part) => part.trim())
    .filter((part) => part && part !== '–' && part !== '-')
    .map(Number)
    .filter((n) => Number.isFinite(n));
}

/** The serving's grams ("Medium (125g)", "215g") must be near the numbers too, when the guide prints them. */
const servingGrams = (size: string) => {
  const match = size.match(/(\d+(?:\.\d+)?)\s*g\b/i);
  return match ? [Number(match[1])] : [];
};

function describe(label: string, found: Found) {
  if (found.status === 'match') return `${label}: numbers found after the name (line ${found.line}); check the size`;
  if (found.status === 'partial') return `${label}: not as drafted (line ${found.line} lacks ${found.missing!.join(', ')})`;
  return `${label}: name not in the guide text`;
}

function evidenceFor(lines: readonly string[], name: string, size: string, a: string, b: string) {
  const drafts = [
    ['A', draftNumbers(a)],
    ['B', draftNumbers(b)],
  ] as const;
  const results = drafts.flatMap(([label, numbers]) => {
    if (!numbers || numbers.length === 0) return [];
    // With grams first; a guide that doesn't print the grams still gets a fair check without them.
    let found = findInGuide(lines, name, [...servingGrams(size), ...numbers]);
    if (found.status !== 'match' && servingGrams(size).length) {
      const withoutGrams = findInGuide(lines, name, numbers);
      if (withoutGrams.status === 'match') found = withoutGrams;
    }
    // Mostly zeros (water, unsweet tea) match almost anywhere: say so.
    const weak = found.status === 'match' && numbers.filter((n) => n > 0).length < 3;
    return [{ label, found, weak }];
  });
  if (results.length === 0) return 'no numbers to look for';
  return results.map((r) => `${describe(r.label, r.found)}${r.weak ? ', mostly zeros: look' : ''}`).join('; ');
}

function main() {
  const only = process.argv.includes('--chains') ? process.argv[process.argv.indexOf('--chains') + 1]?.split(',') : null;
  const files = readdirSync(REVIEW).filter((name) => name.endsWith('.md') && (!only || only.includes(name.slice(0, -3))));
  let rows = 0;
  let matched = 0;
  for (const file of files) {
    const slug = file.slice(0, -3);
    const guide = guideText(slug);
    if (!guide) {
      console.warn(`${slug}: no cached guide text here (run npm run chains:draft for it first)`);
      continue;
    }
    const guideLines = guide.split('\n').map(normalize);
    const review = readFileSync(path.join(REVIEW, file), 'utf8').split('\n');
    const start = review.findIndex((line) => line.startsWith('## Disagreements'));
    if (start < 0) continue;
    // Say once, above the table, what the new column means and what it can't see.
    if (!review.some((line) => line.startsWith(NOTE.slice(0, 40)))) review.splice(start + 2, 0, NOTE, '');
    let chainMatched = 0;
    let chainRows = 0;
    for (let i = start + 1; i < review.length && !review[i].startsWith('## '); i++) {
      const line = review[i];
      if (!line.startsWith('| ')) continue;
      const cells = line.split(' | ').map((cell) => cell.replace(/^\| ?/, '').replace(/ ?\|$/, ''));
      if (cells[0] === 'Item') {
        review[i] = `| Item | Size | Why | Draft A | Draft B | ${COLUMN} |`;
        continue;
      }
      if (cells[0].startsWith('---')) {
        review[i] = '| --- | --- | --- | --- | --- | --- |';
        continue;
      }
      const [name, size, why, a, b] = cells;
      const evidence = evidenceFor(guideLines, name, size, a, b);
      review[i] = `| ${name} | ${size} | ${why} | ${a} | ${b} | ${evidence} |`;
      chainRows++;
      if (/numbers found after the name/.test(evidence) && !/mostly zeros/.test(evidence)) chainMatched++;
    }
    writeFileSync(path.join(REVIEW, file), review.join('\n'));
    console.log(`${slug}: ${chainMatched} of ${chainRows} lines found in the guide as a draft read them`);
    rows += chainRows;
    matched += chainMatched;
  }
  console.log(`\n${matched} of ${rows} lines found as drafted; the person still checks each one and sets check to person.`);
}

main();
