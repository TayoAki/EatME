/**
 * Builds data/food-prices.json: what 100 g of each USDA FNDDS food (data/fndds.json.gz) costs as eaten, for the
 * meal costs in Plan tomorrow (BUDGET-PLANS.md §3). All sources are US government works (public domain).
 * - Staples (data/food-prices/staples.csv): the latest month's BLS average shelf price, turned into a price as eaten
 *   with each row's grams per unit (a cooking yield or the share left after peeling).
 * - Every other food: USDA ERS Purchase to Plate national average prices (the newest cycle that prices it), carried
 *   to the same month with the Consumer Price Index of its food group. A price more than three times its near
 *   neighbours' (same first six code digits) is pulled back to theirs: a cheap one is left, since the plain food
 *   ("Lettuce, raw") is often the cheapest of its group (arugula, mixed greens).
 * - Alcoholic drinks are never priced.
 * Usage: npm run prices:build            (download, check, write)
 *        npm run prices:build -- --check (print the staples check, write nothing)
 * Run it each month after BLS publishes the CPI (mid-month), commit the file, and the server loads it into
 * `food_prices` when it starts (server/food-prices.mjs).
 */
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { gunzipSync } from 'node:zlib';

import { parseCsv } from './csv';

const DATA = path.join(__dirname, '..', 'data');
const CACHE = path.join(DATA, 'food-prices', '.cache');
const OUT = path.join(DATA, 'food-prices.json');
const PPNAP_URL = 'https://www.ers.usda.gov/media/6557/purchase-to-plate-national-average-prices-for-nhanes-csv-format.zip?v=99531';
const fredUrl = (id: string) => `https://fred.stlouisfed.org/graph/fredgraph.csv?id=${id}`;
const checkOnly = process.argv.includes('--check');

/** The CPI-U food groups (US city average, not seasonally adjusted) that carry 2017–18 prices to today. */
const CPI = {
  food: 'CUUR0000SAF11',
  cereals: 'CUUR0000SAF111',
  meats: 'CUUR0000SAF112',
  dairy: 'CUUR0000SEFJ',
  produce: 'CUUR0000SAF113',
  drinks: 'CUUR0000SAF114',
  sweets: 'CUUR0000SEFR',
  fats: 'CUUR0000SEFS',
  other: 'CUUR0000SEFT',
} as const;
/**
 * Beef, poultry and eggs move apart from the meats index (USDA forecast beef up 8.7% and eggs down 29% in 2026), and
 * the public CPI files break out no finer group, so the BLS average prices of their main items stand in.
 */
const ITEMS = { beef: ['APU0000FC1101'], poultry: ['APU0000706111', 'APU0000FF1101'], eggs: ['APU0000708111'] } as const;

/** The index (one or more series, averaged) that carries a food's price, by its FNDDS code; null = never priced. */
function indexFor(code: string): readonly string[] | null {
  const one = code[0];
  const two = code.slice(0, 2);
  if (two === '93') return null; // alcoholic drinks
  if (two === '21') return ITEMS.beef;
  if (two === '24') return ITEMS.poultry;
  if (two === '31') return ITEMS.eggs;
  if (['22', '23', '25', '26'].includes(two)) return [CPI.meats];
  if (one === '1') return [CPI.dairy];
  if (two === '41') return [CPI.produce]; // dried beans and peas sit with processed fruits and vegetables
  if (one === '4') return [CPI.other]; // nuts and seeds
  if (['51', '52', '53', '54', '55', '56', '57'].includes(two)) return [CPI.cereals];
  if (two === '64') return [CPI.drinks]; // fruit juices
  if (two === '67' || two === '76') return [CPI.other]; // baby foods
  if (one === '6' || one === '7') return [CPI.produce];
  if (one === '8') return [CPI.fats];
  if (two === '91') return [CPI.sweets];
  if (one === '9') return [CPI.drinks];
  return [CPI.food]; // mixed dishes, frozen meals, soups, egg dishes
}

/** Each Purchase to Plate cycle and the years of the retail data behind its prices (its read-me). */
const CYCLES: { name: string; years: number[] }[] = [
  { name: '2017/2018', years: [2017, 2018] },
  { name: '2015/2016', years: [2015, 2016] },
  { name: '2013/2014', years: [2015] },
  { name: '2011/2012', years: [2013] },
];

