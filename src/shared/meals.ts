import { z } from 'zod';

/** `not_food`: the AI decided the photo is not a meal (the photo is deleted, the row is kept). */
export const MEAL_STATUSES = ['analyzing', 'completed', 'failed', 'not_food'] as const;
export type MealStatus = (typeof MEAL_STATUSES)[number];

/** How the meal was logged. */
export const MEAL_SOURCES = ['photo', 'text', 'label', 'copy', 'barcode', 'food'] as const;
export type MealSource = (typeof MEAL_SOURCES)[number];

/** How sure the AI was: "low" shows a "rough estimate" note. */
export const MEAL_CONFIDENCES = ['low', 'medium', 'high'] as const;
export type MealConfidence = (typeof MEAL_CONFIDENCES)[number];

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
  /** Short-lived signed link to the photo in the storage bucket. */
  imageUrl: string | null;
  /** Why the analysis failed, or why the photo is not food. */
  error: string | null;
  loggedAt: string;
  createdAt: string;
  /** Changes whenever the meal changes (Apple Health and Health Connect use it as a version). */
  updatedAt: string;
};

/** Structured output the vision model must return for a meal photo. */
export const mealAnalysisSchema = z.object({
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
export type MealAnalysis = z.infer<typeof mealAnalysisSchema>;

/** The same for a nutrition-facts label: values for one serving as printed. */
export const labelAnalysisSchema = mealAnalysisSchema.extend({
  servingSize: z.string().max(80).nullable(),
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

/** Body of `POST /api/days/copy`: copies every meal of one day to another. */
export const copyDaySchema = z.object({
  from: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  to: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
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
