# First Watch: lines for a person

Guide: https://firstwatch.com/nutrition-and-allergens (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (3)

Fix each line in `menus/first-watch.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Sweet Honey Pecan Salad | Half Salad with Dressing | differ: protein_g | 430 / 25 / 5 / 0 / 40 / 580 / 36 / 7 / 24 / 20 | 430 / 25 / 5 / 0 / 40 / 580 / 36 / 7 / 24 / 15 |
| Chicken Avocado Chop Salad | Half Salad with Dressing | differ: protein_g | 330 / 20 / 4 / 0 / 35 / 500 / 25 / 5 / 5 / 3 | 330 / 20 / 4 / 0 / 35 / 500 / 25 / 5 / 5 / 12 |
| Hot Chocolate | 1 serving | both read numbers that can't be right: sugars 46 g above carbs 23 g | 250 / 5 / 5 / 0 / 15 / 310 / 23 / 0 / 46 / 1 | 250 / 5 / 5 / 0 / 15 / 310 / 23 / 0 / 46 / 1 |

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
