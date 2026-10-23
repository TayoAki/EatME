/**
 * The accuracy pilot for What to order (WHAT-TO-ORDER.md §11): dishes of the chains we have checked
 * numbers for, read the way a menu photo shows them (name, size and section, never the chain's name),
 * through the menu pipeline (the AI's foods and portions → our USDA database), against the chains'
 * own published numbers. Writes data/chains/pilot.md with the errors, the pass lines and the
 * calibration for `ESTIMATE_CALIBRATION` (src/shared/menus.ts).
 *
 * Needs OPENROUTER_API_KEY and a DATABASE_URL with the USDA foods loaded (npm run db:foods); no
 * person's data is read. Usage: npm run menus:pilot -- [--mains 25] [--chains mcdonalds,starbucks]
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import { config } from 'dotenv';

import { CHAIN_CSV_COLUMNS, chainCsvRowSchema, type ChainCsvRow } from '../src/shared/chains';
import { rankMenu, type MenuDay, type MenuDish } from '../src/shared/menu-fit';
import type { DishLine } from '../src/shared/menus';
import { addNutrients } from '../src/shared/nutrients';
import { parseCsv } from './csv';

config({ quiet: true });

const DIR = path.join(__dirname, '..', 'data', 'chains', 'menus');
const OUT = path.join(__dirname, '..', 'data', 'chains', 'pilot.md');
const argument = (name: string) => {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
};
const MAINS = Number(argument('--mains')) || 25;
const OTHERS = { side: 5, drink: 5, dessert: 3 } as const;
const PRICE_BATCH = 8;
const only = argument('--chains')?.split(',');

type Sample = { chain: string; row: ChainCsvRow; key: string };

/** Spread over the menu: the dishes sorted by calories, then every n-th, so small and big plates both count. */
function spread<T>(list: readonly T[], count: number, calories: (t: T) => number) {
  const sorted = [...list].sort((a, b) => calories(a) - calories(b));
  if (sorted.length <= count) return sorted;
  return Array.from({ length: count }, (_, i) => sorted[Math.floor(((i + 0.5) * sorted.length) / count)]);
}

function loadSamples(): Sample[][] {
  const files = readdirSync(DIR).filter((name) => name.endsWith('.csv') && !name.startsWith('_'));
  return files.flatMap((file) => {
    const slug = file.replace(/\.csv$/, '');
    if (only && !only.includes(slug)) return [];
    const [, ...lines] = parseCsv(readFileSync(path.join(DIR, file), 'utf8'));
    const rows = lines.flatMap((values) => {
      const parsed = chainCsvRowSchema.safeParse(Object.fromEntries(CHAIN_CSV_COLUMNS.map((column, i) => [column, values[i] ?? ''])));
      // Only numbers a check agreed on: two drafts or a person (never `pending`).
      return parsed.success && parsed.data.check !== 'pending' ? [parsed.data] : [];
    });
    if (rows.filter((r) => r.kind === 'main').length < 8) return [];
    // One size per dish name (the first listed), as a menu page shows it.
    const seen = new Set<string>();
    const unique = rows.filter((r) => !seen.has(r.name.toLowerCase()) && seen.add(r.name.toLowerCase()));
    const pick = (kind: ChainCsvRow['kind'], count: number) => spread(unique.filter((r) => r.kind === kind), count, (r) => r.calories);
    const chosen = [...pick('main', MAINS), ...pick('side', OTHERS.side), ...pick('drink', OTHERS.drink), ...pick('dessert', OTHERS.dessert)];
    return [chosen.map((row, i) => ({ chain: row.chain, row, key: `${slug}-${i + 1}` }))];
  });
}

/** What a menu would print: the name, its size when the guide gives a real one, and the section. */
function lineOf(row: ChainCsvRow): DishLine {
  const serving = row.serving.trim();
  const trivial = /^1\s+(each|ea|item|serving|order|sandwich|burger|wrap|bowl|salad|burrito|taco)s?$/i.test(serving);
  return { name: trivial ? row.name : `${row.name} — ${serving}`, section: row.section };
}

