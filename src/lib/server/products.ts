import { inArray } from 'drizzle-orm';

import { db } from '@/db';
import { products, type ProductRow } from '@/db/schema';
import { barcodeCandidates } from '@/shared/barcodes';
import { NUTRIENTS, type NutrientAmounts, type NutrientKey } from '@/shared/nutrients';
import type { Product, ProductSource } from '@/shared/products';

import { HttpError } from './http';

/** Found products are refreshed after a month; unknown barcodes are asked about again the next day. */
const FOUND_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const MISSING_TTL_MS = 24 * 60 * 60 * 1000;
const TIMEOUT_MS = 6000;

const offBaseUrl = () => process.env.OFF_BASE_URL ?? 'https://world.openfoodfacts.org';
const fdcBaseUrl = () => process.env.FDC_BASE_URL ?? 'https://api.nal.usda.gov/fdc/v1';
/** Open Food Facts asks every app to identify itself. */
const userAgent = () => process.env.OFF_USER_AGENT || 'EatME/1.0 (calorie tracker app)';

type ProductData = {
  source: ProductSource;
  name: string;
  brand: string | null;
  servingSize: string | null;
  servingGrams: number | null;
  packageGrams: number | null;
  nutrients: NutrientAmounts;
};

const round = (value: number) => Math.round(value * 1000) / 1000;
const text = (value: unknown, max = 120) => (typeof value === 'string' && value.trim() ? value.trim().slice(0, max) : null);
const amount = (value: unknown, max: number) => {
  const n = typeof value === 'string' ? Number(value.replace(',', '.')) : Number(value);
  return Number.isFinite(n) && n > 0 && n <= max ? round(n) : null;
};

/** Calories, protein, carbs and fat are known and possible for 100 g. */
export function isComplete(n: NutrientAmounts) {
  const { calories, protein, carbs, fat } = n;
  if (calories === undefined || protein === undefined || carbs === undefined || fat === undefined) return false;
  return calories <= 950 && protein <= 100 && carbs <= 100 && fat <= 100 && protein + carbs + fat <= 105;
}

// ─── Open Food Facts ───────────────────────────────────────────────────────────

/** Open Food Facts nutriment → EatME nutrient, with the factor from its unit (grams; kcal for energy). */
const OFF_NUTRIENTS: [string, NutrientKey, number][] = [
  ['energy-kcal', 'calories', 1],
  ['proteins', 'protein', 1],
  ['carbohydrates', 'carbs', 1],
  ['fat', 'fat', 1],
  ['fiber', 'fiber', 1],
  ['sugars', 'sugars', 1],
  ['saturated-fat', 'saturatedFat', 1],
  ['monounsaturated-fat', 'monoFat', 1],
  ['polyunsaturated-fat', 'polyFat', 1],
  ['cholesterol', 'cholesterol', 1000],
  ['sodium', 'sodium', 1000],
  ['potassium', 'potassium', 1000],
  ['calcium', 'calcium', 1000],
  ['iron', 'iron', 1000],
  ['magnesium', 'magnesium', 1000],
  ['phosphorus', 'phosphorus', 1000],
  ['zinc', 'zinc', 1000],
  ['copper', 'copper', 1000],
  ['selenium', 'selenium', 1e6],
  ['vitamin-a', 'vitaminA', 1e6],
  ['vitamin-c', 'vitaminC', 1000],
  ['vitamin-d', 'vitaminD', 1e6],
  ['vitamin-e', 'vitaminE', 1000],
  ['vitamin-k', 'vitaminK', 1e6],
  ['vitamin-b1', 'thiamin', 1000],
  ['vitamin-b2', 'riboflavin', 1000],
  ['vitamin-pp', 'niacin', 1000],
  ['vitamin-b6', 'vitaminB6', 1000],
  ['vitamin-b9', 'folate', 1e6],
  ['vitamin-b12', 'vitaminB12', 1e6],
  ['choline', 'choline', 1000],
  ['caffeine', 'caffeine', 1000],
];

// Open Food Facts only returns product_quantity when quantity and its unit are asked for too.
const OFF_FIELDS = [
  'code', 'product_name', 'product_name_en', 'generic_name', 'generic_name_en', 'brands', 'serving_size', 'serving_quantity',
  'quantity', 'product_quantity', 'product_quantity_unit', 'nutriments',
].join(',');

