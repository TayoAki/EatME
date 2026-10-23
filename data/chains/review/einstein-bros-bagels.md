# Einstein Bros. Bagels: lines for a person

Guide: https://www.einsteinbros.com/wp-content/uploads/2026/08/EBB-Nutrition-Guide-Master-2026-2.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (22)

Fix each line in `menus/einstein-bros-bagels.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Cold Foam Topping | 1 oz | both read numbers that can't be right: saturated and trans fat above fat | 80 / 0 / 6 / 0 / 0 / 25 / 5 / 0 / 3 / 0 | 80 / 0 / 6 / 0 / 0 / 25 / 5 / 0 / 3 / 0 |
| Spinach | 0.5 oz | differ: cholesterol_mg | 5 / 0 / 0 / 0 / 0 / 10 / 1 / 0 / 0 / 0 | 5 / 0 / 0 / 0 / 10 / 10 / 1 / 0 / 0 / 0 |
| Classic Iced Coffee | 16 fl oz | differ: sodium_mg, carbs_g | 5 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 / 0 | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 |
| Classic Iced Coffee | 24 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 |
| Caramel Iced Coffee | 16 fl oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g | 130 / 1 / 0.5 / 0 / 0 / 30 / 32 / 2 / 28 / 1 | 130 / 1 / 0.5 / 0 / 30 / 32 / 2 / 0 / 28 / 1 |
| Hot Chocolate | 12 fl oz | both read numbers that can't be right: saturated and trans fat above fat | 300 / 8 / 5 / 9 / 25 / 150 / 50 / 2 / 46 / 11 | 300 / 8 / 5 / 9 / 25 / 150 / 50 / 2 / 46 / 11 |
| Drip Coffee | 12 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 |
| Breakfast Blend Medium Roast Drip Coffee | 12 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 |
| Breakfast Blend Medium Roast Drip Coffee | 16 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 |
| Breakfast Blend Medium Roast Drip Coffee | 20 fl oz | differ: sodium_mg, carbs_g | 15 / 0 / 0 / 0 / 0 / 3 / 0 / 0 / 0 / 0 | 15 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 0 / 0 |
| Breakfast Blend Medium Roast Drip Coffee | 96 fl oz | only in draft A | 60 / 0 / 0 / 0 / 0 / 12 / 0 / 0 / 0 / 0 | not found |
| Dark Roast Drip Coffee | 12 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 |
| Dark Roast Drip Coffee | 16 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 |
| Dark Roast Drip Coffee | 20 fl oz | differ: sodium_mg, carbs_g | 15 / 0 / 0 / 0 / 0 / 3 / 0 / 0 / 0 / 0 | 15 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 0 / 0 |
| Dark Roast Drip Coffee | 96 fl oz | only in draft A | 60 / 0 / 0 / 0 / 0 / 12 / 0 / 0 / 0 / 0 | not found |
| Decaf Drip Coffee | 12 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 |
| Decaf Drip Coffee | 16 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 |
| Decaf Drip Coffee | 20 fl oz | only in draft A | 15 / 0 / 0 / 0 / 0 / 3 / 0 / 0 / 0 / 0 | not found |
| Vanilla Hazelnut Drip Coffee | 96 fl oz | only in draft A | 60 / 0 / 0 / 0 / 0 / 12 / 0 / 0 / 0 / 0 | not found |
| Vanilla Hazelnut Drip Coffee | 12 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 |
| Vanilla Hazelnut Drip Coffee | 16 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 |
| Vanilla Hazelnut Drip Coffee | 20 fl oz | only in draft A | 15 / 0 / 0 / 0 / 0 / 3 / 0 / 0 / 0 / 0 | not found |

## Spot check (12 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Cappuccino, Hot | 16 fl oz | 140 / 5 / 3.5 / 0 / 20 / 130 / 13 / 0 / 13 / 11 |
| Cinnamon Sugar Pull Apart Bagel | 4 oz | 300 / 2 / 1 / 0 / 0 / 520 / 61 / 3 / 11 / 10 |
| Garden Avocado on Everything | 8.7 oz | 510 / 21 / 3.5 / 0 / 125 / 770 / 65 / 5 / 8 / 16 |
| Turkey, Lunch | 3.0 oz | 90 / 2.5 / 0 / 0 / 40 / 650 / 9 / 0 / 2 / 15 |
| Pork Sausage & Cheddar ^ | 7.2 oz | 580 / 28 / 11 / 0 / 230 / 1020 / 57 / 2 / 5 / 26 |
| Muffin, Chocolate Chip | 4.2 oz | 530 / 30 / 8 / 0 / 85 / 540 / 56 / 1 / 36 / 6 |
| Hot Chocolate | 16 fl oz | 400 / 10 / 7 / 0 / 35 / 200 / 67 / 3 / 63 / 15 |
| Green Chile | 1 Bagel | 390 / 11 / 5 / 0 / 25 / 690 / 55 / 3 / 6 / 18 |
| Albuquerque Turkey on Six Cheese | 12.2 oz | 710 / 33 / 15 / 0.5 / 120 / 1810 / 68 / 3 / 11 / 44 |
| Cappuccino, Hot | 12 fl oz | 110 / 4 / 2.5 / 0 / 15 / 105 / 10 / 0 / 10 / 9 |
| Mocha, Hot | 12 fl oz | 270 / 6 / 4.5 / 0 / 20 / 135 / 46 / 2 / 42 / 10 |
| Leaf Lettuce | 0.5 oz | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
