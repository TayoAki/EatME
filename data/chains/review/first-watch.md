# First Watch: lines for a person

Guide: https://firstwatch.com/nutrition-and-allergens (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (7)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/first-watch.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Sweet Honey Pecan Salad | Half Salad with Dressing | differ: protein_g | 430 / 25 / 5 / 0 / 40 / 580 / 36 / 7 / 24 / 20 | 430 / 25 / 5 / 0 / 40 / 580 / 36 / 7 / 24 / 15 | A: numbers found after the name (line 328); check the size; B: numbers found after the name (line 328); check the size |
| Chicken Avocado Chop Salad | Half Salad with Dressing | differ: protein_g | 330 / 20 / 4 / 0 / 35 / 500 / 25 / 5 / 5 / 3 | 330 / 20 / 4 / 0 / 35 / 500 / 25 / 5 / 5 / 12 | A: numbers found after the name (line 330); check the size; B: numbers found after the name (line 330); check the size |
| Hot Chocolate | 1 serving | both read numbers that can't be right: sugars 46 g above carbs 23 g | 250 / 5 / 5 / 0 / 15 / 310 / 23 / 0 / 46 / 1 | 250 / 5 / 5 / 0 / 15 / 310 / 23 / 0 / 46 / 1 | A: numbers found after the name (line 514); check the size; B: numbers found after the name (line 514); check the size |
| Spiked Lavender Lemonade | 1 serving | both read it the same, but its protein, carbs and fat make 128 kcal, not 250 | 250 / 0 / 0 / 0 / 0 / 0 / 32 / 0 / 28 / 0 | 250 / 0 / 0 / 0 / 0 / 0 / 32 / 0 / 28 / 0 | A: numbers found after the name (line 400); check the size; B: numbers found after the name (line 400); check the size |
| Pomegranate Sunrise | 1 serving | both read it the same, but its protein, carbs and fat make 148 kcal, not 340 | 340 / 0 / 0 / 0 / 0 / 0 / 37 / 0 / 31 / 0 | 340 / 0 / 0 / 0 / 0 / 0 / 37 / 0 / 31 / 0 | A: numbers found after the name (line 402); check the size; B: numbers found after the name (line 402); check the size |
| Cinnamon Toast Cereal Milk | 1 serving | both read it the same, but its protein, carbs and fat make 161 kcal, not 230 | 230 / 1 / 0 / 0 / 0 / 20 / 37 / 0 / 33 / 1 | 230 / 1 / 0 / 0 / 0 / 20 / 37 / 0 / 33 / 1 | A: numbers found after the name (line 404); check the size; B: numbers found after the name (line 404); check the size |
| Cold Brew Tini | 1 serving | both read it the same, but its protein, carbs and fat make 136 kcal, not 230 | 230 / 8 / 7 / 0 / 5 / 35 / 15 / 0 / 12 / 1 | 230 / 8 / 7 / 0 / 5 / 35 / 15 / 0 / 12 / 1 | A: numbers found after the name (line 423); check the size; B: numbers found after the name (line 423); check the size |

## Spot check (8 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Bob's Red Mill Buttered Grits | 1 serving | 180 / 9 / 3 / 0 / 0 / 790 / 21 / 1 / 0 / 2 |
| Sweet Honey Pecan Salad | 1 serving | 980 / 55 / 11 / 0 / 85 / 1520 / 91 / 14 / 48 / 33 |
| Broccoli Cheddar | Bowl | 240 / 19 / 11 / 1 / 60 / 990 / 10 / 0 / 4 / 6 |
| 100% Cold Squeezed Orange Juice | Small | 110 / 0 / 0 / 0 / 0 / 0 / 26 / 0 / 21 / 2 |
| Pesto Chicken Power Bowl | 1 serving | 650 / 38 / 6 / 0 / 90 / 1350 / 52 / 7 / 3 / 31 |
| Herbal Teas | 1 serving | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Sunrise Granola Bowl | 1 serving | 930 / 35 / 6 / 0 / 90 / 460 / 123 / 6 / 78 / 29 |
| Coke | 1 serving | 100 / 0 / 0 / 0 / 0 / 30 / 27 / 0 / 27 / 0 |
