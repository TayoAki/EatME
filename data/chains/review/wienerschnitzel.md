# Wienerschnitzel: lines for a person

Guide: https://www.wienerschnitzel.com/wp-content/uploads/2026/01/Nutrition-Allergen-Guide-eff-1_12_2026.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (8)

Fix each line in `menus/wienerschnitzel.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Substitute Pretzel Bun (in place of standard bun) | 1 serving | only in draft A | 60 / 2 / 0 / 0 / 0 / 70 / 9 / 0 / 0 / 0 | not found |
| Substitute Premium Beef Hot Dog (in place of World Famous hot dog) | 1 serving | only in draft A | 120 / 10 / 4 / 1 / 10 / 280 / 1 / 0 / 1 / 4 | not found |
| Float, Barq's Root Beer | 1 serving | both read numbers that can't be right: sugars 67 g above carbs 53 g | 440 / 11 / 7 / 0 / 45 / 240 / 53 / 0 / 67 / 7 | 440 / 11 / 7 / 0 / 45 / 240 / 53 / 0 / 67 / 7 |
| Cucumber Tea (without ice) | 30 oz | both read numbers that can't be right: sugars 68 g above carbs 60 g | 240 / 0 / 0 / 0 / 0 / 0 / 60 / 0 / 68 / 0 | 240 / 0 / 0 / 0 / 0 / 0 / 60 / 0 / 68 / 0 |
| Peach Tea (without ice) | 30 oz | differ: cholesterol_mg, sodium_mg, carbs_g | 400 / 0 / 0 / 0 / 0 / 60 / 96 / 0 / 92 / 0 | 400 / 0 / 0 / 0 / 60 / 96 / 92 / 0 / 92 / 0 |
| Mango Tea (without ice) | 30 oz | differ: cholesterol_mg, sodium_mg, carbs_g | 440 / 0 / 0 / 0 / 0 / 40 / 112 / 0 / 104 / 0 | 440 / 0 / 0 / 0 / 40 / 112 / 104 / 0 / 104 / 0 |
| Peach Tea (without ice) | 40 oz | differ: cholesterol_mg, sodium_mg, carbs_g | 560 / 0 / 0 / 0 / 0 / 85 / 135 / 0 / 129 / 0 | 560 / 0 / 0 / 0 / 85 / 135 / 129 / 0 / 129 / 0 |
| Mango Tea (without ice) | 40 oz | differ: cholesterol_mg, sodium_mg, carbs_g | 620 / 0 / 0 / 0 / 0 / 55 / 157 / 0 / 146 / 0 | 620 / 0 / 0 / 0 / 55 / 157 / 146 / 0 / 146 / 0 |

## Spot check (5 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Coca-Cola Zero (without ice) | 40 oz | 0 / 0 / 0 / 0 / 0 / 130 / 0 / 0 / 0 / 0 |
| Mango Lemonade (without ice) | 40 oz | 810 / 0 / 0 / 0 / 0 / 350 / 210 / 0 / 198 / 0 |
| Chili Cheeseburger | 1 serving | 520 / 31 / 13 / 0 / 105 / 990 / 36 / 1 / 9 / 28 |
| Strawberry Lemonade (without ice) | 40 oz | 580 / 0 / 0 / 0 / 0 / 330 / 150 / 0 / 144 / 0 |
| Banana Split | 1 serving | 700 / 17 / 10 / 0 / 60 / 260 / 130 / 3 / 96 / 9 |
