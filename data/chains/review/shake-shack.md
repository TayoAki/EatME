# Shake Shack: lines for a person

Guide: https://shakeshack.com/sites/default/files/2023-01/SS%20Nutrition%20Jan%2031%202023%5B87%5D.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (6)

Fix each line in `menus/shake-shack.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Add Veggie Patty* | 1 serving | both read numbers that can't be right: saturated and trans fat above fat | 210 / 4 / 7 / 0 / 0 / 760 / 20 / 2 / 2 / 8 | 210 / 4 / 7 / 0 / 0 / 760 / 20 / 2 / 2 / 8 |
| Black & White Shake | Mini (8oz) | both read numbers that can't be right: sugars 38 g above carbs 30 g | 390 / 21 / 13 / 0 / 120 / 240 / 30 / 0 / 38 / 9 | 390 / 21 / 13 / 0 / 120 / 240 / 30 / 0 / 38 / 9 |
| Featured Lemonade | Small | the guide gives no calories, sodium_mg, carbs_g, sugars_g, protein_g | – / 0 / 0 / 0 / 0 / – / – / 0 / – / – | – / 0 / 0 / 0 / 0 / – / – / 0 / – / – |
| Featured Lemonade | Large | the guide gives no calories, sodium_mg, carbs_g, sugars_g, protein_g | – / 0 / 0 / 0 / 0 / – / – / 0 / – / – | – / 0 / 0 / 0 / 0 / – / – / 0 / – / – |
| Fifty-Fifty Featured Lemonade | Small | the guide gives no calories, sodium_mg, carbs_g, sugars_g | – / 0 / 0 / 0 / 0 / – / – / 0 / – / 0 | – / 0 / 0 / 0 / 0 / – / – / 0 / – / 0 |
| Fifty-Fifty Featured Lemonade | Large | the guide gives no calories, sodium_mg, carbs_g, sugars_g, protein_g | – / 0 / 0 / 0 / 0 / – / – / 0 / – / – | – / 0 / 0 / 0 / 0 / – / – / 0 / – / – |

## Spot check (8 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Egg and Cheese Breakfast Sandwich* | 1 serving | 530 / 32 / 14 / 0 / 260 / 1220 / 28 / 0 / 8 / 30 |
| PepsiMAX* | Small | 0 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 0 / 0 |
| Link Burger, Double | 1 serving | 930 / 64 / 26 / 2 / 220 / 3040 / 28 / 0 / 6 / 61 |
| Hot Dog | 1 serving | 350 / 22 / 10 / 0 / 50 / 800 / 25 / 0 / 6 / 16 |
| Diet Coke | Small | 0 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 0 / 0 |
| Bourbon Salted Honey Shake* | 1 serving | 890 / 44 / 27 / 0 / 260 / 700 / 89 / 0 / 87 / 18 |
| Featured Blood Orange Dreamsicle Shake | Mini (8oz) | 410 / 20 / 12 / 0 / 125 / 220 / 49 / 1 / 47 / 10 |
| Whipped Cream | 1 serving | 70 / 5 / 3.5 / 0 / 20 / 20 / 5 / 0 / 4 / 1 |
