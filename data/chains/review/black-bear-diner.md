# Black Bear Diner: lines for a person

Guide: https://blackbeardiner.com/wp-content/uploads/2025/05/Nutrition_WEB_Oct-2024.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (158)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/black-bear-diner.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Bigfoot Chicken Fried Steak & Eggs | 1 serving | both read numbers that can't be right: sugars 83 g above carbs 16 g | 1180 / 70 / 14 / 615 / 5610 / 226 / 16 / 24 / 83 / 46 | 1180 / 70 / 14 / 615 / 5610 / 226 / 16 / 24 / 83 / 46 | A: numbers found after the name (line 8); check the size; B: numbers found after the name (line 8); check the size |
| Sub Dr. Praeger's Veggie Patty | 1 serving | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 210 / 7 / 1 / 0 / 0 / 280 / 25 / 7 / 4 / 10 | 210 / 7 / 1 / 0 / 0 / 0 / 280 / 25 / 7 / 4 | A: numbers found after the name (line 159); check the size; B: numbers found after the name (line 159); check the size |
| Sub Lettuce Wrapped - Iceberg | 3 leaves | differ: sodium_mg, carbs_g, fiber_g | 3 / 0 / 0 / 0 / 0 / 2 / 1 / 0 / 0 / 0 | 3 / 0 / 0 / 0 / 0 / 0 / 2 / 1 / 0 / 0 | A: numbers found after the name (line 160); check the size; B: numbers found after the name (line 160); check the size |
| Fat-Free Italian Dressing | 3 fl oz | the guide gives no protein_g | 145 / 0 / 0 / 0 / 0 / 870 / 12 / 0 / 9 / – | 145 / 0 / 0 / 0 / 0 / 870 / 12 / 0 / 9 / – | A: numbers found after the name (line 198); check the size; B: numbers found after the name (line 198); check the size |
| Mexican-style Chicken Tortilla | 1 serving | only in draft A | 240 / 4 / 2 / 0 / 40 / 820 / 34 / 4 / 6 / 18 | not found | A: numbers found after the name (line 222); check the size |
| 1 Packet of Saltine Crackers | add | only in draft A | 25 / 0.5 / 0 / 0 / 0 / 135 / 4 / 0 / 0 / 0 | not found | A: numbers found after the name (line 215); check the size |
| French Fries | 1 serving | only in draft A | 790 / 34 / 6 / 0 / 5 / 1810 / 109 / 11 / 1 / 12 | not found | A: numbers found after the name (line 227); check the size |
| Sweet Potato Fries | 1 serving | only in draft A | 875 / 43 / 7 / 0 / 0 / 1073 / 115 / 16 / 42 / 7 | not found | A: numbers found after the name (line 228); check the size |
| Cole Slaw | 1 serving | only in draft A | 190 / 15 / 2.5 / 0 / 5 / 115 / 14 / 2 / 12 / 1 | not found | A: numbers found after the name (line 230); check the size |
| Onion Rings | 1 serving | only in draft A | 1580 / 94 / 19 / 0 / 25 / 1970 / 158 / 33 / 19 / 22 | not found | A: numbers found after the name (line 265); check the size |
| Homemade Cole Slaw | 1 serving | only in draft A | 190 / 15 / 2.5 / 0 / 5 / 115 / 14 / 2 / 12 / 1 | not found | A: numbers found after the name (line 266); check the size |
| Tri-Tip & Chicken Strips | Low Range | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 710 / 30 / 10 / 5 / 120 / 2360 / 65 / 5 / 40 / 50 | 710 / 270 / 30 / 10 / 5 / 120 / 2360 / 65 / 5 / 40 | A: numbers found after the name (line 273); check the size; B: numbers found after the name (line 273); check the size |
| Tri-Tip & Chicken Strips | High Range | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, protein_g | 900 / 65 / 15 / 5 / 140 / 2135 / 30 / 5 / 5 / 55 | 900 / 585 / 65 / 15 / 5 / 140 / 2135 / 30 / 5 / 5 | A: not as drafted (line 273 lacks 900, 15, 140, 2135, 5, 55); B: not as drafted (line 273 lacks 900, 585, 15, 140, 2135, 5) |
| Tri-Tip & Shrimp | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 520 / 15 / 10 / 5 / 135 / 2275 / 60 / 5 / 25 / 45 | 520 / 225 / 15 / 10 / 5 / 135 / 2275 / 60 / 5 / 25 | A: numbers found after the name (line 275); check the size; B: numbers found after the name (line 275); check the size |
| BBQ Sauce | 2.00 fl oz | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 140 / 0 / 0 / 0 / 0 / 580 / 36 / 0 / 34 / 2 | 140 / 0 / 0 / 0 / 0 / 0 / 580 / 36 / 0 / 34 | A: numbers found after the name (line 277); check the size; B: numbers found after the name (line 277); check the size |
| Bacon Ranch | 2.00 fl oz | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g | 334 / 35 / 6 / 0 / 17 / 360 / 1 / 0 / 1 / 1 | 334 / 317 / 35 / 6 / 0 / 17 / 360 / 1 / 0 / 1 | A: numbers found after the name (line 278); check the size; B: numbers found after the name (line 278); check the size |
| Cocktail Sauce | 2.00 fl oz | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 76 / 0 / 0 / 0 / 0 / 686 / 19 / 0 / 15 / 0 | 76 / 0 / 0 / 0 / 0 / 0 / 686 / 19 / 0 / 15 | A: numbers found after the name (line 279); check the size; B: numbers found after the name (line 279); check the size |
| Bacon Ranch Dressing - 2 fl oz | 1 serving | only in draft A | 330 / 357 / 67 / 0 / 17 / 360 / 1 / 0 / 1 / 1 | not found | A: numbers found after the name (line 233); check the size |
| Bleu Cheese Dressing - Housemade - 2 fl oz | 1 serving | only in draft A | 250 / 26 / 5 / 0 / 14 / 418 / 2 / 0 / 2 / 2 | not found | A: numbers found after the name (line 234); check the size |
| 1000 Island Dressing - Housemade - 2 fl oz | 1 serving | only in draft A | 200 / 19 / 3 / 0 / 8 / 361 / 5 / 0 / 4 / 0 | not found | A: numbers found after the name (line 235); check the size |
| Balsamic Vinaigrette Dressing - 2 fl oz | 1 serving | only in draft A | 180 / 16 / 3 / 0 / 0 / 660 / 6 / 0 / 6 / 0 | not found | A: numbers found after the name (line 236); check the size |
| Fat-Free Honey Dijon Dressing - 2 fl oz | 1 serving | only in draft A | 90 / 0 / 0 / 0 / 0 / 500 / 20 / 0 / 17 / 0 | not found | A: numbers found after the name (line 237); check the size |
| Fat-Free Italian Dressing - 2 fl oz | 1 serving | only in draft A | 30 / 0 / 0 / 0 / 0 / 580 / 8 / 0 / 6 / 0 | not found | A: numbers found after the name (line 238); check the size |
| Oat Milk | 9V oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 190 / – / – / – / – / – / – / – / – / – | 190 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 368); check the size, mostly zeros: look; B: numbers found after the name (line 368); check the size, mostly zeros: look |
| Oat Milk | 14.5V oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 310 / – / – / – / – / – / – / – / – / – | 310 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 368); check the size, mostly zeros: look; B: numbers found after the name (line 368); check the size, mostly zeros: look |
| Coffee | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 372); check the size, mostly zeros: look; B: numbers found after the name (line 372); check the size, mostly zeros: look |
| Hot Chocolate | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 80 / – / – / – / – / – / – / – / – / – | 80 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 377); check the size, mostly zeros: look; B: numbers found after the name (line 377); check the size, mostly zeros: look |
| Iced Tea / Hot Tea | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 378); check the size, mostly zeros: look; B: numbers found after the name (line 378); check the size, mostly zeros: look |
| Sweet Tea | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 160 / – / – / – / – / – / – / – / – / – | 160 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 379); check the size, mostly zeros: look; B: numbers found after the name (line 379); check the size, mostly zeros: look |
| Huckleberry Lemonade | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 270 / – / – / – / – / – / – / – / – / – | 270 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 380); check the size, mostly zeros: look; B: numbers found after the name (line 380); check the size, mostly zeros: look |
| Lemonade | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 280 / – / – / – / – / – / – / – / – / – | 280 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 380); check the size, mostly zeros: look; B: numbers found after the name (line 380); check the size, mostly zeros: look |
| Arnold Palmer | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 280 / – / – / – / – / – / – / – / – / – | 280 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 382); check the size, mostly zeros: look; B: numbers found after the name (line 382); check the size, mostly zeros: look |
| Mountain Dew | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 300 / – / – / – / – / – / – / – / – / – | 300 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 383); check the size, mostly zeros: look; B: numbers found after the name (line 383); check the size, mostly zeros: look |
| Pepsi | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 280 / – / – / – / – / – / – / – / – / – | 280 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 384); check the size, mostly zeros: look; B: numbers found after the name (line 384); check the size, mostly zeros: look |
| Root Beer | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 280 / – / – / – / – / – / – / – / – / – | 280 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 385); check the size, mostly zeros: look; B: numbers found after the name (line 385); check the size, mostly zeros: look |
| Sierra Mist | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 280 / – / – / – / – / – / – / – / – / – | 280 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 386); check the size, mostly zeros: look; B: numbers found after the name (line 386); check the size, mostly zeros: look |
| Diet Pepsi | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 387); check the size, mostly zeros: look; B: numbers found after the name (line 387); check the size, mostly zeros: look |
| Dr. Pepper | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 280 / – / – / – / – / – / – / – / – / – | 280 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 388); check the size, mostly zeros: look; B: numbers found after the name (line 388); check the size, mostly zeros: look |
| Seasonal Cold Brew | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 600 / – / – / – / – / – / – / – / – / – | 600 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 392); check the size, mostly zeros: look; B: numbers found after the name (line 392); check the size, mostly zeros: look |
| Seasonal Cold Brew | High Range | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1050 / – / – / – / – / – / – / – / – / – | 1050 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 392); check the size, mostly zeros: look; B: numbers found after the name (line 392); check the size, mostly zeros: look |
| Wine, White, Chardonnay | 1 serving | only in draft A | – / – / – / – / – / – / – / – / – / – | not found | no numbers to look for |
| Wine, Red, Merlot | 1 serving | only in draft A | – / – / – / – / – / – / – / – / – / – | not found | no numbers to look for |
| Wine, Red, Cabernet Sauvignon | 1 serving | only in draft A | – / – / – / – / – / – / – / – / – / – | not found | no numbers to look for |
| Wine, White, Sauvignon Blanc | 1 serving | only in draft A | – / – / – / – / – / – / – / – / – / – | not found | no numbers to look for |
| Wine, Red, Pinot Noir | 1 serving | only in draft A | – / – / – / – / – / – / – / – / – / – | not found | no numbers to look for |
| Mimosa | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 130 / – / – / – / – / – / – / – / – / – | 130 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 400); check the size, mostly zeros: look; B: numbers found after the name (line 400); check the size, mostly zeros: look |
| 2% Milk | 16 oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 240 / – / – / – / – / – / – / – / – / – | 240 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 367); check the size, mostly zeros: look; B: numbers found after the name (line 367); check the size, mostly zeros: look |
| Apple Juice | 16 oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 230 / – / – / – / – / – / – / – / – / – | 230 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 371); check the size, mostly zeros: look; B: numbers found after the name (line 371); check the size, mostly zeros: look |
| Cranberry Juice | 16 oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 270 / – / – / – / – / – / – / – / – / – | 270 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 374); check the size, mostly zeros: look; B: numbers found after the name (line 374); check the size, mostly zeros: look |
| Fresh Squeezed Orange Juice | 10 oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 140 / – / – / – / – / – / – / – / – / – | 140 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 375); check the size, mostly zeros: look; B: numbers found after the name (line 375); check the size, mostly zeros: look |
| Fresh Squeezed Orange Juice | 16 oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 220 / – / – / – / – / – / – / – / – / – | 220 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 375); check the size, mostly zeros: look; B: numbers found after the name (line 375); check the size, mostly zeros: look |
| Stuffed Blackberry French Toast | 1 serving | only in draft B | not found | 1240 / – / – / – / – / – / – / – / – / – | B: numbers found after the name (line 38); check the size, mostly zeros: look |
| Chicken Fried Steak and Eggs | 1 serving | only in draft B | not found | 750 / 40 / 11 / 1 / 400 / 160 / 50 / 11 / 5 / 42 | B: numbers found after the name (line 59); check the size |
| Hickory Smoked Ham & Eggs | 1 serving | only in draft B | not found | 600 / 17 / 6 / 0.03 / 398 / 2562 / 19 / 1 / 13 / 34 | B: numbers found after the name (line 60); check the size |
| New York Steak and Eggs | 1 serving | only in draft B | not found | 212 / 16 / 5 / 0 / 328 / 1274 / 5 / 1 / 3 / 12 | B: numbers found after the name (line 61); check the size |
| Mild Patty Sausage and Eggs | 1 serving | only in draft B | not found | 750 / 64 / 23 / 0 / 470 / 1330 / 8 / 2 / 4 / 35 | B: numbers found after the name (line 63); check the size |
| Hot Patty Sausage and Eggs | 1 serving | only in draft B | not found | 760 / 64 / 23 / 0.03 / 470 / 1370 / 10 / 4 / 5 / 35 | B: numbers found after the name (line 64); check the size |
| Link Sausage and Eggs | 1 serving | only in draft B | not found | 380 / 31 / 12 / 0.03 / 372 / 540 / 6 / 1 / 3 / 21 | B: numbers found after the name (line 65); check the size |
| Chicken Sausage and Eggs | 1 serving | only in draft B | not found | 612 / 48 / 14 / 0 / 468 / 1334 / 5 / 1 / 5 / 38 | B: numbers found after the name (line 66); check the size |
| Corned Beef Hash | 1 serving | only in draft B | not found | 400 / 28 / 11 / 0.03 / 382 / 2082 / 7 / 1 / 3 / 34 | B: numbers found after the name (line 68); check the size |
| No meat, just 2 eggs | 1 serving | only in draft B | not found | 140 / 8 / 3 / 0.03 / 327 / 132 / 4 / 1 / 3 / 12 | B: numbers found after the name (line 69); check the size |
| Thick-Cut Smoked Bacon and Eggs | 1 serving | only in draft B | not found | 470 / 34 / 11 / 0.03 / 393 / 1160 / 5 / 1 / 3 / 34 | B: numbers found after the name (line 70); check the size |
| Country Red Potatoes | 11 oz | only in draft B | not found | 330 / 14 / 5 / 0 / 0 / 3160 / 51 / 1 / 2 / 1 | B: numbers found after the name (line 78); check the size |
| Strip-Cut Hash Browns | 11 oz | only in draft B | not found | 380 / 14 / 5 / 0 / 0 / 1990 / 56 / 0 / 0 / 4 | B: numbers found after the name (line 101); check the size |
| Blackberry- filled | 1 serving | only in draft B | not found | 970 / – / – / – / – / – / – / – / – / – | B: numbers found after the name (line 113); check the size, mostly zeros: look |
| Classic Diner Cheeseburger Basket | SINGLE PATTY | only in draft B | not found | 1110 / 60 / 10 / 0 / 90 / 2810 / 110 / 10 / 10 / 40 | B: numbers found after the name (line 162); check the size |
| Classic Diner Cheeseburger Basket | DOUBLE | only in draft B | not found | 1350 / 80 / 20 / 0 / 160 / 3130 / 110 / 10 / 10 / 60 | B: numbers found after the name (line 162); check the size |
| Saltine Crackers | 1 Packet | only in draft B | not found | 25 / 0.5 / 0 / 0 / – / 135 / 4 / 0 / 0 / 0 | B: numbers found after the name (line 215); check the size |
| Classic Minestrone | Cup | only in draft B | not found | 120 / 2 / 0 / 0 / 10 / 1360 / 22 / 4 / 6 / 4 | B: numbers found after the name (line 217); check the size |
| Classic Chicken Noodle | Cup | only in draft B | not found | 160 / 4 / 1 / 0 / 30 / 1660 / 18 / 0 / 2 / 12 | B: numbers found after the name (line 218); check the size |
| Classic Brocolli Cheese | Cup | only in draft B | not found | 300 / 22 / 6 / 0 / 20 / 1600 / 20 / 4 / 4 / 4 | B: numbers found after the name (line 219); check the size |
| Mediterranean-style Vegetable | Cup | only in draft B | not found | 200 / 3 / 0 / 0 / 0 / 820 / 34 / 6 / 12 / 8 | B: numbers found after the name (line 220); check the size |
| Classic Cream of Potato w Bacon | Cup | only in draft B | not found | 420 / 28 / 10 / 0 / 40 / 1660 / 36 / 2 / 6 / 8 | B: numbers found after the name (line 221); check the size |
| Mexican-style Chicken Tortilla | Cup | only in draft B | not found | 240 / 4 / 2 / 0 / 40 / 820 / 34 / 4 / 6 / 18 | B: numbers found after the name (line 222); check the size |
| Tomato Bisque w Basil | Cup | only in draft B | not found | 260 / 18 / 5 / 0 / 25 / 710 / 22 / 4 / 16 / 3 | B: numbers found after the name (line 223); check the size |
| Cole Slaw | 3 oz W | only in draft B | not found | 190 / 15 / 2.5 / 0 / 5 / 115 / 14 / 2 / 12 / 1 | B: numbers found after the name (line 230); check the size |
| Homemade Cole Slaw | 3 oz W | only in draft B | not found | 190 / 15 / 2.5 / 0 / 5 / 115 / 14 / 2 / 12 / 1 | B: numbers found after the name (line 266); check the size |
| Classic Minestrone | 1 cup | only in draft B | not found | 120 / 2 / 0 / 0 / 10 / 1360 / 22 / 4 / 6 / 4 | B: numbers found after the name (line 217); check the size |
| Classic Chicken Noodle | 1 cup | only in draft B | not found | 160 / 4 / 1 / 0 / 30 / 1660 / 18 / 0 / 2 / 12 | B: numbers found after the name (line 218); check the size |
| Mediterranean-style Vegetable | 1 cup | only in draft B | not found | 200 / 3 / 0 / 0 / 0 / 820 / 34 / 6 / 12 / 8 | B: numbers found after the name (line 220); check the size |
| Classic Cream of Potato w Bacon | 1 cup | only in draft B | not found | 420 / 28 / 10 / 0 / 40 / 1660 / 36 / 2 / 6 / 8 | B: numbers found after the name (line 221); check the size |
| Mexican-style Chicken Tortilla | 1 cup | only in draft B | not found | 240 / 4 / 2 / 0 / 40 / 820 / 34 / 4 / 6 / 18 | B: numbers found after the name (line 222); check the size |
| Tomato Bisque w Basil | 1 cup | only in draft B | not found | 260 / 18 / 5 / 0 / 25 / 710 / 22 / 4 / 16 / 3 | B: numbers found after the name (line 223); check the size |
| Wine, White, Chardonnay | Glass | only in draft B | not found | 150 / – / – / – / – / – / – / – / – / – | B: numbers found after the name (line 395); check the size, mostly zeros: look |
| Wine, White, Chardonnay | Bottle | only in draft B | not found | 310 / – / – / – / – / – / – / – / – / – | B: numbers found after the name (line 395); check the size, mostly zeros: look |
| Wine, Red, Merlot | Glass | only in draft B | not found | 150 / – / – / – / – / – / – / – / – / – | B: numbers found after the name (line 396); check the size, mostly zeros: look |
| Wine, Red, Merlot | Bottle | only in draft B | not found | 310 / – / – / – / – / – / – / – / – / – | B: numbers found after the name (line 396); check the size, mostly zeros: look |
| Wine, Red, Cabernet Sauvignon | Glass | only in draft B | not found | 150 / – / – / – / – / – / – / – / – / – | B: numbers found after the name (line 397); check the size, mostly zeros: look |
| Wine, Red, Cabernet Sauvignon | Bottle | only in draft B | not found | 310 / – / – / – / – / – / – / – / – / – | B: numbers found after the name (line 397); check the size, mostly zeros: look |
| Wine, White, Sauvignon Blanc | Glass | only in draft B | not found | 140 / – / – / – / – / – / – / – / – / – | B: numbers found after the name (line 398); check the size, mostly zeros: look |
| Wine, White, Sauvignon Blanc | Bottle | only in draft B | not found | 300 / – / – / – / – / – / – / – / – / – | B: numbers found after the name (line 398); check the size, mostly zeros: look |
| Wine, Red, Pinot Noir | Glass | only in draft B | not found | 140 / – / – / – / – / – / – / – / – / – | B: numbers found after the name (line 399); check the size, mostly zeros: look |
| Wine, Red, Pinot Noir | Bottle | only in draft B | not found | 300 / – / – / – / – / – / – / – / – / – | B: numbers found after the name (line 399); check the size, mostly zeros: look |
| Mini Volcano with Bacon and Sausage | 1 serving | only in draft B | not found | 1020 / 44 / 16 / 0 / 225 / 2330 / 190 / 5 / 65 / 31 | B: numbers found after the name (line 409); check the size |
| BYO Breakfast | 1 Egg | only in draft B | not found | 60 / 4 / 1 / 0 / 164 / 62 / 0 / 0 / 0 / 6 | B: numbers found after the name (line 410); check the size |
| BYO Breakfast | 1 Piece of bacon | only in draft B | not found | 80 / 6 / 2 / 0 / 15 / 260 / 0 / 0 / 0 / 6 | B: numbers found after the name (line 411); check the size |
| BYO Breakfast | 1 Sausage link | only in draft B | not found | 80 / 8 / 3 / 0 / 15 / 135 / 1 / 0 / 0 / 3 | B: numbers found after the name (line 412); check the size |
| BYO Breakfast | 1 Biscuit and gravy | only in draft B | not found | 660 / 32 / 10 / 9 / 16 / 2028 / 80 / 2 / 14 / 13 | B: numbers found after the name (line 413); check the size |
| BYO Breakfast | 1 Pancake | only in draft B | not found | 560 / 6 / 3 / 0 / 14 / 920 / 121 / 4 / 42 / 9 | B: numbers found after the name (line 414); check the size |
| BYO Breakfast | 1 French toast | only in draft B | not found | 400 / 5 / 1 / 0 / 112 / 320 / 83 / 33 / 24 / 10 | B: numbers found after the name (line 415); check the size |
| BYO Breakfast | 1 Waffle | only in draft B | not found | 280 / 11 / 3 / 0 / 46 / 452 / 40 / 2 / 17 / 5 | B: numbers found after the name (line 416); check the size |
| Chocolate Chip Pancakes | 1 serving | only in draft B | not found | 1020 / 30 / 20 / 0 / 30 / 1220 / 190 / 10 / 80 / – | B: numbers found after the name (line 417); check the size |
| Happy Cub Cake | 1 serving | only in draft B | not found | 470 / 5 / 3 / 0 / 12 / 631 / 103 / 3 / 37 / 6 | B: numbers found after the name (line 418); check the size |
| Sprinkle Cakes | 1 serving | only in draft B | not found | 860 / 20 / 10 / 0 / 30 / 1210 / 170 / 0 / 60 / – | B: numbers found after the name (line 419); check the size |
| Strawberry French Toast | 1 serving | only in draft B | not found | 500 / 19 / 6 / 3 / 150 / 310 / 27 / 2 / 25 / 9 | B: numbers found after the name (line 420); check the size |
| Ham Scrambler | 1 serving | only in draft B | not found | 420 / 20 / 7 / 0 / 200 / 1220 / 41 / 4 / 17 / 20 | B: numbers found after the name (line 421); check the size |
| Chicken Strips | 1 serving | only in draft B | not found | 770 / 30 / 10 / 0 / 40 / 2610 / 110 / 10 / 60 / 20 | B: numbers found after the name (line 423); check the size |
| Chicken Strips Bacon Ranch Dressing add | 1 serving | only in draft B | not found | 330 / 35 / 6 / 0 / 18 / 360 / 1 / 0 / 1 / 1 | B: numbers found after the name (line 424); check the size |
| Chicken Strips BBQ Sauce add | 1 serving | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 480 / 30 / 1 / 25 / 1 | B: numbers found after the name (line 425); check the size |
| Biscuit Bear Burger & Fries | 1 serving | only in draft B | not found | 670 / 30 / 10 / 10 / 60 / 1340 / 80 / 10 / 10 / – | B: numbers found after the name (line 426); check the size |
| Grilled Cheese Sandwich | 1 serving | only in draft B | not found | 580 / 37 / 14 / 0.5 / 45 / 1130 / 50 / 3 / 12 / 14 | B: numbers found after the name (line 427); check the size |
| Macaroni and Cheese | 1 serving | only in draft B | not found | 270 / 9 / 3.5 / 0 / 15 / 930 / 49 / 2 / 24 / 13 | B: numbers found after the name (line 428); check the size |
| Side - French Fries add | 6 oz W | only in draft B | not found | 210 / 9 / 2 / 0 / 1 / 490 / 30 / 3 / 0 / 3 | B: numbers found after the name (line 431); check the size |
| Side - Fresh Fruit add | 3 oz W | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 20 / 15 / 1 / 13 / 1 | B: numbers found after the name (line 432); check the size |
| Cub Sundae | Low Range | only in draft B | not found | 240 / 10 / 10 / 0 / 40 / 80 / 40 / 0 / 30 / 10 | B: numbers found after the name (line 443); check the size |
| Cub Sundae | High Range | only in draft B | not found | 270 / 10 / 10 / 0 / 40 / 90 / 40 / 0 / 30 / 10 | B: not as drafted (line 443 lacks 270, 90) |
| Scoop of Vanilla Ice Cream w/ Whipped Cream | 4 oz V ice cream, 2 oz V whipped cream | only in draft B | not found | 160 / 9 / 5 / 0 / 35 / 45 / 18 / 0 / 17 / 2 | B: numbers found after the name (line 446); check the size |
| Scoop of Huckleberry Heaven Ice Cream w/ Whipped Cream | 4 oz V ice cream, 2 oz V whipped cream | only in draft B | not found | 160 / 8 / 5 / 0 / 35 / 40 / 19 / 0 / 16 / 2 | B: numbers found after the name (line 447); check the size |
| Scoop of Chocolate Ice Cream w/ Whipped Cream | 4 oz V ice cream + 2 oz V whipped cream | only in draft B | not found | 170 / 9 / 5 / 0 / 35 / 65 / 19 / 0 / 13 / 2 | B: numbers found after the name (line 448); check the size |
| Ice Cream Topping: Chocolate Syrup | 1 oz V | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 30 / 22 / 0 / 20 / 0 | B: numbers found after the name (line 449); check the size |
| Ice Cream Topping: Rainbow Sprinkles | 1/4 oz V | only in draft B | not found | 30 / 1.5 / 0 / 0 / 0 / 0 / 4 / 0 / 3 / 0 | B: numbers found after the name (line 450); check the size |
| Strawberries and Whipped Cream | 1 serving | only in draft B | not found | 70 / 3.5 / 1 / 0 / 10 / 0 / 9 / 1 / 7 / 0 | B: numbers found after the name (line 451); check the size |
| Chocolate Milk | 12 oz | only in draft B | not found | 250 / 6 / 4 / 0 / 25 / 160 / 38 / 1 / 34 / 11 | B: numbers found after the name (line 453); check the size |
| Lemonade | 10 oz | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 45 / 35 / 0 / 34 / 0 | B: numbers found after the name (line 457); check the size |
| Cubs' Soft Drink | Low Range, 10 oz | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 30 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 458); check the size, mostly zeros: look |
| Cubs' Soft Drink | High Range, 10 oz | only in draft B | not found | 125 / 0 / 0 / 0 / 0 / 50 / 33 / 0 / 32 / 0 | B: not as drafted (line 458 lacks 125, 50, 33, 32) |
| 5 Layer Chocolate Cake | 1 serving | only in draft B | not found | 750 / – / – / – / – / – / – / – / – / – | B: numbers found after the name (line 467); check the size, mostly zeros: look |
| Seasonal Cheesecake | 1 serving | only in draft B | not found | 600 / – / – / – / – / – / – / – / – / – | B: numbers found after the name (line 468); check the size, mostly zeros: look |
| Seasonal Cheesecake | Low Range | only in draft B | not found | 600 / – / – / – / – / – / – / – / – / – | B: numbers found after the name (line 468); check the size, mostly zeros: look |
| Seasonal Cheesecake | High Range | only in draft B | not found | 1050 / – / – / – / – / – / – / – / – / – | B: numbers found after the name (line 468); check the size, mostly zeros: look |
| Bread Pudding | 1 serving | only in draft B | not found | 1340 / 59 / 31 / 1.5 / 380 / 820 / 175 / 4 / 116 / 25 | B: numbers found after the name (line 471); check the size |
| Blackberry Cobbler | 1 serving | only in draft B | not found | 420 / 26 / 11 / 0 / 40 / 850 / 95 / 8 / 53 / 8 | B: numbers found after the name (line 472); check the size |
| Cherry Cobbler | 1 serving | only in draft B | not found | 850 / 25 / 11 / 0 / 0 / 450 / 146 / 1 / 95 / 8 | B: numbers found after the name (line 473); check the size |
| Apple Cobbler | 1 serving | only in draft B | not found | 850 / 25 / 11 / 0 / 0 / 320 / 148 / 5 / 90 / 6 | B: numbers found after the name (line 474); check the size |
| Chocolate Cream Pie | 1 serving | only in draft B | not found | 490 / 35 / 19 / 0 / 15 / 1300 / 90 / 1 / 41 / 12 | B: numbers found after the name (line 475); check the size |
| Banana Cream Pie | 1 serving | only in draft B | not found | 400 / 31 / 16 / 0 / 5 / 1070 / 77 / 3 / 32 / 9 | B: numbers found after the name (line 476); check the size |
| Coconut Cream Pie | 1 serving | only in draft B | not found | 560 / 41 / 24 / 0 / 15 / 1330 / 92 / 2 / 46 / 12 | B: numbers found after the name (line 477); check the size |
| Scoop of Vanilla Ice Cream, a la mode | 1/2 cup | only in draft B | not found | 130 / 7 / 4 / 0 / 25 / 45 / 16 / 0 / 15 / 2 | B: numbers found after the name (line 478); check the size |
| Carnation Original Malt Powder | 1 serving | only in draft B | not found | 60 / 1.5 / 0.5 / 0 / 5 / 65 / 10 / 0 / 7 / 1 | B: numbers found after the name (line 480); check the size |
| Huckleberry Shake | 1 serving | only in draft B | not found | 520 / 27 / 17 / 0 / 105 / 180 / 60 / 0 / 50 / 11 | B: numbers found after the name (line 481); check the size |
| Strawberry Shake | 1 serving | only in draft B | not found | 640 / 30 / 17 / 0 / 105 / 190 / 85 / 0 / 81 / 11 | B: numbers found after the name (line 482); check the size |
| Chocolate Shake | 1 serving | only in draft B | not found | 710 / 31 / 18 / 0 / 105 / 220 / 105 / 2 / 92 / 12 | B: numbers found after the name (line 483); check the size |
| Vanilla Shake | 1 serving | only in draft B | not found | 520 / 30 / 17 / 0 / 105 / 190 / 57 / 0 / 53 / 11 | B: numbers found after the name (line 484); check the size |
| Cookies and Cream Vanilla Shake | 1 serving | only in draft B | not found | 740 / 39 / 20 / 0 / 105 / 380 / 91 / 1 / 72 / 12 | B: numbers found after the name (line 485); check the size |
| Hot Fudge Sundae | 1 serving | only in draft B | not found | 820 / 39 / 29 / 0 / 75 / 330 / 113 / 3 / 106 / 11 | B: numbers found after the name (line 488); check the size |
| Scoop of Huckleberry Heaven Ice Cream | 1/2 cup | only in draft B | not found | 130 / 6 / 4 / 0 / 25 / 40 / 17 / 0 / 14 / 2 | B: numbers found after the name (line 489); check the size |
| Scoop of Vanilla Bean Ice Cream | 1/2 cup | only in draft B | not found | 130 / 7 / 4 / 0 / 25 / 45 / 16 / 0 / 15 / 2 | B: numbers found after the name (line 490); check the size |
| Scoop of Chocolate Ice Cream | 1/2 cup | only in draft B | not found | 140 / 7 / 4.5 / 0 / 25 / 65 / 17 / 0 / 11 / 2 | B: numbers found after the name (line 491); check the size |
| Chocolate Sauce | 2V oz | only in draft B | not found | 189 / 1 / 0 / 0 / 0 / 28 / 47 / 2 / 39 / 1 | B: numbers found after the name (line 492); check the size |
| Strawberry Topping | 2V oz | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 14 / 0 / 14 / 0 | B: numbers found after the name (line 493); check the size |
| Bear Claw, Classic with almond filling | 1 serving | only in draft B | not found | 1110 / 57 / 20 / 0 / 105 / 970 / 132 / 4 / 71 / 17 | B: numbers found after the name (line 495); check the size |
| Bear Claw, Blackberry filling | 1 serving | only in draft B | not found | 970 / – / – / – / – / – / – / – / – / – | B: numbers found after the name (line 496); check the size, mostly zeros: look |
| Denver Omelette, Incl. biscuit & butter blend | 1 serving | both read it the same, but its protein, carbs and fat make 3236 kcal, not 460 | 460 / 284 / 114 / 0 / 760 / 1223 / 133 / 2 / 9 / 37 | 460 / 284 / 114 / 0 / 760 / 1223 / 133 / 2 / 9 / 37 | A: numbers found after the name (line 54); check the size; B: numbers found after the name (line 54); check the size |
| Loaded: Add Cheddar & Bacon | 1 serving | both read it the same, but its protein, carbs and fat make 636 kcal, not 200 | 200 / 16 / 7 / 0 / 45 / 442 / 1 / 0 / 0 / 122 | 200 / 16 / 7 / 0 / 45 / 442 / 1 / 0 / 0 / 122 | A: numbers found after the name (line 102); check the size; B: numbers found after the name (line 102); check the size |
| 1 Egg and 2 Sausage | 1 serving | both read it the same, but its protein, carbs and fat make 1805 kcal, not 240 | 240 / 193 / 73 / 0 / 194 / 339 / 5 / 1 / 3 / 12 | 240 / 193 / 73 / 0 / 194 / 339 / 5 / 1 / 3 / 12 | A: numbers found after the name (line 129); check the size; B: numbers found after the name (line 129); check the size |
| Bacon Ranch Dressing | 2 fl oz | both read it the same, but its protein, carbs and fat make 3221 kcal, not 330 | 330 / 357 / 67 / 0 / 17 / 360 / 1 / 0 / 1 / 1 | 330 / 357 / 67 / 0 / 17 / 360 / 1 / 0 / 1 / 1 | A: numbers found after the name (line 233); check the size; B: numbers found after the name (line 233); check the size |
| Roasted Turkey | 1 serving | both read it the same, but its protein, carbs and fat make 719 kcal, not 470 | 470 / 19 / 5 / 0 / 95 / 2758 / 75 / 4 / 29 / 62 | 470 / 19 / 5 / 0 / 95 / 2758 / 75 / 4 / 29 / 62 | A: numbers found after the name (line 248); check the size; B: numbers found after the name (line 248); check the size |
| New York Steak | 1 serving | both read it the same, but its protein, carbs and fat make 527 kcal, not 640 | 640 / 19 / 8 / 1 / 140 / 1010 / 22 / 5 / 5 / 67 | 640 / 19 / 8 / 1 / 140 / 1010 / 22 / 5 / 5 / 67 | A: numbers found after the name (line 253); check the size; B: numbers found after the name (line 253); check the size |

