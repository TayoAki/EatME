/**
 * Adds test meals to your database so the home screen, calendar and streak have data without
 * scanning food. The user must exist (sign up in the app first).
 *
 *   npm run db:seed -- --email you@example.com          (or --user user_xxx)
 *   npm run db:seed -- --email you@example.com --days 21 --clear
 */
import { config } from 'dotenv';
import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { meals, users } from '@/db/schema';

config({ quiet: true });

type SampleMeal = { name: string; calories: number; proteinG: number; carbsG: number; fatG: number };

const SAMPLES: Record<'breakfast' | 'lunch' | 'snack' | 'dinner', SampleMeal[]> = {
  breakfast: [
    { name: 'Avocado toast', calories: 410, proteinG: 10, carbsG: 44, fatG: 24 },
    { name: 'Greek yogurt with berries', calories: 280, proteinG: 18, carbsG: 34, fatG: 8 },
    { name: 'Oatmeal with banana', calories: 360, proteinG: 11, carbsG: 64, fatG: 7 },
    { name: 'Scrambled eggs on toast', calories: 430, proteinG: 24, carbsG: 30, fatG: 23 },
  ],
  lunch: [
    { name: 'Grilled chicken salad', calories: 420, proteinG: 38, carbsG: 16, fatG: 22 },
    { name: 'Grilled salmon bowl', calories: 640, proteinG: 42, carbsG: 58, fatG: 24 },
    { name: 'Turkey club sandwich', calories: 560, proteinG: 34, carbsG: 48, fatG: 24 },
    { name: 'Chickpea curry with rice', calories: 610, proteinG: 18, carbsG: 92, fatG: 17 },
  ],
  snack: [
    { name: 'Apple with peanut butter', calories: 270, proteinG: 7, carbsG: 30, fatG: 16 },
    { name: 'Protein shake', calories: 220, proteinG: 30, carbsG: 12, fatG: 5 },
    { name: 'Trail mix', calories: 300, proteinG: 8, carbsG: 26, fatG: 19 },
  ],
  dinner: [
    { name: 'Spaghetti bolognese', calories: 640, proteinG: 28, carbsG: 82, fatG: 21 },
    { name: 'Steak with sweet potato', calories: 720, proteinG: 48, carbsG: 52, fatG: 32 },
    { name: 'Salmon with roasted vegetables', calories: 580, proteinG: 40, carbsG: 30, fatG: 32 },
    { name: 'Tofu stir-fry with noodles', calories: 590, proteinG: 26, carbsG: 76, fatG: 20 },
  ],
};

/** [hour, minute] local time for each meal slot. */
const SLOTS = { breakfast: [8, 10], lunch: [12, 45], snack: [16, 5], dinner: [19, 20] } as const;

function arg(name: string) {
  const index = process.argv.indexOf(`--${name}`);
  return index === -1 ? undefined : process.argv[index + 1];
}

const pick = <T>(items: T[], seed: number) => items[seed % items.length];

/** UTC instant for a wall-clock time on a given day in the user's time zone. */
function zonedInstant(daysAgo: number, hour: number, minute: number, timeZone: string) {
  const day = new Date(Date.now() - daysAgo * 86_400_000);
  const ymd = new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(day);
  const guess = new Date(`${ymd}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:00Z`);
  // Shift by the zone's offset at that moment.
  const local = new Date(guess.toLocaleString('en-US', { timeZone }));
  const utc = new Date(guess.toLocaleString('en-US', { timeZone: 'UTC' }));
  return new Date(guess.getTime() - (local.getTime() - utc.getTime()));
}

async function main() {
  const email = arg('email');
  const userIdArg = arg('user');
  const days = Number(arg('days') ?? 14);
  const clear = process.argv.includes('--clear');

  if (!email && !userIdArg) {
    console.error('Usage: npm run db:seed -- --email you@example.com [--days 14] [--clear]  (or --user user_xxx)');
    process.exit(1);
  }

  const user = await db.query.users.findFirst({
    where: userIdArg ? eq(users.id, userIdArg) : eq(users.email, email!),
  });
  if (!user) {
    console.error('User not found. Sign up in the app first (the Clerk webhook or onboarding creates the row).');
    process.exit(1);
  }

  if (clear) {
    await db.delete(meals).where(eq(meals.userId, user.id));
    console.log('Removed existing meals.');
  }

  const rows: (typeof meals.$inferInsert)[] = [];
  for (let daysAgo = 0; daysAgo < days; daysAgo++) {
    // Leave a gap a week ago so the calendar and streak have something to show.
    if (daysAgo === 6) continue;
    const slots = (daysAgo % 3 === 0 ? ['breakfast', 'lunch', 'snack', 'dinner'] : ['breakfast', 'lunch', 'dinner']) as (
      | 'breakfast'
      | 'lunch'
      | 'snack'
      | 'dinner'
    )[];
    for (const [i, slot] of slots.entries()) {
      // Today only has the meals that already happened.
      const [hour, minute] = SLOTS[slot];
      const loggedAt = zonedInstant(daysAgo, hour, minute, user.timezone);
      if (loggedAt.getTime() > Date.now()) continue;
      const sample = pick(SAMPLES[slot], daysAgo + i);
      rows.push({ userId: user.id, status: 'completed', ...sample, loggedAt });
    }
  }

  if (rows.length) await db.insert(meals).values(rows);
  console.log(`Added ${rows.length} meals for ${user.email ?? user.id} over the last ${days} days (${user.timezone}).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
