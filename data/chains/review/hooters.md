# Hooters: lines for a person

Guide: https://www.hooters.com/perch/resources/content/hoot-5690nutritional-menu-update.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (46)

Fix each line in `menus/hooters.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Bacon Wrapped Wings | 15 piece | only in draft A | 1700 / 104 / 28 / 0 / 565 / 4020 / 48 / 2 / 41 / 148 | not found |
| Baja Fish Tacos - Grilled | 1 serving | only in draft A | 1450 / 77 / 23 / 0.5 / 160 / 2940 / 139 / 11 / 11 / 11 | not found |
| BBQ Pork Sandwich | 1 serving | only in draft A | 1450 / 77 / 23 / 0.5 / 160 / 2940 / 139 / 11 / 11 / 11 | not found |
| Beer Cheese and Pretzels | 1 serving | only in draft A | 1100 / 38 / 17 / 1 / 55 / 5970 / 150 / 6 / 11 / 11 | not found |
| Boneless Wings | 50 Piece | only in draft A | 2300 / 102 / 20 / 20 / 0 / 600 / 1740 / 111 / 10 / 10 | not found |
| Boneless Wings | 6 Piece | only in draft A | 280 / 12 / 2.5 / 0 / 70 / 210 / 13 / 13 / 1 / 1 | not found |
| Breaded Wing | 10 Piece | only in draft A | 1370 / 86 / 19 / 0 / 335 / 930 / 74 / 4 / 4 / 0 | not found |
| Breaded Wing | 15 Piece | only in draft A | 2050 / 129 / 29 / 0.5 / 505 / 1400 / 112 / 6 / 6 / 0 | not found |
| Breaded Wing | 50 Piece | only in draft A | 820 / 51 / 11 / 0 / 200 / 560 / 45 / 2 / 44 / 0 | not found |
| Breaded Wing | 6 Piece | only in draft A | 820 / 51 / 11 / 0 / 200 / 560 / 45 / 2 / 44 / 0 | not found |
| Buffalo Shrimp | 12 Piece | only in draft A | 810 / 43 / 8 / 0 / 420 / 1630 / 49 / 4 / 4 / 58 | not found |
| Buffalo Shrimp | 24 Piece | only in draft A | 810 / 43 / 8 / 0 / 420 / 1630 / 49 / 4 / 4 / 58 | not found |
| Daytona Wings | 20 Piece | only in draft A | 6540 / 372 / 88 / 1 / 1670 / 7760 / 468 / 29 / 58 / 337 | not found |
| Daytona Wings | 50 Piece | only in draft A | 6540 / 372 / 88 / 1 / 1670 / 7760 / 468 / 29 / 58 / 337 | not found |
| Fish N' Chips | 1 serving | only in draft A | 1590 / 101 / 17 / 1 / 235 / 1290 / 128 / 13 / 15 / 42 | not found |
| HOOTERS - Bacon | 1 slice | both read numbers that can't be right: sugars 3 g above carbs 0 g | 45 / 3.5 / 1 / 0 / 10 / 135 / 0 / 0 / 3 / 3 | 45 / 3.5 / 1 / 0 / 10 / 135 / 0 / 0 / 3 / 3 |
| HOOTERS - Bacon Wrapped Wings | 10 piece | only in draft B | not found | 1150 / 69 / 19 / 0 / 380 / 2830 / 35 / 1 / 30 / 99 |
| HOOTERS - Bacon Wrapped Wings | 15 piece | only in draft B | not found | 2260 / 138 / 38 / 0.5 / 755 / 5210 / 61 / 2 / 52 / 197 |
| HOOTERS - Bacon Wrapped Wings | 20 piece | only in draft B | not found | 5490 / 345 / 95 / 1.5 / 1890 / 11010 / 114 / 4 / 97 / 490 |
| HOOTERS - Bacon Wrapped Wings | 50 piece | only in draft B | not found | 690 / 42 / 11 / 0 / 225 / 1790 / 23 / 1 / 19 / 59 |
| HOOTERS - Bacon Wrapped Wings | 6 piece | only in draft B | not found | 1390 / 77 / 28 / 2.5 / 195 / 3490 / 112 / 12 / 10 / 61 |
| HOOTERS - Baja Fish Tacos - Grilled | 1 serving | only in draft B | not found | 1450 / 77 / 23 / 0.5 / 160 / 2940 / 139 / 11 / 23 / 48 |
| HOOTERS - BBQ Pork Sandwich | 1 serving | only in draft B | not found | 1450 / 77 / 23 / 0.5 / 160 / 2940 / 139 / 11 / – / – |
| HOOTERS - Beer Cheese and Pretzels | 1 serving | only in draft B | not found | 1100 / 38 / 17 / 1 / 55 / 5970 / 150 / 6 / – / – |
| HOOTERS - Boneless Wings | 50 Piece | only in draft B | not found | 2300 / 102 / 20 / 0 / 600 / 1740 / 111 / 10 / 10 / 233 |
| HOOTERS - Boneless Wings | 6 Piece | only in draft B | not found | 280 / 12 / 2.5 / 0 / 70 / 210 / 13 / 1 / 1 / 28 |
| HOOTERS - Breaded Wing | 10 Piece | only in draft B | not found | 1370 / 86 / 19 / 0 / 335 / 930 / 74 / 4 / 0 / 74 |
| HOOTERS - Breaded Wing | 15 Piece | only in draft B | not found | 2050 / 129 / 29 / 0.5 / 505 / 1400 / 112 / 6 / 6 / 111 |
| HOOTERS - Breaded Wing | 50 Piece | only in draft B | not found | 820 / 51 / 11 / 0 / 200 / 560 / 45 / 2 / 44 / 0 |
| HOOTERS - Breaded Wing | 6 Piece | only in draft B | not found | 820 / 51 / 11 / 0 / 200 / 560 / 45 / 2 / 44 / 0 |
| HOOTERS - Buffalo Platter | 1 serving | only in draft B | not found | 1270 / 69 / 15 / 0 / 350 / 1240 / 88 / 6 / 1 / 74 |
| HOOTERS - Buffalo Shrimp | 12 Piece | only in draft B | not found | 810 / 43 / 8 / 0 / 420 / 1630 / 49 / 4 / 4 / 4 |
| HOOTERS - Buffalo Shrimp | 24 Piece | only in draft B | not found | 810 / 43 / 8 / 0 / 420 / 1630 / 49 / 4 / 4 / 4 |
| HOOTERS - Daytona Wings | 20 Piece | only in draft B | not found | 6540 / 372 / 88 / 1 / 1670 / 7760 / 468 / 29 / 58 / 337 |
| HOOTERS - Daytona Wings | 50 Piece | only in draft B | not found | 6540 / 372 / 88 / 1 / 1670 / 7760 / 468 / 29 / 58 / 337 |
| HOOTERS - Fish N' Chips | 1 serving | only in draft B | not found | 1590 / 101 / 17 / 1 / 235 / 1290 / 128 / 13 / – / – |
| HOOTERS - Hootertizer Platter (Texas Only) | 1 serving | only in draft B | not found | 1170 / 80 / 18 / 1 / 45 / 3550 / 89 / 7 / 13 / 23 |
| HOOTERS - Key Lime Pie | 1 serving | only in draft B | not found | 740 / 25 / 16 / 0 / 230 / 230 / 121 / 2 / 97 / 12 |
| unlabelled 1 | 1 serving | only in draft B | not found | 1090 / 50 / 14 / 0.5 / 125 / 3650 / 108 / 9 / 10 / 53 |
| Menu Item | 1 serving | only in draft B | not found | 750 / 36 / 11 / 1.5 / 80 / 1400 / 78 / 6 / 6 / 6 |
| HOOTERS - Kids Burger | 1 serving | only in draft B | not found | 600 / 28 / 5 / 0 / 40 / 430 / 66 / 6 / 6 / 0 |
| HOOTERS - Kids Chicken Strips | 1 serving | only in draft B | not found | 600 / 28 / 5 / 0 / 40 / 430 / 66 / 6 / 6 / 0 |
| HOOTERS - Kids Wings | 1 serving | only in draft B | not found | 980 / 54 / 12 / 0 / 170 / 630 / 84 / 7 / 0 / 0 |
| HOOTERS - Lots A Tots | 1 serving | only in draft B | not found | 1310 / 93 / 22 / 0 / 70 / 3140 / 95 / 8 / 1 / 0 |
| HOOTERS - New England Clam Chowder | 1 serving | only in draft B | not found | 260 / 10 / 5 / 0 / 35 / 1970 / 26 / 2 / 1 / 0 |
| HOOTERS - Onion Rings | 1 serving | only in draft B | not found | 1000 / 75 / 12 / 0.5 / 20 / 2540 / 75 / 5 / 13 / 0 |

## Spot check (5 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| HOOTERS - Shrimp Po Boy | 1 serving | 380 / 37 / 7 / 0.5 / 35 / 710 / 9 / 2 / 2 / 5 |
| HOOTERS - Dressing, Ranch | 1 fl oz | 1520 / 108 / 45 / 3 / 250 / 4650 / 76 / 8 / 9 / 65 |
| HOOTERS-Quesadilla Cheese | 1 serving | 1010 / 67 / 29 / 1.5 / 125 / 2040 / 64 / 6 / 4 / 37 |
| HOOTERS - Chocolate Mousse Cake | 1 serving | 1070 / 53 / 30 / 1 / 125 / 530 / 151 / 7 / 116 / 10 |
| HOOTERS - Smoked Wings (directly out of smoker) | 1 serving (of 10 wings) | 720 / 53 / 14 / 0.5 / 330 / 230 / 0 / 0 / 0 / 55 |
