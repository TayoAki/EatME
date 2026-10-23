import type { ChainItemKind } from './chains';
import { MAIN_SLOTS, SLOT_LABELS, slotOf, type DraftSlot } from './day-draft';

/**
 * What to order (v2.5, WHAT-TO-ORDER.md §6): which dishes of a menu fit what's left of the person's
 * day, best first. Our code ranks, never the AI: the same menu and day give the same answer, it
 * costs nothing and the method can be published (Profile → Sources). An estimate counts at the top
 * of its range, so uncertainty can't make a heavy plate look like it fits; the lowest-calorie dish
 * never wins (a meal-sized floor, and being far below the aim costs too); once the day's budget is
 * spent nothing is ranked.
 */

export type FitNumbers = { calories: number; proteinG: number; carbsG: number; fatG: number };

/** Where a dish's numbers come from: the chain's guide, our database, or the AI's quick estimate. */
export const DISH_SOURCES = ['chain', 'estimate', 'quick'] as const;
export type DishSource = (typeof DISH_SOURCES)[number];

/** A dish to rank: a chain item, or a dish read from a menu photo. */
export type MenuDish = {
  /** The chain item's id, or the dish's place in a menu scan. */
  key: string;
  name: string;
  /** Scanned menus only: the menu's own words under the dish (foods to skip look here too). */
  description?: string | null;
  section?: string | null;
  kind: ChainItemKind;
  /** The serving as sold ("Medium", "1 burrito"); several sizes of one dish are separate dishes. */
  serving?: string | null;
  numbers: FitNumbers;
  /** Estimates only: the calories it could be (from the accuracy pilot's measured error). */
  range: { low: number; high: number } | null;
  source: DishSource;
};

/** The person's day, as the server worked it out (never sent to the AI). */
export type MenuDay = {
  target: { calories: number; proteinG: number };
  eaten: { calories: number; proteinG: number };
  /** The safety floor for the person's sex: what's left is never planned below it. */
  floor: number;
  /** GLP-1 mode: protein comes first, and half portions are offered when a dish is too much. */
  glp1: boolean;
  /** Main meals still to come today after this one (their slots, in order). */
  later: DraftSlot[];
};

/** An order: a whole dish as sold, or (GLP-1 mode) half of it with the rest boxed. */
export type OrderVariant = 'whole' | 'half';

/** How the order sits against the aim, in words (calm mode shows only these). */
export type FitWord = 'fits' | 'bigger' | 'lighter';
export const FIT_WORDS: Record<FitWord, string> = {
  fits: "Fits what's left",
  bigger: 'A bigger meal',
  lighter: 'A lighter choice',
};

export type RankedDish = {
  key: string;
  variant: OrderVariant;
  /** Calories as ranked: the top of the range for an estimate. */
  calories: number;
  proteinG: number;
  /** Lower is better (only meaningful within one list). */
  score: number;
  fit: FitWord;
  /** One line with numbers our code worked out ("Leaves about 500 kcal for dinner"). */
  reason: string;
  /** More than what's left today: listed last, never hidden. */
  overBudget: boolean;
};

export type MenuFit = {
  /** `nothing_fits`: no ranking (nothing meal-sized fits, or the day's budget is spent). */
  state: 'ranked' | 'nothing_fits';
  /** What's left today and the aim for this meal (what's left ÷ the main meals still to come). */
  left: { calories: number; proteinG: number };
  aim: { calories: number; proteinG: number };
  /** Up to five, best first (none when nothing fits). */
  fitsWell: RankedDish[];
  /** The ranges of the first few overlap: show Fits well as a group, not a first, second and third. */
  closeCall: boolean;
  /** Everything else: other meals by score, then sides, drinks, desserts and extras; over what's left last. */
  others: RankedDish[];
  /** Dishes left out because they mention a food the person skips (shown only when asked). */
  hidden: RankedDish[];
};

