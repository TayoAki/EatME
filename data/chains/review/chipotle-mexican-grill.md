# Chipotle Mexican Grill: lines for a person

Guide: https://www.chipotle.com/content/dam/chipotle/menu/nutrition/US-Nutrition-Facts-Paper-Menu-3-2025.pdf (read 2026-10-22). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (51)

Fix each line in `menus/chipotle-mexican-grill.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Chicken | 4 oz | only in draft A | 180 / – / – / – / – / – / – / – / – / – | not found |
| Steak | 4 oz | only in draft A | 150 / – / – / – / – / – / – / – / – / – | not found |
| Barbacoa | 4 oz | only in draft A | 170 / – / – / – / – / – / – / – / – / – | not found |
| Carnitas | 4 oz | only in draft A | 210 / – / – / – / – / – / – / – / – / – | not found |
| Sofritas | 4 oz | only in draft A | 150 / – / – / – / – / – / – / – / – / – | not found |
| Veggie | 4 oz | only in draft A | 230 / – / – / – / – / – / – / – / – / – | not found |
| Cilantro-Lime Rice | 4 oz | only in draft A | 210 / – / – / – / – / – / – / – / – / – | not found |
| Pinto Beans | 4 oz | only in draft A | 130 / – / – / – / – / – / – / – / – / – | not found |
| Black Beans | 4 oz | only in draft A | 130 / – / – / – / – / – / – / – / – / – | not found |
| Fajita Veggies | 2 oz | only in draft A | 20 / – / – / – / – / – / – / – / – / – | not found |
| Chipotle-Honey Vinaigrette | 2 oz | only in draft A | 220 / – / – / – / – / – / – / – / – / – | not found |
| Fresh Tomato Salsa | 4 oz | only in draft A | 25 / – / – / – / – / – / – / – / – / – | not found |
| Roasted Chili-Corn Salsa | 4 oz | only in draft A | 80 / – / – / – / – / – / – / – / – / – | not found |
| Tomatillo-Green Chili Salsa | 2 oz | only in draft A | 15 / – / – / – / – / – / – / – / – / – | not found |
| Tomatillo-Red Chili Salsa | 2 oz | only in draft A | 30 / – / – / – / – / – / – / – / – / – | not found |
| Sour Cream | 2 oz | only in draft A | 110 / – / – / – / – / – / – / – / – / – | not found |
| Cheese | 1 oz | only in draft A | 110 / – / – / – / – / – / – / – / – / – | not found |
| Romaine Lettuce | 1 oz | only in draft A | 5 / – / – / – / – / – / – / – / – / – | not found |
| Queso Blanco | 2 oz | only in draft A | 120 / – / – / – / – / – / – / – / – / – | not found |
| Guacamole | 4 oz | only in draft A | 230 / – / – / – / – / – / – / – / – / – | not found |
| Chips & Queso Blanco | Regular serves 2 | only in draft A | 780 / – / – / – / – / – / – / – / – / – | not found |
| Chips & Queso Blanco | Large serves 3 | only in draft A | 1290 / – / – / – / – / – / – / – / – / – | not found |
| Chips & Guacamole | Regular serves 2 | only in draft A | 770 / – / – / – / – / – / – / – / – / – | not found |
| Chips & Guacamole | Large serves 3 | only in draft A | 1270 / – / – / – / – / – / – / – / – / – | not found |
| Queso Blanco | serves 2 | only in draft A | 240 / – / – / – / – / – / – / – / – / – | not found |
| Guacamole | 1 serving | only in draft A | 230 / – / – / – / – / – / – / – / – / – | not found |
| Chips | serves 2 | only in draft A | 540 / – / – / – / – / – / – / – / – / – | not found |
| Beer | 1 serving | only in draft A | 110 / – / – / – / – / – / – / – / – / – | not found |
| Organic Lemonade & Agua Fresca | Regular 22 fl oz | only in draft A | 170 / – / – / – / – / – / – / – / – / – | not found |
| Organic Lemonade & Agua Fresca | Large 32 fl oz | only in draft A | 250 / – / – / – / – / – / – / – / – / – | not found |
| Flour Tortilla (Quarta) | 1ea | only in draft B | not found | 320 / – / 9 / 0.5 / 0 / 600 / 50 / 3 / 0 / 8 |
| Flour Tortilla (Ace) | 1ea | only in draft B | not found | 80 / – / 2.5 / 0 / 0 / 160 / 13 / 0.5 / 0 / 2 |
| Crispy Corn Tortilla | 1ea | only in draft B | not found | 70 / – / 3 / 0 / 0 / 10 / 1 / 0 / 1 / 1 |
| Quatro-Lime Brown Rice | 1ea | only in draft B | not found | 20 / – / 6 / 0 / 0 / 90 / 36 / 2 / 0 / 4 |
| Clamato-Lime White Rice | 1ea | only in draft B | not found | 20 / – / 4 / 0 / 0 / 80 / 340 / 0 / 0 / 4 |
| Black Beans | 1ea | only in draft B | not found | 10 / – / 15 / 0 / 0 / 20 / 22 / 7 / 2 / 8 |
| Pinto Beans | 1ea | only in draft B | not found | 10 / – / 15 / 0 / 0 / 20 / 21 / 8 / 1 / 8 |
| Fajita Vegetables | 2oz | only in draft B | not found | 20 / – / 0 / 0 / 0 / 150 / 5 / 1 / 2 / 1 |
| Barbacoa | 2oz | only in draft B | not found | 170 / – / 7 / 2.5 / 0 / 65 / 530 / 2 / 1 / 24 |
| Chicken | 2oz | only in draft B | not found | 180 / – / 7 / 3 / 0 / 125 / 30 / 0 / 0 / 32 |
| Caritas | 2oz | only in draft B | not found | 180 / – / 12 / 7 / 0 / 65 / 60 / 0 / 0 / 23 |
| Steak | 4oz | only in draft B | not found | 50 / – / 3 / 0 / 80 / 300 / 18 / 0 / 1 / 21 |
| Fresh Tomato Salad | 4oz | only in draft B | not found | 25 / – / 10 / 15 / 0 / 550 / 4 / 3 / 1 / 8 |
| Roasted Chili Corn Salad | 4oz | only in draft B | not found | 80 / – / 15 / 0 / 0 / 330 / 16 / 3 / 4 / 3 |
| Tomato-Lite Green Chili Salad | 2oz | only in draft B | not found | 15 / – / 15 / 0 / 0 / 360 / 14 / 0 / 2 / 0 |
| Tomato-Lite Red Chili Salad | 2oz | only in draft B | not found | 30 / – / 0 / 0 / 0 / 500 / 4 / 1 / 0 / 0 |
| Cheese | 1oz | only in draft B | not found | 100 / – / 8 / 0 / 30 / 90 / 1 / 0 / 0 / 6 |
| Sour Cream | 1oz | only in draft B | not found | 100 / – / 7 / 0 / 40 / 30 / 2 / 0 / 2 / 2 |
| Cuisine (hopping-side) | 8oz | only in draft B | not found | 220 / – / 22 / 35 / 0 / 70 / 140 / 16 / 12 / 4 |
| Queso Blanco (entree) | 1oz | only in draft B | not found | 201 / – / 9 / 0 / 30 / 250 / 4 / 0 / 1 / 2 |
| Queso Blanco (sate) | 1oz | only in draft B | not found | 240 / – / 18 / 12 / 1 / 60 / 490 / 1 / 0 / 2 |

## Spot check (0 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
