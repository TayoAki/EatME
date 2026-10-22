/**
 * Drafts chain menus for What to order (WHAT-TO-ORDER.md §7) from each chain's own nutrition guide.
 * Firecrawl finds and reads the guide (web page or PDF); two AI models from different makers copy it
 * into rows on their own; a line goes in as checked ("two-drafts") only when both drafts agree on every
 * number. Disagreements go in as "pending" (never loaded) and are listed with both versions in
 * data/chains/review/<chain>.md for a person, together with a sample of agreed lines to spot-check.
 * Only numbers are kept: no wording, photos or logos from the guides.
 *
 * Usage:
 *   npm run chains:draft -- --rank 1-10              chains by rank in data/chains/ranking.csv
 *   npm run chains:draft -- --chain "Chick-fil-A"    one chain (its name or slug)
 * Options: --url <guide url> (with --chain: read this guide and save it to ranking.csv),
 *          --refetch (read the guide again instead of the cached copy),
 *          --redo (draft chains that already have a menu file; lines a person checked are kept),
 *          --redraft (ask the models again even when a draft of the same guide and prompt is cached),
 *          --parallel <n> (chains at once, default 3).
 * Needs OPENROUTER_API_KEY, and FIRECRAWL_API_KEY to find and read guides (PDFs included); without
 * it, only web-page guides already set in ranking.csv can be read. CHAIN_DRAFT_MODELS overrides the two
 * models ("maker/model,maker/model"). Afterwards: npm run chains:build.
 */
import { config } from 'dotenv';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import OpenAI from 'openai';
import { z } from 'zod';

import { CHAIN_CSV_COLUMNS, chainSlug, type ChainCheck, type ChainItemKind } from '../src/shared/chains';
import { csvLine, parseCsv } from './csv';

config({ quiet: true });

const ROOT = path.join(__dirname, '..', 'data', 'chains');
const RANKING = path.join(ROOT, 'ranking.csv');
const MENUS = path.join(ROOT, 'menus');
const REVIEW = path.join(ROOT, 'review');
const CACHE = path.join(ROOT, '.cache');
/** Two makers, both cheap: about 5 US cents a chain for the pair (prices read 22 October 2026). */
const DEFAULT_MODELS = ['openai/gpt-5.6-luna', 'anthropic/claude-haiku-5.5'];
/** Chains worked on at once. */
const DEFAULT_PARALLEL = 3;
/** Guide text per AI call; longer guides are split at line breaks. */
const CHUNK_CHARS = 60_000;
/** Agreed lines a person spot-checks per chain: about 1 in 20, at least 3, at most 15. */
const SAMPLE = { every: 20, min: 3, max: 15 };
/** Words that don't tell one chain's website from another's. */
const GENERIC_WORDS = new Set(['and', 'the', 'bar', 'grill', 'restaurant', 'restaurants', 'cafe', 'kitchen', 'company', 'house', 'express', 'pizza', 'pizzeria', 'coffee', 'burger', 'burgers', 'chicken', 'steakhouse', 'subs', 'sandwich', 'shop', 'brewhouse', 'bakery', 'mexican', 'tacos', 'wings']);
/** Sites that copy chains' numbers: never a source (WHAT-TO-ORDER.md §7). */
const NOT_SOURCES = /nutritionix|fatsecret|fastfoodnutrition|menuwithprice|eatthismuch|myfooddiary|calorieking|nutritionvalue|myfitnesspal|fastfoodcalories|healthyfastfood|carbmanager|reddit|wikipedia|yelp|tripadvisor|doordash|ubereats|grubhub/i;

// ── Ranking file ────────────────────────────────────────────────────────────────────────────────

type RankedChain = { rank: number; chain: string; guideUrl: string; notes: string };

function readRanking(): RankedChain[] {
  const [, ...rows] = parseCsv(readFileSync(RANKING, 'utf8'));
  return rows.map(([rank, chain, guideUrl = '', notes = '']) => ({ rank: Number(rank), chain, guideUrl, notes }));
}

