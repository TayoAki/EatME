# Captain D's Seafood Kitchen: lines for a person

Guide: https://www.captainds.com/wp-content/uploads/2026/03/Captain-Ds-Nutrition-and-Allergen-Chart_2026.02.18.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (109)

Fix each line in `menus/captain-ds-seafood-kitchen.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| American Cheese | 1 serving | the guide gives no fiber_g, sugars_g | 60 / 5 / 3.5 / – / 15 / 310 / 1 / – / – / 4 | 60 / 5 / 3.5 / – / 15 / 310 / 1 / – / – / 4 |
| Cocktail Sauce | 1 serving | the guide gives no fat_g, saturated_fat_g, fiber_g | 50 / – / – / – / – / 520 / 11 / – / 10 / 1 | 50 / – / – / – / – / 520 / 11 / – / 10 / 1 |
| Cracklins | 1 oz | the guide gives no fiber_g | 70 / 4 / 2 / 0 / 4 / 380 / 9 / – / 0 / 1 | 70 / 4 / 2 / 0 / 4 / 380 / 9 / – / 0 / 1 |
| D's Dippin' Sauce | 1 serving | the guide gives no fiber_g, protein_g | 140 / 14 / 2.5 / – / 10 / 320 / 3 / – / 2 / – | 140 / 14 / 2.5 / – / 10 / 320 / 3 / – / 2 / – |
| Fat-Free Italian Dressing | 1 oz pouch | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 10 / – / – / – / – / 440 / 2 / – / 1 / – | 10 / – / – / – / – / 440 / 2 / – / 1 / – |
| Grilled Shrimp | 1 serving | the guide gives no fiber_g | 100 / 2 / 1 / – / 95 / 470 / 1 / – / 0 / 12 | 100 / 2 / 1 / – / 95 / 470 / 1 / – / 0 / 12 |
| Honey Mustard Dressing | 1 oz pouch | the guide gives no fiber_g, protein_g | 160 / 16 / 2.5 / – / 15 / 130 / 4 / – / 4 / – | 160 / 16 / 2.5 / – / 15 / 130 / 4 / – / 4 / – |
| Hushpuppies | 1 serving | the guide gives no fiber_g | 80 / 4 / 2 / 0 / 10 / 200 / 9 / – / 1 / 1 | 80 / 4 / 2 / 0 / 10 / 200 / 9 / – / 1 / 1 |
| Ketchup | 1 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 30 / – / – / – / – / 270 / 9 / – / 6 / – | 30 / – / – / – / – / 270 / 9 / – / 6 / – |
| Mozzarella Sticks | 6 pcs | the guide gives no fiber_g | 420 / 31 / 14 / 1 / 35 / 910 / 24 / – / 2 / 12 | 420 / 31 / 14 / 1 / 35 / 910 / 24 / – / 2 / 12 |
| Popcorn Shrimp | 1 serving | the guide gives no sugars_g | 490 / 27 / 13 / 2 / 135 / 830 / 48 / 2 / – / 15 | 490 / 27 / 13 / 2 / 135 / 830 / 48 / 2 / – / 15 |
| Ranch Dressing | 1 oz pouch | the guide gives no fiber_g | 110 / 12 / 2 / – / 10 / 190 / 1 / – / 1 / 1 | 110 / 12 / 2 / – / 10 / 190 / 1 / – / 1 / 1 |
| Sweet and Sour Sauce | 1 serving | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 50 / – / – / – / – / 65 / 12 / – / 9 / – | 50 / – / – / – / – / 65 / 12 / – / 9 / – |
| Tartar Sauce | 1 serving | the guide gives no fiber_g, protein_g | 100 / 11 / 2 / – / 5 / 135 / 1 / – / 1 / – | 100 / 11 / 2 / – / 5 / 135 / 1 / – / 1 / – |
| Thousand Island Dressing | 1 oz pouch | the guide gives no fiber_g, protein_g | 120 / 11 / 1.5 / – / 10 / 320 / 5 / – / 5 / – | 120 / 11 / 1.5 / – / 10 / 320 / 5 / – / 5 / – |
| Funnel Cake Stix | 1 serving | the guide gives no fiber_g | 320 / 20 / 10 / 1 / 35 / 170 / 30 / – / 18 / 2 | 320 / 20 / 10 / 1 / 35 / 170 / 30 / – / 18 / 2 |
| Strawberry Topping | 1 fl oz | the guide gives no fat_g, saturated_fat_g, protein_g | 50 / – / – / – / – / 5 / 13 / 1 / 11 / – | 50 / – / – / – / – / 5 / 13 / 1 / 11 / – |
| Diet Pepsi | Large | the guide gives no fat_g, saturated_fat_g, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / 125 / – / – / – / – | 0 / – / – / – / – / 125 / – / – / – / – |
| Diet Pepsi | Medium | the guide gives no fat_g, saturated_fat_g, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / 95 / – / – / – / – | 0 / – / – / – / – / 95 / – / – / – / – |
| Diet Pepsi | Small | the guide gives no fat_g, saturated_fat_g, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / 60 / – / – / – / – | 0 / – / – / – / – / 60 / – / – / – / – |
| Dr. Pepper | Kids | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 150 / – / – / – / – / 60 / 40 / – / 38 / – | 150 / – / – / – / – / 60 / 40 / – / 38 / – |
| Dr. Pepper | Large | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 500 / – / – / – / – / 200 / 132 / – / 128 / – | 500 / – / – / – / – / 200 / 132 / – / 128 / – |
| Dr. Pepper | Medium | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 370 / – / – / – / – / 150 / 99 / – / 96 / – | 370 / – / – / – / – / 150 / 99 / – / 96 / – |
| Dr. Pepper | Small | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 250 / – / – / – / – / 100 / 66 / – / 64 / – | 250 / – / – / – / – / 100 / 66 / – / 64 / – |
| Lemonade | Kid's | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 160 / – / – / – / – / 95 / 38 / – / 38 / – | 160 / – / – / – / – / 95 / 38 / – / 38 / – |
| Lemonade | Large | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 520 / – / – / – / – / 320 / 126 / – / 126 / – | 520 / – / – / – / – / 320 / 126 / – / 126 / – |
| Lemonade | Medium | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 390 / – / – / – / – / 240 / 95 / – / 95 / – | 390 / – / – / – / – / 240 / 95 / – / 95 / – |
| Lemonade | Small | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 260 / – / – / – / – / 160 / 63 / – / 63 / – | 260 / – / – / – / – / 160 / 63 / – / 63 / – |
| Mug Root Beer | Kids | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 150 / – / – / – / – / 20 / 39 / – / 39 / – | 150 / – / – / – / – / 20 / 39 / – / 39 / – |
| Mug Root Beer | Large | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 500 / – / – / – / – / 75 / 130 / – / 130 / – | 500 / – / – / – / – / 75 / 130 / – / 130 / – |
| Mug Root Beer | Medium | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 380 / – / – / – / – / 55 / 98 / – / 98 / – | 380 / – / – / – / – / 55 / 98 / – / 98 / – |
| Mug Root Beer | Small | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 250 / – / – / – / – / 35 / 65 / – / 65 / – | 250 / – / – / – / – / 35 / 65 / – / 65 / – |
| Peach Smoothie | 1 serving | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 360 / – / – / – / – / 45 / 90 / – / 90 / – | 360 / – / – / – / – / 45 / 90 / – / 90 / – |
| Pepsi | Kids | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 150 / – / – / – / – / 30 / 42 / – / 42 / – | 150 / – / – / – / – / 30 / 42 / – / 42 / – |
| Pepsi | Large | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 500 / – / – / – / – / 100 / 140 / – / 140 / – | 500 / – / – / – / – / 100 / 140 / – / 140 / – |
| Pepsi | Medium | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 380 / – / – / – / – / 75 / 105 / – / 105 / – | 380 / – / – / – / – / 75 / 105 / – / 105 / – |
| Pepsi | Small | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 250 / – / – / – / – / 50 / 70 / – / 70 / – | 250 / – / – / – / – / 50 / 70 / – / 70 / – |
| Starry | Medium | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 360 / – / – / – / – / 85 / 97 / – / 97 / – | 360 / – / – / – / – / 85 / 97 / – / 97 / – |
| Strawberry Smoothie | 1 serving | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 300 / – / – / – / – / 55 / 75 / – / 75 / – | 300 / – / – / – / – / 55 / 75 / – / 75 / – |
| Sweet Tea | Gallon | only in draft A | 1740 / – / – / – / – / 135 / 450 / – / 449 / 0 | not found |
| Sweet Tea | Kids | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 140 / – / – / – / – / 10 / 37 / – / 37 / – | 140 / – / – / – / – / 10 / 37 / – / 37 / – |
| Sweet Tea | Large | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 480 / – / – / – / – / 35 / 124 / – / 123 / – | 480 / – / – / – / – / 35 / 124 / – / 123 / – |
| Sweet Tea | Medium | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 360 / – / – / – / – / 25 / 93 / – / 92 / – | 360 / – / – / – / – / 25 / 93 / – / 92 / – |
| Sweet Tea | Small | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 240 / – / – / – / – / 20 / 62 / – / 62 / – | 240 / – / – / – / – / 20 / 62 / – / 62 / – |
| Tropical Mango Smoothie | 1 serving | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 330 / – / – / – / – / 30 / 82 / – / 82 / – | 330 / – / – / – / – / 30 / 82 / – / 82 / – |
| Broccoli | 1 serving | differ: saturated_fat_g | 20 / 0 / – / – / – / 20 / 4 / 3 / 1 / 2 | 20 / 0 / 0 / – / – / 20 / 4 / 3 / 1 / 2 |
| Corn | 1 serving | the guide gives no saturated_fat_g, sodium_mg | 180 / 1.5 / – / – / – / – / 37 / 4 / 5 / 5 | 180 / 1.5 / – / – / – / – / 37 / 4 / 5 / 5 |
| French Fries | 1 serving | the guide gives no sugars_g | 330 / 22 / 10 / 1 / 20 / 400 / 28 / 3 / – / 3 | 330 / 22 / 10 / 1 / 20 / 400 / 28 / 3 / – / 3 |
| Mac & Cheese | 1 serving | the guide gives no fiber_g | 150 / 8 / 3.5 / 0 / 15 / 650 / 15 / – / 2 / 5 | 150 / 8 / 3.5 / 0 / 15 / 650 / 15 / – / 2 / 5 |
| Breaded Flounder | 1 serving | the guide gives no fiber_g, sugars_g | 240 / 15 / 7 / 1 / 50 / 440 / 10 / – / – / 15 | 240 / 15 / 7 / 1 / 50 / 440 / 10 / – / – / 15 |
| Grilled Alaska Salmon Cake | 1 serving | the guide gives no fiber_g | 270 / 23 / 3.5 / – / 30 / 630 / 7 / – / 3 / 8 | 270 / 23 / 3.5 / – / 30 / 630 / 7 / – / 3 / 8 |
| Add Old Bay Seasoning | 1 serving | the guide gives no fiber_g | 15 / 0 / 0 / – / – / 430 / 2 / – / 1 / 0 | 15 / 0 / 0 / – / – / 430 / 2 / – / 1 / 0 |
| 1 Pc Batter Dipped Fish | 1 pc | the guide gives no fiber_g | 230 / 15 / 8 / 1 / 50 / 600 / 13 / – / 0 / 10 | 230 / 15 / 8 / 1 / 50 / 600 / 13 / – / 0 / 10 |
| 1 Pc Chicken Tender | 1 pc | the guide gives no fiber_g | 190 / 10 / 5 / 0.5 / 45 / 670 / 16 / – / 0 / 11 | 190 / 10 / 5 / 0.5 / 45 / 670 / 16 / – / 0 / 11 |
| 2 Pc Chicken Tender | 2 pc | the guide gives no fiber_g | 390 / 19 / 10 / 1.5 / 85 / 1350 / 31 / – / 0 / 22 | 390 / 19 / 10 / 1.5 / 85 / 1350 / 31 / – / 0 / 22 |
| 5 Pc Butterfly Shrimp | 5 pc | the guide gives no fiber_g | 250 / 17 / 6 / 1 / 70 / 85 / 15 / – / 2 / 10 | 250 / 17 / 6 / 1 / 70 / 85 / 15 / – / 2 / 10 |
| 1 Pc Country-Style Fish | 1 pc | the guide gives no fiber_g | 190 / 12 / 6 / 1 / 40 / 520 / 13 / – / 0 / 9 | 190 / 12 / 6 / 1 / 40 / 520 / 13 / – / 0 / 9 |
| 2 Pc Batter Dipped Fish | 2 pc | the guide gives no fiber_g | 450 / 30 / 16 / 2 / 100 / 1200 / 26 / – / 0 / 21 | 450 / 30 / 16 / 2 / 100 / 1200 / 26 / – / 0 / 21 |
| 3 Pc Batter Dipped Fish | 3 pc | the guide gives no fiber_g | 680 / 45 / 24 / 3.5 / 145 / 1800 / 38 / – / 0 / 31 | 680 / 45 / 24 / 3.5 / 145 / 1800 / 38 / – / 0 / 31 |
| 3 Pc Country-Style Fish | 3 pc | the guide gives no fiber_g | 580 / 35 / 18 / 2.5 / 125 / 1570 / 38 / – / 0 / 28 | 580 / 35 / 18 / 2.5 / 125 / 1570 / 38 / – / 0 / 28 |
| 4 Pc Batter Dipped Fish | 4 pc | the guide gives no fiber_g | 910 / 61 / 31 / 4.5 / 195 / 2400 / 51 / – / 1 / 41 | 910 / 61 / 31 / 4.5 / 195 / 2400 / 51 / – / 1 / 41 |
| 10 Pc Grilled Shrimp | 10 pc | the guide gives no fiber_g | 90 / 1.5 / 0 / – / 150 / 800 / 2 / – / 0 / 16 | 90 / 1.5 / 0 / – / 150 / 800 / 2 / – / 0 / 16 |
| 12 Pc Butterfly Shrimp | 12 pc | the guide gives no fiber_g | 600 / 41 / 15 / 2 / 175 / 200 / 35 / – / 6 / 23 | 600 / 41 / 15 / 2 / 175 / 200 / 35 / – / 6 / 23 |
| Dozen Fried Oysters | 1 serving | the guide gives no sugars_g | 470 / 34 / 12 / 1 / 60 / 810 / 32 / 2 / – / 10 | 470 / 34 / 12 / 1 / 60 / 810 / 32 / 2 / – / 10 |
| Half Dozen Fried Oysters | Half Dozen | the guide gives no fiber_g, sugars_g | 240 / 17 / 6 / 0.5 / 30 / 400 / 16 / – / – / 5 | 240 / 17 / 6 / 0.5 / 30 / 400 / 16 / – / – / 5 |
| Cheesecake Slice (Test) | 1 serving | the guide gives no fiber_g | 320 / 19 / 9 / 0.5 / 45 / 260 / 32 / – / 22 / 5 | 320 / 19 / 9 / 0.5 / 45 / 260 / 32 / – / 22 / 5 |
| Fish & Chicken | 2 Pc | only in draft B | not found | 840 / 50 / 25 / 3.5 / 185 / 2550 / 57 / – / 1 / 43 |
| Chicken | 4 Pc | only in draft B | not found | 770 / 39 / 19 / 2.5 / 170 / 2700 / 62 / – / 1 / 44 |
| Deluxe Seafood Platter | 1 serving | only in draft B | not found | 1030 / 70 / 30 / 4 / 205 / 2000 / 65 / – / 3 / 38 |
| Fish & Butterfly Shrimp | 2 pc / 6 pc | only in draft B | not found | 530 / 36 / 15 / 2 / 135 / 700 / 30 / – / 3 / 22 |
| Popcorn Shrimp & Fish Meal | 1 serving | only in draft B | not found | 700 / 44 / 22 / 3 / 165 / 1620 / 50 / 1 / 0 / 28 |
| Supreme Sampler | 1 serving | only in draft B | not found | 1140 / 70 / 33 / 4.5 / 270 / 2650 / 74 / – / 4 / 54 |
| Giant Fish Sandwich | 1 serving | only in draft B | not found | 940 / 56 / 20 / 2 / 110 / 2010 / 81 / 2 / 11 / 30 |
| Mist Twist | Kids | only in draft B | not found | 150 / – / – / – / – / 30 / 40 / – / 40 / – |
| Mist Twist | Large | only in draft B | not found | 500 / – / – / – / – / 100 / 135 / – / 135 / – |
| Mist Twist | Medium | only in draft B | not found | 380 / – / – / – / – / 75 / 101 / – / 101 / – |
| Mist Twist | Small | only in draft B | not found | 250 / – / – / – / – / 50 / 67 / – / 67 / – |
| Mountain Dew | Kids | only in draft B | not found | 170 / – / – / – / – / 55 / 44 / – / 44 / – |
| Mountain Dew | Large | only in draft B | not found | 550 / – / – / – / – / 180 / 145 / – / 145 / – |
| Mountain Dew | Medium | only in draft B | not found | 410 / – / – / – / – / 130 / 109 / – / 109 / – |
| Mountain Dew | Small | only in draft B | not found | 270 / – / – / – / – / 85 / 72 / – / 72 / – |
| Mountain Dew Code Red | Kids | only in draft B | not found | 170 / – / – / – / – / 55 / 47 / – / 47 / – |
| Mountain Dew Code Red | Large | only in draft B | not found | 550 / – / – / – / – / 180 / 155 / – / 155 / – |
| Mountain Dew Code Red | Medium | only in draft B | not found | 410 / – / – / – / – / 130 / 116 / – / 116 / – |
| Mountain Dew Code Red | Small | only in draft B | not found | 280 / – / – / – / – / 90 / 78 / – / 78 / – |
| Catfish Meal (no sides) | 3 Pc | only in draft B | not found | 780 / 56 / 25 / 3 / 185 / 1770 / 36 / – / 0 / 33 |
| Southern Style White Fish Fillet | 1 piece | only in draft B | not found | 560 / 37 / 20 / 2.5 / 80 / 1430 / 28 / – / 0 / 27 |
| Southern-Style Fish Tenders | 1 piece | only in draft B | not found | 110 / 8 / 4 / 0.5 / 15 / 250 / 5 / – / 0 / 5 |
| Breadstick | 1 serving | only in draft B | not found | 150 / 5 / 2 / 0.5 / 2 / 150 / 22 / 1 / 3 / 3 |
| Grilled White Fish & Shrimp Skewer | 1 serving | only in draft B | not found | 240 / 6 / 3.5 / – / 140 / 1100 / 4 / – / 1 / 37 |
| Grilled White Fish Fillet | 1 serving | only in draft B | not found | 140 / 3.5 / 2.5 / – / 45 / 630 / 2 / – / 0 / 25 |
| Lemon Pepper White Fish | 1 serving | only in draft B | not found | 150 / 5 / 2.5 / – / 45 / 700 / 1 / – / 0 / 25 |
| Wild Alaskan Salmon | 1 serving | only in draft B | not found | 200 / 6 / 1 / 0 / 80 / 860 / 3 / – / 1 / 31 |
| Cajun Shrimp & Butterfly Shrimp | 6 Pc & 6 Pc | only in draft B | not found | 550 / 33 / 14 / 1.5 / 155 / 610 / 41 / – / 4 / 22 |
| Fish & Cajun Shrimp | 8 Pc | only in draft B | not found | 560 / 32 / 16 / 2 / 140 / 1280 / 44 / 1 / 1 / 24 |
| Fish, Shrimp & Crab Shell | 1 serving | only in draft B | not found | 570 / 38 / 16 / 2 / 120 / 1020 / 35 / – / 2 / 21 |
| The Sampler | 1 serving | only in draft B | not found | 760 / 45 / 21 / 3 / 180 / 2000 / 53 / – / 2 / 38 |
| Fish Meal | Two Pc | only in draft B | not found | 450 / 30 / 16 / 2 / 100 / 1200 / 26 / – / 0 / 21 |
| Fish (No Sides) | 2 Pc | only in draft B | not found | 450 / 30 / 16 / 2 / 100 / 1200 / 26 / – / 0 / 21 |
| Crispy Crunchy Shrimp & Fish Meal (No Sides) | 8 Pc & 2 Pc | only in draft B | not found | 1060 / 57 / 29 / 3.5 / 255 / 1270 / 65 / – / 7 / 36 |
| Add Crispy Crunch Shrimp | 4 | only in draft B | not found | 310 / 14 / 7 / 1 / 80 / 35 / 20 / – / 4 / 8 |
| Crispy Crunchy Shrimp & Fish (No Sides) | 1 serving | only in draft B | not found | 530 / 29 / 14 / 2 / 130 / 640 / 33 / – / 4 / 18 |
| Seafood Trio | 1 serving | only in draft B | not found | 520 / 35 / 15 / 2 / 105 / 1000 / 33 / – / 2 / 19 |
| Ultimate Seafood Platter w/Crispy Crunchy Shrimp | 1 serving | only in draft B | not found | 1290 / 77 / 36 / 4.5 / 265 / 2350 / 91 / 1 / 4 / 42 |
| Old Bay Crispy White Fish Meal Deal (No Sides) | 1 serving | only in draft B | not found | 490 / 31 / 16 / 2 / 70 / 820 / 25 / – / 1 / 28 |
| Old Bay Grilled White Fish Meal (No Sides, Rice, or Bread) | 1 serving | only in draft B | not found | 150 / 4 / 2.5 / – / 45 / 870 / 3 / – / 1 / 25 |
| Old Bay Popcorn Shrimp & Fish Meal (No Sides) | 2 Pc | only in draft B | not found | 700 / 44 / 22 / 3 / 165 / 1810 / 50 / 1 / 1 / 28 |
| Seafood Trio (No Sides) | 1 serving | only in draft B | not found | 520 / 35 / 15 / 2 / 105 / 1000 / 33 / – / 2 / 19 |
| Ultimate Seafood Platter (No Sides) | 1 serving | only in draft B | not found | 1230 / 80 / 36 / 4.5 / 260 / 2400 / 86 / 1 / 3 / 44 |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Old Bay French Fries | 1 serving | 330 / 22 / 10 / 1 / 20 / 650 / 29 / 3 / 1 / 3 |
| Baked Potato | 1 serving | 210 / 0 / 0 / – / – / 25 / 48 / 5 / 3 / 6 |
| Jalapeno Poppers | 1 serving | 510 / 36 / 20 / 2.5 / 60 / 920 / 40 / 5 / 6 / 6 |
