import { db } from '@/db';
import { meals, type MealRow } from '@/db/schema';
import { scaleNutrition, type MealSource } from '@/shared/meals';
import { scaleNutrients } from '@/shared/nutrients';

import { foodNutrients, itemTotals, type ComputedItem } from './food-match';
import { foodsByIds } from './foods';
import { HttpError } from './http';
import { baseFromNutrients, saveItems } from './meal-analysis';
import { lookupProduct } from './products';

/** A meal whose numbers are known right away (no AI call): saved as completed with its foods. */
async function createMeal(userId: string, source: MealSource, name: string, items: ComputedItem[]): Promise<MealRow> {
  const totals = itemTotals(items);
  const base = baseFromNutrients(totals.nutrients);
  const [meal] = await db
    .insert(meals)
    .values({
      userId,
      status: 'completed',
      source,
      name: name.slice(0, 80),
      confidence: 'high',
      ...scaleNutrition(base, 1),
      baseNutrition: base,
      portion: 1,
      nutrients: totals.nutrients,
      matchedShare: totals.matchedShare,
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
