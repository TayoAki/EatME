# Zaxbys: lines for a person

Guide: https://www.zaxbys.com/uploads/ZAX_NAI_Guide_Digital_2_01ab6bbb57.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (162)

Fix each line in `menus/zaxbys.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| The Garden Cobb Zalad | 1 serving | differ: protein_g | 510 / 49 / 13 / 0 / 225 / 870 / 34 / 4 / 5 / 25 | 510 / 49 / 13 / 0 / 225 / 870 / 34 / 4 / 5 / – |
| Chicken Finger Plate | 4 | only in draft A | 1110 / 60 / 9 / 0 / 95 / 3230 / 98 / 8 / 16 / 45 | not found |
| Chicken Finger Plate | 5 | only in draft A | 1190 / 64 / 10 / 0 / 110 / 3640 / 101 / 8 / 16 / 54 | not found |
| Chicken Finger Plate | 6 | only in draft A | 1430 / 83 / 13 / 0 / 140 / 4560 / 109 / 8 / 19 / 64 | not found |
| Buffalo Chicken Finger Plate | 4 | only in draft A | 1130 / 62 / 10 / 0 / 95 / 3750 / 98 / 8 / 15 / 46 | not found |
| Buffalo Chicken Finger Plate | 5 | only in draft A | 1220 / 66 / 10 / 0 / 110 / 4340 / 102 / 8 / 15 / 55 | not found |
| Buffalo Chicken Finger Plate | 6 | only in draft A | 1460 / 86 / 13 / 0 / 140 / 5220 / 108 / 8 / 16 / 65 | not found |
| Boneless Wings & Things | 1 serving | only in draft A | 1420 / 83 / 13 / 0 / 135 / 4660 / 111 / 8 / 7 / 62 | not found |
| Buffalo Boneless Wings & Things | 1 serving | only in draft A | 1520 / 91 / 14 / 0 / 145 / 4960 / 117 / 8 / 11 / 59 | not found |
| Traditional Wings & Things | 1 serving | only in draft A | 1440 / 88 / 16 / 0 / 265 / 4520 / 84 / 6 / 7 / 59 | not found |
| Buffalo Traditional Wings & Things | 1 serving | only in draft A | 1450 / 89 / 16 / 0 / 265 / 4850 / 83 / 6 / 6 / 79 | not found |
| Boneless Wings Meal | 5 | only in draft A | 870 / 53 / 6 / 0 / 55 / 2660 / 95 / 7 / 3 / 31 | not found |
| Traditional Wings Meal | 5 | only in draft A | 1030 / 61 / 12 / 0 / 195 / 2780 / 70 / 6 / 4 / 51 | not found |
| Big Zax Snak Meal | 1 serving | only in draft A | 890 / 48 / 7 / 0 / 70 / 2650 / 80 / 6 / 5 / 36 | not found |
| Buffalo Big Zax Snak Meal | 1 serving | only in draft A | 900 / 50 / 8 / 0 / 70 / 2980 / 79 / 6 / 4 / 36 | not found |
| Chicken Bacon Ranch Loaded Fries | 1 serving | differ: protein_g | 1300 / 114 / 23 / 0 / 145 / 3150 / 88 / 8 / 3 / 62 | 1300 / 114 / 23 / 0 / 145 / 3150 / 88 / 8 / 3 / – |
| Texas Toast | Basket | differ: sugars_g | 450 / 21 / 3.5 / 0 / 0 / 1020 / 57 / 3 / 9 / 9 | 450 / 21 / 3.5 / 0 / 0 / 1020 / 57 / 3 / 5 / 9 |
| Texas Toast - Basket | 1 serving | only in draft A | 450 / 21 / 3.5 / 0 / 0 / 1020 / 57 / 3 / 5 / 9 | not found |
| Asian Slaw - side | 1 serving | only in draft A | 100 / 7 / 1 / 0 / 0 / 140 / 10 / 0 / 8 / 1 | not found |
| Veggie Eggroll - 1 Eggroll | 1 serving | only in draft A | 140 / 6 / 1 / 0 / 0 / 350 / 19 / 1 / 2 / 3 | not found |
| Powerade Mountain Berry Blast | Kidz | only in draft A | 160 / 0 / 0 / 0 / 0 / 85 / 43 / 0 / 43 / 0 | not found |
| Coca-Cola Cherry | Large | both read numbers that can't be right: sugars 82 g above carbs 62 g | 510 / 0 / 0 / 0 / 0 / 40 / 62 / 0 / 82 / 0 | 510 / 0 / 0 / 0 / 0 / 40 / 62 / 0 / 82 / 0 |
| Peach Sweet Tea | 1 serving | both read numbers that can't be right: sugars 122 g above carbs 94 g | 340 / 0 / 0 / 0 / 0 / 50 / 94 / 0 / 122 / 0 | 340 / 0 / 0 / 0 / 0 / 50 / 94 / 0 / 122 / 0 |
| Peach Sweet Tea | Medium | differ: carbs_g, sugars_g | 520 / 0 / 0 / 0 / 0 / 55 / 125 / 0 / 163 / 0 | 520 / 0 / 0 / 0 / 0 / 55 / 94 / 0 / 122 / 0 |
| Peach Sweet Tea | Large | both read numbers that can't be right: sugars 163 g above carbs 125 g | 690 / 0 / 0 / 0 / 0 / 75 / 125 / 0 / 163 / 0 | 690 / 0 / 0 / 0 / 0 / 75 / 125 / 0 / 163 / 0 |
| Peach Unsweetened Tea | 1 serving | both read numbers that can't be right: sugars 21 g above carbs 0 g | 100 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 21 / 0 | 100 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 21 / 0 |
| Peach Unsweetened Tea | Small | both read numbers that can't be right: sugars 32 g above carbs 0 g | 140 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 32 / 0 | 140 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 32 / 0 |
| Peach Unsweetened Tea | Medium | both read numbers that can't be right: sugars 42 g above carbs 0 g | 140 / 0 / 0 / 0 / 0 / 75 / 0 / 0 / 42 / 0 | 140 / 0 / 0 / 0 / 0 / 75 / 0 / 0 / 42 / 0 |
| Boneless Wings (No Sauce) | 5 wings | only in draft B | not found | 360 / 19 / 3 / 0 / 55 / 1100 / 27 / 1 / 0 / 22 |
| Boneless Wings-Wimpy | 5 wings | only in draft B | not found | 370 / 18 / 3 / 0 / 55 / 1580 / 30 / 2 / 3 / 22 |
| Boneless Wings-Tongue Torch | 5 wings | only in draft B | not found | 370 / 18 / 3 / 0 / 55 / 1690 / 28 / 2 / 1 / 22 |
| Boneless Wings-Nuclear | 5 wings | only in draft B | not found | 370 / 19 / 3 / 0 / 55 / 1630 / 24 / 2 / 0 / 22 |
| Boneless Wings-Buffalo Garlic Blaze | 5 wings | only in draft B | not found | 410 / 24 / 4 / 0 / 60 / 1880 / 27 / 2 / 0 / 22 |
| Boneless Wings-HHM | 5 wings | only in draft B | not found | 450 / 26 / 4 / 0 / 60 / 1360 / 32 / 2 / 4 / 22 |
| Boneless Wings-Sweet & Spicy | 5 wings | only in draft B | not found | 410 / 19 / 3 / 0 / 50 / 1290 / 39 / 1 / 11 / 22 |
| Boneless Wings-Teriyaki | 5 wings | only in draft B | not found | 400 / 18 / 3 / 0 / 55 / 1410 / 36 / 2 / 8 / 22 |
| Boneless Wings-BBQ | 5 wings | only in draft B | not found | 400 / 18 / 3 / 0 / 50 / 1350 / 36 / 2 / 8 / 22 |
| Traditional Wings (No Sauce) | 1 wing | only in draft B | not found | 80 / 4.5 / 1 / 0 / 35 / 200 / 0 / 0 / 0 / 8 |
| Traditional Wings-Wimpy | 1 wing | only in draft B | not found | 80 / 4.5 / 1 / 0 / 35 / 300 / 1 / 0 / 1 / 9 |
| Traditional Wings-Tongue Torch | 1 wing | only in draft B | not found | 80 / 4.5 / 1 / 0 / 35 / 320 / 0 / 0 / 0 / 9 |
| Traditional Wings-Nuclear | 1 wing | only in draft B | not found | 80 / 5 / 1 / 0 / 35 / 330 / 0 / 0 / 0 / 9 |
| Traditional Wings-Buffalo Garlic Blaze | 1 wing | only in draft B | not found | 90 / 6 / 1.5 / 0 / 40 / 370 / 0 / 0 / 0 / 9 |
| Traditional Wings-HHM | 1 wing | only in draft B | not found | 100 / 6 / 1.5 / 0 / 40 / 260 / 1 / 0 / 1 / 9 |
| Traditional Wings-Sweet & Spicy | 1 wing | only in draft B | not found | 90 / 5 / 1 / 0 / 35 / 240 / 3 / 0 / 2 / 9 |
| Traditional Wings-Teriyaki | 1 wing | only in draft B | not found | 90 / 4.5 / 1 / 0 / 35 / 280 / 2 / 0 / 2 / 9 |
| Traditional Wings-BBQ | 1 wing | only in draft B | not found | 90 / 4.5 / 1 / 0 / 35 / 280 / 3 / 0 / 2 / 9 |
| Traditional Wings (No Sauce) | 5 wings | only in draft B | not found | 380 / 23 / 6 / 0 / 185 / 980 / 0 / 0 / 0 / 42 |
| Traditional Wings-Wimpy | 5 wings | only in draft B | not found | 400 / 24 / 6 / 0 / 185 / 1520 / 5 / 0 / 3 / 43 |
| Traditional Wings-Tongue Torch | 5 wings | only in draft B | not found | 390 / 24 / 6 / 0 / 185 / 1580 / 2 / 0 / 1 / 43 |
| Traditional Wings-Nuclear | 5 wings | only in draft B | not found | 400 / 24 / 6 / 0 / 185 / 1660 / 2 / 1 / 1 / 43 |
| Traditional Wings-Buffalo Garlic Blaze | 5 wings | only in draft B | not found | 440 / 29 / 7 / 0 / 190 / 1820 / 2 / 0 / 1 / 43 |
| Traditional Wings-HHM | 5 wings | only in draft B | not found | 480 / 31 / 7 / 0 / 190 / 1290 / 6 / 0 / 4 / 43 |
| Traditional Wings-Sweet & Spicy | 5 wings | only in draft B | not found | 440 / 24 / 6 / 0 / 185 / 1210 / 13 / 0 / 11 / 43 |
| Traditional Wings-Teriyaki | 5 wings | only in draft B | not found | 430 / 24 / 6 / 0 / 185 / 1390 / 12 / 0 / 10 / 43 |
| Traditional Wings-BBQ | 5 wings | only in draft B | not found | 440 / 23 / 6 / 0 / 185 / 1390 / 14 / 0 / 11 / 43 |
| Chicken Finger (No Sauce) | 1 finger | only in draft B | not found | 80 / 4 / 0.5 / 0 / 20 / 410 / 3 / 0 / 0 / 9 |
| Chicken Finger-Wimpy | 1 finger | only in draft B | not found | 90 / 4 / 0.5 / 0 / 20 / 560 / 4 / 0 / 1 / 9 |
| Chicken Finger-Tongue Torch | 1 finger | only in draft B | not found | 90 / 4 / 0.5 / 0 / 20 / 590 / 4 / 0 / 0 / 9 |
| Chicken Finger-Nuclear | 1 finger | only in draft B | not found | 90 / 4 / 0.5 / 0 / 20 / 560 / 4 / 0 / 0 / 9 |
| Chicken Finger-Buffalo Garlic Blaze | 1 finger | only in draft B | not found | 100 / 6 / 1 / 0 / 20 / 650 / 4 / 0 / 0 / 9 |
| Chicken Finger-HHM | 1 finger | only in draft B | not found | 110 / 6 / 1 / 0 / 20 / 500 / 5 / 0 / 1 / 9 |
| Chicken Finger-Sweet & Spicy | 1 finger | only in draft B | not found | 100 / 4 / 0.5 / 0 / 20 / 480 / 7 / 0 / 3 / 9 |
| Chicken Finger-Teriyaki | 1 finger | only in draft B | not found | 100 / 4 / 0.5 / 0 / 20 / 540 / 7 / 0 / 3 / 9 |
| Chicken Finger-BBQ | 1 finger | only in draft B | not found | 100 / 4 / 0.5 / 0 / 20 / 550 / 8 / 0 / 4 / 9 |
| Chicken Finger (No Sauce) | 5 fingers | only in draft B | not found | 420 / 20 / 3 / 0 / 90 / 2030 / 16 / 0 / 0 / 45 |
| Chicken Finger-Wimpy | 5 fingers | only in draft B | not found | 450 / 20 / 3 / 0 / 95 / 2790 / 22 / 1 / 5 / 46 |
| Chicken Finger-Tongue Torch | 5 fingers | only in draft B | not found | 440 / 20 / 3 / 0 / 95 / 2960 / 19 / 1 / 2 / 46 |
| Chicken Finger-Nuclear | 5 fingers | only in draft B | not found | 440 / 20 / 3 / 0 / 95 / 2800 / 18 / 1 / 1 / 46 |
| Chicken Finger-Buffalo Garlic Blaze | 5 fingers | only in draft B | not found | 510 / 28 / 4.5 / 0 / 100 / 3260 / 18 / 0 / 1 / 46 |
| Chicken Finger-HHM | 5 fingers | only in draft B | not found | 570 / 32 / 5 / 0 / 105 / 2510 / 25 / 0 / 6 / 46 |
| Chicken Finger-Sweet & Spicy | 5 fingers | only in draft B | not found | 510 / 21 / 3 / 0 / 90 / 2380 / 36 / 0 / 17 / 46 |
| Chicken Finger-Teriyaki | 5 fingers | only in draft B | not found | 510 / 20 / 3 / 0 / 95 / 2690 / 35 / 0 / 16 / 47 |
| Chicken Finger-BBQ | 5 fingers | only in draft B | not found | 520 / 20 / 3 / 0 / 90 / 2720 / 39 / 1 / 19 / 46 |
| Ranch | 8 oz | only in draft B | not found | 990 / 105 / 17 / 0.5 / 75 / 1830 / 12 / 0 / 7 / 4 |
| Honey Mustard | 8 oz | only in draft B | not found | 870 / 75 / 12 / 0 / 45 / 1360 / 48 / 1 / 38 / 2 |
| Zax Sauce® | 8 oz | only in draft B | not found | 1040 / 102 / 16 / 0.5 / 85 / 3500 / 30 / 3 / 21 / 3 |
| Spicy Zax Sauce® | 8 oz | only in draft B | not found | 920 / 89 / 14 / 0 / 65 / 3950 / 28 / 2 / 19 / 3 |
| Wimpy™ | 8 oz | only in draft B | not found | 200 / 2 / 0 / 0 / 5 / 4720 / 41 / 4 / 28 / 4 |
| Tongue Torch® | 8 oz | only in draft B | not found | 130 / 2.5 / 0 / 0 / 5 / 5780 / 23 / 4 / 10 / 3 |
| Nuclear™ | 8 oz | only in draft B | not found | 120 / 3.5 / 0.5 / 0 / 5 / 5170 / 19 / 5 / 7 / 4 |
| Buffalo Garlic Blaze | 8 oz | only in draft B | not found | 500 / 49 / 8 / 0 / 55 / 6940 / 12 / 2 / 6 / 2 |
| Hot Honey Mustard | 8 oz | only in draft B | not found | 800 / 65 / 10 / 0 / 70 / 2550 / 51 / 2 / 33 / 3 |
| Sweet & Spicy | 8 oz | only in draft B | not found | 590 / 6 / 1 / 0 / 0 / 2280 / 132 / 1 / 111 / 2 |
| Teriyaki | 8 oz | only in draft B | not found | 450 / 3 / 0 / 0 / 5 / 3400 / 99 / 1 / 83 / 7 |
| BBQ | 8 oz | only in draft B | not found | 330 / 0 / 0 / 0 / 0 / 2300 / 77 / 3 / 62 / 2 |
| Lemon Pepper Dry Rub Seasoning | 0.7 oz | only in draft B | not found | 40 / 0 / 0 / 0 / 0 / 3720 / 5 / 0 / 2 / 0 |
| Garlic Parmesan Dry Rub Seasoning | 0.7 oz | only in draft B | not found | 45 / 1 / 0 / 0 / 0 / 2650 / 6 / 0 / 1 / 0 |
| Nashville Hot Dry Rub Seasoning | 0.7 oz | only in draft B | not found | 70 / 1 / 0 / 0 / 0 / 620 / 14 / 3 / 6 / 1 |
| Honey Mustard | 1 oz | only in draft B | not found | 110 / 9 / 1.5 / 0 / 5 / 170 / 6 / 0 / 5 / 0 |
| Apple Juice | 6oz | only in draft B | not found | 35 / 0 / 0 / 0 / 0 / 15 / 9 / 0 / 8 / 0 |
| Sweet Tea Kidz | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 41 / 0 / 40 / 0 |
| Sweet Tea Kidz | Small | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 0 / 68 / 0 / 66 / 0 |
| Sweet Tea Kidz | Medium | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 0 / 103 / 0 / 100 / 0 |
| Sweet Tea Kidz | Large | only in draft B | not found | 550 / 0 / 0 / 0 / 0 / 0 / 137 / 0 / 133 / 0 |
| Sweet Tea Kidz | Gallon | only in draft B | not found | 1750 / 0 / 0 / 0 / 0 / 0 / 438 / 0 / 425 / 0 |
| Unsweet Tea Kidz | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Unsweet Tea Kidz | Small | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Unsweet Tea Kidz | Medium | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Unsweet Tea Kidz | Large | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Unsweet Tea Kidz | Gallon | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Coca-Cola Kidz | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 40 / 40 / 0 / 40 / 0 |
| Coca-Cola Kidz | Small | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 65 / 67 / 0 / 67 / 0 |
| Coca-Cola Kidz | Medium | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 95 / 100 / 0 / 100 / 0 |
| Coca-Cola Kidz | Large | only in draft B | not found | 530 / 0 / 0 / 0 / 0 / 125 / 133 / 0 / 133 / 0 |
| Dr Pepper Kidz | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 45 / 39 / 0 / 38 / 0 |
| Dr Pepper Kidz | Small | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 75 / 65 / 0 / 64 / 0 |
| Dr Pepper Kidz | Medium | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 110 / 98 / 0 / 96 / 0 |
| Dr Pepper Kidz | Large | only in draft B | not found | 480 / 0 / 0 / 0 / 0 / 150 / 130 / 0 / 128 / 0 |
| Sprite Kidz | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 70 / 36 / 0 / 36 / 0 |
| Sprite Kidz | Small | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 115 / 61 / 0 / 61 / 0 |
| Sprite Kidz | Medium | only in draft B | not found | 370 / 0 / 0 / 0 / 0 / 170 / 91 / 0 / 91 / 0 |
| Sprite Kidz | Large | only in draft B | not found | 490 / 0 / 0 / 0 / 0 / 230 / 121 / 0 / 121 / 0 |
| Diet Coke Kidz | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 |
| Diet Coke Kidz | Small | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 / 0 |
| Diet Coke Kidz | Medium | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 120 / 0 / 0 / 0 / 0 |
| Diet Coke Kidz | Large | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 160 / 0 / 0 / 0 / 0 |
| Barq’s Root Beer Kidz | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 70 / 40 / 0 / 40 / 0 |
| Barq’s Root Beer Kidz | Small | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 115 / 67 / 0 / 67 / 0 |
| Barq’s Root Beer Kidz | Medium | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 170 / 101 / 0 / 101 / 0 |
| Barq’s Root Beer Kidz | Large | only in draft B | not found | 540 / 0 / 0 / 0 / 0 / 230 / 134 / 0 / 134 / 0 |
| Hi-C Flashin' Fruit Punch Kidz | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 75 / 42 / 0 / 41 / 0 |
| Hi-C Flashin' Fruit Punch Kidz | Small | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 120 / 71 / 0 / 69 / 0 |
| Hi-C Flashin' Fruit Punch Kidz | Medium | only in draft B | not found | 420 / 0 / 0 / 0 / 0 / 180 / 106 / 0 / 103 / 0 |
| Hi-C Flashin' Fruit Punch Kidz | Large | only in draft B | not found | 560 / 0 / 0 / 0 / 0 / 240 / 141 / 0 / 138 / 0 |
| Fanta Orange Kidz | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 40 / 40 / 0 / 40 / 0 |
| Fanta Orange Kidz | Small | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 65 / 66 / 0 / 66 / 0 |
| Fanta Orange Kidz | Medium | only in draft B | not found | 370 / 0 / 0 / 0 / 0 / 95 / 99 / 0 / 99 / 0 |
| Fanta Orange Kidz | Large | only in draft B | not found | 490 / 0 / 0 / 0 / 0 / 125 / 132 / 0 / 132 / 0 |
| Coca-Cola Zero Sugar Kidz | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 0 / 0 |
| Coca-Cola Zero Sugar Kidz | Small | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / 0 |
| Coca-Cola Zero Sugar Kidz | Medium | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 100 / 0 / 0 / 0 / 0 |
| Coca-Cola Zero Sugar Kidz | Large | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 135 / 0 / 0 / 0 / 0 |
| Mello Yello Kidz | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 50 / 44 / 0 / 44 / 0 |
| Mello Yello Kidz | Small | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 85 / 73 / 0 / 73 / 0 |
| Mello Yello Kidz | Medium | only in draft B | not found | 430 / 0 / 0 / 0 / 0 / 125 / 109 / 0 / 109 / 0 |
| Mello Yello Kidz | Large | only in draft B | not found | 570 / 0 / 0 / 0 / 0 / 170 / 145 / 0 / 145 / 0 |
| Powerade Mountain Berry Blast Kidz | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 110 / 22 / 0 / 22 / 0 |
| Powerade Mountain Berry Blast Kidz | Small | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 190 / 37 / 0 / 36 / 0 |
| Powerade Mountain Berry Blast Kidz | Medium | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 280 / 55 / 0 / 55 / 0 |
| Powerade Mountain Berry Blast Kidz | Large | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 370 / 73 / 0 / 73 / 0 |
| Fanta Strawberry Kidz | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 85 / 43 / 0 / 43 / 0 |
| Fanta Strawberry Kidz | Small | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 140 / 72 / 0 / 71 / 0 |
| Fanta Strawberry Kidz | Medium | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 210 / 107 / 0 / 106 / 0 |
| Fanta Strawberry Kidz | Large | only in draft B | not found | 530 / 0 / 0 / 0 / 0 / 280 / 143 / 0 / 142 / 0 |
| Coca-Cola Cherry Kidz | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 40 / 43 / 0 / 42 / 0 |
| Coca-Cola Cherry Kidz | Small | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 70 / 72 / 0 / 70 / 0 |
| Coca-Cola Cherry Kidz | Medium | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 105 / 107 / 0 / 105 / 0 |
| Coca-Cola Cherry Kidz | Large | only in draft B | not found | 510 / 0 / 0 / 0 / 0 / 135 / 143 / 0 / 140 / 0 |
| Peach Sweet Tea | Small | only in draft B | not found | 340 / 0 / 0 / 0 / 0 / 40 / 62 / 0 / 82 / 0 |
| Peach UnsweetenedTea | Small | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 21 / 0 |
| Peach UnsweetenedTea | Medium | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 32 / 0 |
| Peach UnsweetenedTea | Large | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 75 / 0 / 0 / 42 / 0 |
| Handcrafted Lemonade Kidz | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 40 / 55 / 0 / 52 / 0 |
| Handcrafted Lemonade Kidz | Small | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 65 / 91 / 0 / 86 / 0 |
| Handcrafted Lemonade Kidz | Medium | only in draft B | not found | 520 / 0 / 0 / 0 / 0 / 95 / 137 / 0 / 129 / 0 |
| Handcrafted Lemonade Kidz | Large | only in draft B | not found | 700 / 0.5 / 0 / 0 / 0 / 130 / 182 / 0 / 172 / 0 |
| Handcrafted Strawberry Lemonade | Small | only in draft B | not found | 430 / 0 / 0 / 0 / 0 / 70 / 110 / 0 / 100 / 0 |
| Handcrafted Strawberry Lemonade | Medium | only in draft B | not found | 620 / 0 / 0 / 0 / 0 / 105 / 160 / 0 / 147 / 0 |
| Handcrafted Strawberry Lemonade | Large | only in draft B | not found | 850 / 0.5 / 0 / 0 / 0 / 140 / 220 / 0 / 200 / 0 |
| Frozen Lemonade | Small | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 55 / 80 / 0 / 76 / 0 |
| Frozen Strawberry Lemonade | Small | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 60 / 103 / 0 / 89 / 0 |
| Kidz | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 85 / 43 / 0 / 43 / 0 |

## Spot check (7 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Boneless Wings-Nuclear | 1 wing | 74 / 4 / 1 / 0 / 11 / 326 / 6 / 0 / 0 / 4 |
| The Garden Asian Zensation Zalad | 1 serving | 390 / 17 / 3 / 0 / 0 / 940 / 53 / 6 / 18 / 8 |
| Unsweet Tea | Medium | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Diet Coke | Small | 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 / 0 |
| Mello Yello | 1 serving | 170 / 0 / 0 / 0 / 0 / 50 / 44 / 0 / 44 / 0 |
| Dr Pepper | 1 serving | 140 / 0 / 0 / 0 / 0 / 45 / 39 / 0 / 38 / 0 |
| Fanta Orange | Small | 250 / 0 / 0 / 0 / 0 / 65 / 66 / 0 / 66 / 0 |
