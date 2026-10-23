# Hooters: lines for a person

Guide: https://www.hooters.com/perch/resources/content/hoot-5690nutritional-menu-update.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (52)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/hooters.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Bacon Wrapped Wings | 15 piece | only in draft A | 1700 / 104 / 28 / 0 / 565 / 4020 / 48 / 2 / 41 / 148 | not found | A: numbers found after the name (line 43); check the size |
| Baja Fish Tacos - Grilled | 1 serving | only in draft A | 1450 / 77 / 23 / 0.5 / 160 / 2940 / 139 / 11 / 11 / 11 | not found | A: numbers found after the name (line 66); check the size |
| BBQ Pork Sandwich | 1 serving | only in draft A | 1450 / 77 / 23 / 0.5 / 160 / 2940 / 139 / 11 / 11 / 11 | not found | A: numbers found after the name (line 67); check the size |
| Beer Cheese and Pretzels | 1 serving | only in draft A | 1100 / 38 / 17 / 1 / 55 / 5970 / 150 / 6 / 11 / 11 | not found | A: numbers found after the name (line 68); check the size |
| Boneless Wings | 50 Piece | only in draft A | 2300 / 102 / 20 / 20 / 0 / 600 / 1740 / 111 / 10 / 10 | not found | A: numbers found after the name (line 100); check the size |
| Boneless Wings | 6 Piece | only in draft A | 280 / 12 / 2.5 / 0 / 70 / 210 / 13 / 13 / 1 / 1 | not found | A: numbers found after the name (line 101); check the size |
| Breaded Wing | 10 Piece | only in draft A | 1370 / 86 / 19 / 0 / 335 / 930 / 74 / 4 / 4 / 0 | not found | A: numbers found after the name (line 102); check the size |
| Breaded Wing | 15 Piece | only in draft A | 2050 / 129 / 29 / 0.5 / 505 / 1400 / 112 / 6 / 6 / 0 | not found | A: numbers found after the name (line 103); check the size |
| Breaded Wing | 50 Piece | only in draft A | 820 / 51 / 11 / 0 / 200 / 560 / 45 / 2 / 44 / 0 | not found | A: numbers found after the name (line 111); check the size |
| Breaded Wing | 6 Piece | only in draft A | 820 / 51 / 11 / 0 / 200 / 560 / 45 / 2 / 44 / 0 | not found | A: numbers found after the name (line 111); check the size |
| Buffalo Shrimp | 12 Piece | only in draft A | 810 / 43 / 8 / 0 / 420 / 1630 / 49 / 4 / 4 / 58 | not found | A: numbers found after the name (line 141); check the size |
| Buffalo Shrimp | 24 Piece | only in draft A | 810 / 43 / 8 / 0 / 420 / 1630 / 49 / 4 / 4 / 58 | not found | A: numbers found after the name (line 141); check the size |
| Daytona Wings | 20 Piece | only in draft A | 6540 / 372 / 88 / 1 / 1670 / 7760 / 468 / 29 / 58 / 337 | not found | A: numbers found after the name (line 190); check the size |
| Daytona Wings | 50 Piece | only in draft A | 6540 / 372 / 88 / 1 / 1670 / 7760 / 468 / 29 / 58 / 337 | not found | A: numbers found after the name (line 190); check the size |
| Fish N' Chips | 1 serving | only in draft A | 1590 / 101 / 17 / 1 / 235 / 1290 / 128 / 13 / 15 / 42 | not found | A: not as drafted (line 213 lacks 15, 42) |
| HOOTERS - Bacon | 1 slice | both read numbers that can't be right: sugars 3 g above carbs 0 g | 45 / 3.5 / 1 / 0 / 10 / 135 / 0 / 0 / 3 / 3 | 45 / 3.5 / 1 / 0 / 10 / 135 / 0 / 0 / 3 / 3 | A: numbers found after the name (line 24); check the size; B: numbers found after the name (line 24); check the size |
| HOOTERS - Bacon Wrapped Wings | 10 piece | only in draft B | not found | 1150 / 69 / 19 / 0 / 380 / 2830 / 35 / 1 / 30 / 99 | B: numbers found after the name (line 25); check the size |
| HOOTERS - Bacon Wrapped Wings | 15 piece | only in draft B | not found | 2260 / 138 / 38 / 0.5 / 755 / 5210 / 61 / 2 / 52 / 197 | B: numbers found after the name (line 35); check the size |
| HOOTERS - Bacon Wrapped Wings | 20 piece | only in draft B | not found | 5490 / 345 / 95 / 1.5 / 1890 / 11010 / 114 / 4 / 97 / 490 | B: numbers found after the name (line 36); check the size |
| HOOTERS - Bacon Wrapped Wings | 50 piece | only in draft B | not found | 690 / 42 / 11 / 0 / 225 / 1790 / 23 / 1 / 19 / 59 | B: numbers found after the name (line 37); check the size |
| HOOTERS - Bacon Wrapped Wings | 6 piece | only in draft B | not found | 1390 / 77 / 28 / 2.5 / 195 / 3490 / 112 / 12 / 10 / 61 | B: numbers found after the name (line 38); check the size |
| HOOTERS - Baja Fish Tacos - Grilled | 1 serving | only in draft B | not found | 1450 / 77 / 23 / 0.5 / 160 / 2940 / 139 / 11 / 23 / 48 | B: not as drafted (line 66 lacks 23, 48) |
| HOOTERS - BBQ Pork Sandwich | 1 serving | only in draft B | not found | 1450 / 77 / 23 / 0.5 / 160 / 2940 / 139 / 11 / – / – | B: numbers found after the name (line 67); check the size |
| HOOTERS - Beer Cheese and Pretzels | 1 serving | only in draft B | not found | 1100 / 38 / 17 / 1 / 55 / 5970 / 150 / 6 / – / – | B: numbers found after the name (line 68); check the size |
| HOOTERS - Boneless Wings | 50 Piece | only in draft B | not found | 2300 / 102 / 20 / 0 / 600 / 1740 / 111 / 10 / 10 / 233 | B: numbers found after the name (line 100); check the size |
| HOOTERS - Boneless Wings | 6 Piece | only in draft B | not found | 280 / 12 / 2.5 / 0 / 70 / 210 / 13 / 1 / 1 / 28 | B: numbers found after the name (line 101); check the size |
| HOOTERS - Breaded Wing | 10 Piece | only in draft B | not found | 1370 / 86 / 19 / 0 / 335 / 930 / 74 / 4 / 0 / 74 | B: numbers found after the name (line 102); check the size |
| HOOTERS - Breaded Wing | 15 Piece | only in draft B | not found | 2050 / 129 / 29 / 0.5 / 505 / 1400 / 112 / 6 / 6 / 111 | B: numbers found after the name (line 103); check the size |
| HOOTERS - Breaded Wing | 50 Piece | only in draft B | not found | 820 / 51 / 11 / 0 / 200 / 560 / 45 / 2 / 44 / 0 | B: numbers found after the name (line 111); check the size |
| HOOTERS - Breaded Wing | 6 Piece | only in draft B | not found | 820 / 51 / 11 / 0 / 200 / 560 / 45 / 2 / 44 / 0 | B: numbers found after the name (line 111); check the size |
| HOOTERS - Buffalo Platter | 1 serving | only in draft B | not found | 1270 / 69 / 15 / 0 / 350 / 1240 / 88 / 6 / 1 / 74 | B: numbers found after the name (line 130); check the size |
| HOOTERS - Buffalo Shrimp | 12 Piece | only in draft B | not found | 810 / 43 / 8 / 0 / 420 / 1630 / 49 / 4 / 4 / 4 | B: numbers found after the name (line 141); check the size |
| HOOTERS - Buffalo Shrimp | 24 Piece | only in draft B | not found | 810 / 43 / 8 / 0 / 420 / 1630 / 49 / 4 / 4 / 4 | B: numbers found after the name (line 141); check the size |
| HOOTERS - Daytona Wings | 20 Piece | only in draft B | not found | 6540 / 372 / 88 / 1 / 1670 / 7760 / 468 / 29 / 58 / 337 | B: numbers found after the name (line 190); check the size |
| HOOTERS - Daytona Wings | 50 Piece | only in draft B | not found | 6540 / 372 / 88 / 1 / 1670 / 7760 / 468 / 29 / 58 / 337 | B: numbers found after the name (line 190); check the size |
| HOOTERS - Fish N' Chips | 1 serving | only in draft B | not found | 1590 / 101 / 17 / 1 / 235 / 1290 / 128 / 13 / – / – | B: numbers found after the name (line 213); check the size |
| HOOTERS - Hootertizer Platter (Texas Only) | 1 serving | only in draft B | not found | 1170 / 80 / 18 / 1 / 45 / 3550 / 89 / 7 / 13 / 23 | B: numbers found after the name (line 232); check the size |
| HOOTERS - Key Lime Pie | 1 serving | only in draft B | not found | 740 / 25 / 16 / 0 / 230 / 230 / 121 / 2 / 97 / 12 | B: numbers found after the name (line 234); check the size |
| unlabelled 1 | 1 serving | only in draft B | not found | 1090 / 50 / 14 / 0.5 / 125 / 3650 / 108 / 9 / 10 / 53 | B: numbers found after the name (line 239); check the size |
| Menu Item | 1 serving | only in draft B | not found | 750 / 36 / 11 / 1.5 / 80 / 1400 / 78 / 6 / 6 / 6 | B: numbers found after the name (line 243); check the size |
| HOOTERS - Kids Burger | 1 serving | only in draft B | not found | 600 / 28 / 5 / 0 / 40 / 430 / 66 / 6 / 6 / 0 | B: numbers found after the name (line 246); check the size |
| HOOTERS - Kids Chicken Strips | 1 serving | only in draft B | not found | 600 / 28 / 5 / 0 / 40 / 430 / 66 / 6 / 6 / 0 | B: numbers found after the name (line 247); check the size |
| HOOTERS - Kids Wings | 1 serving | only in draft B | not found | 980 / 54 / 12 / 0 / 170 / 630 / 84 / 7 / 0 / 0 | B: numbers found after the name (line 248); check the size |
| HOOTERS - Lots A Tots | 1 serving | only in draft B | not found | 1310 / 93 / 22 / 0 / 70 / 3140 / 95 / 8 / 1 / 0 | B: numbers found after the name (line 249); check the size |
| HOOTERS - New England Clam Chowder | 1 serving | only in draft B | not found | 260 / 10 / 5 / 0 / 35 / 1970 / 26 / 2 / 1 / 0 | B: numbers found after the name (line 250); check the size |
| HOOTERS - Onion Rings | 1 serving | only in draft B | not found | 1000 / 75 / 12 / 0.5 / 20 / 2540 / 75 / 5 / 13 / 0 | B: numbers found after the name (line 251); check the size |
| HOOTERS - Naked Wings | 50 Wings | both read it the same, but the build would refuse it (protein_g: Too big: expected number to be <=500) | 4630 / 257 / 62 / 1 / 2680 / 3230 / 18 / 8 / 4 / 562 | 4630 / 257 / 62 / 1 / 2680 / 3230 / 18 / 8 / 4 / 562 | A: numbers found after the name (line 22); check the size; B: numbers found after the name (line 22); check the size |
| HOOTERS - Boneless Teaser | 1 serving | both read it the same, but its protein, carbs and fat make 1811 kcal, not 690 | 690 / 31 / 6 / 0 / 180 / 520 / 33 / 3 / 3 / 350 | 690 / 31 / 6 / 0 / 180 / 520 / 33 / 3 / 3 / 350 | A: numbers found after the name (line 87); check the size; B: numbers found after the name (line 87); check the size |
| HOOTERS - Boneless Wing | 15 Piece | both read it the same, but its protein, carbs and fat make 1668 kcal, not 460 | 460 / 20 / 4 / 0 / 120 / 350 / 22 / 2 / 2 / 350 | 460 / 20 / 4 / 0 / 120 / 350 / 22 / 2 / 2 / 350 | A: numbers found after the name (line 88); check the size; B: numbers found after the name (line 88); check the size |
| HOOTERS - Boneless Wings | 10 Piece | both read it the same, but its protein, carbs and fat make 729 kcal, not 920 | 920 / 41 / 8 / 0 / 240 / 700 / 45 / 4 / 4 / 45 | 920 / 41 / 8 / 0 / 240 / 700 / 45 / 4 / 4 / 45 | A: numbers found after the name (line 89); check the size; B: numbers found after the name (line 89); check the size |
| HOOTERS - Buffalo Chicken Quesadilla | 1 serving | both read it the same, but its protein, carbs and fat make 1071 kcal, not 1310 | 1310 / 79 / 40 / 2 / 220 / 2680 / 90 / 5 / 61 / 0 | 1310 / 79 / 40 / 2 / 220 / 2680 / 90 / 5 / 61 / 0 | A: numbers found after the name (line 115); check the size; B: numbers found after the name (line 115); check the size |
| HOOTERS - Buffalo Chicken Salad | 1 serving | both read it the same, but its protein, carbs and fat make 1005 kcal, not 1200 | 1200 / 53 / 15 / 0 / 140 / 1790 / 132 / 11 / 3 / 0 | 1200 / 53 / 15 / 0 / 140 / 1790 / 132 / 11 / 3 / 0 | A: numbers found after the name (line 126); check the size; B: numbers found after the name (line 126); check the size |

## Spot check (5 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| HOOTERS - Shrimp Po Boy | 1 serving | 380 / 37 / 7 / 0.5 / 35 / 710 / 9 / 2 / 2 / 5 |
| HOOTERS - Dressing, Ranch | 1 fl oz | 1520 / 108 / 45 / 3 / 250 / 4650 / 76 / 8 / 9 / 65 |
| HOOTERS-Quesadilla Cheese | 1 serving | 1010 / 67 / 29 / 1.5 / 125 / 2040 / 64 / 6 / 4 / 37 |
| HOOTERS - Chocolate Mousse Cake | 1 serving | 1070 / 53 / 30 / 1 / 125 / 530 / 151 / 7 / 116 / 10 |
| HOOTERS - Smoked Wings (directly out of smoker) | 1 serving (of 10 wings) | 720 / 53 / 14 / 0.5 / 330 / 230 / 0 / 0 / 0 / 55 |
