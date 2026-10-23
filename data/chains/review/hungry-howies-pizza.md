# Hungry Howie's Pizza: lines for a person

Guide: https://hungryhowies.com/nutrition-info (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (173)

Fix each line in `menus/hungry-howies-pizza.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Chicken Parmesan | Regular | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 380 / 15 / 5 / 0 / 25 / 700 / 46 / 3 / 5 / 15 | 740 / 29 / 11 / – / 85 / 1450 / 81 / 6 / 7 / 39 |
| Chicken Parmesan | Large | differ: calories, fat_g, trans_fat_g, sodium_mg, carbs_g, fiber_g, protein_g | 600 / 22 / 9 / 1 / 75 / 1050 / 67 / 5 / 7 / 31 | 700 / 25 / 9 / – / 75 / 1370 / 81 / 6 / 7 / 36 |
| Pepsi | 22 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 270 / – / – / – / – / 55 / 75 / – / 75 / – | 270 / – / – / – / – / 55 / 75 / – / 75 / – |
| Pepsi | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 400 / – / – / – / – / 80 / 109 / – / 109 / – | 400 / – / – / – / – / 80 / 109 / – / 109 / – |
| Diet Pepsi | 22 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 0 / – / – / – / – / 65 / 0 / – / 0 / – | 0 / – / – / – / – / 65 / 0 / – / 0 / – |
| Diet Pepsi | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 0 / – / – / – / – / 95 / 0 / – / 0 / – | 0 / – / – / – / – / 95 / 0 / – / 0 / – |
| Mountain Dew | 22 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 310 / – / – / – / – / 110 / 84 / – / 84 / – | 310 / – / – / – / – / 110 / 84 / – / 84 / – |
| Mountain Dew | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 450 / – / – / – / – / 160 / 123 / – / 123 / – | 450 / – / – / – / – / 160 / 123 / – / 123 / – |
| Starry | 22 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 270 / – / – / – / – / 65 / 71 / – / 71 / – | 270 / – / – / – / – / 65 / 71 / – / 71 / – |
| Starry | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 400 / – / – / – / – / 95 / 104 / – / 104 / – | 400 / – / – / – / – / 95 / 104 / – / 104 / – |
| Sweet Tea | 22 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 140 / – / – / – / – / 20 / 37 / – / 35 / – | 140 / – / – / – / – / 20 / 37 / – / 35 / – |
| Sweet Tea | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 200 / – / – / – / – / 30 / 53 / – / 50 / – | 200 / – / – / – / – / 30 / 53 / – / 50 / – |
| Unsweetened Tea | 22 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 5 / – / – / – / – / 20 / 2 / – / 0 / – | 5 / – / – / – / – / 20 / 2 / – / 0 / – |
| Unsweetened Tea | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 10 / – / – / – / – / 30 / 3 / – / 0 / – | 10 / – / – / – / – / 30 / 3 / – / 0 / – |
| Original Howie Wings | per wing | the guide gives no fiber_g | 70 / 5 / 1.5 / – / 20 / 290 / 0 / – / 0 / 5 | 70 / 5 / 1.5 / – / 20 / 290 / 0 / – / 0 / 5 |
| Original Boneless Howie Wings | per wing | the guide gives no fiber_g | 60 / 2 / 0 / – / 15 / 270 / 5 / – / 0.5 / 5 | 60 / 2 / 0 / – / 15 / 270 / 5 / – / 0.5 / 5 |
| Spicy Chicken Tenders | per tender, avg | the guide gives no fiber_g, sugars_g | 130 / 7 / 1.5 / – / 20 / 370 / 9 / – / – / 8 | 130 / 7 / 1.5 / – / 20 / 370 / 9 / – / – / 8 |
| Howie Bread | 1 piece (16 per order) | the guide gives no fiber_g | 70 / 1.5 / 0 / – / 2.5 / 95 / 12 / – / 0.5 / 2 | 70 / 1.5 / 0 / – / 2.5 / 95 / 12 / – / 0.5 / 2 |
| 3 Cheeser Howie Bread | 1 piece (16 per order) | the guide gives no fiber_g | 90 / 3 / 1 / – / 5 / 130 / 12 / – / 0.5 / 3 | 90 / 3 / 1 / – / 5 / 130 / 12 / – / 0.5 / 3 |
| Asiago Howie Bread | 1 piece (16 per order) | the guide gives no fiber_g | 80 / 2 / 1 / – / 2.5 / 75 / 12 / – / 0.5 / 3 | 80 / 2 / 1 / – / 2.5 / 75 / 12 / – / 0.5 / 3 |
| Cajun Howie Bread | 1 piece (16 per order) | the guide gives no fiber_g | 60 / 1 / 0 / – / 0 / 75 / 11 / – / 0.5 / 2 | 60 / 1 / 0 / – / 0 / 75 / 11 / – / 0.5 / 2 |
| Cinnamon Howie Bread | 1 piece (16 per order) | the guide gives no fiber_g | 70 / 1 / 0 / – / 0 / 45 / 13 / – / 2 / 2 | 70 / 1 / 0 / – / 0 / 45 / 13 / – / 2 / 2 |
| Deep Dish 3 Cheeser | 1 piece (16 per order) | the guide gives no fiber_g | 140 / 6 / 2.5 / – / 15 / 220 / 17 / – / 1 / 6 | 140 / 6 / 2.5 / – / 15 / 220 / 17 / – / 1 / 6 |
| Stuffed Howie Bread | 1 piece (16 per order) | the guide gives no fiber_g | 130 / 5 / 2.5 / – / 15 / 190 / 15 / – / 0.5 / 6 | 130 / 5 / 2.5 / – / 15 / 190 / 15 / – / 0.5 / 6 |
| Stuffed Howie Bread & Bacon | 1 piece (16 per order) | the guide gives no fiber_g | 100 / 4 / 1.5 / – / 10 / 150 / 12 / – / 0.5 / 4 | 100 / 4 / 1.5 / – / 10 / 150 / 12 / – / 0.5 / 4 |
| Stuffed Howie Bread & Jalapeño | 1 piece (16 per order) | the guide gives no fiber_g | 90 / 3.5 / 1.5 / – / 10 / 140 / 12 / – / 0.5 / 4 | 90 / 3.5 / 1.5 / – / 10 / 140 / 12 / – / 0.5 / 4 |
| Stuffed Howie Bread & Pepperoni | 1 piece (16 per order) | the guide gives no fiber_g | 100 / 3.5 / 1.5 / – / 10 / 160 / 12 / – / 0.5 / 4 | 100 / 3.5 / 1.5 / – / 10 / 160 / 12 / – / 0.5 / 4 |
| BBQ | per cup | the guide gives no fiber_g | 80 / 0 / 0 / – / 0 / 340 / 20 / – / 19 / 0 | 80 / 0 / 0 / – / 0 / 340 / 20 / – / 19 / 0 |
| Blue Cheese | per cup | the guide gives no fiber_g | 200 / 21 / 4 / – / 25 / 440 / 2 / – / 1 / 1 | 200 / 21 / 4 / – / 25 / 440 / 2 / – / 1 / 1 |
| Buffalo Sauce | per cup | the guide gives no fiber_g | 60 / 6 / 1 / – / 0 / 1280 / 2 / – / 1 / 0 | 60 / 6 / 1 / – / 0 / 1280 / 2 / – / 1 / 0 |
| Cheese Sauce | per cup | the guide gives no fiber_g | 140 / 9 / 5 / – / 5 / 890 / 12 / – / 5 / 1 | 140 / 9 / 5 / – / 5 / 890 / 12 / – / 5 / 1 |
| Garlic Sauce | per cup | the guide gives no fiber_g | 230 / 25 / 4 / – / 0 / 380 / 0 / – / 0 / 0 | 230 / 25 / 4 / – / 0 / 380 / 0 / – / 0 / 0 |
| Icing | per cup | the guide gives no fiber_g | 150 / 1.5 / 0 / – / 0 / 0 / 34 / – / 33 / 0 | 150 / 1.5 / 0 / – / 0 / 0 / 34 / – / 33 / 0 |
| Pizza Sauce | per cup | the guide gives no fiber_g | 35 / 0 / 0 / – / 0 / 190 / 7 / – / 4 / 1 | 35 / 0 / 0 / – / 0 / 190 / 7 / – / 4 / 1 |
| Ranch | per cup | the guide gives no fiber_g | 200 / 22 / 3.5 / – / 10 / 320 / 2 / – / 0.5 / 0 | 200 / 22 / 3.5 / – / 10 / 320 / 2 / – / 0.5 / 0 |
| 4 oz. Marinara Sauce | per cup | the guide gives no fiber_g | 45 / 0 / 0 / – / 0 / 490 / 735 / – / 5 / 2 | 45 / 0 / 0 / – / 0 / 490 / 735 / – / 5 / 2 |
| 1000 Island | per packet | the guide gives no fiber_g | 210 / 21 / 4 / – / 20 / 300 / 6 / – / 6 / 0 | 210 / 21 / 4 / – / 20 / 300 / 6 / – / 6 / 0 |
| Caesar | per packet | the guide gives no fiber_g | 180 / 18 / 3 / – / 10 / 400 / 2 / – / 0.5 / 1 | 180 / 18 / 3 / – / 10 / 400 / 2 / – / 0.5 / 1 |
| Fat Free Italian | per packet | the guide gives no fiber_g | 15 / 0 / 0 / – / 0 / 350 / 4 / – / 3 / 0 | 15 / 0 / 0 / – / 0 / 350 / 4 / – / 3 / 0 |
| Fat Free Ranch | per packet | the guide gives no fiber_g | 40 / 0 / 0 / – / 0 / 490 / 9 / – / 3 / 0 | 40 / 0 / 0 / – / 0 / 490 / 9 / – / 3 / 0 |
| Greek | per packet | the guide gives no fiber_g | 220 / 24 / 4 / – / 2.5 / 540 / 1 / – / 0.5 / 0 | 220 / 24 / 4 / – / 2.5 / 540 / 1 / – / 0.5 / 0 |
| Honey Mustard | per packet | the guide gives no fiber_g | 180 / 0 / 2.5 / – / 10 / 220 / 7 / – / 7 / 0 | 180 / 0 / 2.5 / – / 10 / 220 / 7 / – / 7 / 0 |
| Italian | per packet | the guide gives no fiber_g | 130 / 13 / 2.5 / – / 0 / 370 / 3 / – / 2 / 0.5 | 130 / 13 / 2.5 / – / 0 / 370 / 3 / – / 2 / 0.5 |
| Ranch | per packet | the guide gives no fiber_g | 200 / 22 / 3.5 / – / 10 / 320 / 2 / – / 1 / 0 | 200 / 22 / 3.5 / – / 10 / 320 / 2 / – / 1 / 0 |
| Blue Cheese | per packet | the guide gives no fiber_g | 200 / 21 / 4 / – / 25 / 430 / 2 / – / 1 / 1 | 200 / 21 / 4 / – / 25 / 430 / 2 / – / 1 / 1 |
| Howie Cookie – Chocolate Chip | 1 slice (8 slices total) | the guide gives no fiber_g | 180 / 8 / 4 / – / 10 / 660 / 28 / – / 17 / 2 | 180 / 8 / 4 / – / 10 / 660 / 28 / – / 17 / 2 |
| Cheese Only | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 160 / 5 / 3 / 0 / 15 / 200 / 21 / 1 / 1 / 8 |
| Anchovies | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 230 / 0 / 0 / 0 / 0.5 |
| Bacon | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 10 / 1 / 0 / 0 / 0 / 30 / 0 / 0 / 0 / 0.5 |
| Black Olive | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 5 / 0.5 / 0 / 0 / 0 / 25 / 0 / 0 / 0 / 0 |
| Cheddar | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 30 / 2.5 / 1.5 / 0 / 5 / 45 / 0 / 0 / 0 / 2 |
| Chicken | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 5 / 50 / 0 / 0 / 0 / 2 |
| Feta | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 20 / 1 / 1 / 0 / 2.5 / 85 / 0.5 / 0 / 0 / 2 |
| Green Olive | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 5 / 0.5 / 0 / – / 0 / 55 / 0 / 0 / 0 / 0 |
| Green Pepper | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0.5 / 0 / 0 / 0 |
| Ground Beef | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 15 / 1.5 / 0.5 / 0 / 2.5 / 90 / 0 / 0 / 0 / 1 |
| Ham | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 2.5 / 75 / 0 / 0 / 0 / 1 |
| Jalapeños | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 120 / 0 / 0 / 0 / 0 |
| Meatball | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 20 / 1.5 / 0.5 / 0 / 2.5 / 55 / 0 / 0 / 0 / 2 |
| Mild Pepper Rings | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 105 / 0 / 0 / 0 / 0 |
| Mushroom | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 0 / 0 / 0 / 0 / 0 |
| Pepperoni | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 5 / 0.5 / 0 / 0 / 0 / 45 / 0 / 0 / 0 / 0 |
| Classic Cupped Pepperoni | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 20 / 1.8 / 0.7 / 0 / 4 / 74 / 0 / 0 / 0 / 0.7 |
| Pineapple | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0.5 / 0 |
| Red Onion | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Sausage | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 30 / 2.5 / 1 / 0 / 5 / 65 / 0 / 0 / 0 / 0.5 |
| Steak | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 15 / 1 / 0 / 0 / 2.5 / 0 / 0 / 0 / 0 / 1 |
| Tomato | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0.5 / 0 |
| Cheese Only | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 150 / 4.5 / 2.5 / 0 / 15 / 200 / 21 / 1 / 1 / 7 |
| Gluten Free – Cheese Only | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 90 / 5 / 2.5 / 0 / 15 / 160 / 7 / 0.5 / 2 / 4 |
| Anchovies | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 230 / 0 / 0 / 0 / 0.5 |
| Bacon | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 25 / 2.5 / 0.5 / 0 / 2.5 / 85 / 0 / 0 / 0 / 1 |
| Black Olive | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 10 / 0.5 / 0 / 0 / 0 / 30 / 0 / 0 / 0 / 0 |
| Cheddar | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 40 / 3 / 1.5 / 0 / 10 / 60 / 0 / 0 / 0 / 2 |
| Chicken | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 5 / 50 / 0 / 0 / 0 / 2 |
| Feta | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 25 / 1.5 / 1 / 0 / 5 / 115 / 0.5 / 0 / 0 / 2 |
| Green Olive | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 5 / 0.5 / 0 / – / 0 / 75 / 0 / 0 / 0 / 0 |
| Green Pepper | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0.5 / 0 / 0 / 0 |
| Ground Beef | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 15 / 1.5 / 0.5 / 0 / 2.5 / 90 / 0 / 0 / 0 / 1 |
| Ham | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 2.5 / 75 / 0 / 0 / 0 / 1 |
| Jalapeños | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 120 / 0 / 0 / 0 / 0 |
| Meatball | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 40 / 3 / 1 / 0 / 5 / 115 / 0.5 / 0.5 / 0 / 3 |
| Mild Pepper Rings | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 105 / 0 / 0 / 0 / 0 |
| Mushroom | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 0 / 0 / 0 / 0 / 0 |
| Pepperoni | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 10 / 0.5 / 0 / 0 / 0 / 60 / 0 / 0 / 0 / 0 |
| Classic Cupped Pepperoni | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 25 / 2 / 0.8 / 0 / 5 / 95 / 0 / 0 / 0 / 0.8 |
| Pineapple | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0.5 / 0 |
| Red Onion | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Sausage | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 30 / 2.5 / 1 / 0 / 5 / 65 / 0 / 0 / 0 / 0.5 |
| Steak | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 15 / 1 / 0 / 0 / 2.5 / 0 / 0 / 0 / 0 / 1 |
| Tomato | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 1 / 0 |
| Cheese Only | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 180 / 5 / 3 / 0 / 15 / 230 / 25 / 1 / 2 / 9 |
| Thin Crust – Cheese Only | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 140 / 7 / 3.5 / 0 / 15 / 180 / 13 / 1 / 1 / 6 |
| Anchovies | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 230 / 0 / 0 / 0 / 0.5 |
| Bacon | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 25 / 2.5 / 0.5 / 0 / 2.5 / 85 / 0 / 0 / 0 / 1 |
| Black Olive | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 10 / 0.5 / 0 / 0 / 0 / 30 / 0 / 0 / 0 / 0 |
| Cheddar | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 45 / 3.5 / 2 / 0 / 10 / 70 / 0 / 0 / 0 / 3 |
| Chicken | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 5 / 50 / 0 / 0 / 0 / 2 |
| Feta | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 25 / 1.5 / 1 / 0 / 5 / 115 / 0.5 / 0 / 0 / 2 |
| Green Olive | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 5 / 0.5 / 0 / – / 0 / 75 / 0 / 0 / 0 / 0 |
| Green Pepper | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0.5 / 0 / 0 / 0 |
| Ground Beef | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 15 / 1.5 / 0.5 / 0 / 2.5 / 90 / 0 / 0 / 0 / 1 |
| Ham | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 2.5 / 75 / 0 / 0 / 0 / 1 |
| Jalapeños | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 120 / 0 / 0 / 0 / 0 |
| Meatball | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 40 / 3 / 1 / 0 / 5 / 115 / 0.5 / 0.5 / 0 / 3 |
| Mild Pepper Rings | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 105 / 0 / 0 / 0 / 0 |
| Mushroom | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 0 / 0 / 0 / 0 / 0 |
| Pepperoni | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 10 / 0.5 / 0 / 0 / 0 / 60 / 0 / 0 / 0 / 0 |
| Classic Cupped Pepperoni | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 29 / 2.7 / 1 / 0 / 6 / 108 / 0 / 0 / 0 / 1 |
| Pineapple | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0.5 / 0 |
| Red Onion | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Sausage | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 30 / 2.5 / 1 / 0 / 5 / 65 / 0 / 0 / 0 / 0.5 |
| Steak | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 15 / 1 / 0 / 0 / 2.5 / 0 / 0 / 0 / 0 / 1 |
| Tomato | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 1 / 0 |
| Cheese Only | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 250 / 7 / 4 / 0 / 25 / 320 / 34 / 2 / 2 / 12 |
| Thin Crust – Cheese Only | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 200 / 10 / 4.5 / 0 / 25 / 260 / 18 / 1 / 2 / 9 |
| Stuffed Crust – Cheese Only | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 300 / 12 / 7 / 0 / 40 / 500 / 35 / 2 / 3 / 15 |
| Anchovies | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 290 / 0 / 0 / 0 / 0.5 |
| Bacon | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 20 / 2 / 0.5 / 0 / 2.5 / 65 / 0 / 0 / 0 / 1 |
| Black Olive | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 15 / 1 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 |
| Cheddar | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 60 / 4.5 / 2.5 / 0 / 15 / 90 / 0 / 0 / 0 / 4 |
| Chicken | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 15 / 0 / 0 / 0 / 10 / 85 / 0 / 0 / 0 / 3 |
| Feta | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 35 / 2 / 1.5 / 0 / 10 / 170 / 1 / 0 / 0.5 / 3 |
| Green Olive | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 10 / 1 / 0 / – / 0 / 110 / 0 / 0 / 0 / 0 |
| Green Pepper | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0.5 / 0 / 0 / 0 |
| Ground Beef | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 30 / 2 / 1 / 0 / 5 / 160 / 0 / 0 / 0 / 2 |
| Ham | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 15 / 0.5 / 0 / 0 / 5 / 130 / 0 / 0 / 0 / 2 |
| Jalapeños | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 180 / 0.5 / 0 / 0 / 0 |
| Meatball | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 60 / 4.5 / 1.5 / 0 / 10 / 170 / 1 / 0.5 / 0 / 5 |
| Mild Pepper Rings | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 160 / 0 / 0 / 0 / 0 |
| Mushroom | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 0 / 0 / 0 / 0 / 0 |
| Pepperoni | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 10 / 1 / 0 / 0 / 2.5 / 85 / 0 / 0 / 0 / 0 |
| Classic Cupped Pepperoni | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 36 / 3.3 / 1.2 / 0 / 7 / 137 / 0 / 0 / 0 / 1.2 |
| Pineapple | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 1 / 0 |
| Red Onion | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0.5 / 0 / 0 / 0 |
| Sausage | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 40 / 3.5 / 1 / 0 / 5 / 90 / 0 / 0 / 0 / 1 |
| Steak | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 25 / 1.5 / 0.5 / 0 / 10 / 5 / 0 / 0 / 0 / 3 |
| Tomato | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 3 / 0.5 / 2 / 0.5 |
| Cheese Only | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 350 / 10 / 6 / 0 / 35 / 450 / 48 / 3 / 3 / 17 |
| Anchovies | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 10 / 0.5 / 0 / 0 / 0 / 350 / 0 / 0 / 0 / 1 |
| Bacon | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 25 / 2 / 0.5 / 0 / 2.5 / 80 / 0 / 0 / 0 / 1 |
| Black Olive | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 15 / 1.5 / 0 / 0 / 0 / 60 / 0.5 / 0 / 0 / 0 |
| Cheddar | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 80 / 6 / 3.5 / 0 / 20 / 125 / 0 / 0 / 0 / 5 |
| Chicken | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 20 / 0 / 0 / 0 / 10 / 110 / 0 / 0 / 0 / 3 |
| Feta | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 45 / 2.5 / 2 / 0 / 10 / 220 / 1 / 0 / 0.5 / 4 |
| Green Olive | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 15 / 1.5 / 0 / – / 0 / 140 / 0 / 0 / 0 / 0 |
| Green Pepper | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0.5 / 0.5 / 0 |
| Ground Beef | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 35 / 3 / 1 / 0 / 5 / 200 / 0.5 / 0 / 0 / 2 |
| Ham | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 15 / 0.5 / 0 / 0 / 10 / 170 / 0 / 0 / 0 / 2 |
| Jalapeños | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 240 / 0.5 / 0 / 0 / 0 |
| Meatball | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 80 / 6 / 2 / 0 / 15 / 230 / 2 / 1 / 0 / 6 |
| Mild Pepper Rings | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 210 / 0.5 / 0 / 0 / 0 |
| Mushroom | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 0 / 0 / 0 / 0 / 0 |
| Pepperoni | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 15 / 1.5 / 0.5 / 0 / 2.5 / 105 / 0 / 0 / 0 / 0.5 |
| Classic Cupped Pepperoni | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 45 / 4.2 / 1.5 / 0 / 9 / 171 / 0 / 0 / 0 / 1.5 |
| Pineapple | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 2 / 0 |
| Red Onion | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0.5 / 0 / 0 / 0 |
| Sausage | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 60 / 6 / 2 / 0 / 10 / 140 / 0 / 0 / 0 / 2 |
| Steak | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 30 / 2 / 1 / 0 / 10 / 10 / 0 / 0 / 0 / 3 |
| Tomato | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 0 / 3 / 0.5 / 2 / 0.5 |
| Cheese Only | 1 slice (Deep Dish, 8 slices) | only in draft B | not found | 330 / 16 / 6 / 0 / 30 / 370 / 36 / 1 / 2 / 13 |
| Bacon | 1 slice (Deep Dish, 8 slices) | only in draft B | not found | 20 / 2 / 0.5 / 0 / 2.5 / 65 / 0 / 0 / 0 / 1 |
| Pepperoni | 1 slice (Deep Dish, 8 slices) | only in draft B | not found | 10 / 1 / 0 / 0 / 2.5 / 85 / 0 / 0 / 0 / 0 |
| Sausage | 1 slice (Deep Dish, 8 slices) | only in draft B | not found | 40 / 3.5 / 1 / 0 / 5 / 90 / 0 / 0 / 0 / 1 |
| Meatball | 1 slice (Deep Dish, 8 slices) | only in draft B | not found | 60 / 4.5 / 1.5 / 0 / 10 / 170 / 1 / 0.5 / 0 / 5 |
| Chicken | 1 slice (Deep Dish, 8 slices) | only in draft B | not found | 15 / 0 / 0 / 0 / 10 / 85 / 0 / 0 / 0 / 3 |
| Cheddar | 1 slice (Deep Dish, 8 slices) | only in draft B | not found | 60 / 5 / 3 / 0 / 15 / 105 / 0 / 0 / 0 / 4 |
| Chicken Parmesan | ½ sub (Regular) | only in draft B | not found | 380 / 15 / 5 / 0 / 25 / 700 / 46 / 3 / 5 / 15 |
| Chicken Parmesan | ½ sub (Large) | only in draft B | not found | 600 / 22 / 9 / 1 / 75 / 1050 / 67 / 5 / 7 / 31 |
| Asian | per wing | only in draft B | not found | 10 / 0 / 0 / – / 0 / 85 / 2 / – / 2 / 0 |
| BBQ | per wing | only in draft B | not found | 10 / 0 / 0 / – / 0 / 35 / 2 / – / 2 / 0 |
| Buffalo | per wing | only in draft B | not found | 5 / 0.5 / 0 / – / 0 / 125 / 0 / – / 0 / 0 |
| Sriracha | per wing | only in draft B | not found | 0 / 0 / 0 / – / 0 / 115 / 0.5 / – / 0.5 / 0 |

## Spot check (4 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Steak & Cheese | ½ sub (Regular) | 310 / 8 / 4 / 0 / 40 / 780 / 39 / 2 / 2 / 19 |
| Ham & Cheese | ½ sub (Large) | 580 / 24 / 9 / 0 / 70 / 1860 / 62 / 3 / 5 / 32 |
| Howie Maui | 14″ Large (8 slices) | 290 / 10 / 5 / – / 30 / 490 / 35 / 2 / 4 / 15 |
| Chef | Large | 630 / 38 / 19 / – / 145 / 1810 / 25 / 10 / 12 / 44 |
