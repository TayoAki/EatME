import type { Gender } from './onboarding';

/**
 * Nutrients EatME keeps from the USDA FNDDS database (per 100 g in the foods table, totals on
 * meals). `nbr` is the FoodData Central nutrient number. Vitamins and minerals only ever come from
 * foods matched in the database — never from the AI's guess (studies show large errors there).
 */
export const NUTRIENTS = [
  { key: 'calories', nbr: 208, label: 'Calories', unit: 'kcal', group: 'energy' },
  { key: 'protein', nbr: 203, label: 'Protein', unit: 'g', group: 'macro' },
  { key: 'carbs', nbr: 205, label: 'Carbs', unit: 'g', group: 'macro' },
  { key: 'fat', nbr: 204, label: 'Fat', unit: 'g', group: 'macro' },
  { key: 'fiber', nbr: 291, label: 'Fiber', unit: 'g', group: 'macro' },
  { key: 'sugars', nbr: 269, label: 'Sugars', unit: 'g', group: 'macro' },
  { key: 'saturatedFat', nbr: 606, label: 'Saturated fat', unit: 'g', group: 'macro' },
  { key: 'monoFat', nbr: 645, label: 'Monounsaturated fat', unit: 'g', group: 'macro' },
  { key: 'polyFat', nbr: 646, label: 'Polyunsaturated fat', unit: 'g', group: 'macro' },
  { key: 'cholesterol', nbr: 601, label: 'Cholesterol', unit: 'mg', group: 'macro' },
  { key: 'sodium', nbr: 307, label: 'Sodium', unit: 'mg', group: 'mineral' },
  { key: 'potassium', nbr: 306, label: 'Potassium', unit: 'mg', group: 'mineral' },
  { key: 'calcium', nbr: 301, label: 'Calcium', unit: 'mg', group: 'mineral' },
  { key: 'iron', nbr: 303, label: 'Iron', unit: 'mg', group: 'mineral' },
  { key: 'magnesium', nbr: 304, label: 'Magnesium', unit: 'mg', group: 'mineral' },
  { key: 'phosphorus', nbr: 305, label: 'Phosphorus', unit: 'mg', group: 'mineral' },
  { key: 'zinc', nbr: 309, label: 'Zinc', unit: 'mg', group: 'mineral' },
  { key: 'copper', nbr: 312, label: 'Copper', unit: 'mg', group: 'mineral' },
  { key: 'selenium', nbr: 317, label: 'Selenium', unit: 'µg', group: 'mineral' },
  { key: 'vitaminA', nbr: 320, label: 'Vitamin A', unit: 'µg', group: 'vitamin' },
  { key: 'vitaminC', nbr: 401, label: 'Vitamin C', unit: 'mg', group: 'vitamin' },
  { key: 'vitaminD', nbr: 328, label: 'Vitamin D', unit: 'µg', group: 'vitamin' },
  { key: 'vitaminE', nbr: 323, label: 'Vitamin E', unit: 'mg', group: 'vitamin' },
  { key: 'vitaminK', nbr: 430, label: 'Vitamin K', unit: 'µg', group: 'vitamin' },
  { key: 'thiamin', nbr: 404, label: 'Thiamin (B1)', unit: 'mg', group: 'vitamin' },
  { key: 'riboflavin', nbr: 405, label: 'Riboflavin (B2)', unit: 'mg', group: 'vitamin' },
  { key: 'niacin', nbr: 406, label: 'Niacin (B3)', unit: 'mg', group: 'vitamin' },
  { key: 'vitaminB6', nbr: 415, label: 'Vitamin B6', unit: 'mg', group: 'vitamin' },
  { key: 'folate', nbr: 435, label: 'Folate', unit: 'µg', group: 'vitamin' },
  { key: 'vitaminB12', nbr: 418, label: 'Vitamin B12', unit: 'µg', group: 'vitamin' },
  { key: 'choline', nbr: 421, label: 'Choline', unit: 'mg', group: 'vitamin' },
  { key: 'caffeine', nbr: 262, label: 'Caffeine', unit: 'mg', group: 'other' },
  { key: 'alcohol', nbr: 221, label: 'Alcohol', unit: 'g', group: 'other' },
] as const;

export type NutrientKey = (typeof NUTRIENTS)[number]['key'];
/** Amounts by nutrient key; a missing key means "not known". */
export type NutrientAmounts = Partial<Record<NutrientKey, number>>;

export const NUTRIENT_KEYS = NUTRIENTS.map((n) => n.key) as NutrientKey[];

export type NutrientInfo = (typeof NUTRIENTS)[number];
/** Label, unit and group of each nutrient by key. */
export const NUTRIENT_INFO = Object.fromEntries(NUTRIENTS.map((n) => [n.key, n])) as unknown as Record<NutrientKey, NutrientInfo>;

/** `amounts` × `factor`, rounded to 2 decimals (e.g. per 100 g × grams / 100). */
export function scaleNutrients(amounts: NutrientAmounts, factor: number): NutrientAmounts {
  const out: NutrientAmounts = {};
  for (const [key, value] of Object.entries(amounts) as [NutrientKey, number][]) {
    out[key] = Math.round(value * factor * 100) / 100;
  }
  return out;
}

