import { z } from 'zod';

/**
 * Meal costs (v2.7, BUDGET-PLANS.md): about what a meal costs to make at home, from what its foods cost per 100 g
 * as eaten (`food_prices`: BLS shelf prices for staples, USDA Purchase to Plate national averages carried forward
 * for the rest). National averages, so every cost is "about". Plain maths here; the server reads the prices.
 */

/** A meal gets a cost only when foods with a price make up this share of its weight; the rest isn't guessed. */
export const MIN_PRICED_SHARE = 0.9;

/** A meal's foods summed for a portion of 1: their weight, the weight that has a price, and what that part costs. */
export type CostParts = { grams: number; pricedGrams: number; cents: number };

/**
 * What a meal costs as logged (`portion` × its foods), in cents, or null when less than 90% of its weight has a
 * price. Foods without a price count at the average price per gram of the rest of the meal.
 */
export function mealCost(parts: CostParts, portion = 1): number | null {
  if (parts.grams <= 0 || parts.pricedGrams <= 0 || parts.pricedGrams / parts.grams < MIN_PRICED_SHARE) return null;
  return Math.round(((parts.cents * parts.grams) / parts.pricedGrams) * portion);
}

/** A cost to the nearest 10 cents (never 0), since every cost is an estimate. */
export const roundCost = (cents: number) => Math.max(10, Math.round(cents / 10) * 10);

/** "$2.40". */
export const formatCost = (cents: number) => `$${(roundCost(cents) / 100).toFixed(2)}`;

/** A day's meals: the cost of those that have one, and how many of how many do. */
export type DayCost = { cents: number; priced: number; meals: number };

export function dayCost(costs: readonly (number | null | undefined)[]): DayCost {
  const known = costs.filter((c): c is number => typeof c === 'number');
  return { cents: known.reduce((sum, c) => sum + c, 0), priced: known.length, meals: costs.length };
}

/** How far a day's cost, as shown, is over the budget (0 when within it or no budget): "about $8.00" is never over $8. */
export const overBudget = (day: DayCost, budgetCents: number | null) =>
  !budgetCents || day.priced === 0 ? 0 : Math.max(0, roundCost(day.cents) - budgetCents);

/** "about $9.80", or "about $7.20 for 2 of 3 meals" when some meals have no cost; null when none has one. */
export function costLine(day: DayCost) {
  if (day.priced === 0) return null;
  const about = `about ${formatCost(day.cents)}`;
  return day.priced === day.meals ? about : `${about} for ${day.priced} of ${day.meals} meals`;
}

/** Plan tomorrow's optional daily budget, in whole dollars (Preferences → `planBudget`). */
export const BUDGET_MIN = 5;
export const BUDGET_MAX = 100;
export const BUDGET_PRESETS = [8, 10, 12, 15, 20] as const;
export const planBudgetSchema = z.number().int().min(BUDGET_MIN).max(BUDGET_MAX).nullable();

/** How much being over the budget weighs in a draft's score (per share over), and the most it can ever weigh. */
const BUDGET_WEIGHT = 1.5;
/** Far below the calorie floor's 10: a budget never plans a day under the floor. */
const BUDGET_CAP = 3;
/** With a budget, each meal without a cost weighs a little, so meals with a cost come first. */
const UNPRICED_COST = 0.05;

/**
 * What a day's cost adds to a draft's score when the person set a budget (lower is better): the share over the
 * budget, capped well below the calorie floor's weight, and a little for each meal without a cost. Being under the
 * budget earns nothing, so the cheapest day never wins for being cheap.
 */
export function budgetCost(day: DayCost, budgetCents: number | null) {
  if (!budgetCents || budgetCents <= 0) return 0;
  const over = Math.max(0, day.cents - budgetCents) / budgetCents;
  return Math.min(BUDGET_WEIGHT * over, BUDGET_CAP) + UNPRICED_COST * (day.meals - day.priced);
}
