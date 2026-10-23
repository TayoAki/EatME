# Chicken Salad Chick: lines for a person

Guide: https://storyblok.pleinaircdn.com/f/297321/x/2be8a2157f/nutritional-and-allergy-information.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (83)

Fix each line in `menus/chicken-salad-chick.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Barbie Q | 4 oz | the guide gives no fiber_g | 380 / 29 / 6 / – / 75 / 710 / 10 / – / 7 / 18 | 380 / 29 / 6 / – / 75 / 710 / 10 / – / 7 / 18 |
| Buffalo Barclay | 4 oz | the guide gives no fiber_g | 390 / 34 / 6 / – / 75 / 830 / 1 / – / 0 / 18 | 390 / 34 / 6 / – / 75 / 830 / 1 / – / 0 / 18 |
| Classic Carol | 4 oz | the guide gives no fiber_g | 410 / 35 / 7 / – / 90 / 540 / 0 / – / 0 / 22 | 410 / 35 / 7 / – / 90 / 540 / 0 / – / 0 / 22 |
| Dixie Chick | 4 oz | the guide gives no fiber_g | 370 / 31 / 6 / – / 75 / 470 / 2 / – / 1 / 19 | 370 / 31 / 6 / – / 75 / 470 / 2 / – / 1 / 19 |
| Fruity Fran | 4 oz | the guide gives no fiber_g | 330 / 26 / 5 / – / 65 / 400 / 6 / – / 5 / 16 | 330 / 26 / 5 / – / 65 / 400 / 6 / – / 5 / 16 |
| Jalapeño Holly | 4 oz | the guide gives no fiber_g | 380 / 32 / 6 / – / 80 / 630 / 1 / – / 0 / 20 | 380 / 32 / 6 / – / 80 / 630 / 1 / – / 0 / 20 |
| Kickin Kay Lynne | 4 oz | the guide gives no fiber_g | 400 / 34 / 7 / – / 80 / 750 / 1 / – / 0 / 20 | 400 / 34 / 7 / – / 80 / 750 / 1 / – / 0 / 20 |
| Lauryn's Lemon Basil | 4 oz | the guide gives no fiber_g | 410 / 35 / 6 / – / 80 / 520 / 1 / – / 0 / 20 | 410 / 35 / 6 / – / 80 / 520 / 1 / – / 0 / 20 |
| Olivia's Old South | 4 oz | the guide gives no fiber_g | 360 / 28 / 5 / – / 110 / 540 / 5 / – / 4 / 18 | 360 / 28 / 5 / – / 110 / 540 / 5 / – / 4 / 18 |
| Sassy Scotty | 4 oz | the guide gives no fiber_g | 430 / 38 / 8 / – / 90 / 750 / 1 / – / 1 / 21 | 430 / 38 / 8 / – / 90 / 750 / 1 / – / 1 / 21 |
| Dill-icious Diva | 4 oz | the guide gives no fiber_g, sugars_g | 370 / 32 / 6 / – / 80 / 480 / 1 / – / – / 20 | 370 / 32 / 6 / – / 80 / 480 / 1 / – / – / 20 |
| Greek Goddess | 4 oz | the guide gives no fiber_g | 400 / 35 / 6 / – / 65 / 830 / 3 / – / 1 / 16 | 400 / 35 / 6 / – / 65 / 830 / 3 / – / 1 / 16 |
| Jill Pickle | 4 oz | the guide gives no fiber_g | 290 / 25 / 4.5 / – / 60 / 620 / 0 / – / 0 / 15 | 290 / 25 / 4.5 / – / 60 / 620 / 0 / – / 0 / 15 |
| Maui Mama | 4 oz | the guide gives no fiber_g | 280 / 22 / 4.5 / – / 60 / 640 / 6 / – / 5 / 15 | 280 / 22 / 4.5 / – / 60 / 640 / 6 / – / 5 / 15 |
| Nashville Hottie | 4 oz | the guide gives no fiber_g | 400 / 33 / 6 / – / 80 / 980 / 4 / – / 2 / 21 | 400 / 33 / 6 / – / 80 / 980 / 4 / – / 2 / 21 |
| Pam's Parmesan Caesar | 4 oz | the guide gives no fiber_g | 450 / 40 / 8 / – / 85 / 730 / 1 / – / 0 / 20 | 450 / 40 / 8 / – / 85 / 730 / 1 / – / 0 / 20 |
| Patti Thai'rific | 4 oz | the guide gives no fiber_g | 430 / 37 / 7 / – / 60 / 550 / 7 / – / 4 / 17 | 430 / 37 / 7 / – / 60 / 550 / 7 / – / 4 / 17 |
| Southwest Senorita | 4 oz | the guide gives no fiber_g | 330 / 27 / 6 / – / 65 / 610 / 3 / – / 1 / 17 | 330 / 27 / 6 / – / 65 / 610 / 3 / – / 1 / 17 |
| Southern Pimento Cheese | 4 oz | the guide gives no fiber_g | 450 / 40 / 16 / – / 80 / 720 / 3 / – / 1 / 19 | 450 / 40 / 16 / – / 80 / 720 / 3 / – / 1 / 19 |
| Jalapeño Pimento Cheese | 4 oz | the guide gives no fiber_g | 420 / 37 / 15 / – / 75 / 810 / 4 / – / 1 / 17 | 420 / 37 / 15 / – / 75 / 810 / 4 / – / 1 / 17 |
| Sandwich: On Wheat | 1 serving | the guide gives no saturated_fat_g | 280 / 3 / – / – / – / 460 / 52 / 4 / 6 / 10 | 280 / 3 / – / – / – / 460 / 52 / 4 / 6 / 10 |
| Sandwich: On White | 1 serving | the guide gives no saturated_fat_g | 280 / 3 / – / – / – / 500 / 52 / 2 / 6 / 8 | 280 / 3 / – / – / – / 500 / 52 / 2 / 6 / 8 |
| Add: Lettuce and Tomato | 1 serving | the guide gives no saturated_fat_g, fiber_g | 15 / 0 / – / – / – / 5 / 3 / – / 2 / 1 | 15 / 0 / – / – / – / 5 / 3 / – / 2 / 1 |
| Add: Bacon | 1 serving | the guide gives no fiber_g | 90 / 6 / 2 / – / 20 / 200 / 0 / – / 0 / 8 | 90 / 6 / 2 / – / 20 / 200 / 0 / – / 0 / 8 |
| Signature BLT | 1 serving | the guide gives no fiber_g | 100 / 7 / 2 / – / 20 / 200 / 3 / – / 2 / 8 | 100 / 7 / 2 / – / 20 / 200 / 3 / – / 2 / 8 |
| Turkey Club (no bread) | 1 serving | the guide gives no fiber_g | 390 / 25 / 8 / – / 100 / 1060 / 5 / – / 2 / 38 | 390 / 25 / 8 / – / 100 / 1060 / 5 / – / 2 / 38 |
| Fresh Fruit | 4 oz | the guide gives no saturated_fat_g | 60 / 0 / – / – / – / 0 / 16 / 2 / 13 / 1 | 60 / 0 / – / – / – / 0 / 16 / 2 / 13 / 1 |
| Mac ‘n Cheese | Cup | the guide gives no fiber_g | 270 / 13 / 7 / 0 / 45 / 670 / 25 / – / 4 / 11 | 270 / 13 / 7 / 0 / 45 / 670 / 25 / – / 4 / 11 |
| Small Buttercream Cookie | 1 serving | the guide gives no fiber_g | 90 / 3.5 / 2 / – / 15 / 60 / 11 / – / 11 / 1 | 90 / 3.5 / 2 / – / 15 / 60 / 11 / – / 11 / 1 |
| Large Buttercream Flower Cookie | 1 serving | the guide gives no fiber_g | 170 / 6 / 4 / – / 25 / 140 / 28 / – / 19 / 2 | 170 / 6 / 4 / – / 25 / 140 / 28 / – / 19 / 2 |
| Lemon Cookie | 1 serving | the guide gives no fiber_g | 180 / 6 / 4 / – / 25 / 140 / 28 / – / 19 / 2 | 180 / 6 / 4 / – / 25 / 140 / 28 / – / 19 / 2 |
| Chocolate Crispy Treat | 1 serving | the guide gives no fiber_g | 390 / 9 / 6 / – / 15 / 260 / 76 / – / 45 / 3 | 390 / 9 / 6 / – / 15 / 260 / 76 / – / 45 / 3 |
| Red Velvet Cake Slice | 1 slice | the guide gives no fiber_g | 1250 / 66 / 31 / 1.5 / 225 / 690 / 159 / – / 133 / 9 | 1250 / 66 / 31 / 1.5 / 225 / 690 / 159 / – / 133 / 9 |
| White Chocolate Cake Slice | 1 slice | the guide gives no fiber_g | 1250 / 57 / 35 / 0.5 / 235 / 760 / 175 / – / 140 / 10 | 1250 / 57 / 35 / 0.5 / 235 / 760 / 175 / – / 140 / 10 |
| Barq's Root Beer | 12 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 160 / – / – / – / – / 70 / 45 / – / 44 / – | 160 / – / – / – / – / 70 / 45 / – / 44 / – |
| Barq's Root Beer | 24 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 320 / – / – / – / – / 140 / 90 / – / 89 / – | 320 / – / – / – / – / 140 / 90 / – / 89 / – |
| Barq's Root Beer | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 430 / – / – / – / – / 180 / 120 / – / 118 / – | 430 / – / – / – / – / 180 / 120 / – / 118 / – |
| Cherry Coke | 12 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 150 / – / – / – / – / 35 / 42 / – / 42 / – | 150 / – / – / – / – / 35 / 42 / – / 42 / – |
| Cherry Coke | 24 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 300 / – / – / – / – / 70 / 84 / – / 84 / – | 300 / – / – / – / – / 70 / 84 / – / 84 / – |
| Cherry Coke | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 400 / – / – / – / – / 120 / 108 / – / 108 / – | 400 / – / – / – / – / 120 / 108 / – / 108 / – |
| Coca Cola | 12 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 150 / – / – / – / – / 45 / 40 / – / 40 / – | 150 / – / – / – / – / 45 / 40 / – / 40 / – |
| Coca Cola | 24 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 300 / – / – / – / – / 90 / 81 / – / 81 / – | 300 / – / – / – / – / 90 / 81 / – / 81 / – |
| Coca Cola | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 400 / – / – / – / – / 120 / 108 / – / 108 / – | 400 / – / – / – / – / 120 / 108 / – / 108 / – |
| Coke Zero Sugar | 12 oz | the guide gives no fat_g, saturated_fat_g, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / 40 / – / – / – / – | 0 / – / – / – / – / 40 / – / – / – / – |
| Coke Zero Sugar | 24 oz | the guide gives no fat_g, saturated_fat_g, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / 85 / – / – / – / – | 0 / – / – / – / – / 85 / – / – / – / – |
| Coke Zero Sugar | 32 oz | the guide gives no fat_g, saturated_fat_g, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / 110 / – / – / – / – | 0 / – / – / – / – / 110 / – / – / – / – |
| Diet Coke | 12 oz | the guide gives no fat_g, saturated_fat_g, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / 40 / – / – / – / – | 0 / – / – / – / – / 40 / – / – / – / – |
| Diet Coke | 24 oz | the guide gives no fat_g, saturated_fat_g, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / 85 / – / – / – / – | 0 / – / – / – / – / 85 / – / – / – / – |
| Diet Coke | 32 oz | the guide gives no fat_g, saturated_fat_g, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / 110 / – / – / – / – | 0 / – / – / – / – / 110 / – / – / – / – |
| Dr. Pepper | 12 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 150 / – / – / – / – / 60 / 40 / – / 38 / – | 150 / – / – / – / – / 60 / 40 / – / 38 / – |
| Dr. Pepper | 24 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 300 / – / – / – / – / 120 / 79 / – / 77 / – | 300 / – / – / – / – / 120 / 79 / – / 77 / – |
| Dr. Pepper | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 400 / – / – / – / – / 160 / 106 / – / 102 / – | 400 / – / – / – / – / 160 / 106 / – / 102 / – |
| Diet Dr. Pepper | 12 oz | the guide gives no fat_g, saturated_fat_g, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / 60 / – / – / – / – | 0 / – / – / – / – / 60 / – / – / – / – |
| Diet Dr. Pepper | 24 oz | the guide gives no fat_g, saturated_fat_g, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / 120 / – / – / – / – | 0 / – / – / – / – / 120 / – / – / – / – |
| Diet Dr. Pepper | 32 oz | the guide gives no fat_g, saturated_fat_g, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / 160 / – / – / – / – | 0 / – / – / – / – / 160 / – / – / – / – |
| Fanta Orange | 12 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 150 / – / – / – / – / 55 / 44 / – / 44 / – | 150 / – / – / – / – / 55 / 44 / – / 44 / – |
| Fanta Orange | 24 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 320 / – / – / – / – / 110 / 89 / – / 89 / – | 320 / – / – / – / – / 110 / 89 / – / 89 / – |
| Fanta Orange | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 430 / – / – / – / – / 140 / 118 / – / 118 / – | 430 / – / – / – / – / 140 / 118 / – / 118 / – |
| Lemonade | 12 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 160 / – / – / – / – / 30 / 41 / – / 39 / – | 160 / – / – / – / – / 30 / 41 / – / 39 / – |
| Lemonade | 24 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 310 / – / – / – / – / 60 / 82 / – / 78 / – | 310 / – / – / – / – / 60 / 82 / – / 78 / – |
| Lemonade | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g | 420 / – / – / – / – / 75 / 109 / – / 103 / 1 | 420 / – / – / – / – / 75 / 109 / – / 103 / 1 |
| Minute Maid Lite Lemonade | 12 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, sugars_g, protein_g | 10 / – / – / – / – / 40 / 2 / – / – / – | 10 / – / – / – / – / 40 / 2 / – / – / – |
| Minute Maid Lite Lemonade | 24 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, sugars_g, protein_g | 20 / – / – / – / – / 85 / 5 / – / – / – | 20 / – / – / – / – / 85 / 5 / – / – / – |
| Minute Maid Lite Lemonade | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, sugars_g, protein_g | 25 / – / – / – / – / 110 / 6 / – / – / – | 25 / – / – / – / – / 110 / 6 / – / – / – |
| Sprite | 12 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 140 / – / – / – / – / 65 / 38 / – / 38 / – | 140 / – / – / – / – / 65 / 38 / – / 38 / – |
| Sprite | 24 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 280 / – / – / – / – / 130 / 77 / – / 77 / – | 280 / – / – / – / – / 130 / 77 / – / 77 / – |
| Sprite | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 370 / – / – / – / – / 180 / 102 / – / 102 / – | 370 / – / – / – / – / 180 / 102 / – / 102 / – |
| Strawberry Lemonade | 12 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 170 / – / – / – / – / 25 / 44 / – / 42 / – | 170 / – / – / – / – / 25 / 44 / – / 42 / – |
| Strawberry Lemonade | 24 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 340 / – / – / – / – / 55 / 88 / – / 83 / – | 340 / – / – / – / – / 55 / 88 / – / 83 / – |
| Strawberry Lemonade | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 460 / – / – / – / – / 75 / 117 / – / 111 / – | 460 / – / – / – / – / 75 / 117 / – / 111 / – |
| Sweet Peach Tea | 12 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 140 / – / – / – / – / 190 / 23 / – / 36 / – | 140 / – / – / – / – / 190 / 23 / – / 36 / – |
| Sweet Peach Tea | 24 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 280 / – / – / – / – / 25 / 71 / – / 71 / – | 280 / – / – / – / – / 25 / 71 / – / 71 / – |
| Sweet Peach Tea | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 370 / – / – / – / – / 30 / 95 / – / 95 / – | 370 / – / – / – / – / 30 / 95 / – / 95 / – |
| Sweet Tea | 12 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 140 / – / – / – / – / 10 / 37 / – / 36 / – | 140 / – / – / – / – / 10 / 37 / – / 36 / – |
| Sweet Tea | 24 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 280 / – / – / – / – / 25 / 74 / – / 71 / – | 280 / – / – / – / – / 25 / 74 / – / 71 / – |
| Sweet Tea | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 380 / – / – / – / – / 30 / 98 / – / 95 / – | 380 / – / – / – / – / 30 / 98 / – / 95 / – |
| Unsweetened Tea | 12 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / 10 / 1 / – / – / – | 0 / – / – / – / – / 10 / 1 / – / – / – |
| Unsweetened Tea | 24 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, sugars_g, protein_g | 5 / – / – / – / – / 20 / 2 / – / – / – | 5 / – / – / – / – / 20 / 2 / – / – / – |
| Unsweetened Tea | 32 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, sugars_g, protein_g | 10 / – / – / – / – / 30 / 3 / – / – / – | 10 / – / – / – / – / 30 / 3 / – / – / – |
| Vitamin Water XXX | 12 oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, fiber_g, protein_g | 60 / – / – / – / – / – / 16 / – / 16 / – | 60 / – / – / – / – / – / 16 / – / 16 / – |
| Vitamin Water XXX | 24 oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, fiber_g, protein_g | 120 / – / – / – / – / – / 31 / – / 31 / – | 120 / – / – / – / – / – / 31 / – / 31 / – |
| Vitamin Water XXX | 32 oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, fiber_g, protein_g | 160 / – / – / – / – / – / 42 / – / 42 / – | 160 / – / – / – / – / – / 42 / – / 42 / – |
| Honest Kid's Apple Juice | 6 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 35 / – / – / – / – / 15 / 9 / – / 8 / – | 35 / – / – / – / – / 15 / 9 / – / 8 / – |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Crackers | 1 serving | 35 / 1.5 / 0 / 0 / 0 / 75 / 5 / 0 / 1 / 1 |
| Pickle Spear | 1 serving | 0 / 0 / 0 / 0 / 0 / 260 / 0 / 0 / 0 / 0 |
| Creamy Chicken & Wild Rice | Bowl | 590 / 35 / 15 / 0.5 / 110 / 1490 / 51 / 3 / 12 / 15 |