type OffProduct = Record<string, unknown> & { nutriments?: Record<string, unknown> };

/** Only what the label declares (`nutriments`), never Open Food Facts' estimates from the ingredients. */
export function parseOpenFoodFacts(product: OffProduct): ProductData | null {
  const raw = product.nutriments ?? {};
  const per100 = (key: string) => {
    const value = Number(raw[`${key}_100g`]);
    return raw[`${key}_100g`] !== undefined && raw[`${key}_100g`] !== '' && Number.isFinite(value) && value >= 0 ? value : undefined;
  };
  const nutrients: NutrientAmounts = {};
  for (const [key, nutrient, factor] of OFF_NUTRIENTS) {
    const value = per100(key);
    if (value !== undefined) nutrients[nutrient] = round(value * factor);
  }
  // Older entries only have energy in kJ, or salt instead of sodium.
  const kj = per100('energy');
  if (nutrients.calories === undefined && kj !== undefined) nutrients.calories = round(kj / 4.184);
  const salt = per100('salt');
  if (nutrients.sodium === undefined && salt !== undefined) nutrients.sodium = round(salt * 400);

  const name =
    text(product.product_name_en, 80) ?? text(product.product_name, 80) ?? text(product.generic_name_en, 80) ?? text(product.generic_name, 80);
  const brand = text(typeof product.brands === 'string' ? product.brands.split(',')[0] : null, 60);
  if (!name && Object.keys(nutrients).length === 0) return null;
  return {
    source: 'off',
    name: name ?? brand ?? 'Packaged food',
    brand,
    servingSize: text(product.serving_size, 60),
    servingGrams: amount(product.serving_quantity, 2000),
    packageGrams: ['g', 'ml', undefined].includes(product.product_quantity_unit as string | undefined)
      ? amount(product.product_quantity, 5000)
      : null,
    nutrients,
  };
}

