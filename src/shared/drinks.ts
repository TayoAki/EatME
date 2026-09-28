import { z } from 'zod';

import type { NutrientAmounts } from './nutrients';
import type { UnitSystem } from './onboarding';

/**
 * Alcoholic drinks (v2.4). Alcohol comes from the volume and strength; carbs and sugars per 100 ml
 * come from the USDA FNDDS foods EatME already loads (codes below). The server works the numbers
 * out; it never takes them from the phone. No judgment and no tips: just the numbers.
 */

export const DRINK_TYPES = [
  'beer',
  'light_beer',
  'red_wine',
  'white_wine',
  'rose_wine',
  'sparkling_wine',
  'spirit',
  'cocktail',
  'hard_seltzer',
  'cider',
] as const;
export type DrinkType = (typeof DRINK_TYPES)[number];

export const SIZES = ['can', 'pint', 'glass', 'shot'] as const;
export type DrinkSize = (typeof SIZES)[number];
/** The sizes in US ounces or millilitres, following the unit setting (the same drink either way). */
export const SIZE_ML: Record<DrinkSize, { ml: number; metricMl: number; label: string; metricLabel: string }> = {
  can: { ml: 355, metricMl: 355, label: 'Can · 12 oz', metricLabel: 'Can · 355 ml' },
  pint: { ml: 473, metricMl: 473, label: 'Pint · 16 oz', metricLabel: 'Pint · 473 ml' },
  glass: { ml: 148, metricMl: 150, label: 'Glass · 5 oz', metricLabel: 'Glass · 150 ml' },
  shot: { ml: 44, metricMl: 44, label: 'Shot · 1.5 oz', metricLabel: 'Shot · 44 ml' },
};

/** Millilitres in a US fluid ounce. */
export const ML_PER_FL_OZ = 29.5735;

/**
 * Carbs and sugars per 100 ml: the values of the USDA FNDDS food with that `code` in the foods
 * table EatME loads (a server test checks they still match). Default strength and size.
 */
export const DRINKS: Record<DrinkType, { title: string; abv: number; size: DrinkSize; carbs: number; sugars: number; code: string }> = {
  beer: { title: 'Beer', abv: 5, size: 'can', carbs: 3.55, sugars: 0, code: '93101000' }, // Beer
  light_beer: { title: 'Light beer', abv: 4.2, size: 'can', carbs: 1.64, sugars: 0.09, code: '93102000' }, // Beer, light
  red_wine: { title: 'Red wine', abv: 13.5, size: 'glass', carbs: 2.61, sugars: 0.62, code: '93401010' }, // Wine, red
  white_wine: { title: 'White wine', abv: 12, size: 'glass', carbs: 2.6, sugars: 0.96, code: '93401020' }, // Wine, white
  rose_wine: { title: 'Rosé', abv: 12, size: 'glass', carbs: 3.8, sugars: 3.8, code: '93401030' }, // Wine, rose
  sparkling_wine: { title: 'Sparkling wine', abv: 12, size: 'glass', carbs: 2.31, sugars: 1, code: '93401005' }, // Wine, sparkling
  spirit: { title: 'Spirit', abv: 40, size: 'shot', carbs: 0, sugars: 0, code: '93503000' }, // Gin (and vodka, rum, whiskey)
  cocktail: { title: 'Cocktail', abv: 40, size: 'shot', carbs: 0, sugars: 0, code: '93503000' }, // spirit shots plus a mixer
  hard_seltzer: { title: 'Hard seltzer', abv: 5, size: 'can', carbs: 0.55, sugars: 0, code: '93106600' }, // Hard seltzer
  cider: { title: 'Cider', abv: 5, size: 'can', carbs: 5.92, sugars: 5.92, code: '93106500' }, // Hard cider
};

export const MIXERS = ['none', 'soda_water', 'tonic', 'cola', 'juice', 'syrup'] as const;
export type Mixer = (typeof MIXERS)[number];
/** A cocktail's mixer: carbs and sugars per 100 ml (FNDDS) and the usual amount. */
export const MIXER_INFO: Record<Mixer, { title: string; ml: number; carbs: number; sugars: number; code: string | null }> = {
  none: { title: 'None', ml: 0, carbs: 0, sugars: 0, code: null },
  soda_water: { title: 'Soda water', ml: 150, carbs: 0, sugars: 0, code: '92410210' }, // Water, carbonated, plain
  tonic: { title: 'Tonic', ml: 150, carbs: 8.8, sugars: 8.8, code: '92410110' }, // Water, tonic
  cola: { title: 'Cola', ml: 150, carbs: 10.36, sugars: 9.94, code: '92410310' }, // Soft drink, cola
  juice: { title: 'Juice', ml: 120, carbs: 10.17, sugars: 8.18, code: '61210000' }, // Orange juice, 100%
  syrup: { title: 'Syrup', ml: 15, carbs: 45.58, sugars: 45.68, code: '91301100' }, // Simple syrup
};

/** Grams of alcohol in a US standard drink. */
export const STANDARD_DRINK_G = 14;
/** Density of alcohol (g/ml). */
const ETHANOL_G_PER_ML = 0.789;

export const DRINK_LIMITS = { volumeMl: { min: 10, max: 2000 }, abv: { min: 0, max: 80 }, count: { min: 0.5, max: 12 }, shots: { min: 1, max: 3 } } as const;