export const MAX_FITS_WELL = 5;
/** Below this many calories left, the day's budget is spent: nothing is ranked. */
export const SPENT_BELOW_KCAL = 100;
/** An order must be at least this big to be a meal: 40% of the aim, at least 200 kcal. */
export const MEAL_FLOOR_SHARE = 0.4;
export const MEAL_FLOOR_KCAL = 200;
/** "Fits what's left" when within 15% of the aim. */
export const FIT_BAND = 0.15;
/** Being below the aim costs less than being over it (but still costs: tiny dishes never win). */
const UNDER_WEIGHT = 0.6;
/** GLP-1 mode: a dish this far over the aim is also offered as a half portion. */
const HALF_OVER = 1.3;
/** GLP-1 mode: a side or starter with this much protein counts as a meal ("a starter as a main"). */
const STARTER_PROTEIN_G = 15;

/** Calories as ranked: published numbers as they are, estimates at the top of their range. */
export const rankedCalories = (dish: Pick<MenuDish, 'numbers' | 'range'>) => Math.round(dish.range?.high ?? dish.numbers.calories);

/**
 * One meal never aims at more than this share of the day's target: a big budget left late in the
 * day is no reason to suggest a big plate (and 95 g of protein left is not one meal's aim).
 */
export const MEAL_AIM_MAX_SHARE = 0.4;

/** What's left today (never planned below the floor) and the aim for this meal. */
export function aimFor(day: MenuDay) {
  const budget = Math.max(day.target.calories, day.floor);
  const left = { calories: Math.round(budget - day.eaten.calories), proteinG: Math.max(0, Math.round(day.target.proteinG - day.eaten.proteinG)) };
  const meals = 1 + day.later.length;
  return {
    left,
    aim: {
      calories: Math.max(0, Math.round(Math.min(left.calories / meals, budget * MEAL_AIM_MAX_SHARE))),
      proteinG: Math.round(Math.min(left.proteinG / meals, day.target.proteinG * MEAL_AIM_MAX_SHARE)),
    },
  };
}

/** Sizes made for sharing (a 30-count tray, a family meal, a bucket): listed, never one person's Fits well. */
export function sharingSize(dish: Pick<MenuDish, 'name' | 'serving'>) {
  const text = `${dish.name} ${dish.serving ?? ''}`;
  if (/\b(family|party|catering|tray|bucket|platter|feast|sharing|share|dozen)\b|\bserves\s*\d|\bfor\s+(two|2|four|4|six|6)\b/i.test(text)) return true;
  const count = text.match(/\b(\d+)\s*(ct|count|pc|pcs|piece|pieces)\b/i);
  return !!count && Number(count[1]) >= 20;
}

/**
 * The main meals still to come after one eaten at `nowMinutes` (local): main slots more than an hour
 * later whose meal isn't logged yet. `slotTimes` is the person's own (as Plan tomorrow works them out).
 */
export function laterMeals(nowMinutes: number, slotTimes: Record<DraftSlot, string>, loggedSlots: ReadonlySet<DraftSlot>) {
  const current = slotOf(nowMinutes);
  return MAIN_SLOTS.filter((slot) => {
    if (slot === current || loggedSlots.has(slot)) return false;
    const time = Number(slotTimes[slot].slice(0, 2)) * 60 + Number(slotTimes[slot].slice(3, 5));
    return time > nowMinutes + 60;
  });
}

/** The singular of a food's last word: "mushrooms" → "mushroom", "anchovies" → "anchovy", "dishes" → "dish". */
function singular(word: string) {
  if (/(ches|shes|xes|sses|zes)$/.test(word)) return word.slice(0, -2);
  if (/ies$/.test(word)) return `${word.slice(0, -3)}y`;
  if (/oes$/.test(word)) return word.slice(0, -2);
  if (/[^s]s$/.test(word) && word.length > 3) return word.slice(0, -1);
  return word;
}

/**
 * "Mushrooms" → a whole-word match of mushroom or mushrooms: a food the person skips, in a dish's
 * name or description ("egg" doesn't hide "eggplant").
 */
function skipPattern(food: string) {
  const words = food
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s'-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return null;
  const stem = singular(words.at(-1)!);
  const phrase = [...words.slice(0, -1), stem].join(' ');
  if (phrase.length < 3) return null;
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
  const plural = /y$/.test(escaped) ? `${escaped.slice(0, -1)}(y|ies)` : `${escaped}(s|es)?`;
  return new RegExp(`\\b${plural}\\b`, 'i');
}

