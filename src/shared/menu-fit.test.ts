import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import { DEFAULT_SLOT_TIMES } from './day-draft';
import { aimFor, fitWord, laterMeals, rankMenu, skippedDishes, type MenuDay, type MenuDish } from './menu-fit';

// The rules of WHAT-TO-ORDER.md §6, one test each: `npm test`.

const dish = (key: string, calories: number, proteinG: number, extra: Partial<MenuDish> = {}): MenuDish => ({
  key,
  name: key,
  kind: 'main',
  numbers: { calories, proteinG, carbsG: 0, fatG: 0 },
  range: null,
  source: 'chain',
  ...extra,
});

/** 2,000 kcal and 120 g protein a day, 500 kcal and 30 g eaten, dinner still to come: aim 750 kcal, 45 g. */
const day = (extra: Partial<MenuDay> = {}): MenuDay => ({
  target: { calories: 2000, proteinG: 120 },
  eaten: { calories: 500, proteinG: 30 },
  floor: 1200,
  glp1: false,
  later: ['dinner'],
  ...extra,
});

describe('the aim for this meal', () => {
  test("is what's left divided by the main meals still to come", () => {
    const { left, aim } = aimFor(day());
    assert.deepEqual(left, { calories: 1500, proteinG: 90 });
    assert.deepEqual(aim, { calories: 750, proteinG: 45 });
  });

  test("one meal aims at 40% of the day at most, however much is left", () => {
    // 20:30, dinner is the last meal: 1,350 kcal and 95 g protein left, but the aim stays meal-sized.
    const { left, aim } = aimFor(day({ target: { calories: 1800, proteinG: 120 }, eaten: { calories: 450, proteinG: 25 }, later: [] }));
    assert.deepEqual(left, { calories: 1350, proteinG: 95 });
    assert.deepEqual(aim, { calories: 720, proteinG: 48 });
  });

  test('never plans below the calorie floor', () => {
    const { left } = aimFor(day({ target: { calories: 1000, proteinG: 80 }, eaten: { calories: 0, proteinG: 0 }, floor: 1200 }));
    assert.equal(left.calories, 1200);
  });

  test('counts only main meals more than an hour later and not logged yet', () => {
    const times = { ...DEFAULT_SLOT_TIMES };
    // 12:30, lunch is this meal: dinner (19:00) is still to come.
    assert.deepEqual(laterMeals(12 * 60 + 30, times, new Set()), ['dinner']);
    // 09:00: lunch and dinner.
    assert.deepEqual(laterMeals(9 * 60, times, new Set()), ['lunch', 'dinner']);
    // Lunch already logged at 09:00 → only dinner.
    assert.deepEqual(laterMeals(9 * 60, times, new Set(['lunch'])), ['dinner']);
    // 18:30: dinner at 19:00 is this meal, not a later one.
    assert.deepEqual(laterMeals(18 * 60 + 30, times, new Set()), []);
  });
});

