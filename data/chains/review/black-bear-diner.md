# Black Bear Diner: lines for a person

Guide: https://blackbeardiner.com/wp-content/uploads/2025/05/Nutrition_WEB_Oct-2024.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (152)

Fix each line in `menus/black-bear-diner.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Bigfoot Chicken Fried Steak & Eggs | 1 serving | both read numbers that can't be right: sugars 83 g above carbs 16 g | 1180 / 70 / 14 / 615 / 5610 / 226 / 16 / 24 / 83 / 46 | 1180 / 70 / 14 / 615 / 5610 / 226 / 16 / 24 / 83 / 46 |
| Sub Dr. Praeger's Veggie Patty | 1 serving | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 210 / 7 / 1 / 0 / 0 / 280 / 25 / 7 / 4 / 10 | 210 / 7 / 1 / 0 / 0 / 0 / 280 / 25 / 7 / 4 |
| Sub Lettuce Wrapped - Iceberg | 3 leaves | differ: sodium_mg, carbs_g, fiber_g | 3 / 0 / 0 / 0 / 0 / 2 / 1 / 0 / 0 / 0 | 3 / 0 / 0 / 0 / 0 / 0 / 2 / 1 / 0 / 0 |
| Fat-Free Italian Dressing | 3 fl oz | the guide gives no protein_g | 145 / 0 / 0 / 0 / 0 / 870 / 12 / 0 / 9 / – | 145 / 0 / 0 / 0 / 0 / 870 / 12 / 0 / 9 / – |
| Mexican-style Chicken Tortilla | 1 serving | only in draft A | 240 / 4 / 2 / 0 / 40 / 820 / 34 / 4 / 6 / 18 | not found |
| 1 Packet of Saltine Crackers | add | only in draft A | 25 / 0.5 / 0 / 0 / 0 / 135 / 4 / 0 / 0 / 0 | not found |
| French Fries | 1 serving | only in draft A | 790 / 34 / 6 / 0 / 5 / 1810 / 109 / 11 / 1 / 12 | not found |
| Sweet Potato Fries | 1 serving | only in draft A | 875 / 43 / 7 / 0 / 0 / 1073 / 115 / 16 / 42 / 7 | not found |
| Cole Slaw | 1 serving | only in draft A | 190 / 15 / 2.5 / 0 / 5 / 115 / 14 / 2 / 12 / 1 | not found |
| Onion Rings | 1 serving | only in draft A | 1580 / 94 / 19 / 0 / 25 / 1970 / 158 / 33 / 19 / 22 | not found |
| Homemade Cole Slaw | 1 serving | only in draft A | 190 / 15 / 2.5 / 0 / 5 / 115 / 14 / 2 / 12 / 1 | not found |
| Tri-Tip & Chicken Strips | Low Range | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 710 / 30 / 10 / 5 / 120 / 2360 / 65 / 5 / 40 / 50 | 710 / 270 / 30 / 10 / 5 / 120 / 2360 / 65 / 5 / 40 |
| Tri-Tip & Chicken Strips | High Range | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, protein_g | 900 / 65 / 15 / 5 / 140 / 2135 / 30 / 5 / 5 / 55 | 900 / 585 / 65 / 15 / 5 / 140 / 2135 / 30 / 5 / 5 |
| Tri-Tip & Shrimp | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 520 / 15 / 10 / 5 / 135 / 2275 / 60 / 5 / 25 / 45 | 520 / 225 / 15 / 10 / 5 / 135 / 2275 / 60 / 5 / 25 |
| BBQ Sauce | 2.00 fl oz | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 140 / 0 / 0 / 0 / 0 / 580 / 36 / 0 / 34 / 2 | 140 / 0 / 0 / 0 / 0 / 0 / 580 / 36 / 0 / 34 |
| Bacon Ranch | 2.00 fl oz | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g | 334 / 35 / 6 / 0 / 17 / 360 / 1 / 0 / 1 / 1 | 334 / 317 / 35 / 6 / 0 / 17 / 360 / 1 / 0 / 1 |
| Cocktail Sauce | 2.00 fl oz | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 76 / 0 / 0 / 0 / 0 / 686 / 19 / 0 / 15 / 0 | 76 / 0 / 0 / 0 / 0 / 0 / 686 / 19 / 0 / 15 |
| Bacon Ranch Dressing - 2 fl oz | 1 serving | only in draft A | 330 / 357 / 67 / 0 / 17 / 360 / 1 / 0 / 1 / 1 | not found |
| Bleu Cheese Dressing - Housemade - 2 fl oz | 1 serving | only in draft A | 250 / 26 / 5 / 0 / 14 / 418 / 2 / 0 / 2 / 2 | not found |
| 1000 Island Dressing - Housemade - 2 fl oz | 1 serving | only in draft A | 200 / 19 / 3 / 0 / 8 / 361 / 5 / 0 / 4 / 0 | not found |
| Balsamic Vinaigrette Dressing - 2 fl oz | 1 serving | only in draft A | 180 / 16 / 3 / 0 / 0 / 660 / 6 / 0 / 6 / 0 | not found |
| Fat-Free Honey Dijon Dressing - 2 fl oz | 1 serving | only in draft A | 90 / 0 / 0 / 0 / 0 / 500 / 20 / 0 / 17 / 0 | not found |
| Fat-Free Italian Dressing - 2 fl oz | 1 serving | only in draft A | 30 / 0 / 0 / 0 / 0 / 580 / 8 / 0 / 6 / 0 | not found |
| Oat Milk | 9V oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 190 / – / – / – / – / – / – / – / – / – | 190 / – / – / – / – / – / – / – / – / – |
| Oat Milk | 14.5V oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 310 / – / – / – / – / – / – / – / – / – | 310 / – / – / – / – / – / – / – / – / – |
| Coffee | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – |
| Hot Chocolate | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 80 / – / – / – / – / – / – / – / – / – | 80 / – / – / – / – / – / – / – / – / – |
| Iced Tea / Hot Tea | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – |
| Sweet Tea | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 160 / – / – / – / – / – / – / – / – / – | 160 / – / – / – / – / – / – / – / – / – |
| Huckleberry Lemonade | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 270 / – / – / – / – / – / – / – / – / – | 270 / – / – / – / – / – / – / – / – / – |
| Lemonade | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 280 / – / – / – / – / – / – / – / – / – | 280 / – / – / – / – / – / – / – / – / – |
| Arnold Palmer | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 280 / – / – / – / – / – / – / – / – / – | 280 / – / – / – / – / – / – / – / – / – |
| Mountain Dew | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 300 / – / – / – / – / – / – / – / – / – | 300 / – / – / – / – / – / – / – / – / – |
| Pepsi | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 280 / – / – / – / – / – / – / – / – / – | 280 / – / – / – / – / – / – / – / – / – |
| Root Beer | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 280 / – / – / – / – / – / – / – / – / – | 280 / – / – / – / – / – / – / – / – / – |
| Sierra Mist | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 280 / – / – / – / – / – / – / – / – / – | 280 / – / – / – / – / – / – / – / – / – |
| Diet Pepsi | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – |
| Dr. Pepper | 22 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 280 / – / – / – / – / – / – / – / – / – | 280 / – / – / – / – / – / – / – / – / – |
| Seasonal Cold Brew | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 600 / – / – / – / – / – / – / – / – / – | 600 / – / – / – / – / – / – / – / – / – |
| Seasonal Cold Brew | High Range | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1050 / – / – / – / – / – / – / – / – / – | 1050 / – / – / – / – / – / – / – / – / – |
| Wine, White, Chardonnay | 1 serving | only in draft A | – / – / – / – / – / – / – / – / – / – | not found |
| Wine, Red, Merlot | 1 serving | only in draft A | – / – / – / – / – / – / – / – / – / – | not found |
| Wine, Red, Cabernet Sauvignon | 1 serving | only in draft A | – / – / – / – / – / – / – / – / – / – | not found |
| Wine, White, Sauvignon Blanc | 1 serving | only in draft A | – / – / – / – / – / – / – / – / – / – | not found |
| Wine, Red, Pinot Noir | 1 serving | only in draft A | – / – / – / – / – / – / – / – / – / – | not found |
| Mimosa | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 130 / – / – / – / – / – / – / – / – / – | 130 / – / – / – / – / – / – / – / – / – |
| 2% Milk | 16 oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 240 / – / – / – / – / – / – / – / – / – | 240 / – / – / – / – / – / – / – / – / – |
| Apple Juice | 16 oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 230 / – / – / – / – / – / – / – / – / – | 230 / – / – / – / – / – / – / – / – / – |
| Cranberry Juice | 16 oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 270 / – / – / – / – / – / – / – / – / – | 270 / – / – / – / – / – / – / – / – / – |
| Fresh Squeezed Orange Juice | 10 oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 140 / – / – / – / – / – / – / – / – / – | 140 / – / – / – / – / – / – / – / – / – |
| Fresh Squeezed Orange Juice | 16 oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 220 / – / – / – / – / – / – / – / – / – | 220 / – / – / – / – / – / – / – / – / – |
| Stuffed Blackberry French Toast | 1 serving | only in draft B | not found | 1240 / – / – / – / – / – / – / – / – / – |
| Chicken Fried Steak and Eggs | 1 serving | only in draft B | not found | 750 / 40 / 11 / 1 / 400 / 160 / 50 / 11 / 5 / 42 |
| Hickory Smoked Ham & Eggs | 1 serving | only in draft B | not found | 600 / 17 / 6 / 0.03 / 398 / 2562 / 19 / 1 / 13 / 34 |
| New York Steak and Eggs | 1 serving | only in draft B | not found | 212 / 16 / 5 / 0 / 328 / 1274 / 5 / 1 / 3 / 12 |
| Mild Patty Sausage and Eggs | 1 serving | only in draft B | not found | 750 / 64 / 23 / 0 / 470 / 1330 / 8 / 2 / 4 / 35 |
| Hot Patty Sausage and Eggs | 1 serving | only in draft B | not found | 760 / 64 / 23 / 0.03 / 470 / 1370 / 10 / 4 / 5 / 35 |
| Link Sausage and Eggs | 1 serving | only in draft B | not found | 380 / 31 / 12 / 0.03 / 372 / 540 / 6 / 1 / 3 / 21 |
| Chicken Sausage and Eggs | 1 serving | only in draft B | not found | 612 / 48 / 14 / 0 / 468 / 1334 / 5 / 1 / 5 / 38 |
| Corned Beef Hash | 1 serving | only in draft B | not found | 400 / 28 / 11 / 0.03 / 382 / 2082 / 7 / 1 / 3 / 34 |
| No meat, just 2 eggs | 1 serving | only in draft B | not found | 140 / 8 / 3 / 0.03 / 327 / 132 / 4 / 1 / 3 / 12 |
| Thick-Cut Smoked Bacon and Eggs | 1 serving | only in draft B | not found | 470 / 34 / 11 / 0.03 / 393 / 1160 / 5 / 1 / 3 / 34 |
| Country Red Potatoes | 11 oz | only in draft B | not found | 330 / 14 / 5 / 0 / 0 / 3160 / 51 / 1 / 2 / 1 |
| Strip-Cut Hash Browns | 11 oz | only in draft B | not found | 380 / 14 / 5 / 0 / 0 / 1990 / 56 / 0 / 0 / 4 |
| Blackberry- filled | 1 serving | only in draft B | not found | 970 / – / – / – / – / – / – / – / – / – |
| Classic Diner Cheeseburger Basket | SINGLE PATTY | only in draft B | not found | 1110 / 60 / 10 / 0 / 90 / 2810 / 110 / 10 / 10 / 40 |
| Classic Diner Cheeseburger Basket | DOUBLE | only in draft B | not found | 1350 / 80 / 20 / 0 / 160 / 3130 / 110 / 10 / 10 / 60 |
| Saltine Crackers | 1 Packet | only in draft B | not found | 25 / 0.5 / 0 / 0 / – / 135 / 4 / 0 / 0 / 0 |
| Classic Minestrone | Cup | only in draft B | not found | 120 / 2 / 0 / 0 / 10 / 1360 / 22 / 4 / 6 / 4 |
| Classic Chicken Noodle | Cup | only in draft B | not found | 160 / 4 / 1 / 0 / 30 / 1660 / 18 / 0 / 2 / 12 |
| Classic Brocolli Cheese | Cup | only in draft B | not found | 300 / 22 / 6 / 0 / 20 / 1600 / 20 / 4 / 4 / 4 |
| Mediterranean-style Vegetable | Cup | only in draft B | not found | 200 / 3 / 0 / 0 / 0 / 820 / 34 / 6 / 12 / 8 |
| Classic Cream of Potato w Bacon | Cup | only in draft B | not found | 420 / 28 / 10 / 0 / 40 / 1660 / 36 / 2 / 6 / 8 |
| Mexican-style Chicken Tortilla | Cup | only in draft B | not found | 240 / 4 / 2 / 0 / 40 / 820 / 34 / 4 / 6 / 18 |
| Tomato Bisque w Basil | Cup | only in draft B | not found | 260 / 18 / 5 / 0 / 25 / 710 / 22 / 4 / 16 / 3 |
| Cole Slaw | 3 oz W | only in draft B | not found | 190 / 15 / 2.5 / 0 / 5 / 115 / 14 / 2 / 12 / 1 |
| Homemade Cole Slaw | 3 oz W | only in draft B | not found | 190 / 15 / 2.5 / 0 / 5 / 115 / 14 / 2 / 12 / 1 |
| Classic Minestrone | 1 cup | only in draft B | not found | 120 / 2 / 0 / 0 / 10 / 1360 / 22 / 4 / 6 / 4 |
| Classic Chicken Noodle | 1 cup | only in draft B | not found | 160 / 4 / 1 / 0 / 30 / 1660 / 18 / 0 / 2 / 12 |
| Mediterranean-style Vegetable | 1 cup | only in draft B | not found | 200 / 3 / 0 / 0 / 0 / 820 / 34 / 6 / 12 / 8 |
| Classic Cream of Potato w Bacon | 1 cup | only in draft B | not found | 420 / 28 / 10 / 0 / 40 / 1660 / 36 / 2 / 6 / 8 |
| Mexican-style Chicken Tortilla | 1 cup | only in draft B | not found | 240 / 4 / 2 / 0 / 40 / 820 / 34 / 4 / 6 / 18 |
| Tomato Bisque w Basil | 1 cup | only in draft B | not found | 260 / 18 / 5 / 0 / 25 / 710 / 22 / 4 / 16 / 3 |
| Wine, White, Chardonnay | Glass | only in draft B | not found | 150 / – / – / – / – / – / – / – / – / – |
| Wine, White, Chardonnay | Bottle | only in draft B | not found | 310 / – / – / – / – / – / – / – / – / – |
| Wine, Red, Merlot | Glass | only in draft B | not found | 150 / – / – / – / – / – / – / – / – / – |
| Wine, Red, Merlot | Bottle | only in draft B | not found | 310 / – / – / – / – / – / – / – / – / – |
| Wine, Red, Cabernet Sauvignon | Glass | only in draft B | not found | 150 / – / – / – / – / – / – / – / – / – |
| Wine, Red, Cabernet Sauvignon | Bottle | only in draft B | not found | 310 / – / – / – / – / – / – / – / – / – |
| Wine, White, Sauvignon Blanc | Glass | only in draft B | not found | 140 / – / – / – / – / – / – / – / – / – |
| Wine, White, Sauvignon Blanc | Bottle | only in draft B | not found | 300 / – / – / – / – / – / – / – / – / – |
| Wine, Red, Pinot Noir | Glass | only in draft B | not found | 140 / – / – / – / – / – / – / – / – / – |
| Wine, Red, Pinot Noir | Bottle | only in draft B | not found | 300 / – / – / – / – / – / – / – / – / – |
| Mini Volcano with Bacon and Sausage | 1 serving | only in draft B | not found | 1020 / 44 / 16 / 0 / 225 / 2330 / 190 / 5 / 65 / 31 |
| BYO Breakfast | 1 Egg | only in draft B | not found | 60 / 4 / 1 / 0 / 164 / 62 / 0 / 0 / 0 / 6 |
| BYO Breakfast | 1 Piece of bacon | only in draft B | not found | 80 / 6 / 2 / 0 / 15 / 260 / 0 / 0 / 0 / 6 |
| BYO Breakfast | 1 Sausage link | only in draft B | not found | 80 / 8 / 3 / 0 / 15 / 135 / 1 / 0 / 0 / 3 |
| BYO Breakfast | 1 Biscuit and gravy | only in draft B | not found | 660 / 32 / 10 / 9 / 16 / 2028 / 80 / 2 / 14 / 13 |
| BYO Breakfast | 1 Pancake | only in draft B | not found | 560 / 6 / 3 / 0 / 14 / 920 / 121 / 4 / 42 / 9 |
| BYO Breakfast | 1 French toast | only in draft B | not found | 400 / 5 / 1 / 0 / 112 / 320 / 83 / 33 / 24 / 10 |
| BYO Breakfast | 1 Waffle | only in draft B | not found | 280 / 11 / 3 / 0 / 46 / 452 / 40 / 2 / 17 / 5 |
| Chocolate Chip Pancakes | 1 serving | only in draft B | not found | 1020 / 30 / 20 / 0 / 30 / 1220 / 190 / 10 / 80 / – |
| Happy Cub Cake | 1 serving | only in draft B | not found | 470 / 5 / 3 / 0 / 12 / 631 / 103 / 3 / 37 / 6 |
| Sprinkle Cakes | 1 serving | only in draft B | not found | 860 / 20 / 10 / 0 / 30 / 1210 / 170 / 0 / 60 / – |
| Strawberry French Toast | 1 serving | only in draft B | not found | 500 / 19 / 6 / 3 / 150 / 310 / 27 / 2 / 25 / 9 |
| Ham Scrambler | 1 serving | only in draft B | not found | 420 / 20 / 7 / 0 / 200 / 1220 / 41 / 4 / 17 / 20 |
| Chicken Strips | 1 serving | only in draft B | not found | 770 / 30 / 10 / 0 / 40 / 2610 / 110 / 10 / 60 / 20 |
| Chicken Strips Bacon Ranch Dressing add | 1 serving | only in draft B | not found | 330 / 35 / 6 / 0 / 18 / 360 / 1 / 0 / 1 / 1 |
| Chicken Strips BBQ Sauce add | 1 serving | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 480 / 30 / 1 / 25 / 1 |
| Biscuit Bear Burger & Fries | 1 serving | only in draft B | not found | 670 / 30 / 10 / 10 / 60 / 1340 / 80 / 10 / 10 / – |
| Grilled Cheese Sandwich | 1 serving | only in draft B | not found | 580 / 37 / 14 / 0.5 / 45 / 1130 / 50 / 3 / 12 / 14 |
| Macaroni and Cheese | 1 serving | only in draft B | not found | 270 / 9 / 3.5 / 0 / 15 / 930 / 49 / 2 / 24 / 13 |
| Side - French Fries add | 6 oz W | only in draft B | not found | 210 / 9 / 2 / 0 / 1 / 490 / 30 / 3 / 0 / 3 |
| Side - Fresh Fruit add | 3 oz W | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 20 / 15 / 1 / 13 / 1 |
| Cub Sundae | Low Range | only in draft B | not found | 240 / 10 / 10 / 0 / 40 / 80 / 40 / 0 / 30 / 10 |
| Cub Sundae | High Range | only in draft B | not found | 270 / 10 / 10 / 0 / 40 / 90 / 40 / 0 / 30 / 10 |
| Scoop of Vanilla Ice Cream w/ Whipped Cream | 4 oz V ice cream, 2 oz V whipped cream | only in draft B | not found | 160 / 9 / 5 / 0 / 35 / 45 / 18 / 0 / 17 / 2 |
| Scoop of Huckleberry Heaven Ice Cream w/ Whipped Cream | 4 oz V ice cream, 2 oz V whipped cream | only in draft B | not found | 160 / 8 / 5 / 0 / 35 / 40 / 19 / 0 / 16 / 2 |
| Scoop of Chocolate Ice Cream w/ Whipped Cream | 4 oz V ice cream + 2 oz V whipped cream | only in draft B | not found | 170 / 9 / 5 / 0 / 35 / 65 / 19 / 0 / 13 / 2 |
| Ice Cream Topping: Chocolate Syrup | 1 oz V | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 30 / 22 / 0 / 20 / 0 |
| Ice Cream Topping: Rainbow Sprinkles | 1/4 oz V | only in draft B | not found | 30 / 1.5 / 0 / 0 / 0 / 0 / 4 / 0 / 3 / 0 |
| Strawberries and Whipped Cream | 1 serving | only in draft B | not found | 70 / 3.5 / 1 / 0 / 10 / 0 / 9 / 1 / 7 / 0 |
| Chocolate Milk | 12 oz | only in draft B | not found | 250 / 6 / 4 / 0 / 25 / 160 / 38 / 1 / 34 / 11 |
| Lemonade | 10 oz | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 45 / 35 / 0 / 34 / 0 |
| Cubs' Soft Drink | Low Range, 10 oz | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 30 / 0 / 0 / 0 / 0 |
| Cubs' Soft Drink | High Range, 10 oz | only in draft B | not found | 125 / 0 / 0 / 0 / 0 / 50 / 33 / 0 / 32 / 0 |
| 5 Layer Chocolate Cake | 1 serving | only in draft B | not found | 750 / – / – / – / – / – / – / – / – / – |
| Seasonal Cheesecake | 1 serving | only in draft B | not found | 600 / – / – / – / – / – / – / – / – / – |
| Seasonal Cheesecake | Low Range | only in draft B | not found | 600 / – / – / – / – / – / – / – / – / – |
| Seasonal Cheesecake | High Range | only in draft B | not found | 1050 / – / – / – / – / – / – / – / – / – |
| Bread Pudding | 1 serving | only in draft B | not found | 1340 / 59 / 31 / 1.5 / 380 / 820 / 175 / 4 / 116 / 25 |
| Blackberry Cobbler | 1 serving | only in draft B | not found | 420 / 26 / 11 / 0 / 40 / 850 / 95 / 8 / 53 / 8 |
| Cherry Cobbler | 1 serving | only in draft B | not found | 850 / 25 / 11 / 0 / 0 / 450 / 146 / 1 / 95 / 8 |
| Apple Cobbler | 1 serving | only in draft B | not found | 850 / 25 / 11 / 0 / 0 / 320 / 148 / 5 / 90 / 6 |
| Chocolate Cream Pie | 1 serving | only in draft B | not found | 490 / 35 / 19 / 0 / 15 / 1300 / 90 / 1 / 41 / 12 |
| Banana Cream Pie | 1 serving | only in draft B | not found | 400 / 31 / 16 / 0 / 5 / 1070 / 77 / 3 / 32 / 9 |
| Coconut Cream Pie | 1 serving | only in draft B | not found | 560 / 41 / 24 / 0 / 15 / 1330 / 92 / 2 / 46 / 12 |
| Scoop of Vanilla Ice Cream, a la mode | 1/2 cup | only in draft B | not found | 130 / 7 / 4 / 0 / 25 / 45 / 16 / 0 / 15 / 2 |
| Carnation Original Malt Powder | 1 serving | only in draft B | not found | 60 / 1.5 / 0.5 / 0 / 5 / 65 / 10 / 0 / 7 / 1 |
| Huckleberry Shake | 1 serving | only in draft B | not found | 520 / 27 / 17 / 0 / 105 / 180 / 60 / 0 / 50 / 11 |
| Strawberry Shake | 1 serving | only in draft B | not found | 640 / 30 / 17 / 0 / 105 / 190 / 85 / 0 / 81 / 11 |
| Chocolate Shake | 1 serving | only in draft B | not found | 710 / 31 / 18 / 0 / 105 / 220 / 105 / 2 / 92 / 12 |
| Vanilla Shake | 1 serving | only in draft B | not found | 520 / 30 / 17 / 0 / 105 / 190 / 57 / 0 / 53 / 11 |
| Cookies and Cream Vanilla Shake | 1 serving | only in draft B | not found | 740 / 39 / 20 / 0 / 105 / 380 / 91 / 1 / 72 / 12 |
| Hot Fudge Sundae | 1 serving | only in draft B | not found | 820 / 39 / 29 / 0 / 75 / 330 / 113 / 3 / 106 / 11 |
| Scoop of Huckleberry Heaven Ice Cream | 1/2 cup | only in draft B | not found | 130 / 6 / 4 / 0 / 25 / 40 / 17 / 0 / 14 / 2 |
| Scoop of Vanilla Bean Ice Cream | 1/2 cup | only in draft B | not found | 130 / 7 / 4 / 0 / 25 / 45 / 16 / 0 / 15 / 2 |
| Scoop of Chocolate Ice Cream | 1/2 cup | only in draft B | not found | 140 / 7 / 4.5 / 0 / 25 / 65 / 17 / 0 / 11 / 2 |
| Chocolate Sauce | 2V oz | only in draft B | not found | 189 / 1 / 0 / 0 / 0 / 28 / 47 / 2 / 39 / 1 |
| Strawberry Topping | 2V oz | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 14 / 0 / 14 / 0 |
| Bear Claw, Classic with almond filling | 1 serving | only in draft B | not found | 1110 / 57 / 20 / 0 / 105 / 970 / 132 / 4 / 71 / 17 |
| Bear Claw, Blackberry filling | 1 serving | only in draft B | not found | 970 / – / – / – / – / – / – / – / – / – |

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