/** The dishes that mention one of the foods the person skips (by name or description). */
export function skippedDishes<T extends Pick<MenuDish, 'name' | 'description'>>(dishes: readonly T[], foodsToSkip: readonly string[]) {
  const patterns = foodsToSkip.map(skipPattern).filter((p): p is RegExp => !!p);
  if (patterns.length === 0) return new Set<T>();
  return new Set(dishes.filter((dish) => patterns.some((p) => p.test(`${dish.name} ${dish.description ?? ''}`))));
}

const round10 = (kcal: number) => Math.round(kcal / 10) * 10;

/** The calm-mode word for an order of `calories` against the aim. */
export function fitWord(calories: number, aimCalories: number): FitWord {
  if (aimCalories <= 0) return 'bigger';
  const ratio = calories / aimCalories;
  if (ratio > 1 + FIT_BAND) return 'bigger';
  if (ratio < 1 - FIT_BAND) return 'lighter';
  return 'fits';
}

/** "dinner", "lunch and dinner", "breakfast, lunch and dinner". */
function mealsText(later: readonly DraftSlot[]) {
  const names = later.map((slot) => SLOT_LABELS[slot].toLowerCase());
  if (names.length === 0) return 'the rest of today';
  return names.length > 1 ? `${names.slice(0, -1).join(', ')} and ${names.at(-1)}` : names[0];
}

/**
 * One line with numbers our code computed: what the order leaves for the meals still to come, its
 * protein, or that it's a bigger meal than this one's aim (an honest word, never a judgment).
 */
export function reasonFor(
  calories: number,
  proteinG: number,
  left: number,
  day: Pick<MenuDay, 'glp1' | 'later'>,
  aim: { calories: number; proteinG: number },
  meal = true,
) {
  const after = left - calories;
  if (after < 0) return `About ${round10(-after).toLocaleString('en-US')} kcal over what's left today`;
  const protein = Math.round(proteinG);
  if (day.glp1) return `${protein} g protein`;
  const leaves = `leaves about ${round10(after).toLocaleString('en-US')} kcal for ${mealsText(day.later)}`;
  if (meal && fitWord(calories, aim.calories) === 'bigger') return `A bigger meal: ${leaves}`;
  if (aim.proteinG > 0 && protein >= aim.proteinG && protein >= 25) return `${protein} g protein`;
  return `L${leaves.slice(1)}`;
}

/**
 * How well an order fits (lower is better): its distance from the aim (being over costs more than
 * being under), protein short of the aim (in GLP-1 mode protein weighs most), then protein per 100
 * kcal as a tie-breaker. The same shape as Plan tomorrow's `dayScore`.
 */
export function orderScore(calories: number, proteinG: number, aim: { calories: number; proteinG: number }, glp1: boolean) {
  const target = Math.max(aim.calories, 1);
  const gap = calories - target;
  const fit = gap >= 0 ? gap / target : (UNDER_WEIGHT * -gap) / target;
  const protein = aim.proteinG > 0 ? proteinG / aim.proteinG : 1;
  const proteinCost = glp1 ? 3 * Math.max(0, 1 - protein) : 1.5 * Math.max(0, 0.9 - protein);
  const density = calories > 0 ? Math.min((proteinG * 100) / calories, 10) / 10 : 0;
  return fit + proteinCost - 0.02 * density;
}

/** Sides, drinks and the rest are listed after the meals, in this order. */
const KIND_ORDER: Record<ChainItemKind, number> = { main: 0, side: 1, drink: 2, dessert: 3, extra: 4 };

/**
 * Ranks a menu for the person's day. `foodsToSkip` hides the dishes that mention them (the list
 * says how many). Drinks, sides, desserts and extras are listed, never ranked as meals (in GLP-1
 * mode a side with real protein counts, as a starter eaten as a main).
 */
