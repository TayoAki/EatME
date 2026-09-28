/**
 * Creates the App Review demo account through the live server's API, for when the database isn't
 * reachable from your computer (Railway's Postgres has no public address): signed up and
 * onboarded with the standard formula plan, AI not allowed yet (so the reviewer's first scan shows
 * the AI consent screen, Apple 5.1.2(i)), and three weeks of meals at the usual meal times,
 * weigh-ins and water, the way a person would have logged them.
 *
 *   npm run demo:account:remote -- --email review@yourdomain.com
 *   options: --server https://… (default: the production EXPO_PUBLIC_API_URL in eas.json)
 *            --days 21 · --name Alex · --time-zone America/Los_Angeles
 *
 * It prints a new password once: paste the email and password into App Store Connect and Play
 * Console. To start again, delete the account first (sign in as it and use Profile → Delete
 * account, or <server>/delete-account), then run this again.
 */
import { randomInt } from 'node:crypto';
import { readFileSync } from 'node:fs';

import { zonedDate } from './sample-data';

type Meal = { name: string; calories: number; proteinG: number; carbsG: number; fatG: number; fiberG: number };
type Slot = 'breakfast' | 'lunch' | 'snack' | 'dinner';

// The same people and food as `npm run demo:account` (scripts/demo-account.ts, scripts/sample-data.ts).
const ANSWERS = {
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
};

const MEALS: Record<Slot, Meal[]> = {
  breakfast: [
    { name: 'Avocado toast with egg', calories: 410, proteinG: 16, carbsG: 38, fatG: 22, fiberG: 8 },
    { name: 'Greek yogurt with berries', calories: 280, proteinG: 18, carbsG: 34, fatG: 8, fiberG: 4 },
    { name: 'Oatmeal with banana', calories: 360, proteinG: 11, carbsG: 64, fatG: 7, fiberG: 7 },
    { name: 'Scrambled eggs on toast', calories: 410, proteinG: 27, carbsG: 28, fatG: 21, fiberG: 4 },
  ],
  lunch: [
    { name: 'Grilled chicken salad', calories: 420, proteinG: 38, carbsG: 16, fatG: 22, fiberG: 5 },
    { name: 'Salmon rice bowl', calories: 620, proteinG: 42, carbsG: 58, fatG: 24, fiberG: 5 },
    { name: 'Turkey club sandwich', calories: 560, proteinG: 34, carbsG: 48, fatG: 24, fiberG: 4 },
    { name: 'Chickpea curry with rice', calories: 600, proteinG: 18, carbsG: 92, fatG: 17, fiberG: 12 },
  ],
  snack: [
    { name: 'Apple with peanut butter', calories: 290, proteinG: 7, carbsG: 32, fatG: 16, fiberG: 7 },
    { name: 'Protein shake', calories: 220, proteinG: 30, carbsG: 12, fatG: 5, fiberG: 0 },
    { name: 'Trail mix', calories: 290, proteinG: 8, carbsG: 26, fatG: 18, fiberG: 3 },
  ],
  dinner: [
    { name: 'Spaghetti bolognese', calories: 630, proteinG: 30, carbsG: 80, fatG: 21, fiberG: 6 },
    { name: 'Steak with sweet potato', calories: 560, proteinG: 58, carbsG: 37, fatG: 20, fiberG: 7 },
    { name: 'Salmon with roasted vegetables', calories: 570, proteinG: 40, carbsG: 36, fatG: 28, fiberG: 7 },
    { name: 'Tofu stir-fry with noodles', calories: 590, proteinG: 26, carbsG: 76, fatG: 20, fiberG: 6 },
  ],
};
const TIMES: Record<Slot, string> = { breakfast: '08:10', lunch: '12:45', snack: '16:05', dinner: '19:20' };

function arg(name: string) {
  const index = process.argv.indexOf(`--${name}`);
  return index === -1 ? undefined : process.argv[index + 1];
}

/** Easy to type on a phone: 4 groups of 4 letters and digits without look-alikes. */
function newPassword() {
  const alphabet = 'abcdefghjkmnpqrstuvwxyz23456789';
  const group = () => Array.from({ length: 4 }, () => alphabet[randomInt(alphabet.length)]).join('');
  return [group(), group(), group(), group()].join('-');
}

