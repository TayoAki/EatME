import { z } from 'zod';

import type { NutrientAmounts } from './nutrients';
import type { ProductSource } from './products';

/**
 * `not_food`: the AI decided the photo is not a meal (the photo is deleted, the row is kept).
 * `saved`: a saved meal (v2.1), a template that is never part of a day; logging it makes a copy.
 */
export const MEAL_STATUSES = ['analyzing', 'completed', 'failed', 'not_food', 'saved'] as const;
export type MealStatus = (typeof MEAL_STATUSES)[number];

/** How the meal was logged. `quick`: calories and macros typed in (quick add), no AI. */
export const MEAL_SOURCES = ['photo', 'text', 'label', 'copy', 'barcode', 'food', 'quick', 'restaurant'] as const;
export type MealSource = (typeof MEAL_SOURCES)[number];

/** How sure the AI was: "low" shows a "rough estimate" note. */
export const MEAL_CONFIDENCES = ['low', 'medium', 'high'] as const;
export type MealConfidence = (typeof MEAL_CONFIDENCES)[number];

/** Steer the AI (v2.1): one meal can have up to 3 photos (one scan), split by `X-Photo-Lengths`. */
export const MAX_MEAL_PHOTOS = 3;

/** The one tap-to-answer question (FOLLOW_UP_QUESTION): cooking fat, a portion, or what's inside. */
export const FOLLOW_UP_KINDS = ['cooking_fat', 'portion', 'filling'] as const;
export type FollowUpKind = (typeof FOLLOW_UP_KINDS)[number];

/** How an answer changes the meal's foods (worked out when the meal is analyzed; no second AI call). */
export type FollowUpChange =
  /** Replace the meal's cooking-fat items with this one (none when `add` is null). */
  | { type: 'fat'; removeItemIds: string[]; add: { name: string; foodId: number | null; grams: number; per100g: NutrientAmounts } | null }
  /** Scale one item, or every item when `itemId` is null. */
  | { type: 'scale'; itemId: string | null; factor: number }
  /** Replace one item's food, keeping its weight. */
  | { type: 'food'; itemId: string; name: string; foodId: number; per100g: NutrientAmounts };

/** Stored on the meal: the question, the options with the meal's calories for each, the answer. */
export type FollowUpState = {
  kind: FollowUpKind;
  question: string;
  /** The food it is about ("Burrito"), or null for the whole meal. */
  about: string | null;
  options: { label: string; calories: number; change: FollowUpChange }[];
  /** The chosen option; -1 when skipped; null until answered. */
  answer: number | null;
};

/** `Meal.followUp`: what the app shows (the server keeps how each answer changes the meal). */
export type FollowUp = Omit<FollowUpState, 'options'> & { options: { label: string; calories: number }[] };

/** Body of `POST /api/meals/:id/follow-up`: an option's index, or "skip". */
export const followUpAnswerSchema = z
  .object({ option: z.union([z.number().int().min(0).max(5), z.literal('skip')]) })
  .strict();

/** Food-quality tag (V2 experiment): how processed the meal is overall. */
export const PROCESSING_LEVELS = ['whole', 'processed', 'highly_processed'] as const;
export type ProcessingLevel = (typeof PROCESSING_LEVELS)[number];
export const PROCESSING_LABELS: Record<ProcessingLevel, string> = {
  whole: 'Whole foods',
  processed: 'Processed',
  highly_processed: 'Highly processed',
};

/** One-tap portion sizes on the meal screen (1 = the amount that was scanned). */
export const PORTION_OPTIONS = [0.5, 1, 1.5, 2] as const;

/** Meal as returned by the API. */
export type Meal = {
  id: string;
  status: MealStatus;
  name: string | null;
  calories: number | null;
  proteinG: number | null;
  carbsG: number | null;
  fatG: number | null;
  /** Null for meals logged before fiber tracking. */
  fiberG: number | null;
  confidence: MealConfidence | null;
  source: MealSource;
  isFavorite: boolean;
  /** Multiplier of the originally estimated amount (servings for a label; the numbers above already include it). */
  portion: number;
  /** The description of a text meal, or the note added to a photo. */
  note: string | null;
  /** Nutrition labels: the serving the label's numbers are for, e.g. "1 bar (40 g)". */
  servingSize: string | null;
  /** Every nutrient for the logged portion, from the foods matched in the USDA database. */
  nutrients: NutrientAmounts | null;
  /** Share of the calories from database foods (0–1); null when the meal has no food list. */
  matchedShare: number | null;
  /** Food-quality tag (experiment; null when it was off or for older meals). */
  processing: ProcessingLevel | null;
  processingReason: string | null;
  /** Estimated grams of added sugar for the logged portion. */
  addedSugarG: number | null;
  /** The foods of the meal (only on `GET /api/meals/:id`), for the logged portion. */
  items?: MealItem[];
  /** The saved meal this one was logged from (repeat meals). */
  savedMealId: string | null;
  /** Short-lived signed link to the photo in the storage bucket. */
  imageUrl: string | null;
  /** More photos of the same meal (steer the AI), as signed links. */
  extraImageUrls: string[];
  /** The one tap-to-answer question, when the analysis asked one. */
  followUp: FollowUp | null;
  /** Why the analysis failed, or why the photo is not food. */
  error: string | null;
  loggedAt: string;
  createdAt: string;
  /** Changes whenever the meal changes (Apple Health and Health Connect use it as a version). */
  updatedAt: string;
};

