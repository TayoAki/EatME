/**
 * The research, guidelines and databases behind every number Weight Class works out, shown on the
 * Sources screen (`/sources`) and linked from each screen that shows those numbers (Apple 1.4.1:
 * "citations, such as links to sources", easy to find). Journal articles link to PubMed. Keep the
 * methods in step with the code they describe (named in each comment) and with
 * `legal/support.html#sources`; every link was opened on 21 October 2026.
 */

export type Citation = { title: string; by: string; url: string };

const MIFFLIN: Citation = {
  title: 'A new predictive equation for resting energy expenditure in healthy individuals',
  by: 'Mifflin et al., American Journal of Clinical Nutrition, 1990',
  url: 'https://pubmed.ncbi.nlm.nih.gov/2305711/',
};
const FRANKENFIELD: Citation = {
  title: 'Comparison of predictive equations for resting metabolic rate in healthy nonobese and obese adults: a systematic review',
  by: 'Frankenfield et al., Journal of the American Dietetic Association, 2005',
  url: 'https://pubmed.ncbi.nlm.nih.gov/15883556/',
};
const FAO_ENERGY: Citation = {
  title: 'Human energy requirements',
  by: 'FAO, WHO and UNU expert consultation, 2004',
  url: 'https://www.fao.org/4/y5686e/y5686e00.htm',
};
const WISHNOFSKY: Citation = {
  title: 'Caloric equivalents of gained or lost weight',
  by: 'Wishnofsky, American Journal of Clinical Nutrition, 1958',
  url: 'https://pubmed.ncbi.nlm.nih.gov/13594881/',
};
const HALL: Citation = {
  title: 'Quantification of the effect of energy imbalance on bodyweight',
  by: 'Hall et al., The Lancet, 2011',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/',
};
const OBESITY_GUIDELINE: Citation = {
  title: '2013 AHA/ACC/TOS guideline for the management of overweight and obesity in adults',
  by: 'Jensen et al., Circulation, 2014',
  url: 'https://pubmed.ncbi.nlm.nih.gov/24222017/',
};
const WHO_BMI: Citation = {
  title: 'Body mass index (BMI)',
  by: 'World Health Organization',
  url: 'https://www.who.int/data/gho/data/themes/topics/topic-details/GHO/body-mass-index',
};
const ISSN_PROTEIN: Citation = {
  title: 'International Society of Sports Nutrition position stand: protein and exercise',
  by: 'Jäger et al., Journal of the International Society of Sports Nutrition, 2017',
  url: 'https://pubmed.ncbi.nlm.nih.gov/28642676/',
};
const DRI_MACROS: Citation = {
  title: 'Dietary Reference Intakes for energy, carbohydrate, fiber, fat, fatty acids, cholesterol, protein, and amino acids',
  by: 'National Academies of Sciences, Engineering, and Medicine, 2005',
  url: 'https://nap.nationalacademies.org/catalog/10490',
};
const DRI_WATER: Citation = {
  title: 'Dietary Reference Intakes for water, potassium, sodium, chloride, and sulfate',
  by: 'National Academies of Sciences, Engineering, and Medicine, 2005',
  url: 'https://www.nationalacademies.org/projects/HMD-FNB-19-P-139/publication/10925',
};
const DRI_GUIDE: Citation = {
  title: 'Dietary Reference Intakes: the essential guide to nutrient requirements',
  by: 'National Academies of Sciences, Engineering, and Medicine, 2006',
  url: 'https://nap.nationalacademies.org/catalog/11537',
};
const DRI_TABLES: Citation = {
  title: 'Dietary Reference Intakes calculator and tables',
  by: 'USDA National Agricultural Library',
  url: 'https://www.nal.usda.gov/human-nutrition-and-food-safety/dri-calculator',
};
const DIETARY_GUIDELINES: Citation = {
  title: 'Dietary Guidelines for Americans, 2020–2025',
  by: 'US Department of Agriculture and Department of Health and Human Services',
  url: 'https://www.dietaryguidelines.gov/sites/default/files/2020-12/Dietary_Guidelines_for_Americans_2020-2025.pdf',
};
const FAO_CONVERSION: Citation = {
  title: 'Food energy: methods of analysis and conversion factors',
  by: 'Food and Agriculture Organization of the United Nations, 2003',
  url: 'https://www.fao.org/4/y5022e/y5022e00.htm',
};
const FOODDATA_CENTRAL: Citation = {
  title: 'FoodData Central',
  by: 'US Department of Agriculture, Agricultural Research Service',
  url: 'https://fdc.nal.usda.gov/',
};
const FNDDS: Citation = {
  title: 'Food and Nutrient Database for Dietary Studies (FNDDS)',
  by: 'US Department of Agriculture, Food Surveys Research Group',
  url: 'https://www.ars.usda.gov/northeast-area/beltsville-md-bhnrc/beltsville-human-nutrition-research-center/food-surveys-research-group/docs/fndds/',
};
const OPEN_FOOD_FACTS: Citation = {
  title: 'Open Food Facts',
  by: 'Open Food Facts, the open database of packaged foods',
  url: 'https://world.openfoodfacts.org/',
};
const JUICE_STUDY: Citation = {
  title: 'The role of dietary fiber in satiety, glucose, and insulin: studies with fruit and fruit juice',
  by: 'Bolton et al., American Journal of Clinical Nutrition, 1981',
  url: 'https://pubmed.ncbi.nlm.nih.gov/6259919/',
};
const FOOD_ORDER_STUDY: Citation = {
  title: 'Food order has a significant impact on postprandial glucose and insulin levels',
  by: 'Shukla et al., Diabetes Care, 2015',
  url: 'https://pubmed.ncbi.nlm.nih.gov/26106234/',
};
const WHO_SUGARS: Citation = {
  title: 'Guideline: sugars intake for adults and children',
  by: 'World Health Organization, 2015',
  url: 'https://www.who.int/publications/i/item/9789241549028',
};
const NOVA: Citation = {
  title: 'Ultra-processed foods: what they are and how to identify them',
  by: 'Monteiro et al., Public Health Nutrition, 2019',
  url: 'https://pubmed.ncbi.nlm.nih.gov/30744710/',
};
const SMOOTHED_TREND: Citation = {
  title: "The Hacker's Diet: exponentially smoothed moving averages",
  by: 'John Walker, Fourmilab',
  url: 'https://www.fourmilab.ch/hackdiet/www/subsubsection1_4_1_0_8_3.html',
};
const STANDARD_DRINK: Citation = {
  title: 'What is a standard drink?',
  by: 'National Institute on Alcohol Abuse and Alcoholism (NIH)',
  url: 'https://www.niaaa.nih.gov/alcohols-effects-health/what-standard-drink',
};
const ETHANOL: Citation = {
  title: 'Ethanol: density 0.789 g/mL',
  by: 'PubChem, National Library of Medicine (NIH)',
  url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Ethanol',
};
const MENU_LABELING_RULE: Citation = {
  title: 'Nutrition labeling of standard menu items in covered establishments (21 CFR 101.11)',
  by: 'U.S. Food and Drug Administration, Code of Federal Regulations',
  url: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-101/subpart-A/section-101.11',
};
const MENU_LABELING: Citation = {
  title: 'Menu labeling requirements',
  by: 'U.S. Food and Drug Administration',
  url: 'https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/menu-labeling-requirements',
};
const RESTAURANT_ACCURACY: Citation = {
  title: 'Accuracy of stated energy contents of restaurant foods',
  by: 'Urban et al., JAMA, 2011',
  url: 'https://pubmed.ncbi.nlm.nih.gov/21771989/',
};
const RESTAURANT_MEALS: Citation = {
  title:
    'Energy contents of frequently ordered restaurant meals and comparison with human energy requirements and US Department of Agriculture database information: a multisite randomized study',
  by: 'Urban et al., Journal of the Academy of Nutrition and Dietetics, 2016',
  url: 'https://pubmed.ncbi.nlm.nih.gov/26803805/',
};
const GLP1_ADVISORY: Citation = {
  title: 'Nutritional priorities to support GLP-1 therapy for obesity: a joint advisory',
  by: 'Mozaffarian et al., American Journal of Clinical Nutrition, 2025',
  url: 'https://pubmed.ncbi.nlm.nih.gov/40450457/',
};

