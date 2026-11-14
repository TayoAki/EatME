import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import { trialEnd, trialReminderAt } from './billing';

// The Premium offer's timeline and the trial reminder (PLAN.md, Premium offer after sign-up): `npm test`.

const day = (d: Date) => [d.getFullYear(), d.getMonth() + 1, d.getDate()];

describe('when a free trial ends', () => {
  test('a month later, on the same day', () => {
    assert.deepEqual(day(trialEnd(new Date(2026, 10, 14, 15, 30), { units: 1, unit: 'MONTH' })), [2026, 12, 14]);
  });

  test('a month from the 31st ends on the last day of a shorter month', () => {
    assert.deepEqual(day(trialEnd(new Date(2027, 0, 31), { units: 1, unit: 'MONTH' })), [2027, 2, 28]);
    assert.deepEqual(day(trialEnd(new Date(2028, 0, 31), { units: 1, unit: 'MONTH' })), [2028, 2, 29]);
  });

  test('weeks, days and years', () => {
    assert.deepEqual(day(trialEnd(new Date(2026, 11, 28), { units: 1, unit: 'WEEK' })), [2027, 1, 4]);
    assert.deepEqual(day(trialEnd(new Date(2026, 10, 14), { units: 3, unit: 'DAY' })), [2026, 11, 17]);
    assert.deepEqual(day(trialEnd(new Date(2028, 1, 29), { units: 1, unit: 'YEAR' })), [2029, 2, 28]);
  });

  test('keeps the time of day it started', () => {
    const end = trialEnd(new Date(2026, 10, 14, 15, 30), { units: 7, unit: 'DAY' });
    assert.deepEqual([end.getHours(), end.getMinutes()], [15, 30]);
  });
});

describe('the trial reminder', () => {
  test('two days before the end, at 10:00', () => {
    const at = trialReminderAt(new Date(2026, 11, 14, 15, 30));
    assert.deepEqual([...day(at), at.getHours(), at.getMinutes()], [2026, 12, 12, 10, 0]);
  });

  test('across a month boundary', () => {
    assert.deepEqual(day(trialReminderAt(new Date(2027, 0, 1, 8))), [2026, 12, 30]);
  });
});