/** Sum of several nutrient lists (a nutrient missing everywhere stays missing). */
export function addNutrients(list: readonly NutrientAmounts[]): NutrientAmounts {
  const out: NutrientAmounts = {};
  for (const amounts of list) {
    for (const [key, value] of Object.entries(amounts) as [NutrientKey, number][]) {
      out[key] = Math.round(((out[key] ?? 0) + value) * 100) / 100;
    }
  }
  return out;
}

export type NutrientTarget = {
  key: NutrientKey;
  /** Aim for at least this much a day (RDA or adequate intake)… */
  goal?: number;
  /** …or stay under this much (sodium, saturated fat, caffeine). */
  limit?: number;
};

type Sex = 'female' | 'male';
const pick = (gender: Gender | null | undefined, female: number, male: number) => {
  const sex: Sex | null = gender === 'female' ? 'female' : gender === 'male' ? 'male' : null;
  return sex === 'female' ? female : sex === 'male' ? male : Math.round(((female + male) / 2) * 10) / 10;
};

/**
 * Daily targets from the US/Canadian Dietary Reference Intakes (National Academies), by sex and
 * age. "Other" gets the midpoint. Saturated fat uses the 10%-of-calories guideline.
 */
export function nutrientTargets(gender: Gender | null | undefined, age: number, calories: number): NutrientTarget[] {
  const teen = age < 19;
  const older = age >= 51;
  const oldest = age >= 71;
  const t = (female: number, male: number) => pick(gender, female, male);
  return [
    { key: 'sodium', limit: 2300 },
    { key: 'saturatedFat', limit: Math.round((calories * 0.1) / 9) },
    { key: 'potassium', goal: teen ? t(2300, 3000) : t(2600, 3400) },
    { key: 'calcium', goal: teen ? 1300 : oldest ? 1200 : older ? t(1200, 1000) : 1000 },
    { key: 'iron', goal: teen ? t(15, 11) : older ? 8 : t(18, 8) },
    { key: 'magnesium', goal: teen ? t(360, 410) : age < 31 ? t(310, 400) : t(320, 420) },
    { key: 'phosphorus', goal: teen ? 1250 : 700 },
    { key: 'zinc', goal: teen ? t(9, 11) : t(8, 11) },
    { key: 'copper', goal: teen ? 0.89 : 0.9 },
    { key: 'selenium', goal: 55 },
    { key: 'vitaminA', goal: t(700, 900) },
    { key: 'vitaminC', goal: teen ? t(65, 75) : t(75, 90) },
    { key: 'vitaminD', goal: oldest ? 20 : 15 },
    { key: 'vitaminE', goal: 15 },
    { key: 'vitaminK', goal: teen ? 75 : t(90, 120) },
    { key: 'thiamin', goal: teen ? t(1.0, 1.2) : t(1.1, 1.2) },
    { key: 'riboflavin', goal: teen ? t(1.0, 1.3) : t(1.1, 1.3) },
    { key: 'niacin', goal: t(14, 16) },
    { key: 'vitaminB6', goal: teen ? t(1.2, 1.3) : older ? t(1.5, 1.7) : 1.3 },
    { key: 'folate', goal: 400 },
    { key: 'vitaminB12', goal: 2.4 },
    { key: 'choline', goal: teen ? t(400, 550) : t(425, 550) },
    { key: 'caffeine', limit: 400 },
  ];
}

/** `GET /api/nutrients?date=`: the day's vitamins and minerals against the targets. */
export type NutrientDay = {
  date: string;
  /** Totals from the meals' database foods (AI estimates add no vitamins or minerals). */
  totals: NutrientAmounts;
  /** Calories logged that day, and how many of them come from database foods. */
  calories: number;
  coveredCalories: number;
  meals: number;
  /** From the supplements ticked as taken that day, and their names. */
  supplements: NutrientAmounts;
  supplementNames: string[];
  /** Nutrients where the supplements alone go above the adult upper limit. */
  overLimit: NutrientKey[];
  targets: NutrientTarget[];
};

/**
 * Tolerable upper intake levels for adults (US/Canadian DRIs) that supplements can reach on their
 * own. Vitamin A counts preformed vitamin A, magnesium and folate count supplements only.
 */
export const SUPPLEMENT_UPPER_LIMITS: Partial<Record<NutrientKey, number>> = {
  vitaminA: 3000,
  vitaminC: 2000,
  vitaminD: 100,
  vitaminE: 1000,
  vitaminB6: 100,
  niacin: 35,
  folate: 1000,
  calcium: 2500,
  iron: 45,
  magnesium: 350,
  zinc: 40,
  selenium: 400,
  copper: 10,
  phosphorus: 4000,
  choline: 3500,
  caffeine: 400,
};

/** Nutrients whose supplement amount is above the adult upper limit on its own. */
export function overUpperLimits(amounts: NutrientAmounts): NutrientKey[] {
  return (Object.entries(amounts) as [NutrientKey, number][])
    .filter(([key, value]) => SUPPLEMENT_UPPER_LIMITS[key] !== undefined && value > (SUPPLEMENT_UPPER_LIMITS[key] ?? Infinity))
    .map(([key]) => key);
}
