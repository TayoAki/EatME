# Jack's Family Restaurants: lines for a person

Guide: https://www.eatatjacks.com/wp-content/uploads/2026/05/Jacks-Nutritional-Info-05112020.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (6)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/jacks-family-restaurants.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Iced Sweet Tea | 1/2 Gal. | only in draft A | 860 / 0 / 0 / 0 / 0 / 55 / 223 / 0 / 217 / 0 | not found | A: numbers found after the name (line 204); check the size |
| Iced Tea | 1/2 Gal. | only in draft A | 20 / 0 / 0 / 0 / 0 / 55 / 6 / 0 / 0 / 0 | not found | A: numbers found after the name (line 208); check the size |
| Chicken, Fried, Box (with Biscuits & no side) | 12 pc. | only in draft B | not found | 6460 / 372 / 92 / 34 / 1200 / 18130 / 437 / 15 / 31 / 328 | B: name not in the guide text |
| Chicken, Fried, Box (with Biscuits & no side) | 8 pc. | only in draft B | not found | 4300 / 248 / 61 / 22 / 800 / 12090 / 291 / 10 / 20 / 219 | B: name not in the guide text |
| Breakfast, Gravy, Chicken | 4 oz. | both read it the same, but its protein, carbs and fat make 71 kcal, not 15 | 15 / 3 / 0.5 / 1 / 0 / 650 / 8 / 0 / 1 / 3 | 15 / 3 / 0.5 / 1 / 0 / 650 / 8 / 0 / 1 / 3 | A: numbers found after the name (line 28); check the size; B: numbers found after the name (line 28); check the size |
| Orange Fanta | small | both read it the same, but its protein, carbs and fat make 196 kcal, not 170 | 170 / 0 / 0 / 0 / 0 / 65 / 49 / 0 / 48 / 0 | 170 / 0 / 0 / 0 / 0 / 65 / 49 / 0 / 48 / 0 | A: numbers found after the name (line 188); check the size; B: numbers found after the name (line 188); check the size |

## Spot check (10 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Chicken Fillet (fried) | 1 serving | 520 / 26 / 4 / 0 / 55 / 1310 / 49 / 2 / 8 / 25 |
| Ice Cream, Vanilla | 1 scoop | 240 / 13 / 8 / 0 / 65 / 105 / 27 / 0 / 27 / 5 |
| Mellow Yellow | small | 170 / 0 / 0 / 0 / 0 / 15 / 47 / 0 / 47 / 0 |
| Iced Coffee, Caramel | 10 fluid oz | 210 / 9 / 5 / 0 / 30 / 60 / 30 / 0 / 27 / 4 |
| American Cheese | 1 slice | 45 / 3.5 / 2 / 0 / 10 / 210 / 0 / 0 / 0 / 2 |
| Minute Maid Light Lemonade | large | 40 / 0 / 0 / 0 / 0 / 40 / 10 / 0 / 5 / 0 |
| Minute Maid Light Lemonade | small | 25 / 0 / 0 / 0 / 0 / 25 / 7 / 0 / 3 / 0 |
| Chocolate Milk | 16oz Size Cup | 350 / 11 / 6 / 0 / 30 / 160 / 56 / 2 / 49 / 11 |
| Diet Coke | small | 0 / 0 / 0 / 0 / 0 / 45 / 0 / 0 / 0 / 0 |
| Big Breakfast Sandwich w/ Sausage | 1 serving | 830 / 60 / 18 / 0 / 250 / 1510 / 44 / 1 / 4 / 28 |
