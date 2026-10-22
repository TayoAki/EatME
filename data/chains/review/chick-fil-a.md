# Chick-fil-A: lines for a person

Guide: https://www.chick-fil-a.com/nutrition-allergens (read 2026-10-21). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (24)

Fix each line in `menus/chick-fil-a.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Chick-fil-A® Nuggets | 1 serving (113g) | only in draft A | 250 / 11 / 2.5 / 0 / 85 / 1210 / 11 / 0 / 1 / 27 | not found |
| Market Salad w/ No Chicken | 241g | the guide gives no sugars_g, protein_g | 440 / 29 / 5.5 / 0 / 10 / 640 / 40 / 5 / – / – | 440 / 29 / 5.5 / 0 / 10 / 640 / 40 / 5 / – / – |
| Fruit Cup | 215g | only in draft A | 120 / 0 / 0 / 0 / 0 / 0 / 28 / 4 / 21 / 1 | not found |
| Fruit Cup | 107g | only in draft A | 60 / 0 / 0 / 0 / 0 / 0 / 14 / 2 / 11 / 1 | not found |
| Pineapple Dragonfruit Sunjoy® (1/2 Unsweet Tea, 1/2 Diet Lemonade) | Gallon (340g) | only in draft A | 45 / 0 / 0 / 0 / 0 / 15 / 10 / 0 / 4 / 0 | not found |
| Pineapple Dragonfruit Sunjoy® (1/2 Sweet Tea, 1/2 Diet Lemonade) | Gallon (340g) | only in draft A | 110 / 0 / 0 / 0 / 0 / 15 / 28 / 0 / 22 / 0 | not found |
| Pineapple Dragonfruit Sunjoy® (1/2 Unsweet Tea, 1/2 Lemonade) | Gallon (340g) | only in draft A | 110 / 0 / 0 / 0 / 0 / 10 / 27 / 0 / 20 / 0 | not found |
| Pineapple Dragonfruit Sunjoy® (1/2 Sweet Tea, 1/2 Lemonade) | Gallon (340g) | only in draft A | 180 / 0 / 0 / 0 / 0 / 10 / 44 / 0 / 38 / 0 | not found |
| Pineapple Dragonfruit Diet Lemonade | Gallon (340g) | only in draft A | 70 / 0 / 0 / 0 / 0 / 20 / 16 / 0 / 8 / 0 | not found |
| Pineapple Dragonfruit Lemonade | Gallon (340g) | only in draft A | 210 / 0 / 0 / 0 / 0 / 10 / 53 / 0 / 44 / 0 | not found |
| Sunjoy® (1/2 Unsweet Tea, 1/2 Diet Lemonade) | Gallon (340g) | only in draft A | 20 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 4 / 0 | not found |
| Sunjoy® (1/2 Unsweet Tea, 1/2 Lemonade) | Gallon (340g) | only in draft A | 100 / 0 / 0 / 0 / 0 / 0 / 26 / 0 / 24 / 0 | not found |
| Sunjoy® (1/2 Sweet Tea, 1/2 Diet Lemonade) | Gallon (340g) | only in draft A | 90 / 0 / 0 / 0 / 0 / 0 / 23 / 0 / 21 / 0 | not found |
| Sunjoy® (1/2 Sweet Tea, 1/2 Lemonade) | Gallon (340g) | only in draft A | 160 / 0 / 0 / 0 / 0 / 0 / 41 / 0 / 39 / 0 | not found |
| Chick-fil-A® Iced Tea (1/2 Sweet Tea, 1/2 Unsweet Tea) | Gallon (340g) | only in draft A | 70 / 0 / 0 / 0 / 0 / 0 / 18 / 0 / 18 / 0 | not found |
| Freshly-Brewed Iced Tea Unsweetened | Gallon (340g) | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Freshly-Brewed Iced Tea Sweetened | Gallon (340g) | only in draft A | 130 / 0 / 0 / 0 / 0 / 0 / 33 / 0 / 33 / 0 | not found |
| Chick-fil-A® Lemonade (1/2 Lemonade, 1/2 Diet Lemonade) | Gallon (340g) | only in draft A | 120 / 0 / 0 / 0 / 0 / 0 / 33 / 0 / 30 / 0 | not found |
| Chick-fil-A® Diet Lemonade | Gallon (340g) | only in draft A | 40 / 0 / 0 / 0 / 0 / 10 / 12 / 0 / 8 / 0 | not found |
| Chick-fil-A® Lemonade | Gallon (340g) | only in draft A | 190 / 0 / 0 / 0 / 0 / 0 / 49 / 0 / 45 / 0 | not found |
| Mac & Cheese | Medium (227g) | only in draft B | not found | 450 / 29 / 16 / 0 / 70 / 1190 / 28 / 3 / 3 / 20 |
| Chick-fil-A Waffle Potato Fries® | Medium (125g) | only in draft B | not found | 420 / 24 / 4 / 0 / 0 / 240 / 45 / 5 / 1 / 5 |
| Chicken Noodle Soup | Cup (252g) | only in draft B | not found | 190 / 4.5 / 1 / 0 / 30 / 1290 / 27 / 2 / 2 / 11 |
| Chocolate Chunk Cookie | 6 pack (78g) | only in draft B | not found | 370 / 17 / 9 / 0 / 15 / 230 / 49 / 3 / 26 / 5 |

## Spot check (15 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Hash Brown Scramble Burrito | 304g | 700 / 40 / 12 / 0.5 / 415 / 1770 / 51 / 3 / 2 / 34 |
| Garden Herb Ranch Sauce | 21g | 100 / 11 / 2 / 0 / 10 / 170 / 1 / 0 / 0 / 0 |
| Breakfast Breads | 81g | 350 / 15 / 6 / 0 / 0 / 760 / 53 / 2 / 16 / 4 |
| Bottled Unsweet Tea | 486g | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Grilled Chicken Club w/ Colby Jack | 237g | 520 / 22 / 8 / 0 / 105 / 1055 / 45 / 3 / 12 / 37 |
| Strawberry Milkshake | 409g | 560 / 18 / 11 / 0.5 / 70 / 370 / 92 / 1 / 87 / 10 |
| Gallon Sunjoy® (1/2 Sweet Tea, 1/2 Diet Lemonade) | 340g | 90 / 0 / 0 / 0 / 0 / 0 / 23 / 0 / 21 / 0 |
| Hash Brown Scramble Bowl w/ Grilled Filet – no hash browns | 187g | 270 / 16 / 7 / 0 / 420 / 960 / 2 / 0 / 2 / 29 |
| Classic Syrup | 23g | 60 / 0 / 0 / 0 / 0 / 0 / 16 / 0 / 12 / 0 |
| Freshly-Brewed Sweetened Iced Tea | 604g | 120 / 0 / 0 / 0 / 0 / 0 / 31 / 0 / 30 / 0 |
| Chick-fil-A Waffle Potato Fries® | Large (179g) | 600 / 35 / 5 / 0 / 0 / 340 / 65 / 7 / 1 / 7 |
| Vanilla Frosted Coffee | 400g | 330 / 7 / 4.5 / 0 / 25 / 140 / 62 / 0 / 60 / 7 |
| S’mores Milkshake | 411g | 650 / 19 / 12 / 0.5 / 70 / 400 / 109 / 1 / 100 / 12 |
| Chick-fil-A Chick-n-Strips® | 4 ct (181g) | 410 / 19 / 3.5 / 0 / 100 / 1150 / 22 / 0 / 2 / 39 |
| Chick-fil-A Chick-n-Strips® | 3 ct (136g) | 310 / 14 / 2.5 / 0 / 75 / 870 / 16 / 0 / 2 / 29 |
