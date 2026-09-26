import { and, asc, eq, sql } from 'drizzle-orm';

import { db, type Executor } from '@/db';
import { foods, mealItems, meals, products, type MealItemRow, type MealRow } from '@/db/schema';
import { scaleNutrition, type Meal, type MealItem, type UpdateMealItemsBody } from '@/shared/meals';
import { scaleNutrients } from '@/shared/nutrients';
import { foodKey, type FoodCorrection } from '@/shared/personal-foods';

import { applyChange, closedQuestion } from './follow-up';

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
      if (input.grams < 1) throw new HttpError(400, 'Enter how many grams.');
      const food = foodMap.get(input.foodId);
      if (!food) throw new HttpError(400, 'That food is not in the database.');
      // Still the remembered food ("Your usual") unless the food itself was changed.
      const personalFoodId = old && old.foodId === food.id ? old.personalFoodId : null;
      return { ...kept, name: input.name, foodId: food.id, grams: input.grams, nutrients: foodNutrients(food, input.grams), personalFoodId };
    }
    // A menu item without a weight can only be kept as it is (its count follows the meal's portion).
    if (old?.restaurant && old.grams <= 0) {
      return {
        ...kept,
        name: input.name,
        foodId: null,
        grams: 0,
        nutrients: scaleNutrients(old.nutrients, meal.portion),
        restaurant: { ...old.restaurant, count: old.restaurant.count * meal.portion },
      };
    }
    if (!old || old.grams <= 0) throw new HttpError(400, 'Pick new foods from the database.');
    if (input.grams < 1) throw new HttpError(400, 'Enter how many grams.');
    const factor = input.grams / old.grams;
    return {
      ...kept,
      name: input.name,
      foodId: null,
      productCode: old.productCode,
      grams: input.grams,
      nutrients: scaleNutrients(old.nutrients, factor),
      personalFoodId: old.personalFoodId,
      restaurant: old.restaurant && { ...old.restaurant, count: Math.round(old.restaurant.count * factor * 100) / 100 },
    };
  });

  const { meal: saved, itemIds } = await saveComputedItems(meal, items, { closeQuestion: true });
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
 * Saves a meal's foods and recomputes the meal from them (as logged: the portion goes back to 1),
 * in one transaction (or the caller's `executor`). Used by food edits (which close an unanswered
 * question) and by the answer to the question.
 */
export async function saveComputedItems(
  meal: MealRow,
  items: readonly ComputedItem[],
  { closeQuestion = false, executor }: { closeQuestion?: boolean; executor?: Executor } = {},
) {
  const totals = itemTotals(items);
  const base = baseFromNutrients(totals.nutrients);
  // The added-sugar estimate follows the calories (it has no database value to recompute from).
  const oldCalories = (meal.baseNutrition?.calories ?? 0) * meal.portion;
  const addedSugarG =
    meal.addedSugarG === null ? null : oldCalories > 0 ? (meal.addedSugarG * meal.portion * base.calories) / oldCalories : meal.addedSugarG;
  const save = async (tx: Executor) => {
    const [saved] = await tx
      .update(meals)
      .set({
        ...scaleNutrition(base, 1),
        baseNutrition: base,
        portion: 1,
        nutrients: totals.nutrients,
        matchedShare: totals.matchedShare,
        addedSugarG,
        ...(closeQuestion ? { followUp: closedQuestion } : {}),
      })
      .where(eq(meals.id, meal.id))
      .returning();
    const itemIds = await saveItems(meal.id, items, tx);
    return { meal: saved, itemIds };
  };
  return executor ? save(executor) : db.transaction(save);
}

/** Copies a meal's foods to another meal ("Log again", copy a day). */
export async function copyItems(fromMealId: string, toMealId: string, executor: Executor = db) {
  const rows = await executor.select().from(mealItems).where(eq(mealItems.mealId, fromMealId)).orderBy(asc(mealItems.position));
  if (rows.length === 0) return;
  await executor
    .insert(mealItems)
    .values(
      rows.map(({ position, name, foodId, productCode, grams, nutrients, aiName, personalFoodId, restaurant }) => ({
        mealId: toMealId,
        position,
        name,
        foodId,
        productCode,
        grams,
        nutrients,
        aiName,
        personalFoodId,
        restaurant,
      })),
    );
}

/**
 * The answer to the follow-up question (steer the AI): the change worked out at analysis is
 * applied to the meal's foods as logged. No AI call; each question is answered once.
 */
export async function answerFollowUp(meal: MealRow, option: number | 'skip') {
  const state = meal.followUp;
  if (!state) throw new HttpError(404, 'This meal has no question.');
  const answer = option === 'skip' ? -1 : option;
  if (answer >= 0 && !state.options[answer]) throw new HttpError(400, 'Pick one of the answers.');
  return db.transaction(async (tx) => {
    // Claim the answer first, so two taps can't both change the meal; the change is saved with it.
    const [claimed] = await tx
      .update(meals)
      .set({ followUp: { ...state, answer } })
      .where(and(eq(meals.id, meal.id), sql`${meals.followUp}->>'answer' is null`))
      .returning();
    if (!claimed) throw new HttpError(409, 'This question is already answered.');
    if (answer < 0) return claimed;

    const rows = await tx.select().from(mealItems).where(eq(mealItems.mealId, meal.id)).orderBy(asc(mealItems.position));
    const items: ComputedItem[] = rows.map((row) => ({
      id: row.id,
      name: row.name,
      foodId: row.foodId,
      productCode: row.productCode,
      grams: row.grams * claimed.portion,
      nutrients: scaleNutrients(row.nutrients, claimed.portion),
      aiName: row.aiName,
      personalFoodId: row.personalFoodId,
      restaurant: row.restaurant && { ...row.restaurant, count: row.restaurant.count * claimed.portion },
    }));
    const change = state.options[answer].change;
    const { meal: saved } = await saveComputedItems(claimed, applyChange(items, change), { executor: tx });
    return saved;
  });
}