describe('ranking', () => {
  test('the closest fit wins and the lowest-calorie dish never does', () => {
    const fit = rankMenu([dish('salad', 180, 8), dish('bowl', 720, 40), dish('burger', 1100, 50)], day());
    assert.equal(fit.state, 'ranked');
    assert.equal(fit.fitsWell[0].key, 'bowl');
    // 180 kcal is under the meal-sized floor (40% of 750): listed, never in Fits well.
    assert.ok(!fit.fitsWell.some((d) => d.key === 'salad'));
    assert.ok(fit.others.some((d) => d.key === 'salad'));
  });

  test('a dish far under the aim scores worse than one near it', () => {
    const fit = rankMenu([dish('small', 320, 25), dish('right', 740, 35)], day());
    assert.deepEqual(
      fit.fitsWell.map((d) => d.key),
      ['right', 'small'],
    );
  });

  test('an estimate counts at the top of its range', () => {
    // 1,300 kcal could be 1,600: more than the 1,500 left, so it never fits.
    const estimate = dish('plate', 1300, 50, { source: 'estimate', range: { low: 1100, high: 1600 } });
    const fit = rankMenu([estimate, dish('wrap', 600, 30)], day());
    assert.ok(!fit.fitsWell.some((d) => d.key === 'plate'));
    const plate = fit.others.find((d) => d.key === 'plate');
    assert.equal(plate?.calories, 1600);
    assert.equal(plate?.overBudget, true);
  });

  test('anything over what is left is listed last, never hidden', () => {
    const fit = rankMenu([dish('huge', 1700, 60), dish('fries', 400, 4, { kind: 'side' }), dish('wrap', 600, 30)], day());
    assert.equal(fit.others.at(-1)?.key, 'huge');
    assert.match(fit.others.at(-1)!.reason, /over what's left today/);
  });

  test('sizes made for sharing never make Fits well', () => {
    const menu = [
      dish('nuggets-30', 950, 100, { name: 'Nuggets', serving: '30 ct' }),
      dish('family', 760, 45, { name: 'Family meal' }),
      dish('nuggets-12', 380, 40, { name: 'Nuggets', serving: '12 ct' }),
      dish('sandwich', 700, 40),
    ];
    const fit = rankMenu(menu, day({ later: [] }));
    assert.deepEqual(
      fit.fitsWell.map((d) => d.key),
      ['sandwich', 'nuggets-12'],
    );
    assert.ok(fit.others.some((d) => d.key === 'nuggets-30'));
  });

  test('sides and drinks are listed, not ranked as meals', () => {
    const fit = rankMenu([dish('loaded fries', 750, 20, { kind: 'side' }), dish('shake', 760, 15, { kind: 'drink' }), dish('wrap', 520, 30)], day());
    assert.deepEqual(
      fit.fitsWell.map((d) => d.key),
      ['wrap'],
    );
  });

  test('protein matters: of two dishes as close to the aim, the one with more protein wins', () => {
    const fit = rankMenu([dish('pasta', 750, 18), dish('chicken plate', 750, 48)], day());
    assert.equal(fit.fitsWell[0].key, 'chicken plate');
  });

  test('one size of a dish in Fits well; the other sizes stay in the list', () => {
    const sizes = [
      dish('latte-s', 300, 12, { name: 'Iced Latte' }),
      dish('latte-m', 420, 16, { name: 'Iced Latte' }),
      dish('wrap', 610, 30),
    ];
    const fit = rankMenu(sizes, day());
    assert.equal(fit.fitsWell.filter((d) => d.key.startsWith('latte')).length, 1);
    assert.equal(fit.others.filter((d) => d.key.startsWith('latte')).length, 1);
  });

  test('gives the same answer twice', () => {
    const menu = [dish('a', 700, 30), dish('b', 700, 30), dish('c', 650, 35), dish('d', 900, 45)];
    assert.deepEqual(rankMenu(menu, day()), rankMenu(menu, day()));
  });

  test('estimates whose ranges overlap are a close call, not a first and second', () => {
    const a = dish('a', 700, 35, { source: 'estimate', range: { low: 600, high: 760 } });
    const b = dish('b', 690, 33, { source: 'estimate', range: { low: 590, high: 780 } });
    assert.equal(rankMenu([a, b], day()).closeCall, true);
    assert.equal(rankMenu([dish('a', 700, 35), dish('b', 690, 33)], day()).closeCall, false);
  });
});

describe('when nothing fits', () => {
  test("once the day's budget is spent, nothing is ranked and the lighter dishes come first", () => {
    const fit = rankMenu([dish('bowl', 700, 40), dish('soup', 250, 10)], day({ eaten: { calories: 1950, proteinG: 100 } }));
    assert.equal(fit.state, 'nothing_fits');
    assert.equal(fit.fitsWell.length, 0);
    assert.deepEqual(
      fit.others.map((d) => d.key),
      ['soup', 'bowl'],
    );
  });

  test('when every meal is over what is left, nothing is ranked', () => {
    const fit = rankMenu([dish('burger', 900, 40), dish('pizza', 1200, 45)], day({ eaten: { calories: 1300, proteinG: 80 }, later: [] }));
    assert.equal(fit.state, 'nothing_fits');
  });
});

describe('GLP-1 mode', () => {
  const glp1 = day({ glp1: true, target: { calories: 1500, proteinG: 110 }, eaten: { calories: 300, proteinG: 25 }, later: ['dinner'] });

  test('protein comes first and the reason says how much', () => {
    const fit = rankMenu([dish('noodles', 600, 15), dish('salmon bowl', 640, 42)], glp1);
    assert.equal(fit.fitsWell[0].key, 'salmon bowl');
    assert.equal(fit.fitsWell[0].reason, '42 g protein');
  });

  test('a dish that is too much is offered as a half portion', () => {
    const fit = rankMenu([dish('mixed grill', 1150, 70)], glp1);
    assert.equal(fit.fitsWell[0].variant, 'half');
    assert.equal(fit.fitsWell[0].calories, 575);
  });

  test('a starter with real protein counts as a meal', () => {
    const fit = rankMenu([dish('chicken skewers', 420, 32, { kind: 'side' })], glp1);
    assert.equal(fit.fitsWell[0]?.key, 'chicken skewers');
  });
});

describe('foods to skip', () => {
  test('hides dishes that mention them, by whole word, plural or not', () => {
    const menu = [
      dish('Mushroom Swiss Burger', 700, 35),
      dish('Eggplant Parmesan', 650, 20),
      dish('Garden bowl', 600, 25, { description: 'Greens, roasted mushrooms and quinoa' }),
      dish('Pork carnitas', 680, 38),
    ];
    const skipped = skippedDishes(menu, ['mushrooms', 'egg', 'pork']);
    assert.deepEqual(
      [...skipped].map((d) => d.key),
      ['Mushroom Swiss Burger', 'Garden bowl', 'Pork carnitas'],
    );
    const fit = rankMenu(menu, day(), ['mushrooms', 'egg', 'pork']);
    assert.equal(fit.hidden.length, 3);
    assert.deepEqual(
      fit.fitsWell.map((d) => d.key),
      ['Eggplant Parmesan'],
    );
  });
});

describe('words for calm mode', () => {
  test('fits, bigger or lighter against the aim', () => {
    assert.equal(fitWord(750, 750), 'fits');
    assert.equal(fitWord(900, 750), 'bigger');
    assert.equal(fitWord(500, 750), 'lighter');
  });

  test('the reason names the next meal', () => {
    const fit = rankMenu([dish('bowl', 720, 30)], day());
    assert.equal(fit.fitsWell[0].reason, 'Leaves about 780 kcal for dinner');
  });
});
