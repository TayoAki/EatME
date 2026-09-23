import {
  boolean,
  date,
  doublePrecision,
  index,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

import { MEAL_STATUSES } from '@/shared/meals';
import { ACTIVITY_LEVELS, DIETS, GENDERS, GOALS, PLAN_SOURCES, UNIT_SYSTEMS } from '@/shared/onboarding';

// Column names are generated in snake_case (see `casing` in drizzle.config.ts and src/db/index.ts).

export const genderEnum = pgEnum('gender', GENDERS);
export const goalEnum = pgEnum('goal', GOALS);
export const activityLevelEnum = pgEnum('activity_level', ACTIVITY_LEVELS);
export const dietEnum = pgEnum('diet', DIETS);
export const unitSystemEnum = pgEnum('unit_system', UNIT_SYSTEMS);
export const planSourceEnum = pgEnum('plan_source', PLAN_SOURCES);
export const mealStatusEnum = pgEnum('meal_status', MEAL_STATUSES);

const timestamps = {
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
};

/**
 * One row per account. The first columns are Better Auth's user model (created at sign-up),
 * the rest is filled in when the user finishes onboarding.
 */
export const users = pgTable('users', {
  id: text().primaryKey(),
  name: text().notNull(),
  email: text().notNull().unique(),
  emailVerified: boolean().notNull().default(false),
  image: text(),

  // Onboarding answers (always metric)
  gender: genderEnum(),
  dateOfBirth: date({ mode: 'string' }),
  heightCm: doublePrecision(),
  weightKg: doublePrecision(),
  goal: goalEnum(),
  targetWeightKg: doublePrecision(),
  activityLevel: activityLevelEnum(),
  weeklyGoalKg: doublePrecision(),
  diet: dietEnum(),
  unitSystem: unitSystemEnum().notNull().default('metric'),
  /** IANA time zone of the user's device — used for day boundaries and streaks. */
  timezone: text().notNull().default('UTC'),

  // Daily plan generated during onboarding
  dailyCalories: integer(),
  dailyProteinG: integer(),
  dailyCarbsG: integer(),
  dailyFatG: integer(),
  planSource: planSourceEnum(),
  planSummary: text(),
  onboardingCompletedAt: timestamp({ withTimezone: true }),

  ...timestamps,
});

// Better Auth tables (sign-in sessions, password accounts, verification tokens).

export const sessions = pgTable(
  'sessions',
  {
    id: text().primaryKey(),
    expiresAt: timestamp({ withTimezone: true }).notNull(),
    token: text().notNull().unique(),
    ipAddress: text(),
    userAgent: text(),
    userId: text()
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    ...timestamps,
  },
  (t) => [index('sessions_user_id_idx').on(t.userId)],
);

export const accounts = pgTable(
  'accounts',
  {
    id: text().primaryKey(),
    accountId: text().notNull(),
    providerId: text().notNull(),
    userId: text()
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    accessToken: text(),
    refreshToken: text(),
    idToken: text(),
    accessTokenExpiresAt: timestamp({ withTimezone: true }),
    refreshTokenExpiresAt: timestamp({ withTimezone: true }),
    scope: text(),
    /** Password hash for email + password sign-in (never the password itself). */
    password: text(),
    ...timestamps,
  },
  (t) => [index('accounts_user_id_idx').on(t.userId)],
);

export const verifications = pgTable(
  'verifications',
  {
    id: text().primaryKey(),
    identifier: text().notNull(),
    value: text().notNull(),
    expiresAt: timestamp({ withTimezone: true }).notNull(),
    ...timestamps,
  },
  (t) => [index('verifications_identifier_idx').on(t.identifier)],
);

export const meals = pgTable(
  'meals',
  {
    id: uuid().primaryKey().defaultRandom(),
    userId: text()
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    status: mealStatusEnum().notNull().default('analyzing'),
    name: text(),
    calories: integer(),
    proteinG: integer(),
    carbsG: integer(),
    fatG: integer(),
    /** Key of the photo in the storage bucket: meals/<userId>/<mealId>.jpg */
    imageKey: text(),
    /** Start of the running analysis. An old value means the server stopped mid-way: retry. */
    analysisStartedAt: timestamp({ withTimezone: true }),
    analysisAttempts: integer().notNull().default(0),
    /** Why the analysis failed, or why the photo is not food. */
    error: text(),
    loggedAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
    ...timestamps,
  },
  (t) => [index('meals_user_id_logged_at_idx').on(t.userId, t.loggedAt)],
);

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type MealRow = typeof meals.$inferSelect;
