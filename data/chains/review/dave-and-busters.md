# Dave & Buster's: lines for a person

Guide: https://www.daveandbusters.com/content/dam/dnb/us/en/menu/nutritional-menu/Nutritional%20Menu.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (77)

Fix each line in `menus/dave-and-busters.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Smashed Burger Sliders | 1 serving | differ: protein_g | 860 / 53 / 16 / 0 / 110 / 3190 / 56 / 5 / 13 / 9 | 860 / 53 / 16 / 0 / 110 / 3190 / 56 / 5 / 13 / – |
| Barbacoa Quesedilla | 1 serving | differ: protein_g | 1150 / 76 / 34 / 1 / 50 / 2330 / 56 / 8 / 7 / 0 | 1150 / 76 / 34 / 1 / 50 / 2330 / 56 / 8 / 7 / – |
| Loaded Barbacoa Fries | 1 serving | differ: protein_g | 1550 / 84 / 37 / 0 / 180 / 6370 / 134 / 17 / 10 / 1 | 1550 / 84 / 37 / 0 / 180 / 6370 / 134 / 17 / 10 / – |
| Fries GPT | 1 serving | differ: protein_g | 1340 / 89 / 20 / 0 / 40 / 2750 / 126 / 19 / 3 / 2 | 1340 / 89 / 20 / 0 / 40 / 2750 / 126 / 19 / 3 / – |
| Cheese Stick Stock | 1 serving | differ: protein_g | 950 / 48 / 29 / 1.5 / 155 / 3320 / 81 / 4 / 8 / 2 | 950 / 48 / 29 / 1.5 / 155 / 3320 / 81 / 4 / 8 / – |
| Preted Dogs | 1 serving | differ: protein_g | 1030 / 71 / 18 / 0 / 105 / 2030 / 71 / 1 / 11 / 2 | 1030 / 71 / 18 / 0 / 105 / 2030 / 71 / 1 / 11 / – |
| Kickin' Chicken Potstickers | 1 serving | differ: protein_g | 710 / 38 / 2 / 0 / 40 / 1350 / 77 / 3 / 2 / 0 | 710 / 38 / 2 / 0 / 40 / 1350 / 77 / 3 / 2 / – |
| Pepsi Cholo Queso | 1 serving | differ: protein_g | 1010 / 61 / 27 / 0 / 105 / 2650 / 78 / 12 / 8 / 0 | 1010 / 61 / 27 / 0 / 105 / 2650 / 78 / 12 / 8 / – |
| Fried Pickles | 1 serving | differ: protein_g | 840 / 49 / 7 / 0 / 40 / 2990 / 85 / 4 / 4 / 0 | 840 / 49 / 7 / 0 / 40 / 2990 / 85 / 4 / 4 / – |
| Chicken Cantina Nachos | 1 serving | differ: protein_g | 1120 / 60 / 24 / 0 / 140 / 3340 / 98 / 13 / 11 / 2 | 1120 / 60 / 24 / 0 / 140 / 3340 / 98 / 13 / 11 / – |
| Stay Salty Pretzel Sticks | 1 serving | differ: protein_g | 1310 / 40 / 18 / 0 / 35 / 3330 / 202 / 5 / 37 / 15 | 1310 / 40 / 18 / 0 / 35 / 3330 / 202 / 5 / 37 / – |
| Smokehouse Ribs Half Rock | 1 serving | differ: protein_g | 1460 / 79 / 28 / 0 / 205 / 2500 / 134 / 23 / 67 / 45 | 1460 / 79 / 28 / 0 / 205 / 2500 / 134 / 23 / 67 / – |
| 12-ox. Ribøya | 1 serving | differ: protein_g | 1980 / 114 / 40 / 5 / 280 / 3740 / 55 / 6 / 8 / 4 | 1980 / 114 / 40 / 5 / 280 / 3740 / 55 / 6 / 8 / – |
| Chicken Parm Pasta | 1 serving | differ: protein_g | 1580 / 94 / 37 / 0 / 270 / 2930 / 89 / 6 / 6 / 4 | 1580 / 94 / 37 / 0 / 270 / 2930 / 89 / 6 / 6 / – |
| Cajun Shrimp Pasta | 1 serving | differ: protein_g | 1440 / 84 / 20 / 2.5 / 240 / 1980 / 115 / 13 / 7 / 0 | 1440 / 84 / 20 / 2.5 / 240 / 1980 / 115 / 13 / 7 / – |
| Creamy Chicken Pasta | 1 serving | differ: protein_g | 1550 / 88 / 24 / 1 / 165 / 3830 / 120 / 10 / 13 / 3 | 1550 / 88 / 24 / 1 / 165 / 3830 / 120 / 10 / 13 / – |
| Fish & Chips | 1 serving | differ: protein_g | 930 / 60 / 13 / 0 / 45 / 2240 / 74 / 11 / 2 / 4 | 930 / 60 / 13 / 0 / 45 / 2240 / 74 / 11 / 2 / – |
| Chicken Strips | 1 serving | differ: protein_g | 1210 / 68 / 14 / 0 / 130 / 2850 / 112 / 13 / 27 / 18 | 1210 / 68 / 14 / 0 / 130 / 2850 / 112 / 13 / 27 / – |
| SMOKED BURGERS & HANDHELD | 1 serving | differ: protein_g | 1460 / 94 / 32 / 0 / 565 / 3460 / 125 / 13 / 21 / 3 | 1460 / 94 / 32 / 0 / 565 / 3460 / 125 / 13 / 21 / – |
| Bleekly Smashed Burger | 1 serving | differ: protein_g | 1630 / 94 / 23 / 0 / 145 / 3690 / 114 / 13 / 7 / 3 | 1630 / 94 / 23 / 0 / 145 / 3690 / 114 / 13 / 7 / – |
| Spicy Smashed Burger | 1 serving | differ: protein_g | 1250 / 64 / 23 / 0 / 145 / 3180 / 121 / 13 / 14 / 9 | 1250 / 64 / 23 / 0 / 145 / 3180 / 121 / 13 / 14 / – |
| Buster's Bacon Smashed Burger | 1 serving | differ: protein_g | 1520 / 87 / 29 / 0 / 190 / 4180 / 121 / 13 / 14 / 7 | 1520 / 87 / 29 / 0 / 190 / 4180 / 121 / 13 / 14 / – |
| All-American Smashed Burger | 1 serving | differ: protein_g | 1230 / 63 / 22 / 0 / 135 / 3240 / 114 / 13 / 10 / 5 | 1230 / 63 / 22 / 0 / 135 / 3240 / 114 / 13 / 10 / – |
| Chicken Sandwich | 1 serving | differ: protein_g | 1060 / 33 / 8 / 0 / 15 / 2040 / 172 / 25 / 43 / 8 | 1060 / 33 / 8 / 0 / 15 / 2040 / 172 / 25 / 43 / – |
| Fruquja Chicken Sandwich | 1 serving | differ: protein_g | 1150 / 43 / 9 / 0 / 145 / 4210 / 126 / 14 / 9 / 3 | 1150 / 43 / 9 / 0 / 145 / 4210 / 126 / 14 / 9 / – |
| Call Grilled Chicken Club | 1 serving | differ: protein_g | 1100 / 49 / 15 / 0 / 150 / 2300 / 109 / 12 / 6 / 3 | 1100 / 49 / 15 / 0 / 150 / 2300 / 109 / 12 / 6 / – |
| BBQ Chicken Flatbread | 1 serving | differ: protein_g | 1390 / 49 / 27 / 0 / 110 / 4740 / 170 / 9 / 47 / 40 | 1390 / 49 / 27 / 0 / 110 / 4740 / 170 / 9 / 47 / – |
| 5-Cheese Flatbread | 1 serving | differ: protein_g | 1050 / 37 / 22 / 0 / 10 / 2590 / 134 / 8 / 8 / 5 | 1050 / 37 / 22 / 0 / 10 / 2590 / 134 / 8 / 8 / – |
| Double Pepper Up on a Flatbread | 1 serving | differ: protein_g | 1490 / 77 / 39 / 0.5 / 85 / 4030 / 130 / 6 / 8 / 5 | 1490 / 77 / 39 / 0.5 / 85 / 4030 / 130 / 6 / 8 / – |
| Margherita Flatbread | 1 serving | differ: protein_g | 1050 / 38 / 21 / 0 / 25 / 2640 / 135 / 8 / 9 / 6 | 1050 / 38 / 21 / 0 / 25 / 2640 / 135 / 8 / 9 / – |
| Bone-In Wings - No Sauce | 1 serving | differ: protein_g | 1070 / 82 / 17 / 0 / 270 / 1470 / 31 / 4 / 11 / 8 | 1070 / 82 / 17 / 0 / 270 / 1470 / 31 / 4 / 11 / – |
| Boneless Wings - No Sauce | 1 serving | differ: protein_g | 1210 / 80 / 13 / 0 / 150 / 2950 / 73 / 5 / 13 / 8 | 1210 / 80 / 13 / 0 / 150 / 2950 / 73 / 5 / 13 / – |
| Siriacha Honey Sauce | 1 serving | differ: protein_g | 80 / 0 / 0 / 0 / 0 / 600 / 19 / 0 / 19 / 16 | 80 / 0 / 0 / 0 / 0 / 600 / 19 / 0 / 19 / – |
| Garlic Parmesan Sauce | 1 serving | differ: protein_g | 150 / 15 / 2 / 0 / 0 / 870 / 4 / 0 / 0 / 0 | 150 / 15 / 2 / 0 / 0 / 870 / 4 / 0 / 0 / – |
| Honey BBQ Sauce | 1 serving | differ: protein_g | 110 / 0 / 0 / 0 / 0 / 610 / 25 / 0 / 24 / 22 | 110 / 0 / 0 / 0 / 0 / 610 / 25 / 0 / 24 / – |
| Nashville Hot Sauce | 1 serving | differ: protein_g | 220 / 21 / 2 / 0 / 0 / 490 / 9 / 2 / 8 / 6 | 220 / 21 / 2 / 0 / 0 / 490 / 9 / 2 / 8 / – |
| Classic Buffalo Sauce | 1 serving | differ: protein_g | 45 / 5 / 2 / 0 / 0 / 1470 / 0 / 0 / 0 / 0 | 45 / 5 / 2 / 0 / 0 / 1470 / 0 / 0 / 0 / – |
| Spicy Korean Sauce | 1 serving | differ: protein_g | 100 / 0 / 0 / 0 / 0 / 1090 / 24 / 0 / 20 / 0 | 100 / 0 / 0 / 0 / 0 / 1090 / 24 / 0 / 20 / – |
| Steak Stacked Bowl | 1 serving | differ: protein_g | 1010 / 61 / 14 / 0 / 280 / 1880 / 69 / 10 / 6 / 4 | 1010 / 61 / 14 / 0 / 280 / 1880 / 69 / 10 / 6 / – |
| Call Caesar Salad Bowl | 1 serving | differ: protein_g | 1130 / 79 / 15 / 0 / 245 / 2560 / 62 / 5 / 4 / 2 | 1130 / 79 / 15 / 0 / 245 / 2560 / 62 / 5 / 4 / – |
| Southwest Salmon Bowl | 1 serving | differ: protein_g | 950 / 50 / 9 / 0 / 95 / 1960 / 78 / 14 / 11 / 3 | 950 / 50 / 9 / 0 / 95 / 1960 / 78 / 14 / 11 / – |
| Game Day Grub | 1 serving | differ: protein_g | 2740 / 174 / 49 / 2 / 550 / 6840 / 154 / 9 / 27 / 14 | 2740 / 174 / 49 / 2 / 550 / 6840 / 154 / 9 / 27 / – |
| Crispy Business | 1 serving | differ: protein_g | 1870 / 103 / 19 / 0 / 145 / 4780 / 182 / 14 / 21 / 9 | 1870 / 103 / 19 / 0 / 145 / 4780 / 182 / 14 / 21 / – |
| Take it Cheesy | 1 serving | differ: protein_g | 2400 / 122 / 67 / 2 / 240 / 7190 / 210 / 11 / 17 / 7 | 2400 / 122 / 67 / 2 / 240 / 7190 / 210 / 11 / 17 / – |
| Elotes Cauliflower | 1 serving | differ: protein_g | 260 / 21 / 4 / 0 / 15 / 430 / 12 / 5 / 0 / 0 | 260 / 21 / 4 / 0 / 15 / 430 / 12 / 5 / 0 / – |
| Crisps & Guac | 1 serving | differ: protein_g | 660 / 28 / 4.5 / 0 / 2.5 / 2050 / 95 / 16 / 5 / 0 | 660 / 28 / 4.5 / 0 / 2.5 / 2050 / 95 / 16 / 5 / – |
| Garlic Parm Brussels Sprouts | 1 serving | differ: protein_g | 680 / 58 / 14 / 0 / 65 / 1170 / 19 / 6 / 6 / 2 | 680 / 58 / 14 / 0 / 65 / 1170 / 19 / 6 / 6 / – |
| Blistered Green Beans | 1 serving | differ: protein_g | 420 / 32 / 2.5 / 0 / 0 / 470 / 26 / 7 / 12 / 0 | 420 / 32 / 2.5 / 0 / 0 / 470 / 26 / 7 / 12 / – |
| House Salad | 1 serving | differ: protein_g | 130 / 25 / 0 / 0 / 0 / 180 / 19 / 3 / 2 / 0 | 130 / 25 / 0 / 0 / 0 / 180 / 19 / 3 / 2 / – |
| Creamy Salad | 1 serving | differ: protein_g | 250 / 20 / 3.5 / 0 / 20 / 550 / 15 / 0 / 0 / 0 | 250 / 20 / 3.5 / 0 / 20 / 550 / 15 / 0 / 0 / – |
| S'Mores Cheesecake | 1 serving | differ: protein_g | 1300 / 67 / 39 / 2 / 235 / 610 / 165 / 6 / 124 / 79 | 1300 / 67 / 39 / 2 / 235 / 610 / 165 / 6 / 124 / – |
| Brownie Bliss | 1 serving | differ: protein_g | 1240 / 60 / 30 / 0 / 235 / 580 / 163 / 3 / 115 / 100 | 1240 / 60 / 30 / 0 / 235 / 580 / 163 / 3 / 115 / – |
| Brownberry Shortcake | 1 serving | differ: protein_g | 830 / 38 / 22 / 0 / 150 / 590 / 116 / 5 / 88 / 48 | 830 / 38 / 22 / 0 / 150 / 590 / 116 / 5 / 88 / – |
| Funnel Cake | 1 serving | differ: protein_g | 780 / 22 / 10 / 0 / 45 / 680 / 141 / 2 / 92 / 71 | 780 / 22 / 10 / 0 / 45 / 680 / 141 / 2 / 92 / – |
| Kids Pizza Pepperoni | 1 serving | differ: protein_g | 550 / 30 / 16 / 0 / 25 / 1470 / 41 / 2 / 3 / 2 | 550 / 30 / 16 / 0 / 25 / 1470 / 41 / 2 / 3 / – |
| Kids Pizza Cheese | 1 serving | differ: protein_g | 400 / 17 / 11 / 0 / 0 / 1020 / 4 / 2 / 3 / 2 | 400 / 17 / 11 / 0 / 0 / 1020 / 4 / 2 / 3 / – |
| Kids Mac&Cheese | 1 serving | differ: protein_g | 380 / 11 / 3.5 / 0 / 15 / 840 / 57 / 0 / 10 / 0 | 380 / 11 / 3.5 / 0 / 15 / 840 / 57 / 0 / 10 / – |
| Kids Cheeseburger | 1 serving | differ: protein_g | 670 / 41 / 9 / 0 / 20 / 2250 / 68 / 9 / 2 / 1 | 670 / 41 / 9 / 0 / 20 / 2250 / 68 / 9 / 2 / – |
| Kids Crispy Chicken Bites | 1 serving | differ: protein_g | 840 / 56 / 11 / 0 / 55 / 1980 / 66 / 8 / 3 / 0 | 840 / 56 / 11 / 0 / 55 / 1980 / 66 / 8 / 3 / – |
| Coca Cola | 1 serving | differ: protein_g | 243 / 0 / 0 / 0 / 0 / 79 / 66 / 0 / 66 / 66 | 243 / 0 / 0 / 0 / 0 / 79 / 66 / 0 / 66 / – |
| Diet Cake | 1 serving | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 75 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 75 / 0 / 0 / 0 / – |
| Dr. Pepper | 1 serving | differ: protein_g | 250 / 0 / 0 / 0 / 0 / 88 / 68 / 0 / 68 / 67 | 250 / 0 / 0 / 0 / 0 / 88 / 68 / 0 / 68 / – |
| Sprite | 1 serving | differ: protein_g | 250 / 0 / 0 / 0 / 0 / 113 / 65 / 0 / 65 / 64 | 250 / 0 / 0 / 0 / 0 / 113 / 65 / 0 / 65 / – |
| Orange Fanta | 1 serving | differ: protein_g | 250 / 0 / 0 / 0 / 0 / 80 / 73 / 0 / 73 / 72 | 250 / 0 / 0 / 0 / 0 / 80 / 73 / 0 / 73 / – |
| IBC Rost Beer | 1 serving | differ: protein_g | 360 / 0 / 0 / 0 / 0 / 60 / 40 / 0 / 40 / 40 | 360 / 0 / 0 / 0 / 0 / 60 / 40 / 0 / 40 / – |
| Red Bull Energy Drink - Original | 1 serving | differ: protein_g | 110 / 0 / 0 / 0 / 0 / 100 / 28 / 0 / 27 / 27 | 110 / 0 / 0 / 0 / 0 / 100 / 28 / 0 / 27 / – |
| Red Bull Energy Drink - Sugarfree | 1 serving | differ: protein_g | 5 / 0 / 0 / 0 / 0 / 2 / 3 / 0 / 0 / 0 | 5 / 0 / 0 / 0 / 0 / 2 / 3 / 0 / 0 / – |
| Red Bull Energy Drink - Yellow | 1 serving | differ: protein_g | 110 / 0 / 0 / 0 / 0 / 105 / 28 / 0 / 27 / 27 | 110 / 0 / 0 / 0 / 0 / 105 / 28 / 0 / 27 / – |
| Red Bull Energy Drink - Red | 1 serving | differ: protein_g | 110 / 0 / 0 / 0 / 0 / 90 / 38 / 0 / 26 / 26 | 110 / 0 / 0 / 0 / 0 / 90 / 38 / 0 / 26 / – |
| Iced Tea - Unsweet | 1 serving | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / – |
| ICEE - Cherry | 1 serving | differ: protein_g | 130 / 0 / 0 / 0 / 0 / 37 / 36 / 0 / 36 / 36 | 130 / 0 / 0 / 0 / 0 / 37 / 36 / 0 / 36 / – |
| ICEE - Coke | 1 serving | differ: protein_g | 130 / 0 / 0 / 0 / 0 / 37 / 36 / 0 / 36 / 36 | 130 / 0 / 0 / 0 / 0 / 37 / 36 / 0 / 36 / – |
| ICE - Blue Raspberry | 1 serving | differ: protein_g | 130 / 0 / 0 / 0 / 0 / 37 / 36 / 0 / 36 / 36 | 130 / 0 / 0 / 0 / 0 / 37 / 36 / 0 / 36 / – |
| Watermelon Red Bull Lemonade | 1 serving | differ: protein_g | 160 / 0 / 0 / 0 / 0 / 110 / 48 / 0 / 47 / 48 | 160 / 0 / 0 / 0 / 0 / 110 / 48 / 0 / 47 / – |
| Simply Orange Juice | 1 serving | differ: protein_g | 200 / 0 / 0 / 0 / 0 / 0 / 52 / 0 / 46 / 0 | 200 / 0 / 0 / 0 / 0 / 0 / 52 / 0 / 46 / – |
| Simply Cranberry Juice | 1 serving | differ: cholesterol_mg, sodium_mg, protein_g | 250 / 0 / 0 / 0 / 30 / 66 / 66 / 0 / 66 / 56 | 250 / 0 / 0 / 0 / 0 / 30 / 66 / 0 / 66 / – |
| Pineapple Juice | 1 serving | differ: protein_g | 250 / 0 / 0 / 0 / 0 / 0 / 64 / 2 / 60 / 0 | 250 / 0 / 0 / 0 / 0 / 0 / 64 / 2 / 60 / – |

## Spot check (0 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
