# Jimmy John's: lines for a person

Guide: https://resources.jimmyjohns.com/downloadable-files/Beefy_Black_And_Bleu_Nutrition_Guide.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (5)

Fix each line in `menus/jimmy-johns.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| BEEFY BLACK & BLEU | UNWICH® | only in draft A | 380 / 25 / 9 / 0 / 100 / 1350 / 10 / 2 / 6 / 40 | not found |
| BEEFY BLACK & BLEU | 8” FRENCH BREAD | differ: protein_g | 650 / 27 / 9 / 0 / 100 / 1900 / 60 / 5 / 5 / 46 | 650 / 27 / 9 / 0 / 100 / 1900 / 60 / 5 / 5 / 10 |
| BEEFY BLACK & BLEU | THICK-SLICED WHEAT | differ: protein_g | 740 / 33 / 9 / 0 / 100 / 1730 / 66 / 6 / 13 / 81 | 740 / 33 / 9 / 0 / 100 / 1730 / 66 / 6 / 13 / 10 |
| BEEFY BLACK & BLEU | 16” FRENCH BREAD | differ: protein_g | 1300 / 53 / 17 / 0 / 200 / 3790 / 121 / 10 / 10 / 81 | 1300 / 53 / 17 / 0 / 200 / 3790 / 121 / 10 / 10 / 30 |
| BEEFY BLACK & BLEU | UNWICH® LETTUCE WRAP | only in draft B | not found | 380 / 25 / 9 / 0 / 100 / 1350 / 10 / 2 / 6 / 10 |

## Spot check (3 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| JUMBO KOSHER DILL PICKLE | 1 serving | 20 / 0 / 0 / 0 / 0 / 1710 / 3 / 2 / 1 / 1 |
| LITTLE JOHN 5 | 1 sandwich | 290 / 13 / 5 / 0 / 40 / 900 / 26 / 2 / 2 / 16 |
| SOUTHWEST ROAST BEEF WRAP | UNWICH® | 450 / 30 / 7 / 0 / 75 / 1090 / 19 / 3 / 4 / 22 |
