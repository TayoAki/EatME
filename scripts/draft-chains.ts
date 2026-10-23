/**
 * Drafts chain menus for What to order (WHAT-TO-ORDER.md §7) from each chain's own nutrition guide.
 * Firecrawl finds the guide on the chain's own website (`site` in ranking.csv) and reads it (web page or
 * PDF); two AI models from different makers copy it into rows on their own; a line goes in as checked
 * ("two-drafts") only when both drafts agree on every number. Disagreements go in as "pending" (never loaded) and are listed with both versions in
 * data/chains/review/<chain>.md for a person, together with a sample of agreed lines to spot-check.
 * Only numbers are kept: no wording, photos or logos from the guides.
 *
 * Usage:
 *   npm run chains:draft -- --rank 1-10              chains by rank in data/chains/ranking.csv
 *   npm run chains:draft -- --chain "Chick-fil-A"    one chain (its name or slug)
 *   npm run chains:draft -- --chains sonic,arbys     some chains (names or slugs, comma-separated)
 * Options: --url <guide url> (with --chain: read this guide and save it to ranking.csv),
 *          --refetch (read the guide again instead of the cached copy),
 *          --redo (draft chains that already have a menu file; lines a person checked are kept),
 *          --redraft (ask the models again even when a draft of the same guide and prompt is cached),
 *          --parallel <n> (chains at once, default 3),
 *          --guides-only (find, read and check each guide without drafting: no AI; links and problems
 *          go in ranking.csv to look over first),
 *          --max-pages <n> (item pages read per chain at most, default 250: a Firecrawl credit each).
 * A guide_url of `items:<menu page> <item page prefix>` reads a chain's item pages one by one instead of one guide
 * (scripts/item-pages.ts), for chains such as McDonald's that publish nutrition item by item.
 * Needs OPENROUTER_API_KEY, and FIRECRAWL_API_KEY to find and read guides (PDFs included); without
 * it, only web-page guides already set in ranking.csv can be read. CHAIN_DRAFT_MODELS overrides the two
 * models ("maker/model,maker/model"). A run that runs out of AI or Firecrawl credit stops; run the same
 * command again after topping up. Afterwards: npm run chains:build.
 */
import { config } from 'dotenv';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import OpenAI from 'openai';
import { z } from 'zod';

import { CHAIN_CSV_COLUMNS, chainSlug, type ChainCheck, type ChainItemKind } from '../src/shared/chains';
import { csvLine, parseCsv } from './csv';
import { firecrawl } from './firecrawl';
import { DEFAULT_MAX_PAGES, ITEM_PAGES, readItemPages } from './item-pages';

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
const CHUNK_CHARS = 24_000;
/** PDF pages read per guide: Firecrawl bills each page, and full guides run to about 40. */
const PDF_PAGES = 40;
/** Agreed lines a person spot-checks per chain: about 1 in 20, at least 3, at most 15. */
const SAMPLE = { every: 20, min: 3, max: 15 };
/** Pages on the chain's site tried in turn until one has nutrition facts. */
const GUIDE_TRIES = 3;
/** Country codes and places that mark another country's site or guide (menus differ by country). */
const COUNTRY_CODES = 'uk|gb|ca|au|nz|ie|mx|in|ph|sg|my|jp|kr|cn|hk|tw|th|vn|ae|sa|qa|kw|bh|om|eg|pk|za|de|fr|es|it|nl|be|pl|pt|se|no|dk|fi|br|ar|cl|co|pe|pr|gt|cr|pa|do|gu';
/** A country folder: /ca/, or a locale for anywhere but the US: /en-gb/, /en-cy/, /fr_ca/, /ca-en/. */
const COUNTRY_FOLDER = new RegExp(`/(${COUNTRY_CODES}|(en|es|fr|de|it|pt|nl|zh|ja|ko|ar)[-_](?!us\\b)[a-z]{2}|(?!us\\b)[a-z]{2}[-_](en|es|fr))(/|$)`, 'i');
/** A country in a file name or query, in capitals: "Wendy's UK Nutrition", ?locale=en_CA. */
const COUNTRY_IN_NAME = new RegExp(`(^|[^A-Za-z])(${COUNTRY_CODES.toUpperCase()})([^A-Za-z]|$)`);
/** Countries and places (not ones that are also foods, such as turkey or chile). */
const PLACES =
  /\b(arabia|(saudi|jeddah|riyadh|dubai|emirates|kuwait|qatar|bahrain|oman|egypt|jordan|lebanon|israel|morocco|nigeria|kenya|canada|australia|ireland|britain|england|scotland|wales|mexico|india|pakistan|bangladesh|philippines|singapore|malaysia|indonesia|japan|korea|china|taiwan|thailand|vietnam|cambodia|guam|cyprus|greece|spain|portugal|france|germany|austria|switzerland|italy|netherlands|belgium|poland|sweden|norway|denmark|finland|panama|guatemala|honduras|ecuador|colombia|peru|venezuela|argentina|brazil|jamaica|trinidad|bahamas|aruba|europe|emea|latam|apac|gcc|international)(?![a-z])|(united|new|hong|middle|puerto|south|costa|el|sri|dominican)[\s_-]?(kingdom|zealand|kong|east|rico|africa|rica|salvador|lanka|republic))/i;
