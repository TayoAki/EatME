import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import {
  characterSchema,
  dayXp,
  DEFAULT_LOOKS,
  earnedGear,
  HAIR_STYLES,
  levelFor,
  levelStart,
  MAX_LEVEL,
  moodFor,
  strengthTier,
} from './character';

// The rules of CHARACTER.md §3–4, one test each: `npm test`.

const day = (flags: Partial<{ showedUp: boolean; protein: boolean; water: boolean; fiber: boolean }>) => ({
  showedUp: false,
  protein: false,
  water: false,
  fiber: false,
  ...flags,
});

describe('XP', () => {
  test('a day earns 10 for showing up, 10 for protein, 5 each for water and fiber', () => {
    assert.equal(dayXp(day({})), 0);
    assert.equal(dayXp(day({ showedUp: true })), 10);
    assert.equal(dayXp(day({ showedUp: true, protein: true })), 20);
    assert.equal(dayXp(day({ showedUp: true, protein: true, water: true, fiber: true })), 30);
  });

  test('water and fiber count on a day without a logged meal', () => {
    assert.equal(dayXp(day({ water: true })), 5);
  });
});

describe('levels', () => {
  test('level n starts at 5 × (n − 1) × (n + 4)', () => {
    assert.equal(levelStart(1), 0);
    assert.equal(levelStart(2), 30);
    assert.equal(levelStart(5), 180);
    assert.equal(levelStart(10), 630);
  });

  test('the level for an amount of XP', () => {
    assert.equal(levelFor(0), 1);
    assert.equal(levelFor(29), 1);
    assert.equal(levelFor(30), 2);
    assert.equal(levelFor(179), 4);
    assert.equal(levelFor(180), 5);
  });

  test('levels stop at the top level', () => {
    assert.equal(levelFor(10_000_000), MAX_LEVEL);
  });

  test('a typical 20-XP day reaches level 5 in about 9 days and level 10 in about a month', () => {
    assert.equal(levelFor(9 * 20), 5);
    assert.equal(levelFor(32 * 20), 10);
  });
});

describe('growth from habits, never weight', () => {
  test('strength follows protein days: 10 and 30', () => {
    assert.equal(strengthTier(0), 0);
    assert.equal(strengthTier(9), 0);
    assert.equal(strengthTier(10), 1);
    assert.equal(strengthTier(29), 1);
    assert.equal(strengthTier(30), 2);
  });

  test('gear unlocks with levels', () => {
    assert.deepEqual(earnedGear(4), []);
    assert.deepEqual(earnedGear(5), ['headband']);
    assert.deepEqual(earnedGear(16), ['headband', 'wristbands', 'medal', 'gloves']);
    assert.deepEqual(earnedGear(25), ['headband', 'wristbands', 'medal', 'gloves', 'belt']);
  });
});

describe('moods', () => {
  test('happy after showing up today', () => {
    assert.equal(moodFor('2026-10-28', true, '2026-10-28'), 'happy');
  });

  test('waiting when yesterday was logged, or before the first log', () => {
    assert.equal(moodFor('2026-10-28', false, '2026-10-27'), 'waiting');
    assert.equal(moodFor('2026-10-28', false, null), 'waiting');
  });

  test('missing you after two days away, across a month end', () => {
    assert.equal(moodFor('2026-10-28', false, '2026-10-26'), 'missing');
    assert.equal(moodFor('2026-11-01', false, '2026-10-30'), 'missing');
  });
});

describe('the look', () => {
  test('the default girl and guy looks are valid', () => {
    for (const look of Object.values(DEFAULT_LOOKS)) {
      assert.ok(characterSchema.safeParse({ name: 'Champ', look }).success);
    }
  });

  test('no curly hair for now', () => {
    assert.ok(!(HAIR_STYLES as readonly string[]).includes('curly'));
    assert.ok(!characterSchema.safeParse({ name: 'Champ', look: { ...DEFAULT_LOOKS.girl, hair: 'curly' } }).success);
  });

  test('a name is 1 to 16 characters, trimmed', () => {
    assert.equal(characterSchema.parse({ name: '  Max  ', look: DEFAULT_LOOKS.guy }).name, 'Max');
    assert.ok(!characterSchema.safeParse({ name: '   ', look: DEFAULT_LOOKS.guy }).success);
    assert.ok(!characterSchema.safeParse({ name: 'x'.repeat(17), look: DEFAULT_LOOKS.guy }).success);
  });

  test('only known gear can be worn', () => {
    assert.deepEqual(characterSchema.parse({ name: 'Champ', look: DEFAULT_LOOKS.guy, gear: { headband: true } }).gear, { headband: true });
    assert.ok(!characterSchema.safeParse({ name: 'Champ', look: DEFAULT_LOOKS.guy, gear: { crown: true } }).success);
  });
});
