import { z } from 'zod';

/**
 * Plan tomorrow (v2.4): a draft of a day from the person's own meals: saved meals and meals they
 * eat often, one for each slot, so the day lands near the calorie target with enough protein. No
 * AI, and nothing is logged until the person taps Log on the day. Plain maths here; the server
 * (`src/lib/server/day-draft.ts`) gathers the meals and keeps the draft.
 */

export const DRAFT_SLOTS = ['breakfast', 'lunch', 'snack', 'dinner'] as const;
export type DraftSlot = (typeof DRAFT_SLOTS)[number];
/** The slots every draft fills; the snack only when the day needs it. */
export const MAIN_SLOTS: readonly DraftSlot[] = ['breakfast', 'lunch', 'dinner'];
export const SLOT_LABELS: Record<DraftSlot, string> = { breakfast: 'Breakfast', lunch: 'Lunch', snack: 'Snack', dinner: 'Dinner' };
export const DEFAULT_SLOT_TIMES: Record<DraftSlot, string> = { breakfast: '08:00', lunch: '13:00', snack: '16:00', dinner: '19:00' };

/** Most choices kept per slot: 8 × 8 × 8 × (8 snacks or none) is at most 4,608 days to check. */
export const MAX_CHOICES = 8;
/** Swap offers this many other choices for a slot. */
export const SWAP_CHOICES = 3;
/** Enough history to draft from: days logged and different meals in the last 30 days. */
export const MIN_LOGGED_DAYS = 7;
export const MIN_DIFFERENT_MEALS = 5;
/** Smaller meals (a coffee, a mint) are never a slot's meal. */
export const MIN_CHOICE_KCAL = 50;

/** Which slot a local time of day (minutes after midnight) falls in. Late at night counts as a snack. */
export function slotOf(minutes: number): DraftSlot {
  const hour = minutes / 60;
  if (hour >= 4 && hour < 11) return 'breakfast';
  if (hour >= 11 && hour < 15) return 'lunch';
  if (hour >= 17 && hour < 22) return 'dinner';
  return 'snack';
}

