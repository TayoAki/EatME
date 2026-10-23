# Carrabba's Italian Grill: lines for a person

Guide: https://edge.sitecorecloud.io/osirestaurantpartners-piq24hos/media/Project/BBI/carrabbas/Nutrition-Images/CIG_Nutrition_September_2026.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (174)

Fix each line in `menus/carrabbas-italian-grill.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Tuscan Grilled Sirloin | 10 oz. | only in draft A | 440 / 19 / 8 / 0 / 125 / 1540 / 5 / 3 / 1 / 58 | not found |
| Bruschette Chicken Sandwich | 1 Whole | only in draft A | 770 / 54 / 18 / 0 / 120 / 1730 / 84 / 4 / 4 / 52 | not found |
| Bruschette Chicken Sandwich | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg | 3840 / 270 / 89 / 2 / 605 / 8660 / 418 / 21 / 18 / 262 | 3840 / 2410 / 270 / 89 / 2 / 8660 / 418 / 21 / 18 / 262 |
| Bruschette Chicken Sandwich | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg | 7670 / 540 / 177 / 3.5 / 1215 / 17330 / 837 / 42 / 35 / 524 | 7670 / 4810 / 540 / 177 / 3.5 / 17330 / 837 / 42 / 35 / 524 |
| Caprese Sandwich | 1 Whole | only in draft A | 570 / 47 / 14 / 0 / 35 / 1960 / 82 / 4 / 3 / 22 | not found |
| Caprese Sandwich | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg | 2850 / 234 / 68 / 1.5 / 170 / 9810 / 410 / 21 / 14 / 112 | 2850 / 2080 / 234 / 68 / 1.5 / 9810 / 410 / 21 / 14 / 112 |
| Caprese Sandwich | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg | 5700 / 468 / 135 / 2.5 / 335 / 19610 / 820 / 41 / 27 / 224 | 5700 / 4170 / 468 / 135 / 2.5 / 19610 / 820 / 41 / 27 / 224 |
| Chicken Parmesan Sandwich | 1 Whole | only in draft A | 580 / 27 / 9 / 0 / 155 / 1560 / 42 / 5 / 9 / 41 | not found |
| Chicken Parmesan Sandwich | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg | 2800 / 144 / 45 / 2 / 780 / 11360 / 458 / 32 / 45 / 239 | 2800 / 1290 / 144 / 45 / 2 / 11360 / 458 / 32 / 45 / 239 |
| Chicken Parmesan Sandwich | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg | 5600 / 289 / 89 / 3.5 / 1560 / 22710 / 915 / 64 / 90 / 479 | 5600 / 2580 / 289 / 89 / 3.5 / 22710 / 915 / 64 / 90 / 479 |
| Steak Marsala Sandwich | 1 Whole | only in draft A | 650 / 43 / 22 / 1 / 130 / 2540 / 89 / 5 / 4 / 44 | not found |
| Steak Marsala Sandwich | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg | 3250 / 214 / 108 / 5 / 640 / 12690 / 445 / 26 / 19 / 218 | 3250 / 1910 / 214 / 108 / 5 / 12690 / 445 / 26 / 19 / 218 |
| Steak Marsala Sandwich | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg | 6510 / 428 / 216 / 10 / 1280 / 25380 / 890 / 51 / 38 / 435 | 6510 / 3810 / 428 / 216 / 10 / 25380 / 890 / 51 / 38 / 435 |
| Meatball Sandwich | 1 Whole | only in draft A | 1330 / 98 / 42 / 2.5 / 250 / 4280 / 109 / 9 / 13 / 68 | not found |
| Meatball Sandwich | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg | 6660 / 489 / 212 / 11 / 1245 / 21420 / 543 / 47 / 67 / 340 | 6660 / 4380 / 489 / 212 / 11 / 21420 / 543 / 47 / 67 / 340 |
| Meatball Sandwich | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg | 13320 / 978 / 424 / 23 / 2485 / 42830 / 1087 / 93 / 133 / 680 | 13320 / 8770 / 978 / 424 / 23 / 42830 / 1087 / 93 / 133 / 680 |
| Four-Cheese & Sausage Stuffed Mushrooms | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1180 / 99 / 42 / 1.5 / 175 / 3900 / 32 / 8 / 16 / 43 | 1180 / 890 / 99 / 42 / 1.5 / 175 / 3900 / 32 / 8 / 16 |
| Four-Cheese & Sausage Stuffed Mushrooms | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 2350 / 198 / 83 / 2.5 / 355 / 7790 / 64 / 15 / 32 / 86 | 2350 / 1770 / 198 / 83 / 2.5 / 355 / 7790 / 64 / 15 / 32 |
| Meatballs and Ricotta | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1910 / 131 / 55 / 3.5 / 495 / 5510 / 56 / 12 / 24 / 118 | 1910 / 1180 / 131 / 55 / 3.5 / 495 / 5510 / 56 / 12 / 24 |
| Meatballs and Ricotta | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 3810 / 263 / 110 / 7 / 995 / 11030 / 111 / 23 / 48 / 237 | 3810 / 2360 / 263 / 110 / 7 / 995 / 11030 / 111 / 23 / 48 |
| Shrimp Scampi | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 2970 / 185 / 53 / 0.5 / 620 / 4210 / 225 / 6 / 18 / 102 | 2970 / 1650 / 185 / 53 / 0.5 / 620 / 4210 / 225 / 6 / 18 |
| Shrimp Scampi | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 5950 / 370 / 106 / 1 / 1240 / 8430 / 449 / 13 / 37 / 205 | 5950 / 3300 / 370 / 106 / 1 / 1240 / 8430 / 449 / 13 / 37 |
| Mama Mandola's Soup | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1230 / 35 / 12 / 0 / 175 / 6680 / 146 / 14 / 12 / 81 | 1230 / 310 / 35 / 12 / 0 / 175 / 6680 / 146 / 14 / 12 |
| Mama Mandola's Soup | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 2460 / 70 / 24 / 0 / 350 / 13360 / 293 / 28 / 24 / 161 | 2460 / 630 / 70 / 24 / 0 / 350 / 13360 / 293 / 28 / 24 |
| Italian Salad with Dressing | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1160 / 115 / 19 / 0 / 35 / 2110 / 30 / 11 / 13 / 10 | 1160 / 1010 / 115 / 19 / 0 / 35 / 2110 / 30 / 11 / 13 |
| Italian Salad with Dressing | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 2320 / 229 / 38 / 0.5 / 70 / 4210 / 59 / 22 / 25 / 20 | 2320 / 2030 / 229 / 38 / 0.5 / 70 / 4210 / 59 / 22 / 25 |
| Caesar Salad with Dressing | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1390 / 123 / 25 / 2 / 85 / 2670 / 47 / 7 / 8 / 25 | 1390 / 1100 / 123 / 25 / 2 / 85 / 2670 / 47 / 7 / 8 |
| Caesar Salad with Dressing | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 2780 / 245 / 50 / 3.5 / 165 / 5340 / 94 / 14 / 17 / 51 | 2780 / 2200 / 245 / 50 / 3.5 / 165 / 5340 / 94 / 14 / 17 |
| House Salad with Dressing | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1180 / 111 / 22 / 1.5 / 70 / 1920 / 32 / 11 / 13 / 18 | 1180 / 1000 / 111 / 22 / 1.5 / 70 / 1920 / 32 / 11 / 13 |
| House Salad with Dressing | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 2350 / 223 / 44 / 3 / 145 / 3850 / 64 / 22 / 26 / 36 | 2350 / 1990 / 223 / 44 / 3 / 145 / 3850 / 64 / 22 / 26 |
| Sauteed Broccoli | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g | 710 / 54 / 7 / 0 / 0 / 2620 / 50 / 25 / 13 / 25 | 710 / 480 / 54 / 7 / 0 / 2620 / 50 / 25 / 13 / 25 |
| Sauteed Broccoli | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g | 1430 / 108 / 14 / 0 / 0 / 5240 / 99 / 49 / 26 / 50 | 1430 / 950 / 108 / 14 / 0 / 5240 / 99 / 49 / 26 / 50 |
| Garlic Mashed Potatoes | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1750 / 83 / 18 / 0 / 20 / 5470 / 228 / 20 / 16 / 29 | 1750 / 750 / 83 / 18 / 0 / 20 / 5470 / 228 / 20 / 16 |
| Garlic Mashed Potatoes | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 3510 / 167 / 37 / 0 / 35 / 10950 / 457 / 40 / 32 / 57 | 3510 / 1500 / 167 / 37 / 0 / 35 / 10950 / 457 / 40 / 32 |
| Pasta Salad | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 2870 / 209 / 36 / 0.5 / 80 / 5510 / 199 / 22 / 27 / 57 | 2870 / 1860 / 209 / 36 / 0.5 / 80 / 5510 / 199 / 22 / 27 |
| Pasta Salad | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 5750 / 417 / 73 / 1.5 / 160 / 11010 / 398 / 45 / 55 / 114 | 5750 / 3710 / 417 / 73 / 1.5 / 160 / 11010 / 398 / 45 / 55 |
| Housemade Chips | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 720 / 58 / 10 / 1 / 0 / 2160 / 47 / 3 / 0 / 4 | 720 / 520 / 58 / 10 / 1 / 0 / 2160 / 47 / 3 / 0 |
| Housemade Chips | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1450 / 116 / 21 / 2 / 0 / 4330 / 94 / 7 / 0 / 8 | 1450 / 1040 / 116 / 21 / 2 / 0 / 4330 / 94 / 7 / 0 |
| Tiramisu | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 11280 / 841 / 560 / 18 / 2445 / 980 / 795 / 33 / 617 / 112 | 11280 / 7570 / 841 / 560 / 18 / 2445 / 980 / 795 / 33 / 617 |
| Sogno Di Cioccolata "Chocolate Dream" | large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 15470 / 1077 / 528 / 14 / 2570 / 6770 / 1432 / 82 / 1161 / 140 | 15470 / 9640 / 1077 / 528 / 14 / 2570 / 6770 / 1432 / 82 / 1161 |
| Mini Cannoli | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1470 / 101 / 58 / 0 / 120 / 660 / 121 / 5 / 60 / 22 | 1470 / 910 / 101 / 58 / 0 / 120 / 660 / 121 / 5 / 60 |
| Mini Cannoli | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 2940 / 201 / 115 / 1 / 245 / 1310 / 241 / 9 / 119 / 44 | 2940 / 1810 / 201 / 115 / 1 / 245 / 1310 / 241 / 9 / 119 |
| Fresh Baked Oatmeal Raisin Cookies | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1750 / 75 / 30 / 1.5 / 175 / 1010 / 260 / 11 / 139 / 24 | 1750 / 670 / 75 / 30 / 1.5 / 175 / 1010 / 260 / 11 / 139 |
| Fresh Baked Oatmeal Raisin Cookies | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 3490 / 149 / 60 / 3 / 350 / 2020 / 520 / 21 / 278 / 47 | 3490 / 1340 / 149 / 60 / 3 / 350 / 2020 / 520 / 21 / 278 |
| Fresh Baked Chocolate Chunk Cookies | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1870 / 89 / 43 / 1.5 / 175 / 950 / 259 / 9 / 152 / 22 | 1870 / 800 / 89 / 43 / 1.5 / 175 / 950 / 259 / 9 / 152 |
| Fresh Baked Chocolate Chunk Cookies | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 3740 / 179 / 87 / 3 / 355 / 1900 / 519 / 19 / 305 / 44 | 3740 / 1610 / 179 / 87 / 3 / 355 / 1900 / 519 / 19 / 305 |
| Kids Chicken Tenders | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 2940 / 120 / 23 / 1 / 295 / 13930 / 310 / 24 / 64 / 153 | 2940 / 1080 / 120 / 23 / 1 / 295 / 13930 / 310 / 24 / 64 |
| Kids Chicken Tenders | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 5880 / 241 / 45 / 2 / 590 / 27850 / 621 / 49 / 127 / 306 | 5880 / 2170 / 241 / 45 / 2 / 590 / 27850 / 621 / 49 / 127 |
| Kids Mac N Cheese | Small (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1750 / 66 / 39 / 2 / 175 / 2650 / 217 / 12 / 15 / 66 | 1750 / 600 / 66 / 39 / 2 / 175 / 2650 / 217 / 12 / 15 |
| Kids Mac N Cheese | Large (1 Pan) | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 3510 / 133 / 77 / 4 / 355 / 5300 / 435 / 24 / 30 / 132 | 3510 / 1200 / 133 / 77 / 4 / 355 / 5300 / 435 / 24 / 30 |
| Margherita Pizza-Regional | 1 serving | only in draft A | 630 / 31 / 10 / 0 / 45 / 1940 / 67 / 4 / 3 / 24 | not found |
| Pepperoni Pizza-Regional | 1 serving | only in draft A | 790 / 46 / 15 / 0 / 75 / 1760 / 67 / 3 / 3 / 30 | not found |
| Entree Salad: Caesar Salad With Chicken | 1 serving | only in draft A | 870 / 64 / 13 / 1 / 130 / 1610 / 27 / 5 / 5 / 47 | not found |
| Tuscan Grilled Sirloin, 10 oz. | 1 serving | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, protein_g | 480 / 26 / 9 / 0 / 150 / 1450 / 3 / 1 / 1 / 56 | 440 / 19 / 8 / 0 / 125 / 1540 / 5 / 3 / 1 / 58 |
| Caprese Sandwich - No Chicken | 1 serving | only in draft A | 510 / 26 / 12 / 1 / 60 / 980 / 44 / 3 / 3 / 23 | not found |
| Caprese Sandwich with Grilled Chicken | 1 serving | only in draft A | 740 / 30 / 14 / 1 / 185 / 1360 / 44 / 3 / 3 / 69 | not found |
| Meatball Sandwich | 1 serving | only in draft A | 730 / 38 / 18 / 1 / 140 / 1780 / 54 / 4 / 7 / 40 | not found |
| Diet Pepsi (Dulles Airport) | 1 serving | only in draft A | 0 / 0 / 0 / 0 / 0 / 25 / 0 / 0 / 0 / 0 | not found |
| Pepsi (Dulles Airport) | 1 serving | only in draft A | 110 / 0 / 0 / 0 / 0 / 25 / 31 / 0 / 31 / 0 | not found |
| Sierra Mist (Dulles Airport) | 1 serving | only in draft A | 110 / 0 / 0 / 0 / 0 / 25 / 28 / 0 / 28 / 0 | not found |
| Ginger Ale (Dulles Airport) | 1 serving | only in draft A | 90 / 0 / 0 / 0 / 0 / 45 / 25 / 0 / 24 / 0 | not found |
| Cafe Latte | 1 serving | only in draft A | 110 / 4 / 2 / 0 / 15 / 85 / 13 / 0 / 11 / 5 | not found |
| Cappuccino | 1 serving | only in draft A | 90 / 3 / 1.5 / 0 / 10 / 70 / 12 / 0 / 8 / 4 | not found |
| Coffee | 1 serving | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Espresso | 1 serving | only in draft A | 45 / 1.5 / 0 / 0 / 5 / 30 / 7 / 0 / 4 / 1 | not found |
| Coke with Ice | 1 serving | only in draft A | 80 / 0 / 0 / 0 / 0 / 30 / 23 / 0 / 23 / 0 | not found |
| Diet Coke with Ice | 1 serving | only in draft A | 0 / 0 / 0 / 0 / 0 / 25 / 0 / 0 / 0 / 0 | not found |
| Dr. Pepper with Ice | 1 serving | only in draft A | 90 / 0 / 0 / 0 / 0 / 35 / 23 / 0 / 22 / 0 | not found |
| Sprite with Ice | 1 serving | only in draft A | 90 / 0 / 0 / 0 / 0 / 20 / 23 / 0 / 21 / 0 | not found |
| Hi-C Fruit Punch with Ice | 1 serving | only in draft A | 90 / 0 / 0 / 0 / 0 / 15 / 26 / 0 / 26 / 0 | not found |
| Minute Maid Lemonade with Ice | 1 serving | only in draft A | 100 / 0 / 0 / 0 / 0 / 15 / 25 / 0 / 25 / 0 | not found |
| Gold Peak Tea, Sweet with Ice | 1 serving | only in draft A | 70 / 0 / 0 / 0 / 0 / 20 / 18 / 0 / 18 / 0 | not found |
| Gold Peak Tea, with Ice | 1 serving | only in draft A | 0 / 0 / 0 / 0 / 0 / 20 / 0 / 0 / 0 / 0 | not found |
| Flavored Tea, with Ice: Blackberry | 1 serving | only in draft A | 40 / 0 / 0 / 0 / 0 / 5 / 10 / 0 / 9 / 0 | not found |
| Flavored Tea, with Ice: Desert Pear | 1 serving | only in draft A | 40 / 0 / 0 / 0 / 0 / 5 / 10 / 0 / 9 / 0 | not found |
| Flavored Tea, with Ice: Mango | 1 serving | only in draft A | 50 / 0 / 0 / 0 / 0 / 5 / 13 / 0 / 12 / 0 | not found |
| Flavored Tea, with Ice: Orange | 1 serving | only in draft A | 45 / 0 / 0 / 0 / 0 / 5 / 11 / 0 / 11 / 0 | not found |
| Flavored Tea, with Ice: Peach | 1 serving | only in draft A | 40 / 0 / 0 / 0 / 0 / 5 / 10 / 0 / 9 / 0 | not found |
| Flavored Tea, with Ice: Pomegranate | 1 serving | only in draft A | 45 / 0 / 0 / 0 / 0 / 5 / 11 / 0 / 11 / 0 | not found |
| Flavored Tea, with Ice: Raspberry | 1 serving | only in draft A | 50 / 0 / 0 / 0 / 0 / 5 / 13 / 0 / 12 / 0 | not found |
| Flavored Tea, with Ice: Strawberry | 1 serving | only in draft A | 35 / 0 / 0 / 0 / 0 / 5 / 9 / 0 / 8 / 0 | not found |
| Flavored Tea, with Ice: White Peach | 1 serving | only in draft A | 40 / 0 / 0 / 0 / 0 / 5 / 10 / 0 / 9 / 0 | not found |
| Raspberry Lemonade with Ice | 1 serving | only in draft A | 160 / 0 / 0 / 0 / 0 / 5 / 41 / 0 / 40 / 0 | not found |
| Strawberry Lemonade with Ice | 1 serving | only in draft A | 140 / 0 / 0 / 0 / 0 / 5 / 37 / 0 / 36 / 0 | not found |
| Bud Light | 1 serving | only in draft A | 110 / 0 / 0 / 0 / 0 / 0 / 7 / 0 / 0 / 1 | not found |
| Blue Moon | 1 serving | only in draft A | 170 / 0 / 0 / 0 / 0 / 15 / 14 / 0 / 0 / 2 | not found |
| Samuel Adams | 1 serving | only in draft A | 180 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| MICHELOB ULTRA | 1 serving | only in draft A | 100 / 0 / 0 / 0 / 0 / 10 / 3 / 0 / 0 / 1 | not found |
| Coors Light | 1 serving | only in draft A | 100 / 0 / 0 / 0 / 0 / 10 / 5 / 0 / 0 / 1 | not found |
| Stella Artois | 1 serving | only in draft A | 140 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 0 / 0 | not found |
| Blackberry Sangria, Glass, 9 ounce | 1 serving | only in draft A | 340 / 0 / 0 / 0 / 0 / 15 / 45 / 1 / 41 / 0 | not found |
| Classic Red Sangria, Glass, 6 ounce | 1 serving | differ: sodium_mg, sugars_g | 190 / 0 / 0 / 0 / 0 / 0 / 22 / 1 / 19 / 1 | 190 / 0 / 0 / 0 / 0 / 5 / 22 / 1 / 18 / 1 |
| Classic Red Sangria, Glass, 9 ounce | 1 serving | only in draft A | 280 / 0 / 0 / 0 / 0 / 5 / 30 / 1 / 26 / 1 | not found |
| Peach Sangria, Glass, 6 ounce | 1 serving | differ: sugars_g | 220 / 0 / 0 / 0 / 0 / 10 / 22 / 0 / 20 / 0 | 220 / 0 / 0 / 0 / 0 / 10 / 22 / 0 / 19 / 0 |
| Peach Sangria, Glass, 9 ounce | 1 serving | only in draft A | 330 / 0 / 0 / 0 / 0 / 15 / 34 / 0 / 31 / 0 | not found |
| Sangria Rita | 1 serving | only in draft A | 240 / 0 / 0 / 0 / 0 / 0 / 31 / 0 / 28 / 0 | not found |
| Red Wine, Bottle, 750 ml | 1 serving | only in draft A | 630 / 0 / 0 / 0 / 0 / 30 / 19 / 0 / 5 / 1 | not found |
| Red Wine, Glass, 6 ounce | 1 serving | only in draft A | 150 / 0 / 0 / 0 / 0 / 5 / 5 / 0 / 1 / 0 | not found |
| Red Wine, Glass, 9 ounce | 1 serving | only in draft A | 220 / 0 / 0 / 0 / 0 / 10 / 7 / 0 / 2 / 0 | not found |
| Rose Wine, Bottle, 750 ml | 1 serving | only in draft A | 640 / 0 / 0 / 0 / 0 / 40 / 29 / 0 / 29 / 3 | not found |
| Rose Wine, Glass, 6 ounce | 1 serving | only in draft A | 150 / 0 / 0 / 0 / 0 / 10 / 7 / 0 / 7 / 1 | not found |
| Rose Wine, Glass, 9 ounces | 1 serving | only in draft A | 230 / 0 / 0 / 0 / 0 / 15 / 10 / 0 / 10 / 1 | not found |
| Sparking Wine, Bottle, 750 ml | 1 serving | only in draft A | 600 / 0 / 0 / 0 / 0 / 0 / 22 / 0 / 0 / 0 | not found |
| Sparking Wine, Glass, 6 ounce | 1 serving | only in draft A | 140 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 | not found |
| White Wine, Bottle, 750 ml | 1 serving | only in draft A | 610 / 0 / 0 / 0 / 0 / 35 / 19 / 0 / 7 / 1 | not found |
| White Wine, Glass, 6 ounce | 1 serving | only in draft A | 140 / 0 / 0 / 0 / 0 / 10 / 5 / 0 / 2 / 0 | not found |
| White Wine, Glass, 9 ounce | 1 serving | only in draft A | 220 / 0 / 0 / 0 / 0 / 15 / 7 / 0 / 3 / 0 | not found |
| Classic Red Sangria, Pitcher | 1 serving | differ: sodium_mg, carbs_g, sugars_g | 1020 / 0 / 0 / 0 / 0 / 25 / 109 / 1 / 95 / 3 | 1020 / 0 / 0 / 0 / 0 / 30 / 108 / 1 / 89 / 3 |
| Peach Sangria, Pitcher | 1 serving | differ: sugars_g | 890 / 0 / 0 / 0 / 0 / 50 / 87 / 0 / 78 / 1 | 890 / 0 / 0 / 0 / 0 / 50 / 87 / 0 / 77 / 1 |
| Wood Fired Old Fashioned | 1 serving | only in draft A | 190 / 0 / 0 / 0 / 0 / 5 / 12 / 0 / 12 / 0 | not found |
| Sicilian Prickly Pear Margarita | 1 serving | only in draft A | 280 / 0 / 0 / 0 / 0 / 0 / 36 / 0 / 33 / 0 | not found |
| Amalfi Margarita | 1 serving | only in draft A | 200 / 0 / 0 / 0 / 0 / 170 / 26 / 0 / 23 / 0 | not found |
| Sparkling Tuscan Lemonade | 1 serving | only in draft A | 190 / 0 / 0 / 0 / 0 / 15 / 24 / 0 / 23 / 0 | not found |
| Penne Martino, no protein (Regional) | 1 Serving | only in draft B | not found | 1320 / 71 / 42 / 1.5 / 155 / 2790 / 123 / 12 / 17 / 48 |
| Penne Martino with Chicken (Regional) | 1 Serving | only in draft B | not found | 1540 / 75 / 44 / 1.5 / 280 / 3160 / 123 / 12 / 17 / 94 |
| Penne Martino with Sausage (regional) | 1 Serving | only in draft B | not found | 1700 / 103 / 52 / 1.5 / 225 / 3500 / 125 / 12 / 17 / 66 |
| Side Italian Salad | 1 Serving | only in draft B | not found | 320 / 29 / 5 / 0 / 10 / 600 / 14 / 5 / 7 / 4 |
| Chopped Salad Entree | 1 Serving | only in draft B | not found | 700 / 47 / 16 / 0 / 125 / 2460 / 32 / 8 / 16 / 34 |
| Grilled Chicken 4oz | 1 Serving | only in draft B | not found | 160 / 3 / 1 / 0 / 85 / 260 / 0 / 0 / 0 / 32 |
| Chicken Tenders | 1 Serving | only in draft B | not found | 530 / 24 / 4.5 / 0 / 60 / 2210 / 48 / 4 / 1 / 30 |
| Grilled Shrimp | 1 Serving | only in draft B | not found | 90 / 2.5 / 0 / 0 / 125 / 630 / 1 / 0 / 0 / 16 |
| Caesar Entree Salad (No Protein) | 1 Serving | only in draft B | not found | 730 / 63 / 13 / 1 / 45 / 1390 / 27 / 5 / 5 / 15 |
| Margherita Flatbread | 1 Serving | only in draft B | not found | 620 / 28 / 14 / 0.5 / 70 / 1640 / 66 / 1 / 5 / 27 |
| Pepperoni Flatbread | 1 Serving | only in draft B | not found | 690 / 35 / 15 / 0.5 / 80 / 1740 / 66 / 2 / 6 / 29 |
| Chicken Caprese Flatbread | 1 Serving | only in draft B | not found | 1000 / 54 / 20 / 1 / 150 / 2150 / 74 / 3 / 7 / 57 |
| Calabrian Wings | 1 Serving | only in draft B | not found | 1150 / 105 / 36 / 1 / 265 / 1520 / 4 / 0 / 1 / 50 |
| Rosemary Garlic Parmesan Wings | 1 Serving | only in draft B | not found | 940 / 76 / 25 / 0.5 / 230 / 1530 / 10 / 1 / 1 / 52 |
| Whole Creamy Parmesan Chicken Tender Sandwich | 1 Serving | only in draft B | not found | 1400 / 92 / 19 / 1 / 125 / 4860 / 145 / 9 / 3 / 63 |
| Rigatoni AI Forno | 1 Serving | only in draft B | not found | 1340 / 76 / 47 / 2 / 215 / 2350 / 98 / 7 / 9 / 66 |
| Garlic Lemon Herb Linguine | 1 Serving | only in draft B | not found | 620 / 28 / 10 / 0 / 30 / 880 / 80 / 4 / 5 / 13 |
| Add Sausage 2 oz | 1 Serving | only in draft B | not found | 190 / 16 / 5 / 0 / 32 / 300 / 1 / 0 / 0 / 9 |
| Half Italian Sandwich | 1 Serving | only in draft B | not found | 640 / 53 / 15 / 0.5 / 80 / 2400 / 44 / 3 / 2 / 28 |
| Half Caprese Sandwich | 1 Serving | only in draft B | not found | 300 / 25 / 8 / 0 / 20 / 1030 / 42 / 2 / 2 / 12 |
| Half Bistro Steak Marsala Sandwich | 1 Serving | only in draft B | not found | 360 / 24 / 13 / 0.5 / 75 / 1350 / 45 / 3 / 2 / 24 |
| Half Creamy Parmesan Chicken Tender Sandwich | 1 Serving | only in draft B | not found | 790 / 55 / 11 / 0.5 / 65 / 2520 / 73 / 4 / 2 / 32 |
| Side Pasta Salad | 1 Serving | only in draft B | not found | 600 / 43 / 8 / 0 / 15 / 1150 / 41 / 5 / 6 / 12 |
| Side Fries | 1 Serving | only in draft B | not found | 740 / 37 / 8 / 0 / 0 / 2360 / 92 / 9 / 12 / 9 |
| Almalfi Cooler | 1 Serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 28 / 1 / 25 / 0 |
| Blackberry Spritzer | 1 Serving | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 15 / 30 / 1 / 28 / 0 |
| Prickly Pear Punch | 1 Serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 100 / 58 / 0 / 29 / 0 |
| Spinach Arancini | 1 Serving | only in draft B | not found | 520 / 40 / 20 / 1 / 85 / 1590 / 26 / 2 / 3 / 14 |
| CIG Lasagne Bolognese Dip | 1 Serving | only in draft B | not found | 590 / 39 / 17 / 1 / 105 / 1900 / 31 / 3 / 5 / 29 |
| Mezzaluna Fritte | 1 Serving | only in draft B | not found | 440 / 33 / 11 / 0 / 115 / 600 / 24 / 2 / 3 / 12 |
| Shrimp Focaccia Bites | 1 Serving | only in draft B | not found | 380 / 21 / 10 / 0 / 120 / 1150 / 33 / 1 / 3 / 18 |
| Calamari | 1 Serving | only in draft B | not found | 650 / 49 / 13 / 4 / 215 / 1480 / 35 / 3 / 5 / 17 |
| Meatball Sliders | 1 Serving | only in draft B | not found | 610 / 26 / 9 / 0.5 / 70 / 1580 / 66 / 5 / 8 / 29 |
| Calabrian Wings with Gorgonzola Cheese or Ranch Sauce | 1 Serving | only in draft B | not found | 1070 / 95 / 34 / 1 / 265 / 1520 / 4 / 0 / 1 / 50 |
| Classic Red Sangria, 6 ounce | 1 Serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 5 / 22 / 1 / 18 / 1 |
| Blood Orange Margarita | 1 Serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 10 / 20 / 0 / 18 / 0 |
| Rose Sangria | 1 Serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 39 / 0 / 32 / 0 |
| Limoncello Spritz | 1 Serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 0 / 16 / 0 / 15 / 0 |
| Italian Buck | 1 Serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 8 / 0 / 8 / 0 |
| Focaccia Bread with Herbs | 1 Serving | only in draft B | not found | 70 / 2.5 / 0 / 0 / 0 / 160 / 10 / 0 / 0 / 2 |
| Mini Cannoli | 1 Serving | only in draft B | not found | 320 / 22 / 13 / 0 / 30 / 160 / 26 / 1 / 14 / 5 |
| Oatmeal Cookie | 1 Serving | only in draft B | not found | 350 / 15 / 6 / 0 / 35 / 200 / 52 / 2 / 28 / 5 |
| Chocolate Chip Cookie | 1 Serving | only in draft B | not found | 190 / 9 / 4.5 / 0 / 15 / 105 / 26 / 1 / 16 / 2 |
| Penne Positano | 1 Serving | only in draft B | not found | 390 / 14 / 1 / 0 / 0 / 910 / 56 / 4 / 5 / 11 |
| Penne Alfredo | 1 Serving | only in draft B | not found | 860 / 61 / 39 / 2 / 155 / 980 / 54 / 3 / 5 / 23 |
| Penne Pomodoro with Meatballs | 1 Serving | only in draft B | not found | 660 / 28 / 10 / 0.5 / 90 / 1700 / 68 / 8 / 11 / 33 |
| Penne Pomodoro with Meat Sauce | 1 Serving | only in draft B | not found | 470 / 16 / 5 / 0 / 30 / 1020 / 61 / 6 / 9 / 18 |
| Tuscan Grilled Chicken | 1 Serving | only in draft B | not found | 270 / 5 / 2 / 0 / 145 / 450 / 0 / 0 / 0 / 55 |
| Penne Alfredo with Chicken | 1 Serving | only in draft B | not found | 1000 / 63 / 40 / 2 / 230 / 1210 / 54 / 3 / 5 / 51 |
| Penne Carrabba | 1 Serving | only in draft B | not found | 1020 / 64 / 40 / 2 / 230 / 1280 / 58 / 4 / 5 / 52 |
| Italian Salad with Chicken and Dressing | 1 Serving | only in draft B | not found | 420 / 31 / 6 / 0 / 80 / 830 / 6 / 3 / 2 / 30 |
| Caesar with Chicken and Dressing | 1 Serving | only in draft B | not found | 480 / 33 / 7 / 0 / 95 / 860 / 12 / 2 / 2 / 34 |
| Side Penne Pomodoro | 1 Serving | only in draft B | not found | 350 / 6 / 1 / 0 / 0 / 1020 / 62 / 7 / 10 / 12 |
| House Made Chips | 1 Serving | only in draft B | not found | 140 / 12 / 2 / 0 / 0 / 430 / 9 / 1 / 0 / 1 |
| Caesar Salad | 1 Serving | only in draft B | not found | 290 / 24 / 6 / 0 / 20 / 570 / 11 / 2 / 2 / 8 |
| House Salad | 1 Serving | only in draft B | not found | 200 / 19 / 3.5 / 0 / 10 / 330 / 6 / 2 / 2 / 3 |
| Bruschette Chicken Sandwich | 1 Whole (1 Pan) | only in draft B | not found | 770 / 480 / 54 / 18 / 0 / 1730 / 84 / 4 / 4 / 52 |
| Caprese Sandwich | 1 Whole (1 Pan) | only in draft B | not found | 570 / 420 / 47 / 14 / 0 / 1960 / 82 / 4 / 3 / 22 |
| Chicken Parmesan Sandwich | 1 Whole (1 Pan) | only in draft B | not found | 580 / 240 / 27 / 9 / 0 / 1560 / 42 / 5 / 9 / 41 |
| Steak Marsala Sandwich | 1 Whole (1 Pan) | only in draft B | not found | 650 / 380 / 43 / 22 / 1 / 2540 / 89 / 5 / 4 / 44 |
| Meatball Sandwich | 1 Whole (1 Pan) | only in draft B | not found | 1330 / 880 / 98 / 42 / 2.5 / 4280 / 109 / 9 / 13 / 68 |

## Spot check (8 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Chicken Bryan | 1 Serving | 490 / 25 / 15 / 0 / 180 / 1080 / 12 / 2 / 6 / 54 |
| Mezzaluna | Small (1 Pan) | 2180 / 126 / 73 / 2 / 410 / 4710 / 160 / 12 / 23 / 96 |
| Mezzaluna | 1 Serving | 740 / 39 / 22 / 0.5 / 140 / 1530 / 60 / 4 / 7 / 36 |
| Shrimp and Scallop Linguine Alla Vodka | 1 Serving | 1050 / 34 / 13 / 0 / 185 / 1900 / 119 / 9 / 10 / 49 |
| Mezzaluna | Large (1 Pan) | 4230 / 244 / 140 / 4 / 795 / 9110 / 319 / 23 / 46 / 182 |
| Kids Chicken Fingers with Fries | 1 Serving | 1320 / 61 / 12 / 0 / 60 / 5050 / 162 / 14 / 22 / 40 |
| Rigatoni Martino, no protein | 1 Serving | 1320 / 71 / 42 / 1.5 / 155 / 2790 / 123 / 12 / 17 / 48 |
| Tuscan Grilled Sirloin, 7oz. | 1 Serving | 310 / 14 / 6 / 0 / 90 / 1430 / 4 / 2 / 1 / 41 |
