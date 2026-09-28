import { Platform } from 'react-native';

import {
  HEALTH_CONNECT_NOT_ASLEEP,
  HEALTHKIT_ASLEEP,
  lastDays,
  localDay,
  startOfDay,
  workoutName,
  type RawActivity,
  type SleepPiece,
  type WorkoutEntry,
} from './activity-plan';
import { loadHealthConnect, loadHealthKit } from './health';

/**
 * Reads steps, active energy, workouts and sleep from Apple Health / Health Connect (v2.3). The
 * data stays on the phone: it is shown in the app and never sent to EatME's server or the AI.
 */

const STEPS = 'HKQuantityTypeIdentifierStepCount' as const;
const ACTIVE_ENERGY = 'HKQuantityTypeIdentifierActiveEnergyBurned' as const;
const SLEEP = 'HKCategoryTypeIdentifierSleepAnalysis' as const;
const WORKOUTS = 'HKWorkoutTypeIdentifier' as const;

/** Most workouts read per range (their calories are one query each on Android). */
const MAX_WORKOUTS = 40;

/** Asks for read access. HealthKit never says whether reading was allowed, so it only fails when it can't ask. */
export async function requestActivityRead(): Promise<boolean> {
  if (Platform.OS === 'ios') {
    const hk = loadHealthKit();
    if (!hk) return false;
    await hk.requestAuthorization({ toRead: [STEPS, ACTIVE_ENERGY, WORKOUTS, SLEEP] });
    return true;
  }
  const hc = loadHealthConnect();
  if (!hc || !(await hc.initialize())) return false;
  const granted = await hc.requestPermission([
    { accessType: 'read', recordType: 'Steps' },
    { accessType: 'read', recordType: 'ActiveCaloriesBurned' },
    { accessType: 'read', recordType: 'ExerciseSession' },
    { accessType: 'read', recordType: 'SleepSession' },
  ]);
  return granted.some((p) => 'accessType' in p && p.accessType === 'read');
}

const kcalOf = (quantity: { unit: string; quantity: number } | undefined) => {
  if (!quantity) return null;
  if (quantity.unit === 'kcal' || quantity.unit === 'Cal') return quantity.quantity;
  if (quantity.unit === 'kJ') return quantity.quantity / 4.184;
  if (quantity.unit === 'J') return quantity.quantity / 4184;
  return quantity.quantity;
};

async function readHealthKit(days: string[]): Promise<RawActivity> {
  const hk = loadHealthKit();
  if (!hk) return { steps: {}, activeKcal: {}, workouts: [], sleep: [] };
  const start = startOfDay(days[0]);
  const end = new Date();
  // The night before the first day ends on it: read from the evening before.
  const sleepStart = new Date(start.getTime() - 12 * 60 * 60 * 1000);
  const perDay = async (identifier: typeof STEPS | typeof ACTIVE_ENERGY, unit: 'count' | 'kcal') => {
    // Statistics merge the watch and the phone without counting twice.
    const buckets = await hk.queryStatisticsCollectionForQuantity(identifier, ['cumulativeSum'], start, { day: 1 }, {
      filter: { date: { startDate: start, endDate: end } },
      unit: unit as never,
    });
    const byDay: Record<string, number> = {};
    for (const bucket of buckets) {
      if (!bucket.startDate || bucket.sumQuantity === undefined) continue;
      byDay[localDay(bucket.startDate)] = bucket.sumQuantity.quantity;
    }
    return byDay;
  };
  const [steps, activeKcal, workoutSamples, sleepSamples] = await Promise.all([
    perDay(STEPS, 'count'),
    perDay(ACTIVE_ENERGY, 'kcal'),
    hk.queryWorkoutSamples({ limit: MAX_WORKOUTS, ascending: false, filter: { date: { startDate: start, endDate: end } } }),
    hk.queryCategorySamples(SLEEP, { limit: 0, ascending: true, filter: { date: { startDate: sleepStart, endDate: end } } }),
  ]);
  const workouts: WorkoutEntry[] = workoutSamples.map((w) => ({
    id: w.uuid,
    name: workoutName('healthkit', Number(w.workoutActivityType)),
    start: new Date(w.startDate).toISOString(),
    end: new Date(w.endDate).toISOString(),
    minutes: Math.round((new Date(w.endDate).getTime() - new Date(w.startDate).getTime()) / 60_000),
    kcal: kcalOf(w.totalEnergyBurned),
  }));
  const sleep: SleepPiece[] = sleepSamples.map((sample) => ({
    start: new Date(sample.startDate).toISOString(),
    end: new Date(sample.endDate).toISOString(),
    asleep: HEALTHKIT_ASLEEP.includes(Number(sample.value)),
  }));
  return { steps, activeKcal, workouts, sleep };
}

