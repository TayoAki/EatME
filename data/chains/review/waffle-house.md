# Waffle House: lines for a person

Guide: https://www.wafflehouse.com/wp-content/uploads/2026/05/Menu-Nutritionals-2026-05-05.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (42)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/waffle-house.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Blueberry Nougat | 1 serving | both read numbers that can't be right: saturated and trans fat above fat | 98 / 2 / 3 / 1 / 0 / 8 / 13 / 0 / 9 / 1 | 98 / 2 / 3 / 1 / 0 / 8 / 13 / 0 / 9 / 1 | A: numbers found after the name (line 177); check the size; B: numbers found after the name (line 177); check the size |
| Waffle House Hashbrowns | Regular | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 190 / 7 / 3 / 0 / 0 / 240 / 29 / 3 / 0 / 3 | 190 / 7 / 3 / 0 / 0 / 0 / 240 / 29 / 3 / 0 | A: numbers found after the name (line 186); check the size; B: not as drafted (line 186 lacks 0) |
| Waffle House Hashbrowns | Large | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 380 / 14 / 5 / 0 / 0 / 480 / 58 / 6 / 0 / 6 | 380 / 14 / 5 / 0 / 0 / 0 / 480 / 58 / 6 / 0 | A: numbers found after the name (line 188); check the size; B: not as drafted (line 188 lacks 0) |
| Waffle House Hashbrowns | Triple | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 570 / 21 / 8 / 0 / 0 / 720 / 87 / 9 / 0 / 9 | 570 / 21 / 8 / 0 / 0 / 0 / 720 / 87 / 9 / 0 | A: numbers found after the name (line 189); check the size; B: not as drafted (line 189 lacks 0) |
| Texas Cheesesteak™ Melt | 1 serving | only in draft A | 445 / 18 / 8 / 0 / 75 / 1180 / 43 / 3 / 6 / 27 | not found | A: numbers found after the name (line 490); check the size |
| Simply Apple Juice | 1 serving | differ: cholesterol_mg | 160 / 0 / 0 / 0 / 0 / 5 / 43 / 0 / 40 / 0 | 160 / 0 / 0 / 0 / 5 / 5 / 43 / 0 / 40 / 0 | A: numbers found after the name (line 561); check the size; B: not as drafted (line 561 lacks 5) |
| Large Hashbrows | 1 serving | only in draft B | not found | 380 / 14 / 5 / 0 / 0 / 480 / 58 / 6 / 0 / 6 | B: numbers found after the name (line 28); check the size |
| Large Hashbrowns | 1 serving | only in draft B | not found | 380 / 14 / 5 / 0 / 0 / 480 / 58 / 6 / 0 / 6 | B: numbers found after the name (line 35); check the size |
| Diced Ham | 1 serving | only in draft B | not found | 140 / 6 / 2 / 0 / 50 / 1260 / 4 / 0 / 2 / 18 | B: numbers found after the name (line 49); check the size |
| 2 Egg Breakfast | 1 serving | only in draft B | not found | 180 / 14 / 4 / 1 / 338 / 176 / 2 / 0 / 2 / 12 | B: numbers found after the name (line 58); check the size |
| White Toast | 2 Slices | only in draft B | not found | 130 / 2 / 0 / 0 / 0 / 260 / 25 / 1 / 3 / 4 | B: numbers found after the name (line 9); check the size |
| Wheat Toast | 2 Slices | only in draft B | not found | 120 / 2 / 0 / 0 / 0 / 250 / 26 / 4 / 2 / 6 | B: numbers found after the name (line 10); check the size |
| Raisin Toast | 2 Slices | only in draft B | not found | 220 / 3 / 0 / 0 / 0 / 280 / 42 / 2 / 16 / 6 | B: numbers found after the name (line 11); check the size |
| Texas Toast | 1 Slice | only in draft B | not found | 100 / 1 / 0 / 0 / 0 / 190 / 19 / 1 / 2 / 3 | B: numbers found after the name (line 13); check the size |
| Hashbrooms | 1 serving | only in draft B | not found | 190 / 7 / 3 / 0 / 0 / 240 / 29 / 3 / 0 / 3 | B: numbers found after the name (line 65); check the size |
| Sliced Tomatoes | 1 serving | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 2 / 0 | B: numbers found after the name (line 16); check the size |
| Cheese 'N Eggs | 1 serving | only in draft B | not found | 280 / 23 / 9 / 1 / 363 / 676 / 4 / 0 / 3 / 17 | B: numbers found after the name (line 67); check the size |
| T-Bone & Eggs | 1 serving | only in draft B | not found | 600 / 43 / 15 / 1 / 453 / 436 / 2 / 0 / 2 / 49 | B: numbers found after the name (line 76); check the size |
| Steak & Eggs | 1 serving | only in draft B | not found | 480 / 28 / 9 / 2 / 473 / 636 / 2 / 0 / 2 / 53 | B: numbers found after the name (line 85); check the size |
| Country Ham & Eggs | 1 serving | only in draft B | not found | 370 / 23 / 7 / 1 / 433 / 2286 / 3 / 0 / 3 / 37 | B: numbers found after the name (line 94); check the size |
| Chicken & Eggs | 1 serving | only in draft B | not found | 310 / 15 / 4 / 1 / 418 / 1106 / 4 / 0 / 2 / 41 | B: numbers found after the name (line 103); check the size |
| Hashbrowns | 1 serving | only in draft B | not found | 190 / 7 / 3 / 0 / 0 / 240 / 29 / 3 / 0 / 3 | B: numbers found after the name (line 15); check the size |
| Cheese Omelet Breakfast | 2 Egg Cheese Omelet | only in draft B | not found | 280 / 23 / 9 / 1 / 363 / 676 / 4 / 0 / 3 / 17 | B: numbers found after the name (line 304); check the size |
| Ham & Cheese Omelet Breakfast | 2 Egg Ham & Cheese Omelet | only in draft B | not found | 350 / 26 / 10 / 1 / 388 / 1306 / 6 / 0 / 4 / 26 | B: numbers found after the name (line 314); check the size |
| Cheesesteak Omelet Breakfast | 2 Egg Cheesesteak Omelet | only in draft B | not found | 410 / 30 / 12 / 1 / 413 / 976 / 4 / 0 / 3 / 33 | B: numbers found after the name (line 325); check the size |
| Fiesta Omelet Breakfast | 2 Egg Fiesta Omelet | only in draft B | not found | 380 / 26 / 10 / 1 / 388 / 1696 / 13 / 1 / 6 / 26 | B: numbers found after the name (line 336); check the size |
| Build your own Omelet Breakfast | 2 Egg Omelet | only in draft B | not found | 180 / 14 / 4 / 1 / 338 / 176 / 2 / 0 / 2 / 12 | B: numbers found after the name (line 352); check the size |
| Grilled Chicken | 1 serving | only in draft B | not found | 130 / 1 / 0 / 0 / 80 / 930 / 2 / 0 / 0 / 29 | B: numbers found after the name (line 365); check the size |
| Cheesesteak | 1 serving | only in draft B | not found | 130 / 7 / 3 / 0 / 50 / 300 / 0 / 0 / 0 / 16 | B: numbers found after the name (line 366); check the size |
| Cheesesteak Melt Hashbrown Bowl | 1 serving | only in draft B | not found | 625 / 30 / 13 / 0 / 75 / 1280 / 63 / 7 / 2 / 27 | B: numbers found after the name (line 378); check the size |
| Chicken Melt Hashbrown Bowl | 1 serving | only in draft B | not found | 625 / 24 / 10 / 0 / 105 / 1910 / 65 / 7 / 2 / 40 | B: numbers found after the name (line 383); check the size |
| Chicken Filet | 1 | only in draft B | not found | 130 / 1 / 0 / 0 / 80 / 930 / 2 / 0 / 0 / 29 | B: numbers found after the name (line 397); check the size |
| Chicken Filet | 2 | only in draft B | not found | 260 / 2 / 0 / 0 / 160 / 1860 / 4 / 0 / 0 / 58 | B: numbers found after the name (line 409); check the size |
| Country Ham | 1 | only in draft B | not found | 190 / 9 / 3 / 0 / 95 / 2110 / 1 / 0 / 1 / 25 | B: numbers found after the name (line 21); check the size |
| Pork Chops | 2 | only in draft B | not found | 340 / 14 / 5 / 0 / 140 / 1040 / 0 / 0 / 0 / 52 | B: numbers found after the name (line 434); check the size |
| Pork Chops | 3 | only in draft B | not found | 510 / 21 / 8 / 0 / 210 / 1560 / 0 / 0 / 0 / 78 | B: numbers found after the name (line 446); check the size |
| T-Bone Steak | 1 | only in draft B | not found | 420 / 29 / 11 / 0 / 115 / 260 / 0 / 0 / 0 / 37 | B: numbers found after the name (line 464); check the size |
| Delmonico Steak | 1 | only in draft B | not found | 300 / 14 / 5 / 1 / 135 / 460 / 0 / 0 / 0 / 41 | B: numbers found after the name (line 476); check the size |
| Texas Cheesesteak Melt | 1 serving | only in draft B | not found | 445 / 18 / 8 / 0 / 75 / 1180 / 43 / 3 / 6 / 27 | B: numbers found after the name (line 490); check the size |
| Sausage Gravy | 3 oz | both read it the same, but its protein, carbs and fat make 198 kcal, not 75 | 75 / 18 / 2 / 0 / 4 / 385 / 8 / 0 / 0 / 1 | 75 / 18 / 2 / 0 / 4 / 385 / 8 / 0 / 0 / 1 | A: numbers found after the name (line 199); check the size; B: numbers found after the name (line 199); check the size |
| Biscuit & Sausage Gravy | 1 serving | both read it the same, but its protein, carbs and fat make 489 kcal, not 375 | 375 / 33 / 11 / 0 / 4 / 1185 / 42 / 1 / 2 / 6 | 375 / 33 / 11 / 0 / 4 / 1185 / 42 / 1 / 2 / 6 | A: numbers found after the name (line 213); check the size; B: numbers found after the name (line 213); check the size |
| City Ham Biscuit | 1 | both read it the same, but its protein, carbs and fat make 693 kcal, not 400 | 400 / 33 / 19 / 0 / 40 / 2450 / 75 / 2 / 10 / 24 | 400 / 33 / 19 / 0 / 40 / 2450 / 75 / 2 / 10 / 24 | A: numbers found after the name (line 235); check the size; B: numbers found after the name (line 235); check the size |

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