## Spot check (10 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Classic Minestrone | 1 serving | 180 / 3 / 0 / 0 / 15 / 2040 / 33 / 6 / 9 / 6 |
| Shasta Cheeseburger | Low Range | 520 / 35 / 13 / 1 / 127 / 2862 / 16 / 4 / 9 / 36 |
| Fat-Free Italian Dressing | 2 fl oz | 30 / 0 / 0 / 0 / 0 / 580 / 8 / 0 / 6 / 0 |
| Side of Loaded Grits | 1 serving | 660 / 38 / 17 / 0 / 60 / 1950 / 58 / 3 / 6 / 24 |
| Classic Broccoli Cheese | 1 serving | 300 / 22 / 6 / 0 / 20 / 1600 / 20 / 4 / 4 / 4 |
| Steel Cut Oatmeal | 1 serving | 740 / 29 / 4 / 0 / 5 / 55 / 115 / 11 / 72 / 13 |
| Add Eggs- Low | 1 serving | 126 / 8 / 3 / 0 / 327 / 125 / 1 / 0 / 0 / 11 |
| Classic Cream of Potato w Bacon | 1 serving | 630 / 42 / 15 / 0 / 60 / 2490 / 54 / 3 / 9 / 12 |
| Avocado, fresh | 1 serving | 106 / 10 / 1 / 0 / 0 / 5 / 6 / 4 / 0.5 / 1 |
| Bowl Of Chili | 1 serving | 840 / 36 / 13 / 0 / 112 / 3210 / 95 / 18 / 27 / 34 |
