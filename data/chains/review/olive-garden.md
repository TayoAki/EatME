# Olive Garden: lines for a person

Guide: https://media.olivegarden.com/en_us/pdf/olive_garden_nutrition.pdf (read 2026-10-22). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (95)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/olive-garden.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| add broccoli | 1 serving | only in draft B | not found | 130 / 12 / 1 / 0 / 0 / 200 / 4 / 2 / 1 / 2 | B: numbers found after the name (line 191); check the size |
| Herb-Grilled Salmon Coho (Regional) | 1 serving | only in draft B | not found | 510 / 31 / 9 / 0 / 130 / 1020 / 9 / 4 / 2 / 50 | B: numbers found after the name (line 271); check the size |
| Small Shells | 1 serving | only in draft B | not found | 210 / 2 / 0 / 0 / 0 / 5 / 42 / 2 / 2 / 7 | B: numbers found after the name (line 380); check the size |
| Tomato Sauce | 1 serving | only in draft B | not found | 80 / 5 / 0.5 / 0 / 0 / 420 / 8 / 1 / 5 / 1 | B: numbers found after the name (line 388); check the size |
| Meatball | 1 serving | only in draft B | not found | 160 / 13 / 6 / 0.5 / 20 / 350 / 2 / 0.5 / 0 / 8 | B: not as drafted (line 394 lacks 0.5) |
| Shrimp | 1 serving | only in draft B | not found | 45 / 0 / 0 / 0 / 75 / 130 / 0 / 0 / 0 / 10 | B: numbers found after the name (line 403); check the size |
| Cheese Ravioli | 1 serving | only in draft B | not found | 340 / 16 / 8 / 0 / 50 / 980 / 33 / 3 / 6 / 17 | B: numbers found after the name (line 405); check the size |
| Cheese Pizza | 1 serving | only in draft B | not found | 400 / 13 / 7 / 0 / 25 / 720 / 54 / 3 / 4 / 17 | B: numbers found after the name (line 407); check the size |
| add pepperoni | 1 serving | only in draft B | not found | 60 / 5 / 2 / 0 / 15 / 210 / 0 / 0 / 0 / 2 | B: numbers found after the name (line 409); check the size |
| Chicken Fingers | 1 serving | only in draft B | not found | 300 / 15 / 1.5 / 0 / 65 / 580 / 15 / 0 / 0 / 25 | B: numbers found after the name (line 411); check the size |
| Macaroni & Cheese | 1 serving | only in draft B | not found | 360 / 14 / 8 / 0 / 40 / 870 / 45 / 2 / 6 / 16 | B: numbers found after the name (line 413); check the size |
| Grapes | 1 serving | only in draft B | not found | 40 / 0 / 0 / 0 / 0 / 0 / 11 / 0.5 / 9 / 0 | B: not as drafted (line 415 lacks 0.5) |
| French Fries | 1 serving | only in draft B | not found | 290 / 14 / 1 / 0 / 0 / 310 / 37 / 5 / 0 / 5 | B: numbers found after the name (line 417); check the size |
| add ketchup | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 640 / 20 / 0.5 / 16 / 0.5 | B: not as drafted (line 420 lacks 0.5) |
| Spaghetti with Tomato Sauce | 1 serving | only in draft B | not found | 180 / 4.5 / 0.5 / 0 / 0 / 290 / 30 / 2 / 5 / 5 | B: numbers found after the name (line 427); check the size |
| Milk, 1% | 1 serving | only in draft B | not found | 100 / 2.5 / 1.5 / 0 / 10 / 105 / 12 / 0 / 12 / 8 | B: numbers found after the name (line 429); check the size |
| Chocolate Milk, 1% | 1 serving | only in draft B | not found | 180 / 2.5 / 1.5 / 0 / 10 / 135 / 31 / 0 / 29 / 8 | B: numbers found after the name (line 438); check the size |
| Whole Chocolate Milk | 1 serving | only in draft B | not found | 210 / 8 / 5 / 0 / 30 / 150 / 26 / 2 / 24 / 8 | B: numbers found after the name (line 440); check the size |
| Raspberry Lemonade | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 10 / 30 / 0 / 28 / 0 | B: numbers found after the name (line 442); check the size |
| Juice, Apple | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 50 / 42 / 0 / 42 / 0 | B: numbers found after the name (line 444); check the size |
| Juice, Cranberry | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 50 / 45 / 0 / 45 / 0 | B: numbers found after the name (line 446); check the size |
| Juice, Orange | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 10 / 40 / 0 / 36 / 3 | B: numbers found after the name (line 448); check the size |
| Juice, Pineapple | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 5 / 48 / 0.5 / 45 / 1 | B: not as drafted (line 450 lacks 0.5) |
| Smoothie, Strawberry | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 60 / 0 / 55 / 0 | B: numbers found after the name (line 452); check the size |
| Smoothie, Peach | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 10 / 61 / 0 / 59 / 0 | B: numbers found after the name (line 454); check the size |
| Salad without Croutons | 1 serving | only in draft B | not found | 110 / 8 / 1.5 / 0 / 2.5 / 670 / 7 / 2 / 3 / 2 | B: not as drafted (line 459 lacks 2.5) |
| Tuscan Sirloin | 6 oz. | only in draft B | not found | 480 / 30 / 10 / 1 / 135 / 1680 / 9 / 4 / 2 / 46 | B: numbers found after the name (line 461); check the size |
| Grilled Chicken Parmigiana | 1 serving | only in draft B | not found | 810 / 33 / 13 / 0 / 250 / 3040 / 59 / 7 / 10 / 75 | B: numbers found after the name (line 470); check the size |
| Rotini Pasta with Marinara | 1 serving | only in draft B | not found | 530 / 12 / 0.5 / 0 / 100 / 1530 / 94 / 8 / 10 / 13 | B: numbers found after the name (line 476); check the size |
| Rotini Pasta with Meat Sauce | 1 serving | only in draft B | not found | 680 / 22 / 7 / 0 / 160 / 1300 / 96 / 6 / 13 / 23 | B: numbers found after the name (line 478); check the size |
| Kids Grilled Chicken with Rotini Pasta & Marinara | 1 serving | only in draft B | not found | 430 / 9 / 1 / 0 / 120 / 1310 / 58 / 5 / 14 / 33 | B: numbers found after the name (line 480); check the size |
| Kids Rotini Pasta with Marinara | 1 serving | only in draft B | not found | 260 / 6 / 0 / 0 / 50 / 770 / 47 / 4 / 5 / 6 | B: numbers found after the name (line 482); check the size |
| Kids Rotini Pasta with Meat Sauce | 1 serving | only in draft B | not found | 340 / 11 / 3.5 / 0 / 80 / 650 / 48 / 3 / 7 / 12 | B: numbers found after the name (line 484); check the size |
| OG's Old Fashioned | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 11 / 0 | B: numbers found after the name (line 487); check the size |
| Pineapple Coconut Margarita | 1 serving | only in draft B | not found | 300 / 2.5 / 2 / 0 / 0 / 15 / 41 / 1 / 37 / 0 | B: numbers found after the name (line 489); check the size |
| Frozen Strawberry-Mango Margarita | 1 serving | only in draft B | not found | 330 / 0 / 0 / 0 / 0 / 20 / 62 / 3 / 52 / 0 | B: numbers found after the name (line 491); check the size |
| Frozen Green Apple Margarita (where available) | 1 serving | only in draft B | not found | 390 / 0 / 0 / 0 / 0 / 30 / 71 / 3 / 63 / 0 | B: numbers found after the name (line 493); check the size |
| Strawberry Frose (where available) | 1 serving | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 15 / 44 / 1 / 38 / 0 | B: numbers found after the name (line 495); check the size |
| Italian Margarita | 1 serving | only in draft B | not found | 380 / 0 / 0 / 0 / 0 / 30 / 58 / 4 / 49 / 0.5 | B: not as drafted (line 497 lacks 0.5) |
| Strawberry Limoncello Margarita | 1 serving | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 15 / 43 / 2 / 38 / 0 | B: numbers found after the name (line 499); check the size |
| Blue Capri | 1 serving | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 20 / 49 / 2 / 45 / 0 | B: numbers found after the name (line 501); check the size |
| Italian Rum Punch | 1 serving | only in draft B | not found | 320 / 0 / 0 / 0 / 0 / 30 / 48 / 3 / 41 / 0 | B: numbers found after the name (line 503); check the size |
| Sicilian Sunset | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 5 / 35 / 0 / 33 / 0 | B: numbers found after the name (line 505); check the size |
| Spiked Strawberry Lemonade | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 21 / 0 / 20 / 0 | B: numbers found after the name (line 507); check the size |
| Green Apple Moscato Sangria | Glass | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 15 / 39 / 0 / 37 / 0 | B: numbers found after the name (line 509); check the size |
| Green Apple Moscato Sangria | Pitcher | only in draft B | not found | 830 / 0 / 0 / 0 / 0 / 50 / 161 / 3 / 150 / 2 | B: numbers found after the name (line 509); check the size |
| Berry Sangria | Glass | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 5 / 30 / 0 / 27 / 0 | B: numbers found after the name (line 513); check the size |
| Berry Sangria | Pitcher | only in draft B | not found | 870 / 0 / 0 / 0 / 0 / 25 / 126 / 3 / 112 / 1 | B: numbers found after the name (line 513); check the size |
| Watermelon Moscato Sangria | Glass | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 15 / 34 / 0 / 31 / 0 | B: numbers found after the name (line 517); check the size |
| Watermelon Moscato Sangria | Pitcher | only in draft B | not found | 720 / 0 / 0 / 0 / 0 / 60 / 138 / 3 / 128 / 0.5 | B: not as drafted (line 517 lacks 0.5) |
| Wine - Whites and Rosé | Glass | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 10 / 4 / 0 / 2 / 0 | B: numbers found after the name (line 521); check the size |
| Wine - Whites and Rosé | Grande Pour | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 15 / 6 / 0 / 3 / 0 | B: numbers found after the name (line 521); check the size |
| Wine - Whites and Rosé | Bottle | only in draft B | not found | 630 / 0 / 0 / 0 / 0 / 35 / 16 / 0 / 7 / 0.5 | B: not as drafted (line 521 lacks 0.5) |
| Wine - Reds | Glass | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 1 / 0 | B: numbers found after the name (line 534); check the size |
| Wine - Reds | Grande Pour | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 8 / 0 / 2 / 0 | B: numbers found after the name (line 534); check the size |
| Wine - Reds | Bottle | only in draft B | not found | 660 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 5 / 0.5 | B: not as drafted (line 534 lacks 0.5) |
| Wine - Sparkling Prosecco | Glass | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 10 / 10 / 0 / 10 / 0.5 | B: not as drafted (line 540 lacks 0.5) |
| Wine - Sparkling Prosecco | Bottle | only in draft B | not found | 660 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 5 / 0.5 | B: not as drafted (line 540 lacks 0.5) |
| Beer - Light Draft | 16 oz | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 15 / 6 / 0 / 6 / 1 | B: numbers found after the name (line 544); check the size |
| Beer - Light Draft | 22 oz | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 20 / 8 / 0 / 8 / 2 | B: numbers found after the name (line 544); check the size |
| Beer - Regular Draft | 16 oz | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 5 / 16 / 0 / 14 / 3 | B: numbers found after the name (line 548); check the size |
| Beer - Regular Draft | 22 oz | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 5 / 22 / 0 / 20 / 4 | B: numbers found after the name (line 548); check the size |
| Beer - Bottle, Light | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 10 / 5 / 0 / 5 / 0.5 | B: not as drafted (line 552 lacks 0.5) |
| Beer - Bottle, Regular | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 10 / 11 / 0 / 11 / 1 | B: numbers found after the name (line 554); check the size |
| Beer - Bottle, Angry Orchard Hard Cider | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 10 / 31 / 0 / 23 / 0 | B: numbers found after the name (line 563); check the size |
| Beer - Bottle, Non-Alcoholic | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 10 / 13 / 0 / 13 / 0.5 | B: not as drafted (line 565 lacks 0.5) |
| Coffee | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 568); check the size, mostly zeros: look |
| Tea | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 0.5 / 0 / 0 / 0 | B: not as drafted (line 570 lacks 0.5) |
| Cappuccino | 1 serving | only in draft B | not found | 150 / 6 / 3 / 0 / 30 / 70 / 13 / 0.5 / 10 / 9 | B: not as drafted (line 572 lacks 0.5) |
| Iced Coffee - Caramel | 1 serving | only in draft B | not found | 250 / 7 / 4 / 0 / 20 / 90 / 40 / 0 / 31 / 7 | B: numbers found after the name (line 574); check the size |
| Iced Coffee - Traditional | 1 serving | only in draft B | not found | 210 / 7 / 4 / 0 / 20 / 90 / 29 / 0 / 21 / 7 | B: numbers found after the name (line 576); check the size |
| Iced Coffee - Vanilla | 1 serving | only in draft B | not found | 240 / 7 / 4 / 0 / 20 / 90 / 38 / 0 / 30 / 7 | B: numbers found after the name (line 578); check the size |
| Lavazza Espresso | 1 serving | only in draft B | not found | 60 / 1.5 / 0 / 0 / 15 / 15 / 6 / 0.5 / 3 / 5 | B: not as drafted (line 580 lacks 0.5) |
| NAB Half Tea + Half Lemonade | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 15 / 22 / 0 / 21 / 0 | B: numbers found after the name (line 582); check the size |
| Iced Tea, Bellini Peach-Raspberry | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 10 / 18 / 0 / 17 / 0 | B: numbers found after the name (line 584); check the size |
| Iced Tea, Mango-Passion Fruit | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 15 / 26 / 0 / 24 / 0 | B: numbers found after the name (line 586); check the size |
| Italian Bottled Water | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 595); check the size, mostly zeros: look |
| Lemonade, Classic | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 20 / 43 / 0 / 42 / 0 | B: numbers found after the name (line 597); check the size |
| Lemonade, Raspberry | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 15 / 45 / 0 / 42 / 0 | B: numbers found after the name (line 599); check the size |
| Limonata, Sweet Pear | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 20 / 60 / 0 / 57 / 0 | B: numbers found after the name (line 601); check the size |
| Limonata, Strawberry-Passion Fruit | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 30 / 48 / 0 / 44 / 0 | B: numbers found after the name (line 603); check the size |
| Coke | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 45 / 39 / 0 / 39 / 0 | B: numbers found after the name (line 605); check the size |
| Coke Zero | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 607); check the size, mostly zeros: look |
| Diet Coke | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 40 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 609); check the size, mostly zeros: look |
| Dr. Pepper | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 55 / 41 / 0 / 41 / 0 | B: numbers found after the name (line 611); check the size |
| Minute Maid Lemonade | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 20 / 43 / 0 / 42 / 0 | B: numbers found after the name (line 613); check the size |
| Sprite | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 65 / 38 / 0 / 38 / 0 | B: numbers found after the name (line 615); check the size |
| Juice, Grapefruit | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 45 / 42 / 0 / 32 / 4 | B: numbers found after the name (line 628); check the size |
| Juice, Tomato | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 1280 / 19 / 4 / 13 / 4 | B: numbers found after the name (line 634); check the size |
| Famous House Salad To Go | 1 serving | only in draft B | not found | 290 / 17 / 2.5 / 0 / 10 / 1380 / 30 / 6 / 10 / 8 | B: numbers found after the name (line 637); check the size |
| Chicken & Gnocchi | Per One Serving, Serves Two | only in draft B | not found | 230 / 12 / 4.5 / 0 / 55 / 1290 / 22 / 1 / 4 / 11 | B: numbers found after the name (line 107); check the size |
| Minestrone | Per One Serving, Serves Two | only in draft B | not found | 110 / 1 / 0 / 0 / 0 / 810 / 17 / 4 / 4 / 5 | B: numbers found after the name (line 109); check the size |
| Pasta Fagioli | Per One Serving, Serves Two | only in draft B | not found | 150 / 5 / 2 / 0 / 15 / 710 / 16 / 3 / 4 / 8 | B: numbers found after the name (line 111); check the size |
| Zuppa Toscana | Per One Serving, Serves Two | only in draft B | not found | 220 / 15 / 7 / 0 / 40 / 790 / 15 / 2 / 2 / 7 | B: numbers found after the name (line 113); check the size |
| Stellini Soup | Per One Serving, Serves Two | only in draft B | not found | 200 / 7 / 2.5 / 0 / 20 / 1240 / 22 / 1 / 2 / 9 | B: numbers found after the name (line 115); check the size |

## Spot check (5 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Spaghetti & Meatballs with Marinara | 1 serving | 690 / 36 / 14 / 1.5 / 45 / 1670 / 67 / 6 / 10 / 27 |
| Meat Sauce | 1 serving | 300 / 19 / 7 / 0 / 60 / 1040 / 19 / 2 / 13 / 14 |
| Pumpkin Cookie Butter Cheesecake | 1 serving | 620 / 38 / 21 / 0.5 / 165 / 65 / 57 / 2 / 29 / 10 |
| Five Cheese Marinara dipping sauce | Large | 400 / 33 / 17 / 1 / 80 / 1300 / 17 / 3 / 10 / 11 |
| Five Cheese Marinara | 1 serving | 400 / 33 / 17 / 1 / 80 / 1300 / 17 / 3 / 10 / 11 |
