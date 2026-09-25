import { and, count, desc, eq, inArray, sql } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/db';
import { mealItems, meals, personalFoods, products, type PersonalFoodRow } from '@/db/schema';
import { scaleNutrients, type NutrientAmounts } from '@/shared/nutrients';
import {
  foodKey,
  MAX_PERSONAL_FOODS,
  PROMPT_NAMES,
  type PersonalFood,
  type UpdatePersonalFoodBody,
} from '@/shared/personal-foods';

import { foodsByIds } from './foods';
import { HttpError } from './http';

const round1 = (value: number) => Math.round(value * 10) / 10;
const unique = (values: readonly string[]) => [...new Set(values.filter(Boolean))];

type FoodSource = Pick<PersonalFoodRow, 'foodId' | 'productCode' | 'per100g' | 'serving' | 'usualGrams'>;

/** Every remembered food of a person (at most 500), for the analysis. */
export function personalFoodsFor(userId: string) {
  return db.select().from(personalFoods).where(eq(personalFoods.userId, userId));
}

/** The names that go into the meal prompt, most used first. */
export function promptNames(memory: readonly PersonalFoodRow[]) {
  return [...memory]
    .sort((a, b) => b.uses - a.uses || (b.lastUsedAt?.getTime() ?? 0) - (a.lastUsedAt?.getTime() ?? 0))
    .slice(0, PROMPT_NAMES)
    .map((food) => food.name.replace(/[\r\n"]/g, ' ').slice(0, 60));
}

/** Counts a use of remembered foods (an analysis took them). */
export async function markUsed(ids: readonly string[]) {
  if (ids.length === 0) return;
  await db
    .update(personalFoods)
    .set({ uses: sql`${personalFoods.uses} + 1`, lastUsedAt: new Date() })
    .where(inArray(personalFoods.id, [...new Set(ids)]));
}

/**
 * Saves a food to remember, or updates the one it replaces: the same name, or one of the same AI
 * names (the person now means something else by "rice"). A key always points to one food.
 */
async function upsert(userId: string, memory: PersonalFoodRow[], name: string, keys: string[], source: FoodSource) {
  const lowerName = name.toLowerCase();
  const existing =
    memory.find((food) => food.name.toLowerCase() === lowerName) ?? memory.find((food) => food.keys.some((key) => keys.includes(key)));
  // Other foods give up the keys this one takes.
  for (const other of memory) {
    if (other === existing || !other.keys.some((key) => keys.includes(key))) continue;
    const rest = other.keys.filter((key) => !keys.includes(key));
    const next = rest.length > 0 ? rest : [foodKey(other.name)].filter((key) => !keys.includes(key));
    await db.update(personalFoods).set({ keys: next }).where(eq(personalFoods.id, other.id));
    other.keys = next;
  }
  if (existing) {
    const oldNameKey = existing.name.toLowerCase() === lowerName ? null : foodKey(existing.name);
    const merged = unique([...existing.keys.filter((key) => key !== oldNameKey), ...keys]);
    const [row] = await db
      .update(personalFoods)
      .set({ name, keys: merged, ...source })
      .where(eq(personalFoods.id, existing.id))
      .returning();
    Object.assign(existing, row);
    return row;
  }
  if (memory.length >= MAX_PERSONAL_FOODS) {
    throw new HttpError(409, `You can keep up to ${MAX_PERSONAL_FOODS} foods. Remove some in Profile → Your foods.`);
  }
  const [row] = await db.insert(personalFoods).values({ userId, name, keys, ...source }).returning();
  memory.push(row);
  return row;
}

/** "Remember these next time?" (and "Save as my food" for a one-food meal): meal items as remembered foods. */
export async function rememberItems(userId: string, itemIds: readonly string[]) {
  const rows = await db
    .select({ item: mealItems, portion: meals.portion })
    .from(mealItems)
    .innerJoin(meals, eq(meals.id, mealItems.mealId))
    .where(and(inArray(mealItems.id, [...itemIds]), eq(meals.userId, userId)));
  if (rows.length === 0) throw new HttpError(404, 'Food not found');

  const memory = await personalFoodsFor(userId);
  const saved: PersonalFoodRow[] = [];
  for (const { item, portion } of rows) {
    const grams = item.grams * portion;
    if (grams <= 0) continue;
    const source: FoodSource = {
      foodId: item.foodId,
      productCode: item.foodId ? null : item.productCode,
      // The item's own numbers per 100 g when it has neither (the AI's estimate, as edited).
      per100g: item.foodId || item.productCode ? null : scaleNutrients(item.nutrients, 100 / item.grams),
      serving: null,
      usualGrams: round1(grams),
    };
    const keys = unique([foodKey(item.aiName ?? ''), foodKey(item.name)]);
    const food = await upsert(userId, memory, item.name, keys, source);
    await db.update(mealItems).set({ personalFoodId: food.id }).where(eq(mealItems.id, item.id));
    saved.push(food);
  }
  return saved;
}

/** "Save as my food" for a quick add or a nutrition label: one serving, without a weight. */
export async function rememberMeal(userId: string, mealId: string) {
  const meal = await db.query.meals.findFirst({ where: and(eq(meals.id, mealId), eq(meals.userId, userId)) });
  if (!meal || meal.status !== 'completed') throw new HttpError(404, 'Meal not found');
  const [{ items }] = await db.select({ items: count() }).from(mealItems).where(eq(mealItems.mealId, meal.id));
  if (items > 0) throw new HttpError(400, 'Remember the foods of this meal instead.');
  const serving: NutrientAmounts = {
    calories: meal.calories ?? 0,
    protein: meal.proteinG ?? 0,
    carbs: meal.carbsG ?? 0,
    fat: meal.fatG ?? 0,
    ...(meal.fiberG === null ? {} : { fiber: meal.fiberG }),
  };
  const name = (meal.name ?? 'My food').slice(0, 60);
  const memory = await personalFoodsFor(userId);
  return upsert(userId, memory, name, unique([foodKey(name)]), {
    foodId: null,
    productCode: null,
    per100g: null,
    serving,
    usualGrams: null,
  });
}

/** "Your foods": what each remembered food uses and its usual portion. */
export async function listPersonalFoods(userId: string): Promise<PersonalFood[]> {
  const rows = await db
    .select()
    .from(personalFoods)
    .where(eq(personalFoods.userId, userId))
    .orderBy(desc(personalFoods.uses), personalFoods.name);
  const dbFoods = await foodsByIds(rows.flatMap((row) => (row.foodId ? [row.foodId] : [])));
  const codes = rows.flatMap((row) => (row.productCode ? [row.productCode] : []));
  const productRows =
    codes.length > 0
      ? await db.select({ code: products.code, name: products.name, nutrients: products.nutrients }).from(products).where(inArray(products.code, codes))
      : [];
  const productOf = new Map(productRows.map((row) => [row.code, row]));

  return rows.map((row) => {
    const grams = row.usualGrams ?? 0;
    const dbFood = row.foodId ? dbFoods.get(row.foodId) : undefined;
    const product = row.productCode ? productOf.get(row.productCode) : undefined;
    const per100 = dbFood?.nutrients ?? product?.nutrients ?? row.per100g;
    const calories = row.serving ? (row.serving.calories ?? 0) : ((per100?.calories ?? 0) * grams) / 100;
    return {
      id: row.id,
      name: row.name,
      usualGrams: row.usualGrams,
      kind: dbFood ? 'food' : product ? 'product' : row.serving ? 'serving' : 'own',
      detail: dbFood?.description ?? product?.name ?? null,
      calories: Math.round(calories),
      uses: row.uses,
      lastUsedAt: row.lastUsedAt?.toISOString() ?? null,
    };
  });
}

async function findPersonalFood(userId: string, id: string) {
  const parsed = z.string().uuid().safeParse(id);
  const food = parsed.success
    ? await db.query.personalFoods.findFirst({ where: and(eq(personalFoods.id, parsed.data), eq(personalFoods.userId, userId)) })
    : undefined;
  if (!food) throw new HttpError(404, 'Food not found');
  return food;
}

/** Rename it (the new name also matches from now on) or change the usual grams. */
export async function updatePersonalFood(userId: string, id: string, body: UpdatePersonalFoodBody) {
  const food = await findPersonalFood(userId, id);
  if (body.usualGrams !== undefined && food.usualGrams === null) {
    throw new HttpError(400, 'This food is one serving without a weight.');
  }
  await db
    .update(personalFoods)
    .set({
      ...(body.name ? { name: body.name, keys: unique([...food.keys, foodKey(body.name)]) } : {}),
      ...(body.usualGrams !== undefined ? { usualGrams: round1(body.usualGrams) } : {}),
    })
    .where(eq(personalFoods.id, food.id));
}

/** "Forget": EatME stops using it; meals already logged keep their numbers. */
export async function deletePersonalFood(userId: string, id: string) {
  const food = await findPersonalFood(userId, id);
  await db.delete(personalFoods).where(eq(personalFoods.id, food.id));
}
