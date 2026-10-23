# Del Taco: lines for a person

Guide: https://deltaco.com/nutrition.html (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (4)

Fix each line in `menus/del-taco.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Gold Peak® Real Brewed Tea - Unsweetened | 40 fl oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Gold Peak® Real Brewed Tea - Unsweetened | 24 fl oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found |
| Gold Peak® Real Brewed Tea - Unsweetened | Large (40 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Gold Peak® Real Brewed Tea - Unsweetened | Regular (24 fl oz) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |

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
