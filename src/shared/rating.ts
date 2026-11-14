import type { Meal } from './meals';

/**
 * The rating prompt (PLAN.md → Rating prompt): Apple's and Google's own sheet, asked once, right after the first scan
 * that went well, never in onboarding and never behind a "do you like us?" question (Apple 5.6.1).
 */

/** AI scans: a photo, a written description or a nutrition label. */
const AI_SOURCES: ReadonlySet<Meal['source']> = new Set(['photo', 'text', 'label']);

export type ScanLike = Pick<Meal, 'id' | 'status' | 'source' | 'confidence' | 'followUp'>;

/** A scan that went well: it finished with numbers, isn't marked a rough estimate, and has no question waiting. */
export function isGoodScan(meal: ScanLike) {
  return (
    meal.status === 'completed' &&
    AI_SOURCES.has(meal.source) &&
    meal.confidence !== 'low' &&
    (meal.followUp === null || meal.followUp.answer !== null)
  );
}

/** Scans the person watched finish well: analyzing at the last look, good now. */
export function scansJustDone(before: readonly ScanLike[], now: readonly ScanLike[]) {
  const analyzing = new Set(before.filter((meal) => meal.status === 'analyzing').map((meal) => meal.id));
  return now.filter((meal) => analyzing.has(meal.id) && isGoodScan(meal));
}