async function fromOpenFoodFacts(code: string): Promise<ProductData | null> {
  const res = await fetch(`${offBaseUrl()}/api/v2/product/${code}?fields=${OFF_FIELDS}`, {
    headers: { 'User-Agent': userAgent(), Accept: 'application/json' },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Open Food Facts answered ${res.status}`);
  const body = (await res.json()) as { status?: number; product?: OffProduct };
  return body.status === 1 && body.product ? parseOpenFoodFacts(body.product) : null;
}

// ─── USDA FoodData Central, Branded Foods (optional: needs FDC_API_KEY) ─────────

type FdcNutrient = { nutrientNumber?: string | number; number?: string | number; value?: number; amount?: number };
type FdcFood = {
  description?: string;
  gtinUpc?: string;
  brandName?: string;
  brandOwner?: string;
  servingSize?: number;
  servingSizeUnit?: string;
  householdServingFullText?: string;
  foodNutrients?: FdcNutrient[];
};

const BY_NUMBER = new Map<number, NutrientKey>(NUTRIENTS.map((n) => [n.nbr, n.key]));
const withoutLeadingZeros = (code: string) => code.replace(/^0+/, '');
/** "DIET COKE" → "Diet Coke". */
const tidy = (value: string) =>
  value === value.toUpperCase() ? value.toLowerCase().replace(/(^|[\s(/-])(\p{L})/gu, (_, sep: string, c: string) => sep + c.toUpperCase()) : value;

/** Branded Foods values are per 100 g (or 100 ml), with FoodData Central nutrient numbers. */
export function parseUsda(food: FdcFood): ProductData | null {
  const nutrients: NutrientAmounts = {};
  for (const n of food.foodNutrients ?? []) {
    const key = BY_NUMBER.get(Number(n.nutrientNumber ?? n.number));
    const value = Number(n.value ?? n.amount);
    if (key && Number.isFinite(value) && value >= 0) nutrients[key] = round(value);
  }
  const name = text(food.description, 80);
  if (!name) return null;
  const unit = (food.servingSizeUnit ?? '').toLowerCase();
  const servingGrams = ['g', 'grm', 'ml', 'mlt'].includes(unit) ? amount(food.servingSize, 2000) : null;
  const printed = text(food.householdServingFullText, 40);
  const household = printed && printed === printed.toUpperCase() ? printed.toLowerCase() : printed;
  const shownUnit = unit.startsWith('m') ? 'ml' : 'g';
  return {
    source: 'usda',
    name: tidy(name),
    brand: text(food.brandName ? tidy(food.brandName) : food.brandOwner ? tidy(food.brandOwner) : null, 60),
    servingSize: household && servingGrams ? `${household} (${Math.round(servingGrams)} ${shownUnit})` : household,
    servingGrams,
    packageGrams: null,
    nutrients,
  };
}

async function fromUsda(code: string): Promise<ProductData | null> {
  const key = process.env.FDC_API_KEY;
  if (!key) return null;
  // FoodData Central keeps UPC-A codes as 12 digits.
  const query = code.length === 13 && code.startsWith('0') ? code.slice(1) : code;
  const url = `${fdcBaseUrl()}/foods/search?api_key=${encodeURIComponent(key)}&dataType=Branded&pageSize=5&query=${query}`;
  const res = await fetch(url, { headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(TIMEOUT_MS) });
  if (!res.ok) throw new Error(`FoodData Central answered ${res.status}`);
  const body = (await res.json()) as { foods?: FdcFood[] };
  const match = (body.foods ?? []).find((f) => f.gtinUpc && withoutLeadingZeros(f.gtinUpc) === withoutLeadingZeros(code));
  return match ? parseUsda(match) : null;
}

// ─── Cache ─────────────────────────────────────────────────────────────────────

/** Open Food Facts first; USDA Branded Foods when that has nothing complete. Errors are thrown, never cached. */
async function fetchProduct(code: string): Promise<ProductData | null> {
  let failure: unknown = null;
  const off = await fromOpenFoodFacts(code).catch((error: unknown) => {
    failure = error;
    return null;
  });
  if (off && isComplete(off.nutrients)) return off;
  const usda = await fromUsda(code).catch((error: unknown) => {
    failure ??= error;
    return null;
  });
  if (usda && isComplete(usda.nutrients)) return usda;
  if (failure) throw failure;
  return off ?? usda;
}

async function save(code: string, data: ProductData | null) {
  const values = {
    source: data?.source ?? null,
    name: data?.name ?? null,
    brand: data?.brand ?? null,
    servingSize: data?.servingSize ?? null,
    servingGrams: data?.servingGrams ?? null,
    packageGrams: data?.packageGrams ?? null,
    nutrients: data?.nutrients ?? null,
    fetchedAt: new Date(),
  };
  const [row] = await db
    .insert(products)
    .values({ code, ...values })
    .onConflictDoUpdate({ target: products.code, set: values })
    .returning();
  return row;
}

function toProduct(row: ProductRow): Product {
  const nutrients = row.nutrients ?? {};
  return {
    code: row.code,
    name: row.name ?? 'Packaged food',
    brand: row.brand,
    source: row.source ?? 'off',
    servingSize: row.servingSize,
    servingGrams: row.servingGrams,
    packageGrams: row.packageGrams,
    nutrients,
    complete: isComplete(nutrients),
  };
}

const isFresh = (row: ProductRow) => Date.now() - row.fetchedAt.getTime() < (row.source ? FOUND_TTL_MS : MISSING_TTL_MS);

/**
 * The product with this barcode, or null when nobody knows it. Answers come from the `products`
 * cache while fresh; when a refresh fails, an older copy is used rather than failing.
 */
export async function lookupProduct(raw: string): Promise<Product | null> {
  const codes = barcodeCandidates(raw);
  if (!codes) throw new HttpError(400, "That barcode doesn't look right. Check the numbers under the bars.");
  const cached = new Map((await db.select().from(products).where(inArray(products.code, codes))).map((r) => [r.code, r]));

  for (const code of codes) {
    const row = cached.get(code);
    if (row && isFresh(row)) {
      if (row.source) return toProduct(row);
      continue;
    }
    try {
      const saved = await save(code, await fetchProduct(code));
      if (saved.source) return toProduct(saved);
    } catch (error) {
      console.warn(`[products] lookup of ${code} failed`, error);
      if (row?.source) return toProduct(row);
      throw new HttpError(502, "We couldn't reach the product database. Please try again in a moment.");
    }
  }
  return null;
}
