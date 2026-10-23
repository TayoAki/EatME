# Carl's Jr.: lines for a person

Guide: https://www.carlsjr.com/getContentAsset/cccf694a-3d94-4cbc-adfc-28c255939f92/dfc3d011-8f63-43f6-9ed8-4b444333a1d0/nutritional-info.pdf?language=en-US (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (29)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/carls-jr.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Natural-Cut Fries | Small | differ: saturated_fat_g | 280 / 14 / 2 / 0 / 0 / 560 / 36 / 3 / 0 / 3 | 280 / 14 / 2.5 / 0 / 0 / 560 / 36 / 3 / 0 / 3 | A: not as drafted (line 54 lacks 2); B: numbers found after the name (line 54); check the size |
| Natural-Cut Fries | Large | differ: fiber_g, protein_g | 450 / 22 / 4 / 0 / 0 / 910 / 59 / 0.6 / 0 / 0.5 | 450 / 22 / 4 / 0 / 0 / 910 / 59 / 6 / 0 / 5 | A: not as drafted (line 54 lacks 0.6, 0.5); B: numbers found after the name (line 54); check the size |
| Fried Zucchini | 1 serving | the guide gives no fiber_g | 310 / 19 / 3.5 / 0 / 0 / 680 / 32 / – / 2 / 4 | 310 / 19 / 3.5 / 0 / 0 / 680 / 32 / – / 2 / 4 | A: numbers found after the name (line 59); check the size; B: numbers found after the name (line 59); check the size |
| Hand-Crafted Lemonade | 24 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 330 / 0 / 0 / 0 / 15 / 88 / 0 / 83 / 0 / – | 330 / 0 / 0 / 0 / 0 / 15 / 88 / 0 / 83 / 0 | A: numbers found after the name (line 123); check the size; B: numbers found after the name (line 123); check the size |
| Hand-Crafted Strawberry Lemonade | 16 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 270 / 0 / 0 / 0 / 20 / 71 / 0 / 67 / 0 / – | 270 / 0 / 0 / 0 / 0 / 20 / 71 / 0 / 67 / 0 | A: numbers found after the name (line 124); check the size; B: numbers found after the name (line 124); check the size |
| Hand-Crafted Strawberry Lemonade | 24 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 370 / 0 / 0 / 0 / 20 / 97 / 0 / 93 / 0 / – | 370 / 0 / 0 / 0 / 0 / 20 / 97 / 0 / 93 / 0 | A: numbers found after the name (line 125); check the size; B: numbers found after the name (line 125); check the size |
| Hi-C' Fruit Punch | 12 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 160 / 0 / 0 / 0 / 75 / 44 / 0 / 43 / 0 / – | 160 / 0 / 0 / 0 / 0 / 75 / 44 / 0 / 43 / 0 | A: numbers found after the name (line 126); check the size; B: numbers found after the name (line 126); check the size |
| Hi-C' Fruit Punch | 20 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 270 / 0 / 0 / 0 / 125 / 74 / 0 / 72 / 0 / – | 270 / 0 / 0 / 0 / 0 / 125 / 74 / 0 / 72 / 0 | A: numbers found after the name (line 127); check the size; B: numbers found after the name (line 127); check the size |
| Hi-C' Fruit Punch | 24 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 320 / 0 / 0 / 0 / 150 / 88 / 0 / 86 / 0 / – | 320 / 0 / 0 / 0 / 0 / 150 / 88 / 0 / 86 / 0 | A: numbers found after the name (line 128); check the size; B: numbers found after the name (line 128); check the size |
| Hi-C' Fruit Punch | 32 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 430 / 0 / 0 / 0 / 200 / 118 / 0 / 115 / 0 / – | 430 / 0 / 0 / 0 / 0 / 200 / 118 / 0 / 115 / 0 | A: numbers found after the name (line 129); check the size; B: numbers found after the name (line 129); check the size |
| Minute Maid Zero Sugar Lemonade | 12 oz | differ: cholesterol_mg, sodium_mg, carbs_g, protein_g | 5 / 0 / 0 / 0 / 45 / 2 / 0 / 0 / 0 / – | 5 / 0 / 0 / 0 / 0 / 45 / 2 / 0 / 0 / 0 | A: numbers found after the name (line 130); check the size; B: numbers found after the name (line 130); check the size |
| Minute Maid Zero Sugar Lemonade | 20 oz | differ: cholesterol_mg, sodium_mg, carbs_g, protein_g | 10 / 0 / 0 / 0 / 75 / 3 / 0 / 0 / 0 / – | 10 / 0 / 0 / 0 / 0 / 75 / 3 / 0 / 0 / 0 | A: numbers found after the name (line 131); check the size; B: numbers found after the name (line 131); check the size |
| Minute Maid Zero Sugar Lemonade | 24 oz | differ: cholesterol_mg, sodium_mg, carbs_g, protein_g | 15 / 0 / 0 / 0 / 90 / 4 / 0 / 0 / 0 / – | 15 / 0 / 0 / 0 / 0 / 90 / 4 / 0 / 0 / 0 | A: numbers found after the name (line 132); check the size; B: numbers found after the name (line 132); check the size |
| Minute Maid Zero Sugar Lemonade | 32 oz | differ: cholesterol_mg, sodium_mg, carbs_g, protein_g | 15 / 0 / 0 / 0 / 120 / 5 / 0 / 0 / 0 / – | 15 / 0 / 0 / 0 / 0 / 120 / 5 / 0 / 0 / 0 | A: numbers found after the name (line 133); check the size; B: numbers found after the name (line 133); check the size |
| Powerade Mountain Berry Blast | 12 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 90 / 0 / 0 / 0 / 115 / 23 / 0 / 23 / 0 / – | 90 / 0 / 0 / 0 / 0 / 115 / 23 / 0 / 23 / 0 | A: numbers found after the name (line 134); check the size; B: numbers found after the name (line 134); check the size |
| Powerade Mountain Berry Blast | 20 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 150 / 0 / 0 / 0 / 190 / 38 / 0 / 38 / 0 / – | 150 / 0 / 0 / 0 / 0 / 190 / 38 / 0 / 38 / 0 | A: numbers found after the name (line 135); check the size; B: numbers found after the name (line 135); check the size |
| Powerade Mountain Berry Blast | 24 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 170 / 0 / 0 / 0 / 230 / 46 / 0 / 46 / 0 / – | 170 / 0 / 0 / 0 / 0 / 230 / 46 / 0 / 46 / 0 | A: numbers found after the name (line 136); check the size; B: numbers found after the name (line 136); check the size |
| Powerade Mountain Berry Blast | 32 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 230 / 0 / 0 / 0 / 310 / 61 / 0 / 61 / 0 / – | 230 / 0 / 0 / 0 / 0 / 310 / 61 / 0 / 61 / 0 | A: numbers found after the name (line 137); check the size; B: numbers found after the name (line 137); check the size |
| Sprite* | 12 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 140 / 0 / 0 / 0 / 75 / 39 / 0 / 39 / 0 / – | 140 / 0 / 0 / 0 / 0 / 75 / 39 / 0 / 39 / 0 | A: numbers found after the name (line 138); check the size; B: numbers found after the name (line 138); check the size |
| Sprite* | 20 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 240 / 0 / 0 / 0 / 125 / 64 / 0 / 64 / 0 / – | 240 / 0 / 0 / 0 / 0 / 125 / 64 / 0 / 64 / 0 | A: numbers found after the name (line 139); check the size; B: numbers found after the name (line 139); check the size |
| Sprite* | 24 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 290 / 0 / 0 / 0 / 150 / 77 / 0 / 77 / 0 / – | 290 / 0 / 0 / 0 / 0 / 150 / 77 / 0 / 77 / 0 | A: numbers found after the name (line 140); check the size; B: numbers found after the name (line 140); check the size |
| Sprite* | 32 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 380 / 0 / 0 / 0 / 200 / 103 / 0 / 103 / 0 / – | 380 / 0 / 0 / 0 / 0 / 200 / 103 / 0 / 103 / 0 | A: numbers found after the name (line 141); check the size; B: numbers found after the name (line 141); check the size |
| Sweetened Iced Tea | 12 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 80 / 0 / 0 / 0 / 10 / 20 / 0 / 19 / 0 / – | 80 / 0 / 0 / 0 / 0 / 10 / 20 / 0 / 19 / 0 | A: numbers found after the name (line 142); check the size; B: numbers found after the name (line 142); check the size |
| Sweetened Iced Tea | 20 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 130 / 0 / 0 / 0 / 15 / 33 / 0 / 32 / 0 / – | 130 / 0 / 0 / 0 / 0 / 15 / 33 / 0 / 32 / 0 | A: numbers found after the name (line 143); check the size; B: numbers found after the name (line 143); check the size |
| Sweetened Iced Tea | 24 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 152 / 0 / 0 / 0 / 16 / 40 / 0 / 39 / 0 / – | 152 / 0 / 0 / 0 / 0 / 16 / 40 / 0 / 39 / 0 | A: numbers found after the name (line 144); check the size; B: numbers found after the name (line 144); check the size |
| Sweetened Iced Tea | 32 oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 184 / 0 / 0 / 0 / 20 / 49 / 0 / 47 / 0 / – | 184 / 0 / 0 / 0 / 0 / 20 / 49 / 0 / 47 / 0 | A: numbers found after the name (line 145); check the size; B: numbers found after the name (line 145); check the size |
| Western Bacon Cheeseburger* | Triple | both read it the same, but its protein, carbs and fat make 1521 kcal, not 1020 | 1020 / 93 / 24 / 2 / 149 / 1820 / 78 / 4 / 16 / 93 | 1020 / 93 / 24 / 2 / 149 / 1820 / 78 / 4 / 16 / 93 | A: numbers found after the name (line 27); check the size; B: numbers found after the name (line 27); check the size |
| Guacamole Bacon | Single | both read it the same, but its protein, carbs and fat make 1116 kcal, not 850 | 850 / 56 / 17 / 1 / 95 / 2150 / 79 / 4 / 17 / 74 | 850 / 56 / 17 / 1 / 95 / 2150 / 79 / 4 / 17 / 74 | A: numbers found after the name (line 28); check the size; B: numbers found after the name (line 28); check the size |
| The Big Cart* | Single | both read it the same, but its protein, carbs and fat make 854 kcal, not 670 | 670 / 38 / 13 / 1 / 75 / 1050 / 55 / 3 / 12 / 73 | 670 / 38 / 13 / 1 / 75 / 1050 / 55 / 3 / 12 / 73 | A: numbers found after the name (line 31); check the size; B: numbers found after the name (line 31); check the size |

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
