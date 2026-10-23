# Carl's Jr.: lines for a person

Guide: https://www.carlsjr.com/getContentAsset/cccf694a-3d94-4cbc-adfc-28c255939f92/dfc3d011-8f63-43f6-9ed8-4b444333a1d0/nutritional-info.pdf?language=en-US (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (26)

Fix each line in `menus/carls-jr.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Natural-Cut Fries | Small | differ: saturated_fat_g | 280 / 14 / 2 / 0 / 0 / 560 / 36 / 3 / 0 / 3 | 280 / 14 / 2.5 / 0 / 0 / 560 / 36 / 3 / 0 / 3 |
| Natural-Cut Fries | Large | differ: fiber_g, protein_g | 450 / 22 / 4 / 0 / 0 / 910 / 59 / 0.6 / 0 / 0.5 | 450 / 22 / 4 / 0 / 0 / 910 / 59 / 6 / 0 / 5 |
| Fried Zucchini | 1 serving | the guide gives no fiber_g | 310 / 19 / 3.5 / 0 / 0 / 680 / 32 / – / 2 / 4 | 310 / 19 / 3.5 / 0 / 0 / 680 / 32 / – / 2 / 4 |
| Hand-Crafted Lemonade | 24 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 330 / 0 / 0 / 0 / 15 / 88 / 0 / 83 / 0 / – | 330 / 0 / 0 / 0 / 0 / 15 / 88 / 0 / 83 / 0 |
| Hand-Crafted Strawberry Lemonade | 16 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 270 / 0 / 0 / 0 / 20 / 71 / 0 / 67 / 0 / – | 270 / 0 / 0 / 0 / 0 / 20 / 71 / 0 / 67 / 0 |
| Hand-Crafted Strawberry Lemonade | 24 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 370 / 0 / 0 / 0 / 20 / 97 / 0 / 93 / 0 / – | 370 / 0 / 0 / 0 / 0 / 20 / 97 / 0 / 93 / 0 |
| Hi-C' Fruit Punch | 12 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 160 / 0 / 0 / 0 / 75 / 44 / 0 / 43 / 0 / – | 160 / 0 / 0 / 0 / 0 / 75 / 44 / 0 / 43 / 0 |
| Hi-C' Fruit Punch | 20 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 270 / 0 / 0 / 0 / 125 / 74 / 0 / 72 / 0 / – | 270 / 0 / 0 / 0 / 0 / 125 / 74 / 0 / 72 / 0 |
| Hi-C' Fruit Punch | 24 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 320 / 0 / 0 / 0 / 150 / 88 / 0 / 86 / 0 / – | 320 / 0 / 0 / 0 / 0 / 150 / 88 / 0 / 86 / 0 |
| Hi-C' Fruit Punch | 32 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 430 / 0 / 0 / 0 / 200 / 118 / 0 / 115 / 0 / – | 430 / 0 / 0 / 0 / 0 / 200 / 118 / 0 / 115 / 0 |
| Minute Maid Zero Sugar Lemonade | 12 oz | differ: cholesterol_mg, sodium_mg, carbs_g, protein_g | 5 / 0 / 0 / 0 / 45 / 2 / 0 / 0 / 0 / – | 5 / 0 / 0 / 0 / 0 / 45 / 2 / 0 / 0 / 0 |
| Minute Maid Zero Sugar Lemonade | 20 oz | differ: cholesterol_mg, sodium_mg, carbs_g, protein_g | 10 / 0 / 0 / 0 / 75 / 3 / 0 / 0 / 0 / – | 10 / 0 / 0 / 0 / 0 / 75 / 3 / 0 / 0 / 0 |
| Minute Maid Zero Sugar Lemonade | 24 oz | differ: cholesterol_mg, sodium_mg, carbs_g, protein_g | 15 / 0 / 0 / 0 / 90 / 4 / 0 / 0 / 0 / – | 15 / 0 / 0 / 0 / 0 / 90 / 4 / 0 / 0 / 0 |
| Minute Maid Zero Sugar Lemonade | 32 oz | differ: cholesterol_mg, sodium_mg, carbs_g, protein_g | 15 / 0 / 0 / 0 / 120 / 5 / 0 / 0 / 0 / – | 15 / 0 / 0 / 0 / 0 / 120 / 5 / 0 / 0 / 0 |
| Powerade Mountain Berry Blast | 12 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 90 / 0 / 0 / 0 / 115 / 23 / 0 / 23 / 0 / – | 90 / 0 / 0 / 0 / 0 / 115 / 23 / 0 / 23 / 0 |
| Powerade Mountain Berry Blast | 20 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 150 / 0 / 0 / 0 / 190 / 38 / 0 / 38 / 0 / – | 150 / 0 / 0 / 0 / 0 / 190 / 38 / 0 / 38 / 0 |
| Powerade Mountain Berry Blast | 24 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 170 / 0 / 0 / 0 / 230 / 46 / 0 / 46 / 0 / – | 170 / 0 / 0 / 0 / 0 / 230 / 46 / 0 / 46 / 0 |
| Powerade Mountain Berry Blast | 32 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 230 / 0 / 0 / 0 / 310 / 61 / 0 / 61 / 0 / – | 230 / 0 / 0 / 0 / 0 / 310 / 61 / 0 / 61 / 0 |
| Sprite* | 12 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 140 / 0 / 0 / 0 / 75 / 39 / 0 / 39 / 0 / – | 140 / 0 / 0 / 0 / 0 / 75 / 39 / 0 / 39 / 0 |
| Sprite* | 20 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 240 / 0 / 0 / 0 / 125 / 64 / 0 / 64 / 0 / – | 240 / 0 / 0 / 0 / 0 / 125 / 64 / 0 / 64 / 0 |
| Sprite* | 24 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 290 / 0 / 0 / 0 / 150 / 77 / 0 / 77 / 0 / – | 290 / 0 / 0 / 0 / 0 / 150 / 77 / 0 / 77 / 0 |
| Sprite* | 32 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 380 / 0 / 0 / 0 / 200 / 103 / 0 / 103 / 0 / – | 380 / 0 / 0 / 0 / 0 / 200 / 103 / 0 / 103 / 0 |
| Sweetened Iced Tea | 12 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 80 / 0 / 0 / 0 / 10 / 20 / 0 / 19 / 0 / – | 80 / 0 / 0 / 0 / 0 / 10 / 20 / 0 / 19 / 0 |
| Sweetened Iced Tea | 20 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 130 / 0 / 0 / 0 / 15 / 33 / 0 / 32 / 0 / – | 130 / 0 / 0 / 0 / 0 / 15 / 33 / 0 / 32 / 0 |
| Sweetened Iced Tea | 24 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 152 / 0 / 0 / 0 / 16 / 40 / 0 / 39 / 0 / – | 152 / 0 / 0 / 0 / 0 / 16 / 40 / 0 / 39 / 0 |
| Sweetened Iced Tea | 32 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 184 / 0 / 0 / 0 / 20 / 49 / 0 / 47 / 0 / – | 184 / 0 / 0 / 0 / 0 / 20 / 49 / 0 / 47 / 0 |

## Spot check (6 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Jalapeno POPPERS* Bites | 6 piece | 370 / 19 / 7 / 0 / 25 / 1110 / 40 / 3 / 4 / 9 |
| Chocolatey Chip Cookie | 1 serving | 170 / 9 / 5 / 0 / 0 / 160 / 22 / 1 / 13 / 1 |
| Jalapeno POPPERS* Bites | 9 piece | 550 / 28 / 10 / 0.5 / 35 / 1670 / 60 / 4 / 5 / 13 |
| Hash Rounds* | Medium | 320 / 19 / 4 / 0 / 0 / 400 / 28 / 3 / 1 / 3 |
| Dr Pepper* | 12 oz | 140 / 0 / 0 / 0 / 0 / 45 / 39 / 0 / 38 / 0 |
| Honey Mustard Dipping Sauce | 1 serving | 140 / 14 / 3 / 0 / 25 / 115 / 4 / 0 / 4 / 1 |
