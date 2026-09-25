import type { Meal } from '@/shared/meals';
import type { WaterEntry } from '@/shared/water';

/**
 * What EatME writes to Apple Health / Health Connect, as plain data. No native imports here, so
 * the mapping can be checked anywhere. Every item carries a stable id and a version: the health
 * stores replace an item when the same id comes with a higher version.
 */

export const HEALTHKIT_NUTRIENTS = [
  { key: 'calories', type: 'HKQuantityTypeIdentifierDietaryEnergyConsumed', unit: 'kcal' },
  { key: 'proteinG', type: 'HKQuantityTypeIdentifierDietaryProtein', unit: 'g' },
  { key: 'carbsG', type: 'HKQuantityTypeIdentifierDietaryCarbohydrates', unit: 'g' },
  { key: 'fatG', type: 'HKQuantityTypeIdentifierDietaryFatTotal', unit: 'g' },
  { key: 'fiberG', type: 'HKQuantityTypeIdentifierDietaryFiber', unit: 'g' },
] as const;
export const HEALTHKIT_WATER = { type: 'HKQuantityTypeIdentifierDietaryWater', unit: 'mL' } as const;

export type HealthItem =
  | { kind: 'meal'; id: string; version: number; meal: Meal }
  | { kind: 'water'; id: string; version: number; entry: WaterEntry };

/** Seconds since 1970 of the last change: grows every time the meal changes. */
export const versionOf = (iso: string) => Math.floor(Date.parse(iso) / 1000);

export const mealHealthId = (mealId: string) => `eatme-meal-${mealId}`;
export const waterHealthId = (entryId: string) => `eatme-water-${entryId}`;

/** Analyzed meals and saved drinks of a day, as items to write. Pending (optimistic) drinks wait. */
export function healthItems(meals: readonly Meal[], water: readonly WaterEntry[]): HealthItem[] {
  const items: HealthItem[] = [];
  for (const meal of meals) {
    if (meal.status !== 'completed' || meal.calories === null) continue;
    items.push({ kind: 'meal', id: mealHealthId(meal.id), version: versionOf(meal.updatedAt), meal });
  }
  for (const entry of water) {
    if (entry.id.startsWith('pending-')) continue;
    items.push({ kind: 'water', id: waterHealthId(entry.id), version: 1, entry });
  }
  return items;
}

/** Synced ids → version, per local day. */
export type SyncedDay = Record<string, number>;

/** What to write (new or changed) and what to remove (deleted in EatME) for one day. */
export function healthChanges(items: readonly HealthItem[], synced: SyncedDay) {
  const current = new Set(items.map((item) => item.id));
  return {
    write: items.filter((item) => synced[item.id] !== item.version),
    remove: Object.keys(synced).filter((id) => !current.has(id)),
  };
}

/** The quantity samples of one meal for HealthKit (a nutrient without a value is left out). */
export function mealQuantities(meal: Meal) {
  return HEALTHKIT_NUTRIENTS.flatMap(({ key, type, unit }) => {
    const value = meal[key];
    return value === null || value === undefined ? [] : [{ key, type, unit, value }];
  });
}

/** Health Connect meal type from the local time: breakfast, lunch, dinner or a snack. */
export function mealTypeFor(loggedAt: string) {
  const hour = new Date(loggedAt).getHours();
  if (hour >= 4 && hour < 11) return 1;
  if (hour >= 11 && hour < 16) return 2;
  if (hour >= 16 && hour < 22) return 3;
  return 4;
}
