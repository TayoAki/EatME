import { asc, eq } from 'drizzle-orm';

import { db } from '@/db';
import { foods, mealItems, meals, products, type MealItemRow, type MealRow } from '@/db/schema';
import { scaleNutrition, type Meal, type MealItem, type UpdateMealItemsBody } from '@/shared/meals';
import { scaleNutrients } from '@/shared/nutrients';
import { foodKey, type FoodCorrection } from '@/shared/personal-foods';

import { toMeal, toMealItem } from './dto';
import { foodNutrients, itemTotals, type ComputedItem } from './food-match';
import { foodsByIds } from './foods';
import { HttpError } from './http';
import { baseFromNutrients, saveItems } from './meal-analysis';

/** The foods of a meal for its logged portion, with their database names. */
export async function loadItems(meal: MealRow): Promise<MealItem[]> {
  const rows = await db
    .select({
      item: mealItems,
      description: foods.description,
      portions: foods.portions,
      productBrand: products.brand,
      productSource: products.source,
    })
    .from(mealItems)
    .leftJoin(foods, eq(mealItems.foodId, foods.id))
    .leftJoin(products, eq(mealItems.productCode, products.code))
    .where(eq(mealItems.mealId, meal.id))
    .orderBy(asc(mealItems.position));
  return rows.map((row) =>
    toMealItem(
      row.item,
      meal.portion,
      row.description ? { description: row.description, portions: row.portions ?? [] } : null,
      row.item.productCode ? { code: row.item.productCode, brand: row.productBrand, source: row.productSource } : null,
    ),
  );
}

export async function toMealWithItems(meal: MealRow): Promise<Meal> {
  return { ...(await toMeal(meal)), items: await loadItems(meal) };
}

/**
 * Recomputes a meal from its edited food list (grams as logged). Database foods are calculated
 * from the database; kept AI estimates and packaged products are rescaled to their new weight.
 * The edited list is the meal as logged, so the portion goes back to 1. Also returns the edits
 * worth remembering (personal food memory): the person decides.
 */
export async function replaceItems(meal: MealRow, body: UpdateMealItemsBody) {
  const existing = new Map((await db.select().from(mealItems).where(eq(mealItems.mealId, meal.id))).map((i) => [i.id, i]));
  const foodMap = await foodsByIds(body.items.flatMap((i) => (i.foodId ? [i.foodId] : [])));

  const items: ComputedItem[] = body.items.map((input) => {
    const old = input.id ? existing.get(input.id) : undefined;
    const kept = { id: old?.id, aiName: old?.aiName ?? null };
    if (input.foodId) {
      const food = foodMap.get(input.foodId);
      if (!food) throw new HttpError(400, 'That food is not in the database.');
      // Still the remembered food ("Your usual") unless the food itself was changed.
      const personalFoodId = old && old.foodId === food.id ? old.personalFoodId : null;
      return { ...kept, name: input.name, foodId: food.id, grams: input.grams, nutrients: foodNutrients(food, input.grams), personalFoodId };
    }
    if (!old || old.grams <= 0) throw new HttpError(400, 'Pick new foods from the database.');
    return {
      ...kept,
      name: input.name,
      foodId: null,
      productCode: old.productCode,
      grams: input.grams,
      nutrients: scaleNutrients(old.nutrients, input.grams / old.grams),
      personalFoodId: old.personalFoodId,
    };
  });

  const { meal: saved, itemIds } = await saveComputedItems(meal, items);
  const describe = (foodId: number | null) => (foodId ? (foodMap.get(foodId)?.description ?? null) : null);
  return { meal: saved, corrections: correctionsOf(meal, body, existing, items, itemIds, describe) };
}

/**
 * Items the person changed from what the AI said (another food, another name, or more than 10%
 * off in grams): "Remember these next time?" on the meal screen.
 */
function correctionsOf(
  meal: MealRow,
  body: UpdateMealItemsBody,
  existing: Map<string, MealItemRow>,
  items: readonly ComputedItem[],
  itemIds: readonly string[],
  describe: (foodId: number | null) => string | null,
): FoodCorrection[] {
  return body.items.flatMap((input, i) => {
    const old = input.id ? existing.get(input.id) : undefined;
    if (!old?.aiName || !foodKey(old.aiName)) return [];
    const loggedGrams = old.grams * meal.portion;
    const changed =
      old.foodId !== (input.foodId ?? null) ||
      old.name !== input.name ||
      (loggedGrams > 0 && Math.abs(input.grams - loggedGrams) / loggedGrams > 0.1);
    return changed
      ? [{ itemId: itemIds[i], from: old.aiName, to: items[i].name, food: describe(items[i].foodId), grams: Math.round(items[i].grams) }]
      : [];
  });
}

/**
 * Saves a meal's foods and recomputes the meal from them (as logged: the portion goes back to 1).
 * Used by food edits and by the answer to the follow-up question.
 */
export async function saveComputedItems(meal: MealRow, items: readonly ComputedItem[]) {
  const totals = itemTotals(items);
  const base = baseFromNutrients(totals.nutrients);
  // The added-sugar estimate follows the calories (it has no database value to recompute from).
  const oldCalories = (meal.baseNutrition?.calories ?? 0) * meal.portion;
  const addedSugarG =
    meal.addedSugarG === null ? null : oldCalories > 0 ? (meal.addedSugarG * meal.portion * base.calories) / oldCalories : meal.addedSugarG;
  const [saved] = await db
    .update(meals)
    .set({
      ...scaleNutrition(base, 1),
      baseNutrition: base,
      portion: 1,
      nutrients: totals.nutrients,
      matchedShare: totals.matchedShare,
      addedSugarG,
    })
    .where(eq(meals.id, meal.id))
    .returning();
  const itemIds = await saveItems(meal.id, items);
  return { meal: saved, itemIds };
}

/** Copies a meal's foods to another meal ("Log again", copy a day). */
export async function copyItems(fromMealId: string, toMealId: string) {
  const rows = await db.select().from(mealItems).where(eq(mealItems.mealId, fromMealId)).orderBy(asc(mealItems.position));
  if (rows.length === 0) return;
  await db
    .insert(mealItems)
    .values(
      rows.map(({ position, name, foodId, productCode, grams, nutrients, aiName, personalFoodId }) => ({
        mealId: toMealId,
        position,
        name,
        foodId,
        productCode,
        grams,
        nutrients,
        aiName,
        personalFoodId,
      })),
    );
}
