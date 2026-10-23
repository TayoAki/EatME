# Tropical Smoothie Cafe: lines for a person

Guide: https://www.tropicalsmoothiecafe.com/nutrition/nutrition-guide.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (103)

Fix each line in `menus/tropical-smoothie-cafe.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Acai Berry Boost | 24 oz | differ: fat_g, saturated_fat_g | 470 / 18 / 2 / 0 / 0 / 20 / 114 / 5 / 102 / 2 | 470 / 2 / 0 / 0 / 0 / 20 / 114 / 5 / 102 / 2 |
| Avocolada | 24 oz | differ: fat_g, saturated_fat_g, trans_fat_g | 580 / 72 / 8 / 3 / 0 / 40 / 114 / 5 / 107 / 4 | 580 / 8 / 3 / 0 / 0 / 40 / 114 / 5 / 107 / 4 |
| Bahama Mama | 24 oz | only in draft A | 520 / 40.5 / 4.5 / 4.5 / 0 / 55 / 119 / 4 / 112 / 3 | not found |
| Beach Bum (Chocolate Frappe) | 24 oz | only in draft A | 540 / 36 / 4 / 3 / 0 / 80 / 128 / 7 / 108 / 4 | not found |
| Beach Bum (White Chocolate Frappe) | 24 oz | only in draft A | 560 / 45 / 5 / 4.5 / 0 / 90 / 127 / 3 / 109 / 4 | not found |
| Blueberry Bliss | 24 oz | differ: fat_g, saturated_fat_g | 340 / 9 / 1 / 0 / 0 / 5 / 85 / 4 / 74 / 1 | 340 / 1 / 0 / 0 / 0 / 5 / 85 / 4 / 74 / 1 |
| Chia Banana Boost | 24 oz | only in draft A | 680 / 234 / 26 / 6 / 0 / 130 / 111 / 11 / 73 / 13 | not found |
| Detox Island Green | 24 oz | differ: fat_g, saturated_fat_g | 210 / 9 / 1 / 0 / 0 / 35 / 53 / 6 / 39 / 4 | 210 / 1 / 0 / 0 / 0 / 35 / 53 / 6 / 39 / 4 |
| Island Green | 24 oz | differ: fat_g, saturated_fat_g | 430 / 9 / 1 / 0 / 0 / 35 / 110 / 6 / 97 / 4 | 430 / 1 / 0 / 0 / 0 / 35 / 110 / 6 / 97 / 4 |
| Jetty Punch | 24 oz | differ: fat_g, saturated_fat_g | 360 / 4.5 / 0.5 / 0 / 0 / 10 / 90 / 4 / 76 / 2 | 360 / 0.5 / 0 / 0 / 0 / 10 / 90 / 4 / 76 / 2 |
| Mango Magic | 24 oz | only in draft A | 450 / 9 / 1 / 0 / 0 / 60 / 113 / 3 / 104 / 4 | not found |
| Mango Monsoon | 24 oz | differ: fat_g, saturated_fat_g, trans_fat_g | 540 / 27 / 3 / 2 / 0 / 15 / 133 / 4 / 127 / 2 | 540 / 3 / 2 / 0 / 0 / 15 / 133 / 4 / 127 / 2 |
| Mocha Madness | 24 oz | only in draft A | 810 / 54 / 6 / 4.5 / 0 / 270 / 185 / 3 / 163 / 9 | not found |
| Paradise Point | 24 oz | differ: fat_g, saturated_fat_g | 420 / 9 / 1 / 0 / 0 / 10 / 106 / 6 / 91 / 2 | 420 / 1 / 0 / 0 / 0 / 10 / 106 / 6 / 91 / 2 |
| Peanut Butter Cup | 24 oz | only in draft A | 680 / 171 / 19 / 6 / 0 / 190 / 128 / 7 / 106 / 10 | not found |
| Peanut Paradise with Pea | 24 oz | only in draft A | 730 / 153 / 17 / 3.5 / 0 / 610 / 112 / 5 / 90 / 35 | not found |
| Peanut Paradise with Whey | 24 oz | only in draft A | 700 / 144 / 16 / 4 / 45 / 260 / 115 / 5 / 91 / 26 | not found |
| Sunshine Smoothie | 24 oz | differ: fat_g, saturated_fat_g | 510 / 9 / 1 / 0 / 0 / 10 / 128 / 4 / 113 / 4 | 510 / 1 / 0 / 0 / 0 / 10 / 128 / 4 / 113 / 4 |
| Sunrise Sunset | 24 oz | differ: fat_g, saturated_fat_g | 460 / 9 / 1 / 0 / 0 / 3 / 115 / 4 / 106 / 3 | 460 / 1 / 0 / 0 / 0 / 3 / 115 / 4 / 106 / 3 |
| Kids Awesome Chocolate | 12 oz | only in draft A | 250 / 18 / 2 / 2 / 0 / 35 / 60 / 3 / 51 / 2 | not found |
| Pea Protein Powder | 1 serving | differ: fat_g, saturated_fat_g, fiber_g | 130 / 22.5 / 2.5 / 0 / 0 / 410 / 3 / – / 0 / 24 | 130 / 2.5 / 0 / 0 / 0 / 410 / 3 / 0 / 0 / 24 |
| Probiotic | 1 serving | differ: fiber_g | 20 / 0 / 0 / 0 / 0 / 5 / 5 / – / 0 / 0 | 20 / 0 / 0 / 0 / 0 / 5 / 5 / 0 / 0 / 0 |
| Vital Proteinsa Collagen | 1 serving | differ: cholesterol_mg, sodium_mg, fiber_g | 35 / 0 / 0 / 0 / 55 / 0 / 0 / – / 0 / 9 | 35 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 0 / 9 |
| Vitamin B12 | 1 serving | differ: fiber_g | 20 / 0 / 0 / 0 / 0 / 0 / 5 / – / 0 / 0 | 20 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 |
| Vitamin C Immune Complex | 1 serving | differ: fiber_g | 20 / 0 / 0 / 0 / 0 / 0 / 5 / – / 4 / 0 | 20 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 4 / 0 |
| Whey Protein Powder | 1 serving | only in draft A | 100 / 13.5 / 1.5 / 0.5 / 45 / 50 / 6 / – / 0 / 16 | not found |
| Chia Seeds | 1 serving | differ: fat_g, saturated_fat_g | 30 / 18 / 2 / 0 / 0 / 0 / 2 / 2 / 0 / 1 | 30 / 2 / 0 / 0 / 0 / 0 / 2 / 2 / 0 / 1 |
| Peanut Butter | 1 serving | only in draft A | 180 / 126 / 14 / 3 / 0 / 140 / 6 / 2 / 3 / 7 | not found |
| Raw Almonds | 1 serving | only in draft A | 35 / 27 / 3 / 0 / 0 / 0 / 2 / 1 / 0 / 0 | not found |
| Whole-Grain Oats | 1 serving | differ: fat_g, saturated_fat_g | 45 / 4.5 / 0.5 / 0 / 0 / 0 / 9 / 1 / 0 / 1 | 45 / 0.5 / 0 / 0 / 0 / 0 / 9 / 1 / 0 / 1 |
| Bahama Mama 3,6 | 24 oz | only in draft B | not found | 520 / 4.5 / 4.5 / 0 / 0 / 55 / 119 / 4 / 112 / 3 |
| Beach Bum (Chocolate Frappe) 3,6 | 24 oz | only in draft B | not found | 540 / 4 / 3 / 0 / 0 / 80 / 128 / 7 / 108 / 4 |
| Beach Bum (White Chocolate Frappe) 3,6 | 24 oz | only in draft B | not found | 560 / 5 / 4.5 / 0 / 0 / 90 / 127 / 3 / 109 / 4 |
| Chia Banana Boost 4,7 | 24 oz | only in draft B | not found | 680 / 26 / 6 / 0 / 0 / 130 / 111 / 11 / 73 / 13 |
| Mango Magic 3 | 24 oz | only in draft B | not found | 450 / 1 / 0 / 0 / 0 / 60 / 113 / 3 / 104 / 4 |
| Mocha Madness 3,6 | 24 oz | only in draft B | not found | 810 / 6 / 4.5 / 0 / 0 / 270 / 185 / 3 / 163 / 9 |
| Peanut Butter Cup 3,4,6 | 24 oz | only in draft B | not found | 680 / 19 / 6 / 0 / 0 / 190 / 128 / 7 / 106 / 10 |
| Peanut Paradise with Pea 3,4,6,10 | 24 oz | only in draft B | not found | 730 / 17 / 3.5 / 0 / 0 / 610 / 112 / 5 / 90 / 35 |
| Peanut Paradise with Whey 3,4,6,10 | 24 oz | only in draft B | not found | 700 / 16 / 4 / 0 / 45 / 260 / 115 / 5 / 91 / 26 |
| Kids Awesome Chocolate 3,6 | 12 oz | only in draft B | not found | 250 / 2 / 2 / 0 / 0 / 35 / 60 / 3 / 51 / 2 |
| Whey Protein Powder 3,6 | 1 serving | only in draft B | not found | 100 / 1.5 / 0.5 / 0 / 45 / 50 / 6 / 0 / 1 / 16 |
| Peanut Butter 4 | 1 serving | only in draft B | not found | 180 / 14 / 3 / 0 / 0 / 140 / 6 / 2 / 3 / 7 |
| Raw Almonds 7 | 1 serving | only in draft B | not found | 35 / 3 / 0 / 0 / 0 / 0 / 2 / 1 / 0 / 0 |
| Salted Caramel Javablender | 24 oz | only in draft B | not found | 490 / 12 / 7 / 0 / 15 / 210 / 89 / 2 / 64 / 7 |
| Salted Caramel Javablender Add Turbinado Sugar | 24 oz | only in draft B | not found | 730 / 12 / 7 / 0 / 15 / 210 / 147 / 2 / 122 / 7 |
| Salted Caramel Javablender Add Half Turbinado Sugar | 24 oz | only in draft B | not found | 610 / 12 / 7 / 0 / 15 / 210 / 117 / 2 / 92 / 7 |
| Salted Caramel Javablender Add Splenda | 24 oz | only in draft B | not found | 490 / 12 / 7 / 0 / 15 / 210 / 95 / 2 / 64 / 7 |
| Fanta Phantom Smoothie | 24 oz | only in draft B | not found | 370 / 0.5 / 0 / 0 / 0 / 100 / 93 / 4 / 78 / 4 |
| Fanta Phantom Smoothie Add Full Turbinado Sugar | 24 oz | only in draft B | not found | 490 / 0.5 / 0 / 0 / 0 / 100 / 123 / 4 / 108 / 4 |
| Fanta Phantom Smoothie No Turbinado Sugar | 24 oz | only in draft B | not found | 260 / 0.5 / 0 / 0 / 0 / 100 / 64 / 4 / 49 / 4 |
| Fanta Phantom Smoothie Add Splenda | 24 oz | only in draft B | not found | 260 / 0.5 / 0 / 0 / 0 / 100 / 71 / 4 / 49 / 4 |
| Acai Bowl 67 | 1 serving | only in draft B | not found | 560 / 18 / 5 / 0 / 0 / 135 / 103 / 10 / 56 / – |
| Acai Bowl with NUTELLA 8 3 6 7 | 1 serving | only in draft B | not found | 710 / 27 / 8 / 0 / 0 / 150 / 119 / 11 / 71 / – |
| Bahama MamaTM Bowl 3 6 7 | 1 serving | only in draft B | not found | 400 / 11 / 5 / 0 / 0 / 115 / 79 / 17 / 48 / – |
| Chia Oatmeal 3 6 7 | 1 serving | only in draft B | not found | 800 / 37 / 20 / 0 / 10 / 250 / 105 / 11 / 50 / – |
| Dragon Fruit Bowl 7 | 1 serving | only in draft B | not found | 460 / 10 / 4.5 / 0 / 0 / 110 / 91 / 7 / 51 / – |
| Mixed Berry Greek Yogurt 3 6 7 | 1 serving | only in draft B | not found | 560 / 24 / 8 / 0 / 40 / 270 / 63 / 7 / 33 / – |
| PB Protein Crunch 3 4 6 7 | 1 serving | only in draft B | not found | 810 / 46 / 16 / 0 / 35 / 380 / 77 / 12 / 41 / – |
| NUTELLA 8 Drizzle 7 | 1 serving | only in draft B | not found | 150 / 9 / 3 / 0 / 0 / 10 / 16 / 1 / 15 / – |
| Peanut Butter Drizzle 4 | 1 serving | only in draft B | not found | 180 / 14 / 3 / 0 / 0 / 140 / 6 / 2 / 3 / – |
| All American Wrap - Bacon 138 | 1 serving | only in draft B | not found | 410 / 21 / 9 / 0 / 145 / 1040 / 35 / 0 / 3 / 17 |
| All American Wrap - Sausage 138 | 1 serving | only in draft B | not found | 540 / 33 / 13 / 0 / 170 / 1300 / 36 / 1 / 4 / 23 |
| Cali Breakfast Flatbread - Chicken 138 | 1 serving | only in draft B | not found | 560 / 30 / 8 / 0 / 170 / 1210 / 47 / 4 / 3 / 27 |
| Cali Breakfast Flatbread - Sausage 138 | 1 serving | only in draft B | not found | 660 / 43 / 13 / 0 / 165 / 1360 / 46 / 4 / 3 / 24 |
| PB Banana Crunch Flatbread 468 | 1 serving | only in draft B | not found | 640 / 26 / 4.5 / 0 / 0 / 810 / 87 / 8 / 25 / 17 |
| Sausage, Egg & Cheese 'Dilla 138 | 1 serving | only in draft B | not found | 630 / 40 / 16 / 0 / 180 / 2020 / 39 / 1 / 5 / 27 |
| Southwest Wrap - Chicken 138 | 1 serving | only in draft B | not found | 590 / 38 / 10 / 0 / 170 / 1260 / 38 / 1 / 4 / 24 |
| Southwest Wrap - Sausage 138 | 1 serving | only in draft B | not found | 710 / 51 / 15 / 0 / 175 / 1480 / 38 / 2 / 4 / 23 |
| Spinach & Pesto Wrap 1378 | 1 serving | only in draft B | not found | 470 / 29 / 9 / 0 / 170 / 1090 / 38 / 3 / 1 / 20 |
| Baja Chicken Wrap 38 | 1 serving | only in draft B | not found | 760 / 30 / 10 / 0 / 90 / 2050 / 83 / 7 / 8 / 38 |
| Baja Chicken Bowl 38 | 1 serving | only in draft B | not found | 470 / 20 / 6 / 0 / 105 / 1410 / 36 / 6 / 7 / 35 |
| Buffalo Chicken Wrap 138 | 1 serving | only in draft B | not found | 620 / 27 / 9 / 0 / 95 / 2400 / 59 / 3 / 7 / 33 |
| Buffalo Chicken Bowl 13 | 1 serving | only in draft B | not found | 440 / 26 / 6 / 0 / 105 / 2560 / 17 / 4 / 5 / 34 |
| Caribbean Jerk Chicken Wrap 368 | 1 serving | only in draft B | not found | 700 / 20 / 8 / 0 / 90 / 1820 / 91 / 5 / 18 / 38 |
| Caribbean Jerk Chicken Bowl 36 | 1 serving | only in draft B | not found | 420 / 12 / 6 / 0 / 105 / 990 / 41 / 5 / 13 / 35 |
| Hummus Veggie Wrap 13689 | 1 serving | only in draft B | not found | 830 / 41 / 10 / 0 / 30 / 1910 / 95 / 11 / 11 / 23 |
| Hummus Veggie Bowl 1368 | 1 serving | only in draft B | not found | 500 / 31 / 8 / 0 / 35 / 960 / 41 / 8 / 8 / 15 |
| Supergreen Caesar Chicken Wrap 1238 | 1 serving | only in draft B | not found | 750 / 39 / 13 / 0.5 / 125 / 1820 / 55 / 3 / 5 / 43 |
| Supergreen Caesar Chicken Bowl 123 | 1 serving | only in draft B | not found | 600 / 36 / 10 / 0 / 140 / 1080 / 9 / 4 / 4 / 37 |
| Thai Chicken Wrap 4689 | 1 serving | only in draft B | not found | 600 / 19 / 3.5 / 0 / 60 / 1690 / 77 / 3 / 15 / 31 |
| Thai Chicken Bowl 4689 | 1 serving | only in draft B | not found | 380 / 13 / 2.5 / 0 / 75 / 1280 / 39 / 4 / 20 / 28 |
| Turkey Bacon Ranch 138 | 1 serving | only in draft B | not found | 500 / 18 / 6 / 0 / 90 / 1510 / 51 / 4 / 8 / 39 |
| Chicken Bacon Ranch 138 | 1 serving | only in draft B | not found | 510 / 23 / 7 / 0 / 80 / 1230 / 47 / 3 / 3 / 28 |
| Chicken Pesto 378 | 1 serving | only in draft B | not found | 490 / 22 / 7 / 0 / 70 / 1220 / 46 / 3 / 4 / 26 |
| Chipotle Chicken Club 138 | 1 serving | only in draft B | not found | 520 / 25 / 7 / 0 / 70 / 1160 / 46 / 3 / 2 / 27 |
| Santa Fe Chicken 38 | 1 serving | only in draft B | not found | 450 / 18 / 10 / 0 / 75 / 1140 / 46 / 3 / 4 / 28 |
| Three Cheese Chicken 38 | 1 serving | only in draft B | not found | 540 / 27 / 14 / 0 / 95 / 1930 / 39 / 1 / 5 / 31 |
| Bacon Chipotle Chicken 138 | 1 serving | only in draft B | not found | 580 / 39 / 12 / 0 / 75 / 1130 / 38 / 1 / 1 / 23 |
| Hawaiian Heat 368 | 1 serving | only in draft B | not found | 380 / 16 / 8 / 0 / 55 / 880 / 43 / 1 / 7 / 20 |
| Turkey Bacon Honey Dijon 138 | 1 serving | only in draft B | not found | 460 / 25 / 10 / 0 / 60 / 1280 / 39 / 1 / 5 / 23 |
| Cheese 'Dilla 38 | 1 serving | only in draft B | not found | 400 / 22 / 11 / 0 / 55 / 930 / 35 / 0 / 3 / – |
| Cheese 'Dilla with Chicken 38 | 1 serving | only in draft B | not found | 480 / 23 / 12 / 0 / 95 / 1190 / 36 / 0 / 3 / – |
| Turkey & Cheddar Wrap 38 | 1 serving | only in draft B | not found | 360 / 15 / 7 / 0 / 60 / 1090 / 35 / 0 / 3 / – |
| Apple | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 25 / 4 / 19 / – |
| Baked Lay's Original6 | 1 serving | only in draft B | not found | 140 / 4 / 0 / 0 / 0 / 180 / 24 / 2 / 3 / – |
| Banana | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 27 / 3 / 14 / – |
| Jalapeño Corn1 | 1 serving | only in draft B | not found | 150 / 5 / 1 / 0 / 0 / 170 / 22 / 3 / 9 / – |
| Kale & Apple Slaw1 | 1 serving | only in draft B | not found | 130 / 9 / 1.5 / 0 / 5 / 150 / 11 / 2 / 8 / – |
| Maple-Kissed Sweet Potatoes | 1 serving | only in draft B | not found | 140 / 4 / 1 / 0 / 0 / 180 / 26 / 3 / 17 / – |
| Miss Vickie's Sea Salt & Vinegar3 | 1 serving | only in draft B | not found | 200 / 11 / 1.5 / 0 / 0 / 240 / 23 / 2 / 2 / – |
| SunChips Harvest Cheddar 38 | 1 serving | only in draft B | not found | 210 / 9 / 1 / 0 / 0 / 260 / 28 / 4 / 3 / – |
| Chocolate Chip 1368 | 1 serving | only in draft B | not found | 350 / 19 / 11 / 0 / 60 / 230 / 43 / 2 / 21 / – |
| Snickerdoodle 1368 | 1 serving | only in draft B | not found | 330 / 14 / 9 / 0 / 60 / 300 / 47 / 1 / 24 / – |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Fresh Ginger | 1 serving | 5 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 |
| Spritea | 20 fl oz. | 230 / 0 / 0 / 0 / 0 / 110 / 64 / 0 / 64 / 0 |
| Gold Peaka Sweet Tea | 18.5 fl oz. | 190 / 0 / 0 / 0 / 0 / 0 / 48 / 0 / 48 / 0 |
