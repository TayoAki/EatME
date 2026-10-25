import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import { chainSearchIndex, chainServings, findChain, pickChainDish, searchChainDishes } from './chain-match';

const CHAINS = [
  { slug: 'mcdonalds', name: "McDonald's" },
  { slug: 'chick-fil-a', name: 'Chick-fil-A' },
  { slug: 'dairy-queen', name: 'Dairy Queen' },
  { slug: 'dunkin', name: "Dunkin'" },
  { slug: 'starbucks', name: 'Starbucks' },
];

// As in data/chains/menus: names keep the guides' marks, sizes are as printed (McDonald's lists one size of
// most dishes, Chick-fil-A prints its nuggets in two tables and leaves "Medium" off its waffle fries).
let id = 0;
const item = (name: string, serving: string, calories: number) => ({ id: String(++id), name, serving, calories });
const MCDONALDS = [
  item('Big Mac®', '1 serving', 580),
  item('Chicken McNuggets®', '4 Piece', 170),
  item('World Famous Fries®', 'Small', 230),
  item('Coca-Cola®', 'Small', 200),
  item('Coca-Cola®', 'Medium', 270),
];
const CHICK_FIL_A = [
  item('Chick-fil-A® Nuggets', '8 ct (113g)', 250),
  item('Chick-fil-A® Nuggets', '113g', 250),
  item('Chick-fil-A® Nuggets', '12 ct (170g)', 380),
  item('Chick-fil-A® Nuggets', '30 ct (425g)', 950),
  item('Grilled Nuggets', '8 ct (95g)', 130),
  item('Grilled Nuggets', '12 ct (142g)', 200),
  item('Chick-fil-A Waffle Potato Fries®', 'Small (96g)', 320),
  item('Chick-fil-A Waffle Potato Fries®', '125g', 420),
  item('Chick-fil-A Waffle Potato Fries®', 'Large (179g)', 600),
  item('Chick-fil-A® Chicken Sandwich', '1 sandwich', 420),
  item('Chick-fil-A® Deluxe Sandwich', '1 sandwich', 490),
];

describe('finding the chain a meal names', () => {
  test('the ways people write a chain', () => {
    assert.equal(findChain(CHAINS, 'McDonalds')?.slug, 'mcdonalds');
    assert.equal(findChain(CHAINS, "McDonald's")?.slug, 'mcdonalds');
    assert.equal(findChain(CHAINS, 'Chick fil A')?.slug, 'chick-fil-a');
    assert.equal(findChain(CHAINS, 'DQ')?.slug, 'dairy-queen');
    assert.equal(findChain(CHAINS, 'Dunkin Donuts')?.slug, 'dunkin');
  });

  test('a chain we have no numbers for is no match', () => {
    assert.equal(findChain(CHAINS, 'Burger King'), null);
    assert.equal(findChain(CHAINS, ''), null);
  });
});