export function rankMenu(dishes: readonly MenuDish[], day: MenuDay, foodsToSkip: readonly string[] = []): MenuFit {
  const { left, aim } = aimFor(day);
  const skipped = skippedDishes(dishes, foodsToSkip);
  const shown = dishes.filter((dish) => !skipped.has(dish));

  const order = (dish: MenuDish, variant: OrderVariant): RankedDish => {
    const share = variant === 'half' ? 0.5 : 1;
    const calories = Math.round(rankedCalories(dish) * share);
    const proteinG = dish.numbers.proteinG * share;
    return {
      key: dish.key,
      variant,
      calories,
      proteinG: Math.round(proteinG),
      score: orderScore(calories, proteinG, aim, day.glp1),
      fit: fitWord(calories, aim.calories),
      reason: reasonFor(calories, proteinG, left.calories, day, aim, dish.kind === 'main'),
      overBudget: calories > left.calories,
    };
  };

  const hidden = dishes.filter((dish) => skipped.has(dish)).map((dish) => order(dish, 'whole'));

  const isMeal = (dish: MenuDish) =>
    (dish.kind === 'main' || (day.glp1 && dish.kind === 'side' && dish.numbers.proteinG >= STARTER_PROTEIN_G)) && !sharingSize(dish);
  const whole = shown.map((dish) => ({ dish, ranked: order(dish, 'whole') }));
  const bySize = (a: RankedDish, b: RankedDish) => a.calories - b.calories || a.key.localeCompare(b.key);

  // The day's budget is spent: no ranking, the lighter dishes first.
  if (left.calories < SPENT_BELOW_KCAL) {
    return { state: 'nothing_fits', left, aim, fitsWell: [], closeCall: false, others: whole.map((w) => w.ranked).sort(bySize), hidden };
  }

  const mealFloor = Math.max(MEAL_FLOOR_KCAL, MEAL_FLOOR_SHARE * aim.calories);
  // Meal-sized, and leaving at least a small meal for each main meal still to come (whatever the score).
  const room = left.calories - day.later.length * MEAL_FLOOR_KCAL;
  const fits = (r: RankedDish) => r.calories >= mealFloor && r.calories <= room;
  const candidates: { dish: MenuDish; ranked: RankedDish }[] = [];
  for (const w of whole) {
    if (!isMeal(w.dish)) continue;
    if (fits(w.ranked)) candidates.push(w);
    // GLP-1 mode: a dish too big for this meal is offered as a half portion (the rest boxed).
    if (day.glp1 && w.ranked.calories > HALF_OVER * aim.calories) {
      const half = order(w.dish, 'half');
      if (fits(half)) candidates.push({ dish: w.dish, ranked: half });
    }
  }
  if (candidates.length === 0) {
    return { state: 'nothing_fits', left, aim, fitsWell: [], closeCall: false, others: whole.map((w) => w.ranked).sort(bySize), hidden };
  }

  candidates.sort((a, b) => a.ranked.score - b.ranked.score || a.dish.name.localeCompare(b.dish.name));
  // One size of a dish in Fits well (the best one); the other sizes stay in the list.
  const names = new Set<string>();
  const top: { dish: MenuDish; ranked: RankedDish }[] = [];
  for (const c of candidates) {
    const name = c.dish.name.trim().toLowerCase();
    if (names.has(name)) continue;
    names.add(name);
    top.push(c);
    if (top.length === MAX_FITS_WELL) break;
  }
  const fitsWell = top.map((t) => t.ranked);
  const picked = new Set(top.map((t) => `${t.ranked.key}:${t.ranked.variant}`));

  // Estimates whose ranges overlap the first one's are as good as each other: no false order.
  const first = top[0].dish;
  const span = (d: MenuDish) => d.range ?? { low: d.numbers.calories, high: d.numbers.calories };
  const closeCall =
    top.length > 1 &&
    top.slice(1, 3).some((t) => t.dish.range !== null && first.range !== null && span(t.dish).low <= span(first).high && span(first).low <= span(t.dish).high);

  const rest = whole.filter((w) => !picked.has(`${w.ranked.key}:whole`));
  const others = rest
    .sort(
      (a, b) =>
        Number(a.ranked.overBudget) - Number(b.ranked.overBudget) ||
        Number(!isMeal(a.dish)) - Number(!isMeal(b.dish)) ||
        KIND_ORDER[a.dish.kind] - KIND_ORDER[b.dish.kind] ||
        (isMeal(a.dish) ? a.ranked.score - b.ranked.score : 0) ||
        a.dish.name.localeCompare(b.dish.name) ||
        a.ranked.calories - b.ranked.calories,
    )
    .map((w) => w.ranked);
  return { state: 'ranked', left, aim, fitsWell, closeCall, others, hidden };
}
