/** One local day in the weekly summary. `logged` = at least one analyzed meal that day. */
export type DaySummary = {
  date: string;
  logged: boolean;
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
  fiberG: number;
  waterMl: number;
};

export type WeeklyAverages = {
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
  fiberG: number;
  /** Over the days with drinks logged; null when none were. */
  waterMl: number | null;
};

export type WeeklyGoals = {
  calories: number | null;
  proteinG: number | null;
  carbsG: number | null;
  fatG: number | null;
  fiberG: number;
  waterMl: number;
};

export type WeeklyFocus = { nutrient: 'protein' | 'fiber' | 'water' | 'steady'; message: string };

/** `GET /api/insights/weekly`: the last 7 complete days (today is left out). */
export type WeeklyInsights = {
  from: string;
  to: string;
  daysLogged: number;
  /** Averages over the days with meals logged (days without a log would drag them to zero). */
  averages: WeeklyAverages | null;
  goals: WeeklyGoals;
  days: DaySummary[];
  /** One neutral suggestion (something to add, never something to cut), or null. */
  focus: WeeklyFocus | null;
};

/** Fewer logged days than this say too little about a week. */
export const MIN_DAYS_FOR_INSIGHTS = 3;

const round = (value: number) => Math.round(value);

/**
 * Picks the one thing most worth adding: protein, fiber or water, when its average is under 80% of
 * the goal. Calories are never judged here: the card shows them, the wording stays neutral.
 */
export function weeklyFocus(
  averages: WeeklyAverages | null,
  goals: WeeklyGoals,
  daysLogged: number,
  waterDays: number,
): WeeklyFocus | null {
  if (!averages || daysLogged < MIN_DAYS_FOR_INSIGHTS) return null;
  const gaps: { nutrient: WeeklyFocus['nutrient']; ratio: number }[] = [];
  if (goals.proteinG) gaps.push({ nutrient: 'protein', ratio: averages.proteinG / goals.proteinG });
  gaps.push({ nutrient: 'fiber', ratio: averages.fiberG / goals.fiberG });
  if (averages.waterMl !== null && waterDays >= MIN_DAYS_FOR_INSIGHTS) {
    gaps.push({ nutrient: 'water', ratio: averages.waterMl / goals.waterMl });
  }
  const lowest = gaps.filter((g) => g.ratio < 0.8).sort((a, b) => a.ratio - b.ratio)[0];

  if (!lowest) {
    return { nutrient: 'steady', message: 'Protein and fiber were close to your goals on the days you logged.' };
  }
  if (lowest.nutrient === 'protein') {
    return {
      nutrient: 'protein',
      message: `Protein averaged ${round(averages.proteinG)} g of your ${goals.proteinG} g goal. A protein food at each meal — eggs, yogurt, beans, fish or tofu — closes most of the gap.`,
    };
  }
  if (lowest.nutrient === 'fiber') {
    return {
      nutrient: 'fiber',
      message: `Fiber averaged ${round(averages.fiberG)} g of your ${goals.fiberG} g goal. Beans, lentils, berries, oats and whole grains add it quickly; raise it slowly and drink with it.`,
    };
  }
  return {
    nutrient: 'water',
    message: `Drinks averaged ${round((averages.waterMl ?? 0) / 100) / 10} L of your ${round(goals.waterMl / 100) / 10} L goal. A glass with each meal adds up.`,
  };
}
