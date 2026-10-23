# Charleys Cheesesteaks: lines for a person

Guide: https://www.charleys.com/wp-content/uploads/2025/02/Nutrition-Guide.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (12)

Fix each line in `menus/charleys-cheesesteaks.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Lettuce | Regular | differ: carbs_g, fiber_g | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 0 / 0.5 / 0.5 / 0 / 0 |
| Diet Coke | 12 oz. | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / – |
| Coke Zero | 12 oz. | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / – |
| Iced Tea (Unsweetened) | 12 oz. | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 5 / 0.5 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 5 / 0.5 / 0 / 0 / – |
| Diet Coke | 21 oz. | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 55 / 0 / 0 / 0 / – |
| Coke Zero | 21 oz. | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 45 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 45 / 0 / 0 / 0 / – |
| Iced Tea (Unsweetened) | 21 oz. | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 10 / 0.5 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 10 / 0.5 / 0 / 0 / – |
| Diet Coke | 32 oz. | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0 / 0 / – |
| Coke Zero | 32 oz. | differ: protein_g | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 0 / 65 / 0 / 0 / 0 / – |
| Iced Tea (Unsweetened) | 32 oz. | differ: protein_g | 5 / 0 / 0 / 0 / 0 / 15 / 2 / 0 / 0 / 0 | 5 / 0 / 0 / 0 / 0 / 15 / 2 / 0 / 0 / – |
| Cookie | 1 serving | only in draft B | not found | 380 / 19 / 11 / 0 / 45 / 430 / 50 / 2 / 28 / 5 |
| Chips | 1 serving | only in draft B | not found | 210 / 2 / 1.5 / 0 / 10 / 125 / 23 / 2 / 1 / 3 |

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
