# Einstein Bros. Bagels: lines for a person

Guide: https://www.einsteinbros.com/wp-content/uploads/2026/08/EBB-Nutrition-Guide-Master-2026-2.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (24)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/einstein-bros-bagels.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Cold Foam Topping | 1 oz | both read numbers that can't be right: saturated and trans fat above fat | 80 / 0 / 6 / 0 / 0 / 25 / 5 / 0 / 3 / 0 | 80 / 0 / 6 / 0 / 0 / 25 / 5 / 0 / 3 / 0 | A: numbers found after the name (line 21); check the size; B: numbers found after the name (line 21); check the size |
| Spinach | 0.5 oz | differ: cholesterol_mg | 5 / 0 / 0 / 0 / 0 / 10 / 1 / 0 / 0 / 0 | 5 / 0 / 0 / 0 / 10 / 10 / 1 / 0 / 0 / 0 | A: numbers found after the name (line 127); check the size; B: not as drafted (line 127 lacks 10) |
| Classic Iced Coffee | 16 fl oz | differ: sodium_mg, carbs_g | 5 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 / 0 | 5 / 0 / 0 / 0 / 0 / 0 / 1 / 0 / 0 / 0 | A: numbers found after the name (line 282); check the size, mostly zeros: look; B: numbers found after the name (line 282); check the size, mostly zeros: look |
| Classic Iced Coffee | 24 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | A: numbers found after the name (line 283); check the size, mostly zeros: look; B: numbers found after the name (line 283); check the size, mostly zeros: look |
| Caramel Iced Coffee | 16 fl oz | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g | 130 / 1 / 0.5 / 0 / 0 / 30 / 32 / 2 / 28 / 1 | 130 / 1 / 0.5 / 0 / 30 / 32 / 2 / 0 / 28 / 1 | A: numbers found after the name (line 286); check the size; B: numbers found after the name (line 286); check the size |
| Hot Chocolate | 12 fl oz | both read numbers that can't be right: saturated and trans fat above fat | 300 / 8 / 5 / 9 / 25 / 150 / 50 / 2 / 46 / 11 | 300 / 8 / 5 / 9 / 25 / 150 / 50 / 2 / 46 / 11 | A: numbers found after the name (line 323); check the size; B: numbers found after the name (line 323); check the size |
| Drip Coffee | 12 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | A: numbers found after the name (line 327); check the size, mostly zeros: look; B: numbers found after the name (line 327); check the size, mostly zeros: look |
| Breakfast Blend Medium Roast Drip Coffee | 12 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | A: numbers found after the name (line 329); check the size, mostly zeros: look; B: numbers found after the name (line 329); check the size, mostly zeros: look |
| Breakfast Blend Medium Roast Drip Coffee | 16 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | A: numbers found after the name (line 329); check the size, mostly zeros: look; B: numbers found after the name (line 329); check the size, mostly zeros: look |
| Breakfast Blend Medium Roast Drip Coffee | 20 fl oz | differ: sodium_mg, carbs_g | 15 / 0 / 0 / 0 / 0 / 3 / 0 / 0 / 0 / 0 | 15 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 0 / 0 | A: numbers found after the name (line 331); check the size, mostly zeros: look; B: numbers found after the name (line 331); check the size, mostly zeros: look |
| Breakfast Blend Medium Roast Drip Coffee | 96 fl oz | only in draft A | 60 / 0 / 0 / 0 / 0 / 12 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 332); check the size, mostly zeros: look |
| Dark Roast Drip Coffee | 12 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | A: numbers found after the name (line 333); check the size, mostly zeros: look; B: numbers found after the name (line 333); check the size, mostly zeros: look |
| Dark Roast Drip Coffee | 16 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | A: numbers found after the name (line 333); check the size, mostly zeros: look; B: numbers found after the name (line 333); check the size, mostly zeros: look |
| Dark Roast Drip Coffee | 20 fl oz | differ: sodium_mg, carbs_g | 15 / 0 / 0 / 0 / 0 / 3 / 0 / 0 / 0 / 0 | 15 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 0 / 0 | A: numbers found after the name (line 335); check the size, mostly zeros: look; B: numbers found after the name (line 335); check the size, mostly zeros: look |
| Dark Roast Drip Coffee | 96 fl oz | only in draft A | 60 / 0 / 0 / 0 / 0 / 12 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 336); check the size, mostly zeros: look |
| Decaf Drip Coffee | 12 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | A: numbers found after the name (line 337); check the size, mostly zeros: look; B: numbers found after the name (line 337); check the size, mostly zeros: look |
| Decaf Drip Coffee | 16 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | A: numbers found after the name (line 337); check the size, mostly zeros: look; B: numbers found after the name (line 337); check the size, mostly zeros: look |
| Decaf Drip Coffee | 20 fl oz | only in draft A | 15 / 0 / 0 / 0 / 0 / 3 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 339); check the size, mostly zeros: look |
| Vanilla Hazelnut Drip Coffee | 96 fl oz | only in draft A | 60 / 0 / 0 / 0 / 0 / 12 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 340); check the size, mostly zeros: look |
| Vanilla Hazelnut Drip Coffee | 12 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | A: numbers found after the name (line 341); check the size, mostly zeros: look; B: numbers found after the name (line 341); check the size, mostly zeros: look |
| Vanilla Hazelnut Drip Coffee | 16 fl oz | differ: sodium_mg, carbs_g | 10 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 / 0 | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | A: numbers found after the name (line 341); check the size, mostly zeros: look; B: numbers found after the name (line 341); check the size, mostly zeros: look |
| Vanilla Hazelnut Drip Coffee | 20 fl oz | only in draft A | 15 / 0 / 0 / 0 / 0 / 3 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 343); check the size, mostly zeros: look |
| Turkey, Lunch | 3.0 oz | both read it the same, but its protein, carbs and fat make 119 kcal, not 90 | 90 / 2.5 / 0 / 0 / 40 / 650 / 9 / 0 / 2 / 15 | 90 / 2.5 / 0 / 0 / 40 / 650 / 9 / 0 / 2 / 15 | A: numbers found after the name (line 111); check the size; B: numbers found after the name (line 111); check the size |
| Cinnamon Bliss Roll | 6.5 oz | both read it the same, but its protein, carbs and fat make 787 kcal, not 610 | 610 / 39 / 16 / 0 / 55 / 760 / 98 / 3 / 44 / 11 | 610 / 39 / 16 / 0 / 55 / 760 / 98 / 3 / 44 / 11 | A: numbers found after the name (line 236); check the size; B: numbers found after the name (line 236); check the size |

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