/**
 * Another country's site or guide: a country domain (wendys.co.uk) or subdomain (ca.chain.com), or a country or
 * place in the path (/en-gb/, "Wendy's UK Nutrition", "United Kingdom", jeddah). The chain's own name is left out
 * first, so Texas de Brazil and Sarku Japan stay American.
 */
export function otherCountrySite(url: string, chain = '') {
  const { hostname, pathname, search } = new URL(url);
  const labels = hostname.replace(/^www\./, '').split('.');
  const tld = labels.at(-1) ?? '';
  if (tld.length === 2 && tld !== 'us') return true;
  if (labels.length > 2 && new RegExp(`^(${COUNTRY_CODES})$`).test(labels[0])) return true;
  let place = pathname + search;
  try {
    place = decodeURIComponent(place);
  } catch {
    // A malformed escape: check the path as it is.
  }
  for (const word of chainSlug(chain).split('-').filter((w) => w.length > 2)) place = place.replace(new RegExp(word, 'gi'), ' ');
  return COUNTRY_FOLDER.test(place) || COUNTRY_IN_NAME.test(place) || PLACES.test(place);
}
/**
 * Another country's guide by its contents: kilojoules, or salt in place of sodium (US guides give Calories and
 * sodium in milligrams).
 */
function nonUsGuide(text: string) {
  const count = (pattern: RegExp) => (text.match(pattern) ?? []).length;
  return count(/\bkj\b|kilojoule/gi) >= 5 || (count(/\bsalt\b/gi) >= 5 && count(/\bsodium\b/gi) < 3);
}
/** Pages on a chain's site that aren't its nutrition guide: blog posts, news, press, FAQs, careers. */
const NOT_GUIDES = /(^|[/._-])(blog|news|press|faqs?|careers?|investors?|jobs)([/._-]|$)/i;

/** Sites that copy chains' numbers: never a source (WHAT-TO-ORDER.md §7). */
const NOT_SOURCES = /nutritionix|fatsecret|fastfoodnutrition|menuwithprice|eatthismuch|myfooddiary|calorieking|nutritionvalue|myfitnesspal|fastfoodcalories|healthyfastfood|carbmanager|reddit|wikipedia|yelp|tripadvisor|doordash|ubereats|grubhub/i;

// ── Ranking file ────────────────────────────────────────────────────────────────────────────────

/** `site` is the chain's own US website (its domain): guides are only looked for there. */
type RankedChain = { rank: number; chain: string; site: string; guideUrl: string; notes: string };

function readRanking(): RankedChain[] {
  const [, ...rows] = parseCsv(readFileSync(RANKING, 'utf8'));
  return rows.map(([rank, chain, site = '', guideUrl = '', notes = '']) => ({ rank: Number(rank), chain, site, guideUrl, notes }));
}

function writeRanking(chains: readonly RankedChain[]) {
  const lines = [
    csvLine(['rank', 'chain', 'site', 'guide_url', 'notes']),
    ...chains.map((c) => csvLine([c.rank, c.chain, c.site, c.guideUrl, c.notes])),
  ];
  writeFileSync(RANKING, `${lines.join('\n')}\n`);
}

// ── Finding and reading the guide ───────────────────────────────────────────────────────────────

/**
 * Many chains' nutrition pages are run by Nutritionix (its links all over the page). Nutritionix's terms
 * cover what it serves, so those chains need their own PDF instead (WHAT-TO-ORDER.md §7).
 */
const hostedByNutritionix = (text: string) => (text.match(/nutritionix\.com/gi) ?? []).length >= 3;