/**
 * FRED answers 503 to Node's default user agent and to bursts, so downloads name the script, go one at a time and
 * retry with a growing wait.
 */
async function download(url: string) {
  for (let attempt = 1; ; attempt++) {
    const response = await fetch(url, { headers: { 'User-Agent': 'WeightClassPriceBuild/1.0' } });
    if (response.ok) return Buffer.from(await response.arrayBuffer());
    if (attempt === 5 || response.status < 500) throw new Error(`${url}: ${response.status}`);
    await new Promise((resolve) => setTimeout(resolve, 2000 * 2 ** attempt));
  }
}

/** Monthly values of a FRED series, "2026-09" → value. */
async function fredSeries(id: string) {
  const text = (await download(fredUrl(id))).toString('utf8');
  const values = new Map<string, number>();
  for (const line of text.split('\n').slice(1)) {
    const [date, value] = line.trim().split(',');
    if (date && value && value !== '.') values.set(date.slice(0, 7), Number(value));
  }
  if (values.size === 0) throw new Error(`FRED returned no data for ${id}`);
  return values;
}

async function purchaseToPlate() {
  mkdirSync(CACHE, { recursive: true });
  const zip = path.join(CACHE, 'pp-nap.zip');
  if (!existsSync(zip)) writeFileSync(zip, await download(PPNAP_URL));
  const csv = execFileSync('unzip', ['-p', zip, 'pp_national_average_prices_csv.csv'], { maxBuffer: 64 * 1024 * 1024 }).toString('utf8');
  const [header, ...rows] = parseCsv(csv);
  const col = (name: string) => header.indexOf(name);
  const [year, code, mod, price] = [col('year'), col('food_code'), col('mod_code'), col('price_100gm')];
  const prices = new Map<string, Map<string, number>>(CYCLES.map((c) => [c.name, new Map()]));
  for (const row of rows) {
    // 2011/2012 also prices modified recipes (mod_code), which the FNDDS of today doesn't have.
    if (row[year] === '2011/2012' && !['0', ''].includes(row[mod])) continue;
    const value = Number(row[price]);
    if (Number.isFinite(value) && value > 0) prices.get(row[year])?.set(row[code], value);
  }
  return prices;
}

type Staple = { series: string; item: string; unit: string; grams: number; codes: string[]; note: string };
function staples(): Staple[] {
  const [header, ...rows] = parseCsv(readFileSync(path.join(DATA, 'food-prices', 'staples.csv'), 'utf8'));
  const col = (name: string) => header.indexOf(name);
  return rows.map((row) => ({
    series: row[col('series')],
    item: row[col('item')],
    unit: row[col('unit')],
    grams: Number(row[col('grams')]),
    codes: row[col('codes')].split(/\s+/).filter(Boolean),
    note: row[col('note')],
  }));
}

const median = (values: number[]) => {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
};

