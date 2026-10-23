# Schlotzsky's: lines for a person

Guide: https://assets.ctfassets.net/zqt8tllj2cy0/3wkZtcobeRUvoOcOWjhR44/a2b753f659f5e4f470076c541e2df7f4/SCH_1899730_Nutritional_and_allergen_chart_2.26_v3.Digital_Upload.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (0)

Fix each line in `menus/schlotzskys.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Sandwich, Original Deluxe | 1/2 Medium | 420 / 17 / 7 / 0 / 85 / 1360 / 37 / 1 / 4 / 29 |
| Sandwich, Smoked Turkey & Avocado | Small | 350 / 9 / 1.5 / 0 / 35 / 1120 / 51 / 4 / 5 / 19 |
| Sandwich, Turkey Original | Medium | 850 / 37 / 15 / 0 / 160 / 3260 / 78 / 2 / 10 / 52 |