export const SOURCE_TOPICS = [
  'calories',
  'limits',
  'macros',
  'fiber-water',
  'nutrients',
  'foods',
  'sugar',
  'quality',
  'trend',
  'checkin',
  'weekly',
  'plan-tomorrow',
  'drinks',
  'glp1',
  'restaurants',
] as const;
export type SourceTopic = (typeof SOURCE_TOPICS)[number];

export const isSourceTopic = (value: unknown): value is SourceTopic =>
  typeof value === 'string' && (SOURCE_TOPICS as readonly string[]).includes(value);

export type SourceSection = { topic: SourceTopic; title: string; method: string; citations: Citation[] };

export const SOURCES: SourceSection[] = [
  {
    // src/shared/nutrition.ts: basalMetabolicRate, ACTIVITY_MULTIPLIER, KCAL_PER_KG, sanitizePlan, goalDate
    topic: 'calories',
    title: 'Daily calories',
    method:
      "Your resting energy use comes from the Mifflin-St Jeor equation, which a systematic review found the most reliable for healthy adults. It's multiplied by an activity factor, from 1.2 if you mostly sit to 1.725 if you're very active, to estimate a day's energy use. For your weekly goal, about 7,700 kcal per kilogram (3,500 per pound) is taken away or added, spread over the week. The date shown for your goal assumes that pace holds; real weight change usually slows over time, which the weekly check-in allows for. If you allowed AI, it suggests a plan from the same answers, and Weight Class uses the formula instead whenever the AI's number is more than 35% away from it or below the limits.",
    citations: [MIFFLIN, FRANKENFIELD, FAO_ENERGY, WISHNOFSKY, HALL],
  },
  {
    // src/shared/nutrition.ts: minimumCalories, bmiFloorKg; src/shared/onboarding.ts: MAX_WEEKLY_GOAL_KG; onboarding/pace.tsx
    topic: 'limits',
    title: 'Safety limits',
    method:
      "Daily calories never go below 1,200 for women or 1,500 for men (1,350 otherwise), the lower ends of the ranges in the AHA/ACC/TOS obesity guideline. The pace marked Recommended, up to 0.7 kg (1.5 lb) a week, is close to the guideline's daily deficit of 500 to 750 kcal; the most Weight Class plans for is 1 kg (2.2 lb) a week. Weight-loss goals and milestones stay at or above a BMI of 18.5, the lower end of the healthy range.",
    citations: [OBESITY_GUIDELINE, WHO_BMI],
  },
  {
    // src/shared/nutrition.ts: PROTEIN_PER_KG, FAT_SHARE, AI_PROTEIN_PER_KG, AI_FAT_SHARE, sanitizePlan, proteinPerMeal
    topic: 'macros',
    title: 'Protein, carbs and fat',
    method:
      "The formula sets protein at 2.0 g per kilogram of body weight while losing weight, 1.6 g to maintain and 1.8 g to gain; a plan from AI is kept between 1.6 and 2.2 g. The International Society of Sports Nutrition puts most active people at 1.4 to 2.0 g a kilogram, and more (2.3 to 3.1 g per kilogram of lean mass) for strength-trained people losing weight. The protein worth aiming for at each meal is your daily goal spread over about four meals, at least 20 g. Fat is 25 to 28% of calories with the formula and 20 to 35% in a plan from AI, the range of the Dietary Reference Intakes; carbs make up the rest. Protein and carbs count 4 kcal a gram, fat 9.",
    citations: [ISSN_PROTEIN, DRI_MACROS, FAO_CONVERSION],
  },
  {
    // src/shared/nutrition.ts: recommendedFiberG, recommendedWaterMl
    topic: 'fiber-water',
    title: 'Fiber and water',
    method:
      'Fiber goals are the Adequate Intakes of the US and Canadian Dietary Reference Intakes for your age and sex, for example 38 g a day for men and 25 g for women aged 19 to 50. Water goals are about 80% of the Adequate Intake for total water, because the rest usually comes from food. Thirst is a good guide too.',
    citations: [DRI_MACROS, DRI_WATER],
  },
  {
    // src/shared/nutrients.ts: nutrientTargets, SUPPLEMENT_UPPER_LIMITS; src/app/api/nutrients+api.ts
    topic: 'nutrients',
    title: 'Vitamins and minerals',
    method:
      "Daily amounts are the Recommended Dietary Allowances or Adequate Intakes for your age and sex from the Dietary Reference Intakes. Saturated fat is kept under 10% of calories, as in the Dietary Guidelines for Americans. Supplements are compared with the adult Tolerable Upper Intake Levels. Vitamins and minerals come from foods matched in the USDA database, package labels and the supplements you log, never from an AI's guess.",
    citations: [DRI_GUIDE, DRI_TABLES, DIETARY_GUIDELINES],
  },
  {
    // src/lib/server/food-match.ts, meal-analysis.ts, products
    topic: 'foods',
    title: 'Food and drink numbers',
    method:
      "Food numbers come from the USDA Food and Nutrient Database for Dietary Studies (FNDDS 2021–2023) in FoodData Central. Packaged foods use their label data from Open Food Facts and USDA's branded foods. In a meal scan, AI names the foods and estimates the portions, and the numbers come from USDA data wherever a food matches. Every scan is an estimate you can edit.",
    citations: [FOODDATA_CENTRAL, FNDDS, OPEN_FOOD_FACTS],
  },
  {
    // src/shared/nutrition.ts: sugarNote; src/components/meal/sugar-hint.tsx
    topic: 'sugar',
    title: 'Sugar notes',
    method:
      'A food or drink gets a sugar note when it has at least 12 g of sugar making up half its calories or more, with little protein or fiber. Sugar without fiber is absorbed quickly: juice raises blood sugar faster than the whole fruit, and having carbs with or after the rest of a meal slows the rise. The WHO counts the sugars in juice as free sugars and advises keeping free sugars under 10% of calories.',
    citations: [JUICE_STUDY, FOOD_ORDER_STUDY, WHO_SUGARS],
  },
  {
    // src/shared/meals.ts: PROCESSING_LEVELS; src/components/meal/quality-tag.tsx
    topic: 'quality',
    title: 'Food-quality tag (beta)',
    method:
      "If you turn it on in Preferences, AI sorts a meal into whole foods, processed or highly processed, following the NOVA classification of how much a food is processed, and estimates its added sugar. It's a rough guide from the photo or description.",
    citations: [NOVA, WHO_SUGARS, DIETARY_GUIDELINES],
  },
  {
    // src/shared/weight.ts: weightTrend, weightMilestones
    topic: 'trend',
    title: 'Weight trend and milestones',
    method:
      "The trend is an exponentially smoothed average: each day it moves a tenth of the way toward your weigh-in, so a day of water or salt doesn't hide the direction you're heading. Milestones are steps of 5% of the way to your goal (at least 1 kg or 2.2 lb), never below a BMI of 18.5, and count only when the trend crosses them.",
    citations: [SMOOTHED_TREND, WHO_BMI],
  },
  {
    // src/shared/adaptive.ts: computeCheckIn
    topic: 'checkin',
    title: 'Weekly check-in',
    method:
      "Once a week the check-in compares what you logged over the last 2 to 4 weeks with how your weight moved (a straight line through your weigh-ins). The energy you used is estimated as your average intake minus the weight change times 7,700 kcal per kilogram; early on, the formula estimate counts more. It needs at least 10 logged days and 4 weigh-ins over 10 days. A new target moves by 150 kcal a week at most, stays within the safety limits, is never lowered while you lose more than 1 kg (2.2 lb) a week or take a GLP-1 medicine, and changes only if you choose it.",
    citations: [HALL, WISHNOFSKY, OBESITY_GUIDELINE],
  },
  {
    // src/shared/insights.ts: weeklyFocus
    topic: 'weekly',
    title: 'Weekly summary',
    method:
      "The summary averages the last 7 full days you logged and compares protein, fiber and water with your own goals. When one of them is under 80% of its goal, it suggests that one. Calories are shown but never judged.",
    citations: [ISSN_PROTEIN, DRI_MACROS, DRI_WATER],
  },
  {
    // src/shared/day-draft.ts
    topic: 'plan-tomorrow',
    title: 'Plan tomorrow',
    method:
      'Plan tomorrow picks meals you already eat, one for each part of the day, so the day lands near your calorie goal with enough protein. It uses your own goals and the numbers of your own meals, and no AI. How the goals are worked out is under Daily calories and Protein, carbs and fat on the Sources screen.',
    citations: [ISSN_PROTEIN],
  },
  {
    // src/shared/drinks.ts: drinkNumbers, STANDARD_DRINK_G
    topic: 'drinks',
    title: 'Alcoholic drinks',
    method:
      "Grams of alcohol = volume × strength (ABV) × 0.789, the density of alcohol. Alcohol counts 7 kcal a gram and carbs 4. One US standard drink is 14 g of alcohol. Carbs and sugar come from USDA's values for each drink and mixer.",
    citations: [STANDARD_DRINK, FAO_CONVERSION, ETHANOL, FOODDATA_CENTRAL],
  },
  {
    // src/shared/glp1.ts; src/app/(app)/glp1.tsx
    topic: 'glp1',
    title: 'GLP-1 mode',
    method:
      "GLP-1 mode puts protein, fiber and water first, following the joint advisory on nutrition for people taking GLP-1 medicines. Weight Class logs your medicine, doses and how you feel; it never gives dosing advice. Ask your prescriber about your dose and any side effects.",
    citations: [GLP1_ADVISORY],
  },
  {
    // What to order (v2.5): src/shared/menu-fit.ts (the ranking), src/lib/server/menus.ts and menu-analysis.ts
    topic: 'restaurants',
    title: 'Restaurant menus',
    method:
      "For the chains in Weight Class, the numbers are each chain's own nutrition information, which US chains with 20 or more locations must publish. Two separate readings of the chain's guide must agree before an item is added, and a person checks the rest; each item shows the day it was checked and is checked again every six months. For any other menu, AI names the foods in each dish and estimates restaurant-size portions, the numbers come from the USDA food database, and they show as a range: restaurant meals often hold more than database portions. The ranking is Weight Class's own code, not AI. It divides what's left today by the main meals still to come (never planning below the calorie floor, and no more than 40% of the day for one meal) and puts the dishes closest to that aim first; with two as close, the one with more protein comes first (protein leads in GLP-1 mode). An estimate counts at the top of its range, a dish must leave at least 200 kcal for each meal still to come, the lightest dish never wins for being small, sides, drinks and sharing sizes are listed but not ranked, and nothing is ranked once the day's budget is spent.",
    citations: [MENU_LABELING_RULE, MENU_LABELING, RESTAURANT_ACCURACY, RESTAURANT_MEALS, FOODDATA_CENTRAL],
  },
];
