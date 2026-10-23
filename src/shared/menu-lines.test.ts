import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import { dishLinesFromText, type TextBox } from './menu-lines';

// A menu page as Apple Vision returns it: text and boxes (0–1000, origin top left), in any order.
const box = (text: string, x0: number, y0: number, x1: number, y1: number): TextBox => ({ text, box: { x0, y0, x1, y1 } });

describe('menu text into dish lines', () => {
  test('a price in its own column joins its dish; headings become sections; small text is a description', () => {
    const page = [
      box('BURGERS', 80, 100, 300, 140),
      box('Classic Burger', 80, 160, 400, 190),
      box('12.99', 820, 162, 900, 188),
      box('beef patty, cheddar, pickles, house sauce', 80, 195, 600, 215),
      box('Mushroom Swiss', 80, 240, 400, 270),
      box('$14', 820, 242, 900, 268),
      box('SALADS', 80, 320, 300, 360),
      box('Caesar Salad ........ 10.50', 80, 380, 900, 410),
      box('Open 11am-10pm · (555) 123-4567', 80, 900, 900, 930),
    ];
    assert.deepEqual(dishLinesFromText(page), [
      { name: 'Classic Burger', price: '$12.99', section: 'BURGERS', description: 'beef patty, cheddar, pickles, house sauce' },
      { name: 'Mushroom Swiss', price: '$14', section: 'BURGERS' },
      { name: 'Caesar Salad', price: '$10.50', section: 'SALADS' },
    ]);
  });

  test('a menu without prices: every line may be a dish (the person removes the wrong ones)', () => {
    const page = [box('Chicken pad thai', 80, 100, 400, 130), box('Green curry', 80, 150, 400, 180), box('Spring rolls', 80, 200, 400, 230)];
    assert.deepEqual(
      dishLinesFromText(page).map((d) => d.name),
      ['Chicken pad thai', 'Green curry', 'Spring rolls'],
    );
  });

  test('drops repeats, prices alone and lines without words', () => {
    const page = [box('Fries', 80, 100, 300, 130), box('4.50', 820, 102, 900, 128), box('Fries', 80, 150, 300, 180), box('6.00', 820, 152, 900, 178), box('$$$', 80, 200, 200, 230)];
    assert.deepEqual(dishLinesFromText(page), [{ name: 'Fries', price: '$4.50' }]);
  });
});
