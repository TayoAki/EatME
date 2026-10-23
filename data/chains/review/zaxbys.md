# Zaxbys: lines for a person

Guide: https://www.zaxbys.com/uploads/ZAX_NAI_Guide_Digital_2_01ab6bbb57.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (177)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/zaxbys.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| The Garden Cobb Zalad | 1 serving | differ: protein_g | 510 / 49 / 13 / 0 / 225 / 870 / 34 / 4 / 5 / 25 | 510 / 49 / 13 / 0 / 225 / 870 / 34 / 4 / 5 / – | A: numbers found after the name (line 9); check the size; B: numbers found after the name (line 9); check the size |
| Chicken Finger Plate | 4 | only in draft A | 1110 / 60 / 9 / 0 / 95 / 3230 / 98 / 8 / 16 / 45 | not found | A: numbers found after the name (line 23); check the size |
| Chicken Finger Plate | 5 | only in draft A | 1190 / 64 / 10 / 0 / 110 / 3640 / 101 / 8 / 16 / 54 | not found | A: numbers found after the name (line 24); check the size |
| Chicken Finger Plate | 6 | only in draft A | 1430 / 83 / 13 / 0 / 140 / 4560 / 109 / 8 / 19 / 64 | not found | A: numbers found after the name (line 25); check the size |
| Buffalo Chicken Finger Plate | 4 | only in draft A | 1130 / 62 / 10 / 0 / 95 / 3750 / 98 / 8 / 15 / 46 | not found | A: numbers found after the name (line 26); check the size |
| Buffalo Chicken Finger Plate | 5 | only in draft A | 1220 / 66 / 10 / 0 / 110 / 4340 / 102 / 8 / 15 / 55 | not found | A: numbers found after the name (line 27); check the size |
| Buffalo Chicken Finger Plate | 6 | only in draft A | 1460 / 86 / 13 / 0 / 140 / 5220 / 108 / 8 / 16 / 65 | not found | A: numbers found after the name (line 28); check the size |
| Boneless Wings & Things | 1 serving | only in draft A | 1420 / 83 / 13 / 0 / 135 / 4660 / 111 / 8 / 7 / 62 | not found | A: numbers found after the name (line 29); check the size |
| Buffalo Boneless Wings & Things | 1 serving | only in draft A | 1520 / 91 / 14 / 0 / 145 / 4960 / 117 / 8 / 11 / 59 | not found | A: numbers found after the name (line 30); check the size |
| Traditional Wings & Things | 1 serving | only in draft A | 1440 / 88 / 16 / 0 / 265 / 4520 / 84 / 6 / 7 / 59 | not found | A: numbers found after the name (line 31); check the size |
| Buffalo Traditional Wings & Things | 1 serving | only in draft A | 1450 / 89 / 16 / 0 / 265 / 4850 / 83 / 6 / 6 / 79 | not found | A: numbers found after the name (line 32); check the size |
| Boneless Wings Meal | 5 | only in draft A | 870 / 53 / 6 / 0 / 55 / 2660 / 95 / 7 / 3 / 31 | not found | A: numbers found after the name (line 33); check the size |
| Traditional Wings Meal | 5 | only in draft A | 1030 / 61 / 12 / 0 / 195 / 2780 / 70 / 6 / 4 / 51 | not found | A: numbers found after the name (line 34); check the size |
| Big Zax Snak Meal | 1 serving | only in draft A | 890 / 48 / 7 / 0 / 70 / 2650 / 80 / 6 / 5 / 36 | not found | A: numbers found after the name (line 35); check the size |
| Buffalo Big Zax Snak Meal | 1 serving | only in draft A | 900 / 50 / 8 / 0 / 70 / 2980 / 79 / 6 / 4 / 36 | not found | A: numbers found after the name (line 36); check the size |
| Chicken Bacon Ranch Loaded Fries | 1 serving | differ: protein_g | 1300 / 114 / 23 / 0 / 145 / 3150 / 88 / 8 / 3 / 62 | 1300 / 114 / 23 / 0 / 145 / 3150 / 88 / 8 / 3 / – | A: numbers found after the name (line 148); check the size; B: numbers found after the name (line 148); check the size |
| Texas Toast | Basket | differ: sugars_g | 450 / 21 / 3.5 / 0 / 0 / 1020 / 57 / 3 / 9 / 9 | 450 / 21 / 3.5 / 0 / 0 / 1020 / 57 / 3 / 5 / 9 | A: not as drafted (line 153 lacks 9); B: numbers found after the name (line 153); check the size |
| Texas Toast - Basket | 1 serving | only in draft A | 450 / 21 / 3.5 / 0 / 0 / 1020 / 57 / 3 / 5 / 9 | not found | A: numbers found after the name (line 330); check the size |
| Asian Slaw - side | 1 serving | only in draft A | 100 / 7 / 1 / 0 / 0 / 140 / 10 / 0 / 8 / 1 | not found | A: numbers found after the name (line 332); check the size |
| Veggie Eggroll - 1 Eggroll | 1 serving | only in draft A | 140 / 6 / 1 / 0 / 0 / 350 / 19 / 1 / 2 / 3 | not found | A: numbers found after the name (line 156); check the size |
| Powerade Mountain Berry Blast | Kidz | only in draft A | 160 / 0 / 0 / 0 / 0 / 85 / 43 / 0 / 43 / 0 | not found | A: not as drafted (line 211 lacks 160, 85, 43, 43) |
| Coca-Cola Cherry | Large | both read numbers that can't be right: sugars 82 g above carbs 62 g | 510 / 0 / 0 / 0 / 0 / 40 / 62 / 0 / 82 / 0 | 510 / 0 / 0 / 0 / 0 / 40 / 62 / 0 / 82 / 0 | A: not as drafted (line 218 lacks 510, 62, 82); B: not as drafted (line 218 lacks 510, 62, 82) |
| Peach Sweet Tea | 1 serving | both read numbers that can't be right: sugars 122 g above carbs 94 g | 340 / 0 / 0 / 0 / 0 / 50 / 94 / 0 / 122 / 0 | 340 / 0 / 0 / 0 / 0 / 50 / 94 / 0 / 122 / 0 | A: numbers found after the name (line 401); check the size; B: numbers found after the name (line 401); check the size |
| Peach Sweet Tea | Medium | differ: carbs_g, sugars_g | 520 / 0 / 0 / 0 / 0 / 55 / 125 / 0 / 163 / 0 | 520 / 0 / 0 / 0 / 0 / 55 / 94 / 0 / 122 / 0 | A: not as drafted (line 222 lacks 520, 55, 125, 163); B: not as drafted (line 401 lacks 520, 55) |
| Peach Sweet Tea | Large | both read numbers that can't be right: sugars 163 g above carbs 125 g | 690 / 0 / 0 / 0 / 0 / 75 / 125 / 0 / 163 / 0 | 690 / 0 / 0 / 0 / 0 / 75 / 125 / 0 / 163 / 0 | A: not as drafted (line 222 lacks 690, 75, 125, 163); B: not as drafted (line 222 lacks 690, 75, 125, 163) |
| Peach Unsweetened Tea | 1 serving | both read numbers that can't be right: sugars 21 g above carbs 0 g | 100 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 21 / 0 | 100 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 21 / 0 | A: numbers found after the name (line 404); check the size; B: numbers found after the name (line 404); check the size |
| Peach Unsweetened Tea | Small | both read numbers that can't be right: sugars 32 g above carbs 0 g | 140 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 32 / 0 | 140 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 32 / 0 | A: not as drafted (line 404 lacks 140, 55, 32); B: not as drafted (line 404 lacks 140, 55, 32) |
| Peach Unsweetened Tea | Medium | both read numbers that can't be right: sugars 42 g above carbs 0 g | 140 / 0 / 0 / 0 / 0 / 75 / 0 / 0 / 42 / 0 | 140 / 0 / 0 / 0 / 0 / 75 / 0 / 0 / 42 / 0 | A: not as drafted (line 404 lacks 140, 75, 42); B: not as drafted (line 404 lacks 140, 75, 42) |
| Boneless Wings (No Sauce) | 5 wings | only in draft B | not found | 360 / 19 / 3 / 0 / 55 / 1100 / 27 / 1 / 0 / 22 | B: numbers found after the name (line 46); check the size |
| Boneless Wings-Wimpy | 5 wings | only in draft B | not found | 370 / 18 / 3 / 0 / 55 / 1580 / 30 / 2 / 3 / 22 | B: numbers found after the name (line 47); check the size |
| Boneless Wings-Tongue Torch | 5 wings | only in draft B | not found | 370 / 18 / 3 / 0 / 55 / 1690 / 28 / 2 / 1 / 22 | B: numbers found after the name (line 48); check the size |
| Boneless Wings-Nuclear | 5 wings | only in draft B | not found | 370 / 19 / 3 / 0 / 55 / 1630 / 24 / 2 / 0 / 22 | B: numbers found after the name (line 49); check the size |
| Boneless Wings-Buffalo Garlic Blaze | 5 wings | only in draft B | not found | 410 / 24 / 4 / 0 / 60 / 1880 / 27 / 2 / 0 / 22 | B: numbers found after the name (line 50); check the size |
| Boneless Wings-HHM | 5 wings | only in draft B | not found | 450 / 26 / 4 / 0 / 60 / 1360 / 32 / 2 / 4 / 22 | B: numbers found after the name (line 51); check the size |
| Boneless Wings-Sweet & Spicy | 5 wings | only in draft B | not found | 410 / 19 / 3 / 0 / 50 / 1290 / 39 / 1 / 11 / 22 | B: numbers found after the name (line 52); check the size |
| Boneless Wings-Teriyaki | 5 wings | only in draft B | not found | 400 / 18 / 3 / 0 / 55 / 1410 / 36 / 2 / 8 / 22 | B: numbers found after the name (line 53); check the size |
| Boneless Wings-BBQ | 5 wings | only in draft B | not found | 400 / 18 / 3 / 0 / 50 / 1350 / 36 / 2 / 8 / 22 | B: numbers found after the name (line 54); check the size |
| Traditional Wings (No Sauce) | 1 wing | only in draft B | not found | 80 / 4.5 / 1 / 0 / 35 / 200 / 0 / 0 / 0 / 8 | B: numbers found after the name (line 55); check the size |
| Traditional Wings-Wimpy | 1 wing | only in draft B | not found | 80 / 4.5 / 1 / 0 / 35 / 300 / 1 / 0 / 1 / 9 | B: numbers found after the name (line 56); check the size |
| Traditional Wings-Tongue Torch | 1 wing | only in draft B | not found | 80 / 4.5 / 1 / 0 / 35 / 320 / 0 / 0 / 0 / 9 | B: numbers found after the name (line 57); check the size |
| Traditional Wings-Nuclear | 1 wing | only in draft B | not found | 80 / 5 / 1 / 0 / 35 / 330 / 0 / 0 / 0 / 9 | B: numbers found after the name (line 58); check the size |
| Traditional Wings-Buffalo Garlic Blaze | 1 wing | only in draft B | not found | 90 / 6 / 1.5 / 0 / 40 / 370 / 0 / 0 / 0 / 9 | B: numbers found after the name (line 59); check the size |
| Traditional Wings-HHM | 1 wing | only in draft B | not found | 100 / 6 / 1.5 / 0 / 40 / 260 / 1 / 0 / 1 / 9 | B: numbers found after the name (line 60); check the size |
| Traditional Wings-Sweet & Spicy | 1 wing | only in draft B | not found | 90 / 5 / 1 / 0 / 35 / 240 / 3 / 0 / 2 / 9 | B: numbers found after the name (line 61); check the size |
| Traditional Wings-Teriyaki | 1 wing | only in draft B | not found | 90 / 4.5 / 1 / 0 / 35 / 280 / 2 / 0 / 2 / 9 | B: numbers found after the name (line 62); check the size |
| Traditional Wings-BBQ | 1 wing | only in draft B | not found | 90 / 4.5 / 1 / 0 / 35 / 280 / 3 / 0 / 2 / 9 | B: numbers found after the name (line 63); check the size |
| Traditional Wings (No Sauce) | 5 wings | only in draft B | not found | 380 / 23 / 6 / 0 / 185 / 980 / 0 / 0 / 0 / 42 | B: numbers found after the name (line 64); check the size |
| Traditional Wings-Wimpy | 5 wings | only in draft B | not found | 400 / 24 / 6 / 0 / 185 / 1520 / 5 / 0 / 3 / 43 | B: numbers found after the name (line 65); check the size |
| Traditional Wings-Tongue Torch | 5 wings | only in draft B | not found | 390 / 24 / 6 / 0 / 185 / 1580 / 2 / 0 / 1 / 43 | B: numbers found after the name (line 66); check the size |
| Traditional Wings-Nuclear | 5 wings | only in draft B | not found | 400 / 24 / 6 / 0 / 185 / 1660 / 2 / 1 / 1 / 43 | B: numbers found after the name (line 67); check the size |
| Traditional Wings-Buffalo Garlic Blaze | 5 wings | only in draft B | not found | 440 / 29 / 7 / 0 / 190 / 1820 / 2 / 0 / 1 / 43 | B: numbers found after the name (line 68); check the size |
| Traditional Wings-HHM | 5 wings | only in draft B | not found | 480 / 31 / 7 / 0 / 190 / 1290 / 6 / 0 / 4 / 43 | B: numbers found after the name (line 69); check the size |
| Traditional Wings-Sweet & Spicy | 5 wings | only in draft B | not found | 440 / 24 / 6 / 0 / 185 / 1210 / 13 / 0 / 11 / 43 | B: numbers found after the name (line 70); check the size |
| Traditional Wings-Teriyaki | 5 wings | only in draft B | not found | 430 / 24 / 6 / 0 / 185 / 1390 / 12 / 0 / 10 / 43 | B: numbers found after the name (line 71); check the size |
| Traditional Wings-BBQ | 5 wings | only in draft B | not found | 440 / 23 / 6 / 0 / 185 / 1390 / 14 / 0 / 11 / 43 | B: numbers found after the name (line 72); check the size |
| Chicken Finger (No Sauce) | 1 finger | only in draft B | not found | 80 / 4 / 0.5 / 0 / 20 / 410 / 3 / 0 / 0 / 9 | B: numbers found after the name (line 73); check the size |
| Chicken Finger-Wimpy | 1 finger | only in draft B | not found | 90 / 4 / 0.5 / 0 / 20 / 560 / 4 / 0 / 1 / 9 | B: numbers found after the name (line 74); check the size |
| Chicken Finger-Tongue Torch | 1 finger | only in draft B | not found | 90 / 4 / 0.5 / 0 / 20 / 590 / 4 / 0 / 0 / 9 | B: numbers found after the name (line 75); check the size |
| Chicken Finger-Nuclear | 1 finger | only in draft B | not found | 90 / 4 / 0.5 / 0 / 20 / 560 / 4 / 0 / 0 / 9 | B: numbers found after the name (line 76); check the size |
| Chicken Finger-Buffalo Garlic Blaze | 1 finger | only in draft B | not found | 100 / 6 / 1 / 0 / 20 / 650 / 4 / 0 / 0 / 9 | B: numbers found after the name (line 77); check the size |
| Chicken Finger-HHM | 1 finger | only in draft B | not found | 110 / 6 / 1 / 0 / 20 / 500 / 5 / 0 / 1 / 9 | B: numbers found after the name (line 78); check the size |
| Chicken Finger-Sweet & Spicy | 1 finger | only in draft B | not found | 100 / 4 / 0.5 / 0 / 20 / 480 / 7 / 0 / 3 / 9 | B: numbers found after the name (line 79); check the size |
| Chicken Finger-Teriyaki | 1 finger | only in draft B | not found | 100 / 4 / 0.5 / 0 / 20 / 540 / 7 / 0 / 3 / 9 | B: numbers found after the name (line 80); check the size |
| Chicken Finger-BBQ | 1 finger | only in draft B | not found | 100 / 4 / 0.5 / 0 / 20 / 550 / 8 / 0 / 4 / 9 | B: numbers found after the name (line 81); check the size |
| Chicken Finger (No Sauce) | 5 fingers | only in draft B | not found | 420 / 20 / 3 / 0 / 90 / 2030 / 16 / 0 / 0 / 45 | B: numbers found after the name (line 99); check the size |
| Chicken Finger-Wimpy | 5 fingers | only in draft B | not found | 450 / 20 / 3 / 0 / 95 / 2790 / 22 / 1 / 5 / 46 | B: numbers found after the name (line 101); check the size |
| Chicken Finger-Tongue Torch | 5 fingers | only in draft B | not found | 440 / 20 / 3 / 0 / 95 / 2960 / 19 / 1 / 2 / 46 | B: numbers found after the name (line 102); check the size |
| Chicken Finger-Nuclear | 5 fingers | only in draft B | not found | 440 / 20 / 3 / 0 / 95 / 2800 / 18 / 1 / 1 / 46 | B: numbers found after the name (line 103); check the size |
| Chicken Finger-Buffalo Garlic Blaze | 5 fingers | only in draft B | not found | 510 / 28 / 4.5 / 0 / 100 / 3260 / 18 / 0 / 1 / 46 | B: numbers found after the name (line 104); check the size |
| Chicken Finger-HHM | 5 fingers | only in draft B | not found | 570 / 32 / 5 / 0 / 105 / 2510 / 25 / 0 / 6 / 46 | B: numbers found after the name (line 105); check the size |
| Chicken Finger-Sweet & Spicy | 5 fingers | only in draft B | not found | 510 / 21 / 3 / 0 / 90 / 2380 / 36 / 0 / 17 / 46 | B: numbers found after the name (line 106); check the size |
| Chicken Finger-Teriyaki | 5 fingers | only in draft B | not found | 510 / 20 / 3 / 0 / 95 / 2690 / 35 / 0 / 16 / 47 | B: numbers found after the name (line 107); check the size |
| Chicken Finger-BBQ | 5 fingers | only in draft B | not found | 520 / 20 / 3 / 0 / 90 / 2720 / 39 / 1 / 19 / 46 | B: numbers found after the name (line 108); check the size |
| Ranch | 8 oz | only in draft B | not found | 990 / 105 / 17 / 0.5 / 75 / 1830 / 12 / 0 / 7 / 4 | B: numbers found after the name (line 128); check the size |
| Honey Mustard | 8 oz | only in draft B | not found | 870 / 75 / 12 / 0 / 45 / 1360 / 48 / 1 / 38 / 2 | B: numbers found after the name (line 129); check the size |
| Zax Sauce® | 8 oz | only in draft B | not found | 1040 / 102 / 16 / 0.5 / 85 / 3500 / 30 / 3 / 21 / 3 | B: numbers found after the name (line 130); check the size |
| Spicy Zax Sauce® | 8 oz | only in draft B | not found | 920 / 89 / 14 / 0 / 65 / 3950 / 28 / 2 / 19 / 3 | B: numbers found after the name (line 131); check the size |
| Wimpy™ | 8 oz | only in draft B | not found | 200 / 2 / 0 / 0 / 5 / 4720 / 41 / 4 / 28 / 4 | B: numbers found after the name (line 132); check the size |
| Tongue Torch® | 8 oz | only in draft B | not found | 130 / 2.5 / 0 / 0 / 5 / 5780 / 23 / 4 / 10 / 3 | B: numbers found after the name (line 133); check the size |
| Nuclear™ | 8 oz | only in draft B | not found | 120 / 3.5 / 0.5 / 0 / 5 / 5170 / 19 / 5 / 7 / 4 | B: numbers found after the name (line 134); check the size |
| Buffalo Garlic Blaze | 8 oz | only in draft B | not found | 500 / 49 / 8 / 0 / 55 / 6940 / 12 / 2 / 6 / 2 | B: numbers found after the name (line 135); check the size |
| Hot Honey Mustard | 8 oz | only in draft B | not found | 800 / 65 / 10 / 0 / 70 / 2550 / 51 / 2 / 33 / 3 | B: numbers found after the name (line 136); check the size |
| Sweet & Spicy | 8 oz | only in draft B | not found | 590 / 6 / 1 / 0 / 0 / 2280 / 132 / 1 / 111 / 2 | B: numbers found after the name (line 137); check the size |
| Teriyaki | 8 oz | only in draft B | not found | 450 / 3 / 0 / 0 / 5 / 3400 / 99 / 1 / 83 / 7 | B: numbers found after the name (line 138); check the size |
| BBQ | 8 oz | only in draft B | not found | 330 / 0 / 0 / 0 / 0 / 2300 / 77 / 3 / 62 / 2 | B: numbers found after the name (line 139); check the size |
| Lemon Pepper Dry Rub Seasoning | 0.7 oz | only in draft B | not found | 40 / 0 / 0 / 0 / 0 / 3720 / 5 / 0 / 2 / 0 | B: numbers found after the name (line 140); check the size |
| Garlic Parmesan Dry Rub Seasoning | 0.7 oz | only in draft B | not found | 45 / 1 / 0 / 0 / 0 / 2650 / 6 / 0 / 1 / 0 | B: numbers found after the name (line 141); check the size |
| Nashville Hot Dry Rub Seasoning | 0.7 oz | only in draft B | not found | 70 / 1 / 0 / 0 / 0 / 620 / 14 / 3 / 6 / 1 | B: numbers found after the name (line 142); check the size |
| Honey Mustard | 1 oz | only in draft B | not found | 110 / 9 / 1.5 / 0 / 5 / 170 / 6 / 0 / 5 / 0 | B: numbers found after the name (line 144); check the size |
| Apple Juice | 6oz | only in draft B | not found | 35 / 0 / 0 / 0 / 0 / 15 / 9 / 0 / 8 / 0 | B: numbers found after the name (line 164); check the size |
| Sweet Tea Kidz | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 41 / 0 / 40 / 0 | B: numbers found after the name (line 165); check the size |
| Sweet Tea Kidz | Small | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 0 / 68 / 0 / 66 / 0 | B: not as drafted (line 165 lacks 270, 68, 66) |
| Sweet Tea Kidz | Medium | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 0 / 103 / 0 / 100 / 0 | B: not as drafted (line 165 lacks 410, 103, 100) |
| Sweet Tea Kidz | Large | only in draft B | not found | 550 / 0 / 0 / 0 / 0 / 0 / 137 / 0 / 133 / 0 | B: not as drafted (line 165 lacks 550, 137, 133) |
| Sweet Tea Kidz | Gallon | only in draft B | not found | 1750 / 0 / 0 / 0 / 0 / 0 / 438 / 0 / 425 / 0 | B: not as drafted (line 165 lacks 1750, 438, 425) |
| Unsweet Tea Kidz | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 170); check the size, mostly zeros: look |
| Unsweet Tea Kidz | Small | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 170); check the size, mostly zeros: look |
| Unsweet Tea Kidz | Medium | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 170); check the size, mostly zeros: look |
| Unsweet Tea Kidz | Large | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 170); check the size, mostly zeros: look |
| Unsweet Tea Kidz | Gallon | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 170); check the size, mostly zeros: look |
| Coca-Cola Kidz | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 40 / 40 / 0 / 40 / 0 | B: numbers found after the name (line 175); check the size |
| Coca-Cola Kidz | Small | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 65 / 67 / 0 / 67 / 0 | B: not as drafted (line 175 lacks 270, 65, 67, 67) |
| Coca-Cola Kidz | Medium | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 95 / 100 / 0 / 100 / 0 | B: not as drafted (line 175 lacks 400, 95, 100, 100) |
| Coca-Cola Kidz | Large | only in draft B | not found | 530 / 0 / 0 / 0 / 0 / 125 / 133 / 0 / 133 / 0 | B: not as drafted (line 175 lacks 530, 125, 133, 133) |
| Dr Pepper Kidz | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 45 / 39 / 0 / 38 / 0 | B: numbers found after the name (line 179); check the size |
| Dr Pepper Kidz | Small | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 75 / 65 / 0 / 64 / 0 | B: not as drafted (line 179 lacks 240, 75, 65, 64) |
| Dr Pepper Kidz | Medium | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 110 / 98 / 0 / 96 / 0 | B: not as drafted (line 179 lacks 360, 110, 98, 96) |
| Dr Pepper Kidz | Large | only in draft B | not found | 480 / 0 / 0 / 0 / 0 / 150 / 130 / 0 / 128 / 0 | B: not as drafted (line 179 lacks 480, 150, 130, 128) |
| Sprite Kidz | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 70 / 36 / 0 / 36 / 0 | B: numbers found after the name (line 183); check the size |
| Sprite Kidz | Small | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 115 / 61 / 0 / 61 / 0 | B: not as drafted (line 183 lacks 250, 115, 61, 61) |
| Sprite Kidz | Medium | only in draft B | not found | 370 / 0 / 0 / 0 / 0 / 170 / 91 / 0 / 91 / 0 | B: not as drafted (line 183 lacks 370, 170, 91, 91) |
| Sprite Kidz | Large | only in draft B | not found | 490 / 0 / 0 / 0 / 0 / 230 / 121 / 0 / 121 / 0 | B: not as drafted (line 183 lacks 490, 230, 121, 121) |
| Diet Coke Kidz | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 187); check the size, mostly zeros: look |
| Diet Coke Kidz | Small | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 / 0 | B: not as drafted (line 187 lacks 80) |
| Diet Coke Kidz | Medium | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 120 / 0 / 0 / 0 / 0 | B: not as drafted (line 187 lacks 120) |
| Diet Coke Kidz | Large | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 160 / 0 / 0 / 0 / 0 | B: not as drafted (line 187 lacks 160) |
| Barq’s Root Beer Kidz | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 70 / 40 / 0 / 40 / 0 | B: numbers found after the name (line 191); check the size |
| Barq’s Root Beer Kidz | Small | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 115 / 67 / 0 / 67 / 0 | B: not as drafted (line 191 lacks 270, 115, 67, 67) |
| Barq’s Root Beer Kidz | Medium | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 170 / 101 / 0 / 101 / 0 | B: not as drafted (line 191 lacks 400, 170, 101, 101) |
| Barq’s Root Beer Kidz | Large | only in draft B | not found | 540 / 0 / 0 / 0 / 0 / 230 / 134 / 0 / 134 / 0 | B: not as drafted (line 191 lacks 540, 230, 134, 134) |
| Hi-C Flashin' Fruit Punch Kidz | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 75 / 42 / 0 / 41 / 0 | B: numbers found after the name (line 195); check the size |
| Hi-C Flashin' Fruit Punch Kidz | Small | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 120 / 71 / 0 / 69 / 0 | B: not as drafted (line 195 lacks 280, 120, 71, 69) |
| Hi-C Flashin' Fruit Punch Kidz | Medium | only in draft B | not found | 420 / 0 / 0 / 0 / 0 / 180 / 106 / 0 / 103 / 0 | B: not as drafted (line 195 lacks 420, 180, 106, 103) |
| Hi-C Flashin' Fruit Punch Kidz | Large | only in draft B | not found | 560 / 0 / 0 / 0 / 0 / 240 / 141 / 0 / 138 / 0 | B: not as drafted (line 195 lacks 560, 240, 141, 138) |
| Fanta Orange Kidz | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 40 / 40 / 0 / 40 / 0 | B: numbers found after the name (line 199); check the size |
| Fanta Orange Kidz | Small | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 65 / 66 / 0 / 66 / 0 | B: not as drafted (line 199 lacks 250, 65, 66, 66) |
| Fanta Orange Kidz | Medium | only in draft B | not found | 370 / 0 / 0 / 0 / 0 / 95 / 99 / 0 / 99 / 0 | B: not as drafted (line 199 lacks 370, 95, 99, 99) |
| Fanta Orange Kidz | Large | only in draft B | not found | 490 / 0 / 0 / 0 / 0 / 125 / 132 / 0 / 132 / 0 | B: not as drafted (line 199 lacks 490, 125, 132, 132) |
| Coca-Cola Zero Sugar Kidz | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 203); check the size, mostly zeros: look |
| Coca-Cola Zero Sugar Kidz | Small | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / 0 | B: not as drafted (line 203 lacks 65) |
| Coca-Cola Zero Sugar Kidz | Medium | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 100 / 0 / 0 / 0 / 0 | B: not as drafted (line 203 lacks 100) |
| Coca-Cola Zero Sugar Kidz | Large | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 135 / 0 / 0 / 0 / 0 | B: not as drafted (line 203 lacks 135) |
| Mello Yello Kidz | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 50 / 44 / 0 / 44 / 0 | B: numbers found after the name (line 207); check the size |
| Mello Yello Kidz | Small | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 85 / 73 / 0 / 73 / 0 | B: not as drafted (line 207 lacks 290, 85, 73, 73) |
| Mello Yello Kidz | Medium | only in draft B | not found | 430 / 0 / 0 / 0 / 0 / 125 / 109 / 0 / 109 / 0 | B: not as drafted (line 207 lacks 430, 125, 109, 109) |
| Mello Yello Kidz | Large | only in draft B | not found | 570 / 0 / 0 / 0 / 0 / 170 / 145 / 0 / 145 / 0 | B: not as drafted (line 207 lacks 570, 145, 145) |
| Powerade Mountain Berry Blast Kidz | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 110 / 22 / 0 / 22 / 0 | B: numbers found after the name (line 211); check the size |
| Powerade Mountain Berry Blast Kidz | Small | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 190 / 37 / 0 / 36 / 0 | B: not as drafted (line 211 lacks 150, 190, 37, 36) |
| Powerade Mountain Berry Blast Kidz | Medium | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 280 / 55 / 0 / 55 / 0 | B: not as drafted (line 211 lacks 230, 280, 55, 55) |
| Powerade Mountain Berry Blast Kidz | Large | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 370 / 73 / 0 / 73 / 0 | B: not as drafted (line 211 lacks 300, 370, 73, 73) |
| Fanta Strawberry Kidz | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 85 / 43 / 0 / 43 / 0 | B: numbers found after the name (line 215); check the size |
| Fanta Strawberry Kidz | Small | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 140 / 72 / 0 / 71 / 0 | B: not as drafted (line 215 lacks 260, 140, 72, 71) |
| Fanta Strawberry Kidz | Medium | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 210 / 107 / 0 / 106 / 0 | B: not as drafted (line 215 lacks 400, 210, 107, 106) |
| Fanta Strawberry Kidz | Large | only in draft B | not found | 530 / 0 / 0 / 0 / 0 / 280 / 143 / 0 / 142 / 0 | B: not as drafted (line 215 lacks 530, 280, 143, 142) |
| Coca-Cola Cherry Kidz | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 40 / 43 / 0 / 42 / 0 | B: numbers found after the name (line 218); check the size |
| Coca-Cola Cherry Kidz | Small | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 70 / 72 / 0 / 70 / 0 | B: not as drafted (line 218 lacks 260, 70, 72, 70) |
| Coca-Cola Cherry Kidz | Medium | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 105 / 107 / 0 / 105 / 0 | B: not as drafted (line 218 lacks 380, 105, 107, 105) |
| Coca-Cola Cherry Kidz | Large | only in draft B | not found | 510 / 0 / 0 / 0 / 0 / 135 / 143 / 0 / 140 / 0 | B: not as drafted (line 218 lacks 510, 135, 140) |
| Peach Sweet Tea | Small | only in draft B | not found | 340 / 0 / 0 / 0 / 0 / 40 / 62 / 0 / 82 / 0 | B: numbers found after the name (line 222); check the size |
| Peach UnsweetenedTea | Small | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 21 / 0 | B: numbers found after the name (line 225); check the size |
| Peach UnsweetenedTea | Medium | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 32 / 0 | B: not as drafted (line 225 lacks 140, 55, 32) |
| Peach UnsweetenedTea | Large | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 75 / 0 / 0 / 42 / 0 | B: not as drafted (line 225 lacks 190, 75, 42) |
| Handcrafted Lemonade Kidz | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 40 / 55 / 0 / 52 / 0 | B: numbers found after the name (line 228); check the size |
| Handcrafted Lemonade Kidz | Small | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 65 / 91 / 0 / 86 / 0 | B: not as drafted (line 228 lacks 350, 65, 91, 86) |
| Handcrafted Lemonade Kidz | Medium | only in draft B | not found | 520 / 0 / 0 / 0 / 0 / 95 / 137 / 0 / 129 / 0 | B: not as drafted (line 228 lacks 520, 95, 137, 129) |
| Handcrafted Lemonade Kidz | Large | only in draft B | not found | 700 / 0.5 / 0 / 0 / 0 / 130 / 182 / 0 / 172 / 0 | B: not as drafted (line 228 lacks 700, 0.5, 130, 182, 172) |
| Handcrafted Strawberry Lemonade | Small | only in draft B | not found | 430 / 0 / 0 / 0 / 0 / 70 / 110 / 0 / 100 / 0 | B: numbers found after the name (line 232); check the size |
| Handcrafted Strawberry Lemonade | Medium | only in draft B | not found | 620 / 0 / 0 / 0 / 0 / 105 / 160 / 0 / 147 / 0 | B: not as drafted (line 232 lacks 620, 105, 160, 147) |
| Handcrafted Strawberry Lemonade | Large | only in draft B | not found | 850 / 0.5 / 0 / 0 / 0 / 140 / 220 / 0 / 200 / 0 | B: not as drafted (line 232 lacks 850, 0.5, 140, 220, 200) |
| Frozen Lemonade | Small | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 55 / 80 / 0 / 76 / 0 | B: numbers found after the name (line 235); check the size |
| Frozen Strawberry Lemonade | Small | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 60 / 103 / 0 / 89 / 0 | B: numbers found after the name (line 236); check the size |
| Kidz | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 85 / 43 / 0 / 43 / 0 | B: numbers found after the name (line 215); check the size |
| The Grilled Cobb Zalad | 1 serving | both read it the same, but its protein, carbs and fat make 823 kcal, not 660 | 660 / 51 / 14 / 0 / 320 / 1780 / 35 / 5 / 5 / 56 | 660 / 51 / 14 / 0 / 320 / 1780 / 35 / 5 / 5 / 56 | A: numbers found after the name (line 7); check the size; B: numbers found after the name (line 7); check the size |
| The Fried Cobb Zalad | 1 serving | both read it the same, but its protein, carbs and fat make 921 kcal, not 760 | 760 / 61 / 15 / 0 / 280 / 2090 / 41 / 3 / 3 / 52 | 760 / 61 / 15 / 0 / 280 / 2090 / 41 / 3 / 3 / 52 | A: numbers found after the name (line 8); check the size; B: numbers found after the name (line 8); check the size |
| Grilled Chicken Sandwich Only | 1 serving | both read it the same, but its protein, carbs and fat make 472 kcal, not 620 | 620 / 20 / 3.5 / 0 / 100 / 1440 / 35 / 3 / 8 / 38 | 620 / 20 / 3.5 / 0 / 100 / 1440 / 35 / 3 / 8 / 38 | A: numbers found after the name (line 17); check the size; B: numbers found after the name (line 17); check the size |
| Add Bacon | 2 Slices | both read it the same, but its protein, carbs and fat make 358 kcal, not 60 | 60 / 38 / 1.5 / 0 / 10 / 230 / 0 / 0 / 0 / 4 | 60 / 38 / 1.5 / 0 / 10 / 230 / 0 / 0 / 0 / 4 | A: numbers found after the name (line 22); check the size; B: numbers found after the name (line 22); check the size |
| Unsweet Tea | 1 serving | both read it the same, but its protein, carbs and fat make 0 kcal, not 1750 | 1750 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | 1750 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | A: numbers found after the name (line 347); check the size, mostly zeros: look; B: numbers found after the name (line 347); check the size, mostly zeros: look |
| Diet Coke | 1 serving | both read it the same, but its protein, carbs and fat make 0 kcal, not 160 | 160 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | 160 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | A: numbers found after the name (line 364); check the size, mostly zeros: look; B: numbers found after the name (line 364); check the size, mostly zeros: look |
| Coca-Cola Zero Sugar | 1 serving | both read it the same, but its protein, carbs and fat make 0 kcal, not 150 | 150 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 0 / 0 | 150 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 0 / 0 | A: numbers found after the name (line 380); check the size, mostly zeros: look; B: numbers found after the name (line 380); check the size, mostly zeros: look |
| Powerade Mountain Berry Blast | 1 serving | both read it the same, but its protein, carbs and fat make 88 kcal, not 150 | 150 / 0 / 0 / 0 / 0 / 110 / 22 / 0 / 22 / 0 | 150 / 0 / 0 / 0 / 0 / 110 / 22 / 0 / 22 / 0 | A: numbers found after the name (line 388); check the size; B: numbers found after the name (line 388); check the size |
| Fanta Strawberry | Small | both read it the same, but its protein, carbs and fat make 428 kcal, not 260 | 260 / 0 / 0 / 0 / 0 / 210 / 107 / 0 / 106 / 0 | 260 / 0 / 0 / 0 / 0 / 210 / 107 / 0 / 106 / 0 | A: not as drafted (line 393 lacks 210, 107, 106); B: not as drafted (line 393 lacks 210, 107, 106) |
| Fanta Strawberry | Medium | both read it the same, but its protein, carbs and fat make 572 kcal, not 400 | 400 / 0 / 0 / 0 / 0 / 280 / 143 / 0 / 142 / 0 | 400 / 0 / 0 / 0 / 0 / 280 / 143 / 0 / 142 / 0 | A: not as drafted (line 215 lacks 400, 280, 143, 142); B: not as drafted (line 215 lacks 400, 280, 143, 142) |
| Fanta Strawberry | Large | both read it the same, but its protein, carbs and fat make 172 kcal, not 530 | 530 / 0 / 0 / 0 / 0 / 40 / 43 / 0 / 42 / 0 | 530 / 0 / 0 / 0 / 0 / 40 / 43 / 0 / 42 / 0 | A: not as drafted (line 215 lacks 530, 40, 42); B: not as drafted (line 215 lacks 530, 40, 42) |
| Coca-Cola Cherry | 1 serving | both read it the same, but its protein, carbs and fat make 288 kcal, not 150 | 150 / 0 / 0 / 0 / 0 / 70 / 72 / 0 / 70 / 0 | 150 / 0 / 0 / 0 / 0 / 70 / 72 / 0 / 70 / 0 | A: numbers found after the name (line 397); check the size; B: numbers found after the name (line 397); check the size |
| Coca-Cola Cherry | Small | both read it the same, but its protein, carbs and fat make 428 kcal, not 260 | 260 / 0 / 0 / 0 / 0 / 105 / 107 / 0 / 105 / 0 | 260 / 0 / 0 / 0 / 0 / 105 / 107 / 0 / 105 / 0 | A: not as drafted (line 218 lacks 260, 105, 107, 105); B: not as drafted (line 218 lacks 260, 105, 107, 105) |
| Coca-Cola Cherry | Medium | both read it the same, but its protein, carbs and fat make 572 kcal, not 380 | 380 / 0 / 0 / 0 / 0 / 135 / 143 / 0 / 140 / 0 | 380 / 0 / 0 / 0 / 0 / 135 / 143 / 0 / 140 / 0 | A: not as drafted (line 218 lacks 380, 135, 140); B: not as drafted (line 218 lacks 380, 135, 140) |
| Peach Unsweetened Tea | Large | both read it the same, but its protein, carbs and fat make 220 kcal, not 190 | 190 / 0 / 0 / 0 / 0 / 70 / 55 / 0 / 52 / 0 | 190 / 0 / 0 / 0 / 0 / 70 / 55 / 0 / 52 / 0 | A: not as drafted (line 404 lacks 190, 70, 55, 52); B: not as drafted (line 404 lacks 190, 70, 55, 52) |

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
