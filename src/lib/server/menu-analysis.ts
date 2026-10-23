import type { PersonalFoodRow } from '@/db/schema';
import type { AiMealItem, FollowUpChange } from '@/shared/meals';
import {
  ESTIMATE_CALIBRATION,
  estimateRange,
  menuAnalysisSchema,
  MENU_QUESTION_WORDING,
  menuReadingSchema,
  TWEAK_SHARE,
  type DishLine,
  type MenuDishAnalysis,
  type MenuQuestionState,
  type ScanDish,
  type ScanDishItem,
  type ScanTweak,
} from '@/shared/menus';
import { addNutrients, scaleNutrients } from '@/shared/nutrients';

import { modelFor, structuredCompletion } from './ai';
import { computeItems, estimateNutrients, itemTotals, type ComputedItem } from './food-match';
import { applyChange } from './follow-up';
import { findFood } from './foods';
import { MENU_JSON_SCHEMA, MENU_READING_JSON_SCHEMA, MENU_READING_PROMPT, MENU_SYSTEM_PROMPT, menuLinesText } from './prompts';

/**
 * What to order (v2.5, WHAT-TO-ORDER.md §6): the AI reads a menu's dishes into foods and
 * restaurant portions (first pass, one call per 20 lines), our code ranks them, and the best eight
 * are priced from the USDA database the way meal photos are (second pass). The AI never writes a
 * number that ranks or shows: totals, tweaks and the question's answers are our sums.
 */

/** Lines a first-pass call reads at most (long menus go in parallel parts). */
const LINES_PER_CALL = 20;

const round1 = (value: number) => Math.round(value * 10) / 10;

/** Reads menu photos into dish lines (when the phone couldn't read the text itself). Null: not a menu. */
export async function readMenuPhotos(photos: readonly string[]): Promise<DishLine[] | null> {
  const { data, usage } = await structuredCompletion({
    model: modelFor('vision'),
    name: 'menu_reading',
    jsonSchema: MENU_READING_JSON_SCHEMA,
    schema: menuReadingSchema,
    messages: [
      { role: 'system', content: MENU_READING_PROMPT },
      {
        role: 'user',
        content: [
          { type: 'text', text: photos.length > 1 ? `Read these ${photos.length} pages of one menu.` : 'Read this menu.' },
          ...photos.map((url) => ({ type: 'image_url' as const, image_url: { url, detail: 'high' as const } })),
        ],
      },
    ],
  });
  console.info('[menus] photos read', JSON.stringify({ isMenu: data.isMenu, lines: data.lines.length, usage }));
  if (!data.isMenu) return null;
  return data.lines.flatMap((line) => {
    const name = line.name.trim();
    if (name.length < 2) return [];
    const optional = (value: string, max: number) => (value.trim() ? value.trim().slice(0, max) : undefined);
    return [{ name: name.slice(0, 120), description: optional(line.description, 300), price: optional(line.price, 20), section: optional(line.section, 60) }];
  });
}

/** First pass: foods, portions, the AI's own quick numbers and likely tweaks for every line. */
export async function analyzeMenuLines(lines: readonly DishLine[], restaurant: string | null) {
  const parts: { start: number; lines: DishLine[] }[] = [];
  for (let start = 0; start < lines.length; start += LINES_PER_CALL) parts.push({ start, lines: lines.slice(start, start + LINES_PER_CALL) });
  const answers = await Promise.all(
    parts.map(async (part) => {
      const { data, usage } = await structuredCompletion({
        model: modelFor('text'),
        name: 'menu_dishes',
        jsonSchema: MENU_JSON_SCHEMA,
        schema: menuAnalysisSchema,
        messages: [
          { role: 'system', content: MENU_SYSTEM_PROMPT },
          { role: 'user', content: menuLinesText(part.lines, restaurant, part.start) },
        ],
      });
      console.info('[menus] dishes', JSON.stringify({ lines: part.lines.length, dishes: data.dishes.filter((d) => d.isDish).length, usage }));
      return data;
    }),
  );
  // Each line once, in order; a line the AI skipped or numbered wrongly is left out.
  const byLine = new Map<number, MenuDishAnalysis>();
  for (const answer of answers) for (const dish of answer.dishes) if (dish.line <= lines.length && !byLine.has(dish.line)) byLine.set(dish.line, dish);
  return { restaurantType: answers[0]?.restaurantType ?? '', byLine };
}

const asItems = (computed: readonly ComputedItem[], ids: readonly string[]): ScanDishItem[] =>
  computed.map((item, i) => ({
    id: ids[i] ?? crypto.randomUUID(),
    name: item.name,
    foodId: item.foodId,
    grams: item.grams,
    nutrients: item.nutrients,
    aiName: item.aiName ?? null,
    productCode: item.productCode ?? null,
    personalFoodId: item.personalFoodId ?? null,
  }));

const totalsOf = (items: readonly ScanDishItem[]) => {
  const nutrients = addNutrients(items.map((item) => item.nutrients));
  return { nutrients, calories: Math.round(nutrients.calories ?? 0), proteinG: Math.round(nutrients.protein ?? 0) };
};

/**
 * Tweaks a server can make, with the dish's numbers after each. Dropped when it saves little (under
 * 30 kcal) or would take away most of the dish (the AI must never remove its main part).
 */
export function tweaksFor(items: readonly ScanDishItem[], tweaks: MenuDishAnalysis['tweaks']): ScanTweak[] {
  const before = totalsOf(items).calories;
  return tweaks.flatMap((tweak) => {
    const itemIds = tweak.items.flatMap((n) => (items[n - 1] ? [items[n - 1].id] : []));
    if (itemIds.length === 0 || !tweak.label) return [];
    const share = TWEAK_SHARE[tweak.action];
    const after = totalsOf(items.map((item) => (itemIds.includes(item.id) ? { ...item, nutrients: scaleNutrients(item.nutrients, share) } : item)));
    if (before - after.calories < 30 || after.calories < before * 0.5) return [];
    return [{ label: tweak.label, itemIds, action: tweak.action, calories: after.calories, proteinG: after.proteinG }];
  });
}

