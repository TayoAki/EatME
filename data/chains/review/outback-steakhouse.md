# Outback Steakhouse: lines for a person

Guide: https://outback.blob.core.windows.net/content/images/OBS_Full_Nutrition_Information_Core_Menu_Items.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (188)

Fix each line in `menus/outback-steakhouse.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Classic Prime Rib | 16 oz | both read numbers that can't be right: sugars 2 g above carbs 0 g | 1770 / 145 / 66 / 9 / 445 / 1510 / 0 / 0 / 2 / 116 | 1770 / 145 / 66 / 9 / 445 / 1510 / 0 / 0 / 2 / 116 |
| Classic Prime Rib | 24 oz | both read numbers that can't be right: sugars 2 g above carbs 0 g | 2660 / 217 / 99 / 13 / 665 / 1880 / 0 / 0 / 2 / 175 | 2660 / 217 / 99 / 13 / 665 / 1880 / 0 / 0 / 2 / 175 |
| Raspberry Lemon Drop (Regional) | 1 Serving | both read numbers that can't be right: sugars 25 g above carbs 0 g | 230 / 0 / 0 / 0 / 0 / 27 / 0 / 0 / 25 / 0 | 230 / 0 / 0 / 0 / 0 / 27 / 0 / 0 / 25 / 0 |
| Root Beer Old Fashioned (Regional) | 1 Serving | both read numbers that can't be right: sugars 13 g above carbs 5 g | 210 / 0 / 0 / 0 / 0 / 14 / 5 / 0 / 13 / 0 | 210 / 0 / 0 / 0 / 0 / 14 / 5 / 0 / 13 / 0 |
| Watermelon Hunch Punch | 1 Serving | both read numbers that can't be right: sugars 131 g above carbs 47 g | 200 / 0 / 0 / 0 / 0 / 10 / 47 / 0.5 / 131 / 1 | 200 / 0 / 0 / 0 / 0 / 10 / 47 / 0.5 / 131 / 1 |
| Bloomin' Fried Chicken Sandwich | 1 Serving | only in draft B | not found | 710 / 40 / 17 / 1 / 90 / 1340 / 56 / 5 / 11 / 33 |
| Sweet Chook O' Mine Sandwich | 1 Serving | only in draft B | not found | 880 / 53 / 17 / 1 / 150 / 1430 / 56 / 2 / 24 / 48 |
| Prime Rib Sandwich - Lunch | 1 Serving | only in draft B | not found | 2090 / 146 / 61 / 1.5 / 245 / 5040 / 124 / 15 / 12 / 56 |
| The Outbacker Burger with No Cheese or Bacon | 1 Serving | only in draft B | not found | 660 / 39 / 20 / 2.5 / 105 / 790 / 41 / 2 / 10 / 37 |
| The Bloomin' Burger | 1 Serving | only in draft B | not found | 970 / 57 / 27 / 2.5 / 135 / 2160 / 70 / 6 / 15 / 46 |
| Add Bacon Strips | 2 | only in draft B | not found | 60 / 5 / 2 / 0 / 10 / 250 / 0 / 0 / 0 / 4 |
| Add American Cheese | 2 Slices | only in draft B | not found | 100 / 9 / 5 / 0 / 25 / 510 / 0.5 / 0 / 0.5 / 5 |
| Add Cheddar Cheese | 2 Slices | only in draft B | not found | 170 / 14 / 9 / 0 / 45 / 270 / 0 / 0 / 0 / 11 |
| Add Provolone Cheese | 2 Slices | only in draft B | not found | 200 / 15 / 9 / 0 / 45 / 490 / 1 / 0 / 0 / 15 |
| Add Swiss Cheese | 2 Slices | only in draft B | not found | 170 / 14 / 9 / 0 / 50 / 210 / 0.5 / 0 / 0 / 13 |
| SANDWICH CHICKEN BBQ SWISS BACON - OBS | 1 Serving | only in draft B | not found | 610 / 26 / 13 / 0 / 135 / 1250 / 48 / 2 / 15 / 47 |
| Strawberry Salad Entree--Grilled Chicken with dressing | 1 Serving | only in draft B | not found | 950 / 66 / 16 / 1 / 145 / 670 / 41 / 7 / 31 / 50 |
| Strawberry Salad Entree--Fried Chicken with dressing | 1 Serving | only in draft B | not found | 1170 / 83 / 24 / 2 / 120 / 1240 / 69 / 8 / 33 / 39 |
| Aussie Cobb | 1 Serving | only in draft B | not found | 400 / 27 / 11 / 0 / 265 / 850 / 13 / 0.5 / 3 / 25 |
| Aussie Cobb Crispy Chicken | 1 Serving | only in draft B | not found | 860 / 51 / 21 / 1 / 320 / 1870 / 46 / 3 / 6 / 53 |
| Aussie Cobb Grilled Chicken | 1 Serving | only in draft B | not found | 160 / 3.5 / 1 / 0 / 90 / 180 / 0 / 0 / 0 / 31 |
| Brisbane Caesar Salad with Dressing and No Protein | 1 Serving | only in draft B | not found | 380 / 34 / 7 / 0 / 60 / 850 / 12 / 0.5 / 1 / 8 |
| Brisbane Caesar Salad with Dressing and Shrimp | 1 Serving | only in draft B | not found | 160 / 4 / 1.5 / 0 / 195 / 640 / 2 / 0 / 0 / 26 |
| Brisbane Caesar Salad with Dressing and Grilled Chicken | 1 Serving | only in draft B | not found | 640 / 39 / 11 / 0 / 315 / 1190 / 13 / 2 / 3 / 58 |
| Steakhouse Salad | 1 Serving | only in draft B | not found | 1170 / 87 / 20 / 1 / 100 / 2140 / 47 / 5 / 27 / 46 |
| Add Ranch Dressing | 2 oz | only in draft B | not found | 280 / 30 / 5 / 0 / 20 / 330 / 2 / 0 / 1 / 1 |
| Add Blue Cheese Dressing | 2 oz | only in draft B | not found | 340 / 35 / 7 / 0.5 / 30 / 380 / 1 / 0 / 1 / 3 |
| Add Thousand Island Dressing | 2 oz | only in draft B | not found | 330 / 34 / 5 / 0 / 25 / 450 / 7 / 0 / 4 / 0.5 |
| Add Tangy Tomato Dressing | 2 oz | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 240 / 23 / 0 / 21 / 2 |
| Add Caesar Dressing | 2 oz | only in draft B | not found | 270 / 28 / 5 / 0 / 55 / 570 / 2 / 0.5 / 0 / 4 |
| Add Honey Mustard | 2 oz | only in draft B | not found | 300 / 27 / 4.5 / 0 / 20 / 390 / 15 / 0 / 14 / 0.5 |
| Add Mustard Vinaigrette Dressing | 2 oz | only in draft B | not found | 290 / 30 / 4.5 / 0 / 0 / 150 / 6 / 0 / 5 / 0 |
| Add Light Balsamic Vinaigrette | 2 oz | only in draft B | not found | 100 / 6 / 1 / 0 / 0 / 430 / 10 / 0 / 9 / 0 |
| Add Oil & Balsamic Dressing | 2 oz | only in draft B | not found | 280 / 28 / 4 / 0 / 0 / 0 / 6 / 0 / 6 / 0 |
| Add Blue Cheese Vinaigrette | 2 oz | only in draft B | not found | 340 / 31 / 6 / 0 / 2.5 / 830 / 10 / 0 / 8 / 2 |
| Chicken On The Barbie | 5 oz | only in draft B | not found | 240 / 4.5 / 1.5 / 0 / 90 / 600 / 17 / 0.5 / 14 / 31 |
| Grilled Shrimp On The Barbie | 6 Each | only in draft B | not found | 620 / 43 / 14 / 0 / 225 / 1070 / 29 / 3 / 6 / 27 |
| Coconut Shrimp | 6 | only in draft B | not found | 420 / 17 / 11 / 0 / 185 / 480 / 41 / 1 / 25 / 23 |
| Alice Springs Chicken | 5 oz | only in draft B | not found | 510 / 32 / 10 / 0 / 170 / 730 / 11 / 1 / 10 / 48 |
| Bloomin Fried Chicken-Lunch | 1 Serving | only in draft B | not found | 480 / 35 / 9 / 0.5 / 85 / 1080 / 16 / 3 / 1 / 27 |
| Chocolate Thunmder From Down Under | 1 Serving | only in draft B | not found | 1520 / 105 / 56 / 1.5 / 390 / 380 / 142 / 7 / 119 / 18 |
| Cheesecake W/ Raspberry Sauce | 1 Serving | only in draft B | not found | 1040 / 62 / 37 / 3 / 320 / 660 / 105 / 2 / 86 / 17 |
| Cheesecake W/ Chocolate Sauce | 1 Serving | only in draft B | not found | 1080 / 73 / 43 / 3 / 340 / 690 / 92 / 2 / 78 / 17 |
| Carrot Cake | 1 Serving | only in draft B | not found | 1290 / 68 / 21 / 1 / 130 / 960 / 174 / 5 / 117 / 10 |
| Butter Cake | 1 Serving | only in draft B | not found | 840 / 47 / 15 / 1 / 155 / 750 / 98 / 3 / 65 / 10 |
| Salted Caramel Cookie | 1 Serving | only in draft B | not found | 930 / 42 / 30 / 0 / 105 / 1360 / 132 / 1 / 82 / 10 |
| Thunder & Lightning | 1 Serving | only in draft B | not found | 1920 / 126 / 60 / 1.5 / 465 / 190 / 870 / 8 / 147 / 24 |
| Chocolate Tower | 1 Serving | only in draft B | not found | 710 / – / – / – / – / – / – / – / – / – |
| Ice Cream | 1 Scoop | only in draft B | not found | 300 / 16 / 10 / 0.5 / 65 / 90 / 33 / 0 / 26 / 5 |
| Kid Chicken Fingers | 1 Serving | only in draft B | not found | 480 / 25 / 10 / 1 / 85 / 1040 / 33 / 2 / 3 / 29 |
| Kid Burger | 1 Serving | only in draft B | not found | 500 / 23 / 10 / 1 / 20 / 1550 / 67 / 7 / 0 / 7 |
| Kid Mac And Cheese | 1 Serving | only in draft B | not found | 510 / 19 / 10 / 0.5 / 55 / 1000 / 65 / 4 / 8 / 20 |
| Kid Grilled Chicken On the Barbie | 1 Serving | only in draft B | not found | 160 / 3.5 / 1 / 0 / 90 / 180 / 0 / 0 / 0 / 31 |
| Kid Sirloin | 5 Oz | only in draft B | not found | 180 / 6 / 2.5 / 0 / 80 / 440 / 0 / 0 / 0 / 32 |
| Side Broccoli No Butter | 1 Serving | only in draft B | not found | 70 / 0.5 / 0 / 0 / 0 / 65 / 13 / 5 / 3 / 6 |
| Prep Kid Fruit Orange And Strawberry | 1 Serving | only in draft B | not found | 50 / 0 / 0 / 0 / 0 / 0 / 12 / 3 / 9 / 0.5 |
| Kid French Fries | 1 Serving | only in draft B | not found | 500 / 23 / 10 / 1 / 20 / 1550 / 67 / 7 / 0 / 7 |
| Kid Apple Juice | 1 Serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 25 / 23 / 0 / 22 / 0 |
| Kid Orange Juice | 1 Serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 21 / 2 |
| Kid Sundae No Topping | 1 Serving | only in draft B | not found | 120 / 6 / 4 / 0 / 25 / 35 / 14 / 0 / 11 / 2 |
| Add Chocolate Sauce | 1 Oz | only in draft B | not found | 150 / 11 / 7 / 0 / 25 / 35 / 15 / 0.5 / 13 / 0.5 |
| Kid Ice Cream | 1 Scoop | only in draft B | not found | 120 / 6 / 4 / 0 / 25 / 35 / 13 / 0 / 10 / 2 |
| Albacore Tuna Salad Sandwich (Regional) | 1 Serving | only in draft B | not found | 1400 / 79 / 23 / 2 / 140 / 3960 / 114 / 10 / 7 / 56 |
| Bacon Cheeseburger (Regional) | 1 Serving | only in draft B | not found | 870 / 56 / 28 / 2.5 / 145 / 1680 / 42 / 2 / 11 / 49 |
| Blue Cheese Bacon Burger (Regional) | 1 Serving | only in draft B | not found | 1410 / 87 / 36 / 3.5 / 155 / 3280 / 105 / 9 / 8 / 51 |
| Classic Cheeseburger (Regional) | 1 Serving | only in draft B | not found | 660 / 39 / 20 / 2.5 / 105 / 790 / 41 / 2 / 10 / 37 |
| Honey-Lime Chicken Wrap (Regional) | 1 Serving | only in draft B | not found | 640 / 21 / 5 / 0 / 75 / 1080 / 69 / 3 / 11 / 34 |
| Mushroom Swiss Burger (Regional) | 1 Serving | only in draft B | not found | 950 / 67 / 32 / 3 / 160 / 1210 / 40 / 3 / 8 / 52 |
| Steakhouse Salad Wrap (Regional) | 1 Serving | only in draft B | not found | 910 / 45 / 16 / 1 / 110 / 2060 / 66 / 3 / 8 / 55 |
| Yogurt Parfait | 1 Serving | only in draft B | not found | 390 / 10 / 3.5 / 0 / 10 / 100 / 59 / 6 / 35 / 21 |
| Outback Breakfast | 1 Serving | only in draft B | not found | 570 / 16 / 4.5 / 0 / 380 / 1190 / 78 / 2 / 7 / 27 |
| Add Center Cut Sirloin | 4 oz | only in draft B | not found | 280 / 14 / 7 / 0 / 120 / 300 / 0 / 0 / 0 / 39 |
| Alice Springs Omelet | 1 Serving | only in draft B | not found | 720 / 42 / 18 / 0.5 / 535 / 1610 / 37 / 3 / 5 / 52 |
| Spinach and Mushroom Omelet | 1 Serving | only in draft B | not found | 870 / 71 / 41 / 0 / 560 / 1200 / 33 / 5 / 1 / 25 |
| Egg, Bacon & Cheese Sandwich | 1 Serving | only in draft B | not found | 640 / 23 / 10 / 0 / 250 / 1820 / 84 / 6 / 12 / 27 |
| Egg, Bacon & Cheese Wrap | 1 Serving | only in draft B | not found | 780 / 41 / 18 / 0 / 480 / 2550 / 67 / 3 / 33 / 36 |
| Egg, Bacon & Cheese Omelet (American Cheese) | 1 Serving | only in draft B | not found | 570 / 36 / 18 / 0 / 490 / 1800 / 35 / 2 / 3 / 28 |
| Egg, Bacon & Cheese Omelet (Mixed Cheese) | 1 Serving | only in draft B | not found | 540 / 34 / 17 / 0 / 475 / 1370 / 32 / 2 / 1 / 27 |
| Egg, Bacon & Cheese Omelet (Swiss Cheese) | 1 Serving | only in draft B | not found | 620 / 39 / 21 / 0.5 / 490 / 1290 / 32 / 3 / 1 / 33 |
| French Toast | 2 slices | only in draft B | not found | 840 / 39 / 19 / 0 / 295 / 1000 / 95 / 0 / 54 / 22 |
| French Toast | 3 slices | only in draft B | not found | 1020 / 43 / 20 / 0 / 410 / 1270 / 122 / 0 / 61 / 29 |
| Aussie Breakfast Wrap | 1 Serving | only in draft B | not found | 800 / 42 / 17 / 1 / 450 / 2110 / 76 / 4 / 4 / 31 |
| Side: Caesar Salad (without dressing) | 1 Serving | only in draft B | not found | 210 / 12 / 4.5 / 0 / 20 / 520 / 16 / 0.5 / 2 / 10 |
| Side: Caesar Dressing | 1 Serving | only in draft B | not found | 610 / 63 / 12 / 0 / 125 / 1290 / 5 / 1 / 0.5 / 9 |
| House Salad Dressing: Blue Cheese Vinaigrette | 1 Serving | only in draft B | not found | 770 / 70 / 13 / 0 / 10 / 1870 / 23 / 0.5 / 18 / 5 |
| Side: House Salad Dressing: Creamy Blue Cheese Dressing | 1 Serving | only in draft B | not found | 760 / 80 / 17 / 1.5 / 65 / 860 / 3 / 0 / 2 / 6 |
| Side: House Salad Dressing: Honey Mustard Dressing | 1 Serving | only in draft B | not found | 680 / 61 / 10 / 1 / 40 / 870 / 34 / 0 / 31 / 2 |
| Side: House Salad Dressing: Mustard Vinaigrette | 1 Serving | only in draft B | not found | 660 / 67 / 10 / 1 / 0 / 340 / 13 / 0.5 / 11 / 0.5 |
| Side: House Salad Dressing: Oil and Balsamic Vinegar | 1 Serving | only in draft B | not found | 630 / 64 / 9 / 0 / 0 / 0 / 13 / 0 / 13 / 0 |
| Side: House Salad Dressing: Oil and Vinegar | 1 Serving | only in draft B | not found | 560 / 64 / 9 / 0 / 0 / 5 / 0 / 0 / 0 / 0 |
| Side: House Salad Dressing: Ranch Dressing | 1 Serving | only in draft B | not found | 640 / 68 / 11 / 1 / 50 / 750 / 4 / 0 / 3 / 3 |
| Side: House Salad Dressing: Soy Ginger Dressing | 1 Serving | only in draft B | not found | 670 / 66 / 10 / 1 / 50 / 2450 / 17 / 0.5 / 13 / 4 |
| Side: House Salad Dressing: Tango Tomato Dressing | 1 Serving | only in draft B | not found | 200 / 0.5 / 0 / 0 / 0 / 540 / 51 / 1 / 47 / 2 |
| Side: House Salad Dressing: Thousand Island Dressing | 1 Serving | only in draft B | not found | 750 / 75 / 12 / 1 / 60 / 1000 / 17 / 0 / 8 / 1 |
| Red Wine | 5 oz (Regional) | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 5 / 4 / 0 / 0 / 0 |
| Red Wine | 6 oz | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 5 / 5 / 0 / 1 / 0 |
| Red Wine | 9 oz | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 10 / 7 / 0 / 2 / 0 |
| Red Wine | Bottle | only in draft B | not found | 640 / 0 / 0 / 0 / 0 / 25 / 20 / 0 / 5 / 0.5 |
| Rose Wine | 5 oz (Regional) | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 5 / 4 / 0 / 1 / 0 |
| Sparkling Wine | 6 oz | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 |
| Sparkling Wine | Bottle | only in draft B | not found | 600 / 0 / 0 / 0 / 0 / 0 / 20 / 0 / 0 / 0 |
| White Wine | 5 oz (Regional) | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 5 / 4 / 0 / 1 / 0 |
| White Wine | 6 oz | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 5 / 5 / 0 / 2 / 0 |
| White Wine | 9 oz | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 10 / 7 / 0 / 3 / 0 |
| White Wine | Bottle | only in draft B | not found | 650 / 0 / 0 / 0 / 0 / 25 / 19 / 0 / 7 / 0.5 |
| Black Cherry Peach Mojito | 1 Serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 25 / 27 / 0.5 / 24 / 0 |
| Blood Orange 'Rita | 1 Serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 1180 / 26 / 1 / 22 / 0.5 |
| Boomarita | 7 oz | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 910 / 30 / 1 / 26 / 0 |
| Classic Lime 'Rita | 1 Serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 5 / 22 / 1 / 17 / 0 |
| Classic Mojito with Bacardi Superior Light Rum | 1 Serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 0 / 15 / 0 / 14 / 0 |
| Classic Mojito with Sailor Jerry Spiced Rum | 1 Serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 10 / 15 / 0 / 14 / 0 |
| Corona 'Rita | 1 Serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 2230 / 22 / 0 / 12 / 1 |
| Down Under 'Rita - Frozen | 1 Serving | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 2230 / 40 / 0 / 36 / 0 |
| Down Under 'Rita - Rocks/Straight-Up | 1 Serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 2230 / 19 / 0 / 17 / 0 |
| Down Under Sauza Agave Margarita | 1 Serving | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 2230 / 32 / 0 / 29 / 0 |
| Down Under Sauza Gold Coast 'Rita, Rocks | 1 Serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 290 / 9 / 0 / 7 / 0 |
| Hawaiian Style 'Rita | 1 Serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 10 / 10 / 0 / 7 / 0 |
| TOP SHELF HERRADURA RITA - OBS | 1 Serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 2230 / 25 / 0.5 / 19 / 0 |
| Strawberry Kiw Rita | 1 Serving | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 0 / 30 / 0.5 / 28 / 0 |
| Lemon Mojito (Regional) | 1 Serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 24 / 1 / 20 / 0 |
| Mango Mojito (Regional) | 1 Serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 31 / 1 / 26 / 0 |
| Mango Passion Fruit 'Rita | 1 Serving | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 25 / 43 / 1 / 38 / 0 |
| Margarita Swirl (Regional) | 1 Serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 2230 / 28 / 0.5 / 24 / 0 |
| Mojito Bacardi Limon with Blackberry | 1 Serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 24 / 2 / 20 / 0.5 |
| Mojito Bacardi Limon with Classic Lime | 1 Serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 0 / 21 / 1 / 18 / 0 |
| Mojito Bacardi Limon with Pineapple | 1 Serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 0 / 30 / 2 / 24 / 0.5 |
| Mojito Bacardi Limon with Strawberry | 1 Serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 0 / 17 / 0.5 / 15 / 0 |
| Mojito Bacardi Superior Light Rum with Blackberry | 1 Serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 21 / 2 / 17 / 0.5 |
| Mojito Bacardi Superior Light Rum with Classic Lime | 1 Serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 0 / 19 / 1 / 15 / 0 |
| Mojito Bacardi Superior Light Rum with Pineapple | 1 Serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 0 / 27 / 2 / 22 / 0.5 |
| Mojito Bacardi Superior Light Rum with Strawberry | 1 Serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 21 / 2 / 16 / 0.5 |
| Mojito Sailor Jerry Spiced Rum with Blackberry | 1 Serving | only in draft B | not found | 230 / 0 / 0 / 0 / 10 / 10 / 21 / 2 / 17 / 0.5 |
| Mojito Sailor Jerry Spiced Rum with Classic Lime | 1 Serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 10 / 19 / 1 / 15 / 0 |
| Mojito Sailor Jerry Spiced Rum with Pineapple | 1 Serving | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 15 / 27 / 2 / 22 / 0.5 |
| Mojito Sailor Jerry Spiced Rum with Strawberry | 1 Serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 10 / 21 / 2 / 16 / 0.5 |
| Naturally Skinny 'Rita | 1 Serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 2220 / 20 / 1 / 17 / 0.5 |
| No Rules 'Rita, Rocks | 1 Serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 2230 / 27 / 0 / 21 / 0 |
| Rita Trio | 1 Serving | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 2230 / 40 / 0.5 / 35 / 0 |
| Sauza Agave Margarita | 1 Serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 2220 / 29 / 0 / 25 / 0 |
| Sauza Gold Coast Rita, Rocks | 1 Serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 2220 / 9 / 0 / 7 / 0 |
| Strawberry Ginger Smash | 1 Serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 23 / 0.5 / 20 / 0 |
| The Gold Coast 'Rita - Frozen | 1 Serving | only in draft B | not found | 540 / 0 / 0 / 0 / 0 / 3370 / 109 / 0 / 97 / 0 |
| The Gold Coast 'Rita - Frozen (Classic Lime) (Regional) | 1 Serving | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 2230 / 71 / 0 / 64 / 0 |
| The Gold Coast 'Rita - Frozen (Strawberry) | 1 Serving | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 2230 / 72 / 0 / 64 / 0 |
| The Gold Coast 'Rita - Rocks | 1 Serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 2230 / 24 / 0 / 21 / 0 |
| The Gold Coast 'Rita - Rocks (Strawberry) | 1 Serving | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 2230 / 43 / 0 / 38 / 0 |
| The Grand 'Rita, Rocks | 1 Serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 2230 / 28 / 0 / 21 / 0 |
| Top Shelf 'Rita, Straight Up/Rocks | 1 Serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 2230 / 25 / 0.5 / 19 / 0 |
| Absolut Mango Crush | 1 Serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 0 / 22 / 0.5 / 21 / 0.5 |
| Aussie Fresh Fruit Cooler | Individual | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 0 / 35 / 2 / 31 / 0.5 |
| Aussie Rum Punch | 1 Serving | only in draft B | not found | 190 / 0 / 0 / 0 / 30 / 30 / 33 / 0.5 / 30 / 0 |
| Bailey's on the Rocks (Regional) | 1 Serving | only in draft B | not found | 190 / 0 / 4.5 / 0 / 0 / 0 / 14 / 0 / 12 / 2 |
| Black Barrel Irish Tea | 1 Serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 27 / 2 / 22 / 0.5 |
| Blackberry Bramble (Regional) | 1 Serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 17 / 3 / 11 / 0.5 |
| Black Cherry Mule (Regional) | 1 Serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 25 / 5 / 0 / 22 / 0 |
| Blackberry Sangria | Individual | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 5 / 28 / 1 / 24 / 0.5 |
| Blueberry Desert Pear Burst (Regional) | 1 Serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 25 / 0 / 0 / 21 / 0 |
| Blueberry Lavender Lemonade | 1 Serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 10 / 37 / 0 / 35 / 0 |
| BOOZY CHERRY LIMEADE COCKTAIL | 1 Serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 30 / 27 / 0 / 25 / 0 |
| Boozy Root Beer Float | 1 Serving | only in draft B | not found | 550 / 15 / 9 / 0 / 55 / 75 / 29 / 0 / 23 / 4 |
| BOOZY CHERRY LIMEADE COCKTAIL - OBS | 1 Serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 30 / 27 / 0 / 25 / 0 |
| Captain's Mai Tai | 1 Serving | only in draft B | not found | 220 / 0 / 0 / 0 / 45 / 30 / 25 / 0 / 25 / 0.5 |
| Captain's Mai Tai with extra shot of Rum | 1 Serving | only in draft B | not found | 260 / 0 / 0 / 0 / 45 / 30 / 30 / 0 / 25 / 0.5 |
| Castaway Cocktail | 1 Serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 5 / 35 / 1 / 30 / 0.5 |
| Classic Moscow Mule (Regional) | 1 Serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 5 / 0 |
| Classic Red Sangria (Regional) | 1 Serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 0 / 29 / 3 / 23 / 1 |
| Classic Steakhouse Martini (Absolut) - Rocks/Straight-Up | 1 Serving | only in draft B | not found | 170 / 3 / 0 / 0 / 0 / 540 / 0 / 0 / 0 / 0 |
| Classic Steakhouse Martini (Grey Goose) - Rocks/Straight-Up | 1 Serving | only in draft B | not found | 170 / 3 / 0 / 0 / 0 / 540 / 0 / 0 / 0 / 0 |
| Classic Steakhouse Martini (Kettle One) - Rocks/Straight-Up | 1 Serving | only in draft B | not found | 170 / 3 / 0 / 0 / 0 / 540 / 0 / 0 / 0 / 0 |
| Classic Steakhouse Martini (Stoll) - Rocks/Straight-Up | 1 Serving | only in draft B | not found | 170 / 3 / 0 / 0 / 0 / 540 / 0 / 0 / 0 / 0 |
| Classic Steakhouse Martini (Tito's) - Rocks/Straight-Up | 1 Serving | only in draft B | not found | 170 / 3 / 0 / 0 / 0 / 540 / 0 / 0 / 0 / 0 |
| Cucumber Infused Lemonade (Regional) | 1 Serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 16 / 0 |
| Disaronomo Amaretto on the Rocks (Regional) | 1 Serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 15 / 19 / 0 / 19 / 0 |
| Dorothy's Ruby Red Cosmo (Regional) | 1 Serving | only in draft B | not found | 210 / 0 / 0 / 0 / 10 / 10 / 30 / 0 / 25 / 0 |
| Down Under Mule (Regional) NEW | 1 Serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 7 / 0.5 / 5 / 0 |
| Espresso Infused Vodka and White Chocolate Martini (Regional) | 1 Serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 10 / 0 |
| Fair Dinkum Daiquiri | 1 Serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 24 / 0 / 21 / 0 |
| Fully Loaded Bloody Mary (Absolut) | 1 Serving | only in draft B | not found | 150 / 3 / 0 / 0 / 0 / 2130 / 9 / 1 / 3 / 1 |
| Fully Loaded Bloody Mary (Tito's) | 1 Serving | only in draft B | not found | 150 / 3 / 0 / 0 / 0 / 2130 / 9 / 1 / 3 / 1 |
| Grand Marnier Straight Up (Regional) | 1 Serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 14 / 0 / 0 / 0 |
| Grapefruit Sage Martini (Regional) | 1 Serving | only in draft B | not found | 220 / 1.5 / 1 / 0 / 0 / 0 / 24 / 5 / 14 / 2 |
| Great Barrier Punch | 1 Serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 21 / 0.5 / 20 / 0.5 |
| House-Made Margarita (Regional) | 1 Serving | only in draft B | not found | 370 / 0 / 0 / 0 / 0 / 580 / 62 / 0 / 56 / 0 |
| House-Made Margarita Top Shelf (Patron and Grand Marnier Float) (Regional) | 1 Serving | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 580 / 66 / 0 / 56 / 0 |
| Huckleberry Hooch Moonshine Cocktail | Individual | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 10 / 33 / 0.5 / 131 / 0 |
| Hypnotic Breeze Martini | 1 Serving | only in draft B | not found | 200 / 6 / 3.5 / 0 / 20 / 55 / 22 / 0 / 19 / 1 |
| Incredible Hulk | 1 Serving | only in draft B | not found | 160 / 4.5 / 2.5 / 0 / 15 / 25 / 6 / 0 / 6 / 0.5 |
| Jack Dundee Tea | 1 Serving | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 5 / 59 / 0 / 54 / 0 |

## Spot check (13 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Baked Potato Soup | Bowl | 450 / 32 / 18 / 0.5 / 70 / 2770 / 33 / 2 / 4 / 9 |
| Lolly Sour Apple Martini | 1 Serving | 360 / 0 / 0 / 0 / 0 / 0 / 56 / 0 / 51 / 0 |
| Omission Pale Ale | Bottle, 12 oz | 170 / 0 / 0 / 0 / 0 / 20 / 13 / 0 / 0 / 2 |
| Lindemans Framboise Lambic | Bottle, 12 oz | 230 / 0 / 0 / 0 / 0 / 15 / 34 / 0 / 33 / 0 |
| Modelo Especial | Bottle, 12 oz | 180 / 0 / 0 / 0 / 0 / 15 / 15 / 0 / 0 / 2 |
| Kookaburra Wings Medium | 1 Serving | 1740 / 130 / 35 / 3 / 375 / 4100 / 52 / 6 / 4 / 87 |
| Seared Peppered Ahi | 1 Serving | 440 / 24 / 3.5 / 0 / 45 / 2210 / 30 / 3 / 15 / 29 |
| Seasoned Rice | 1 Serving | 290 / 6 / 2.5 / 0 / 2.5 / 1470 / 53 / 2 / 5 / 6 |
| Pina Colada (Bacardi Rock Coconut Rum) | 1 Serving | 490 / 12 / 11 / 0 / 0 / 105 / 78 / 0 / 73 / 2 |
| Sydney's Cosmo with Skinnygirl Bare Naked Vodka | 1 Serving | 240 / 0 / 0 / 0 / 0 / 5 / 30 / 0.5 / 27 / 0 |
| Gold Coast Coconut Shrimp | 1 Serving | 520 / 21 / 14 / 0 / 245 / 640 / 49 / 1 / 28 / 31 |
| Spiked Red Bull with Kettle One | 1 Serving | 140 / 0 / 0 / 0 / 0 / 100 / 14 / 0 / 12 / 0 |
| Shark Bite (Regional) | 1 Serving | 210 / 0 / 0 / 0 / 0 / 25 / 30 / 0 / 27 / 0 |
