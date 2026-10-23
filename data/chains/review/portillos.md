# Portillo's: lines for a person

Guide: https://www.portillos.com/assets/1/6/NutritionAllergen_V10_0408.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (8)

Fix each line in `menus/portillos.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Italian Beef Sandwich | Regular Sandwich | only in draft A | 690 / 34 / 14 / – / 81 / 1237 / 59 / 0 / 2 / 33 | not found |
| Italian Beef Sandwich | Big Beef Sandwich | only in draft A | 1040 / 51 / 21 / – / 122 / 1856 / 88 / 0 / 3 / 50 | not found |
| Cherry Coke | Small | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 156 / 0 / 0 / – / 0 / 6 / 42 / 0 / 42 / 0 | 156 / 0 / 0 / – / 0 / 0 / 6 / 42 / 0 / 42 |
| Cherry Coke | Large | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 250 / 0 / 0 / – / 0 / 10 / 67 / 0 / 67 / 0 | 250 / 0 / 0 / – / 0 / 0 / 10 / 67 / 0 / 67 |
| Sprite | Small | differ: fiber_g, sugars_g, protein_g | 150 / 0 / 0 / – / 0 / 0 / 33 / 0 / 39 / 0 | 150 / 0 / 0 / – / 0 / 0 / 33 / 39 / 0 / 39 |
| Sprite | Large | differ: fiber_g, sugars_g, protein_g | 230 / 0 / 0 / – / 0 / 0 / 53 / 0 / 62 / 0 | 230 / 0 / 0 / – / 0 / 0 / 53 / 62 / 0 / 62 |
| Regular Sandwich | 1 serving | only in draft B | not found | 690 / 34 / 14 / – / 81 / 1237 / 59 / 0 / 2 / 33 |
| Big Beef Sandwich | 1 serving | only in draft B | not found | 1040 / 51 / 21 / – / 122 / 1856 / 88 / 0 / 3 / 50 |

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