/** Applies a tweak to a dish's foods (as ordered). */
export function applyTweak(items: readonly ScanDishItem[], tweak: ScanTweak): ScanDishItem[] {
  const share = TWEAK_SHARE[tweak.action];
  return items.flatMap((item) => {
    if (!tweak.itemIds.includes(item.id)) return [item];
    return share === 0 ? [] : [{ ...item, grams: round1(item.grams * share), nutrients: scaleNutrients(item.nutrients, share) }];
  });
}

/**
 * The one question before ordering, with each answer's calories worked out now. Null when the
 * answers would barely change the dish (under 60 kcal, or a tenth of a smaller dish).
 */
export async function menuQuestionFor(question: MenuDishAnalysis['question'], items: readonly ScanDishItem[]): Promise<MenuQuestionState | null> {
  if (!question || question.options.length < 2) return null;
  const target = question.item > 0 ? items[question.item - 1] : undefined;
  if (question.item > 0 && !target) return null;
  if (target?.personalFoodId) return null;
  const options: { label: string; change: FollowUpChange }[] = [];
  if (question.kind === 'prep') {
    if (!target) return null;
    for (const option of question.options) {
      const food = await findFood(option.food);
      if (!food || !option.label || options.some((o) => o.change.type === 'food' && o.change.foodId === food.id)) continue;
      options.push({ label: option.label, change: { type: 'food', itemId: target.id, name: target.name, foodId: food.id, per100g: food.nutrients } });
    }
  } else {
    const base = target ? target.grams : items.reduce((sum, item) => sum + item.grams, 0);
    for (const option of question.options) {
      if (!option.label || !(option.grams > 0) || base <= 0) continue;
      options.push({ label: option.label, change: { type: 'scale', itemId: target?.id ?? null, factor: Math.round((option.grams / base) * 100) / 100 } });
    }
  }
  if (options.length < 2) return null;
  const priced = options.map((option) => ({ ...option, calories: Math.round(itemTotals(applyChange(items, option.change)).nutrients.calories ?? 0) }));
  const values = priced.map((option) => option.calories);
  const dish = totalsOf(items).calories;
  if (Math.max(...values) - Math.min(...values) < Math.min(60, Math.max(20, dish * 0.1))) return null;
  return { kind: question.kind, question: MENU_QUESTION_WORDING[question.kind], about: target?.name ?? null, options: priced };
}

/** A dish from the first pass alone: the AI's own numbers, with the wider quick range. */
export function quickDish(line: DishLine, n: number, analysis: MenuDishAnalysis): ScanDish {
  const items = analysis.items.map((item) => ({
    id: crypto.randomUUID(),
    name: item.name.trim() || 'Food',
    foodId: null,
    grams: round1(item.grams),
    nutrients: estimateNutrients(item),
    aiName: item.name,
  }));
  const corrected = calibrate(items);
  const { nutrients, calories } = totalsOf(corrected);
  return {
    n,
    name: line.name,
    description: line.description ?? null,
    section: line.section ?? null,
    price: line.price ?? null,
    kind: analysis.kind,
    items: corrected,
    nutrients,
    source: 'quick',
    range: estimateRange(calories, analysis.kind, 'quick'),
    tweaks: tweaksFor(corrected, analysis.tweaks),
    question: null,
  };
}

/** The pilot's measured underestimate, corrected upward on every food (grams and numbers alike). */
function calibrate(items: readonly ScanDishItem[]): ScanDishItem[] {
  const factor = ESTIMATE_CALIBRATION.correction;
  if (factor === 1) return [...items];
  return items.map((item) => ({ ...item, grams: round1(item.grams * factor), nutrients: scaleNutrients(item.nutrients, factor) }));
}

/** Second pass, before calibration: each dish's foods priced from the database (one matching call for all of them). */
export async function priceFoods(analyses: readonly MenuDishAnalysis[], memory: readonly PersonalFoodRow[] = []) {
  const all: AiMealItem[] = analyses.flatMap((a) => a.items);
  const computed = all.length > 0 ? await computeItems(all, memory) : [];
  let next = 0;
  return analyses.map((a) => {
    const part = computed.slice(next, next + a.items.length);
    next += a.items.length;
    return part;
  });
}

/** Second pass: the chosen dishes priced from our database, calibrated, with their tweaks and question. */
export async function priceDishes(dishes: readonly ScanDish[], analyses: ReadonlyMap<number, MenuDishAnalysis>, memory: readonly PersonalFoodRow[] = []) {
  const list = dishes.flatMap((dish) => {
    const analysis = analyses.get(dish.n);
    return analysis && analysis.items.length > 0 ? [{ dish, analysis }] : [];
  });
  const priced = await priceFoods(
    list.map((l) => l.analysis),
    memory,
  );
  return Promise.all(
    list.map(async ({ dish, analysis }, i): Promise<ScanDish> => {
      const items = calibrate(
        asItems(
          priced[i],
          dish.items.map((item) => item.id),
        ),
      );
      const { nutrients, calories } = totalsOf(items);
      return {
        ...dish,
        items,
        nutrients,
        source: 'estimate',
        range: estimateRange(calories, dish.kind, 'estimate'),
        tweaks: tweaksFor(items, analysis.tweaks),
        question: await menuQuestionFor(analysis.question, items).catch(() => null),
      };
    }),
  );
}
