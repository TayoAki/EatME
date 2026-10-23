# Waffle House: lines for a person

Guide: https://www.wafflehouse.com/wp-content/uploads/2026/05/Menu-Nutritionals-2026-05-05.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (39)

Fix each line in `menus/waffle-house.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Blueberry Nougat | 1 serving | both read numbers that can't be right: saturated and trans fat above fat | 98 / 2 / 3 / 1 / 0 / 8 / 13 / 0 / 9 / 1 | 98 / 2 / 3 / 1 / 0 / 8 / 13 / 0 / 9 / 1 |
| Waffle House Hashbrowns | Regular | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 190 / 7 / 3 / 0 / 0 / 240 / 29 / 3 / 0 / 3 | 190 / 7 / 3 / 0 / 0 / 0 / 240 / 29 / 3 / 0 |
| Waffle House Hashbrowns | Large | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 380 / 14 / 5 / 0 / 0 / 480 / 58 / 6 / 0 / 6 | 380 / 14 / 5 / 0 / 0 / 0 / 480 / 58 / 6 / 0 |
| Waffle House Hashbrowns | Triple | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 570 / 21 / 8 / 0 / 0 / 720 / 87 / 9 / 0 / 9 | 570 / 21 / 8 / 0 / 0 / 0 / 720 / 87 / 9 / 0 |
| Texas Cheesesteak™ Melt | 1 serving | only in draft A | 445 / 18 / 8 / 0 / 75 / 1180 / 43 / 3 / 6 / 27 | not found |
| Simply Apple Juice | 1 serving | differ: cholesterol_mg | 160 / 0 / 0 / 0 / 0 / 5 / 43 / 0 / 40 / 0 | 160 / 0 / 0 / 0 / 5 / 5 / 43 / 0 / 40 / 0 |
| Large Hashbrows | 1 serving | only in draft B | not found | 380 / 14 / 5 / 0 / 0 / 480 / 58 / 6 / 0 / 6 |
| Large Hashbrowns | 1 serving | only in draft B | not found | 380 / 14 / 5 / 0 / 0 / 480 / 58 / 6 / 0 / 6 |
| Diced Ham | 1 serving | only in draft B | not found | 140 / 6 / 2 / 0 / 50 / 1260 / 4 / 0 / 2 / 18 |
| 2 Egg Breakfast | 1 serving | only in draft B | not found | 180 / 14 / 4 / 1 / 338 / 176 / 2 / 0 / 2 / 12 |
| White Toast | 2 Slices | only in draft B | not found | 130 / 2 / 0 / 0 / 0 / 260 / 25 / 1 / 3 / 4 |
| Wheat Toast | 2 Slices | only in draft B | not found | 120 / 2 / 0 / 0 / 0 / 250 / 26 / 4 / 2 / 6 |
| Raisin Toast | 2 Slices | only in draft B | not found | 220 / 3 / 0 / 0 / 0 / 280 / 42 / 2 / 16 / 6 |
| Texas Toast | 1 Slice | only in draft B | not found | 100 / 1 / 0 / 0 / 0 / 190 / 19 / 1 / 2 / 3 |
| Hashbrooms | 1 serving | only in draft B | not found | 190 / 7 / 3 / 0 / 0 / 240 / 29 / 3 / 0 / 3 |
| Sliced Tomatoes | 1 serving | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 2 / 0 |
| Cheese 'N Eggs | 1 serving | only in draft B | not found | 280 / 23 / 9 / 1 / 363 / 676 / 4 / 0 / 3 / 17 |
| T-Bone & Eggs | 1 serving | only in draft B | not found | 600 / 43 / 15 / 1 / 453 / 436 / 2 / 0 / 2 / 49 |
| Steak & Eggs | 1 serving | only in draft B | not found | 480 / 28 / 9 / 2 / 473 / 636 / 2 / 0 / 2 / 53 |
| Country Ham & Eggs | 1 serving | only in draft B | not found | 370 / 23 / 7 / 1 / 433 / 2286 / 3 / 0 / 3 / 37 |
| Chicken & Eggs | 1 serving | only in draft B | not found | 310 / 15 / 4 / 1 / 418 / 1106 / 4 / 0 / 2 / 41 |
| Hashbrowns | 1 serving | only in draft B | not found | 190 / 7 / 3 / 0 / 0 / 240 / 29 / 3 / 0 / 3 |
| Cheese Omelet Breakfast | 2 Egg Cheese Omelet | only in draft B | not found | 280 / 23 / 9 / 1 / 363 / 676 / 4 / 0 / 3 / 17 |
| Ham & Cheese Omelet Breakfast | 2 Egg Ham & Cheese Omelet | only in draft B | not found | 350 / 26 / 10 / 1 / 388 / 1306 / 6 / 0 / 4 / 26 |
| Cheesesteak Omelet Breakfast | 2 Egg Cheesesteak Omelet | only in draft B | not found | 410 / 30 / 12 / 1 / 413 / 976 / 4 / 0 / 3 / 33 |
| Fiesta Omelet Breakfast | 2 Egg Fiesta Omelet | only in draft B | not found | 380 / 26 / 10 / 1 / 388 / 1696 / 13 / 1 / 6 / 26 |
| Build your own Omelet Breakfast | 2 Egg Omelet | only in draft B | not found | 180 / 14 / 4 / 1 / 338 / 176 / 2 / 0 / 2 / 12 |
| Grilled Chicken | 1 serving | only in draft B | not found | 130 / 1 / 0 / 0 / 80 / 930 / 2 / 0 / 0 / 29 |
| Cheesesteak | 1 serving | only in draft B | not found | 130 / 7 / 3 / 0 / 50 / 300 / 0 / 0 / 0 / 16 |
| Cheesesteak Melt Hashbrown Bowl | 1 serving | only in draft B | not found | 625 / 30 / 13 / 0 / 75 / 1280 / 63 / 7 / 2 / 27 |
| Chicken Melt Hashbrown Bowl | 1 serving | only in draft B | not found | 625 / 24 / 10 / 0 / 105 / 1910 / 65 / 7 / 2 / 40 |
| Chicken Filet | 1 | only in draft B | not found | 130 / 1 / 0 / 0 / 80 / 930 / 2 / 0 / 0 / 29 |
| Chicken Filet | 2 | only in draft B | not found | 260 / 2 / 0 / 0 / 160 / 1860 / 4 / 0 / 0 / 58 |
| Country Ham | 1 | only in draft B | not found | 190 / 9 / 3 / 0 / 95 / 2110 / 1 / 0 / 1 / 25 |
| Pork Chops | 2 | only in draft B | not found | 340 / 14 / 5 / 0 / 140 / 1040 / 0 / 0 / 0 / 52 |
| Pork Chops | 3 | only in draft B | not found | 510 / 21 / 8 / 0 / 210 / 1560 / 0 / 0 / 0 / 78 |
| T-Bone Steak | 1 | only in draft B | not found | 420 / 29 / 11 / 0 / 115 / 260 / 0 / 0 / 0 / 37 |
| Delmonico Steak | 1 | only in draft B | not found | 300 / 14 / 5 / 1 / 135 / 460 / 0 / 0 / 0 / 41 |
| Texas Cheesesteak Melt | 1 serving | only in draft B | not found | 445 / 18 / 8 / 0 / 75 / 1180 / 43 / 3 / 6 / 27 |

## Spot check (6 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Cheesesteak & Eggs | 1 serving | 310 / 21 / 7 / 1 / 388 / 476 / 2 / 0 / 2 / 28 |
| Fiesta Protein Bowl | 1 serving | 530 / 31 / 11 / 1 / 612 / 2084 / 14 / 1 / 6 / 52 |
| American Cheese | 1 slice | 50 / 5 / 2.5 / 0 / 12.5 / 250 / 1 / 0 / 1 / 2.5 |
| Bacon | 1 serving | 135 / 12 / 5 / 0 / 30 / 375 / 0 / 0 / 0 / 9 |
| Sausage Egg & Cheese Hashbrown Bowl | 1 serving | 920 / 61 / 22 / 1 / 413 / 1666 / 63 / 6 / 3 / 33 |
| Dark Roast Coffee | 1 serving | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 |
