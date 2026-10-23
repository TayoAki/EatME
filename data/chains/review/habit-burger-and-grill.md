# Habit Burger & Grill: lines for a person

Guide: https://www.habitburger.com/nutritional-information/ (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (8)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/habit-burger-and-grill.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Chocolate Shake | 1 serving | the guide gives no sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 670 / 20 / 13 / 0 / – / – / – / – / – / – | 670 / 20 / 13 / 0 / – / – / – / – / – / – | A: numbers found after the name (line 2929); check the size; B: numbers found after the name (line 2929); check the size |
| Tropical Tea | 1 serving | differ: carbs_g | 0 / 0 / 0 / 0 / 0 / 0 / 2.5 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 | A: not as drafted (line 4863 lacks 2.5); B: numbers found after the name (line 4863); check the size, mostly zeros: look |
| Lemon Caesar Dressing | 2 oz | the guide gives no sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 200 / 19 / 3.5 / – / – / – / – / – / – / – | 200 / 19 / 3.5 / – / – / – / – / – / – / – | A: numbers found after the name (line 6615); check the size; B: numbers found after the name (line 6615); check the size |
| Crispy Chicken Bites | 5 pc | only in draft B | not found | 240 / 8 / 1 / 0 / 65 / 840 / 23 / 0 / 0 / 21 | B: numbers found after the name (line 2281); check the size |
| Crispy Chicken Bites | 10 pc | only in draft B | not found | 480 / 15 / 3 / 0 / 125 / 1680 / 45 / 0 / 0 / 43 | B: numbers found after the name (line 2281); check the size |
| Sweet Potato Fries | 1 serving | both read it the same, but its protein, carbs and fat make 311 kcal, not 374 | 374 / 11 / 0 / 0 / 0 / 347 / 50 / 8 / 19 / 3 | 374 / 11 / 0 / 0 / 0 / 347 / 50 / 8 / 19 / 3 | A: numbers found after the name (line 2005); check the size; B: numbers found after the name (line 2005); check the size |
| Kids Fries | 1 serving | both read it the same, but its protein, carbs and fat make 220 kcal, not 190 | 190 / 12 / 2 / 0 / 0 / 356 / 26 / 2 / 1 / 2 | 190 / 12 / 2 / 0 / 0 / 356 / 26 / 2 / 1 / 2 | A: numbers found after the name (line 2743); check the size; B: numbers found after the name (line 2743); check the size |
| Veggie Patty | 1 serving | both read it the same, but its protein, carbs and fat make 168 kcal, not 140 | 140 / 4 / 0 / 0 / 5 / 490 / 18 / 6 / 2 / 15 | 140 / 4 / 0 / 0 / 5 / 490 / 18 / 6 / 2 / 15 | A: numbers found after the name (line 7721); check the size; B: numbers found after the name (line 7721); check the size |

## Spot check (5 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| American Cheese | 1 slice | 60 / 5 / 3 / 0 / 15 / 320 / 2 / 0 / 0 / 3 |
| Margarine | 2 Tsp | 140 / 14 / 5 / 0 / 0 / 110 / 0 / 0 / 0 / 0 |
| Corn & Black Bean Salsa | 1 serving | 50 / 1.5 / 0 / 0 / 0 / 70 / 8 / 2 / 3 / 2 |
| Sweet Potato Fries | 1 serving | 374 / 11 / 0 / 0 / 0 / 347 / 50 / 8 / 19 / 3 |
| Sirloin Steak Sandwich on Sourdough | 1 serving | 760 / 40 / 14 / 0 / 75 / 2090 / 65 / 5 / 9 / 32 |
