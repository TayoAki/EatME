import { z } from 'zod';

/** `not_food`: the AI decided the photo is not a meal (the photo is deleted, the row is kept). */
export const MEAL_STATUSES = ['analyzing', 'completed', 'failed', 'not_food'] as const;
export type MealStatus = (typeof MEAL_STATUSES)[number];

/** Meal as returned by the API. */
export type Meal = {
  id: string;
  status: MealStatus;
  name: string | null;
  calories: number | null;
  proteinG: number | null;
  carbsG: number | null;
  fatG: number | null;
  /** Short-lived signed link to the photo in the storage bucket. */
  imageUrl: string | null;
  /** Why the analysis failed, or why the photo is not food. */
  error: string | null;
  loggedAt: string;
  createdAt: string;
};

/** Structured output the vision model must return for a meal photo. */
export const mealAnalysisSchema = z.object({
  isFood: z.boolean(),
  name: z.string().max(80),
  calories: z.number().min(0).max(5000),
  proteinG: z.number().min(0).max(500),
  carbsG: z.number().min(0).max(1000),
  fatG: z.number().min(0).max(500),
  confidence: z.enum(['low', 'medium', 'high']),
  notFoodReason: z.string().max(200).nullable(),
});
export type MealAnalysis = z.infer<typeof mealAnalysisSchema>;

/** `POST /api/meals` takes the photo as multipart form data in this field. */
export const MEAL_PHOTO_FIELD = 'photo';
export const MAX_MEAL_PHOTO_BYTES = 8 * 1024 * 1024;

/** Body of `PATCH /api/meals/:id` — manual corrections. */
export const updateMealSchema = z
  .object({
    name: z.string().trim().min(1).max(80),
    calories: z.number().int().min(0).max(10000),
    proteinG: z.number().int().min(0).max(1000),
    carbsG: z.number().int().min(0).max(2000),
    fatG: z.number().int().min(0).max(1000),
  })
  .partial();
export type UpdateMealBody = z.infer<typeof updateMealSchema>;

/** What the scan screen shows while the server analyzes the photo (seconds since upload → label). */
export const MEAL_ANALYSIS_STAGES = [
  { after: 0, label: 'Identifying your meal…' },
  { after: 4, label: 'Calculating calories and macros…' },
  { after: 9, label: 'Almost done…' },
] as const;
