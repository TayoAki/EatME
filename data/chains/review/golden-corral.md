# Golden Corral: lines for a person

Guide: https://www.goldencorral.com/nutrition/ (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (109)

Fix each line in `menus/golden-corral.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Grilled Garlic Parmesan Chuck | 3 oz | both read numbers that can't be right: fiber 6 g above carbs 1 g | 190 / 12 / 4.5 / 0 / 75 / 390 / 1 / 6 / 0 / 21 | 190 / 12 / 4.5 / 0 / 75 / 390 / 1 / 6 / 0 / 21 |
| Grilled Honey Teriyaki Chuck | 3 oz | both read numbers that can't be right: fiber 15 g above carbs 4 g | 180 / 10 / 4 / 0 / 65 / 400 / 4 / 15 / 3 / 19 | 180 / 10 / 4 / 0 / 65 / 400 / 4 / 15 / 3 / 19 |
| Caramel Apple Coffee | 8 oz | only in draft A | 100 / 6 / 6 / 0 / 0 / 30 / 10 / – / – / – | not found |
| Caramel Apple Lemonade (Bubbler) | 16 fl oz | differ: fiber_g | 160 / 0 / 0 / 0 / 0 / 25 / 41 / 11 / 39 / 0 | 160 / 0 / 0 / 0 / 0 / 25 / 41 / 1 / 39 / 0 |
| Buttermilk Biscuits | 2 each | only in draft A | 470 / 28 / 14 / 0 / 0 / 1260 / 48 / 2 / 4 / 8 | not found |
| Biscuits - 12 | 12 each | only in draft A | 3930 / 227 / 137 / 0 / 0 / 12910 / 408 / 17 / 36 / 480 | not found |
| Biscuits - 6 | 6 each | only in draft A | 1960 / 114 / 68 / 0 / 0 / 6450 / 204 / 18 / 18 / 240 | not found |
| Corn Muffin Loaves, Mini | 12 Loaves | only in draft A | 4580 / 110 / 17 / 2.5 / 400 / 10490 / 824 / 51 / 351 / 75 | not found |
| Corn Muffin Loaves, Mini | 6 Loaves | only in draft A | 2290 / 55 / 9 / 1 / 200 / 5250 / 412 / 52 / 175 / 37 | not found |
| Yeast Roll | 12 each | only in draft A | 2050 / 92 / 26 / 1.5 / 0 / 1660 / 252 / 114 / 60 / 48 | not found |
| Yeast Roll | 6 each | only in draft A | 1030 / 46 / 13 / 1 / 0 / 830 / 126 / 115 / 30 / 24 | not found |
| Chicken, Hash Brown, Egg, & Cheese Breakfast Bowl | 1 Bowl | both read numbers that can't be right: fiber 44 g above carbs 26 g | 620 / 49 / 12 / 0 / 295 / 950 / 26 / 44 / 2 / 22 | 620 / 49 / 12 / 0 / 295 / 950 / 26 / 44 / 2 / 22 |
| Chicken, Potato Tot, Egg, & Cheese Breakfast Bowl | 1 Bowl | both read numbers that can't be right: fiber 45 g above carbs 35 g | 640 / 45 / 8 / 0 / 295 / 860 / 35 / 45 / 1 / 23 | 640 / 45 / 8 / 0 / 295 / 860 / 35 / 45 / 1 / 23 |
| French Toast | 1 piece | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 220 / – / – / – / – / – / – / – / – / – | 220 / – / – / – / – / – / – / – / – / – |
| Ham, Glazed (Carved) | 1 piece | both read numbers that can't be right: fiber 65 g above carbs 14 g | 200 / 7 / 3 / 0 / 70 / 1130 / 14 / 65 / 12 / 26 | 200 / 7 / 3 / 0 / 70 / 1130 / 14 / 65 / 12 / 26 |
| Hash Brown Potato, Egg, & Cheese Breakfast Bowl | 1 Bowl | both read numbers that can't be right: fiber 69 g above carbs 21 g | 500 / 43 / 11 / 0 / 255 / 690 / 21 / 69 / 2 / 11 | 500 / 43 / 11 / 0 / 255 / 690 / 21 / 69 / 2 / 11 |
| Hash Browns | 4 oz | both read numbers that can't be right: fiber 70 g above carbs 18 g | 320 / 27 / 5 / 0 / 0 / 510 / 18 / 70 / 1 / 1 | 320 / 27 / 5 / 0 / 0 / 510 / 18 / 70 / 1 / 1 |
| Pot Pie, Breakfast | 4 oz | both read numbers that can't be right: fiber 14 g above carbs 11 g | 210 / 15 / 7 / 0 / 115 / 420 / 11 / 14 / 1 / 8 | 210 / 15 / 7 / 0 / 115 / 420 / 11 / 14 / 1 / 8 |
| Potato Tot, Egg, & Cheese Breakfast Bowl | 1 Bowl | both read numbers that can't be right: fiber 87 g above carbs 30 g | 520 / 39 / 7 / 0 / 255 / 600 / 30 / 87 / 1 / 12 | 520 / 39 / 7 / 0 / 255 / 600 / 30 / 87 / 1 / 12 |
| Sausage Breakfast Bowl w/ Tots | 1 Bowl | both read numbers that can't be right: fiber 96 g above carbs 18 g | 560 / 44 / 13 / 0 / 365 / 950 / 18 / 96 / 1 / 24 | 560 / 44 / 13 / 0 / 365 / 950 / 18 / 96 / 1 / 24 |
| Sausage Patty | 2 pieces | both read numbers that can't be right: fiber 100 g above carbs 0 g | 130 / 12 / 4 / 0 / 35 / 310 / 0 / 100 / 0 / 8 | 130 / 12 / 4 / 0 / 35 / 310 / 0 / 100 / 0 / 8 |
| Sausage, Egg & Cheese Biscuit | 1 each | both read numbers that can't be right: fiber 101 g above carbs 36 g | 610 / 44 / 21 / 0 / 210 / 1720 / 36 / 101 / 4 / 56 | 610 / 44 / 21 / 0 / 210 / 1720 / 36 / 101 / 4 / 56 |
| Sausage, Egg, Potato Hash Brown & Cheese Breakfast Bowl | 1 Bowl | both read numbers that can't be right: fiber 105 g above carbs 21 g | 630 / 55 / 15 / 1 / 285 / 990 / 21 / 105 / 2 / 19 | 630 / 55 / 15 / 1 / 285 / 990 / 21 / 105 / 2 / 19 |
| Sausage, Egg, Potato Tot & Cheese Breakfast Bowl | 1 Bowl | both read numbers that can't be right: fiber 106 g above carbs 30 g | 660 / 51 / 11 / 0 / 285 / 900 / 30 / 106 / 1 / 20 | 660 / 51 / 11 / 0 / 285 / 900 / 30 / 106 / 1 / 20 |
| Scrambled Eggs | 6 oz | both read numbers that can't be right: fiber 107 g above carbs 4 g | 310 / 26 / 8 / 0 / 495 / 260 / 4 / 107 / 2 / 17 | 310 / 26 / 8 / 0 / 495 / 260 / 4 / 107 / 2 / 17 |
| Turkey Sausage | 1 piece | both read numbers that can't be right: sugars 8 g above carbs 2 g | 80 / 6 / 2 / 0 / 30 / 95 / 2 / 0 / 8 / 7 | 80 / 6 / 2 / 0 / 30 / 95 / 2 / 0 / 8 / 7 |
| Waffles | 1 Bowl | both read numbers that can't be right: fiber 112 g above carbs 82 g | 360 / 2.5 / 0 / 0 / 5 / 460 / 82 / 112 / 67 / 2 | 360 / 2.5 / 0 / 0 / 5 / 460 / 82 / 112 / 67 / 2 |
| Southwest Breakfast Bowl w/ Tots | 1 Bowl | both read numbers that can't be right: fiber 108 g above carbs 22 g | 520 / 41 / 13 / 0 / 355 / 570 / 22 / 108 / 3 / 18 | 520 / 41 / 13 / 0 / 355 / 570 / 22 / 108 / 3 / 18 |
| Chicken and Dumplings | 1 cup | both read numbers that can't be right: fiber 27 g above carbs 25 g | 210 / 7 / 2 / 0 / 45 / 1100 / 25 / 27 / 2 / 13 | 210 / 7 / 2 / 0 / 45 / 1100 / 25 / 27 / 2 / 13 |
| Chicken Tender Value Meal | 1 Meal | only in draft A | 920 / 47 / 12 / 0 / 135 / 1470 / 83 / 3 / 19 / 39 | not found |
| Chicken Tenders | 1 each | both read numbers that can't be right: fiber 37 g above carbs 7 g | 260 / 13 / 2.5 / 0 / 115 / 370 / 7 / 37 / 0 / 29 | 260 / 13 / 2.5 / 0 / 115 / 370 / 7 / 37 / 0 / 29 |
| Chicken with Gravy | 1/2 cup | both read numbers that can't be right: fiber 38 g above carbs 3 g | 130 / 3 / 1 / 0 / 70 / 330 / 3 / 38 / 0 / 24 | 130 / 3 / 1 / 0 / 70 / 330 / 3 / 38 / 0 / 24 |
| Chicken, Cajun Baked- Breast and Wing | Breast and Wing | both read numbers that can't be right: fiber 23 g above carbs 1 g | 350 / 19 / 5 / 0 / 175 / 1690 / 1 / 23 / 1 / 43 | 350 / 19 / 5 / 0 / 175 / 1690 / 1 / 23 / 1 / 43 |
| Chicken, Cajun Baked- Thigh and Leg | Leg and Thigh | both read numbers that can't be right: fiber 24 g above carbs 0 g | 440 / 35 / 9 / 0 / 180 / 770 / 0 / 24 / 0 / 30 | 440 / 35 / 9 / 0 / 180 / 770 / 0 / 24 / 0 / 30 |
| Chicken, Garlic Herb | 1 Piece | both read numbers that can't be right: fiber 8 g above carbs 4 g | 300 / 24 / 4.5 / 0 / 75 / 640 / 4 / 8 / 0 / 17 | 300 / 24 / 4.5 / 0 / 75 / 640 / 4 / 8 / 0 / 17 |
| Chicken, Lemon Pepper - Thigh and Leg | Leg and Thigh | both read numbers that can't be right: fiber 78 g above carbs 1 g | 440 / 35 / 9 / 0 / 180 / 190 / 1 / 78 / 0 / 30 | 440 / 35 / 9 / 0 / 180 / 190 / 1 / 78 / 0 / 30 |
| Chicken, Lemon Pepper - Breast and Wing | Breast and Wing | both read numbers that can't be right: fiber 77 g above carbs 1 g | 350 / 19 / 5 / 0 / 175 / 1110 / 1 / 77 / 1 / 43 | 350 / 19 / 5 / 0 / 175 / 1110 / 1 / 77 / 1 / 43 |
| Fried Chicken | 1 Piece | both read numbers that can't be right: fiber 61 g above carbs 16 g | 340 / 19 / 4.5 / 0 / 105 / 870 / 16 / 61 / 1 / 23 | 340 / 19 / 4.5 / 0 / 105 / 870 / 16 / 61 / 1 / 23 |
| Fried Chicken - Piece Variety | 20 pcs | only in draft A | 6010 / 379 / 91 / 3.5 / 2180 / 11710 / 164 / 0 / 3 / 486 | not found |
| Garlic Herb Chicken | 1 piece | both read numbers that can't be right: fiber 63 g above carbs 1 g | 340 / 24 / 6 / 0 / 135 / 340 / 1 / 63 / 0 / 28 | 340 / 24 / 6 / 0 / 135 / 340 / 1 / 63 / 0 / 28 |
| Grilled BBQ Chicken | 1 each | both read numbers that can't be right: sugars 14 g above carbs 12 g | 170 / 2 / 0.5 / 0 / 45 / 730 / 12 / 1 / 14 / 18 | 170 / 2 / 0.5 / 0 / 45 / 730 / 12 / 1 / 14 / 18 |
| Honey Teriyaki Chicken Thighs | 1 each | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 360 / – / – / – / – / – / – / – / – / – | 360 / – / – / – / – / – / – / – / – / – |
| Korean Style Fried Chicken - Homeward | 4 Pieces | only in draft A | 1530 / 68 / 16 / 0.5 / 395 / 5170 / 130 / 9 / 80 / 93 | not found |
| Nashville Fried Chicken - Homeward | 4 pieces | only in draft A | 2050 / 166 / 31 / 0.5 / 395 / 9590 / 58 / 16 / 6 / 93 | not found |
| Ranch Fried Chicken - Homeward | 4 Pieces | only in draft A | 1220 / 76 / 18 / 0.5 / 435 / 4640 / 36 / 5 / 1 / 99 | not found |
| Banana Pudding | 1 each | both read numbers that can't be right: fiber 89 g above carbs 53 g | 360 / 15 / 11 / 0 / 2.4 / 290 / 53 / 89 / 32 / 3 | 360 / 15 / 11 / 0 / 2.4 / 290 / 53 / 89 / 32 / 3 |
| Banana Pudding - Homeward | 6 oz | only in draft A | 360 / 15 / 11 / 0 / 0 / 290 / 53 / 1 / 32 / 3 | not found |
| Carrot Cake - Homeward | 1 slice | only in draft A | 500 / 25 / 9 / 0 / 40 / 460 / 67 / 1 / 53 / 3 | not found |
| Chocolate Chip Cookies (2) | 2 Each | only in draft A | 130 / 6 / 3 / 0 / 0 / 70 / 17 / 50 / 9 / 1 | not found |
| Chocolate Cookie - Sugar Free | 1 each | differ: trans_fat_g | 70 / 3.5 / 1 / 0 / 5 / 45 / – / – / – / – | 70 / 3.5 / 1 / – / 5 / 45 / – / – / – / – |
| Coconut Cream Pie | 1 slice | both read numbers that can't be right: sugars 14 g above carbs 9 g | 240 / 15 / 10 / 0 / 0 / 200 / 9 / 0 / 14 / 1 | 240 / 15 / 10 / 0 / 0 / 200 / 9 / 0 / 14 / 1 |
| Ice Cream - Soft Serve Vanilla | 1/2 cup | only in draft A | 110 / 2 / 1.5 / 0 / 5 / 100 / 22 / 0 / 16 / 1 | not found |
| Vanilla Cake - Sugar Free | 1 slice | the guide gives no sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 130 / 8 / 5 / 0 / – / – / – / – / – / – | 130 / 8 / 5 / 0 / – / – / – / – / – / – |
| Fried Catfish | 2 pieces | both read numbers that can't be right: fiber 60 g above carbs 13 g | 180 / 10 / 2 / 0 / 25 / 890 / 13 / 60 / 0 / 11 | 180 / 10 / 2 / 0 / 25 / 890 / 13 / 60 / 0 / 11 |
| Lobster Tail | 4 oz | both read numbers that can't be right: fiber 6 g above carbs 1 g | 120 / 3 / 1 / 0 / 145 / 620 / 1 / 6 / 0 / 16 | 120 / 3 / 1 / 0 / 145 / 620 / 1 / 6 / 0 / 16 |
| Peel and Eat Shrimp | 4 oz | both read numbers that can't be right: fiber 9 g above carbs 0 g | 100 / 0 / 0 / 0 / 145 / 340 / 0 / 9 / 0 / 22 | 100 / 0 / 0 / 0 / 145 / 340 / 0 / 9 / 0 / 22 |
| Shrimp Platter | 1 Platter | only in draft A | 1370 / 52 / 10 / 1 / 385 / 4190 / 160 / 8 / 2 / 63 | not found |
| Whitefish, Peach Salsa | 7.5 oz | both read numbers that can't be right: fiber 18 g above carbs 11 g | 200 / 13 / 5 / 0 / 35 / 390 / 11 / 18 / 9 / 12 | 200 / 13 / 5 / 0 / 35 / 390 / 11 / 18 / 9 / 12 |
| Kids Bourbon Chicken | 1 Meal | both read numbers that can't be right: fiber 71 g above carbs 20 g | 330 / 16 / 5 / 0 / 130 / 860 / 20 / 71 / 6 / 27 | 330 / 16 / 5 / 0 / 130 / 860 / 20 / 71 / 6 / 27 |
| Kids Breakfast Plate | 1 Plate | both read numbers that can't be right: fiber 72 g above carbs 52 g | 770 / 51 / 21 / 0 / 280 / 1950 / 52 / 72 / 4 / 58 | 770 / 51 / 21 / 0 / 280 / 1950 / 52 / 72 / 4 / 58 |
| Kids Fish | 1 piece | both read numbers that can't be right: fiber 75 g above carbs 9 g | 150 / 8 / 1.5 / 0 / 30 / 440 / 9 / 75 / 0 / 11 | 150 / 8 / 1.5 / 0 / 30 / 440 / 9 / 75 / 0 / 11 |
| Brisket Style Pork, Cajun Rubbed | 4.5 oz | both read numbers that can't be right: fiber 6 g above carbs 2 g | 220 / 16 / 6 / 0 / 65 / 830 / 2 / 6 / 0 / 16 | 220 / 16 / 6 / 0 / 65 / 830 / 2 / 6 / 0 / 16 |
| Carnitas Asada Pork | 1 Slice | both read numbers that can't be right: fiber 6 g above carbs 2 g | 390 / 26 / 9 / 0 / 110 / 310 / 2 / 6 / 1 / 36 | 390 / 26 / 9 / 0 / 110 / 310 / 2 / 6 / 1 / 36 |
| Grilled BBQ Pork Steaks | 3 oz | both read numbers that can't be right: fiber 11 g above carbs 6 g | 210 / 13 / 5 / 0 / 70 / 790 / 6 / 11 / 4 / 17 | 210 / 13 / 5 / 0 / 70 / 790 / 6 / 11 / 4 / 17 |
| Grilled Pork Steaks w/ Garlic Parmesan | 3 oz | both read numbers that can't be right: fiber 16 g above carbs 3 g | 250 / 19 / 6 / 0 / 70 / 1000 / 3 / 16 / 0 / 17 | 250 / 19 / 6 / 0 / 70 / 1000 / 3 / 16 / 0 / 17 |
| Grilled Pork Steaks w/ Mushroom Gravy | 3 oz | both read numbers that can't be right: fiber 12 g above carbs 5 g | 210 / 14 / 5 / 0 / 70 / 930 / 5 / 12 / 1 / 17 | 210 / 14 / 5 / 0 / 70 / 930 / 5 / 12 / 1 / 17 |
| Grilled Pork Steaks w/ Onion Gravy | 3 oz | both read numbers that can't be right: fiber 13 g above carbs 5 g | 220 / 14 / 6 / 0 / 70 / 930 / 5 / 13 / 1 / 17 | 220 / 14 / 6 / 0 / 70 / 930 / 5 / 13 / 1 / 17 |
| Grilled Teriyaki Pineapple Pork Steaks | 3 oz | both read numbers that can't be right: fiber 15 g above carbs 7 g | 220 / 13 / 5 / 0 / 70 / 890 / 7 / 15 / 5 / 17 | 220 / 13 / 5 / 0 / 70 / 890 / 7 / 15 / 5 / 17 |
| Grilled Teriyaki Pork Steaks | 3 oz | both read numbers that can't be right: fiber 14 g above carbs 7 g | 220 / 13 / 5 / 0 / 70 / 970 / 7 / 14 / 4 / 17 | 220 / 13 / 5 / 0 / 70 / 970 / 7 / 14 / 4 / 17 |
| Pork Chop, Bone-In | 6 oz | both read numbers that can't be right: fiber 8 g above carbs 1 g | 210 / 9 / 2.5 / 0 / 85 / 1380 / 1 / 8 / 1 / 32 | 210 / 9 / 2.5 / 0 / 85 / 1380 / 1 / 8 / 1 / 32 |
| Dressing, Thousand Island | 2 Tbl | both read numbers that can't be right: fiber 11 g above carbs 4 g | 130 / 13 / 2 / 0 / 15 / 240 / 4 / 11 / 4 / 0 | 130 / 13 / 2 / 0 / 15 / 240 / 4 / 11 / 4 / 0 |
| Ranch Dressing | 2 Tbsp | both read numbers that can't be right: fiber 4 g above carbs 2 g | 110 / 12 / 2 / 0 / 10 / 450 / 2 / 4 / 1 / 1 | 110 / 12 / 2 / 0 / 10 / 450 / 2 / 4 / 1 / 1 |
| Coleslaw - Prepared | 1/2 Cup | both read numbers that can't be right: fiber 93 g above carbs 11 g | 130 / 9 / 1.5 / 0 / 10 / 240 / 11 / 93 / 8 / 1 | 130 / 9 / 1.5 / 0 / 10 / 240 / 11 / 93 / 8 / 1 |
| Lettuce Wedge | 1 cup | differ: fiber_g | 10 / 0 / 0 / 0 / 0 / 5 / 2 / 0 / 1 / 1 | 10 / 0 / 0 / 0 / 0 / 5 / 2 / 1 / 1 / 1 |
| Macaroni Salad - Housemade | 1/2 Cup | both read numbers that can't be right: fiber 94 g above carbs 41 g | 280 / 11 / 1 / 0 / 10 / 490 / 41 / 94 / 12 / 5 | 280 / 11 / 1 / 0 / 10 / 490 / 41 / 94 / 12 / 5 |
| Potato Salad - Prepared | 1/2 Cup | both read numbers that can't be right: fiber 95 g above carbs 21 g | 200 / 12 / 2 / 0 / 10 / 560 / 21 / 95 / 7 / 3 | 200 / 12 / 2 / 0 / 10 / 560 / 21 / 95 / 7 / 3 |
| Salsa | 2 Tbsp | the guide gives no carbs_g, fiber_g, sugars_g, protein_g | 10 / 0 / 0 / 0 / 0 / 200 / – / – / – / – | 10 / 0 / 0 / 0 / 0 / 200 / – / – / – / – |
| Brown Gravy | 2 fl oz | both read numbers that can't be right: fiber 64 g above carbs 4 g | 20 / 0 / 0 / 0 / 0 / 310 / 4 / 64 / 1 / 0 | 20 / 0 / 0 / 0 / 0 / 310 / 4 / 64 / 1 / 0 |
| Carrots, Steamed | 1/2 Cup | both read numbers that can't be right: fiber 25 g above carbs 8 g | 80 / 6 / 2.5 / 0 / 0 / 290 / 8 / 25 / 4 / 1 | 80 / 6 / 2.5 / 0 / 0 / 290 / 8 / 25 / 4 / 1 |
| Fruit Cup, Strawberry and Blueberry | 3/4 Cup | both read numbers that can't be right: fiber 62 g above carbs 15 g | 60 / 0 / 0 / 0 / 0 / 0 / 15 / 62 / 10 / 1 | 60 / 0 / 0 / 0 / 0 / 0 / 15 / 62 / 10 / 1 |
| Green Beans | 1/2 Cup | both read numbers that can't be right: fiber 14 g above carbs 4 g | 35 / 1.5 / 0 / 0 / 0 / 550 / 4 / 14 / 2 / 1 | 35 / 1.5 / 0 / 0 / 0 / 550 / 4 / 14 / 2 / 1 |
| Mashed Potatoes w/ Gravy | 1/2 Cup | both read numbers that can't be right: fiber 80 g above carbs 32 g | 270 / 14 / 3 / 0 / 0 / 1000 / 32 / 80 / 3 / 4 | 270 / 14 / 3 / 0 / 0 / 1000 / 32 / 80 / 3 / 4 |
| Peas, Black Eyed Southern Style | 1/2 Cup | both read numbers that can't be right: fiber 83 g above carbs 20 g | 170 / 7 / 2.5 / 0 / 15 / 1580 / 20 / 83 / 4 / 8 | 170 / 7 / 2.5 / 0 / 15 / 1580 / 20 / 83 / 4 / 8 |
| Pot Roast Vegetables | 1/2 Cup | both read numbers that can't be right: fiber 86 g above carbs 9 g | 45 / 1 / 0 / 0 / 0 / 370 / 9 / 86 / 2 / 1 | 45 / 1 / 0 / 0 / 0 / 370 / 9 / 86 / 2 / 1 |
| Taco Shells | 1 Each | both read numbers that can't be right: saturated and trans fat above fat | 20 / 0 / 2.5 / 0 / 0 / 0 / 4 / 0 / 0 / 0 | 20 / 0 / 2.5 / 0 / 0 / 0 / 4 / 0 / 0 / 0 |
| Tater Tots | 4 oz | both read numbers that can't be right: fiber 110 g above carbs 28 g | 440 / 35 / 3.5 / 0 / 0 / 420 / 28 / 110 / 0 / 3 | 440 / 35 / 3.5 / 0 / 0 / 420 / 28 / 110 / 0 / 3 |
| Turnip Greens, Fresh | 1/2 Cup | both read numbers that can't be right: fiber 111 g above carbs 9 g | 70 / 3 / 1 / 0 / 5 / 420 / 9 / 111 / 5 / 3 | 70 / 3 / 1 / 0 / 5 / 420 / 9 / 111 / 5 / 3 |
| Buttermilk Biscuits (2 ea)- to go | 2 each | only in draft A | 470 / 28 / 14 / 0 / 0 / 1260 / 48 / 2 / 4 / 8 | not found |
| Collard Greens, Seasoned | 1/2 Cup | both read numbers that can't be right: fiber 48 g above carbs 5 g | 30 / 1 / 0 / 0 / 0 / 15 / 5 / 48 / 0 / 3 | 30 / 1 / 0 / 0 / 0 / 15 / 5 / 48 / 0 / 3 |
| Green Beans, Fresh | 1/2 cup | the guide gives no sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 70 / 6 / 2.5 / 0 / 0 / – / – / – / – / – | 70 / 6 / 2.5 / 0 / 0 / – / – / – / – / – |
| Chicken Fried Steak (1) | 1 piece | both read numbers that can't be right: fiber 31 g above carbs 13 g | 260 / 15 / 5 / 1 / 30 / 350 / 13 / 31 / 0 / 10 | 260 / 15 / 5 / 1 / 30 / 350 / 13 / 31 / 0 / 10 |
| Kids Chicken Tender (1) | 1 Tender | both read numbers that can't be right: fiber 74 g above carbs 7 g | 170 / 8 / 1.5 / 0 / 60 / 380 / 7 / 74 / 0 / 16 | 170 / 8 / 1.5 / 0 / 60 / 380 / 7 / 74 / 0 / 16 |
| Kids Chicken Drumstick (1) | 1 Drumstick | both read numbers that can't be right: fiber 73 g above carbs 3 g | 190 / 12 / 3 / 0 / 80 / 220 / 3 / 73 / 0 / 18 | 190 / 12 / 3 / 0 / 80 / 220 / 3 / 73 / 0 / 18 |
| Kids Macaroni & Cheese - 4 oz | 4 oz | both read numbers that can't be right: fiber 76 g above carbs 17 g | 170 / 9 / 3 / 0 / 10 / 490 / 17 / 76 / 2 / 5 | 170 / 9 / 3 / 0 / 10 / 490 / 17 / 76 / 2 / 5 |
| Macaroni and Cheese - Side | 1 Each | both read numbers that can't be right: fiber 79 g above carbs 26 g | 310 / 18 / 7 / 0 / 25 / 840 / 26 / 79 / 3 / 9 | 310 / 18 / 7 / 0 / 25 / 840 / 26 / 79 / 3 / 9 |
| Cheddar Grits (4 oz) | 4 oz | both read numbers that can't be right: fiber 26 g above carbs 15 g | 150 / 8 / 4 / 0 / 20 / 270 / 15 / 26 / 0 / 6 | 150 / 8 / 4 / 0 / 20 / 270 / 15 / 26 / 0 / 6 |
| Turkey Sausage (4 ea) | 4 each | both read numbers that can't be right: sugars 32 g above carbs 8 g | 320 / 24 / 8 / 0 / 120 / 380 / 8 / 0 / 32 / 28 | 320 / 24 / 8 / 0 / 120 / 380 / 8 / 0 / 32 / 28 |
| Buttermilk Biscuits | 2 each (2 ea) | only in draft B | not found | 470 / 28 / 14 / 0 / 0 / 1260 / 48 / 2 / 4 / 8 |
| Skillet Cornbread - Homeward | 4 pieces | only in draft B | not found | 1190 / 74 / 30 / 1.5 / 70 / 2300 / 121 / 2 / 62 / 12 |
| Yeast Roll | 1 each (1) | only in draft B | not found | 170 / 8 / 2 / 0 / 0 / 140 / 21 / 113 / 5 / 4 |
| Waffles (Waffle Station) | 1 each | only in draft B | not found | 450 / 9 / 1.5 / 0 / 2.3 / 1620 / 84 / 6 / 26 / 7 |
| Chicken Wings - BBQ | 5 Wings (5 pc portion) | only in draft B | not found | 220 / 11 / 3 / 0 / 90 / 430 / 14 / 1 / 10 / 15 |
| Fried Chicken - Piece Variety | 3 pcs (3 pc portion) | only in draft B | not found | 900 / 57 / 14 / 0.5 / 325 / 1760 / 25 / 4 / 0 / 73 |
| Ice Cream - Soft Serve Vanilla (1/2 Cup) | 1/2 cup | only in draft B | not found | 110 / 2 / 1.5 / 0 / 5 / 100 / 22 / 0 / 16 / 1 |
| Bratwurst (Whole - with Bun) | 1 Each | only in draft B | not found | 430 / 30 / 10 / 0 / 65 / 1190 / 25 / 0 / 3 / 18 |
| Bratwurst - Dinner Size | 1 Each | only in draft B | not found | 350 / 30 / 10 / 0 / 65 / 1010 / 9 / 1 / 3 / 15 |
| Sauteed Onions (1/4 cup) | 1/4 cup | only in draft B | not found | 70 / 6 / 1 / 0 / 0 / 50 / 5 / 0 / 2 / 1 |
|  | 1/2 Cup | only in draft B | not found | 140 / 6 / 2.5 / 0 / 5 / 350 / 17 / 1 / 1 / 3 |
| Buttermilk Biscuits - to go | 2 each | only in draft B | not found | 470 / 28 / 14 / 0 / 0 / 1260 / 48 / 2 / 4 / 8 |

## Spot check (15 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Roast Beef (inside round) | 3 oz | 110 / 3 / 1 / 0 / 50 / 115 / 0 / 0 / 0 / 19 |
| Cabbage | 1/2 cup | 60 / 5 / 2 / 0 / 0 / 200 / 4 / 2 / 2 / 1 |
| Breaded Chicken Wings | 3 each | 290 / 21 / 5 / 0 / 100 / 400 / 7 / 0 / 0 / 17 |
| BBQ Baked Chicken - Leg / Thigh | Leg / Thigh | 420 / 27 / 7 / 0 / 170 / 1120 / 14 / 13 / 10 / 29 |
| Chicken, Broccoli and Rice Bake | 1/2 Cup | 140 / 7 / 3 / 0 / 35 / 730 / 11 / 0 / 0 / 9 |
| Fantastic Favorites | 1 Serving | 1120 / 72 / 36 / 1 / 545 / 2500 / 62 / 2 / 15 / 55 |
| Grilled Chicken Livers | 3 each | 210 / 4.5 / 1.5 / 0 / 260 / 620 / 23 / 1 / 1 / 18 |
| Hot Tea | 8 fl oz | 0 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 |
| Donut Holes - Old Fashioned | 3 each | 210 / 10 / 4.5 / 0 / 5 / 190 / 27 / 9 / 14 / 2 |
| Turkey Bistro Sandwich with Bacon | 1 Piece | 350 / 19 / 8 / 0 / 60 / 850 / 20 / 1 / 2 / 24 |
| Chocolate Cupcakes w/ Peanut Butter Icing | 1 each | 300 / 15 / 4.5 / 0 / 20 / 250 / 40 / 11 / 32 / 3 |
| Gold Peak Tea, Unsweetened© | 16 fl oz | 0 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 0 / 0 |
| Teriyaki Beef | 1 cup | 240 / 8 / 2 / 0 / 45 / 1090 / 22 / 1 / 16 / 19 |
| Shrimp Boil | 6 oz | 330 / 23 / 9 / 0 / 100 / 660 / 12 / 10 / 2 / 18 |
| Two Egg Breakfast - Bacon and Grits | 1 each | 450 / 30 / 11 / 0 / 440 / 740 / 23 / 1 / 1 / 22 |
