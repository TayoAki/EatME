# Dunkin': lines for a person

Guide: https://assets.ctfassets.net/ubkcphxhphh0/3qEP8wMU2IFmLsLyEeWLuc/7bdae361f785d1611d25c4d859f8c721/DD_W7_nutrition_guide.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (268)

Fix each line in `menus/dunkin.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Blackberry Tangerine Dunkin' Zero | Medium | only in draft A | 20 / 0 / 0 / 0 / 0 / 190 / 9 / 1 / 0 / 0 | not found |
| Blackberry Tangerine Dunkin' Zero | Small | only in draft A | 10 / 0 / 0 / 0 / 0 / 125 / 6 / 1 / 0 / 0 | not found |
| Brown Sugar Shakin' Espresso | 1 serving | only in draft A | 230 / 2.5 / 0 / 0 / 0 / 135 / 51 / 2 / 37 / 2 | not found |
| Shakin' Espresso | 1 serving | only in draft A | 120 / 6 / 3.5 / 0 / 20 / 110 / 11 / 0 / 9 / 6 | not found |
| Iced Coffee with AlmondMilk | Large | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 35 / 1 / 0 / 0 / 0 / 75 / 5 / 0 / 5 / 1 | 35 / 1 / 0 / 0 / 0 / 0 / 75 / 5 / 0 / 5 |
| Iced Coffee with AlmondMilk | Medium | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 25 / 0.5 / 0 / 0 / 0 / 50 / 4 / 0 / 3 / 1 | 25 / 0.5 / 0 / 0 / 0 / 0 / 50 / 4 / 0 / 3 |
| Iced Coffee with AlmondMilk | Small | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 15 / 0 / 0 / 0 / 0 / 30 / 2 / 0 / 2 / 0 | 15 / 0 / 0 / 0 / 0 / 0 / 30 / 2 / 0 / 2 |
| Iced Coffee with Cream | Large | differ: protein_g | 120 / 12 / 6 / 0 / 35 / 65 / 2 / 0 / 0 / 2 | 120 / 12 / 6 / 0 / 35 / 65 / 2 / 0 / 0 / 0 |
| Iced Coffee with Cream | Small | differ: sugars_g, protein_g | 60 / 6 / 3 / 0 / 20 / 30 / 1 / 0 / 1 / 0 | 60 / 6 / 3 / 0 / 20 / 30 / 1 / 0 / 0 / 1 |
| Iced Coffee with Oatmilk | Small | differ: protein_g | 15 / 0 / 0 / 0 / 0 / 25 / 3 / 0 / 1 / 0 | 15 / 0 / 0 / 0 / 0 / 25 / 3 / 0 / 1 / 1 |
| Iced Coffee with Whole Milk | Large | differ: sugars_g | 40 / 2 / 1 / 0 / 5 / 45 / 3 / 0 / 3 / 3 | 40 / 2 / 1 / 0 / 5 / 45 / 3 / 0 / 0 / 3 |
| Iced Coffee with Whole Milk | Medium | differ: sugars_g | 30 / 1.5 / 1 / 0 / 5 / 35 / 2 / 0 / 2 / 2 | 30 / 1.5 / 1 / 0 / 5 / 35 / 2 / 0 / 0 / 2 |
| Iced Coffee with Whole Milk | Small | differ: sugars_g | 20 / 1 / 0.5 / 0 / 5 / 25 / 1 / 0 / 1 / 1 | 20 / 1 / 0.5 / 0 / 5 / 25 / 1 / 0 / 0 / 1 |
| Iced Coffee with Whole Milk and Sugar | Large | differ: sugars_g | 180 / 2 / 1 / 0 / 5 / 45 / 38 / 0 / 38 / 3 | 180 / 2 / 1 / 0 / 5 / 45 / 38 / 0 / 35 / 3 |
| Iced Coffee with Whole Milk and Sugar | Medium | differ: sugars_g | 130 / 1.5 / 1 / 0 / 5 / 35 / 28 / 0 / 28 / 2 | 130 / 1.5 / 1 / 0 / 5 / 35 / 28 / 0 / 26 / 2 |
| Iced Coffee with Whole Milk and Sugar | Small | differ: sugars_g | 90 / 1 / 0.5 / 0 / 5 / 25 / 19 / 0 / 19 / 1 | 90 / 1 / 0.5 / 0 / 5 / 25 / 19 / 0 / 17 / 1 |
| Almond Protein Matcha Hot Latte | Large | only in draft B | not found | 340 / 8 / 4.5 / 0 / 40 / 180 / 45 / 2 / 42 / 21 |
| Almond Protein Matcha Hot Latte | Medium | only in draft B | not found | 260 / 6 / 3.5 / 0 / 30 / 135 / 34 / 1 / 31 / 15 |
| Almond Protein Matcha Hot Latte | Small | only in draft B | not found | 170 / 4 / 2.5 / 0 / 20 / 90 / 23 / 1 / 21 / 10 |
| Almond Protein Matcha Iced Latte | Large | only in draft B | not found | 340 / 8 / 4.5 / 0 / 40 / 190 / 45 / 2 / 42 / 21 |
| Almond Protein Matcha Iced Latte | Medium | only in draft B | not found | 260 / 6 / 3.5 / 0 / 30 / 140 / 34 / 1 / 31 / 15 |
| Almond Protein Matcha Iced Latte | Small | only in draft B | not found | 170 / 4 / 2.5 / 0 / 20 / 95 / 23 / 1 / 21 / 10 |
| Mango Protein Daydream Refresher | Large | only in draft B | not found | 440 / 10 / 6 / 0 / 45 / 170 / 73 / 0 / 68 / 15 |
| Mango Protein Daydream Refresher | Medium | only in draft B | not found | 320 / 7 / 4 / 0 / 30 / 120 / 52 / 0 / 49 / 11 |
| Mango Protein Daydream Refresher | Small | only in draft B | not found | 240 / 5 / 3.5 / 0 / 25 / 85 / 38 / 0 / 36 / 8 |
| Mango Protein Refresher | Large | only in draft B | not found | 390 / 8 / 4.5 / 0 / 40 / 200 / 60 / 0 / 56 / 19 |
| Mango Protein Refresher | Medium | only in draft B | not found | 300 / 6 / 3.5 / 0 / 30 / 150 / 45 / 0 / 42 / 15 |
| Mango Protein Refresher | Small | only in draft B | not found | 200 / 4 / 2.5 / 0 / 20 / 100 / 30 / 0 / 28 / 10 |
| Nutty Pumpkin Protein Iced Latte | Large | only in draft B | not found | 460 / 8 / 5 / 0 / 40 / 310 / 71 / 0 / 66 / 23 |
| Nutty Pumpkin Protein Iced Latte | Medium | only in draft B | not found | 340 / 6 / 3.5 / 0 / 30 / 230 / 53 / 0 / 49 / 17 |
| Nutty Pumpkin Protein Iced Latte | Small | only in draft B | not found | 230 / 4 / 2.5 / 0 / 20 / 160 / 36 / 0 / 33 / 11 |
| Protein Hot Latte | Large | only in draft B | not found | 230 / 8 / 4.5 / 0 / 40 / 190 / 19 / 0 / 17 / 20 |
| Protein Hot Latte | Medium | only in draft B | not found | 170 / 6 / 3.5 / 0 / 30 / 140 / 14 / 0 / 13 / 15 |
| Protein Hot Latte | Small | only in draft B | not found | 110 / 4 / 2.5 / 0 / 20 / 95 / 10 / 0 / 8 / 10 |
| Protein Hot Latte with Sugar Free Vanilla | Large | only in draft B | not found | 230 / 8 / 4.5 / 0 / 40 / 200 / 25 / 0 / 17 / 20 |
| Protein Hot Latte with Sugar Free Vanilla | Medium | only in draft B | not found | 170 / 6 / 3.5 / 0 / 30 / 150 / 18 / 0 / 13 / 15 |
| Protein Hot Latte with Sugar Free Vanilla | Small | only in draft B | not found | 120 / 4 / 2.5 / 0 / 20 / 100 / 12 / 0 / 8 / 10 |
| Protein Iced Latte | Large | only in draft B | not found | 230 / 8 / 4.5 / 0 / 40 / 210 / 19 / 0 / 17 / 20 |
| Protein Iced Latte | Medium | only in draft B | not found | 170 / 6 / 3.5 / 0 / 30 / 150 / 14 / 0 / 13 / 15 |
| Protein Iced Latte | Small | only in draft B | not found | 110 / 4 / 2.5 / 0 / 20 / 105 / 10 / 0 / 8 / 10 |
| Protein Iced Latte with Sugar Free Vanilla | Large | only in draft B | not found | 230 / 8 / 4.5 / 0 / 40 / 210 / 25 / 0 / 17 / 20 |
| Protein Iced Latte with Sugar Free Vanilla | Medium | only in draft B | not found | 170 / 6 / 3.5 / 0 / 30 / 150 / 18 / 0 / 13 / 15 |
| Protein Iced Latte with Sugar Free Vanilla | Small | only in draft B | not found | 120 / 4 / 2.5 / 0 / 20 / 105 / 12 / 0 / 8 / 10 |
| Protein Matcha Hot Latte | Large | only in draft B | not found | 330 / 8 / 4.5 / 0 / 40 / 180 / 45 / 2 / 42 / 21 |
| Protein Matcha Hot Latte | Medium | only in draft B | not found | 250 / 6 / 3.5 / 0 / 30 / 135 / 33 / 1 / 31 / 15 |
| Protein Matcha Hot Latte | Small | only in draft B | not found | 170 / 4 / 2.5 / 0 / 20 / 90 / 22 / 1 / 21 / 10 |
| Protein Matcha Iced Latte | Large | only in draft B | not found | 330 / 8 / 4.5 / 0 / 40 / 190 / 45 / 2 / 42 / 21 |
| Protein Matcha Iced Latte | Medium | only in draft B | not found | 250 / 6 / 3.5 / 0 / 30 / 150 / 33 / 1 / 31 / 15 |
| Protein Matcha Iced Latte | Small | only in draft B | not found | 170 / 4 / 2.5 / 0 / 20 / 95 / 22 / 1 / 21 / 10 |
| Strawberry Protein Daydream Refresher | Large | only in draft B | not found | 440 / 10 / 6 / 0 / 45 / 160 / 69 / 0 / 66 / 15 |
| Strawberry Protein Daydream Refresher | Medium | only in draft B | not found | 310 / 7 / 4 / 0 / 30 / 115 / 49 / 0 / 47 / 11 |
| Strawberry Protein Daydream Refresher | Small | only in draft B | not found | 230 / 5 / 3.5 / 0 / 25 / 85 / 36 / 0 / 35 / 8 |
| Strawberry Protein Refresher | Large | only in draft B | not found | 390 / 8 / 4.5 / 0 / 40 / 200 / 57 / 0 / 53 / 19 |
| Strawberry Protein Refresher | Medium | only in draft B | not found | 290 / 6 / 3.5 / 0 / 30 / 150 / 42 / 0 / 40 / 15 |
| Strawberry Protein Refresher | Small | only in draft B | not found | 190 / 4 / 2.5 / 0 / 20 / 100 / 28 / 0 / 27 / 10 |
| Tiramisu Protein Iced Latte | Large | only in draft B | not found | 450 / 8 / 4.5 / 0 / 40 / 290 / 70 / 0 / 64 / 23 |
| Tiramisu Protein Iced Latte | Medium | only in draft B | not found | 330 / 6 / 3.5 / 0 / 30 / 210 / 52 / 0 / 48 / 17 |
| Tiramisu Protein Iced Latte | Small | only in draft B | not found | 220 / 4 / 2.5 / 0 / 20 / 140 / 35 / 0 / 32 / 12 |
| Blushpop Dunkin' Zero | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 190 / 9 / 0 / 0 / 0 |
| Blushpop Dunkin' Zero | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 125 / 6 / 0 / 0 / 0 |
| Blushpop Dunkin' Zero | Large | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 250 / 12 / 0 / 0 / 0 |
| Candy Kiss Dunkin' Zero | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 190 / 9 / 0 / 0 / 0 |
| Candy Kiss Dunkin' Zero | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 125 / 6 / 0 / 0 / 0 |
| Glamberry Dunkin' Zero | Large | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 250 / 12 / 1 / 0 / 0 |
| Glamberry Dunkin' Zero | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 190 / 9 / 1 / 0 / 0 |
| Glamberry Dunkin' Zero | Small | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 125 / 6 / 1 / 0 / 0 |
| Green Apple Dunkin' Zero | Large | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 250 / 12 / 0 / 0 / 0 |
| Green Apple Dunkin' Zero | Medium | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 190 / 9 / 0 / 0 / 0 |
| Green Apple Dunkin' Zero | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 125 / 6 / 0 / 0 / 0 |
| Juicy Peach Dunkin' Zero | Large | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 250 / 11 / 1 / 1 / 0 |
| Juicy Peach Dunkin' Zero | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 190 / 8 / 1 / 0 / 0 |
| Juicy Peach Dunkin' Zero | Small | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 125 / 6 / 1 / 0 / 0 |
| Midnight Apple Dunkin' Zero | Large | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 250 / 12 / 0 / 0 / 0 |
| Midnight Apple Dunkin' Zero | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 190 / 9 / 0 / 0 / 0 |
| Midnight Apple Dunkin' Zero | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 125 / 6 / 0 / 0 / 0 |
| Orchard Twist Dunkin' Zero | Large | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 250 / 11 / 0 / 0 / 0 |
| Orchard Twist Dunkin' Zero | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 190 / 9 / 0 / 0 / 0 |
| Orchard Twist Dunkin' Zero | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 125 / 6 / 0 / 0 / 0 |
| Sunzest Dunkin' Zero | Large | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 250 / 11 / 0 / 0 / 0 |
| Sunzest Dunkin' Zero | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 190 / 9 / 0 / 0 / 0 |
| Sunzest Dunkin' Zero | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 125 / 6 / 0 / 0 / 0 |
| Tropical Mango Dunkin' Zero | Large | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 250 / 12 / 0 / 0 / 0 |
| Tropical Mango Dunkin' Zero | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 190 / 9 / 0 / 0 / 0 |
| Tropical Mango Dunkin' Zero | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 125 / 6 / 0 / 0 / 0 |
| Chocolate Hazelnut Truffle Iced Coffee | Medium | only in draft B | not found | 250 / 9 / 5 / 0 / 25 / 70 / 40 / 2 / 35 / 3 |
| Chocolate Hazelnut Truffle Iced Coffee | Small | only in draft B | not found | 170 / 6 / 3.5 / 0 / 20 / 45 / 26 / 1 / 24 / 2 |
| Nutty Nightmare Iced Coffee | Medium | only in draft B | not found | 260 / 9 / 4.5 / 0 / 30 / 110 / 40 / 0 / 37 / 4 |
| Nutty Nightmare Iced Coffee | Small | only in draft B | not found | 170 / 6 / 3 / 0 / 20 / 75 / 26 / 0 / 25 / 3 |
| Nutty Pumpkin Iced Coffee | Medium | only in draft B | not found | 260 / 9 / 4.5 / 0 / 30 / 130 / 39 / 0 / 38 / 4 |
| Nutty Pumpkin Iced Coffee | Small | only in draft B | not found | 170 / 6 / 3 / 0 / 20 / 90 / 26 / 0 / 25 / 3 |
| Toffee Nut Iced Coffee | Medium | only in draft B | not found | 260 / 9 / 4.5 / 0 / 30 / 95 / 40 / 0 / 40 / 4 |
| Toffee Nut Iced Coffee | Small | only in draft B | not found | 170 / 6 / 3 / 0 / 20 / 65 / 27 / 0 / 26 / 3 |
| Pumpkin Cloud Dunkalatte | Large | only in draft B | not found | 750 / 18 / 10 / 0 / 60 / 480 / 129 / 0 / 125 / 20 |
| Pumpkin Cloud Dunkalatte | Medium | only in draft B | not found | 550 / 13 / 7 / 0 / 40 / 360 / 94 / 0 / 91 / 15 |
| Pumpkin Cloud Dunkalatte | Small | only in draft B | not found | 390 / 9 / 6 / 0 / 30 / 240 / 66 / 0 / 65 / 10 |
| Pumpkin Patch Cloud Latte | Large | only in draft B | not found | 580 / 17 / 10 / 0 / 55 / 320 / 88 / 0 / 85 / 17 |
| Pumpkin Patch Cloud Latte | Medium | only in draft B | not found | 420 / 12 / 7 / 0 / 40 / 230 / 63 / 0 / 61 / 12 |
| Pumpkin Patch Cloud Latte | Small | only in draft B | not found | 310 / 9 / 5 / 0 / 30 / 160 / 46 / 0 / 45 / 9 |
| Pumpkin Spice Iced Signature Latte | Large | only in draft B | not found | 540 / 17 / 10 / 0.5 / 55 / 310 / 77 / 0 / 71 / 16 |
| Pumpkin Spice Iced Signature Latte | Medium | only in draft B | not found | 420 / 14 / 8 / 0 / 45 / 230 / 59 / 0 / 55 / 12 |
| Pumpkin Spice Iced Signature Latte | Small | only in draft B | not found | 310 / 11 / 6 / 0 / 35 / 160 / 42 / 0 / 38 / 8 |
| Terror-Misu Cloud Latte | Large | only in draft B | not found | 800 / 37 / 9 / 0 / 40 / 310 / 100 / 0 / 95 / 16 |
| Terror-Misu Cloud Latte | Medium | only in draft B | not found | 580 / 26 / 7 / 0 / 30 / 230 / 73 / 0 / 69 / 12 |
| Terror-Misu Cloud Latte | Small | only in draft B | not found | 470 / 23 / 5 / 0 / 20 / 160 / 56 / 0 / 53 / 8 |
| Toasted Almond Iced Dunkalatte | Large | only in draft B | not found | 420 / 13 / 7 / 0 / 40 / 350 / 61 / 0 / 58 / 15 |
| Toasted Almond Iced Dunkalatte | Medium | only in draft B | not found | 310 / 10 / 5 / 0 / 30 / 260 / 46 / 0 / 43 / 11 |
| Toasted Almond Iced Dunkalatte | Small | only in draft B | not found | 210 / 6 / 3.5 / 0 / 20 / 170 / 30 / 0 / 29 / 8 |
| Butter Pecan Swirl Coffee Chiller with Cream | Large | only in draft B | not found | 940 / 35 / 18 / 1 / 110 / 460 / 145 / 0 / 123 / 9 |
| Butter Pecan Swirl Coffee Chiller with Cream | Medium | only in draft B | not found | 700 / 26 / 14 / 1 / 80 / 340 / 109 / 0 / 92 / 7 |
| Butter Pecan Swirl Coffee Chiller with Cream | Small | only in draft B | not found | 470 / 17 / 9 / 0.5 / 55 / 230 / 73 / 0 / 62 / 5 |
| Butter Pecan Swirl Coffee Chiller with Skim Milk | Large | only in draft B | not found | 650 / 0 / 0 / 0 / 5 / 410 / 149 / 0 / 127 / 10 |
| Butter Pecan Swirl Coffee Chiller with Skim Milk | Medium | only in draft B | not found | 490 / 0 / 0 / 0 / 5 / 300 / 112 / 0 / 95 / 8 |
| Butter Pecan Swirl Coffee Chiller with Skim Milk | Small | only in draft B | not found | 330 / 0 / 0 / 0 / 0 / 200 / 75 / 0 / 64 / 5 |
| Butter Pecan Swirl Coffee Chiller with Whole Milk | Large | only in draft B | not found | 700 / 6 / 3.5 / 0 / 20 / 410 / 149 / 0 / 127 / 10 |
| Butter Pecan Swirl Coffee Chiller with Whole Milk | Medium | only in draft B | not found | 530 / 4.5 / 2.5 / 0 / 15 / 310 / 112 / 0 / 95 / 7 |
| Butter Pecan Swirl Coffee Chiller with Whole Milk | Small | only in draft B | not found | 350 / 3 / 1.5 / 0 / 10 / 200 / 75 / 0 / 63 / 5 |
| Caramel Creme Coffee Chiller | Large | only in draft B | not found | 1020 / 39 / 23 / 1.5 / 130 / 280 / 155 / 0 / 131 / 10 |
| Caramel Creme Coffee Chiller | Medium | only in draft B | not found | 770 / 30 / 17 / 1 / 95 / 210 / 117 / 0 / 99 / 7 |
| Caramel Creme Coffee Chiller | Small | only in draft B | not found | 540 / 21 / 13 / 0.5 / 70 / 140 / 80 / 0 / 68 / 5 |
| Coffee Chiller | Large | only in draft B | not found | 720 / 35 / 18 / 1 / 105 / 200 / 95 / 0 / 75 / 6 |
| Coffee Chiller | Medium | only in draft B | not found | 540 / 26 / 14 / 1 / 80 / 150 / 71 / 0 / 56 / 5 |
| Coffee Chiller | Small | only in draft B | not found | 360 / 17 / 9 / 0.5 / 55 / 100 / 48 / 0 / 37 / 3 |
| Coffee Chiller with Almondmilk | Large | only in draft B | not found | 430 / 2 / 0 / 0 / 0 / 200 / 99 / 0 / 79 / 2 |
| Coffee Chiller with Almondmilk | Medium | only in draft B | not found | 330 / 1.5 / 0 / 0 / 0 / 150 / 74 / 0 / 59 / 1 |
| Coffee Chiller with Almondmilk | Small | only in draft B | not found | 220 / 1 / 0 / 0 / 0 / 100 / 50 / 0 / 39 / 1 |
| Coffee Chiller with Cream | Large | only in draft B | not found | 720 / 35 / 18 / 1 / 105 / 200 / 95 / 0 / 75 / 6 |
| Coffee Chiller with Cream | Medium | only in draft B | not found | 540 / 26 / 14 / 1 / 80 / 150 / 71 / 0 / 56 / 5 |
| Coffee Chiller with Cream | Small | only in draft B | not found | 390 / 17 / 9 / 0.5 / 55 / 100 / 57 / 0 / 54 / 3 |
| Coffee Chiller with Skim Milk | Large | only in draft B | not found | 500 / 0 / 0 / 0 / 5 / 150 / 117 / 0 / 112 / 8 |
| Coffee Chiller with Skim Milk | Medium | only in draft B | not found | 370 / 0 / 0 / 0 / 5 / 115 / 88 / 0 / 84 / 6 |
| Coffee Chiller with Skim Milk | Small | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 75 / 59 / 0 / 56 / 4 |
| Coffee Chiller with Whole Milk | Large | only in draft B | not found | 550 / 6 / 3.5 / 0 / 20 / 150 / 117 / 0 / 111 / 7 |
| Coffee Chiller with Whole Milk | Medium | only in draft B | not found | 410 / 4.5 / 2.5 / 0 / 15 / 115 / 88 / 0 / 84 / 5 |
| Coffee Chiller with Whole Milk | Small | only in draft B | not found | 270 / 3 / 1.5 / 0 / 10 / 75 / 58 / 0 / 56 / 4 |
| French Vanilla Swirl Coffee Chiller with Cream | Large | only in draft B | not found | 1000 / 35 / 18 / 1 / 110 / 260 / 163 / 0 / 156 / 9 |
| French Vanilla Swirl Coffee Chiller with Cream | Medium | only in draft B | not found | 750 / 26 / 14 / 1 / 85 / 200 / 123 / 0 / 117 / 7 |
| French Vanilla Swirl Coffee Chiller with Cream | Small | only in draft B | not found | 500 / 17 / 9 / 0.5 / 55 / 130 / 82 / 0 / 78 / 5 |
| French Vanilla Swirl Coffee Chiller with Skim Milk | Large | only in draft B | not found | 710 / 0 / 0 / 0 / 10 / 210 / 167 / 0 / 160 / 10 |
| French Vanilla Swirl Coffee Chiller with Skim Milk | Medium | only in draft B | not found | 540 / 0 / 0 / 0 / 5 / 160 / 126 / 0 / 120 / 8 |
| French Vanilla Swirl Coffee Chiller with Skim Milk | Small | only in draft B | not found | 360 / 0 / 0 / 0 / 5 / 105 / 84 / 0 / 80 / 5 |
| French Vanilla Swirl Coffee Chiller with Whole Milk | Large | only in draft B | not found | 760 / 6 / 3.5 / 0 / 25 / 210 / 167 / 0 / 160 / 10 |
| French Vanilla Swirl Coffee Chiller with Whole Milk | Medium | only in draft B | not found | 570 / 4.5 / 2.5 / 0 / 15 / 160 / 125 / 0 / 120 / 7 |
| French Vanilla Swirl Coffee Chiller with Whole Milk | Small | only in draft B | not found | 380 / 3 / 1.5 / 0 / 10 / 105 / 84 / 0 / 80 / 5 |
| Mocha Swirl Coffee Chiller with Cream | Large | only in draft B | not found | 990 / 35 / 19 / 1 / 105 / 240 / 163 / 2 / 153 / 8 |
| Mocha Swirl Coffee Chiller with Cream | Medium | only in draft B | not found | 740 / 27 / 14 / 1 / 80 / 180 / 122 / 2 / 115 / 6 |
| Mocha Swirl Coffee Chiller with Cream | Small | only in draft B | not found | 490 / 18 / 9 / 0.5 / 55 / 120 / 81 / 1 / 76 / 4 |
| Mocha Swirl Coffee Chiller with Skim Milk | Large | only in draft B | not found | 700 / 1 / 0.5 / 0 / 5 / 190 / 167 / 2 / 157 / 9 |
| Mocha Swirl Coffee Chiller with Skim Milk | Medium | only in draft B | not found | 530 / 0.5 / 0 / 0 / 5 / 140 / 125 / 2 / 118 / 7 |
| Mocha Swirl Coffee Chiller with Skim Milk | Small | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 95 / 83 / 1 / 78 / 5 |
| Mocha Swirl Coffee Chiller with Whole Milk | Large | only in draft B | not found | 750 / 7 / 4 / 0 / 20 / 190 / 167 / 2 / 156 / 9 |
| Mocha Swirl Coffee Chiller with Whole Milk | Medium | only in draft B | not found | 570 / 5 / 3 / 0 / 15 / 140 / 125 / 2 / 117 / 6 |
| Mocha Swirl Coffee Chiller with Whole Milk | Small | only in draft B | not found | 380 / 3.5 / 2 / 0 / 10 / 95 / 83 / 1 / 78 / 4 |
| Triple Mocha Coffee Chiller | Large | only in draft B | not found | 1000 / 40 / 23 / 1.5 / 125 / 250 / 153 / 2 / 125 / 8 |
| Triple Mocha Coffee Chiller | Medium | only in draft B | not found | 770 / 31 / 18 / 1 / 95 / 190 / 116 / 2 / 95 / 6 |
| Triple Mocha Coffee Chiller | Small | only in draft B | not found | 530 / 22 / 13 / 0.5 / 70 / 130 / 80 / 1 / 65 / 5 |
| Hot Coffee with AlmondMilk | Extra Large | only in draft B | not found | 45 / 1.5 / 0 / 0 / 0 / 85 / 7 / 0 / 7 / 1 |
| Hot Coffee with AlmondMilk | Large | only in draft B | not found | 35 / 1 / 0 / 0 / 0 / 65 / 5 / 0 / 5 / 1 |
| Hot Coffee with AlmondMilk | Medium | only in draft B | not found | 25 / 0.5 / 0 / 0 / 0 / 45 / 4 / 0 / 3 / 1 |
| Hot Coffee with AlmondMilk | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 25 / 2 / 0 / 2 / 0 |
| Hot Coffee with Cream | XL | only in draft B | not found | 150 / 15 / 8 / 0 / 45 / 65 / 2 / 0 / 2 / 3 |
| Hot Coffee with Cream | Large | only in draft B | not found | 120 / 12 / 6 / 0 / 35 / 55 / 2 / 0 / 2 / 2 |
| Hot Coffee with Cream | Medium | only in draft B | not found | 90 / 9 / 4.5 / 0 / 25 / 40 / 1 / 0 / 1 / 2 |
| Hot Coffee with Cream | Small | only in draft B | not found | 60 / 6 / 3 / 0 / 20 / 30 / 1 / 0 / 1 / 1 |
| Hot Coffee with Cream and Sugar | XL | only in draft B | not found | 320 / 15 / 8 / 0 / 45 / 65 / 46 / 0 / 46 / 3 |
| Hot Coffee with Cream and Sugar | Large | only in draft B | not found | 260 / 12 / 6 / 0 / 35 / 55 / 37 / 0 / 36 / 2 |
| Hot Coffee with Cream and Sugar | Medium | only in draft B | not found | 190 / 9 / 4.5 / 0 / 25 / 40 / 27 / 0 / 27 / 2 |
| Hot Coffee with Cream and Sugar | Small | only in draft B | not found | 130 / 6 / 3 / 0 / 20 / 30 / 18 / 0 / 18 / 1 |
| Hot Coffee with Oatmilk | XL | only in draft B | not found | 60 / 1.5 / 0 / 0 / 0 / 65 / 10 / 1 / 2 / 1 |
| Hot Coffee with Oatmilk | Large | only in draft B | not found | 45 / 1.5 / 0 / 0 / 0 / 50 / 8 / 1 / 2 / 1 |
| Hot Coffee with Oatmilk | Medium | only in draft B | not found | 30 / 1 / 0 / 0 / 0 / 35 / 5 / 1 / 1 / 1 |
| Hot Coffee with Oatmilk | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 20 / 3 / 0 / 1 / 1 |
| Hot Coffee with Skim Milk | Extra Large | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 45 / 4 / 0 / 4 / 3 |
| Hot Coffee with Skim Milk | Large | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 35 / 3 / 0 / 3 / 3 |
| Hot Coffee with Skim Milk | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 25 / 2 / 0 / 2 / 2 |
| Hot Coffee with Skim Milk | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 20 / 2 / 0 / 2 / 1 |
| Hot Coffee with Skim Milk and Sugar | XL | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 45 / 47 / 0 / 47 / 3 |
| Hot Coffee with Skim Milk and Sugar | Large | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 35 / 38 / 0 / 38 / 3 |
| Hot Coffee with Skim Milk and Sugar | Medium | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 25 / 28 / 0 / 28 / 2 |
| Hot Coffee with Skim Milk and Sugar | Small | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 19 / 0 / 19 / 1 |
| Hot Coffee with Sugar | XL | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 15 / 44 / 0 / 43 / 1 |
| Hot Coffee with Sugar | Large | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 10 / 35 / 0 / 35 / 1 |
| Hot Coffee with Sugar | Medium | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 10 / 26 / 0 / 26 / 1 |
| Hot Coffee with Sugar | Small | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 5 / 17 / 0 / 17 / 0 |
| Hot Coffee with Whole Milk | XL | only in draft B | not found | 50 / 2.5 / 1.5 / 0 / 10 / 45 / 4 / 0 / 4 / 3 |
| Hot Coffee with Whole Milk | Large | only in draft B | not found | 40 / 2 / 1 / 0 / 5 / 35 / 3 / 0 / 3 / 2 |
| Hot Coffee with Whole Milk | Medium | only in draft B | not found | 30 / 1.5 / 1 / 0 / 5 / 25 / 2 / 0 / 2 / 2 |
| Hot Coffee with Whole Milk | Small | only in draft B | not found | 20 / 1 / 0.5 / 0 / 5 / 20 / 1 / 0 / 1 / 1 |
| Hot Coffee with Whole Milk and Sugar | XLarge | only in draft B | not found | 220 / 2.5 / 1.5 / 0 / 10 / 45 / 47 / 0 / 47 / 3 |
| Hot Coffee with Whole Milk and Sugar | Large | only in draft B | not found | 190 / 2 / 1 / 0 / 5 / 35 / 42 / 0 / 42 / 2 |
| Hot Coffee with Whole Milk and Sugar | Medium | only in draft B | not found | 130 / 1.5 / 1 / 0 / 5 / 30 / 28 / 0 / 28 / 2 |
| Hot Coffee with Whole Milk and Sugar | Small | only in draft B | not found | 90 / 1 / 0.5 / 0 / 5 / 20 / 19 / 0 / 19 / 1 |
| Mocha Swirl Hot Coffee | Extra Large | only in draft B | not found | 260 / 1 / 0.5 / 0 / 0 / 45 / 63 / 3 / 57 / 3 |
| Mocha Swirl Hot Coffee | Large | only in draft B | not found | 210 / 1 / 0 / 0 / 0 / 40 / 50 / 2 / 46 / 2 |
| Mocha Swirl Hot Coffee | Medium | only in draft B | not found | 160 / 0.5 / 0 / 0 / 0 / 30 / 38 / 2 / 34 / 2 |
| Mocha Swirl Hot Coffee | Small | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 20 / 25 / 1 / 23 / 1 |
| Mocha Swirl Hot Coffee with Cream | Extra Large | only in draft B | not found | 410 / 15 / 8 / 0 / 45 / 100 / 65 / 3 / 59 / 5 |
| Mocha Swirl Hot Coffee with Cream | Large | only in draft B | not found | 330 / 12 / 7 / 0 / 35 / 80 / 52 / 2 / 47 / 4 |
| Mocha Swirl Hot Coffee with Cream | Medium | only in draft B | not found | 240 / 9 / 5 / 0 / 25 / 60 / 39 / 2 / 35 / 3 |
| Mocha Swirl Hot Coffee with Cream | Small | only in draft B | not found | 160 / 6 / 3.5 / 0 / 20 / 40 / 26 / 1 / 24 / 2 |
| Butter Pecan Swirl Hot Latte with Skim Milk | Large | only in draft B | not found | 350 / 0.5 / 0 / 0 / 10 / 420 / 70 / 0 / 66 / 16 |
| Butter Pecan Swirl Hot Latte with Skim Milk | Medium | only in draft B | not found | 260 / 0 / 0 / 0 / 5 / 320 / 52 / 0 / 50 / 12 |
| Butter Pecan Swirl Hot Latte with Skim Milk | Small | only in draft B | not found | 170 / 0 / 0 / 0 / 5 / 210 / 35 / 0 / 33 / 8 |
| Butter Pecan Swirl Hot Latte with Whole Milk | Large | only in draft B | not found | 450 / 12 / 7 / 0 / 40 / 430 / 69 / 0 / 66 / 15 |
| Butter Pecan Swirl Hot Latte with Whole Milk | Medium | only in draft B | not found | 330 / 9 / 5 / 0 / 30 / 320 / 52 / 0 / 49 / 11 |
| Butter Pecan Swirl Hot Latte with Whole Milk | Small | only in draft B | not found | 220 / 6 / 3.5 / 0 / 20 / 210 / 35 / 0 / 33 / 7 |
| Caramel Craze Signature Hot Latte with Skim Milk | Large | only in draft B | not found | 440 / 6 / 3.5 / 0 / 30 / 240 / 80 / 0 / 75 / 16 |
| Caramel Craze Signature Hot Latte with Skim Milk | Medium | only in draft B | not found | 340 / 5 / 3 / 0 / 25 / 180 / 61 / 0 / 57 / 12 |
| Caramel Craze Signature Hot Latte with Skim Milk | Small | only in draft B | not found | 250 / 5 / 3 / 0 / 20 / 125 / 43 / 0 / 40 / 8 |
| Caramel Craze Signature Hot Latte with Whole Milk | Large | only in draft B | not found | 530 / 17 / 10 / 0.5 / 60 / 250 / 79 / 0 / 74 / 15 |
| Caramel Craze Signature Hot Latte with Whole Milk | Medium | only in draft B | not found | 410 / 14 / 8 / 0 / 45 / 190 / 61 / 0 / 57 / 11 |
| Caramel Craze Signature Hot Latte with Whole Milk | Small | only in draft B | not found | 300 / 11 / 6 / 0 / 35 / 130 / 43 / 0 / 39 / 8 |
| Caramel Swirl Hot Latte with Skim Milk | Large | only in draft B | not found | 350 / 0 / 0 / 0 / 10 / 230 / 71 / 0 / 69 / 15 |
| Caramel Swirl Hot Latte with Skim Milk | Medium | only in draft B | not found | 260 / 0 / 0 / 0 / 10 / 170 / 53 / 0 / 52 / 11 |
| Caramel Swirl Hot Latte with Skim Milk | Small | only in draft B | not found | 180 / 0 / 0 / 0 / 5 / 115 / 36 / 0 / 35 / 8 |
| Caramel Swirl Hot Latte with Whole Milk | Large | only in draft B | not found | 450 / 12 / 7 / 0 / 40 / 240 / 70 / 0 / 69 / 14 |
| Caramel Swirl Hot Latte with Whole Milk | Medium | only in draft B | not found | 340 / 9 / 5 / 0 / 30 / 180 / 53 / 0 / 52 / 11 |
| Caramel Swirl Hot Latte with Whole Milk | Small | only in draft B | not found | 230 / 6 / 3.5 / 0 / 20 / 120 / 35 / 0 / 34 / 7 |
| Chai Hot Latte with Skim Milk | Large | only in draft B | not found | 290 / 0.5 / 0 / 0 / 5 / 200 / 58 / 2 / 54 / 13 |
| Chai Hot Latte with Skim Milk | Medium | only in draft B | not found | 220 / 0 / 0 / 0 / 5 / 150 / 44 / 2 / 41 / 10 |
| Chai Hot Latte with Skim Milk | Small | only in draft B | not found | 150 / 0 / 0 / 0 / 5 / 100 / 29 / 1 / 27 / 7 |
| Chai Hot Latte with Whole Milk | Large | only in draft B | not found | 390 / 12 / 7 / 0 / 35 / 200 / 57 / 2 / 54 / 12 |
| Chai Hot Latte with Whole Milk | Medium | only in draft B | not found | 290 / 9 / 5 / 0 / 25 / 150 / 43 / 2 / 40 / 9 |
| Chai Hot Latte with Whole Milk | Small | only in draft B | not found | 200 / 6 / 3.5 / 0 / 20 / 100 / 29 / 1 / 27 / 6 |
| Cocoa Mocha Signature Hot Latte with Skim Milk | Large | only in draft B | not found | 420 / 6 / 4 / 0 / 25 / 210 / 79 / 2 / 69 / 15 |
| Cocoa Mocha Signature Hot Latte with Skim Milk | Medium | only in draft B | not found | 330 / 6 / 3.5 / 0 / 20 / 160 / 61 / 2 / 53 / 11 |
| Cocoa Mocha Signature Hot Latte with Skim Milk | Small | only in draft B | not found | 250 / 5 / 3.5 / 0 / 20 / 110 / 43 / 1 / 37 / 8 |
| Cocoa Mocha Signature Hot Latte with Whole Milk | Large | only in draft B | not found | 520 / 18 / 11 / 0.5 / 55 / 210 / 78 / 2 / 68 / 14 |
| Cocoa Mocha Signature Hot Latte with Whole Milk | Medium | only in draft B | not found | 400 / 14 / 9 / 0 / 45 / 160 / 60 / 2 / 52 / 10 |
| Cocoa Mocha Signature Hot Latte with Whole Milk | Small | only in draft B | not found | 300 / 11 / 7 / 0 / 35 / 110 / 43 / 1 / 36 / 7 |
| French Vanilla Swirl Hot Latte with Skim Milk | Large | only in draft B | not found | 350 / 0 / 0 / 0 / 10 / 220 / 71 / 0 / 67 / 15 |
| French Vanilla Swirl Hot Latte with Skim Milk | Medium | only in draft B | not found | 260 / 0 / 0 / 0 / 10 / 170 / 53 / 0 / 50 / 11 |
| French Vanilla Swirl Hot Latte with Skim Milk | Small | only in draft B | not found | 170 / 0 / 0 / 0 / 5 / 110 / 35 / 0 / 33 / 7 |
| French Vanilla Swirl Hot Latte with Whole Milk | Large | only in draft B | not found | 450 / 12 / 7 / 0 / 40 / 230 / 70 / 0 / 66 / 14 |
| French Vanilla Swirl Hot Latte with Whole Milk | Medium | only in draft B | not found | 330 / 9 / 5 / 0 / 30 / 170 / 52 / 0 / 50 / 11 |
| French Vanilla Swirl Hot Latte with Whole Milk | Small | only in draft B | not found | 220 / 6 / 3.5 / 0 / 20 / 115 / 35 / 0 / 33 / 7 |
| Hot Latte with AlmondMilk | Large | only in draft B | not found | 130 / 3.5 / 0 / 0 / 0 / 240 / 23 / 1 / 20 / 2 |
| Hot Latte with AlmondMilk | Medium | only in draft B | not found | 100 / 3 / 0 / 0 / 0 / 180 / 17 / 1 / 15 / 1 |
| Hot Latte with AlmondMilk | Small | only in draft B | not found | 70 / 2 / 0 / 0 / 0 / 120 / 11 / 0 / 10 / 1 |
| Hot Latte with Oatmilk | Large | only in draft B | not found | 180 / 5 / 1 / 0 / 0 / 180 / 32 / 4 / 7 / 3 |
| Hot Latte with Oatmilk | Medium | only in draft B | not found | 130 / 4 / 0.5 / 0 / 0 / 135 / 24 / 3 / 5 / 2 |
| Hot Latte with Oatmilk | Small | only in draft B | not found | 90 / 2.5 / 0 / 0 / 0 / 90 / 16 / 2 / 4 / 1 |
| Hot Latte with Skim Milk | Large | only in draft B | not found | 130 / 0 / 0 / 0 / 5 / 170 / 20 / 0 / 18 / 12 |
| Hot Latte with Skim Milk | Medium | only in draft B | not found | 100 / 0 / 0 / 0 / 5 / 125 / 15 / 0 / 14 / 9 |
| Hot Latte with Skim Milk | Small | only in draft B | not found | 70 / 0 / 0 / 0 / 5 / 85 / 10 / 0 / 9 / 6 |
| Hot Latte with Skim Milk and Sugar | Large | only in draft B | not found | 270 / 0 / 0 / 0 / 5 / 170 / 54 / 0 / 53 / 12 |
| Hot Latte with Skim Milk and Sugar | Medium | only in draft B | not found | 200 / 0 / 0 / 0 / 5 / 125 / 41 / 0 / 40 / 9 |
| Hot Latte with Skim Milk and Sugar | Small | only in draft B | not found | 130 / 0 / 0 / 0 / 5 / 85 / 27 / 0 / 26 / 6 |
| Hot Latte with Whole Milk | Large | only in draft B | not found | 230 / 12 / 7 / 0 / 35 / 170 / 19 / 0 / 18 / 12 |
| Hot Latte with Whole Milk | Medium | only in draft B | not found | 170 / 9 / 5 / 0 / 25 / 125 / 14 / 0 / 13 / 9 |
| Hot Latte with Whole Milk | Small | only in draft B | not found | 120 / 6 / 3.5 / 0 / 20 / 85 / 9 / 0 / 9 / 6 |
| Hot Latte with Whole Milk and Sugar | Large | only in draft B | not found | 370 / 12 / 7 / 0 / 35 / 170 / 54 / 0 / 52 / 12 |
| Hot Latte with Whole Milk and Sugar | Medium | only in draft B | not found | 270 / 9 / 5 / 0 / 25 / 125 / 40 / 0 / 39 / 9 |
| Hot Latte with Whole Milk and Sugar | Small | only in draft B | not found | 180 / 6 / 3.5 / 0 / 20 / 85 / 27 / 0 / 26 / 6 |
| Matcha Hot Latte with Skim Milk | Large | only in draft B | not found | 240 / 0 / 0 / 0 / 5 / 150 / 45 / 2 / 43 / 14 |
| Matcha Hot Latte with Skim Milk | Medium | only in draft B | not found | 180 / 0 / 0 / 0 / 5 / 115 / 34 / 1 / 32 / 11 |
| Matcha Hot Latte with Skim Milk | Small | only in draft B | not found | 120 / 0 / 0 / 0 / 5 / 75 / 23 / 1 / 22 / 7 |
| Matcha Hot Latte with Whole Milk | Large | only in draft B | not found | 340 / 12 / 7 / 0 / 35 / 160 / 44 / 2 / 43 / 13 |
| Matcha Hot Latte with Whole Milk | Medium | only in draft B | not found | 250 / 9 / 5 / 0 / 25 / 120 / 33 / 1 / 32 / 10 |
| Matcha Hot Latte with Whole Milk | Small | only in draft B | not found | 170 / 6 / 3.5 / 0 / 20 / 80 / 22 / 1 / 21 / 7 |
| Mocha Swirl Hot Latte with Skim Milk | Large | only in draft B | not found | 340 / 1 / 0.5 / 0 / 5 / 200 / 70 / 2 / 64 / 14 |
| Mocha Swirl Hot Latte with Skim Milk | Medium | only in draft B | not found | 250 / 1 / 0.5 / 0 / 5 / 150 / 52 / 2 / 48 / 10 |
| Mocha Swirl Hot Latte with Skim Milk | Small | only in draft B | not found | 170 / 0.5 / 0 / 0 / 5 / 100 / 35 / 1 / 32 / 7 |
| Mocha Swirl Hot Latte with Whole Milk | Large | only in draft B | not found | 440 / 13 / 7 / 0 / 35 / 200 / 69 / 2 / 63 / 13 |
| Mocha Swirl Hot Latte with Whole Milk | Medium | only in draft B | not found | 330 / 10 / 6 / 0 / 25 / 150 / 52 / 2 / 47 / 10 |
| Mocha Swirl Hot Latte with Whole Milk | Small | only in draft B | not found | 220 / 6 / 3.5 / 0 / 20 / 100 / 35 / 1 / 32 / 7 |
| Butter Pecan Swirl Hot Macchiato with Skim Milk | Large | only in draft B | not found | 310 / 0 / 0 / 0 / 5 / 380 / 64 / 0 / 60 / 12 |
| Butter Pecan Swirl Hot Macchiato with Skim Milk | Medium | only in draft B | not found | 230 / 0 / 0 / 0 / 5 / 280 / 48 / 0 / 45 / 9 |
| Butter Pecan Swirl Hot Macchiato with Skim Milk | Small | only in draft B | not found | 160 / 0 / 0 / 0 / 5 / 190 / 33 / 0 / 30 / 6 |

## Spot check (15 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Cappuccino with Whole Milk and Sugar | Medium | 220 / 6 / 3.5 / 0 / 20 / 85 / 36 / 0 / 35 / 6 |
| Iced Dunkalatte | Large | 410 / 13 / 7 / 0 / 40 / 350 / 60 / 0 / 58 / 15 |
| Sugared Donut | 1 Donut | 210 / 11 / 4.5 / 0 / 0 / 270 / 24 / 1 / 5 / 4 |
| Caramel Swirl Hot Coffee with Black | Extra Large | 280 / 0 / 0 / 0 / 5 / 95 / 64 / 0 / 64 / 4 |
| Mocha Swirl Hot Macchiato with Skim Milk | Large | 300 / 1 / 0.5 / 0 / 5 / 150 / 65 / 2 / 58 / 10 |
| Frozen Chai Latte | Small | 350 / 6 / 3.5 / 0 / 20 / 110 / 66 / 1 / 64 / 6 |
| French Vanilla Swirl Iced Coffee with Cream | Large | 340 / 12 / 6 / 0 / 40 / 120 / 53 / 0 / 50 / 5 |
| French Vanilla Swirl Iced Cappuccino with Skim Milk | Small | 150 / 0 / 0 / 0 / 5 / 95 / 32 / 0 / 30 / 5 |
| Chocolate Dipped French Cruller | 1 Donut | 280 / 15 / 7 / 0 / 50 / 150 / 33 / 0 / 20 / 3 |
| Caramel Swirl Frozen Chocolate | Large | 900 / 17 / 12 / 0 / 40 / 380 / 176 / 1 / 165 / 11 |
| Iced Tea Lemonade | Small | 80 / 0 / 0 / 0 / 0 / 15 / 19 / 0 / 18 / 0 |
| Caramel Swirl Hot Coffee with Cream | Extra Large | 420 / 15 / 8 / 0 / 50 / 150 / 67 / 0 / 66 / 6 |
| Blue Raspberry Coolatta® | Small | 230 / 0 / 0 / 0 / 0 / 30 / 56 / 0 / 55 / 0 |
| Iced Cappuccino with Whole Milk | Small | 80 / 4 / 2.5 / 0 / 10 / 65 / 7 / 0 / 6 / 4 |
| Almondmilk Iced Matcha Latte | Small | 120 / 2 / 0 / 0 / 0 / 120 / 24 / 1 / 22 / 2 |