function productionServer() {
  const eas = JSON.parse(readFileSync('eas.json', 'utf8'));
  return eas.build?.production?.env?.EXPO_PUBLIC_API_URL as string | undefined;
}

async function main() {
  const email = arg('email')?.trim().toLowerCase();
  const server = (arg('server') ?? productionServer() ?? '').replace(/\/$/, '');
  const days = Number(arg('days') ?? 21);
  const name = arg('name') ?? 'Alex';
  const timeZone = arg('time-zone') ?? 'America/Los_Angeles';
  if (!email?.includes('@') || !server.startsWith('http') || !Number.isInteger(days) || days < 7 || days > 60) {
    console.error('Usage: npm run demo:account:remote -- --email review@yourdomain.com [--server https://…] [--days 21]');
    process.exit(1);
  }

  const cookies = new Map<string, string>();
  const call = async (method: string, path: string, body?: unknown) => {
    const res = await fetch(server + path, {
      method,
      headers: {
        Origin: server,
        Accept: 'application/json',
        ...(body === undefined ? {} : { 'Content-Type': 'application/json' }),
        ...(cookies.size ? { Cookie: [...cookies].map(([k, v]) => `${k}=${v}`).join('; ') } : {}),
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    for (const cookie of res.headers.getSetCookie()) {
      const [pair] = cookie.split(';');
      const at = pair.indexOf('=');
      cookies.set(pair.slice(0, at), pair.slice(at + 1));
    }
    const text = await res.text();
    if (!res.ok) throw new Error(`${method} ${path} answered ${res.status}: ${text.slice(0, 200)}`);
    return text ? JSON.parse(text) : null;
  };

  const password = newPassword();
  await call('POST', '/api/auth/sign-up/email', { name, email, password });
  try {
    await fill(call, timeZone, days, email, password, server);
  } catch (error) {
    console.error(
      `The account ${email} was created but not finished (${error instanceof Error ? error.message : error}).\n` +
        `Sign in with that email and the password ${password}, delete it (Profile → Delete account or ` +
        `${server}/delete-account), then run this again.`,
    );
    process.exit(1);
  }
}

type Call = (method: string, path: string, body?: unknown) => Promise<any>;

async function fill(call: Call, timeZone: string, days: number, email: string, password: string, server: string) {
  const { plan } = await call('POST', '/api/plan', { ...ANSWERS, aiConsent: false });
  await call('POST', '/api/onboarding', { answers: ANSWERS, plan, timezone: timeZone, aiConsent: false });

  // Yesterday back to `days` ago: three or four meals a day, with a gap a week ago so the calendar
  // and the streak have something to show. Today is left for the reviewer.
  let meals = 0;
  for (let daysAgo = 1; daysAgo <= days; daysAgo++) {
    if (daysAgo === 7) continue;
    const date = zonedDate(daysAgo, timeZone);
    const slots: Slot[] = daysAgo % 3 === 0 ? ['breakfast', 'lunch', 'snack', 'dinner'] : ['breakfast', 'lunch', 'dinner'];
    for (const [i, slot] of slots.entries()) {
      const list = MEALS[slot];
      await call('POST', '/api/meals', { quick: { ...list[(daysAgo + i) % list.length], date, time: TIMES[slot] } });
      meals++;
    }
    await call('POST', '/api/water', { amountMl: 1250 + (daysAgo % 4) * 250, date });
  }
  // A weigh-in every other day, drifting down to 80.4 kg (about 177 lb) yesterday.
  let weighIns = 0;
  for (let daysAgo = days; daysAgo >= 1; daysAgo -= 2) {
    const kg = 80.4 + (daysAgo - 1) * 0.075 + (daysAgo % 4 === 0 ? 0.3 : 0);
    await call('POST', '/api/weights', { date: zonedDate(daysAgo, timeZone), weightKg: Math.round(kg * 10) / 10 });
    weighIns++;
  }

  console.log(
    [
      `Demo account ready on ${server}:`,
      `  email:    ${email}`,
      `  password: ${password}`,
      `  ${meals} meals over ${days} days (at the usual meal times), ${weighIns} weigh-ins, water every day.`,
      '  AI analysis is not allowed yet: the first scan shows the AI consent screen.',
      'Paste the email and password into App Store Connect (App Review Information → Sign-in required).',
    ].join('\n'),
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
