import assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import { isGoodScan, scansJustDone, type ScanLike } from './rating';

// When the rating prompt may come (PLAN.md → Rating prompt): `npm test`.

const meal = (changes: Partial<ScanLike> = {}): ScanLike => ({
  id: 'm1',
  status: 'completed',
  source: 'photo',
  confidence: 'high',
  followUp: null,
  ...changes,
});
const question = (answer: number | null): ScanLike['followUp'] => ({
  kind: 'portion',
  question: 'How big was it?',
  about: null,
  options: [{ label: 'Small', calories: 400 }],
  answer,
});

describe('a scan that went well', () => {
  test('a finished photo, description or label scan', () => {
    for (const source of ['photo', 'text', 'label'] as const) assert.equal(isGoodScan(meal({ source })), true);
  });

  test('not a barcode, a search, a quick add or a drink: those are no AI scan', () => {
    for (const source of ['barcode', 'food', 'quick', 'drink', 'copy', 'restaurant', 'menu'] as const) {
      assert.equal(isGoodScan(meal({ source })), false);
    }
  });

  test('not while it runs, nor when it failed or found no food', () => {
    for (const status of ['analyzing', 'failed', 'not_food', 'saved'] as const) assert.equal(isGoodScan(meal({ status })), false);
  });

  test('not a rough estimate, nor while its question waits for an answer', () => {
    assert.equal(isGoodScan(meal({ confidence: 'low' })), false);
    assert.equal(isGoodScan(meal({ followUp: question(null) })), false);
    assert.equal(isGoodScan(meal({ followUp: question(0) })), true);
    assert.equal(isGoodScan(meal({ followUp: question(-1) })), true);
  });
});

describe('scans just done', () => {
  test('only scans that were analyzing at the last look', () => {
    const before = [meal({ id: 'a', status: 'analyzing' }), meal({ id: 'b' })];
    const now = [meal({ id: 'a' }), meal({ id: 'b' }), meal({ id: 'c' })];
    assert.deepEqual(
      scansJustDone(before, now).map((m) => m.id),
      ['a'],
    );
  });

  test('a scan that finished as a rough estimate does not count', () => {
    assert.deepEqual(scansJustDone([meal({ status: 'analyzing' })], [meal({ confidence: 'low' })]), []);
  });
});
