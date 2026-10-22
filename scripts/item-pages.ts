/**
 * Chains that publish nutrition one item per page (McDonald's, Starbucks) instead of in one guide. Their guide_url
 * in data/chains/ranking.csv is `items:<item page prefix>` followed by options:
 *   menu=<menu page>   take the items from the links on this page (the current menu); without it, Firecrawl's map
 *                      of the site lists them (every page it knows, retired items too)
 *   segments=<n>       keep this many path parts after the prefix (Starbucks: <id>/<form>)
 *   suffix=<path>      add this to each item's address (Starbucks shows nutrition at …/nutrition)
 *   skip=<regex>       leave out addresses that match (Starbucks' whole-bean coffee, sold in bags)
 * Listing costs one Firecrawl credit, each item page one more. Each page is read once (cached), cut down to its
 * nutrition panel, and becomes one numbered section of the text the two drafts copy, so every line keeps its own
 * page as its source.
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import { firecrawl } from './firecrawl';

export const ITEM_PAGES = 'items:';
/** Item pages read per chain at most, unless --max-pages says otherwise (a Firecrawl credit each). */
export const DEFAULT_MAX_PAGES = 250;
/** Item pages read at once (Firecrawl's plans limit browsers in use at a time). */
const PAGES_AT_ONCE = 3;
/** A nutrition panel spans at most this much text, and is kept to this much around it. */
const PANEL_SPAN = 4000;
const PANEL_MAX = 6000;

export type ItemPagesGuide = { url: string; text: string; readOn: string; pages: string[] };

type Page = { url: string; name: string; readOn: string; markdown: string };

/** `items:<prefix> [menu=<url>] [segments=<n>] [suffix=<path>] [skip=<regex>]` (above). */
function parseSpec(spec: string) {
  const [prefix = '', ...options] = spec.slice(ITEM_PAGES.length).trim().split(/\s+/);
  const option = (name: string) => options.find((part) => part.startsWith(`${name}=`))?.slice(name.length + 1);
  const skip = option('skip');
  return {
    prefix,
    menu: option('menu') ?? null,
    segments: Number(option('segments')) || null,
    suffix: option('suffix') ?? '',
    skip: skip ? new RegExp(skip, 'i') : null,
  };
}

/** An item page's address as listed, cut to its item and given the suffix: …/product/407/hot/nutrition. */
export function itemAddress(link: string, spec: string) {
  const { prefix, segments, suffix } = parseSpec(spec);
  let rest = link.slice(prefix.length).replace(/\/$/, '');
  if (suffix && rest.endsWith(suffix)) rest = rest.slice(0, -suffix.length);
  if (segments) rest = rest.split('/').slice(0, segments).join('/');
  return `${prefix}${rest}${suffix}`;
}

const today = () => new Date().toISOString().slice(0, 10);
const fileFor = (dir: string, key: string) => path.join(dir, `${createHash('sha1').update(key).digest('hex').slice(0, 16)}.json`);

/** The item pages' addresses, from the menu page's links or the site map (cached: a credit each time). */
async function listPages(dir: string, spec: string, refetch: boolean): Promise<string[]> {
  const file = fileFor(dir, `list ${spec}`);
  if (!refetch && existsSync(file)) return JSON.parse(readFileSync(file, 'utf8')) as string[];
  const parsed = parseSpec(spec);
  let links: string[];
  if (parsed.menu) {
    const result = await firecrawl<{ data?: { links?: string[] } }>('scrape', {
      url: parsed.menu,
      formats: ['links'],
      onlyMainContent: false,
      waitFor: 4000,
      timeout: 120_000,
    });
    links = result.data?.links ?? [];
  } else {
    const result = await firecrawl<{ links?: { url: string }[] }>('map', { url: parsed.prefix, limit: 5000, includeSubdomains: false });
    links = (result.links ?? []).map((link) => link.url);
  }
  const pages = [
    ...new Set(
      links
        .map((link) => link.split('#')[0].split('?')[0])
        .filter((link) => link.startsWith(parsed.prefix) && link.length > parsed.prefix.length && !parsed.skip?.test(link))
        .map((link) => itemAddress(link, spec)),
    ),
  ].sort();
  mkdirSync(dir, { recursive: true });
  writeFileSync(file, JSON.stringify(pages));
  return pages;
}

