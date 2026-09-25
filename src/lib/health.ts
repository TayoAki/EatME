import * as Sentry from '@sentry/react-native';
import Constants, { ExecutionEnvironment } from 'expo-constants';
import { useEffect, useRef } from 'react';
import { Platform } from 'react-native';

import {
  HEALTHKIT_NUTRIENTS,
  HEALTHKIT_WATER,
  healthChanges,
  healthItems,
  mealQuantities,
  mealTypeFor,
  type HealthItem,
  type SyncedDay,
} from './health-plan';
import { useHealthStore } from './health-store';
import { useMeals, useWater } from './queries';
import { addDays, todayIso, toIsoDate } from './time';

type HealthKit = typeof import('@kingstinct/react-native-healthkit');
type HealthConnect = typeof import('react-native-health-connect');

/** The health modules are native: not in Expo Go (a development or store build is needed). */
const inExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;

export const healthName = Platform.OS === 'android' ? 'Health Connect' : 'Apple Health';

/** NSComparisonPredicate.Operator.equalTo, for "metadata key equals value". */
const EQUAL_TO = 4;
const SYNC_ID = 'HKSyncIdentifier';
const SYNC_VERSION = 'HKSyncVersion';

let healthKit: HealthKit | null | undefined;
let healthConnect: HealthConnect | null | undefined;

// Loaded on first use (and never on web or in Expo Go), so a missing native module can't crash
// the app at startup.
function loadHealthKit() {
  if (healthKit !== undefined) return healthKit;
  healthKit = null;
  if (Platform.OS === 'ios' && !inExpoGo) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      healthKit = require('@kingstinct/react-native-healthkit') as HealthKit;
    } catch (error) {
      Sentry.logger.warn('HealthKit module missing', { error: String(error) });
    }
  }
  return healthKit;
}

function loadHealthConnect() {
  if (healthConnect !== undefined) return healthConnect;
  healthConnect = null;
  if (Platform.OS === 'android' && !inExpoGo) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      healthConnect = require('react-native-health-connect') as HealthConnect;
    } catch (error) {
      Sentry.logger.warn('Health Connect module missing', { error: String(error) });
    }
  }
  return healthConnect;
}

export type HealthSupport = 'available' | 'expo-go' | 'needs-app' | 'unsupported';

/** Whether this device can sync, and if not, why. */
export async function healthSupport(): Promise<HealthSupport> {
  if (Platform.OS !== 'ios' && Platform.OS !== 'android') return 'unsupported';
  if (inExpoGo) return 'expo-go';
  if (Platform.OS === 'ios') {
    const hk = loadHealthKit();
    return hk?.isHealthDataAvailable() ? 'available' : 'unsupported';
  }
  const hc = loadHealthConnect();
  if (!hc) return 'unsupported';
  const status = await hc.getSdkStatus();
  if (status === hc.SdkAvailabilityStatus.SDK_AVAILABLE) return 'available';
  if (status === hc.SdkAvailabilityStatus.SDK_UNAVAILABLE_PROVIDER_UPDATE_REQUIRED) return 'needs-app';
  return 'unsupported';
}

/** Asks for write access to nutrition and water. EatME never reads health data. */
export async function connectHealth(): Promise<boolean> {
  if (Platform.OS === 'ios') {
    const hk = loadHealthKit();
    if (!hk) return false;
    await hk.requestAuthorization({ toShare: [...HEALTHKIT_NUTRIENTS.map((n) => n.type), HEALTHKIT_WATER.type] });
    // HealthKit tells apps whether writing was allowed (only reading stays hidden).
    return hk.authorizationStatusFor('HKQuantityTypeIdentifierDietaryEnergyConsumed') === 2;
  }
  const hc = loadHealthConnect();
  if (!hc || !(await hc.initialize())) return false;
  const granted = await hc.requestPermission([
    { accessType: 'write', recordType: 'Nutrition' },
    { accessType: 'write', recordType: 'Hydration' },
  ]);
  return granted.some((p) => 'recordType' in p && p.recordType === 'Nutrition');
}

async function writeHealthKit(hk: HealthKit, item: HealthItem) {
  if (item.kind === 'water') {
    const at = new Date(item.entry.loggedAt);
    await hk.saveQuantitySample(HEALTHKIT_WATER.type, HEALTHKIT_WATER.unit, item.entry.amountMl, at, at, {
      [SYNC_ID]: item.id,
      [SYNC_VERSION]: item.version,
    });
    return;
  }
  const at = new Date(item.meal.loggedAt);
  for (const q of mealQuantities(item.meal)) {
    await hk.saveQuantitySample(q.type, q.unit as never, q.value, at, at, {
      // One id per nutrient: a higher version replaces the earlier sample.
      [SYNC_ID]: `${item.id}-${q.key}`,
      [SYNC_VERSION]: item.version,
      HKFoodType: item.meal.name ?? 'Meal',
    });
  }
}

