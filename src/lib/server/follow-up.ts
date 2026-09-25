import { inArray, sql } from 'drizzle-orm';

import { db } from '@/db';
import { foods, meals, type FoodRow } from '@/db/schema';
import type { AiMealItem, FollowUpChange, FollowUpKind, FollowUpQuestion, FollowUpState } from '@/shared/meals';
import { scaleNutrients, type NutrientAmounts } from '@/shared/nutrients';

import { itemTotals, type ComputedItem } from './food-match';
import { findFood } from './foods';

/** The server words the question; the AI only says what it is about. */
const WORDING: Record<FollowUpKind, string> = {
  cooking_fat: 'What was it cooked in?',
  portion: 'How big was your portion?',
  filling: 'What was inside?',
};

/**
 * Fixed foods for the cooking-fat answers (USDA FNDDS), with their numbers per 100 g for when the
 * database is not loaded.
 */
const FATS = {
  oil: { description: 'Olive oil', name: 'Olive oil', fallback: { calories: 884, fat: 100 } as NutrientAmounts },
  butter: {
    description: 'Butter, NFS',
    name: 'Butter',
    fallback: { calories: 717, protein: 0.9, carbs: 0.1, fat: 81 } as NutrientAmounts,
  },
};

/** An item that is itself cooking fat (the AI's database guess or its name), replaced by the answer. */
const FAT_ITEM = /^(olive |vegetable |canola |sunflower |coconut |cooking |sesame )?(oil|butter|ghee|margarine|lard)\b/i;

/**
 * The answers must change the meal by at least 60 kcal (10% of a smaller meal, never under
 * 20 kcal) — otherwise the question isn't worth a tap.
 */
function worthAsking(spread: number, mealCalories: number) {
  return spread >= Math.min(60, Math.max(20, mealCalories * 0.1));
}

const round1 = (value: number) => Math.round(value * 10) / 10;

/**
 * An unanswered question, closed as skipped (-1): for updates that change a meal's foods or numbers
 * by hand. Its answers were worked out for the meal as analyzed, so they no longer fit.
 */
export const closedQuestion = sql`case when ${meals.followUp}->>'answer' is null then jsonb_set(${meals.followUp}, '{answer}', '-1') else ${meals.followUp} end`;

/** Applies an answer to a meal's foods (as logged). */
export function applyChange(items: readonly ComputedItem[], change: FollowUpChange): ComputedItem[] {
  switch (change.type) {
    case 'fat': {
      const rest = items.filter((item) => !item.id || !change.removeItemIds.includes(item.id));
      if (!change.add) return rest.length > 0 ? rest : [...items];
      const { name, foodId, grams, per100g } = change.add;
      return [...rest, { name, foodId, grams, nutrients: scaleNutrients(per100g, grams / 100) }];
    }
    case 'scale':
      return items.map((item) =>
        change.itemId === null || item.id === change.itemId
          ? { ...item, grams: round1(item.grams * change.factor), nutrients: scaleNutrients(item.nutrients, change.factor) }
          : item,
      );
    case 'food':
      return items.map((item) =>
        item.id === change.itemId
          ? {
              ...item,
              name: change.name,
              foodId: change.foodId,
              productCode: null,
              personalFoodId: null,
              nutrients: scaleNutrients(change.per100g, item.grams / 100),
            }
          : item,
      );
  }
}

async function fatFoods() {
  const rows = await db
    .select()
    .from(foods)
    .where(inArray(foods.description, [FATS.oil.description, FATS.butter.description]));
  const find = (description: string) => rows.find((row) => row.description === description);
  return { oil: find(FATS.oil.description), butter: find(FATS.butter.description) };
}

const fatAnswer = (fat: (typeof FATS)[keyof typeof FATS], food: FoodRow | undefined, grams: number) => ({
  name: fat.name,
  foodId: food?.id ?? null,
  grams,
  per100g: food?.nutrients ?? fat.fallback,
});

/**
 * Works out the options of the AI's question when the meal is analyzed, so that answering needs no
 * second AI call. `items` are the saved foods (with ids), in the order of the AI's items. Null
 * when the answers would barely change the meal, or the question can't be answered.
 */
export async function buildFollowUp(
  question: FollowUpQuestion,
  aiItems: readonly AiMealItem[],
  items: readonly ComputedItem[],
): Promise<FollowUpState | null> {
  const target = question.item > 0 ? items[question.item - 1] : undefined;
  // Remembered foods ("Your usual") already have the person's amount and food.
  if (target?.personalFoodId) return null;
  let options: { label: string; change: FollowUpChange }[] = [];

  if (question.kind === 'cooking_fat') {
    const removeItemIds = items.flatMap((item, i) =>
      item.id && (FAT_ITEM.test(aiItems[i]?.food ?? '') || FAT_ITEM.test(item.name)) ? [item.id] : [],
    );
    const { oil, butter } = await fatFoods();
    options = [
      { label: 'No oil or butter', change: { type: 'fat', removeItemIds, add: null } },
      { label: '1 tsp oil', change: { type: 'fat', removeItemIds, add: fatAnswer(FATS.oil, oil, 5) } },
      { label: '1 tbsp oil', change: { type: 'fat', removeItemIds, add: fatAnswer(FATS.oil, oil, 14) } },
      { label: '1 tbsp butter', change: { type: 'fat', removeItemIds, add: fatAnswer(FATS.butter, butter, 14) } },
    ];
  } else if (question.kind === 'portion') {
    if (question.item > 0 && !target?.id) return null;
    const itemId = target?.id ?? null;
    const factors: [number, string][] = [
      [0.5, 'Half that'],
      [1, 'About as shown'],
      [1.5, 'A bit more (1½×)'],
      [2, 'Twice that'],
    ];
    options = factors.map(([factor, label]) => ({ label, change: { type: 'scale', itemId, factor } }));
  } else {
    if (!target?.id) return null;
    const found: { label: string; food: FoodRow }[] = [];
    for (const filling of question.fillings) {
      const food = await findFood(filling.food);
      if (food && !found.some((f) => f.food.id === food.id)) found.push({ label: filling.label.trim().slice(0, 30), food });
    }
    if (found.length < 2) return null;
    // "Burrito" + "Chicken" → "Burrito with chicken", whatever the database entry is called.
    const itemName = target.name;
    options = found.map(({ label, food }) => ({
      label,
      change: {
        type: 'food',
        itemId: target.id as string,
        name: `${itemName} with ${label.toLowerCase()}`.slice(0, 80),
        foodId: food.id,
        per100g: food.nutrients,
      },
    }));
  }

  const priced = options.map((option) => ({
    ...option,
    calories: Math.round(itemTotals(applyChange(items, option.change)).nutrients.calories ?? 0),
  }));
  const values = priced.map((option) => option.calories);
  const mealCalories = itemTotals(items).nutrients.calories ?? 0;
  if (!worthAsking(Math.max(...values) - Math.min(...values), mealCalories)) return null;
  return {
    kind: question.kind,
    question: WORDING[question.kind],
    about: target ? target.name : null,
    options: priced,
    answer: null,
  };
}
