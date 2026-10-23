# In-N-Out Burger: lines for a person

Guide: https://www.in-n-out.com/menu/nutrition-info (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (6)

Fix each line in `menus/in-n-out-burger.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Unsweetened Iced Tea | 9 fl oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Unsweetened Iced Tea | 14 fl oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Unsweetened Iced Tea | 19 fl oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Unsweetened Iced Tea | 9 ounce | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Unsweetened Iced Tea | 14 ounce | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Unsweetened Iced Tea | 19 ounce | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |

## Spot check (4 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Barq's Root Beer | 11 fl oz | 140 / 0 / 0 / 0 / 0 / 65 / 37 / 0 / 37 / 0 |
| Double-Double® | 287g | 610 / 34 / 15 / 0 / 110 / 1670 / 42 / 2 / 9 / 34 |
| Grilled Onions | 27g | 15 / 0 / 0 / 0 / 0 / 0 / 4 / 1 / 3 / 0 |
| Stevia in the Raw | 1g | 5 / 0 / 0 / 0 / 0 / 0 / 0.5 / 0 / 1 / 0 |
