import { z } from 'zod';

import type { NutrientAmounts } from './nutrients';

/**
 * What to order (v2.5, WHAT-TO-ORDER.md): menu items of US restaurant chains, entered by hand from
 * each chain's own nutrition guide. The FDA menu-labeling rule (21 CFR 101.11) makes chains with 20
 * or more locations publish these numbers; facts carry no copyright, a guide's layout, photos and
 * logos do, so only the numbers are kept, each item with the page it came from and the day a person
 * checked it. These are the only restaurant numbers Weight Class ranks.
 */

/** How an item is used: mains are meals and get ranked; the rest are listed, never ranked as a meal. */
export const CHAIN_ITEM_KINDS = ['main', 'side', 'drink', 'extra', 'dessert'] as const;
export type ChainItemKind = (typeof CHAIN_ITEM_KINDS)[number];

/** `retired`: gone from the chain's menu (or the CSV); kept so logged meals can still point at it. */
export const CHAIN_ITEM_STATUSES = ['live', 'retired'] as const;
export type ChainItemStatus = (typeof CHAIN_ITEM_STATUSES)[number];

/**
 * How a line was checked against the chain's guide: two AI drafts from different models agreed on every
 * number (`two-drafts`, then `npm run chains:draft` picks a sample for a person), a person checked it
 * (`person`), or the drafts disagreed and it waits for a person (`pending`: never loaded).
 */
export const CHAIN_CHECKS = ['two-drafts', 'person', 'pending'] as const;
export type ChainCheck = (typeof CHAIN_CHECKS)[number];

/** The columns of `data/chains/<chain>.csv`, in order (units in the names). */
export const CHAIN_CSV_COLUMNS = [
  'chain',
  'section',
  'name',
  'serving',
  'serving_g',
  'kind',
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
  'source_url',
  'checked_on',
  'check',
] as const;

/** An item is rechecked against the chain's guide this often (or when someone reports it). */
export const RECHECK_DAYS = 183;

const amount = (max: number) =>
  z
    .string()
    .trim()
    .regex(/^\d+(\.\d+)?$/, 'a number (no units, no "<1")')
    .transform(Number)
    .pipe(z.number().min(0).max(max));
const optionalAmount = (max: number) =>
  z
    .string()
    .trim()
    .transform((value) => (value === '' ? null : value))
    .pipe(amount(max).nullable());

/** One CSV line as written by a person (every value a string), checked and turned into numbers. */
export const chainCsvRowSchema = z.object({
  chain: z.string().trim().min(2).max(60),
  section: z.string().trim().min(1).max(60),
  name: z.string().trim().min(2).max(120),
  serving: z.string().trim().min(1).max(80),
  serving_g: optionalAmount(3000),
  kind: z.enum(CHAIN_ITEM_KINDS),
  calories: amount(5000).pipe(z.number().int('whole kcal, as the guide prints it')),
  fat_g: amount(500),
  saturated_fat_g: amount(300),
  // Some guides leave these two out; the rest of the FDA's list is required.
  trans_fat_g: optionalAmount(100),
  cholesterol_mg: optionalAmount(3000),
  sodium_mg: amount(20000),
  carbs_g: amount(1000),
  fiber_g: amount(200),
  sugars_g: amount(1000),
  protein_g: amount(500),
  source_url: z.url({ protocol: /^https$/, error: "an https:// link to the chain's own page or PDF" }),
  checked_on: z.iso.date(),
  check: z.enum(CHAIN_CHECKS),
});
export type ChainCsvRow = z.infer<typeof chainCsvRowSchema>;

/** "Chick-fil-A" → "chick-fil-a", "McDonald's" → "mcdonalds", "Dunkin'" → "dunkin". */
export function chainSlug(chain: string) {
  return chain
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** The item's numbers in the app's nutrient keys (what a logged meal and Apple Health use). */
export function chainItemNutrients(row: ChainCsvRow): NutrientAmounts {
  return {
    calories: row.calories,
    protein: row.protein_g,
    carbs: row.carbs_g,
    fat: row.fat_g,
    fiber: row.fiber_g,
    sugars: row.sugars_g,
    saturatedFat: row.saturated_fat_g,
    sodium: row.sodium_mg,
    ...(row.cholesterol_mg === null ? {} : { cholesterol: row.cholesterol_mg }),
  };
}

/**
 * What a person should fix before an item loads (errors) or look at again (warnings). Guides round
 * (calories to 10, grams to whole numbers), so the energy check allows for it.
 */
export function checkChainItem(row: ChainCsvRow, today: string) {
  const errors: string[] = [];
  const warnings: string[] = [];
  const slack = 1;
  if (row.sugars_g > row.carbs_g + slack) errors.push(`sugars (${row.sugars_g} g) above carbs (${row.carbs_g} g)`);
  if (row.fiber_g > row.carbs_g + slack) errors.push(`fiber (${row.fiber_g} g) above carbs (${row.carbs_g} g)`);
  const fats = row.saturated_fat_g + (row.trans_fat_g ?? 0);
  if (fats > row.fat_g + slack) errors.push(`saturated + trans fat (${fats} g) above fat (${row.fat_g} g)`);
  if (row.checked_on > today) errors.push(`checked_on ${row.checked_on} is in the future`);
  const fromMacros = row.protein_g * 4 + row.carbs_g * 4 + row.fat_g * 9;
  if (Math.abs(fromMacros - row.calories) > Math.max(25, row.calories * 0.15)) {
    warnings.push(`protein, carbs and fat add up to ${Math.round(fromMacros)} kcal, the guide says ${row.calories}`);
  }
  const age = (Date.parse(`${today}T00:00:00Z`) - Date.parse(`${row.checked_on}T00:00:00Z`)) / 86_400_000;
  if (age > RECHECK_DAYS) warnings.push(`checked ${Math.round(age)} days ago: check it against the guide again`);
  return { errors, warnings };
}

/** `data/chains.json`, built by `npm run chains:build` and loaded by the server when it starts. */
export type ChainItemsFile = {
  /** A hash of the items: the server only writes when it changes. */
  version: string;
  items: {
    chainSlug: string;
    chain: string;
    section: string;
    name: string;
    serving: string;
    servingGrams: number | null;
    kind: ChainItemKind;
    calories: number;
    nutrients: NutrientAmounts;
    transFatG: number | null;
    sourceUrl: string;
    checkedOn: string;
  }[];
};
