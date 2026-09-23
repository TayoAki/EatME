import {
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

export const users = pgTable('users', {
  /** Clerk user id (user_...). Rows are created by the Clerk webhook or by onboarding. */
  id: text().primaryKey(),
  email: text(),
  firstName: text(),
  lastName: text(),
  imageUrl: text(),

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
    /** Original ImageKit URL (transformations are added when the image is displayed). */
    imageUrl: text(),
    imageFileId: text(),
    imagePath: text(),
    triggerRunId: text(),
    error: text(),
    loggedAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
    ...timestamps,
  },
  (t) => [index('meals_user_id_logged_at_idx').on(t.userId, t.loggedAt)],
);

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type MealRow = typeof meals.$inferSelect;
