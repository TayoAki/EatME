/**
 * FatSecret Platform API client (restaurant menus). Server only. OAuth 2.0 client credentials with
 * the `premier` scope (Premier Free): FatSecret only answers calls from the IP addresses registered
 * with the key (error 21 otherwise), so the server needs a static outbound IP. Their terms: only IDs
 * may be stored indefinitely; everything else here is cached in memory for at most 24 hours (much
 * less below).
 */
import type { NutrientAmounts } from '@/shared/nutrients';
import type { RestaurantServing } from '@/shared/restaurants';

const TIMEOUT_MS = 8000;
const TOKEN_MARGIN_MS = 5 * 60 * 1000;
/** Restaurant brand lists change rarely; search results and items are fetched again soon. */
const BRANDS_TTL_MS = 12 * 60 * 60 * 1000;
const SEARCH_TTL_MS = 10 * 60 * 1000;
const FOOD_TTL_MS = 60 * 60 * 1000;
const MAX_CACHE_ENTRIES = 2000;

const tokenUrl = () => process.env.FATSECRET_TOKEN_URL || 'https://oauth.fatsecret.com/connect/token';
const apiUrl = () => process.env.FATSECRET_API_URL || 'https://platform.fatsecret.com/rest';

export const fatsecretConfigured = () => !!process.env.FATSECRET_CLIENT_ID && !!process.env.FATSECRET_CLIENT_SECRET;
/** Restaurant menus: on with `RESTAURANTS=true` and both FatSecret keys. */
export const restaurantsEnabled = () => process.env.RESTAURANTS === 'true' && fatsecretConfigured();

export type FsServing = {
  serving_id?: string | number;
  serving_description?: string;
  metric_serving_amount?: string | number;
  metric_serving_unit?: string;
  calories?: string | number;
  carbohydrate?: string | number;
  protein?: string | number;
  fat?: string | number;
  saturated_fat?: string | number;
  polyunsaturated_fat?: string | number;
  monounsaturated_fat?: string | number;
  cholesterol?: string | number;
  sodium?: string | number;
  potassium?: string | number;
  fiber?: string | number;
  sugar?: string | number;
  is_default?: string | number;
};

export type FsFood = {
  food_id?: string | number;
  food_name?: string;
  food_type?: string;
  brand_name?: string;
  servings?: { serving?: FsServing | FsServing[] };
};

/** FatSecret answered with an error object (e.g. code 106: no such food). */
export class FatSecretError extends Error {
  constructor(
    readonly code: number | undefined,
    message: string,
  ) {
    super(`FatSecret error ${code ?? '?'}: ${message}`);
    this.name = 'FatSecretError';
  }
}

type Cached = { value: unknown; expiresAt: number };
type Shared = { token?: { value: string; expiresAt: number }; tokenRequest?: Promise<string>; cache: Map<string, Cached> };

/** Every API route is bundled on its own: one token and one cache for the whole server process. */
const holder = globalThis as typeof globalThis & { __eatmeFatSecret?: Shared };
const shared: Shared = (holder.__eatmeFatSecret ??= { cache: new Map<string, Cached>() });

async function cached<T>(key: string, ttlMs: number, load: () => Promise<T>): Promise<T> {
  const hit = shared.cache.get(key);
  if (hit && hit.expiresAt > Date.now()) return hit.value as T;
  const value = await load();
  if (shared.cache.size >= MAX_CACHE_ENTRIES) {
    const now = Date.now();
    for (const [k, entry] of shared.cache) if (entry.expiresAt <= now) shared.cache.delete(k);
    if (shared.cache.size >= MAX_CACHE_ENTRIES) shared.cache.clear();
  }
  shared.cache.set(key, { value, expiresAt: Date.now() + ttlMs });
  return value;
}

