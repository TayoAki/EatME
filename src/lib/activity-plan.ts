/**
 * Steps, workouts and sleep read from Apple Health / Health Connect (v2.3), as plain data. No native
 * imports here, so the day totals can be checked anywhere. Everything stays on the phone: nothing
 * here is sent to EatME's server or the AI.
 */

/** A stretch of time in bed: asleep (any sleep stage) or not (awake, in bed, out of bed). */
export type SleepPiece = { start: string; end: string; asleep: boolean };

export type WorkoutEntry = {
  id: string;
  name: string;
  start: string;
  end: string;
  minutes: number;
  /** Active calories of the workout, when the health app has them. */
  kcal: number | null;
};

/** What the health app returned for a range of days (steps and active energy per local day). */
export type RawActivity = {
  steps: Record<string, number>;
  activeKcal: Record<string, number>;
  workouts: WorkoutEntry[];
  sleep: SleepPiece[];
};

export type DayActivity = {
  date: string;
  /** Null: no data that day (not the same as 0 steps). */
  steps: number | null;
  activeKcal: number | null;
  workouts: WorkoutEntry[];
  workoutMinutes: number;
  /** Asleep minutes of the night that ended that day (and naps). */
  sleepMinutes: number | null;
};

const pad = (n: number) => String(n).padStart(2, '0');

/** YYYY-MM-DD of an instant in the phone's time zone. */
export function localDay(iso: string | Date) {
  const d = typeof iso === 'string' ? new Date(iso) : iso;
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** The last `count` local days, oldest first, ending today. */
export function lastDays(count: number, today = new Date()) {
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() - (count - 1 - i));
    return localDay(d);
  });
}

