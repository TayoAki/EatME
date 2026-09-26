/**
 * Sample data for test and demo accounts (`npm run db:seed`, `npm run demo:account`): meals
 * described in words at the usual meal times, weigh-ins and water, in the person's time zone.
 */
import type { meals, waterLogs, weightLogs } from '@/db/schema';

type Slot = 'breakfast' | 'lunch' | 'snack' | 'dinner';
type SampleMeal = {
  name: string;
  /** What the person typed ("Describe a meal"): shown in place of a photo. */
  note: string;
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
  fiberG: number;
};

const SAMPLES: Record<Slot, SampleMeal[]> = {
  breakfast: [
    { name: 'Avocado toast with egg', note: 'Two slices of sourdough with half an avocado and a poached egg', calories: 410, proteinG: 16, carbsG: 38, fatG: 22, fiberG: 8 },
    { name: 'Greek yogurt with berries', note: 'Plain Greek yogurt with blueberries, strawberries and a little honey', calories: 280, proteinG: 18, carbsG: 34, fatG: 8, fiberG: 4 },
    { name: 'Oatmeal with banana', note: 'Oats cooked with milk and a sliced banana', calories: 360, proteinG: 11, carbsG: 64, fatG: 7, fiberG: 7 },
    { name: 'Scrambled eggs on toast', note: 'Three scrambled eggs on two slices of whole-wheat toast', calories: 410, proteinG: 27, carbsG: 28, fatG: 21, fiberG: 4 },
  ],
  lunch: [
    { name: 'Grilled chicken salad', note: 'Grilled chicken breast on mixed greens with cherry tomatoes, cucumber and olive oil dressing', calories: 420, proteinG: 38, carbsG: 16, fatG: 22, fiberG: 5 },
    { name: 'Salmon rice bowl', note: 'Salmon fillet on white rice with edamame, cucumber and soy sauce', calories: 620, proteinG: 42, carbsG: 58, fatG: 24, fiberG: 5 },
    { name: 'Turkey club sandwich', note: 'Turkey, bacon, lettuce and tomato on toasted bread with mayo', calories: 560, proteinG: 34, carbsG: 48, fatG: 24, fiberG: 4 },
    { name: 'Chickpea curry with rice', note: 'A bowl of chickpea and spinach curry with basmati rice', calories: 600, proteinG: 18, carbsG: 92, fatG: 17, fiberG: 12 },
  ],
  snack: [
    { name: 'Apple with peanut butter', note: 'A medium apple with 2 tablespoons of peanut butter', calories: 290, proteinG: 7, carbsG: 32, fatG: 16, fiberG: 7 },
    { name: 'Protein shake', note: 'Whey protein shaken with a cup of skim milk', calories: 220, proteinG: 30, carbsG: 12, fatG: 5, fiberG: 0 },
    { name: 'Trail mix', note: 'A small bag of trail mix, about 60 g', calories: 290, proteinG: 8, carbsG: 26, fatG: 18, fiberG: 3 },
  ],
  dinner: [
    { name: 'Spaghetti bolognese', note: 'A plate of spaghetti with beef bolognese sauce and parmesan', calories: 630, proteinG: 30, carbsG: 80, fatG: 21, fiberG: 6 },
    { name: 'Steak with sweet potato', note: 'Sirloin steak with a baked sweet potato and green beans', calories: 560, proteinG: 58, carbsG: 37, fatG: 20, fiberG: 7 },
    { name: 'Salmon with roasted vegetables', note: 'Baked salmon with roasted broccoli, peppers and potatoes', calories: 570, proteinG: 40, carbsG: 36, fatG: 28, fiberG: 7 },
    { name: 'Tofu stir-fry with noodles', note: 'Tofu and vegetable stir-fry with egg noodles', calories: 590, proteinG: 26, carbsG: 76, fatG: 20, fiberG: 6 },
  ],
};

/** [hour, minute] local time for each meal slot. */
const SLOTS: Record<Slot, readonly [number, number]> = { breakfast: [8, 10], lunch: [12, 45], snack: [16, 5], dinner: [19, 20] };

const pick = <T>(items: T[], seed: number) => items[seed % items.length];

/** The calendar day `daysAgo` days before today in `timeZone`, as YYYY-MM-DD. */
export function zonedDate(daysAgo: number, timeZone: string) {
  const day = new Date(Date.now() - daysAgo * 86_400_000);
  return new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(day);
}

/** UTC instant for a wall-clock time on a given day in the user's time zone. */
export function zonedInstant(daysAgo: number, hour: number, minute: number, timeZone: string) {
  const guess = new Date(`${zonedDate(daysAgo, timeZone)}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:00Z`);
  // Shift by the zone's offset at that moment.
  const local = new Date(guess.toLocaleString('en-US', { timeZone }));
  const utc = new Date(guess.toLocaleString('en-US', { timeZone: 'UTC' }));
  return new Date(guess.getTime() - (local.getTime() - utc.getTime()));
}

/**
 * Three or four described meals a day for the last `days` days, with a gap a week ago so the
 * calendar and streak have something to show. Today only has the meals that already happened.
 */
export function sampleMeals(userId: string, timeZone: string, days: number) {
  const rows: (typeof meals.$inferInsert)[] = [];
  for (let daysAgo = 0; daysAgo < days; daysAgo++) {
    if (daysAgo === 6) continue;
    const slots: Slot[] = daysAgo % 3 === 0 ? ['breakfast', 'lunch', 'snack', 'dinner'] : ['breakfast', 'lunch', 'dinner'];
    for (const [i, slot] of slots.entries()) {
      const [hour, minute] = SLOTS[slot];
      const loggedAt = zonedInstant(daysAgo, hour, minute, timeZone);
      if (loggedAt.getTime() > Date.now()) continue;
      const { note, ...sample } = pick(SAMPLES[slot], daysAgo + i);
      const { name, ...base } = sample;
      rows.push({ userId, status: 'completed', source: 'text', confidence: 'medium', name, note, ...base, baseNutrition: base, loggedAt });
    }
  }
  return rows;
}

/** A weigh-in every other day over the last two weeks, drifting down to `latestKg` yesterday. */
export function sampleWeights(userId: string, timeZone: string, latestKg: number) {
  const steps = [1.4, 1.1, 1.2, 0.8, 0.6, 0.3, 0];
  return steps.map(
    (above, i): typeof weightLogs.$inferInsert => ({
      userId,
      date: zonedDate(13 - i * 2, timeZone),
      weightKg: Math.round((latestKg + above) * 10) / 10,
    }),
  );
}

/** Six glasses (250 ml) a day for the last `days` days; today only the ones already drunk. */
export function sampleWater(userId: string, timeZone: string, days: number) {
  const rows: (typeof waterLogs.$inferInsert)[] = [];
  for (let daysAgo = 0; daysAgo < days; daysAgo++) {
    for (const hour of [8, 10, 12, 14, 17, 20]) {
      const loggedAt = zonedInstant(daysAgo, hour, 30, timeZone);
      if (loggedAt.getTime() <= Date.now()) rows.push({ userId, amountMl: 250, loggedAt });
    }
  }
  return rows;
}
