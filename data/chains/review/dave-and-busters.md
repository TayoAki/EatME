# Dave & Buster's: lines for a person

Guide: https://www.daveandbusters.com/content/dam/dnb/us/en/menu/nutritional-menu/Nutritional%20Menu.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (2)

Fix each line in `menus/dave-and-busters.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Crisps & Guac | 1 serving | differ: cholesterol_mg | 660 / 28 / 4.5 / 0 / 0 / 2050 / 95 / 16 / 5 / 0 | 660 / 28 / 4.5 / 0 / 2.5 / 2050 / 95 / 16 / 5 / 0 |
| Simply Cranberry Juice | 1 serving | differ: cholesterol_mg, sodium_mg | 250 / 0 / 0 / 0 / 30 / 66 / 66 / 0 / 66 / 56 | 250 / 0 / 0 / 0 / 0 / 30 / 66 / 0 / 66 / 56 |

## Spot check (4 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Elotes Cauliflower | 1 serving | 260 / 21 / 4 / 0 / 15 / 430 / 12 / 5 / 0 / 0 |
| Steak Stacked Bowl | 1 serving | 1010 / 61 / 14 / 0 / 280 / 1880 / 69 / 10 / 6 / 4 |
| 5-Cheese Flatbread | 1 serving | 1050 / 37 / 22 / 0 / 10 / 2590 / 134 / 8 / 8 / 5 |
| Simply Orange Juice | 1 serving | 200 / 0 / 0 / 0 / 0 / 0 / 52 / 0 / 46 / 0 |