/**
 * A food of a meal. `foodId` points to the USDA database; `product` is a packaged product logged by
 * its barcode (the label's numbers); neither = the AI's own estimate.
 */
export type MealItem = {
  id: string;
  name: string;
  foodId: number | null;
  /** The database description, e.g. "Pasta, cooked". */
  foodName: string | null;
  grams: number;
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
  fiberG: number | null;
  /** Household measures of the database food, e.g. [["1 cup", 140]]. */
  portions: [string, number][];
  product: { code: string; brand: string | null; source: ProductSource | null } | null;
  /** Taken from the person's remembered foods ("Your usual"). */
  personalFoodId: string | null;
  /** From a restaurant menu (FatSecret): the chain, the serving and how many, as logged. */
  restaurant: { chain: string; serving: string; count: number } | null;
};

/** A food from the USDA database, as search returns it. Nutrients per 100 g. */
export type FoodSummary = {
  id: number;
  description: string;
  category: string | null;
  per100g: { calories: number; proteinG: number; carbsG: number; fatG: number; fiberG: number | null };
  /** Household measures: [label, grams]. */
  portions: [string, number][];
};

/** Body of `PUT /api/meals/:id/items`: the meal's foods after editing (grams as logged). */
export const updateMealItemsSchema = z.object({
  items: z
    .array(
      z
        .object({
          /** An existing item (its AI estimate can be rescaled) — or a new food from the database. */
          id: z.string().uuid().optional(),
          foodId: z.number().int().positive().nullable(),
          name: z.string().trim().min(1).max(80),
          /** As logged; 0 only for a kept restaurant menu item that has no weight. */
          grams: z.number().min(0).max(3000),
        })
        .refine((item) => item.grams >= 1 || (!!item.id && item.grams === 0), { message: 'Enter how many grams.', path: ['grams'] }),
    )
    .min(1)
    .max(30)
    .refine((items) => {
      const ids = items.flatMap((item) => (item.id ? [item.id] : []));
      return new Set(ids).size === ids.length;
    }, 'Each food can be listed only once.'),
});
export type UpdateMealItemsBody = z.infer<typeof updateMealItemsSchema>;

/** One food of a meal as the AI sees it: its weight, how a food database would call it, its own estimate. */
export const aiMealItemSchema = z.object({
  name: z.string().max(80),
  food: z.string().max(160),
  grams: z.number().min(0).max(3000),
  calories: z.number().min(0).max(5000),
  proteinG: z.number().min(0).max(500),
  carbsG: z.number().min(0).max(1000),
  fatG: z.number().min(0).max(500),
  fiberG: z.number().min(0).max(200),
});
export type AiMealItem = z.infer<typeof aiMealItemSchema>;

/** Food-quality fields: the AI returns them only while the experiment is on. */
const qualitySchema = z
  .object({
    processing: z.enum(PROCESSING_LEVELS),
    processingReason: z.string().max(300),
    addedSugarG: z.number().min(0).max(300),
  })
  .partial();

/** Totals the model returns for a meal photo, a description or a nutrition label. */
const mealTotalsSchema = z.object({
  isFood: z.boolean(),
  name: z.string().max(80),
  calories: z.number().min(0).max(5000),
  proteinG: z.number().min(0).max(500),
  carbsG: z.number().min(0).max(1000),
  fatG: z.number().min(0).max(500),
  fiberG: z.number().min(0).max(200),
  confidence: z.enum(MEAL_CONFIDENCES),
  notFoodReason: z.string().max(200).nullable(),
});

/**
 * The question the AI may ask (FOLLOW_UP_QUESTION): `item` is 1-based, 0 = the whole meal. The
 * question is optional, so one that breaks the rules is dropped (never failing the analysis) and
 * extra fillings are cut.
 */
const followUpQuestionSchema = z
  .object({
    kind: z.enum(FOLLOW_UP_KINDS),
    item: z.number().int().min(0).max(20),
    fillings: z
      .array(
        z.object({
          label: z.string().transform((label) => label.slice(0, 40)),
          food: z.string().transform((food) => food.slice(0, 160)),
        }),
      )
      .transform((fillings) => fillings.slice(0, 3)),
  })
  .nullable()
  .optional()
  .catch(null);
