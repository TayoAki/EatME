# Del Taco: lines for a person

Guide: https://deltaco.com/nutrition.html (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (6)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/del-taco.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Gold Peak® Real Brewed Tea - Unsweetened | 40 fl oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 231); check the size, mostly zeros: look |
| Gold Peak® Real Brewed Tea - Unsweetened | 24 fl oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 231); check the size, mostly zeros: look |
| Gold Peak® Real Brewed Tea - Unsweetened | Large (40 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 231); check the size, mostly zeros: look |
| Gold Peak® Real Brewed Tea - Unsweetened | Regular (24 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 231); check the size, mostly zeros: look |
| Gold Peak® Real Brewed Tea - Sweet Tea | Large (40 fl oz) | both read it the same, but its protein, carbs and fat make 484 kcal, not 400 | 400 / 0 / 0 / 0 / 0 / 0 / 121 / 0 / 121 / 0 | 400 / 0 / 0 / 0 / 0 / 0 / 121 / 0 / 121 / 0 | A: numbers found after the name (line 229); check the size; B: numbers found after the name (line 229); check the size |
| Gold Peak® Real Brewed Tea - Sweet Tea | Regular (24 fl oz) | both read it the same, but its protein, carbs and fat make 292 kcal, not 250 | 250 / 0 / 0 / 0 / 0 / 0 / 73 / 0 / 73 / 0 | 250 / 0 / 0 / 0 / 0 / 0 / 73 / 0 / 73 / 0 | A: numbers found after the name (line 230); check the size; B: numbers found after the name (line 230); check the size |

## Spot check (9 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Epic Grilled Chicken Fresh Guacamole Burrito | 442g | 740 / 26 / 5 / 0 / 90 / 2130 / 92 / 11 / 3 / 39 |
| Double Del Cheeseburger with Bacon | 280g | 760 / 51 / 20 / 2 / 145 / 1840 / 35 / 1 / 7 / 37 |
| 3 Layer Queso Nachos | 186g | 350 / 15 / 3.5 / 0 / 10 / 770 / 47 / 8 / 1 / 11 |
| Chipotle Crispy Chicken Guac'd Up Taco | 111g | 280 / 13 / 4 / 0 / 25 / 730 / 23 / 1 / 1 / 14 |
| Queso Loaded Nachos (Carnias) | 581g | 1070 / 55 / 20 / 0 / 105 / 2550 / 102 / 14 / 5 / 48 |
| Epic Carne Asada Steak Cali Bacon Burrito | 414g | 1050 / 60 / 22 / 1 / 155 / 2600 / 73 / 4 / 4 / 51 |
| Gold Peak® Real Brewed Tea - Sweet Tea | Regular (24 fl oz) | 250 / 0 / 0 / 0 / 0 / 0 / 73 / 0 / 73 / 0 |
| Breakfast Burrito (Bacon, Egg & Cheese) | 223g | 520 / 26 / 9 / 0 / 275 / 1540 / 36 / 2 / 0 / 30 |
| Fuzz® Raspberry Iced Tea | Large (40 fl oz) | 210 / 0 / 0 / 0 / 0 / 125 / 56 / 0 / 55 / 0 |
