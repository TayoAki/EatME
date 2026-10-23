# Olive Garden: lines for a person

Guide: https://media.olivegarden.com/en_us/pdf/olive_garden_nutrition.pdf (read 2026-10-22). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (95)

Fix each line in `menus/olive-garden.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| add broccoli | 1 serving | only in draft B | not found | 130 / 12 / 1 / 0 / 0 / 200 / 4 / 2 / 1 / 2 |
| Herb-Grilled Salmon Coho (Regional) | 1 serving | only in draft B | not found | 510 / 31 / 9 / 0 / 130 / 1020 / 9 / 4 / 2 / 50 |
| Small Shells | 1 serving | only in draft B | not found | 210 / 2 / 0 / 0 / 0 / 5 / 42 / 2 / 2 / 7 |
| Tomato Sauce | 1 serving | only in draft B | not found | 80 / 5 / 0.5 / 0 / 0 / 420 / 8 / 1 / 5 / 1 |
| Meatball | 1 serving | only in draft B | not found | 160 / 13 / 6 / 0.5 / 20 / 350 / 2 / 0.5 / 0 / 8 |
| Shrimp | 1 serving | only in draft B | not found | 45 / 0 / 0 / 0 / 75 / 130 / 0 / 0 / 0 / 10 |
| Cheese Ravioli | 1 serving | only in draft B | not found | 340 / 16 / 8 / 0 / 50 / 980 / 33 / 3 / 6 / 17 |
| Cheese Pizza | 1 serving | only in draft B | not found | 400 / 13 / 7 / 0 / 25 / 720 / 54 / 3 / 4 / 17 |
| add pepperoni | 1 serving | only in draft B | not found | 60 / 5 / 2 / 0 / 15 / 210 / 0 / 0 / 0 / 2 |
| Chicken Fingers | 1 serving | only in draft B | not found | 300 / 15 / 1.5 / 0 / 65 / 580 / 15 / 0 / 0 / 25 |
| Macaroni & Cheese | 1 serving | only in draft B | not found | 360 / 14 / 8 / 0 / 40 / 870 / 45 / 2 / 6 / 16 |
| Grapes | 1 serving | only in draft B | not found | 40 / 0 / 0 / 0 / 0 / 0 / 11 / 0.5 / 9 / 0 |
| French Fries | 1 serving | only in draft B | not found | 290 / 14 / 1 / 0 / 0 / 310 / 37 / 5 / 0 / 5 |
| add ketchup | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 640 / 20 / 0.5 / 16 / 0.5 |
| Spaghetti with Tomato Sauce | 1 serving | only in draft B | not found | 180 / 4.5 / 0.5 / 0 / 0 / 290 / 30 / 2 / 5 / 5 |
| Milk, 1% | 1 serving | only in draft B | not found | 100 / 2.5 / 1.5 / 0 / 10 / 105 / 12 / 0 / 12 / 8 |
| Chocolate Milk, 1% | 1 serving | only in draft B | not found | 180 / 2.5 / 1.5 / 0 / 10 / 135 / 31 / 0 / 29 / 8 |
| Whole Chocolate Milk | 1 serving | only in draft B | not found | 210 / 8 / 5 / 0 / 30 / 150 / 26 / 2 / 24 / 8 |
| Raspberry Lemonade | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 10 / 30 / 0 / 28 / 0 |
| Juice, Apple | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 50 / 42 / 0 / 42 / 0 |
| Juice, Cranberry | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 50 / 45 / 0 / 45 / 0 |
| Juice, Orange | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 10 / 40 / 0 / 36 / 3 |
| Juice, Pineapple | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 5 / 48 / 0.5 / 45 / 1 |
| Smoothie, Strawberry | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 60 / 0 / 55 / 0 |
| Smoothie, Peach | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 10 / 61 / 0 / 59 / 0 |
| Salad without Croutons | 1 serving | only in draft B | not found | 110 / 8 / 1.5 / 0 / 2.5 / 670 / 7 / 2 / 3 / 2 |
| Tuscan Sirloin | 6 oz. | only in draft B | not found | 480 / 30 / 10 / 1 / 135 / 1680 / 9 / 4 / 2 / 46 |
| Grilled Chicken Parmigiana | 1 serving | only in draft B | not found | 810 / 33 / 13 / 0 / 250 / 3040 / 59 / 7 / 10 / 75 |
| Rotini Pasta with Marinara | 1 serving | only in draft B | not found | 530 / 12 / 0.5 / 0 / 100 / 1530 / 94 / 8 / 10 / 13 |
| Rotini Pasta with Meat Sauce | 1 serving | only in draft B | not found | 680 / 22 / 7 / 0 / 160 / 1300 / 96 / 6 / 13 / 23 |
| Kids Grilled Chicken with Rotini Pasta & Marinara | 1 serving | only in draft B | not found | 430 / 9 / 1 / 0 / 120 / 1310 / 58 / 5 / 14 / 33 |
| Kids Rotini Pasta with Marinara | 1 serving | only in draft B | not found | 260 / 6 / 0 / 0 / 50 / 770 / 47 / 4 / 5 / 6 |
| Kids Rotini Pasta with Meat Sauce | 1 serving | only in draft B | not found | 340 / 11 / 3.5 / 0 / 80 / 650 / 48 / 3 / 7 / 12 |
| OG's Old Fashioned | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 11 / 0 |
| Pineapple Coconut Margarita | 1 serving | only in draft B | not found | 300 / 2.5 / 2 / 0 / 0 / 15 / 41 / 1 / 37 / 0 |
| Frozen Strawberry-Mango Margarita | 1 serving | only in draft B | not found | 330 / 0 / 0 / 0 / 0 / 20 / 62 / 3 / 52 / 0 |
| Frozen Green Apple Margarita (where available) | 1 serving | only in draft B | not found | 390 / 0 / 0 / 0 / 0 / 30 / 71 / 3 / 63 / 0 |
| Strawberry Frose (where available) | 1 serving | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 15 / 44 / 1 / 38 / 0 |
| Italian Margarita | 1 serving | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 30 / 58 / 4 / 49 / 0.5 |
| Strawberry Limoncello Margarita | 1 serving | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 15 / 43 / 2 / 38 / 0 |
| Blue Capri | 1 serving | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 20 / 49 / 2 / 45 / 0 |
| Italian Rum Punch | 1 serving | only in draft B | not found | 320 / 0 / 0 / 0 / 0 / 30 / 48 / 3 / 41 / 0 |
| Sicilian Sunset | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 5 / 35 / 0 / 33 / 0 |
| Spiked Strawberry Lemonade | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 21 / 0 / 20 / 0 |
| Green Apple Moscato Sangria | Glass | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 15 / 39 / 0 / 37 / 0 |
| Green Apple Moscato Sangria | Pitcher | only in draft B | not found | 830 / 0 / 0 / 0 / 0 / 50 / 161 / 3 / 150 / 2 |
| Berry Sangria | Glass | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 5 / 30 / 0 / 27 / 0 |
| Berry Sangria | Pitcher | only in draft B | not found | 870 / 0 / 0 / 0 / 0 / 25 / 126 / 3 / 112 / 1 |
| Watermelon Moscato Sangria | Glass | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 15 / 34 / 0 / 31 / 0 |
| Watermelon Moscato Sangria | Pitcher | only in draft B | not found | 720 / 0 / 0 / 0 / 0 / 60 / 138 / 3 / 128 / 0.5 |
| Wine - Whites and Rosé | Glass | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 10 / 4 / 0 / 2 / 0 |
| Wine - Whites and Rosé | Grande Pour | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 15 / 6 / 0 / 3 / 0 |
| Wine - Whites and Rosé | Bottle | only in draft B | not found | 630 / 0 / 0 / 0 / 0 / 35 / 16 / 0 / 7 / 0.5 |
| Wine - Reds | Glass | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 1 / 0 |
| Wine - Reds | Grande Pour | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 8 / 0 / 2 / 0 |
| Wine - Reds | Bottle | only in draft B | not found | 660 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 5 / 0.5 |
| Wine - Sparkling Prosecco | Glass | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 10 / 0 / 10 / 0.5 |
| Wine - Sparkling Prosecco | Bottle | only in draft B | not found | 660 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 5 / 0.5 |
| Beer - Light Draft | 16 oz | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 15 / 6 / 0 / 6 / 1 |
| Beer - Light Draft | 22 oz | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 20 / 8 / 0 / 8 / 2 |
| Beer - Regular Draft | 16 oz | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 5 / 16 / 0 / 14 / 3 |
| Beer - Regular Draft | 22 oz | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 5 / 22 / 0 / 20 / 4 |
| Beer - Bottle, Light | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 10 / 5 / 0 / 5 / 0.5 |
| Beer - Bottle, Regular | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 10 / 11 / 0 / 11 / 1 |
| Beer - Bottle, Angry Orchard Hard Cider | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 10 / 31 / 0 / 23 / 0 |
| Beer - Bottle, Non-Alcoholic | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 10 / 13 / 0 / 13 / 0.5 |
| Coffee | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Tea | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 0.5 / 0 / 0 / 0 |
| Cappuccino | 1 serving | only in draft B | not found | 150 / 6 / 3 / 0 / 30 / 70 / 13 / 0.5 / 10 / 9 |
| Iced Coffee - Caramel | 1 serving | only in draft B | not found | 250 / 7 / 4 / 0 / 20 / 90 / 40 / 0 / 31 / 7 |
| Iced Coffee - Traditional | 1 serving | only in draft B | not found | 210 / 7 / 4 / 0 / 20 / 90 / 29 / 0 / 21 / 7 |
| Iced Coffee - Vanilla | 1 serving | only in draft B | not found | 240 / 7 / 4 / 0 / 20 / 90 / 38 / 0 / 30 / 7 |
| Lavazza Espresso | 1 serving | only in draft B | not found | 60 / 1.5 / 0 / 0 / 15 / 15 / 6 / 0.5 / 3 / 5 |
| NAB Half Tea + Half Lemonade | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 15 / 22 / 0 / 21 / 0 |
| Iced Tea, Bellini Peach-Raspberry | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 10 / 18 / 0 / 17 / 0 |
| Iced Tea, Mango-Passion Fruit | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 15 / 26 / 0 / 24 / 0 |
| Italian Bottled Water | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Lemonade, Classic | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 20 / 43 / 0 / 42 / 0 |
| Lemonade, Raspberry | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 15 / 45 / 0 / 42 / 0 |
| Limonata, Sweet Pear | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 20 / 60 / 0 / 57 / 0 |
| Limonata, Strawberry-Passion Fruit | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 30 / 48 / 0 / 44 / 0 |
| Coke | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 45 / 39 / 0 / 39 / 0 |
| Coke Zero | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 0 / 0 |
| Diet Coke | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 0 / 0 |
| Dr. Pepper | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 55 / 41 / 0 / 41 / 0 |
| Minute Maid Lemonade | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 20 / 43 / 0 / 42 / 0 |
| Sprite | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 65 / 38 / 0 / 38 / 0 |
| Juice, Grapefruit | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 45 / 42 / 0 / 32 / 4 |
| Juice, Tomato | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 1280 / 19 / 4 / 13 / 4 |
| Famous House Salad To Go | 1 serving | only in draft B | not found | 290 / 17 / 2.5 / 0 / 10 / 1380 / 30 / 6 / 10 / 8 |
| Chicken & Gnocchi | Per One Serving, Serves Two | only in draft B | not found | 230 / 12 / 4.5 / 0 / 55 / 1290 / 22 / 1 / 4 / 11 |
| Minestrone | Per One Serving, Serves Two | only in draft B | not found | 110 / 1 / 0 / 0 / 0 / 810 / 17 / 4 / 4 / 5 |
| Pasta Fagioli | Per One Serving, Serves Two | only in draft B | not found | 150 / 5 / 2 / 0 / 15 / 710 / 16 / 3 / 4 / 8 |
| Zuppa Toscana | Per One Serving, Serves Two | only in draft B | not found | 220 / 15 / 7 / 0 / 40 / 790 / 15 / 2 / 2 / 7 |
| Stellini Soup | Per One Serving, Serves Two | only in draft B | not found | 200 / 7 / 2.5 / 0 / 20 / 1240 / 22 / 1 / 2 / 9 |

## Spot check (5 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Spaghetti & Meatballs with Marinara | 1 serving | 690 / 36 / 14 / 1.5 / 45 / 1670 / 67 / 6 / 10 / 27 |
| Meat Sauce | 1 serving | 300 / 19 / 7 / 0 / 60 / 1040 / 19 / 2 / 13 / 14 |
| Pumpkin Cookie Butter Cheesecake | 1 serving | 620 / 38 / 21 / 0.5 / 165 / 65 / 57 / 2 / 29 / 10 |
| Five Cheese Marinara dipping sauce | Large | 400 / 33 / 17 / 1 / 80 / 1300 / 17 / 3 / 10 / 11 |
| Five Cheese Marinara | 1 serving | 400 / 33 / 17 / 1 / 80 / 1300 / 17 / 3 / 10 / 11 |
