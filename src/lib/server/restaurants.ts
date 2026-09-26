import type { MealRow } from '@/db/schema';
import { scaleNutrients } from '@/shared/nutrients';
import {
  plateName,
  type PlateItem,
  type RestaurantItem,
  type RestaurantItemDetail,
  type RestaurantMenu,
  type RestaurantSearch,
} from '@/shared/restaurants';

import {
  brandKey,
  defaultServing,
  getFood,
  isRestaurantFood,
  restaurantBrands,
  restaurantKeys,
  searchFoods,
  servingGrams,
  servingNutrients,
  servingsOf,
  toServing,
  type FsFood,
} from './fatsecret';
import type { ComputedItem } from './food-match';
import { HttpError } from './http';
import { createMeal } from './instant-meals';
import { describeError } from './log';
import { assertRoomForSavedMeal } from './saved-meals';

const PAGE_SIZE = 50;
const MAX_PAGE = 20;

/** FatSecret failures become one friendly message; the details go to the server log. */
async function guard<T>(what: string, run: () => Promise<T>): Promise<T> {
  try {
    return await run();
  } catch (error) {
    if (error instanceof HttpError) throw error;
    console.error(`[restaurants] ${what} failed: ${describeError(error)}`);
    throw new HttpError(502, "Restaurant menus aren't available right now. Try again in a minute.");
  }
}

/** The item's name without a leading chain name ("Chick-fil-A Chicken Sandwich" → "Chicken Sandwich"): the chain is shown next to it. */
function itemName(food: FsFood) {
  const name = (food.food_name ?? '').trim();
  const brand = (food.brand_name ?? '').trim();
  const short = brand && name.toLowerCase().startsWith(`${brand.toLowerCase()} `) ? name.slice(brand.length).trim() : name;
  return short || name || 'Menu item';
}

function toItem(food: FsFood): RestaurantItem | null {
  const serving = defaultServing(food);
  if (!serving || !food.brand_name) return null;
  return { id: String(food.food_id), name: itemName(food), chain: food.brand_name, serving: toServing(serving) };
}

/** Restaurant chains whose name contains what was typed: names that start with it first. */
async function matchingChains(query: string) {
  const key = brandKey(query);
  if (key.length < 2) return [];
  const brands = await restaurantBrands(key[0]);
  return brands
    .filter((name) => brandKey(name).includes(key))
    .sort((a, b) => Number(!brandKey(a).startsWith(key)) - Number(!brandKey(b).startsWith(key)) || a.length - b.length)
    .slice(0, 6);
}

/** Chains and menu items matching `query` (grocery brands and generic foods left out). */
export function searchRestaurants(query: string): Promise<RestaurantSearch> {
  return guard('search', async () => {
    const [chains, { foods }] = await Promise.all([matchingChains(query), searchFoods(query, 0, PAGE_SIZE)]);
    const keys = await restaurantKeys(foods.flatMap((food) => (food.food_type === 'Brand' && food.brand_name ? [food.brand_name] : [])));
    const items = foods.filter((food) => isRestaurantFood(food, keys)).flatMap((food) => toItem(food) ?? []);
    return { chains, items: items.slice(0, 25) };
  });
}

/** One page of a chain's menu, optionally narrowed by `query` (404 for names that aren't restaurants). */
export function chainMenu(chain: string, query: string, page: number): Promise<RestaurantMenu> {
  return guard('menu', async () => {
    const key = brandKey(chain);
    const name = key ? (await restaurantBrands(key[0])).find((brand) => brandKey(brand) === key) : undefined;
    if (!name) throw new HttpError(404, "We don't have this restaurant's menu.");
    const safePage = Math.min(Math.max(0, Math.floor(page)), MAX_PAGE);
    const { total, foods } = await searchFoods(`${name} ${query}`.trim(), safePage, PAGE_SIZE);
    const items = foods
      .filter((food) => food.food_type === 'Brand' && !!food.brand_name && brandKey(food.brand_name) === key && food.food_id != null)
      .flatMap((food) => toItem(food) ?? []);
    return { chain: name, items, page: safePage, more: safePage < MAX_PAGE && (safePage + 1) * PAGE_SIZE < total };
  });
}

async function restaurantFood(id: string) {
  const food = await getFood(id);
  if (!food?.brand_name) return null;
  return isRestaurantFood(food, await restaurantKeys([food.brand_name])) ? food : null;
}

/** A menu item with all its servings. */
export function restaurantItem(id: string): Promise<RestaurantItemDetail> {
  return guard('item', async () => {
    const food = await restaurantFood(id);
    const servings = food ? servingsOf(food).map(toServing) : [];
    if (!food?.brand_name || servings.length === 0) throw new HttpError(404, "This menu item isn't available any more.");
    return { id, name: itemName(food), chain: food.brand_name, servings };
  });
}

/**
 * A plate from restaurant menus: every item is fetched from FatSecret again (the app only sends
 * which item, serving and how many), then logged as one meal, or kept in Saved meals (`save`).
 */
export async function logRestaurantMeal(userId: string, { items, save }: { items: PlateItem[]; save?: boolean }): Promise<MealRow> {
  if (save) await assertRoomForSavedMeal(userId);
  const ids = [...new Set(items.map((item) => item.foodId))];
  const foods = await guard('log', async () => new Map(await Promise.all(ids.map(async (id) => [id, await restaurantFood(id)] as const))));

  const computed: ComputedItem[] = items.map((item) => {
    const food = foods.get(item.foodId);
    if (!food?.brand_name) throw new HttpError(400, "One of these menu items isn't available any more.");
    const serving = servingsOf(food).find((s) => String(s.serving_id) === item.servingId);
    if (!serving) throw new HttpError(400, 'Pick the serving for each item again.');
    const grams = servingGrams(serving);
    return {
      name: itemName(food),
      foodId: null,
      grams: grams ? Math.round(grams * item.count * 10) / 10 : 0,
      nutrients: scaleNutrients(servingNutrients(serving), item.count),
      restaurant: {
        chain: food.brand_name,
        foodId: item.foodId,
        servingId: item.servingId,
        serving: toServing(serving).description,
        count: item.count,
      },
    };
  });

  const name = plateName(computed.map((item) => ({ name: item.name, chain: item.restaurant!.chain })));
  return createMeal(userId, 'restaurant', name, computed, save ? 'saved' : 'completed');
}