async function main() {
  const fndds = JSON.parse(gunzipSync(readFileSync(path.join(DATA, 'fndds.json.gz'))).toString('utf8')) as {
    version: string;
    foods: [number, string, string, string | null, ...unknown[]][];
  };
  const staple = staples();
  const seriesIds = [...new Set([...Object.values(CPI), ...Object.values(ITEMS).flat(), ...staple.map((s) => s.series)])];
  const series = new Map<string, Map<string, number>>();
  for (const id of seriesIds) series.set(id, await fredSeries(id));
  // The newest month every series has.
  const month = [...series.values()].map((values) => [...values.keys()].sort().at(-1)!).sort()[0];
  const at = (id: string) => {
    const value = series.get(id)!.get(month);
    if (value === undefined) throw new Error(`${id} has no value for ${month}`);
    return value;
  };
  const baseOf = (id: string, years: number[]) => {
    const values = [...series.get(id)!].filter(([key]) => years.includes(Number(key.slice(0, 4)))).map(([, v]) => v);
    if (values.length === 0) throw new Error(`${id} has no values for ${years.join('–')}`);
    return values.reduce((a, b) => a + b, 0) / values.length;
  };
  /** How much prices of a food group rose from a cycle's years to `month`. */
  const growth = (index: readonly string[], years: number[]) => index.reduce((sum, id) => sum + at(id) / baseOf(id, years), 0) / index.length;

  const ppnap = await purchaseToPlate();
  const stapleByCode = new Map<string, Staple>();
  for (const s of staple) for (const code of s.codes) stapleByCode.set(code, s);

  // Purchase to Plate prices for every food, carried to `month` (dollars per 100 g as eaten).
  const carried = new Map<string, { dollars: number; cycle: string }>();
  for (const [, code] of fndds.foods) {
    const index = indexFor(code);
    if (!index) continue;
    const cycle = CYCLES.find((c) => ppnap.get(c.name)!.has(code));
    if (!cycle) continue;
    carried.set(code, { dollars: ppnap.get(cycle.name)!.get(code)! * growth(index, cycle.years), cycle: cycle.name });
  }
  // Pull far-off high prices back to their near neighbours (same first six code digits, at least three of them).
  const groups = new Map<string, number[]>();
  for (const [code, { dollars }] of carried) groups.set(code.slice(0, 6), [...(groups.get(code.slice(0, 6)) ?? []), dollars]);
  let pulled = 0;
  for (const [code, entry] of carried) {
    const group = groups.get(code.slice(0, 6))!;
    if (group.length < 3) continue;
    const typical = median(group);
    if (entry.dollars > 3 * typical) {
      entry.dollars = typical;
      pulled++;
    }
  }

  // The staples check: Purchase to Plate, carried forward, against the BLS shelf price as eaten.
  const checks = staple.flatMap((s) =>
    s.codes
      .filter((code) => carried.has(code))
      .map((code) => {
        const bls = (at(s.series) / s.grams) * 100;
        return { code, item: s.item, usda: carried.get(code)!.dollars, bls, error: carried.get(code)!.dollars / bls - 1 };
      }),
  );
  console.log(`Staples check, ${month}: USDA Purchase to Plate carried forward vs the BLS shelf price (per 100 g as eaten)`);
  for (const c of checks) {
    const name = fndds.foods.find((f) => f[1] === c.code)?.[2] ?? c.code;
    console.log(`  ${name.slice(0, 58).padEnd(58)} USDA $${c.usda.toFixed(3)}  BLS $${c.bls.toFixed(3)}  ${c.error >= 0 ? '+' : ''}${Math.round(c.error * 100)}%`);
  }
  const errors = checks.map((c) => Math.abs(c.error));
  console.log(`  ${checks.length} foods: median gap ${Math.round(median(errors) * 100)}%, within 25%: ${errors.filter((e) => e <= 0.25).length}`);
  if (checkOnly) return;

  const prices: [number, number, string][] = [];
  for (const [id, code] of fndds.foods) {
    const s = stapleByCode.get(code);
    if (s) prices.push([id, Math.round(((at(s.series) / s.grams) * 100) * 10000) / 100, 'bls']);
    else if (carried.has(code)) prices.push([id, Math.round(carried.get(code)!.dollars * 10000) / 100, carried.get(code)!.cycle]);
  }
  prices.sort((a, b) => a[0] - b[0]);
  const hash = createHash('sha256').update(JSON.stringify(prices)).digest('hex').slice(0, 8);
  const file = {
    version: `${month}.${hash}`,
    month,
    foods: fndds.version,
    built: new Date().toISOString().slice(0, 10),
    sources: {
      staples: 'BLS average prices (CPI-U, US city average), read through FRED',
      others: 'USDA ERS Purchase to Plate National Average Prices, carried forward with the CPI-U food groups',
    },
    /** [food id, US cents per 100 g as eaten, basis: "bls" or the Purchase to Plate cycle] */
    prices,
  };
  writeFileSync(OUT, `${JSON.stringify(file)}\n`);
  const share = Math.round((prices.length / fndds.foods.length) * 1000) / 10;
  console.log(
    `Wrote ${path.relative(process.cwd(), OUT)}: ${prices.length} of ${fndds.foods.length} foods (${share}%), ` +
      `${prices.filter((p) => p[2] === 'bls').length} from BLS staples, ${pulled} pulled back to their neighbours, prices for ${month}`,
  );
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
