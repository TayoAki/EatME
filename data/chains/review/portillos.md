# Portillo's: lines for a person

Guide: https://www.portillos.com/assets/1/6/NutritionAllergen_V10_0408.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (12)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/portillos.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Italian Beef Sandwich | Regular Sandwich | only in draft A | 690 / 34 / 14 / – / 81 / 1237 / 59 / 0 / 2 / 33 | not found | A: numbers found after the name (line 70); check the size |
| Italian Beef Sandwich | Big Beef Sandwich | only in draft A | 1040 / 51 / 21 / – / 122 / 1856 / 88 / 0 / 3 / 50 | not found | A: numbers found after the name (line 70); check the size |
| Cherry Coke | Small | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 156 / 0 / 0 / – / 0 / 6 / 42 / 0 / 42 / 0 | 156 / 0 / 0 / – / 0 / 0 / 6 / 42 / 0 / 42 | A: numbers found after the name (line 274); check the size; B: numbers found after the name (line 274); check the size |
| Cherry Coke | Large | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 250 / 0 / 0 / – / 0 / 10 / 67 / 0 / 67 / 0 | 250 / 0 / 0 / – / 0 / 0 / 10 / 67 / 0 / 67 | A: numbers found after the name (line 275); check the size; B: numbers found after the name (line 275); check the size |
| Sprite | Small | differ: fiber_g, sugars_g, protein_g | 150 / 0 / 0 / – / 0 / 0 / 33 / 0 / 39 / 0 | 150 / 0 / 0 / – / 0 / 0 / 33 / 39 / 0 / 39 | A: numbers found after the name (line 307); check the size; B: numbers found after the name (line 307); check the size |
| Sprite | Large | differ: fiber_g, sugars_g, protein_g | 230 / 0 / 0 / – / 0 / 0 / 53 / 0 / 62 / 0 | 230 / 0 / 0 / – / 0 / 0 / 53 / 62 / 0 / 62 | A: numbers found after the name (line 308); check the size; B: numbers found after the name (line 308); check the size |
| Regular Sandwich | 1 serving | only in draft B | not found | 690 / 34 / 14 / – / 81 / 1237 / 59 / 0 / 2 / 33 | B: numbers found after the name (line 71); check the size |
| Big Beef Sandwich | 1 serving | only in draft B | not found | 1040 / 51 / 21 / – / 122 / 1856 / 88 / 0 / 3 / 50 | B: numbers found after the name (line 72); check the size |
| Classic Caesar Salad with Grilled Chicken | with dressing | both read it the same, but its protein, carbs and fat make 849 kcal, not 700 | 700 / 65 / 9 / – / 228 / 1275 / 24 / 4 / 5 / 42 | 700 / 65 / 9 / – / 228 / 1275 / 24 / 4 / 5 / 42 | A: numbers found after the name (line 144); check the size; B: numbers found after the name (line 144); check the size |
| Hot Giardiniera Sauce | 1 serving | both read it the same, but its protein, carbs and fat make 53 kcal, not 90 | 90 / 5 / 3 / – / 0 / 170 / 2 / 0 / 1 / 0 | 90 / 5 / 3 / – / 0 / 170 / 2 / 0 / 1 / 0 | A: numbers found after the name (line 161); check the size; B: numbers found after the name (line 161); check the size |
| Fanta Orange Soda | Small | both read it the same, but its protein, carbs and fat make 212 kcal, not 167 | 167 / 0 / 0 / – / 0 / 53 / 53 / 0 / 53 / 0 | 167 / 0 / 0 / – / 0 / 53 / 53 / 0 / 53 / 0 | A: numbers found after the name (line 290); check the size; B: numbers found after the name (line 290); check the size |
| Fantasy Orange Soda | Large | both read it the same, but its protein, carbs and fat make 336 kcal, not 266 | 266 / 0 / 0 / – / 0 / 84 / 84 / 0 / 84 / 0 | 266 / 0 / 0 / – / 0 / 84 / 84 / 0 / 84 / 0 | A: numbers found after the name (line 291); check the size; B: numbers found after the name (line 291); check the size |

## Spot check (8 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Hot Dog | 1 serving | 150 / 12 / 5 / – / 30 / 480 / 2 / 0 / 1 / 7 |
| Diet Coke | Small | 0 / 0 / 0 / – / 0 / 15 / 0 / 0 / 0 / 0 |
| Hot Dog with Everything | Jumbo | 450 / 25 / 9 / – / 55 / 2050 / 40 / 2 / 14 / 18 |
| Mostaccioli | Small, without sauce | 510 / 10 / 5 / – / 21 / 413 / 84 / 4 / 2 / 23 |
| Cup of Original Chili with Cheese and Onion | 1 serving | 430 / 20 / 9 / – / 58 / 1764 / 42 / 7 / 6 / 22 |
| Onion Rings | Jumbo | 2400 / 60 / 20 / – / 45 / 5915 / 470 / 10 / 50 / 45 |
| Spicy Chicken Chopped Salad | without dressing | 740 / 34 / 13 / – / 135 / 2336 / 62 / 7 / 8 / 45 |
| Chili Cheese Dog | Regular | 500 / 30 / 14 / – / 73 / 1669 / 36 / 1 / 5 / 21 |
