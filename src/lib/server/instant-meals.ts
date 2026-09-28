import type { SQL } from 'drizzle-orm';

import { db } from '@/db';
import { meals, type MealRow } from '@/db/schema';
import { drinkName, drinkNumbers, drinkNutrients, drinkTitle, type DrinkBody, type DrinkRef } from '@/shared/drinks';
import { scaleNutrition, type BaseNutrition, type MealSource, type QuickMeal } from '@/shared/meals';
import { scaleNutrients } from '@/shared/nutrients';
import { caloriesFromMacros } from '@/shared/nutrition';

import { foodNutrients, itemTotals, type ComputedItem } from './food-match';
import { foodsByIds } from './foods';
import { HttpError } from './http';
import { baseFromNutrients, saveItems } from './meal-analysis';
import { lookupProduct } from './products';

/**
 * A meal whose numbers are known right away (no AI call): saved as completed with its foods, or
 * kept as a saved meal (`status: 'saved'`). `loggedAt`: an earlier day (now when left out).
 */
export async function createMeal(
  userId: string,
  source: MealSource,
  name: string,
  items: ComputedItem[],
  status: 'completed' | 'saved' = 'completed',
  loggedAt?: Date | SQL,
): Promise<MealRow> {
  const totals = itemTotals(items);
  const base = baseFromNutrients(totals.nutrients);
  const [meal] = await db
    .insert(meals)
    .values({
      userId,
      status,
      source,
      name: name.slice(0, 80),
      confidence: 'high',
      ...scaleNutrition(base, 1),
      baseNutrition: base,
      portion: 1,
      nutrients: totals.nutrients,
      matchedShare: totals.matchedShare,
      ...(loggedAt ? { loggedAt } : {}),
    })
    .returning();
  await saveItems(meal.id, items);
  return meal;
}

/** A packaged product by its barcode: the numbers on its label for the grams eaten. */
export async function logProductMeal(userId: string, { code, grams }: { code: string; grams: number }) {
  const product = await lookupProduct(code);
  if (!product) throw new HttpError(404, "We couldn't find this product. Try scanning its nutrition label instead.");
  if (!product.complete) throw new HttpError(400, 'This product has no nutrition facts yet. Scan its label instead.');
  const item: ComputedItem = {
    name: product.name,
    foodId: null,
    productCode: product.code,
    grams,
    nutrients: scaleNutrients(product.nutrients, grams / 100),
  };
  return createMeal(userId, 'barcode', product.name, [item]);
}

/** A food picked from the USDA database search. */
export async function logFoodMeal(userId: string, { foodId, grams }: { foodId: number; grams: number }) {
  const food = (await foodsByIds([foodId])).get(foodId);
  if (!food) throw new HttpError(400, 'That food is not in the database.');
  const item: ComputedItem = { name: food.description.split(',')[0], foodId, grams, nutrients: foodNutrients(food, grams) };
  return createMeal(userId, 'food', food.description, [item]);
}

/**
 * An alcoholic drink (v2.4): the server works out alcohol, carbs, sugars and calories from the type,
 * volume, strength and count; the phone sends no numbers of its own. One item per drink, its
 * amount in ml.
 */
export async function logDrinkMeal(userId: string, body: DrinkBody, loggedAt: Date | SQL) {
  const cocktail = body.type === 'cocktail';
  const drink: DrinkRef = {
    type: body.type,
    volumeMl: body.volumeMl,
    abv: body.abv,
    count: body.count,
    // Shots and a mixer only mean something in a cocktail.
    ...(cocktail ? { shots: body.shots ?? 1, mixer: body.mixer ?? 'none' } : {}),
  };
  const numbers = drinkNumbers(drink);
  const item: ComputedItem = { name: drinkTitle(drink), foodId: null, grams: numbers.totalMl, nutrients: drinkNutrients(numbers), drink };
  return createMeal(userId, 'drink', drinkName(drink), [item], 'completed', loggedAt);
}

/**
 * Quick add: calories and macros typed in, no AI and no food list. Calories left out (or 0) are
 * worked out from the macros; fiber left out stays unknown (like meals logged before fiber tracking).
 */
export async function logQuickMeal(userId: string, quick: QuickMeal, loggedAt: Date | SQL) {
  const macros = { proteinG: quick.proteinG ?? 0, carbsG: quick.carbsG ?? 0, fatG: quick.fatG ?? 0 };
  const base: BaseNutrition = {
    calories: quick.calories || caloriesFromMacros(macros),
    ...macros,
    fiberG: quick.fiberG ?? null,
  };
  const [meal] = await db
    .insert(meals)
    .values({
      userId,
      status: 'completed',
      source: 'quick',
      name: quick.name || 'Quick add',
      confidence: 'high',
      ...scaleNutrition(base, 1),
      baseNutrition: base,
      portion: 1,
      loggedAt,
    })
    .returning();
  return meal;
}
