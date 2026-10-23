# Denny's: lines for a person

Guide: https://www.dennys.com/sites/default/files/2026-05/M2%20Spring%20Core%20Menu%20Nutrition%20Guide.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (26)

Fix each line in `menus/dennys.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Jr. Grand Slam® w/ egg whites, turkey bacon, hash browns & Minute Maid® apple juice | 17 oz | only in draft A | 330 / 9 / 2 / 0 / 30 / 670 / 48 / 1 / 35 / 15 | not found |
| Jr. Grand Slam® w/ scrambled egg, turkey bacon, grapes & Minute Maid® apple juice | 17 oz | only in draft A | 380 / 13 / 3.5 / 0 / 270 / 520 / 51 / 1 / 46 / 15 | not found |
| Premium Chicken Tenders (add sauce choice) | 5 | both read numbers that can't be right: sugars 45 g above carbs 38 g | 680 / 40 / 5 / 0 / 100 / 2520 / 38 / 3 / 45 / 0 | 680 / 40 / 5 / 0 / 100 / 2520 / 38 / 3 / 45 / 0 |
| Zesty Nachos | Half Order (15 oz) | only in draft A | 870 / 55 / 19 / 0.5 / 95 / 1820 / 69 / 6 / 25 / 9 | not found |
| Pot Roast Melt (add side choice) | 11 oz | both read numbers that can't be right: sugars 57 g above carbs 44 g | 770 / 42 / 15 / 0 / 130 / 1640 / 44 / 2 / 57 / 2 | 770 / 42 / 15 / 0 / 130 / 1640 / 44 / 2 / 57 / 2 |
| BONGERS | 14 oz | both read numbers that can't be right: sugars 54 g above carbs 43 g | 1010 / 70 / 23 / 2 / 140 / 1620 / 43 / 6 / 54 / 8 | 1010 / 70 / 23 / 2 / 140 / 1620 / 43 / 6 / 54 / 8 |
| Bacon Avocado Cheeseburger (add side choice) | 19 oz | both read numbers that can't be right: sugars 88 g above carbs 43 g | 1450 / 105 / 38 / 3.5 / 245 / 2270 / 43 / 6 / 88 / 8 | 1450 / 105 / 38 / 3.5 / 245 / 2270 / 43 / 6 / 88 / 8 |
| Double Bacon Avocado Cheeseburger (add side choice) | 14 oz | both read numbers that can't be right: sugars 54 g above carbs 51 g | 870 / 51 / 20 / 2 / 135 / 1670 / 51 / 3 / 54 / 18 | 870 / 51 / 20 / 2 / 135 / 1670 / 51 / 3 / 54 / 18 |
| Bourbon Bacon Burger (add side choice) | 19 oz | both read numbers that can't be right: sugars 88 g above carbs 51 g | 1320 / 86 / 34 / 4 / 235 / 2320 / 51 / 3 / 88 / 18 | 1320 / 86 / 34 / 4 / 235 / 2320 / 51 / 3 / 88 / 18 |
| Cheesy Bacon Ranch Sliders (add side choice) | 14 oz | both read numbers that can't be right: sugars 65 g above carbs 37 g | 920 / 57 / 22 / 3.5 / 170 / 1360 / 37 / 2 / 65 / 7 | 920 / 57 / 22 / 3.5 / 170 / 1360 / 37 / 2 / 65 / 7 |
| Grilled Seasoned Chicken Breast | 1 | both read numbers that can't be right: sugars 29 g above carbs 1 g | 200 / 9 / 2.5 / 0 / 75 / 820 / 1 / 0 / 29 / 0 | 200 / 9 / 2.5 / 0 / 75 / 820 / 1 / 0 / 29 / 0 |
| Slamburger™ (add egg & side choices) | 10 oz | both read numbers that can't be right: sugars 52 g above carbs 46 g | 830 / 49 / 19 / 2.5 / 135 / 1960 / 46 / 2 / 52 / 7 | 830 / 49 / 19 / 2.5 / 135 / 1960 / 46 / 2 / 52 / 7 |
| Double Slamburger™ (add egg & side choices) | 15 oz | both read numbers that can't be right: sugars 85 g above carbs 48 g | 1270 / 83 / 34 / 4 / 240 / 2870 / 48 / 2 / 85 / 7 | 1270 / 83 / 34 / 4 / 240 / 2870 / 48 / 2 / 85 / 7 |
| Triple Juicy Burger (add side choice) | 19 oz | both read numbers that can't be right: sugars 98 g above carbs 44 g | 1510 / 105 / 41 / 4 / 280 / 2760 / 44 / 2 / 98 / 14 | 1510 / 105 / 41 / 4 / 280 / 2760 / 44 / 2 / 98 / 14 |
| Crazy Spicy Sizzlin' Skillet (add optional egg choice) | 20 oz | both read numbers that can't be right: sugars 59 g above carbs 48 g | 1040 / 69 / 23 / 1 / 185 / 3640 / 48 / 5 / 59 / 9 | 1040 / 69 / 23 / 1 / 185 / 3640 / 48 / 5 / 59 / 9 |
| Sirloin Steak w/ dinner bread (add side choices) | 10 oz | both read numbers that can't be right: sugars 49 g above carbs 27 g | 530 / 25 / 7 / 0 / 125 / 1420 / 27 / 1 / 49 / 2 | 530 / 25 / 7 / 0 / 125 / 1420 / 27 / 1 / 49 / 2 |
| Add a meatball | 1 each | both read numbers that can't be right: sugars 9 g above carbs 3 g | 170 / 14 / 6 / 0 / 35 / 380 / 3 / 0 / 9 / 0 | 170 / 14 / 6 / 0 / 35 / 380 / 3 / 0 / 9 / 0 |
| T-Bone Steak w/ dinner bread (add side choices) | 13 oz | both read numbers that can't be right: sugars 57 g above carbs 26 g | 680 / 38 / 14 / 0.5 / 120 / 1690 / 26 / 1 / 57 / 2 | 680 / 38 / 14 / 0.5 / 120 / 1690 / 26 / 1 / 57 / 2 |
| Wild Alaska Salmon w/ dinner bread (add side choices) | 9 oz | both read numbers that can't be right: sugars 37 g above carbs 27 g | 540 / 31 / 8 / 0 / 115 / 1300 / 27 / 1 / 37 / 2 | 540 / 31 / 8 / 0 / 115 / 1300 / 27 / 1 / 37 / 2 |
| Iced Tea (Sweet) | 12 oz | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 40 / 0 / 39 / 0 |
| Milk Shakes: Strawberry | 12 oz | only in draft B | not found | 550 / 26 / 16 / 0 / 105 / 200 / 77 / 1 / 56 / 9 |
| Milk Shakes: Vanilla | 12 oz | only in draft B | not found | 620 / 32 / 21 / 0 / 120 / 220 / 78 / 0 / 68 / 9 |
| Soft Drinks | 8 oz | only in draft B | not found | – / 0 / 0 / 0 / 0 / – / – / 0 / – / 0 |
| English Muffin w/ margarine | 1 | only in draft B | not found | 190 / 6 / 1 / 0 / 0 / 270 / 29 / 1 / 1 / 5 |
| Toast, White, w/ margarine | 2 | only in draft B | not found | 240 / 10 / 2 / 0 / 0 / 400 / 31 / 0 / 2 / 5 |
| Half Order | 15 oz | only in draft B | not found | 870 / 55 / 19 / 0.5 / 95 / 1820 / 69 / 6 / 25 / 9 |

## Spot check (11 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Coffee | 8 oz | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Super Bird® (add side choice) | 11 oz | 680 / 34 / 14 / 0.5 / 120 / 1740 / 47 / 2 / 47 / 4 |
| Wavy-Cut Fries | 5 oz | 400 / 22 / 4 / 0 / 0 / 470 / 46 / 4 / 4 / 0 |
| Mile High Denver Omelette w/ hash browns & white toast | 19 oz | 1090 / 67 / 21 / 1 / 800 / 3130 / 69 / 2 / 12 / 51 |
| All-American Slam® w/ hash browns & white toast | 18 oz | 1200 / 81 / 27 / 0 / 820 / 2550 / 58 / 1 / 3 / 55 |
| Dr Pepper® | 12 oz | 140 / 0 / 0 / 0 / 0 / 45 / 39 / 0 / 39 / 0 |
| Jr. French Toast | 2 | 360 / 16 / 3.5 / 0 / 60 / 470 / 47 / 2 / 8 / 15 |
| Mozzillas™ (add sauce choice) | 4 | 1280 / 58 / 31 / 0 / 125 / 2920 / 140 / 4 / 50 / 4 |
| Sausage | 1.5 oz | 180 / 17 / 5 / 0 / 30 / 330 / 0 / 0 / 0 / 6 |
| Fit Slam® | 15 oz | 450 / 12 / 2.5 / 0 / 30 / 860 / 59 / 5 / 22 / 27 |
| Omelette, Egg White, Plain | 7 oz | 110 / 1.5 / 0 / 0 / 0 / 340 / 1 / 0 / 1 / 20 |
