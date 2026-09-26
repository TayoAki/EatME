import { inArray } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/db';
import { products, type FoodRow, type PersonalFoodRow } from '@/db/schema';
import type { AiMealItem } from '@/shared/meals';
import { addNutrients, scaleNutrients, type NutrientAmounts } from '@/shared/nutrients';
import { foodKey, USUAL_GRAMS_RANGE } from '@/shared/personal-foods';
import type { RestaurantRef } from '@/shared/restaurants';

import { modelFor, structuredCompletion } from './ai';
import { foodsAvailable, foodsByIds, searchFoods } from './foods';
import { describeError } from './log';
import { FOOD_MATCH_JSON_SCHEMA, FOOD_MATCH_SYSTEM_PROMPT } from './prompts';

const CANDIDATES = 10;

/** An item of a meal with its numbers: from the database food, a product's label, or the AI's own estimate. */
export type ComputedItem = {
  /** Kept when an existing item is saved again (edits keep item ids stable). */
  id?: string;
  name: string;
  foodId: number | null;
  /** Barcode of the packaged product the numbers come from. */
  productCode?: string | null;
  grams: number;
  nutrients: NutrientAmounts;
  /** The name the AI gave the item (kept to remember corrections). */
  aiName?: string | null;
  /** Taken from the person's remembered foods ("Your usual"). */
  personalFoodId?: string | null;
  /** A restaurant menu item (FatSecret IDs, serving and how many). */
  restaurant?: RestaurantRef | null;
};

const matchSchema = z.object({
  matches: z.array(z.object({ item: z.number().int(), fdcId: z.number().int().nullable() })),
});

/** The AI's estimate for an item, when no database food fits. */
export function estimateNutrients(item: Pick<AiMealItem, 'calories' | 'proteinG' | 'carbsG' | 'fatG' | 'fiberG'>): NutrientAmounts {
  return {
    calories: item.calories,
    protein: item.proteinG,
    carbs: item.carbsG,
    fat: item.fatG,
    fiber: Math.min(item.fiberG, item.carbsG),
  };
}

/** Nutrients of `grams` of a database food (its values are per 100 g). */
export const foodNutrients = (food: FoodRow, grams: number) => scaleNutrients(food.nutrients, grams / 100);

/**
 * A match whose calories are more than 3× away from the AI's own estimate (and by more than
 * 150 kcal) is probably the wrong food: keep the estimate instead.
 */
function plausible(food: FoodRow, item: AiMealItem) {
  const db = (food.nutrients.calories ?? 0) * (item.grams / 100);
  const ai = item.calories;
  if (ai <= 0 || db <= 0) return true;
  const ratio = db / ai;
  return (ratio >= 1 / 3 && ratio <= 3) || Math.abs(db - ai) <= 150;
}

/** Candidates for an item: by the AI's database-style description first, then by its plain name. */
async function findCandidates(item: AiMealItem) {
  const [byFood, byName] = await Promise.all([searchFoods(item.food, 6), searchFoods(item.name, 4)]);
  const seen = new Set<number>();
  return [...byFood, ...byName].filter((food) => !seen.has(food.id) && seen.add(food.id)).slice(0, CANDIDATES);
}

function matchPrompt(items: readonly AiMealItem[], candidates: readonly FoodRow[][]) {
  return items
    .map((item, i) => {
      const list = candidates[i].map((f) => `- ${f.id}: ${f.description}`).join('\n') || '- (no candidates)';
      return `Item ${i + 1}: ${item.name} — database description guess: "${item.food}", ${Math.round(item.grams)} g\nCandidates:\n${list}`;
    })
    .join('\n\n');
}

/** The remembered food whose keys include this AI name. */
export function rememberedFood(memory: readonly PersonalFoodRow[], aiName: string) {
  const key = foodKey(aiName);
  return key ? memory.find((food) => food.keys.includes(key)) : undefined;
}

/**
 * An item from the person's memory: their food, with their usual grams when the AI's estimate is
 * close to them (a clearly different portion keeps the AI's grams). Null when the remembered food
 * has no numbers any more (its database food was removed).
 */
function fromMemory(
  item: AiMealItem,
  food: PersonalFoodRow,
  dbFoods: Map<number, FoodRow>,
  productNutrients: Map<string, NutrientAmounts>,
): ComputedItem | null {
  const aiGrams = Math.round(item.grams * 10) / 10;
  const ratio = food.usualGrams ? aiGrams / food.usualGrams : 0;
  const grams =
    food.usualGrams && ratio >= USUAL_GRAMS_RANGE[0] && ratio <= USUAL_GRAMS_RANGE[1] ? food.usualGrams : aiGrams || food.usualGrams || 0;
  const base = { name: food.name, grams, aiName: item.name, personalFoodId: food.id };
  const dbFood = food.foodId ? dbFoods.get(food.foodId) : undefined;
  if (dbFood) return { ...base, foodId: dbFood.id, nutrients: foodNutrients(dbFood, grams) };
  const per100 = food.productCode ? productNutrients.get(food.productCode) : undefined;
  if (per100) return { ...base, foodId: null, productCode: food.productCode, nutrients: scaleNutrients(per100, grams / 100) };
  if (food.per100g) return { ...base, foodId: null, nutrients: scaleNutrients(food.per100g, grams / 100) };
  // A serving without a weight (a quick add or a label) counts as one serving.
  if (food.serving) return { ...base, foodId: null, nutrients: food.serving };
  return null;
}

