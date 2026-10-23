# Denny's: lines for a person

Guide: https://www.dennys.com/sites/default/files/2026-05/M2%20Spring%20Core%20Menu%20Nutrition%20Guide.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (34)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/dennys.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Jr. Grand Slam® w/ egg whites, turkey bacon, hash browns & Minute Maid® apple juice | 17 oz | only in draft A | 330 / 9 / 2 / 0 / 30 / 670 / 48 / 1 / 35 / 15 | not found | A: numbers found after the name (line 61); check the size |
| Jr. Grand Slam® w/ scrambled egg, turkey bacon, grapes & Minute Maid® apple juice | 17 oz | only in draft A | 380 / 13 / 3.5 / 0 / 270 / 520 / 51 / 1 / 46 / 15 | not found | A: numbers found after the name (line 62); check the size |
| Premium Chicken Tenders (add sauce choice) | 5 | both read numbers that can't be right: sugars 45 g above carbs 38 g | 680 / 40 / 5 / 0 / 100 / 2520 / 38 / 3 / 45 / 0 | 680 / 40 / 5 / 0 / 100 / 2520 / 38 / 3 / 45 / 0 | A: numbers found after the name (line 279); check the size; B: numbers found after the name (line 279); check the size |
| Zesty Nachos | Half Order (15 oz) | only in draft A | 870 / 55 / 19 / 0.5 / 95 / 1820 / 69 / 6 / 25 / 9 | not found | A: not as drafted (line 280 lacks 870, 55, 19, 0.5, 95, 1820, 69, 6, 9) |
| Pot Roast Melt (add side choice) | 11 oz | both read numbers that can't be right: sugars 57 g above carbs 44 g | 770 / 42 / 15 / 0 / 130 / 1640 / 44 / 2 / 57 / 2 | 770 / 42 / 15 / 0 / 130 / 1640 / 44 / 2 / 57 / 2 | A: numbers found after the name (line 286); check the size; B: numbers found after the name (line 286); check the size |
| BONGERS | 14 oz | both read numbers that can't be right: sugars 54 g above carbs 43 g | 1010 / 70 / 23 / 2 / 140 / 1620 / 43 / 6 / 54 / 8 | 1010 / 70 / 23 / 2 / 140 / 1620 / 43 / 6 / 54 / 8 | A: numbers found after the name (line 297); check the size; B: numbers found after the name (line 297); check the size |
| Bacon Avocado Cheeseburger (add side choice) | 19 oz | both read numbers that can't be right: sugars 88 g above carbs 43 g | 1450 / 105 / 38 / 3.5 / 245 / 2270 / 43 / 6 / 88 / 8 | 1450 / 105 / 38 / 3.5 / 245 / 2270 / 43 / 6 / 88 / 8 | A: numbers found after the name (line 299); check the size; B: numbers found after the name (line 299); check the size |
| Double Bacon Avocado Cheeseburger (add side choice) | 14 oz | both read numbers that can't be right: sugars 54 g above carbs 51 g | 870 / 51 / 20 / 2 / 135 / 1670 / 51 / 3 / 54 / 18 | 870 / 51 / 20 / 2 / 135 / 1670 / 51 / 3 / 54 / 18 | A: numbers found after the name (line 300); check the size; B: numbers found after the name (line 300); check the size |
| Bourbon Bacon Burger (add side choice) | 19 oz | both read numbers that can't be right: sugars 88 g above carbs 51 g | 1320 / 86 / 34 / 4 / 235 / 2320 / 51 / 3 / 88 / 18 | 1320 / 86 / 34 / 4 / 235 / 2320 / 51 / 3 / 88 / 18 | A: numbers found after the name (line 301); check the size; B: numbers found after the name (line 301); check the size |
| Cheesy Bacon Ranch Sliders (add side choice) | 14 oz | both read numbers that can't be right: sugars 65 g above carbs 37 g | 920 / 57 / 22 / 3.5 / 170 / 1360 / 37 / 2 / 65 / 7 | 920 / 57 / 22 / 3.5 / 170 / 1360 / 37 / 2 / 65 / 7 | A: numbers found after the name (line 303); check the size; B: numbers found after the name (line 303); check the size |
| Grilled Seasoned Chicken Breast | 1 | both read numbers that can't be right: sugars 29 g above carbs 1 g | 200 / 9 / 2.5 / 0 / 75 / 820 / 1 / 0 / 29 / 0 | 200 / 9 / 2.5 / 0 / 75 / 820 / 1 / 0 / 29 / 0 | A: numbers found after the name (line 307); check the size; B: numbers found after the name (line 307); check the size |
| Slamburger™ (add egg & side choices) | 10 oz | both read numbers that can't be right: sugars 52 g above carbs 46 g | 830 / 49 / 19 / 2.5 / 135 / 1960 / 46 / 2 / 52 / 7 | 830 / 49 / 19 / 2.5 / 135 / 1960 / 46 / 2 / 52 / 7 | A: numbers found after the name (line 308); check the size; B: numbers found after the name (line 308); check the size |
| Double Slamburger™ (add egg & side choices) | 15 oz | both read numbers that can't be right: sugars 85 g above carbs 48 g | 1270 / 83 / 34 / 4 / 240 / 2870 / 48 / 2 / 85 / 7 | 1270 / 83 / 34 / 4 / 240 / 2870 / 48 / 2 / 85 / 7 | A: numbers found after the name (line 309); check the size; B: numbers found after the name (line 309); check the size |
| Triple Juicy Burger (add side choice) | 19 oz | both read numbers that can't be right: sugars 98 g above carbs 44 g | 1510 / 105 / 41 / 4 / 280 / 2760 / 44 / 2 / 98 / 14 | 1510 / 105 / 41 / 4 / 280 / 2760 / 44 / 2 / 98 / 14 | A: numbers found after the name (line 310); check the size; B: numbers found after the name (line 310); check the size |
| Crazy Spicy Sizzlin' Skillet (add optional egg choice) | 20 oz | both read numbers that can't be right: sugars 59 g above carbs 48 g | 1040 / 69 / 23 / 1 / 185 / 3640 / 48 / 5 / 59 / 9 | 1040 / 69 / 23 / 1 / 185 / 3640 / 48 / 5 / 59 / 9 | A: numbers found after the name (line 314); check the size; B: numbers found after the name (line 314); check the size |
| Sirloin Steak w/ dinner bread (add side choices) | 10 oz | both read numbers that can't be right: sugars 49 g above carbs 27 g | 530 / 25 / 7 / 0 / 125 / 1420 / 27 / 1 / 49 / 2 | 530 / 25 / 7 / 0 / 125 / 1420 / 27 / 1 / 49 / 2 | A: numbers found after the name (line 319); check the size; B: numbers found after the name (line 319); check the size |
| Add a meatball | 1 each | both read numbers that can't be right: sugars 9 g above carbs 3 g | 170 / 14 / 6 / 0 / 35 / 380 / 3 / 0 / 9 / 0 | 170 / 14 / 6 / 0 / 35 / 380 / 3 / 0 / 9 / 0 | A: numbers found after the name (line 321); check the size; B: numbers found after the name (line 321); check the size |
| T-Bone Steak w/ dinner bread (add side choices) | 13 oz | both read numbers that can't be right: sugars 57 g above carbs 26 g | 680 / 38 / 14 / 0.5 / 120 / 1690 / 26 / 1 / 57 / 2 | 680 / 38 / 14 / 0.5 / 120 / 1690 / 26 / 1 / 57 / 2 | A: numbers found after the name (line 323); check the size; B: numbers found after the name (line 323); check the size |
| Wild Alaska Salmon w/ dinner bread (add side choices) | 9 oz | both read numbers that can't be right: sugars 37 g above carbs 27 g | 540 / 31 / 8 / 0 / 115 / 1300 / 27 / 1 / 37 / 2 | 540 / 31 / 8 / 0 / 115 / 1300 / 27 / 1 / 37 / 2 | A: numbers found after the name (line 8); check the size; B: numbers found after the name (line 8); check the size |
| Iced Tea (Sweet) | 12 oz | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 40 / 0 / 39 / 0 | B: numbers found after the name (line 99); check the size |
| Milk Shakes: Strawberry | 12 oz | only in draft B | not found | 550 / 26 / 16 / 0 / 105 / 200 / 77 / 1 / 56 / 9 | B: name not in the guide text |
| Milk Shakes: Vanilla | 12 oz | only in draft B | not found | 620 / 32 / 21 / 0 / 120 / 220 / 78 / 0 / 68 / 9 | B: name not in the guide text |
| Soft Drinks | 8 oz | only in draft B | not found | – / 0 / 0 / 0 / 0 / – / – / 0 / – / 0 | B: numbers found after the name (line 108); check the size, mostly zeros: look |
| English Muffin w/ margarine | 1 | only in draft B | not found | 190 / 6 / 1 / 0 / 0 / 270 / 29 / 1 / 1 / 5 | B: name not in the guide text |
| Toast, White, w/ margarine | 2 | only in draft B | not found | 240 / 10 / 2 / 0 / 0 / 400 / 31 / 0 / 2 / 5 | B: not as drafted (line 54 lacks 240, 10, 2, 400, 31, 0, 2) |
| Half Order | 15 oz | only in draft B | not found | 870 / 55 / 19 / 0.5 / 95 / 1820 / 69 / 6 / 25 / 9 | B: numbers found after the name (line 281); check the size |
| Cali Club Sandwich (add side choice) | 14 oz | both read it the same, but its protein, carbs and fat make 700 kcal, not 840 | 840 / 48 / 13 / 0 / 105 / 2190 / 56 / 9 / 49 / 11 | 840 / 48 / 13 / 0 / 105 / 2190 / 56 / 9 / 49 / 11 | A: numbers found after the name (line 283); check the size; B: numbers found after the name (line 283); check the size |
| Crispy Chicken Bacon Ranch Sandwich (add side choice) | 19 oz | both read it the same, but its protein, carbs and fat make 962 kcal, not 1160 | 1160 / 74 / 21 / 0 / 160 / 2670 / 67 / 6 / 58 / 7 | 1160 / 74 / 21 / 0 / 160 / 2670 / 67 / 6 / 58 / 7 | A: numbers found after the name (line 284); check the size; B: numbers found after the name (line 284); check the size |
| Super Bird® (add side choice) | 11 oz | both read it the same, but its protein, carbs and fat make 510 kcal, not 680 | 680 / 34 / 14 / 0.5 / 120 / 1740 / 47 / 2 / 47 / 4 | 680 / 34 / 14 / 0.5 / 120 / 1740 / 47 / 2 / 47 / 4 | A: numbers found after the name (line 287); check the size; B: numbers found after the name (line 287); check the size |
| Double Cheeseburger (add cheese & side choices) | 10 oz | both read it the same, but its protein, carbs and fat make 446 kcal, not 560 | 560 / 30 / 12 / 2 / 85 / 850 / 37 / 2 / 36 / 7 | 560 / 30 / 12 / 2 / 85 / 850 / 37 / 2 / 36 / 7 | A: numbers found after the name (line 304); check the size; B: numbers found after the name (line 304); check the size |
| Single Cheeseburger (add cheese & side choices) | 10 oz | both read it the same, but its protein, carbs and fat make 446 kcal, not 560 | 560 / 30 / 12 / 2 / 85 / 850 / 37 / 2 / 36 / 7 | 560 / 30 / 12 / 2 / 85 / 850 / 37 / 2 / 36 / 7 | A: numbers found after the name (line 305); check the size; B: numbers found after the name (line 305); check the size |
| Smokehouse Mac 'N' Cheese Skillet™ | 17 oz | both read it the same, but its protein, carbs and fat make 834 kcal, not 990 | 990 / 54 / 21 / 0.5 / 160 / 2940 / 63 / 3 / 64 / 24 | 990 / 54 / 21 / 0.5 / 160 / 2940 / 63 / 3 / 64 / 24 | A: numbers found after the name (line 316); check the size; B: numbers found after the name (line 316); check the size |
| Plate Lickin' Chicken Fried Chicken w/ dinner bread (add side choices) | 16 oz | both read it the same, but its protein, carbs and fat make 842 kcal, not 1070 | 1070 / 62 / 14 / 0 / 170 / 3230 / 68 / 6 / 60 / 3 | 1070 / 62 / 14 / 0 / 170 / 3230 / 68 / 6 / 60 / 3 | A: numbers found after the name (line 317); check the size; B: numbers found after the name (line 317); check the size |
| Premium Chicken Tenders w/ dinner bread (add side & sauce choices) | 10 oz | both read it the same, but its protein, carbs and fat make 683 kcal, not 860 | 860 / 47 / 7 / 0 / 100 / 2860 / 63 / 3 / 51 / 2 | 860 / 47 / 7 / 0 / 100 / 2860 / 63 / 3 / 51 / 2 | A: numbers found after the name (line 318); check the size; B: numbers found after the name (line 318); check the size |

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
