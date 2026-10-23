import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import { MAX_MENU_LINES, menuAnalysisSchema, menuReadingSchema } from './menus';

const item = (grams: number) => ({ name: 'Nuggets', food: 'Chicken nuggets', grams, calories: 2.5 * grams, proteinG: 0.15 * grams, carbsG: 0.1 * grams, fatG: 0.15 * grams, fiberG: 0 });
const dish = (line: number, grams: number) => ({ line, isDish: true, kind: 'main', items: [item(grams)], tweaks: [], question: null });

describe('the AI’s answers about a menu', () => {
  test('a dish outside the limits is left out; the dishes read with it stay', () => {
    const analysis = menuAnalysisSchema.parse({ restaurantType: 'fast food', dishes: [dish(1, 150), dish(2, 4000), dish(3, 300)] });
    assert.deepEqual(
      analysis.dishes.map((d) => d.line),
      [1, 3],
    );
  });

  test('a long restaurant type is cut, not refused', () => {
    const analysis = menuAnalysisSchema.parse({ restaurantType: `fast food ${'chicken '.repeat(10)}`, dishes: [dish(1, 150)] });
    assert.equal(analysis.restaurantType.length, 40);
    assert.equal(analysis.dishes.length, 1);
  });

  test('a photo reading with long text or too many lines is cut, not refused', () => {
    const line = { name: 'Grilled salmon '.repeat(10), description: 'x'.repeat(400), price: '$24', section: 'Mains' };
    const reading = menuReadingSchema.parse({ isMenu: true, lines: Array.from({ length: MAX_MENU_LINES + 5 }, () => line) });
    assert.equal(reading.lines.length, MAX_MENU_LINES);
    assert.equal(reading.lines[0].name.length, 120);
    assert.equal(reading.lines[0].description.length, 300);
  });
});