/**
 * How much nutrition the text holds: table rows of numbers, and nutrient names (pages that give one value a
 * line). Pages without enough (a calculator built by script, a landing page) aren't worth an AI draft.
 */
export function nutritionFacts(text: string) {
  const rows = text.split('\n').filter((line) => (line.match(/(?<![\w.])\d+(?:\.\d+)?(?:g|mg|cal|kcal)?(?![\w.])/gi) ?? []).length >= 5).length;
  const nutrients = (text.match(/\b(calories|sodium|protein|carbohydrates?|saturated|cholesterol)\b/gi) ?? []).length;
  return { rows, nutrients, enough: rows >= 10 || nutrients >= 30 };
}

const thisYear = new Date().getFullYear();
/** The latest year in a link (guides are reissued when the menu changes), or null. */
function linkYear(url: string) {
  const years = [...url.matchAll(/(?:^|\D)(20\d\d)(?:\D|$)/g)].map((m) => Number(m[1]));
  return years.length > 0 ? Math.max(...years) : null;
}
/** A link dated two or more years back. */
const oldLink = (url: string) => (linkYear(url) ?? thisYear) < thisYear - 1;
const US_MARKER = /(^|[/._\s-])(us|usa|en-us)([/._\s-]|$)/;
/** Neither a copy site nor another country's guide nor a page that isn't a guide. */
const candidate = (url: string, chain: string) => {
  const { hostname, pathname } = new URL(url);
  return !NOT_SOURCES.test(url) && !NOT_GUIDES.test(hostname + pathname) && !otherCountrySite(url, chain);
};

/**
 * The nutrition PDF a landing page links to. It may sit on the chain's file host (Dunkin's is on
 * assets.ctfassets.net): the page is the chain's own, so the link is too.
 */
