# Red Robin: lines for a person

Guide: https://www.redrobin.com/sites/default/files/2023-12/0124_NS_US-ALL.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (227)

Fix each line in `menus/red-robin.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Saucy Boneless Chicken Bites | Plain | differ: protein_g | 810 / 37 / 20 / 0.5 / 110 / 1950 / 66 / 14 / 21 / 24 | 810 / 37 / 20 / 0.5 / 110 / 1950 / 66 / 14 / 21 / – |
| Saucy Boneless Chicken Bites | Buzzard Sauce | differ: sugars_g, protein_g | 1010 / 57 / 30 / 0.5 / 120 / 3790 / 70 / 15 / 21 / 24 | 1010 / 57 / 30 / 0.5 / 120 / 3790 / 70 / 15 / 24 / – |
| Saucy Boneless Chicken Bites | Whiskey BBQ Sauce | differ: sugars_g, protein_g | 1010 / 43 / 21 / 0.5 / 110 / 2810 / 103 / 15 / 15 / 23 | 1010 / 43 / 21 / 0.5 / 110 / 2810 / 103 / 15 / 23 / – |
| Saucy Boneless Chicken Bites | Island Heat Sauce | differ: sugars_g, protein_g | 950 / 37 / 21 / 0.5 / 110 / 2180 / 101 / 15 / 15 / 21 | 950 / 37 / 21 / 0.5 / 110 / 2180 / 101 / 15 / 21 / – |
| Saucy Boneless Chicken Bites | Banzai Sauce | differ: sugars_g, protein_g | 920 / 37 / 21 / 0.5 / 110 / 3080 / 92 / 14 / 14 / 24 | 920 / 37 / 21 / 0.5 / 110 / 3080 / 92 / 14 / 24 / – |
| Bar Wing's 'N' Yukon Chips | Plain | differ: protein_g | 1080 / 70 / 29 / 0.5 / 465 / 1310 / 21 / 6 / 1 / 1 | 1080 / 70 / 29 / 0.5 / 465 / 1310 / 21 / 6 / 1 / – |
| Bar Wing's 'N' Yukon Chips | Buzzard Sauce | differ: protein_g | 1280 / 90 / 38 / 0.5 / 480 / 3140 / 25 / 7 / 3 / 3 | 1280 / 90 / 38 / 0.5 / 480 / 3140 / 25 / 7 / 3 / – |
| Bar Wing's 'N' Yukon Chips | Whiskey BBQ Sauce | differ: sugars_g, protein_g | 1280 / 76 / 30 / 0.5 / 465 / 2170 / 58 / 7 / 7 / 30 | 1280 / 76 / 30 / 0.5 / 465 / 2170 / 58 / 7 / 30 / – |
| Bar Wing's 'N' Yukon Chips | Island Heat Sauce | differ: sugars_g, protein_g | 1220 / 71 / 29 / 0.5 / 465 / 1540 / 56 / 7 / 7 / 32 | 1220 / 71 / 29 / 0.5 / 465 / 1540 / 56 / 7 / 32 / – |
| Bar Wing's 'N' Yukon Chips | Banzai Sauce | differ: sugars_g, protein_g | 1190 / 70 / 29 / 0.5 / 465 / 2430 / 47 / 6 / 6 / 23 | 1190 / 70 / 29 / 0.5 / 465 / 2430 / 47 / 6 / 23 / – |
| Root Beer Float | Adult | both read numbers that can't be right: saturated and trans fat above fat | 580 / 7 / 135 / 0.5 / 15 / 160 / 132 / 0 / 110 / 9 | 580 / 7 / 135 / 0.5 / 15 / 160 / 132 / 0 / 110 / 9 |
| Root Beer Float | Kid | both read numbers that can't be right: saturated and trans fat above fat | 190 / 2.5 / 45 / 0 / 0 / 50 / 41 / 0 / 34 / 3 | 190 / 2.5 / 45 / 0 / 0 / 50 / 41 / 0 / 34 / 3 |
| Kim Crawford Sauvignon Blanc | 5 oz. | differ: cholesterol_mg, sodium_mg | 120 / 0 / 0 / 0 / 5 / 0 / 3 / 0 / 2 / 0 | 120 / 0 / 0 / 0 / 0 / 5 / 3 / 0 / 2 / 0 |
| Kim Crawford Sauvignon Blanc | 6 oz. | differ: cholesterol_mg, sodium_mg | 140 / 0 / 0 / 0 / 10 / 0 / 4 / 0 / 2 / 0 | 140 / 0 / 0 / 0 / 0 / 10 / 4 / 0 / 2 / 0 |
| Kim Crawford Sauvignon Blanc | 9 oz. | differ: cholesterol_mg, sodium_mg | 220 / 0 / 0 / 0 / 15 / 0 / 5 / 0 / 3 / 0 | 220 / 0 / 0 / 0 / 0 / 15 / 5 / 0 / 3 / 0 |
| Leese-Fitch Chardonnay (Select Locations Only) | 5 oz. | differ: cholesterol_mg, sodium_mg | 120 / 0 / 0 / 0 / 5 / 0 / 3 / 0 / 1 / 0 | 120 / 0 / 0 / 0 / 0 / 5 / 3 / 0 / 1 / 0 |
| The Naked Grape® Chardonnay | 5 oz. | differ: cholesterol_mg, sodium_mg | 130 / 0 / 0 / 0 / 15 / 0 / 4 / 0 / 2 / 0 | 130 / 0 / 0 / 0 / 0 / 15 / 4 / 0 / 2 / 0 |
| The Naked Grape® Chardonnay | 6 oz. | differ: cholesterol_mg, sodium_mg | 150 / 0 / 0 / 0 / 20 / 0 / 5 / 0 / 2 / 0 | 150 / 0 / 0 / 0 / 0 / 20 / 5 / 0 / 2 / 0 |
| The Naked Grape® Chardonnay | 9 oz. | differ: cholesterol_mg, sodium_mg | 230 / 0 / 0 / 0 / 25 / 0 / 7 / 0 / 3 / 0 | 230 / 0 / 0 / 0 / 0 / 25 / 7 / 0 / 3 / 0 |
| Pepperwood Grove Pinot Grigio (Select Locations Only) | 5 oz. | differ: cholesterol_mg, sodium_mg | 120 / 0 / 0 / 0 / 5 / 0 / 4 / 0 / 0 / 0 | 120 / 0 / 0 / 0 / 0 / 5 / 4 / 0 / 0 / 0 |
| Ensenada Chicken™ Platter | One Chicken Breast | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 200 / 7 / 1.5 / 0 / 85 / 950 / 8 / 2 / 29 / 8 | 200 / 60 / 7 / 1.5 / 0 / 85 / 950 / 8 / 2 / 29 |
| Hand-Battered Fish & Chips | Includes Steak Fries | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1610 / 95 / 16 / 1 / 140 / 3060 / 143 / 12 / 46 / – | 1610 / 860 / 95 / 16 / 1 / 140 / 3060 / 143 / – / 46 |
| Sear-ious Salmon (Select Locations Only) | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 440 / 34 / 7 / 0 / 0 / 850 / 8 / 1 / 4 / 33 | 440 / 310 / 34 / 7 / 0 / 0 / 850 / 8 / 1 / 4 |
| Tsunami Shrimp (Entree) (High) | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g | 1630 / 117 / 46 / 0.5 / 195 / 2290 / 110 / 15 / 15 / 37 | 1630 / 1060 / 117 / 46 / 0.5 / 195 / 2290 / 110 / 15 / 37 |
| Tsunami Shrimp (Entree) (Low) | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1160 / 82 / 16 / 0.5 / 190 / 1840 / 75 / 9 / 16 / 37 | 1160 / 740 / 82 / 16 / 0.5 / 190 / 1840 / 75 / 9 / 16 |
| Whiskey River BBQ Ribs (High) | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 2190 / 48 / 74 / 1.5 / 390 / 4240 / 87 / 13 / 36 / 88 | 2190 / 1480 / 48 / 74 / 1.5 / 390 / 4240 / 87 / 13 / 36 |
| Whiskey River BBQ Ribs (Low) | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1720 / 13 / 43 / 1.5 / 390 / 3780 / 52 / 7 / 37 / 87 | 1720 / 1170 / 13 / 43 / 1.5 / 390 / 3780 / 52 / 7 / 37 |
| Gooey Chocolate Brownie Cake | 1 serving | both read numbers that can't be right: saturated and trans fat above fat | 880 / 33 / 78 / 0.5 / 80 / 310 / 139 / 2 / 99 / 12 | 880 / 33 / 78 / 0.5 / 80 / 310 / 139 / 2 / 99 / 12 |
| Alaskan Amber | 12 oz. | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 16 / 0 / 0 / 3 |
| Alaskan Amber | 16 oz. | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 0 / 4 |
| Angry Orchard® Hard Cider | 12 oz. Bottle | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 10 / 25 / 0 / 20 / 0 |
| Angry Orchard® Hard Cider | 16 oz. | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 15 / 33 / 0 / 27 / 0 |
| Angry Orchard® Hard Cider | 22 oz. | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 20 / 45 / 0 / 37 / 0 |
| Angry Orchard® Rose Cider | 12 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 15 / 17 / 1 / 13 / 0 |
| Angry Orchard® Rose Cider | 16 oz. | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 20 / 23 / 1 / 17 / 0 |
| Angry Orchard® Rose Cider | 22 oz. | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 25 / 31 / 2 / 24 / 0 |
| Blue Moon® Belgian White | 12 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 15 / 14 / 0 / 11 / 2 |
| Blue Moon® Belgian White | 16 oz. | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 20 / 19 / 0 / 14 / 3 |
| Blue Moon® Belgian White | 22 oz. | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 30 / 26 / 0 / 20 / 3 |
| Bud Light® | 12 oz. | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 10 / 5 / 0 / 0 / 0 |
| Bud Light® | 16 oz. | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 15 / 6 / 0 / 0 / 1 |
| Bud Light® | 22 oz. | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 20 / 8 / 0 / 0 / 2 |
| Budweiser® | 12 oz. Bottle | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 10 / 11 / 0 / 0 / 1 |
| Budweiser® | 16 oz. | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 15 / 14 / 0 / 0 / 2 |
| Budweiser® | 22 oz. | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 20 / 19 / 0 / 0 / 2 |
| Coors Light® | 12 oz. | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 10 / 5 / 0 / 0 / 1 |
| Coors Light® | 16 oz. | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 15 / 7 / 0 / 0 / 1 |
| Coors Light® | 22 oz. | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 20 / 9 / 0 / 0 / 2 |
| Corona Extra® | 12 oz. | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 14 / 0 / 0 / 1 |
| Corona Extra® | 16 oz. | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 0 / 19 / 0 / 0 / 2 |
| Deschutes™ Mirror Pond Pale Ale® | 12 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 20 / 16 / 0 / 0 / 0 |
| Deschutes™ Mirror Pond Pale Ale® | 16 oz. | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 25 / 21 / 0 / 0 / 0 |
| Guinness® | 12 oz. Bottle | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 1 |
| Guinness® | 14.9 oz. Can | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 1 |
| Guinness® | 16 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 1 |
| Guinness® | 22 oz. | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 2 |
| Heineken® | 12 oz. | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 10 / 11 / 0 / 2 / 0 |
| Heineken® | 16 oz. | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 10 / 15 / 0 / 3 / 1 |
| Heineken® | 22 oz. | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 15 / 21 / 0 / 4 / 1 |
| Laquinitas IPA® | 12 oz. | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 15 / 14 / 0 / 0 / 3 |
| Laquinitas IPA® | 16 oz. | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 20 / 18 / 0 / 0 / 3 |
| Laquinitas IPA® | 22 oz. | only in draft B | not found | 330 / 0 / 0 / 0 / 0 / 25 / 25 / 0 / 0 / 5 |
| Michelob Ultra® | 12 oz. | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 15 / 3 / 0 / 0 / 1 |
| Michelob Ultra® | 16 oz. | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 20 / 4 / 0 / 0 / 1 |
| Michelob Ultra® | 22 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 30 / 6 / 0 / 0 / 2 |
| Miller® Genuine Draft | 12 oz. | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 5 / 13 / 0 / 0 / 1 |
| Miller® Genuine Draft | 16 oz. | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 10 / 17 / 0 / 0 / 1 |
| Miller Lite® | 12 oz. | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 5 / 3 / 0 / 0 / 1 |
| Miller Lite® | 16 oz. | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 5 / 4 / 0 / 0 / 1 |
| Miller Lite® | 22 oz. | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 10 / 6 / 0 / 0 / 2 |
| Modelo Especial | 12 oz. | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 20 / 14 / 0 / 0 / 1 |
| Modelo Especial | 16 oz. | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 25 / 18 / 0 / 0 / 1 |
| New Belgium® Fat Tire® | 12 oz. | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 9 / 2 / 0 / 2 |
| New Belgium® Fat Tire® | 16 oz. | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 5 / 12 / 3 / 0 / 3 |
| New Belgium® Fat Tire® | 22 oz. | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 10 / 17 / 4 / 0 / 4 |
| O'Doul's® | 12 oz. | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 10 / 13 / 0 / 0 / 0 |
| O'Doul's® | 16 oz. | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 10 / 18 / 0 / 0 / 0 |
| Pyramid Breweries® | 12 oz. Bottle | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 0 / 3 |
| Pyramid Breweries® | 16 oz. | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 18 / 0 / 0 / 4 |
| Pyramid Breweries® | 22 oz. | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 0 / 25 / 0 / 0 / 5 |
| Samuel Adams Boston Lager® | 12 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 25 / 19 / 0 / 2 / 2 |
| Samuel Adams Boston Lager® | 16 oz. | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 30 / 25 / 1 / 3 / 2 |
| Samuel Adams Boston Lager® | 22 oz. | only in draft B | not found | 320 / 0 / 0 / 0 / 0 / 40 / 34 / 1 / 4 / 3 |
| Samuel Adams Cold Snap | 12 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 20 / 14 / 1 / 0 / 2 |
| Samuel Adams Cold Snap | 16 oz. | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 25 / 19 / 1 / 0 / 3 |
| Samuel Adams Cold Snap | 22 oz. | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 35 / 26 / 2 / 0 / 4 |
| Samuel Adams Fresh as Helles™ | 12 oz. | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 25 / 17 / 0 / 0 / 2 |
| Samuel Adams Fresh as Helles™ | 16 oz. | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 30 / 22 / 1 / 1 / 3 |
| Samuel Adams Fresh as Helles™ | 22 oz. | only in draft B | not found | 330 / 0 / 0 / 0 / 0 / 40 / 30 / 1 / 1 / 4 |
| Sam Adams® Hopscape™ | 12 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 20 / 13 / 2 / 0 / 2 |
| Sam Adams® Hopscape™ | 16 oz. | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 25 / 17 / 2 / 0 / 3 |
| Sam Adams® Hopscape™ | 22 oz. | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 35 / 23 / 3 / 0 / 4 |
| Sam Adams® OctoberFest | 12 oz. | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 20 / 19 / 0 / 0 / 2 |
| Sam Adams® OctoberFest | 16 oz. | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 25 / 25 / 1 / 1 / 2 |
| Sam Adams® OctoberFest | 22 oz. | only in draft B | not found | 330 / 0 / 0 / 0 / 0 / 35 / 34 / 1 / 1 / 3 |
| Sam Adams® Summer Ale | 12 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 15 / 14 / 2 / 0 / 2 |
| Sam Adams® Summer Ale | 16 oz. | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 20 / 18 / 2 / 0 / 3 |
| Sam Adams® Summer Ale | 22 oz. | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 30 / 25 / 3 / 0 / 4 |
| Sam Adams The Wicked Easy | 12 oz. | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 20 / 2 / 0 / 0 / 1 |
| Sam Adams The Wicked Easy | 16 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 25 / 3 / 0 / 0 / 1 |
| Sam Adams The Wicked Easy | 22 oz. | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 35 / 4 / 0 / 0 / 2 |
| Sam Adams® Winter Lager | 12 oz. | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 20 / 15 / 2 / 0 / 2 |
| Sam Adams® Winter Lager | 16 oz. | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 25 / 20 / 2 / 0 / 3 |
| Sam Adams® Winter Lager | 22 oz. | only in draft B | not found | 330 / 0 / 0 / 0 / 0 / 35 / 28 / 3 / 0 / 4 |
| Shiner Bock | 12 oz. | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 0 / 0 |
| Shiner Bock | 16 oz. | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 0 / 0 |
| Stella Artois® | 12 oz. | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 45 / 12 / 0 / 2 / 1 |
| Stella Artois® | 16 oz. | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 60 / 16 / 0 / 3 / 1 |
| Stella Artois® | 22 oz. | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 85 / 22 / 0 / 4 / 2 |
| Troeg Perpetual IPA | 16 oz. | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 0 / 20 / 0 / 0 / 0 |
| Troeg Perpetual IPA | 22 oz. | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 0 / 28 / 0 / 0 / 0 |
| Truly® Wild Berry Hard Seltzer™ | 12 oz. Can | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 1 / 0 |
| Voodoo Ranger® Juicy Haze® IPA | 12 oz. | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 16 / 1 / 1 / 3 |
| Voodoo Ranger® Juicy Haze® IPA | 16 oz. | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 5 / 21 / 1 / 1 / 4 |
| Voodoo Ranger® Juicy Haze® IPA | 22 oz. | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 10 / 29 / 2 / 2 / 6 |
| Yuengling® Traditional Lager | 12 oz. | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 20 / 10 / 0 / 0 / 0 |
| Yuengling® Traditional Lager | 16 oz. | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 25 / 13 / 0 / 0 / 0 |
| Add Avocado | 1 serving | only in draft B | not found | 60 / 6 / 1 / 0 / 0 / 0 / 3 / 3 / 0 / 0 |
| Side Smashed Avocado | 1 serving | only in draft B | not found | 140 / 13 / 2 / 0 / 0 / 220 / 8 / 6 / 0 / 2 |
| Add Bacon | 1 serving | only in draft B | not found | 80 / 5 / 2 / 0 / 20 / 250 / 1 / 0 / 0 / 6 |
| Add Bacon Bits | 1 serving | only in draft B | not found | 70 / 4.5 / 1.5 / 0 / 20 / 210 / 1 / 0 / 1 / 6 |
| Bottomless Steak Fries® | per serving | only in draft B | not found | 350 / 16 / 2.5 / 0 / 0 / 380 / 48 / 5 / 0 / 5 |
| Bottomless Steak Fries® | 8oz | only in draft B | not found | 570 / 25 / 4.5 / 0 / 0 / 610 / 77 / 8 / 1 / 8 |
| Caramelized Onions | 1 serving | only in draft B | not found | 50 / 2.5 / 0.5 / 0 / 0 / 0 / 7 / 3 / 3 / 0 |
| Cheesy Bacon Fondue | 1 serving | only in draft B | not found | 340 / 26 / 15 / 1 / 85 / 900 / 10 / 0 / 6 / 16 |
| Coleslaw | 1 serving | only in draft B | not found | 180 / 12 / 2 / 0 / 10 / 660 / 16 / 3 / 9 / 2 |
| Cucumber Slices | three slices | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Fresh Jalapeño Slices | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Fried Egg | 1 serving | only in draft B | not found | 90 / 7 / 2 / 0 / 185 / 95 / 0 / 0 / 0 / 6 |
| Garlic Fries | 1 serving | only in draft B | not found | 430 / 23 / 7 / 0.5 / 20 / 500 / 50 / 5 / 2 / 8 |
| Garlic Parmesan Broccoli | 1 serving | only in draft B | not found | 80 / 4.5 / 2.5 / 0 / 10 / 130 / 7 / 3 / 2 / 5 |
| Green Chile side (New Mexico Only) | 1 serving | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 |
| Mayonnaise | 1oz | only in draft B | not found | 250 / 28 / 4.5 / 0 / 15 / 200 / 0 / 0 / 0 / 0 |
| Onion Rings | 1 serving | only in draft B | not found | 280 / 1 / 0 / 0 / 5 / 1020 / 61 / 3 / 11 / 6 |
| Onion Straws | 1 serving | only in draft B | not found | 220 / 16 / 3 / 0 / 0 / 180 / 18 / 1 / 2 / 2 |
| Pickle Slices | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 230 / 0 / 0 / 0 / 0 |
| Red's Pickle Relish | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 500 / 22 / 0 / 20 / 0 |
| Sautéed Mushrooms | 1 serving | only in draft B | not found | 120 / 8 / 4.5 / 0 / 20 / 270 / 9 / 3 / 4 / 4 |
| Steamed Broccoli | 1 serving | only in draft B | not found | 30 / 0.5 / 0 / 0 / 0 / 30 / 6 / 3 / 2 / 3 |
| Tomato (two slices) | two slices | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 |
| Yellow Onion | 1 serving | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 1 / 0 |
| Yukon Chips | 1 serving | only in draft B | not found | 500 / 35 / 31 / 0 / 0 / 490 / 41 / 8 / 0 / 4 |
| Brioche | 1 serving | only in draft B | not found | 200 / 3 / 0.5 / 0 / 0 / 380 / 38 / 2 / 6 / 7 |
| Croissant | 1 serving | only in draft B | not found | 330 / 15 / 9 / 0.5 / 0 / 390 / 41 / 1 / 6 / 7 |
| Gluten Free | 1 serving | only in draft B | not found | 210 / 4.5 / 0 / 0 / 0 / 480 / 39 / 3 / 6 / 4 |
| Lettuce Wrap Your Burger | 1 serving | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 10 / 3 / 1 / 2 / 1 |
| Ancient-Grain Veggie/Vegan Patty | 1 serving | only in draft B | not found | 130 / 4 / 0.5 / 0 / 0 / 340 / 17 / 7 / 5 / 7 |
| Crispy Chicken Patty | 1 serving | only in draft B | not found | 440 / 27 / 5 / 0 / 85 / 670 / 17 / 0 / 0 / 31 |
| Grilled Chicken Patty | 1 serving | only in draft B | not found | 120 / 1 / 0.5 / 0 / 80 / 260 / 0 / 0 / 0 / 27 |
| Gourmet Burger Patty | 1 serving | only in draft B | not found | 340 / 26 / 11 / 1.5 / 95 / 85 / 3 / 0 / 0 / 23 |
| Impossible™ Burger Patty | 1 serving | only in draft B | not found | 240 / 14 / 8 / 0 / 0 / 370 / 11 / 5 / 0 / 19 |
| Tavern Patty | 1 serving | only in draft B | not found | 160 / 12 / 5 / 1 / 45 / 40 / 1 / 0 / 0 / 11 |
| Turkey Patty | 1 serving | only in draft B | not found | 250 / 16 / 4.5 / 0 / 100 / 570 / 1 / 0 / 0 / 25 |
| Salmon Fillet (Select Locations Only) | 1 serving | only in draft B | not found | 280 / 19 / 4.5 / 0 / 0 / 480 / 2 / 0 / 0 / 33 |
| American | two slices | only in draft B | not found | 110 / 10 / 6 / 0.5 / 30 / 570 / 2 / 0 / 1 / 5 |
| Bleu Cheese | crumbles | only in draft B | not found | 50 / 4 / 2.5 / 0 / 10 / 180 / 0 / 0 / 0 / 3 |
| Cheddar | one slice | only in draft B | not found | 110 / 9 / 5 / 0.5 / 30 / 180 / 0 / 0 / 0 / 7 |
| Pepper-Jack | one slice | only in draft B | not found | 100 / 8 / 5 / 0.5 / 25 / 190 / 0 / 0 / 0 / 7 |
| Provolone (Select Locations Only) | one slice | only in draft B | not found | 70 / 6 / 3.5 / 0 / 15 / 180 / 0 / 0 / 0 / 5 |
| Swiss | one slice | only in draft B | not found | 110 / 9 / 6 / 0.5 / 30 / 60 / 0 / 0 / 0 / 8 |
| Buzzard-Spicy Wing Sauce | 1 serving | only in draft B | not found | 140 / 16 / 7 / 0 / 0 / 1640 / 0 / 0 / 0 / 0 |
| Campfire Mayo - Creamy BBQ | 1 serving | only in draft B | not found | 330 / 30 / 4.5 / 0 / 15 / 550 / 14 / 0 / 12 / 0 |
| Chipotle Aioli | 1 serving | only in draft B | not found | 430 / 47 / 7 / 0.5 / 25 / 430 / 2 / 0 / 2 / 0 |
| Heinz 57 | 2oz | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 720 / 16 / 0 / 16 / 0 |
| House-Made Salsa | 1 serving | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 260 / 3 / 0 / 2 / 0 |
| Island Heat Sauce | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 230 / 31 / 0 / 29 / 0 |
| Ranch | 1 serving | only in draft B | not found | 270 / 29 / 5 / 0 / 20 / 410 / 2 / 0 / 2 / 1 |
| Red's Secret Tavern Sauce™ | 1 serving | only in draft B | not found | 190 / 18 / 3 / 0.5 / 15 / 440 / 7 / 0 / 6 / 0 |
| Roasted Garlic Aioli | 1 serving | only in draft B | not found | 510 / 56 / 9 / 0.5 / 30 / 430 / 2 / 0 / 1 / 2 |
| Smoke & Pepper™ Ketchup | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 690 / 23 / 0 / 17 / 1 |
| Sweet & Spicy Ketchup | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 350 / 33 / 0 / 30 / 0 |
| Teriyaki Sauce | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 1130 / 24 / 0 / 20 / 2 |
| Whiskey River BBQ Sauce | 1 serving | only in draft B | not found | 130 / 0.5 / 0 / 0 / 0 / 800 / 31 / 1 / 28 / 1 |
| Carrots | 1 serving | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 30 / 4 / 1 / 2 / 0 |
| Chocolate Milk | 1 serving | only in draft B | not found | 200 / 2.5 / 1.5 / 0 / 10 / 125 / 36 / 1 / 32 / 9 |
| Cluck-A-Doodles | 3 pieces | only in draft B | not found | 540 / 29 / 5 / 0 / 60 / 1010 / 38 / 3 / 0 / 15 |
| Lil' Appetites Cluck-A-Doodles | 2 pieces | only in draft B | not found | 360 / 20 / 3.5 / 0 / 40 / 720 / 26 / 2 / 0 / 10 |
| Corn Doggies | 9 pieces | only in draft B | not found | 530 / 33 / 8 / 0 / 105 / 1250 / 43 / 2 / 7 / 16 |
| Lil' Appetites Corn Doggies | 6 pieces | only in draft B | not found | 350 / 22 / 5 / 0 / 70 / 830 / 29 / 1 / 5 / 10 |
| Grilled Cheesy (Select Locations Only) | 1 serving | only in draft B | not found | 340 / 27 / 11 / 0.5 / 45 / 1110 / 17 / 0 / 4 / 10 |
| Grilled Chicken Dip'Ns Plain | 1 serving | only in draft B | not found | 120 / 1 / 0.5 / 0 / 80 / 260 / 0 / 0 / 0 / 27 |
| Grilled Chicken Dip'Ns w/ BBQ Sauce | 1 serving | only in draft B | not found | 250 / 1.5 / 0.5 / 0 / 80 / 1060 / 32 / 2 / 28 / 28 |
| Grilled Chicken Dip'Ns w/ Ranch | 1 serving | only in draft B | not found | 390 / 30 / 5 / 0 / 100 / 670 / 3 / 0 / 2 / 28 |
| Grilled Chicken Dip'Ns w/ Teriyaki Sauce | 1 serving | only in draft B | not found | 220 / 1 / 0.5 / 0 / 80 / 1380 / 24 / 0 / 21 / 29 |
| Horizon Chocolate Milk Available only for the School Lunch Program | 1 serving | only in draft B | not found | 370 / 6 / 3.5 / 0 / 35 / 440 / 56 / 0 / 54 / 20 |
| Horizon Milk Available only for the School Lunch Program | 1 serving | only in draft B | not found | 270 / 6 / 3.5 / 0 / 25 / 320 / 10 / 0 / 29 / 20 |
| Apple Juice | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 10 / 19 / 0 / 18 / 0 |
| Orange Juice | 1 serving | only in draft B | not found | 80 / 0.5 / 0 / 0 / 0 / 0 / 19 / 0 / 16 / 1 |
| Pineapple Juice | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 15 / 26 / 0 / 26 / 0 |
| Mac It Yours | 1 serving | only in draft B | not found | 330 / 15 / 4 / 0.5 / 15 / 890 / 38 / 1 / 9 / 10 |
| Mandarin Oranges | 1 serving | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 0 / 7 / 0 / 6 / 0 |
| Milk | 1 serving | only in draft B | not found | 140 / 3.5 / 2 / 0 / 15 / 150 / 17 / 0 / 17 / 11 |
| Red's Cheeseburger Beef | 1 serving | only in draft B | not found | 380 / 20 / 8 / 11 / 60 / 800 / 32 / 0 / 5 / 20 |
| Red's Cheeseburger Chicken | 1 serving | only in draft B | not found | 340 / 9 / 3.5 / 10 / 95 / 1020 / 31 / 0 / 5 / 36 |
| Red's Cheeseburger Turkey | 1 serving | only in draft B | not found | 470 / 23 / 8 / 10 / 115 / 1330 / 32 / 0 / 5 / 33 |
| Red's Cheeseburger Veggie | 1 serving | only in draft B | not found | 350 / 12 / 3.5 / 10 / 15 / 1100 / 48 / 7 / 9 / 16 |
| Red's Burger Beef | 1 serving | only in draft B | not found | 320 / 15 / 5 / 11 / 45 / 360 / 29 / 0 / 3 / 17 |
| Red's Burger Chicken | 1 serving | only in draft B | not found | 280 / 3.5 / 0.5 / 10 / 80 / 580 / 29 / 0 / 4 / 33 |
| Red's Burger Turkey | 1 serving | only in draft B | not found | 410 / 18 / 4.5 / 10 / 100 / 890 / 29 / 0 / 3 / 31 |
| Red's Burger Veggie | 1 serving | only in draft B | not found | 290 / 7 / 0.5 / 10 / 0 / 660 / 45 / 7 / 8 / 13 |
| Side Salad' | 1 serving | only in draft B | not found | 350 / 31 / 5 / 0.5 / 25 / 520 / 18 / 0 / 16 / 1 |
| Steak Fries | 1 serving | only in draft B | not found | 210 / 9 / 1.5 / 0 / 0 / 230 / 29 / 3 / 0 / 3 |
| Sundae | 1 serving | only in draft B | not found | 310 / 7 / 70 / 0.5 / 20 / 45 / 58 / 1 / 42 / 6 |
| Malt (Homestyle Apple Pie Milkshake) | Monster | only in draft B | not found | 1070 / 41 / 25 / 1.5 / 150 / 480 / 156 / 2 / 126 / 21 |
| Malt (Homestyle Apple Pie Milkshake) | Kid | only in draft B | not found | 580 / 22 / 13 / 0.5 / 80 / 260 / 87 / 1 / 69 / 11 |
| Milkshake (Homestyle Apple Pie Milkshake) | Monster | only in draft B | not found | 1010 / 39 / 24 / 1.5 / 150 / 430 / 146 / 2 / 119 / 20 |
| Milkshake (Homestyle Apple Pie Milkshake) | Kid | only in draft B | not found | 550 / 21 / 13 / 0.5 / 80 / 240 / 81 / 0 / 65 / 10 |
| Make it boozy! Fireball Cinnamon Whiskey Shot® | 1 serving | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 0 / 4 / 0 / 4 / 0 |
| Malt (Chocolate) | Monster | only in draft B | not found | 1080 / 39 / 25 / 1.5 / 150 / 430 / 160 / 3 / 135 / 22 |
| Malt (Chocolate) | Kid | only in draft B | not found | 570 / 22 / 13 / 0.5 / 80 / 220 / 83 / 2 / 71 / 12 |
| Milkshake (Chocolate) | Monster | only in draft B | not found | 1020 / 38 / 24 / 1.5 / 145 / 380 / 150 / 3 / 128 / 21 |
| Milkshake (Chocolate) | Kid | only in draft B | not found | 540 / 21 / 13 / 0.5 / 80 / 200 / 77 / 1 / 66 / 11 |
| Malt (Oreo Cookie Magic) | Monster | only in draft B | not found | 1100 / 44 / 26 / 1.5 / 150 / 530 / 156 / 3 / 126 / 22 |
| Malt (Oreo Cookie Magic) | Kid | only in draft B | not found | 630 / 26 / 14 / 0.5 / 80 / 320 / 89 / 2 / 70 / 12 |
| Milkshake (Oreo Cookie Magic) | Monster | only in draft B | not found | 1040 / 43 / 25 / 1.5 / 145 / 480 / 146 / 2 / 118 / 21 |
| Milkshake (Oreo Cookie Magic) | Kid | only in draft B | not found | 600 / 25 / 14 / 0.5 / 80 / 290 / 83 / 1 / 65 / 11 |
| Malt (Strawberry) | Monster | only in draft B | not found | 990 / 39 / 25 / 1.5 / 150 / 400 / 140 / 2 / 124 / 22 |
| Malt (Strawberry) | Kid | only in draft B | not found | 550 / 22 / 13 / 0.5 / 80 / 200 / 78 / 1 / 70 / 11 |
| Milkshake (Strawberry) | Monster | only in draft B | not found | 930 / 38 / 24 / 1.5 / 145 / 350 / 130 / 2 / 116 / 20 |
| Milkshake (Strawberry) | Kid | only in draft B | not found | 510 / 21 / 13 / 0.5 / 80 / 180 / 72 / 1 / 65 / 10 |
| Malt (Vanilla) | Monster | only in draft B | not found | 1000 / 39 / 25 / 1.5 / 150 / 400 / 143 / 1 / 127 / 20 |
| Malt (Vanilla) | Kid | only in draft B | not found | 530 / 22 / 13 / 0.5 / 80 / 200 / 75 / 0 / 66 / 11 |
| Milkshake (Vanilla) | Monster | only in draft B | not found | 940 / 38 / 24 / 1.5 / 145 / 350 / 133 / 0 / 119 / 19 |
| Milkshake (Vanilla) | Kid | only in draft B | not found | 500 / 21 / 13 / 0.5 / 80 / 180 / 69 / 0 / 62 / 10 |
| Cinnamon Sugar Doh! Rings™ Tower | 1 serving | only in draft B | not found | 1550 / 51 / 31 / 0.5 / 10 / 1230 / 259 / 6 / 124 / 19 |
| Cinnamon Sugar Doh! Ring Shorty® | 1 serving | only in draft B | not found | 770 / 26 / 15 / 0.5 / 5 / 620 / 129 / 3 / 62 / 10 |
| Freckled Lemonade Cake | 1 serving | only in draft B | not found | 1060 / 46 / 30 / 1 / 255 / 430 / 152 / 2 / 126 / 11 |

## Spot check (11 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| The Crusher Cabernet Sauvignon (Select Locations Only) | 5 oz. | 120 / 0 / 0 / 0 / 0 / 0 / 4 / 0 / 0 / 0 |
| Canyon Road® Pinot Grigio | 6 oz. | 140 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 2 / 0 |
| Screaming Red Zombie | 1 serving | 350 / 0.5 / 0 / 0 / 0 / 50 / 49 / 1 / 41 / 0 |
| BLTA Croissant* | 1 serving | 690 / 42 / 15 / 0.5 / 60 / 1490 / 49 / 5 / 9 / 31 |
| Woodbridge Chardonnay | 5 oz. | 110 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 2 / 0 |
| Sweet Potato Fries | 1 serving | 410 / 14 / 12 / 0 / 0 / 1030 / 68 / 5 / 43 / 3 |
| Canyon Road® Cabernet Sauvignon | 9 oz. | 250 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 3 / 0 |
| Vegan Burger | 1 serving | 220 / 10 / 1.5 / 0 / 0 / 490 / 26 / 11 / 8 / 9 |
| Clamdigger's Clam Chowder (Select Locations Only) | Cup | 210 / 15 / 10 / 0.5 / 60 / 640 / 12 / 0 / 4 / 6 |
| Clucks & Fries® | 1 serving | 1340 / 84 / 15 / 0.5 / 95 / 2530 / 102 / 9 / 4 / 27 |
| Minute Maid® Lemonade | Adult | 140 / 0 / 0 / 0 / 0 / 20 / 36 / 0 / 35 / 0 |
