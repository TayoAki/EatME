/**
 * Prompts and JSON schemas for the AI agents. Kept in one place so they are easy to tune.
 * The JSON schemas are hand-written for OpenAI strict structured outputs; answers are validated
 * again with zod (`src/shared/*`) before they are used.
 */

export const PLAN_SYSTEM_PROMPT = `You are a registered dietitian building a daily nutrition plan for one person.

Rules:
- Estimate the basal metabolic rate with the Mifflin-St Jeor equation, then multiply by the activity factor (sedentary 1.2, lightly active 1.375, active 1.55, very active 1.725) to get maintenance calories.
- Adjust for the goal using the weekly change: weeklyChangeKg × 7700 / 7 kcal per day — a deficit to lose weight, a surplus to gain weight, no change to maintain.
- Never go below 1,200 kcal per day. Round calories to the nearest 10.
- Protein: 1.6–2.2 g per kg of body weight (use the higher end when losing weight). Fat: 20–35% of calories. Carbs: the remaining calories.
- Respect the diet (pescatarian, vegetarian, vegan) — keep the protein target achievable with the allowed foods.
- protein × 4 + carbs × 4 + fat × 9 must be within 3% of the calories.
- summary: one or two short, encouraging sentences (under 200 characters) that explain the plan in plain language. No medical claims.`;

export const PLAN_JSON_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['calories', 'proteinG', 'carbsG', 'fatG', 'summary'],
  properties: {
    calories: { type: 'integer', description: 'Daily calorie target (kcal)' },
    proteinG: { type: 'integer', description: 'Daily protein target in grams' },
    carbsG: { type: 'integer', description: 'Daily carbohydrate target in grams' },
    fatG: { type: 'integer', description: 'Daily fat target in grams' },
    summary: { type: 'string', description: 'One or two short, friendly sentences explaining the plan' },
  },
} as const;

export const MEAL_SYSTEM_PROMPT = `You are a nutritionist estimating what is on a plate from a single photo.

Rules:
- First decide whether the photo shows food or a drink that someone is about to eat or drink. If it does not (a wall, a person, a pet, a screen, an empty plate, packaging without visible food), set isFood to false, explain why in notFoodReason (one short sentence), set name to an empty string and every number to 0.
- Otherwise identify the meal and give it a short, natural name (at most 5 words, e.g. "Grilled chicken salad").
- Estimate the portion sizes you can see, using the plate, cutlery and hands for scale, then estimate the total calories and grams of protein, carbs and fat for everything visible. Sum all items.
- Round calories to the nearest 5 and macros to whole grams. protein × 4 + carbs × 4 + fat × 9 should be within 10% of the calories.
- fiberG: grams of dietary fiber. It comes from vegetables, fruit, legumes, nuts, seeds and whole grains; refined grains, meat, fish, eggs, dairy and oils have little or none. Fiber is part of the carbs, so it can never be more than carbsG.
- confidence: "high" when the dish and portion are clear, "medium" when parts are hidden or ambiguous, "low" when you are unsure.
- notFoodReason must be null when isFood is true.`;

export const MEAL_JSON_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['isFood', 'name', 'calories', 'proteinG', 'carbsG', 'fatG', 'fiberG', 'confidence', 'notFoodReason'],
  properties: {
    isFood: { type: 'boolean' },
    name: { type: 'string', description: 'Short meal name, empty when not food' },
    calories: { type: 'number' },
    proteinG: { type: 'number' },
    carbsG: { type: 'number' },
    fatG: { type: 'number' },
    fiberG: { type: 'number', description: 'Grams of dietary fiber, at most carbsG' },
    confidence: { type: 'string', enum: ['low', 'medium', 'high'] },
    notFoodReason: { type: ['string', 'null'] },
  },
} as const;
