# Qdoba Mexican Eats: lines for a person

Guide: https://www.qdoba.com/public/assets/documents/qdoba-nutrition-information.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (5)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/qdoba-mexican-eats.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Potatoes, Seasoned | 2 oz. | differ: protein_g | 130 / 6 / 1 / 0 / 0 / 260 / 17 / 2 / 0 / – | 130 / 6 / 1 / 0 / 0 / 260 / 17 / 2 / 0 / 21 | A: numbers found after the name (line 57); check the size; B: numbers found after the name (line 57); check the size |
| Corn Tortilla 5.5 | 5.5" | only in draft A | 30 / 0 / 0 / 0 / 0 / 50 / 6 / 1 / 0 / 1 | not found | A: numbers found after the name (line 94); check the size |
| Steak, Grilled | 1.75 oz. | only in draft B | not found | 90 / 4 / 2 / 0 / 35 / 230 / 1 / 0 / 0 / 13 | B: numbers found after the name (line 106); check the size |
| 3-Cheese Queso | 1 oz. | only in draft B | not found | 45 / 4 / 2.5 / 0 / 10 / 180 / 2 / 0 / 0 / 2 | B: name not in the guide text |
| Cheese, Cotija | .25 oz. | both read it the same, but its protein, carbs and fat make 130 kcal, not 30 | 30 / 13.5 / 1.5 / 0 / 5 / 120 / 0 / 0 / 0 / 2 | 30 / 13.5 / 1.5 / 0 / 5 / 120 / 0 / 0 / 0 / 2 | A: numbers found after the name (line 27); check the size; B: numbers found after the name (line 27); check the size |

## Spot check (6 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Vitamin Water Power C | 20 fl. oz. | 100 / 0 / 0 / 0 / 0 / 0 / 27 / 0 / 27 / 0 |
| Honest Tea Organic Peach | 16.9 fl. oz. | 100 / 0 / 0 / 0 / 0 / 20 / 25 / 0 / 25 / 0 |
| Honest Tea Honey Green Tea | 16.9 fl. oz. | 70 / 0 / 0 / 0 / 0 / 15 / 19 / 0 / 19 / 0 |
| Gold Peak Lemon Ice Tea | 16.9 fl. oz. | 180 / 0 / 0 / 0 / 0 / 30 / 45 / 0 / 44 / 0 |
| Queso Diablo | 2 oz. | 90 / 7 / 4 / 0 / 45 / 360 / 3 / 0 / 1 / 3 |
| Diet Coke | Reg (20 fl. oz.) | 0 / 0 / 0 / 0 / 0 / 80 / 1 / 0 / 0 / 0 |