/** One item page as markdown, with its name (the page's heading, else its title), cached. */
async function readPage(dir: string, url: string, refetch: boolean): Promise<Page> {
  const file = fileFor(dir, url);
  if (!refetch && existsSync(file)) return JSON.parse(readFileSync(file, 'utf8')) as Page;
  // Item pages build their nutrition panels by script: give them time (Starbucks' needs about 8 seconds).
  const result = await firecrawl<{ data?: { markdown?: string; metadata?: { title?: string } } }>('scrape', {
    url,
    formats: ['markdown'],
    onlyMainContent: false,
    waitFor: 8000,
    timeout: 120_000,
  });
  const markdown = result.data?.markdown ?? '';
  const title = (result.data?.metadata?.title ?? '').split(/\s*[|:–]\s+|\s+-\s+/)[0];
  const page = { url, name: (/^# (.+)$/m.exec(markdown)?.[1] ?? title).trim(), readOn: today(), markdown };
  mkdirSync(dir, { recursive: true });
  writeFileSync(file, JSON.stringify(page));
  return page;
}

/** Headings carry badges glued to the name ("NewRed Bull®"): the badge goes. */
const cleanName = (name: string) => name.replace(/^New(?=[A-Z])/, '').trim();

const NUTRIENT_NAMES = /\b(calories|total fat|saturated fat|trans fat|cholesterol|sodium|(?:total )?carb(?:ohydrate)?s?|(?:dietary )?fiber|(?:total |added )?sugars|protein)\b/gi;
const nutrientOf = (name: string) =>
  /carb/i.test(name) ? 'carbs' : /fiber/i.test(name) ? 'fiber' : /sugars/i.test(name) ? 'sugars' : name.toLowerCase();

/**
 * The part of a page with its nutrition facts: the shortest stretch where the most different nutrients are named
 * close together (not a "580 calories" line in the description above it). Pages that name fewer than six (a menu
 * page, a promotion) have no panel.
 */
export function nutritionPanel(markdown: string): string | null {
  const text = markdown.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  const hits = [...text.matchAll(NUTRIENT_NAMES)].map((match) => ({ at: match.index ?? 0, nutrient: nutrientOf(match[1]) }));
  let best = { from: 0, to: 0, kinds: 0 };
  for (let i = 0; i < hits.length; i++) {
    const kinds = new Set<string>();
    let to = hits[i].at;
    for (let j = i; j < hits.length && hits[j].at - hits[i].at <= PANEL_SPAN; j++) {
      kinds.add(hits[j].nutrient);
      to = hits[j].at;
    }
    const tighter = kinds.size === best.kinds && to - hits[i].at < best.to - best.from;
    if (kinds.size > best.kinds || tighter) best = { from: hits[i].at, to, kinds: kinds.size };
  }
  if (best.kinds < 6) return null;
  return text
    .slice(Math.max(0, best.from - 300), best.to + 400)
    .replace(/[ \t]+/g, ' ')
    .replace(/\n\s*\n+/g, '\n')
    .trim()
    .slice(0, PANEL_MAX);
}

/**
 * The chain's item pages as one text for the drafts: a section per page with a nutrition panel, headed
 * "### Page N: name (address)" (the address often names the size), and the pages in the same order.
 */
export async function readItemPages(
  dir: string,
  spec: string,
  options: { refetch: boolean; maxPages: number; log: (line: string) => void },
): Promise<ItemPagesGuide | { problem: string }> {
  const { prefix } = parseSpec(spec);
  if (!/^https:\/\//.test(prefix)) return { problem: 'guide_url must be items:<https item page prefix> [menu=…] (scripts/item-pages.ts)' };
  const listed = await listPages(dir, spec, options.refetch);
  if (listed.length === 0) return { problem: `no item pages found under ${prefix}` };
  const urls = listed.slice(0, options.maxPages);
  options.log(`${urls.length} item pages${listed.length > urls.length ? ` (of ${listed.length}, --max-pages)` : ''}`);
  const pages: Page[] = new Array(urls.length);
  const queue = urls.map((url, index) => ({ url, index }));
  await Promise.all(
    Array.from({ length: Math.min(PAGES_AT_ONCE, queue.length) }, async () => {
      for (let next = queue.shift(); next; next = queue.shift()) pages[next.index] = await readPage(dir, next.url, options.refetch);
    }),
  );
  const sections: string[] = [];
  const kept: string[] = [];
  for (const page of pages) {
    const panel = nutritionPanel(page.markdown);
    if (!panel) continue;
    kept.push(page.url);
    sections.push(`### Page ${kept.length}: ${cleanName(page.name)} (${page.url.slice(prefix.length).replace(/\.html?$/, '')})\n${panel}`);
  }
  if (kept.length === 0) return { problem: `no nutrition panels found on the ${urls.length} item pages` };
  options.log(`${kept.length} of ${urls.length} item pages have a nutrition panel`);
  // The oldest read is the day these numbers were last checked.
  const readOn = pages.map((page) => page.readOn).sort()[0];
  return { url: prefix, text: sections.join('\n\n'), readOn, pages: kept };
}
