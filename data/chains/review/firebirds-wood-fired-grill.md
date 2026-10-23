# Firebirds Wood Fired Grill: lines for a person

Guide: https://images.firebirdsrestaurants.com/production/general/Firebirds-Nutritional-10.14.2026.pdf?dm=1791904801 (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (75)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/firebirds-wood-fired-grill.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Chile Rub | 1 serving | the guide gives no fiber_g | 120 / 0 / 0 / 0 / 0 / 3600 / 24 / – / 0 / 0 | 120 / 0 / 0 / 0 / 0 / 3600 / 24 / – / 0 / 0 | A: numbers found after the name (line 123); check the size; B: numbers found after the name (line 123); check the size |
| Mac & Cheese | 1 serving | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 70 / 2.5 / 1 / 0 / 5 / 35 / 9 / 0 / 1 / 3 | 140 / 4.5 / 2.5 / 0 / 15 / 70 / 19 / 1 / 2 / 6 | A: numbers found after the name (line 295); check the size; B: numbers found after the name (line 277); check the size |
| Roasted Garlic Ranch Dressing | 2 fl oz Serving | both read numbers that can't be right: sugars 16 g above carbs 6 g | 340 / 36 / 7 / 0 / 35 / 540 / 6 / 0 / 16 / 1 | 340 / 36 / 7 / 0 / 35 / 540 / 6 / 0 / 16 / 1 | A: numbers found after the name (line 48); check the size; B: numbers found after the name (line 48); check the size |
| Cheeseburger | 1 serving | only in draft B | not found | 910 / 56 / 24 / 2.5 / 175 / 1400 / 51 / 2 / 9 / 47 | B: numbers found after the name (line 84); check the size |
| Cheeseburger with Bacon | 1 serving | only in draft B | not found | 990 / 62 / 26 / 2.5 / 185 / 1700 / 52 / 2 / 9 / 51 | B: numbers found after the name (line 85); check the size |
| Classic Club Sandwich | 1 serving | only in draft B | not found | 1070 / 66 / 21 / 0 / 175 / 2380 / 61 / 1 / 16 / 53 | B: numbers found after the name (line 86); check the size |
| Durango Burger | 1 serving | only in draft B | not found | 1130 / 72 / 24 / 2.5 / 180 / 3020 / 70 / 1 / 8 / 47 | B: numbers found after the name (line 87); check the size |
| Hot Honey Chicken Sandwich | 1 serving | only in draft B | not found | 1420 / 84 / 21 / 0 / 170 / 3840 / 120 / 1 / 41 / 54 | B: numbers found after the name (line 88); check the size |
| Steak Sandwich | 1 serving | only in draft B | not found | 860 / 53 / 15 / 1 / 110 / 1880 / 60 / 2 / 7 / 41 | B: numbers found after the name (line 89); check the size |
| Smokehouse Burger | 1 serving | only in draft B | not found | 980 / 54 / 22 / 2.5 / 160 / 2150 / 73 / 0 / 31 / 45 | B: numbers found after the name (line 90); check the size |
| Smokehouse Chicken Sandwich | 1 serving | only in draft B | not found | 680 / 21 / 9 / 0 / 130 / 1410 / 72 / 0 / 30 / 44 | B: numbers found after the name (line 91); check the size |
| Bacon Deviled Eggs | 1 serving | only in draft B | not found | 740 / 52 / 13 / 0 / 795 / 1600 / 37 / 1 / 32 / 30 | B: numbers found after the name (line 199); check the size |
| Candied Bacon | 1 serving | only in draft B | not found | 550 / 18 / 8 / 0 / 30 / 920 / 84 / 0 / 80 / 12 | B: numbers found after the name (line 200); check the size |
| Lobster Spinach Queso | 1 serving | only in draft B | not found | 970 / 66 / 26 / 1 / 145 / 1570 / 64 / 1 / 9 / 32 | B: numbers found after the name (line 201); check the size |
| Seared Ahl Tuna | 1 serving | only in draft B | not found | 730 / 45 / 9 / 0 / 75 / 1830 / 34 / 3 / 13 / 48 | B: numbers found after the name (line 202); check the size |
| Bacon & Eggs - Fried Egg | 1 serving | only in draft B | not found | 1500 / 96 / 39 / 0 / 425 / 3570 / 138 / 4 / 35 / 31 | B: numbers found after the name (line 205); check the size |
| Bacon & Eggs - Scrambled | 1 serving | only in draft B | not found | 1490 / 95 / 42 / 0 / 440 / 3570 / 138 / 4 / 35 / 31 | B: numbers found after the name (line 206); check the size |
| Bacon, Egg, & Cheese Biscuit | 1 serving | only in draft B | not found | 1650 / 114 / 39 / 0 / 485 / 3100 / 122 / 1 / 62 / 36 | B: numbers found after the name (line 207); check the size |
| Bacons, Eggs & Avocado Toast | 1 serving | only in draft B | not found | 660 / 49 / 17 / 0 / 230 / 1200 / 32 / 2 / 12 / 23 | B: numbers found after the name (line 208); check the size |
| Baked French Toast | 1 serving | only in draft B | not found | 1220 / 42 / 27 / 0 / 340 / 560 / 174 / 4 / 134 / 13 | B: numbers found after the name (line 209); check the size |
| Brunch Burger | 1 serving | only in draft B | not found | 1600 / 96 / 34 / 2.5 / 400 / 2020 / 111 / 1 / 11 / 67 | B: numbers found after the name (line 210); check the size |
| Grilled Salmon Benedict | 1 serving | only in draft B | not found | 1260 / 84 / 30 / 0 / 305 / 2800 / 69 / 3 / 8 / 53 | B: numbers found after the name (line 211); check the size |
| Hot Honey Chicken Biscuit | 1 serving | only in draft B | not found | 1790 / 121 / 35 / 0 / 340 / 5040 / 132 / 1 / 42 / 51 | B: numbers found after the name (line 212); check the size |
| Sausage, Egg, & Cheese Smothered Biscuit | 1 serving | only in draft B | not found | 1660 / 127 / 44 / 0 / 590 / 4190 / 68 / 1 / 9 / 65 | B: numbers found after the name (line 213); check the size |
| Steak & Egg Bowl | 1 serving | only in draft B | not found | 960 / 64 / 15 / 0.5 / 455 / 2560 / 50 / 3 / 10 / 46 | B: numbers found after the name (line 214); check the size |
| Veggie Power Bowl | 1 serving | only in draft B | not found | 840 / 59 / 12 / 0 / 385 / 2210 / 58 / 5 / 16 / 23 | B: numbers found after the name (line 215); check the size |
| Applewood Smoked Bacon | 1 serving | only in draft B | not found | 160 / 12 / 5 / 0 / 20 / 600 / 2 / 0 / 0 / 8 | B: numbers found after the name (line 217); check the size |
| Breakfast Sausage | 1 serving | only in draft B | not found | 520 / 43 / 14 / 0 / 125 / 1540 / 0 / 0 / 0 / 32 | B: numbers found after the name (line 218); check the size |
| Fresh Baked Biscuits | 1 serving | only in draft B | not found | 800 / 49 / 28 / 0 / 0 / 2230 / 89 / 1 / 17 / 8 | B: numbers found after the name (line 219); check the size |
| House Potatoes | 1 serving | only in draft B | not found | 480 / 34 / 6 / 0 / 0 / 1250 / 40 / 1 / 3 / 5 | B: numbers found after the name (line 221); check the size |
| Bloody Mary | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 700 / 9 / 2 / 5 / 1 | B: numbers found after the name (line 223); check the size |
| Espresso Martini | 1 serving | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 0 / 41 / 0 / 13 / 1 | B: numbers found after the name (line 224); check the size |
| The Hail Mary | 1 serving | only in draft B | not found | 430 / 9 / 4 / 0 / 15 / 1500 / 53 / 2 / 46 / 7 | B: numbers found after the name (line 225); check the size |
| Mimosa | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 11 / 1 | B: numbers found after the name (line 226); check the size |
| Mimosa Carafe | 1 serving | only in draft B | not found | 570 / 0 / 0 / 0 / 0 / 0 / 51 / 0 / 42 / 4 | B: numbers found after the name (line 227); check the size |
| Paloma Mimosa | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 0 / 24 / 0 / 15 / 0 | B: numbers found after the name (line 228); check the size |
| Paradise City | 1 serving | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 10 / 22 / 0 / 19 / 0 | B: numbers found after the name (line 229); check the size |
| Peachy Bellini | 1 serving | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 10 / 54 / 0 / 50 / 1 | B: numbers found after the name (line 230); check the size |
| Sparkling Diamond | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 5 / 14 / 0 / 11 / 0 | B: numbers found after the name (line 231); check the size |
| Fired Up Coffee | 1 serving | only in draft B | not found | 160 / 1.5 / 1 / 0 / 5 / 15 / 19 / 0 / 18 / 1 | B: numbers found after the name (line 245); check the size |
| Flannel Pajamas | 1 serving | only in draft B | not found | 150 / 1.5 / 1 / 0 / 5 / 0 / 19 / 0 / 19 / 0 | B: numbers found after the name (line 246); check the size |
| Raspberry Espresso Martini | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 41 / 0 / 15 / 0 | B: numbers found after the name (line 247); check the size |
| Juice - Grapefruit | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 34 / 0 / 0 / 2 | B: numbers found after the name (line 255); check the size |
| Juice - Orange | 1 serving | only in draft B | not found | 170 / 0.5 / 0 / 0 / 0 / 0 / 39 / 1 / 31 / 3 | B: numbers found after the name (line 256); check the size |
| Juice - Pineapple | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 10 / 45 / 0 / 39 / 2 | B: numbers found after the name (line 257); check the size |
| Juice - Tomato | 1 serving | only in draft B | not found | 60 / 1 / 0 / 0 / 0 / 35 / 13 / 1 / 9 / 3 | B: numbers found after the name (line 258); check the size |
| Juice - Cranberry | 1 serving | only in draft B | not found | 210 / 1.5 / 0 / 0 / 0 / 10 / 50 / 0 / 46 / 0 | B: numbers found after the name (line 259); check the size |
| Salted Caramel Cold Brew | 1 serving | only in draft B | not found | 210 / 3 / 2 / 0 / 15 / 310 / 39 / 0 / 30 / 6 | B: numbers found after the name (line 261); check the size |
| Tea - Chamomile | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 262); check the size, mostly zeros: look |
| Tea - English Breakfast | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 263); check the size, mostly zeros: look |
| Tea - Green | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 264); check the size, mostly zeros: look |
| Burger | 1 serving | only in draft B | not found | 530 / 28 / 11 / 1.5 / 80 / 440 / 42 / 0 / 6 / 25 | B: numbers found after the name (line 266); check the size |
| Burger with Cheese | 1 serving | only in draft B | not found | 650 / 28 / 11 / 1.5 / 80 / 440 / 42 / 0 / 6 / 25 | B: numbers found after the name (line 267); check the size |
| Chicken Fingers | 1 serving | only in draft B | not found | 650 / 38 / 17 / 1.5 / 110 / 640 / 43 / 0 / 6 / 31 | B: numbers found after the name (line 268); check the size |
| French Toast | 1 serving | only in draft B | not found | 710 / 42 / 26 / 1 / 195 / 310 / 67 / 1 / 51 / 7 | B: numbers found after the name (line 270); check the size |
| Saturated Breakfast | 1 serving | only in draft B | not found | 350 / 23 / 7 / 0 / 220 / 640 / 24 / 2 / 9 / 11 | B: numbers found after the name (line 271); check the size |
| Grilled Chicken | 1 serving | only in draft B | not found | 160 / 3.5 / 1 / 0 / 100 / 70 / 0 / 0 / 0 / 30 | B: numbers found after the name (line 52); check the size |
| Penne Pasta with Asiago Cream Sauce | 1 serving | only in draft B | not found | 240 / 7 / 2 / 0 / 5 / 530 / 36 / 2 / 2 / 8 | B: numbers found after the name (line 278); check the size |
| Penne Pasta with Cream Tomato Sauce | 1 serving | only in draft B | not found | 230 / 4.5 / 1 / 0 / 5 / 720 / 38 / 2 / 3 / 8 | B: numbers found after the name (line 279); check the size |
| Ribs | 1 serving | only in draft B | not found | 430 / 27 / 10 / 0 / 75 / 700 / 29 / 0 / 25 / 20 | B: numbers found after the name (line 280); check the size |
| Smoked Chicken Wings (BBQ) | 1 serving | only in draft B | not found | 320 / 13 / 3 / 0 / 145 / 850 / 19 / 0 / 17 / 32 | B: numbers found after the name (line 281); check the size |
| Smoked Chicken Wings (Hot) | 1 serving | only in draft B | not found | 520 / 41 / 17 / 0.5 / 205 / 1530 / 3 / 0 / 2 / 37 | B: numbers found after the name (line 282); check the size |
| Smoked Chicken Wings (Plain) | 1 serving | only in draft B | not found | 240 / 13 / 3 / 0 / 145 / 480 / 0 / 0 / 0 / 32 | B: numbers found after the name (line 283); check the size |
| Wood Grilled Steak | 1 serving | only in draft B | not found | 180 / 6 / 2 / 0 / 80 / 65 / 0 / 0 / 0 / 30 | B: numbers found after the name (line 285); check the size |
| Peppercorn Crust | 1 serving | both read it the same, but its protein, carbs and fat make 96 kcal, not 0 | 0 / 0 / 0 / 0 / 0 / 3600 / 24 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 3600 / 24 / 0 / 0 / 0 | A: numbers found after the name (line 124); check the size, mostly zeros: look; B: numbers found after the name (line 124); check the size, mostly zeros: look |
| Chicken Ribs & Pasta | 1 serving | both read it the same, but its protein, carbs and fat make 394 kcal, not 290 | 290 / 26 / 8 / 0 / 80 / 730 / 10 / 3 / 5 / 30 | 290 / 26 / 8 / 0 / 80 / 730 / 10 / 3 / 5 / 30 | A: numbers found after the name (line 131); check the size; B: numbers found after the name (line 131); check the size |
| Panella Bread with Butter | Individual | both read it the same, but its protein, carbs and fat make 257 kcal, not 170 | 170 / 13 / 1 / 0 / 5 / 370 / 30 / 0 / 1 / 5 | 170 / 13 / 1 / 0 / 5 / 370 / 30 / 0 / 1 / 5 | A: numbers found after the name (line 147); check the size; B: numbers found after the name (line 147); check the size |
| Panella Bread with Butter | Loaf | both read it the same, but its protein, carbs and fat make 780 kcal, not 520 | 520 / 40 / 3 / 0 / 15 / 1110 / 90 / 0 / 3 / 15 | 520 / 40 / 3 / 0 / 15 / 1110 / 90 / 0 / 3 / 15 | A: numbers found after the name (line 148); check the size; B: numbers found after the name (line 148); check the size |
| Port Mushrooms | 1 serving | both read it the same, but its protein, carbs and fat make 230 kcal, not 290 | 290 / 14 / 7 / 0 / 25 / 500 / 19 / 2 / 10 / 7 | 290 / 14 / 7 / 0 / 25 / 500 / 19 / 2 / 10 / 7 | A: numbers found after the name (line 150); check the size; B: numbers found after the name (line 150); check the size |
| Tate Tots | 1 serving | both read it the same, but its protein, carbs and fat make 921 kcal, not 520 | 520 / 57 / 8 / 0 / 0 / 1950 / 95 / 0 / 0 / 7 | 520 / 57 / 8 / 0 / 0 / 1950 / 95 / 0 / 0 / 7 | A: numbers found after the name (line 154); check the size; B: numbers found after the name (line 154); check the size |
| Black Cherry Cosmo | 1 serving | both read it the same, but its protein, carbs and fat make 116 kcal, not 270 | 270 / 0 / 0 / 0 / 0 / 0 / 29 / 2 / 24 / 0 | 270 / 0 / 0 / 0 / 0 / 0 / 29 / 2 / 24 / 0 | A: numbers found after the name (line 177); check the size; B: numbers found after the name (line 177); check the size |
| Dirty Bird | 1 serving | both read it the same, but its protein, carbs and fat make 53 kcal, not 250 | 250 / 5 / 2 / 0 / 5 / 770 / 0 / 0 / 0 / 2 | 250 / 5 / 2 / 0 / 5 / 770 / 0 / 0 / 0 / 2 | A: numbers found after the name (line 178); check the size; B: numbers found after the name (line 178); check the size |
| Island Aura | 1 serving | both read it the same, but its protein, carbs and fat make 108 kcal, not 240 | 240 / 0 / 0 / 0 / 0 / 0 / 27 / 1 / 23 / 0 | 240 / 0 / 0 / 0 / 0 / 0 / 27 / 1 / 23 / 0 | A: numbers found after the name (line 179); check the size; B: numbers found after the name (line 179); check the size |
| Lemonade Drop | 1 serving | both read it the same, but its protein, carbs and fat make 72 kcal, not 170 | 170 / 0 / 0 / 0 / 0 / 0 / 18 / 0 / 17 / 0 | 170 / 0 / 0 / 0 / 0 / 0 / 18 / 0 / 17 / 0 | A: numbers found after the name (line 180); check the size; B: numbers found after the name (line 180); check the size |
| Spicy Raspberry Rita | 1 serving | both read it the same, but its protein, carbs and fat make 144 kcal, not 190 | 190 / 0 / 0 / 0 / 0 / 0 / 36 / 0 / 20 / 0 | 190 / 0 / 0 / 0 / 0 / 0 / 36 / 0 / 20 / 0 | A: numbers found after the name (line 185); check the size; B: numbers found after the name (line 185); check the size |

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