export function pdfLink(text: string, chain = ''): string | null {
  const decode = (value: string) => {
    try {
      return decodeURIComponent(value);
    } catch {
      return value; // A malformed escape: use it as it is.
    }
  };
  // Markdown links, with or without a title: [label](url "title").
  const scored = [...text.matchAll(/\[([^\]]*)\]\((https:\/\/[^)\s]+)(?:\s+"[^"]*")?\)/g)]
    .map(([, label, url]) => ({ label: label.toLowerCase(), url }))
    .filter(({ url }) => /\.pdf($|[?#])/i.test(url) && candidate(url, chain))
    .map(({ label, url }) => {
      // The file's own name counts, not its folder (Popeyes keeps its allergen PDF in /nutrition/).
      const file = decode(new URL(url).pathname.split('/').at(-1) ?? '').toLowerCase();
      const score =
        (/nutri|calori/.test(file) ? 4 : 0) +
        (/nutri|calori/.test(label) ? 2 : 0) +
        (US_MARKER.test(`${label} ${file}`) ? 2 : 0) -
        (/allerg|ingredient/.test(file) && !/nutri/.test(file) ? 4 : 0) -
        (oldLink(url) ? 6 : 0);
      return { url, score, nutrition: /nutri|calori/.test(`${file} ${label}`) };
    })
    .filter((link) => link.nutrition)
    .sort((a, b) => b.score - a.score);
  return scored[0]?.url ?? null;
}

type SearchHit = { url: string; title?: string };

/** A link without search trackers (srsltid, utm_…), so the same guide is always the same link. */
function withoutTrackers(url: string) {
  const parsed = new URL(url);
  for (const key of [...parsed.searchParams.keys()]) {
    if (key === 'srsltid' || key.startsWith('utm_')) parsed.searchParams.delete(key);
  }
  return parsed.toString();
}

/**
 * Nutrition pages and PDFs on the chain's own site, best first. The search is limited to that site: copy sites
 * put chains' names in their own domains (popeyesnutrition.us), so a name in the domain proves nothing.
 */
async function findGuides(chain: string, site: string): Promise<string[]> {
  const result = await firecrawl<{ data?: SearchHit[] | { web?: SearchHit[] } }>('search', {
    query: `${chain} nutrition information calories`,
    limit: 10,
    includeDomains: [site],
  });
  const hits = Array.isArray(result.data) ? result.data : (result.data?.web ?? []);
  const onSite = (url: string) => {
    const host = new URL(url).hostname;
    return host === site || host.endsWith(`.${site}`);
  };
  return hits
    .filter((hit) => /^https:/.test(hit.url) && onSite(hit.url) && candidate(hit.url, chain))
    .filter((hit) => /nutri|calori|allergen/i.test(`${hit.url} ${hit.title ?? ''}`))
    .map((hit) => {
      const url = hit.url.toLowerCase();
      const score = (/nutri/.test(url) ? 3 : 0) + (url.endsWith('.pdf') ? 2 : 0) + (US_MARKER.test(url) ? 3 : 0) - (oldLink(url) ? 6 : 0);
      return { url: withoutTrackers(hit.url), score };
    })
    .sort((a, b) => b.score - a.score)
    .map((hit) => hit.url);
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
      parsers: [{ type: 'pdf', maxPages: PDF_PAGES }],
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

/** A guide to draft (with `pages` when it is a chain's item pages), or why there isn't one. */
type Guide = { url: string; text: string; readOn: string; pages?: string[] } | { problem: string };

/** Reads the guide and checks it's one to draft. A page without numbers is followed once to the PDF it links. */
async function usableGuide(entry: RankedChain, url: string, refetch: boolean, followed = false): Promise<Guide> {
  const { text, readOn } = await readGuide(chainSlug(entry.chain), url, refetch);
  if (nonUsGuide(text)) return { problem: 'guide looks like another country’s (kilojoules or salt): set guide_url to the US guide' };
  if (hostedByNutritionix(text)) return { problem: 'guide is run by Nutritionix: set guide_url to the chain’s own PDF' };
  if (nutritionFacts(text).enough) return { url, text, readOn };
  const pdf = followed ? null : pdfLink(text, entry.chain);
  if (pdf) return usableGuide(entry, pdf, refetch, true);
  // No numbers of its own, but a link to Nutritionix's calculator (Chili's, Texas Roadhouse): the guide is theirs.
  if (/\]\(https:\/\/[^)\s]*nutritionix\.com/i.test(text)) return { problem: 'guide is run by Nutritionix: set guide_url to the chain’s own PDF' };
  return { problem: 'no nutrition numbers found in the guide: set guide_url to the PDF or full table' };
}

/** A note for a guide dated two or more years back. */
const datedNote = (url: string) => (oldLink(url) ? ` (dated ${linkYear(url)}: look for a newer guide)` : '');

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
  page: z.number().int().nullable().optional(),
}) as unknown as z.ZodType<DraftItem>;
/** `page`: the item page a line came from, when the chain publishes one page per item. */
export type DraftItem = { section: string; name: string; serving: string; serving_g: number | null; page?: number | null } & Record<
  NumberField,
  number | null
>;
const draftSchema = z.object({ items: z.array(draftItemSchema) });

const nullableNumber = { type: ['number', 'null'] };
/** The drafts' answer format; with item pages, every row also names its page. */
function draftJsonSchema(itemPages: boolean) {
  return {
    type: 'object',
    additionalProperties: false,
    required: ['items'],
    properties: {
      items: {
        type: 'array',
        items: {
          type: 'object',
          additionalProperties: false,
          required: ['section', 'name', 'serving', 'serving_g', ...NUMBER_FIELDS, ...(itemPages ? ['page'] : [])],
          properties: {
            section: { type: 'string' },
            name: { type: 'string' },
            serving: { type: 'string' },
            serving_g: nullableNumber,
            ...Object.fromEntries(NUMBER_FIELDS.map((field) => [field, nullableNumber])),
            ...(itemPages ? { page: { type: ['integer', 'null'] } } : {}),
          },
        },
      },
    },
  };
}

const DRAFT_PROMPT = `You copy a restaurant chain's own nutrition guide into rows. Rules:
- One row per menu item and size, as the guide lists them. Skip combo meals, kids' meal bundles, catering trays, whole pies or party sizes, and any line without a calorie number.
- Copy every number exactly as printed. Never calculate, convert, round or estimate. "<1" becomes 0.5, "<5" becomes 2.5. A dash, "N/A" or a blank becomes null.
- name: the item's name as printed, without the size. serving: the size or amount as printed ("1 burrito", "Medium (21 fl oz)", "4 oz", "1 slice"); "1 serving" only when the guide gives none. serving_g: grams only when printed, else null.
- Counts are sizes: "4 ct", "8-count", "12 pc" go in serving together with any weight ("4 ct (70g)"), never in the name. The same item in several sizes is one row per size, each with the same name.
- section: the guide's heading the item sits under ("Burritos", "Breakfast", "Drinks").
- Units: fat, saturated fat, trans fat, carbohydrates, fiber, sugars and protein in grams; cholesterol and sodium in milligrams. A value in any other unit becomes null.
- Some guides print "Calories from fat" (or "Fat calories") next to the calories: it is not fat in grams and has no field here, so skip that column and keep every other number under its own heading.
- Ignore everything that isn't nutrition facts (allergens, ingredients, footnotes, prices).
- If this part of the guide has no nutrition facts, return an empty list.`;
/** Added for chains that publish one page per item (scripts/item-pages.ts). */
const ITEM_PAGES_RULES = `- This guide is the chain's item pages, one section each, headed "### Page N: name (address)". Copy each page's nutrition facts; page: the number N of the section the row comes from.
- name: the item's name from its heading, without promotion words ("New", "Now Crispier"); where words run together, the address shows them apart ("mccrispy-strip-ranch-snack-wrap").
- serving: the size the page shows; its address often names it ("coca-cola-small" is Small). section: the menu category the page names, else one word for what it is ("Burgers", "Chicken", "Breakfast", "Sides", "Drinks", "Desserts", "Sauces").`;
const promptFor = (itemPages: boolean) => (itemPages ? `${DRAFT_PROMPT}\n${ITEM_PAGES_RULES}` : DRAFT_PROMPT);

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

/** A guide's pieces: its lines, or (item pages) its pages, so a part never cuts an item in two. */
const pieces = (text: string, itemPages: boolean) => (itemPages ? text.split(/\n+(?=### Page \d)/) : text.split('\n'));
const joinPieces = (list: readonly string[], itemPages: boolean) => list.map((piece) => `${piece}\n${itemPages ? '\n' : ''}`).join('');

/** Long guides go in parts of about CHUNK_CHARS, split at line breaks (item pages: between pages). */
function chunks(text: string, itemPages = false) {
  const parts: string[] = [];
  let current = '';
  for (const piece of pieces(text, itemPages)) {
    if (current.length + piece.length > CHUNK_CHARS && current) {
      parts.push(current);
      current = '';
    }
    current += joinPieces([piece], itemPages);
  }
  if (current.trim()) parts.push(current);
  return parts;
}

/** Each model's draft is kept with the guide and prompt it came from, so comparing again costs nothing. */
async function cachedDraft(slug: string, model: string, chain: string, text: string, redraft: boolean, itemPages: boolean) {
  const hash = createHash('sha256').update(`${model}\n${promptFor(itemPages)}\n${text}`).digest('hex').slice(0, 16);
  const file = path.join(CACHE, `${slug}.${model.replace(/[^a-z0-9.-]+/gi, '_')}.${hash}.json`);
  if (!redraft && existsSync(file)) return { items: draftSchema.parse(JSON.parse(readFileSync(file, 'utf8'))).items, tokens: 0 };
  const result = await draft(model, chain, text, itemPages);
  mkdirSync(CACHE, { recursive: true });
  writeFileSync(file, JSON.stringify({ items: result.items }));
  return result;
}

/** The answer was cut off (too long for one reply) or the connection dropped while it was written. */
class PartTooLong extends Error {}
const tooLong = (error: unknown) =>
  error instanceof PartTooLong || error instanceof SyntaxError || (error instanceof Error && /terminated|socket hang up|ECONNRESET/i.test(error.message));

/** One part of a guide; an answer that gets cut off is read again as two halves (up to three times). */
async function draftPart(model: string, chain: string, part: string, label: string, itemPages: boolean, depth = 0): Promise<{ items: DraftItem[]; tokens: number }> {
  try {
    const response = await openRouter().chat.completions.create({
      model,
      messages: [
        { role: 'system', content: promptFor(itemPages) },
        { role: 'user', content: `Chain: ${chain}\nGuide, ${label}:\n\n${part}` },
      ],
      response_format: { type: 'json_schema', json_schema: { name: 'chain_menu', strict: true, schema: draftJsonSchema(itemPages) } },
      max_tokens: 64_000,
    } as OpenAI.ChatCompletionCreateParamsNonStreaming);
    const choice = response.choices[0];
    if (choice?.finish_reason === 'length') throw new PartTooLong(`${model}: the answer for ${label} was cut off`);
    if (!choice?.message?.content) throw new Error(`${model}: empty answer for ${label}`);
    return { items: draftSchema.parse(JSON.parse(choice.message.content)).items, tokens: response.usage?.total_tokens ?? 0 };
  } catch (error) {
    const list = pieces(part, itemPages).filter((piece) => piece.trim());
    if (!tooLong(error) || depth >= 3 || list.length < 2) throw error;
    const middle = Math.ceil(list.length / 2);
    const halves = [list.slice(0, middle), list.slice(middle)];
    const results = [];
    for (const [i, half] of halves.entries()) {
      results.push(await draftPart(model, chain, joinPieces(half, itemPages), `${label}, half ${i + 1} of 2`, itemPages, depth + 1));
    }
    return { items: results.flatMap((r) => r.items), tokens: results.reduce((sum, r) => sum + r.tokens, 0) };
  }
}

async function draft(model: string, chain: string, text: string, itemPages: boolean) {
  const parts = chunks(text, itemPages);
  const items: DraftItem[] = [];
  let tokens = 0;
  for (const [index, part] of parts.entries()) {
    const result = await draftPart(model, chain, part, `part ${index + 1} of ${parts.length}`, itemPages);
    items.push(...result.items);
    tokens += result.tokens;
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
/** A line's words, name and size together: the same line whichever part a draft put a word in. */
const lineWords = (item: Pick<DraftItem, 'name' | 'serving'>) => [...words(`${item.name} ${item.serving}`)].sort().join(' ');
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

/**
 * Lines both drafts agree on, and the rest for a person. With item pages (`pageCount` given), both drafts must
 * also name the same page, one that exists, since that page is the line's source.
 */
export function compare(a: readonly DraftItem[], b: readonly DraftItem[], pageCount?: number) {
  const samePage = (x: DraftItem, y: DraftItem) => pageCount === undefined || x.page === y.page;
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
    let candidates = [...unmatchedB].filter((keyB) => {
      const y = right.get(keyB)!;
      return NUMBER_FIELDS.every((field) => same(x[field], y[field])) && similarNames(x.name, y.name) && samePage(x, y);
    });
    // Several with the same numbers (a drink's hot medium and iced large): the one with the same words, only split
    // differently between the name and the size ("911" sized "Hot, Medium" against "911 Hot" sized "Medium").
    if (candidates.length > 1) candidates = candidates.filter((keyB) => lineWords(right.get(keyB)!) === lineWords(x));
    if (candidates.length !== 1) continue;
    const y = right.get(candidates[0])!;
    const longer = y.name.length > x.name.length ? y : x;
    // The same words keep draft A's split; otherwise the fuller name and size.
    const item = lineWords(x) === lineWords(y) ? { ...x } : { ...x, name: longer.name, serving: x.serving.length >= y.serving.length ? x.serving : y.serving };
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
    const differ: string[] = NUMBER_FIELDS.filter((field) => !same(x[field], y[field]));
    if (!samePage(x, y)) differ.push('page');
    const missing = REQUIRED.filter((field) => x[field] === null);
    const noPage = pageCount !== undefined && !(x.page && x.page >= 1 && x.page <= pageCount);
    const impossible = impossibleNumbers(x);
    if (differ.length > 0 || missing.length > 0 || noPage || impossible) {
      const reason =
        differ.length > 0
          ? `differ: ${differ.join(', ')}`
          : missing.length > 0
            ? `the guide gives no ${missing.join(', ')}`
            : noPage
              ? 'no item page'
              : `both read numbers that can't be right: ${impossible}`;
      problems.push({ key, a: x, b: y, reason });
      lines.push({ item: x, check: 'pending' });
    } else {
      lines.push({ item: { ...x, serving_g: same(x.serving_g, y.serving_g) ? x.serving_g : null }, check: 'two-drafts' });
    }
  }
  return { lines, problems };
}

/**
 * Numbers no guide can mean (the build refuses them too): both drafts read the same line wrongly, or
 * the guide has a typo. Such a line waits for a person.
 */
function impossibleNumbers(item: DraftItem) {
  const n = (value: number | null) => value ?? 0;
  if (n(item.sugars_g) > n(item.carbs_g) + 1) return `sugars ${n(item.sugars_g)} g above carbs ${n(item.carbs_g)} g`;
  if (n(item.fiber_g) > n(item.carbs_g) + 1) return `fiber ${n(item.fiber_g)} g above carbs ${n(item.carbs_g)} g`;
  if (n(item.saturated_fat_g) + n(item.trans_fat_g) > n(item.fat_g) + 1) return 'saturated and trans fat above fat';
  return null;
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

/**
 * Writes the chain's menu file; lines a person already checked stay as they are. With item pages, each line's
 * source is its own page (`pages`, numbered from 1), else the guide.
 */
/**
 * A guide's heading as a section (at most 60 characters): a long one keeps its first sentence,
 * "CUSTOM ROUND PIZZAS (1-2 TOPPINGS). ADD CALORIES TO BASE PIZZA" → "CUSTOM ROUND PIZZAS (1-2 TOPPINGS)".
 */
export function shortSection(section: string) {
  const text = section.replace(/\s+/g, ' ').trim();
  if (text.length <= 60) return text;
  const sentence = text.split(/(?<=[.!?;:])\s|\s[–—-]\s/)[0].replace(/[.!?;:]$/, '').trim();
  return (sentence.length >= 3 && sentence.length <= 60 ? sentence : text.slice(0, 60)).trim();
}

export function writeMenu(slug: string, chain: string, url: string, readOn: string, lines: readonly Line[], pages?: readonly string[]) {
  const sourceOf = (item: DraftItem) => (pages && item.page ? (pages[item.page - 1] ?? url) : url);
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
        shortSection(item.section),
        item.name,
        item.serving,
        show(item.serving_g),
        kindOf(item.section, item.name),
        ...NUMBER_FIELDS.map((field) => show(item[field])),
        sourceOf(item),
        readOn,
        check,
      ]),
    );
  const kept = [...checked.values()].map((row) => csvLine(row));
  mkdirSync(MENUS, { recursive: true });
  writeFileSync(file, `${[csvLine([...CHAIN_CSV_COLUMNS]), ...kept, ...rows].join('\n')}\n`);
}

function writeReview(
  slug: string,
  chain: string,
  url: string,
  readOn: string,
  models: readonly string[],
  problems: readonly Problem[],
  spot: readonly Line[],
  pages?: readonly string[],
) {
  const numbers = (item: DraftItem | null) => (item ? NUMBER_FIELDS.map((field) => show(item[field]) || '–').join(' / ') : 'not found');
  const name = (problem: Problem) => (problem.a ?? problem.b)!;
  const guide = pages ? `${pages.length} item pages under ${url}, each line's own page in its source_url` : url;
  const out = [
    `# ${chain}: lines for a person`,
    '',
    `Guide: ${guide} (read ${readOn}). Draft A: ${models[0]}. Draft B: ${models[1]}.`,
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
  const some = argument('--chains')?.split(',').map((name) => chainSlug(name.trim()));
  const url = argument('--url');
  const refetch = process.argv.includes('--refetch');
  const redo = process.argv.includes('--redo');
  const redraft = process.argv.includes('--redraft');
  const guidesOnly = process.argv.includes('--guides-only');
  const parallel = Number(argument('--parallel')) || DEFAULT_PARALLEL;
  const maxPages = Number(argument('--max-pages')) || DEFAULT_MAX_PAGES;
  const [from, to] = (range ?? '').split('-').map(Number);
  const picked = only
    ? ranking.filter((c) => c.chain.toLowerCase() === only.toLowerCase() || chainSlug(c.chain) === chainSlug(only))
    : some
      ? ranking.filter((c) => some.includes(chainSlug(c.chain)))
      : ranking.filter((c) => range && c.rank >= from && c.rank <= (to || from));
  if (picked.length === 0) throw new Error('Pick chains with --rank 1-10, --chain "Name" or --chains a,b (see data/chains/ranking.csv).');
  if (url && picked.length !== 1) throw new Error('--url goes with one --chain.');

  /** Set when AI or Firecrawl credit runs out: every chain after would fail the same way. */
  let stopped = '';
  const outOfCredit = (error: unknown) =>
    (error instanceof OpenAI.APIError && error.status === 402) || (error instanceof Error && /^Firecrawl \w+: 402\b/.test(error.message));

  const draftOne = async (entry: RankedChain) => {
    const slug = chainSlug(entry.chain);
    // A long run picks up where it stopped: chains with a menu file are done unless --redo.
    if (!redo && !url && existsSync(path.join(MENUS, `${slug}.csv`))) return;
    // A person put the chain on hold (only a catering guide, say) until they set the right guide with --url.
    if (!url && entry.notes.startsWith('hold:')) return;
    try {
      if (url) entry.guideUrl = url;
      let guide: Guide;
      if (entry.guideUrl.startsWith(ITEM_PAGES)) {
        const log = (line: string) => console.log(`#${entry.rank} ${entry.chain}: ${line}`);
        guide = await readItemPages(path.join(CACHE, slug), entry.guideUrl, { refetch, maxPages, log });
      } else if (entry.guideUrl) {
        guide = await usableGuide(entry, entry.guideUrl, refetch);
      } else if (!entry.site) {
        entry.notes = 'set site (the chain’s own website) or guide_url';
        console.warn(`#${entry.rank} ${entry.chain}: ${entry.notes}`);
        return;
      } else {
        const candidates = (await findGuides(entry.chain, entry.site)).slice(0, GUIDE_TRIES);
        if (candidates.length === 0) {
          entry.notes = `no nutrition page found on ${entry.site}: set guide_url by hand`;
          console.warn(`#${entry.rank} ${entry.chain}: ${entry.notes}`);
          return;
        }
        // The first page with numbers wins; otherwise the best match is kept with its problem for a person.
        const tried: Guide[] = [];
        for (const page of candidates) {
          tried.push(await usableGuide(entry, page, refetch));
          if (!('problem' in tried.at(-1)!)) break;
        }
        const usable = tried.findIndex((attempt) => !('problem' in attempt));
        guide = tried[Math.max(usable, 0)];
        entry.guideUrl = 'url' in guide ? guide.url : candidates[0];
      }
      writeRanking(ranking);
      if ('problem' in guide) {
        entry.notes = guide.problem;
        console.warn(`#${entry.rank} ${entry.chain}: ${entry.notes} (${entry.guideUrl})`);
        return;
      }
      const { text, readOn, pages } = guide;
      // Item pages keep their items: spec; a followed PDF replaces the page it was linked from.
      if (!pages) entry.guideUrl = guide.url;
      if (guidesOnly) {
        if (pages) {
          entry.notes = `item pages read ${readOn}: ${pages.length} with nutrition, ready to draft`;
          console.log(`#${entry.rank} ${entry.chain}: ready, ${pages.length} item pages with nutrition`);
          return;
        }
        const { rows, nutrients } = nutritionFacts(text);
        entry.notes = `guide read ${readOn}: ready to draft${datedNote(entry.guideUrl)}`;
        console.log(`#${entry.rank} ${entry.chain}: ready, ${rows} table rows, ${nutrients} nutrient words${datedNote(entry.guideUrl)} (${entry.guideUrl})`);
        return;
      }
      const [a, b] = await Promise.all(models.map((model) => cachedDraft(slug, model, entry.chain, text, redraft, Boolean(pages))));
      const { lines, problems } = compare(a.items, b.items, pages?.length);
      if (lines.length === 0) {
        entry.notes = 'no nutrition numbers found in the guide: set guide_url to the PDF or full table';
        console.warn(`#${entry.rank} ${entry.chain}: ${entry.notes}`);
        return;
      }
      const spot = sample(lines);
      writeMenu(slug, entry.chain, guide.url, readOn, lines, pages);
      writeReview(slug, entry.chain, guide.url, readOn, models, problems, spot, pages);
      const agreed = lines.length - problems.length;
      // A short list is usually one page or one promotion, not the whole guide.
      const few = lines.length < 20 ? '; few items: check the guide is the whole menu' : '';
      entry.notes = `drafted ${readOn}: ${agreed} agreed, ${problems.length} for a person${few}${datedNote(guide.url)}`;
      console.log(`#${entry.rank} ${entry.chain}: ${agreed} agreed, ${problems.length} pending, ${spot.length} to spot-check (${a.tokens + b.tokens} tokens)`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      // Out of credit: the chain keeps its notes and is picked up again on the next run.
      if (outOfCredit(error)) {
        stopped ||= message.slice(0, 200);
        return;
      }
      entry.notes = `failed: ${message.slice(0, 120)}`;
      console.error(`#${entry.rank} ${entry.chain}: ${entry.notes}`);
    } finally {
      writeRanking(ranking);
    }
  };

  // A few chains at a time, in rank order.
  const queue = [...picked];
  await Promise.all(
    Array.from({ length: Math.min(parallel, queue.length) }, async () => {
      for (let entry = queue.shift(); entry && !stopped; entry = queue.shift()) await draftOne(entry);
    }),
  );
  if (stopped) throw new Error(`Stopped, out of credit (${stopped}). Top up, then run the same command again: finished chains are skipped.`);
}

// Run only from the command line (the comparing is also used by a check script).
if (require.main === module) {
  void main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
