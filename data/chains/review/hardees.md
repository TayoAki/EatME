# Hardee's: lines for a person

Guide: https://www.hardees.com/getContentAsset/20c3e4eb-fa23-4fb2-b914-5fc082e91122/dfc3d011-8f63-43f6-9ed8-4b444333a1d0/nutritional-info-page.pdf?language=en-US (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (17)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/hardees.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Homestyle Sausage, Egg & Cheese Burrito | 1 serving | only in draft A | 930 / 63 / 22 / 1 / 480 / 1740 / 54 / 3 / 2 / 35 | not found | A: numbers found after the name (line 24); check the size |
| Sausage, Egg & Cheese Burrito | 1 serving | only in draft A | 930 / 63 / 22 / 1 / 480 / 1740 / 54 / 3 / 2 / 35 | not found | A: numbers found after the name (line 24); check the size |
| Regular Coffee | Large (20 fl. oz) | both read numbers that can't be right: fiber 2 g above carbs 0 g | 15 / 0.5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 | 15 / 0.5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 | A: numbers found after the name (line 96); check the size; B: numbers found after the name (line 96); check the size |
| Decaffeinated Coffee | Large (20 fl. oz) | both read numbers that can't be right: fiber 2 g above carbs 0 g | 15 / 0.5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 | 15 / 0.5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 | A: numbers found after the name (line 99); check the size; B: numbers found after the name (line 99); check the size |
| Coca-Cola Zero | 20 oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 115); check the size, mostly zeros: look |
| Coca-Cola Zero | 24 oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 115); check the size, mostly zeros: look |
| Coca-Cola Zero | 32 oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 115); check the size, mostly zeros: look |
| Homestyle Sausage, Egg & Cheese Burrito | 285 g | only in draft B | not found | 930 / 63 / 22 / 1 / 480 / 1740 / 54 / 3 / 2 / 35 | B: numbers found after the name (line 24); check the size |
| Sausage, Egg & Cheese Burrito | 285 g | only in draft B | not found | 930 / 63 / 22 / 1 / 480 / 1740 / 54 / 3 / 2 / 35 | B: numbers found after the name (line 24); check the size |
| Coca-Cola Zero | 20 g | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 115); check the size, mostly zeros: look |
| Coca-Cola Zero | 24 g | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 116); check the size, mostly zeros: look |
| Coca-Cola Zero | 32 g | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 117); check the size, mostly zeros: look |
| Big Roast Beef | 1 serving | both read it the same, but its protein, carbs and fat make 412 kcal, not 530 | 530 / 16 / 5 / 0 / 65 / 1880 / 38 / 2 / 7 / 29 | 530 / 16 / 5 / 0 / 65 / 1880 / 38 / 2 / 7 / 29 | A: numbers found after the name (line 53); check the size; B: numbers found after the name (line 53); check the size |
| Original Roast Beef | 1 serving | both read it the same, but its protein, carbs and fat make 228 kcal, not 300 | 300 / 4 / 2 / 0 / 30 / 1030 / 31 / 1 / 4 / 17 | 300 / 4 / 2 / 0 / 30 / 1030 / 31 / 1 / 4 / 17 | A: numbers found after the name (line 54); check the size; B: numbers found after the name (line 54); check the size |
| Monster Roast Beef | 1 serving | both read it the same, but its protein, carbs and fat make 645 kcal, not 760 | 760 / 33 / 13 / 0 / 120 / 2930 / 40 / 0 / 9 / 47 | 760 / 33 / 13 / 0 / 120 / 2930 / 40 / 0 / 9 / 47 | A: numbers found after the name (line 55); check the size; B: numbers found after the name (line 55); check the size |
| 5-Piece Spicy Hand-Breaded Chicken TendersTM | 1 serving | both read it the same, but its protein, carbs and fat make 454 kcal, not 260 | 260 / 22 / 5 / 0 / 115 / 1350 / 23 / 3 / 1 / 41 | 260 / 22 / 5 / 0 / 115 / 1350 / 23 / 3 / 1 / 41 | A: numbers found after the name (line 65); check the size; B: numbers found after the name (line 65); check the size |
| Apple Tender Wrap | 1 serving | both read it the same, but its protein, carbs and fat make 216 kcal, not 370 | 370 / 12 / 4 / 0 / 5 / 200 / 25 / 1 / 11 / 2 | 370 / 12 / 4 / 0 / 5 / 200 / 25 / 1 / 11 / 2 | A: numbers found after the name (line 87); check the size; B: numbers found after the name (line 87); check the size |

## Spot check (6 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Apple Turnover | 1 serving | 270 / 13 / 4 / 0 / 5 / 260 / 35 / 1 / 11 / 3 |
| Nashville Hot Hand-Breaded Chicken Sandwich | 1 serving | 570 / 32 / 6 / 0 / 80 / 2530 / 49 / 2 / 8 / 30 |
| Crispy Curls® | Medium | 340 / 17 / 4 / 0 / 0 / 840 / 43 / 4 / 0 / 4 |
| Super Bacon Biscuit | 1 serving | 600 / 36 / 17 / 0 / 255 / 1810 / 45 / 2 / 5 / 27 |
| Hand-Breaded Chicken Biscuit | 1 serving | 610 / 31 / 11 / 0 / 75 / 2780 / 52 / 2 / 4 / 30 |
| Bacon, Egg & Cheese Biscuit | 1 serving | 510 / 28 / 14 / 0 / 230 / 1360 / 44 / 2 / 5 / 19 |
