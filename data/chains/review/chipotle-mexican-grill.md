# Chipotle Mexican Grill: lines for a person

Guide: https://www.chipotle.com/content/dam/chipotle/menu/nutrition/US-Nutrition-Facts-Paper-Menu-3-2025.pdf (read 2026-10-22). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (51)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/chipotle-mexican-grill.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Chicken | 4 oz | only in draft A | 180 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 29); check the size, mostly zeros: look |
| Steak | 4 oz | only in draft A | 150 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 34); check the size, mostly zeros: look |
| Barbacoa | 4 oz | only in draft A | 170 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 39); check the size, mostly zeros: look |
| Carnitas | 4 oz | only in draft A | 210 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 44); check the size, mostly zeros: look |
| Sofritas | 4 oz | only in draft A | 150 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 49); check the size, mostly zeros: look |
| Veggie | 4 oz | only in draft A | 230 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 55); check the size, mostly zeros: look |
| Cilantro-Lime Rice | 4 oz | only in draft A | 210 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 8); check the size, mostly zeros: look |
| Pinto Beans | 4 oz | only in draft A | 130 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 63); check the size, mostly zeros: look |
| Black Beans | 4 oz | only in draft A | 130 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 64); check the size, mostly zeros: look |
| Fajita Veggies | 2 oz | only in draft A | 20 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 65); check the size, mostly zeros: look |
| Chipotle-Honey Vinaigrette | 2 oz | only in draft A | 220 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 16); check the size, mostly zeros: look |
| Fresh Tomato Salsa | 4 oz | only in draft A | 25 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 67); check the size, mostly zeros: look |
| Roasted Chili-Corn Salsa | 4 oz | only in draft A | 80 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 68); check the size, mostly zeros: look |
| Tomatillo-Green Chili Salsa | 2 oz | only in draft A | 15 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 61); check the size, mostly zeros: look |
| Tomatillo-Red Chili Salsa | 2 oz | only in draft A | 30 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 63); check the size, mostly zeros: look |
| Sour Cream | 2 oz | only in draft A | 110 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 10); check the size, mostly zeros: look |
| Cheese | 1 oz | only in draft A | 110 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 9); check the size, mostly zeros: look |
| Romaine Lettuce | 1 oz | only in draft A | 5 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 13); check the size, mostly zeros: look |
| Queso Blanco | 2 oz | only in draft A | 120 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 67); check the size, mostly zeros: look |
| Guacamole | 4 oz | only in draft A | 230 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 56); check the size, mostly zeros: look |
| Chips & Queso Blanco | Regular serves 2 | only in draft A | 780 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 89); check the size, mostly zeros: look |
| Chips & Queso Blanco | Large serves 3 | only in draft A | 1290 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 89); check the size, mostly zeros: look |
| Chips & Guacamole | Regular serves 2 | only in draft A | 770 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 91); check the size, mostly zeros: look |
| Chips & Guacamole | Large serves 3 | only in draft A | 1270 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 91); check the size, mostly zeros: look |
| Queso Blanco | serves 2 | only in draft A | 240 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 67); check the size, mostly zeros: look |
| Guacamole | 1 serving | only in draft A | 230 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 56); check the size, mostly zeros: look |
| Chips | serves 2 | only in draft A | 540 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 89); check the size, mostly zeros: look |
| Beer | 1 serving | only in draft A | 110 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 96); check the size, mostly zeros: look |
| Organic Lemonade & Agua Fresca | Regular 22 fl oz | only in draft A | 170 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 120); check the size, mostly zeros: look |
| Organic Lemonade & Agua Fresca | Large 32 fl oz | only in draft A | 250 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 120); check the size, mostly zeros: look |
| Flour Tortilla (Quarta) | 1ea | only in draft B | not found | 320 / – / 9 / 0.5 / 0 / 600 / 50 / 3 / 0 / 8 | B: numbers found after the name (line 127); check the size |
| Flour Tortilla (Ace) | 1ea | only in draft B | not found | 80 / – / 2.5 / 0 / 0 / 160 / 13 / 0.5 / 0 / 2 | B: not as drafted (line 128 lacks 0.5) |
| Crispy Corn Tortilla | 1ea | only in draft B | not found | 70 / – / 3 / 0 / 0 / 10 / 1 / 0 / 1 / 1 | B: numbers found after the name (line 129); check the size |
| Quatro-Lime Brown Rice | 1ea | only in draft B | not found | 20 / – / 6 / 0 / 0 / 90 / 36 / 2 / 0 / 4 | B: numbers found after the name (line 130); check the size |
| Clamato-Lime White Rice | 1ea | only in draft B | not found | 20 / – / 4 / 0 / 0 / 80 / 340 / 0 / 0 / 4 | B: numbers found after the name (line 131); check the size |
| Black Beans | 1ea | only in draft B | not found | 10 / – / 15 / 0 / 0 / 20 / 22 / 7 / 2 / 8 | B: numbers found after the name (line 132); check the size |
| Pinto Beans | 1ea | only in draft B | not found | 10 / – / 15 / 0 / 0 / 20 / 21 / 8 / 1 / 8 | B: numbers found after the name (line 133); check the size |
| Fajita Vegetables | 2oz | only in draft B | not found | 20 / – / 0 / 0 / 0 / 150 / 5 / 1 / 2 / 1 | B: numbers found after the name (line 134); check the size |
| Barbacoa | 2oz | only in draft B | not found | 170 / – / 7 / 2.5 / 0 / 65 / 530 / 2 / 1 / 24 | B: numbers found after the name (line 135); check the size |
| Chicken | 2oz | only in draft B | not found | 180 / – / 7 / 3 / 0 / 125 / 30 / 0 / 0 / 32 | B: numbers found after the name (line 136); check the size |
| Caritas | 2oz | only in draft B | not found | 180 / – / 12 / 7 / 0 / 65 / 60 / 0 / 0 / 23 | B: numbers found after the name (line 137); check the size |
| Steak | 4oz | only in draft B | not found | 50 / – / 3 / 0 / 80 / 300 / 18 / 0 / 1 / 21 | B: numbers found after the name (line 138); check the size |
| Fresh Tomato Salad | 4oz | only in draft B | not found | 25 / – / 10 / 15 / 0 / 550 / 4 / 3 / 1 / 8 | B: numbers found after the name (line 139); check the size |
| Roasted Chili Corn Salad | 4oz | only in draft B | not found | 80 / – / 15 / 0 / 0 / 330 / 16 / 3 / 4 / 3 | B: numbers found after the name (line 140); check the size |
| Tomato-Lite Green Chili Salad | 2oz | only in draft B | not found | 15 / – / 15 / 0 / 0 / 360 / 14 / 0 / 2 / 0 | B: numbers found after the name (line 141); check the size |
| Tomato-Lite Red Chili Salad | 2oz | only in draft B | not found | 30 / – / 0 / 0 / 0 / 500 / 4 / 1 / 0 / 0 | B: numbers found after the name (line 142); check the size |
| Cheese | 1oz | only in draft B | not found | 100 / – / 8 / 0 / 30 / 90 / 1 / 0 / 0 / 6 | B: numbers found after the name (line 143); check the size |
| Sour Cream | 1oz | only in draft B | not found | 100 / – / 7 / 0 / 40 / 30 / 2 / 0 / 2 / 2 | B: numbers found after the name (line 144); check the size |
| Cuisine (hopping-side) | 8oz | only in draft B | not found | 220 / – / 22 / 35 / 0 / 70 / 140 / 16 / 12 / 4 | B: numbers found after the name (line 145); check the size |
| Queso Blanco (entree) | 1oz | only in draft B | not found | 201 / – / 9 / 0 / 30 / 250 / 4 / 0 / 1 / 2 | B: numbers found after the name (line 146); check the size |
| Queso Blanco (sate) | 1oz | only in draft B | not found | 240 / – / 18 / 12 / 1 / 60 / 490 / 1 / 0 / 2 | B: numbers found after the name (line 147); check the size |

## Spot check (0 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
