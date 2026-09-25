/**
 * Builds data/fndds.json.gz from the USDA FNDDS CSV download (FoodData Central, public domain):
 *   https://fdc.nal.usda.gov/download-datasets → "Survey (FNDDS)" → CSV
 * Usage: npm run foods:build -- <path to the unzipped FoodData_Central_survey_food_csv_… folder>
 * The server loads the file into the `foods` table when it starts (server/foods.mjs).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { gzipSync } from 'node:zlib';

import { NUTRIENTS } from '../src/shared/nutrients';

export const FOODS_VERSION = 'fndds-2021-2023';
const MAX_PORTIONS = 6;

/** Minimal RFC 4180 CSV parser (quoted fields, doubled quotes). */
function parseCsv(text: string): Record<string, string>[] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else field += c;
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  const [header, ...data] = rows.filter((r) => r.length > 1 || r[0] !== '');
  return data.map((r) => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ''])));
}

const round = (n: number) => (Math.abs(n) >= 100 ? Math.round(n * 10) / 10 : Math.round(n * 1000) / 1000);

function main() {
  const dir = process.argv[2];
  if (!dir) throw new Error('Pass the folder of the unzipped FNDDS CSV download.');
  const read = (file: string) => parseCsv(readFileSync(path.join(dir, file), 'utf8'));

  const categories = new Map(read('wweia_food_category.csv').map((r) => [r.wweia_food_category, r.wweia_food_category_description]));
  const codes = new Map(read('survey_fndds_food.csv').map((r) => [r.fdc_id, r.food_code]));
  const column = new Map(NUTRIENTS.map((n, i) => [String(n.nbr), i]));

  const values = new Map<string, (number | null)[]>();
  for (const r of read('food_nutrient.csv')) {
    const index = column.get(r.nutrient_id);
    if (index === undefined) continue;
    let list = values.get(r.fdc_id);
    if (!list) values.set(r.fdc_id, (list = NUTRIENTS.map(() => null)));
    list[index] = round(Number(r.amount));
  }

  const portions = new Map<string, [string, number][]>();
  for (const r of read('food_portion.csv')) {
    const grams = Number(r.gram_weight);
    if (!(grams > 0) || /not specified/i.test(r.portion_description)) continue;
    const list = portions.get(r.fdc_id) ?? [];
    if (list.length < MAX_PORTIONS) list.push([r.portion_description, round(grams)]);
    portions.set(r.fdc_id, list);
  }

  const foods = read('food.csv').map((r) => [
    Number(r.fdc_id),
    codes.get(r.fdc_id) ?? '',
    r.description,
    categories.get(r.food_category_id) ?? null,
    values.get(r.fdc_id) ?? NUTRIENTS.map(() => null),
    portions.get(r.fdc_id) ?? [],
  ]);

  const out = {
    version: FOODS_VERSION,
    source: 'USDA Food and Nutrient Database for Dietary Studies 2021-2023, FoodData Central (public domain, CC0)',
    keys: NUTRIENTS.map((n) => n.key),
    foods,
  };
  const file = path.join(__dirname, '..', 'data', 'fndds.json.gz');
  writeFileSync(file, gzipSync(JSON.stringify(out), { level: 9 }));
  console.log(`Wrote ${foods.length} foods × ${out.keys.length} nutrients to ${path.relative(process.cwd(), file)}`);
}

main();
