# Portillo's: lines for a person

Guide: https://www.portillos.com/assets/1/6/NutritionAllergen_V10_0408.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (90)

Fix each line in `menus/portillos.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Baked Mostaccioli without Sauce | 1 serving | only in draft A | 1080 / 51 / 28 / 0 / 137 / 2489 / 105 / 8 / 12 / 55 | not found |
| Baked Mostaccioli with Marinara Sauce | 1 serving | only in draft A | 1440 / 69 / 38 / 0 / 195 / 3270 / 126 / 9 / 12 / 81 | not found |
| Baked Mostaccioli with Meat Sauce | 1 serving | only in draft A | 1400 / 62 / 33 / 0 / 187 / 3372 / 130 / 9 / 15 / 83 | not found |
| Fettuccine Alfredo | 1 serving | differ: trans_fat_g | 1890 / 103 / 60 / 0 / 295 / 2889 / 154 / 6 / 11 / 95 | 1890 / 103 / 60 / – / 295 / 2889 / 154 / 6 / 11 / 95 |
| Mostaccioli without sauce | Large | only in draft A | 760 / 11 / 5 / 0 / 21 / 446 / 137 / 6 / 3 / 32 | not found |
| Mostaccioli with Marinara Sauce | Large | only in draft A | 1030 / 24 / 8 / 0 / 54 / 2450 / 165 / 12 / 20 / 42 | not found |
| Mostaccioli with Meat Sauce | Large | only in draft A | 1090 / 34 / 16 / 0 / 66 / 2297 / 158 / 12 / 16 / 40 | not found |
| Mostaccioli without Sauce | Small | only in draft A | 510 / 10 / 5 / 0 / 21 / 413 / 84 / 4 / 2 / 23 | not found |
| Mostaccioli with Marinara Sauce | Small | only in draft A | 690 / 19 / 7 / 0 / 43 / 1749 / 103 / 8 / 13 / 30 | not found |
| Mostaccioli with Meat Sauce | Small | only in draft A | 730 / 25 / 12 / 0 / 51 / 1647 / 99 / 8 / 10 / 28 | not found |
| Penne All Arrabbiata | 1 serving | differ: trans_fat_g | 1170 / 59 / 19 / 0 / 61 / 2451 / 126 / 11 / 13 / 34 | 1170 / 59 / 19 / – / 61 / 2451 / 126 / 11 / 13 / 34 |
| Rigatoni Ala Vodka | 1 serving | differ: trans_fat_g | 2330 / 151 / 88 / 0 / 425 / 1744 / 193 / 11 / 9 / 54 | 2330 / 151 / 88 / – / 425 / 1744 / 193 / 11 / 9 / 54 |
| Spaghetti without Sauce | Large | only in draft A | 760 / 11 / 5 / 0 / 21 / 446 / 137 / 6 / 3 / 32 | not found |
| Spaghetti with Marinara Sauce | Large | only in draft A | 1030 / 24 / 8 / 0 / 54 / 2450 / 165 / 12 / 20 / 42 | not found |
| Spaghetti with Meat Sauce | Large | only in draft A | 1090 / 34 / 16 / 0 / 66 / 2297 / 158 / 12 / 16 / 40 | not found |
| Spaghetti without Sauce | Small | only in draft A | 510 / 10 / 5 / 0 / 21 / 413 / 84 / 4 / 2 / 23 | not found |
| Spaghetti with Marinara Sauce | Small | only in draft A | 690 / 19 / 7 / 0 / 43 / 1749 / 103 / 8 / 13 / 30 | not found |
| Spaghetti with Meat Sauce | Small | only in draft A | 730 / 25 / 12 / 0 / 51 / 1647 / 103 / 8 / 10 / 28 | not found |
| Breaded Chicken | 1 serving | differ: trans_fat_g | 310 / 12 / 2 / 0 / 65 / 1680 / 26 / 0 / 1 / 23 | 310 / 12 / 2 / – / 65 / 1680 / 26 / 0 / 1 / 23 |
| Breaded Whitefish | 1 serving | differ: trans_fat_g | 250 / 13 / 5 / 0 / 40 / 430 / 17 / 0 / 0 / 12 | 250 / 13 / 5 / – / 40 / 430 / 17 / 0 / 0 / 12 |
| Burger Patty | 1 serving | differ: trans_fat_g | 280 / 18 / 7 / 0 / 94 / 526 / 0 / 0 / 0 / 27 | 280 / 18 / 7 / – / 94 / 526 / 0 / 0 / 0 / 27 |
| Char-Broiled Chicken | 1 serving | differ: trans_fat_g | 130 / 4 / 1 / 0 / 55 / 390 / 2 / 0 / 0 / 21 | 130 / 4 / 1 / – / 55 / 390 / 2 / 0 / 0 / 21 |
| Char-Grilled Polish Sausage | 1 serving | differ: trans_fat_g | 400 / 35 / 13 / 0 / 88 / 1450 / 3 / 0 / 3 / 20 | 400 / 35 / 13 / – / 88 / 1450 / 3 / 0 / 3 / 20 |
| Hot Dog | 1 serving | differ: trans_fat_g | 150 / 12 / 5 / 0 / 30 / 480 / 2 / 0 / 1 / 7 | 150 / 12 / 5 / – / 30 / 480 / 2 / 0 / 1 / 7 |
| Jumbo Hot Dog | 1 serving | differ: trans_fat_g | 260 / 22 / 9 / 0 / 55 / 970 / 3 / 0 / 2 / 13 | 260 / 22 / 9 / – / 55 / 970 / 3 / 0 / 2 / 13 |
| Brioche Bun | 1 serving | differ: trans_fat_g | 190 / 4 / 2 / 0 / 10 / 300 / 33 / 1 / 7 / 7 | 190 / 4 / 2 / – / 10 / 300 / 33 / 1 / 7 / 7 |
| French Bread | 6 inch | differ: trans_fat_g | 300 / 2 / 0 / 0 / 0 / 720 / 58 / 0 / 2 / 10 | 300 / 2 / 0 / – / 0 / 720 / 58 / 0 / 2 / 10 |
| Hamburger Bun | 1 serving | differ: trans_fat_g | 220 / 3 / 0 / 0 / 0 / 400 / 42 / 1 / 4 / 7 | 220 / 3 / 0 / – / 0 / 400 / 42 / 1 / 4 / 7 |
| Hot Dog Bun | 1 serving | differ: trans_fat_g | 140 / 3 / 0 / 0 / 0 / 270 / 26 / 0 / 3 / 4 | 140 / 3 / 0 / – / 0 / 270 / 26 / 0 / 3 / 4 |
| Croissant | 3 oz | differ: trans_fat_g | 260 / 7 / 3 / 0 / 0 / 350 / 43 / 1 / 6 / 6 | 260 / 7 / 3 / – / 0 / 350 / 43 / 1 / 6 / 6 |
| Chocolate Eclair Cake | 1 serving | differ: trans_fat_g | 520 / 18 / 7 / 0 / 17 / 512 / 83 / 4 / 51 / 6 | 520 / 18 / 7 / – / 17 / 512 / 83 / 4 / 51 / 6 |
| Lemon Cake | 1 serving | differ: trans_fat_g | 700 / 29 / 11 / 0 / 74 / 573 / 103 / 1 / 75 / 5 | 700 / 29 / 11 / – / 74 / 573 / 103 / 1 / 75 / 5 |
| Portillo's Famous Chocolate Cake | 1 serving | differ: trans_fat_g | 720 / 37 / 11 / 0 / 119 / 780 / 86 / 4 / 64 / 6 | 720 / 37 / 11 / – / 119 / 780 / 86 / 4 / 64 / 6 |
| Strawberry Shortcake | 1 serving | differ: trans_fat_g | 480 / 20 / 12 / 0 / 66 / 311 / 73 / 2 / 62 / 3 | 480 / 20 / 12 / – / 66 / 311 / 73 / 2 / 62 / 3 |
| Cherry Coke | Small | differ: trans_fat_g | 156 / 0 / 0 / 0 / 0 / 0 / 6 / 42 / 0 / 42 | 156 / 0 / 0 / – / 0 / 0 / 6 / 42 / 0 / 42 |
| Cherry Coke | Large | differ: trans_fat_g | 250 / 0 / 0 / 0 / 0 / 0 / 10 / 67 / 0 / 67 | 250 / 0 / 0 / – / 0 / 0 / 10 / 67 / 0 / 67 |
| Chocolate Cake Shake | Small | differ: trans_fat_g | 850 / 25 / 10 / 0 / 88 / 738 / 138 / 2 / 114 / 13 | 850 / 25 / 10 / – / 88 / 738 / 138 / 2 / 114 / 13 |
| Chocolate Cake Shake | Large | differ: trans_fat_g | 1490 / 47 / 18 / 0 / 161 / 1325 / 240 / 4 / 197 / 21 | 1490 / 47 / 18 / – / 161 / 1325 / 240 / 4 / 197 / 21 |
| Chocolate Covered Strawberry Shake | Small | differ: trans_fat_g | 940 / 23 / 13 / 0 / 35 / 598 / 163 / 4 / 143 / 13 | 940 / 23 / 13 / – / 35 / 598 / 163 / 4 / 143 / 13 |
| Chocolate Covered Strawberry Shake | Large | differ: trans_fat_g | 1470 / 35 / 20 / 0 / 56 / 935 / 257 / 6 / 225 / 20 | 1470 / 35 / 20 / – / 56 / 935 / 257 / 6 / 225 / 20 |
| Chocolate Shake | Small | differ: trans_fat_g | 540 / 9 / 6 / 0 / 37 / 405 / 102 / 1 / 87 / 13 | 540 / 9 / 6 / – / 37 / 405 / 102 / 1 / 87 / 13 |
| Chocolate Shake | Large | differ: trans_fat_g | 890 / 14 / 9 / 0 / 59 / 657 / 168 / 1 / 143 / 20 | 890 / 14 / 9 / – / 59 / 657 / 168 / 1 / 143 / 20 |
| Coke | Small | differ: trans_fat_g | 150 / 0 / 0 / 0 / 0 / 9 / 41 / 0 / 41 / 0 | 150 / 0 / 0 / – / 0 / 9 / 41 / 0 / 41 / 0 |
| Coke | Large | differ: trans_fat_g | 240 / 0 / 0 / 0 / 0 / 14 / 65 / 0 / 65 / 0 | 240 / 0 / 0 / – / 0 / 14 / 65 / 0 / 65 / 0 |
| Coke Zero | Small | differ: trans_fat_g | 1 / 0 / 0 / 0 / 0 / 42 / 0 / 0 / 0 / 0 | 1 / 0 / 0 / – / 0 / 42 / 0 / 0 / 0 / 0 |
| Coke Zero | Large | differ: trans_fat_g | 2 / 0 / 0 / 0 / 0 / 67 / 0 / 0 / 0 / 0 | 2 / 0 / 0 / – / 0 / 67 / 0 / 0 / 0 / 0 |
| Diet Coke | Small | differ: trans_fat_g | 0 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / – / 0 / 15 / 0 / 0 / 0 / 0 |
| Diet Coke | Large | differ: trans_fat_g | 0 / 0 / 0 / 0 / 0 / 24 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / – / 0 / 24 / 0 / 0 / 0 / 0 |
| Dr. Pepper | Small | differ: trans_fat_g | 165 / 0 / 0 / 0 / 0 / 53 / 41 / 0 / 41 / 0 | 165 / 0 / 0 / – / 0 / 53 / 41 / 0 / 41 / 0 |
| Dr. Pepper | Large | differ: trans_fat_g | 264 / 0 / 0 / 0 / 0 / 84 / 65 / 0 / 65 / 0 | 264 / 0 / 0 / – / 0 / 84 / 65 / 0 / 65 / 0 |
| Fanta Orange Soda | Small | differ: trans_fat_g | 167 / 0 / 0 / 0 / 0 / 53 / 53 / 0 / 53 / 0 | 167 / 0 / 0 / – / 0 / 53 / 53 / 0 / 53 / 0 |
| Fantasy Orange Soda | Large | differ: trans_fat_g | 266 / 0 / 0 / 0 / 0 / 84 / 84 / 0 / 84 / 0 | 266 / 0 / 0 / – / 0 / 84 / 84 / 0 / 84 / 0 |
| Hi-C Flashin Fruit Punch | Small | differ: trans_fat_g | 160 / 0 / 0 / 0 / 0 / 13 / 42 / 0 / 42 / 0 | 160 / 0 / 0 / – / 0 / 13 / 42 / 0 / 42 / 0 |
| Hi-C Flashin Fruit Punch | Large | differ: trans_fat_g | 250 / 0 / 0 / 0 / 0 / 22 / 67 / 0 / 67 / 0 | 250 / 0 / 0 / – / 0 / 22 / 67 / 0 / 67 / 0 |
| Iced Tea | Small | differ: trans_fat_g | 0 / 0 / 0 / 0 / 0 / 8 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / – / 0 / 8 / 0 / 0 / 0 / 0 |
| Iced Tea | Large | differ: trans_fat_g | 0 / 0 / 0 / 0 / 0 / 12 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / – / 0 / 12 / 0 / 0 / 0 / 0 |
| Milk | 1 serving | differ: trans_fat_g | 120 / 5 / 4 / 0 / 25 / 120 / 11 / 0 / 11 / 8 | 120 / 5 / 4 / – / 25 / 120 / 11 / 0 / 11 / 8 |
| Minute Maid Lemonade | Small | differ: trans_fat_g | 150 / 0 / 0 / 0 / 0 / 61 / 39 / 0 / 39 / 0 | 150 / 0 / 0 / – / 0 / 61 / 39 / 0 / 39 / 0 |
| Minute Maid Lemonade | Large | differ: trans_fat_g | 230 / 0 / 0 / 0 / 0 / 98 / 62 / 0 / 62 / 0 | 230 / 0 / 0 / – / 0 / 98 / 62 / 0 / 62 / 0 |
| Root Beer | Small | differ: trans_fat_g | 170 / 0 / 0 / 0 / 0 / 36 / 45 / 0 / 45 / 0 | 170 / 0 / 0 / – / 0 / 36 / 45 / 0 / 45 / 0 |
| Root Beer | Large | differ: trans_fat_g | 270 / 0 / 0 / 0 / 0 / 58 / 72 / 0 / 72 / 0 | 270 / 0 / 0 / – / 0 / 58 / 72 / 0 / 72 / 0 |
| Sprite | Small | differ: trans_fat_g | 150 / 0 / 0 / 0 / 0 / 0 / 33 / 39 / 0 / 39 | 150 / 0 / 0 / – / 0 / 0 / 33 / 39 / 0 / 39 |
| Sprite | Large | differ: trans_fat_g | 230 / 0 / 0 / 0 / 0 / 0 / 53 / 62 / 0 / 62 | 230 / 0 / 0 / – / 0 / 0 / 53 / 62 / 0 / 62 |
| Strawberry Shake | Small | differ: trans_fat_g | 520 / 8 / 6 / 0 / 35 / 379 / 96 / 1 / 82 / 13 | 520 / 8 / 6 / – / 35 / 379 / 96 / 1 / 82 / 13 |
| Strawberry Shake | Large | differ: trans_fat_g | 830 / 14 / 9 / 0 / 56 / 606 / 156 / 2 / 132 / 20 | 830 / 14 / 9 / – / 56 / 606 / 156 / 2 / 132 / 20 |
| Strawberry Hibiscus Aqua Fresca | Small | differ: trans_fat_g | 85 / 0 / 0 / 0 / 0 / 17 / 22 / 0 / 22 / 0 | 85 / 0 / 0 / – / 0 / 17 / 22 / 0 / 22 / 0 |
| Strawberry Hibiscus Aqua Fresca | Large | differ: trans_fat_g | 130 / 0 / 0 / 0 / 0 / 27 / 35 / 0 / 35 / 0 | 130 / 0 / 0 / – / 0 / 27 / 35 / 0 / 35 / 0 |
| Sweet Tea | Small | differ: trans_fat_g | 120 / 0 / 0 / 0 / 0 / 0 / 32 / 0 / 32 / 0 | 120 / 0 / 0 / – / 0 / 0 / 32 / 0 / 32 / 0 |
| Sweet Tea | Large | differ: trans_fat_g | 190 / 0 / 0 / 0 / 0 / 0 / 50 / 0 / 50 / 0 | 190 / 0 / 0 / – / 0 / 0 / 50 / 0 / 50 / 0 |
| Vanilla Shake | Small | differ: trans_fat_g | 500 / 8 / 6 / 0 / 35 / 379 / 91 / 1 / 77 / 13 | 500 / 8 / 6 / – / 35 / 379 / 91 / 1 / 77 / 13 |
| Vanilla Shake | Large | differ: trans_fat_g | 800 / 14 / 9 / 0 / 56 / 606 / 146 / 1 / 124 / 20 | 800 / 14 / 9 / – / 56 / 606 / 146 / 1 / 124 / 20 |
| Add Malt | Small | differ: trans_fat_g | 55 / 1 / 0 / 0 / 0 / 40 / 12 / 0 / 9 / 1 | 55 / 1 / 0 / – / 0 / 40 / 12 / 0 / 9 / 1 |
| Add Malt | Large | differ: trans_fat_g | 83 / 1 / 0 / 0 / 0 / 60 / 18 / 0 / 14 / 2 | 83 / 1 / 0 / – / 0 / 60 / 18 / 0 / 14 / 2 |
| Italian Beef and Sausage Combo | 1 serving | only in draft B | not found | 860 / 49 / 19 / – / 120 / 2272 / 63 / 0 / 5 / 38 |
| Chicago Combo Bowl | 1 serving | only in draft B | not found | 760 / 59 / 23 / – / 178 / 1380 / 4 / 0 / 3 / 51 |
| Baked Mostaccioli | without Sauce | only in draft B | not found | 1080 / 51 / 28 / – / 137 / 2489 / 105 / 8 / 12 / 55 |
| Baked Mostaccioli | with Marinara Sauce | only in draft B | not found | 1440 / 69 / 38 / – / 195 / 3270 / 126 / 9 / 12 / 81 |
| Baked Mostaccioli | with Meat Sauce | only in draft B | not found | 1400 / 62 / 33 / – / 187 / 3372 / 130 / 9 / 15 / 83 |
| Mostaccioli | Large, without sauce | only in draft B | not found | 760 / 11 / 5 / – / 21 / 446 / 137 / 6 / 3 / 32 |
| Mostaccioli | Large, with Marinara Sauce | only in draft B | not found | 1030 / 24 / 8 / – / 54 / 2450 / 165 / 12 / 20 / 42 |
| Mostaccioli | Large, with Meat Sauce | only in draft B | not found | 1090 / 34 / 16 / – / 66 / 2297 / 158 / 12 / 16 / 40 |
| Mostaccioli | Small, without Sauce | only in draft B | not found | 510 / 10 / 5 / – / 21 / 413 / 84 / 4 / 2 / 23 |
| Mostaccioli | Small, with Marinara Sauce | only in draft B | not found | 690 / 19 / 7 / – / 43 / 1749 / 103 / 8 / 13 / 30 |
| Mostaccioli | Small, with Meat Sauce | only in draft B | not found | 730 / 25 / 12 / – / 51 / 1647 / 99 / 8 / 10 / 28 |
| Spaghetti | Large, without Sauce | only in draft B | not found | 760 / 11 / 5 / – / 21 / 446 / 137 / 6 / 3 / 32 |
| Spaghetti | Large, with Marinara Sauce | only in draft B | not found | 1030 / 24 / 8 / – / 54 / 2450 / 165 / 12 / 20 / 42 |
| Spaghetti | Large, with Meat Sauce | only in draft B | not found | 1090 / 34 / 16 / – / 66 / 2297 / 158 / 12 / 16 / 40 |
| Spaghetti | Small, without Sauce | only in draft B | not found | 510 / 10 / 5 / – / 21 / 413 / 84 / 4 / 2 / 23 |
| Spaghetti | Small, with Marinara Sauce | only in draft B | not found | 690 / 19 / 7 / – / 43 / 1749 / 103 / 8 / 13 / 30 |
| Spaghetti | Small, with Meat Sauce | only in draft B | not found | 730 / 25 / 12 / – / 51 / 1647 / 103 / 8 / 10 / 28 |

## Spot check (4 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Hot Dog with Everything | Jumbo | 450 / 25 / 9 / – / 55 / 2050 / 40 / 2 / 14 / 18 |
| Cup of Original Chili with Cheese and Onion | 1 serving | 430 / 20 / 9 / – / 58 / 1764 / 42 / 7 / 6 / 22 |
| Onion Rings | Jumbo | 2400 / 60 / 20 / – / 45 / 5915 / 470 / 10 / 50 / 45 |
| Spicy Chicken Chopped Salad | without dressing | 740 / 34 / 13 / – / 135 / 2336 / 62 / 7 / 8 / 45 |
