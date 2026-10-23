# Pollo Tropical: lines for a person

Guide: https://www.pollotropical.com/nutrition (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (135)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/pollo-tropical.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Tropical Trio w/ white rice, black beans, plantains | 26.5 oz | only in draft A | 1530 / 67 / 17 / 0 / 290 / 2770 / 137 / 21 / 15 / 98 | not found | A: numbers found after the name (line 37); check the size |
| White Rice | 8.0 oz | only in draft A | 350 / 6 / 2 / 0 / 0 / 740 / 71 / 2 / 0 / 7 | not found | A: numbers found after the name (line 63); check the size |
| Yellow Rice with Veg | 8.0 oz | only in draft A | 320 / 5 / 0 / 0 / 0 / 1030 / 61 / 3 / 3 / 6 | not found | A: numbers found after the name (line 65); check the size |
| Brown Rice | 8.0 oz | only in draft A | 300 / 9 / 2 / 0 / 0 / 660 / 51 / 2 / 1 / 6 | not found | A: numbers found after the name (line 67); check the size |
| White Rice | Regular (8.0 oz) | only in draft B | not found | 350 / 6 / 2 / 0 / 0 / 740 / 71 / 2 / 0 / 7 | B: numbers found after the name (line 63); check the size |
| Yellow Rice with Veg | Regular (8.0 oz) | only in draft B | not found | 320 / 5 / 0 / 0 / 0 / 1030 / 61 / 3 / 3 / 6 | B: numbers found after the name (line 65); check the size |
| Brown Rice | Regular (8.0 oz) | only in draft B | not found | 300 / 9 / 2 / 0 / 0 / 660 / 51 / 2 / 1 / 6 | B: numbers found after the name (line 67); check the size |
| Boneless Chicken Breast | Regular (3.0 oz) | only in draft B | not found | 120 / 3 / 1 / 0 / 73 / 369 / 4 / 0 / 0 / 25 | B: numbers found after the name (line 86); check the size |
| Boneless Chicken Breast | Large (6.0 oz) | only in draft B | not found | 250 / 5 / 2 / 0 / 150 / 746 / 9 / 0 / 1 / 51 | B: numbers found after the name (line 87); check the size |
| Mojo Roast Pork | Regular (3.0 oz) | only in draft B | not found | 170 / 10 / 4 / 0 / 60 / 260 / 0 / 0 / 0 / 19 | B: numbers found after the name (line 88); check the size |
| Mojo Roast Pork | Large (6.0 oz) | only in draft B | not found | 330 / 20 / 7 / 0 / 115 / 520 / 0 / 0 / 0 / 39 | B: numbers found after the name (line 89); check the size |
| Boneless Chicken Breast and Mojo Roast Pork | Regular (6.5 oz) | only in draft B | not found | 290 / 13 / 5 / 0 / 145 / 690 / 5 / 0 / 0 / 49 | B: numbers found after the name (line 90); check the size |
| Boneless Chicken Breast and Mojo Roast Pork | Large (13.0 oz) | only in draft B | not found | 580 / 26 / 9 / 0 / 290 / 1370 / 10 / 0 / 1 / 97 | B: numbers found after the name (line 91); check the size |
| Churrasco Steak | Regular (2.3 oz) | only in draft B | not found | 200 / 16 / 2 / 0 / 45 / 450 / 2 / 0 / 0 / 13 | B: numbers found after the name (line 92); check the size |
| Churrasco Steak | Large (4.0 oz) | only in draft B | not found | 270 / 18 / 3 / 0 / 90 / 710 / 3 / 0 / 0 / 25 | B: numbers found after the name (line 34); check the size |
| Avocado | 2.0 oz | only in draft B | not found | 100 / 10 / 2 / 0 / 0 / 340 / 5 / 0 / 0 / 1 | B: numbers found after the name (line 99); check the size |
| Diced Tomatoes | 1.0 oz | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 100); check the size |
| Kernel Corn | 1.0 oz | only in draft B | not found | 30 / 1 / 0 / 0 / 0 / 45 / 5 / 1 / 3 / 1 | B: numbers found after the name (line 101); check the size |
| Sauteed Onions | 1.0 oz | only in draft B | not found | 20 / 2 / 0 / 0 / 0 / 70 / 2 / 1 / 1 / 0 | B: numbers found after the name (line 102); check the size |
| Sauteed Pepper Topping | 1.0 oz | only in draft B | not found | 15 / 1 / 0 / 0 / 0 / 70 / 2 / 1 / 1 / 0 | B: numbers found after the name (line 103); check the size |
| Chicken (drumstick & thigh) | 4.0 oz | only in draft B | not found | 290 / 22 / 6 / 0 / 135 / 430 / 0 / 0 / 0 / 24 | B: numbers found after the name (line 109); check the size |
| Grilled Chicken Strips | 3.5 oz | only in draft B | not found | 120 / 3 / 1 / 0 / 85 / 430 / 5 / 0 / 0 / 29 | B: numbers found after the name (line 110); check the size |
| Chicken Breast, Black beans, White rice | 11.5 oz | only in draft B | not found | 440 / 10 / 2 / 0 / 85 / 1130 / 61 / 9 / 1 / 39 | B: numbers found after the name (line 116); check the size |
| Chicken Breast, Mac & Cheese | 11.9 oz | only in draft B | not found | 530 / 28 / 16 / 0 / 155 / 1290 / 34 / 1 / 2 / 45 | B: numbers found after the name (line 117); check the size |
| Chicken (½) - Family Add On | 9.9 oz | only in draft B | not found | 650 / 42 / 12 / 0 / 320 / 1160 / 0 / 0 / 0 / 67 | B: numbers found after the name (line 130); check the size |
| Grilled Chicken Breast (2) - Family Add On | 7.0 oz | only in draft B | not found | 240 / 6 / 2 / 0 / 170 / 860 / 10 / 0 / 1 / 58 | B: numbers found after the name (line 131); check the size |
| Mojo Roast Pork w/ sauteed onions - Family Add On | 17 oz | only in draft B | not found | 880 / 53 / 19 / 0 / 290 / 1430 / 3 / 1 / 2 / 97 | B: numbers found after the name (line 132); check the size |
| Boneless Chicken Breast | Small (3.9 oz) | only in draft B | not found | 132 / 3 / 1 / 0 / 94 / 473 / 6 / 0 / 0 / 32 | B: numbers found after the name (line 138); check the size |
| Boneless Chicken Breast | Large (7.5 oz) | only in draft B | not found | 254 / 6 / 2 / 0 / 180 / 909 / 11 / 0 / 0 / 61 | B: numbers found after the name (line 139); check the size |
| White Rice | Individual (5.3 oz) | only in draft B | not found | 240 / 4 / 1 / 0 / 0 / 490 / 47 / 1 / 0 / 4 | B: numbers found after the name (line 145); check the size |
| White Rice | Platter (8.0 oz) | only in draft B | not found | 350 / 6 / 2 / 0 / 0 / 740 / 71 / 2 / 0 / 7 | B: numbers found after the name (line 63); check the size |
| White Rice | Family (20.0 oz) | only in draft B | not found | 890 / 14 / 3 / 0 / 0 / 1860 / 177 / 4 / 1 / 16 | B: numbers found after the name (line 147); check the size |
| Yellow Rice with Vegetables | Individual (5.3 oz) | only in draft B | not found | 170 / 3 / 0 / 0 / 0 / 440 / 34 / 2 / 1 / 4 | B: numbers found after the name (line 148); check the size |
| Yellow Rice with Vegetables | Platter (8.0 oz) | only in draft B | not found | 320 / 5 / 0 / 0 / 0 / 1030 / 61 / 3 / 3 / 6 | B: numbers found after the name (line 149); check the size |
| Yellow Rice with Vegetables | Family (18.6 oz) | only in draft B | not found | 590 / 10 / 2 / 0 / 0 / 1540 / 119 / 7 / 2 / 13 | B: numbers found after the name (line 150); check the size |
| Brown Rice | Individual (5.3 oz) | only in draft B | not found | 200 / 6 / 1 / 0 / 0 / 440 / 34 / 1 / 1 / 4 | B: numbers found after the name (line 151); check the size |
| Brown Rice | Platter (8.0 oz) | only in draft B | not found | 300 / 9 / 2 / 0 / 0 / 660 / 51 / 2 / 1 / 6 | B: numbers found after the name (line 67); check the size |
| Brown Rice | Family (20.0 oz) | only in draft B | not found | 750 / 21 / 4 / 0 / 0 / 1650 / 127 / 5 / 2 / 14 | B: numbers found after the name (line 153); check the size |
| Black Beans | Individual (6.0 oz) | only in draft B | not found | 216 / 5 / 0 / 0 / 0 / 456 / 30 / 11 / 1 / 10 | B: numbers found after the name (line 154); check the size |
| Black Beans | Platter (6.0 oz) | only in draft B | not found | 216 / 5 / 0 / 0 / 0 / 456 / 30 / 11 / 1 / 10 | B: numbers found after the name (line 154); check the size |
| Black Beans | Family (26.6 oz) | only in draft B | not found | 940 / 25 / 3 / 0 / 0 / 2220 / 136 / 50 / 7 / 45 | B: numbers found after the name (line 156); check the size |
| Kernel Corn | Individual (5.3 oz) | only in draft B | not found | 160 / 5 / 2 / 0 / 10 / 230 / 26 / 3 / 15 / 5 | B: numbers found after the name (line 157); check the size |
| Kernel Corn | Family (23.3 oz) | only in draft B | not found | 720 / 21 / 8 / 0 / 35 / 990 / 113 / 15 / 68 / 23 | B: numbers found after the name (line 158); check the size |
| Balsamic Tomatoes | Individual (5.6 oz) | only in draft B | not found | 120 / 9 / 1 / 0 / 0 / 870 / 10 / 2 / 7 / 1 | B: numbers found after the name (line 159); check the size |
| Balsamic Tomatoes | Family (22.5 oz) | only in draft B | not found | 482 / 36 / 4 / 0 / 0 / 3495 / 40 / 8 / 28 / 4 | B: numbers found after the name (line 160); check the size |
| Caesar Salad | Individual (4.0 oz) | only in draft B | not found | 340 / 32 / 6 / 0 / 30 / 530 / 8 / 1 / 1 / 5 | B: numbers found after the name (line 161); check the size |
| Caesar Salad | Family (7.3 oz) | only in draft B | not found | 600 / 59 / 11 / 0 / 55 / 950 / 12 / 2 / 2 / 9 | B: numbers found after the name (line 162); check the size |
| French Fries | Individual (5.0 oz) | only in draft B | not found | 340 / 18 / 4 / 0 / 0 / 420 / 40 / 2 / 1 / 4 | B: numbers found after the name (line 163); check the size |
| French Fries | Family (8.0 oz) | only in draft B | not found | 540 / 29 / 5 / 0 / 0 / 670 / 64 / 3 / 1 / 6 | B: numbers found after the name (line 164); check the size |
| Mac & Cheese | Individual (6.0 oz) | only in draft B | not found | 290 / 18 / 11 / 0 / 50 / 610 / 21 / 1 / 1 / 11 | B: numbers found after the name (line 165); check the size |
| Mac & Cheese | Family (23.5 oz) | only in draft B | not found | 1150 / 70 / 41 / 0 / 200 / 2400 / 82 / 3 / 5 / 44 | B: numbers found after the name (line 166); check the size |
| Salsa | 1.0 oz | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 115 / 2 / 1 / 1 / 0 | B: numbers found after the name (line 168); check the size |
| BBQ Sauce | 1.0 oz | only in draft B | not found | 50 / 0 / 0 / 0 / 0 / 300 / 12 / 0 / 11 / 0 | B: numbers found after the name (line 173); check the size |
| Guava BBQ Sauce | 1.0 oz | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 170 / 15 / 0 / 13 / 0 | B: numbers found after the name (line 174); check the size |
| Chipotle Mayo | 1.0 oz | only in draft B | not found | 160 / 17 / 3 / 0 / 10 / 270 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 175); check the size |
| Curry Mustard | 1.0 oz | only in draft B | not found | 150 / 17 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 176); check the size |
| Caesar Dressing | 3.0 oz | only in draft B | not found | 500 / 54 / 10 / 0 / 50 / 800 / 2 / 0 / 1 / 5 | B: numbers found after the name (line 177); check the size |
| Cilantro Garlic Sauce | 1.0 oz | only in draft B | not found | 160 / 17 / 3 / 0 / 15 / 170 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 178); check the size |
| Spicy Poyo-Poyo | 1.0 oz | only in draft B | not found | 100 / 7 / 2 / 0 / 0 / 320 / 2 / 1 / 0 / 0 | B: numbers found after the name (line 179); check the size |
| Ketchup | 1.0 oz | only in draft B | not found | 35 / 0 / 0 / 0 / 0 / 320 / 8 / 0 / 6 / 0 | B: numbers found after the name (line 180); check the size |
| Pineapple Rum Sauce | 1.0 oz | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 90 / 14 / 0 / 13 / 0 | B: numbers found after the name (line 181); check the size |
| Jalapeno Slices | 1.0 oz | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 300 / 1 / 1 / 0 / 0 | B: numbers found after the name (line 182); check the size |
| Dinner Roll | 0.9 oz | only in draft B | not found | 70 / 1 / 0 / 0 / 0 / 110 / 14 / 0 / 3 / 2 | B: numbers found after the name (line 183); check the size |
| Sweet Plantains | Individual (7.2 oz) | only in draft B | not found | 450 / 11 / 2 / 0 / 0 / 0 / 85 / 6 / 46 / 3 | B: numbers found after the name (line 189); check the size |
| Sweet Plantains | Family (13.2 oz) | only in draft B | not found | 840 / 20 / 3 / 0 / 0 / 0 / 159 / 12 / 85 / 6 | B: numbers found after the name (line 190); check the size |
| Fried Yuca | Regular (5.0 oz) | only in draft B | not found | 320 / 14 / 7 / 0 / 0 / 430 / 46 / 2 / 2 / 1 | B: numbers found after the name (line 191); check the size |
| Fried Yuca | Large (9.0 oz) | only in draft B | not found | 640 / 29 / 13 / 0 / 0 / 870 / 92 / 4 / 5 / 3 | B: numbers found after the name (line 192); check the size |
| Cheesy Yuca Bites | Individual (4.9 oz) | only in draft B | not found | 370 / 20 / 6 / 0 / 35 / 600 / 41 / 4 / 1 / 8 | B: numbers found after the name (line 193); check the size |
| Cheesy Plantain Bites | Individual (4.2 oz) | only in draft B | not found | 280 / 14 / 6 / 0 / 32 / 5 / 32 / 2 / 15 / 6 | B: numbers found after the name (line 194); check the size |
| Flan | 4.0 oz | only in draft B | not found | 210 / 9 / 5 / 0 / 90 / 550 / 26 / 0 / 26 / 8 | B: numbers found after the name (line 200); check the size |
| Chocolate Chip Cookie | 1.6 oz | only in draft B | not found | 230 / 11 / 6 / 0 / 15 / 95 / 27 / 0 / 24 / 3 | B: numbers found after the name (line 201); check the size |
| Cuatro Leches | 6.0 oz | only in draft B | not found | 430 / 19 / 11 / 0 / 110 / 250 / 56 / 0 / 49 / 12 | B: numbers found after the name (line 202); check the size |
| Apple Juice (box) | 6.8 oz | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 15 / 24 / 0 / 24 / 0 | B: numbers found after the name (line 208); check the size |
| Tea, Unsweet | Regular (20 oz) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 214); check the size, mostly zeros: look |
| Tea, Unsweet | Large (32 oz) | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 0 / 4 / 0 / 0 / 0 | B: numbers found after the name (line 215); check the size, mostly zeros: look |
| Tea, Sweet | Regular (20 oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 56 / 0 / 53 / 0 | B: numbers found after the name (line 216); check the size |
| Tea, Sweet | Large (32 oz) | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 0 / 89 / 0 / 85 / 0 | B: numbers found after the name (line 217); check the size |
| Mango Tea | Regular (20 oz) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 10 / 2 / 0 / 0 / 1 | B: numbers found after the name (line 218); check the size |
| Mango Tea | Large (32 oz) | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 20 / 4 / 0 / 0 / 1 | B: numbers found after the name (line 219); check the size |
| Mango Sweet Tea | Regular (20 oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 10 / 56 / 0 / 53 / 1 | B: numbers found after the name (line 220); check the size |
| Mango Sweet Tea | Large (32 oz) | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 20 / 89 / 0 / 85 / 1 | B: numbers found after the name (line 221); check the size |
| Coca-Cola | Regular (20 oz) | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 5 / 62 / 0 / 62 / 0 | B: numbers found after the name (line 222); check the size |
| Coca-Cola | Large (32 oz) | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 10 / 100 / 0 / 100 / 0 | B: numbers found after the name (line 223); check the size |
| Diet Coke | Regular (20 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 25 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 224); check the size, mostly zeros: look |
| Diet Coke | Large (32 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 35 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 225); check the size, mostly zeros: look |
| Coke Zero | Regular (20 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 226); check the size, mostly zeros: look |
| Coke Zero | Large (32 oz) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 20 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 227); check the size, mostly zeros: look |
| Sprite | Regular (20 oz) | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 50 / 57 / 0 / 57 / 0 | B: numbers found after the name (line 228); check the size |
| Sprite | Large (32 oz) | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 80 / 91 / 0 / 91 / 0 | B: numbers found after the name (line 229); check the size |
| Fanta Orange | Regular (20 oz) | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 35 / 68 / 0 / 68 / 0 | B: numbers found after the name (line 230); check the size |
| Fanta Orange | Large (32 oz) | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 55 / 109 / 0 / 109 / 0 | B: numbers found after the name (line 231); check the size |
| Dr Pepper | Regular (20 oz) | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 80 / 62 / 0 / 62 / 0 | B: numbers found after the name (line 232); check the size |
| Dr Pepper | Large (32 oz) | only in draft B | not found | 370 / 0 / 0 / 0 / 0 / 130 / 100 / 0 / 100 / 0 | B: numbers found after the name (line 233); check the size |
| Hi-C Fruit Punch | Regular (20 oz) | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 25 / 62 / 0 / 62 / 0 | B: numbers found after the name (line 234); check the size |
| Hi-C Fruit Punch | Large (32 oz) | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 35 / 100 / 0 / 100 / 0 | B: numbers found after the name (line 235); check the size |
| Hi-C Orange Lavaburst | Regular (20 oz) | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 65 / 69 / 0 / 69 / 0 | B: numbers found after the name (line 236); check the size |
| Hi-C Orange Lavaburst | Large (32 oz) | only in draft B | not found | 450 / 0 / 0 / 0 / 0 / 105 / 111 / 0 / 111 / 0 | B: numbers found after the name (line 237); check the size |
| Fuze Raspberry Tea | Regular (20 oz) | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 120 / 34 / 0 / 34 / 0 | B: numbers found after the name (line 238); check the size |
| Fuze Raspberry Tea | Large (32 oz) | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 190 / 54 / 0 / 54 / 0 | B: numbers found after the name (line 239); check the size |
| Powerade Mountain Blast | Regular (20 oz) | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 120 / 34 / 0 / 34 / 0 | B: numbers found after the name (line 240); check the size |
| Powerade Mountain Blast | Large (32 oz) | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 190 / 54 / 0 / 54 / 0 | B: numbers found after the name (line 241); check the size |
| Vitaminwater XXX | Regular (20 oz) | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 0 / 33 / 0 / 31 / 0 | B: numbers found after the name (line 242); check the size |
| Vitaminwater XXX | Large (32 oz) | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 53 / 0 / 49 / 0 | B: numbers found after the name (line 243); check the size |
| Tea, Unsweet - ice | Regular (10 oz) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 249); check the size, mostly zeros: look |
| Tea, Unsweet - ice | Large (16 oz) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 250); check the size, mostly zeros: look |
| Tea, Sweet - ice | Regular (10 oz) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 27 / 0 / 26 / 0 | B: numbers found after the name (line 251); check the size |
| Tea, Sweet - ice | Large (16 oz) | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 45 / 0 / 43 / 0 | B: numbers found after the name (line 252); check the size |
| Mango Tea - ice | Regular (10 oz) | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 253); check the size |
| Mango Tea - ice | Large (16 oz) | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 10 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 254); check the size |
| Mango Sweet Tea - ice | Regular (10 oz) | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 5 / 27 / 0 / 26 / 0 | B: numbers found after the name (line 255); check the size |
| Mango Sweet Tea - ice | Large (16 oz) | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 10 / 45 / 0 / 43 / 0 | B: numbers found after the name (line 256); check the size |
| Coca-Cola - ice | Regular (13 oz) | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 41 / 0 / 41 / 0 | B: numbers found after the name (line 257); check the size |
| Coca-Cola - ice | Large (21 oz) | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 5 / 67 / 0 / 67 / 0 | B: numbers found after the name (line 258); check the size |
| Diet Coke - ice | Regular (13 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 259); check the size, mostly zeros: look |
| Diet Coke - ice | Large (21 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 25 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 260); check the size, mostly zeros: look |
| Coke Zero - ice | Regular (13 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 261); check the size, mostly zeros: look |
| Coke Zero - ice | Large (21 oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 262); check the size, mostly zeros: look |
| Sprite - ice | Regular (13 oz) | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 35 / 37 / 0 / 37 / 0 | B: numbers found after the name (line 263); check the size |
| Sprite - ice | Large (21 oz) | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 55 / 60 / 0 / 60 / 0 | B: numbers found after the name (line 264); check the size |
| Fanta Orange - ice | Regular (13 oz) | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 20 / 44 / 0 / 44 / 0 | B: numbers found after the name (line 265); check the size |
| Fanta Orange - ice | Large (21 oz) | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 35 / 72 / 0 / 72 / 0 | B: numbers found after the name (line 266); check the size |
| Dr Pepper - ice | Regular (13 oz) | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 50 / 40 / 0 / 40 / 0 | B: numbers found after the name (line 267); check the size |
| Dr Pepper - ice | Large (21 oz) | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 85 / 66 / 0 / 66 / 0 | B: numbers found after the name (line 268); check the size |
| Lemonade, Natalie's - ice | Regular (13 oz) | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 40 / 0 / 34 / 0 | B: numbers found after the name (line 269); check the size |
| Lemonade, Natalie's - ice | Large (21 oz) | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 0 / 65 / 1 / 56 / 1 | B: numbers found after the name (line 270); check the size |
| Hi-C Fruit Punch - ice | Regular (13 oz) | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 15 / 41 / 0 / 41 / 0 | B: numbers found after the name (line 271); check the size |
| Hi-C Fruit Punch - ice | Large (21 oz) | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 25 / 66 / 0 / 66 / 0 | B: numbers found after the name (line 272); check the size |
| Hi-C Orange Lavaburst - ice | Regular (13 oz) | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 45 / 45 / 0 / 45 / 0 | B: numbers found after the name (line 273); check the size |
| Hi-C Orange Lavaburst - ice | Large (21 oz) | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 70 / 74 / 0 / 74 / 0 | B: numbers found after the name (line 274); check the size |
| Powerade Mountain Blast - ice | Regular (13 oz) | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 75 / 22 / 0 / 22 / 0 | B: numbers found after the name (line 275); check the size |
| Powerade Mountain Blast - ice | Large (21 oz) | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 125 / 36 / 0 / 36 / 0 | B: numbers found after the name (line 276); check the size |
| Vitaminwater XXX - ice | Regular (13 oz) | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 45 / 45 / 0 / 45 / 0 | B: numbers found after the name (line 277); check the size |
| Vitaminwater XXX - ice | Large (21 oz) | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 70 / 74 / 0 / 74 / 0 | B: numbers found after the name (line 278); check the size |
| Grilled Chicken Breast (2) | 7.0 oz | both read it the same, but its protein, carbs and fat make 330 kcal, not 240 | 240 / 6 / 2 / 0 / 170 / 860 / 10 / 0 / 1 / 59 | 240 / 6 / 2 / 0 / 170 / 860 / 10 / 0 / 1 / 59 | A: numbers found after the name (line 31); check the size; B: numbers found after the name (line 31); check the size |
| Grilled Chicken for Caesar Salad | 3.5 oz | both read it the same, but its protein, carbs and fat make 163 kcal, not 120 | 120 / 3 / 1 / 0 / 85 / 430 / 5 / 0 / 0 / 29 | 120 / 3 / 1 / 0 / 85 / 430 / 5 / 0 / 0 / 29 | A: numbers found after the name (line 45); check the size; B: numbers found after the name (line 45); check the size |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Romaine Lettuce / White Rice | Regular (5.3 oz) | 190 / 3 / 1 / 0 / 0 / 400 / 39 / 1 / 0 / 4 |
| Black Beans | Regular (5.0 oz) | 180 / 5 / 0 / 0 / 0 / 380 / 25 / 9 / 1 / 9 |
| Grilled Chicken Caesar Wrap | 9.2 oz | 680 / 45 / 11 / 0 / 125 / 1340 / 42 / 3 / 1 / 39 |
