# Five Guys: lines for a person

Guide: https://www.fiveguys.com/wp-content/uploads/2025/07/five-guys-us-nutrition-allergen-guide-english-1-final.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (17)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/five-guys.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Hot Dog (Supplier H) | 1 serving | only in draft A | 280 / 26 / 12 / 1 / 56 / 800 / 1 / 0 / 0 / 11 | not found | A: numbers found after the name (line 21); check the size |
| Hot Dog (Supplier K) | 1 serving | only in draft A | 260 / 24 / 9 / 1 / 60 / 750 / 460 / 0 / 0 / 11 | not found | A: numbers found after the name (line 22); check the size |
| Whipped Cream (Supplier S) | 1 serving | only in draft A | 20 / 1.5 / 1 / 0 / 5 / 0 / 1 / 0 / 1 / 0 | not found | A: numbers found after the name (line 53); check the size |
| Whipped Cream (Supplier A) | 1 serving | only in draft A | 20 / 1.5 / 1 / 0 / 5 / 0 / 1 / 0 / 1 / 0 | not found | A: numbers found after the name (line 54); check the size |
| Candy Cane Crunch | 1 serving | only in draft A | 185 / 0 / 0 / 0 / 2 / 48 / 0 / 0 / 33 / 0 | not found | A: numbers found after the name (line 58); check the size |
| Strawberry | 1 serving | only in draft A | 90 / 0 / 0 / 0 / 2 / 17 / 1 / 23 / 0.5 / – | not found | A: numbers found after the name (line 65); check the size |
| Malt Vinegar | 1 tbs | differ: carbs_g | 0 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | A: numbers found after the name (line 75); check the size, mostly zeros: look; B: numbers found after the name (line 75); check the size, mostly zeros: look |
| Eggs | 2 | only in draft A | 143 / 10 / 3 / 0 / 372 / 142 / 1 / 1 / 0 / 13 | not found | A: numbers found after the name (line 77); check the size |
| Hot Dog (Supplier H) | 90 g | only in draft B | not found | 280 / 26 / 12 / 1 / 56 / 800 / 0 / 0 / 0 / 11 | B: numbers found after the name (line 21); check the size |
| Hot Dog (Supplier K) | 90 g | only in draft B | not found | 260 / 24 / 9 / 1 / 60 / 750 / 0 / 0 / 0 / 11 | B: numbers found after the name (line 22); check the size |
| Whipped Cream (Supplier S) | 7 g | only in draft B | not found | 20 / 1.5 / 1 / 0 / 5 / 0 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 53); check the size |
| Whipped Cream (Supplier A) | 6 g | only in draft B | not found | 20 / 1.5 / 1 / 0 / 5 / 0 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 54); check the size |
| Candy Cane Crunch | 48 g | only in draft B | not found | 185 / 0 / 0 / 0 / 0 / 2 / 48 / 0 / 33 / 0 | B: numbers found after the name (line 58); check the size |
| Strawberry | 60 g | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 2 / 17 / 1 / 23 / 0.5 | B: numbers found after the name (line 65); check the size |
| Eggs | 2 eggs | only in draft B | not found | 143 / 10 / 3 / 0 / 372 / 142 / 1 / 0 / 0 / 13 | B: numbers found after the name (line 77); check the size |
| Hamburger Patty | 1 serving | both read it the same, but its protein, carbs and fat make 217 kcal, not 302 | 302 / 17 / 8 / 1 / 60 / 50 / 0 / 0 / 0 / 16 | 302 / 17 / 8 / 1 / 60 / 50 / 0 / 0 / 0 / 16 | A: numbers found after the name (line 20); check the size; B: numbers found after the name (line 20); check the size |
| Banana | 1 serving | both read it the same, but its protein, carbs and fat make 213 kcal, not 160 | 160 / 0.5 / 0 / 0 / 0 / 5 / 51 / 1 / 44 / 1 | 160 / 0.5 / 0 / 0 / 0 / 5 / 51 / 1 / 44 / 1 | A: numbers found after the name (line 57); check the size; B: numbers found after the name (line 57); check the size |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Chocolate | 1 serving | 133 / 2 / 2 / 0 / 0 / 30 / 30 / 2 / 22 / 2 |
| Onions / Grilled Onions | 1 serving | 11 / 0 / 0 / 0 / 0 / 1 / 2 / 0.5 / 1 / 0 |
| Jalapeno Peppers | 1 serving | 3 / 0 / 0 / 0 / 0 / 0 / 0.5 / 0 / 0 / 0 |
