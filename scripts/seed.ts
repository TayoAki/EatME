/**
 * Adds test meals to your database so the home screen, calendar and streak have data without
 * scanning food. The user must exist (sign up in the app first).
 *
 *   npm run db:seed -- --email you@example.com          (or --user user_xxx)
 *   npm run db:seed -- --email you@example.com --days 21 --clear
 *
 * For the App Review demo account use `npm run demo:account` (scripts/demo-account.ts).
 */
import { config } from 'dotenv';
import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { meals, users } from '@/db/schema';

import { sampleMeals } from './sample-data';

config({ quiet: true });

function arg(name: string) {
  const index = process.argv.indexOf(`--${name}`);
  return index === -1 ? undefined : process.argv[index + 1];
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
    where: userIdArg ? eq(users.id, userIdArg) : eq(users.email, email!.toLowerCase()),
  });
  if (!user) {
    console.error('User not found. Sign up in the app first.');
    process.exit(1);
  }

  if (clear) {
    await db.delete(meals).where(eq(meals.userId, user.id));
    console.log('Removed existing meals.');
  }

  const rows = sampleMeals(user.id, user.timezone, days);
  if (rows.length) await db.insert(meals).values(rows);
  console.log(`Added ${rows.length} meals for ${user.email ?? user.id} over the last ${days} days (${user.timezone}).`);
  await db.$client.end();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
