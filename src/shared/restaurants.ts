import { z } from 'zod';

/**
 * Restaurant menus (FatSecret Platform API, US chains). The numbers are FatSecret's for one
 * serving as the chain describes it; EatME never ranks or recommends items (FatSecret's terms
 * forbid nutrition advice from their data).
 */

/** One way to order an item, e.g. "1 sandwich" (183 g) or "100 g". Numbers are for one serving. */
export type RestaurantServing = {
  id: string;
  description: string;
  /** Weight of the serving when FatSecret knows it (ml counted as grams). */
  grams: number | null;
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
  fiberG: number | null;
  sugarG: number | null;
  sodiumMg: number | null;
  /** FatSecret's suggested serving. */
  isDefault: boolean;
};

/** A menu item as search and menus return it, with its suggested serving. */
export type RestaurantItem = {
  id: string;
  name: string;
  chain: string;
  serving: RestaurantServing;
};

/** An item with every serving (the item sheet). */
export type RestaurantItemDetail = {
  id: string;
  name: string;
  chain: string;
  servings: RestaurantServing[];
};

/** `GET /api/restaurants?q=`: chains whose name matches, and matching menu items. */
export type RestaurantSearch = { chains: string[]; items: RestaurantItem[] };

/** `GET /api/restaurants/menu`: one page of a chain's items. */
export type RestaurantMenu = { chain: string; items: RestaurantItem[]; page: number; more: boolean };

/** One line of a plate in the app: the item, the chosen serving and how many. */
export type PlateLine = { itemId: string; name: string; chain: string; serving: RestaurantServing; count: number };

/** What the server needs from a plate line. */
export const toPlateItem = (line: PlateLine): PlateItem => ({ foodId: line.itemId, servingId: line.serving.id, count: line.count });

/** Kept on a logged food (`meal_items.restaurant`): which item and serving, and how many. */
export type RestaurantRef = {
  chain: string;
  foodId: string;
  servingId: string;
  serving: string;
  count: number;
};

/** How many of a serving: ½ to 4, in halves. */
export const RESTAURANT_COUNTS = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4] as const;
export const MAX_PLATE_ITEMS = 12;

/** Required wherever FatSecret data is shown, linking to their site (their attribution rules). */
export const FATSECRET_CREDIT = 'Powered by fatsecret Platform API';
export const FATSECRET_URL = 'https://platform.fatsecret.com';
export const FATSECRET_TERMS_URL = 'https://platform.fatsecret.com/terms';

const fatsecretId = z.string().regex(/^\d{1,20}$/, 'Unknown menu item');

export const plateItemSchema = z.object({
  foodId: fatsecretId,
  servingId: fatsecretId,
  count: z.number().refine((n) => (RESTAURANT_COUNTS as readonly number[]).includes(n), 'Pick ½ to 4 servings'),
});
export type PlateItem = z.infer<typeof plateItemSchema>;

/**
 * Body of `POST /api/meals` for a restaurant plate: the server fetches every item again, so the
 * phone only sends which ones. `save` keeps the plate in Saved meals instead of logging it.
 */
export const restaurantMealSchema = z.object({
  restaurant: z.object({
    items: z.array(plateItemSchema).min(1).max(MAX_PLATE_ITEMS),
    save: z.boolean().optional(),
  }),
});

/** The meal's name: "Big Mac (McDonald's)" for one item, "McDonald's: Big Mac, Fries" for a plate. */
export function plateName(items: readonly { name: string; chain: string }[]) {
  const chains = [...new Set(items.map((item) => item.chain))];
  const names = items.map((item) => item.name);
  const name = items.length === 1 ? `${names[0]} (${chains[0]})` : `${chains.join(' & ')}: ${names.join(', ')}`;
  return name.length > 80 ? `${name.slice(0, 79)}…` : name;
}

/** "½", "1½", "2". */
export function countLabel(count: number) {
  const whole = Math.floor(count);
  const half = count - whole === 0.5 ? '½' : '';
  return whole === 0 ? half : `${whole}${half}`;
}