export type FollowUpQuestion = NonNullable<z.infer<typeof followUpQuestionSchema>>;

/** Structured output for a meal photo or description: totals plus the foods it is made of. */
export const mealAnalysisSchema = mealTotalsSchema.extend({
  items: z.array(aiMealItemSchema).max(20),
  question: followUpQuestionSchema,
  ...qualitySchema.shape,
});
export type MealAnalysis = z.infer<typeof mealAnalysisSchema>;

/** The same for a nutrition-facts label: values for one serving as printed. */
export const labelAnalysisSchema = mealTotalsSchema.extend({
  servingSize: z.string().max(80).nullable(),
  ...qualitySchema.shape,
});
export type LabelAnalysis = z.infer<typeof labelAnalysisSchema>;

/** `POST /api/meals` takes the photo as multipart form data in this field. */
export const MEAL_PHOTO_FIELD = 'photo';
export const MAX_MEAL_PHOTO_BYTES = 8 * 1024 * 1024;

/** What a photo shows: a meal (estimated) or a nutrition-facts label (read). `?mode=` on upload. */
export const PHOTO_MODES = ['meal', 'label'] as const;
export type PhotoMode = (typeof PHOTO_MODES)[number];

/** A note sent with a photo (`X-Meal-Note` header, URI-encoded) or a typed description. */
export const MAX_MEAL_NOTE_LENGTH = 300;
export const MAX_MEAL_DESCRIPTION_LENGTH = 500;

/** Body of `POST /api/meals` as JSON: a meal described in words instead of a photo. */
export const describeMealSchema = z.object({
  text: z.string().trim().min(3, 'Describe what you ate.').max(MAX_MEAL_DESCRIPTION_LENGTH),
});

/** Body of `PATCH /api/meals/:id` — manual corrections. */
export const updateMealSchema = z
  .object({
    name: z.string().trim().min(1).max(80),
    calories: z.number().int().min(0).max(10000),
    proteinG: z.number().int().min(0).max(1000),
    carbsG: z.number().int().min(0).max(2000),
    fatG: z.number().int().min(0).max(1000),
    fiberG: z.number().int().min(0).max(500),
    isFavorite: z.boolean(),
    /** Scales every number by new ÷ current portion unless the numbers are sent too. */
    portion: z.number().min(0.25).max(20),
  })
  .partial();
export type UpdateMealBody = z.infer<typeof updateMealSchema>;

/** Body of `POST /api/meals/:id/duplicate` ("Log again"). `date` logs it on an earlier day. */
export const duplicateMealSchema = z.object({
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional(),
});

/** Body of `POST /api/meals` for a quick add: numbers typed in, no AI. At least one above 0. */
export const quickMealSchema = z.object({
  quick: z
    .object({
      name: z.string().trim().max(80).optional(),
      /** Worked out from the macros (4/4/9) when left out. */
      calories: z.number().min(0).max(10000).optional(),
      proteinG: z.number().min(0).max(1000).optional(),
      carbsG: z.number().min(0).max(2000).optional(),
      fatG: z.number().min(0).max(1000).optional(),
      fiberG: z.number().min(0).max(500).optional(),
      /** Logs it on an earlier day (today when left out). */
      date: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/)
        .optional(),
    })
    .strict()
    .refine((q) => [q.calories, q.proteinG, q.carbsG, q.fatG, q.fiberG].some((value) => (value ?? 0) > 0), {
      message: 'Type at least one number.',
    }),
});
export type QuickMeal = z.infer<typeof quickMealSchema>['quick'];

/** Body of `POST /api/days/copy`: copies the meals of one day (all, or only `mealIds`) to another. */
export const copyDaySchema = z.object({
  from: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  to: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  mealIds: z.array(z.string().uuid()).min(1).max(30).optional(),
});

/** Unrounded nutrition for a portion of 1, kept so that changing the portion never drifts. */
export type BaseNutrition = { calories: number; proteinG: number; carbsG: number; fatG: number; fiberG: number | null };

/** The numbers for `portion` × the base amount, rounded like the AI's estimates. */
export function scaleNutrition(base: BaseNutrition, portion: number) {
  return {
    calories: Math.round(base.calories * portion),
    proteinG: Math.round(base.proteinG * portion),
    carbsG: Math.round(base.carbsG * portion),
    fatG: Math.round(base.fatG * portion),
    fiberG: base.fiberG === null ? null : Math.round(base.fiberG * portion),
  };
}

/** What the scan screen shows while the server analyzes the photo (seconds since upload → label). */
export const MEAL_ANALYSIS_STAGES = [
  { after: 0, label: 'Identifying your meal…' },
  { after: 4, label: 'Calculating calories and macros…' },
  { after: 9, label: 'Almost done…' },
] as const;
