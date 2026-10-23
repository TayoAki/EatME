# Lazy Dog Restaurant & Bar: lines for a person

Guide: https://cdn.shopify.com/s/files/1/0789/3218/1236/files/Lazy_Dog_Nutritional_Menu_Fall_2026.pdf?v=1791392593 (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (32)

Fix each line in `menus/lazy-dog-restaurant-and-bar.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Butter Cake | 1 serving | the guide gives no carbs_g | 1250 / 75 / 48 / 0 / 255 / 330 / – / 2 / 107 / 11 | 1250 / 75 / 48 / 0 / 255 / 330 / – / 2 / 107 / 11 |
| Apple-Huckleberry Open Face Pie | 1 serving | the guide gives no carbs_g | 1220 / 68 / 30 / 0 / 80 / 660 / – / 3 / 62 / 11 | 1220 / 68 / 30 / 0 / 80 / 660 / – / 3 / 62 / 11 |
| Moscow Mule | 1 serving | differ: sodium_mg | 170 / 0 / 0 / 0 / – / – / 20 / 0 / 19 / 0 | 170 / 0 / 0 / 0 / – / 20 / 20 / 0 / 19 / 0 |
| Salted Caramel Cold Brew Latte | 1 serving | differ: cholesterol_mg | 380 / 27 / 17 / 0.5 / 90 / 55 / 32 / 0 / 32 / 3 | 380 / 27 / 17 / 0.5 / – / 55 / 32 / 0 / 32 / 3 |
| Mango Matcha Tea Latte | 1 serving | differ: cholesterol_mg | 420 / 21 / 14 / 0 / 70 / 45 / 52 / 6 / 45 / 2 | 420 / 21 / 14 / 0 / – / 45 / 52 / 6 / 45 / 2 |
| Pomegranate Sour Fauxtini | 1 serving | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 600 / 0 / 0 / 0 / – / – / 0 / 13 / 0 / – | 600 / 0 / 0 / 0 / – / 140 / 14 / 0 / 13 / 0 |
| Strawberry Jalapeno Mockarita | 1 serving | differ: protein_g | 700 / 0 / 0 / 0 / – / 2330 / 19 / 0.5 / 17 / – | 700 / 0 / 0 / 0 / – / 2330 / 19 / 0.5 / 17 / 0 |
| Cold Brew Carajillo | 1 serving | differ: protein_g | 500 / 0 / 0 / 0 / – / 70 / 13 / 0 / 12 / – | 500 / 0 / 0 / 0 / – / 70 / 13 / 0 / 12 / 0 |
| Huckleberry Lemonade | 1 serving | differ: protein_g | 900 / 0 / 0 / 0 / – / 10 / 23 / 0 / 21 / – | 900 / 0 / 0 / 0 / – / 10 / 23 / 0 / 21 / 0 |
| Strawberry Lemonade | 1 serving | differ: protein_g | 900 / 0 / 0 / 0 / – / 15 / 24 / 0.5 / 22 / – | 900 / 0 / 0 / 0 / – / 15 / 24 / 0.5 / 22 / 0 |
| Pink Lemonade | 1 serving | differ: protein_g | 500 / 0 / 0 / 0 / – / 10 / 12 / 0 / 11 / – | 500 / 0 / 0 / 0 / – / 10 / 12 / 0 / 11 / 0 |
| Iced Mint Latte | 1 serving | differ: cholesterol_mg | 200 / 10 / 6 / 0 / 35 / 45 / 28 / 0 / 28 / 2 | 200 / 10 / 6 / 0 / – / 45 / 28 / 0 / 28 / 2 |
| Orange Fanta + Vanilla Bean Cream | 1 serving | differ: cholesterol_mg | 300 / 9 / 6 / 0 / 35 / 80 / 55 / 0 / 54 / 1 | 300 / 9 / 6 / 0 / – / 80 / 55 / 0 / 54 / 1 |
| Root Beer + Vanilla Bean Cream | 1 serving | differ: cholesterol_mg | 270 / 10 / 6 / 0 / 35 / 85 / 46 / 0 / 46 / 2 | 270 / 10 / 6 / 0 / – / 85 / 46 / 0 / 46 / 2 |
| Huckleberry Puree | 1 serving | differ: cholesterol_mg, protein_g | 600 / 0 / 0 / 0 / 0 / 0 / 16 / 0 / 14 / – | 600 / 0 / 0 / 0 / – / 0 / 16 / 0 / 14 / 0 |
| Vanilla Bean Cream | 1 serving | differ: cholesterol_mg | 130 / 0 / 5 / 0 / 30 / 35 / 14 / 0 / 14 / 1 | 130 / 0 / 5 / 0 / – / 35 / 14 / 0 / 14 / 1 |
| Bar Prep Pink Lemonade | 1 serving | differ: fat_g, saturated_fat_g | 2710 / 0.5 / 0 / 0 / 0 / 630 / 685 / 0.5 / 544 / 1 | 2710 / 0 / 0.5 / 0 / 0 / 630 / 685 / 0.5 / 544 / 1 |
| Quarter-Pound All American Burger (with fries) | 1 serving | only in draft B | not found | 1400 / 94 / 26 / 0 / 115 / 2540 / 117 / 6 / 12 / 36 |
| Wok Fired Kung Pao Chicken (Rice Not Included) | 1 serving | only in draft B | not found | 500 / 29 / 6 / 2 / 85 / 660 / 30 / 5 / 9 / 31 |
| Wok Fired Sweet & Spicy Chicken (Rice Not Included) | 1 serving | only in draft B | not found | 510 / 23 / 4 / 0 / 85 / 350 / 49 / 4 / 36 / 27 |
| Wok Fired Teriyaki Chicken (Rice Not Included) | 1 serving | only in draft B | not found | 400 / 22 / 4.5 / 0 / 85 / 690 / 23 / 2 / 11 / 27 |
| Blackened Chicken Bowl | 1 serving | only in draft B | not found | 900 / 37 / 16 / 0 / 170 / 4130 / 82 / 14 / 17 / 61 |
| Korean Ribeye Bibimbap Bowl | 1 serving | only in draft B | not found | 950 / 54 / 18 / 2 / 290 / 3500 / 69 / 6 / 14 / 48 |
| Chili Crunch Ahi Tuna Bowl | 1 serving | only in draft B | not found | 650 / 21 / 2.5 / 0 / 45 / 3830 / 74 / 9 / 12 / 40 |
| Grilled Cheese (No Side) | 1 serving | only in draft B | not found | 560 / 41 / 21 / 0 / 70 / 1210 / 26 / 0.5 / 0.5 / 21 |
| House Club (No Side) | 1 serving | only in draft B | not found | 440 / 28 / 6 / 0 / 40 / 930 / 34 / 4 / 2 / 15 |
| Deviled Egg Salad (No Side) | 1 serving | only in draft B | not found | 700 / 53 / 11 / 0 / 385 / 1190 / 35 / 3 / 8 / 21 |
| Chicken Shawarma Salad Wrap (No Side) | 1 serving | only in draft B | not found | 345 / 19 / 3 / 0 / 40 / 580 / 31 / 5 / 3 / 16 |
| Caesar Salad | 1 serving | only in draft B | not found | 360 / 33 / 5 / 0 / 30 / 510 / 15 / 4 / 2 / 5 |
| Chopped Wedge Salad (Dressing Not Included) | 1 serving | only in draft B | not found | 370 / 31 / 6 / 0 / 15 / 740 / 19 / 3 / 3 / 7 |
| Mixed Greens Salad (Dressing Not Included) | 1 serving | only in draft B | not found | 50 / 2 / 0 / 0 / 0 / 190 / 7 / 2 / 1 / 1 |
| Blood Orange Margarita Pitcher | 1 serving | only in draft B | not found | 970 / 0 / 0 / 0 / 0 / 6520 / 127 / 0 / 122 / 1 |

## Spot check (13 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Bar Prep Honey Orange Bourbon | 1 serving | 210 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 10 / 0 |
| Crispy Deviled Eggs | 1 serving | 570 / 44 / 10 / 0 / 570 / 1240 / 21 / 1 / 4 / 17 |
| Cranberry Juice | 1 serving | 110 / 0 / 0 / 0 / 0 / 0 / 28 / 0 / 28 / 0 |
| Shepherd's Pie | 1 serving | 1300 / 91 / 43 / 1 / 200 / 4070 / 80 / 10 / 37 / 43 |
| Baja California | 1 serving | 970 / 59 / 22 / 1 / 185 / 1700 / 53 / 6 / 4 / 57 |
| Bar Prep Sweet & Sour Mix | 1 serving | 30 / 0 / 0 / 0 / 0 / 0 / 8 / 0 / 7 / 0 |
| Lemon Pepper Tots | 1 serving | 700 / 50 / 8 / 0 / 15 / 1280 / 54 / 3 / 1 / 6 |
| Bar Prep Pomegranate Red Sangria Mix | 1 serving | 25 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 2 / 0 |
| Wok-Fired Sweet & Spicy Tofu (No Rice) | 1 serving | 660 / 39 / 6 / 0 / 0 / 230 / 58 / 9 / 35 / 23 |
| Cucumber Lemon Sparkling Refresher | 1 serving | 170 / 0 / 0 / 0 / 0 / 35 / 46 / 0 / 44 / 0 |
| Hair of the Dog Bloody Mary | 1 serving | 170 / 2 / 2 / 0 / 0 / 2060 / 11 / 6 / 7 / 2 |
| Spicy Tuna Crispy Rice | 1 serving | 950 / 42 / 5 / 0 / 35 / 4660 / 109 / 16 / 27 / 22 |
| Thousand Island | per 2 FL. Oz. | 250 / 25 / 3.5 / 0 / 20 / 520 / 10 / 0 / 7 / 0 |