async function requestToken(): Promise<string> {
  const credentials = Buffer.from(`${process.env.FATSECRET_CLIENT_ID}:${process.env.FATSECRET_CLIENT_SECRET}`).toString('base64');
  const res = await fetch(tokenUrl(), {
    method: 'POST',
    headers: { Authorization: `Basic ${credentials}`, 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
    body: new URLSearchParams({ grant_type: 'client_credentials', scope: 'premier' }).toString(),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  // The reason goes to the log: `invalid_scope` means Premier isn't enabled on the key yet,
  // `invalid_client` means wrong keys.
  if (!res.ok) {
    const reason = ((await res.json().catch(() => null)) as { error?: unknown } | null)?.error;
    throw new Error(`FatSecret token request answered ${res.status}${typeof reason === 'string' ? ` (${reason})` : ''}`);
  }
  const body = (await res.json()) as { access_token?: string; expires_in?: number };
  if (!body.access_token) throw new Error('FatSecret token response had no access token');
  shared.token = { value: body.access_token, expiresAt: Date.now() + (body.expires_in ?? 86_400) * 1000 };
  return body.access_token;
}

/** A valid access token (they last 24 hours); one request at a time. */
async function accessToken(): Promise<string> {
  if (shared.token && shared.token.expiresAt - TOKEN_MARGIN_MS > Date.now()) return shared.token.value;
  shared.tokenRequest ??= requestToken().finally(() => {
    shared.tokenRequest = undefined;
  });
  return shared.tokenRequest;
}

/** Error codes that mean the token itself is no good: get a new one and try once more. */
const TOKEN_ERRORS = new Set([9, 13]);

async function call<T>(path: string, params: Record<string, string | number | boolean>, retry = true): Promise<T> {
  const url = new URL(`${apiUrl()}/${path}`);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, String(value));
  url.searchParams.set('format', 'json');
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${await accessToken()}`, Accept: 'application/json' },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (res.status === 401 && retry) {
    shared.token = undefined;
    return call<T>(path, params, false);
  }
  if (!res.ok) throw new Error(`FatSecret answered ${res.status}`);
  const body = (await res.json()) as { error?: { code?: number | string; message?: string } };
  if (body?.error) {
    const code = Number(body.error.code);
    if (TOKEN_ERRORS.has(code) && retry) {
      shared.token = undefined;
      return call<T>(path, params, false);
    }
    throw new FatSecretError(Number.isFinite(code) ? code : undefined, body.error.message ?? 'unknown error');
  }
  return body as T;
}

/** FatSecret JSON has one object instead of a list when there is only one. */
export const asArray = <T>(value: T | T[] | null | undefined): T[] => (value == null ? [] : Array.isArray(value) ? value : [value]);

const num = (value: unknown) => {
  const n = typeof value === 'number' ? value : typeof value === 'string' && value.trim() ? Number(value) : NaN;
  return Number.isFinite(n) && n >= 0 ? n : null;
};
const round = (value: number, places: number) => Math.round(value * 10 ** places) / 10 ** places;

/** Foods matching `expression` (names and brands), with their servings (`foods.search.v3`). */
export function searchFoods(expression: string, page = 0, max = 50) {
  return cached(`search:${page}:${max}:${expression.toLowerCase()}`, SEARCH_TTL_MS, async () => {
    const body = await call<{ foods_search?: { total_results?: string | number; results?: { food?: FsFood | FsFood[] } } }>(
      'foods/search/v3',
      { search_expression: expression, page_number: page, max_results: max, flag_default_serving: true },
    );
    return { total: num(body.foods_search?.total_results) ?? 0, foods: asArray(body.foods_search?.results?.food) };
  });
}

/** One food with all its servings (`food.get.v5`); null when FatSecret has no such food. */
export function getFood(id: string) {
  return cached(`food:${id}`, FOOD_TTL_MS, async () => {
    try {
      const body = await call<{ food?: FsFood }>('food/v5', { food_id: id, flag_default_serving: true });
      return body.food ?? null;
    } catch (error) {
      // 106: invalid ID.
      if (error instanceof FatSecretError && error.code === 106) return null;
      throw error;
    }
  });
}

/** Lowercase, no accents or punctuation: "McDonald's" and "mcdonalds" compare equal. */
export const brandKey = (name: string) =>
  name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9]/g, '');

/** Restaurant brand names starting with this letter (`food_brands.get.v2`, `brand_type=restaurant`). */
export function restaurantBrands(letter: string): Promise<string[]> {
  const first = letter.toLowerCase();
  if (!/^[a-z]$/.test(first)) return Promise.resolve([]);
  return cached(`brands:${first}`, BRANDS_TTL_MS, async () => {
    const body = await call<{ food_brands?: { food_brand?: string | string[] } }>('brands/v2', {
      starts_with: first,
      brand_type: 'restaurant',
    });
    return asArray(body.food_brands?.food_brand).filter((name): name is string => typeof name === 'string' && !!name.trim());
  });
}

/** Keys of the restaurant brands for these names (one brand list per first letter). */
export async function restaurantKeys(names: readonly string[]) {
  const letters = [...new Set(names.map((name) => brandKey(name)[0]).filter((c): c is string => !!c && /[a-z]/.test(c)))];
  const lists = await Promise.all(letters.map(restaurantBrands));
  return new Set(lists.flat().map(brandKey));
}

/** A menu item: a brand food whose brand is a restaurant. */
export function isRestaurantFood(food: FsFood, restaurants: Set<string>) {
  return food.food_type === 'Brand' && !!food.brand_name && restaurants.has(brandKey(food.brand_name)) && food.food_id != null;
}

export const servingsOf = (food: FsFood) => asArray(food.servings?.serving).filter((s) => s.serving_id != null && num(s.calories) !== null);

/** Grams in one serving: FatSecret's metric amount (ml counted as grams, ounces converted). */
export function servingGrams(serving: FsServing) {
  const amount = num(serving.metric_serving_amount);
  if (!amount) return null;
  const unit = (serving.metric_serving_unit ?? '').toLowerCase();
  if (unit === 'g' || unit === 'ml') return round(amount, 1);
  if (unit === 'oz') return round(amount * 28.3495, 1);
  return null;
}

/** The serving as FatSecret words it ("1 sandwich"), long ones cut. */
const tidyServing = (text: string | undefined) => {
  const value = (text ?? '').trim() || '1 serving';
  return value.length > 60 ? `${value.slice(0, 59)}…` : value;
};

/** Everything EatME keeps from one serving (grams, milligrams as in its nutrient table). */
export function servingNutrients(serving: FsServing): NutrientAmounts {
  const out: NutrientAmounts = {};
  const set = (key: keyof NutrientAmounts, value: unknown) => {
    const n = num(value);
    if (n !== null) out[key] = round(n, 3);
  };
  set('calories', serving.calories);
  set('protein', serving.protein);
  set('carbs', serving.carbohydrate);
  set('fat', serving.fat);
  set('fiber', serving.fiber);
  set('sugars', serving.sugar);
  set('saturatedFat', serving.saturated_fat);
  set('monoFat', serving.monounsaturated_fat);
  set('polyFat', serving.polyunsaturated_fat);
  set('cholesterol', serving.cholesterol);
  set('sodium', serving.sodium);
  set('potassium', serving.potassium);
  // Fiber is part of the carbs.
  if (out.fiber !== undefined && out.carbs !== undefined) out.fiber = Math.min(out.fiber, out.carbs);
  return out;
}

export function toServing(serving: FsServing): RestaurantServing {
  const n = servingNutrients(serving);
  const one = (value: number | undefined) => (value === undefined ? null : round(value, 1));
  return {
    id: String(serving.serving_id),
    description: tidyServing(serving.serving_description),
    grams: servingGrams(serving),
    calories: Math.round(n.calories ?? 0),
    proteinG: round(n.protein ?? 0, 1),
    carbsG: round(n.carbs ?? 0, 1),
    fatG: round(n.fat ?? 0, 1),
    fiberG: one(n.fiber),
    sugarG: one(n.sugars),
    sodiumMg: n.sodium === undefined ? null : Math.round(n.sodium),
    isDefault: String(serving.is_default) === '1',
  };
}

/** The serving FatSecret suggests, else the first one that isn't a plain 100 g / 100 ml. */
export function defaultServing(food: FsFood) {
  const servings = servingsOf(food);
  return servings.find((s) => String(s.is_default) === '1') ?? servings.find((s) => String(s.serving_id) !== '0') ?? servings[0] ?? null;
}
