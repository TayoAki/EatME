# McDonald's: lines for a person

Guide: 119 item pages under https://www.mcdonalds.com/us/en-us/product/, each line's own page in its source_url (read 2026-10-22). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (8)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/mcdonalds.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Chocolate Shake | Small | the guide gives no fiber_g | 520 / 14 / 9 / 0.5 / 55 / 250 / 85 / – / 67 / 12 | 520 / 14 / 9 / 0.5 / 55 / 250 / 85 / – / 67 / 12 | A: name not in the guide text; B: name not in the guide text |
| Coca-Cola® Zero Sugar | Small | the guide gives no fiber_g | 0 / 0 / 0 / 0 / 0 / 40 / 0 / – / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 40 / 0 / – / 0 / 0 | A: name not in the guide text; B: name not in the guide text |
| McCafé® Premium Roast Coffee | Medium | differ: fiber_g | 10 / 0 / 0 / 0 / 0 / 10 / 1 / 0 / 0 / 1 | 10 / 0 / 0 / 0 / 0 / 10 / 1 / – / 0 / 1 | A: name not in the guide text; B: name not in the guide text |
| Creamy Ranch Sauce | 1 serving | the guide gives no fiber_g | 110 / 12 / 2 / 0 / 5 / 160 / 1 / – / 1 / 0 | 110 / 12 / 2 / 0 / 5 / 160 / 1 / – / 1 / 0 | A: name not in the guide text; B: name not in the guide text |
| Diet Coke® | Small | the guide gives no fiber_g | 0 / 0 / 0 / 0 / 0 / 50 / 0 / – / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 50 / 0 / – / 0 / 0 | A: name not in the guide text; B: name not in the guide text |
| Unsweetened Iced Tea | Small | the guide gives no fiber_g | 0 / 0 / 0 / 0 / 0 / 10 / 0 / – / 0 / 1 | 0 / 0 / 0 / 0 / 0 / 10 / 0 / – / 0 / 1 | A: name not in the guide text; B: name not in the guide text |
| Strawberry Shake | Small | the guide gives no fiber_g | 470 / 13 / 8 / 0.5 / 50 / 160 / 77 / – / 58 / 10 | 470 / 13 / 8 / 0.5 / 50 / 160 / 77 / – / 58 / 10 | A: name not in the guide text; B: name not in the guide text |
| Ketchup Packet | 1 serving | the guide gives no fiber_g | 10 / 0 / 0 / 0 / 0 / 90 / 2 / – / 2 / 0 | 10 / 0 / 0 / 0 / 0 / 90 / 2 / – / 2 / 0 | A: name not in the guide text; B: name not in the guide text |

## Spot check (6 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| McChicken® | 1 serving | 390 / 21 / 3.5 / 0 / 40 / 560 / 38 / 1 / 4 / 14 |
| McCafé® Iced Coffee | Small | 150 / 5 / 3 / 0 / 15 / 35 / 25 / 0 / 20 / 1 |
| Sausage, Egg & Cheese Bagel | 1 serving | 710 / 42 / 16 / 0.5 / 265 / 1380 / 56 / 2 / 6 / 27 |
| Bacon Quarter Pounder® with Cheese | 1 serving | 630 / 35 / 15 / 1.5 / 115 / 1470 / 43 / 3 / 10 / 36 |
| Big Breakfast® | 1 serving | 1060 / 48 / 18 / 0 / 485 / 1540 / 131 / 3 / 56 / 26 |
| Hot Fudge Sundae | 1 serving | 330 / 10 / 7 / 0 / 25 / 170 / 51 / 2 / 44 / 8 |