function writeRanking(chains: readonly RankedChain[]) {
  const lines = [csvLine(['rank', 'chain', 'guide_url', 'notes']), ...chains.map((c) => csvLine([c.rank, c.chain, c.guideUrl, c.notes]))];
  writeFileSync(RANKING, `${lines.join('\n')}\n`);
}

// ── Finding and reading the guide ───────────────────────────────────────────────────────────────

async function firecrawl<T>(endpoint: 'search' | 'scrape', body: object): Promise<T> {
  const key = process.env.FIRECRAWL_API_KEY;
  if (!key) throw new Error('Set FIRECRAWL_API_KEY to find and read guides (or set guide_url in ranking.csv).');
  for (let attempt = 1; ; attempt++) {
    const response = await fetch(`https://api.firecrawl.dev/v2/${endpoint}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (response.ok) return (await response.json()) as T;
    // Rate limited: wait as long as Firecrawl asks (up to 2 minutes), three times at most.
    if (response.status === 429 && attempt < 3) {
      const wait = Math.min(Number(response.headers.get('retry-after')) || 30 * attempt, 120);
      await new Promise((resolve) => setTimeout(resolve, wait * 1000));
      continue;
    }
    throw new Error(`Firecrawl ${endpoint}: ${response.status} ${(await response.text()).slice(0, 300)}`);
  }
}

/**
 * Many chains' nutrition pages are run by Nutritionix (its links all over the page). Nutritionix's terms
 * cover what it serves, so those chains need their own PDF instead (WHAT-TO-ORDER.md §7).
 */
const hostedByNutritionix = (text: string) => (text.match(/nutritionix\.com/gi) ?? []).length >= 3;

type SearchHit = { url: string; title?: string };

/** The chain's own nutrition page or PDF: a search, then the best hit that isn't a copy site. */
async function findGuide(chain: string): Promise<string | null> {
  const result = await firecrawl<{ data?: SearchHit[] | { web?: SearchHit[] } }>('search', {
    query: `${chain} official nutrition information calories pdf`,
    limit: 10,
  });
  const hits = Array.isArray(result.data) ? result.data : (result.data?.web ?? []);
  const words = chainSlug(chain)
    .split('-')
    .filter((word) => word.length > 2 && !GENERIC_WORDS.has(word));
  const scored = hits
    .filter((hit) => !NOT_SOURCES.test(hit.url))
    .map((hit) => {
      const url = hit.url.toLowerCase();
      const host = new URL(hit.url).hostname.replace(/^www\./, '');
      const ownSite = words.some((word) => host.replace(/[^a-z0-9]/g, '').includes(word.replace(/[^a-z0-9]/g, '')));
      const score = (ownSite ? 10 : 0) + (/nutrition|allergen/.test(url) ? 3 : 0) + (url.endsWith('.pdf') ? 2 : 0);
      return { url: hit.url, ownSite, score };
    })
    .filter((hit) => hit.ownSite)
    .sort((a, b) => b.score - a.score);
  return scored[0]?.url ?? null;
}

/** The guide as text (markdown), cached so a re-run doesn't fetch again. Images are never kept. */
async function readGuide(slug: string, url: string, refetch: boolean): Promise<{ text: string; readOn: string }> {
  const file = path.join(CACHE, `${slug}.md`);
  if (!refetch && existsSync(file)) {
    const [first, ...rest] = readFileSync(file, 'utf8').split('\n');
    const meta = /source: (\S+) \| read: (\S+)/.exec(first);
    if (meta?.[1] === url) return { text: rest.join('\n'), readOn: meta[2] };
  }
  let text: string;
  if (process.env.FIRECRAWL_API_KEY) {
    const result = await firecrawl<{ data?: { markdown?: string } }>('scrape', {
      url,
      formats: ['markdown'],
      onlyMainContent: false,
      waitFor: 3000,
      timeout: 120_000,
    });
    text = result.data?.markdown ?? '';
  } else {
    const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; WeightClassMenus/1.0)' } });
    const type = response.headers.get('content-type') ?? '';
    if (!response.ok) throw new Error(`${url}: ${response.status}`);
    if (type.includes('pdf')) throw new Error(`${url} is a PDF: set FIRECRAWL_API_KEY to read it.`);
    text = (await response.text())
      .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<(br|\/p|\/div|\/tr|\/li|\/h\d)[^>]*>/gi, '\n')
      .replace(/<\/t[dh]>/gi, ' | ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/[ \t]+/g, ' ');
  }
  const readOn = new Date().toISOString().slice(0, 10);
  mkdirSync(CACHE, { recursive: true });
  writeFileSync(file, `<!-- source: ${url} | read: ${readOn} -->\n${text}`);
  return { text, readOn };
}

// ── Two drafts ──────────────────────────────────────────────────────────────────────────────────

const NUMBER_FIELDS = [
  'calories',
  'fat_g',
  'saturated_fat_g',
  'trans_fat_g',
  'cholesterol_mg',
  'sodium_mg',
  'carbs_g',
  'fiber_g',
  'sugars_g',
  'protein_g',
] as const;
type NumberField = (typeof NUMBER_FIELDS)[number];
/** Without these a line can't be ranked: if the guide leaves one out, a person decides. */
const REQUIRED: readonly NumberField[] = ['calories', 'fat_g', 'saturated_fat_g', 'sodium_mg', 'carbs_g', 'fiber_g', 'sugars_g', 'protein_g'];

const draftItemSchema = z.object({
  section: z.string(),
  name: z.string(),
  serving: z.string(),
  serving_g: z.number().nullable(),
  ...Object.fromEntries(NUMBER_FIELDS.map((field) => [field, z.number().nullable()])),
}) as unknown as z.ZodType<DraftItem>;
export type DraftItem = { section: string; name: string; serving: string; serving_g: number | null } & Record<NumberField, number | null>;
const draftSchema = z.object({ items: z.array(draftItemSchema) });

const nullableNumber = { type: ['number', 'null'] };
const DRAFT_JSON_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['items'],
  properties: {
    items: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['section', 'name', 'serving', 'serving_g', ...NUMBER_FIELDS],
        properties: {
          section: { type: 'string' },
          name: { type: 'string' },
          serving: { type: 'string' },
          serving_g: nullableNumber,
          ...Object.fromEntries(NUMBER_FIELDS.map((field) => [field, nullableNumber])),
        },
      },
    },
  },
};

const DRAFT_PROMPT = `You copy a restaurant chain's own nutrition guide into rows. Rules:
- One row per menu item and size, as the guide lists them. Skip combo meals, kids' meal bundles, catering trays, whole pies or party sizes, and any line without a calorie number.
- Copy every number exactly as printed. Never calculate, convert, round or estimate. "<1" becomes 0.5, "<5" becomes 2.5. A dash, "N/A" or a blank becomes null.
- name: the item's name as printed, without the size. serving: the size or amount as printed ("1 burrito", "Medium (21 fl oz)", "4 oz", "1 slice"); "1 serving" only when the guide gives none. serving_g: grams only when printed, else null.
- Counts are sizes: "4 ct", "8-count", "12 pc" go in serving together with any weight ("4 ct (70g)"), never in the name. The same item in several sizes is one row per size, each with the same name.
- section: the guide's heading the item sits under ("Burritos", "Breakfast", "Drinks").
- Units: fat, saturated fat, trans fat, carbohydrates, fiber, sugars and protein in grams; cholesterol and sodium in milligrams. A value in any other unit becomes null.
- Ignore everything that isn't nutrition facts (allergens, ingredients, footnotes, prices).
- If this part of the guide has no nutrition facts, return an empty list.`;

let client: OpenAI | null = null;
function openRouter() {
  if (client) return client;
  if (!process.env.OPENROUTER_API_KEY) throw new Error('Set OPENROUTER_API_KEY.');
  client = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: process.env.AI_BASE_URL || 'https://openrouter.ai/api/v1',
    defaultHeaders: { 'X-Title': 'EatME chain menus' },
    maxRetries: 2,
    timeout: 10 * 60_000,
  });
  return client;
}

/** Long guides go in parts of about CHUNK_CHARS, split at line breaks. */
function chunks(text: string) {
  const parts: string[] = [];
  let current = '';
  for (const line of text.split('\n')) {
    if (current.length + line.length > CHUNK_CHARS && current) {
      parts.push(current);
      current = '';
    }
    current += `${line}\n`;
  }
  if (current.trim()) parts.push(current);
  return parts;
}

/** Each model's draft is kept with the guide and prompt it came from, so comparing again costs nothing. */
async function cachedDraft(slug: string, model: string, chain: string, text: string, redraft: boolean) {
  const hash = createHash('sha256').update(`${model}\n${DRAFT_PROMPT}\n${text}`).digest('hex').slice(0, 16);
  const file = path.join(CACHE, `${slug}.${model.replace(/[^a-z0-9.-]+/gi, '_')}.${hash}.json`);
  if (!redraft && existsSync(file)) return { items: draftSchema.parse(JSON.parse(readFileSync(file, 'utf8'))).items, tokens: 0 };
  const result = await draft(model, chain, text);
  mkdirSync(CACHE, { recursive: true });
  writeFileSync(file, JSON.stringify({ items: result.items }));
  return result;
}

async function draft(model: string, chain: string, text: string) {
  const parts = chunks(text);
  const items: DraftItem[] = [];
  let tokens = 0;
  for (const [index, part] of parts.entries()) {
    const response = await openRouter().chat.completions.create({
      model,
      messages: [
        { role: 'system', content: DRAFT_PROMPT },
        { role: 'user', content: `Chain: ${chain}\nGuide, part ${index + 1} of ${parts.length}:\n\n${part}` },
      ],
      response_format: { type: 'json_schema', json_schema: { name: 'chain_menu', strict: true, schema: DRAFT_JSON_SCHEMA } },
      max_tokens: 64_000,
    } as OpenAI.ChatCompletionCreateParamsNonStreaming);
    const content = response.choices[0]?.message?.content;
    if (!content) throw new Error(`${model}: empty answer for part ${index + 1}`);
    items.push(...draftSchema.parse(JSON.parse(content)).items);
    tokens += response.usage?.total_tokens ?? 0;
  }
  return { items, tokens };
}

// ── Comparing ───────────────────────────────────────────────────────────────────────────────────

const normalize = (value: string) =>
  value
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[®™©*†‡]/g, '')
    .replace(/[‘’`]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
const keyOf = (item: Pick<DraftItem, 'name' | 'serving'>) => `${normalize(item.name)}|${normalize(item.serving)}`;
const same = (a: number | null, b: number | null) => (a === null || b === null ? a === b : Math.abs(a - b) < 0.01);

/** Mains are ranked as meals; the rest are listed. From the guide's section first, then the name. */
export function kindOf(section: string, name: string): ChainItemKind {
  const text = `${section} ${name}`.toLowerCase();
  if (/\b(sauces?|dressings?|dips?|condiments?|toppings?|add[- ]?ons?|extras?|spreads?|syrups?|creamers?|seasonings?)\b/.test(text)) return 'extra';
  if (/\b(desserts?|sweets?|treats?|cookies?|pies?|brownies?|ice cream|sundaes?|shakes?|milkshakes?|blizzards?|donuts?|doughnuts?|pastr(y|ies)|bakery|cakes?|muffins?)\b/.test(text)) return 'dessert';
  if (/\b(drinks?|beverages?|coffees?|teas?|sodas?|lemonades?|juices?|smoothies?|refreshers?|lattes?|espressos?|frappuccinos?|cold brew|milk|water|fountain)\b/.test(text)) return 'drink';
  if (/\b(sides?|fries|chips|tots|snacks?)\b/.test(section.toLowerCase())) return 'side';
  return 'main';
}

type Line = { item: DraftItem; check: ChainCheck };

const words = (value: string) => new Set(normalize(value).split(/[^a-z0-9]+/).filter(Boolean));
/** Names that differ only in wording ("4 ct Mini Yeast Rolls" and "Mini Yeast Rolls"). */
function similarNames(x: string, y: string) {
  const a = normalize(x);
  const b = normalize(y);
  if (a.includes(b) || b.includes(a)) return true;
  const p = words(x);
  const q = words(y);
  const shared = [...p].filter((word) => q.has(word)).length;
  return shared / new Set([...p, ...q]).size >= 0.6;
}
type Problem = { key: string; a: DraftItem | null; b: DraftItem | null; reason: string };

export function compare(a: readonly DraftItem[], b: readonly DraftItem[]) {
  const first = (items: readonly DraftItem[]) => {
    const map = new Map<string, DraftItem>();
    for (const item of items) if (!map.has(keyOf(item))) map.set(keyOf(item), item);
    return map;
  };
  const left = first(a);
  const right = first(b);
  const lines: Line[] = [];
  const problems: Problem[] = [];
  // Second chance for lines one draft named differently: every number the same and a similar name, with no
  // other candidate. Ten matching numbers are a strong sign it's the same line.
  const unmatchedA = [...left.keys()].filter((key) => !right.has(key));
  const unmatchedB = new Set([...right.keys()].filter((key) => !left.has(key)));
  for (const keyA of unmatchedA) {
    const x = left.get(keyA)!;
    const candidates = [...unmatchedB].filter((keyB) => {
      const y = right.get(keyB)!;
      return NUMBER_FIELDS.every((field) => same(x[field], y[field])) && similarNames(x.name, y.name);
    });
    if (candidates.length !== 1) continue;
    const y = right.get(candidates[0])!;
    const longer = y.name.length > x.name.length ? y : x;
    const item = { ...x, name: longer.name, serving: x.serving.length >= y.serving.length ? x.serving : y.serving };
    const pairedKey = keyOf(item);
    if (pairedKey !== keyA && pairedKey !== candidates[0] && (left.has(pairedKey) || right.has(pairedKey))) continue;
    unmatchedB.delete(candidates[0]);
    left.delete(keyA);
    right.delete(candidates[0]);
    left.set(pairedKey, item);
    right.set(pairedKey, { ...y, name: item.name, serving: item.serving });
  }
  for (const key of new Set([...left.keys(), ...right.keys()])) {
    const x = left.get(key) ?? null;
    const y = right.get(key) ?? null;
    if (!x || !y) {
      problems.push({ key, a: x, b: y, reason: x ? 'only in draft A' : 'only in draft B' });
      lines.push({ item: (x ?? y)!, check: 'pending' });
      continue;
    }
    const differ = NUMBER_FIELDS.filter((field) => !same(x[field], y[field]));
    const missing = REQUIRED.filter((field) => x[field] === null);
    if (differ.length > 0 || missing.length > 0) {
      problems.push({ key, a: x, b: y, reason: differ.length > 0 ? `differ: ${differ.join(', ')}` : `the guide gives no ${missing.join(', ')}` });
      lines.push({ item: x, check: 'pending' });
    } else {
      lines.push({ item: { ...x, serving_g: same(x.serving_g, y.serving_g) ? x.serving_g : null }, check: 'two-drafts' });
    }
  }
  return { lines, problems };
}

/** A fixed sample of agreed lines (the same on every run) for a person to compare with the guide. */
export function sample(lines: readonly Line[]) {
  const agreed = lines.filter((line) => line.check === 'two-drafts');
  const ranked = agreed
    .map((line) => ({ line, hash: createHash('sha1').update(keyOf(line.item)).digest().readUInt32BE(0) }))
    .sort((p, q) => p.hash - q.hash);
  const count = Math.min(SAMPLE.max, Math.max(SAMPLE.min, Math.ceil(agreed.length / SAMPLE.every)));
  return ranked.slice(0, count).map((entry) => entry.line);
}

// ── Writing ─────────────────────────────────────────────────────────────────────────────────────

const show = (value: number | null) => (value === null ? '' : String(value));

/** Writes the chain's menu file; lines a person already checked stay as they are. */
export function writeMenu(slug: string, chain: string, url: string, readOn: string, lines: readonly Line[]) {
  const file = path.join(MENUS, `${slug}.csv`);
  const checked = new Map<string, string[]>();
  if (existsSync(file)) {
    const [, ...rows] = parseCsv(readFileSync(file, 'utf8'));
    const at = (column: (typeof CHAIN_CSV_COLUMNS)[number]) => CHAIN_CSV_COLUMNS.indexOf(column);
    for (const row of rows) {
      if (row[at('check')] === 'person') checked.set(keyOf({ name: row[at('name')], serving: row[at('serving')] }), row);
    }
  }
  const rows = lines
    .filter((line) => !checked.has(keyOf(line.item)))
    .map(({ item, check }) =>
      csvLine([
        chain,
        item.section,
        item.name,
        item.serving,
        show(item.serving_g),
        kindOf(item.section, item.name),
        ...NUMBER_FIELDS.map((field) => show(item[field])),
        url,
        readOn,
        check,
      ]),
    );
  const kept = [...checked.values()].map((row) => csvLine(row));
  mkdirSync(MENUS, { recursive: true });
  writeFileSync(file, `${[csvLine([...CHAIN_CSV_COLUMNS]), ...kept, ...rows].join('\n')}\n`);
}

function writeReview(slug: string, chain: string, url: string, readOn: string, models: readonly string[], problems: readonly Problem[], spot: readonly Line[]) {
  const numbers = (item: DraftItem | null) => (item ? NUMBER_FIELDS.map((field) => show(item[field]) || '–').join(' / ') : 'not found');
  const name = (problem: Problem) => (problem.a ?? problem.b)!;
  const out = [
    `# ${chain}: lines for a person`,
    '',
    `Guide: ${url} (read ${readOn}). Draft A: ${models[0]}. Draft B: ${models[1]}.`,
    `Numbers in order: ${NUMBER_FIELDS.join(' / ')}.`,
    '',
    `## Disagreements (${problems.length})`,
    '',
    `Fix each line in \`menus/${slug}.csv\` from the guide and set its check to \`person\` (or delete the line if it isn't on the menu).`,
    '',
    '| Item | Size | Why | Draft A | Draft B |',
    '| --- | --- | --- | --- | --- |',
    ...problems.map((p) => `| ${name(p).name} | ${name(p).serving} | ${p.reason} | ${numbers(p.a)} | ${numbers(p.b)} |`),
    '',
    `## Spot check (${spot.length} agreed lines)`,
    '',
    'Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.',
    '',
    '| Item | Size | Numbers |',
    '| --- | --- | --- |',
    ...spot.map((line) => `| ${line.item.name} | ${line.item.serving} | ${numbers(line.item)} |`),
    '',
  ];
  mkdirSync(REVIEW, { recursive: true });
  writeFileSync(path.join(REVIEW, `${slug}.md`), out.join('\n'));
}

// ── Main ────────────────────────────────────────────────────────────────────────────────────────

function argument(name: string) {
  const index = process.argv.indexOf(name);
  return index > 0 ? process.argv[index + 1] : undefined;
}

async function main() {
  const models = (process.env.CHAIN_DRAFT_MODELS ?? DEFAULT_MODELS.join(',')).split(',').map((m) => m.trim());
  if (models.length !== 2 || models[0].split('/')[0] === models[1].split('/')[0]) {
    throw new Error('CHAIN_DRAFT_MODELS needs two models from different makers, e.g. openai/…,anthropic/…');
  }
  const ranking = readRanking();
  const range = argument('--rank');
  const only = argument('--chain');
  const url = argument('--url');
  const refetch = process.argv.includes('--refetch');
  const redo = process.argv.includes('--redo');
  const redraft = process.argv.includes('--redraft');
  const parallel = Number(argument('--parallel')) || DEFAULT_PARALLEL;
  const [from, to] = (range ?? '').split('-').map(Number);
  const picked = only
    ? ranking.filter((c) => c.chain.toLowerCase() === only.toLowerCase() || chainSlug(c.chain) === chainSlug(only))
    : ranking.filter((c) => range && c.rank >= from && c.rank <= (to || from));
  if (picked.length === 0) throw new Error('Pick chains with --rank 1-10 or --chain "Name" (see data/chains/ranking.csv).');
  if (url && picked.length !== 1) throw new Error('--url goes with one --chain.');

  const draftOne = async (entry: RankedChain) => {
    const slug = chainSlug(entry.chain);
    // A long run picks up where it stopped: chains with a menu file are done unless --redo.
    if (!redo && !url && existsSync(path.join(MENUS, `${slug}.csv`))) return;
    try {
      if (url) entry.guideUrl = url;
      if (!entry.guideUrl) {
        entry.guideUrl = (await findGuide(entry.chain)) ?? '';
        if (!entry.guideUrl) {
          entry.notes = 'no guide found on the chain’s own site: set guide_url by hand';
          console.warn(`#${entry.rank} ${entry.chain}: ${entry.notes}`);
          return;
        }
      }
      writeRanking(ranking);
      const { text, readOn } = await readGuide(slug, entry.guideUrl, refetch);
      if (hostedByNutritionix(text)) {
        entry.notes = 'guide is run by Nutritionix: set guide_url to the chain’s own PDF';
        console.warn(`#${entry.rank} ${entry.chain}: ${entry.notes}`);
        return;
      }
      const [a, b] = await Promise.all(models.map((model) => cachedDraft(slug, model, entry.chain, text, redraft)));
      const { lines, problems } = compare(a.items, b.items);
      if (lines.length === 0) {
        entry.notes = 'no nutrition numbers found in the guide: set guide_url to the PDF or full table';
        console.warn(`#${entry.rank} ${entry.chain}: ${entry.notes}`);
        return;
      }
      const spot = sample(lines);
      writeMenu(slug, entry.chain, entry.guideUrl, readOn, lines);
      writeReview(slug, entry.chain, entry.guideUrl, readOn, models, problems, spot);
      const agreed = lines.length - problems.length;
      entry.notes = `drafted ${readOn}: ${agreed} agreed, ${problems.length} for a person`;
      console.log(`#${entry.rank} ${entry.chain}: ${agreed} agreed, ${problems.length} pending, ${spot.length} to spot-check (${a.tokens + b.tokens} tokens)`);
    } catch (error) {
      entry.notes = `failed: ${error instanceof Error ? error.message.slice(0, 120) : String(error)}`;
      console.error(`#${entry.rank} ${entry.chain}: ${entry.notes}`);
    } finally {
      writeRanking(ranking);
    }
  };

  // A few chains at a time, in rank order.
  const queue = [...picked];
  await Promise.all(
    Array.from({ length: Math.min(parallel, queue.length) }, async () => {
      for (let entry = queue.shift(); entry; entry = queue.shift()) await draftOne(entry);
    }),
  );
}

// Run only from the command line (the comparing is also used by a check script).
if (require.main === module) {
  void main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
