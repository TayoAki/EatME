# Miller's Ale House: lines for a person

Guide: https://millersalehouse.com/wp-content/uploads/2025/08/AUG-2025-MAH-NUTRITION-GUIDE.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (147)

Fix each line in `menus/millers-ale-house.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Thousand Island | 1 fl. oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 137 / – / – / – / – / – / – / – / – / – | 137 / – / – / – / – / – / – / – / – / – |
| Choice Center Cut Sirloin | 6oz - Grilled (Discontinued 3/23/25) | only in draft B | not found | 290 / 14 / 6 / 0 / 105 / 710 / 0.5 / 0 / 0 / 37 |
| Choice Center Cut Sirloin | 10oz - Grilled (Discontinued 3/23/25) | only in draft B | not found | 510 / 26 / 11 / 0 / 170 / 1920 / 2 / 0.5 / 0.5 / 62 |
| Filet Mignon - Grilled (Discontinued 3/23/25) | 1 serving | only in draft B | not found | 420 / 23 / 9 / 0 / 160 / 750 / 0.5 / 0 / 0 / 51 |
| Ribeye - Grilled | 1 serving | only in draft B | not found | 990 / 81 / 36 / 4 / 230 / 1410 / 2 / 0 / 0 / 63 |
| NY Strip - Grilled | 1 serving | only in draft B | not found | 870 / 58 / 23 / 0 / 278 / 810 / 0 / 0 / 0 / 66 |
| Filet Mignon - 6 oz Grilled | 1 serving | only in draft B | not found | 640 / 26 / 9 / 0 / 70 / 1250 / 1 / 0 / 0 / 26 |
| Flat Iron - 6 oz Grilled | 1 serving | only in draft B | not found | 310 / 19 / 7 / 0 / 115 / 710 / 1 / 0 / 0 / 32 |
| Chicken | 1 serving | only in draft B | not found | 810 / 29 / 15 / 0 / 160 / 3110 / 79 / 5 / 17 / 60 |
| Guacamole | 1 serving | only in draft B | not found | 90 / 7 / 1.5 / 0 / 0 / 330 / 5 / 3 / 0 / 2 |
| Cold Set | 1 serving | only in draft B | not found | 220 / 17 / 11 / 0 / 60 / 790 / 7 / 1 / 5 / 9 |
| Classic Cheeseburger | 1 serving | only in draft B | not found | 1010 / 70 / 30 / 0 / 200 / 2150 / 42 / 6 / 8 / 53 |
| Add Bacon | 1 serving | only in draft B | not found | 90 / 7 / 2.5 / 0 / 0 / 350 / 0 / 0 / 0 / 5 |
| Millers Veggie Burger | 1 serving | only in draft B | not found | 600 / 38 / 6 / 0 / 0 / 2350 / 61 / 6 / 15 / 11 |
| Add Guacamole | 1 serving | only in draft B | not found | 90 / 7 / 1.5 / 0 / 0 / 330 / 5 / 3 / 0 / 2 |
| Brunch Burger | 1 serving | only in draft B | not found | 1440 / 114 / 37 / 0 / 225 / 2690 / 46 / 4 / 14 / 56 |
| Prime Burger | 1 serving | only in draft B | not found | 1280 / 92 / 34 / 0 / 235 / 3040 / 51 / 5 / 11 / 64 |
| Cue Bacon Cheeseburger | 1 serving | only in draft B | not found | 1160 / 79 / 32 / 0 / 215 / 2890 / 53 / 4 / 15 / 58 |
| Add Burger Patty (with cheese) | 1 serving | only in draft B | not found | 680 / 57 / 25 / 0 / 165 / 1630 / 2 / 0 / 0 / 37 |
| Big Red® | 1 serving | only in draft B | not found | 820 / 37 / 10 / 0 / 120 / 6000 / 61 / 4 / 7 / 56 |
| Grilled Chicken BLT | 1 serving | only in draft B | not found | 610 / 23 / 6 / 0 / 130 / 3050 / 41 / 4 / 8 / 57 |
| Mahi-Mahi - Grilled | 1 serving | only in draft B | not found | 390 / 3.5 / 0.5 / 0 / 165 / 1160 / 41 / 6 / 8 / 50 |
| Mahi-Mahi - Blackened | 1 serving | only in draft B | not found | 450 / 7 / 1.5 / 0.5 / 165 / 1230 / 46 / 6 / 8 / 51 |
| Mahi-Mahi - Broiled | 1 serving | only in draft B | not found | 710 / 37 / 15 / 0 / 165 / 1260 / 41 / 6 / 8 / 50 |
| Philly Cheese Steak | 1 serving | only in draft B | not found | 950 / 50 / 19 / 0 / 145 / 3030 / 58 / 5 / 5 / 59 |
| Add Mushrooms and Peppers | 1 serving | only in draft B | not found | 70 / 6 / 1 / 0 / 0 / 240 / 3 / 1 / 2 / 2 |
| Prime Rib French Dip | 1 serving | only in draft B | not found | 1110 / 61 / 30 / 0 / 270 / 4080 / 63 / 5 / 10 / 72 |
| Capt. Jack's Buried Treasure® | 1 serving | only in draft B | not found | 1420 / 70 / 42 / 0 / 85 / 770 / 164 / 2 / 147 / 8 |
| Capt. Jack's Buried Treasure® Pint | 1 serving | only in draft B | not found | 1100 / 56 / 32 / 4 / 84 / 352 / 116 / 2 / 112 / 8 |
| Ghirardelli® Chocolate Brownie Sundae | 1 serving | only in draft B | not found | 1620 / 77 / 85 / 93 / 120 / 670 / 223 / 3 / 166 / 10 |
| Pull N' Pop Donuts | 1 serving | only in draft B | not found | 1290 / 64 / 26 / 0 / 0 / 760 / 167 / 2 / 106 / 0 |
| Strawberry Cheesecake | 1 serving | only in draft B | not found | 1040 / 47 / 34 / 1.5 / 190 / 480 / 73 / 6 / 59 / 12 |
| Grilled Chicken Breast | 1 serving | only in draft B | not found | 190 / 1.5 / 0 / 0 / 95 / 940 / 0 / 0 / 0 / 40 |
| Chicken Zingers® | 1 serving | only in draft B | not found | 440 / 26 / 4.5 / 0 / 100 / 210 / 8 / 0 / 0 / 42 |
| Mac & Cheese | 1 serving | only in draft B | not found | 300 / 9 / 2.5 / 0 / 15 / 550 / 45 / 2 / 8 / 10 |
| Fried Shrimp Platter | 1 serving | only in draft B | not found | 1670 / 82 / 15 / 0 / 515 / 2210 / 132 / 3 / 8 / 85 |
| Cheese Quesadilla | 1 serving | only in draft B | not found | 310 / 19 / 7 / 0 / 20 / 570 / 28 / 0 / 2 / 9 |
| Fried Shrimp | 1 serving | only in draft B | not found | 460 / 37 / 7 / 0 / 65 / 200 / 17 / 0.5 / 0 / 11 |
| Mini Burger | 1 serving | only in draft B | not found | 500 / 31 / 12 / 0 / 85 / 550 / 33 / 1 / 5 / 23 |
| Seasonal Fruit | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 15 / 3 / 12 / 1 |
| Applesauce | 1 serving | only in draft B | not found | 50 / 0 / 0 / 0 / 0 / 5 / 13 / 1 / 10 / 0 |
| French Fries | 1 serving | only in draft B | not found | 400 / 41 / 7 / 0 / 0 / 450 / 11 / 1 / 0 / 1 |
| Seasonal Vegetable | 1 serving | only in draft B | not found | 90 / 4 / 1.5 / 0 / 0 / 990 / 11 / 3 / 3 / 2 |
| Vanilla Ice Cream Scoop | 1 serving | only in draft B | not found | 280 / 16 / 10 / 0 / 60 / 80 / 32 / 0 / 24 / 0 |
| Ice Cream Sandwich | 1 serving | only in draft B | not found | 150 / 4.5 / 2.5 / 0 / 15 / 115 / 26 / 0 / 14 / 3 |
| Push Pop | 1 serving | only in draft B | not found | 80 / 1 / 0.5 / 0 / 2.5 / 25 / 18 / 0 / 15 / 0 |
| Dad's Homemade Meatloaf | 1 serving | only in draft B | not found | 900 / 50 / 19 / 2 / 225 / 2260 / 80 / 3 / 32 / 43 |
| English Pub Fish & Chips (served with fries) | 1 serving | only in draft B | not found | 1260 / 103 / 18 / 0 / 75 / 1640 / 50 / 3 / 9 / 28 |
| Pork Tenderloin Cuban Sandwich | 1 serving | only in draft B | not found | 1250 / 72 / 25 / 0.5 / 155 / 3490 / 91 / 5 / 4 / 53 |
| Chicken Enchiladas | 1 serving | only in draft B | not found | 1220 / 50 / 22 / 0 / 130 / 2700 / 152 / 6 / 14 / 45 |
| Cajun Chicken Salad | 1 serving | only in draft B | not found | 960 / 35 / 11 / 0 / 95 / 3210 / 114 / 18 / 16 / 48 |
| Tush Push Burger | 1 serving | only in draft B | not found | 1310 / 65 / 23 / 0 / 60 / 5960 / 146 / 9 / 22 / 40 |
| The Field Goal Trio | 1 serving | only in draft B | not found | 1410 / 79 / 14 / 0 / 555 / 1210 / 10 / 0.5 / 5 / 164 |
| Buffalo Shrimp | 1 serving | only in draft B | not found | 1170 / 76 / 14 / 0 / 410 / 1150 / 52 / 2 / 6 / 61 |
| Big Red Zone | 1 serving | only in draft B | not found | 1450 / 85 / 32 / 0 / 355 / 8060 / 59 / 0.5 / 28 / 105 |
| Zingers® (no wing sauce) | 1 serving | only in draft B | not found | 750 / 49 / 8 / 0 / 140 / 240 / 18 / 0.5 / 3 / 58 |
| Barbecue Baby Back Ribs | 1 serving | only in draft B | not found | 1320 / 83 / 35 / 0 / 400 / 3830 / 43 / 0 / 38 / 95 |
| 12 Wings | 1 serving | only in draft B | not found | 640 / 13 / 2 / 0 / 315 / 210 / 5 / 0 / 5 / 127 |
| Prime Rib- 12 oz | 1 serving | only in draft B | not found | 810 / 39 / 13 / 0 / 325 / 3950 / 6 / 1 / 2 / 109 |
| Prime Rib- 16 oz | 1 serving | only in draft B | not found | 1650 / 127 / 56 / 8 / 435 / 4860 / 7 / 1 / 2 / 118 |
| Flat Iron & Fried Shrimp | 1 serving | only in draft B | not found | 700 / 29 / 9 / 0 / 290 / 1220 / 42 / 1 / 0 / 61 |
| Baked Potato (with Butter and Sour Cream) | 1 serving | only in draft B | not found | 340 / 19 / 7 / 0 / 20 / 140 / 37 / 4 / 3 / 5 |
| Housemade Kettle Chips | 1 serving | only in draft B | not found | 350 / 28 / 3.5 / 2 / 0 / 540 / 21 / 2 / 1 / 2 |
| Mashed Potatoes (with Gravy) | 1 serving | only in draft B | not found | 150 / 4.5 / 1.5 / 0 / 5 / 880 / 24 / 2 / 0 / 3 |
| Cilantro Lime Rice | 1 serving | only in draft B | not found | 250 / 4 / 1 / 0 / 0 / 0 / 48 / 1 / 1 / 5 |
| Vegetable Medley | 1 serving | only in draft B | not found | 50 / 2 / 1 / 0 / 0 / 80 / 6 / 2 / 2 / 2 |
| Loaded Baked Potato | 1 serving | only in draft B | not found | 540 / 36 / 15 / 0 / 95 / 940 / 35 / 2 / 4 / 21 |
| Loaded French Fries | 1 serving | only in draft B | not found | 1010 / 98 / 21 / 0 / 80 / 2360 / 15 / 0.5 / 2 / 16 |
| Onion Rings | 1 serving | only in draft B | not found | 1060 / 99 / 16 / 0 / 10 / 1220 / 36 / 2 / 2 / 3 |
| House Salad - sub | 1 serving | only in draft B | not found | 290 / 8 / 2.5 / 0 / 15 / 570 / 43 / 10 / 8 / 13 |
| Caesar Salad - sub | 1 serving | only in draft B | not found | 280 / 22 / 4.5 / 0 / 20 / 750 / 16 / 2 / 3 / 8 |
| Shareable Fries | 1 serving | only in draft B | not found | 620 / 60 / 10 / 0 / 0 / 1490 / 16 / 0.5 / 0 / 2 |
| Shareable Onion Rings | 1 serving | only in draft B | not found | 1610 / 131 / 22 / 0 / 10 / 2000 / 91 / 4 / 2 / 8 |
| 12 Fried Shrimp with Cocktail Sauce | 1 serving | only in draft B | not found | 600 / 28 / 5 / 0 / 175 / 1220 / 53 / 1 / 8 / 29 |
| 4 Mozzarella Sticks | 1 serving | only in draft B | not found | 430 / 29 / 10 / 0 / 40 / 900 / 31 / 2 / 5 / 15 |
| Caesar Salad | 1 serving | only in draft B | not found | 560 / 45 / 9 / 0 / 35 / 1510 / 32 / 4 / 5 / 16 |
| House Salad | 1 serving | only in draft B | not found | 410 / 12 / 5 / 0 / 30 / 770 / 56 / 17 / 12 / 21 |
| Coca-Cola | 1 serving | only in draft B | not found | 340 / 0 / 0 / 0 / 0 / 85 / 89 / 0 / 89 / 0 |
| Diet Coke | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 110 / 1 / 0.18 / 0 / 0 |
| Coca-Cola Zero | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 90 / 0 / 0.19 / 0 / 0 |
| Sprite | 1 serving | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 150 / 82 / 0 / 81 / 0 |
| Pibb Xtra | 1 serving | only in draft B | not found | 320 / 0 / 0 / 0 / 0 / 120 / 84 / 0.22 / 84 / 0 |
| Minute Maid Lemonade(HFCS) | 1 serving | only in draft B | not found | 320 / 0 / 0 / 0 / 0 / 210 / 84 / 0 / 80 / 0 |
| Fuze Raspberry Tea | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 110 / 51 / 0 / 49 / 0 |
| Barq's Root Beer | 1 serving | only in draft B | not found | 370 / 0 / 0 / 0 / 0 / 115 / 97 / 0.21 / 96 / 0 |
| Fanta Orange Postmix | 1 serving | only in draft B | not found | 340 / 0 / 0 / 0 / 0 / 90 / 90 / 0 / 88 / 0 |
| Mello Yello | 1 serving | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 110 / 96 / 0.1 / 96 / 0 |
| Fresh Brewed Iced Tea | 1 serving | only in draft B | not found | 2 / 0 / 0 / 0 / 0 / 7 / 1 / 0 / 0 / 0 |
| Fresh Brewed Sweet Tea | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 14 / 0 / 42 / 1 |
| S&D Coffee | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Perrier | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / – / 0 / 0 / 0 / 0 / 0 |
| Dasani | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / – / 0 / 0 / 0 / 0 / 0 |
| "The Don" Blanco | 1 serving | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 55 / 33 / 0 / 30 / 0 |
| 1800 Perfect Margarita | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 45 / 31 / 0 / 27 / 0 |
| 1800 Watermelon Rita Pitcher | 1 serving | only in draft B | not found | 810 / 0 / 0 / 0 / 0 / 40 / 138 / 0.5 / 133 / 0 |
| Ale House Cosmo | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 10 / 14 / 0 / 13 / 0 |
| Apple Pear Martini | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 15 / 32 / 0 / 30 / 0 |
| Beach Whiskey Bonfire Cinnamon | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 6 / 0 |
| Beach Whiskey Island Coconut | 1 serving | only in draft B | not found | 50 / 0 / 0 / 0 / 0 / 0 / 4 / 0 / 5 / 0 |
| Big LIT | 1 serving | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 0 / 16 / 0 / 14 / 0 |
| Old Fashioned | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 20 / 0 / 19 / 0 |
| Blackberry Smash | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 23 / 2 / 20 / 0.5 |
| Bulleit Manhattan | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 |
| Captain Morgan Cannon Blast | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Cherry Limeade | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 5 / 39 / 2 / 32 / 0 |
| Curzan Classic Mojito | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 33 / 1 / 29 / 0 |
| Don Blanco Shot | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Electric Blue LIT Pitcher | 1 serving | only in draft B | not found | 500 / 0 / 0 / 0 / 0 / 0 / 54 / 0 / 48 / 0 |
| Electric Lemonade | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 27 / 0 / 25 / 0 |
| Grande Margarita | 1 serving | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 55 / 36 / 0 / 34 / 0 |
| Grey Goose Mule | 1 serving | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 0 / 33 / 0.5 / 30 / 0 |
| Hemingway Daquiri | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 0 / 23 / 0 / 19 / 0 |
| Irish Breakfast | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 11 / 0 |
| Jagermeister Spice | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Kiwi Margarita | 1 serving | only in draft B | not found | 340 / 0 / 0 / 0 / 0 / 45 / 54 / 0 / 49 / 0 |
| Long Island Tea- House | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 22 / 0 / 21 / 0 |
| Long Island Tea- Top Shelf | 1 serving | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 0 / 19 / 0 / 17 / 0 |
| Mango Margarita | 1 serving | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 50 / 40 / 0 / 38 / 0 |
| Margarita Pitcher | 1 serving | only in draft B | not found | 630 / 0 / 0 / 0 / 0 / 125 / 96 / 0.5 / 88 / 0 |
| Meister Mary | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 470 / 21 / 2 / 17 / 1 |
| Meyers Platinum & Pepsi | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 5 / 0 |
| Mojito Pitcher | 1 serving | only in draft B | not found | 520 / 0 / 0 / 0 / 0 / 0 / 69 / 1 / 63 / 0 |
| Painkiller | 1 serving | only in draft B | not found | 350 / 3 / 2.5 / 0 / 0 / 20 / 46 / 2 / 41 / 0.5 |
| Patron Pineapple Margarita | 1 serving | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0.5 / 0 |
| Patron Xo Cafe Incendio | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Pineapple Mango Mojito | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 5 / 40 / 1 / 36 / 0 |
| Pomegranate Margarita | 1 serving | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 55 / 48 / 0 / 44 / 0 |
| Sangria (Red) | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 5 / 30 / 1 / 23 / 0.5 |
| Sangria (White) | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 24 / 1 / 19 / 0.5 |
| Sangria Pitcher (Red) | 1 serving | only in draft B | not found | 450 / 0 / 0 / 0 / 0 / 15 / 76 / 1 / 59 / 1 |
| Sangria Pitcher (White) | 1 serving | only in draft B | not found | 390 / 0 / 0 / 0 / 0 / 0 / 58 / 1 / 48 / 1 |
| Sauza Blue Margarita | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 45 / 36 / 0 / 33 / 0 |
| Sauza Blue Tequila Sunrise | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 9 / 0 |
| Shooter- Irish Car Bomb | 1 serving | only in draft B | not found | 120 / 2 / 1 / 0 / 5 / 35 / 7 / 0 / 3 / 0.5 |
| Shooter- Skittles | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 11 / 0 |
| Shooters- Baby Irish Stout | 1 serving | only in draft B | not found | 100 / 2 / 1 / 0 / 5 / 15 / 9 / 0 / 9 / 0 |
| Shooters- Cinnamon Toast Crunch | 1 serving | only in draft B | not found | 120 / 2 / 0 / 0 / 10 / 0 / 10 / 0 / 0 / 0.5 |
| Shooters- Fire Apple | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 2 / 0 |
| Shooters- Grape Bomb | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 25 / 7 / 0 / 7 / 0 |
| Shooters- Jager Bomb | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 25 / 18 / 0 / 18 / 0 |
| Shot- Captain Morgan (Double) | 1 serving | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Captain Morgan- Single | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Jagermeister | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 11 / 0 |
| Patron Xo Cafe | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 11 / 0 |
| Smirnoff Grape | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Vegas Bomb | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 30 / 15 / 0 / 15 / 0 |
| Smirnoff Bay Breeze | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 5 / 6 / 0 / 6 / 0 |

## Spot check (7 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Miller Lite | 23 oz. | 150 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0.5 |
| Founders All Day IPA | 14 oz. Pint | 160 / 0 / 0 / 0 / 0 / 30 / 13 / 1 / 0 / 1 |
| Atlantic Salmon - Broiled | 1 serving | 810 / 63 / 21 / 0 / 150 / 860 / 0.5 / 0 / 0 / 53 |
| New Belgium Fat Tire | 14 oz. Pint | 160 / 0 / 0 / 0 / 0 / 5 / 10 / 2 / 0 / 2 |
| Atlantic Salmon - Grilled | 1 serving | 500 / 29 / 6 / 0 / 150 / 770 / 1 / 0 / 0 / 53 |
| Terapin Hopsecutioner IPA | 1 serving | 210 / 0 / 0 / 0 / 0 / 15 / 15 / 0 / 0 / 2 |
| Korean BBQ | 1 fl. oz. | 70 / 1.5 / 0 / 0 / 0 / 590 / 13 / 0 / 11 / 1 |
