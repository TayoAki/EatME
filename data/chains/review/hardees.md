# Hardee's: lines for a person

Guide: https://www.hardees.com/getContentAsset/20c3e4eb-fa23-4fb2-b914-5fc082e91122/dfc3d011-8f63-43f6-9ed8-4b444333a1d0/nutritional-info-page.pdf?language=en-US (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (12)

Fix each line in `menus/hardees.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Homestyle Sausage, Egg & Cheese Burrito | 1 serving | only in draft A | 930 / 63 / 22 / 1 / 480 / 1740 / 54 / 3 / 2 / 35 | not found |
| Sausage, Egg & Cheese Burrito | 1 serving | only in draft A | 930 / 63 / 22 / 1 / 480 / 1740 / 54 / 3 / 2 / 35 | not found |
| Regular Coffee | Large (20 fl. oz) | both read numbers that can't be right: fiber 2 g above carbs 0 g | 15 / 0.5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 | 15 / 0.5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 |
| Decaffeinated Coffee | Large (20 fl. oz) | both read numbers that can't be right: fiber 2 g above carbs 0 g | 15 / 0.5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 | 15 / 0.5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 |
| Coca-Cola Zero | 20 oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | not found |
| Coca-Cola Zero | 24 oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | not found |
| Coca-Cola Zero | 32 oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | not found |
| Homestyle Sausage, Egg & Cheese Burrito | 285 g | only in draft B | not found | 930 / 63 / 22 / 1 / 480 / 1740 / 54 / 3 / 2 / 35 |
| Sausage, Egg & Cheese Burrito | 285 g | only in draft B | not found | 930 / 63 / 22 / 1 / 480 / 1740 / 54 / 3 / 2 / 35 |
| Coca-Cola Zero | 20 g | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 |
| Coca-Cola Zero | 24 g | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 |
| Coca-Cola Zero | 32 g | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 |

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
