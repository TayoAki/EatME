# Charleys Cheesesteaks: lines for a person

Guide: https://www.charleys.com/wp-content/uploads/2025/02/Nutrition-Guide.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (14)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/charleys-cheesesteaks.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Lettuce | Regular | differ: carbs_g, fiber_g | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 0 / 0.5 / 0.5 / 0 / 0 | A: numbers found after the name (line 46); check the size, mostly zeros: look; B: numbers found after the name (line 47); check the size, mostly zeros: look |
| Diet Coke | 12 oz. | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / – | A: numbers found after the name (line 129); check the size, mostly zeros: look; B: numbers found after the name (line 129); check the size, mostly zeros: look |
| Coke Zero | 12 oz. | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / – | A: numbers found after the name (line 130); check the size, mostly zeros: look; B: numbers found after the name (line 130); check the size, mostly zeros: look |
| Iced Tea (Unsweetened) | 12 oz. | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 5 / 0.5 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 5 / 0.5 / 0 / 0 / – | A: numbers found after the name (line 137); check the size, mostly zeros: look; B: numbers found after the name (line 137); check the size, mostly zeros: look |
| Diet Coke | 21 oz. | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 0 / – | A: numbers found after the name (line 142); check the size, mostly zeros: look; B: numbers found after the name (line 142); check the size, mostly zeros: look |
| Coke Zero | 21 oz. | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 45 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 45 / 0 / 0 / 0 / – | A: numbers found after the name (line 143); check the size, mostly zeros: look; B: numbers found after the name (line 143); check the size, mostly zeros: look |
| Iced Tea (Unsweetened) | 21 oz. | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 10 / 0.5 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 10 / 0.5 / 0 / 0 / – | A: numbers found after the name (line 153); check the size, mostly zeros: look; B: numbers found after the name (line 153); check the size, mostly zeros: look |
| Diet Coke | 32 oz. | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 / – | A: numbers found after the name (line 157); check the size, mostly zeros: look; B: numbers found after the name (line 157); check the size, mostly zeros: look |
| Coke Zero | 32 oz. | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / – | A: numbers found after the name (line 158); check the size, mostly zeros: look; B: numbers found after the name (line 158); check the size, mostly zeros: look |
| Iced Tea (Unsweetened) | 32 oz. | differ: protein_g | 5 / 0 / 0 / 0 / 0 / 15 / 2 / 0 / 0 / 0 | 5 / 0 / 0 / 0 / 0 / 15 / 2 / 0 / 0 / – | A: numbers found after the name (line 168); check the size; B: numbers found after the name (line 168); check the size |
| Cookie | 1 serving | only in draft B | not found | 380 / 19 / 11 / 0 / 45 / 430 / 50 / 2 / 28 / 5 | B: numbers found after the name (line 116); check the size |
| Chips | 1 serving | only in draft B | not found | 210 / 2 / 1.5 / 0 / 10 / 125 / 23 / 2 / 1 / 3 | B: numbers found after the name (line 117); check the size |
| Chicken Philly | Regular | both read it the same, but its protein, carbs and fat make 610 kcal, not 720 | 720 / 18 / 9 / 0 / 130 / 1520 / 55 / 4 / 5 / 57 | 720 / 18 / 9 / 0 / 130 / 1520 / 55 / 4 / 5 / 57 | A: numbers found after the name (line 5); check the size; B: numbers found after the name (line 5); check the size |
| Chicken Philly | Large | both read it the same, but its protein, carbs and fat make 848 kcal, not 1010 | 1010 / 24 / 12 / 0.5 / 190 / 2150 / 76 / 6 / 8 / 82 | 1010 / 24 / 12 / 0.5 / 190 / 2150 / 76 / 6 / 8 / 82 | A: numbers found after the name (line 6); check the size; B: numbers found after the name (line 6); check the size |

## Spot check (7 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Chocolate | 1 serving | 530 / 16 / 10 / 0 / 55 / 190 / 85 / 1 / 72 / 10 |
| Chicken Buffalo | Large | 1030 / 44 / 15 / 0.5 / 205 / 4320 / 84 / 7 / 8 / 82 |
| Lettuce | Small | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Coke | 12 oz. | 90 / 0 / 0 / 0 / 0 / 25 / 25 / 0 / 25 / 0 |
| Mayo | Large | 150 / 17 / 2.5 / 0 / 10 / 120 / 0.5 / 0 / 0 / 0 |
| Dr. Pepper | 32 oz. | 180 / 0 / 0 / 0 / 0 / 55 / 49 / 0 / 48 / 0 |
| Jalapeños | Regular | 5 / 0 / 0 / 0 / 0 / 360 / 1 / 0.5 / 0 / 0 |
