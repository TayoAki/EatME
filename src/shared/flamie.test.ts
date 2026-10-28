import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import {
  celebrationText,
  FLAMIE_NUDGES,
  flamieLine,
  flamieMood,
  lastShowedUp,
  markSeen,
  milestoneFor,
  nextCelebration,
  nudgePlan,
  settleSeen,
  stageFor,
  type FlamieSeen,
} from './flamie';

// The rules of FLAMIE.md §3–5, one test each: `npm test`.

const seen = (milestone: number, sparks: FlamieSeen['sparks'] = { date: '', keys: [] }): FlamieSeen => ({ milestone, sparks });

describe('stages', () => {
  test('taller with the streak: Ember, Spark, Flame, Blaze, Bonfire, Supernova', () => {
    const stages = [0, 1, 2, 3, 6, 7, 29, 30, 99, 100, 1000].map((days) => stageFor(days).stage.key);
    assert.deepEqual(stages, ['ember', 'spark', 'spark', 'flame', 'flame', 'blaze', 'blaze', 'bonfire', 'bonfire', 'supernova', 'supernova']);
  });

  test('the next stage, none past the top', () => {
    assert.equal(stageFor(9).next?.label, 'Bonfire');
    assert.equal(stageFor(9).next?.from, 30);
    assert.equal(stageFor(150).next, null);
  });
});

describe('moods', () => {
  test('lit after a meal today', () => {
    assert.equal(flamieMood('2026-10-28', '2026-10-28'), 'lit');
  });

  test('waiting when yesterday was logged, or before the first log', () => {
    assert.equal(flamieMood('2026-10-28', '2026-10-27'), 'waiting');
    assert.equal(flamieMood('2026-10-28', null), 'waiting');
  });

  test('embers after two days away, across a month end', () => {
    assert.equal(flamieMood('2026-10-28', '2026-10-26'), 'embers');
    assert.equal(flamieMood('2026-11-01', '2026-10-30'), 'embers');
  });

  test('a first-timer is asked to light Flamie, not told it was missed', () => {
    assert.equal(flamieLine('waiting', null), 'Log your first meal to light Flamie.');
  });

  test("logged before the streak's three weeks: long away, not new", () => {
    const away = lastShowedUp({ today: '2026-10-28', loggedDates: [], totalDays: 12 });
    assert.equal(away, '2026-09-28');
    assert.equal(flamieMood('2026-10-28', away), 'embers');
    assert.deepEqual(nudgePlan('2026-10-28', away, false), []);
    assert.equal(lastShowedUp({ today: '2026-10-28', loggedDates: [], totalDays: 0 }), null);
    assert.equal(lastShowedUp({ today: '2026-10-28', loggedDates: ['2026-10-20', '2026-10-27'], totalDays: 40 }), '2026-10-27');
  });
});

describe('celebrations', () => {
  test('nothing before the phone has a record (what it sees first counts as celebrated)', () => {
    assert.equal(nextCelebration(30, '2026-10-28', ['protein'], undefined), null);
  });

  test('a new milestone, and only the highest one reached', () => {
    assert.deepEqual(nextCelebration(7, '2026-10-28', [], seen(3)), { kind: 'milestone', days: 7 });
    assert.deepEqual(nextCelebration(14, '2026-10-28', [], seen(0)), { kind: 'milestone', days: 14 });
    assert.equal(milestoneFor(2), 0);
  });

  test('then each goal reached today, once', () => {
    const today = '2026-10-28';
    assert.deepEqual(nextCelebration(9, today, ['water', 'protein'], seen(7)), { kind: 'spark', spark: 'protein' });
    const after = markSeen(seen(7), { kind: 'spark', spark: 'protein' }, today);
    assert.deepEqual(nextCelebration(9, today, ['water', 'protein'], after), { kind: 'spark', spark: 'water' });
    const done = markSeen(after, { kind: 'spark', spark: 'water' }, today);
    assert.equal(nextCelebration(9, today, ['water', 'protein'], done), null);
    // A new day: the same goals cheer again.
    assert.deepEqual(nextCelebration(10, '2026-10-29', ['protein'], done), { kind: 'spark', spark: 'protein' });
  });

  test('after a break, milestones count again', () => {
    const settled = settleSeen(seen(30), 2);
    assert.equal(settled.milestone, 0);
    assert.deepEqual(nextCelebration(3, '2026-10-28', [], settled), { kind: 'milestone', days: 3 });
  });

  test('a new stage says so', () => {
    assert.equal(celebrationText({ kind: 'milestone', days: 7 }), '7 days in a row! Flamie grew into a Blaze');
    assert.equal(celebrationText({ kind: 'milestone', days: 14 }), '14 days in a row! Flamie is on fire');
  });
});

describe('check-in nudges', () => {
  test('logged today: the five nudges start tomorrow evening', () => {
    assert.deepEqual(nudgePlan('2026-10-28', '2026-10-28', true), [
      { offset: 1, nudge: 0 },
      { offset: 2, nudge: 1 },
      { offset: 3, nudge: 2 },
      { offset: 4, nudge: 3 },
      { offset: 5, nudge: 4 },
    ]);
  });

  test('logged yesterday, tonight still ahead: the first nudge is tonight', () => {
    assert.deepEqual(nudgePlan('2026-10-28', '2026-10-27', false)[0], { offset: 0, nudge: 0 });
  });

  test('three days away: the count goes on from the third, then stops after the fifth', () => {
    assert.deepEqual(nudgePlan('2026-10-28', '2026-10-25', false), [
      { offset: 0, nudge: 2 },
      { offset: 1, nudge: 3 },
      { offset: 2, nudge: 4 },
    ]);
  });

  test('tonight already passed: tomorrow gets the next nudge', () => {
    assert.deepEqual(nudgePlan('2026-10-28', '2026-10-27', true)[0], { offset: 1, nudge: 1 });
  });

  test('away more than five days: nothing more is sent', () => {
    assert.deepEqual(nudgePlan('2026-10-28', '2026-10-20', false), []);
  });

  test('never logged yet: the five nudges from tonight', () => {
    assert.deepEqual(
      nudgePlan('2026-10-28', null, false).map((n) => n.nudge),
      [0, 1, 2, 3, 4],
    );
  });

  test('the nudges never mention calories, weight or food guilt', () => {
    const words = FLAMIE_NUDGES.flat().join(' ').toLowerCase();
    for (const banned of ['calorie', 'weight', 'healthy', 'guilt', 'bad', 'cheat', 'safe', 'accurate', 'verified']) {
      assert.ok(!words.includes(banned), banned);
    }
  });
});
