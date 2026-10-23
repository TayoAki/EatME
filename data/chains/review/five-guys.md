# Five Guys: lines for a person

Guide: https://www.fiveguys.com/wp-content/uploads/2025/07/five-guys-us-nutrition-allergen-guide-english-1-final.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (15)

Fix each line in `menus/five-guys.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Hot Dog (Supplier H) | 1 serving | only in draft A | 280 / 26 / 12 / 1 / 56 / 800 / 1 / 0 / 0 / 11 | not found |
| Hot Dog (Supplier K) | 1 serving | only in draft A | 260 / 24 / 9 / 1 / 60 / 750 / 460 / 0 / 0 / 11 | not found |
| Whipped Cream (Supplier S) | 1 serving | only in draft A | 20 / 1.5 / 1 / 0 / 5 / 0 / 1 / 0 / 1 / 0 | not found |
| Whipped Cream (Supplier A) | 1 serving | only in draft A | 20 / 1.5 / 1 / 0 / 5 / 0 / 1 / 0 / 1 / 0 | not found |
| Candy Cane Crunch | 1 serving | only in draft A | 185 / 0 / 0 / 0 / 2 / 48 / 0 / 0 / 33 / 0 | not found |
| Strawberry | 1 serving | only in draft A | 90 / 0 / 0 / 0 / 2 / 17 / 1 / 23 / 0.5 / – | not found |
| Malt Vinegar | 1 tbs | differ: carbs_g | 0 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Eggs | 2 | only in draft A | 143 / 10 / 3 / 0 / 372 / 142 / 1 / 1 / 0 / 13 | not found |
| Hot Dog (Supplier H) | 90 g | only in draft B | not found | 280 / 26 / 12 / 1 / 56 / 800 / 0 / 0 / 0 / 11 |
| Hot Dog (Supplier K) | 90 g | only in draft B | not found | 260 / 24 / 9 / 1 / 60 / 750 / 0 / 0 / 0 / 11 |
| Whipped Cream (Supplier S) | 7 g | only in draft B | not found | 20 / 1.5 / 1 / 0 / 5 / 0 / 1 / 0 / 1 / 0 |
| Whipped Cream (Supplier A) | 6 g | only in draft B | not found | 20 / 1.5 / 1 / 0 / 5 / 0 / 1 / 0 / 1 / 0 |
| Candy Cane Crunch | 48 g | only in draft B | not found | 185 / 0 / 0 / 0 / 0 / 2 / 48 / 0 / 33 / 0 |
| Strawberry | 60 g | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 2 / 17 / 1 / 23 / 0.5 |
| Eggs | 2 eggs | only in draft B | not found | 143 / 10 / 3 / 0 / 372 / 142 / 1 / 0 / 0 / 13 |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Chocolate | 1 serving | 133 / 2 / 2 / 0 / 0 / 30 / 30 / 2 / 22 / 2 |
| Onions / Grilled Onions | 1 serving | 11 / 0 / 0 / 0 / 0 / 1 / 2 / 0.5 / 1 / 0 |
| Jalapeno Peppers | 1 serving | 3 / 0 / 0 / 0 / 0 / 0 / 0.5 / 0 / 0 / 0 |
