# Outback Steakhouse: lines for a person

Guide: https://outback.blob.core.windows.net/content/images/OBS_Full_Nutrition_Information_Core_Menu_Items.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (204)

Fix each line in `menus/outback-steakhouse.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Classic Prime Rib | 16 oz | both read numbers that can't be right: sugars 2 g above carbs 0 g | 1770 / 145 / 66 / 9 / 445 / 1510 / 0 / 0 / 2 / 116 | 1770 / 145 / 66 / 9 / 445 / 1510 / 0 / 0 / 2 / 116 |
| Classic Prime Rib | 24 oz | both read numbers that can't be right: sugars 2 g above carbs 0 g | 2660 / 217 / 99 / 13 / 665 / 1880 / 0 / 0 / 2 / 175 | 2660 / 217 / 99 / 13 / 665 / 1880 / 0 / 0 / 2 / 175 |
| Chocolate Tower | 1 Serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 710 / 37 / 1 / 180 / 1330 / 234 / 12 / 173 / 24 / 0 | 710 / 79 / 37 / 1 / 180 / 1330 / 234 / 12 / 173 / 24 |
| Side: House Salad (without dressing) | 1 Serving | only in draft A | 350 / 21 / 9 / 0 / 45 / 540 / 25 / 2 / 7 / 15 | not found |
| Kahlua and Coffee (Regional) | 1 Serving | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 140 / 0 / 0 / 0 / 5 / 22 / 0 / 22 / 0 / 22 | 140 / 0 / 0 / 0 / 0 / 5 / 22 / 0 / 22 / 0 |
| Key Lime Pie Martini | 1 Serving | differ: fat_g, saturated_fat_g, trans_fat_g | 320 / 40 / 4.5 / 2.5 / 10 / 35 / 50 / 0 / 46 / 1 | 320 / 4.5 / 2.5 / 0 / 10 / 35 / 50 / 0 / 46 / 1 |
| Lava Flow | 1 Serving | differ: fat_g, saturated_fat_g, trans_fat_g | 740 / 180 / 20 / 19 / 0 / 180 / 131 / 0 / 124 / 2 | 740 / 20 / 19 / 0 / 0 / 180 / 131 / 0 / 124 / 2 |
| Lime in the Coconut (Regional) | 1 Serving | differ: fat_g, trans_fat_g | 280 / 40 / 4 / 4 / 0 / 35 / 43 / 3 / 33 / 1 | 280 / 4 / 4 / 0 / 0 / 35 / 43 / 3 / 33 / 1 |
| Lychee Martini | 1 Serving | differ: fat_g, saturated_fat_g, trans_fat_g | 180 / 110 / 12 / 6 / 0 / 5 / 24 / 0 / 13 / 2 | 180 / 12 / 6 / 0 / 0 / 5 / 24 / 0 / 13 / 2 |
| Maple Bourbon Sour (Regional) | 1 Serving | differ: fat_g, saturated_fat_g, trans_fat_g | 300 / 25 / 2.5 / 1 / 5 / 135 / 30 / 0.5 / 28 / 2 | 300 / 2.5 / 1 / 0 / 5 / 135 / 30 / 0.5 / 28 / 2 |
| Pina Colada (Bacardi Rock Coconut Rum) | 1 Serving | differ: fat_g, saturated_fat_g, trans_fat_g | 490 / 110 / 12 / 11 / 0 / 105 / 78 / 0 / 73 / 2 | 490 / 12 / 11 / 0 / 0 / 105 / 78 / 0 / 73 / 2 |
| Pina Colada (Malibu Coconut Rum) | 1 Serving | differ: fat_g, saturated_fat_g, trans_fat_g | 480 / 110 / 12 / 11 / 0 / 105 / 81 / 0 / 76 / 2 | 480 / 12 / 11 / 0 / 0 / 105 / 81 / 0 / 76 / 2 |
| Pina Colada (with extra shot of Sailor Jerry Rum) | 1 Serving | differ: fat_g, saturated_fat_g, trans_fat_g | 500 / 110 / 12 / 11 / 0 / 105 / 80 / 0 / 76 / 2 | 500 / 12 / 11 / 0 / 0 / 105 / 80 / 0 / 76 / 2 |
| Pina Colada with extra shot of Sailor Jerry Rum (Bacardi Rock Coconut Rum) | 1 Serving | differ: fat_g, saturated_fat_g, trans_fat_g | 530 / 110 / 12 / 11 / 0 / 110 / 78 / 0 / 73 / 2 | 530 / 12 / 11 / 0 / 0 / 110 / 78 / 0 / 73 / 2 |
| Raspberry Lemon Drop (Regional) | 1 Serving | both read numbers that can't be right: sugars 25 g above carbs 0 g | 230 / 0 / 0 / 0 / 0 / 27 / 0 / 0 / 25 / 0 | 230 / 0 / 0 / 0 / 0 / 27 / 0 / 0 / 25 / 0 |
| Root Beer Old Fashioned (Regional) | 1 Serving | both read numbers that can't be right: sugars 13 g above carbs 5 g | 210 / 0 / 0 / 0 / 0 / 14 / 5 / 0 / 13 / 0 | 210 / 0 / 0 / 0 / 0 / 14 / 5 / 0 / 13 / 0 |
| The Ultimate "Dirty" Martini | 1 Serving | differ: fat_g, saturated_fat_g | 190 / 50 / 6 / 0 / 0 / 1010 / 0 / 0 / 0 / 0 | 190 / 6 / 0 / 0 / 0 / 1010 / 0 / 0 / 0 / 0 |
| Tropical Relief Martini | 1 Serving | differ: cholesterol_mg, sodium_mg, carbs_g | 230 / 0 / 0 / 0 / 25 / 35 / 0 / 0 / 32 / 0 | 230 / 0 / 0 / 0 / 0 / 25 / 35 / 0 / 32 / 0 |
| Watermelon Hunch Punch | 1 Serving | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 200 / 0 / 0 / 0 / 10 / 47 / 0.5 / 131 / 1 / – | 200 / 0 / 0 / 0 / 0 / 10 / 47 / 0.5 / 131 / 1 |
| Side Item-1-Bacon | 1 Serving | only in draft B | not found | 90 / 7 / 2.5 / 0 / 15 / 360 / 0 / 0 / 0 / 6 |
| Side Item-1 egg | 1 Serving | only in draft B | not found | 70 / 5 / 1.5 / 0 / 185 / 260 / 0 / 0 / 0 / 6 |
| Side Item-Breakfast Potatoes | 1 Serving | only in draft B | not found | 140 / 1 / 0 / 0 / 0 / 420 / 30 / 2 / 0 / 4 |
| Side Item-White Toast | 1 Serving | only in draft B | not found | 380 / 17 / 9 / 0 / 25 / 470 / 46 / 0 / 6 / 8 |
| Side Item-Fresh Fruit | 1 Serving | only in draft B | not found | 50 / 0 / 0 / 0 / 0 / 0 / 13 / 3 / 9 / 1 |
| Angry Orchard Crisp Apple Hard Cider | Bottle, 12 oz | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 10 / 29 / 0 / 23 / 0 |
| Bloomin' Blonde | Big Bloke | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 50 / 21 / 0 / 0 / 3 |
| Bloomin' Blonde | Middy | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 35 / 16 / 0 / 0 / 2 |
| Bloomin' Blonde Ale | Middy | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 35 / 16 / 0 / 0 / 2 |
| Bloomin' Blonde Ale | Big Bloke | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 50 / 21 / 0 / 0 / 3 |
| Blue Moon Belgian White | Bottle, 12 oz | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 15 / 14 / 0 / 0 / 2 |
| Bud Light | Big Bloke | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 15 / 10 / 0 / 0 / 1 |
| Bud Light | Bottle, 12 oz | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 10 / 6 / 0 / 0 / 0.5 |
| Bud Light | Middy | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 10 / 8 / 0 / 0 / 1 |
| Budweiser | Bottle, 12 oz | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 10 / 10 / 0 / 0 / 1 |
| Coors Light | Bottle, 12 oz | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 10 / 5 / 0 / 0 / 0 |
| Corona Extra | Bottle, 12 oz | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 15 / 12 / 0 / 0 / 2 |
| Dos Equis Lager XX | Bottle, 12 oz | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 15 / 12 / 0 / 0 / 2 |
| Foster's | 25.4 oz, Oil Can | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 25 / 24 / 0 / 0 / 3 |
| Foster's Lager | Big Bloke | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 25 / 22 / 0 / 0 / 3 |
| Foster's Lager | Middy | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 20 / 17 / 0 / 0 / 2 |
| Heineken Light | Bottle, 12 oz | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 10 / 4 / 0 / 0 / 0.5 |
| Heineken | Bottle, 12 oz | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Heineken 0.0 | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 |
| Kentucky Bourbon Barrel | Bottle, 10 oz | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 0.5 / 0 / 0 / 3 |
| Kentucky Bourbon Barrel | Bottle, 11 oz | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 10 / 0.5 / 0 / 0 / 3 |
| Kona Island Lager | Big Bloke | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 20 / 19 / 0 / 0 / 2 |
| Kona Island Lager | Bottle, 12 oz | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 20 / 11 / 0 / 0 / 2 |
| Kona Island Lager | Middy | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 15 / 15 / 0 / 0 / 2 |
| Lagunitas IPA | Bottle, 12 oz | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 15 / 14 / 0 / 0 / 3 |
| Lindemans Framboise Lambic | Bottle, 12 oz | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 15 / 34 / 0 / 33 / 0 |
| Magic Hat #9 | Bottle, 12 oz | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 15 / 12 / 0 / 0 / 2 |
| Michelob ULTRA Pure Gold | Bottle | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 10 / 3 / 0 / 0 / 0.5 |
| Michelob ULTRA | Bottle, 12 oz | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 10 / 3 / 0 / 0 / 0.5 |
| Miller Genuine Draft | Bottle, 12 oz | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 5 / 13 / 0 / 0 / 0.5 |
| Miller Light | Bottle, 12 oz | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 5 / 3 / 0 / 0 / 0 |
| Modelo Especial | Big Bloke | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 15 / 12 / 0 / 0 / 2 |
| Modelo Especial | Bottle, 12 oz | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 15 / 15 / 0 / 0 / 2 |
| Modelo Especial | Middy | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 20 / 19 / 0 / 0 / 2 |
| New Belgium Fat Tire Amber Ale | Big Bloke | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 20 / 19 / 0 / 0 / 2 |
| New Belgium Fat Tire Amber Ale | Bottle, 12 oz | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 15 / 12 / 0 / 0 / 2 |
| New Belgium Fat Tire Amber Ale | Middy | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 15 / 15 / 0 / 0 / 2 |
| Newcastle Brown Ale | Bottle, 12 oz | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 15 / 12 / 0 / 0 / 2 |
| O'Doul's Amber | Bottle, 12 oz | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 18 / 0 / 0 / 2 |
| O'Doul's | Bottle, 12 oz | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 0 / 0.5 |
| Omission Lager | Bottle, 12 oz | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 15 / 12 / 0 / 0 / 2 |
| Omission Pale Ale | Bottle, 12 oz | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 20 / 13 / 0 / 0 / 2 |
| Rebel IPA | Can, 16 oz | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 25 / 20 / 0 / 0.5 / 3 |
| Redbridge (Gluten-free) | Bottle, 12 oz | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 0 / 14 / 0 / 0 / 0 |
| Rogue Chocolate Stout | Bottle, 22 oz | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 25 / 2 / 0 / 0 / 6 |
| Rogue Hazelnut Brown Nectar | Big Bloke | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 40 / 25 / 0 / 6 / 5 |
| Rogue Hazelnut Brown Nectar | Bottle, 12 oz | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 25 / 16 / 0 / 4 / 3 |
| Rogue Hazelnut Brown Nectar | Middy | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 30 / 19 / 0 / 5 / 4 |
| Sam Adams Nitro Coffee Stout | Bottle | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 15 / 0.5 / 0 / 0 / 3 |
| Samuel Adams 76 | Can, 16 oz. | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 20 / 16 / 0 / 0 / 2 |
| Samuel Adams Boston Lager | Big Bloke | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 45 / 27 / 0 / 0 / 3 |
| Samuel Adams Boston Lager | Bottle, 12 oz | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 30 / 17 / 0 / 0 / 2 |
| Samuel Adams Boston Lager | Middy | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 35 / 21 / 0 / 0 / 2 |
| Samuel Adams New England IPA | Can, 16 oz | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 25 / 20 / 0 / 0.5 / 3 |
| Samuel Adams Nitro Coffee Stout | Can, 16 oz | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 20 / 1 / 0 / 0 / 4 |
| Samuel Adams Rebel IPA | Bottle, 12 oz | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 15 / 15 / 0 / 0.5 / 2 |
| Samuel Adams Seasonal (Cold Snap) | Big Bloke | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 50 / 22 / 0 / 0.5 / 4 |
| Samuel Adams Seasonal (Cold Snap) | Bottle, 12 oz | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 30 / 14 / 0 / 0 / 2 |
| Samuel Adams Seasonal (Cold Snap) | Middy | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 35 / 16 / 0 / 0 / 3 |
| Samuel Adams Seasonal (Octoberfest) | Big Blake | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 50 / 19 / 0 / 0.5 / 2 |
| Samuel Adams Seasonal (Octoberfest) | Bottle, 12 oz | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 60 / 22 / 0 / 0.5 / 2 |
| Samuel Adams Seasonal (Octoberfest) | Middy | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 80 / 29 / 0 / 1 / 3 |
| Samuel Adams Seasonal (Summer Ale) | Big Blake | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 70 / 22 / 0 / 0.5 / 4 |
| Samuel Adams Seasonal (Summer Ale) | Bottle, 12 oz | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 45 / 14 / 0 / 0 / 2 |
| Samuel Adams Seasonal (Summer Ale) | Middy | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 55 / 16 / 0 / 0 / 3 |
| Samuel Adams Seasonal (Winter Lager) | Big Blake | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 60 / 29 / 0 / 1 / 4 |
| Samuel Adams Seasonal (Winter Lager) | Bottle, 12 oz | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 35 / 19 / 0 / 0.5 / 2 |
| Samuel Adams Seasonal (Winter Lager) | Middy | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 45 / 22 / 0 / 1 / 3 |
| Shock Top Belgian White | Big Blake | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 0 / 23 / 0 / 0 / 3 |
| Shock Top Belgian White | Bottle, 12 oz | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 2 |
| Shock Top Belgian White | Middy | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 0 / 18 / 0 / 0 / 3 |
| Sierra Nevada Pale Ale | Bottle, 12 oz | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 15 / 12 / 0 / 0 / 2 |
| Stella Artois | Big Blake | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 0 / 2 |
| Stella Artois | Bottle, 12 oz | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 0 / 1 |
| Stella Artois | Middy Chalice, 15 oz | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 0 / 1 |
| Summit EPA | Big Blake | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 20 / 19 / 0 / 0 / 2 |
| Summit EPA | Middy | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 15 / 15 / 0 / 0 / 2 |
| Summit Saga IPA | Big Blake | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 20 / 1 / 0 / 0 / 5 |
| Summit Saga IPA | Middy | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 4 |
| Surley Furious IRA | Big Blake | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 20 / 1 / 0 / 0 / 5 |
| Surley Furious IRA | Middy | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 4 |
| Sweetwater Pale Ale | Big Blake | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 20 / 19 / 0 / 0 / 2 |
| Sweetwater Pale Ale | Middy | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 15 / 15 / 0 / 0 / 2 |
| Westmaile Trappist Triple | Bottle, 11.2 oz | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 15 / 0.5 / 0 / 0 / 3 |
| White Claw | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 20 / 2 / 0 / 2 / 0 |
| Yuengling | Bottle, 12 oz | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 15 / 12 / 0 / 0 / 2 |
| Red Wine | 5 oz (Regional) | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 5 / 4 / 0 / 0.5 / 0 |
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
| Black Cherry Peach Mojito | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 25 / 27 / 0.5 / 24 / 0 |
| Blood Orange, Rita | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 1180 / 26 / 1 / 22 / 0.5 |
| Boomarita | 7 oz | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 910 / 30 / 1 / 26 / 0 |
| Classic Lime 'Rita | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 5 / 22 / 1 / 17 / 0 |
| Classic Mojito with Bacardi Superior Light Rum | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 0 / 15 / 0 / 14 / 0 |
| Classic Mojito with Sailor Jerry Spiced Rum | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 10 / 15 / 0 / 14 / 0 |
| Corona 'Rita | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 2230 / 22 / 0 / 12 / 1 |
| Down Under 'Rita - Frozen | 1 serving | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 2230 / 40 / 0 / 36 / 0 |
| Down Under 'Rita - Rocks/Straight-Up | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 2230 / 19 / 0 / 17 / 0 |
| Down Under Sauza Agave Margarita | 1 serving | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 2230 / 32 / 0 / 29 / 0 |
| Down Under Sauza Gold Coast 'Rita, Rocks | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 290 / 9 / 0 / 7 / 0 |
| Hawaiian Style 'Rita | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 10 / 10 / 0 / 7 / 0 |
| TOP SHELF HERRADURA RITA - OBS | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 2230 / 25 / 0.5 / 19 / 0 |
| Strawberry Kiw Rita | 1 serving | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 0 / 30 / 0.5 / 28 / 0 |
| Lemon Mojito (Regional) | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 24 / 1 / 20 / 0 |
| Mango Mojito (Regional) | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 31 / 1 / 26 / 0 |
| Mango Passion Fruit 'Rita | 1 serving | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 25 / 43 / 1 / 38 / 0 |
| Margarita Swirl (Regional) | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 2230 / 28 / 0.5 / 24 / 0 |
| Mojito Bacardi Limon with Blackberry | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 24 / 2 / 20 / 0.5 |
| Mojito Bacardi Limon with Classic Lime | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 0 / 21 / 1 / 18 / 0 |
| Mojito Bacardi Limon with Pineapple | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 0 / 30 / 2 / 24 / 0.5 |
| Mojito Bacardi Limon with Strawberry | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 0 / 17 / 0.5 / 15 / 0 |
| Mojito Bacardi Superior Light Rum with Blackberry | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 21 / 2 / 17 / 0.5 |
| Mojito Bacardi Superior Light Rum with Classic Lime | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 0 / 19 / 1 / 15 / 0 |
| Mojito Bacardi Superior Light Rum with Pineapple | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 0 / 27 / 2 / 22 / 0.5 |
| Mojito Bacardi Superior Light Rum with Strawberry | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 21 / 2 / 16 / 0.5 |
| Mojito Sailor Jerry Spiced Rum with Blackberry | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 10 / 21 / 2 / 17 / 0.5 |
| Mojito Sailor Jerry Spiced Rum with Classic Lime | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 10 / 19 / 1 / 15 / 0 |
| Mojito Sailor Jerry Spiced Rum with Pineapple | 1 serving | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 15 / 27 / 2 / 22 / 0.5 |
| Mojito Sailor Jerry Spiced Rum with Strawberry | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 10 / 21 / 2 / 16 / 0.5 |
| Naturally Skinny 'Rita | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 2220 / 20 / 1 / 17 / 0.5 |
| No Rules 'Rita, Rocks | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 2230 / 27 / 0 / 21 / 0 |
| Rita Trio | 1 serving | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 2230 / 40 / 0.5 / 35 / 0 |
| Sauza Agave Margarita | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 2220 / 29 / 0 / 25 / 0 |
| Sauza Gold Coast Rita, Rocks | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 2220 / 9 / 0 / 7 / 0 |
| Strawberry Ginger Smash | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 23 / 0.5 / 20 / 0 |
| The Gold Coast 'Rita - Frozen | 1 serving | only in draft B | not found | 540 / 0 / 0 / 0 / 0 / 3370 / 109 / 0 / 97 / 0 |
| The Gold Coast 'Rita - Frozen (Classic Lime) (Regional) | 1 serving | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 2230 / 71 / 0 / 64 / 0 |
| The Gold Coast 'Rita - Frozen (Strawberry) | 1 serving | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 2230 / 72 / 0 / 64 / 0 |
| The Gold Coast 'Rita - Rocks | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 2230 / 24 / 0 / 21 / 0 |
| The Gold Coast 'Rita - Rocks (Strawberry) | 1 serving | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 2230 / 43 / 0 / 38 / 0 |
| The Grand 'Rita, Rocks | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 2230 / 28 / 0 / 21 / 0 |
| Top Shelf 'Rita, Straight Up/Rocks | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 2230 / 25 / 0.5 / 19 / 0 |
| Absolut Mango Crush | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 0 / 22 / 0.5 / 21 / 0.5 |
| Aussie Fresh Fruit Cooler - Individual | 1 serving | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 0 / 35 / 2 / 31 / 0.5 |
| Aussie Rum Punch | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 30 / 33 / 0.5 / 0 / 30 / 0 |
| Bailey's on the Rocks (Regional) | 1 serving | only in draft B | not found | 190 / 0 / 4.5 / 0 / 0 / 0 / 14 / 0 / 12 / 2 |
| Black Barrel Irish Tea | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 27 / 2 / 22 / 0.5 |
| Blackberry Bramble (Regional) | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 17 / 3 / 11 / 0.5 |
| Black Cherry Mule (Regional) | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 25 / 5 / 0 / 22 / 0 |
| Blackberry Sangria - Individual | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 5 / 28 / 1 / 24 / 0.5 |
| Blueberry Desert Pear Burst (Regional) | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 25 / 0 / 0 / 21 / 0 |
| Blueberry Lavender Lemonade | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 10 / 37 / 0 / 35 / 0 |
| BOOZY CHERRY LIMEADE COCKTAIL | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 30 / 27 / 0 / 0 / 25 / 0 |
| Boozy Root Beer Float | 1 serving | only in draft B | not found | 550 / 15 / 9 / 0 / 55 / 75 / 29 / 0 / 23 / 4 |
| BOOZY CHERRY LIMEADE COCKTAIL - OBS | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 30 / 27 / 0 / 0 / 25 / 0 |
| Captain's Mai Tai | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 45 / 30 / 0 / 0 / 25 / 0.5 |
| Captain's Mai Tai with extra shot of Rum | 1 serving | only in draft B | not found | 260 / 0 / 0 / 0 / 45 / 30 / 0 / 0 / 25 / 0.5 |
| Castaway Cocktail | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 5 / 35 / 1 / 0 / 30 / 0.5 |
| Classic Moscow Mule (Regional) | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 5 / 0 |
| Classic Red Sangria (Regional) | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 0 / 29 / 3 / 23 / 1 |
| Classic Steakhouse Martini (Absolut) - Rocks/Straight-Up | 1 serving | only in draft B | not found | 170 / 3 / 0 / 0 / 0 / 540 / 0 / 0 / 0 / 0 |
| Classic Steakhouse Martini (Grey Goose) - Rocks/Straight-Up | 1 serving | only in draft B | not found | 170 / 3 / 0 / 0 / 0 / 540 / 0 / 0 / 0 / 0 |
| Classic Steakhouse Martini (Kettle One) - Rocks/Straight-Up | 1 serving | only in draft B | not found | 170 / 3 / 0 / 0 / 0 / 540 / 0 / 0 / 0 / 0 |
| Classic Steakhouse Martini (Stoll) - Rocks/Straight-Up | 1 serving | only in draft B | not found | 170 / 3 / 0 / 0 / 0 / 540 / 0 / 0 / 0 / 0 |
| Classic Steakhouse Martini (Tito's) - Rocks/Straight-Up | 1 serving | only in draft B | not found | 170 / 3 / 0 / 0 / 0 / 540 / 0 / 0 / 0 / 0 |
| Cucumber Infused Lemonade (Regional) | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 16 / 0 |
| Disaronomo Amaretto on the Rocks (Regional) | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 15 / 19 / 0 / 19 / 0 |
| Dorothy's Ruby Red Cosmo (Regional) | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 10 / 30 / 0 / 0 / 25 / 0 |
| Down Under Mule (Regional) NEW | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 7 / 0.5 / 0 / 5 / 0 |
| Espresso Infused Vodka and White Chocolate Martini (Regional) | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 10 / 0 |
| Fair Dinkum Daiquiri | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 24 / 0 / 21 / 0 |
| Fully Loaded Bloody Mary (Absolut) | 1 serving | only in draft B | not found | 150 / 3 / 0 / 0 / 0 / 2130 / 9 / 1 / 3 / 1 |
| Fully Loaded Bloody Mary (Tito's) | 1 serving | only in draft B | not found | 150 / 3 / 0 / 0 / 0 / 2130 / 9 / 1 / 3 / 1 |
| Grand Marnier Straight Up (Regional) | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 14 / 0 / 0 / 0 |
| Grapefruit Sage Martini (Regional) | 1 serving | only in draft B | not found | 220 / 1.5 / 1 / 0 / 0 / 0 / 24 / 5 / 14 / 2 |
| Great Barrier Punch | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 21 / 0.5 / 20 / 0.5 |
| House-Made Margarita (Regional) | 1 serving | only in draft B | not found | 370 / 0 / 0 / 0 / 0 / 580 / 62 / 0 / 56 / 0 |
| House-Made Margarita Top Shelf (Patron and Grand Marnier Float) (Regional) | 1 serving | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 580 / 66 / 0 / 56 / 0 |
| Huckleberry Hooch Moonshine Cocktail - Individual | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 10 / 33 / 0.5 / 131 / 0 |
| Hypnotic Breeze Martini | 1 serving | only in draft B | not found | 200 / 6 / 3.5 / 0 / 20 / 55 / 22 / 0 / 19 / 1 |
| Incredible Hulk | 1 serving | only in draft B | not found | 160 / 4.5 / 2.5 / 0 / 15 / 25 / 6 / 0 / 6 / 0.5 |
| Jack Dundee Tea | 1 serving | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 5 / 59 / 0 / 54 / 0 |

## Spot check (13 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Baked Potato Soup | Bowl | 450 / 32 / 18 / 0.5 / 70 / 2770 / 33 / 2 / 4 / 9 |
| Lolly Sour Apple Martini | 1 Serving | 360 / 0 / 0 / 0 / 0 / 0 / 56 / 0 / 51 / 0 |
| Egg, Bacon & Cheese Omelet (Mixed Cheese) | 1 Serving | 540 / 34 / 17 / 0 / 475 / 1370 / 32 / 2 / 1 / 27 |
| Kookaburra Wings Medium | 1 Serving | 1740 / 130 / 35 / 3 / 375 / 4100 / 52 / 6 / 4 / 87 |
| Aussie Breakfast Wrap | 1 Serving | 800 / 42 / 17 / 1 / 450 / 2110 / 76 / 4 / 4 / 31 |
| Seared Peppered Ahi | 1 Serving | 440 / 24 / 3.5 / 0 / 45 / 2210 / 30 / 3 / 15 / 29 |
| Classic Cheeseburger (Regional) | 1 Serving | 660 / 39 / 20 / 2.5 / 105 / 790 / 41 / 2 / 10 / 37 |
| Prime Rib Sandwich - Lunch | 1 Serving | 2090 / 146 / 61 / 1.5 / 245 / 5040 / 124 / 15 / 12 / 56 |
| Seasoned Rice | 1 Serving | 290 / 6 / 2.5 / 0 / 2.5 / 1470 / 53 / 2 / 5 / 6 |
| Salted Caramel Cookie | 1 Serving | 930 / 42 / 30 / 0 / 105 / 1360 / 132 / 1 / 82 / 10 |
| Sydney's Cosmo with Skinnygirl Bare Naked Vodka | 1 Serving | 240 / 0 / 0 / 0 / 0 / 5 / 30 / 0.5 / 27 / 0 |
| Cheesecake W/ Chocolate Sauce | 1 Serving | 1080 / 73 / 43 / 3 / 340 / 690 / 92 / 2 / 78 / 17 |
| Gold Coast Coconut Shrimp | 1 Serving | 520 / 21 / 14 / 0 / 245 / 640 / 49 / 1 / 28 / 31 |
