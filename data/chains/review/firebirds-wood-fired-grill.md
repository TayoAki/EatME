# Firebirds Wood Fired Grill: lines for a person

Guide: https://images.firebirdsrestaurants.com/production/general/Firebirds-Nutritional-10.14.2026.pdf?dm=1791904801 (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (64)

Fix each line in `menus/firebirds-wood-fired-grill.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Chile Rub | 1 serving | the guide gives no fiber_g | 120 / 0 / 0 / 0 / 0 / 3600 / 24 / – / 0 / 0 | 120 / 0 / 0 / 0 / 0 / 3600 / 24 / – / 0 / 0 |
| Mac & Cheese | 1 serving | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 70 / 2.5 / 1 / 0 / 5 / 35 / 9 / 0 / 1 / 3 | 140 / 4.5 / 2.5 / 0 / 15 / 70 / 19 / 1 / 2 / 6 |
| Roasted Garlic Ranch Dressing | 2 fl oz Serving | both read numbers that can't be right: sugars 16 g above carbs 6 g | 340 / 36 / 7 / 0 / 35 / 540 / 6 / 0 / 16 / 1 | 340 / 36 / 7 / 0 / 35 / 540 / 6 / 0 / 16 / 1 |
| Cheeseburger | 1 serving | only in draft B | not found | 910 / 56 / 24 / 2.5 / 175 / 1400 / 51 / 2 / 9 / 47 |
| Cheeseburger with Bacon | 1 serving | only in draft B | not found | 990 / 62 / 26 / 2.5 / 185 / 1700 / 52 / 2 / 9 / 51 |
| Classic Club Sandwich | 1 serving | only in draft B | not found | 1070 / 66 / 21 / 0 / 175 / 2380 / 61 / 1 / 16 / 53 |
| Durango Burger | 1 serving | only in draft B | not found | 1130 / 72 / 24 / 2.5 / 180 / 3020 / 70 / 1 / 8 / 47 |
| Hot Honey Chicken Sandwich | 1 serving | only in draft B | not found | 1420 / 84 / 21 / 0 / 170 / 3840 / 120 / 1 / 41 / 54 |
| Steak Sandwich | 1 serving | only in draft B | not found | 860 / 53 / 15 / 1 / 110 / 1880 / 60 / 2 / 7 / 41 |
| Smokehouse Burger | 1 serving | only in draft B | not found | 980 / 54 / 22 / 2.5 / 160 / 2150 / 73 / 0 / 31 / 45 |
| Smokehouse Chicken Sandwich | 1 serving | only in draft B | not found | 680 / 21 / 9 / 0 / 130 / 1410 / 72 / 0 / 30 / 44 |
| Bacon Deviled Eggs | 1 serving | only in draft B | not found | 740 / 52 / 13 / 0 / 795 / 1600 / 37 / 1 / 32 / 30 |
| Candied Bacon | 1 serving | only in draft B | not found | 550 / 18 / 8 / 0 / 30 / 920 / 84 / 0 / 80 / 12 |
| Lobster Spinach Queso | 1 serving | only in draft B | not found | 970 / 66 / 26 / 1 / 145 / 1570 / 64 / 1 / 9 / 32 |
| Seared Ahl Tuna | 1 serving | only in draft B | not found | 730 / 45 / 9 / 0 / 75 / 1830 / 34 / 3 / 13 / 48 |
| Bacon & Eggs - Fried Egg | 1 serving | only in draft B | not found | 1500 / 96 / 39 / 0 / 425 / 3570 / 138 / 4 / 35 / 31 |
| Bacon & Eggs - Scrambled | 1 serving | only in draft B | not found | 1490 / 95 / 42 / 0 / 440 / 3570 / 138 / 4 / 35 / 31 |
| Bacon, Egg, & Cheese Biscuit | 1 serving | only in draft B | not found | 1650 / 114 / 39 / 0 / 485 / 3100 / 122 / 1 / 62 / 36 |
| Bacons, Eggs & Avocado Toast | 1 serving | only in draft B | not found | 660 / 49 / 17 / 0 / 230 / 1200 / 32 / 2 / 12 / 23 |
| Baked French Toast | 1 serving | only in draft B | not found | 1220 / 42 / 27 / 0 / 340 / 560 / 174 / 4 / 134 / 13 |
| Brunch Burger | 1 serving | only in draft B | not found | 1600 / 96 / 34 / 2.5 / 400 / 2020 / 111 / 1 / 11 / 67 |
| Grilled Salmon Benedict | 1 serving | only in draft B | not found | 1260 / 84 / 30 / 0 / 305 / 2800 / 69 / 3 / 8 / 53 |
| Hot Honey Chicken Biscuit | 1 serving | only in draft B | not found | 1790 / 121 / 35 / 0 / 340 / 5040 / 132 / 1 / 42 / 51 |
| Sausage, Egg, & Cheese Smothered Biscuit | 1 serving | only in draft B | not found | 1660 / 127 / 44 / 0 / 590 / 4190 / 68 / 1 / 9 / 65 |
| Steak & Egg Bowl | 1 serving | only in draft B | not found | 960 / 64 / 15 / 0.5 / 455 / 2560 / 50 / 3 / 10 / 46 |
| Veggie Power Bowl | 1 serving | only in draft B | not found | 840 / 59 / 12 / 0 / 385 / 2210 / 58 / 5 / 16 / 23 |
| Applewood Smoked Bacon | 1 serving | only in draft B | not found | 160 / 12 / 5 / 0 / 20 / 600 / 2 / 0 / 0 / 8 |
| Breakfast Sausage | 1 serving | only in draft B | not found | 520 / 43 / 14 / 0 / 125 / 1540 / 0 / 0 / 0 / 32 |
| Fresh Baked Biscuits | 1 serving | only in draft B | not found | 800 / 49 / 28 / 0 / 0 / 2230 / 89 / 1 / 17 / 8 |
| House Potatoes | 1 serving | only in draft B | not found | 480 / 34 / 6 / 0 / 0 / 1250 / 40 / 1 / 3 / 5 |
| Bloody Mary | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 700 / 9 / 2 / 5 / 1 |
| Espresso Martini | 1 serving | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 0 / 41 / 0 / 13 / 1 |
| The Hail Mary | 1 serving | only in draft B | not found | 430 / 9 / 4 / 0 / 15 / 1500 / 53 / 2 / 46 / 7 |
| Mimosa | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 11 / 1 |
| Mimosa Carafe | 1 serving | only in draft B | not found | 570 / 0 / 0 / 0 / 0 / 0 / 51 / 0 / 42 / 4 |
| Paloma Mimosa | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 0 / 24 / 0 / 15 / 0 |
| Paradise City | 1 serving | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 10 / 22 / 0 / 19 / 0 |
| Peachy Bellini | 1 serving | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 10 / 54 / 0 / 50 / 1 |
| Sparkling Diamond | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 5 / 14 / 0 / 11 / 0 |
| Fired Up Coffee | 1 serving | only in draft B | not found | 160 / 1.5 / 1 / 0 / 5 / 15 / 19 / 0 / 18 / 1 |
| Flannel Pajamas | 1 serving | only in draft B | not found | 150 / 1.5 / 1 / 0 / 5 / 0 / 19 / 0 / 19 / 0 |
| Raspberry Espresso Martini | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 41 / 0 / 15 / 0 |
| Juice - Grapefruit | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 34 / 0 / 0 / 2 |
| Juice - Orange | 1 serving | only in draft B | not found | 170 / 0.5 / 0 / 0 / 0 / 0 / 39 / 1 / 31 / 3 |
| Juice - Pineapple | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 10 / 45 / 0 / 39 / 2 |
| Juice - Tomato | 1 serving | only in draft B | not found | 60 / 1 / 0 / 0 / 0 / 35 / 13 / 1 / 9 / 3 |
| Juice - Cranberry | 1 serving | only in draft B | not found | 210 / 1.5 / 0 / 0 / 0 / 10 / 50 / 0 / 46 / 0 |
| Salted Caramel Cold Brew | 1 serving | only in draft B | not found | 210 / 3 / 2 / 0 / 15 / 310 / 39 / 0 / 30 / 6 |
| Tea - Chamomile | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Tea - English Breakfast | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Tea - Green | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Burger | 1 serving | only in draft B | not found | 530 / 28 / 11 / 1.5 / 80 / 440 / 42 / 0 / 6 / 25 |
| Burger with Cheese | 1 serving | only in draft B | not found | 650 / 28 / 11 / 1.5 / 80 / 440 / 42 / 0 / 6 / 25 |
| Chicken Fingers | 1 serving | only in draft B | not found | 650 / 38 / 17 / 1.5 / 110 / 640 / 43 / 0 / 6 / 31 |
| French Toast | 1 serving | only in draft B | not found | 710 / 42 / 26 / 1 / 195 / 310 / 67 / 1 / 51 / 7 |
| Saturated Breakfast | 1 serving | only in draft B | not found | 350 / 23 / 7 / 0 / 220 / 640 / 24 / 2 / 9 / 11 |
| Grilled Chicken | 1 serving | only in draft B | not found | 160 / 3.5 / 1 / 0 / 100 / 70 / 0 / 0 / 0 / 30 |
| Penne Pasta with Asiago Cream Sauce | 1 serving | only in draft B | not found | 240 / 7 / 2 / 0 / 5 / 530 / 36 / 2 / 2 / 8 |
| Penne Pasta with Cream Tomato Sauce | 1 serving | only in draft B | not found | 230 / 4.5 / 1 / 0 / 5 / 720 / 38 / 2 / 3 / 8 |
| Ribs | 1 serving | only in draft B | not found | 430 / 27 / 10 / 0 / 75 / 700 / 29 / 0 / 25 / 20 |
| Smoked Chicken Wings (BBQ) | 1 serving | only in draft B | not found | 320 / 13 / 3 / 0 / 145 / 850 / 19 / 0 / 17 / 32 |
| Smoked Chicken Wings (Hot) | 1 serving | only in draft B | not found | 520 / 41 / 17 / 0.5 / 205 / 1530 / 3 / 0 / 2 / 37 |
| Smoked Chicken Wings (Plain) | 1 serving | only in draft B | not found | 240 / 13 / 3 / 0 / 145 / 480 / 0 / 0 / 0 / 32 |
| Wood Grilled Steak | 1 serving | only in draft B | not found | 180 / 6 / 2 / 0 / 80 / 65 / 0 / 0 / 0 / 30 |

## Spot check (7 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Grilled Shrimp & Strawberry Salad | 1 serving | 470 / 29 / 9 / 0 / 185 / 480 / 29 / 10 / 16 / 29 |
| Fresh Veggies | 1 serving | 35 / 0 / 0 / 0 / 0 / 20 / 7 / 2 / 4 / 2 |
| Grilled Chopped Cobb Salad | 1 serving | 600 / 34 / 12 / 0 / 340 / 1530 / 18 / 4 / 9 / 52 |
| Coke | 1 serving | 70 / 0 / 0 / 0 / 0 / 25 / 20 / 0 / 20 / 0 |
| Wood Grilled Jumbo Shrimp | 1 serving | 480 / 35 / 11 / 0 / 225 / 2190 / 16 / 1 / 6 / 28 |
| Seared Ahi Tuna | 1 serving | 730 / 45 / 9 / 0 / 75 / 1830 / 34 / 3 / 13 / 48 |
| Balsamic Vinaigrette Dressing | 2 fl oz Serving | 230 / 19 / 2.5 / 0 / 5 / 300 / 14 / 0 / 13 / 0 |