/** `POST /api/meals` `{ drink }`: what was drunk. The server works out every number. */
export const drinkSchema = z
  .object({
    type: z.enum(DRINK_TYPES),
    /** One drink's volume (ml): the size picked, or one shot for a cocktail's spirit. */
    volumeMl: z.number().min(DRINK_LIMITS.volumeMl.min).max(DRINK_LIMITS.volumeMl.max),
    abv: z.number().min(DRINK_LIMITS.abv.min).max(DRINK_LIMITS.abv.max),
    count: z.number().min(DRINK_LIMITS.count.min).max(DRINK_LIMITS.count.max).multipleOf(0.5),
    /** Cocktails: shots of spirit in each, and the mixer. */
    shots: z.number().int().min(DRINK_LIMITS.shots.min).max(DRINK_LIMITS.shots.max).optional(),
    mixer: z.enum(MIXERS).optional(),
    /** An earlier day (logged at noon). */
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  })
  .strict();
export type DrinkBody = z.infer<typeof drinkSchema>;
export const drinkMealSchema = z.object({ drink: drinkSchema }).strict();

/** What is stored on the meal's item (`meal_items.drink`). */
export type DrinkRef = { type: DrinkType; volumeMl: number; abv: number; count: number; shots?: number; mixer?: Mixer };

export type DrinkNumbers = {
  /** Everything drunk, in ml (spirit and mixer). */
  totalMl: number;
  alcoholG: number;
  carbsG: number;
  sugarsG: number;
  calories: number;
  standardDrinks: number;
};

/**
 * Alcohol (g) = ml × ABV ÷ 100 × 0.789; calories = alcohol × 7 + carbs × 4. A cocktail is its shots
 * of spirit plus the mixer's usual amount.
 */
export function drinkNumbers(drink: Pick<DrinkRef, 'type' | 'volumeMl' | 'abv' | 'count' | 'shots' | 'mixer'>): DrinkNumbers {
  const info = DRINKS[drink.type];
  const cocktail = drink.type === 'cocktail';
  const spiritMl = cocktail ? drink.volumeMl * (drink.shots ?? 1) : drink.volumeMl;
  const mixer = cocktail ? MIXER_INFO[drink.mixer ?? 'none'] : MIXER_INFO.none;
  const perDrink = {
    ml: spiritMl + mixer.ml,
    alcohol: (spiritMl * drink.abv * ETHANOL_G_PER_ML) / 100,
    carbs: (spiritMl * info.carbs + mixer.ml * mixer.carbs) / 100,
    sugars: (spiritMl * info.sugars + mixer.ml * mixer.sugars) / 100,
  };
  const alcoholG = perDrink.alcohol * drink.count;
  const carbsG = perDrink.carbs * drink.count;
  return {
    totalMl: Math.round(perDrink.ml * drink.count),
    alcoholG: Math.round(alcoholG * 10) / 10,
    carbsG: Math.round(carbsG * 10) / 10,
    sugarsG: Math.round(perDrink.sugars * drink.count * 10) / 10,
    calories: Math.round(alcoholG * 7 + carbsG * 4),
    standardDrinks: Math.round((alcoholG / STANDARD_DRINK_G) * 10) / 10,
  };
}

/** The item's nutrients (for the meal's totals and Health). */
export function drinkNutrients(numbers: DrinkNumbers): NutrientAmounts {
  return { calories: numbers.calories, carbs: numbers.carbsG, sugars: numbers.sugarsG, alcohol: numbers.alcoholG, protein: 0, fat: 0, fiber: 0 };
}

/** "Beer", "Cocktail (2 shots, tonic)": one drink, without the count. */
export function drinkTitle(drink: Pick<DrinkRef, 'type' | 'shots' | 'mixer'>) {
  if (drink.type !== 'cocktail') return DRINKS[drink.type].title;
  const shots = drink.shots ?? 1;
  const mixer = drink.mixer && drink.mixer !== 'none' ? `, ${MIXER_INFO[drink.mixer].title.toLowerCase()}` : '';
  return `Cocktail (${shots} ${shots === 1 ? 'shot' : 'shots'}${mixer})`;
}

/** "1", "1.5", "2": a count of drinks. */
export const countText = (count: number) => (count % 1 === 0 ? String(count) : String(Math.round(count * 100) / 100));

/** "Beer", "2 × Beer", "Cocktail (2 shots, tonic)". */
export function drinkName(drink: Pick<DrinkRef, 'type' | 'count' | 'shots' | 'mixer'>) {
  return `${drink.count === 1 ? '' : `${countText(drink.count)} × `}${drinkTitle(drink)}`;
}

/** One drink's volume in the person's unit: "12 oz", "355 ml". */
export function volumeText(ml: number, unit: UnitSystem) {
  if (unit === 'metric') return `${Math.round(ml)} ml`;
  const oz = Math.round((ml / ML_PER_FL_OZ) * 10) / 10;
  return `${oz % 1 === 0 ? oz.toFixed(0) : oz} oz`;
}

/** "1.2 standard drinks", "1 standard drink". */
export const standardDrinksText = (value: number) => `${countText(value)} standard ${value === 1 ? 'drink' : 'drinks'}`;

/** The size in the person's units: US sizes for imperial, metric ones otherwise. */
export const sizeMl = (size: DrinkSize, unit: UnitSystem) => (unit === 'imperial' ? SIZE_ML[size].ml : SIZE_ML[size].metricMl);
export const sizeLabel = (size: DrinkSize, unit: UnitSystem) => (unit === 'imperial' ? SIZE_ML[size].label : SIZE_ML[size].metricLabel);

/** Standard drinks from grams of alcohol, e.g. for the day's nutrients. */
export const standardDrinks = (alcoholG: number) => Math.round((alcoholG / STANDARD_DRINK_G) * 10) / 10;
