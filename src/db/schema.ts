import {
  boolean,
  date,
  doublePrecision,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  smallint,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

import { MEAL_CONFIDENCES, MEAL_SOURCES, MEAL_STATUSES, type BaseNutrition } from '@/shared/meals';
import { INJECTION_SITES, type Glp1Settings, type Symptom } from '@/shared/glp1';
import type { NutrientAmounts } from '@/shared/nutrients';
import { PRODUCT_SOURCES } from '@/shared/products';
import { SUPPLEMENT_SCHEDULES } from '@/shared/supplements';
import type { MacroTargets } from '@/shared/nutrition';
import { ACTIVITY_LEVELS, DIETS, GENDERS, GOALS, PLAN_SOURCES, UNIT_SYSTEMS } from '@/shared/onboarding';

// Column names are generated in snake_case (see `casing` in drizzle.config.ts and src/db/index.ts).

export const genderEnum = pgEnum('gender', GENDERS);
export const goalEnum = pgEnum('goal', GOALS);
export const activityLevelEnum = pgEnum('activity_level', ACTIVITY_LEVELS);
export const dietEnum = pgEnum('diet', DIETS);
export const unitSystemEnum = pgEnum('unit_system', UNIT_SYSTEMS);
export const planSourceEnum = pgEnum('plan_source', PLAN_SOURCES);
export const mealStatusEnum = pgEnum('meal_status', MEAL_STATUSES);
export const mealSourceEnum = pgEnum('meal_source', MEAL_SOURCES);
export const mealConfidenceEnum = pgEnum('meal_confidence', MEAL_CONFIDENCES);
export const injectionSiteEnum = pgEnum('injection_site', INJECTION_SITES);
export const supplementScheduleEnum = pgEnum('supplement_schedule', SUPPLEMENT_SCHEDULES);
export const productSourceEnum = pgEnum('product_source', PRODUCT_SOURCES);

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

  // Daily targets: the plan from onboarding, or the user's own numbers (Daily goals)
  dailyCalories: integer(),
  dailyProteinG: integer(),
  dailyCarbsG: integer(),
  dailyFatG: integer(),
  /** The targets the plan suggested, for "Use my plan" after the user changed them. */
  planTargets: jsonb().$type<MacroTargets>(),
  planSource: planSourceEnum(),
  planSummary: text(),
  onboardingCompletedAt: timestamp({ withTimezone: true }),

  // The user's own daily goals. Empty = use the recommended value (src/shared/nutrition.ts).
  dailyFiberG: integer(),
  dailyWaterMl: integer(),

  /** GLP-1 mode: the medicine and its schedule, as the user entered them. Empty = off. */
  glp1: jsonb().$type<Glp1Settings>(),

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
    /** Empty for meals logged before fiber tracking. */
    fiberG: integer(),
    confidence: mealConfidenceEnum(),
    source: mealSourceEnum().notNull().default('photo'),
    isFavorite: boolean().notNull().default(false),
    /** Multiplier of the estimated amount; the columns above already include it. */
    portion: doublePrecision().notNull().default(1),
    /** Unrounded numbers for a portion of 1, so portion changes never drift. */
    baseNutrition: jsonb().$type<BaseNutrition>(),
    /** What the user typed: the description of a text meal, or a note added to a photo. */
    note: text(),
    /** Nutrition labels: the serving the numbers are for, e.g. "1 bar (40 g)". */
    servingSize: text(),
    /** Every nutrient of the meal for a portion of 1, from the foods matched in the database. */
    nutrients: jsonb().$type<NutrientAmounts>(),
    /** Share of the calories that come from database foods (0–1); the rest is the AI's estimate. */
    matchedShare: doublePrecision(),
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

/** Water and other drinks, one row per entry. */
export const waterLogs = pgTable(
  'water_logs',
  {
    id: uuid().primaryKey().defaultRandom(),
    userId: text()
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    amountMl: integer().notNull(),
    loggedAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
    ...timestamps,
  },
  (t) => [index('water_logs_user_id_logged_at_idx').on(t.userId, t.loggedAt)],
);

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type MealRow = typeof meals.$inferSelect;

/**
 * USDA FNDDS foods (loaded by server/foods.mjs from data/fndds.json.gz). Nutrients are per 100 g.
 * `id` is the FoodData Central id.
 */
export const foods = pgTable(
  'foods',
  {
    id: integer().primaryKey(),
    code: text().notNull(),
    description: text().notNull(),
    category: text(),
    nutrients: jsonb().$type<NutrientAmounts>().notNull(),
    /** Household measures, e.g. [["1 cup", 246]]. */
    portions: jsonb().$type<[string, number][]>().notNull(),
    version: text().notNull(),
  },
  (t) => [index('foods_description_search_idx').using('gin', sql`to_tsvector('english', ${t.description})`)],
);

/** The foods in a meal with their weight: from the AI (matched to `foods`) or edited by the user. */
export const mealItems = pgTable(
  'meal_items',
  {
    id: uuid().primaryKey().defaultRandom(),
    mealId: uuid()
      .notNull()
      .references(() => meals.id, { onDelete: 'cascade' }),
    position: integer().notNull(),
    /** What the item is called in the app ("Spaghetti"). */
    name: text().notNull(),
    /** The database food; empty = the AI's own estimate for this item. */
    foodId: integer().references(() => foods.id, { onDelete: 'set null' }),
    /** The packaged product (barcode) the item was logged from; its numbers are the label's. */
    productCode: text(),
    grams: doublePrecision().notNull(),
    /** Nutrients of this item at `grams`. */
    nutrients: jsonb().$type<NutrientAmounts>().notNull(),
    ...timestamps,
  },
  (t) => [index('meal_items_meal_id_idx').on(t.mealId)],
);

export type FoodRow = typeof foods.$inferSelect;

/**
 * Packaged products looked up by barcode: a cache of Open Food Facts (ODbL: kept in its own table
 * and credited in the app) and USDA Branded Foods. Nutrients are per 100 g. An empty `source`
 * means nobody knew the barcode when it was last looked up.
 */
export const products = pgTable('products', {
  code: text().primaryKey(),
  source: productSourceEnum(),
  name: text(),
  brand: text(),
  servingSize: text(),
  servingGrams: doublePrecision(),
  packageGrams: doublePrecision(),
  nutrients: jsonb().$type<NutrientAmounts>(),
  fetchedAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
});
export type ProductRow = typeof products.$inferSelect;
export type MealItemRow = typeof mealItems.$inferSelect;

/** GLP-1 mode: doses as the user logged them (their own label, never a suggestion). */
export const doseLogs = pgTable(
  'dose_logs',
  {
    id: uuid().primaryKey().defaultRandom(),
    userId: text()
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    takenAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
    doseLabel: text(),
    site: injectionSiteEnum(),
    note: text(),
    ...timestamps,
  },
  (t) => [index('dose_logs_user_id_taken_at_idx').on(t.userId, t.takenAt)],
);

/** GLP-1 mode: how the user felt (side effects), with a severity from 1 (mild) to 3 (severe). */
export const symptomLogs = pgTable(
  'symptom_logs',
  {
    id: uuid().primaryKey().defaultRandom(),
    userId: text()
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    loggedAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
    symptoms: text().array().$type<Symptom[]>().notNull(),
    severity: smallint().notNull(),
    note: text(),
    ...timestamps,
  },
  (t) => [index('symptom_logs_user_id_logged_at_idx').on(t.userId, t.loggedAt)],
);

export type DoseLogRow = typeof doseLogs.$inferSelect;
export type SymptomLogRow = typeof symptomLogs.$inferSelect;
export type WaterLogRow = typeof waterLogs.$inferSelect;

/** The user's supplements. Removing one archives it, so days it was taken keep their numbers. */
export const supplements = pgTable(
  'supplements',
  {
    id: uuid().primaryKey().defaultRandom(),
    userId: text()
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    name: text().notNull(),
    /** Per dose, e.g. { vitaminD: 25 }. Empty when it has no tracked nutrients. */
    nutrients: jsonb().$type<NutrientAmounts>().notNull(),
    schedule: supplementScheduleEnum().notNull().default('daily'),
    archivedAt: timestamp({ withTimezone: true }),
    ...timestamps,
  },
  (t) => [index('supplements_user_id_idx').on(t.userId)],
);

/** "Taken" ticks: one per supplement and local day, with the dose as it was that day. */
export const supplementLogs = pgTable(
  'supplement_logs',
  {
    id: uuid().primaryKey().defaultRandom(),
    supplementId: uuid()
      .notNull()
      .references(() => supplements.id, { onDelete: 'cascade' }),
    userId: text()
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    date: date({ mode: 'string' }).notNull(),
    nutrients: jsonb().$type<NutrientAmounts>().notNull(),
    takenAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex('supplement_logs_supplement_date_idx').on(t.supplementId, t.date),
    index('supplement_logs_user_id_date_idx').on(t.userId, t.date),
  ],
);

export type SupplementRow = typeof supplements.$inferSelect;
