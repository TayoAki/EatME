/**
 * Flamie, your streak flame (FLAMIE.md): its stage from the streak, its mood from showing up, the milestones and
 * today's sparks it cheers for, and its check-in nudges. Weight, calories and targets never change it.
 */

export const FLAMIE = 'Flamie';

/** Taller and brighter with the streak (FLAMIE.md §3). */
export const FLAMIE_STAGES = [
  { key: 'ember', label: 'Ember', from: 0 },
  { key: 'spark', label: 'Spark', from: 1 },
  { key: 'flame', label: 'Flame', from: 3 },
  { key: 'blaze', label: 'Blaze', from: 7 },
  { key: 'bonfire', label: 'Bonfire', from: 30 },
  { key: 'supernova', label: 'Supernova', from: 100 },
] as const;
export type FlamieStage = (typeof FLAMIE_STAGES)[number];
export type FlamieStageKey = FlamieStage['key'];

export function stageFor(streak: number): { stage: FlamieStage; index: number; next: FlamieStage | null } {
  let index = 0;
  while (index + 1 < FLAMIE_STAGES.length && streak >= FLAMIE_STAGES[index + 1].from) index += 1;
  return { stage: FLAMIE_STAGES[index], index, next: FLAMIE_STAGES[index + 1] ?? null };
}

/** Days in a row that Flamie celebrates; some are also a new stage. */
export const STREAK_MILESTONES = [3, 7, 14, 30, 50, 100, 200, 365] as const;

/** The highest milestone a streak has reached (0 before the first). */
export function milestoneFor(streak: number) {
  return [...STREAK_MILESTONES].reverse().find((days) => streak >= days) ?? 0;
}

export type FlamieMood = 'lit' | 'waiting' | 'embers';

const dayNumber = (isoDate: string) => Date.parse(`${isoDate}T00:00:00Z`) / 86_400_000;

/**
 * The last day with a logged meal, from the streak's last three weeks of days (`GET /api/streak`). Someone who logged
 * before that counts as long away (embers, no more nudges), not as new.
 */
export function lastShowedUp(streak: { today: string; loggedDates: readonly string[]; totalDays: number }): string | null {
  const last = streak.loggedDates.at(-1);
  if (last) return last;
  return streak.totalDays > 0 ? new Date((dayNumber(streak.today) - 30) * 86_400_000).toISOString().slice(0, 10) : null;
}

/** Lit after a meal today; embers once the last logged day is two or more days back; waiting otherwise. */
export function flamieMood(today: string, lastShowedUp: string | null): FlamieMood {
  if (lastShowedUp === today) return 'lit';
  if (lastShowedUp && dayNumber(today) - dayNumber(lastShowedUp) >= 2) return 'embers';
  return 'waiting';
}

/** Flamie's line in the sheet (and the pill's label). */
export function flamieLine(mood: FlamieMood, lastShowedUp: string | null) {
  if (mood === 'lit') return 'You showed up today!';
  if (mood === 'embers') return 'Missed you! Any meal lights Flamie up again.';
  return lastShowedUp ? 'Saved you a seat. A meal today keeps your streak lit.' : 'Log your first meal to light Flamie.';
}

/** Today's goals reached, each a spark beside Flamie (the habit boosts). */
export const SPARKS = ['protein', 'water', 'fiber'] as const;
export type Spark = (typeof SPARKS)[number];
export const SPARK_LABELS: Record<Spark, string> = { protein: 'Protein', water: 'Water', fiber: 'Fiber' };

export type FlamieCelebration = { kind: 'milestone'; days: number } | { kind: 'spark'; spark: Spark };

/** What this phone already celebrated: the last milestone, and today's sparks. */
export type FlamieSeen = { milestone: number; sparks: { date: string; keys: Spark[] } };

/** After a break the streak starts over, and so do its milestones. */
export function settleSeen(seen: FlamieSeen, streak: number): FlamieSeen {
  const reached = milestoneFor(streak);
  return reached < seen.milestone ? { ...seen, milestone: reached } : seen;
}

/** The next thing to cheer for: the highest new milestone first (one, not every one skipped), then today's sparks. */
export function nextCelebration(streak: number, today: string, sparks: readonly Spark[], seen: FlamieSeen | undefined): FlamieCelebration | null {
  if (!seen) return null;
  const reached = milestoneFor(streak);
  if (reached > seen.milestone) return { kind: 'milestone', days: reached };
  const cheered = seen.sparks.date === today ? seen.sparks.keys : [];
  const spark = SPARKS.find((key) => sparks.includes(key) && !cheered.includes(key));
  return spark ? { kind: 'spark', spark } : null;
}

export function markSeen(seen: FlamieSeen, celebration: FlamieCelebration, today: string): FlamieSeen {
  if (celebration.kind === 'milestone') return { ...seen, milestone: celebration.days };
  const keys = seen.sparks.date === today ? seen.sparks.keys : [];
  return { ...seen, sparks: { date: today, keys: [...keys, celebration.spark] } };
}

export function celebrationText(celebration: FlamieCelebration) {
  if (celebration.kind === 'spark') return `${SPARK_LABELS[celebration.spark]} goal reached! Flamie sparks`;
  const stage = FLAMIE_STAGES.find((s) => s.from === celebration.days);
  return stage ? `${celebration.days} days in a row! Flamie grew into a ${stage.label}` : `${celebration.days} days in a row! Flamie is on fire`;
}

/** The check-in nudges (FLAMIE.md §5), gentler each day away; after the fifth, quiet. */
export const FLAMIE_NUDGES = [
  ['Flamie saved you a seat', 'Log a meal to keep your streak lit.'],
  ['Flamie is flickering', 'One log is all it takes to keep going.'],
  ['Flamie misses you', 'Any meal, big or small, lights Flamie up again.'],
  ['Flamie kept a spark for you', "Whenever you're ready."],
  ['Flamie will stop nudging', "No pressure. Flamie will be right here when you're back."],
] as const;

/**
 * Which check-in goes out on which evening: days from today (0 = tonight) and the nudge, counted from the last day
 * shown up (the first day without a log gets the first one), so opening the app doesn't start the count again.
 * `fromTomorrow`: a meal is logged today, or tonight's time has passed.
 */
export function nudgePlan(today: string, lastShowedUp: string | null, fromTomorrow: boolean): { offset: number; nudge: number }[] {
  const start = fromTomorrow ? 1 : 0;
  const plan: { offset: number; nudge: number }[] = [];
  for (let offset = start; offset < start + FLAMIE_NUDGES.length; offset += 1) {
    const away = lastShowedUp ? dayNumber(today) + offset - dayNumber(lastShowedUp) : offset - start + 1;
    if (away < 1) continue;
    if (away > FLAMIE_NUDGES.length) break;
    plan.push({ offset, nudge: away - 1 });
  }
  return plan;
}