async function readHealthConnect(days: string[]): Promise<RawActivity> {
  const hc = loadHealthConnect();
  if (!hc || !(await hc.initialize())) return { steps: {}, activeKcal: {}, workouts: [], sleep: [] };
  const between = (from: Date, to: Date) => ({ operator: 'between' as const, startTime: from.toISOString(), endTime: to.toISOString() });
  const now = new Date();
  const steps: Record<string, number> = {};
  const activeKcal: Record<string, number> = {};
  // One aggregate per day: Health Connect removes duplicates across apps.
  await Promise.all(
    days.map(async (day) => {
      const from = startOfDay(day);
      const to = new Date(Math.min(now.getTime(), from.getTime() + 24 * 60 * 60 * 1000));
      const [s, e] = await Promise.all([
        hc.aggregateRecord({ recordType: 'Steps', timeRangeFilter: between(from, to) }),
        hc.aggregateRecord({ recordType: 'ActiveCaloriesBurned', timeRangeFilter: between(from, to) }),
      ]);
      if (s.dataOrigins.length > 0) steps[day] = s.COUNT_TOTAL;
      if (e.dataOrigins.length > 0) activeKcal[day] = e.ACTIVE_CALORIES_TOTAL.inKilocalories;
    }),
  );
  const start = startOfDay(days[0]);
  const [sessions, nights] = await Promise.all([
    hc.readRecords('ExerciseSession', { timeRangeFilter: between(start, now), ascendingOrder: false, pageSize: MAX_WORKOUTS }),
    hc.readRecords('SleepSession', { timeRangeFilter: between(new Date(start.getTime() - 12 * 60 * 60 * 1000), now), pageSize: 100 }),
  ]);
  const workouts: WorkoutEntry[] = await Promise.all(
    sessions.records.map(async (session) => {
      const from = new Date(session.startTime);
      const to = new Date(session.endTime);
      const energy = await hc
        .aggregateRecord({ recordType: 'ActiveCaloriesBurned', timeRangeFilter: between(from, to) })
        .catch(() => null);
      return {
        id: session.metadata?.id ?? `${session.startTime}-${session.exerciseType}`,
        name: workoutName('healthconnect', session.exerciseType, session.title),
        start: from.toISOString(),
        end: to.toISOString(),
        minutes: Math.round((to.getTime() - from.getTime()) / 60_000),
        kcal: energy && energy.dataOrigins.length > 0 ? energy.ACTIVE_CALORIES_TOTAL.inKilocalories : null,
      };
    }),
  );
  const sleep: SleepPiece[] = nights.records.flatMap((night) =>
    night.stages && night.stages.length > 0
      ? night.stages.map((stage) => ({
          start: new Date(stage.startTime).toISOString(),
          end: new Date(stage.endTime).toISOString(),
          asleep: !HEALTH_CONNECT_NOT_ASLEEP.includes(stage.stage),
        }))
      : // A session without stages counts from its start to its end.
        [{ start: new Date(night.startTime).toISOString(), end: new Date(night.endTime).toISOString(), asleep: true }],
  );
  return { steps, activeKcal, workouts, sleep };
}

type FakeActivity = { __eatmeFakeActivity?: RawActivity };

/** The last `count` days of activity, oldest first (raw: totals are worked out in activity-plan). */
export async function readActivity(count: number): Promise<{ days: string[]; raw: RawActivity }> {
  const days = lastDays(count);
  // Development builds on the web can show test data (set by the UI tests); never in a store build.
  const fake = (globalThis as FakeActivity).__eatmeFakeActivity;
  if (__DEV__ && Platform.OS === 'web' && fake) return { days, raw: fake };
  if (Platform.OS === 'ios') return { days, raw: await readHealthKit(days) };
  if (Platform.OS === 'android') return { days, raw: await readHealthConnect(days) };
  return { days, raw: { steps: {}, activeKcal: {}, workouts: [], sleep: [] } };
}
