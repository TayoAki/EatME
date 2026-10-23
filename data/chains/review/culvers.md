# Culver's: lines for a person

Guide: https://cdn.culvers.com/page-content/menu/nutrition-guide.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (106)

Fix each line in `menus/culvers.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Fresh Fried Chicken Value Basket | 2 Piece | only in draft A | 840 / 35 / 5.7 / 0 / 250 / 1493 / 57 / 4 / 0 / 75 | not found |
| Pecan Halves | 1 serving | only in draft A | 28 / 190 / 21 / 1.8 / 0.2 / 0 / 110 / 4 / 2 / 1 | not found |
| Raspberry | 1 serving | only in draft A | 30 / 1 / 0 / 0 / 0 / 0 / 7 / 1 / 6 / 0 | not found |
| Caffeine Free Diet Pepsi® | Small (16 fl oz) | only in draft A | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | not found |
| Caffeine Free Diet Pepsi® | Medium (22 fl oz) | only in draft A | 0 / 0 / 0 / 0 / 0 / 69 / 0 / 0 / 0 / 0 | not found |
| Caffeine Free Diet Pepsi® | Large (32 fl oz) | only in draft A | 0 / 0 / 0 / 0 / 0 / 100 / 0 / 0 / 0 / 0 | not found |
| Diet Pepsi® | Small (16 fl oz) | only in draft A | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 | not found |
| Diet Pepsi® | Medium (22 fl oz) | only in draft A | 0 / 0 / 0 / 0 / 0 / 69 / 0 / 0 / 0 / 0 | not found |
| Diet Pepsi® | Large (32 fl oz) | only in draft A | 0 / 0 / 0 / 0 / 0 / 100 / 0 / 0 / 0 / 0 | not found |
| Fresh Brewed Unsweet Tea | Small (16 fl oz) | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Fresh Brewed Unsweet Tea | Medium (22 fl oz) | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Fresh Brewed Unsweet Tea | Large (32 fl oz) | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Pepsi® | Small (16 fl oz) | only in draft A | 200 / 0 / 0 / 0 / 0 / 40 / 56 / 0 / 56 / 0 | not found |
| Pepsi® | Medium (22 fl oz) | only in draft A | 270 / 0 / 0 / 0 / 0 / 54 / 76 / 0 / 76 / 0 | not found |
| Pepsi® | Large (32 fl oz) | only in draft A | 400 / 0 / 0 / 0 / 0 / 80 / 112 / 0 / 112 / 0 | not found |
| Wild Cherry Pepsi | Small (16 fl oz) | only in draft A | 200 / 0 / 0 / 0 / 0 / 40 / 56 / 0 / 56 / 0 | not found |
| Wild Cherry Pepsi | Medium (22 fl oz) | only in draft A | 270 / 0 / 0 / 0 / 0 / 54 / 76 / 0 / 76 / 0 | not found |
| Wild Cherry Pepsi | Large (32 fl oz) | only in draft A | 400 / 0 / 0 / 0 / 0 / 80 / 112 / 0 / 112 / 0 | not found |
| Sprinkles, Blue and White | 1 serving | both read numbers that can't be right: fiber 26 g above carbs 0 g | 120 / 2 / 2 / 0 / 0 / 0 / 0 / 26 / 0 / 24 | 120 / 2 / 2 / 0 / 0 / 0 / 0 / 26 / 0 / 24 |
| Strawberry, Sliced | 1 serving | both read numbers that can't be right: fiber 11 g above carbs 0 g | 45 / 0 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 11 | 45 / 0 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 11 |
| American Cheese | Slice (19 g) | only in draft B | not found | 70 / 6 / 3.5 / 0 / 15 / 140 / 1 / 0 / 1 / 3 |
| Bacon | 2 Slices (9 g) | only in draft B | not found | 40 / 3 / 1 / 0 / 10 / 140 / 0 / 0 / 0 / 4 |
| BBQ Sauce | 54 g | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 440 / 25 / 0 / 24 / 0 |
| Dill Pickles, Sliced | 6 g | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 / 0 |
| Honey Mustard | 54 g | only in draft B | not found | 130 / 6 / 1 / 0 / 0 / 400 / 20 / 0 / 18 / 0 |
| Horseradish Sauce | 12 g | only in draft B | not found | 60 / 6 / 1 / 0 / 5 / 90 / 2 / 0 / 1 / 0 |
| Ketchup | 17 g | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 160 / 5 / 0 / 4 / 0 |
| Malt Vinegar | 9 g | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Mayonnaise | 12 g | only in draft B | not found | 80 / 8 / 1.5 / 0 / 5 / 75 / 1 / 0 / 1 / 0 |
| Mustard, Mild | 11 g | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 130 / 0 / 0 / 0 / 0 |
| Mustard, Spicy Brown | 10 g | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 120 / 0 / 0 / 0 / 0 |
| Picante Sauce, Mild and Medium | 32 g | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 220 / 2 / 0 / 2 / 0 |
| Shrimp Cocktail Sauce | 42 g | only in draft B | not found | 50 / 0 / 0 / 0 / 0 / 360 / 12 / 1 / 7 / 1 |
| Steak Sauce | 12 g | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 150 / 2 / 0 / 2 / 0 |
| Sweet & Sour Dipping Sauce | 54 g | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 320 / 23 / 0 / 21 / 0 |
| Tartar Sauce | 57 g | only in draft B | not found | 360 / 39 / 6 / 0.5 / 30 / 340 / 3 / 0 / 2 / 1 |
| Chicken Cashew with Grilled Chicken | 340 g | only in draft B | not found | 460 / 24 / 8.1 / 0.2 / 115 / 863 / 18 / 3 / 3 / 47 |
| Cranberry Bacon Bleu Salad with Grilled Chicken | 329 g | only in draft B | not found | 360 / 14 / 6.5 / 0 / 120 / 1103 / 17 / 2 / 8 / 46 |
| Garden Fresco | 200 g | only in draft B | not found | 200 / 11 / 5 / 0 / 25 / 363 / 19 / 2 / 2 / 11 |
| Garden Fresco with Grilled Chicken | 326 g | only in draft B | not found | 360 / 14 / 5.5 / 0 / 115 / 913 / 19 / 2 / 2 / 45 |
| Side Salad | 61 g | only in draft B | not found | 55 / 3 / 1.4 / 0 / 7 / 101 / 5 / 1 / 1 / 3 |
| Chunky Bleu Cheese Dressing | 50 g | only in draft B | not found | 310 / 33 / 6 / 0.5 / 20 / 480 / 2 / 0 / 1 / 1 |
| French Dressing | 50 g | only in draft B | not found | 190 / 13 / 2 / 0 / 0 / 320 / 19 / 0 / 18 / 0 |
| Ranch Dressing | 50 g | only in draft B | not found | 180 / 19 / 3 / 0 / 25 / 370 / 2 / 0 / 1 / 1 |
| Raspberry Vinaigrette Dressing | 54 g | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 180 / 11 / 0 / 10 / 0 |
| Sesame Ginger Dressing | 54 g | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 350 / 16 / 0 / 14 / 1 |
| Thousand Island Dressing | 60 g | only in draft B | not found | 220 / 18 / 2 / 0 / 20 / 460 / 14 / 0 / 8 / 0 |
| Baja Chicken Enchilada | 11 g | only in draft B | not found | 300 / 18 / 8 / 0 / 65 / 1300 / 25 / 6 / 6 / 12 |
| Bean with Ham | 11 g | only in draft B | not found | 160 / 2 / 0.5 / 0 / 5 / 1270 / 28 / 7 / 3 / 7 |
| Boston Clam Chowder | 11 g | only in draft B | not found | 260 / 11 / 4 / 0 / 30 / 1530 / 27 / 1 / 8 / 12 |
| Broccoli Cheese | 11 g | only in draft B | not found | 220 / 12 / 5.5 / 0 / 31 / 1160 / 17 / 1 / 9 / 10 |
| Cauliflower Cheese | 11 g | only in draft B | not found | 270 / 15 / 6 / 0 / 26 / 1320 / 25 / 1 / 15 / 10 |
| Cheesy Chicken Tortilla | 11 g | only in draft B | not found | 150 / 6 / 3 / 0 / 27 / 1450 / 16 / 1 / 4 / 8 |
| Chicken & Dumpling | 11 g | only in draft B | not found | 240 / 12 / 3 / 0 / 50 / 1290 / 23 / 1 / 5 / 9 |
| Chicken Noodle | 11 g | only in draft B | not found | 110 / 2 / 0.5 / 0 / 30 / 1110 / 14 / 1 / 1 / 7 |
| George's Chili | 11 g | only in draft B | not found | 300 / 14 / 4.5 / 0 / 45 / 1470 / 27 / 6 / 6 / 18 |
| George's Chili Supreme | 12 g | only in draft B | not found | 400 / 22 / 6.8 / 0 / 75 / 1516 / 28 / 6 / 7 / 21 |
| Oven-Roasted Turkey Noodle | 11 g | only in draft B | not found | 170 / 5 / 2 / 0 / 43 / 1286 / 21 / 0 / 1 / 11 |
| Potato Au Gratin | 11 g | only in draft B | not found | 330 / 20 / 10 / 0 / 45 / 1180 / 28 / 1 / 9 / 10 |
| Potato with Bacon | 11 g | only in draft B | not found | 240 / 10 / 4 / 0 / 25 / 1140 / 28 / 2 / 9 / 9 |
| Stuffed Green Pepper | 11 g | only in draft B | not found | 140 / 2 / 1 / 0 / 10 / 1170 / 24 / 1 / 6 / 5 |
| Tomato Fiorentine | 11 g | only in draft B | not found | 110 / 1 / 0.5 / 0 / 0 / 1280 / 22 / 2 / 7 / 4 |
| Vegetable Beef with Barley | 11 g | only in draft B | not found | 160 / 4 / 2 / 0 / 20 / 1440 / 22 / 2 / 4 / 8 |
| Wild and Brown Rice with Chicken | 11 g | only in draft B | not found | 270 / 14 / 5 / 0 / 38 / 1220 / 26 / 1 / 9 / 10 |
| Wisconsin Cheese | 11 g | only in draft B | not found | 320 / 20 / 9 / 0 / 37 / 1090 / 27 / 0 / 16 / 9 |
| Banana Split | 2 Scoop (485 g) | only in draft B | not found | 1060 / 60 / 26.3 / 1.6 / 219 / 368 / 121 / 8 / 90 / 16 |
| Banana Split | 3 Scoop (612 g) | only in draft B | not found | 1350 / 71 / 33.9 / 1.9 / 274 / 503 / 165 / 8 / 125 / 20 |
| Caramel Cashew | 1 Scoop (212 g) | only in draft B | not found | 600 / 33 / 14.9 / 0.9 / 118 / 296 / 68 / 1 / 45 / 11 |
| Caramel Cashew | 2 Scoop (377 g) | only in draft B | not found | 1000 / 51 / 26 / 1.6 / 224 / 472 / 122 / 1 / 84 / 17 |
| Caramel Cashew | 3 Scoop (446 g) | only in draft B | not found | 1150 / 60 / 31.5 / 1.9 / 279 / 513 / 137 / 1 / 97 / 19 |
| Fudge Pecan Sundae | 1 Scoop (212 g) | only in draft B | not found | 640 / 43 / 16.8 / 0.9 / 113 / 286 / 58 / 2 / 48 / 10 |
| Fudge Pecan Sundae | 2 Scoop (377 g) | only in draft B | not found | 1040 / 64 / 30.6 / 1.5 / 214 / 452 / 107 / 2 / 90 / 17 |
| Fudge Pecan Sundae | 3 Scoop (446 g) | only in draft B | not found | 1190 / 73 / 36.1 / 1.9 / 269 / 493 / 122 / 2 / 103 / 20 |
| Turtle Sundae | 1 Scoop (212 g) | only in draft B | not found | 640 / 42 / 15.4 / 0.9 / 115 / 291 / 61 / 2 / 46 / 10 |
| Turtle Sundae | 2 Scoop (377 g) | only in draft B | not found | 1040 / 62 / 27.9 / 1.5 / 219 / 462 / 112 / 2 / 87 / 16 |
| Turtle Sundae | 3 Scoop (446 g) | only in draft B | not found | 1190 / 70 / 33.4 / 1.9 / 274 / 503 / 127 / 2 / 100 / 19 |
| Chocolate Cake Cone | 1 Scoop (144 g) | only in draft B | not found | 300 / 14 / 8.2 / 0.5 / 96 / 127 / 39 / 1 / 29 / 6 |
| Chocolate Cake Cone | 2 Scoop (274 g) | only in draft B | not found | 560 / 27 / 16 / 0.9 / 187 / 237 / 72 / 3 / 56 / 11 |
| Chocolate Cake Cone | 3 Scoop (344 g) | only in draft B | not found | 700 / 34 / 20.2 / 1.1 / 236 / 297 / 89 / 3 / 71 / 14 |
| Chocolate, Dish | 1 Scoop (140 g) | only in draft B | not found | 280 / 14 / 8.4 / 0.5 / 98 / 119 / 35 / 1 / 29 / 6 |
| Chocolate, Dish | 2 Scoop (270 g) | only in draft B | not found | 540 / 27 / 16.2 / 0.9 / 189 / 230 / 68 / 3 / 57 / 11 |
| Chocolate, Dish | 3 Scoop (340 g) | only in draft B | not found | 680 / 34 / 20.4 / 1.2 / 238 / 289 / 85 / 3 / 71 / 14 |
| Chocolate, Waffle Cone | 1 Scoop (183 g) | only in draft B | not found | 380 / 16 / 8.9 / 0.5 / 103 / 119 / 53 / 1 / 37 / 7 |
| Chocolate, Waffle Cone | 2 Scoop (313 g) | only in draft B | not found | 640 / 30 / 16.7 / 0.9 / 194 / 230 / 86 / 3 / 65 / 12 |
| Chocolate, Waffle Cone | 3 Scoop (383 g) | only in draft B | not found | 780 / 36 / 20.9 / 1.2 / 243 / 289 / 103 / 3 / 79 / 15 |
| Mini Scoop Chocolate Cake Cone | 94 g | only in draft B | not found | 200 / 9 / 5.2 / 0.3 / 61 / 84 / 27 / 1 / 18 / 4 |
| Mini Scoop Vanilla Cake Cone | 90 g | only in draft B | not found | 210 / 11 / 6.7 / 0.4 / 67 / 60 / 23 / 0 / 16 / 3 |
| Vanilla Cake Cone | 1 Scoop (145 g) | only in draft B | not found | 330 / 18 / 11.1 / 0.7 / 111 / 93 / 35 / 0 / 26 / 6 |
| Vanilla Cake Cone | 2 Scoop (272 g) | only in draft B | not found | 610 / 35 / 21.3 / 1.3 / 213 / 170 / 64 / 0 / 51 / 11 |
| Pecan Halves | 28 g | only in draft B | not found | 200 / 21 / 1.8 / 0.2 / 0 / 110 / 4 / 2 / 1 / 2 |
| Raspberry | 28 g | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 0 / 0 / 7 / 1 / 6 |
| Caffeine Free Diet Pepsi® | Small (16 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 |
| Caffeine Free Diet Pepsi® | Medium (22 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 69 / 0 / 0 / 0 / 0 |
| Caffeine Free Diet Pepsi® | Large (32 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 100 / 0 / 0 / 0 / 0 |
| Diet Pepsi® | Small (16 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 50 / 0 / 0 / 0 / 0 |
| Diet Pepsi® | Medium (22 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 69 / 0 / 0 / 0 / 0 |
| Diet Pepsi® | Large (32 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 100 / 0 / 0 / 0 / 0 |
| Fresh Brewed Unsweet Tea | Small (16 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Fresh Brewed Unsweet Tea | Medium (22 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Fresh Brewed Unsweet Tea | Large (32 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Pepsi® | Small (16 oz) | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 40 / 56 / 0 / 56 / 0 |
| Pepsi® | Medium (22 oz) | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 54 / 76 / 0 / 76 / 0 |
| Pepsi® | Large (32 oz) | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 80 / 112 / 0 / 112 / 0 |
| Wild Cherry Pepsi | Small (16 oz) | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 40 / 56 / 0 / 56 / 0 |
| Wild Cherry Pepsi | Medium (22 oz) | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 54 / 76 / 0 / 76 / 0 |
| Wild Cherry Pepsi | Large (32 oz) | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 80 / 112 / 0 / 112 / 0 |

## Spot check (12 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Reese's Vanilla Concrete Mixer | Tall | 1520 / 89 / 49 / 2.5 / 400 / 600 / 158 / 3 / 137 / 29 |
| Wisconsin Swiss Melt | Double (240 g) | 730 / 44 / 19 / 1 / 150 / 860 / 38 / 4 / 2 / 46 |
| Pepsi® Max | Small (16 fl oz) | 0 / 0 / 0 / 0 / 0 / 51 / 0 / 0 / 0 / 0 |
| Crazy for Cookie Dough Concrete Mixer | Short | 890 / 46 / 28 / 2 / 251 / 392 / 106 / 0 / 82 / 14 |
| Sourdough Melt | Triple (348 g) | 970 / 66 / 30.5 / 1.5 / 220 / 1190 / 36 / 1 / 2 / 63 |
| Kit Kat® | 1 serving | 120 / 6 / 4 / 0 / 0 / 15 / 16 / 0 / 12 / 1 |
| Tropicana Fruit Punch® | Small (16 fl oz) | 220 / 0 / 0 / 0 / 0 / 50 / 60 / 0 / 60 / 0 |
| Reese's Chocolate Concrete Mixer | Mini | 480 / 25 / 13.2 / 0.6 / 119 / 244 / 58 / 3 / 50 / 10 |
| Wisconsin Cheese Curds | 1 serving | 510 / 25 / 12 / 0.7 / 55 / 1230 / 51 / 0 / 4 / 20 |
| Culver's® Root Beer Float | Tall | 530 / 18 / 11.3 / 0.7 / 113 / 195 / 91 / 0 / 85 / 6 |
| Nestlé® Chunch | 1 serving | 140 / 7 / 4 / 0 / 0 / 40 / 19 / 0 / 15 / 1 |
| Lemon Ice | 1 Scoop | 200 / 0 / 0 / 0 / 0 / 0 / 49 / 0 / 44 / 0 |
