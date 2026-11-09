import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import { draftCost, rankDrafts, swapChoices, type DraftChoice, type DraftGoal } from './day-draft';
import { budgetCost, costLine, dayCost, formatCost, mealCost, overBudget, planBudgetSchema } from './meal-cost';

// The rules of BUDGET-PLANS.md §3–4, one test each: `npm test`.

describe('a meal’s cost', () => {
  test('all of it priced: the foods’ cost times the portion', () => {
    assert.equal(mealCost({ grams: 400, pricedGrams: 400, cents: 250 }), 250);
    assert.equal(mealCost({ grams: 400, pricedGrams: 400, cents: 250 }, 1.5), 375);
  });

  test('90% of its weight priced: the rest counts at the same price per gram', () => {
    assert.equal(mealCost({ grams: 500, pricedGrams: 450, cents: 270 }), 300);
  });

  test('less than 90% priced, or nothing weighed: no cost rather than a guess', () => {
    assert.equal(mealCost({ grams: 500, pricedGrams: 400, cents: 270 }), null);
    assert.equal(mealCost({ grams: 0, pricedGrams: 0, cents: 0 }), null);
  });
});

describe('how costs read', () => {
  test('to the nearest 10 cents, never $0.00', () => {
    assert.equal(formatCost(238), '$2.40');
    assert.equal(formatCost(1234), '$12.30');
    assert.equal(formatCost(3), '$0.10');
  });

  test('a day says how many meals its cost covers', () => {
    assert.equal(costLine(dayCost([240, 310, 430])), 'about $9.80');
    assert.equal(costLine(dayCost([240, null, 430])), 'about $6.70 for 2 of 3 meals');
    assert.equal(costLine(dayCost([null, null])), null);
  });

  test('over the budget as shown: "about $8.00" is never over $8', () => {
    assert.equal(overBudget(dayCost([801]), 800), 0);
    assert.equal(overBudget(dayCost([806]), 800), 10);
    assert.equal(overBudget(dayCost([1420]), 1200), 220);
    assert.equal(overBudget(dayCost([1420]), null), 0);
  });

  test('a budget is whole dollars from $5 to $100, or off', () => {
    assert.equal(planBudgetSchema.safeParse(12).success, true);
    assert.equal(planBudgetSchema.safeParse(null).success, true);
    assert.equal(planBudgetSchema.safeParse(4).success, false);
    assert.equal(planBudgetSchema.safeParse(12.5).success, false);
  });
});

describe('the budget in a draft', () => {
  test('no budget, no effect; under the budget earns nothing', () => {
    assert.equal(budgetCost(dayCost([2000]), null), 0);
    assert.equal(budgetCost(dayCost([500]), 1200), 0);
    assert.equal(budgetCost(dayCost([1100]), 1200), 0);
  });

  test('over the budget weighs more the further over, up to a cap', () => {
    const a = budgetCost(dayCost([1400]), 1200);
    const b = budgetCost(dayCost([1800]), 1200);
    assert.ok(a > 0 && b > a);
    assert.equal(budgetCost(dayCost([100000]), 1200), 3);
  });

  test('meals without a cost weigh a little, so priced meals come first', () => {
    assert.ok(budgetCost(dayCost([800, null]), 1200) > budgetCost(dayCost([800, 300]), 1200));
  });

  const choice = (key: string, calories: number, proteinG: number, costCents: number | null): DraftChoice => ({
    key,
    savedMealId: null,
    sourceMealId: key,
    name: key,
    nutrients: { calories, proteinG, carbsG: 0, fatG: 0 },
    costCents,
    times: 1,
  });
  const goal = (budgetCents: number | null): DraftGoal => ({ calories: 1800, proteinG: 100, floor: 1200, glp1: false, budgetCents });
  const slots = [
    { slot: 'breakfast' as const, choices: [choice('oats', 450, 25, 80), choice('brunch', 450, 25, 900)] },
    { slot: 'lunch' as const, choices: [choice('bowl', 650, 40, 300)] },
    { slot: 'dinner' as const, choices: [choice('pasta', 700, 40, 350)] },
  ];

  test('two days as close to the target: the one inside the budget wins', () => {
    const withBudget = rankDrafts({ goal: goal(1000), fixed: [], slots });
    assert.equal(withBudget[0].picks[0]?.key, 'oats');
  });

  test('a budget never plans a day under the calorie floor', () => {
    const tight = [
      { slot: 'breakfast' as const, choices: [choice('toast', 150, 6, 30), choice('eggs', 500, 30, 600)] },
      { slot: 'lunch' as const, choices: [choice('soup', 300, 10, 80), choice('sandwich', 700, 35, 900)] },
      { slot: 'dinner' as const, choices: [choice('rice', 300, 8, 60), choice('stew', 700, 45, 1200)] },
    ];
    const best = rankDrafts({ goal: goal(500), fixed: [], slots: tight })[0];
    assert.equal(best.belowFloor, false);
    assert.ok(best.totals.calories >= 1200);
  });

  test('Swap offers the choice that keeps the day inside the budget first', () => {
    const rest = [
      { nutrients: { calories: 650, proteinG: 40, carbsG: 0, fatG: 0 }, costCents: 300 },
      { nutrients: { calories: 700, proteinG: 40, carbsG: 0, fatG: 0 }, costCents: 350 },
    ];
    const swaps = swapChoices([choice('brunch', 450, 25, 900), choice('oats', 450, 25, 80)], null, rest, goal(1000));
    assert.equal(swaps[0].key, 'oats');
  });

  test('a draft’s cost counts what is still planned or logged', () => {
    const item = (costCents: number | null, status: 'planned' | 'logged' | 'removed') => ({
      slot: 'lunch' as const,
      time: '13:00',
      key: 'k',
      savedMealId: null,
      sourceMealId: null,
      name: 'Meal',
      nutrients: { calories: 500, proteinG: 30, carbsG: 0, fatG: 0 },
      costCents,
      status,
    });
    assert.deepEqual(draftCost([item(300, 'planned'), item(200, 'logged'), item(900, 'removed'), item(null, 'planned')]), {
      cents: 500,
      priced: 2,
      meals: 3,
    });
  });
});
