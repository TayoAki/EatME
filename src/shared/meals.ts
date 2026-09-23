import { z } from 'zod';

export const MEAL_STATUSES = ['analyzing', 'completed', 'failed'] as const;
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
  imageUrl: string | null;
  triggerRunId: string | null;
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

/** Body of `POST /api/meals` — the photo was already uploaded to ImageKit by the app. */
export const createMealSchema = z.object({
  fileId: z.string().min(1).max(100),
});

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

/** Progress stages the analyze-meal task publishes through Trigger.dev Realtime metadata. */
export const MEAL_ANALYSIS_STAGES = {
  queued: 'Getting ready…',
  preparing: 'Preparing your photo…',
  identifying: 'Identifying your meal…',
  calculating: 'Calculating calories and macros…',
  saving: 'Saving your meal…',
  done: 'Done',
} as const;
export type MealAnalysisStage = keyof typeof MEAL_ANALYSIS_STAGES;
