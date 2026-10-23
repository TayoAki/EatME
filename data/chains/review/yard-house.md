# Yard House: lines for a person

Guide: https://media.yardhouse.com/en_us/pdf/yard_house_nutrition.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (76)

Fix each line in `menus/yard-house.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Crispy Brussels Sprouts | 1 serving | the guide gives no protein_g | 1270 / 112 / 14 / 0.5 / 25 / 1300 / 53 / 15 / 28 / – | 1270 / 112 / 14 / 0.5 / 25 / 1300 / 53 / 15 / 28 / – |
| Parm Truffle Fries | 1 serving | the guide gives no protein_g | 500 / 24 / 3.5 / 0 / 10 / 1280 / 63 / 8 / 0 / – | 500 / 24 / 3.5 / 0 / 10 / 1280 / 63 / 8 / 0 / – |
| Sweet Potato Fries | 1 serving | the guide gives no protein_g | 650 / 26 / 3 / 0 / 0 / 260 / 98 / 6 / 55 / – | 650 / 26 / 3 / 0 / 0 / 260 / 98 / 6 / 55 / – |
| Wisconsin Fried Cheese Curds | 1 serving | the guide gives no protein_g | 1980 / 141 / 56 / 2.5 / 290 / 4630 / 105 / 6 / 43 / – | 1980 / 141 / 56 / 2.5 / 290 / 4630 / 105 / 6 / 43 / – |
| Hand-Battered Chicken Tenders & Fries | 1 serving | the guide gives no protein_g | 1320 / 78 / 10 / 1 / 155 / 2650 / 106 / 8 / 21 / – | 1320 / 78 / 10 / 1 / 155 / 2650 / 106 / 8 / 21 / – |
| Gardein™ Chicken Tenders & Fries | 1 serving | the guide gives no protein_g | 1230 / 76 / 9 / 1 / 40 / 2910 / 96 / 12 / 19 / – | 1230 / 76 / 9 / 1 / 40 / 2910 / 96 / 12 / 19 / – |
| Cali Roll Stack | 1 serving | the guide gives no protein_g | 970 / 57 / 8 / 0 / 105 / 1940 / 99 / 6 / 38 / – | 970 / 57 / 8 / 0 / 105 / 1940 / 99 / 6 / 38 / – |
| Chicken Tortilla Soup | Cup | only in draft A | 610 / 47 / 21 / 1 / 150 / 910 / 31 / 4 / 6 / 18 | not found |
| Chicken Tortilla Soup | Bowl | only in draft A | 1110 / 84 / 36 / 1.5 / 260 / 1600 / 59 / 7 / 10 / 32 | not found |
| Tomato Bisque | Cup | only in draft A | 240 / 20 / 12 / 0 / 65 / 860 / 15 / 0.5 / 12 / 2 | not found |
| Tomato Bisque | Bowl | only in draft A | 480 / 40 / 25 / 0.5 / 130 / 1720 / 30 / 1 / 23 / 4 | not found |
| Traditional Caesar | 1 serving | differ: protein_g | 410 / 34 / 9 / 0 / 50 / 1010 / 13 / 3 / 3 / 16 | 410 / 34 / 9 / 0 / 50 / 1010 / 13 / 3 / 3 / – |
| House Salad | 1 serving | differ: protein_g | 430 / 29 / 15 / 0 / 60 / 890 / 26 / 4 / 12 / 19 | 430 / 29 / 15 / 0 / 60 / 890 / 26 / 4 / 12 / – |
| Kale & Romaine Caesar | 1 serving | differ: protein_g | 540 / 39 / 10 / 0 / 50 / 1070 / 31 / 7 / 12 / 21 | 540 / 39 / 10 / 0 / 50 / 1070 / 31 / 7 / 12 / – |
| Three Cheese | 1 serving | differ: protein_g | 1110 / 47 / 26 / 2 / 135 / 2610 / 113 / 5 / 8 / 59 | 1110 / 47 / 26 / 2 / 135 / 2610 / 113 / 5 / 8 / – |
| Loaded Pepperoni | 1 serving | differ: protein_g | 1130 / 54 / 24 / 1.5 / 130 / 3010 / 111 / 5 / 7 / 51 | 1130 / 54 / 24 / 1.5 / 130 / 3010 / 111 / 5 / 7 / – |
| Margherita | 1 serving | differ: protein_g | 890 / 33 / 11 / 0 / 60 / 1720 / 113 / 6 / 6 / 35 | 890 / 33 / 11 / 0 / 60 / 1720 / 113 / 6 / 6 / – |
| Buffalo Chicken | 1 serving | differ: protein_g | 1510 / 74 / 21 / 1.5 / 210 / 5500 / 137 / 6 / 5 / 76 | 1510 / 74 / 21 / 1.5 / 210 / 5500 / 137 / 6 / 5 / – |
| Truffled Mushroom | 1 serving | differ: protein_g | 1220 / 69 / 20 / 1 / 100 / 2070 / 111 / 5 / 5 / 41 | 1220 / 69 / 20 / 1 / 100 / 2070 / 111 / 5 / 5 / – |
| The Carnivore | 1 serving | differ: protein_g | 1440 / 78 / 32 / 2 / 205 / 3360 / 112 / 5 / 8 / 73 | 1440 / 78 / 32 / 2 / 205 / 3360 / 112 / 5 / 8 / – |
| Vampire Carnitas Taco | each | differ: protein_g | 360 / 23 / 10 / 0 / 65 / 850 / 16 / 2 / 2 / 21 | 360 / 23 / 10 / 0 / 65 / 850 / 16 / 2 / 2 / – |
| Beer-Battered Baja Fish Taco | each | differ: protein_g | 280 / 18 / 4 / 0 / 30 / 670 / 20 / 2 / 2 / 10 | 280 / 18 / 4 / 0 / 30 / 670 / 20 / 2 / 2 / – |
| Carne Asada Taco | each | differ: protein_g | 250 / 11 / 3.5 / 0 / 35 / 580 / 20 / 2 / 2 / 17 | 250 / 11 / 3.5 / 0 / 35 / 580 / 20 / 2 / 2 / – |
| Birria Taco | each | differ: protein_g | 360 / 26 / 12 / 0.5 / 75 / 930 / 12 / 2 / 4 / 20 | 360 / 26 / 12 / 0.5 / 75 / 930 / 12 / 2 / 4 / – |
| Cumin Chili Shrimp Taco | each | differ: protein_g | 400 / 24 / 10 / 0.5 / 105 / 840 / 25 / 3 / 2 / 21 | 400 / 24 / 10 / 0.5 / 105 / 840 / 25 / 3 / 2 / – |
| Crispy Korean Chicken Taco | each | differ: protein_g | 370 / 21 / 4.5 / 0 / 35 / 770 / 35 / 1 / 13 / 11 | 370 / 21 / 4.5 / 0 / 35 / 770 / 35 / 1 / 13 / – |
| Spicy Rice & Pinto Beans | 1 serving | differ: protein_g | 310 / 4 / 0 / 0 / 0 / 900 / 58 / 6 / 3 / 10 | 310 / 4 / 0 / 0 / 0 / 900 / 58 / 6 / 3 / – |
| Flour Tortilla | 1 serving | differ: fat_g, protein_g | 90 / 3.5 / 1.5 / 0 / 0 / 200 / 12 / 0 / 0 / 2 | 90 / 30 / 1.5 / 0 / 0 / 200 / 12 / 0 / 0 / – |
| Yellow Corn Tortilla | 1 serving | differ: protein_g | 35 / 0 / 0 / 0 / 0 / 0 / 7 / 0.5 / 0.5 / 0.5 | 35 / 0 / 0 / 0 / 0 / 0 / 7 / 0.5 / 0.5 / – |
| Lettuce Wrapped | 1 serving | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / – |
| Vampire Style | 1 serving | differ: protein_g | 240 / 14 / 8 / 0 / 25 / 490 / 13 / 0 / 0 / 15 | 240 / 14 / 8 / 0 / 25 / 490 / 13 / 0 / 0 / – |
| Poke Salad | 1 serving | differ: protein_g | 730 / 52 / 8 / 0 / 80 / 1400 / 35 / 8 / 14 / 33 | 730 / 52 / 8 / 0 / 80 / 1400 / 35 / 8 / 14 / – |
| Ahi Crunchy Salad | small | differ: protein_g | 410 / 27 / 4.5 / 0 / 30 / 1040 / 20 / 3 / 8 / 22 | 410 / 27 / 4.5 / 0 / 30 / 1040 / 20 / 3 / 8 / – |
| Ahi Crunchy Salad | regular | differ: protein_g | 780 / 52 / 8 / 0 / 45 / 1990 / 42 / 8 / 17 / 37 | 780 / 52 / 8 / 0 / 45 / 1990 / 42 / 8 / 17 / – |
| Cobb Salad | small | differ: protein_g | 410 / 34 / 9 / 0 / 130 / 550 / 16 / 7 / 6 / 15 | 410 / 34 / 9 / 0 / 130 / 550 / 16 / 7 / 6 / – |
| Cobb Salad | regular | differ: protein_g | 740 / 60 / 17 / 0.5 / 260 / 1100 / 25 / 9 / 11 / 29 | 740 / 60 / 17 / 0.5 / 260 / 1100 / 25 / 9 / 11 / – |
| Cobb Salad with Gardein™ | small | differ: protein_g | 460 / 30 / 4 / 0 / 100 / 920 / 20 / 9 / 6 / 32 | 460 / 30 / 4 / 0 / 100 / 920 / 20 / 9 / 6 / – |
| Cobb Salad with Gardein™ | regular | differ: protein_g | 650 / 44 / 7 / 0 / 205 / 1180 / 29 / 11 / 11 / 39 | 650 / 44 / 7 / 0 / 205 / 1180 / 29 / 11 / 11 / – |
| 8 oz. Filet Mignon | 8 oz. | only in draft A | 900 / 51 / 23 / 2 / 200 / 2030 / 61 / 9 / 19 / 52 | not found |
| Choice of Linguine | large | differ: fat_g, saturated_fat_g | 530 / 3 / 0 / 0 / 0 / 690 / 106 / 5 / 4 / 18 | 530 / 25 / 3 / 0 / 0 / 690 / 106 / 5 / 4 / 18 |
| GS 8 oz. Filet | 8 oz. | only in draft A | 900 / 51 / 23 / 2 / 200 / 2030 / 61 / 9 / 19 / 52 | not found |
| GS Tartar | 2 fl. oz. | differ: protein_g | 240 / 23 / 3.5 / 0 / 30 / 610 / 9 / 0 / 7 / 1 | 240 / 23 / 3.5 / 0 / 30 / 610 / 9 / 0 / 7 / 0.5 |
| GS Sriracha Mayo | 2 fl. oz. | differ: protein_g | 290 / 30 / 4.5 / 0 / 30 / 400 / 4 / 0 / 2 / 0.5 | 290 / 30 / 4.5 / 0 / 30 / 400 / 4 / 0 / 2 / 1 |
| GS Garlic Aioli | 2 fl. oz. | differ: protein_g | 340 / 37 / 6 / 0 / 40 / 240 / 2 / 0 / 0.5 / 1 | 340 / 37 / 6 / 0 / 40 / 240 / 2 / 0 / 0.5 / 0.5 |
| GS Lemon Basil Aioli | 2 fl. oz. | differ: sugars_g | 350 / 37 / 6 / 0 / 40 / 360 / 3 / 0 / 1 / 1 | 350 / 37 / 6 / 0 / 40 / 360 / 3 / 0 / 0.5 / 1 |
| House-Brewed Iced Tea (all flavors) | 1 serving | differ: carbs_g | 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 5 / 0.5 / 0 / 0 / 0 |
| Sweet Tea | 1 serving | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 80 / 0 / 0 / 0 / 0 / 5 / 0.5 / 0 / 0 / 0 | 80 / 0 / 0 / 0 / – / – / – / – / – / – |
| Classic Lemonade | 1 serving | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 110 / 0 / 0 / 0 / 0 / 45 / 10 / 0 / 9 / 0 | 110 / 0 / 0 / 0 / – / – / – / – / – / – |
| Dragonfruit Lemonade | 1 serving | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 390 / 0 / 0 / 0 / 0 / 45 / 12 / 0 / 12 / 0 | 390 / 0 / 0 / 0 / – / – / – / – / – / – |
| Strawberry Lemonade | 1 serving | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 300 / 0 / 0 / 0 / 0 / 45 / 0 / 0 / 0 / 0 | 300 / 0 / 0 / 0 / – / – / – / – / – / – |
| Espresso | 1 serving | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 30 / 0 / 0 / 0 / 0 / 50 / 12 / 0 / 12 / 0 | 30 / 0 / 0 / 0 / – / – / – / – / – / – |
| Cappuccino | 1 serving | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 120 / 3.5 / 2.5 / 0 / 0 / 45 / 0 / 0 / 0 / 0 | 120 / 3.5 / 2.5 / 0 / – / – / – / – / – / – |
| Mocha | 1 serving | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 340 / 12 / 8 / 0 / 0 / 5 / 0.5 / 0 / 0 / 0 | 340 / 12 / 8 / 0 / – / – / – / – / – / – |
| Latte | 1 serving | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 150 / 5 / 3 / 0 / 0 / 50 / 12 / 0 / 12 / 0 | 150 / 5 / 3 / 0 / – / – / – / – / – / – |
| Hot Chocolate | 1 serving | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 120 / 2 / 2 / 0 / 0 / 45 / 0 / 0 / 0 / 0 | 120 / 2 / 2 / 0 / – / – / – / – / – / – |
| Hot Tea (all flavors) | 1 serving | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / – / – / – / – / – / – |
| Coffee | 1 serving | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / – / – / – / – / – / – |
| Orange Juice | 1 serving | differ: cholesterol_mg, protein_g | 110 / 0 / 0 / 0 / 2 / 15 / 25 / 0 / 24 / 0 | 110 / 0 / 0 / 0 / 0 / 15 / 25 / 0 / 24 / 2 |
| Guavarita | 1 serving | differ: fiber_g | 270 / 0 / 0 / 0 / 0 / 10 / 36 / 0 / 30 / 0 | 270 / 0 / 0 / 0 / 0 / 10 / 36 / 0.5 / 30 / 0 |
| House Light Lager | Pint/Goblet | differ: sodium_mg | 130 / 0 / 0 / 0 / 0 / 20 / 6 / 0 / 0.5 / 1 | 130 / 0 / 0 / 0 / 0 / 30 / 6 / 0 / 0.5 / 1 |
| Beer (6% ABV and up) | 23 oz. | differ: carbs_g, sugars_g, protein_g | 380 / 0 / 0 / 0 / 0 / 25 / 28 / 0 / 0 / 6 | 380 / 0 / 0 / 0 / 0 / 25 / 40 / 0 / 40 / 0 |
| Beer (6% ABV and up) | Half Yard | differ: carbs_g | 550 / 0 / 0 / 0 / 0 / 40 / 40 / 0 / 0 / 9 | 550 / 0 / 0 / 0 / 0 / 40 / 39 / 0 / 0 / 9 |
| Beer (Non-Alcoholic) | Bottle | differ: sodium_mg, carbs_g, sugars_g, protein_g | 130 / 0 / 0 / 0 / 0 / 15 / 15 / 0 / 0 / 3 | 130 / 0 / 0 / 0 / 0 / 45 / 29 / 0 / 29 / 0.5 |
| Cider | Pint/Goblet | differ: sodium_mg, carbs_g, sugars_g | 270 / 0 / 0 / 0 / 0 / 25 / 40 / 0 / 40 / 0 | 270 / 0 / 0 / 0 / 0 / 20 / 28 / 0 / 28 / 0 |
| Cider | 23 oz. | differ: sodium_mg, carbs_g, sugars_g, protein_g | 390 / 0 / 0 / 0 / 0 / 40 / 56 / 0 / 56 / 0 | 390 / 0 / 0 / 0 / 0 / 25 / 28 / 0 / 0 / 6 |
| Cider | Half Yard | differ: sodium_mg, carbs_g, sugars_g | 530 / 0 / 0 / 0 / 0 / 75 / 112 / 0 / 112 / 0 | 530 / 0 / 0 / 0 / 0 / 40 / 56 / 0 / 56 / 0 |
| Cider | Growler | differ: sodium_mg, carbs_g, sugars_g | 1060 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 1 / 0 | 1060 / 0 / 0 / 0 / 0 / 75 / 112 / 0 / 112 / 0 |
| Hard Seltzer | Pint/Goblet | differ: carbs_g, sugars_g | 130 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 2 / 0 | 130 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 1 / 0 |
| Hard Seltzer | 23 oz. | differ: carbs_g, sugars_g | 190 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 1 / 0 | 190 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 2 / 0 |
| Chicken Tortilla Soup - Cup | 1 serving | only in draft B | not found | 610 / 47 / 21 / 1 / 150 / 910 / 31 / 4 / 6 / – |
| Chicken Tortilla Soup - Bowl | 1 serving | only in draft B | not found | 1110 / 84 / 36 / 1.5 / 260 / 1600 / 59 / 7 / 10 / – |
| Tomato Bisque - Cup | 1 serving | only in draft B | not found | 240 / 20 / 12 / 0 / 65 / 860 / 15 / 0.5 / 12 / – |
| Tomato Bisque - Bowl | 1 serving | only in draft B | not found | 480 / 40 / 25 / 0.5 / 130 / 1720 / 30 / 1 / 23 / – |
| 8 oz. Filet Mignon | 1 serving | only in draft B | not found | 900 / 51 / 23 / 2 / 200 / 2030 / 61 / 9 / 19 / 52 |
| Fontina Vodka Penne | 1 serving | only in draft B | not found | 1570 / 71 / 36 / 1.5 / 360 / 2950 / 120 / 7 / 11 / 80 |
| GS 8 oz. Filet | 1 serving | only in draft B | not found | 900 / 51 / 23 / 2 / 200 / 2030 / 61 / 9 / 19 / 52 |

## Spot check (13 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Classic Sliders & Fries | 1 serving | 1320 / 62 / 18 / 1.5 / 155 / 2480 / 132 / 9 / 22 / 59 |
| Wine Sparkling | 5.25 oz. | 130 / 0 / 0 / 0 / 0 / 10 / 8 / 0 / 8 / 0 |
| Passion Fruit Mojito | 1 serving | 280 / 0 / 0 / 0 / 0 / 25 / 46 / 0 / 43 / 0 |
| Passion Fruit Sparkling Refresher with Topo Chico | 1 serving | 50 / 0 / 0 / 0 / 0 / 50 / 12 / 0 / 12 / 0 |
| GS Buttered Jasmine Rice | 1 serving | 400 / 11 / 7 / 0 / 30 / 0 / 66 / 0.5 / 0 / 6 |
| Orange Chicken | 1 serving | 1730 / 67 / 13 / 1 / 215 / 2930 / 221 / 5 / 104 / 64 |
| GS Sweet Chili | 2 fl. oz. | 200 / 1 / 0 / 0 / 0 / 590 / 51 / 0 / 47 / 0 |
| GS Bleu Cheese & Bacon | 1 serving | 700 / 46 / 19 / 1 / 185 / 1490 / 16 / 3 / 11 / 54 |
| Salted Watermelon Margarita | 1 serving | 270 / 0 / 0 / 0 / 0 / 10 / 38 / 0 / 34 / 0 |
| Polu Hawaiian | 1 serving | 260 / 0 / 0 / 0 / 0 / 5 / 27 / 0 / 24 / 0 |
| Maui Pineapple Chicken | 1 serving | 1320 / 38 / 13 / 0 / 245 / 1690 / 147 / 5 / 61 / 91 |
| GS Tomato Bisque | bowl | 480 / 40 / 25 / 0.5 / 130 / 1720 / 30 / 1 / 23 / 4 |
| Picante Margarita | 1 serving | 270 / 0 / 0 / 0 / 0 / 750 / 39 / 0 / 34 / 0 |
