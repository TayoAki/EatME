# Red Robin: lines for a person

Guide: https://www.redrobin.com/sites/default/files/2023-12/0124_NS_US-ALL.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (229)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/red-robin.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Saucy Boneless Chicken Bites | Plain | differ: protein_g | 810 / 37 / 20 / 0.5 / 110 / 1950 / 66 / 14 / 21 / 24 | 810 / 37 / 20 / 0.5 / 110 / 1950 / 66 / 14 / 21 / – | A: not as drafted (line 37 lacks 24); B: numbers found after the name (line 37); check the size |
| Saucy Boneless Chicken Bites | Buzzard Sauce | differ: sugars_g, protein_g | 1010 / 57 / 30 / 0.5 / 120 / 3790 / 70 / 15 / 21 / 24 | 1010 / 57 / 30 / 0.5 / 120 / 3790 / 70 / 15 / 24 / – | A: not as drafted (line 38 lacks 21); B: numbers found after the name (line 38); check the size |
| Saucy Boneless Chicken Bites | Whiskey BBQ Sauce | differ: sugars_g, protein_g | 1010 / 43 / 21 / 0.5 / 110 / 2810 / 103 / 15 / 15 / 23 | 1010 / 43 / 21 / 0.5 / 110 / 2810 / 103 / 15 / 23 / – | A: not as drafted (line 39 lacks 15); B: numbers found after the name (line 39); check the size |
| Saucy Boneless Chicken Bites | Island Heat Sauce | differ: sugars_g, protein_g | 950 / 37 / 21 / 0.5 / 110 / 2180 / 101 / 15 / 15 / 21 | 950 / 37 / 21 / 0.5 / 110 / 2180 / 101 / 15 / 21 / – | A: not as drafted (line 40 lacks 15); B: numbers found after the name (line 40); check the size |
| Saucy Boneless Chicken Bites | Banzai Sauce | differ: sugars_g, protein_g | 920 / 37 / 21 / 0.5 / 110 / 3080 / 92 / 14 / 14 / 24 | 920 / 37 / 21 / 0.5 / 110 / 3080 / 92 / 14 / 24 / – | A: not as drafted (line 41 lacks 14); B: numbers found after the name (line 41); check the size |
| Bar Wing's 'N' Yukon Chips | Plain | differ: protein_g | 1080 / 70 / 29 / 0.5 / 465 / 1310 / 21 / 6 / 1 / 1 | 1080 / 70 / 29 / 0.5 / 465 / 1310 / 21 / 6 / 1 / – | A: not as drafted (line 42 lacks 1); B: numbers found after the name (line 42); check the size |
| Bar Wing's 'N' Yukon Chips | Buzzard Sauce | differ: protein_g | 1280 / 90 / 38 / 0.5 / 480 / 3140 / 25 / 7 / 3 / 3 | 1280 / 90 / 38 / 0.5 / 480 / 3140 / 25 / 7 / 3 / – | A: not as drafted (line 43 lacks 3); B: numbers found after the name (line 43); check the size |
| Bar Wing's 'N' Yukon Chips | Whiskey BBQ Sauce | differ: sugars_g, protein_g | 1280 / 76 / 30 / 0.5 / 465 / 2170 / 58 / 7 / 7 / 30 | 1280 / 76 / 30 / 0.5 / 465 / 2170 / 58 / 7 / 30 / – | A: not as drafted (line 44 lacks 7); B: numbers found after the name (line 44); check the size |
| Bar Wing's 'N' Yukon Chips | Island Heat Sauce | differ: sugars_g, protein_g | 1220 / 71 / 29 / 0.5 / 465 / 1540 / 56 / 7 / 7 / 32 | 1220 / 71 / 29 / 0.5 / 465 / 1540 / 56 / 7 / 32 / – | A: not as drafted (line 45 lacks 7); B: numbers found after the name (line 45); check the size |
| Bar Wing's 'N' Yukon Chips | Banzai Sauce | differ: sugars_g, protein_g | 1190 / 70 / 29 / 0.5 / 465 / 2430 / 47 / 6 / 6 / 23 | 1190 / 70 / 29 / 0.5 / 465 / 2430 / 47 / 6 / 23 / – | A: not as drafted (line 46 lacks 6); B: numbers found after the name (line 46); check the size |
| Root Beer Float | Adult | both read numbers that can't be right: saturated and trans fat above fat | 580 / 7 / 135 / 0.5 / 15 / 160 / 132 / 0 / 110 / 9 | 580 / 7 / 135 / 0.5 / 15 / 160 / 132 / 0 / 110 / 9 | A: numbers found after the name (line 83); check the size; B: numbers found after the name (line 83); check the size |
| Root Beer Float | Kid | both read numbers that can't be right: saturated and trans fat above fat | 190 / 2.5 / 45 / 0 / 0 / 50 / 41 / 0 / 34 / 3 | 190 / 2.5 / 45 / 0 / 0 / 50 / 41 / 0 / 34 / 3 | A: numbers found after the name (line 84); check the size; B: numbers found after the name (line 84); check the size |
| Kim Crawford Sauvignon Blanc | 5 oz. | differ: cholesterol_mg, sodium_mg | 120 / 0 / 0 / 0 / 5 / 0 / 3 / 0 / 2 / 0 | 120 / 0 / 0 / 0 / 0 / 5 / 3 / 0 / 2 / 0 | A: numbers found after the name (line 361); check the size; B: numbers found after the name (line 361); check the size |
| Kim Crawford Sauvignon Blanc | 6 oz. | differ: cholesterol_mg, sodium_mg | 140 / 0 / 0 / 0 / 10 / 0 / 4 / 0 / 2 / 0 | 140 / 0 / 0 / 0 / 0 / 10 / 4 / 0 / 2 / 0 | A: numbers found after the name (line 362); check the size; B: numbers found after the name (line 362); check the size |
| Kim Crawford Sauvignon Blanc | 9 oz. | differ: cholesterol_mg, sodium_mg | 220 / 0 / 0 / 0 / 15 / 0 / 5 / 0 / 3 / 0 | 220 / 0 / 0 / 0 / 0 / 15 / 5 / 0 / 3 / 0 | A: numbers found after the name (line 363); check the size; B: numbers found after the name (line 363); check the size |
| Leese-Fitch Chardonnay (Select Locations Only) | 5 oz. | differ: cholesterol_mg, sodium_mg | 120 / 0 / 0 / 0 / 5 / 0 / 3 / 0 / 1 / 0 | 120 / 0 / 0 / 0 / 0 / 5 / 3 / 0 / 1 / 0 | A: numbers found after the name (line 364); check the size; B: numbers found after the name (line 364); check the size |
| The Naked Grape® Chardonnay | 5 oz. | differ: cholesterol_mg, sodium_mg | 130 / 0 / 0 / 0 / 15 / 0 / 4 / 0 / 2 / 0 | 130 / 0 / 0 / 0 / 0 / 15 / 4 / 0 / 2 / 0 | A: numbers found after the name (line 366); check the size; B: numbers found after the name (line 366); check the size |
| The Naked Grape® Chardonnay | 6 oz. | differ: cholesterol_mg, sodium_mg | 150 / 0 / 0 / 0 / 20 / 0 / 5 / 0 / 2 / 0 | 150 / 0 / 0 / 0 / 0 / 20 / 5 / 0 / 2 / 0 | A: numbers found after the name (line 367); check the size; B: numbers found after the name (line 367); check the size |
| The Naked Grape® Chardonnay | 9 oz. | differ: cholesterol_mg, sodium_mg | 230 / 0 / 0 / 0 / 25 / 0 / 7 / 0 / 3 / 0 | 230 / 0 / 0 / 0 / 0 / 25 / 7 / 0 / 3 / 0 | A: numbers found after the name (line 368); check the size; B: numbers found after the name (line 368); check the size |
| Pepperwood Grove Pinot Grigio (Select Locations Only) | 5 oz. | differ: cholesterol_mg, sodium_mg | 120 / 0 / 0 / 0 / 5 / 0 / 4 / 0 / 0 / 0 | 120 / 0 / 0 / 0 / 0 / 5 / 4 / 0 / 0 / 0 | A: numbers found after the name (line 369); check the size; B: numbers found after the name (line 369); check the size |
| Ensenada Chicken™ Platter | One Chicken Breast | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 200 / 7 / 1.5 / 0 / 85 / 950 / 8 / 2 / 29 / 8 | 200 / 60 / 7 / 1.5 / 0 / 85 / 950 / 8 / 2 / 29 | A: not as drafted (line 394 lacks 8); B: numbers found after the name (line 394); check the size |
| Hand-Battered Fish & Chips | Includes Steak Fries | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1610 / 95 / 16 / 1 / 140 / 3060 / 143 / 12 / 46 / – | 1610 / 860 / 95 / 16 / 1 / 140 / 3060 / 143 / – / 46 | A: numbers found after the name (line 395); check the size; B: numbers found after the name (line 395); check the size |
| Sear-ious Salmon (Select Locations Only) | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 440 / 34 / 7 / 0 / 0 / 850 / 8 / 1 / 4 / 33 | 440 / 310 / 34 / 7 / 0 / 0 / 850 / 8 / 1 / 4 | A: numbers found after the name (line 396); check the size; B: numbers found after the name (line 396); check the size |
| Tsunami Shrimp (Entree) (High) | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g | 1630 / 117 / 46 / 0.5 / 195 / 2290 / 110 / 15 / 15 / 37 | 1630 / 1060 / 117 / 46 / 0.5 / 195 / 2290 / 110 / 15 / 37 | A: numbers found after the name (line 397); check the size; B: numbers found after the name (line 397); check the size |
| Tsunami Shrimp (Entree) (Low) | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1160 / 82 / 16 / 0.5 / 190 / 1840 / 75 / 9 / 16 / 37 | 1160 / 740 / 82 / 16 / 0.5 / 190 / 1840 / 75 / 9 / 16 | A: numbers found after the name (line 398); check the size; B: numbers found after the name (line 398); check the size |
| Whiskey River BBQ Ribs (High) | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 2190 / 48 / 74 / 1.5 / 390 / 4240 / 87 / 13 / 36 / 88 | 2190 / 1480 / 48 / 74 / 1.5 / 390 / 4240 / 87 / 13 / 36 | A: numbers found after the name (line 399); check the size; B: numbers found after the name (line 399); check the size |
| Whiskey River BBQ Ribs (Low) | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1720 / 13 / 43 / 1.5 / 390 / 3780 / 52 / 7 / 37 / 87 | 1720 / 1170 / 13 / 43 / 1.5 / 390 / 3780 / 52 / 7 / 37 | A: numbers found after the name (line 400); check the size; B: numbers found after the name (line 400); check the size |
| Gooey Chocolate Brownie Cake | 1 serving | both read numbers that can't be right: saturated and trans fat above fat | 880 / 33 / 78 / 0.5 / 80 / 310 / 139 / 2 / 99 / 12 | 880 / 33 / 78 / 0.5 / 80 / 310 / 139 / 2 / 99 / 12 | A: numbers found after the name (line 673); check the size; B: numbers found after the name (line 673); check the size |
| Alaskan Amber | 12 oz. | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 16 / 0 / 0 / 3 | B: numbers found after the name (line 189); check the size |
| Alaskan Amber | 16 oz. | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 0 / 4 | B: numbers found after the name (line 190); check the size |
| Angry Orchard® Hard Cider | 12 oz. Bottle | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 10 / 25 / 0 / 20 / 0 | B: numbers found after the name (line 191); check the size |
| Angry Orchard® Hard Cider | 16 oz. | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 15 / 33 / 0 / 27 / 0 | B: numbers found after the name (line 192); check the size |
| Angry Orchard® Hard Cider | 22 oz. | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 20 / 45 / 0 / 37 / 0 | B: numbers found after the name (line 193); check the size |
| Angry Orchard® Rose Cider | 12 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 15 / 17 / 1 / 13 / 0 | B: numbers found after the name (line 194); check the size |
| Angry Orchard® Rose Cider | 16 oz. | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 20 / 23 / 1 / 17 / 0 | B: numbers found after the name (line 195); check the size |
| Angry Orchard® Rose Cider | 22 oz. | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 25 / 31 / 2 / 24 / 0 | B: numbers found after the name (line 196); check the size |
| Blue Moon® Belgian White | 12 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 15 / 14 / 0 / 11 / 2 | B: numbers found after the name (line 197); check the size |
| Blue Moon® Belgian White | 16 oz. | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 20 / 19 / 0 / 14 / 3 | B: numbers found after the name (line 198); check the size |
| Blue Moon® Belgian White | 22 oz. | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 30 / 26 / 0 / 20 / 3 | B: numbers found after the name (line 199); check the size |
| Bud Light® | 12 oz. | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 10 / 5 / 0 / 0 / 0 | B: numbers found after the name (line 200); check the size |
| Bud Light® | 16 oz. | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 15 / 6 / 0 / 0 / 1 | B: numbers found after the name (line 201); check the size |
| Bud Light® | 22 oz. | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 20 / 8 / 0 / 0 / 2 | B: numbers found after the name (line 202); check the size |
| Budweiser® | 12 oz. Bottle | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 10 / 11 / 0 / 0 / 1 | B: numbers found after the name (line 203); check the size |
| Budweiser® | 16 oz. | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 15 / 14 / 0 / 0 / 2 | B: numbers found after the name (line 204); check the size |
| Budweiser® | 22 oz. | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 20 / 19 / 0 / 0 / 2 | B: numbers found after the name (line 205); check the size |
| Coors Light® | 12 oz. | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 10 / 5 / 0 / 0 / 1 | B: numbers found after the name (line 206); check the size |
| Coors Light® | 16 oz. | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 15 / 7 / 0 / 0 / 1 | B: numbers found after the name (line 207); check the size |
| Coors Light® | 22 oz. | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 20 / 9 / 0 / 0 / 2 | B: numbers found after the name (line 208); check the size |
| Corona Extra® | 12 oz. | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 14 / 0 / 0 / 1 | B: numbers found after the name (line 209); check the size |
| Corona Extra® | 16 oz. | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 0 / 19 / 0 / 0 / 2 | B: numbers found after the name (line 210); check the size |
| Deschutes™ Mirror Pond Pale Ale® | 12 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 20 / 16 / 0 / 0 / 0 | B: numbers found after the name (line 211); check the size |
| Deschutes™ Mirror Pond Pale Ale® | 16 oz. | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 25 / 21 / 0 / 0 / 0 | B: numbers found after the name (line 212); check the size |
| Guinness® | 12 oz. Bottle | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 213); check the size |
| Guinness® | 14.9 oz. Can | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 214); check the size |
| Guinness® | 16 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 1 | B: numbers found after the name (line 215); check the size |
| Guinness® | 22 oz. | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 15 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 216); check the size |
| Heineken® | 12 oz. | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 10 / 11 / 0 / 2 / 0 | B: numbers found after the name (line 217); check the size |
| Heineken® | 16 oz. | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 10 / 15 / 0 / 3 / 1 | B: numbers found after the name (line 218); check the size |
| Heineken® | 22 oz. | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 15 / 21 / 0 / 4 / 1 | B: numbers found after the name (line 219); check the size |
| Laquinitas IPA® | 12 oz. | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 15 / 14 / 0 / 0 / 3 | B: numbers found after the name (line 220); check the size |
| Laquinitas IPA® | 16 oz. | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 20 / 18 / 0 / 0 / 3 | B: numbers found after the name (line 221); check the size |
| Laquinitas IPA® | 22 oz. | only in draft B | not found | 330 / 0 / 0 / 0 / 0 / 25 / 25 / 0 / 0 / 5 | B: numbers found after the name (line 222); check the size |
| Michelob Ultra® | 12 oz. | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 15 / 3 / 0 / 0 / 1 | B: numbers found after the name (line 223); check the size |
| Michelob Ultra® | 16 oz. | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 20 / 4 / 0 / 0 / 1 | B: numbers found after the name (line 224); check the size |
| Michelob Ultra® | 22 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 30 / 6 / 0 / 0 / 2 | B: numbers found after the name (line 225); check the size |
| Miller® Genuine Draft | 12 oz. | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 5 / 13 / 0 / 0 / 1 | B: numbers found after the name (line 226); check the size |
| Miller® Genuine Draft | 16 oz. | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 10 / 17 / 0 / 0 / 1 | B: numbers found after the name (line 227); check the size |
| Miller Lite® | 12 oz. | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 5 / 3 / 0 / 0 / 1 | B: numbers found after the name (line 228); check the size |
| Miller Lite® | 16 oz. | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 5 / 4 / 0 / 0 / 1 | B: numbers found after the name (line 229); check the size |
| Miller Lite® | 22 oz. | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 10 / 6 / 0 / 0 / 2 | B: numbers found after the name (line 230); check the size |
| Modelo Especial | 12 oz. | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 20 / 14 / 0 / 0 / 1 | B: numbers found after the name (line 231); check the size |
| Modelo Especial | 16 oz. | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 25 / 18 / 0 / 0 / 1 | B: numbers found after the name (line 232); check the size |
| New Belgium® Fat Tire® | 12 oz. | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 9 / 2 / 0 / 2 | B: numbers found after the name (line 233); check the size |
| New Belgium® Fat Tire® | 16 oz. | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 5 / 12 / 3 / 0 / 3 | B: numbers found after the name (line 234); check the size |
| New Belgium® Fat Tire® | 22 oz. | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 10 / 17 / 4 / 0 / 4 | B: numbers found after the name (line 235); check the size |
| O'Doul's® | 12 oz. | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 10 / 13 / 0 / 0 / 0 | B: numbers found after the name (line 236); check the size |
| O'Doul's® | 16 oz. | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 10 / 18 / 0 / 0 / 0 | B: numbers found after the name (line 237); check the size |
| Pyramid Breweries® | 12 oz. Bottle | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 0 / 3 | B: numbers found after the name (line 238); check the size |
| Pyramid Breweries® | 16 oz. | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 18 / 0 / 0 / 4 | B: numbers found after the name (line 239); check the size |
| Pyramid Breweries® | 22 oz. | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 0 / 25 / 0 / 0 / 5 | B: numbers found after the name (line 240); check the size |
| Samuel Adams Boston Lager® | 12 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 25 / 19 / 0 / 2 / 2 | B: numbers found after the name (line 241); check the size |
| Samuel Adams Boston Lager® | 16 oz. | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 30 / 25 / 1 / 3 / 2 | B: numbers found after the name (line 242); check the size |
| Samuel Adams Boston Lager® | 22 oz. | only in draft B | not found | 320 / 0 / 0 / 0 / 0 / 40 / 34 / 1 / 4 / 3 | B: numbers found after the name (line 243); check the size |
| Samuel Adams Cold Snap | 12 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 20 / 14 / 1 / 0 / 2 | B: numbers found after the name (line 244); check the size |
| Samuel Adams Cold Snap | 16 oz. | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 25 / 19 / 1 / 0 / 3 | B: numbers found after the name (line 245); check the size |
| Samuel Adams Cold Snap | 22 oz. | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 35 / 26 / 2 / 0 / 4 | B: numbers found after the name (line 246); check the size |
| Samuel Adams Fresh as Helles™ | 12 oz. | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 25 / 17 / 0 / 0 / 2 | B: numbers found after the name (line 247); check the size |
| Samuel Adams Fresh as Helles™ | 16 oz. | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 30 / 22 / 1 / 1 / 3 | B: numbers found after the name (line 248); check the size |
| Samuel Adams Fresh as Helles™ | 22 oz. | only in draft B | not found | 330 / 0 / 0 / 0 / 0 / 40 / 30 / 1 / 1 / 4 | B: numbers found after the name (line 249); check the size |
| Sam Adams® Hopscape™ | 12 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 20 / 13 / 2 / 0 / 2 | B: numbers found after the name (line 250); check the size |
| Sam Adams® Hopscape™ | 16 oz. | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 25 / 17 / 2 / 0 / 3 | B: numbers found after the name (line 251); check the size |
| Sam Adams® Hopscape™ | 22 oz. | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 35 / 23 / 3 / 0 / 4 | B: numbers found after the name (line 252); check the size |
| Sam Adams® OctoberFest | 12 oz. | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 20 / 19 / 0 / 0 / 2 | B: numbers found after the name (line 260); check the size |
| Sam Adams® OctoberFest | 16 oz. | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 25 / 25 / 1 / 1 / 2 | B: numbers found after the name (line 261); check the size |
| Sam Adams® OctoberFest | 22 oz. | only in draft B | not found | 330 / 0 / 0 / 0 / 0 / 35 / 34 / 1 / 1 / 3 | B: numbers found after the name (line 262); check the size |
| Sam Adams® Summer Ale | 12 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 15 / 14 / 2 / 0 / 2 | B: numbers found after the name (line 263); check the size |
| Sam Adams® Summer Ale | 16 oz. | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 20 / 18 / 2 / 0 / 3 | B: numbers found after the name (line 264); check the size |
| Sam Adams® Summer Ale | 22 oz. | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 30 / 25 / 3 / 0 / 4 | B: numbers found after the name (line 265); check the size |
| Sam Adams The Wicked Easy | 12 oz. | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 20 / 2 / 0 / 0 / 1 | B: numbers found after the name (line 266); check the size |
| Sam Adams The Wicked Easy | 16 oz. | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 25 / 3 / 0 / 0 / 1 | B: numbers found after the name (line 267); check the size |
| Sam Adams The Wicked Easy | 22 oz. | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 35 / 4 / 0 / 0 / 2 | B: numbers found after the name (line 268); check the size |
| Sam Adams® Winter Lager | 12 oz. | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 20 / 15 / 2 / 0 / 2 | B: numbers found after the name (line 269); check the size |
| Sam Adams® Winter Lager | 16 oz. | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 25 / 20 / 2 / 0 / 3 | B: numbers found after the name (line 270); check the size |
| Sam Adams® Winter Lager | 22 oz. | only in draft B | not found | 330 / 0 / 0 / 0 / 0 / 35 / 28 / 3 / 0 / 4 | B: numbers found after the name (line 271); check the size |
| Shiner Bock | 12 oz. | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 0 / 0 | B: numbers found after the name (line 272); check the size, mostly zeros: look |
| Shiner Bock | 16 oz. | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 0 / 0 | B: numbers found after the name (line 273); check the size, mostly zeros: look |
| Stella Artois® | 12 oz. | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 45 / 12 / 0 / 2 / 1 | B: numbers found after the name (line 274); check the size |
| Stella Artois® | 16 oz. | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 60 / 16 / 0 / 3 / 1 | B: numbers found after the name (line 275); check the size |
| Stella Artois® | 22 oz. | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 85 / 22 / 0 / 4 / 2 | B: numbers found after the name (line 276); check the size |
| Troeg Perpetual IPA | 16 oz. | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 0 / 20 / 0 / 0 / 0 | B: numbers found after the name (line 277); check the size, mostly zeros: look |
| Troeg Perpetual IPA | 22 oz. | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 0 / 28 / 0 / 0 / 0 | B: numbers found after the name (line 278); check the size, mostly zeros: look |
| Truly® Wild Berry Hard Seltzer™ | 12 oz. Can | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 279); check the size |
| Voodoo Ranger® Juicy Haze® IPA | 12 oz. | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 16 / 1 / 1 / 3 | B: numbers found after the name (line 280); check the size |
| Voodoo Ranger® Juicy Haze® IPA | 16 oz. | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 5 / 21 / 1 / 1 / 4 | B: numbers found after the name (line 281); check the size |
| Voodoo Ranger® Juicy Haze® IPA | 22 oz. | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 10 / 29 / 2 / 2 / 6 | B: numbers found after the name (line 282); check the size |
| Yuengling® Traditional Lager | 12 oz. | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 20 / 10 / 0 / 0 / 0 | B: numbers found after the name (line 283); check the size |
| Yuengling® Traditional Lager | 16 oz. | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 25 / 13 / 0 / 0 / 0 | B: numbers found after the name (line 284); check the size |
| Add Avocado | 1 serving | only in draft B | not found | 60 / 6 / 1 / 0 / 0 / 0 / 3 / 3 / 0 / 0 | B: numbers found after the name (line 490); check the size |
| Side Smashed Avocado | 1 serving | only in draft B | not found | 140 / 13 / 2 / 0 / 0 / 220 / 8 / 6 / 0 / 2 | B: numbers found after the name (line 491); check the size |
| Add Bacon | 1 serving | only in draft B | not found | 80 / 5 / 2 / 0 / 20 / 250 / 1 / 0 / 0 / 6 | B: numbers found after the name (line 492); check the size |
| Add Bacon Bits | 1 serving | only in draft B | not found | 70 / 4.5 / 1.5 / 0 / 20 / 210 / 1 / 0 / 1 / 6 | B: numbers found after the name (line 493); check the size |
| Bottomless Steak Fries® | per serving | only in draft B | not found | 350 / 16 / 2.5 / 0 / 0 / 380 / 48 / 5 / 0 / 5 | B: numbers found after the name (line 494); check the size |
| Bottomless Steak Fries® | 8oz | only in draft B | not found | 570 / 25 / 4.5 / 0 / 0 / 610 / 77 / 8 / 1 / 8 | B: numbers found after the name (line 495); check the size |
| Caramelized Onions | 1 serving | only in draft B | not found | 50 / 2.5 / 0.5 / 0 / 0 / 0 / 7 / 3 / 3 / 0 | B: numbers found after the name (line 496); check the size |
| Cheesy Bacon Fondue | 1 serving | only in draft B | not found | 340 / 26 / 15 / 1 / 85 / 900 / 10 / 0 / 6 / 16 | B: numbers found after the name (line 506); check the size |
| Coleslaw | 1 serving | only in draft B | not found | 180 / 12 / 2 / 0 / 10 / 660 / 16 / 3 / 9 / 2 | B: numbers found after the name (line 507); check the size |
| Cucumber Slices | three slices | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 508); check the size, mostly zeros: look |
| Fresh Jalapeño Slices | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 509); check the size, mostly zeros: look |
| Fried Egg | 1 serving | only in draft B | not found | 90 / 7 / 2 / 0 / 185 / 95 / 0 / 0 / 0 / 6 | B: numbers found after the name (line 510); check the size |
| Garlic Fries | 1 serving | only in draft B | not found | 430 / 23 / 7 / 0.5 / 20 / 500 / 50 / 5 / 2 / 8 | B: numbers found after the name (line 511); check the size |
| Garlic Parmesan Broccoli | 1 serving | only in draft B | not found | 80 / 4.5 / 2.5 / 0 / 10 / 130 / 7 / 3 / 2 / 5 | B: numbers found after the name (line 512); check the size |
| Green Chile side (New Mexico Only) | 1 serving | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 513); check the size, mostly zeros: look |
| Mayonnaise | 1oz | only in draft B | not found | 250 / 28 / 4.5 / 0 / 15 / 200 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 514); check the size |
| Onion Rings | 1 serving | only in draft B | not found | 280 / 1 / 0 / 0 / 5 / 1020 / 61 / 3 / 11 / 6 | B: numbers found after the name (line 515); check the size |
| Onion Straws | 1 serving | only in draft B | not found | 220 / 16 / 3 / 0 / 0 / 180 / 18 / 1 / 2 / 2 | B: numbers found after the name (line 516); check the size |
| Pickle Slices | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 230 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 517); check the size, mostly zeros: look |
| Red's Pickle Relish | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 500 / 22 / 0 / 20 / 0 | B: numbers found after the name (line 518); check the size |
| Sautéed Mushrooms | 1 serving | only in draft B | not found | 120 / 8 / 4.5 / 0 / 20 / 270 / 9 / 3 / 4 / 4 | B: numbers found after the name (line 519); check the size |
| Steamed Broccoli | 1 serving | only in draft B | not found | 30 / 0.5 / 0 / 0 / 0 / 30 / 6 / 3 / 2 / 3 | B: numbers found after the name (line 520); check the size |
| Tomato (two slices) | two slices | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 522); check the size, mostly zeros: look |
| Yellow Onion | 1 serving | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 1 / 0 | B: numbers found after the name (line 523); check the size |
| Yukon Chips | 1 serving | only in draft B | not found | 500 / 35 / 31 / 0 / 0 / 490 / 41 / 8 / 0 / 4 | B: numbers found after the name (line 524); check the size |
| Brioche | 1 serving | only in draft B | not found | 200 / 3 / 0.5 / 0 / 0 / 380 / 38 / 2 / 6 / 7 | B: numbers found after the name (line 530); check the size |
| Croissant | 1 serving | only in draft B | not found | 330 / 15 / 9 / 0.5 / 0 / 390 / 41 / 1 / 6 / 7 | B: numbers found after the name (line 531); check the size |
| Gluten Free | 1 serving | only in draft B | not found | 210 / 4.5 / 0 / 0 / 0 / 480 / 39 / 3 / 6 / 4 | B: numbers found after the name (line 532); check the size |
| Lettuce Wrap Your Burger | 1 serving | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 10 / 3 / 1 / 2 / 1 | B: numbers found after the name (line 533); check the size |
| Ancient-Grain Veggie/Vegan Patty | 1 serving | only in draft B | not found | 130 / 4 / 0.5 / 0 / 0 / 340 / 17 / 7 / 5 / 7 | B: numbers found after the name (line 539); check the size |
| Crispy Chicken Patty | 1 serving | only in draft B | not found | 440 / 27 / 5 / 0 / 85 / 670 / 17 / 0 / 0 / 31 | B: numbers found after the name (line 540); check the size |
| Grilled Chicken Patty | 1 serving | only in draft B | not found | 120 / 1 / 0.5 / 0 / 80 / 260 / 0 / 0 / 0 / 27 | B: numbers found after the name (line 541); check the size |
| Gourmet Burger Patty | 1 serving | only in draft B | not found | 340 / 26 / 11 / 1.5 / 95 / 85 / 3 / 0 / 0 / 23 | B: numbers found after the name (line 542); check the size |
| Impossible™ Burger Patty | 1 serving | only in draft B | not found | 240 / 14 / 8 / 0 / 0 / 370 / 11 / 5 / 0 / 19 | B: numbers found after the name (line 543); check the size |
| Tavern Patty | 1 serving | only in draft B | not found | 160 / 12 / 5 / 1 / 45 / 40 / 1 / 0 / 0 / 11 | B: numbers found after the name (line 544); check the size |
| Turkey Patty | 1 serving | only in draft B | not found | 250 / 16 / 4.5 / 0 / 100 / 570 / 1 / 0 / 0 / 25 | B: numbers found after the name (line 545); check the size |
| Salmon Fillet (Select Locations Only) | 1 serving | only in draft B | not found | 280 / 19 / 4.5 / 0 / 0 / 480 / 2 / 0 / 0 / 33 | B: numbers found after the name (line 546); check the size |
| American | two slices | only in draft B | not found | 110 / 10 / 6 / 0.5 / 30 / 570 / 2 / 0 / 1 / 5 | B: numbers found after the name (line 552); check the size |
| Bleu Cheese | crumbles | only in draft B | not found | 50 / 4 / 2.5 / 0 / 10 / 180 / 0 / 0 / 0 / 3 | B: numbers found after the name (line 553); check the size |
| Cheddar | one slice | only in draft B | not found | 110 / 9 / 5 / 0.5 / 30 / 180 / 0 / 0 / 0 / 7 | B: numbers found after the name (line 554); check the size |
| Pepper-Jack | one slice | only in draft B | not found | 100 / 8 / 5 / 0.5 / 25 / 190 / 0 / 0 / 0 / 7 | B: numbers found after the name (line 555); check the size |
| Provolone (Select Locations Only) | one slice | only in draft B | not found | 70 / 6 / 3.5 / 0 / 15 / 180 / 0 / 0 / 0 / 5 | B: numbers found after the name (line 556); check the size |
| Swiss | one slice | only in draft B | not found | 110 / 9 / 6 / 0.5 / 30 / 60 / 0 / 0 / 0 / 8 | B: numbers found after the name (line 557); check the size |
| Buzzard-Spicy Wing Sauce | 1 serving | only in draft B | not found | 140 / 16 / 7 / 0 / 0 / 1640 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 563); check the size |
| Campfire Mayo - Creamy BBQ | 1 serving | only in draft B | not found | 330 / 30 / 4.5 / 0 / 15 / 550 / 14 / 0 / 12 / 0 | B: numbers found after the name (line 564); check the size |
| Chipotle Aioli | 1 serving | only in draft B | not found | 430 / 47 / 7 / 0.5 / 25 / 430 / 2 / 0 / 2 / 0 | B: numbers found after the name (line 565); check the size |
| Heinz 57 | 2oz | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 720 / 16 / 0 / 16 / 0 | B: numbers found after the name (line 566); check the size |
| House-Made Salsa | 1 serving | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 260 / 3 / 0 / 2 / 0 | B: numbers found after the name (line 567); check the size |
| Island Heat Sauce | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 230 / 31 / 0 / 29 / 0 | B: numbers found after the name (line 568); check the size |
| Ranch | 1 serving | only in draft B | not found | 270 / 29 / 5 / 0 / 20 / 410 / 2 / 0 / 2 / 1 | B: numbers found after the name (line 479); check the size |
| Red's Secret Tavern Sauce™ | 1 serving | only in draft B | not found | 190 / 18 / 3 / 0.5 / 15 / 440 / 7 / 0 / 6 / 0 | B: numbers found after the name (line 570); check the size |
| Roasted Garlic Aioli | 1 serving | only in draft B | not found | 510 / 56 / 9 / 0.5 / 30 / 430 / 2 / 0 / 1 / 2 | B: numbers found after the name (line 571); check the size |
| Smoke & Pepper™ Ketchup | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 690 / 23 / 0 / 17 / 1 | B: numbers found after the name (line 581); check the size |
| Sweet & Spicy Ketchup | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 350 / 33 / 0 / 30 / 0 | B: numbers found after the name (line 582); check the size |
| Teriyaki Sauce | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 1130 / 24 / 0 / 20 / 2 | B: numbers found after the name (line 583); check the size |
| Whiskey River BBQ Sauce | 1 serving | only in draft B | not found | 130 / 0.5 / 0 / 0 / 0 / 800 / 31 / 1 / 28 / 1 | B: numbers found after the name (line 584); check the size |
| Carrots | 1 serving | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 30 / 4 / 1 / 2 / 0 | B: numbers found after the name (line 590); check the size |
| Chocolate Milk | 1 serving | only in draft B | not found | 200 / 2.5 / 1.5 / 0 / 10 / 125 / 36 / 1 / 32 / 9 | B: numbers found after the name (line 593); check the size |
| Cluck-A-Doodles | 3 pieces | only in draft B | not found | 540 / 29 / 5 / 0 / 60 / 1010 / 38 / 3 / 0 / 15 | B: numbers found after the name (line 594); check the size |
| Lil' Appetites Cluck-A-Doodles | 2 pieces | only in draft B | not found | 360 / 20 / 3.5 / 0 / 40 / 720 / 26 / 2 / 0 / 10 | B: numbers found after the name (line 595); check the size |
| Corn Doggies | 9 pieces | only in draft B | not found | 530 / 33 / 8 / 0 / 105 / 1250 / 43 / 2 / 7 / 16 | B: numbers found after the name (line 597); check the size |
| Lil' Appetites Corn Doggies | 6 pieces | only in draft B | not found | 350 / 22 / 5 / 0 / 70 / 830 / 29 / 1 / 5 / 10 | B: numbers found after the name (line 598); check the size |
| Grilled Cheesy (Select Locations Only) | 1 serving | only in draft B | not found | 340 / 27 / 11 / 0.5 / 45 / 1110 / 17 / 0 / 4 / 10 | B: numbers found after the name (line 599); check the size |
| Grilled Chicken Dip'Ns Plain | 1 serving | only in draft B | not found | 120 / 1 / 0.5 / 0 / 80 / 260 / 0 / 0 / 0 / 27 | B: numbers found after the name (line 600); check the size |
| Grilled Chicken Dip'Ns w/ BBQ Sauce | 1 serving | only in draft B | not found | 250 / 1.5 / 0.5 / 0 / 80 / 1060 / 32 / 2 / 28 / 28 | B: numbers found after the name (line 601); check the size |
| Grilled Chicken Dip'Ns w/ Ranch | 1 serving | only in draft B | not found | 390 / 30 / 5 / 0 / 100 / 670 / 3 / 0 / 2 / 28 | B: numbers found after the name (line 602); check the size |
| Grilled Chicken Dip'Ns w/ Teriyaki Sauce | 1 serving | only in draft B | not found | 220 / 1 / 0.5 / 0 / 80 / 1380 / 24 / 0 / 21 / 29 | B: numbers found after the name (line 603); check the size |
| Horizon Chocolate Milk Available only for the School Lunch Program | 1 serving | only in draft B | not found | 370 / 6 / 3.5 / 0 / 35 / 440 / 56 / 0 / 54 / 20 | B: numbers found after the name (line 604); check the size |
| Horizon Milk Available only for the School Lunch Program | 1 serving | only in draft B | not found | 270 / 6 / 3.5 / 0 / 25 / 320 / 10 / 0 / 29 / 20 | B: numbers found after the name (line 605); check the size |
| Apple Juice | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 10 / 19 / 0 / 18 / 0 | B: numbers found after the name (line 606); check the size |
| Orange Juice | 1 serving | only in draft B | not found | 80 / 0.5 / 0 / 0 / 0 / 0 / 19 / 0 / 16 / 1 | B: numbers found after the name (line 607); check the size |
| Pineapple Juice | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 15 / 26 / 0 / 26 / 0 | B: numbers found after the name (line 608); check the size |
| Mac It Yours | 1 serving | only in draft B | not found | 330 / 15 / 4 / 0.5 / 15 / 890 / 38 / 1 / 9 / 10 | B: numbers found after the name (line 609); check the size |
| Mandarin Oranges | 1 serving | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 0 / 7 / 0 / 6 / 0 | B: numbers found after the name (line 610); check the size |
| Milk | 1 serving | only in draft B | not found | 140 / 3.5 / 2 / 0 / 15 / 150 / 17 / 0 / 17 / 11 | B: numbers found after the name (line 611); check the size |
| Red's Cheeseburger Beef | 1 serving | only in draft B | not found | 380 / 20 / 8 / 11 / 60 / 800 / 32 / 0 / 5 / 20 | B: numbers found after the name (line 613); check the size |
| Red's Cheeseburger Chicken | 1 serving | only in draft B | not found | 340 / 9 / 3.5 / 10 / 95 / 1020 / 31 / 0 / 5 / 36 | B: numbers found after the name (line 614); check the size |
| Red's Cheeseburger Turkey | 1 serving | only in draft B | not found | 470 / 23 / 8 / 10 / 115 / 1330 / 32 / 0 / 5 / 33 | B: numbers found after the name (line 615); check the size |
| Red's Cheeseburger Veggie | 1 serving | only in draft B | not found | 350 / 12 / 3.5 / 10 / 15 / 1100 / 48 / 7 / 9 / 16 | B: numbers found after the name (line 616); check the size |
| Red's Burger Beef | 1 serving | only in draft B | not found | 320 / 15 / 5 / 11 / 45 / 360 / 29 / 0 / 3 / 17 | B: numbers found after the name (line 617); check the size |
| Red's Burger Chicken | 1 serving | only in draft B | not found | 280 / 3.5 / 0.5 / 10 / 80 / 580 / 29 / 0 / 4 / 33 | B: numbers found after the name (line 618); check the size |
| Red's Burger Turkey | 1 serving | only in draft B | not found | 410 / 18 / 4.5 / 10 / 100 / 890 / 29 / 0 / 3 / 31 | B: numbers found after the name (line 619); check the size |
| Red's Burger Veggie | 1 serving | only in draft B | not found | 290 / 7 / 0.5 / 10 / 0 / 660 / 45 / 7 / 8 / 13 | B: numbers found after the name (line 620); check the size |
| Side Salad' | 1 serving | only in draft B | not found | 350 / 31 / 5 / 0.5 / 25 / 520 / 18 / 0 / 16 / 1 | B: numbers found after the name (line 621); check the size |
| Steak Fries | 1 serving | only in draft B | not found | 210 / 9 / 1.5 / 0 / 0 / 230 / 29 / 3 / 0 / 3 | B: numbers found after the name (line 622); check the size |
| Sundae | 1 serving | only in draft B | not found | 310 / 7 / 70 / 0.5 / 20 / 45 / 58 / 1 / 42 / 6 | B: numbers found after the name (line 625); check the size |
| Malt (Homestyle Apple Pie Milkshake) | Monster | only in draft B | not found | 1070 / 41 / 25 / 1.5 / 150 / 480 / 156 / 2 / 126 / 21 | B: numbers found after the name (line 634); check the size |
| Malt (Homestyle Apple Pie Milkshake) | Kid | only in draft B | not found | 580 / 22 / 13 / 0.5 / 80 / 260 / 87 / 1 / 69 / 11 | B: numbers found after the name (line 635); check the size |
| Milkshake (Homestyle Apple Pie Milkshake) | Monster | only in draft B | not found | 1010 / 39 / 24 / 1.5 / 150 / 430 / 146 / 2 / 119 / 20 | B: numbers found after the name (line 636); check the size |
| Milkshake (Homestyle Apple Pie Milkshake) | Kid | only in draft B | not found | 550 / 21 / 13 / 0.5 / 80 / 240 / 81 / 0 / 65 / 10 | B: numbers found after the name (line 637); check the size |
| Make it boozy! Fireball Cinnamon Whiskey Shot® | 1 serving | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 0 / 4 / 0 / 4 / 0 | B: numbers found after the name (line 638); check the size |
| Malt (Chocolate) | Monster | only in draft B | not found | 1080 / 39 / 25 / 1.5 / 150 / 430 / 160 / 3 / 135 / 22 | B: numbers found after the name (line 639); check the size |
| Malt (Chocolate) | Kid | only in draft B | not found | 570 / 22 / 13 / 0.5 / 80 / 220 / 83 / 2 / 71 / 12 | B: numbers found after the name (line 640); check the size |
| Milkshake (Chocolate) | Monster | only in draft B | not found | 1020 / 38 / 24 / 1.5 / 145 / 380 / 150 / 3 / 128 / 21 | B: numbers found after the name (line 641); check the size |
| Milkshake (Chocolate) | Kid | only in draft B | not found | 540 / 21 / 13 / 0.5 / 80 / 200 / 77 / 1 / 66 / 11 | B: numbers found after the name (line 642); check the size |
| Malt (Oreo Cookie Magic) | Monster | only in draft B | not found | 1100 / 44 / 26 / 1.5 / 150 / 530 / 156 / 3 / 126 / 22 | B: numbers found after the name (line 643); check the size |
| Malt (Oreo Cookie Magic) | Kid | only in draft B | not found | 630 / 26 / 14 / 0.5 / 80 / 320 / 89 / 2 / 70 / 12 | B: numbers found after the name (line 644); check the size |
| Milkshake (Oreo Cookie Magic) | Monster | only in draft B | not found | 1040 / 43 / 25 / 1.5 / 145 / 480 / 146 / 2 / 118 / 21 | B: numbers found after the name (line 645); check the size |
| Milkshake (Oreo Cookie Magic) | Kid | only in draft B | not found | 600 / 25 / 14 / 0.5 / 80 / 290 / 83 / 1 / 65 / 11 | B: numbers found after the name (line 646); check the size |
| Malt (Strawberry) | Monster | only in draft B | not found | 990 / 39 / 25 / 1.5 / 150 / 400 / 140 / 2 / 124 / 22 | B: numbers found after the name (line 647); check the size |
| Malt (Strawberry) | Kid | only in draft B | not found | 550 / 22 / 13 / 0.5 / 80 / 200 / 78 / 1 / 70 / 11 | B: numbers found after the name (line 648); check the size |
| Milkshake (Strawberry) | Monster | only in draft B | not found | 930 / 38 / 24 / 1.5 / 145 / 350 / 130 / 2 / 116 / 20 | B: numbers found after the name (line 649); check the size |
| Milkshake (Strawberry) | Kid | only in draft B | not found | 510 / 21 / 13 / 0.5 / 80 / 180 / 72 / 1 / 65 / 10 | B: numbers found after the name (line 650); check the size |
| Malt (Vanilla) | Monster | only in draft B | not found | 1000 / 39 / 25 / 1.5 / 150 / 400 / 143 / 1 / 127 / 20 | B: numbers found after the name (line 660); check the size |
| Malt (Vanilla) | Kid | only in draft B | not found | 530 / 22 / 13 / 0.5 / 80 / 200 / 75 / 0 / 66 / 11 | B: numbers found after the name (line 661); check the size |
| Milkshake (Vanilla) | Monster | only in draft B | not found | 940 / 38 / 24 / 1.5 / 145 / 350 / 133 / 0 / 119 / 19 | B: numbers found after the name (line 662); check the size |
| Milkshake (Vanilla) | Kid | only in draft B | not found | 500 / 21 / 13 / 0.5 / 80 / 180 / 69 / 0 / 62 / 10 | B: numbers found after the name (line 663); check the size |
| Cinnamon Sugar Doh! Rings™ Tower | 1 serving | only in draft B | not found | 1550 / 51 / 31 / 0.5 / 10 / 1230 / 259 / 6 / 124 / 19 | B: numbers found after the name (line 669); check the size |
| Cinnamon Sugar Doh! Ring Shorty® | 1 serving | only in draft B | not found | 770 / 26 / 15 / 0.5 / 5 / 620 / 129 / 3 / 62 / 10 | B: numbers found after the name (line 670); check the size |
| Freckled Lemonade Cake | 1 serving | only in draft B | not found | 1060 / 46 / 30 / 1 / 255 / 430 / 152 / 2 / 126 / 11 | B: numbers found after the name (line 671); check the size |
| Lemonade with Sugar Free Peach Flavor | 1 serving | both read it the same, but its protein, carbs and fat make 136 kcal, not 110 | 110 / 0 / 0 / 0 / 0 / 15 / 34 / 0 / 28 / 0 | 110 / 0 / 0 / 0 / 0 / 15 / 34 / 0 / 28 / 0 | A: numbers found after the name (line 106); check the size; B: numbers found after the name (line 106); check the size |
| Lemonade with Sugar Free Raspberry Flavor | 1 serving | both read it the same, but its protein, carbs and fat make 136 kcal, not 110 | 110 / 0 / 0 / 0 / 0 / 15 / 34 / 0 / 28 / 0 | 110 / 0 / 0 / 0 / 0 / 15 / 34 / 0 / 28 / 0 | A: numbers found after the name (line 107); check the size; B: numbers found after the name (line 107); check the size |

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
