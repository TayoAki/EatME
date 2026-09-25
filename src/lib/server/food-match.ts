import { z } from 'zod';

import type { FoodRow } from '@/db/schema';
import type { AiMealItem } from '@/shared/meals';
import { addNutrients, scaleNutrients, type NutrientAmounts } from '@/shared/nutrients';

import { modelFor, structuredCompletion } from './ai';
import { foodsAvailable, searchFoods } from './foods';
import { FOOD_MATCH_JSON_SCHEMA, FOOD_MATCH_SYSTEM_PROMPT } from './prompts';

const CANDIDATES = 10;

/** An item of a meal with its numbers: from the database food, a product's label, or the AI's own estimate. */
export type ComputedItem = {
  name: string;
  foodId: number | null;
  /** Barcode of the packaged product the numbers come from. */
  productCode?: string | null;
  grams: number;
  nutrients: NutrientAmounts;
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

/**
 * The split pipeline: the AI said what the foods are and how much; the USDA database does the
 * math. The AI picks each item's food from database candidates; items without a good match keep
 * the AI's own estimate (all of them do while the database is not loaded).
 */
export async function computeItems(items: readonly AiMealItem[]): Promise<ComputedItem[]> {
  const estimates = () =>
    items.map((item) => ({
      name: item.name.trim() || 'Food',
      foodId: null,
      grams: Math.round(item.grams * 10) / 10,
      nutrients: estimateNutrients(item),
    }));
  if (items.length === 0 || !(await foodsAvailable())) return estimates();
  const candidates = await Promise.all(items.map(findCandidates));

  let picks: (number | null)[] = items.map(() => null);
  if (candidates.some((list) => list.length > 0)) {
    try {
      const { data } = await structuredCompletion({
        model: modelFor('text'),
        name: 'food_match',
        jsonSchema: FOOD_MATCH_JSON_SCHEMA,
        schema: matchSchema,
        messages: [
          { role: 'system', content: FOOD_MATCH_SYSTEM_PROMPT },
          { role: 'user', content: matchPrompt(items, candidates) },
        ],
      });
      picks = items.map((_, i) => data.matches.find((m) => m.item === i + 1)?.fdcId ?? null);
    } catch (error) {
      // Matching is an improvement, never a requirement: keep the AI's estimates.
      console.warn('[meals] food matching failed', error);
    }
  }

  return items.map((item, i) => {
    const food = candidates[i].find((f) => f.id === picks[i]);
    const grams = Math.round(item.grams * 10) / 10;
    if (food && grams > 0 && plausible(food, item)) {
      return { name: item.name.trim() || food.description, foodId: food.id, grams, nutrients: foodNutrients(food, grams) };
    }
    return { name: item.name.trim() || 'Food', foodId: null, grams, nutrients: estimateNutrients(item) };
  });
}

/** Totals of the items and the share of calories that come from database foods. */
export function itemTotals(items: readonly ComputedItem[]) {
  const nutrients = addNutrients(items.map((i) => i.nutrients));
  const calories = nutrients.calories ?? 0;
  const matched = items.filter((i) => i.foodId !== null).reduce((sum, i) => sum + (i.nutrients.calories ?? 0), 0);
  return { nutrients, matchedShare: calories > 0 ? Math.round((matched / calories) * 100) / 100 : 0 };
}
