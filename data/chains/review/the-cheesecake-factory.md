# The Cheesecake Factory: lines for a person

Guide: https://www.thecheesecakefactory.com/assets/pdf/Nutritional_Guide.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (128)

Fix each line in `menus/the-cheesecake-factory.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| SkinnyLicious\circledR Sangria | 1 serving | only in draft A | 130 / 0 / 0 / 0 / 0 / 10 / 19 / 1 / 17 / 0 | not found |
| Lava Flow Punch | 1 serving | both read numbers that can't be right: fiber 3 g above carbs 0 g | 250 / 6 / 1 / 0 / 5 / 1000 / 0 / 3 / 0 / 1 | 250 / 6 / 1 / 0 / 5 / 1000 / 0 / 3 / 0 / 1 |
| The Well-Mannered Dirty Martini | 1 serving | both read numbers that can't be right: fiber 3 g above carbs 0 g | 250 / 6 / 1 / 0 / 5 / 1000 / 0 / 3 / 0 / 1 | 250 / 6 / 1 / 0 / 5 / 1000 / 0 / 3 / 0 / 1 |
| The Well-Mannered Dirty Martini (UT) | 1 serving | both read numbers that can't be right: fiber 3 g above carbs 0 g | 140 / 5 / 1 / 0 / 5 / 830 / 0 / 3 / 0 / 1 | 140 / 5 / 1 / 0 / 5 / 830 / 0 / 3 / 0 / 1 |
| Cherry-Licious Soda | 1 serving | both read numbers that can't be right: sugars 53 g above carbs 36 g | 380 / 15 / 10 / 0.5 / 55 / 15 / 36 / 0 / 53 / 1 | 380 / 15 / 10 / 0.5 / 55 / 15 / 36 / 0 / 53 / 1 |
| The Old Fashioned | 1 serving | both read numbers that can't be right: sugars 18 g above carbs 10 g | 280 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 18 / 0 | 280 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 18 / 0 |
| The Old Fashioned (UT) | 1 serving | both read numbers that can't be right: sugars 13 g above carbs 10 g | 230 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 13 / 0 | 230 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 13 / 0 |
| Grilled Salmon | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 940 / 64 / 19 / 0.5 / 160 / 1330 / 42 / 6 / 4 / 47 | 220 / 12 / 2 / 0 / 65 / 105 / 2 / 0 / 0 / 26 |
| French Fries | 1 serving | differ: calories, fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1060 / 46 / 8 / 0 / 0 / 2500 / 152 / 10 / 25 / 11 | 530 / 23 / 4 / 0 / 0 / 1250 / 76 / 5 / 13 / 6 |
| Sweet Potato Fries | 1 serving | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1010 / 52 / 9 / 0 / 10 / 1800 / 125 / 14 / 58 / 7 | 510 / 20 / 3.5 / 0 / 0 / 1150 / 78 / 11 / 38 / 4 |
| Avocado | 1 serving | differ: calories, fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, protein_g | 40 / 3.5 / 0 / 0 / 0 / 1 / 2 / 2 / 0 / 0 | 160 / 14 / 2 / 0 / 0 / 5 / 8 / 6 / 0 / 2 |
| Tossed Green Salad with Blue Cheese Dressing | 1 serving | differ: calories, fat_g, saturated_fat_g, sodium_mg, carbs_g, sugars_g, protein_g | 370 / 31 / 11 / 0 / 50 / 690 / 13 / 4 / 7 / 9 | 530 / 42 / 13 / 0 / 50 / 900 / 25 / 4 / 8 / 12 |
| Tossed Green Salad with Ranch Dressing | 1 serving | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, protein_g | 450 / 41 / 8 / 0 / 25 / 630 / 15 / 3 / 10 / 3 | 610 / 51 / 10 / 0 / 30 / 840 / 26 / 4 / 10 / 6 |
| Tossed Green Salad with Thousand Island Dressing | 1 serving | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 470 / 41 / 8 / 0 / 25 / 690 / 19 / 3 / 14 / 3 | 630 / 52 / 10 / 0 / 30 / 900 / 31 / 4 / 15 / 6 |
| Caesar Salad | 1 serving | differ: calories, fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, protein_g | 720 / 66 / 14 / 0 / 50 / 930 / 19 / 7 / 9 / 12 | 860 / 75 / 16 / 0 / 50 / 1100 / 30 / 8 / 9 / 15 |
| Caesar Salad with Chicken | 1 serving | differ: calories, fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, protein_g | 950 / 71 / 15 / 0 / 175 / 1470 / 19 / 7 / 9 / 56 | 1090 / 81 / 17 / 0 / 175 / 1640 / 30 / 8 / 9 / 59 |
| Factory Chopped Salad | 1 serving | differ: calories, fat_g, saturated_fat_g, sodium_mg, sugars_g | 870 / 67 / 13 / 0.5 / 85 / 1470 / 34 / 10 / 18 / 34 | 780 / 59 / 11 / 0.5 / 85 / 1360 / 34 / 10 / 17 / 34 |
| Green Salad | 1 serving | differ: calories, fat_g, saturated_fat_g, sodium_mg, sugars_g | 160 / 16 / 1.5 / 0 / 0 / 170 / 5 / 1 / 3 / 1 | 130 / 12 / 1 / 0 / 0 / 125 / 5 / 1 / 2 / 1 |
| Double Smash Cheeseburger | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, fiber_g, sugars_g, protein_g | 980 / 56 / 24 / 2.5 / 180 / 3090 / 72 / 6 / 28 / 50 | 1140 / 70 / 31 / 3 / 230 / 3180 / 72 / 3 / 26 / 54 |
| Old Fashioned Burger | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, fiber_g, sugars_g, protein_g | 840 / 46 / 15 / 2 / 140 / 1790 / 64 / 6 / 21 / 43 | 990 / 60 / 22 / 2.5 / 195 / 1880 / 64 / 3 / 19 / 46 |
| Bistro Burger | 1 serving | differ: calories, fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1250 / 78 / 25 / 2.5 / 165 / 2790 / 89 / 7 / 42 / 49 | 1330 / 74 / 25 / 2.5 / 165 / 3190 / 106 / 4 / 36 / 55 |
| Americana Cheeseburger | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1230 / 76 / 29 / 2.5 / 205 / 3330 / 83 / 8 / 31 / 56 | 1390 / 90 / 37 / 3 / 255 / 3410 / 82 / 4 / 29 / 60 |
| Bacon-Bacon Cheeseburger | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1460 / 96 / 37 / 3 / 260 / 3440 / 79 / 7 / 33 / 71 | 1610 / 110 / 44 / 3.5 / 315 / 3530 / 78 / 3 / 30 / 75 |
| Factory Turkey Burger | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, fiber_g, sugars_g, protein_g | 940 / 60 / 20 / 0.5 / 200 / 2240 / 59 / 9 / 13 / 49 | 1060 / 69 / 24 / 1 / 205 / 2110 / 59 / 7 / 17 / 53 |
| Cobb Salad | 1 serving | differ: calories, fat_g, saturated_fat_g, trans_fat_g, sodium_mg, sugars_g, protein_g | 1650 / 141 / 27 / 1 / 365 / 2680 / 30 / 11 / 15 / 65 | 1480 / 124 / 24 / 1.5 / 365 / 2460 / 30 / 11 / 13 / 66 |
| Draft Beer | 1 glass | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 4 |
| Draft Light Beer | 1 glass | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 15 / 7 / 0 / 0 / 1 |
| Bottled Beer | 16 oz | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 20 / 1 / 0 / 0 / 4 |
| Bottled Light Beer | 12 oz | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 15 / 6 / 0 / 0 / 1 |
| Stella O.O Non-Alcoholic Beer | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 0 / 2 |
| Hazy IPA Non-Alcoholic Beer | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 16 / 0 / 0 / 1 |
| Sparkling Wine | 5-1/2 oz | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 1 / 4 / 0 / 2 / 0 |
| Sparkling Wine (UT) | 5 oz | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 1 / 4 / 0 / 2 / 0 |
| Sparkling Wine Bottle | 375ml | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 3 / 9 / 0 / 5 / 0 |
| Sparkling Wine Bottle | 750ml | only in draft B | not found | 600 / 0 / 0 / 0 / 0 / 5 / 19 / 0 / 10 / 0 |
| White Wine | 6-1/2 oz | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 5 / 0 / 2 / 0 |
| White Wine | 9 oz | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 15 / 7 / 0 / 3 / 0 |
| White Wine (UT) | 5 oz | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 5 / 4 / 0 / 1 / 0 |
| White Wine Bottle | 1 serving | only in draft B | not found | 630 / 0 / 0 / 0 / 0 / 35 / 19 / 0 / 7 / 1 |
| Red Wine | 6-1/2 oz | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 5 / 0 / 1 / 0 |
| Red Wine | 9 oz | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 10 / 7 / 0 / 2 / 0 |
| Red Wine (UT) | 5 oz | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 5 / 4 / 0 / 1 / 0 |
| Red Wine Bottle | 1 serving | only in draft B | not found | 630 / 0 / 0 / 0 / 0 / 30 / 19 / 0 / 5 / 1 |
| Street Corn | 1 serving | only in draft B | not found | 710 / 54 / 14 / 0.5 / 40 / 1000 / 48 / 5 / 17 / 14 |
| Korean Fried Cauliflower | 1 serving | only in draft B | not found | 1150 / 71 / 13 / 0 / 20 / 2570 / 113 / 7 / 44 / 11 |
| Fried Zucchini | 1 serving | only in draft B | not found | 1000 / 76 / 21 / 1 / 55 / 2050 / 58 / 4 / 14 / 21 |
| Cheeseburger Spring Rolls | 1 serving | only in draft B | not found | 980 / 69 / 27 / 2 / 170 / 1890 / 47 / 3 / 13 / 43 |
| Crispy Fried Cheese | 1 serving | only in draft B | not found | 1070 / 78 / 39 / 1.5 / 150 / 2320 / 49 / 3 / 4 / 45 |
| Mini Crabcakes (HI) | 1 serving | only in draft B | not found | 530 / 42 / 8 / 0 / 130 / 930 / 15 / 2 / 6 / 20 |
| Grilled Chicken Mini Tacos (MDR) | 1 serving | only in draft B | not found | 650 / 32 / 7 / 0 / 120 / 1480 / 43 / 5 / 10 / 46 |
| Crispy Fish Mini Tacos (MDR) | 1 serving | only in draft B | not found | 530 / 30 / 4 / 0 / 25 / 920 / 49 / 5 / 9 / 15 |
| Roadside Sliders | Serves 2-4 | only in draft B | not found | 800 / 35 / 13 / 2 / 135 / 1720 / 70 / 1 / 18 / 48 |
| Chicken Pot Stickers | Serves 2-4 | only in draft B | not found | 380 / 12 / 2.5 / 0 / 90 / 2550 / 38 / 1 / 13 / 27 |
| Tex Mex Eggrolls | Serves 2-4 | only in draft B | not found | 930 / 53 / 14 / 0.5 / 120 / 2030 / 72 / 10 / 12 / 43 |
| Quesadilla | Serves 2-4 | only in draft B | not found | 1120 / 77 / 46 / 1.5 / 170 / 2070 / 62 / 7 / 6 / 49 |
| Quesadilla (ABQ) | Serves 2-4 | only in draft B | not found | 1120 / 78 / 46 / 1.5 / 170 / 1950 / 61 / 7 / 5 / 49 |
| Quesadilla with Chicken | Serves 2-4 | only in draft B | not found | 1230 / 81 / 46 / 1.5 / 235 / 2300 / 62 / 7 / 6 / 69 |
| Quesadilla with Chicken (ABQ) | Serves 2-4 | only in draft B | not found | 1240 / 81 / 46 / 1.5 / 235 / 2180 / 61 / 7 / 5 / 69 |
| Quesadilla with Kalua Pork (HI) | Serves 2-4 | only in draft B | not found | 1340 / 90 / 50 / 1.5 / 265 / 2450 / 63 / 7 / 6 / 73 |
| Thai Chili Shrimp | Serves 2-4 | only in draft B | not found | 700 / 52 / 10 / 0 / 75 / 950 / 35 / 1 / 7 / 18 |
| Avocado Eggrolls | Serves 2-4 | only in draft B | not found | 930 / 48 / 10 / 0 / 15 / 1300 / 111 / 14 / 38 / 14 |
| Fried Macaroni and Cheese | Serves 2-4 | only in draft B | not found | 1310 / 96 / 47 / 2.5 / 245 / 2140 / 70 / 6 / 12 / 40 |
| Warm Crab Dip | Serves 2-4 | only in draft B | not found | 1220 / 92 / 34 / 1.5 / 195 / 1720 / 69 / 3 / 9 / 25 |
| Fried Calamari | Serves 2-4 | only in draft B | not found | 1520 / 105 / 20 / 1 / 705 / 1850 / 98 / 5 / 10 / 44 |
| Eggroll Sampler | Serves 2-4 | only in draft B | not found | 1320 / 76 / 21 / 1 / 135 / 2320 / 114 / 17 / 36 / 44 |
| Spicy Tuna* | Serves 2-4 | only in draft B | not found | 460 / 22 / 4 / 0 / 40 / 1490 / 46 / 2 / 15 / 20 |
| Ahi Poke Nachos* | Serves 2-4 | only in draft B | not found | 1020 / 63 / 10 / 0.5 / 55 / 1740 / 85 / 7 / 21 / 27 |
| Hot Spinach and Cheese Dip | Serves 2-4 | only in draft B | not found | 1730 / 126 / 57 / 2.5 / 225 / 1590 / 115 / 13 / 9 / 31 |
| Buffalo Blasts® | Serves 2-4 | only in draft B | not found | 1670 / 93 / 25 / 1.5 / 190 / 7080 / 129 / 10 / 11 / 78 |
| Thai Lettuce Wraps with Satay Chicken Strips | Serves 2-4 | only in draft B | not found | 850 / 27 / 7 / 0 / 125 / 1990 / 105 / 9 / 69 / 51 |
| Small Thai Lettuce Wraps with Satay Chicken Strips | 1 serving | only in draft B | not found | 500 / 16 / 4 / 0 / 60 / 1270 / 65 / 5 / 46 / 27 |
| Thai Lettuce Wraps with Grilled Avocado | Serves 2-4 | only in draft B | not found | 830 / 42 / 8 / 0 / 0 / 1910 / 110 / 18 / 64 / 15 |
| Small Thai Lettuce Wraps with Grilled Avocado | 1 serving | only in draft B | not found | 500 / 24 / 4.5 / 0 / 0 / 1230 / 68 / 10 / 43 / 8 |
| Pretzel Bites with Cheddar Cheese Fondue | Serves 2-4 | only in draft B | not found | 1010 / 61 / 34 / 2 / 130 / 2470 / 84 / 3 / 11 / 29 |
| Factory Nachos | Serves 2-4 | only in draft B | not found | 2670 / 192 / 84 / 5 / 320 / 2680 / 173 / 21 / 25 / 63 |
| Factory Nachos with Spicy Chicken | Serves 2-4 | only in draft B | not found | 2950 / 211 / 85 / 6 / 370 / 3350 / 180 / 22 / 29 / 83 |
| Factory Nachos with Kalua Pork (HI) | Serves 2-4 | only in draft B | not found | 2880 / 204 / 88 / 5 / 415 / 3070 / 174 / 21 / 25 / 88 |
| Buffalo Wings | Serves 2-4 | only in draft B | not found | 1120 / 69 / 18 / 0 / 515 / 5020 / 16 / 2 / 4 / 109 |
| Buffalo Chicken Strips | Serves 2-4 | only in draft B | not found | 1090 / 48 / 11 / 0 / 135 / 4950 / 87 / 7 / 12 / 76 |
| Ahi Poke (HI) | Serves 2 | only in draft B | not found | 470 / 10 / 1.5 / 0 / 95 / 3030 / 46 / 3 / 34 / 50 |
| Spicy Ahi Tempura Roll (HI) | Serves 2-4 | only in draft B | not found | 770 / 51 / 9 / 0.5 / 70 / 1910 / 45 / 3 / 11 / 32 |
| Spicy Tuna (HI) | Serves 2-4 | only in draft B | not found | 460 / 22 / 4 / 0 / 40 / 1490 / 46 / 2 / 15 / 20 |
| Mini Crab Cakes (HI) | Serves 2-4 | only in draft B | not found | 530 / 42 / 8 / 0 / 130 / 930 / 15 / 2 / 6 / 20 |
| Cup of Clam Chowder | 1 serving | only in draft B | not found | 310 / 19 / 11 / 0.5 / 70 / 990 / 24 / 2 / 2 / 11 |
| Cup of Cream of Chicken Soup | 1 serving | only in draft B | not found | 390 / 25 / 15 / 1 / 125 / 1030 / 25 / 3 / 10 / 17 |
| Cup of Mexican Chicken and Vegetable Soup | 1 serving | only in draft B | not found | 340 / 19 / 7 / 0 / 40 / 1530 / 27 / 4 / 8 / 14 |
| Bowl of Clam Chowder | 1 serving | only in draft B | not found | 500 / 30 / 18 / 1 / 115 / 1580 / 39 / 4 / 3 / 18 |
| Bowl of Cream of Chicken Soup | 1 serving | only in draft B | not found | 630 / 40 / 23 / 1.5 / 195 / 1650 / 40 / 4 / 16 / 28 |
| Bowl of Mexican Chicken and Vegetable Soup | 1 serving | only in draft B | not found | 680 / 39 / 15 / 0.5 / 75 / 3070 / 54 / 7 / 17 / 29 |
| Cheese Flatbread | 1 serving | only in draft B | not found | 1000 / 50 / 31 / 1 / 125 / 2530 / 86 / 4 / 3 / 49 |
| Margherita Flatbread | 1 serving | only in draft B | not found | 760 / 30 / 15 / 0 / 55 / 1770 / 85 / 4 / 4 / 34 |
| Fresh Basil, Tomato and Cheese | 1 serving | only in draft B | not found | 850 / 38 / 25 / 0.5 / 95 / 2300 / 84 / 4 / 3 / 42 |
| Pepperoni Flatbread | 1 serving | only in draft B | not found | 1170 / 66 / 34 / 1 / 165 / 3420 / 88 / 5 / 3 / 56 |
| Bee Sting Flatbread | 1 serving | only in draft B | not found | 1170 / 62 / 30 / 1 / 145 / 3280 / 97 / 5 / 8 / 54 |
| Classic Burger | 1 serving | only in draft B | not found | 1280 / 83 / 30 / 3 / 255 / 2520 / 69 / 4 / 23 / 61 |
| French Dip Cheeseburger | 1 serving | only in draft B | not found | 1620 / 118 / 48 / 3 / 305 / 3470 / 79 / 5 / 23 / 59 |
| Smokehouse B.B.Q. Burger | 1 serving | only in draft B | not found | 1580 / 97 / 39 / 3.5 / 280 / 3070 / 106 / 3 / 42 / 68 |
| Macaroni and Cheese Burger | 1 serving | only in draft B | not found | 1340 / 85 / 40 / 3.5 / 275 / 2430 / 81 / 4 / 20 / 60 |
| Green Chile Cheeseburger (ABQ) | 1 serving | only in draft B | not found | 1270 / 80 / 35 / 3.5 / 265 / 2570 / 73 / 4 / 20 / 61 |
| Veggie Burger | 1 serving | only in draft B | not found | 1040 / 50 / 13 / 0 / 0 / 2920 / 129 / 10 / 32 / 19 |
| Tossed Green Salad with Balsamic Vinaigrette | 1 serving | only in draft B | not found | 660 / 60 / 6 / 0.5 / 5 / 680 / 25 / 4 / 8 / 7 |
| Fried Chicken Club Salad | 1 serving | only in draft B | not found | 1530 / 119 / 27 / 1 / 320 / 2920 / 64 / 7 / 28 / 49 |
| Vegan Cobb Salad | 1 serving | only in draft B | not found | 1060 / 89 / 9 / 0.5 / 0 / 1310 / 55 / 19 / 18 / 16 |
| Chinese Chicken Salad | 1 serving | only in draft B | not found | 1630 / 102 / 14 / 1 / 80 / 2960 / 135 / 11 / 62 / 50 |
| Thai Chicken Salad | 1 serving | only in draft B | not found | 1210 / 63 / 10 / 0 / 155 / 2670 / 93 / 14 / 63 / 73 |
| Sheila's Chicken and Avocado Salad | 1 serving | only in draft B | not found | 1820 / 124 / 16 / 0.5 / 80 / 2150 / 134 / 22 / 57 / 56 |
| Luau Salad (HI) | 1 serving | only in draft B | not found | 1370 / 86 / 12 / 0.5 / 85 / 1930 / 110 / 11 / 58 / 45 |
| Barbeque Ranch Chicken Salad | 1 serving | only in draft B | not found | 1950 / 124 / 22 / 0 / 125 / 2920 / 151 / 22 / 64 / 56 |
| Santa Fe Salad | 1 serving | only in draft B | not found | 1670 / 112 / 25 / 1 / 135 / 2450 / 108 / 19 / 39 / 68 |
| Grilled Chicken | 1 serving | only in draft B | not found | 220 / 7 / 1 / 0 / 130 / 470 / 0 / 0 / 0 / 39 |
| Grilled Shrimp | 1 serving | only in draft B | not found | 90 / 1 / 0 / 0 / 155 / 115 / 2 / 0 / 0 / 18 |
| Chargilled Steak | 1 serving | only in draft B | not found | 200 / 7 / 3 / 0 / 95 / 410 / 0 / 0 / 0 / 34 |
| Balsamic Vinaigrette | 1 tbl | only in draft B | not found | 80 / 8 / 0.5 / 0 / 0 / 75 / 1 / 0 / 1 / 0 |
| Barbeque Ranch Dressing | 1 tbl | only in draft B | not found | 80 / 7 / 1.5 / 0 / 5 / 130 / 3 / 0 / 2 / 0 |
| Blue Cheese Dressing | 1 tbl | only in draft B | not found | 60 / 5 / 1.5 / 0 / 10 / 110 / 1 / 0 / 1 / 1 |
| Caesar Dressing | 1 tbl | only in draft B | not found | 80 / 7 / 1.5 / 0 / 5 / 90 / 1 / 0 / 1 / 1 |
| Chinese Plum Dressing | 1 tbl | only in draft B | not found | 60 / 4.5 / 0 / 0 / 0 / 260 / 6 / 0 / 6 / 0 |
| Cilantro Dressing | 1 tbl | only in draft B | not found | 60 / 6 / 0.5 / 0 / 1 / 60 / 1 / 0 / 1 / 1 |
| Citrus Honey Dressing | 1 tbl | only in draft B | not found | 60 / 4.5 / 0 / 0 / 0 / 50 / 4 / 0 / 3 / 0 |
| Ketchup | 1 tbl | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 160 / 5 / 0 / 4 / 0 |
| Ranch Dressing | 1 tbl | only in draft B | not found | 70 / 7 / 1.5 / 0 / 5 / 100 / 1 / 0 / 1 / 0 |
| Shallot Vinaigrette | 1 tbl | only in draft B | not found | 90 / 9 / 0.5 / 0 / 0 / 55 / 1 / 0 / 0 / 0 |
| SkinnyLicious® Mustard Vinaigrette | 1 tbl | only in draft B | not found | 15 / 1 / 0 / 0 / 0 / 150 / 1 / 0 / 1 / 0 |
| SkinnyLicious® Sesame Soy Dressing | 1 tbl | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 250 / 3 / 0 / 2 / 0 |
| Spicy Peanut Vinaigrette | 1 tbl | only in draft B | not found | 60 / 4 / 0.5 / 0 / 0 / 180 / 4 / 0 / 3 / 1 |
| Thousand Island Dressing | 1 tbl | only in draft B | not found | 70 / 7 / 1.5 / 0 / 5 / 110 / 2 / 0 / 2 / 0 |
| Fresh Basil, Tomato and Cheese Flatbread | 1 serving | only in draft B | not found | 850 / 38 / 25 / 0.5 / 95 / 2300 / 84 / 4 / 3 / 42 |
| Brunch Combo | 1 serving | only in draft B | not found | 1110 / 77 / 38 / 2 / 555 / 1010 / 81 / 2 / 50 / 26 |

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