async function applyMemory(items: readonly AiMealItem[], memory: readonly PersonalFoodRow[]) {
  const matches = items.map((item) => rememberedFood(memory, item.name));
  const used = matches.filter((food): food is PersonalFoodRow => !!food);
  if (used.length === 0) return items.map(() => null);
  const foodIds = used.flatMap((food) => (food.foodId ? [food.foodId] : []));
  const codes = used.flatMap((food) => (food.productCode ? [food.productCode] : []));
  const [dbFoods, productRows] = await Promise.all([
    foodsByIds(foodIds),
    codes.length > 0
      ? db.select({ code: products.code, nutrients: products.nutrients }).from(products).where(inArray(products.code, codes))
      : Promise.resolve([]),
  ]);
  const productNutrients = new Map(productRows.flatMap((row) => (row.nutrients ? [[row.code, row.nutrients] as const] : [])));
  return items.map((item, i) => (matches[i] ? fromMemory(item, matches[i], dbFoods, productNutrients) : null));
}

/**
 * The split pipeline: the AI said what the foods are and how much; the USDA database does the
 * math. The person's remembered foods come first; for the other items the AI picks a food from
 * database candidates, and items without a good match keep the AI's own estimate (all of them do
 * while the database is not loaded).
 */
export async function computeItems(items: readonly AiMealItem[], memory: readonly PersonalFoodRow[] = []): Promise<ComputedItem[]> {
  const estimate = (item: AiMealItem): ComputedItem => ({
    name: item.name.trim() || 'Food',
    foodId: null,
    grams: Math.round(item.grams * 10) / 10,
    nutrients: estimateNutrients(item),
    aiName: item.name,
  });
  const remembered = await applyMemory(items, memory);
  const open = items.map((item, i) => (remembered[i] ? null : item));
  const withMemory = (compute: (item: AiMealItem, i: number) => ComputedItem) =>
    items.map((item, i) => remembered[i] ?? compute(item, i));

  if (open.every((item) => item === null) || !(await foodsAvailable())) return withMemory(estimate);
  const candidates = await Promise.all(items.map((item, i) => (open[i] ? findCandidates(item) : Promise.resolve([]))));

  let picks: (number | null)[] = items.map(() => null);
  if (candidates.some((list) => list.length > 0)) {
    // Only the items the memory didn't answer are sent for matching (numbered as in the meal).
    const asked = items.flatMap((item, i) => (open[i] ? [{ item, i }] : []));
    try {
      const { data } = await structuredCompletion({
        model: modelFor('text'),
        name: 'food_match',
        jsonSchema: FOOD_MATCH_JSON_SCHEMA,
        schema: matchSchema,
        messages: [
          { role: 'system', content: FOOD_MATCH_SYSTEM_PROMPT },
          { role: 'user', content: matchPrompt(asked.map((a) => a.item), asked.map((a) => candidates[a.i])) },
        ],
      });
      asked.forEach(({ i }, n) => {
        picks[i] = data.matches.find((m) => m.item === n + 1)?.fdcId ?? null;
      });
    } catch (error) {
      // Matching is an improvement, never a requirement: keep the AI's estimates.
      console.warn(`[meals] food matching failed: ${describeError(error)}`);
      picks = items.map(() => null);
    }
  }

  return withMemory((item, i) => {
    const food = candidates[i].find((f) => f.id === picks[i]);
    const grams = Math.round(item.grams * 10) / 10;
    if (food && grams > 0 && plausible(food, item)) {
      return { name: item.name.trim() || food.description, foodId: food.id, grams, nutrients: foodNutrients(food, grams), aiName: item.name };
    }
    return estimate(item);
  });
}

/** Totals of the items and the share of calories that come from database foods. */
export function itemTotals(items: readonly ComputedItem[]) {
  const nutrients = addNutrients(items.map((i) => i.nutrients));
  const calories = nutrients.calories ?? 0;
  const matched = items.filter((i) => i.foodId !== null).reduce((sum, i) => sum + (i.nutrients.calories ?? 0), 0);
  return { nutrients, matchedShare: calories > 0 ? Math.round((matched / calories) * 100) / 100 : 0 };
}
