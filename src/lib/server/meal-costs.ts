import { eq, inArray, sql } from 'drizzle-orm';

import { db } from '@/db';
import { foodPrices, mealItems, meals } from '@/db/schema';
import { mealCost } from '@/shared/meal-cost';

/**
 * About what each meal costs to make at home as logged (its portion included), in cents (v2.7, BUDGET-PLANS.md):
 * its foods' grams × their price per 100 g as eaten (`food_prices`). Null for a meal with too little of its weight
 * priced (restaurant dishes, barcoded products, AI estimates without a database food) or with no foods at all.
 */
export async function mealCosts(mealIds: readonly string[]): Promise<Map<string, number | null>> {
  const ids = [...new Set(mealIds)];
  const costs = new Map<string, number | null>(ids.map((id) => [id, null]));
  if (ids.length === 0) return costs;
  const rows = await db
    .select({
      mealId: mealItems.mealId,
      portion: meals.portion,
      grams: sql<number>`sum(${mealItems.grams})::float8`.mapWith(Number),
      pricedGrams: sql<number>`sum(case when ${foodPrices.foodId} is null then 0 else ${mealItems.grams} end)::float8`.mapWith(Number),
      cents: sql<number>`coalesce(sum(${mealItems.grams} * ${foodPrices.centsPer100g} / 100), 0)::float8`.mapWith(Number),
    })
    .from(mealItems)
    .innerJoin(meals, eq(meals.id, mealItems.mealId))
    .leftJoin(foodPrices, eq(foodPrices.foodId, mealItems.foodId))
    .where(inArray(mealItems.mealId, ids))
    .groupBy(mealItems.mealId, meals.portion);
  for (const row of rows) costs.set(row.mealId, mealCost(row, row.portion));
  return costs;
}

let month: { value: string | null; at: number } | null = null;

/** The month the loaded prices are for ("2026-09", from their version), or null before any are loaded. */
export async function priceMonth() {
  if (month && Date.now() - month.at < 10 * 60_000) return month.value;
  const [row] = await db.select({ version: foodPrices.version }).from(foodPrices).limit(1);
  month = { value: row?.version.slice(0, 7) ?? null, at: Date.now() };
  return month.value;
}