async function removeHealthKit(hk: HealthKit, id: string) {
  const byId = (value: string) => ({ metadata: { withMetadataKey: SYNC_ID, operatorType: EQUAL_TO, value } }) as never;
  if (id.startsWith('eatme-water-')) {
    await hk.deleteObjects(HEALTHKIT_WATER.type, byId(id));
    return;
  }
  for (const n of HEALTHKIT_NUTRIENTS) await hk.deleteObjects(n.type, byId(`${id}-${n.key}`));
}

function healthConnectRecord(item: HealthItem) {
  const start = new Date(item.kind === 'meal' ? item.meal.loggedAt : item.entry.loggedAt);
  const end = new Date(start.getTime() + 60_000);
  const metadata = { clientRecordId: item.id, clientRecordVersion: item.version };
  if (item.kind === 'water') {
    return {
      recordType: 'Hydration' as const,
      startTime: start.toISOString(),
      endTime: end.toISOString(),
      volume: { unit: 'milliliters' as const, value: item.entry.amountMl },
      metadata,
    };
  }
  const { meal } = item;
  const grams = (value: number | null) => (value === null ? undefined : { unit: 'grams' as const, value });
  return {
    recordType: 'Nutrition' as const,
    startTime: start.toISOString(),
    endTime: end.toISOString(),
    name: meal.name ?? 'Meal',
    mealType: mealTypeFor(meal.loggedAt),
    energy: { unit: 'kilocalories' as const, value: meal.calories ?? 0 },
    protein: grams(meal.proteinG),
    totalCarbohydrate: grams(meal.carbsG),
    totalFat: grams(meal.fatG),
    dietaryFiber: grams(meal.fiberG),
    metadata,
  };
}

/** Writes a day's new or changed meals and drinks, and removes what was deleted in EatME. */
async function syncDay(items: HealthItem[], synced: SyncedDay): Promise<SyncedDay> {
  const { write, remove } = healthChanges(items, synced);
  if (write.length === 0 && remove.length === 0) return synced;

  if (Platform.OS === 'ios') {
    const hk = loadHealthKit();
    if (!hk) return synced;
    for (const item of write) await writeHealthKit(hk, item);
    for (const id of remove) await removeHealthKit(hk, id);
  } else {
    const hc = loadHealthConnect();
    if (!hc || !(await hc.initialize())) return synced;
    if (write.length > 0) await hc.insertRecords(write.map(healthConnectRecord) as never);
    const removedMeals = remove.filter((id) => id.startsWith('eatme-meal-'));
    const removedWater = remove.filter((id) => id.startsWith('eatme-water-'));
    if (removedMeals.length > 0) await hc.deleteRecordsByUuids('Nutrition', [], removedMeals);
    if (removedWater.length > 0) await hc.deleteRecordsByUuids('Hydration', [], removedWater);
  }
  return Object.fromEntries(items.map((item) => [item.id, item.version]));
}

/**
 * Keeps today and yesterday in step with Apple Health / Health Connect. Rendered by the signed-in
 * layout only while sync is on; it uses the same cached queries as Home.
 */
export function HealthSync() {
  const today = todayIso();
  const yesterday = toIsoDate(addDays(new Date(), -1));
  const mealsToday = useMeals(today);
  const mealsYesterday = useMeals(yesterday);
  const waterToday = useWater(today);
  const waterYesterday = useWater(yesterday);
  const running = useRef(false);

  const days = [
    { date: today, items: healthItems(mealsToday.data?.meals ?? [], waterToday.data?.entries ?? []), ready: !!mealsToday.data && !!waterToday.data },
    { date: yesterday, items: healthItems(mealsYesterday.data?.meals ?? [], waterYesterday.data?.entries ?? []), ready: !!mealsYesterday.data && !!waterYesterday.data },
  ];
  const key = JSON.stringify(days.map((d) => [d.date, d.ready, d.items.map((i) => [i.id, i.version])]));

  useEffect(() => {
    if (running.current) return;
    const timer = setTimeout(() => {
      running.current = true;
      void (async () => {
        const store = useHealthStore.getState();
        for (const day of days) {
          if (!day.ready) continue;
          const next = await syncDay(day.items, store.synced[day.date] ?? {});
          useHealthStore.getState().saveDay(day.date, next);
        }
      })()
        .catch((error: unknown) => Sentry.logger.error('Health sync failed', { error: String(error) }))
        .finally(() => {
          running.current = false;
        });
    }, 1500);
    return () => clearTimeout(timer);
    // `key` captures everything in `days` that matters.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return null;
}
