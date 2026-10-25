import { and, eq, inArray } from 'drizzle-orm';

import { db } from '@/db';
import { chainItems, chains, type ChainItemRow, type PersonalFoodRow } from '@/db/schema';
import {
  CHAIN_MATCH_FEATURE,
  CLIENT_FEATURES_HEADER,
  chainSearchIndex,
  chainServings,
  findChain,
  pickChainDish,
  searchChainDishes,
} from '@/shared/chain-match';
import type { AiMealItem } from '@/shared/meals';
import type { MenuRef } from '@/shared/menus';
import { scaleNutrients } from '@/shared/nutrients';

import { whatToOrderEnabled } from './experiments';
import { rememberedFood, type ComputedItem } from './food-match';

/** "1 sandwich" says nothing a person needs; "Medium (16 fl oz)" or "8 ct" does. */
export const plainServing = (serving: string) =>
  /^1\s+(each|ea|item|serving|order|sandwich|burger|wrap|bowl|salad|burrito|taco)s?$/i.test(serving.trim());

/** "12 ct (170g)" is "12 ct" and "Large (179g)" "Large" in a food's name: the weight shows as its grams. */
const servingName = (serving: string) => serving.replace(/\s*\(\s*\d[\d.,]*\s*(g|kg|oz|ml|fl oz)\s*\)\s*$/i, '').trim() || serving.trim();

/** A chain item as a meal's food: its numbers for the serving (`share`: half, or how many), with its citation. */
export function chainFood(
  item: ChainItemRow,
  share: number,
  ref: Omit<MenuRef, 'dish' | 'chainItemId' | 'citation'>,
  sizeName?: string,
): ComputedItem {
  const serving = sizeName ?? servingName(item.serving);
  return {
    name: (plainServing(serving) ? item.name : `${item.name} (${serving})`).slice(0, 80),
    foodId: null,
    grams: Math.round((item.servingGrams ?? 0) * share * 10) / 10,
    nutrients: scaleNutrients(item.nutrients, share),
    menu: {
      ...ref,
      from: 'chain',
      dish: item.name,
      chainItemId: item.id,
      citation: { chain: item.chain, sourceUrl: item.sourceUrl, checkedOn: item.checkedOn },
    },
  };
}

/**
 * The app asked for chain meals to be matched (`X-Weight-Class-Features: chain-match`, the v2.5 app only), and
 * What to order isn't switched off (WHAT_TO_ORDER=false turns its chain numbers off everywhere).
 */
export function wantsChainMatch(request: Request) {
  return (
    whatToOrderEnabled() &&
    (request.headers.get(CLIENT_FEATURES_HEADER) ?? '').split(',').some((feature) => feature.trim() === CHAIN_MATCH_FEATURE)
  );
}

/** The chain table changes only when a deploy loads it: read it again after a few minutes at most. */
const CACHE_MS = 5 * 60_000;
let chainsCache: { at: number; chains: { slug: string; name: string }[] } | null = null;
const itemsCache = new Map<string, { at: number; items: ChainItemRow[] }>();

async function liveChains() {
  if (chainsCache && Date.now() - chainsCache.at < CACHE_MS) return chainsCache.chains;
  const rows = await db.selectDistinct({ slug: chainItems.chainSlug, name: chainItems.chain }).from(chainItems).where(eq(chainItems.status, 'live'));
  chainsCache = { at: Date.now(), chains: rows };
  return rows;
}

let searchCache: { at: number; index: ReturnType<typeof searchIndexOf>; chains: { slug: string; name: string }[] } | null = null;

type SearchRow = { id: string; name: string; serving: string; calories: number; chain: string; chainSlug: string; rank: number | null };
const searchIndexOf = (rows: SearchRow[]) => chainSearchIndex(rows);

/** Every live chain item's name and size, made searchable once (15,000 small rows). */
async function liveSearch() {
  if (searchCache && Date.now() - searchCache.at < CACHE_MS) return searchCache;
  const rows = await db
    .select({
      id: chainItems.id,
      name: chainItems.name,
      serving: chainItems.serving,
      calories: chainItems.calories,
      chain: chainItems.chain,
      chainSlug: chainItems.chainSlug,
      rank: chains.rank,
    })
    .from(chainItems)
    .innerJoin(chains, eq(chains.slug, chainItems.chainSlug))
    .where(eq(chainItems.status, 'live'));
  const named = new Map(rows.map((row) => [row.chainSlug, { slug: row.chainSlug, name: row.chain }]));
  searchCache = { at: Date.now(), index: searchIndexOf(rows), chains: [...named.values()] };
  return searchCache;
}

/** Chain dishes for a food search ("big mac", "mcdonalds fries"), closest first (`searchChainDishes`). */
export async function searchChainItems(q: string): Promise<ChainItemRow[]> {
  const { index, chains: named } = await liveSearch();
  const found = searchChainDishes(index, named, q);
  if (found.length === 0) return [];
  const rows = await db.select().from(chainItems).where(inArray(chainItems.id, found.map((item) => item.id)));
  const byId = new Map(rows.map((row) => [row.id, row]));
  return found.flatMap((item) => byId.get(item.id) ?? []);
}

async function liveItemsOf(slug: string) {
  const cached = itemsCache.get(slug);
  if (cached && Date.now() - cached.at < CACHE_MS) return cached.items;
  const items = await db.select().from(chainItems).where(and(eq(chainItems.chainSlug, slug), eq(chainItems.status, 'live')));
  itemsCache.set(slug, { at: Date.now(), items });
  return items;
}

/**
 * The foods of a meal that are a chain's dish (WHAT-TO-ORDER.md §5): the item of our chain table each one means,
 * with the chain's own numbers and citation, or null to keep the estimate. The person's remembered foods come
 * first; anything unsure (a chain we don't have, two dishes that fit, a size not on the menu) is null.
 */
export async function matchChainDishes(items: readonly AiMealItem[], memory: readonly PersonalFoodRow[]): Promise<(ComputedItem | null)[]> {
  const named = (item: AiMealItem) => !!item.chain?.trim() && !!item.chainDish?.trim();
  if (!items.some(named)) return items.map(() => null);
  const chains = await liveChains();
  return Promise.all(
    items.map(async (item) => {
      if (!named(item) || rememberedFood(memory, item.name)) return null;
      const chain = findChain(chains, item.chain!);
      if (!chain) return null;
      const rows = await liveItemsOf(chain.slug);
      const pick = pickChainDish(rows, item.chainDish!, item.size ?? '', chain.name);
      if (!pick) return null;
      const servings = chainServings(item.servings);
      const food = chainFood(pick.item, servings, { from: 'chain', variant: 'whole', restaurant: pick.item.chain, tweak: null, matched: true }, pick.sizeName);
      return { ...food, name: (servings === 1 ? food.name : `${servings} × ${food.name}`).slice(0, 80), aiName: item.name };
    }),
  );
}