/** "08:00" → 480. */
export const minutesOf = (time: string) => Number(time.slice(0, 2)) * 60 + Number(time.slice(3, 5));
const hhmm = (minutes: number) => `${String(Math.floor(minutes / 60) % 24).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;

/**
 * Each slot's time: the middle of the person's own meal times in that slot (to the hour), or the
 * default when they have none.
 */
export function slotTimes(minutesBySlot: Partial<Record<DraftSlot, number[]>>): Record<DraftSlot, string> {
  const out = { ...DEFAULT_SLOT_TIMES };
  for (const slot of DRAFT_SLOTS) {
    const times = [...(minutesBySlot[slot] ?? [])].sort((a, b) => a - b);
    if (times.length === 0) continue;
    const middle = times.length % 2 ? times[(times.length - 1) / 2] : (times[times.length / 2 - 1] + times[times.length / 2]) / 2;
    const rounded = Math.round(middle / 60) * 60;
    // Rounding must not move the time into another slot (10:40 stays breakfast at 10:00, not 11:00).
    out[slot] = hhmm(slotOf(rounded) === slot ? rounded : Math.floor(middle / 60) * 60);
  }
  return out;
}

/** "Oat porridge " and "oat  porridge" are the same meal. */
export const mealKey = (name: string) => `n:${name.trim().toLowerCase().replace(/\s+/g, ' ')}`;

export type DraftNumbers = { calories: number; proteinG: number; carbsG: number; fatG: number };

/** A meal that could fill a slot, with its numbers for one portion as the person eats it. */
export type DraftChoice = {
  key: string;
  /** The saved meal to log (its numbers), when the person saved one with this name. */
  savedMealId: string | null;
  /** Otherwise the most recent time they ate it (logged again as it was). */
  sourceMealId: string | null;
  name: string;
  nutrients: DraftNumbers;
  /** Times eaten in the last 30 days (ranks the choices). */
  times: number;
};

export const DRAFT_ITEM_STATUSES = ['planned', 'logged', 'removed'] as const;
export type DraftItemStatus = (typeof DRAFT_ITEM_STATUSES)[number];

/** One meal of the draft, as stored (`day_plans.items`). */
export type DraftItem = {
  slot: DraftSlot;
  /** "HH:MM", local. */
  time: string;
  key: string;
  savedMealId: string | null;
  sourceMealId: string | null;
  name: string;
  nutrients: DraftNumbers;
  status: DraftItemStatus;
  /** A repeat already planned that day: kept as it is and logged from Planned for today. */
  repeatId?: string | null;
  /** The meal logged from it (tapping Log twice logs it once). */
  loggedMealId?: string | null;
};

export type DraftGoal = {
  calories: number;
  proteinG: number;
  /** The safety floor for the person's sex: a draft never plans below it when it can help it. */
  floor: number;
  /** GLP-1 mode: protein comes first, then the calorie fit. */
  glp1: boolean;
};

export type DraftSlotChoices = { slot: DraftSlot; choices: readonly DraftChoice[] };

export type DraftInput = {
  goal: DraftGoal;
  /** Repeats planned that day: fixed, their numbers count. */
  fixed: readonly DraftChoice[];
  /** The slots to fill (the snack is optional) with up to 8 choices each. */
  slots: readonly DraftSlotChoices[];
  /** Keys of what was eaten the day before: that exact line-up is avoided when there are others. */
  dayBefore?: readonly string[];
};

export type DraftCombination = {
  /** One pick per slot in `input.slots` order; null for a snack left out. */
  picks: (DraftChoice | null)[];
  totals: DraftNumbers;
  score: number;
  belowFloor: boolean;
};

const ZERO: DraftNumbers = { calories: 0, proteinG: 0, carbsG: 0, fatG: 0 };
export const addNumbers = (list: readonly DraftNumbers[]): DraftNumbers =>
  list.reduce(
    (sum, n) => ({ calories: sum.calories + n.calories, proteinG: sum.proteinG + n.proteinG, carbsG: sum.carbsG + n.carbsG, fatG: sum.fatG + n.fatG }),
    ZERO,
  );

/** Penalties: a snack only when it helps, never one meal twice, not the day before again. */
const SNACK_COST = 0.03;
const TWICE_COST = 0.5;
const SAME_AS_BEFORE_COST = 0.2;

/**
 * How good a day is (lower is better): distance from the calorie target (as a share of it) and
 * protein below 90% of its goal; in GLP-1 mode protein comes first (anything short of the goal
 * weighs most). Anything under the floor comes after every day that reaches it.
 */
export function dayScore(totals: DraftNumbers, goal: DraftGoal) {
  const fit = Math.abs(totals.calories - goal.calories) / Math.max(goal.calories, 1);
  const protein = goal.proteinG > 0 ? totals.proteinG / goal.proteinG : 1;
  const proteinCost = goal.glp1 ? 3 * Math.max(0, 1 - protein) : 1.5 * Math.max(0, 0.9 - protein);
  const floorCost = totals.calories < goal.floor ? 10 + (goal.floor - totals.calories) / Math.max(goal.calories, 1) : 0;
  return fit + proteinCost + floorCost;
}

/**
 * Every combination of one choice per slot (the snack may be left out), best first. Repeated
 * main line-ups keep only their best snack option, so the next one in the list always changes a
 * meal (that is what Shuffle shows).
 */
export function rankDrafts(input: DraftInput): DraftCombination[] {
  const fixedTotals = addNumbers(input.fixed.map((f) => f.nutrients));
  const fixedKeys = input.fixed.map((f) => f.key);
  const dayBefore = new Set(input.dayBefore ?? []);
  const options = input.slots.map(({ slot, choices }) => (slot === 'snack' ? [null, ...choices] : [...choices]));
  if (options.some((list) => list.length === 0)) return [];

  const results: DraftCombination[] = [];
  const picks: (DraftChoice | null)[] = [];
  const walk = (depth: number) => {
    if (depth === options.length) {
      const chosen = picks.filter((p): p is DraftChoice => p !== null);
      const totals = addNumbers([fixedTotals, ...chosen.map((c) => c.nutrients)]);
      const keys = [...fixedKeys, ...chosen.map((c) => c.key)];
      let score = dayScore(totals, input.goal);
      if (new Set(keys).size < keys.length) score += TWICE_COST;
      if (picks.some((p, i) => p !== null && input.slots[i].slot === 'snack')) score += SNACK_COST;
      if (dayBefore.size > 0 && chosen.length > 0 && chosen.every((c) => dayBefore.has(c.key))) score += SAME_AS_BEFORE_COST;
      results.push({ picks: [...picks], totals, score, belowFloor: totals.calories < input.goal.floor });
      return;
    }
    for (const option of options[depth]) {
      picks.push(option);
      walk(depth + 1);
      picks.pop();
    }
  };
  walk(0);
  results.sort((a, b) => a.score - b.score);

  const seen = new Set<string>();
  return results.filter((result) => {
    const mains = result.picks.flatMap((p, i) => (input.slots[i].slot === 'snack' ? [] : [p?.key ?? '']));
    const id = mains.join('|');
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}

/**
 * For Swap: the other choices of a slot, best fit first when they take its place and the rest of
 * the day stays.
 */
export function swapChoices(choices: readonly DraftChoice[], current: DraftChoice | null, rest: readonly DraftNumbers[], goal: DraftGoal, limit = SWAP_CHOICES) {
  const others = addNumbers(rest);
  return choices
    .filter((c) => c.key !== current?.key)
    .map((c) => ({ choice: c, score: dayScore(addNumbers([others, c.nutrients]), goal) }))
    .sort((a, b) => a.score - b.score)
    .slice(0, limit)
    .map(({ choice }) => choice);
}

/** Totals of what is still planned or logged. */
export const draftTotals = (items: readonly DraftItem[]) => addNumbers(items.filter((i) => i.status !== 'removed').map((i) => i.nutrients));

/** "About 1,840 kcal · 125 g protein": rounded, because it is a draft. */
export function draftSummary(totals: DraftNumbers) {
  const kcal = Math.round(totals.calories / 10) * 10;
  return `About ${kcal.toLocaleString('en-US')} kcal · ${Math.round(totals.proteinG)} g protein`;
}

/** Body of `POST /api/day-plan/:date/draft`. */
export const draftBodySchema = z.object({ shuffle: z.boolean().optional() }).strict();

/** Body of `PATCH /api/day-plan/:date/items/:n`: another choice for the slot, or take it out. */
export const draftItemBodySchema = z.union([
  z.object({ key: z.string().min(1).max(200) }).strict(),
  z.object({ status: z.literal('removed') }).strict(),
]);

/** A draft item for the app, with its place in the list and what Swap offers. */
export type DayPlanItem = DraftItem & { n: number; alternatives: Pick<DraftChoice, 'key' | 'name' | 'nutrients'>[] };

/** `GET /api/day-plan/:date`. */
export type DayPlanResponse = {
  date: string;
  /** Premium (always true while payments are off). */
  premium: boolean;
  /** Enough history to draft (7 logged days and 5 different meals in 30 days). */
  eligible: boolean;
  plan: {
    items: DayPlanItem[];
    totals: DraftNumbers;
    target: { calories: number; proteinG: number };
    /** Even the biggest day of the person's meals is under their minimum. */
    belowFloor: boolean;
    updatedAt: string;
  } | null;
};