const quantile = (values: readonly number[], q: number) => {
  if (values.length === 0) return NaN;
  const sorted = [...values].sort((a, b) => a - b);
  const pos = (sorted.length - 1) * q;
  const low = Math.floor(pos);
  const high = Math.ceil(pos);
  return sorted[low] + (sorted[high] - sorted[low]) * (pos - low);
};
const median = (values: readonly number[]) => quantile(values, 0.5);
const pct = (value: number) => `${value >= 0 ? '' : '−'}${Math.abs(Math.round(value * 100))}%`;

type Result = { sample: Sample; published: number; quick: number; priced: number; matchedShare: number; protein: { published: number; priced: number } };

async function run() {
  // Loaded after dotenv: the server modules read DATABASE_URL and the AI keys when first used.
  const { analyzeMenuLines, priceFoods } = await import('../src/lib/server/menu-analysis');
  const { itemTotals } = await import('../src/lib/server/food-match');

  const chains = loadSamples();
  const results: Result[] = [];
  const skipped: string[] = [];
  for (const samples of chains) {
    const lines = samples.map((s) => lineOf(s.row));
    console.log(`${samples[0].chain}: ${samples.length} dishes`);
    const { byLine } = await analyzeMenuLines(lines, null);
    for (let start = 0; start < samples.length; start += PRICE_BATCH) {
      const batch = samples.slice(start, start + PRICE_BATCH).flatMap((sample, i) => {
        const analysis = byLine.get(start + i + 1);
        if (!analysis?.isDish || analysis.items.length === 0) {
          skipped.push(`${sample.chain}: ${sample.row.name}`);
          return [];
        }
        return [{ sample, analysis }];
      });
      const priced = await priceFoods(batch.map((b) => b.analysis));
      batch.forEach(({ sample, analysis }, i) => {
        const quick = addNutrients(analysis.items.map((item) => ({ calories: item.calories })));
        const totals = itemTotals(priced[i]);
        results.push({
          sample,
          published: sample.row.calories,
          quick: Math.round(quick.calories ?? 0),
          priced: Math.round(totals.nutrients.calories ?? 0),
          matchedShare: totals.matchedShare,
          protein: { published: sample.row.protein_g, priced: Math.round(totals.nutrients.protein ?? 0) },
        });
      });
    }
  }
  return { chains, results, skipped };
}

/** The share an estimate needs below and above it to hold the published number 80% of the time (10% out each side). */
function widths(pairs: readonly { published: number; estimate: number }[]) {
  const ratios = pairs.filter((p) => p.estimate > 0).map((p) => p.published / p.estimate);
  const above = Math.max(0.1, quantile(ratios.map((r) => r - 1), 0.9));
  const below = Math.max(0.1, quantile(ratios.map((r) => 1 - r), 0.9));
  return { below: Math.round(Math.min(below, 0.6) * 100) / 100, above: Math.round(Math.min(above, 1) * 100) / 100 };
}

