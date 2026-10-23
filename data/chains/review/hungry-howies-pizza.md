# Hungry Howie's Pizza: lines for a person

Guide: https://hungryhowies.com/nutrition-info (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (176)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/hungry-howies-pizza.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Chicken Parmesan | Regular | differ: calories, fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 380 / 15 / 5 / 0 / 25 / 700 / 46 / 3 / 5 / 15 | 740 / 29 / 11 / – / 85 / 1450 / 81 / 6 / 7 / 39 | A: numbers found after the name (line 282); check the size; B: numbers found after the name (line 320); check the size |
| Chicken Parmesan | Large | differ: calories, fat_g, trans_fat_g, sodium_mg, carbs_g, fiber_g, protein_g | 600 / 22 / 9 / 1 / 75 / 1050 / 67 / 5 / 7 / 31 | 700 / 25 / 9 / – / 75 / 1370 / 81 / 6 / 7 / 36 | A: numbers found after the name (line 283); check the size; B: numbers found after the name (line 319); check the size |
| Pepsi | 22 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 270 / – / – / – / – / 55 / 75 / – / 75 / – | 270 / – / – / – / – / 55 / 75 / – / 75 / – | A: numbers found after the name (line 427); check the size; B: numbers found after the name (line 427); check the size |
| Pepsi | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 400 / – / – / – / – / 80 / 109 / – / 109 / – | 400 / – / – / – / – / 80 / 109 / – / 109 / – | A: numbers found after the name (line 428); check the size; B: numbers found after the name (line 428); check the size |
| Diet Pepsi | 22 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 0 / – / – / – / – / 65 / 0 / – / 0 / – | 0 / – / – / – / – / 65 / 0 / – / 0 / – | A: numbers found after the name (line 429); check the size, mostly zeros: look; B: numbers found after the name (line 429); check the size, mostly zeros: look |
| Diet Pepsi | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 0 / – / – / – / – / 95 / 0 / – / 0 / – | 0 / – / – / – / – / 95 / 0 / – / 0 / – | A: numbers found after the name (line 430); check the size, mostly zeros: look; B: numbers found after the name (line 430); check the size, mostly zeros: look |
| Mountain Dew | 22 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 310 / – / – / – / – / 110 / 84 / – / 84 / – | 310 / – / – / – / – / 110 / 84 / – / 84 / – | A: numbers found after the name (line 431); check the size; B: numbers found after the name (line 431); check the size |
| Mountain Dew | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 450 / – / – / – / – / 160 / 123 / – / 123 / – | 450 / – / – / – / – / 160 / 123 / – / 123 / – | A: numbers found after the name (line 432); check the size; B: numbers found after the name (line 432); check the size |
| Starry | 22 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 270 / – / – / – / – / 65 / 71 / – / 71 / – | 270 / – / – / – / – / 65 / 71 / – / 71 / – | A: numbers found after the name (line 433); check the size; B: numbers found after the name (line 433); check the size |
| Starry | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 400 / – / – / – / – / 95 / 104 / – / 104 / – | 400 / – / – / – / – / 95 / 104 / – / 104 / – | A: numbers found after the name (line 434); check the size; B: numbers found after the name (line 434); check the size |
| Sweet Tea | 22 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 140 / – / – / – / – / 20 / 37 / – / 35 / – | 140 / – / – / – / – / 20 / 37 / – / 35 / – | A: numbers found after the name (line 435); check the size; B: numbers found after the name (line 435); check the size |
| Sweet Tea | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 200 / – / – / – / – / 30 / 53 / – / 50 / – | 200 / – / – / – / – / 30 / 53 / – / 50 / – | A: numbers found after the name (line 436); check the size; B: numbers found after the name (line 436); check the size |
| Unsweetened Tea | 22 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 5 / – / – / – / – / 20 / 2 / – / 0 / – | 5 / – / – / – / – / 20 / 2 / – / 0 / – | A: numbers found after the name (line 437); check the size; B: numbers found after the name (line 437); check the size |
| Unsweetened Tea | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 10 / – / – / – / – / 30 / 3 / – / 0 / – | 10 / – / – / – / – / 30 / 3 / – / 0 / – | A: numbers found after the name (line 438); check the size; B: numbers found after the name (line 438); check the size |
| Original Howie Wings | per wing | the guide gives no fiber_g | 70 / 5 / 1.5 / – / 20 / 290 / 0 / – / 0 / 5 | 70 / 5 / 1.5 / – / 20 / 290 / 0 / – / 0 / 5 | A: numbers found after the name (line 337); check the size; B: numbers found after the name (line 337); check the size |
| Original Boneless Howie Wings | per wing | the guide gives no fiber_g | 60 / 2 / 0 / – / 15 / 270 / 5 / – / 0.5 / 5 | 60 / 2 / 0 / – / 15 / 270 / 5 / – / 0.5 / 5 | A: numbers found after the name (line 349); check the size; B: numbers found after the name (line 349); check the size |
| Spicy Chicken Tenders | per tender, avg | the guide gives no fiber_g, sugars_g | 130 / 7 / 1.5 / – / 20 / 370 / 9 / – / – / 8 | 130 / 7 / 1.5 / – / 20 / 370 / 9 / – / – / 8 | A: numbers found after the name (line 356); check the size; B: numbers found after the name (line 356); check the size |
| Howie Bread | 1 piece (16 per order) | the guide gives no fiber_g | 70 / 1.5 / 0 / – / 2.5 / 95 / 12 / – / 0.5 / 2 | 70 / 1.5 / 0 / – / 2.5 / 95 / 12 / – / 0.5 / 2 | A: numbers found after the name (line 370); check the size; B: numbers found after the name (line 370); check the size |
| 3 Cheeser Howie Bread | 1 piece (16 per order) | the guide gives no fiber_g | 90 / 3 / 1 / – / 5 / 130 / 12 / – / 0.5 / 3 | 90 / 3 / 1 / – / 5 / 130 / 12 / – / 0.5 / 3 | A: numbers found after the name (line 377); check the size; B: numbers found after the name (line 377); check the size |
| Asiago Howie Bread | 1 piece (16 per order) | the guide gives no fiber_g | 80 / 2 / 1 / – / 2.5 / 75 / 12 / – / 0.5 / 3 | 80 / 2 / 1 / – / 2.5 / 75 / 12 / – / 0.5 / 3 | A: numbers found after the name (line 378); check the size; B: numbers found after the name (line 378); check the size |
| Cajun Howie Bread | 1 piece (16 per order) | the guide gives no fiber_g | 60 / 1 / 0 / – / 0 / 75 / 11 / – / 0.5 / 2 | 60 / 1 / 0 / – / 0 / 75 / 11 / – / 0.5 / 2 | A: numbers found after the name (line 379); check the size; B: numbers found after the name (line 379); check the size |
| Cinnamon Howie Bread | 1 piece (16 per order) | the guide gives no fiber_g | 70 / 1 / 0 / – / 0 / 45 / 13 / – / 2 / 2 | 70 / 1 / 0 / – / 0 / 45 / 13 / – / 2 / 2 | A: numbers found after the name (line 380); check the size; B: numbers found after the name (line 380); check the size |
| Deep Dish 3 Cheeser | 1 piece (16 per order) | the guide gives no fiber_g | 140 / 6 / 2.5 / – / 15 / 220 / 17 / – / 1 / 6 | 140 / 6 / 2.5 / – / 15 / 220 / 17 / – / 1 / 6 | A: numbers found after the name (line 381); check the size; B: numbers found after the name (line 381); check the size |
| Stuffed Howie Bread | 1 piece (16 per order) | the guide gives no fiber_g | 130 / 5 / 2.5 / – / 15 / 190 / 15 / – / 0.5 / 6 | 130 / 5 / 2.5 / – / 15 / 190 / 15 / – / 0.5 / 6 | A: numbers found after the name (line 382); check the size; B: numbers found after the name (line 382); check the size |
| Stuffed Howie Bread & Bacon | 1 piece (16 per order) | the guide gives no fiber_g | 100 / 4 / 1.5 / – / 10 / 150 / 12 / – / 0.5 / 4 | 100 / 4 / 1.5 / – / 10 / 150 / 12 / – / 0.5 / 4 | A: numbers found after the name (line 383); check the size; B: numbers found after the name (line 383); check the size |
| Stuffed Howie Bread & Jalapeño | 1 piece (16 per order) | the guide gives no fiber_g | 90 / 3.5 / 1.5 / – / 10 / 140 / 12 / – / 0.5 / 4 | 90 / 3.5 / 1.5 / – / 10 / 140 / 12 / – / 0.5 / 4 | A: numbers found after the name (line 384); check the size; B: numbers found after the name (line 384); check the size |
| Stuffed Howie Bread & Pepperoni | 1 piece (16 per order) | the guide gives no fiber_g | 100 / 3.5 / 1.5 / – / 10 / 160 / 12 / – / 0.5 / 4 | 100 / 3.5 / 1.5 / – / 10 / 160 / 12 / – / 0.5 / 4 | A: numbers found after the name (line 385); check the size; B: numbers found after the name (line 385); check the size |
| BBQ | per cup | the guide gives no fiber_g | 80 / 0 / 0 / – / 0 / 340 / 20 / – / 19 / 0 | 80 / 0 / 0 / – / 0 / 340 / 20 / – / 19 / 0 | A: numbers found after the name (line 393); check the size; B: numbers found after the name (line 393); check the size |
| Blue Cheese | per cup | the guide gives no fiber_g | 200 / 21 / 4 / – / 25 / 440 / 2 / – / 1 / 1 | 200 / 21 / 4 / – / 25 / 440 / 2 / – / 1 / 1 | A: numbers found after the name (line 394); check the size; B: numbers found after the name (line 394); check the size |
| Buffalo Sauce | per cup | the guide gives no fiber_g | 60 / 6 / 1 / – / 0 / 1280 / 2 / – / 1 / 0 | 60 / 6 / 1 / – / 0 / 1280 / 2 / – / 1 / 0 | A: numbers found after the name (line 395); check the size; B: numbers found after the name (line 395); check the size |
| Cheese Sauce | per cup | the guide gives no fiber_g | 140 / 9 / 5 / – / 5 / 890 / 12 / – / 5 / 1 | 140 / 9 / 5 / – / 5 / 890 / 12 / – / 5 / 1 | A: numbers found after the name (line 396); check the size; B: numbers found after the name (line 396); check the size |
| Garlic Sauce | per cup | the guide gives no fiber_g | 230 / 25 / 4 / – / 0 / 380 / 0 / – / 0 / 0 | 230 / 25 / 4 / – / 0 / 380 / 0 / – / 0 / 0 | A: numbers found after the name (line 397); check the size; B: numbers found after the name (line 397); check the size |
| Icing | per cup | the guide gives no fiber_g | 150 / 1.5 / 0 / – / 0 / 0 / 34 / – / 33 / 0 | 150 / 1.5 / 0 / – / 0 / 0 / 34 / – / 33 / 0 | A: numbers found after the name (line 398); check the size; B: numbers found after the name (line 398); check the size |
| Pizza Sauce | per cup | the guide gives no fiber_g | 35 / 0 / 0 / – / 0 / 190 / 7 / – / 4 / 1 | 35 / 0 / 0 / – / 0 / 190 / 7 / – / 4 / 1 | A: numbers found after the name (line 399); check the size; B: numbers found after the name (line 399); check the size |
| Ranch | per cup | the guide gives no fiber_g | 200 / 22 / 3.5 / – / 10 / 320 / 2 / – / 0.5 / 0 | 200 / 22 / 3.5 / – / 10 / 320 / 2 / – / 0.5 / 0 | A: numbers found after the name (line 400); check the size; B: numbers found after the name (line 400); check the size |
| 4 oz. Marinara Sauce | per cup | the guide gives no fiber_g | 45 / 0 / 0 / – / 0 / 490 / 735 / – / 5 / 2 | 45 / 0 / 0 / – / 0 / 490 / 735 / – / 5 / 2 | A: numbers found after the name (line 401); check the size; B: numbers found after the name (line 401); check the size |
| 1000 Island | per packet | the guide gives no fiber_g | 210 / 21 / 4 / – / 20 / 300 / 6 / – / 6 / 0 | 210 / 21 / 4 / – / 20 / 300 / 6 / – / 6 / 0 | A: numbers found after the name (line 407); check the size; B: numbers found after the name (line 407); check the size |
| Caesar | per packet | the guide gives no fiber_g | 180 / 18 / 3 / – / 10 / 400 / 2 / – / 0.5 / 1 | 180 / 18 / 3 / – / 10 / 400 / 2 / – / 0.5 / 1 | A: numbers found after the name (line 408); check the size; B: numbers found after the name (line 408); check the size |
| Fat Free Italian | per packet | the guide gives no fiber_g | 15 / 0 / 0 / – / 0 / 350 / 4 / – / 3 / 0 | 15 / 0 / 0 / – / 0 / 350 / 4 / – / 3 / 0 | A: numbers found after the name (line 409); check the size; B: numbers found after the name (line 409); check the size |
| Fat Free Ranch | per packet | the guide gives no fiber_g | 40 / 0 / 0 / – / 0 / 490 / 9 / – / 3 / 0 | 40 / 0 / 0 / – / 0 / 490 / 9 / – / 3 / 0 | A: numbers found after the name (line 410); check the size; B: numbers found after the name (line 410); check the size |
| Greek | per packet | the guide gives no fiber_g | 220 / 24 / 4 / – / 2.5 / 540 / 1 / – / 0.5 / 0 | 220 / 24 / 4 / – / 2.5 / 540 / 1 / – / 0.5 / 0 | A: numbers found after the name (line 411); check the size; B: numbers found after the name (line 411); check the size |
| Honey Mustard | per packet | the guide gives no fiber_g | 180 / 0 / 2.5 / – / 10 / 220 / 7 / – / 7 / 0 | 180 / 0 / 2.5 / – / 10 / 220 / 7 / – / 7 / 0 | A: numbers found after the name (line 412); check the size; B: numbers found after the name (line 412); check the size |
| Italian | per packet | the guide gives no fiber_g | 130 / 13 / 2.5 / – / 0 / 370 / 3 / – / 2 / 0.5 | 130 / 13 / 2.5 / – / 0 / 370 / 3 / – / 2 / 0.5 | A: numbers found after the name (line 413); check the size; B: numbers found after the name (line 413); check the size |
| Ranch | per packet | the guide gives no fiber_g | 200 / 22 / 3.5 / – / 10 / 320 / 2 / – / 1 / 0 | 200 / 22 / 3.5 / – / 10 / 320 / 2 / – / 1 / 0 | A: numbers found after the name (line 414); check the size; B: numbers found after the name (line 414); check the size |
| Blue Cheese | per packet | the guide gives no fiber_g | 200 / 21 / 4 / – / 25 / 430 / 2 / – / 1 / 1 | 200 / 21 / 4 / – / 25 / 430 / 2 / – / 1 / 1 | A: numbers found after the name (line 415); check the size; B: numbers found after the name (line 415); check the size |
| Howie Cookie – Chocolate Chip | 1 slice (8 slices total) | the guide gives no fiber_g | 180 / 8 / 4 / – / 10 / 660 / 28 / – / 17 / 2 | 180 / 8 / 4 / – / 10 / 660 / 28 / – / 17 / 2 | A: numbers found after the name (line 421); check the size; B: numbers found after the name (line 421); check the size |
| Cheese Only | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 160 / 5 / 3 / 0 / 15 / 200 / 21 / 1 / 1 / 8 | B: numbers found after the name (line 42); check the size |
| Anchovies | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 230 / 0 / 0 / 0 / 0.5 | B: numbers found after the name (line 51); check the size |
| Bacon | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 10 / 1 / 0 / 0 / 0 / 30 / 0 / 0 / 0 / 0.5 | B: numbers found after the name (line 52); check the size |
| Black Olive | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 5 / 0.5 / 0 / 0 / 0 / 25 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 53); check the size |
| Cheddar | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 30 / 2.5 / 1.5 / 0 / 5 / 45 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 54); check the size |
| Chicken | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 5 / 50 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 55); check the size |
| Feta | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 20 / 1 / 1 / 0 / 2.5 / 85 / 0.5 / 0 / 0 / 2 | B: numbers found after the name (line 56); check the size |
| Green Olive | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 5 / 0.5 / 0 / – / 0 / 55 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 57); check the size |
| Green Pepper | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0.5 / 0 / 0 / 0 | B: numbers found after the name (line 58); check the size, mostly zeros: look |
| Ground Beef | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 15 / 1.5 / 0.5 / 0 / 2.5 / 90 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 59); check the size |
| Ham | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 2.5 / 75 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 60); check the size |
| Jalapeños | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 120 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 61); check the size, mostly zeros: look |
| Meatball | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 20 / 1.5 / 0.5 / 0 / 2.5 / 55 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 62); check the size |
| Mild Pepper Rings | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 105 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 63); check the size, mostly zeros: look |
| Mushroom | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 64); check the size, mostly zeros: look |
| Pepperoni | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 5 / 0.5 / 0 / 0 / 0 / 45 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 65); check the size |
| Classic Cupped Pepperoni | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 20 / 1.8 / 0.7 / 0 / 4 / 74 / 0 / 0 / 0 / 0.7 | B: numbers found after the name (line 66); check the size |
| Pineapple | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0.5 / 0 | B: numbers found after the name (line 67); check the size, mostly zeros: look |
| Red Onion | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 68); check the size, mostly zeros: look |
| Sausage | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 30 / 2.5 / 1 / 0 / 5 / 65 / 0 / 0 / 0 / 0.5 | B: numbers found after the name (line 69); check the size |
| Steak | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 15 / 1 / 0 / 0 / 2.5 / 0 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 70); check the size |
| Tomato | 1 slice (8″ Junior, 4 slices) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0.5 / 0 | B: numbers found after the name (line 71); check the size |
| Cheese Only | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 150 / 4.5 / 2.5 / 0 / 15 / 200 / 21 / 1 / 1 / 7 | B: numbers found after the name (line 78); check the size |
| Gluten Free – Cheese Only | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 90 / 5 / 2.5 / 0 / 15 / 160 / 7 / 0.5 / 2 / 4 | B: numbers found after the name (line 79); check the size |
| Anchovies | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 230 / 0 / 0 / 0 / 0.5 | B: numbers found after the name (line 51); check the size |
| Bacon | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 25 / 2.5 / 0.5 / 0 / 2.5 / 85 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 82); check the size |
| Black Olive | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 10 / 0.5 / 0 / 0 / 0 / 30 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 83); check the size |
| Cheddar | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 40 / 3 / 1.5 / 0 / 10 / 60 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 84); check the size |
| Chicken | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 5 / 50 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 55); check the size |
| Feta | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 25 / 1.5 / 1 / 0 / 5 / 115 / 0.5 / 0 / 0 / 2 | B: numbers found after the name (line 86); check the size |
| Green Olive | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 5 / 0.5 / 0 / – / 0 / 75 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 87); check the size |
| Green Pepper | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0.5 / 0 / 0 / 0 | B: numbers found after the name (line 58); check the size, mostly zeros: look |
| Ground Beef | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 15 / 1.5 / 0.5 / 0 / 2.5 / 90 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 59); check the size |
| Ham | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 2.5 / 75 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 60); check the size |
| Jalapeños | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 120 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 61); check the size, mostly zeros: look |
| Meatball | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 40 / 3 / 1 / 0 / 5 / 115 / 0.5 / 0.5 / 0 / 3 | B: numbers found after the name (line 92); check the size |
| Mild Pepper Rings | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 105 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 63); check the size, mostly zeros: look |
| Mushroom | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 64); check the size, mostly zeros: look |
| Pepperoni | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 10 / 0.5 / 0 / 0 / 0 / 60 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 95); check the size |
| Classic Cupped Pepperoni | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 25 / 2 / 0.8 / 0 / 5 / 95 / 0 / 0 / 0 / 0.8 | B: numbers found after the name (line 96); check the size |
| Pineapple | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0.5 / 0 | B: numbers found after the name (line 67); check the size, mostly zeros: look |
| Red Onion | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 68); check the size, mostly zeros: look |
| Sausage | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 30 / 2.5 / 1 / 0 / 5 / 65 / 0 / 0 / 0 / 0.5 | B: numbers found after the name (line 69); check the size |
| Steak | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 15 / 1 / 0 / 0 / 2.5 / 0 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 70); check the size |
| Tomato | 1 slice (10″ Small, 6 slices) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 101); check the size |
| Cheese Only | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 180 / 5 / 3 / 0 / 15 / 230 / 25 / 1 / 2 / 9 | B: numbers found after the name (line 108); check the size |
| Thin Crust – Cheese Only | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 140 / 7 / 3.5 / 0 / 15 / 180 / 13 / 1 / 1 / 6 | B: numbers found after the name (line 109); check the size |
| Anchovies | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 230 / 0 / 0 / 0 / 0.5 | B: numbers found after the name (line 51); check the size |
| Bacon | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 25 / 2.5 / 0.5 / 0 / 2.5 / 85 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 82); check the size |
| Black Olive | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 10 / 0.5 / 0 / 0 / 0 / 30 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 83); check the size |
| Cheddar | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 45 / 3.5 / 2 / 0 / 10 / 70 / 0 / 0 / 0 / 3 | B: numbers found after the name (line 114); check the size |
| Chicken | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 5 / 50 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 55); check the size |
| Feta | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 25 / 1.5 / 1 / 0 / 5 / 115 / 0.5 / 0 / 0 / 2 | B: numbers found after the name (line 86); check the size |
| Green Olive | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 5 / 0.5 / 0 / – / 0 / 75 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 87); check the size |
| Green Pepper | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0.5 / 0 / 0 / 0 | B: numbers found after the name (line 58); check the size, mostly zeros: look |
| Ground Beef | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 15 / 1.5 / 0.5 / 0 / 2.5 / 90 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 59); check the size |
| Ham | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 2.5 / 75 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 60); check the size |
| Jalapeños | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 120 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 61); check the size, mostly zeros: look |
| Meatball | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 40 / 3 / 1 / 0 / 5 / 115 / 0.5 / 0.5 / 0 / 3 | B: numbers found after the name (line 92); check the size |
| Mild Pepper Rings | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 105 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 63); check the size, mostly zeros: look |
| Mushroom | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 64); check the size, mostly zeros: look |
| Pepperoni | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 10 / 0.5 / 0 / 0 / 0 / 60 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 95); check the size |
| Classic Cupped Pepperoni | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 29 / 2.7 / 1 / 0 / 6 / 108 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 126); check the size |
| Pineapple | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0.5 / 0 | B: numbers found after the name (line 67); check the size, mostly zeros: look |
| Red Onion | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 68); check the size, mostly zeros: look |
| Sausage | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 30 / 2.5 / 1 / 0 / 5 / 65 / 0 / 0 / 0 / 0.5 | B: numbers found after the name (line 69); check the size |
| Steak | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 15 / 1 / 0 / 0 / 2.5 / 0 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 70); check the size |
| Tomato | 1 slice (12″ Medium, 8 slices) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 101); check the size |
| Cheese Only | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 250 / 7 / 4 / 0 / 25 / 320 / 34 / 2 / 2 / 12 | B: numbers found after the name (line 138); check the size |
| Thin Crust – Cheese Only | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 200 / 10 / 4.5 / 0 / 25 / 260 / 18 / 1 / 2 / 9 | B: numbers found after the name (line 139); check the size |
| Stuffed Crust – Cheese Only | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 300 / 12 / 7 / 0 / 40 / 500 / 35 / 2 / 3 / 15 | B: numbers found after the name (line 140); check the size |
| Anchovies | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 290 / 0 / 0 / 0 / 0.5 | B: numbers found after the name (line 142); check the size |
| Bacon | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 20 / 2 / 0.5 / 0 / 2.5 / 65 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 143); check the size |
| Black Olive | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 15 / 1 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 144); check the size |
| Cheddar | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 60 / 4.5 / 2.5 / 0 / 15 / 90 / 0 / 0 / 0 / 4 | B: numbers found after the name (line 145); check the size |
| Chicken | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 15 / 0 / 0 / 0 / 10 / 85 / 0 / 0 / 0 / 3 | B: numbers found after the name (line 146); check the size |
| Feta | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 35 / 2 / 1.5 / 0 / 10 / 170 / 1 / 0 / 0.5 / 3 | B: numbers found after the name (line 147); check the size |
| Green Olive | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 10 / 1 / 0 / – / 0 / 110 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 148); check the size |
| Green Pepper | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0.5 / 0 / 0 / 0 | B: numbers found after the name (line 58); check the size, mostly zeros: look |
| Ground Beef | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 30 / 2 / 1 / 0 / 5 / 160 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 150); check the size |
| Ham | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 15 / 0.5 / 0 / 0 / 5 / 130 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 151); check the size |
| Jalapeños | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 180 / 0.5 / 0 / 0 / 0 | B: numbers found after the name (line 152); check the size, mostly zeros: look |
| Meatball | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 60 / 4.5 / 1.5 / 0 / 10 / 170 / 1 / 0.5 / 0 / 5 | B: numbers found after the name (line 153); check the size |
| Mild Pepper Rings | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 160 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 154); check the size, mostly zeros: look |
| Mushroom | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 64); check the size, mostly zeros: look |
| Pepperoni | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 10 / 1 / 0 / 0 / 2.5 / 85 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 156); check the size |
| Classic Cupped Pepperoni | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 36 / 3.3 / 1.2 / 0 / 7 / 137 / 0 / 0 / 0 / 1.2 | B: numbers found after the name (line 157); check the size |
| Pineapple | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 158); check the size |
| Red Onion | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0.5 / 0 / 0 / 0 | B: numbers found after the name (line 159); check the size, mostly zeros: look |
| Sausage | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 40 / 3.5 / 1 / 0 / 5 / 90 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 160); check the size |
| Steak | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 25 / 1.5 / 0.5 / 0 / 10 / 5 / 0 / 0 / 0 / 3 | B: numbers found after the name (line 161); check the size |
| Tomato | 1 slice (14″ Large, 8 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 3 / 0.5 / 2 / 0.5 | B: numbers found after the name (line 162); check the size |
| Cheese Only | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 350 / 10 / 6 / 0 / 35 / 450 / 48 / 3 / 3 / 17 | B: numbers found after the name (line 169); check the size |
| Anchovies | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 10 / 0.5 / 0 / 0 / 0 / 350 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 171); check the size |
| Bacon | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 25 / 2 / 0.5 / 0 / 2.5 / 80 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 172); check the size |
| Black Olive | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 15 / 1.5 / 0 / 0 / 0 / 60 / 0.5 / 0 / 0 / 0 | B: numbers found after the name (line 173); check the size |
| Cheddar | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 80 / 6 / 3.5 / 0 / 20 / 125 / 0 / 0 / 0 / 5 | B: numbers found after the name (line 174); check the size |
| Chicken | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 20 / 0 / 0 / 0 / 10 / 110 / 0 / 0 / 0 / 3 | B: numbers found after the name (line 175); check the size |
| Feta | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 45 / 2.5 / 2 / 0 / 10 / 220 / 1 / 0 / 0.5 / 4 | B: numbers found after the name (line 176); check the size |
| Green Olive | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 15 / 1.5 / 0 / – / 0 / 140 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 177); check the size |
| Green Pepper | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0.5 / 0.5 / 0 | B: numbers found after the name (line 178); check the size |
| Ground Beef | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 35 / 3 / 1 / 0 / 5 / 200 / 0.5 / 0 / 0 / 2 | B: numbers found after the name (line 179); check the size |
| Ham | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 15 / 0.5 / 0 / 0 / 10 / 170 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 180); check the size |
| Jalapeños | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 240 / 0.5 / 0 / 0 / 0 | B: numbers found after the name (line 181); check the size, mostly zeros: look |
| Meatball | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 80 / 6 / 2 / 0 / 15 / 230 / 2 / 1 / 0 / 6 | B: numbers found after the name (line 182); check the size |
| Mild Pepper Rings | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 210 / 0.5 / 0 / 0 / 0 | B: numbers found after the name (line 183); check the size, mostly zeros: look |
| Mushroom | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 0 / 0 / 0 / – / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 64); check the size, mostly zeros: look |
| Pepperoni | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 15 / 1.5 / 0.5 / 0 / 2.5 / 105 / 0 / 0 / 0 / 0.5 | B: numbers found after the name (line 185); check the size |
| Classic Cupped Pepperoni | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 45 / 4.2 / 1.5 / 0 / 9 / 171 / 0 / 0 / 0 / 1.5 | B: numbers found after the name (line 186); check the size |
| Pineapple | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 2 / 0 | B: numbers found after the name (line 187); check the size |
| Red Onion | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0.5 / 0 / 0 / 0 | B: numbers found after the name (line 159); check the size, mostly zeros: look |
| Sausage | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 60 / 6 / 2 / 0 / 10 / 140 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 189); check the size |
| Steak | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 30 / 2 / 1 / 0 / 10 / 10 / 0 / 0 / 0 / 3 | B: numbers found after the name (line 190); check the size |
| Tomato | 1 slice (16″ XL, 8 slices) | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 0 / 3 / 0.5 / 2 / 0.5 | B: numbers found after the name (line 191); check the size |
| Cheese Only | 1 slice (Deep Dish, 8 slices) | only in draft B | not found | 330 / 16 / 6 / 0 / 30 / 370 / 36 / 1 / 2 / 13 | B: numbers found after the name (line 198); check the size |
| Bacon | 1 slice (Deep Dish, 8 slices) | only in draft B | not found | 20 / 2 / 0.5 / 0 / 2.5 / 65 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 143); check the size |
| Pepperoni | 1 slice (Deep Dish, 8 slices) | only in draft B | not found | 10 / 1 / 0 / 0 / 2.5 / 85 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 156); check the size |
| Sausage | 1 slice (Deep Dish, 8 slices) | only in draft B | not found | 40 / 3.5 / 1 / 0 / 5 / 90 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 160); check the size |
| Meatball | 1 slice (Deep Dish, 8 slices) | only in draft B | not found | 60 / 4.5 / 1.5 / 0 / 10 / 170 / 1 / 0.5 / 0 / 5 | B: numbers found after the name (line 153); check the size |
| Chicken | 1 slice (Deep Dish, 8 slices) | only in draft B | not found | 15 / 0 / 0 / 0 / 10 / 85 / 0 / 0 / 0 / 3 | B: numbers found after the name (line 146); check the size |
| Cheddar | 1 slice (Deep Dish, 8 slices) | only in draft B | not found | 60 / 5 / 3 / 0 / 15 / 105 / 0 / 0 / 0 / 4 | B: numbers found after the name (line 205); check the size |
| Chicken Parmesan | ½ sub (Regular) | only in draft B | not found | 380 / 15 / 5 / 0 / 25 / 700 / 46 / 3 / 5 / 15 | B: numbers found after the name (line 282); check the size |
| Chicken Parmesan | ½ sub (Large) | only in draft B | not found | 600 / 22 / 9 / 1 / 75 / 1050 / 67 / 5 / 7 / 31 | B: numbers found after the name (line 283); check the size |
| Asian | per wing | only in draft B | not found | 10 / 0 / 0 / – / 0 / 85 / 2 / – / 2 / 0 | B: numbers found after the name (line 339); check the size |
| BBQ | per wing | only in draft B | not found | 10 / 0 / 0 / – / 0 / 35 / 2 / – / 2 / 0 | B: numbers found after the name (line 340); check the size |
| Buffalo | per wing | only in draft B | not found | 5 / 0.5 / 0 / – / 0 / 125 / 0 / – / 0 / 0 | B: numbers found after the name (line 341); check the size |
| Sriracha | per wing | only in draft B | not found | 0 / 0 / 0 / – / 0 / 115 / 0.5 / – / 0.5 / 0 | B: numbers found after the name (line 342); check the size |
| Cheese Only | 1 Serving (No Dough Bowl, 2 servings per bowl) | both read it the same, but its protein, carbs and fat make 243 kcal, not 300 | 300 / 19 / 12 / – / 70 / 1070 / 14 / 4 / 7 / 4 | 300 / 19 / 12 / – / 70 / 1070 / 14 / 4 / 7 / 4 | A: numbers found after the name (line 218); check the size; B: numbers found after the name (line 218); check the size |
| Italian | ½ sub (Large) | both read it the same, but its protein, carbs and fat make 1413 kcal, not 690 | 690 / 25 / 9 / 0 / 75 / 1310 / 260 / 4 / 3 / 37 | 690 / 25 / 9 / 0 / 75 / 1310 / 260 / 4 / 3 / 37 | A: numbers found after the name (line 279); check the size; B: numbers found after the name (line 279); check the size |
| Meatball | ½ sub (Regular) | both read it the same, but its protein, carbs and fat make 1021 kcal, not 500 | 500 / 21 / 8 / 0.5 / 40 / 1190 / 186 / 2 / 2 / 22 | 500 / 21 / 8 / 0.5 / 40 / 1190 / 186 / 2 / 2 / 22 | A: numbers found after the name (line 280); check the size; B: numbers found after the name (line 280); check the size |

## Spot check (4 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Steak & Cheese | ½ sub (Regular) | 310 / 8 / 4 / 0 / 40 / 780 / 39 / 2 / 2 / 19 |
| Ham & Cheese | ½ sub (Large) | 580 / 24 / 9 / 0 / 70 / 1860 / 62 / 3 / 5 / 32 |
| Howie Maui | 14″ Large (8 slices) | 290 / 10 / 5 / – / 30 / 490 / 35 / 2 / 4 / 15 |
| Chef | Large | 630 / 38 / 19 / – / 145 / 1810 / 25 / 10 / 12 / 44 |
