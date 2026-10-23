# Texas de Brazil: lines for a person

Guide: https://texasdebrazil.com/nutrition-allergens/ (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (88)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/texas-de-brazil.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Croutons | 1 serving | both read numbers that can't be right: saturated and trans fat above fat | 60 / 0 / 0 / 2 / 0 / 180 / 10 / 0 / 0 / 2 | 60 / 0 / 0 / 2 / 0 / 180 / 10 / 0 / 0 / 2 | A: numbers found after the name (line 84); check the size; B: numbers found after the name (line 84); check the size |
| Picanha | 1 lb | only in draft B | not found | 580 / 21 / 7 / 1 / 300 / 1330 / 0 / 0 / 0 / 97 | B: numbers found after the name (line 233); check the size |
| Picanha | 1/2 lb | only in draft B | not found | 290 / 11 / 3.5 / 0.5 / 150 / 660 / 0 / 0 / 0 / 48 | B: numbers found after the name (line 234); check the size |
| Garlic Picanha | 1 lb | only in draft B | not found | 640 / 29 / 7 / 1 / 285 / 1260 / 5 / 0 / 0 / 93 | B: numbers found after the name (line 235); check the size |
| Garlic Picanha | 1/2 lb | only in draft B | not found | 320 / 14 / 3.5 / 0.5 / 145 / 630 / 2 / 0 / 0 / 46 | B: numbers found after the name (line 236); check the size |
| Spicy Sirloin | 1 lb | only in draft B | not found | 730 / 38 / 14 / 0 / 290 / 2700 / 0 / 0 / 0 / 91 | B: numbers found after the name (line 237); check the size |
| Spicy Sirloin | 1/2 lb | only in draft B | not found | 370 / 19 / 7 / 0 / 145 / 1350 / 0 / 0 / 0 / 46 | B: numbers found after the name (line 238); check the size |
| Flank Steak | 1 lb | only in draft B | not found | 640 / 25 / 8 / 0 / 275 / 1340 / 0 / 0 / 0 / 96 | B: numbers found after the name (line 239); check the size |
| Flank Steak | 1/2 lb | only in draft B | not found | 320 / 13 / 4 / 0 / 135 / 670 / 0 / 0 / 0 / 48 | B: numbers found after the name (line 240); check the size |
| Filet Mignon | 1 lb | only in draft B | not found | 1240 / 98 / 40 / 0 / 315 / 1310 / 0 / 0 / 0 / 82 | B: numbers found after the name (line 241); check the size |
| Filet Mignon | 1/2 lb | only in draft B | not found | 620 / 49 / 20 / 0 / 160 / 660 / 0 / 0 / 0 / 41 | B: numbers found after the name (line 242); check the size |
| Filet Mignon Wrapped in Bacon | 1 lb | only in draft B | not found | 840 / 27 / 10 / 0 / 265 / 1220 / 0 / 0 / 0 / 91 | B: numbers found after the name (line 243); check the size |
| Jalapeño Cream Bisque | 12 oz | only in draft B | not found | 600 / 48 / 30 / 1.5 / 145 / 2060 / 24 / 1 / 14 / 8 | B: numbers found after the name (line 244); check the size |
| Filet Mignon Wrapped in Bacon | 1/2 lb | only in draft B | not found | 420 / 13 / 5 / 0 / 135 / 610 / 0 / 0 / 0 / 45 | B: numbers found after the name (line 245); check the size |
| Brazilian Sausage | 1 lb | only in draft B | not found | 1380 / 113 / 41 / 0 / 325 / 3400 / 16 / 0 / 0 / 73 | B: numbers found after the name (line 246); check the size |
| Brazilian Sausage | 1/2 lb | only in draft B | not found | 690 / 57 / 20 / 0 / 160 / 1700 / 8 / 0 / 0 / 36 | B: numbers found after the name (line 247); check the size |
| Chicken Breast Wrapped in Bacon | 1 lb | only in draft B | not found | 780 / 24 / 3.5 / 0 / 290 / 1280 / 0 / 0 / 0 / 89 | B: numbers found after the name (line 248); check the size |
| Chicken Breast Wrapped in Bacon | 1/2 lb | only in draft B | not found | 390 / 12 / 1.5 / 0 / 145 / 640 / 0 / 0 / 0 / 45 | B: numbers found after the name (line 249); check the size |
| Parmesan Chicken Drumettes | 1 lb | only in draft B | not found | 890 / 60 / 15 / 0 / 390 / 1880 / 2 / 0 / 0 / 80 | B: numbers found after the name (line 250); check the size |
| Parmesan Chicken Drumettes | 1/2 lb | only in draft B | not found | 450 / 30 / 8 / 0 / 195 / 940 / 0 / 0 / 0 / 40 | B: numbers found after the name (line 251); check the size |
| Leg of Lamb | 1 lb | only in draft B | not found | 680 / 33 / 7 / 1 / 230 / 2260 / 1 / 0 / 0 / 95 | B: numbers found after the name (line 252); check the size |
| Leg of Lamb | 1/2 lb | only in draft B | not found | 340 / 16 / 3.5 / 0 / 115 / 1130 / 0 / 0 / 0 / 47 | B: numbers found after the name (line 253); check the size |
| Lamb Chops | 1 lb | only in draft B | not found | 1100 / 66 / 31 / 4 / 435 / 870 / 0 / 0 / 0 / 126 | B: numbers found after the name (line 254); check the size |
| Lamb Chops | 1/2 lb | only in draft B | not found | 550 / 33 / 15 / 2 / 215 / 430 / 0 / 0 / 0 / 63 | B: numbers found after the name (line 255); check the size |
| Barbecued Pork Ribs | 1 lb | only in draft B | not found | 960 / 65 / 11 / 0 / 300 / 1690 / 9 / 0 / 7 / 79 | B: numbers found after the name (line 256); check the size |
| Barbecued Pork Ribs | 1/2 lb | only in draft B | not found | 480 / 33 / 6 / 0 / 150 / 840 / 5 / 0 / 4 / 40 | B: numbers found after the name (line 257); check the size |
| Parmesan Pork Loin | 1 lb | only in draft B | not found | 750 / 40 / 12 / 0 / 285 / 2040 / 1 / 0 / 0 / 92 | B: numbers found after the name (line 258); check the size |
| Parmesan Pork Loin | 1/2 lb | only in draft B | not found | 380 / 20 / 6 / 0 / 145 / 1020 / 0 / 0 / 0 / 46 | B: numbers found after the name (line 259); check the size |
| Sautéed Mushrooms | Large | only in draft B | not found | 190 / 9 / 3.5 / 0 / 15 / 1930 / 18 / 3 / 6 / 11 | B: numbers found after the name (line 260); check the size |
| Sautéed Mushrooms | Small | only in draft B | not found | 90 / 4.5 / 2 / 0 / 5 / 970 / 9 / 1 / 3 / 6 | B: numbers found after the name (line 261); check the size |
| Garlic Mashed Potatoes | Large | only in draft B | not found | 470 / 19 / 12 / 0 / 55 / 2490 / 65 / 6 / 12 / 11 | B: numbers found after the name (line 262); check the size |
| Garlic Mashed Potatoes | Small | only in draft B | not found | 230 / 10 / 6 / 0 / 25 / 1240 / 32 / 3 / 6 / 6 | B: numbers found after the name (line 263); check the size |
| Potatoes Au Gratin | Large | only in draft B | not found | 1680 / 156 / 105 / 4 / 505 / 2520 / 12 / 0 / 12 / 40 | B: numbers found after the name (line 264); check the size |
| Potatoes Au Gratin | Small | only in draft B | not found | 840 / 78 / 53 / 2 / 255 / 1260 / 6 / 0 / 6 / 20 | B: numbers found after the name (line 265); check the size |
| Jasmine Rice | Large | only in draft B | not found | 750 / 20 / 12 / 0 / 55 / 4620 / 128 / 0 / 0 / 11 | B: numbers found after the name (line 266); check the size |
| Jasmine Rice | Small | only in draft B | not found | 370 / 10 / 6 / 0 / 25 / 2310 / 64 / 0 / 0 / 5 | B: numbers found after the name (line 267); check the size |
| Feijoada Black Beans | Large | only in draft B | not found | 280 / 12 / 3.5 / 0 / 5 / 2120 / 49 / 26 / 0 / 20 | B: numbers found after the name (line 268); check the size |
| Feijoada Black Beans | Small | only in draft B | not found | 140 / 6 / 1.5 / 0 / 0 / 1060 / 24 / 13 / 0 / 10 | B: numbers found after the name (line 269); check the size |
| House Salad | 1 serving | only in draft B | not found | 470 / 34 / 6 / 2 / 30 / 1760 / 27 / 7 / 7 / 14 | B: numbers found after the name (line 270); check the size |
| Caesar Salad | 1 serving | only in draft B | not found | 500 / 40 / 10 / 2 / 45 / 1300 / 21 / 3 / 5 / 15 | B: numbers found after the name (line 271); check the size |
| Cucumber Salad | Large | only in draft B | not found | 310 / 26 / 2 / 0 / 0 / 880 / 20 / 4 / 9 / 3 | B: numbers found after the name (line 272); check the size |
| Cucumber Salad | Small | only in draft B | not found | 150 / 13 / 1 / 0 / 0 / 440 / 10 / 2 / 5 / 1 | B: numbers found after the name (line 273); check the size |
| Potato Salad | Large | only in draft B | not found | 1100 / 95 / 16 / 0 / 80 / 7640 / 54 / 5 / 2 / 7 | B: numbers found after the name (line 274); check the size |
| Potato Salad | Small | only in draft B | not found | 550 / 48 / 8 / 0 / 40 / 3820 / 27 / 2 / 1 / 3 | B: numbers found after the name (line 275); check the size |
| Couscous Salad | Large | only in draft B | not found | 340 / 17 / 1.5 / 0 / 0 / 550 / 40 / 3 / 5 / 6 | B: numbers found after the name (line 276); check the size |
| Couscous Salad | Small | only in draft B | not found | 170 / 9 / 0.5 / 0 / 0 / 270 / 20 / 1 / 2 / 3 | B: numbers found after the name (line 277); check the size |
| Tabbouleh | Large | only in draft B | not found | 970 / 97 / 13 / 0 / 0 / 2130 / 27 / 8 / 7 / 6 | B: numbers found after the name (line 278); check the size |
| Tabbouleh | Small | only in draft B | not found | 490 / 49 / 7 / 0 / 0 / 1070 / 13 / 4 / 3 / 3 | B: numbers found after the name (line 279); check the size |
| Cabbage Salad | Large | only in draft B | not found | 350 / 25 / 3.5 / 0 / 0 / 3280 / 32 / 10 / 15 / 6 | B: numbers found after the name (line 280); check the size |
| Cabbage Salad | Small | only in draft B | not found | 180 / 13 / 2 / 0 / 0 / 1640 / 16 / 5 / 8 / 3 | B: numbers found after the name (line 281); check the size |
| Hearts of Palm | Large | only in draft B | not found | 130 / 3 / 0.5 / 0 / 0 / 1930 / 21 / 11 / 0 / 11 | B: numbers found after the name (line 282); check the size |
| Hearts of Palm | Small | only in draft B | not found | 60 / 1.5 / 0 / 0 / 0 / 970 / 10 / 5 / 0 / 6 | B: numbers found after the name (line 283); check the size |
| Brazilian Cheese Bread | One Dozen | only in draft B | not found | 720 / 45 / 9 / 0 / 120 / 3460 / 67 / 4 / 3 / 9 | B: numbers found after the name (line 284); check the size |
| Brazilian Cheese Bread | Half-Dozen | only in draft B | not found | 360 / 22 / 4.5 / 0 / 60 / 1730 / 33 / 2 / 1 / 5 | B: numbers found after the name (line 285); check the size |
| French Fries | 5 oz | only in draft B | not found | 380 / 26 / 5 / 0 / 0 / 1020 / 34 / 3 / 0 / 3 | B: numbers found after the name (line 286); check the size |
| Fried Bananas | Large | only in draft B | not found | 920 / 32 / 3 / 0 / 0 / 5 / 168 / 16 / 103 / 7 | B: numbers found after the name (line 287); check the size |
| Fried Bananas | Small | only in draft B | not found | 480 / 18 / 1.5 / 0 / 0 / 0 / 84 / 8 / 52 / 3 | B: numbers found after the name (line 288); check the size |
| Lobster Bisque | 12 oz | only in draft B | not found | 660 / 60 / 38 / 1.5 / 190 / 1050 / 18 / 2 / 8 / 10 | B: numbers found after the name (line 289); check the size |
| Chimichurri | 2 oz | only in draft B | not found | 330 / 37 / 2.5 / 0 / 0 / 120 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 290); check the size |
| House Spicy Sauce | 2 oz | only in draft B | not found | 160 / 17 / 1.5 / 0 / 0 / 240 / 3 / 0 / 1 / 0 | B: numbers found after the name (line 291); check the size |
| Farofa | 2 oz | only in draft B | not found | 120 / 5 / 3 / 0 / 10 / 125 / 19 / 0 / 0 / 0 | B: numbers found after the name (line 292); check the size |
| Brazilian Vinaigrette | 2 oz | only in draft B | not found | 60 / 5 / 0 / 0 / 0 / 440 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 293); check the size |
| Caesar Dressing | 2 oz | only in draft B | not found | 250 / 27 / 5 / 0 / 20 / 700 / 4 / 0 / 2 / 2 | B: numbers found after the name (line 294); check the size |
| Ranch Dressing | 2 oz | only in draft B | not found | 260 / 28 / 5 / 0 / 25 / 390 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 295); check the size |
| Blue Cheese Dressing | 2 oz | only in draft B | not found | 240 / 24 / 4.5 / 0 / 80 / 160 / 0 / 0 / 0 / 3 | B: numbers found after the name (line 296); check the size |
| Balsamic Vinaigrette | 2 oz | only in draft B | not found | 300 / 32 / 2.5 / 0 / 0 / 105 / 4 / 0 / 3 / 0 | B: numbers found after the name (line 297); check the size |
| Guaraná Antarctica | 12 fl oz | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 20 / 35 / 0 / 35 / 0 | B: numbers found after the name (line 305); check the size |
| Soda Bossa Guaraná | 12 fl oz | only in draft B | not found | 35 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 306); check the size, mostly zeros: look |
| Coca-Cola | 12 fl oz | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 45 / 37 / 0 / 37 / 0 | B: numbers found after the name (line 307); check the size |
| Sprite | 12 fl oz | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 70 / 37 / 0 / 36 / 0 | B: numbers found after the name (line 308); check the size |
| Diet Coke | 12 fl oz | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 35 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 309); check the size, mostly zeros: look |
| San Benedetto Still Water | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 310); check the size, mostly zeros: look |
| Saratoga Still Water | 28 fl oz | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 311); check the size, mostly zeros: look |
| San Benedetto Sparkling Water | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 312); check the size, mostly zeros: look |
| Saratoga Sparkling Water | 28 fl oz | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 313); check the size, mostly zeros: look |
| Garlic Mashed Potatoes | 5 lb | only in draft B | not found | 2340 / 97 / 59 / 1.5 / 265 / 12430 / 322 / 30 / 58 / 57 | B: numbers found after the name (line 331); check the size |
| Potatoes Au Gratin | 5 lb | only in draft B | not found | 8400 / 782 / 525 / 20 / 2535 / 12590 / 61 / 0 / 60 / 201 | B: numbers found after the name (line 332); check the size |
| Jasmine Rice | 5 lb | only in draft B | not found | 3730 / 100 / 62 / 0 / 265 / 23100 / 640 / 0 / 0 / 54 | B: numbers found after the name (line 333); check the size |
| Feijoada Black Beans | 5 lb | only in draft B | not found | 1390 / 58 / 17 / 0 / 35 / 10620 / 245 / 129 / 0 / 99 | B: numbers found after the name (line 334); check the size |
| Tabbouleh | 5 lb | only in draft B | not found | 4850 / 486 / 67 / 0 / 0 / 10660 / 133 / 40 / 35 / 30 | B: numbers found after the name (line 337); check the size |
| Potato Salad | 5 lb | only in draft B | not found | 5510 / 476 / 79 / 0 / 395 / 38210 / 270 / 23 / 10 / 33 | B: numbers found after the name (line 338); check the size |
| Couscous Salad | 5 lb | only in draft B | not found | 1690 / 87 / 7 / 0 / 0 / 2740 / 200 / 14 / 23 / 29 | B: numbers found after the name (line 339); check the size |
| Cucumber Salad | 5 lb | only in draft B | not found | 1540 / 128 / 10 / 0.5 / 0 / 4410 / 99 / 18 / 47 / 15 | B: numbers found after the name (line 340); check the size |
| Cabbage Salad | 5 lb | only in draft B | not found | 1760 / 126 / 18 / 0 / 0 / 16390 / 161 / 48 / 77 / 29 | B: numbers found after the name (line 341); check the size |
| Brazilian Cheese Bread | 30 pc | only in draft B | not found | 1800 / 111 / 22 / 0 / 295 / 8650 / 167 / 10 / 7 / 23 | B: numbers found after the name (line 342); check the size |
| French Fries | Box | only in draft B | not found | 2500 / 179 / 33 / 1.5 / 0 / 6400 / 218 / 18 / 0 / 18 | B: numbers found after the name (line 343); check the size |
| Chicken Breast Wrapped in Bacon | 1 serving | both read it the same, but its protein, carbs and fat make 142 kcal, not 190 | 190 / 6 / 1 / 0 / 75 / 320 / 0 / 0 / 0 / 22 | 190 / 6 / 1 / 0 / 75 / 320 / 0 / 0 / 0 / 22 | A: numbers found after the name (line 64); check the size; B: numbers found after the name (line 64); check the size |
| Filet Mignon Wrapped in Bacon | 1 serving | both read it the same, but its protein, carbs and fat make 155 kcal, not 210 | 210 / 7 / 2.5 / 0 / 65 / 310 / 0 / 0 / 0 / 23 | 210 / 7 / 2.5 / 0 / 65 / 310 / 0 / 0 / 0 / 23 | A: numbers found after the name (line 67); check the size; B: numbers found after the name (line 67); check the size |

## Spot check (8 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Caipirinha - Passion Fruit | 1 serving | 270 / 0 / 0 / 0 / 0 / 20 / 46 / 4 / 34 / 0 |
| Texas de Brazil Limeade - Passion Fruit | (Pitcher) | 1160 / 0.5 / 0 / 0 / 0 / 135 / 307 / 8 / 263 / 2 |
| Bananas Foster Pie | 1 serving | 570 / 35 / 22 / 0 / 95 / 250 / 61 / 1 / 38 / 5 |
| Balsamic Vinaigrette | 1 serving | 150 / 16 / 1.5 / 0 / 0 / 50 / 2 / 0 / 1 / 0 |
| Santo Passion Fruit Margarita | 1 serving | 260 / 0 / 0 / 0 / 0 / 5 / 41 / 0 / 38 / 0 |
| Goat Cheese Terrine | 1 serving | 110 / 10 / 6 / 0 / 25 / 105 / 0 / 0 / 0 / 5 |
| Mozzarella | 1 serving | 80 / 6 / 4 / 0 / 20 / 140 / 0 / 0 / 0 / 6 |
| Filet Mignon | 1 serving | 310 / 25 / 10 / 0 / 80 / 330 / 0 / 0 / 0 / 20 |