async function main() {
  const { chains, results, skipped } = await run();
  const error = (r: Result, value: number) => (value - r.published) / r.published;
  const priced = results.map((r) => error(r, r.priced));
  const quick = results.map((r) => error(r, r.quick));

  // A measured underestimate is corrected upward (never down: a high estimate is the safe side).
  const bias = median(priced);
  const correction = bias < -0.05 ? Math.min(1.5, Math.round((1 / (1 + bias)) * 100) / 100) : 1;
  const corrected = (r: Result) => r.priced * correction;
  const correctedError = results.map((r) => error(r, corrected(r)));

  const kinds = ['main', 'side', 'drink', 'dessert'] as const;
  const overall = widths(results.map((r) => ({ published: r.published, estimate: corrected(r) })));
  const overallQuick = widths(results.map((r) => ({ published: r.published, estimate: r.quick * correction })));
  const byKind = Object.fromEntries(
    kinds.map((kind) => {
      const list = results.filter((r) => r.sample.row.kind === kind);
      // Too few dishes of a kind to measure: the overall widths.
      return [kind, list.length >= 15 ? widths(list.map((r) => ({ published: r.published, estimate: corrected(r) }))) : overall];
    }),
  );
  const byKindQuick = Object.fromEntries(
    kinds.map((kind) => {
      const list = results.filter((r) => r.sample.row.kind === kind);
      return [kind, list.length >= 15 ? widths(list.map((r) => ({ published: r.published, estimate: r.quick * correction }))) : overallQuick];
    }),
  );

  // Big plates: the AI underestimates more as portions grow (F14). Fine if the correction covers it.
  const big = results.filter((r) => r.published >= 800);
  const bigBias = median(big.map((r) => error(r, corrected(r))));

  // The top five against the chain's own numbers, for three days (aims of 500, 750 and 1,000 kcal).
  const days: { label: string; day: MenuDay }[] = [500, 750, 1000].map((aim) => ({
    label: `${aim} kcal`,
    day: { target: { calories: 2 * aim + 300, proteinG: 120 }, eaten: { calories: 300, proteinG: 25 }, floor: 1200, glp1: false, later: ['dinner'] },
  }));
  const overlaps = chains.flatMap((samples) => {
    const mains = results.filter((r) => samples.includes(r.sample) && r.sample.row.kind === 'main');
    if (mains.length < 8) return [];
    const asDish = (r: Result, source: 'chain' | 'estimate'): MenuDish => {
      const calories = source === 'chain' ? r.published : Math.round(corrected(r));
      const w = byKind.main;
      return {
        key: r.sample.key,
        name: r.sample.row.name,
        kind: 'main',
        numbers: { calories, proteinG: source === 'chain' ? r.protein.published : r.protein.priced * correction, carbsG: 0, fatG: 0 },
        range: source === 'chain' ? null : { low: calories * (1 - w.below), high: calories * (1 + w.above) },
        source,
      };
    };
    return days.map(({ label, day }) => {
      const published = rankMenu(mains.map((r) => asDish(r, 'chain')), day).fitsWell.map((d) => d.key);
      const ours = rankMenu(mains.map((r) => asDish(r, 'estimate')), day).fitsWell.map((d) => d.key);
      const shared = published.filter((key) => ours.includes(key)).length;
      // Safety: each dish we put in Fits well, judged by the chain's own numbers (alone, it fits or it doesn't).
      const judged = ours.map((key) => {
        const r = mains.find((m) => m.sample.key === key)!;
        const alone = rankMenu([asDish(r, 'chain')], day);
        return alone.fitsWell.length === 1 ? 'fits' : r.published > alone.aim.calories ? 'too big' : 'too small';
      });
      return { chain: samples[0].chain, label, shared, of: Math.min(published.length, ours.length), judged };
    });
  });

  const medianAbs = median(correctedError.map(Math.abs));
  // A day where either list is empty compares nothing; a shorter list counts as its share (2 of 2 is all of it).
  const compared = overlaps.filter((o) => o.of > 0);
  const overlapShare = median(compared.map((o) => o.shared / o.of));
  const overlapPass = compared.length > 0 && overlapShare >= 0.6;
  const judged = overlaps.flatMap((o) => o.judged);
  const judgedShare = (verdict: string) => (judged.length ? judged.filter((j) => j === verdict).length / judged.length : 0);
  const pass = {
    error: medianAbs <= 0.2,
    topFive: overlapPass,
    bigPlates: big.length === 0 || bigBias >= -0.1,
  };

  const table = (rows: string[][]) => rows.map((row) => `| ${row.join(' | ')} |`).join('\n');
  const today = new Date().toISOString().slice(0, 10);
  const report = `# What to order: accuracy pilot

Run ${today} with \`npm run menus:pilot\` (WHAT-TO-ORDER.md §11). ${results.length} dishes from ${chains.length} chains, each read the
way a menu photo shows it (name, size and section; never the chain's name) through the menu pipeline: the AI's foods and
restaurant portions, priced from the USDA database. Compared with each chain's own published calories (only numbers two
drafts or a person agreed on). Error = (our estimate − published) ÷ published.

## Pass lines

| Check | Result | Pass line | Passed |
| --- | --- | --- | --- |
| Median calorie error (after the correction) | ${pct(medianAbs)} | 20% or less | ${pass.error ? 'yes' : 'no'} |
| Fits well: our top five and the published top five share | median ${pct(overlapShare)} (${compared.length} days compared) | at least 3 of 5 (60%) | ${pass.topFive ? 'yes' : 'no'} |
| Big plates (published 800 kcal or more): median error after the correction | ${big.length ? pct(bigBias) : 'none in the sample'} (${big.length} dishes) | no underestimate beyond 10% | ${pass.bigPlates ? 'yes' : 'no'} |

Safety, not a pass line: of the ${judged.length} dishes we put in Fits well, ${pct(judgedShare('fits'))} fit the day by the chain's own
numbers too; ${pct(judgedShare('too big'))} are too big by them (they'd leave less than a small meal for each meal still to come)
and ${pct(judgedShare('too small'))} too small to be a meal.

## Errors

| | Dishes | Median error (bias) | Median size of the error | 80% of errors within |
| --- | --- | --- | --- | --- |
| Priced from our database, before the correction | ${results.length} | ${pct(bias)} | ${pct(median(priced.map(Math.abs)))} | ${pct(quantile(priced.map(Math.abs), 0.8))} |
| Priced, after the correction (×${correction}) | ${results.length} | ${pct(median(correctedError))} | ${pct(medianAbs)} | ${pct(quantile(correctedError.map(Math.abs), 0.8))} |
| The AI's own quick estimate | ${results.length} | ${pct(median(quick))} | ${pct(median(quick.map(Math.abs)))} | ${pct(quantile(quick.map(Math.abs), 0.8))} |
${kinds
  .map((kind) => {
    const list = results.filter((r) => r.sample.row.kind === kind);
    if (list.length === 0) return '';
    const e = list.map((r) => error(r, corrected(r)));
    return `| ${kind[0].toUpperCase()}${kind.slice(1)}s, priced and corrected | ${list.length} | ${pct(median(e))} | ${pct(median(e.map(Math.abs)))} | ${pct(quantile(e.map(Math.abs), 0.8))} |`;
  })
  .filter(Boolean)
  .join('\n')}

Database match: ${pct(median(results.map((r) => r.matchedShare)))} of a dish's calories came from USDA foods (median).

## Calibration (copy into \`ESTIMATE_CALIBRATION\`)

Ranges hold the published number about 80% of the time (10% outside on each side); a kind with fewer than 15 dishes
uses the overall widths.

\`\`\`ts
correction: ${correction},
estimate: ${JSON.stringify(byKind)},
quick: ${JSON.stringify(byKindQuick)},
\`\`\`

## Fits well, published against ours

${table([['Chain', 'Day (aim)', 'Shared of the top five'], ...overlaps.map((o) => [o.chain, o.label, `${o.shared} of ${o.of}`])])}

## Every dish

${table([
  ['Chain', 'Dish', 'Published', 'Ours (corrected)', 'Error', 'Quick'],
  ...results.map((r) => [
    r.sample.chain,
    lineOf(r.sample.row).name.replaceAll('|', '/'),
    String(r.published),
    String(Math.round(corrected(r))),
    pct(error(r, corrected(r))),
    String(r.quick),
  ]),
])}
${skipped.length ? `\nNot read as a dish by the AI (left out): ${skipped.join('; ')}.\n` : ''}
**Limits.** The chains' dish names are well known, so the AI may remember some numbers; a local restaurant's menu has no
such help. Menus usually print a description too; this test had names and sizes only.
`;
  writeFileSync(OUT, report);
  console.log(report.split('## Errors')[0]);
  console.log(`Wrote ${path.relative(process.cwd(), OUT)}`);
  process.exit(0);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
