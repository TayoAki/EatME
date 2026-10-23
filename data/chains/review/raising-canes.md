# Raising Cane's: lines for a person

Guide: https://www.raisingcanes.com/allergens/ (read 2026-10-22). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (3)

Fix each line in `menus/raising-canes.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Sweet Tea - Jug | 1 gallon | only in draft A | 1360 / 0 / 0 / 0 / 0 / 140 / 352 / 0 / 351 / 0 | not found |
| Unsweet Tea - Jug | 1 gallon | only in draft A | 0 / 0 / 0 / 0 / 0 / 140 / 0 / 0 / 0 / 0 | not found |
| Lemonade - Jug | 1 gallon | only in draft A | 1700 / 1 / 0 / 0 / 0 / 130 / 442 / 0.5 / 427 / 1 | not found |

## Spot check (6 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Sprite - Regular | 22 fl oz | 260 / 0 / 0 / 0 / 0 / 130 / 70 / 0 / 70 / 0 |
| Orange Crush - Regular | 22 fl oz | 300 / 0 / 0 / 0 / 0 / 85 / 81 / 0 / 80 / 0 |
| Texas Toast | 1.7 oz (47 g) | 150 / 4.5 / 2 / 0 / 2.5 / 300 / 23 / 2 / 4 / 4 |
| Diet Coke - Kid's | 12 fl oz | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 |
| Chicken Finger | 1.9 oz (55 g) | 130 / 6 / 1 / 0 / 35 / 230 / 5 / 0.5 / 0 / 12 |
| Powerade Mtn Berry Blast - Large | 32 fl oz | 230 / 0 / 0 / 0 / 0 / 310 / 61 / 0 / 61 / 0 |