describe('picking the dish and its size', () => {
  test('the name as the menu has it, with or without the chain and the marks', () => {
    assert.equal(pickChainDish(MCDONALDS, 'Big Mac', '', "McDonald's")?.item.name, 'Big Mac®');
    assert.equal(pickChainDish(MCDONALDS, 'Big Mac Sandwich', '', "McDonald's")?.item.name, 'Big Mac®');
    assert.equal(pickChainDish(CHICK_FIL_A, 'Chicken Nuggets', '8 ct', 'Chick-fil-A')?.item.serving, '8 ct (113g)');
  });

  test('the size said, in the words menus use', () => {
    assert.equal(pickChainDish(CHICK_FIL_A, 'Nuggets', '12 piece', 'Chick-fil-A')?.item.serving, '12 ct (170g)');
    assert.equal(pickChainDish(CHICK_FIL_A, 'Waffle Fries', 'Large', 'Chick-fil-A')?.item.serving, 'Large (179g)');
    assert.equal(pickChainDish(CHICK_FIL_A, 'Grilled Nuggets', '8 count', 'Chick-fil-A')?.item.serving, '8 ct (95g)');
    assert.equal(pickChainDish(MCDONALDS, 'Coke', 'med', "McDonald's"), null);
    assert.equal(pickChainDish(MCDONALDS, 'Coca-Cola', 'med', "McDonald's")?.item.calories, 270);
  });

  test('no size said: the medium, named as a guess, even when the guide left its name out', () => {
    const coke = pickChainDish(MCDONALDS, 'Coca-Cola', '', "McDonald's");
    assert.equal(coke?.item.serving, 'Medium');
    assert.equal(coke?.sizeGuessed, true);
    const fries = pickChainDish(CHICK_FIL_A, 'Waffle Potato Fries', '', 'Chick-fil-A');
    assert.equal(fries?.item.calories, 420);
    assert.equal(fries?.sizeGuessed, true);
    assert.equal(fries?.sizeName, 'Medium');
    assert.equal(pickChainDish(CHICK_FIL_A, 'Waffle Fries', 'Medium', 'Chick-fil-A')?.item.calories, 420);
  });

  test('anything unsure is no match: the meal keeps its estimate', () => {
    // The only size listed is a small or a count: the person may have had another.
    assert.equal(pickChainDish(MCDONALDS, 'Fries', '', "McDonald's"), null);
    assert.equal(pickChainDish(MCDONALDS, 'Chicken McNuggets', '', "McDonald's"), null);
    // Several sizes and none the usual one.
    assert.equal(pickChainDish(CHICK_FIL_A, 'Chick-fil-A Nuggets', '', 'Chick-fil-A'), null);
    // Two dishes fit as well as each other.
    assert.equal(pickChainDish(CHICK_FIL_A, 'Sandwich', '', 'Chick-fil-A'), null);
    // A size the guide doesn't list, and a dish the chain doesn't have.
    assert.equal(pickChainDish(MCDONALDS, 'World Famous Fries', 'Medium', "McDonald's"), null);
    assert.equal(pickChainDish(MCDONALDS, 'Whopper', '', "McDonald's"), null);
  });

  test('how many, within reason', () => {
    assert.equal(chainServings(undefined), 1);
    assert.equal(chainServings(2), 2);
    assert.equal(chainServings(0.5), 0.5);
    assert.equal(chainServings(40), 6);
    assert.equal(chainServings(Number.NaN), 1);
  });
});

describe('searching chain dishes', () => {
  const RANKS: Record<string, number> = { mcdonalds: 1, 'chick-fil-a': 3 };
  const index = chainSearchIndex([
    ...MCDONALDS.map((i) => ({ ...i, chain: "McDonald's", chainSlug: 'mcdonalds', rank: RANKS.mcdonalds })),
    ...CHICK_FIL_A.map((i) => ({ ...i, chain: 'Chick-fil-A', chainSlug: 'chick-fil-a', rank: RANKS['chick-fil-a'] })),
  ]);
  const names = (q: string) => searchChainDishes(index, CHAINS, q).map((i) => `${i.name} ${i.serving}`);

  test('a dish by its name, half typed', () => {
    assert.deepEqual(names('big mac'), ['Big Mac® 1 serving']);
    assert.deepEqual(names('big m'), ['Big Mac® 1 serving']);
    assert.deepEqual(names('mcnuggets'), ['Chicken McNuggets® 4 Piece']);
  });

  test('the chain first or last keeps the search to it, every size listed once', () => {
    const nuggets = ['Chick-fil-A® Nuggets 8 ct (113g)', 'Chick-fil-A® Nuggets 12 ct (170g)', 'Chick-fil-A® Nuggets 30 ct (425g)'];
    assert.deepEqual(names('chick fil a nuggets').slice(0, 3), nuggets);
    assert.deepEqual(names('nuggets chick-fil-a').slice(0, 3), nuggets);
    assert.deepEqual(names('mcdonalds fries'), ['World Famous Fries® Small']);
  });

  test('the closest names first, then the bigger chain', () => {
    assert.deepEqual(names('nuggets').slice(0, 2), ['Chick-fil-A® Nuggets 8 ct (113g)', 'Chick-fil-A® Nuggets 12 ct (170g)']);
    assert.deepEqual(names('12 piece nuggets'), ['Chick-fil-A® Nuggets 12 ct (170g)', 'Grilled Nuggets 12 ct (142g)']);
  });

  test('nothing for a dish we have no numbers for', () => {
    assert.deepEqual(names('whopper'), []);
    assert.deepEqual(names(''), []);
  });
});
