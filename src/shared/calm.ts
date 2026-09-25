import type { WeeklyFocus } from './insights';

/**
 * Calm mode (v2.1) shows words instead of calorie and macro numbers. Going over a goal is simply
 * "Goal reached": never "over", never red.
 */
export function calmProgressWord(consumed: number, target: number) {
  const ratio = target > 0 ? consumed / target : 0;
  if (ratio < 0.5) return 'Plenty left';
  if (ratio < 0.9) return 'On your way';
  if (ratio < 1) return 'Nearly there';
  return 'Goal reached';
}

/** The weekly tip without calorie or macro numbers (fiber and water numbers stay in calm mode). */
export function calmFocusMessage(focus: WeeklyFocus) {
  if (focus.nutrient === 'protein') {
    return 'Protein was below your goal on most days you logged. A protein food at each meal — eggs, yogurt, beans, fish or tofu — closes most of the gap.';
  }
  return focus.message;
}
