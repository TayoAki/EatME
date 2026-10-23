# Dunkin': lines for a person

Guide: https://assets.ctfassets.net/ubkcphxhphh0/3qEP8wMU2IFmLsLyEeWLuc/7bdae361f785d1611d25c4d859f8c721/DD_W7_nutrition_guide.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (268)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/dunkin.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Blackberry Tangerine Dunkin' Zero | Medium | only in draft A | 20 / 0 / 0 / 0 / 0 / 190 / 9 / 1 / 0 / 0 | not found | A: numbers found after the name (line 155); check the size |
| Blackberry Tangerine Dunkin' Zero | Small | only in draft A | 10 / 0 / 0 / 0 / 0 / 125 / 6 / 1 / 0 / 0 | not found | A: numbers found after the name (line 155); check the size |
| Brown Sugar Shakin' Espresso | 1 serving | only in draft A | 230 / 2.5 / 0 / 0 / 0 / 135 / 51 / 2 / 37 / 2 | not found | A: numbers found after the name (line 223); check the size |
| Shakin' Espresso | 1 serving | only in draft A | 120 / 6 / 3.5 / 0 / 20 / 110 / 11 / 0 / 9 / 6 | not found | A: numbers found after the name (line 226); check the size |
| Iced Coffee with AlmondMilk | Large | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 35 / 1 / 0 / 0 / 0 / 75 / 5 / 0 / 5 / 1 | 35 / 1 / 0 / 0 / 0 / 0 / 75 / 5 / 0 / 5 | A: numbers found after the name (line 944); check the size; B: numbers found after the name (line 944); check the size |
| Iced Coffee with AlmondMilk | Medium | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 25 / 0.5 / 0 / 0 / 0 / 50 / 4 / 0 / 3 / 1 | 25 / 0.5 / 0 / 0 / 0 / 0 / 50 / 4 / 0 / 3 | A: numbers found after the name (line 945); check the size; B: numbers found after the name (line 945); check the size |
| Iced Coffee with AlmondMilk | Small | differ: sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 15 / 0 / 0 / 0 / 0 / 30 / 2 / 0 / 2 / 0 | 15 / 0 / 0 / 0 / 0 / 0 / 30 / 2 / 0 / 2 | A: numbers found after the name (line 946); check the size; B: numbers found after the name (line 946); check the size |
| Iced Coffee with Cream | Large | differ: protein_g | 120 / 12 / 6 / 0 / 35 / 65 / 2 / 0 / 0 / 2 | 120 / 12 / 6 / 0 / 35 / 65 / 2 / 0 / 0 / 0 | A: numbers found after the name (line 947); check the size; B: numbers found after the name (line 947); check the size |
| Iced Coffee with Cream | Small | differ: sugars_g, protein_g | 60 / 6 / 3 / 0 / 20 / 30 / 1 / 0 / 1 / 0 | 60 / 6 / 3 / 0 / 20 / 30 / 1 / 0 / 0 / 1 | A: numbers found after the name (line 949); check the size; B: numbers found after the name (line 949); check the size |
| Iced Coffee with Oatmilk | Small | differ: protein_g | 15 / 0 / 0 / 0 / 0 / 25 / 3 / 0 / 1 / 0 | 15 / 0 / 0 / 0 / 0 / 25 / 3 / 0 / 1 / 1 | A: numbers found after the name (line 955); check the size; B: numbers found after the name (line 955); check the size |
| Iced Coffee with Whole Milk | Large | differ: sugars_g | 40 / 2 / 1 / 0 / 5 / 45 / 3 / 0 / 3 / 3 | 40 / 2 / 1 / 0 / 5 / 45 / 3 / 0 / 0 / 3 | A: numbers found after the name (line 965); check the size; B: numbers found after the name (line 965); check the size |
| Iced Coffee with Whole Milk | Medium | differ: sugars_g | 30 / 1.5 / 1 / 0 / 5 / 35 / 2 / 0 / 2 / 2 | 30 / 1.5 / 1 / 0 / 5 / 35 / 2 / 0 / 0 / 2 | A: numbers found after the name (line 966); check the size; B: numbers found after the name (line 966); check the size |
| Iced Coffee with Whole Milk | Small | differ: sugars_g | 20 / 1 / 0.5 / 0 / 5 / 25 / 1 / 0 / 1 / 1 | 20 / 1 / 0.5 / 0 / 5 / 25 / 1 / 0 / 0 / 1 | A: numbers found after the name (line 967); check the size; B: numbers found after the name (line 967); check the size |
| Iced Coffee with Whole Milk and Sugar | Large | differ: sugars_g | 180 / 2 / 1 / 0 / 5 / 45 / 38 / 0 / 38 / 3 | 180 / 2 / 1 / 0 / 5 / 45 / 38 / 0 / 35 / 3 | A: numbers found after the name (line 968); check the size; B: numbers found after the name (line 968); check the size |
| Iced Coffee with Whole Milk and Sugar | Medium | differ: sugars_g | 130 / 1.5 / 1 / 0 / 5 / 35 / 28 / 0 / 28 / 2 | 130 / 1.5 / 1 / 0 / 5 / 35 / 28 / 0 / 26 / 2 | A: numbers found after the name (line 969); check the size; B: numbers found after the name (line 969); check the size |
| Iced Coffee with Whole Milk and Sugar | Small | differ: sugars_g | 90 / 1 / 0.5 / 0 / 5 / 25 / 19 / 0 / 19 / 1 | 90 / 1 / 0.5 / 0 / 5 / 25 / 19 / 0 / 17 / 1 | A: numbers found after the name (line 970); check the size; B: numbers found after the name (line 970); check the size |
| Almond Protein Matcha Hot Latte | Large | only in draft B | not found | 340 / 8 / 4.5 / 0 / 40 / 180 / 45 / 2 / 42 / 21 | B: numbers found after the name (line 77); check the size |
| Almond Protein Matcha Hot Latte | Medium | only in draft B | not found | 260 / 6 / 3.5 / 0 / 30 / 135 / 34 / 1 / 31 / 15 | B: numbers found after the name (line 78); check the size |
| Almond Protein Matcha Hot Latte | Small | only in draft B | not found | 170 / 4 / 2.5 / 0 / 20 / 90 / 23 / 1 / 21 / 10 | B: numbers found after the name (line 79); check the size |
| Almond Protein Matcha Iced Latte | Large | only in draft B | not found | 340 / 8 / 4.5 / 0 / 40 / 190 / 45 / 2 / 42 / 21 | B: numbers found after the name (line 80); check the size |
| Almond Protein Matcha Iced Latte | Medium | only in draft B | not found | 260 / 6 / 3.5 / 0 / 30 / 140 / 34 / 1 / 31 / 15 | B: numbers found after the name (line 81); check the size |
| Almond Protein Matcha Iced Latte | Small | only in draft B | not found | 170 / 4 / 2.5 / 0 / 20 / 95 / 23 / 1 / 21 / 10 | B: numbers found after the name (line 82); check the size |
| Mango Protein Daydream Refresher | Large | only in draft B | not found | 440 / 10 / 6 / 0 / 45 / 170 / 73 / 0 / 68 / 15 | B: numbers found after the name (line 83); check the size |
| Mango Protein Daydream Refresher | Medium | only in draft B | not found | 320 / 7 / 4 / 0 / 30 / 120 / 52 / 0 / 49 / 11 | B: numbers found after the name (line 84); check the size |
| Mango Protein Daydream Refresher | Small | only in draft B | not found | 240 / 5 / 3.5 / 0 / 25 / 85 / 38 / 0 / 36 / 8 | B: numbers found after the name (line 85); check the size |
| Mango Protein Refresher | Large | only in draft B | not found | 390 / 8 / 4.5 / 0 / 40 / 200 / 60 / 0 / 56 / 19 | B: numbers found after the name (line 86); check the size |
| Mango Protein Refresher | Medium | only in draft B | not found | 300 / 6 / 3.5 / 0 / 30 / 150 / 45 / 0 / 42 / 15 | B: numbers found after the name (line 87); check the size |
| Mango Protein Refresher | Small | only in draft B | not found | 200 / 4 / 2.5 / 0 / 20 / 100 / 30 / 0 / 28 / 10 | B: numbers found after the name (line 88); check the size |
| Nutty Pumpkin Protein Iced Latte | Large | only in draft B | not found | 460 / 8 / 5 / 0 / 40 / 310 / 71 / 0 / 66 / 23 | B: numbers found after the name (line 89); check the size |
| Nutty Pumpkin Protein Iced Latte | Medium | only in draft B | not found | 340 / 6 / 3.5 / 0 / 30 / 230 / 53 / 0 / 49 / 17 | B: numbers found after the name (line 90); check the size |
| Nutty Pumpkin Protein Iced Latte | Small | only in draft B | not found | 230 / 4 / 2.5 / 0 / 20 / 160 / 36 / 0 / 33 / 11 | B: numbers found after the name (line 91); check the size |
| Protein Hot Latte | Large | only in draft B | not found | 230 / 8 / 4.5 / 0 / 40 / 190 / 19 / 0 / 17 / 20 | B: numbers found after the name (line 92); check the size |
| Protein Hot Latte | Medium | only in draft B | not found | 170 / 6 / 3.5 / 0 / 30 / 140 / 14 / 0 / 13 / 15 | B: numbers found after the name (line 93); check the size |
| Protein Hot Latte | Small | only in draft B | not found | 110 / 4 / 2.5 / 0 / 20 / 95 / 10 / 0 / 8 / 10 | B: numbers found after the name (line 94); check the size |
| Protein Hot Latte with Sugar Free Vanilla | Large | only in draft B | not found | 230 / 8 / 4.5 / 0 / 40 / 200 / 25 / 0 / 17 / 20 | B: numbers found after the name (line 95); check the size |
| Protein Hot Latte with Sugar Free Vanilla | Medium | only in draft B | not found | 170 / 6 / 3.5 / 0 / 30 / 150 / 18 / 0 / 13 / 15 | B: numbers found after the name (line 96); check the size |
| Protein Hot Latte with Sugar Free Vanilla | Small | only in draft B | not found | 120 / 4 / 2.5 / 0 / 20 / 100 / 12 / 0 / 8 / 10 | B: numbers found after the name (line 97); check the size |
| Protein Iced Latte | Large | only in draft B | not found | 230 / 8 / 4.5 / 0 / 40 / 210 / 19 / 0 / 17 / 20 | B: numbers found after the name (line 98); check the size |
| Protein Iced Latte | Medium | only in draft B | not found | 170 / 6 / 3.5 / 0 / 30 / 150 / 14 / 0 / 13 / 15 | B: numbers found after the name (line 99); check the size |
| Protein Iced Latte | Small | only in draft B | not found | 110 / 4 / 2.5 / 0 / 20 / 105 / 10 / 0 / 8 / 10 | B: numbers found after the name (line 100); check the size |
| Protein Iced Latte with Sugar Free Vanilla | Large | only in draft B | not found | 230 / 8 / 4.5 / 0 / 40 / 210 / 25 / 0 / 17 / 20 | B: numbers found after the name (line 101); check the size |
| Protein Iced Latte with Sugar Free Vanilla | Medium | only in draft B | not found | 170 / 6 / 3.5 / 0 / 30 / 150 / 18 / 0 / 13 / 15 | B: numbers found after the name (line 102); check the size |
| Protein Iced Latte with Sugar Free Vanilla | Small | only in draft B | not found | 120 / 4 / 2.5 / 0 / 20 / 105 / 12 / 0 / 8 / 10 | B: numbers found after the name (line 103); check the size |
| Protein Matcha Hot Latte | Large | only in draft B | not found | 330 / 8 / 4.5 / 0 / 40 / 180 / 45 / 2 / 42 / 21 | B: numbers found after the name (line 104); check the size |
| Protein Matcha Hot Latte | Medium | only in draft B | not found | 250 / 6 / 3.5 / 0 / 30 / 135 / 33 / 1 / 31 / 15 | B: numbers found after the name (line 105); check the size |
| Protein Matcha Hot Latte | Small | only in draft B | not found | 170 / 4 / 2.5 / 0 / 20 / 90 / 22 / 1 / 21 / 10 | B: numbers found after the name (line 106); check the size |
| Protein Matcha Iced Latte | Large | only in draft B | not found | 330 / 8 / 4.5 / 0 / 40 / 190 / 45 / 2 / 42 / 21 | B: numbers found after the name (line 107); check the size |
| Protein Matcha Iced Latte | Medium | only in draft B | not found | 250 / 6 / 3.5 / 0 / 30 / 150 / 33 / 1 / 31 / 15 | B: numbers found after the name (line 108); check the size |
| Protein Matcha Iced Latte | Small | only in draft B | not found | 170 / 4 / 2.5 / 0 / 20 / 95 / 22 / 1 / 21 / 10 | B: numbers found after the name (line 109); check the size |
| Strawberry Protein Daydream Refresher | Large | only in draft B | not found | 440 / 10 / 6 / 0 / 45 / 160 / 69 / 0 / 66 / 15 | B: numbers found after the name (line 110); check the size |
| Strawberry Protein Daydream Refresher | Medium | only in draft B | not found | 310 / 7 / 4 / 0 / 30 / 115 / 49 / 0 / 47 / 11 | B: numbers found after the name (line 111); check the size |
| Strawberry Protein Daydream Refresher | Small | only in draft B | not found | 230 / 5 / 3.5 / 0 / 25 / 85 / 36 / 0 / 35 / 8 | B: numbers found after the name (line 112); check the size |
| Strawberry Protein Refresher | Large | only in draft B | not found | 390 / 8 / 4.5 / 0 / 40 / 200 / 57 / 0 / 53 / 19 | B: numbers found after the name (line 113); check the size |
| Strawberry Protein Refresher | Medium | only in draft B | not found | 290 / 6 / 3.5 / 0 / 30 / 150 / 42 / 0 / 40 / 15 | B: numbers found after the name (line 114); check the size |
| Strawberry Protein Refresher | Small | only in draft B | not found | 190 / 4 / 2.5 / 0 / 20 / 100 / 28 / 0 / 27 / 10 | B: numbers found after the name (line 115); check the size |
| Tiramisu Protein Iced Latte | Large | only in draft B | not found | 450 / 8 / 4.5 / 0 / 40 / 290 / 70 / 0 / 64 / 23 | B: numbers found after the name (line 116); check the size |
| Tiramisu Protein Iced Latte | Medium | only in draft B | not found | 330 / 6 / 3.5 / 0 / 30 / 210 / 52 / 0 / 48 / 17 | B: numbers found after the name (line 117); check the size |
| Tiramisu Protein Iced Latte | Small | only in draft B | not found | 220 / 4 / 2.5 / 0 / 20 / 140 / 35 / 0 / 32 / 12 | B: numbers found after the name (line 118); check the size |
| Blushpop Dunkin' Zero | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 190 / 9 / 0 / 0 / 0 | B: numbers found after the name (line 157); check the size |
| Blushpop Dunkin' Zero | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 125 / 6 / 0 / 0 / 0 | B: numbers found after the name (line 158); check the size |
| Blushpop Dunkin' Zero | Large | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 250 / 12 / 0 / 0 / 0 | B: numbers found after the name (line 159); check the size |
| Candy Kiss Dunkin' Zero | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 190 / 9 / 0 / 0 / 0 | B: numbers found after the name (line 160); check the size |
| Candy Kiss Dunkin' Zero | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 125 / 6 / 0 / 0 / 0 | B: numbers found after the name (line 161); check the size |
| Glamberry Dunkin' Zero | Large | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 250 / 12 / 1 / 0 / 0 | B: numbers found after the name (line 162); check the size |
| Glamberry Dunkin' Zero | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 190 / 9 / 1 / 0 / 0 | B: numbers found after the name (line 163); check the size |
| Glamberry Dunkin' Zero | Small | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 125 / 6 / 1 / 0 / 0 | B: numbers found after the name (line 164); check the size |
| Green Apple Dunkin' Zero | Large | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 250 / 12 / 0 / 0 / 0 | B: numbers found after the name (line 165); check the size |
| Green Apple Dunkin' Zero | Medium | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 190 / 9 / 0 / 0 / 0 | B: numbers found after the name (line 166); check the size |
| Green Apple Dunkin' Zero | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 125 / 6 / 0 / 0 / 0 | B: numbers found after the name (line 167); check the size |
| Juicy Peach Dunkin' Zero | Large | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 250 / 11 / 1 / 1 / 0 | B: numbers found after the name (line 168); check the size |
| Juicy Peach Dunkin' Zero | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 190 / 8 / 1 / 0 / 0 | B: numbers found after the name (line 169); check the size |
| Juicy Peach Dunkin' Zero | Small | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 125 / 6 / 1 / 0 / 0 | B: numbers found after the name (line 170); check the size |
| Midnight Apple Dunkin' Zero | Large | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 250 / 12 / 0 / 0 / 0 | B: numbers found after the name (line 171); check the size |
| Midnight Apple Dunkin' Zero | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 190 / 9 / 0 / 0 / 0 | B: numbers found after the name (line 172); check the size |
| Midnight Apple Dunkin' Zero | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 125 / 6 / 0 / 0 / 0 | B: numbers found after the name (line 173); check the size |
| Orchard Twist Dunkin' Zero | Large | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 250 / 11 / 0 / 0 / 0 | B: numbers found after the name (line 174); check the size |
| Orchard Twist Dunkin' Zero | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 190 / 9 / 0 / 0 / 0 | B: numbers found after the name (line 175); check the size |
| Orchard Twist Dunkin' Zero | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 125 / 6 / 0 / 0 / 0 | B: numbers found after the name (line 176); check the size |
| Sunzest Dunkin' Zero | Large | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 250 / 11 / 0 / 0 / 0 | B: numbers found after the name (line 177); check the size |
| Sunzest Dunkin' Zero | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 190 / 9 / 0 / 0 / 0 | B: numbers found after the name (line 178); check the size |
| Sunzest Dunkin' Zero | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 125 / 6 / 0 / 0 / 0 | B: numbers found after the name (line 179); check the size |
| Tropical Mango Dunkin' Zero | Large | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 250 / 12 / 0 / 0 / 0 | B: numbers found after the name (line 180); check the size |
| Tropical Mango Dunkin' Zero | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 190 / 9 / 0 / 0 / 0 | B: numbers found after the name (line 181); check the size |
| Tropical Mango Dunkin' Zero | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 125 / 6 / 0 / 0 / 0 | B: numbers found after the name (line 182); check the size |
| Chocolate Hazelnut Truffle Iced Coffee | Medium | only in draft B | not found | 250 / 9 / 5 / 0 / 25 / 70 / 40 / 2 / 35 / 3 | B: numbers found after the name (line 211); check the size |
| Chocolate Hazelnut Truffle Iced Coffee | Small | only in draft B | not found | 170 / 6 / 3.5 / 0 / 20 / 45 / 26 / 1 / 24 / 2 | B: numbers found after the name (line 212); check the size |
| Nutty Nightmare Iced Coffee | Medium | only in draft B | not found | 260 / 9 / 4.5 / 0 / 30 / 110 / 40 / 0 / 37 / 4 | B: numbers found after the name (line 214); check the size |
| Nutty Nightmare Iced Coffee | Small | only in draft B | not found | 170 / 6 / 3 / 0 / 20 / 75 / 26 / 0 / 25 / 3 | B: numbers found after the name (line 215); check the size |
| Nutty Pumpkin Iced Coffee | Medium | only in draft B | not found | 260 / 9 / 4.5 / 0 / 30 / 130 / 39 / 0 / 38 / 4 | B: numbers found after the name (line 217); check the size |
| Nutty Pumpkin Iced Coffee | Small | only in draft B | not found | 170 / 6 / 3 / 0 / 20 / 90 / 26 / 0 / 25 / 3 | B: numbers found after the name (line 218); check the size |
| Toffee Nut Iced Coffee | Medium | only in draft B | not found | 260 / 9 / 4.5 / 0 / 30 / 95 / 40 / 0 / 40 / 4 | B: numbers found after the name (line 220); check the size |
| Toffee Nut Iced Coffee | Small | only in draft B | not found | 170 / 6 / 3 / 0 / 20 / 65 / 27 / 0 / 26 / 3 | B: numbers found after the name (line 221); check the size |
| Pumpkin Cloud Dunkalatte | Large | only in draft B | not found | 750 / 18 / 10 / 0 / 60 / 480 / 129 / 0 / 125 / 20 | B: numbers found after the name (line 247); check the size |
| Pumpkin Cloud Dunkalatte | Medium | only in draft B | not found | 550 / 13 / 7 / 0 / 40 / 360 / 94 / 0 / 91 / 15 | B: numbers found after the name (line 248); check the size |
| Pumpkin Cloud Dunkalatte | Small | only in draft B | not found | 390 / 9 / 6 / 0 / 30 / 240 / 66 / 0 / 65 / 10 | B: numbers found after the name (line 249); check the size |
| Pumpkin Patch Cloud Latte | Large | only in draft B | not found | 580 / 17 / 10 / 0 / 55 / 320 / 88 / 0 / 85 / 17 | B: numbers found after the name (line 250); check the size |
| Pumpkin Patch Cloud Latte | Medium | only in draft B | not found | 420 / 12 / 7 / 0 / 40 / 230 / 63 / 0 / 61 / 12 | B: numbers found after the name (line 251); check the size |
| Pumpkin Patch Cloud Latte | Small | only in draft B | not found | 310 / 9 / 5 / 0 / 30 / 160 / 46 / 0 / 45 / 9 | B: numbers found after the name (line 252); check the size |
| Pumpkin Spice Iced Signature Latte | Large | only in draft B | not found | 540 / 17 / 10 / 0.5 / 55 / 310 / 77 / 0 / 71 / 16 | B: numbers found after the name (line 253); check the size |
| Pumpkin Spice Iced Signature Latte | Medium | only in draft B | not found | 420 / 14 / 8 / 0 / 45 / 230 / 59 / 0 / 55 / 12 | B: numbers found after the name (line 254); check the size |
| Pumpkin Spice Iced Signature Latte | Small | only in draft B | not found | 310 / 11 / 6 / 0 / 35 / 160 / 42 / 0 / 38 / 8 | B: numbers found after the name (line 255); check the size |
| Terror-Misu Cloud Latte | Large | only in draft B | not found | 800 / 37 / 9 / 0 / 40 / 310 / 100 / 0 / 95 / 16 | B: numbers found after the name (line 256); check the size |
| Terror-Misu Cloud Latte | Medium | only in draft B | not found | 580 / 26 / 7 / 0 / 30 / 230 / 73 / 0 / 69 / 12 | B: numbers found after the name (line 257); check the size |
| Terror-Misu Cloud Latte | Small | only in draft B | not found | 470 / 23 / 5 / 0 / 20 / 160 / 56 / 0 / 53 / 8 | B: numbers found after the name (line 258); check the size |
| Toasted Almond Iced Dunkalatte | Large | only in draft B | not found | 420 / 13 / 7 / 0 / 40 / 350 / 61 / 0 / 58 / 15 | B: numbers found after the name (line 259); check the size |
| Toasted Almond Iced Dunkalatte | Medium | only in draft B | not found | 310 / 10 / 5 / 0 / 30 / 260 / 46 / 0 / 43 / 11 | B: numbers found after the name (line 260); check the size |
| Toasted Almond Iced Dunkalatte | Small | only in draft B | not found | 210 / 6 / 3.5 / 0 / 20 / 170 / 30 / 0 / 29 / 8 | B: numbers found after the name (line 261); check the size |
| Butter Pecan Swirl Coffee Chiller with Cream | Large | only in draft B | not found | 940 / 35 / 18 / 1 / 110 / 460 / 145 / 0 / 123 / 9 | B: numbers found after the name (line 348); check the size |
| Butter Pecan Swirl Coffee Chiller with Cream | Medium | only in draft B | not found | 700 / 26 / 14 / 1 / 80 / 340 / 109 / 0 / 92 / 7 | B: numbers found after the name (line 349); check the size |
| Butter Pecan Swirl Coffee Chiller with Cream | Small | only in draft B | not found | 470 / 17 / 9 / 0.5 / 55 / 230 / 73 / 0 / 62 / 5 | B: numbers found after the name (line 350); check the size |
| Butter Pecan Swirl Coffee Chiller with Skim Milk | Large | only in draft B | not found | 650 / 0 / 0 / 0 / 5 / 410 / 149 / 0 / 127 / 10 | B: numbers found after the name (line 351); check the size |
| Butter Pecan Swirl Coffee Chiller with Skim Milk | Medium | only in draft B | not found | 490 / 0 / 0 / 0 / 5 / 300 / 112 / 0 / 95 / 8 | B: numbers found after the name (line 357); check the size |
| Butter Pecan Swirl Coffee Chiller with Skim Milk | Small | only in draft B | not found | 330 / 0 / 0 / 0 / 0 / 200 / 75 / 0 / 64 / 5 | B: numbers found after the name (line 358); check the size |
| Butter Pecan Swirl Coffee Chiller with Whole Milk | Large | only in draft B | not found | 700 / 6 / 3.5 / 0 / 20 / 410 / 149 / 0 / 127 / 10 | B: numbers found after the name (line 359); check the size |
| Butter Pecan Swirl Coffee Chiller with Whole Milk | Medium | only in draft B | not found | 530 / 4.5 / 2.5 / 0 / 15 / 310 / 112 / 0 / 95 / 7 | B: numbers found after the name (line 360); check the size |
| Butter Pecan Swirl Coffee Chiller with Whole Milk | Small | only in draft B | not found | 350 / 3 / 1.5 / 0 / 10 / 200 / 75 / 0 / 63 / 5 | B: numbers found after the name (line 361); check the size |
| Caramel Creme Coffee Chiller | Large | only in draft B | not found | 1020 / 39 / 23 / 1.5 / 130 / 280 / 155 / 0 / 131 / 10 | B: numbers found after the name (line 362); check the size |
| Caramel Creme Coffee Chiller | Medium | only in draft B | not found | 770 / 30 / 17 / 1 / 95 / 210 / 117 / 0 / 99 / 7 | B: numbers found after the name (line 363); check the size |
| Caramel Creme Coffee Chiller | Small | only in draft B | not found | 540 / 21 / 13 / 0.5 / 70 / 140 / 80 / 0 / 68 / 5 | B: numbers found after the name (line 364); check the size |
| Coffee Chiller | Large | only in draft B | not found | 720 / 35 / 18 / 1 / 105 / 200 / 95 / 0 / 75 / 6 | B: numbers found after the name (line 365); check the size |
| Coffee Chiller | Medium | only in draft B | not found | 540 / 26 / 14 / 1 / 80 / 150 / 71 / 0 / 56 / 5 | B: numbers found after the name (line 366); check the size |
| Coffee Chiller | Small | only in draft B | not found | 360 / 17 / 9 / 0.5 / 55 / 100 / 48 / 0 / 37 / 3 | B: numbers found after the name (line 367); check the size |
| Coffee Chiller with Almondmilk | Large | only in draft B | not found | 430 / 2 / 0 / 0 / 0 / 200 / 99 / 0 / 79 / 2 | B: numbers found after the name (line 368); check the size |
| Coffee Chiller with Almondmilk | Medium | only in draft B | not found | 330 / 1.5 / 0 / 0 / 0 / 150 / 74 / 0 / 59 / 1 | B: numbers found after the name (line 369); check the size |
| Coffee Chiller with Almondmilk | Small | only in draft B | not found | 220 / 1 / 0 / 0 / 0 / 100 / 50 / 0 / 39 / 1 | B: numbers found after the name (line 370); check the size |
| Coffee Chiller with Cream | Large | only in draft B | not found | 720 / 35 / 18 / 1 / 105 / 200 / 95 / 0 / 75 / 6 | B: numbers found after the name (line 371); check the size |
| Coffee Chiller with Cream | Medium | only in draft B | not found | 540 / 26 / 14 / 1 / 80 / 150 / 71 / 0 / 56 / 5 | B: numbers found after the name (line 372); check the size |
| Coffee Chiller with Cream | Small | only in draft B | not found | 390 / 17 / 9 / 0.5 / 55 / 100 / 57 / 0 / 54 / 3 | B: numbers found after the name (line 373); check the size |
| Coffee Chiller with Skim Milk | Large | only in draft B | not found | 500 / 0 / 0 / 0 / 5 / 150 / 117 / 0 / 112 / 8 | B: numbers found after the name (line 374); check the size |
| Coffee Chiller with Skim Milk | Medium | only in draft B | not found | 370 / 0 / 0 / 0 / 5 / 115 / 88 / 0 / 84 / 6 | B: numbers found after the name (line 375); check the size |
| Coffee Chiller with Skim Milk | Small | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 75 / 59 / 0 / 56 / 4 | B: numbers found after the name (line 376); check the size |
| Coffee Chiller with Whole Milk | Large | only in draft B | not found | 550 / 6 / 3.5 / 0 / 20 / 150 / 117 / 0 / 111 / 7 | B: numbers found after the name (line 377); check the size |
| Coffee Chiller with Whole Milk | Medium | only in draft B | not found | 410 / 4.5 / 2.5 / 0 / 15 / 115 / 88 / 0 / 84 / 5 | B: numbers found after the name (line 378); check the size |
| Coffee Chiller with Whole Milk | Small | only in draft B | not found | 270 / 3 / 1.5 / 0 / 10 / 75 / 58 / 0 / 56 / 4 | B: numbers found after the name (line 379); check the size |
| French Vanilla Swirl Coffee Chiller with Cream | Large | only in draft B | not found | 1000 / 35 / 18 / 1 / 110 / 260 / 163 / 0 / 156 / 9 | B: numbers found after the name (line 380); check the size |
| French Vanilla Swirl Coffee Chiller with Cream | Medium | only in draft B | not found | 750 / 26 / 14 / 1 / 85 / 200 / 123 / 0 / 117 / 7 | B: numbers found after the name (line 381); check the size |
| French Vanilla Swirl Coffee Chiller with Cream | Small | only in draft B | not found | 500 / 17 / 9 / 0.5 / 55 / 130 / 82 / 0 / 78 / 5 | B: numbers found after the name (line 382); check the size |
| French Vanilla Swirl Coffee Chiller with Skim Milk | Large | only in draft B | not found | 710 / 0 / 0 / 0 / 10 / 210 / 167 / 0 / 160 / 10 | B: numbers found after the name (line 383); check the size |
| French Vanilla Swirl Coffee Chiller with Skim Milk | Medium | only in draft B | not found | 540 / 0 / 0 / 0 / 5 / 160 / 126 / 0 / 120 / 8 | B: numbers found after the name (line 384); check the size |
| French Vanilla Swirl Coffee Chiller with Skim Milk | Small | only in draft B | not found | 360 / 0 / 0 / 0 / 5 / 105 / 84 / 0 / 80 / 5 | B: numbers found after the name (line 385); check the size |
| French Vanilla Swirl Coffee Chiller with Whole Milk | Large | only in draft B | not found | 760 / 6 / 3.5 / 0 / 25 / 210 / 167 / 0 / 160 / 10 | B: numbers found after the name (line 386); check the size |
| French Vanilla Swirl Coffee Chiller with Whole Milk | Medium | only in draft B | not found | 570 / 4.5 / 2.5 / 0 / 15 / 160 / 125 / 0 / 120 / 7 | B: numbers found after the name (line 387); check the size |
| French Vanilla Swirl Coffee Chiller with Whole Milk | Small | only in draft B | not found | 380 / 3 / 1.5 / 0 / 10 / 105 / 84 / 0 / 80 / 5 | B: numbers found after the name (line 388); check the size |
| Mocha Swirl Coffee Chiller with Cream | Large | only in draft B | not found | 990 / 35 / 19 / 1 / 105 / 240 / 163 / 2 / 153 / 8 | B: numbers found after the name (line 389); check the size |
| Mocha Swirl Coffee Chiller with Cream | Medium | only in draft B | not found | 740 / 27 / 14 / 1 / 80 / 180 / 122 / 2 / 115 / 6 | B: numbers found after the name (line 390); check the size |
| Mocha Swirl Coffee Chiller with Cream | Small | only in draft B | not found | 490 / 18 / 9 / 0.5 / 55 / 120 / 81 / 1 / 76 / 4 | B: numbers found after the name (line 391); check the size |
| Mocha Swirl Coffee Chiller with Skim Milk | Large | only in draft B | not found | 700 / 1 / 0.5 / 0 / 5 / 190 / 167 / 2 / 157 / 9 | B: numbers found after the name (line 392); check the size |
| Mocha Swirl Coffee Chiller with Skim Milk | Medium | only in draft B | not found | 530 / 0.5 / 0 / 0 / 5 / 140 / 125 / 2 / 118 / 7 | B: numbers found after the name (line 393); check the size |
| Mocha Swirl Coffee Chiller with Skim Milk | Small | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 95 / 83 / 1 / 78 / 5 | B: numbers found after the name (line 394); check the size |
| Mocha Swirl Coffee Chiller with Whole Milk | Large | only in draft B | not found | 750 / 7 / 4 / 0 / 20 / 190 / 167 / 2 / 156 / 9 | B: numbers found after the name (line 395); check the size |
| Mocha Swirl Coffee Chiller with Whole Milk | Medium | only in draft B | not found | 570 / 5 / 3 / 0 / 15 / 140 / 125 / 2 / 117 / 6 | B: numbers found after the name (line 396); check the size |
| Mocha Swirl Coffee Chiller with Whole Milk | Small | only in draft B | not found | 380 / 3.5 / 2 / 0 / 10 / 95 / 83 / 1 / 78 / 4 | B: numbers found after the name (line 397); check the size |
| Triple Mocha Coffee Chiller | Large | only in draft B | not found | 1000 / 40 / 23 / 1.5 / 125 / 250 / 153 / 2 / 125 / 8 | B: numbers found after the name (line 398); check the size |
| Triple Mocha Coffee Chiller | Medium | only in draft B | not found | 770 / 31 / 18 / 1 / 95 / 190 / 116 / 2 / 95 / 6 | B: numbers found after the name (line 399); check the size |
| Triple Mocha Coffee Chiller | Small | only in draft B | not found | 530 / 22 / 13 / 0.5 / 70 / 130 / 80 / 1 / 65 / 5 | B: numbers found after the name (line 400); check the size |
| Hot Coffee with AlmondMilk | Extra Large | only in draft B | not found | 45 / 1.5 / 0 / 0 / 0 / 85 / 7 / 0 / 7 / 1 | B: numbers found after the name (line 670); check the size |
| Hot Coffee with AlmondMilk | Large | only in draft B | not found | 35 / 1 / 0 / 0 / 0 / 65 / 5 / 0 / 5 / 1 | B: numbers found after the name (line 671); check the size |
| Hot Coffee with AlmondMilk | Medium | only in draft B | not found | 25 / 0.5 / 0 / 0 / 0 / 45 / 4 / 0 / 3 / 1 | B: numbers found after the name (line 672); check the size |
| Hot Coffee with AlmondMilk | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 25 / 2 / 0 / 2 / 0 | B: numbers found after the name (line 673); check the size |
| Hot Coffee with Cream | XL | only in draft B | not found | 150 / 15 / 8 / 0 / 45 / 65 / 2 / 0 / 2 / 3 | B: numbers found after the name (line 674); check the size |
| Hot Coffee with Cream | Large | only in draft B | not found | 120 / 12 / 6 / 0 / 35 / 55 / 2 / 0 / 2 / 2 | B: numbers found after the name (line 675); check the size |
| Hot Coffee with Cream | Medium | only in draft B | not found | 90 / 9 / 4.5 / 0 / 25 / 40 / 1 / 0 / 1 / 2 | B: numbers found after the name (line 676); check the size |
| Hot Coffee with Cream | Small | only in draft B | not found | 60 / 6 / 3 / 0 / 20 / 30 / 1 / 0 / 1 / 1 | B: numbers found after the name (line 677); check the size |
| Hot Coffee with Cream and Sugar | XL | only in draft B | not found | 320 / 15 / 8 / 0 / 45 / 65 / 46 / 0 / 46 / 3 | B: numbers found after the name (line 678); check the size |
| Hot Coffee with Cream and Sugar | Large | only in draft B | not found | 260 / 12 / 6 / 0 / 35 / 55 / 37 / 0 / 36 / 2 | B: numbers found after the name (line 679); check the size |
| Hot Coffee with Cream and Sugar | Medium | only in draft B | not found | 190 / 9 / 4.5 / 0 / 25 / 40 / 27 / 0 / 27 / 2 | B: numbers found after the name (line 680); check the size |
| Hot Coffee with Cream and Sugar | Small | only in draft B | not found | 130 / 6 / 3 / 0 / 20 / 30 / 18 / 0 / 18 / 1 | B: numbers found after the name (line 681); check the size |
| Hot Coffee with Oatmilk | XL | only in draft B | not found | 60 / 1.5 / 0 / 0 / 0 / 65 / 10 / 1 / 2 / 1 | B: numbers found after the name (line 682); check the size |
| Hot Coffee with Oatmilk | Large | only in draft B | not found | 45 / 1.5 / 0 / 0 / 0 / 50 / 8 / 1 / 2 / 1 | B: numbers found after the name (line 683); check the size |
| Hot Coffee with Oatmilk | Medium | only in draft B | not found | 30 / 1 / 0 / 0 / 0 / 35 / 5 / 1 / 1 / 1 | B: numbers found after the name (line 684); check the size |
| Hot Coffee with Oatmilk | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 20 / 3 / 0 / 1 / 1 | B: numbers found after the name (line 685); check the size |
| Hot Coffee with Skim Milk | Extra Large | only in draft B | not found | 30 / 0 / 0 / 0 / 0 / 45 / 4 / 0 / 4 / 3 | B: numbers found after the name (line 686); check the size |
| Hot Coffee with Skim Milk | Large | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 35 / 3 / 0 / 3 / 3 | B: numbers found after the name (line 687); check the size |
| Hot Coffee with Skim Milk | Medium | only in draft B | not found | 20 / 0 / 0 / 0 / 0 / 25 / 2 / 0 / 2 / 2 | B: numbers found after the name (line 688); check the size |
| Hot Coffee with Skim Milk | Small | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 20 / 2 / 0 / 2 / 1 | B: numbers found after the name (line 689); check the size |
| Hot Coffee with Skim Milk and Sugar | XL | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 45 / 47 / 0 / 47 / 3 | B: numbers found after the name (line 690); check the size |
| Hot Coffee with Skim Milk and Sugar | Large | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 35 / 38 / 0 / 38 / 3 | B: numbers found after the name (line 691); check the size |
| Hot Coffee with Skim Milk and Sugar | Medium | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 25 / 28 / 0 / 28 / 2 | B: numbers found after the name (line 692); check the size |
| Hot Coffee with Skim Milk and Sugar | Small | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 19 / 0 / 19 / 1 | B: numbers found after the name (line 693); check the size |
| Hot Coffee with Sugar | XL | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 15 / 44 / 0 / 43 / 1 | B: numbers found after the name (line 694); check the size |
| Hot Coffee with Sugar | Large | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 10 / 35 / 0 / 35 / 1 | B: numbers found after the name (line 695); check the size |
| Hot Coffee with Sugar | Medium | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 10 / 26 / 0 / 26 / 1 | B: numbers found after the name (line 696); check the size |
| Hot Coffee with Sugar | Small | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 5 / 17 / 0 / 17 / 0 | B: numbers found after the name (line 697); check the size |
| Hot Coffee with Whole Milk | XL | only in draft B | not found | 50 / 2.5 / 1.5 / 0 / 10 / 45 / 4 / 0 / 4 / 3 | B: numbers found after the name (line 698); check the size |
| Hot Coffee with Whole Milk | Large | only in draft B | not found | 40 / 2 / 1 / 0 / 5 / 35 / 3 / 0 / 3 / 2 | B: numbers found after the name (line 699); check the size |
| Hot Coffee with Whole Milk | Medium | only in draft B | not found | 30 / 1.5 / 1 / 0 / 5 / 25 / 2 / 0 / 2 / 2 | B: numbers found after the name (line 700); check the size |
| Hot Coffee with Whole Milk | Small | only in draft B | not found | 20 / 1 / 0.5 / 0 / 5 / 20 / 1 / 0 / 1 / 1 | B: numbers found after the name (line 701); check the size |
| Hot Coffee with Whole Milk and Sugar | XLarge | only in draft B | not found | 220 / 2.5 / 1.5 / 0 / 10 / 45 / 47 / 0 / 47 / 3 | B: numbers found after the name (line 702); check the size |
| Hot Coffee with Whole Milk and Sugar | Large | only in draft B | not found | 190 / 2 / 1 / 0 / 5 / 35 / 42 / 0 / 42 / 2 | B: numbers found after the name (line 703); check the size |
| Hot Coffee with Whole Milk and Sugar | Medium | only in draft B | not found | 130 / 1.5 / 1 / 0 / 5 / 30 / 28 / 0 / 28 / 2 | B: numbers found after the name (line 704); check the size |
| Hot Coffee with Whole Milk and Sugar | Small | only in draft B | not found | 90 / 1 / 0.5 / 0 / 5 / 20 / 19 / 0 / 19 / 1 | B: numbers found after the name (line 705); check the size |
| Mocha Swirl Hot Coffee | Extra Large | only in draft B | not found | 260 / 1 / 0.5 / 0 / 0 / 45 / 63 / 3 / 57 / 3 | B: numbers found after the name (line 706); check the size |
| Mocha Swirl Hot Coffee | Large | only in draft B | not found | 210 / 1 / 0 / 0 / 0 / 40 / 50 / 2 / 46 / 2 | B: numbers found after the name (line 707); check the size |
| Mocha Swirl Hot Coffee | Medium | only in draft B | not found | 160 / 0.5 / 0 / 0 / 0 / 30 / 38 / 2 / 34 / 2 | B: numbers found after the name (line 708); check the size |
| Mocha Swirl Hot Coffee | Small | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 20 / 25 / 1 / 23 / 1 | B: numbers found after the name (line 709); check the size |
| Mocha Swirl Hot Coffee with Cream | Extra Large | only in draft B | not found | 410 / 15 / 8 / 0 / 45 / 100 / 65 / 3 / 59 / 5 | B: numbers found after the name (line 710); check the size |
| Mocha Swirl Hot Coffee with Cream | Large | only in draft B | not found | 330 / 12 / 7 / 0 / 35 / 80 / 52 / 2 / 47 / 4 | B: numbers found after the name (line 711); check the size |
| Mocha Swirl Hot Coffee with Cream | Medium | only in draft B | not found | 240 / 9 / 5 / 0 / 25 / 60 / 39 / 2 / 35 / 3 | B: numbers found after the name (line 712); check the size |
| Mocha Swirl Hot Coffee with Cream | Small | only in draft B | not found | 160 / 6 / 3.5 / 0 / 20 / 40 / 26 / 1 / 24 / 2 | B: numbers found after the name (line 713); check the size |
| Butter Pecan Swirl Hot Latte with Skim Milk | Large | only in draft B | not found | 350 / 0.5 / 0 / 0 / 10 / 420 / 70 / 0 / 66 / 16 | B: numbers found after the name (line 721); check the size |
| Butter Pecan Swirl Hot Latte with Skim Milk | Medium | only in draft B | not found | 260 / 0 / 0 / 0 / 5 / 320 / 52 / 0 / 50 / 12 | B: numbers found after the name (line 722); check the size |
| Butter Pecan Swirl Hot Latte with Skim Milk | Small | only in draft B | not found | 170 / 0 / 0 / 0 / 5 / 210 / 35 / 0 / 33 / 8 | B: numbers found after the name (line 728); check the size |
| Butter Pecan Swirl Hot Latte with Whole Milk | Large | only in draft B | not found | 450 / 12 / 7 / 0 / 40 / 430 / 69 / 0 / 66 / 15 | B: numbers found after the name (line 729); check the size |
| Butter Pecan Swirl Hot Latte with Whole Milk | Medium | only in draft B | not found | 330 / 9 / 5 / 0 / 30 / 320 / 52 / 0 / 49 / 11 | B: numbers found after the name (line 730); check the size |
| Butter Pecan Swirl Hot Latte with Whole Milk | Small | only in draft B | not found | 220 / 6 / 3.5 / 0 / 20 / 210 / 35 / 0 / 33 / 7 | B: numbers found after the name (line 731); check the size |
| Caramel Craze Signature Hot Latte with Skim Milk | Large | only in draft B | not found | 440 / 6 / 3.5 / 0 / 30 / 240 / 80 / 0 / 75 / 16 | B: numbers found after the name (line 732); check the size |
| Caramel Craze Signature Hot Latte with Skim Milk | Medium | only in draft B | not found | 340 / 5 / 3 / 0 / 25 / 180 / 61 / 0 / 57 / 12 | B: numbers found after the name (line 733); check the size |
| Caramel Craze Signature Hot Latte with Skim Milk | Small | only in draft B | not found | 250 / 5 / 3 / 0 / 20 / 125 / 43 / 0 / 40 / 8 | B: numbers found after the name (line 734); check the size |
| Caramel Craze Signature Hot Latte with Whole Milk | Large | only in draft B | not found | 530 / 17 / 10 / 0.5 / 60 / 250 / 79 / 0 / 74 / 15 | B: numbers found after the name (line 735); check the size |
| Caramel Craze Signature Hot Latte with Whole Milk | Medium | only in draft B | not found | 410 / 14 / 8 / 0 / 45 / 190 / 61 / 0 / 57 / 11 | B: numbers found after the name (line 736); check the size |
| Caramel Craze Signature Hot Latte with Whole Milk | Small | only in draft B | not found | 300 / 11 / 6 / 0 / 35 / 130 / 43 / 0 / 39 / 8 | B: numbers found after the name (line 737); check the size |
| Caramel Swirl Hot Latte with Skim Milk | Large | only in draft B | not found | 350 / 0 / 0 / 0 / 10 / 230 / 71 / 0 / 69 / 15 | B: numbers found after the name (line 738); check the size |
| Caramel Swirl Hot Latte with Skim Milk | Medium | only in draft B | not found | 260 / 0 / 0 / 0 / 10 / 170 / 53 / 0 / 52 / 11 | B: numbers found after the name (line 739); check the size |
| Caramel Swirl Hot Latte with Skim Milk | Small | only in draft B | not found | 180 / 0 / 0 / 0 / 5 / 115 / 36 / 0 / 35 / 8 | B: numbers found after the name (line 740); check the size |
| Caramel Swirl Hot Latte with Whole Milk | Large | only in draft B | not found | 450 / 12 / 7 / 0 / 40 / 240 / 70 / 0 / 69 / 14 | B: numbers found after the name (line 741); check the size |
| Caramel Swirl Hot Latte with Whole Milk | Medium | only in draft B | not found | 340 / 9 / 5 / 0 / 30 / 180 / 53 / 0 / 52 / 11 | B: numbers found after the name (line 742); check the size |
| Caramel Swirl Hot Latte with Whole Milk | Small | only in draft B | not found | 230 / 6 / 3.5 / 0 / 20 / 120 / 35 / 0 / 34 / 7 | B: numbers found after the name (line 743); check the size |
| Chai Hot Latte with Skim Milk | Large | only in draft B | not found | 290 / 0.5 / 0 / 0 / 5 / 200 / 58 / 2 / 54 / 13 | B: numbers found after the name (line 744); check the size |
| Chai Hot Latte with Skim Milk | Medium | only in draft B | not found | 220 / 0 / 0 / 0 / 5 / 150 / 44 / 2 / 41 / 10 | B: numbers found after the name (line 745); check the size |
| Chai Hot Latte with Skim Milk | Small | only in draft B | not found | 150 / 0 / 0 / 0 / 5 / 100 / 29 / 1 / 27 / 7 | B: numbers found after the name (line 746); check the size |
| Chai Hot Latte with Whole Milk | Large | only in draft B | not found | 390 / 12 / 7 / 0 / 35 / 200 / 57 / 2 / 54 / 12 | B: numbers found after the name (line 747); check the size |
| Chai Hot Latte with Whole Milk | Medium | only in draft B | not found | 290 / 9 / 5 / 0 / 25 / 150 / 43 / 2 / 40 / 9 | B: numbers found after the name (line 748); check the size |
| Chai Hot Latte with Whole Milk | Small | only in draft B | not found | 200 / 6 / 3.5 / 0 / 20 / 100 / 29 / 1 / 27 / 6 | B: numbers found after the name (line 749); check the size |
| Cocoa Mocha Signature Hot Latte with Skim Milk | Large | only in draft B | not found | 420 / 6 / 4 / 0 / 25 / 210 / 79 / 2 / 69 / 15 | B: numbers found after the name (line 750); check the size |
| Cocoa Mocha Signature Hot Latte with Skim Milk | Medium | only in draft B | not found | 330 / 6 / 3.5 / 0 / 20 / 160 / 61 / 2 / 53 / 11 | B: numbers found after the name (line 751); check the size |
| Cocoa Mocha Signature Hot Latte with Skim Milk | Small | only in draft B | not found | 250 / 5 / 3.5 / 0 / 20 / 110 / 43 / 1 / 37 / 8 | B: numbers found after the name (line 752); check the size |
| Cocoa Mocha Signature Hot Latte with Whole Milk | Large | only in draft B | not found | 520 / 18 / 11 / 0.5 / 55 / 210 / 78 / 2 / 68 / 14 | B: numbers found after the name (line 753); check the size |
| Cocoa Mocha Signature Hot Latte with Whole Milk | Medium | only in draft B | not found | 400 / 14 / 9 / 0 / 45 / 160 / 60 / 2 / 52 / 10 | B: numbers found after the name (line 754); check the size |
| Cocoa Mocha Signature Hot Latte with Whole Milk | Small | only in draft B | not found | 300 / 11 / 7 / 0 / 35 / 110 / 43 / 1 / 36 / 7 | B: numbers found after the name (line 755); check the size |
| French Vanilla Swirl Hot Latte with Skim Milk | Large | only in draft B | not found | 350 / 0 / 0 / 0 / 10 / 220 / 71 / 0 / 67 / 15 | B: numbers found after the name (line 756); check the size |
| French Vanilla Swirl Hot Latte with Skim Milk | Medium | only in draft B | not found | 260 / 0 / 0 / 0 / 10 / 170 / 53 / 0 / 50 / 11 | B: numbers found after the name (line 757); check the size |
| French Vanilla Swirl Hot Latte with Skim Milk | Small | only in draft B | not found | 170 / 0 / 0 / 0 / 5 / 110 / 35 / 0 / 33 / 7 | B: numbers found after the name (line 758); check the size |
| French Vanilla Swirl Hot Latte with Whole Milk | Large | only in draft B | not found | 450 / 12 / 7 / 0 / 40 / 230 / 70 / 0 / 66 / 14 | B: numbers found after the name (line 759); check the size |
| French Vanilla Swirl Hot Latte with Whole Milk | Medium | only in draft B | not found | 330 / 9 / 5 / 0 / 30 / 170 / 52 / 0 / 50 / 11 | B: numbers found after the name (line 760); check the size |
| French Vanilla Swirl Hot Latte with Whole Milk | Small | only in draft B | not found | 220 / 6 / 3.5 / 0 / 20 / 115 / 35 / 0 / 33 / 7 | B: numbers found after the name (line 761); check the size |
| Hot Latte with AlmondMilk | Large | only in draft B | not found | 130 / 3.5 / 0 / 0 / 0 / 240 / 23 / 1 / 20 / 2 | B: numbers found after the name (line 762); check the size |
| Hot Latte with AlmondMilk | Medium | only in draft B | not found | 100 / 3 / 0 / 0 / 0 / 180 / 17 / 1 / 15 / 1 | B: numbers found after the name (line 763); check the size |
| Hot Latte with AlmondMilk | Small | only in draft B | not found | 70 / 2 / 0 / 0 / 0 / 120 / 11 / 0 / 10 / 1 | B: numbers found after the name (line 764); check the size |
| Hot Latte with Oatmilk | Large | only in draft B | not found | 180 / 5 / 1 / 0 / 0 / 180 / 32 / 4 / 7 / 3 | B: numbers found after the name (line 765); check the size |
| Hot Latte with Oatmilk | Medium | only in draft B | not found | 130 / 4 / 0.5 / 0 / 0 / 135 / 24 / 3 / 5 / 2 | B: numbers found after the name (line 766); check the size |
| Hot Latte with Oatmilk | Small | only in draft B | not found | 90 / 2.5 / 0 / 0 / 0 / 90 / 16 / 2 / 4 / 1 | B: numbers found after the name (line 767); check the size |
| Hot Latte with Skim Milk | Large | only in draft B | not found | 130 / 0 / 0 / 0 / 5 / 170 / 20 / 0 / 18 / 12 | B: numbers found after the name (line 768); check the size |
| Hot Latte with Skim Milk | Medium | only in draft B | not found | 100 / 0 / 0 / 0 / 5 / 125 / 15 / 0 / 14 / 9 | B: numbers found after the name (line 769); check the size |
| Hot Latte with Skim Milk | Small | only in draft B | not found | 70 / 0 / 0 / 0 / 5 / 85 / 10 / 0 / 9 / 6 | B: numbers found after the name (line 770); check the size |
| Hot Latte with Skim Milk and Sugar | Large | only in draft B | not found | 270 / 0 / 0 / 0 / 5 / 170 / 54 / 0 / 53 / 12 | B: numbers found after the name (line 771); check the size |
| Hot Latte with Skim Milk and Sugar | Medium | only in draft B | not found | 200 / 0 / 0 / 0 / 5 / 125 / 41 / 0 / 40 / 9 | B: numbers found after the name (line 772); check the size |
| Hot Latte with Skim Milk and Sugar | Small | only in draft B | not found | 130 / 0 / 0 / 0 / 5 / 85 / 27 / 0 / 26 / 6 | B: numbers found after the name (line 773); check the size |
| Hot Latte with Whole Milk | Large | only in draft B | not found | 230 / 12 / 7 / 0 / 35 / 170 / 19 / 0 / 18 / 12 | B: numbers found after the name (line 774); check the size |
| Hot Latte with Whole Milk | Medium | only in draft B | not found | 170 / 9 / 5 / 0 / 25 / 125 / 14 / 0 / 13 / 9 | B: numbers found after the name (line 775); check the size |
| Hot Latte with Whole Milk | Small | only in draft B | not found | 120 / 6 / 3.5 / 0 / 20 / 85 / 9 / 0 / 9 / 6 | B: numbers found after the name (line 776); check the size |
| Hot Latte with Whole Milk and Sugar | Large | only in draft B | not found | 370 / 12 / 7 / 0 / 35 / 170 / 54 / 0 / 52 / 12 | B: numbers found after the name (line 777); check the size |
| Hot Latte with Whole Milk and Sugar | Medium | only in draft B | not found | 270 / 9 / 5 / 0 / 25 / 125 / 40 / 0 / 39 / 9 | B: numbers found after the name (line 778); check the size |
| Hot Latte with Whole Milk and Sugar | Small | only in draft B | not found | 180 / 6 / 3.5 / 0 / 20 / 85 / 27 / 0 / 26 / 6 | B: numbers found after the name (line 779); check the size |
| Matcha Hot Latte with Skim Milk | Large | only in draft B | not found | 240 / 0 / 0 / 0 / 5 / 150 / 45 / 2 / 43 / 14 | B: numbers found after the name (line 780); check the size |
| Matcha Hot Latte with Skim Milk | Medium | only in draft B | not found | 180 / 0 / 0 / 0 / 5 / 115 / 34 / 1 / 32 / 11 | B: numbers found after the name (line 781); check the size |
| Matcha Hot Latte with Skim Milk | Small | only in draft B | not found | 120 / 0 / 0 / 0 / 5 / 75 / 23 / 1 / 22 / 7 | B: numbers found after the name (line 782); check the size |
| Matcha Hot Latte with Whole Milk | Large | only in draft B | not found | 340 / 12 / 7 / 0 / 35 / 160 / 44 / 2 / 43 / 13 | B: numbers found after the name (line 783); check the size |
| Matcha Hot Latte with Whole Milk | Medium | only in draft B | not found | 250 / 9 / 5 / 0 / 25 / 120 / 33 / 1 / 32 / 10 | B: numbers found after the name (line 784); check the size |
| Matcha Hot Latte with Whole Milk | Small | only in draft B | not found | 170 / 6 / 3.5 / 0 / 20 / 80 / 22 / 1 / 21 / 7 | B: numbers found after the name (line 785); check the size |
| Mocha Swirl Hot Latte with Skim Milk | Large | only in draft B | not found | 340 / 1 / 0.5 / 0 / 5 / 200 / 70 / 2 / 64 / 14 | B: numbers found after the name (line 786); check the size |
| Mocha Swirl Hot Latte with Skim Milk | Medium | only in draft B | not found | 250 / 1 / 0.5 / 0 / 5 / 150 / 52 / 2 / 48 / 10 | B: numbers found after the name (line 787); check the size |
| Mocha Swirl Hot Latte with Skim Milk | Small | only in draft B | not found | 170 / 0.5 / 0 / 0 / 5 / 100 / 35 / 1 / 32 / 7 | B: numbers found after the name (line 788); check the size |
| Mocha Swirl Hot Latte with Whole Milk | Large | only in draft B | not found | 440 / 13 / 7 / 0 / 35 / 200 / 69 / 2 / 63 / 13 | B: numbers found after the name (line 789); check the size |
| Mocha Swirl Hot Latte with Whole Milk | Medium | only in draft B | not found | 330 / 10 / 6 / 0 / 25 / 150 / 52 / 2 / 47 / 10 | B: numbers found after the name (line 790); check the size |
| Mocha Swirl Hot Latte with Whole Milk | Small | only in draft B | not found | 220 / 6 / 3.5 / 0 / 20 / 100 / 35 / 1 / 32 / 7 | B: numbers found after the name (line 791); check the size |
| Butter Pecan Swirl Hot Macchiato with Skim Milk | Large | only in draft B | not found | 310 / 0 / 0 / 0 / 5 / 380 / 64 / 0 / 60 / 12 | B: numbers found after the name (line 794); check the size |
| Butter Pecan Swirl Hot Macchiato with Skim Milk | Medium | only in draft B | not found | 230 / 0 / 0 / 0 / 5 / 280 / 48 / 0 / 45 / 9 | B: numbers found after the name (line 795); check the size |
| Butter Pecan Swirl Hot Macchiato with Skim Milk | Small | only in draft B | not found | 160 / 0 / 0 / 0 / 5 / 190 / 33 / 0 / 30 / 6 | B: numbers found after the name (line 796); check the size |

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
