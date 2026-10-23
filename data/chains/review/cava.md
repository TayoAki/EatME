# Cava: lines for a person

Guide: https://assets.ctfassets.net/kugm9fp9ib18/Ki4gri5pvT2rtPcjBQPjR/c78bed9be8448e2ab700f440f6faa83e/KT6_26_AN_ANGUIDE_RETAIL_T_MKTAN11724.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (1)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/cava.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Pita Crisps | 1 serving | both read it the same, but its protein, carbs and fat make 127 kcal, not 70 | 70 / 11 / 1.5 / 0 / 0 / 25 / 6 / 0 / 0 / 1 | 70 / 11 / 1.5 / 0 / 0 / 25 / 6 / 0 / 0 / 1 | A: numbers found after the name (line 68); check the size; B: numbers found after the name (line 68); check the size |

## Spot check (6 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Pickled Onions | 1 serving | 20 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 4 / 0 |
| Salmon + Yogurt Dill Bowl | 1 serving | 710 / 43 / 9 / 0 / 110 / 1870 / 49 / 5 / 10 / 35 |
| Sweet Tea | Kids (12 oz) | 110 / 0 / 0 / 0 / 0 / 10 / 28 / 0 / 28 / 0 |
| Pomegranate Apple | Kids (12 oz) | 140 / 0 / 0 / 0 / 0 / 10 / 34 / 1 / 33 / 0 |
| Harissa Avocado Bowl | 1 serving | 830 / 49 / 12 / 0 / 155 / 2010 / 62 / 12 / 12 / 41 |
| Sweet Tea | Large (22 oz) | 200 / 0 / 0 / 0 / 0 / 20 / 51 / 0 / 51 / 0 |
