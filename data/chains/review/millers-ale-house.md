# Miller's Ale House: lines for a person

Guide: https://millersalehouse.com/wp-content/uploads/2025/08/AUG-2025-MAH-NUTRITION-GUIDE.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (148)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/millers-ale-house.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Thousand Island | 1 fl. oz. | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 137 / – / – / – / – / – / – / – / – / – | 137 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 82); check the size, mostly zeros: look; B: numbers found after the name (line 82); check the size, mostly zeros: look |
| Choice Center Cut Sirloin | 6oz - Grilled (Discontinued 3/23/25) | only in draft B | not found | 290 / 14 / 6 / 0 / 105 / 710 / 0.5 / 0 / 0 / 37 | B: numbers found after the name (line 105); check the size |
| Choice Center Cut Sirloin | 10oz - Grilled (Discontinued 3/23/25) | only in draft B | not found | 510 / 26 / 11 / 0 / 170 / 1920 / 2 / 0.5 / 0.5 / 62 | B: numbers found after the name (line 105); check the size |
| Filet Mignon - Grilled (Discontinued 3/23/25) | 1 serving | only in draft B | not found | 420 / 23 / 9 / 0 / 160 / 750 / 0.5 / 0 / 0 / 51 | B: numbers found after the name (line 108); check the size |
| Ribeye - Grilled | 1 serving | only in draft B | not found | 990 / 81 / 36 / 4 / 230 / 1410 / 2 / 0 / 0 / 63 | B: numbers found after the name (line 109); check the size |
| NY Strip - Grilled | 1 serving | only in draft B | not found | 870 / 58 / 23 / 0 / 278 / 810 / 0 / 0 / 0 / 66 | B: numbers found after the name (line 110); check the size |
| Filet Mignon - 6 oz Grilled | 1 serving | only in draft B | not found | 640 / 26 / 9 / 0 / 70 / 1250 / 1 / 0 / 0 / 26 | B: numbers found after the name (line 111); check the size |
| Flat Iron - 6 oz Grilled | 1 serving | only in draft B | not found | 310 / 19 / 7 / 0 / 115 / 710 / 1 / 0 / 0 / 32 | B: numbers found after the name (line 112); check the size |
| Chicken | 1 serving | only in draft B | not found | 810 / 29 / 15 / 0 / 160 / 3110 / 79 / 5 / 17 / 60 | B: numbers found after the name (line 114); check the size |
| Guacamole | 1 serving | only in draft B | not found | 90 / 7 / 1.5 / 0 / 0 / 330 / 5 / 3 / 0 / 2 | B: numbers found after the name (line 115); check the size |
| Cold Set | 1 serving | only in draft B | not found | 220 / 17 / 11 / 0 / 60 / 790 / 7 / 1 / 5 / 9 | B: numbers found after the name (line 116); check the size |
| Classic Cheeseburger | 1 serving | only in draft B | not found | 1010 / 70 / 30 / 0 / 200 / 2150 / 42 / 6 / 8 / 53 | B: numbers found after the name (line 119); check the size |
| Add Bacon | 1 serving | only in draft B | not found | 90 / 7 / 2.5 / 0 / 0 / 350 / 0 / 0 / 0 / 5 | B: numbers found after the name (line 120); check the size |
| Millers Veggie Burger | 1 serving | only in draft B | not found | 600 / 38 / 6 / 0 / 0 / 2350 / 61 / 6 / 15 / 11 | B: numbers found after the name (line 121); check the size |
| Add Guacamole | 1 serving | only in draft B | not found | 90 / 7 / 1.5 / 0 / 0 / 330 / 5 / 3 / 0 / 2 | B: numbers found after the name (line 122); check the size |
| Brunch Burger | 1 serving | only in draft B | not found | 1440 / 114 / 37 / 0 / 225 / 2690 / 46 / 4 / 14 / 56 | B: numbers found after the name (line 123); check the size |
| Prime Burger | 1 serving | only in draft B | not found | 1280 / 92 / 34 / 0 / 235 / 3040 / 51 / 5 / 11 / 64 | B: numbers found after the name (line 124); check the size |
| Cue Bacon Cheeseburger | 1 serving | only in draft B | not found | 1160 / 79 / 32 / 0 / 215 / 2890 / 53 / 4 / 15 / 58 | B: numbers found after the name (line 125); check the size |
| Add Burger Patty (with cheese) | 1 serving | only in draft B | not found | 680 / 57 / 25 / 0 / 165 / 1630 / 2 / 0 / 0 / 37 | B: numbers found after the name (line 126); check the size |
| Big Red® | 1 serving | only in draft B | not found | 820 / 37 / 10 / 0 / 120 / 6000 / 61 / 4 / 7 / 56 | B: numbers found after the name (line 129); check the size |
| Grilled Chicken BLT | 1 serving | only in draft B | not found | 610 / 23 / 6 / 0 / 130 / 3050 / 41 / 4 / 8 / 57 | B: numbers found after the name (line 130); check the size |
| Mahi-Mahi - Grilled | 1 serving | only in draft B | not found | 390 / 3.5 / 0.5 / 0 / 165 / 1160 / 41 / 6 / 8 / 50 | B: numbers found after the name (line 131); check the size |
| Mahi-Mahi - Blackened | 1 serving | only in draft B | not found | 450 / 7 / 1.5 / 0.5 / 165 / 1230 / 46 / 6 / 8 / 51 | B: numbers found after the name (line 132); check the size |
| Mahi-Mahi - Broiled | 1 serving | only in draft B | not found | 710 / 37 / 15 / 0 / 165 / 1260 / 41 / 6 / 8 / 50 | B: numbers found after the name (line 133); check the size |
| Philly Cheese Steak | 1 serving | only in draft B | not found | 950 / 50 / 19 / 0 / 145 / 3030 / 58 / 5 / 5 / 59 | B: numbers found after the name (line 134); check the size |
| Add Mushrooms and Peppers | 1 serving | only in draft B | not found | 70 / 6 / 1 / 0 / 0 / 240 / 3 / 1 / 2 / 2 | B: numbers found after the name (line 135); check the size |
| Prime Rib French Dip | 1 serving | only in draft B | not found | 1110 / 61 / 30 / 0 / 270 / 4080 / 63 / 5 / 10 / 72 | B: numbers found after the name (line 136); check the size |
| Capt. Jack's Buried Treasure® | 1 serving | only in draft B | not found | 1420 / 70 / 42 / 0 / 85 / 770 / 164 / 2 / 147 / 8 | B: numbers found after the name (line 138); check the size |
| Capt. Jack's Buried Treasure® Pint | 1 serving | only in draft B | not found | 1100 / 56 / 32 / 4 / 84 / 352 / 116 / 2 / 112 / 8 | B: numbers found after the name (line 139); check the size |
| Ghirardelli® Chocolate Brownie Sundae | 1 serving | only in draft B | not found | 1620 / 77 / 85 / 93 / 120 / 670 / 223 / 3 / 166 / 10 | B: numbers found after the name (line 140); check the size |
| Pull N' Pop Donuts | 1 serving | only in draft B | not found | 1290 / 64 / 26 / 0 / 0 / 760 / 167 / 2 / 106 / 0 | B: numbers found after the name (line 141); check the size |
| Strawberry Cheesecake | 1 serving | only in draft B | not found | 1040 / 47 / 34 / 1.5 / 190 / 480 / 73 / 6 / 59 / 12 | B: numbers found after the name (line 142); check the size |
| Grilled Chicken Breast | 1 serving | only in draft B | not found | 190 / 1.5 / 0 / 0 / 95 / 940 / 0 / 0 / 0 / 40 | B: numbers found after the name (line 144); check the size |
| Chicken Zingers® | 1 serving | only in draft B | not found | 440 / 26 / 4.5 / 0 / 100 / 210 / 8 / 0 / 0 / 42 | B: numbers found after the name (line 145); check the size |
| Mac & Cheese | 1 serving | only in draft B | not found | 300 / 9 / 2.5 / 0 / 15 / 550 / 45 / 2 / 8 / 10 | B: numbers found after the name (line 146); check the size |
| Fried Shrimp Platter | 1 serving | only in draft B | not found | 1670 / 82 / 15 / 0 / 515 / 2210 / 132 / 3 / 8 / 85 | B: numbers found after the name (line 147); check the size |
| Cheese Quesadilla | 1 serving | only in draft B | not found | 310 / 19 / 7 / 0 / 20 / 570 / 28 / 0 / 2 / 9 | B: numbers found after the name (line 148); check the size |
| Fried Shrimp | 1 serving | only in draft B | not found | 460 / 37 / 7 / 0 / 65 / 200 / 17 / 0.5 / 0 / 11 | B: numbers found after the name (line 149); check the size |
| Mini Burger | 1 serving | only in draft B | not found | 500 / 31 / 12 / 0 / 85 / 550 / 33 / 1 / 5 / 23 | B: numbers found after the name (line 150); check the size |
| Seasonal Fruit | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 15 / 3 / 12 / 1 | B: numbers found after the name (line 151); check the size |
| Applesauce | 1 serving | only in draft B | not found | 50 / 0 / 0 / 0 / 0 / 5 / 13 / 1 / 10 / 0 | B: numbers found after the name (line 152); check the size |
| French Fries | 1 serving | only in draft B | not found | 400 / 41 / 7 / 0 / 0 / 450 / 11 / 1 / 0 / 1 | B: numbers found after the name (line 153); check the size |
| Seasonal Vegetable | 1 serving | only in draft B | not found | 90 / 4 / 1.5 / 0 / 0 / 990 / 11 / 3 / 3 / 2 | B: numbers found after the name (line 154); check the size |
| Vanilla Ice Cream Scoop | 1 serving | only in draft B | not found | 280 / 16 / 10 / 0 / 60 / 80 / 32 / 0 / 24 / 0 | B: numbers found after the name (line 155); check the size |
| Ice Cream Sandwich | 1 serving | only in draft B | not found | 150 / 4.5 / 2.5 / 0 / 15 / 115 / 26 / 0 / 14 / 3 | B: numbers found after the name (line 156); check the size |
| Push Pop | 1 serving | only in draft B | not found | 80 / 1 / 0.5 / 0 / 2.5 / 25 / 18 / 0 / 15 / 0 | B: numbers found after the name (line 157); check the size |
| Dad's Homemade Meatloaf | 1 serving | only in draft B | not found | 900 / 50 / 19 / 2 / 225 / 2260 / 80 / 3 / 32 / 43 | B: numbers found after the name (line 160); check the size |
| English Pub Fish & Chips (served with fries) | 1 serving | only in draft B | not found | 1260 / 103 / 18 / 0 / 75 / 1640 / 50 / 3 / 9 / 28 | B: numbers found after the name (line 161); check the size |
| Pork Tenderloin Cuban Sandwich | 1 serving | only in draft B | not found | 1250 / 72 / 25 / 0.5 / 155 / 3490 / 91 / 5 / 4 / 53 | B: not as drafted (line 163 lacks 0.5) |
| Chicken Enchiladas | 1 serving | only in draft B | not found | 1220 / 50 / 22 / 0 / 130 / 2700 / 152 / 6 / 14 / 45 | B: numbers found after the name (line 164); check the size |
| Cajun Chicken Salad | 1 serving | only in draft B | not found | 960 / 35 / 11 / 0 / 95 / 3210 / 114 / 18 / 16 / 48 | B: numbers found after the name (line 165); check the size |
| Tush Push Burger | 1 serving | only in draft B | not found | 1310 / 65 / 23 / 0 / 60 / 5960 / 146 / 9 / 22 / 40 | B: numbers found after the name (line 167); check the size |
| The Field Goal Trio | 1 serving | only in draft B | not found | 1410 / 79 / 14 / 0 / 555 / 1210 / 10 / 0.5 / 5 / 164 | B: numbers found after the name (line 168); check the size |
| Buffalo Shrimp | 1 serving | only in draft B | not found | 1170 / 76 / 14 / 0 / 410 / 1150 / 52 / 2 / 6 / 61 | B: numbers found after the name (line 169); check the size |
| Big Red Zone | 1 serving | only in draft B | not found | 1450 / 85 / 32 / 0 / 355 / 8060 / 59 / 0.5 / 28 / 105 | B: numbers found after the name (line 170); check the size |
| Zingers® (no wing sauce) | 1 serving | only in draft B | not found | 750 / 49 / 8 / 0 / 140 / 240 / 18 / 0.5 / 3 / 58 | B: numbers found after the name (line 173); check the size |
| Barbecue Baby Back Ribs | 1 serving | only in draft B | not found | 1320 / 83 / 35 / 0 / 400 / 3830 / 43 / 0 / 38 / 95 | B: numbers found after the name (line 174); check the size |
| 12 Wings | 1 serving | only in draft B | not found | 640 / 13 / 2 / 0 / 315 / 210 / 5 / 0 / 5 / 127 | B: numbers found after the name (line 175); check the size |
| Prime Rib- 12 oz | 1 serving | only in draft B | not found | 810 / 39 / 13 / 0 / 325 / 3950 / 6 / 1 / 2 / 109 | B: numbers found after the name (line 176); check the size |
| Prime Rib- 16 oz | 1 serving | only in draft B | not found | 1650 / 127 / 56 / 8 / 435 / 4860 / 7 / 1 / 2 / 118 | B: numbers found after the name (line 177); check the size |
| Flat Iron & Fried Shrimp | 1 serving | only in draft B | not found | 700 / 29 / 9 / 0 / 290 / 1220 / 42 / 1 / 0 / 61 | B: numbers found after the name (line 180); check the size |
| Baked Potato (with Butter and Sour Cream) | 1 serving | only in draft B | not found | 340 / 19 / 7 / 0 / 20 / 140 / 37 / 4 / 3 / 5 | B: numbers found after the name (line 183); check the size |
| Housemade Kettle Chips | 1 serving | only in draft B | not found | 350 / 28 / 3.5 / 2 / 0 / 540 / 21 / 2 / 1 / 2 | B: numbers found after the name (line 184); check the size |
| Mashed Potatoes (with Gravy) | 1 serving | only in draft B | not found | 150 / 4.5 / 1.5 / 0 / 5 / 880 / 24 / 2 / 0 / 3 | B: numbers found after the name (line 185); check the size |
| Cilantro Lime Rice | 1 serving | only in draft B | not found | 250 / 4 / 1 / 0 / 0 / 0 / 48 / 1 / 1 / 5 | B: numbers found after the name (line 187); check the size |
| Vegetable Medley | 1 serving | only in draft B | not found | 50 / 2 / 1 / 0 / 0 / 80 / 6 / 2 / 2 / 2 | B: numbers found after the name (line 188); check the size |
| Loaded Baked Potato | 1 serving | only in draft B | not found | 540 / 36 / 15 / 0 / 95 / 940 / 35 / 2 / 4 / 21 | B: numbers found after the name (line 190); check the size |
| Loaded French Fries | 1 serving | only in draft B | not found | 1010 / 98 / 21 / 0 / 80 / 2360 / 15 / 0.5 / 2 / 16 | B: numbers found after the name (line 191); check the size |
| Onion Rings | 1 serving | only in draft B | not found | 1060 / 99 / 16 / 0 / 10 / 1220 / 36 / 2 / 2 / 3 | B: numbers found after the name (line 192); check the size |
| House Salad - sub | 1 serving | only in draft B | not found | 290 / 8 / 2.5 / 0 / 15 / 570 / 43 / 10 / 8 / 13 | B: numbers found after the name (line 193); check the size |
| Caesar Salad - sub | 1 serving | only in draft B | not found | 280 / 22 / 4.5 / 0 / 20 / 750 / 16 / 2 / 3 / 8 | B: numbers found after the name (line 194); check the size |
| Shareable Fries | 1 serving | only in draft B | not found | 620 / 60 / 10 / 0 / 0 / 1490 / 16 / 0.5 / 0 / 2 | B: numbers found after the name (line 197); check the size |
| Shareable Onion Rings | 1 serving | only in draft B | not found | 1610 / 131 / 22 / 0 / 10 / 2000 / 91 / 4 / 2 / 8 | B: numbers found after the name (line 198); check the size |
| 12 Fried Shrimp with Cocktail Sauce | 1 serving | only in draft B | not found | 600 / 28 / 5 / 0 / 175 / 1220 / 53 / 1 / 8 / 29 | B: numbers found after the name (line 199); check the size |
| 4 Mozzarella Sticks | 1 serving | only in draft B | not found | 430 / 29 / 10 / 0 / 40 / 900 / 31 / 2 / 5 / 15 | B: numbers found after the name (line 200); check the size |
| Caesar Salad | 1 serving | only in draft B | not found | 560 / 45 / 9 / 0 / 35 / 1510 / 32 / 4 / 5 / 16 | B: numbers found after the name (line 75); check the size |
| House Salad | 1 serving | only in draft B | not found | 410 / 12 / 5 / 0 / 30 / 770 / 56 / 17 / 12 / 21 | B: numbers found after the name (line 74); check the size |
| Coca-Cola | 1 serving | only in draft B | not found | 340 / 0 / 0 / 0 / 0 / 85 / 89 / 0 / 89 / 0 | B: numbers found after the name (line 217); check the size |
| Diet Coke | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 110 / 1 / 0.18 / 0 / 0 | B: numbers found after the name (line 218); check the size |
| Coca-Cola Zero | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 90 / 0 / 0.19 / 0 / 0 | B: numbers found after the name (line 219); check the size, mostly zeros: look |
| Sprite | 1 serving | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 150 / 82 / 0 / 81 / 0 | B: numbers found after the name (line 220); check the size |
| Pibb Xtra | 1 serving | only in draft B | not found | 320 / 0 / 0 / 0 / 0 / 120 / 84 / 0.22 / 84 / 0 | B: numbers found after the name (line 221); check the size |
| Minute Maid Lemonade(HFCS) | 1 serving | only in draft B | not found | 320 / 0 / 0 / 0 / 0 / 210 / 84 / 0 / 80 / 0 | B: numbers found after the name (line 222); check the size |
| Fuze Raspberry Tea | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 110 / 51 / 0 / 49 / 0 | B: numbers found after the name (line 223); check the size |
| Barq's Root Beer | 1 serving | only in draft B | not found | 370 / 0 / 0 / 0 / 0 / 115 / 97 / 0.21 / 96 / 0 | B: numbers found after the name (line 224); check the size |
| Fanta Orange Postmix | 1 serving | only in draft B | not found | 340 / 0 / 0 / 0 / 0 / 90 / 90 / 0 / 88 / 0 | B: numbers found after the name (line 225); check the size |
| Mello Yello | 1 serving | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 110 / 96 / 0.1 / 96 / 0 | B: numbers found after the name (line 226); check the size |
| Fresh Brewed Iced Tea | 1 serving | only in draft B | not found | 2 / 0 / 0 / 0 / 0 / 7 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 227); check the size |
| Fresh Brewed Sweet Tea | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 14 / 0 / 42 / 1 | B: numbers found after the name (line 228); check the size |
| S&D Coffee | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 229); check the size, mostly zeros: look |
| Perrier | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / – / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 230); check the size, mostly zeros: look |
| Dasani | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / – / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 231); check the size, mostly zeros: look |
| "The Don" Blanco | 1 serving | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 55 / 33 / 0 / 30 / 0 | B: numbers found after the name (line 233); check the size |
| 1800 Perfect Margarita | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 45 / 31 / 0 / 27 / 0 | B: numbers found after the name (line 234); check the size |
| 1800 Watermelon Rita Pitcher | 1 serving | only in draft B | not found | 810 / 0 / 0 / 0 / 0 / 40 / 138 / 0.5 / 133 / 0 | B: numbers found after the name (line 235); check the size |
| Ale House Cosmo | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 10 / 14 / 0 / 13 / 0 | B: numbers found after the name (line 236); check the size |
| Apple Pear Martini | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 15 / 32 / 0 / 30 / 0 | B: numbers found after the name (line 237); check the size |
| Beach Whiskey Bonfire Cinnamon | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 6 / 0 | B: numbers found after the name (line 238); check the size |
| Beach Whiskey Island Coconut | 1 serving | only in draft B | not found | 50 / 0 / 0 / 0 / 0 / 0 / 4 / 0 / 5 / 0 | B: numbers found after the name (line 239); check the size |
| Big LIT | 1 serving | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 0 / 16 / 0 / 14 / 0 | B: numbers found after the name (line 240); check the size |
| Old Fashioned | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 20 / 0 / 19 / 0 | B: numbers found after the name (line 241); check the size |
| Blackberry Smash | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 23 / 2 / 20 / 0.5 | B: numbers found after the name (line 242); check the size |
| Bulleit Manhattan | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 243); check the size, mostly zeros: look |
| Captain Morgan Cannon Blast | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 244); check the size, mostly zeros: look |
| Cherry Limeade | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 5 / 39 / 2 / 32 / 0 | B: numbers found after the name (line 245); check the size |
| Curzan Classic Mojito | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 33 / 1 / 29 / 0 | B: numbers found after the name (line 246); check the size |
| Don Blanco Shot | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 247); check the size, mostly zeros: look |
| Electric Blue LIT Pitcher | 1 serving | only in draft B | not found | 500 / 0 / 0 / 0 / 0 / 0 / 54 / 0 / 48 / 0 | B: numbers found after the name (line 248); check the size |
| Electric Lemonade | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 27 / 0 / 25 / 0 | B: numbers found after the name (line 249); check the size |
| Grande Margarita | 1 serving | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 55 / 36 / 0 / 34 / 0 | B: numbers found after the name (line 250); check the size |
| Grey Goose Mule | 1 serving | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 0 / 33 / 0.5 / 30 / 0 | B: numbers found after the name (line 251); check the size |
| Hemingway Daquiri | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 0 / 23 / 0 / 19 / 0 | B: numbers found after the name (line 252); check the size |
| Irish Breakfast | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 11 / 0 | B: numbers found after the name (line 253); check the size |
| Jagermeister Spice | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 254); check the size, mostly zeros: look |
| Kiwi Margarita | 1 serving | only in draft B | not found | 340 / 0 / 0 / 0 / 0 / 45 / 54 / 0 / 49 / 0 | B: numbers found after the name (line 255); check the size |
| Long Island Tea- House | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 22 / 0 / 21 / 0 | B: numbers found after the name (line 256); check the size |
| Long Island Tea- Top Shelf | 1 serving | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 0 / 19 / 0 / 17 / 0 | B: numbers found after the name (line 257); check the size |
| Mango Margarita | 1 serving | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 50 / 40 / 0 / 38 / 0 | B: numbers found after the name (line 258); check the size |
| Margarita Pitcher | 1 serving | only in draft B | not found | 630 / 0 / 0 / 0 / 0 / 125 / 96 / 0.5 / 88 / 0 | B: numbers found after the name (line 259); check the size |
| Meister Mary | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 470 / 21 / 2 / 17 / 1 | B: numbers found after the name (line 260); check the size |
| Meyers Platinum & Pepsi | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 5 / 0 | B: numbers found after the name (line 261); check the size |
| Mojito Pitcher | 1 serving | only in draft B | not found | 520 / 0 / 0 / 0 / 0 / 0 / 69 / 1 / 63 / 0 | B: numbers found after the name (line 262); check the size |
| Painkiller | 1 serving | only in draft B | not found | 350 / 3 / 2.5 / 0 / 0 / 20 / 46 / 2 / 41 / 0.5 | B: numbers found after the name (line 263); check the size |
| Patron Pineapple Margarita | 1 serving | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0.5 / 0 | B: numbers found after the name (line 264); check the size |
| Patron Xo Cafe Incendio | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 265); check the size, mostly zeros: look |
| Pineapple Mango Mojito | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 5 / 40 / 1 / 36 / 0 | B: numbers found after the name (line 266); check the size |
| Pomegranate Margarita | 1 serving | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 55 / 48 / 0 / 44 / 0 | B: numbers found after the name (line 267); check the size |
| Sangria (Red) | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 5 / 30 / 1 / 23 / 0.5 | B: numbers found after the name (line 268); check the size |
| Sangria (White) | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 24 / 1 / 19 / 0.5 | B: numbers found after the name (line 269); check the size |
| Sangria Pitcher (Red) | 1 serving | only in draft B | not found | 450 / 0 / 0 / 0 / 0 / 15 / 76 / 1 / 59 / 1 | B: numbers found after the name (line 270); check the size |
| Sangria Pitcher (White) | 1 serving | only in draft B | not found | 390 / 0 / 0 / 0 / 0 / 0 / 58 / 1 / 48 / 1 | B: numbers found after the name (line 271); check the size |
| Sauza Blue Margarita | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 45 / 36 / 0 / 33 / 0 | B: numbers found after the name (line 272); check the size |
| Sauza Blue Tequila Sunrise | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 9 / 0 | B: numbers found after the name (line 273); check the size |
| Shooter- Irish Car Bomb | 1 serving | only in draft B | not found | 120 / 2 / 1 / 0 / 5 / 35 / 7 / 0 / 3 / 0.5 | B: numbers found after the name (line 274); check the size |
| Shooter- Skittles | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 11 / 0 | B: numbers found after the name (line 275); check the size |
| Shooters- Baby Irish Stout | 1 serving | only in draft B | not found | 100 / 2 / 1 / 0 / 5 / 15 / 9 / 0 / 9 / 0 | B: numbers found after the name (line 276); check the size |
| Shooters- Cinnamon Toast Crunch | 1 serving | only in draft B | not found | 120 / 2 / 0 / 0 / 10 / 0 / 10 / 0 / 0 / 0.5 | B: numbers found after the name (line 277); check the size |
| Shooters- Fire Apple | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 2 / 0 | B: numbers found after the name (line 278); check the size |
| Shooters- Grape Bomb | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 25 / 7 / 0 / 7 / 0 | B: numbers found after the name (line 279); check the size |
| Shooters- Jager Bomb | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 25 / 18 / 0 / 18 / 0 | B: numbers found after the name (line 280); check the size |
| Shot- Captain Morgan (Double) | 1 serving | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 281); check the size, mostly zeros: look |
| Captain Morgan- Single | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 282); check the size, mostly zeros: look |
| Jagermeister | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 11 / 0 | B: numbers found after the name (line 283); check the size |
| Patron Xo Cafe | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 11 / 0 | B: numbers found after the name (line 284); check the size |
| Smirnoff Grape | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 285); check the size, mostly zeros: look |
| Vegas Bomb | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 30 / 15 / 0 / 15 / 0 | B: numbers found after the name (line 286); check the size |
| Smirnoff Bay Breeze | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 5 / 6 / 0 / 6 / 0 | B: numbers found after the name (line 287); check the size |
| Creamy Spinach & Artichoke Dip | 1 serving | both read it the same, but its protein, carbs and fat make 678 kcal, not 810 | 810 / 38 / 26 / 0.5 / 140 / 1240 / 66 / 13 / 0.5 / 18 | 810 / 38 / 26 / 0.5 / 140 / 1240 / 66 / 13 / 0.5 / 18 | A: numbers found after the name (line 45); check the size; B: numbers found after the name (line 45); check the size |

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
