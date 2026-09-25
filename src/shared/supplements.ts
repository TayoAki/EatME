import { z } from 'zod';

import { NUTRIENT_KEYS, type NutrientAmounts, type NutrientKey } from './nutrients';

export const SUPPLEMENT_SCHEDULES = ['daily', 'as_needed'] as const;
export type SupplementSchedule = (typeof SUPPLEMENT_SCHEDULES)[number];

/** Common supplements with a typical dose. The user can change the amounts to match their label. */
export const SUPPLEMENT_PRESETS: { name: string; nutrients: NutrientAmounts }[] = [
  { name: 'Vitamin D3', nutrients: { vitaminD: 25 } },
  { name: 'Magnesium', nutrients: { magnesium: 200 } },
  { name: 'Iron', nutrients: { iron: 18 } },
  { name: 'Vitamin B12', nutrients: { vitaminB12: 250 } },
  { name: 'Calcium', nutrients: { calcium: 500 } },
  { name: 'Vitamin C', nutrients: { vitaminC: 500 } },
  { name: 'Zinc', nutrients: { zinc: 15 } },
  { name: 'Folic acid', nutrients: { folate: 400 } },
  {
    name: 'Multivitamin',
    nutrients: {
      vitaminA: 900, vitaminC: 90, vitaminD: 20, vitaminE: 15, vitaminK: 120, thiamin: 1.2, riboflavin: 1.3,
      niacin: 16, vitaminB6: 1.7, folate: 400, vitaminB12: 2.4, iron: 8, magnesium: 50, zinc: 11, selenium: 55, copper: 0.9,
    },
  },
  { name: 'Fish oil (omega-3)', nutrients: {} },
  { name: 'Creatine', nutrients: {} },
];

const nutrientAmountsSchema = z
  .record(z.string(), z.number().min(0).max(100000))
  .refine((value) => Object.keys(value).every((key) => (NUTRIENT_KEYS as string[]).includes(key)), 'Unknown nutrient')
  .transform((value) => value as NutrientAmounts);

/** `POST /api/supplements` and `PATCH /api/supplements/:id` (all fields optional on PATCH). */
export const supplementSchema = z.object({
  name: z.string().trim().min(1).max(60),
  /** Per dose. Empty for supplements without tracked nutrients (e.g. creatine). */
  nutrients: nutrientAmountsSchema,
  schedule: z.enum(SUPPLEMENT_SCHEDULES),
});
export type SupplementBody = z.infer<typeof supplementSchema>;

export type Supplement = {
  id: string;
  name: string;
  nutrients: NutrientAmounts;
  schedule: SupplementSchedule;
  /** Taken on the requested day. */
  taken: boolean;
};

/** `GET /api/supplements?date=`. */
export type SupplementsDay = { date: string; supplements: Supplement[] };

/** Nutrients offered when adding a supplement, the ones supplements usually contain first. */
export const SUPPLEMENT_NUTRIENTS: NutrientKey[] = [
  'vitaminD', 'vitaminB12', 'magnesium', 'iron', 'zinc', 'calcium', 'vitaminC', 'folate', 'vitaminA', 'vitaminE',
  'vitaminK', 'vitaminB6', 'thiamin', 'riboflavin', 'niacin', 'selenium', 'copper', 'potassium', 'choline',
  'phosphorus', 'caffeine',
];

/** "Vitamin D 25 µg · Magnesium 200 mg" for a list row. */
export function describeDose(nutrients: NutrientAmounts, labels: Record<NutrientKey, { label: string; unit: string }>) {
  return (Object.entries(nutrients) as [NutrientKey, number][])
    .map(([key, value]) => `${labels[key].label} ${value.toLocaleString('en-US')} ${labels[key].unit}`)
    .join(' · ');
}
