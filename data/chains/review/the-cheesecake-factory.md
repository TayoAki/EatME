# The Cheesecake Factory: lines for a person

Guide: https://www.thecheesecakefactory.com/assets/pdf/Nutritional_Guide.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (172)

Fix each line in `menus/the-cheesecake-factory.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Banana Nut Old Fashioned | 1 serving | differ: fat_g | 250 / 1 / 1 / 0 / 0 / 0 / 17 / 0 / 16 / 0 | 250 / 10 / 1 / 0 / 0 / 0 / 17 / 0 / 16 / 0 |
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
| Sweet Corn Tamale Cakes - Serves 2-4 | 1 serving | only in draft A | 1340 / 88 / 44 / 2.5 / 210 / 1710 / 119 / 19 / 42 / 16 | not found |
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
| Avocado | 1 serving | differ: calories, fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, protein_g | 40 / 3.5 / 0 / 0 / 0 / 1 / 2 / 2 / 0 / 0 | 160 / 14 / 2 / 0 / 0 / 5 / 8 / 6 / 0 / 2 |
| Spinach, Mushroom, Bacon and Cheese Omelette | 1 serving | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, protein_g | 950 / 80 / 40 / 2 / 795 / 1460 / 12 / 3 / 4 / 46 | 1050 / 90 / 46 / 2 / 820 / 1570 / 14 / 3 / 4 / 48 |
| Street Corn | 1 serving | only in draft B | not found | 710 / 54 / 14 / 0.5 / 40 / 1000 / 48 / 5 / 17 / 14 |
| Korean Fried Cauliflower | 1 serving | only in draft B | not found | 1150 / 71 / 13 / 0 / 20 / 2570 / 113 / 7 / 44 / 11 |
| Fried Zucchini | 1 serving | only in draft B | not found | 1000 / 76 / 21 / 1 / 55 / 2050 / 58 / 4 / 14 / 21 |
| Cheeseburger Spring Rolls | 1 serving | only in draft B | not found | 980 / 69 / 27 / 2 / 170 / 1890 / 47 / 3 / 13 / 43 |
| Crispy Fried Cheese | 1 serving | only in draft B | not found | 1070 / 78 / 39 / 1.5 / 150 / 2320 / 49 / 3 / 4 / 45 |
| Mini Crabcakes (HI) | 1 serving | only in draft B | not found | 530 / 42 / 8 / 0 / 130 / 930 / 15 / 2 / 6 / 20 |
| Grilled Chicken Mini Tacos (MDR) | 1 serving | only in draft B | not found | 650 / 32 / 7 / 0 / 120 / 1480 / 43 / 5 / 10 / 46 |
| Crispy Fish Mini Tacos (MDR) | 1 serving | only in draft B | not found | 530 / 30 / 4 / 0 / 25 / 920 / 49 / 5 / 9 / 15 |
| Small Thai Lettuce Wraps with Satay Chicken Strips | 1 serving | only in draft B | not found | 500 / 16 / 4 / 0 / 60 / 1270 / 65 / 5 / 46 / 27 |
| Small Thai Lettuce Wraps with Grilled Avocado | 1 serving | only in draft B | not found | 500 / 24 / 4.5 / 0 / 0 / 1230 / 68 / 10 / 43 / 8 |
| Buffalo Chicken Strips | 1 serving | only in draft B | not found | 1090 / 48 / 11 / 0 / 135 / 4950 / 87 / 7 / 12 / 76 |
| Buffalo Wings | 1 serving | only in draft B | not found | 1120 / 69 / 18 / 0 / 515 / 5020 / 16 / 2 / 4 / 109 |
| Spicy Ahi Tempura Roll (HI) | 1 serving | only in draft B | not found | 770 / 51 / 9 / 0.5 / 70 / 1910 / 45 / 3 / 11 / 32 |
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
| Balsamic Vinaigrette | 1 serving | only in draft B | not found | 80 / 8 / 0.5 / 0 / 0 / 75 / 1 / 0 / 1 / 0 |
| Barbeque Ranch Dressing | 1 serving | only in draft B | not found | 80 / 7 / 1.5 / 0 / 5 / 130 / 3 / 0 / 2 / 0 |
| Blue Cheese Dressing | 1 serving | only in draft B | not found | 60 / 5 / 1.5 / 0 / 10 / 110 / 1 / 0 / 1 / 1 |
| Caesar Dressing | 1 serving | only in draft B | not found | 80 / 7 / 1.5 / 0 / 5 / 90 / 1 / 0 / 1 / 1 |
| Chinese Plum Dressing | 1 serving | only in draft B | not found | 60 / 4.5 / 0 / 0 / 0 / 260 / 6 / 0 / 6 / 0 |
| Cilantro Dressing | 1 serving | only in draft B | not found | 60 / 6 / 0.5 / 0 / 1 / 60 / 1 / 0 / 1 / 1 |
| Citrus Honey Dressing | 1 serving | only in draft B | not found | 60 / 4.5 / 0 / 0 / 0 / 50 / 4 / 0 / 3 / 0 |
| Ketchup | 1 serving | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 160 / 5 / 0 / 4 / 0 |
| Ranch Dressing | 1 serving | only in draft B | not found | 70 / 7 / 1.5 / 0 / 5 / 100 / 1 / 0 / 1 / 0 |
| Shallot Vinaigrette | 1 serving | only in draft B | not found | 90 / 9 / 0.5 / 0 / 0 / 55 / 1 / 0 / 0 / 0 |
| SkinnyLicious® Mustard Vinaigrette | 1 serving | only in draft B | not found | 15 / 1 / 0 / 0 / 0 / 150 / 1 / 0 / 1 / 0 |
| SkinnyLicious® Sesame Soy Dressing | 1 serving | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 250 / 3 / 0 / 2 / 0 |
| Spicy Peanut Vinaigrette | 1 serving | only in draft B | not found | 60 / 4 / 0.5 / 0 / 0 / 180 / 4 / 0 / 3 / 1 |
| Thousand Island Dressing | 1 serving | only in draft B | not found | 70 / 7 / 1.5 / 0 / 5 / 110 / 2 / 0 / 2 / 0 |
| Fresh Basil, Tomato and Cheese Flatbread | 1 serving | only in draft B | not found | 850 / 38 / 25 / 0.5 / 95 / 2300 / 84 / 4 / 3 / 42 |
| Farm Fresh Eggs with Chicken Sausage | 1 serving | only in draft B | not found | 520 / 39 / 18 / 0 / 590 / 1440 / 3 / 0 / 2 / 40 |
| Brioche Breakfast Sandwich | 1 serving | only in draft B | not found | 1030 / 67 / 28 / 1 / 530 / 1920 / 59 / 5 / 9 / 48 |
| Shakshuka Omelette | 1 serving | only in draft B | not found | 1020 / 64 / 30 / 1.5 / 745 / 2140 / 64 / 7 / 17 / 44 |
| White Toast | 1 serving | only in draft B | not found | 330 / 5 / 2.5 / 0 / 0 / 730 / 64 / 2 / 8 / 10 |
| Wheat Toast | 1 serving | only in draft B | not found | 270 / 4 / 0.5 / 0 / 0 / 560 / 49 / 5 / 8 / 10 |
| Bagel | 1 serving | only in draft B | not found | 360 / 1.5 / 0 / 0 / 0 / 580 / 74 / 2 / 7 / 11 |
| English Muffin | 1 serving | only in draft B | not found | 190 / 1.5 / 0 / 0 / 0 / 310 / 37 / 2 / 2 / 6 |
| Sourdough Baguette | 1 serving | only in draft B | not found | 260 / 1 / 0 / 0 / 0 / 660 / 55 / 2 / 1 / 9 |
| Wheat Baguette | 1 serving | only in draft B | not found | 370 / 5 / 0.5 / 0 / 0 / 560 / 73 / 6 / 15 / 12 |
| Giant Belgian Waffle | 1 serving | only in draft B | not found | 690 / 41 / 22 / 1.5 / 115 / 680 / 77 / 1 / 50 / 6 |
| Giant Belgian Waffle with Strawberries, Pecans and Chantilly Cream | 1 serving | only in draft B | not found | 950 / 56 / 27 / 1.5 / 135 / 750 / 108 / 5 / 76 / 8 |
| Fried Chicken & Waffles | 1 serving | only in draft B | not found | 1190 / 61 / 26 / 1.5 / 215 / 1260 / 118 / 1 / 54 / 44 |
| Buttermilk Pancakes | 1 serving | only in draft B | not found | 1670 / 78 / 28 / 1.5 / 195 / 3650 / 214 / 8 / 79 / 30 |
| Cinnamon Roll Pancakes | 1 serving | only in draft B | not found | 2370 / 125 / 53 / 3.5 / 350 / 3920 / 281 / 5 / 148 / 31 |
| Lemon-Ricotta Pancakes | 1 serving | only in draft B | not found | 2110 / 105 / 44 / 2 / 365 / 3670 / 255 / 5 / 139 / 37 |
| Bruléed French Toast | 1 serving | only in draft B | not found | 2120 / 161 / 83 / 4.5 / 670 / 1120 / 139 / 6 / 63 / 31 |
| Bruléed French Toast with Bacon | 1 serving | only in draft B | not found | 2330 / 176 / 89 / 4.5 / 715 / 1190 / 143 / 6 / 66 / 43 |
| Bruléed French Toast with Grilled Ham | 1 serving | only in draft B | not found | 2290 / 165 / 84 / 4.5 / 750 / 2740 / 141 / 6 / 64 / 62 |
| Bruléed French Toast with Chicken Sausage | 1 serving | only in draft B | not found | 2370 / 175 / 88 / 4.5 / 835 / 2410 / 141 / 6 / 65 / 57 |
| Brunch Combo | 1 serving | only in draft B | not found | 1110 / 77 / 38 / 2 / 555 / 1010 / 81 / 2 / 50 / 26 |
| Eggs Benedict with Canadian Bacon and Hollandaise | 1 serving | only in draft B | not found | 1350 / 105 / 57 / 3 / 365 / 2270 / 51 / 3 / 3 / 48 |
| Bacon And Avocado Benedict | 1 serving | only in draft B | not found | 1520 / 125 / 62 / 3 / 350 / 1070 / 62 / 7 / 10 / 36 |
| Fried Chicken & Waffles Benedict | 1 serving | only in draft B | not found | 1670 / 128 / 71 / 3.5 / 425 / 1440 / 96 / 3 / 48 / 33 |
| Green Chilaquiles with Carnitas and Eggs | 1 serving | only in draft B | not found | 1650 / 102 / 33 / 1 / 945 / 2560 / 100 / 12 / 15 / 85 |
| Green Chilaquiles with Chicken and Eggs | 1 serving | only in draft B | not found | 1620 / 100 / 29 / 1 / 990 / 3040 / 88 / 11 / 18 / 90 |
| Monte Cristo Sandwich | 1 serving | only in draft B | not found | 1960 / 121 / 64 / 3.5 / 870 / 2470 / 145 / 6 / 70 / 74 |
| Breakfast Burrito | 1 serving | only in draft B | not found | 2080 / 139 / 69 / 3.5 / 950 / 4580 / 121 / 20 / 19 / 88 |
| Original | 1 serving | only in draft B | not found | 830 / 59 / 37 / 2 / 265 / 510 / 63 / 1 / 51 / 12 |
| Fresh Strawberry | 1 serving | only in draft B | not found | 1000 / 69 / 43 / 2.5 / 305 / 550 / 82 / 2 / 66 / 12 |
| Oreo® Dream Extreme Cheesecake | 1 serving | only in draft B | not found | 1510 / 93 / 51 / 2.5 / 290 / 800 / 166 / 7 / 122 / 15 |
| Ultimate Red Velvet Cake CheesecakeTM | 1 serving | only in draft B | not found | 1580 / 116 / 62 / 4 / 350 / 630 / 125 / 1 / 104 / 14 |
| Reese's® Peanut Butter Chocolate Cake Cheesecake | 1 serving | only in draft B | not found | 1510 / 95 / 44 / 2 / 245 / 940 / 154 / 8 / 121 / 23 |
| Brownie Crunch Choc-A-Lot Cheesecake | 1 serving | only in draft B | not found | 1500 / 111 / 66 / 3 / 385 / 580 / 121 / 5 / 105 / 16 |
| Peach Perfect With Raspberry Drizzle | 1 serving | only in draft B | not found | 1450 / 98 / 63 / 2.5 / 360 / 550 / 129 / 2 / 109 / 13 |
| Coconut Cream Pie Cheesecake | 1 serving | only in draft B | not found | 1370 / 98 / 64 / 2.5 / 335 / 530 / 114 / 5 / 93 / 12 |
| Adam's Peanut Butter Cup Fudge Ripple | 1 serving | only in draft B | not found | 1250 / 82 / 43 / 2 / 245 / 750 / 118 / 5 / 94 / 18 |
| Triple Berry Bliss | 1 serving | only in draft B | not found | 1300 / 86 / 50 / 2.5 / 305 / 580 / 122 / 2 / 94 / 11 |
| Cookie Dough Lover's Cheesecake with Pecans | 1 serving | only in draft B | not found | 1550 / 105 / 62 / 3 / 375 / 650 / 145 / 5 / 110 / 15 |
| Pineapple Upside-Down Cheesecake | 1 serving | only in draft B | not found | 1260 / 83 / 47 / 2 / 310 / 510 / 109 / 1 / 99 / 10 |
| Celebration Cheesecake | 1 serving | only in draft B | not found | 1380 / 98 / 58 / 3.5 / 370 / 740 / 114 / 1 / 87 / 15 |
| Cinnamon® Cinnamon Swirl Cheesecake | 1 serving | only in draft B | not found | 1370 / 85 / 51 / 3 / 275 / 710 / 141 / 2 / 120 / 10 |
| Salted Caramel Cheesecake | 1 serving | only in draft B | not found | 1240 / 73 / 43 / 2.5 / 300 / 750 / 130 / 2 / 107 / 15 |
| Toasted Marshmallow S'mores GaloreTM | 1 serving | only in draft B | not found | 1550 / 108 / 67 / 3 / 350 / 570 / 141 / 6 / 102 / 14 |
| Dulce De Leche Caramel Cheesecake | 1 serving | only in draft B | not found | 1390 / 110 / 61 / 3 / 385 / 600 / 107 / 2 / 83 / 14 |
| White Chocolate Raspberry Truffle® | 1 serving | only in draft B | not found | 1220 / 89 / 57 / 3 / 365 / 550 / 92 / 1 / 78 / 13 |
| Mango Key Lime Cheesecake | 1 serving | only in draft B | not found | 1300 / 85 / 54 / 2.5 / 350 / 520 / 123 / 2 / 97 / 13 |
| Fresh Banana Cream Cheesecake | 1 serving | only in draft B | not found | 1250 / 90 / 56 / 3 / 405 / 510 / 99 / 3 / 79 / 14 |
| Lemon Raspberry Cream Cheesecake | 1 serving | only in draft B | not found | 1040 / 73 / 42 / 2.5 / 320 / 420 / 87 / 2 / 72 / 10 |
| Chocolate Tuxedo Cream® Cheesecake | 1 serving | only in draft B | not found | 1250 / 90 / 55 / 2.5 / 305 / 400 / 109 / 5 / 87 / 11 |
| Chocolate Caramelicious Cheesecake Made With Snickers® | 1 serving | only in draft B | not found | 1370 / 96 / 50 / 2.5 / 340 / 400 / 116 / 6 / 96 / 19 |
| Chocolate Mousse Cheesecake | 1 serving | only in draft B | not found | 1220 / 94 / 58 / 3 / 385 / 480 / 85 / 4 / 69 / 13 |
| Lemon Meringue Cheesecake | 1 serving | only in draft B | not found | 1170 / 73 / 48 / 2 / 315 / 510 / 117 / 1 / 95 / 13 |
| Hershey's® Chocolate Bar Cheesecake | 1 serving | only in draft B | not found | 1320 / 85 / 49 / 2.5 / 275 / 610 / 135 / 7 / 109 / 14 |
| Vanilla Bean Cheesecake | 1 serving | only in draft B | not found | 1170 / 88 / 57 / 2.5 / 325 / 480 / 84 / 1 / 68 / 11 |
| Tiramisu Cheesecake | 1 serving | only in draft B | not found | 980 / 70 / 41 / 2 / 310 / 450 / 75 / 1 / 64 / 11 |
| Key Lime Cheesecake | 1 serving | only in draft B | not found | 1160 / 86 / 53 / 3 / 470 / 430 / 92 / 1 / 74 / 13 |
| Caramel Pecan Turtle Cheesecake | 1 serving | only in draft B | not found | 1300 / 88 / 50 / 2.5 / 340 / 450 / 124 / 6 / 102 / 15 |
| Pumpkin | 1 serving | only in draft B | not found | 1040 / 79 / 48 / 2.5 / 330 / 500 / 76 / 2 / 60 / 10 |
| Pumpkin Pecan | 1 serving | only in draft B | not found | 1270 / 90 / 46 / 2.5 / 355 / 450 / 105 / 4 / 74 / 14 |
| A La Mode | 1 serving | only in draft B | not found | 400 / 24 / 16 / 1 / 95 / 110 / 36 / 0 / 34 / 8 |
| Hot Fudge | 1 serving | only in draft B | not found | 280 / 20 / 13 / 0 / 40 / 20 / 27 / 3 / 19 / 3 |
| Linda's Fudge Cake | 1 serving | only in draft B | not found | 1450 / 66 / 29 / 1.5 / 145 / 1040 / 233 / 9 / 165 / 13 |
| Carrot Cake | 1 serving | only in draft B | not found | 1720 / 122 / 57 / 3.5 / 300 / 1060 / 146 / 5 / 116 / 15 |
| Chocolate Tower Truffle CakeTM | 1 serving | only in draft B | not found | 1770 / 111 / 60 / 2.5 / 375 / 970 / 192 / 11 / 143 / 20 |
| Tiramisu | 1 serving | only in draft B | not found | 1270 / 94 / 52 / 3 / 455 / 340 / 91 / 1 / 66 / 13 |
| Warm Apple Crisp | 1 serving | only in draft B | not found | 1000 / 33 / 19 / 1 / 105 / 390 / 170 / 3 / 139 / 9 |
| Fresh Strawberry Shortcake | 1 serving | only in draft B | not found | 1340 / 76 / 47 / 1.5 / 265 / 1140 / 143 / 3 / 77 / 25 |
| Godiva® Chocolate Brownie Sundae - Serves 2-4 | 1 serving | only in draft B | not found | 1750 / 118 / 71 / 2 / 330 / 420 / 168 / 10 / 134 / 25 |
| Chocolate Milkshake | 1 serving | only in draft B | not found | 1260 / 67 / 43 / 2.5 / 220 / 410 / 143 / 2 / 123 / 22 |
| Vanilla Milkshake | 1 serving | only in draft B | not found | 1210 / 66 / 42 / 2.5 / 220 / 370 / 132 / 0 / 117 / 21 |
| Strawberry Milkshake | 1 serving | only in draft B | not found | 1210 / 59 / 37 / 2 / 190 / 320 / 154 / 4 / 131 / 19 |
| Oreo® Milkshake | 1 serving | only in draft B | not found | 1630 / 90 / 50 / 3 / 235 / 770 / 182 / 2 / 134 / 26 |
| Strawberry Fruit Smoothie | 1 serving | only in draft B | not found | 340 / 6 / 4.5 / 0 / 0 / 25 / 74 / 5 / 62 / 2 |
| Tropical Smoothie | 1 serving | only in draft B | not found | 400 / 5 / 4.5 / 0 / 0 / 35 / 87 / 2 / 83 / 2 |
| Peach Smoothie | 1 serving | only in draft B | not found | 330 / 0 / 0 / 0 / 0 / 15 / 82 / 3 / 78 / 2 |
| Frozen Iced Mango | 1 serving | only in draft B | not found | 360 / 4 / 3.5 / 0 / 0 / 20 / 80 / 2 / 76 / 2 |
| Strawberry Fruit Smoothie (HI) | 1 serving | only in draft B | not found | 350 / 6 / 4.5 / 0 / 0 / 25 / 76 / 5 / 64 / 2 |
| Tropical Smoothie (HI) | 1 serving | only in draft B | not found | 410 / 5 / 4.5 / 0 / 0 / 35 / 90 / 2 / 85 / 2 |
| Peach Smoothie (HI) | 1 serving | only in draft B | not found | 340 / 0 / 0 / 0 / 0 / 15 / 85 / 3 / 80 / 2 |
| Frozen Iced Mango (HI) | 1 serving | only in draft B | not found | 370 / 4 / 3.5 / 0 / 0 / 20 / 83 / 2 / 79 / 2 |
| Café (PR) | 1 serving | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 20 / 1 / 0 / 0 / 0 |
| Café Cortadito (PR) | 1 serving | only in draft B | not found | 15 / 0.5 / 0 / 0 / 0 / 15 / 2 / 0 / 1 / 1 |
| Café con Leche (PR) | 1 serving | only in draft B | not found | 100 / 5 / 3.5 / 0 / 25 / 85 / 9 / 0 / 8 / 5 |
| Matcha Latte | 1 serving | only in draft B | not found | 170 / 3 / 2 / 0 / 15 / 105 / 29 / 1 / 27 / 7 |
| Cappuccino | 1 serving | only in draft B | not found | 100 / 3 / 2 / 0 / 15 / 110 / 11 / 0 / 9 / 7 |
| Cafe Latte | 1 serving | only in draft B | not found | 140 / 4.5 / 2.5 / 0 / 20 / 160 / 16 / 0 / 14 / 10 |
| Cafe Mocha | 1 serving | only in draft B | not found | 630 / 46 / 29 / 1.5 / 145 / 150 / 48 / 3 / 38 / 11 |

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
| Bottled Light Beer | 12 oz | 100 / 0 / 0 / 0 / 0 / 15 / 6 / 0 / 0 / 1 |
| “Happy Hour” Burger | 1 serving | 1140 / 70 / 31 / 3 / 230 / 3180 / 72 / 3 / 26 / 54 |
| SkinnyLicious® Margarita | 1 serving | 150 / 0 / 0 / 0 / 0 / 125 / 17 / 0 / 12 / 0 |
| Shepherd's Pie | 1 serving | 1030 / 60 / 30 / 3 / 220 / 2670 / 66 / 10 / 12 / 55 |
| Sangria | 1 serving | 160 / 0 / 0 / 0 / 0 / 10 / 24 / 2 / 21 / 1 |
| Passion Fruit Mojito | 1 serving | 270 / 0 / 0 / 0 / 0 / 20 / 34 / 1 / 31 / 0 |
| Japanese Whisky Sour | 1 serving | 250 / 0 / 0 / 0 / 0 / 1 / 26 / 0 / 25 / 0 |
| Pineapple Mezcal (PR) | 1 serving | 270 / 0 / 0 / 0 / 0 / 250 / 36 / 1 / 33 / 0 |
