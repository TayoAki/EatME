# The Cheesecake Factory: lines for a person

Guide: https://www.thecheesecakefactory.com/assets/pdf/Nutritional_Guide.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (152)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/the-cheesecake-factory.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| SkinnyLicious\circledR Sangria | 1 serving | only in draft A | 130 / 0 / 0 / 0 / 0 / 10 / 19 / 1 / 17 / 0 | not found | A: name not in the guide text |
| Lava Flow Punch | 1 serving | both read numbers that can't be right: fiber 3 g above carbs 0 g | 250 / 6 / 1 / 0 / 5 / 1000 / 0 / 3 / 0 / 1 | 250 / 6 / 1 / 0 / 5 / 1000 / 0 / 3 / 0 / 1 | A: numbers found after the name (line 64); check the size; B: numbers found after the name (line 64); check the size |
| The Well-Mannered Dirty Martini | 1 serving | both read numbers that can't be right: fiber 3 g above carbs 0 g | 250 / 6 / 1 / 0 / 5 / 1000 / 0 / 3 / 0 / 1 | 250 / 6 / 1 / 0 / 5 / 1000 / 0 / 3 / 0 / 1 | A: numbers found after the name (line 68); check the size; B: numbers found after the name (line 68); check the size |
| The Well-Mannered Dirty Martini (UT) | 1 serving | both read numbers that can't be right: fiber 3 g above carbs 0 g | 140 / 5 / 1 / 0 / 5 / 830 / 0 / 3 / 0 / 1 | 140 / 5 / 1 / 0 / 5 / 830 / 0 / 3 / 0 / 1 | A: numbers found after the name (line 69); check the size; B: numbers found after the name (line 69); check the size |
| Cherry-Licious Soda | 1 serving | both read numbers that can't be right: sugars 53 g above carbs 36 g | 380 / 15 / 10 / 0.5 / 55 / 15 / 36 / 0 / 53 / 1 | 380 / 15 / 10 / 0.5 / 55 / 15 / 36 / 0 / 53 / 1 | A: numbers found after the name (line 98); check the size; B: numbers found after the name (line 98); check the size |
| The Old Fashioned | 1 serving | both read numbers that can't be right: sugars 18 g above carbs 10 g | 280 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 18 / 0 | 280 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 18 / 0 | A: numbers found after the name (line 137); check the size; B: numbers found after the name (line 137); check the size |
| The Old Fashioned (UT) | 1 serving | both read numbers that can't be right: sugars 13 g above carbs 10 g | 230 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 13 / 0 | 230 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 13 / 0 | A: numbers found after the name (line 138); check the size; B: numbers found after the name (line 138); check the size |
| Grilled Salmon | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 940 / 64 / 19 / 0.5 / 160 / 1330 / 42 / 6 / 4 / 47 | 220 / 12 / 2 / 0 / 65 / 105 / 2 / 0 / 0 / 26 | A: numbers found after the name (line 347); check the size; B: numbers found after the name (line 272); check the size |
| French Fries | 1 serving | differ: calories, fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1060 / 46 / 8 / 0 / 0 / 2500 / 152 / 10 / 25 / 11 | 530 / 23 / 4 / 0 / 0 / 1250 / 76 / 5 / 13 / 6 | A: numbers found after the name (line 441); check the size; B: numbers found after the name (line 233); check the size |
| Sweet Potato Fries | 1 serving | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1010 / 52 / 9 / 0 / 10 / 1800 / 125 / 14 / 58 / 7 | 510 / 20 / 3.5 / 0 / 0 / 1150 / 78 / 11 / 38 / 4 | A: numbers found after the name (line 443); check the size; B: numbers found after the name (line 235); check the size |
| Avocado | 1 serving | differ: calories, fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, protein_g | 40 / 3.5 / 0 / 0 / 0 / 1 / 2 / 2 / 0 / 0 | 160 / 14 / 2 / 0 / 0 / 5 / 8 / 6 / 0 / 2 | A: numbers found after the name (line 473); check the size; B: numbers found after the name (line 269); check the size |
| Tossed Green Salad with Blue Cheese Dressing | 1 serving | differ: calories, fat_g, saturated_fat_g, sodium_mg, carbs_g, sugars_g, protein_g | 370 / 31 / 11 / 0 / 50 / 690 / 13 / 4 / 7 / 9 | 530 / 42 / 13 / 0 / 50 / 900 / 25 / 4 / 8 / 12 | A: numbers found after the name (line 777); check the size; B: numbers found after the name (line 251); check the size |
| Tossed Green Salad with Ranch Dressing | 1 serving | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, protein_g | 450 / 41 / 8 / 0 / 25 / 630 / 15 / 3 / 10 / 3 | 610 / 51 / 10 / 0 / 30 / 840 / 26 / 4 / 10 / 6 | A: numbers found after the name (line 779); check the size; B: numbers found after the name (line 253); check the size |
| Tossed Green Salad with Thousand Island Dressing | 1 serving | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 470 / 41 / 8 / 0 / 25 / 690 / 19 / 3 / 14 / 3 | 630 / 52 / 10 / 0 / 30 / 900 / 31 / 4 / 15 / 6 | A: numbers found after the name (line 780); check the size; B: numbers found after the name (line 254); check the size |
| Caesar Salad | 1 serving | differ: calories, fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, protein_g | 720 / 66 / 14 / 0 / 50 / 930 / 19 / 7 / 9 / 12 | 860 / 75 / 16 / 0 / 50 / 1100 / 30 / 8 / 9 / 15 | A: numbers found after the name (line 781); check the size; B: numbers found after the name (line 255); check the size |
| Caesar Salad with Chicken | 1 serving | differ: calories, fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, protein_g | 950 / 71 / 15 / 0 / 175 / 1470 / 19 / 7 / 9 / 56 | 1090 / 81 / 17 / 0 / 175 / 1640 / 30 / 8 / 9 / 59 | A: numbers found after the name (line 782); check the size; B: numbers found after the name (line 256); check the size |
| Factory Chopped Salad | 1 serving | differ: calories, fat_g, saturated_fat_g, sodium_mg, sugars_g | 870 / 67 / 13 / 0.5 / 85 / 1470 / 34 / 10 / 18 / 34 | 780 / 59 / 11 / 0.5 / 85 / 1360 / 34 / 10 / 17 / 34 | A: numbers found after the name (line 783); check the size; B: numbers found after the name (line 257); check the size |
| Green Salad | 1 serving | differ: calories, fat_g, saturated_fat_g, sodium_mg, sugars_g | 160 / 16 / 1.5 / 0 / 0 / 170 / 5 / 1 / 3 / 1 | 130 / 12 / 1 / 0 / 0 / 125 / 5 / 1 / 2 / 1 | A: numbers found after the name (line 807); check the size; B: numbers found after the name (line 234); check the size |
| Double Smash Cheeseburger | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, fiber_g, sugars_g, protein_g | 980 / 56 / 24 / 2.5 / 180 / 3090 / 72 / 6 / 28 / 50 | 1140 / 70 / 31 / 3 / 230 / 3180 / 72 / 3 / 26 / 54 | A: numbers found after the name (line 809); check the size; B: numbers found after the name (line 237); check the size |
| Old Fashioned Burger | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, fiber_g, sugars_g, protein_g | 840 / 46 / 15 / 2 / 140 / 1790 / 64 / 6 / 21 / 43 | 990 / 60 / 22 / 2.5 / 195 / 1880 / 64 / 3 / 19 / 46 | A: numbers found after the name (line 810); check the size; B: numbers found after the name (line 236); check the size |
| Bistro Burger | 1 serving | differ: calories, fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1250 / 78 / 25 / 2.5 / 165 / 2790 / 89 / 7 / 42 / 49 | 1330 / 74 / 25 / 2.5 / 165 / 3190 / 106 / 4 / 36 / 55 | A: numbers found after the name (line 811); check the size; B: numbers found after the name (line 238); check the size |
| Americana Cheeseburger | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1230 / 76 / 29 / 2.5 / 205 / 3330 / 83 / 8 / 31 / 56 | 1390 / 90 / 37 / 3 / 255 / 3410 / 82 / 4 / 29 / 60 | A: numbers found after the name (line 813); check the size; B: numbers found after the name (line 242); check the size |
| Bacon-Bacon Cheeseburger | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1460 / 96 / 37 / 3 / 260 / 3440 / 79 / 7 / 33 / 71 | 1610 / 110 / 44 / 3.5 / 315 / 3530 / 78 / 3 / 30 / 75 | A: numbers found after the name (line 814); check the size; B: numbers found after the name (line 245); check the size |
| Factory Turkey Burger | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, fiber_g, sugars_g, protein_g | 940 / 60 / 20 / 0.5 / 200 / 2240 / 59 / 9 / 13 / 49 | 1060 / 69 / 24 / 1 / 205 / 2110 / 59 / 7 / 17 / 53 | A: numbers found after the name (line 816); check the size; B: numbers found after the name (line 246); check the size |
| Cobb Salad | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, sodium_mg, sugars_g, protein_g | 1650 / 141 / 27 / 1 / 365 / 2680 / 30 / 11 / 15 / 65 | 1480 / 124 / 24 / 1.5 / 365 / 2460 / 30 / 11 / 13 / 66 | A: numbers found after the name (line 856); check the size; B: numbers found after the name (line 266); check the size |
| Draft Beer | 1 glass | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 4 | B: numbers found after the name (line 140); check the size |
| Draft Light Beer | 1 glass | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 15 / 7 / 0 / 0 / 1 | B: numbers found after the name (line 141); check the size |
| Bottled Beer | 16 oz | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 20 / 1 / 0 / 0 / 4 | B: numbers found after the name (line 142); check the size |
| Bottled Light Beer | 12 oz | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 15 / 6 / 0 / 0 / 1 | B: numbers found after the name (line 143); check the size |
| Stella O.O Non-Alcoholic Beer | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 0 / 2 | B: numbers found after the name (line 144); check the size |
| Hazy IPA Non-Alcoholic Beer | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 16 / 0 / 0 / 1 | B: numbers found after the name (line 145); check the size |
| Sparkling Wine | 5-1/2 oz | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 1 / 4 / 0 / 2 / 0 | B: numbers found after the name (line 146); check the size |
| Sparkling Wine (UT) | 5 oz | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 1 / 4 / 0 / 2 / 0 | B: numbers found after the name (line 146); check the size |
| Sparkling Wine Bottle | 375ml | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 3 / 9 / 0 / 5 / 0 | B: numbers found after the name (line 149); check the size |
| Sparkling Wine Bottle | 750ml | only in draft B | not found | 600 / 0 / 0 / 0 / 0 / 5 / 19 / 0 / 10 / 0 | B: numbers found after the name (line 150); check the size |
| White Wine | 6-1/2 oz | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 5 / 0 / 2 / 0 | B: numbers found after the name (line 151); check the size |
| White Wine | 9 oz | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 15 / 7 / 0 / 3 / 0 | B: numbers found after the name (line 151); check the size |
| White Wine (UT) | 5 oz | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 5 / 4 / 0 / 1 / 0 | B: numbers found after the name (line 151); check the size |
| White Wine Bottle | 1 serving | only in draft B | not found | 630 / 0 / 0 / 0 / 0 / 35 / 19 / 0 / 7 / 1 | B: numbers found after the name (line 155); check the size |
| Red Wine | 6-1/2 oz | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 5 / 0 / 1 / 0 | B: numbers found after the name (line 156); check the size |
| Red Wine | 9 oz | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 10 / 7 / 0 / 2 / 0 | B: numbers found after the name (line 156); check the size |
| Red Wine (UT) | 5 oz | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 5 / 4 / 0 / 1 / 0 | B: numbers found after the name (line 156); check the size |
| Red Wine Bottle | 1 serving | only in draft B | not found | 630 / 0 / 0 / 0 / 0 / 30 / 19 / 0 / 5 / 1 | B: numbers found after the name (line 160); check the size |
| Street Corn | 1 serving | only in draft B | not found | 710 / 54 / 14 / 0.5 / 40 / 1000 / 48 / 5 / 17 / 14 | B: numbers found after the name (line 163); check the size |
| Korean Fried Cauliflower | 1 serving | only in draft B | not found | 1150 / 71 / 13 / 0 / 20 / 2570 / 113 / 7 / 44 / 11 | B: numbers found after the name (line 165); check the size |
| Fried Zucchini | 1 serving | only in draft B | not found | 1000 / 76 / 21 / 1 / 55 / 2050 / 58 / 4 / 14 / 21 | B: numbers found after the name (line 167); check the size |
| Cheeseburger Spring Rolls | 1 serving | only in draft B | not found | 980 / 69 / 27 / 2 / 170 / 1890 / 47 / 3 / 13 / 43 | B: numbers found after the name (line 170); check the size |
| Crispy Fried Cheese | 1 serving | only in draft B | not found | 1070 / 78 / 39 / 1.5 / 150 / 2320 / 49 / 3 / 4 / 45 | B: numbers found after the name (line 172); check the size |
| Mini Crabcakes (HI) | 1 serving | only in draft B | not found | 530 / 42 / 8 / 0 / 130 / 930 / 15 / 2 / 6 / 20 | B: numbers found after the name (line 174); check the size |
| Grilled Chicken Mini Tacos (MDR) | 1 serving | only in draft B | not found | 650 / 32 / 7 / 0 / 120 / 1480 / 43 / 5 / 10 / 46 | B: numbers found after the name (line 175); check the size |
| Crispy Fish Mini Tacos (MDR) | 1 serving | only in draft B | not found | 530 / 30 / 4 / 0 / 25 / 920 / 49 / 5 / 9 / 15 | B: numbers found after the name (line 176); check the size |
| Roadside Sliders | Serves 2-4 | only in draft B | not found | 800 / 35 / 13 / 2 / 135 / 1720 / 70 / 1 / 18 / 48 | B: numbers found after the name (line 178); check the size |
| Chicken Pot Stickers | Serves 2-4 | only in draft B | not found | 380 / 12 / 2.5 / 0 / 90 / 2550 / 38 / 1 / 13 / 27 | B: numbers found after the name (line 179); check the size |
| Tex Mex Eggrolls | Serves 2-4 | only in draft B | not found | 930 / 53 / 14 / 0.5 / 120 / 2030 / 72 / 10 / 12 / 43 | B: numbers found after the name (line 180); check the size |
| Quesadilla | Serves 2-4 | only in draft B | not found | 1120 / 77 / 46 / 1.5 / 170 / 2070 / 62 / 7 / 6 / 49 | B: numbers found after the name (line 181); check the size |
| Quesadilla (ABQ) | Serves 2-4 | only in draft B | not found | 1120 / 78 / 46 / 1.5 / 170 / 1950 / 61 / 7 / 5 / 49 | B: numbers found after the name (line 182); check the size |
| Quesadilla with Chicken | Serves 2-4 | only in draft B | not found | 1230 / 81 / 46 / 1.5 / 235 / 2300 / 62 / 7 / 6 / 69 | B: numbers found after the name (line 183); check the size |
| Quesadilla with Chicken (ABQ) | Serves 2-4 | only in draft B | not found | 1240 / 81 / 46 / 1.5 / 235 / 2180 / 61 / 7 / 5 / 69 | B: numbers found after the name (line 184); check the size |
| Quesadilla with Kalua Pork (HI) | Serves 2-4 | only in draft B | not found | 1340 / 90 / 50 / 1.5 / 265 / 2450 / 63 / 7 / 6 / 73 | B: numbers found after the name (line 185); check the size |
| Thai Chili Shrimp | Serves 2-4 | only in draft B | not found | 700 / 52 / 10 / 0 / 75 / 950 / 35 / 1 / 7 / 18 | B: numbers found after the name (line 186); check the size |
| Avocado Eggrolls | Serves 2-4 | only in draft B | not found | 930 / 48 / 10 / 0 / 15 / 1300 / 111 / 14 / 38 / 14 | B: numbers found after the name (line 187); check the size |
| Fried Macaroni and Cheese | Serves 2-4 | only in draft B | not found | 1310 / 96 / 47 / 2.5 / 245 / 2140 / 70 / 6 / 12 / 40 | B: numbers found after the name (line 188); check the size |
| Warm Crab Dip | Serves 2-4 | only in draft B | not found | 1220 / 92 / 34 / 1.5 / 195 / 1720 / 69 / 3 / 9 / 25 | B: numbers found after the name (line 189); check the size |
| Fried Calamari | Serves 2-4 | only in draft B | not found | 1520 / 105 / 20 / 1 / 705 / 1850 / 98 / 5 / 10 / 44 | B: numbers found after the name (line 190); check the size |
| Eggroll Sampler | Serves 2-4 | only in draft B | not found | 1320 / 76 / 21 / 1 / 135 / 2320 / 114 / 17 / 36 / 44 | B: numbers found after the name (line 191); check the size |
| Spicy Tuna* | Serves 2-4 | only in draft B | not found | 460 / 22 / 4 / 0 / 40 / 1490 / 46 / 2 / 15 / 20 | B: numbers found after the name (line 192); check the size |
| Ahi Poke Nachos* | Serves 2-4 | only in draft B | not found | 1020 / 63 / 10 / 0.5 / 55 / 1740 / 85 / 7 / 21 / 27 | B: numbers found after the name (line 193); check the size |
| Hot Spinach and Cheese Dip | Serves 2-4 | only in draft B | not found | 1730 / 126 / 57 / 2.5 / 225 / 1590 / 115 / 13 / 9 / 31 | B: numbers found after the name (line 194); check the size |
| Buffalo Blasts® | Serves 2-4 | only in draft B | not found | 1670 / 93 / 25 / 1.5 / 190 / 7080 / 129 / 10 / 11 / 78 | B: numbers found after the name (line 195); check the size |
| Thai Lettuce Wraps with Satay Chicken Strips | Serves 2-4 | only in draft B | not found | 850 / 27 / 7 / 0 / 125 / 1990 / 105 / 9 / 69 / 51 | B: numbers found after the name (line 196); check the size |
| Small Thai Lettuce Wraps with Satay Chicken Strips | 1 serving | only in draft B | not found | 500 / 16 / 4 / 0 / 60 / 1270 / 65 / 5 / 46 / 27 | B: numbers found after the name (line 197); check the size |
| Thai Lettuce Wraps with Grilled Avocado | Serves 2-4 | only in draft B | not found | 830 / 42 / 8 / 0 / 0 / 1910 / 110 / 18 / 64 / 15 | B: numbers found after the name (line 198); check the size |
| Small Thai Lettuce Wraps with Grilled Avocado | 1 serving | only in draft B | not found | 500 / 24 / 4.5 / 0 / 0 / 1230 / 68 / 10 / 43 / 8 | B: numbers found after the name (line 199); check the size |
| Pretzel Bites with Cheddar Cheese Fondue | Serves 2-4 | only in draft B | not found | 1010 / 61 / 34 / 2 / 130 / 2470 / 84 / 3 / 11 / 29 | B: numbers found after the name (line 201); check the size |
| Factory Nachos | Serves 2-4 | only in draft B | not found | 2670 / 192 / 84 / 5 / 320 / 2680 / 173 / 21 / 25 / 63 | B: numbers found after the name (line 202); check the size |
| Factory Nachos with Spicy Chicken | Serves 2-4 | only in draft B | not found | 2950 / 211 / 85 / 6 / 370 / 3350 / 180 / 22 / 29 / 83 | B: numbers found after the name (line 203); check the size |
| Factory Nachos with Kalua Pork (HI) | Serves 2-4 | only in draft B | not found | 2880 / 204 / 88 / 5 / 415 / 3070 / 174 / 21 / 25 / 88 | B: numbers found after the name (line 204); check the size |
| Buffalo Wings | Serves 2-4 | only in draft B | not found | 1120 / 69 / 18 / 0 / 515 / 5020 / 16 / 2 / 4 / 109 | B: numbers found after the name (line 205); check the size |
| Buffalo Chicken Strips | Serves 2-4 | only in draft B | not found | 1090 / 48 / 11 / 0 / 135 / 4950 / 87 / 7 / 12 / 76 | B: numbers found after the name (line 206); check the size |
| Ahi Poke (HI) | Serves 2 | only in draft B | not found | 470 / 10 / 1.5 / 0 / 95 / 3030 / 46 / 3 / 34 / 50 | B: numbers found after the name (line 207); check the size |
| Spicy Ahi Tempura Roll (HI) | Serves 2-4 | only in draft B | not found | 770 / 51 / 9 / 0.5 / 70 / 1910 / 45 / 3 / 11 / 32 | B: numbers found after the name (line 208); check the size |
| Spicy Tuna (HI) | Serves 2-4 | only in draft B | not found | 460 / 22 / 4 / 0 / 40 / 1490 / 46 / 2 / 15 / 20 | B: numbers found after the name (line 209); check the size |
| Mini Crab Cakes (HI) | Serves 2-4 | only in draft B | not found | 530 / 42 / 8 / 0 / 130 / 930 / 15 / 2 / 6 / 20 | B: numbers found after the name (line 210); check the size |
| Cup of Clam Chowder | 1 serving | only in draft B | not found | 310 / 19 / 11 / 0.5 / 70 / 990 / 24 / 2 / 2 / 11 | B: numbers found after the name (line 212); check the size |
| Cup of Cream of Chicken Soup | 1 serving | only in draft B | not found | 390 / 25 / 15 / 1 / 125 / 1030 / 25 / 3 / 10 / 17 | B: numbers found after the name (line 213); check the size |
| Cup of Mexican Chicken and Vegetable Soup | 1 serving | only in draft B | not found | 340 / 19 / 7 / 0 / 40 / 1530 / 27 / 4 / 8 / 14 | B: numbers found after the name (line 214); check the size |
| Bowl of Clam Chowder | 1 serving | only in draft B | not found | 500 / 30 / 18 / 1 / 115 / 1580 / 39 / 4 / 3 / 18 | B: numbers found after the name (line 215); check the size |
| Bowl of Cream of Chicken Soup | 1 serving | only in draft B | not found | 630 / 40 / 23 / 1.5 / 195 / 1650 / 40 / 4 / 16 / 28 | B: numbers found after the name (line 216); check the size |
| Bowl of Mexican Chicken and Vegetable Soup | 1 serving | only in draft B | not found | 680 / 39 / 15 / 0.5 / 75 / 3070 / 54 / 7 / 17 / 29 | B: numbers found after the name (line 217); check the size |
| Cheese Flatbread | 1 serving | only in draft B | not found | 1000 / 50 / 31 / 1 / 125 / 2530 / 86 / 4 / 3 / 49 | B: numbers found after the name (line 219); check the size |
| Margherita Flatbread | 1 serving | only in draft B | not found | 760 / 30 / 15 / 0 / 55 / 1770 / 85 / 4 / 4 / 34 | B: numbers found after the name (line 220); check the size |
| Fresh Basil, Tomato and Cheese | 1 serving | only in draft B | not found | 850 / 38 / 25 / 0.5 / 95 / 2300 / 84 / 4 / 3 / 42 | B: numbers found after the name (line 221); check the size |
| Pepperoni Flatbread | 1 serving | only in draft B | not found | 1170 / 66 / 34 / 1 / 165 / 3420 / 88 / 5 / 3 / 56 | B: numbers found after the name (line 222); check the size |
| Bee Sting Flatbread | 1 serving | only in draft B | not found | 1170 / 62 / 30 / 1 / 145 / 3280 / 97 / 5 / 8 / 54 | B: numbers found after the name (line 224); check the size |
| Classic Burger | 1 serving | only in draft B | not found | 1280 / 83 / 30 / 3 / 255 / 2520 / 69 / 4 / 23 / 61 | B: numbers found after the name (line 239); check the size |
| French Dip Cheeseburger | 1 serving | only in draft B | not found | 1620 / 118 / 48 / 3 / 305 / 3470 / 79 / 5 / 23 / 59 | B: numbers found after the name (line 240); check the size |
| Smokehouse B.B.Q. Burger | 1 serving | only in draft B | not found | 1580 / 97 / 39 / 3.5 / 280 / 3070 / 106 / 3 / 42 / 68 | B: numbers found after the name (line 241); check the size |
| Macaroni and Cheese Burger | 1 serving | only in draft B | not found | 1340 / 85 / 40 / 3.5 / 275 / 2430 / 81 / 4 / 20 / 60 | B: numbers found after the name (line 243); check the size |
| Green Chile Cheeseburger (ABQ) | 1 serving | only in draft B | not found | 1270 / 80 / 35 / 3.5 / 265 / 2570 / 73 / 4 / 20 / 61 | B: numbers found after the name (line 244); check the size |
| Veggie Burger | 1 serving | only in draft B | not found | 1040 / 50 / 13 / 0 / 0 / 2920 / 129 / 10 / 32 / 19 | B: numbers found after the name (line 247); check the size |
| Tossed Green Salad with Balsamic Vinaigrette | 1 serving | only in draft B | not found | 660 / 60 / 6 / 0.5 / 5 / 680 / 25 / 4 / 8 / 7 | B: numbers found after the name (line 250); check the size |
| Fried Chicken Club Salad | 1 serving | only in draft B | not found | 1530 / 119 / 27 / 1 / 320 / 2920 / 64 / 7 / 28 / 49 | B: numbers found after the name (line 258); check the size |
| Vegan Cobb Salad | 1 serving | only in draft B | not found | 1060 / 89 / 9 / 0.5 / 0 / 1310 / 55 / 19 / 18 / 16 | B: numbers found after the name (line 259); check the size |
| Chinese Chicken Salad | 1 serving | only in draft B | not found | 1630 / 102 / 14 / 1 / 80 / 2960 / 135 / 11 / 62 / 50 | B: numbers found after the name (line 260); check the size |
| Thai Chicken Salad | 1 serving | only in draft B | not found | 1210 / 63 / 10 / 0 / 155 / 2670 / 93 / 14 / 63 / 73 | B: numbers found after the name (line 261); check the size |
| Sheila's Chicken and Avocado Salad | 1 serving | only in draft B | not found | 1820 / 124 / 16 / 0.5 / 80 / 2150 / 134 / 22 / 57 / 56 | B: numbers found after the name (line 262); check the size |
| Luau Salad (HI) | 1 serving | only in draft B | not found | 1370 / 86 / 12 / 0.5 / 85 / 1930 / 110 / 11 / 58 / 45 | B: numbers found after the name (line 263); check the size |
| Barbeque Ranch Chicken Salad | 1 serving | only in draft B | not found | 1950 / 124 / 22 / 0 / 125 / 2920 / 151 / 22 / 64 / 56 | B: numbers found after the name (line 264); check the size |
| Santa Fe Salad | 1 serving | only in draft B | not found | 1670 / 112 / 25 / 1 / 135 / 2450 / 108 / 19 / 39 / 68 | B: numbers found after the name (line 265); check the size |
| Grilled Chicken | 1 serving | only in draft B | not found | 220 / 7 / 1 / 0 / 130 / 470 / 0 / 0 / 0 / 39 | B: numbers found after the name (line 270); check the size |
| Grilled Shrimp | 1 serving | only in draft B | not found | 90 / 1 / 0 / 0 / 155 / 115 / 2 / 0 / 0 / 18 | B: numbers found after the name (line 271); check the size |
| Chargilled Steak | 1 serving | only in draft B | not found | 200 / 7 / 3 / 0 / 95 / 410 / 0 / 0 / 0 / 34 | B: numbers found after the name (line 273); check the size |
| Balsamic Vinaigrette | 1 tbl | only in draft B | not found | 80 / 8 / 0.5 / 0 / 0 / 75 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 275); check the size |
| Barbeque Ranch Dressing | 1 tbl | only in draft B | not found | 80 / 7 / 1.5 / 0 / 5 / 130 / 3 / 0 / 2 / 0 | B: numbers found after the name (line 276); check the size |
| Blue Cheese Dressing | 1 tbl | only in draft B | not found | 60 / 5 / 1.5 / 0 / 10 / 110 / 1 / 0 / 1 / 1 | B: numbers found after the name (line 277); check the size |
| Caesar Dressing | 1 tbl | only in draft B | not found | 80 / 7 / 1.5 / 0 / 5 / 90 / 1 / 0 / 1 / 1 | B: numbers found after the name (line 278); check the size |
| Chinese Plum Dressing | 1 tbl | only in draft B | not found | 60 / 4.5 / 0 / 0 / 0 / 260 / 6 / 0 / 6 / 0 | B: numbers found after the name (line 279); check the size |
| Cilantro Dressing | 1 tbl | only in draft B | not found | 60 / 6 / 0.5 / 0 / 1 / 60 / 1 / 0 / 1 / 1 | B: numbers found after the name (line 280); check the size |
| Citrus Honey Dressing | 1 tbl | only in draft B | not found | 60 / 4.5 / 0 / 0 / 0 / 50 / 4 / 0 / 3 / 0 | B: numbers found after the name (line 281); check the size |
| Ketchup | 1 tbl | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 160 / 5 / 0 / 4 / 0 | B: numbers found after the name (line 282); check the size |
| Ranch Dressing | 1 tbl | only in draft B | not found | 70 / 7 / 1.5 / 0 / 5 / 100 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 283); check the size |
| Shallot Vinaigrette | 1 tbl | only in draft B | not found | 90 / 9 / 0.5 / 0 / 0 / 55 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 284); check the size |
| SkinnyLicious® Mustard Vinaigrette | 1 tbl | only in draft B | not found | 15 / 1 / 0 / 0 / 0 / 150 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 285); check the size |
| SkinnyLicious® Sesame Soy Dressing | 1 tbl | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 250 / 3 / 0 / 2 / 0 | B: numbers found after the name (line 286); check the size |
| Spicy Peanut Vinaigrette | 1 tbl | only in draft B | not found | 60 / 4 / 0.5 / 0 / 0 / 180 / 4 / 0 / 3 / 1 | B: numbers found after the name (line 287); check the size |
| Thousand Island Dressing | 1 tbl | only in draft B | not found | 70 / 7 / 1.5 / 0 / 5 / 110 / 2 / 0 / 2 / 0 | B: numbers found after the name (line 288); check the size |
| Fresh Basil, Tomato and Cheese Flatbread | 1 serving | only in draft B | not found | 850 / 38 / 25 / 0.5 / 95 / 2300 / 84 / 4 / 3 / 42 | B: numbers found after the name (line 310); check the size |
| Brunch Combo | 1 serving | only in draft B | not found | 1110 / 77 / 38 / 2 / 555 / 1010 / 81 / 2 / 50 / 26 | B: numbers found after the name (line 507); check the size |
| Lemon Drop | 1 serving | both read it the same, but its protein, carbs and fat make 112 kcal, not 270 | 270 / 0 / 0 / 0 / 0 / 2 / 28 / 0 / 27 / 0 | 270 / 0 / 0 / 0 / 0 / 2 / 28 / 0 / 27 / 0 | A: numbers found after the name (line 48); check the size; B: numbers found after the name (line 48); check the size |
| Raspberry Lemon Drop | 1 serving | both read it the same, but its protein, carbs and fat make 128 kcal, not 270 | 270 / 0 / 0 / 0 / 0 / 2 / 32 / 1 / 30 / 0 | 270 / 0 / 0 / 0 / 0 / 2 / 32 / 1 / 30 / 0 | A: numbers found after the name (line 49); check the size; B: numbers found after the name (line 49); check the size |
| Georgia Peach | 1 serving | both read it the same, but its protein, carbs and fat make 224 kcal, not 350 | 350 / 0 / 0 / 0 / 0 / 10 / 55 / 1 / 53 / 1 | 350 / 0 / 0 / 0 / 0 / 10 / 55 / 1 / 53 / 1 | A: numbers found after the name (line 53); check the size; B: numbers found after the name (line 53); check the size |
| Georgia Peach (UT) | 1 serving | both read it the same, but its protein, carbs and fat make 224 kcal, not 330 | 330 / 0 / 0 / 0 / 0 / 10 / 55 / 1 / 53 / 1 | 330 / 0 / 0 / 0 / 0 / 10 / 55 / 1 / 53 / 1 | A: numbers found after the name (line 54); check the size; B: numbers found after the name (line 54); check the size |
| Yuzu Lemon Drop | 1 serving | both read it the same, but its protein, carbs and fat make 120 kcal, not 260 | 260 / 0 / 0 / 0 / 0 / 1 / 30 / 0 / 28 / 0 | 260 / 0 / 0 / 0 / 0 / 1 / 30 / 0 / 28 / 0 | A: numbers found after the name (line 57); check the size; B: numbers found after the name (line 57); check the size |
| Yuzu Lemon Drop (PR) | 1 serving | both read it the same, but its protein, carbs and fat make 108 kcal, not 240 | 240 / 0 / 0 / 0 / 0 / 1 / 27 / 0 / 25 / 0 | 240 / 0 / 0 / 0 / 0 / 1 / 27 / 0 / 25 / 0 | A: numbers found after the name (line 58); check the size; B: numbers found after the name (line 58); check the size |
| J.W.'s Pink LemonadeTM | 1 serving | both read it the same, but its protein, carbs and fat make 196 kcal, not 300 | 300 / 0 / 0 / 0 / 0 / 10 / 49 / 1 / 45 / 0 | 300 / 0 / 0 / 0 / 0 / 10 / 49 / 1 / 45 / 0 | A: numbers found after the name (line 61); check the size; B: numbers found after the name (line 61); check the size |
| J.W.'s Pink Lemonade (UT) | 1 serving | both read it the same, but its protein, carbs and fat make 200 kcal, not 290 | 290 / 0 / 0 / 0 / 0 / 10 / 50 / 1 / 47 / 0 | 290 / 0 / 0 / 0 / 0 / 10 / 50 / 1 / 47 / 0 | A: numbers found after the name (line 62); check the size; B: numbers found after the name (line 62); check the size |
| J.W.'s Pink Lemonade (PR) | 1 serving | both read it the same, but its protein, carbs and fat make 180 kcal, not 270 | 270 / 0 / 0 / 0 / 0 / 10 / 45 / 1 / 41 / 0 | 270 / 0 / 0 / 0 / 0 / 10 / 45 / 1 / 41 / 0 | A: numbers found after the name (line 63); check the size; B: numbers found after the name (line 63); check the size |
| Mai Tai | 1 serving | both read it the same, but its protein, carbs and fat make 124 kcal, not 310 | 310 / 0 / 0 / 0 / 0 / 10 / 31 / 0 / 29 / 0 | 310 / 0 / 0 / 0 / 0 / 10 / 31 / 0 / 29 / 0 | A: numbers found after the name (line 65); check the size; B: numbers found after the name (line 65); check the size |
| Mai Tai (UT) | 1 serving | both read it the same, but its protein, carbs and fat make 124 kcal, not 290 | 290 / 0 / 0 / 0 / 0 / 10 / 31 / 0 / 29 / 0 | 290 / 0 / 0 / 0 / 0 / 10 / 31 / 0 / 29 / 0 | A: numbers found after the name (line 66); check the size; B: numbers found after the name (line 66); check the size |
| Mai Tai (PR) | 1 serving | both read it the same, but its protein, carbs and fat make 132 kcal, not 300 | 300 / 0 / 0 / 0 / 0 / 10 / 33 / 0 / 31 / 0 | 300 / 0 / 0 / 0 / 0 / 10 / 33 / 0 / 31 / 0 | A: numbers found after the name (line 67); check the size; B: numbers found after the name (line 67); check the size |
| Lava Flow 2.0 | 1 serving | both read it the same, but its protein, carbs and fat make 166 kcal, not 350 | 350 / 1.5 / 1 / 0 / 0 / 20 / 38 / 1 / 36 / 0 | 350 / 1.5 / 1 / 0 / 0 / 20 / 38 / 1 / 36 / 0 | A: numbers found after the name (line 71); check the size; B: numbers found after the name (line 71); check the size |
| Tahitian Pineapple | 1 serving | both read it the same, but its protein, carbs and fat make 124 kcal, not 280 | 280 / 0 / 0 / 0 / 0 / 1 / 31 / 1 / 28 / 0 | 280 / 0 / 0 / 0 / 0 / 1 / 31 / 1 / 28 / 0 | A: numbers found after the name (line 75); check the size; B: numbers found after the name (line 75); check the size |
| Mai Tai (HI) | 1 serving | both read it the same, but its protein, carbs and fat make 160 kcal, not 310 | 310 / 0 / 0 / 0 / 0 / 25 / 39 / 0 / 37 / 1 | 310 / 0 / 0 / 0 / 0 / 25 / 39 / 0 / 37 / 1 | A: numbers found after the name (line 76); check the size; B: numbers found after the name (line 76); check the size |
| Blue Hawaiian | 1 serving | both read it the same, but its protein, carbs and fat make 168 kcal, not 290 | 290 / 0 / 0 / 0 / 0 / 10 / 42 / 1 / 39 / 0 | 290 / 0 / 0 / 0 / 0 / 10 / 42 / 1 / 39 / 0 | A: numbers found after the name (line 77); check the size; B: numbers found after the name (line 77); check the size |
| Lava Flow | 1 serving | both read it the same, but its protein, carbs and fat make 405 kcal, not 490 | 490 / 9 / 8 / 0 / 0 / 35 / 79 / 4 / 69 / 2 | 490 / 9 / 8 / 0 / 0 / 35 / 79 / 4 / 69 / 2 | A: numbers found after the name (line 78); check the size; B: numbers found after the name (line 78); check the size |
| Mango Colada (HI) | 1 serving | both read it the same, but its protein, carbs and fat make 315 kcal, not 530 | 530 / 7 / 6 / 0 / 0 / 25 / 62 / 1 / 61 / 1 | 530 / 7 / 6 / 0 / 0 / 25 / 62 / 1 / 61 / 1 | A: numbers found after the name (line 79); check the size; B: numbers found after the name (line 79); check the size |
| Piña Colada | 1 serving | both read it the same, but its protein, carbs and fat make 376 kcal, not 520 | 520 / 8 / 7 / 0 / 0 / 35 / 75 / 2 / 73 / 1 | 520 / 8 / 7 / 0 / 0 / 35 / 75 / 2 / 73 / 1 | A: numbers found after the name (line 81); check the size; B: numbers found after the name (line 81); check the size |
| Obana Punch | 1 serving | both read it the same, but its protein, carbs and fat make 168 kcal, not 290 | 290 / 0 / 0 / 0 / 0 / 3 / 42 / 0 / 39 / 0 | 290 / 0 / 0 / 0 / 0 / 3 / 42 / 0 / 39 / 0 | A: numbers found after the name (line 82); check the size; B: numbers found after the name (line 82); check the size |
| Big Island Paper Plane | 1 serving | both read it the same, but its protein, carbs and fat make 112 kcal, not 260 | 260 / 0 / 0 / 0 / 0 / 4 / 28 / 0 / 26 / 0 | 260 / 0 / 0 / 0 / 0 / 4 / 28 / 0 / 26 / 0 | A: numbers found after the name (line 83); check the size; B: numbers found after the name (line 83); check the size |
| Long Island Iced Tea | 1 serving | both read it the same, but its protein, carbs and fat make 112 kcal, not 240 | 240 / 0 / 0 / 0 / 0 / 10 / 28 / 0 / 26 / 0 | 240 / 0 / 0 / 0 / 0 / 10 / 28 / 0 / 26 / 0 | A: numbers found after the name (line 746); check the size; B: numbers found after the name (line 746); check the size |
| Long Island Iced Tea (UT) | 1 serving | both read it the same, but its protein, carbs and fat make 112 kcal, not 240 | 240 / 0 / 0 / 0 / 0 / 10 / 28 / 0 / 26 / 0 | 240 / 0 / 0 / 0 / 0 / 10 / 28 / 0 / 26 / 0 | A: numbers found after the name (line 747); check the size; B: numbers found after the name (line 747); check the size |
| Well Scotch | 1 serving | both read it the same, but its protein, carbs and fat make 0 kcal, not 80 | 80 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | 80 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | A: numbers found after the name (line 753); check the size, mostly zeros: look; B: numbers found after the name (line 753); check the size, mostly zeros: look |

