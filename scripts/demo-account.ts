/**
 * Creates the demo account for App Review and Google Play's "App access": signed up and onboarded,
 * with two weeks of sample meals, weigh-ins and water. AI analysis is not allowed yet, so the
 * reviewer's first scan shows the AI consent screen (Apple 5.1.2(i)).
 *
 *   npm run demo:account -- --email review@yourdomain.com
 *   npm run demo:account -- --email review@yourdomain.com --replace     (before a resubmission)
 *   options: --time-zone America/Los_Angeles (default) · --days 14 · --name Alex
 *
 * Run it against the production database (DATABASE_URL in .env: the Railway Postgres public URL)
 * right before you submit, so the last two weeks are filled. It prints a new password once: paste
 * the email and password into App Store Connect and Play Console. Only the password's hash is stored.
 * --replace deletes the existing account first, like Profile → Delete account (its photos too, so
 * the S3_* variables must be set), then creates it again.
 */
import { randomInt } from 'node:crypto';

import { generateRandomString, hashPassword } from 'better-auth/crypto';
import { config } from 'dotenv';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/db';
import { accounts, meals, users, waterLogs, weightLogs } from '@/db/schema';
import { deleteUserData } from '@/lib/server/account';
import { isValidTimeZone } from '@/lib/server/time-zone';
import { formulaPlan } from '@/shared/nutrition';
import { onboardingAnswersSchema } from '@/shared/onboarding';

import { sampleMeals, sampleWater, sampleWeights } from './sample-data';

config({ quiet: true });

/** A person with a modest weight-loss goal, well inside the safety limits. */
const ANSWERS = onboardingAnswersSchema.parse({
  gender: 'male',
  dateOfBirth: '1991-04-12',
  heightCm: 178,
  weightKg: 82,
  goal: 'lose',
  targetWeightKg: 76,
  activityLevel: 'light',
  weeklyGoalKg: 0.5,
  diet: 'classic',
  unitSystem: 'imperial',
});

function arg(name: string) {
  const index = process.argv.indexOf(`--${name}`);
  return index === -1 ? undefined : process.argv[index + 1];
}

/** Easy to type on a phone: 4 groups of 4 letters and digits without look-alikes (about 79 bits). */
function newPassword() {
  const alphabet = 'abcdefghjkmnpqrstuvwxyz23456789';
  const group = () => Array.from({ length: 4 }, () => alphabet[randomInt(alphabet.length)]).join('');
  return [group(), group(), group(), group()].join('-');
}

const newId = () => generateRandomString(32, 'a-z', 'A-Z', '0-9');

async function main() {
  const email = z.email().safeParse(arg('email')?.trim().toLowerCase());
  const timeZone = arg('time-zone') ?? 'America/Los_Angeles';
  const days = Number(arg('days') ?? 14);
  const name = arg('name') ?? 'Alex';
  if (!email.success || !isValidTimeZone(timeZone) || !Number.isInteger(days) || days < 1 || days > 60) {
    console.error('Usage: npm run demo:account -- --email review@yourdomain.com [--replace] [--time-zone America/Los_Angeles] [--days 14]');
    process.exit(1);
  }

  const [existing] = await db.select({ id: users.id }).from(users).where(eq(users.email, email.data));
  if (existing) {
    if (!process.argv.includes('--replace')) {
      console.error(
        `${email.data} already has an account. To delete it and create it again with fresh sample data and a new ` +
          'password, run this again with --replace.',
      );
      process.exit(1);
    }
    const { photosDeleted } = await deleteUserData(existing.id);
    console.log(`Deleted the old ${email.data} account${photosDeleted ? ` and ${photosDeleted} photo(s)` : ''}.`);
  }

  const password = newPassword();
  const hash = await hashPassword(password);
  const plan = formulaPlan(ANSWERS);
  const userId = newId();
  const mealRows = sampleMeals(userId, timeZone, days);
  const weightRows = sampleWeights(userId, timeZone, ANSWERS.weightKg);
  const waterRows = sampleWater(userId, timeZone, days);

  await db.transaction(async (tx) => {
    await tx.insert(users).values({
      id: userId,
      name,
      email: email.data,
      emailVerified: true,
      ...ANSWERS,
      timezone: timeZone,
      dailyCalories: plan.calories,
      dailyProteinG: plan.proteinG,
      dailyCarbsG: plan.carbsG,
      dailyFatG: plan.fatG,
      planTargets: { calories: plan.calories, proteinG: plan.proteinG, carbsG: plan.carbsG, fatG: plan.fatG },
      planSource: plan.source,
      planSummary: plan.summary,
      onboardingCompletedAt: new Date(),
    });
    await tx.insert(accounts).values({ id: newId(), accountId: userId, providerId: 'credential', userId, password: hash });
    if (mealRows.length) await tx.insert(meals).values(mealRows);
    await tx.insert(weightLogs).values(weightRows);
    if (waterRows.length) await tx.insert(waterLogs).values(waterRows);
  });

  console.log(
    [
      '',
      `Demo account ready (${timeZone}):`,
      `  Email     ${email.data}`,
      `  Password  ${password}`,
      '',
      `  ${mealRows.length} sample meals over ${days} days, ${weightRows.length} weigh-ins, water every day.`,
      "  AI analysis isn't allowed yet, so the first scan shows the AI consent screen.",
      '',
      'Paste the email and password into App Store Connect (App Review Information → Sign-in required) and',
      'Play Console (App content → App access). The password is shown only this once.',
    ].join('\n'),
  );
  await db.$client.end();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
