# Bob Evans: lines for a person

Guide: https://assets.ctfassets.net/81w9kb7f1jq4/7B5kIp1p1RGRhx1UFq6ToY/a453c3e4d8798f61df5cdd54c86e607c/Nutritional_Guide_Fall_FY2027_All_Day_Breakfast.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (96)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/bob-evans.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| The Classic Breakfast | 1 serving | only in draft A | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 | not found | A: numbers found after the name (line 96); check the size |
| Sunrise Breakfast | 1 serving | only in draft A | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 | not found | A: numbers found after the name (line 133); check the size |
| Rise & Shine | 1 serving | only in draft A | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 | not found | A: numbers found after the name (line 179); check the size |
| Double Meat Farmer's Choice | 1 serving | only in draft A | – / – / – / – / – / – / – / – / – / – | not found | no numbers to look for |
| Brioche French Toast (with Whipped Butter Blend and Syrup) | 1 | the guide gives no protein_g | 560 / 15 / 4.5 / 0 / 90 / 650 / 97 / 1 / 35 / – | 560 / 15 / 4.5 / 0 / 90 / 650 / 97 / 1 / 35 / – | A: numbers found after the name (line 220); check the size; B: numbers found after the name (line 220); check the size |
| Hotcakes Served w/ Whipped Butter Blend & Syrup | 3 | the guide gives no protein_g | 940 / 24 / 8 / 0 / 15 / 1480 / 170 / 3 / 29 / – | 940 / 24 / 8 / 0 / 15 / 1480 / 170 / 3 / 29 / – | A: name not in the guide text; B: name not in the guide text |
| Egg Whites | 2 | only in draft A | 60 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 / – | not found | A: numbers found after the name (line 6); check the size |
| Freshly Cracked | 1 serving | the guide gives no protein_g | 180 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / 15 / – | 180 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / 15 / – | A: numbers found after the name (line 7); check the size; B: numbers found after the name (line 7); check the size |
| Scrambled | 1 serving | the guide gives no protein_g | 160 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / 14 / – | 160 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / 14 / – | A: numbers found after the name (line 8); check the size; B: numbers found after the name (line 8); check the size |
| Chocolate Strawberry Farmer's Choice (Brioche French Toast) | 1 serving | only in draft B | not found | 560 / 11 / 4.5 / 0 / 170 / 650 / 103 / 4 / 55 / 12 | B: numbers found after the name (line 18); check the size |
| Sausage Gravy | Bowl | only in draft B | not found | 490 / 34 / 14 / 0 / 45 / 1950 / 31 / 0 / 0 / 12 | B: numbers found after the name (line 123); check the size |
| Chicken Sausage Patties | 2 | only in draft B | not found | 180 / 12 / 3 / 0 / 90 / 700 / 2 / 0.5 / 0 / 16 | B: numbers found after the name (line 240); check the size |
| Bob Evans Sausage Patties | 3 | only in draft B | not found | 320 / 29 / 10 / 0 / 0 / 590 / 0.5 / 0 / 0 / 14 | B: numbers found after the name (line 242); check the size |
| Banana Pudding Brioche French Toast | Hardwood-Smoked Bacon (3) | only in draft B | not found | 190 / 14 / 4.5 / 0 / 40 / 670 / 0.5 / 0 / 0 / 13 | B: numbers found after the name (line 276); check the size |
| Banana Pudding Brioche French Toast | Hickory-Smoked Ham | only in draft B | not found | 100 / 2.5 / 1 / 0 / 35 / 1440 / 2 / 0 / 2 / 17 | B: numbers found after the name (line 277); check the size |
| Banana Pudding Brioche French Toast | Chicken Sausage Links (2) | only in draft B | not found | 180 / 12 / 3 / 0 / 90 / 700 / 2 / 0.5 / 0 / 16 | B: numbers found after the name (line 278); check the size |
| Banana Pudding Hotcakes | Bob Evans Sausage Links (3) | only in draft B | not found | 320 / 29 / 10 / 0 / 0 / 590 / 0.5 / 0 / 0 / 14 | B: numbers found after the name (line 280); check the size |
| Banana Pudding Hotcakes | Bob Evans Sausage Patties (2) | only in draft B | not found | 260 / 21 / 8 / 0 / 45 / 600 / 0 / 0 / 0 / 17 | B: numbers found after the name (line 281); check the size |
| Banana Pudding Hotcakes | Hardwood-Smoked Bacon (3) | only in draft B | not found | 190 / 14 / 4.5 / 0 / 40 / 670 / 0.5 / 0 / 0 / 13 | B: numbers found after the name (line 282); check the size |
| Banana Pudding Hotcakes | Hickory-Smoked Ham | only in draft B | not found | 100 / 2.5 / 1 / 0 / 35 / 1440 / 2 / 0 / 2 / 17 | B: numbers found after the name (line 283); check the size |
| Banana Pudding Hotcakes | Chicken Sausage Links (2) | only in draft B | not found | 180 / 12 / 3 / 0 / 90 / 700 / 2 / 0.5 / 0 / 16 | B: numbers found after the name (line 284); check the size |
| Banana Pudding Farmer's Choice (Hotcakes) | Egg Whites | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 | B: numbers found after the name (line 288); check the size |
| Banana Pudding Farmer's Choice (Hotcakes) | Freshly Cracked | only in draft B | not found | 180 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / 0 / 15 | B: numbers found after the name (line 289); check the size |
| Banana Pudding Farmer's Choice (Hotcakes) | Scrambled | only in draft B | not found | 160 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / 0 / 14 | B: numbers found after the name (line 290); check the size |
| Banana Pudding Farmer's Choice (Hotcakes) | Bob Evans Sausage Links (3) | only in draft B | not found | 320 / 29 / 10 / 0 / 0 / 590 / 0.5 / 0 / 0 / 14 | B: numbers found after the name (line 291); check the size |
| Banana Pudding Farmer's Choice (Hotcakes) | Bob Evans Sausage Patties (2) | only in draft B | not found | 260 / 21 / 8 / 0 / 45 / 600 / 0 / 0 / 0 / 17 | B: numbers found after the name (line 292); check the size |
| Banana Pudding Farmer's Choice (Hotcakes) | Hardwood-Smoked Bacon (3) | only in draft B | not found | 190 / 14 / 4.5 / 0 / 40 / 670 / 0.5 / 0 / 0 / 13 | B: numbers found after the name (line 293); check the size |
| Banana Pudding Farmer's Choice (Hotcakes) | Hickory-Smoked Ham | only in draft B | not found | 100 / 2.5 / 1 / 0 / 35 / 1440 / 2 / 0 / 2 / 17 | B: numbers found after the name (line 294); check the size |
| Banana Pudding Farmer's Choice (Hotcakes) | Chicken Sausage Links (2) | only in draft B | not found | 180 / 12 / 3 / 0 / 90 / 700 / 2 / 0.5 / 0 / 16 | B: numbers found after the name (line 295); check the size |
| Banana Pudding Farmer's Choice (Hotcakes) | Hashbrowns | only in draft B | not found | 180 / 7 / 1 / 0 / 0 / 10 / 28 / 3 / 1 / 2 | B: numbers found after the name (line 296); check the size |
| Banana Pudding Farmer's Choice (Hotcakes) | Home fries | only in draft B | not found | 180 / 10 / 2.5 / 0 / 0 / 15 / 21 / 2 / 2 / 2 | B: numbers found after the name (line 297); check the size |
| Banana Pudding Farmer's Choice (Hotcakes) | Fresh-Cut Fruit (Apples, Blueberries, Bananas, Strawberries) | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 0 / 20 / 3 / 12 / 1 | B: numbers found after the name (line 298); check the size |
| Banana Pudding Farmer's Choice (Hotcakes) | Fresh-Cut Fruit (Apples, Blueberries, Bananas) | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 18 / 2 / 10 / 0.5 | B: numbers found after the name (line 299); check the size |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Egg Whites | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 | B: numbers found after the name (line 303); check the size |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Freshly Cracked | only in draft B | not found | 180 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / – / 15 | B: numbers found after the name (line 304); check the size |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Scrambled | only in draft B | not found | 160 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / – / 14 | B: numbers found after the name (line 305); check the size |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Bob Evans Sausage Links (3) | only in draft B | not found | 320 / 29 / 10 / 0 / 0 / 590 / 0.5 / 0 / – / 14 | B: numbers found after the name (line 306); check the size |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Bob Evans Sausage Patties (2) | only in draft B | not found | 260 / 21 / 8 / 0 / 45 / 600 / 0 / 0 / – / 17 | B: numbers found after the name (line 307); check the size |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Hardwood-Smoked Bacon (3) | only in draft B | not found | 190 / 14 / 4.5 / 0 / 40 / 670 / 0.5 / 0 / – / 13 | B: numbers found after the name (line 308); check the size |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Hickory-Smoked Ham | only in draft B | not found | 100 / 2.5 / 1 / 0 / 35 / 1440 / 2 / 0 / – / 17 | B: numbers found after the name (line 309); check the size |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Chicken Sausage Links (2) | only in draft B | not found | 180 / 12 / 3 / 0 / 90 / 700 / 2 / 0.5 / – / 16 | B: numbers found after the name (line 310); check the size |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Hashbrowns | only in draft B | not found | 180 / 7 / 1 / 0 / 0 / 10 / 28 / 3 / – / 2 | B: numbers found after the name (line 311); check the size |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Home fries | only in draft B | not found | 180 / 10 / 2.5 / 0 / 0 / 15 / 21 / 2 / – / 2 | B: numbers found after the name (line 312); check the size |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Fresh-Cut Fruit (Apples, Blueberries, Bananas, Strawberries) | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 0 / 20 / 3 / – / 1 | B: numbers found after the name (line 313); check the size |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Fresh-Cut Fruit (Apples, Blueberries, Bananas) | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 18 / 2 / – / 0.5 | B: numbers found after the name (line 314); check the size |
| Homestead Farmer's Choice | Egg Whites | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 | B: numbers found after the name (line 316); check the size |
| Homestead Farmer's Choice | Freshly Cracked | only in draft B | not found | 180 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / – / 15 | B: numbers found after the name (line 317); check the size |
| Homestead Farmer's Choice | Scrambled | only in draft B | not found | 160 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / – / 14 | B: numbers found after the name (line 318); check the size |
| Homestead Farmer's Choice | Bob Evans Sausage Links (3) | only in draft B | not found | 320 / 29 / 10 / 0 / 0 / 590 / 0.5 / 0 / – / 14 | B: numbers found after the name (line 319); check the size |
| Homestead Farmer's Choice | Bob Evans Sausage Patties (2) | only in draft B | not found | 260 / 21 / 8 / 0 / 45 / 600 / 0 / 0 / – / 17 | B: numbers found after the name (line 320); check the size |
| Homestead Farmer's Choice | Hardwood-Smoked Bacon (3) | only in draft B | not found | 190 / 14 / 4.5 / 0 / 40 / 670 / 0.5 / 0 / – / 13 | B: numbers found after the name (line 321); check the size |
| Homestead Farmer's Choice | Hickory-Smoked Ham | only in draft B | not found | 100 / 2.5 / 1 / 0 / 35 / 1440 / 2 / 0 / – / 17 | B: numbers found after the name (line 322); check the size |
| Homestead Farmer's Choice | Chicken Sausage Links (2) | only in draft B | not found | 180 / 12 / 3 / 0 / 90 / 700 / 2 / 0.5 / – / 16 | B: numbers found after the name (line 323); check the size |
| Banana Berry Farmer's Choice | Egg Whites | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 | B: numbers found after the name (line 326); check the size |
| Banana Berry Farmer's Choice | Freshly Cracked | only in draft B | not found | 180 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / 0 / – | B: numbers found after the name (line 327); check the size |
| Banana Berry Farmer's Choice | Scrambled | only in draft B | not found | 160 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / 0 / – | B: numbers found after the name (line 328); check the size |
| Banana Berry Farmer's Choice | Bob Evans Sausage Links (3) | only in draft B | not found | 320 / 29 / 10 / 0 / – / 590 / 0.5 / 0 / 0 / – | B: numbers found after the name (line 329); check the size |
| Banana Berry Farmer's Choice | Bob Evans Sausage Patties (2) | only in draft B | not found | 260 / 21 / 8 / 0 / 45 / 600 / 0 / 0 / 0 / – | B: numbers found after the name (line 330); check the size |
| Banana Berry Farmer's Choice | Hardwood-Smoked Bacon (3) | only in draft B | not found | 190 / 14 / 4.5 / 0 / 40 / 670 / 0.5 / 0 / 0 / – | B: numbers found after the name (line 331); check the size |
| Banana Berry Farmer's Choice | Hickory-Smoked Ham | only in draft B | not found | 100 / 2.5 / 1 / 0 / 35 / 1440 / 2 / 0 / 2 / – | B: numbers found after the name (line 332); check the size |
| Banana Berry Farmer's Choice | Chicken Sausage Links (2) | only in draft B | not found | 180 / 12 / 3 / 0 / 90 / 700 / 2 / 0.5 / 0 / – | B: numbers found after the name (line 333); check the size |
| Farmer's Choice | Egg Whites | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 | B: numbers found after the name (line 6); check the size |
| Farmer's Choice | Freshly Cracked | only in draft B | not found | 180 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / 0 / – | B: numbers found after the name (line 7); check the size |
| Farmer's Choice | Scrambled | only in draft B | not found | 160 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / 0 / – | B: numbers found after the name (line 8); check the size |
| Farmer's Choice | Bob Evans Sausage Links (3) | only in draft B | not found | 320 / 29 / 10 / 0 / – / 590 / 0.5 / 0 / 0 / – | B: numbers found after the name (line 9); check the size |
| Farmer's Choice | Bob Evans Sausage Patties (2) | only in draft B | not found | 260 / 21 / 8 / 0 / 45 / 600 / 0 / 0 / 0 / – | B: numbers found after the name (line 10); check the size |
| Farmer's Choice | Hardwood-Smoked Bacon (3) | only in draft B | not found | 190 / 14 / 4.5 / 0 / 40 / 670 / 0.5 / 0 / 0 / – | B: numbers found after the name (line 11); check the size |
| Farmer's Choice | Hickory-Smoked Ham | only in draft B | not found | 100 / 2.5 / 1 / 0 / 35 / 1440 / 2 / 0 / 2 / – | B: numbers found after the name (line 12); check the size |
| Farmer's Choice | Chicken Sausage Links (2) | only in draft B | not found | 180 / 12 / 3 / 0 / 90 / 700 / 2 / 0.5 / 0 / – | B: numbers found after the name (line 13); check the size |
| Farmer's Choice | Brioche French Toast (1) (with Whipped Butter Blend and Syrup) | only in draft B | not found | 560 / 15 / 4.5 / 0 / 90 / 650 / 97 / 1 / 35 / – | B: numbers found after the name (line 342); check the size |
| Farmer's Choice | Hotcakes (Served w/ Whipped Butter Blend & Syrup) | only in draft B | not found | 940 / 24 / 8 / 0 / 15 / 1480 / 170 / 3 / 29 / – | B: numbers found after the name (line 343); check the size |
| Cinnamon Roll Farmer's Choice | Egg Whites | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 | B: numbers found after the name (line 345); check the size |
| Cinnamon Roll Farmer's Choice | Freshly Cracked | only in draft B | not found | 180 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / 0 / – | B: numbers found after the name (line 346); check the size |
| Cinnamon Roll Farmer's Choice | Scrambled | only in draft B | not found | 160 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / 0 / – | B: numbers found after the name (line 347); check the size |
| Cinnamon Roll Farmer's Choice | Hashbrowns | only in draft B | not found | 200 / 12 / 2 / 0 / 110 / 22 / 2 / 0.5 / 2 / – | B: numbers found after the name (line 348); check the size |
| Cinnamon Roll Farmer's Choice | Home fries | only in draft B | not found | 180 / 10 / 2 / 0 / 15 / 21 / 2 / 2 / 2 / – | B: numbers found after the name (line 349); check the size |
| Cinnamon Roll Farmer's Choice | Fresh-Cut Fruit (Apples, Blueberries, Bananas, Strawberries) | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 0 / 20 / 3 / 12 / 1 | B: numbers found after the name (line 350); check the size |
| Cinnamon Roll Farmer's Choice | Fresh-Cut Fruit (Apples, Blueberries, Bananas) | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 18 / 2 / 10 / 0.5 | B: numbers found after the name (line 351); check the size |
| Cinnamon Roll Farmer's Choice | Bob Evans Sausage Links (3) | only in draft B | not found | 320 / 29 / 10 / 0 / – / 590 / 0.5 / 0 / 0 / 14 | B: numbers found after the name (line 352); check the size |
| Cinnamon Roll Farmer's Choice | Bob Evans Sausage Patties (2) | only in draft B | not found | 260 / 21 / 8 / 0 / 45 / 600 / 0 / 0 / 0 / – | B: numbers found after the name (line 353); check the size |
| Cinnamon Roll Farmer's Choice | Hardwood-Smoked Bacon (3) | only in draft B | not found | 190 / 14 / 4.5 / 0 / 40 / 670 / 0.5 / 0 / 0 / – | B: numbers found after the name (line 354); check the size |
| Cinnamon Roll Farmer's Choice | Hickory-Smoked Ham | only in draft B | not found | 100 / 2.5 / 1 / 0 / 35 / 1440 / 2 / 0 / 2 / – | B: numbers found after the name (line 355); check the size |
| Cinnamon Roll Farmer's Choice | Chicken Sausage Links (2) | only in draft B | not found | 180 / 12 / 3 / 0 / 90 / 700 / 2 / 0.5 / 0 / – | B: numbers found after the name (line 356); check the size |
| Double Meat Farmer's Choice | Egg Whites | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / – | B: numbers found after the name (line 359); check the size |
| Double Meat Farmer's Choice | Freshly Cracked | only in draft B | not found | 180 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / 0 / – | B: numbers found after the name (line 360); check the size |
| Double Meat Farmer's Choice | Scrambled | only in draft B | not found | 160 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / 0 / – | B: numbers found after the name (line 361); check the size |
| Double Meat Farmer's Choice | Hardwood-Smoked Bacon (3) | only in draft B | not found | 190 / 14 / 4.5 / 0 / 40 / 670 / 0.5 / 0 / 0 / – | B: numbers found after the name (line 362); check the size |
| Double Meat Farmer's Choice | Bob Evans Sausage Links (3) | only in draft B | not found | 320 / 29 / 10 / 0 / 0 / 590 / 0.5 / 0 / 0 / – | B: numbers found after the name (line 363); check the size |
| Egg Whites | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 | B: numbers found after the name (line 6); check the size |
| Steak Tip Omelet | 1 serving | both read it the same, but its protein, carbs and fat make 903 kcal, not 750 | 750 / 75 / 25 / 0 / 685 / 1530 / 17 / 3 / 8 / 40 | 750 / 75 / 25 / 0 / 685 / 1530 / 17 / 3 / 8 / 40 | A: numbers found after the name (line 59); check the size; B: numbers found after the name (line 59); check the size |
| Salsa | 1 serving | both read it the same, but its protein, carbs and fat make 64 kcal, not 35 | 35 / 3.5 / 0 / 0 / 0 / 580 / 7 / 2 / 4 / 1 | 35 / 3.5 / 0 / 0 / 0 / 580 / 7 / 2 / 4 / 1 | A: numbers found after the name (line 84); check the size; B: numbers found after the name (line 84); check the size |
| Steak Tips and Eggs | 1 serving | both read it the same, but its protein, carbs and fat make 570 kcal, not 310 | 310 / 54 / 19 / 0 / 40 / 590 / 5 / 1 / 2 / 16 | 310 / 54 / 19 / 0 / 40 / 590 / 5 / 1 / 2 / 16 | A: numbers found after the name (line 161); check the size; B: numbers found after the name (line 161); check the size |
| Banana Nut Bread | 1 serving | both read it the same, but its protein, carbs and fat make 208 kcal, not 260 | 260 / 8 / 1.5 / 0 / 0 / 350 / 30 / 2 / 24 / 4 | 260 / 8 / 1.5 / 0 / 0 / 350 / 30 / 2 / 24 / 4 | A: numbers found after the name (line 82); check the size; B: numbers found after the name (line 82); check the size |
| Egg Whites | 3 | both read it the same, but its protein, carbs and fat make 50 kcal, not 90 | 90 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 | 90 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 | A: numbers found after the name (line 193); check the size; B: numbers found after the name (line 193); check the size |
| Freshly Cracked | 3 | both read it the same, but its protein, carbs and fat make 185 kcal, not 270 | 270 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / 0 / 15 | 270 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / 0 / 15 | A: numbers found after the name (line 194); check the size; B: numbers found after the name (line 194); check the size |
| Scrambled | 3 | both read it the same, but its protein, carbs and fat make 159 kcal, not 240 | 240 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / 0 / 14 | 240 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / 0 / 14 | A: numbers found after the name (line 195); check the size; B: numbers found after the name (line 195); check the size |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Banana Berry Farmer's Choice | 1 serving | 1010 / 25 / 8 / 0 / 15 / 1480 / 188 / 6 / 40 / 13 |
| Chocolate Strawberry Hotcakes | 1 serving | 1080 / 25 / 11 / 0 / 0 / 1820 / 196 / 7 / 72 / 12 |
| Whipped Butter Blend | 1 serving | 90 / 10 / 3.5 / 0 / 5 / 95 / 0 / 0 / 0 / 0 |
