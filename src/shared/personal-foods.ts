import { z } from 'zod';

/** Most remembered foods one person can keep, and how many names go into the meal prompt. */
export const MAX_PERSONAL_FOODS = 500;
export const PROMPT_NAMES = 30;

/**
 * A remembered food is used instead of the AI's weight when the AI's estimate is within this
 * range of the usual grams; a clearly different portion keeps the AI's grams.
 */
export const USUAL_GRAMS_RANGE = [0.6, 1.5] as const;

/**
 * The match key of a food name: lower case, no punctuation, no leading "a", "an", "the" or
 * "some" ("A slice of the bread!" → "slice of the bread").
 */
export function foodKey(name: string) {
  return name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
    .replace(/^(a|an|the|some)\s+/, '')
    .trim();
}

/** Where a remembered food's numbers come from. */
export type PersonalFoodKind = 'food' | 'product' | 'own' | 'serving';

/** A remembered food ("Your foods"), as the API returns it. */
export type PersonalFood = {
  id: string;
  name: string;
  /** The usual portion; null for a serving without a weight (quick adds, labels). */
  usualGrams: number | null;
  kind: PersonalFoodKind;
  /** The database food or product it uses, e.g. "Rice, brown, cooked". */
  detail: string | null;
  /** Calories of the usual portion (or the serving). */
  calories: number;
  uses: number;
  lastUsedAt: string | null;
};

/**
 * A food edit worth remembering: the AI's name, what the person made of it (with the database
 * food it now uses, if any) and the grams.
 */
export type FoodCorrection = { itemId: string; from: string; to: string; food: string | null; grams: number };

/** Body of `POST /api/personal-foods`: remember meal items, or a whole quick-add or label meal. */
export const rememberFoodsSchema = z.union([
  z.object({ itemIds: z.array(z.string().uuid()).min(1).max(30) }).strict(),
  z.object({ mealId: z.string().uuid() }).strict(),
]);
export type RememberFoodsBody = z.infer<typeof rememberFoodsSchema>;

/** Body of `PATCH /api/personal-foods/:id`: rename it or change the usual grams. */
export const updatePersonalFoodSchema = z
  .object({
    name: z.string().trim().min(1).max(60),
    usualGrams: z.number().min(1).max(3000),
  })
  .partial()
  .strict()
  .refine((body) => Object.keys(body).length > 0, 'Nothing to update');
export type UpdatePersonalFoodBody = z.infer<typeof updatePersonalFoodSchema>;
