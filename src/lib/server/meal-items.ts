import { asc, eq } from 'drizzle-orm';

import { db } from '@/db';
import { foods, mealItems, meals, type MealRow } from '@/db/schema';
import { scaleNutrition, type Meal, type MealItem, type UpdateMealItemsBody } from '@/shared/meals';
import { scaleNutrients } from '@/shared/nutrients';

import { toMeal, toMealItem } from './dto';
import { foodNutrients, itemTotals, type ComputedItem } from './food-match';
import { foodsByIds } from './foods';
import { HttpError } from './http';
import { baseFromNutrients, saveItems } from './meal-analysis';

/** The foods of a meal for its logged portion, with their database names. */
export async function loadItems(meal: MealRow): Promise<MealItem[]> {
  const rows = await db
    .select({ item: mealItems, description: foods.description, portions: foods.portions })
    .from(mealItems)
    .leftJoin(foods, eq(mealItems.foodId, foods.id))
    .where(eq(mealItems.mealId, meal.id))
    .orderBy(asc(mealItems.position));
  return rows.map((row) =>
    toMealItem(row.item, meal.portion, row.description ? { description: row.description, portions: row.portions ?? [] } : null),
  );
}

export async function toMealWithItems(meal: MealRow): Promise<Meal> {
  return { ...(await toMeal(meal)), items: await loadItems(meal) };
}

/**
 * Recomputes a meal from its edited food list (grams as logged). Database foods are calculated
 * from the database; kept AI estimates are rescaled to their new weight. The edited list is the
 * meal as logged, so the portion goes back to 1.
 */
export async function replaceItems(meal: MealRow, body: UpdateMealItemsBody) {
  const existing = new Map((await db.select().from(mealItems).where(eq(mealItems.mealId, meal.id))).map((i) => [i.id, i]));
  const foodMap = await foodsByIds(body.items.flatMap((i) => (i.foodId ? [i.foodId] : [])));

  const items: ComputedItem[] = body.items.map((input) => {
    if (input.foodId) {
      const food = foodMap.get(input.foodId);
      if (!food) throw new HttpError(400, 'That food is not in the database.');
      return { name: input.name, foodId: food.id, grams: input.grams, nutrients: foodNutrients(food, input.grams) };
    }
    const old = input.id ? existing.get(input.id) : undefined;
    if (!old || old.grams <= 0) throw new HttpError(400, 'Pick new foods from the database.');
    return { name: input.name, foodId: null, grams: input.grams, nutrients: scaleNutrients(old.nutrients, input.grams / old.grams) };
  });

  const totals = itemTotals(items);
  const base = baseFromNutrients(totals.nutrients);
  const [saved] = await db
    .update(meals)
    .set({
      ...scaleNutrition(base, 1),
      baseNutrition: base,
      portion: 1,
      nutrients: totals.nutrients,
      matchedShare: totals.matchedShare,
    })
    .where(eq(meals.id, meal.id))
    .returning();
  await saveItems(meal.id, items);
  return saved;
}

/** Copies a meal's foods to another meal ("Log again", copy a day). */
export async function copyItems(fromMealId: string, toMealId: string) {
  const rows = await db.select().from(mealItems).where(eq(mealItems.mealId, fromMealId)).orderBy(asc(mealItems.position));
  if (rows.length === 0) return;
  await db
    .insert(mealItems)
    .values(rows.map(({ position, name, foodId, grams, nutrients }) => ({ mealId: toMealId, position, name, foodId, grams, nutrients })));
}