/** Local midnight at the start of `isoDay`. */
export function startOfDay(isoDay: string) {
  const [y, m, d] = isoDay.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/** Awake gaps shorter than this still belong to the same night. */
const SAME_NIGHT_GAP_MS = 3 * 60 * 60 * 1000;

/**
 * Asleep minutes per day. Pieces from several sources (a watch and the phone) often overlap, so
 * they are merged first; then pieces less than 3 hours apart make one night, which counts for the
 * day it ends on. A nap later in the day adds to that day.
 */
export function sleepByDay(pieces: readonly SleepPiece[]): Record<string, number> {
  const asleep = pieces
    .filter((p) => p.asleep)
    .map((p) => ({ start: Date.parse(p.start), end: Date.parse(p.end) }))
    .filter((p) => Number.isFinite(p.start) && Number.isFinite(p.end) && p.end > p.start)
    .sort((a, b) => a.start - b.start);

  const merged: { start: number; end: number }[] = [];
  for (const piece of asleep) {
    const last = merged[merged.length - 1];
    if (last && piece.start <= last.end) last.end = Math.max(last.end, piece.end);
    else merged.push({ ...piece });
  }

  const nights: { start: number; end: number; ms: number }[] = [];
  for (const piece of merged) {
    const night = nights[nights.length - 1];
    if (night && piece.start - night.end < SAME_NIGHT_GAP_MS) {
      night.end = piece.end;
      night.ms += piece.end - piece.start;
    } else {
      nights.push({ ...piece, ms: piece.end - piece.start });
    }
  }

  const byDay: Record<string, number> = {};
  for (const night of nights) {
    const day = localDay(new Date(night.end));
    byDay[day] = (byDay[day] ?? 0) + Math.round(night.ms / 60_000);
  }
  return byDay;
}

/** Totals per day for `days` (oldest first). Workouts count on the day they started. */
export function activityDays(days: readonly string[], raw: RawActivity): DayActivity[] {
  const sleep = sleepByDay(raw.sleep);
  return days.map((date) => {
    const workouts = raw.workouts.filter((w) => localDay(w.start) === date).sort((a, b) => a.start.localeCompare(b.start));
    return {
      date,
      steps: raw.steps[date] !== undefined ? Math.round(raw.steps[date]) : null,
      activeKcal: raw.activeKcal[date] !== undefined ? Math.round(raw.activeKcal[date]) : null,
      workouts,
      workoutMinutes: workouts.reduce((sum, w) => sum + w.minutes, 0),
      sleepMinutes: sleep[date] ?? null,
    };
  });
}

/** "7 h 10 m", "45 m" (non-breaking spaces, so a line never breaks inside it). */
export function formatSleep(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h > 0 ? `${h}\u00a0h\u00a0${pad(m)}\u00a0m` : `${m}\u00a0m`;
}

export const formatSteps = (steps: number) => steps.toLocaleString('en-US');

/** "42 min workout", "1 h 5 min of workouts". */
export function formatWorkoutMinutes(minutes: number, count: number) {
  const time = minutes >= 60 ? `${Math.floor(minutes / 60)} h ${minutes % 60} min` : `${minutes} min`;
  return count > 1 ? `${time} of workouts` : `${time} workout`;
}

// ─── Workout names ────────────────────────────────────────────────────────────

/** HKWorkoutActivityType raw values → names (the common ones; the rest are "Workout"). */
const HEALTHKIT_WORKOUTS: Record<number, string> = {
  6: 'Basketball',
  8: 'Boxing',
  9: 'Climbing',
  11: 'Cross training',
  13: 'Cycling',
  14: 'Dance',
  16: 'Elliptical',
  20: 'Strength training',
  21: 'Golf',
  24: 'Hiking',
  28: 'Martial arts',
  29: 'Mind and body',
  35: 'Rowing',
  37: 'Running',
  41: 'Soccer',
  44: 'Stair climbing',
  46: 'Swimming',
  48: 'Tennis',
  50: 'Strength training',
  52: 'Walking',
  57: 'Yoga',
  58: 'Barre',
  59: 'Core training',
  62: 'Flexibility',
  63: 'HIIT',
  64: 'Jump rope',
  65: 'Kickboxing',
  66: 'Pilates',
  73: 'Cardio',
  77: 'Cardio dance',
  79: 'Pickleball',
  80: 'Cooldown',
};

/** Health Connect ExerciseType values → names. */
const HEALTH_CONNECT_WORKOUTS: Record<number, string> = {
  5: 'Basketball',
  8: 'Cycling',
  9: 'Indoor cycling',
  10: 'Boot camp',
  11: 'Boxing',
  13: 'Calisthenics',
  16: 'Dance',
  25: 'Elliptical',
  26: 'Exercise class',
  32: 'Golf',
  36: 'HIIT',
  37: 'Hiking',
  41: 'Jump rope',
  44: 'Martial arts',
  48: 'Pilates',
  51: 'Rock climbing',
  53: 'Rowing',
  54: 'Rowing machine',
  56: 'Running',
  57: 'Treadmill running',
  64: 'Soccer',
  68: 'Stair climbing',
  69: 'Stair machine',
  70: 'Strength training',
  71: 'Stretching',
  73: 'Open water swimming',
  74: 'Pool swimming',
  76: 'Tennis',
  79: 'Walking',
  81: 'Weightlifting',
  83: 'Yoga',
};

export function workoutName(source: 'healthkit' | 'healthconnect', type: number, title?: string | null) {
  if (title?.trim()) return title.trim().slice(0, 40);
  return (source === 'healthkit' ? HEALTHKIT_WORKOUTS : HEALTH_CONNECT_WORKOUTS)[type] ?? 'Workout';
}

/** Health Connect sleep stages that are not sleep: awake, out of bed, awake in bed. */
export const HEALTH_CONNECT_NOT_ASLEEP = [1, 3, 7];
/** HealthKit sleep values that are sleep: unspecified, core, deep, REM (not in bed or awake). */
export const HEALTHKIT_ASLEEP = [1, 3, 4, 5];
