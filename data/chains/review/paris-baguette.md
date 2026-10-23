# Paris Baguette: lines for a person

Guide: https://parisbaguette.com/wp-content/uploads/2026/06/2026-Summer-Nutrition-Chart-US.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (81)

Fix each line in `menus/paris-baguette.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Tiramisu Cake Slice | 1 serving | both read numbers that can't be right: sugars 26 g above carbs 17 g | 430 / 31 / 19 / 0 / 170 / 135 / 17 / 0 / 26 / 5 | 430 / 31 / 19 / 0 / 170 / 135 / 17 / 0 / 26 / 5 |
| Chai Latte | 20oz | only in draft A | 610 / 20 / 15 / 0 / 55 / 400 / 98 / 0 / 87 / 17 | not found |
| Boursin Garlic Cheese Quiche | 1 serving | the guide gives no sodium_mg | 340 / 23 / 14 / 0 / 95 / – / 24 / 1 / 4 / 9 | 340 / 23 / 14 / 0 / 95 / – / 24 / 1 / 4 / 9 |
| Chai Latte | 20oz1 | only in draft B | not found | 610 / 20 / 15 / 0 / 55 / 400 / 98 / 0 / 87 / 17 |
| Iced Black Coffee | 16oz | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 0 |
| Iced Black Coffee | 20oz | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 0 |
| Iced Black Coffee | 24oz | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 20 / 1 / 0 / 0 / 0 |
| Cold Brew | 16oz | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 / 0 |
| Cold Brew | 20oz | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 |
| Cold Brew | 24oz | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 |
| Vanilla Sweet Cream Cold Brew | 16oz | only in draft B | not found | 110 / 7 / 5 / 0 / 30 / 0 / 10 / 0 / 9 / 0 |
| Vanilla Sweet Cream Cold Brew | 20oz | only in draft B | not found | 150 / 7 / 5 / 0 / 30 / 0 / 18 / 0 / 17 / 0 |
| Vanilla Sweet Cream Cold Brew | 24oz | only in draft B | not found | 180 / 7 / 5 / 0 / 30 / 0 / 26 / 0 / 25 / 0 |
| Iced Café Latte | 16oz | only in draft B | not found | 150 / 8 / 4.5 / 0 / 35 / 120 / 12 / 0 / 10 / 9 |
| Iced Café Latte | 20oz | only in draft B | not found | 190 / 10 / 6 / 0 / 40 / 150 / 16 / 0 / 13 / 12 |
| Iced Café Latte | 24oz | only in draft B | not found | 220 / 12 / 7 / 0 / 50 / 180 / 19 / 0 / 16 / 15 |
| Iced Café Mocha | 16oz | only in draft B | not found | 290 / 8 / 5 / 0 / 30 / 120 / 47 / 0 / 45 / 10 |
| Iced Café Mocha | 20oz | only in draft B | not found | 410 / 11 / 6 / 0 / 35 / 150 / 68 / 0 / 66 / 13 |
| Iced Café Mocha | 24oz1 | only in draft B | not found | 530 / 13 / 8 / 0 / 45 / 190 / 89 / 0 / 86 / 17 |
| Iced Vanilla Latte | 16oz | only in draft B | not found | 260 / 7 / 4 / 0 / 30 / 105 / 43 / 0 / 40 / 9 |
| Iced Vanilla Latte | 20oz | only in draft B | not found | 330 / 9 / 5 / 0 / 35 / 130 / 54 / 0 / 50 / 11 |
| Iced Vanilla Latte | 24oz | only in draft B | not found | 410 / 11 / 6 / 0 / 45 / 160 / 65 / 0 / 60 / 14 |
| Iced Caramel Macchiato | 16oz | only in draft B | not found | 200 / 7 / 4.5 / 0 / 30 / 120 / 36 / 0 / 32 / 9 |
| Iced Caramel Macchiato | 20oz | only in draft B | not found | 270 / 9 / 6 / 0 / 40 / 150 / 47 / 0 / 43 / 12 |
| Iced Caramel Macchiato | 24oz | only in draft B | not found | 340 / 11 / 7 / 0 / 45 / 180 / 58 / 0 / 53 / 15 |
| Iced Hazelnut Latte | 16oz | only in draft B | not found | 250 / 7 / 4 / 0 / 30 / 120 / 39 / 0 / 37 / 9 |
| Iced Hazelnut Latte | 20oz | only in draft B | not found | 320 / 9 / 5 / 0 / 35 / 150 / 49 / 0 / 47 / 11 |
| Iced Hazelnut Latte | 24oz | only in draft B | not found | 390 / 11 / 6 / 0 / 45 / 180 / 59 / 0 / 56 / 14 |
| Iced Caramel Latte | 16oz | only in draft B | not found | 130 / 8 / 5 / 0 / 35 / 150 / 35 / 0 / 31 / 10 |
| Iced Caramel Latte | 20oz | only in draft B | not found | 170 / 11 / 7 / 0 / 45 / 200 / 50 / 0 / 44 / 13 |
| Iced Caramel Latte | 24oz1 | only in draft B | not found | 210 / 14 / 8 / 0 / 55 / 250 / 65 / 0 / 57 / 17 |
| Iced Americano | 16oz | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 2 |
| Iced Americano | 20oz | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 3 |
| Iced Americano | 24oz | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 20 / 2 / 0 / 0 / 4 |
| Korean Iced Milk Coffee | 16oz | only in draft B | not found | 90 / 7 / 4 / 0 / 30 / 70 / 4 / 0 / 3 / 3 |
| Korean Iced Milk Coffee | 20oz | only in draft B | not found | 110 / 9 / 5 / 0 / 35 / 85 / 5 / 0 / 4 / 4 |
| Korean Iced Milk Coffee | 24oz | only in draft B | not found | 130 / 10 / 6 / 0 / 45 / 100 / 6 / 0 / 5 / 4 |
| Iced Black Tea | 16oz | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 |
| Iced Black Tea | 20oz | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 10 / 1 / 0 / 0 / 0 |
| Iced Black Tea | 24oz | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 10 / 1 / 0 / 0 / 0 |
| Iced Green Tea | 16oz | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Iced Green Tea | 20oz | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Iced Green Tea | 24oz | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Peach Iced Tea | 16oz | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 5 / 28 / 0 / 28 / 0 |
| Peach Iced | 24oz1 | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 5 / 36 / 0 / 36 / 0 |
| Iced Chai Latte | 16oz | only in draft B | not found | 380 / 13 / 10 / 0 / 35 / 260 / 61 / 0 / 54 / 12 |
| Iced Chai Latte | 20oz | only in draft B | not found | 490 / 16 / 12 / 0 / 45 / 330 / 80 / 0 / 70 / 14 |
| Iced Chai Latte | 24oz1 | only in draft B | not found | 610 / 20 / 15 / 0 / 55 / 400 / 98 / 0 / 87 / 17 |
| Iced Matcha Latte | 16oz | only in draft B | not found | 440 / 8 / 5 / 0 / 30 / 180 / 81 / 0 / 62 / 7 |
| Iced Matcha Latte | 20oz | only in draft B | not found | 570 / 10 / 7 / 0 / 40 / 230 / 104 / 0 / 78 / 9 |
| Iced Matcha Latte | 24oz | only in draft B | not found | 690 / 13 / 8 / 0 / 50 / 280 / 126 / 0 / 94 / 12 |
| Coffee Frappe | 16oz | only in draft B | not found | 200 / 22.5 / 2.5 / 0 / 5 / 95 / 44 / 0 / 43 / 3 |
| Coffee Frappe | 20oz1 | only in draft B | not found | 260 / 3 / 2 / 0 / 10 / 115 / 56 / 0 / 54 / 5 |
| Coffee Frappe | 24oz1 | only in draft B | not found | 310 / 3.5 / 2 / 0 / 10 / 140 / 67 / 0 / 65 / 6 |
| Mocha Frappe | 16oz1 | only in draft B | not found | 230 / 3 / 1.5 / 0 / 10 / 70 / 51 / 2 / 46 / 5 |
| Mocha Frappe | 20oz1 | only in draft B | not found | 300 / 4 / 2.5 / 0 / 10 / 100 / 67 / 3 / 60 / 8 |
| Mocha Frappe | 24oz | only in draft B | not found | 380 / 5 / 3 / 0 / 15 / 125 / 83 / 4 / 74 / 10 |
| Matcha Frappe | 16oz | only in draft B | not found | 420 / 7 / 4.5 / 0 / 30 / 160 / 80 / 0 / 60 / 6 |
| Matcha Frappe | 20oz | only in draft B | not found | 550 / 9 / 6 / 0 / 40 / 210 / 102 / 0 / 76 / 8 |
| Matcha Frappe | 24oz | only in draft B | not found | 670 / 12 / 7 / 0 / 50 / 260 / 125 / 0 / 92 / 11 |
| Lavender Matcha Frappe | 16oz1 | only in draft B | not found | 420 / 6 / 4 / 0 / 25 / 140 / 81 / 0 / 60 / 6 |
| Lavender Matcha Frappe | 20oz1 | only in draft B | not found | 560 / 9 / 6 / 0 / 35 / 190 / 106 / 0 / 79 / 8 |
| Lavender Matcha Frappe | 24oz1 | only in draft B | not found | 690 / 11 / 7 / 0 / 45 / 240 / 131 / 0 / 97 / 10 |
| Strawberry Smoothie | 16oz2 | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 5 / 102 / 0 / 100 / 0 |
| Strawberry Smoothie | 20oz2 | only in draft B | not found | 500 / 0 / 0 / 0 / 0 / 5 / 128 / 0 / 125 / 0 |
| Strawberry Smoothie | 24oz2 | only in draft B | not found | 600 / 0 / 0 / 0 / 0 / 10 / 153 / 0 / 150 / 0 |
| Mango Smoothie | 16oz1 | only in draft B | not found | 320 / 0 / 0 / 0 / 0 / 5 / 81 / 0 / 70 / 0 |
| Mango Smoothie | 20oz2 | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 5 / 102 / 0 / 87 / 0 |
| Mango Smoothie | 24oz1 | only in draft B | not found | 480 / 0 / 0 / 0 / 0 / 10 / 122 / 0 / 105 / 0 |
| Triple Chocolate Chip Cookie | 1 serving | only in draft B | not found | 530 / 26 / 13 / 0 / 40 / 270 / 73 / 2 / 46 / 7 |
| Macadamia Nut Cookie | 1 serving | only in draft B | not found | 580 / 34 / 18 / 0 / 40 / 310 / 65 / 2 / 40 / 8 |
| Decadent Chocolate Brownie | 1 serving | only in draft B | not found | 490 / 27 / 11 / 0 / 90 / 180 / 61 / 0 / 47 / 5 |
| Vegan Chocolate Chip Muffin | 1 serving | only in draft B | not found | 520 / 25 / 5 / 0 / 0 / 400 / 74 / 2 / 47 / 5 |
| Vegan Blueberry Muffin | 1 serving | only in draft B | not found | 420 / 20 / 1 / 0 / 0 / 400 / 64 / 2 / 35 / 5 |
| Mr. Bear | 1 serving | only in draft B | not found | 120 / 7 / 4.5 / 0 / 40 / 75 / 12 / 0 / 8 / 2 |
| Ms. Bear | 1 serving | only in draft B | not found | 110 / 7 / 4.5 / 0 / 40 / 55 / 12 / 0 / 7 / 1 |
| Macaron-Cappuccino | 1 serving | only in draft B | not found | 80 / 4 / 1.5 / 0 / 5 / 10 / 9 / 0 / 8 / 1 |
| Macaron-Double Dark Chocolate | 1 serving | only in draft B | not found | 70 / 3.5 / 1 / 0 / 5 / 5 / 8 / 0 / 7 / 1 |
| Macaron-Green Tea | 1 serving | only in draft B | not found | 80 / 4 / 1.5 / 0 / 5 / 10 / 10 / 0 / 8 / 1 |
| Macaron-Pistachio | 1 serving | only in draft B | not found | 80 / 4 / 1.5 / 0 / 5 / 10 / 9 / 0 / 9 / 1 |
| Macaron-Raspberry Lemon | 1 serving | only in draft B | not found | 70 / 3 / 1 / 0 / 5 / 10 / 10 / 0 / 9 / 1 |

## Spot check (11 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Pain aux Raisins | 1 serving | 310 / 13 / 9 / 0 / 50 / 290 / 42 / 2 / 18 / 5 |
| Jumbo Twisted Donut | 1 serving | 320 / 9 / 2 / 0 / 60 / 410 / 54 / 2 / 14 / 6 |
| Smoked Sausage Bread | 1 serving | 430 / 26 / 10 / 0 / 80 / 1000 / 32 / 1 / 9 / 14 |
| Ham & Cheese Baguette | 1 serving | 560 / 24 / 15 / 0 / 100 / 970 / 55 / 0 / 4 / 29 |
| Pastel de Nata | 1 serving | 150 / 6 / 3.5 / 0 / 40 / 85 / 21 / 1 / 12 / 2 |
| Fresh Mint Lemonade: Strawberry Mint | 16oz | 190 / 0 / 0 / 0 / 0 / 5 / 47 / 0 / 44 / 0 |
| Blueberry Yogurt Cake Slice | 1 serving | 460 / 31 / 18 / 0 / 175 / 90 / 35 / 1 / 26 / 4 |
| Strawberry Croissant | 1 serving | 370 / 21 / 14 / 0 / 20 / 290 / 38 / 2 / 13 / 5 |
| Lemon Blueberry Tart | 1 serving | 500 / 24 / 13 / 0 / 20 / 90 / 66 / 1 / 34 / 7 |
| Hot Tea (Rooibos) | 20oz | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Multigrain Bread | 1 serving | 120 / 2.5 / 1 / 0 / 0 / 170 / 20 / 1 / 3 / 4 |
