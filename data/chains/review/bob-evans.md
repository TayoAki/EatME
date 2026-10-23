# Bob Evans: lines for a person

Guide: https://assets.ctfassets.net/81w9kb7f1jq4/7B5kIp1p1RGRhx1UFq6ToY/a453c3e4d8798f61df5cdd54c86e607c/Nutritional_Guide_Fall_FY2027_All_Day_Breakfast.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (89)

Fix each line in `menus/bob-evans.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| The Classic Breakfast | 1 serving | only in draft A | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 | not found |
| Sunrise Breakfast | 1 serving | only in draft A | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 | not found |
| Rise & Shine | 1 serving | only in draft A | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 | not found |
| Double Meat Farmer's Choice | 1 serving | only in draft A | – / – / – / – / – / – / – / – / – / – | not found |
| Brioche French Toast (with Whipped Butter Blend and Syrup) | 1 | the guide gives no protein_g | 560 / 15 / 4.5 / 0 / 90 / 650 / 97 / 1 / 35 / – | 560 / 15 / 4.5 / 0 / 90 / 650 / 97 / 1 / 35 / – |
| Hotcakes Served w/ Whipped Butter Blend & Syrup | 3 | the guide gives no protein_g | 940 / 24 / 8 / 0 / 15 / 1480 / 170 / 3 / 29 / – | 940 / 24 / 8 / 0 / 15 / 1480 / 170 / 3 / 29 / – |
| Egg Whites | 2 | only in draft A | 60 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 / – | not found |
| Freshly Cracked | 1 serving | the guide gives no protein_g | 180 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / 15 / – | 180 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / 15 / – |
| Scrambled | 1 serving | the guide gives no protein_g | 160 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / 14 / – | 160 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / 14 / – |
| Chocolate Strawberry Farmer's Choice (Brioche French Toast) | 1 serving | only in draft B | not found | 560 / 11 / 4.5 / 0 / 170 / 650 / 103 / 4 / 55 / 12 |
| Sausage Gravy | Bowl | only in draft B | not found | 490 / 34 / 14 / 0 / 45 / 1950 / 31 / 0 / 0 / 12 |
| Chicken Sausage Patties | 2 | only in draft B | not found | 180 / 12 / 3 / 0 / 90 / 700 / 2 / 0.5 / 0 / 16 |
| Bob Evans Sausage Patties | 3 | only in draft B | not found | 320 / 29 / 10 / 0 / 0 / 590 / 0.5 / 0 / 0 / 14 |
| Banana Pudding Brioche French Toast | Hardwood-Smoked Bacon (3) | only in draft B | not found | 190 / 14 / 4.5 / 0 / 40 / 670 / 0.5 / 0 / 0 / 13 |
| Banana Pudding Brioche French Toast | Hickory-Smoked Ham | only in draft B | not found | 100 / 2.5 / 1 / 0 / 35 / 1440 / 2 / 0 / 2 / 17 |
| Banana Pudding Brioche French Toast | Chicken Sausage Links (2) | only in draft B | not found | 180 / 12 / 3 / 0 / 90 / 700 / 2 / 0.5 / 0 / 16 |
| Banana Pudding Hotcakes | Bob Evans Sausage Links (3) | only in draft B | not found | 320 / 29 / 10 / 0 / 0 / 590 / 0.5 / 0 / 0 / 14 |
| Banana Pudding Hotcakes | Bob Evans Sausage Patties (2) | only in draft B | not found | 260 / 21 / 8 / 0 / 45 / 600 / 0 / 0 / 0 / 17 |
| Banana Pudding Hotcakes | Hardwood-Smoked Bacon (3) | only in draft B | not found | 190 / 14 / 4.5 / 0 / 40 / 670 / 0.5 / 0 / 0 / 13 |
| Banana Pudding Hotcakes | Hickory-Smoked Ham | only in draft B | not found | 100 / 2.5 / 1 / 0 / 35 / 1440 / 2 / 0 / 2 / 17 |
| Banana Pudding Hotcakes | Chicken Sausage Links (2) | only in draft B | not found | 180 / 12 / 3 / 0 / 90 / 700 / 2 / 0.5 / 0 / 16 |
| Banana Pudding Farmer's Choice (Hotcakes) | Egg Whites | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 |
| Banana Pudding Farmer's Choice (Hotcakes) | Freshly Cracked | only in draft B | not found | 180 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / 0 / 15 |
| Banana Pudding Farmer's Choice (Hotcakes) | Scrambled | only in draft B | not found | 160 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / 0 / 14 |
| Banana Pudding Farmer's Choice (Hotcakes) | Bob Evans Sausage Links (3) | only in draft B | not found | 320 / 29 / 10 / 0 / 0 / 590 / 0.5 / 0 / 0 / 14 |
| Banana Pudding Farmer's Choice (Hotcakes) | Bob Evans Sausage Patties (2) | only in draft B | not found | 260 / 21 / 8 / 0 / 45 / 600 / 0 / 0 / 0 / 17 |
| Banana Pudding Farmer's Choice (Hotcakes) | Hardwood-Smoked Bacon (3) | only in draft B | not found | 190 / 14 / 4.5 / 0 / 40 / 670 / 0.5 / 0 / 0 / 13 |
| Banana Pudding Farmer's Choice (Hotcakes) | Hickory-Smoked Ham | only in draft B | not found | 100 / 2.5 / 1 / 0 / 35 / 1440 / 2 / 0 / 2 / 17 |
| Banana Pudding Farmer's Choice (Hotcakes) | Chicken Sausage Links (2) | only in draft B | not found | 180 / 12 / 3 / 0 / 90 / 700 / 2 / 0.5 / 0 / 16 |
| Banana Pudding Farmer's Choice (Hotcakes) | Hashbrowns | only in draft B | not found | 180 / 7 / 1 / 0 / 0 / 10 / 28 / 3 / 1 / 2 |
| Banana Pudding Farmer's Choice (Hotcakes) | Home fries | only in draft B | not found | 180 / 10 / 2.5 / 0 / 0 / 15 / 21 / 2 / 2 / 2 |
| Banana Pudding Farmer's Choice (Hotcakes) | Fresh-Cut Fruit (Apples, Blueberries, Bananas, Strawberries) | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 0 / 20 / 3 / 12 / 1 |
| Banana Pudding Farmer's Choice (Hotcakes) | Fresh-Cut Fruit (Apples, Blueberries, Bananas) | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 18 / 2 / 10 / 0.5 |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Egg Whites | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Freshly Cracked | only in draft B | not found | 180 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / – / 15 |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Scrambled | only in draft B | not found | 160 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / – / 14 |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Bob Evans Sausage Links (3) | only in draft B | not found | 320 / 29 / 10 / 0 / 0 / 590 / 0.5 / 0 / – / 14 |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Bob Evans Sausage Patties (2) | only in draft B | not found | 260 / 21 / 8 / 0 / 45 / 600 / 0 / 0 / – / 17 |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Hardwood-Smoked Bacon (3) | only in draft B | not found | 190 / 14 / 4.5 / 0 / 40 / 670 / 0.5 / 0 / – / 13 |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Hickory-Smoked Ham | only in draft B | not found | 100 / 2.5 / 1 / 0 / 35 / 1440 / 2 / 0 / – / 17 |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Chicken Sausage Links (2) | only in draft B | not found | 180 / 12 / 3 / 0 / 90 / 700 / 2 / 0.5 / – / 16 |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Hashbrowns | only in draft B | not found | 180 / 7 / 1 / 0 / 0 / 10 / 28 / 3 / – / 2 |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Home fries | only in draft B | not found | 180 / 10 / 2.5 / 0 / 0 / 15 / 21 / 2 / – / 2 |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Fresh-Cut Fruit (Apples, Blueberries, Bananas, Strawberries) | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 0 / 20 / 3 / – / 1 |
| Banana Pudding Farmer's Choice (Brioche French Toast) | Fresh-Cut Fruit (Apples, Blueberries, Bananas) | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 18 / 2 / – / 0.5 |
| Homestead Farmer's Choice | Egg Whites | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 |
| Homestead Farmer's Choice | Freshly Cracked | only in draft B | not found | 180 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / – / 15 |
| Homestead Farmer's Choice | Scrambled | only in draft B | not found | 160 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / – / 14 |
| Homestead Farmer's Choice | Bob Evans Sausage Links (3) | only in draft B | not found | 320 / 29 / 10 / 0 / 0 / 590 / 0.5 / 0 / – / 14 |
| Homestead Farmer's Choice | Bob Evans Sausage Patties (2) | only in draft B | not found | 260 / 21 / 8 / 0 / 45 / 600 / 0 / 0 / – / 17 |
| Homestead Farmer's Choice | Hardwood-Smoked Bacon (3) | only in draft B | not found | 190 / 14 / 4.5 / 0 / 40 / 670 / 0.5 / 0 / – / 13 |
| Homestead Farmer's Choice | Hickory-Smoked Ham | only in draft B | not found | 100 / 2.5 / 1 / 0 / 35 / 1440 / 2 / 0 / – / 17 |
| Homestead Farmer's Choice | Chicken Sausage Links (2) | only in draft B | not found | 180 / 12 / 3 / 0 / 90 / 700 / 2 / 0.5 / – / 16 |
| Banana Berry Farmer's Choice | Egg Whites | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 |
| Banana Berry Farmer's Choice | Freshly Cracked | only in draft B | not found | 180 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / 0 / – |
| Banana Berry Farmer's Choice | Scrambled | only in draft B | not found | 160 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / 0 / – |
| Banana Berry Farmer's Choice | Bob Evans Sausage Links (3) | only in draft B | not found | 320 / 29 / 10 / 0 / – / 590 / 0.5 / 0 / 0 / – |
| Banana Berry Farmer's Choice | Bob Evans Sausage Patties (2) | only in draft B | not found | 260 / 21 / 8 / 0 / 45 / 600 / 0 / 0 / 0 / – |
| Banana Berry Farmer's Choice | Hardwood-Smoked Bacon (3) | only in draft B | not found | 190 / 14 / 4.5 / 0 / 40 / 670 / 0.5 / 0 / 0 / – |
| Banana Berry Farmer's Choice | Hickory-Smoked Ham | only in draft B | not found | 100 / 2.5 / 1 / 0 / 35 / 1440 / 2 / 0 / 2 / – |
| Banana Berry Farmer's Choice | Chicken Sausage Links (2) | only in draft B | not found | 180 / 12 / 3 / 0 / 90 / 700 / 2 / 0.5 / 0 / – |
| Farmer's Choice | Egg Whites | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 |
| Farmer's Choice | Freshly Cracked | only in draft B | not found | 180 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / 0 / – |
| Farmer's Choice | Scrambled | only in draft B | not found | 160 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / 0 / – |
| Farmer's Choice | Bob Evans Sausage Links (3) | only in draft B | not found | 320 / 29 / 10 / 0 / – / 590 / 0.5 / 0 / 0 / – |
| Farmer's Choice | Bob Evans Sausage Patties (2) | only in draft B | not found | 260 / 21 / 8 / 0 / 45 / 600 / 0 / 0 / 0 / – |
| Farmer's Choice | Hardwood-Smoked Bacon (3) | only in draft B | not found | 190 / 14 / 4.5 / 0 / 40 / 670 / 0.5 / 0 / 0 / – |
| Farmer's Choice | Hickory-Smoked Ham | only in draft B | not found | 100 / 2.5 / 1 / 0 / 35 / 1440 / 2 / 0 / 2 / – |
| Farmer's Choice | Chicken Sausage Links (2) | only in draft B | not found | 180 / 12 / 3 / 0 / 90 / 700 / 2 / 0.5 / 0 / – |
| Farmer's Choice | Brioche French Toast (1) (with Whipped Butter Blend and Syrup) | only in draft B | not found | 560 / 15 / 4.5 / 0 / 90 / 650 / 97 / 1 / 35 / – |
| Farmer's Choice | Hotcakes (Served w/ Whipped Butter Blend & Syrup) | only in draft B | not found | 940 / 24 / 8 / 0 / 15 / 1480 / 170 / 3 / 29 / – |
| Cinnamon Roll Farmer's Choice | Egg Whites | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 |
| Cinnamon Roll Farmer's Choice | Freshly Cracked | only in draft B | not found | 180 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / 0 / – |
| Cinnamon Roll Farmer's Choice | Scrambled | only in draft B | not found | 160 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / 0 / – |
| Cinnamon Roll Farmer's Choice | Hashbrowns | only in draft B | not found | 200 / 12 / 2 / 0 / 110 / 22 / 2 / 0.5 / 2 / – |
| Cinnamon Roll Farmer's Choice | Home fries | only in draft B | not found | 180 / 10 / 2 / 0 / 15 / 21 / 2 / 2 / 2 / – |
| Cinnamon Roll Farmer's Choice | Fresh-Cut Fruit (Apples, Blueberries, Bananas, Strawberries) | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 0 / 20 / 3 / 12 / 1 |
| Cinnamon Roll Farmer's Choice | Fresh-Cut Fruit (Apples, Blueberries, Bananas) | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 18 / 2 / 10 / 0.5 |
| Cinnamon Roll Farmer's Choice | Bob Evans Sausage Links (3) | only in draft B | not found | 320 / 29 / 10 / 0 / – / 590 / 0.5 / 0 / 0 / 14 |
| Cinnamon Roll Farmer's Choice | Bob Evans Sausage Patties (2) | only in draft B | not found | 260 / 21 / 8 / 0 / 45 / 600 / 0 / 0 / 0 / – |
| Cinnamon Roll Farmer's Choice | Hardwood-Smoked Bacon (3) | only in draft B | not found | 190 / 14 / 4.5 / 0 / 40 / 670 / 0.5 / 0 / 0 / – |
| Cinnamon Roll Farmer's Choice | Hickory-Smoked Ham | only in draft B | not found | 100 / 2.5 / 1 / 0 / 35 / 1440 / 2 / 0 / 2 / – |
| Cinnamon Roll Farmer's Choice | Chicken Sausage Links (2) | only in draft B | not found | 180 / 12 / 3 / 0 / 90 / 700 / 2 / 0.5 / 0 / – |
| Double Meat Farmer's Choice | Egg Whites | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / – |
| Double Meat Farmer's Choice | Freshly Cracked | only in draft B | not found | 180 / 13 / 4 / 0 / 405 / 150 / 2 / 1 / 0 / – |
| Double Meat Farmer's Choice | Scrambled | only in draft B | not found | 160 / 11 / 3.5 / 0 / 420 / 280 / 1 / 0 / 0 / – |
| Double Meat Farmer's Choice | Hardwood-Smoked Bacon (3) | only in draft B | not found | 190 / 14 / 4.5 / 0 / 40 / 670 / 0.5 / 0 / 0 / – |
| Double Meat Farmer's Choice | Bob Evans Sausage Links (3) | only in draft B | not found | 320 / 29 / 10 / 0 / 0 / 590 / 0.5 / 0 / 0 / – |
| Egg Whites | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 200 / 0.5 / 0 / 0.5 / 12 |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Banana Berry Farmer's Choice | 1 serving | 1010 / 25 / 8 / 0 / 15 / 1480 / 188 / 6 / 40 / 13 |
| Chocolate Strawberry Hotcakes | 1 serving | 1080 / 25 / 11 / 0 / 0 / 1820 / 196 / 7 / 72 / 12 |
| Whipped Butter Blend | 1 serving | 90 / 10 / 3.5 / 0 / 5 / 95 / 0 / 0 / 0 / 0 |