## Spot check (15 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Plain Omelette | 1 serving | 630 / 60 / 17 / 1 / 670 / 790 / 2 / 0 / 1 / 22 |
| Lunch Grilled Salmon with Corn Succotash | 1 serving | 1020 / 61 / 24 / 1 / 190 / 1400 / 67 / 6 / 24 / 50 |
| Cranberry Juice | 1 serving | 45 / 0 / 0 / 0 / 0 / 3 / 11 / 0 / 11 / 0 |
| Kids' Fresh Fruit | 1 serving | 50 / 0 / 0 / 0 / 0 / 0 / 13 / 2 / 10 / 1 |
| Coconut Margarita | 1 serving | 220 / 0 / 0 / 0 / 0 / 210 / 31 / 0 / 29 / 0 |
| Bacon | 1 serving | 140 / 13 / 4.5 / 0 / 25 / 230 / 0 / 0 / 1 / 5 |
| Chicken Taquitos | 1 serving | 470 / 29 / 9 / 0 / 60 / 1050 / 35 / 7 / 6 / 17 |
| “Happy Hour” Burger | 1 serving | 1140 / 70 / 31 / 3 / 230 / 3180 / 72 / 3 / 26 / 54 |
| SkinnyLicious® Margarita | 1 serving | 150 / 0 / 0 / 0 / 0 / 125 / 17 / 0 / 12 / 0 |
| Shepherd's Pie | 1 serving | 1030 / 60 / 30 / 3 / 220 / 2670 / 66 / 10 / 12 / 55 |
| Sangria | 1 serving | 160 / 0 / 0 / 0 / 0 / 10 / 24 / 2 / 21 / 1 |
| Passion Fruit Mojito | 1 serving | 270 / 0 / 0 / 0 / 0 / 20 / 34 / 1 / 31 / 0 |
| Japanese Whisky Sour | 1 serving | 250 / 0 / 0 / 0 / 0 / 1 / 26 / 0 / 25 / 0 |
| Pineapple Mezcal (PR) | 1 serving | 270 / 0 / 0 / 0 / 0 / 250 / 36 / 1 / 33 / 0 |
| Whiskey Smash (PR) | 1 serving | 220 / 0 / 0 / 0 / 0 / 10 / 31 / 1 / 29 / 0 |
