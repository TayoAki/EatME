# The Capital Grille: lines for a person

Guide: https://media.thecapitalgrille.com/images/site/ext/menu/TCG_Nutrition_Guide.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (10)

Fix each line in `menus/the-capital-grille.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Oysters Rockefeller Style with Champagne Brie Fondue | 1 serving | differ: sugars_g | 210 / 17 / 11 / 0 / 55 / 390 / 7 / 1 / – / 8 | 210 / 17 / 11 / 0 / 55 / 390 / 7 / 1 / 1 / 8 |
| Cold Shellfish Platter | total nutritionals; serves 2-4 | only in draft A | 430 / 3.5 / 1 / 0 / 600 / 2660 / 24 / 3 / 12 / 72 | not found |
| Grand Plateau | total nutritionals; serves 4-6 | only in draft A | 1120 / 44 / 9 / 0.5 / 1140 / 4750 / 28 / 4 / 14 / 147 | not found |
| Mint Gremolata and Honey Crusted Double Cut Lamb Rib Chops | 1 serving | differ: fiber_g, sugars_g | 710 / 35 / 18 / 1.5 / 235 / 800 / 19 / 79 / 235 / 79 | 710 / 35 / 18 / 1.5 / 235 / 800 / 19 / 0.5 / 9 / 79 |
| Dirty Goose | 1 serving | differ: fiber_g | 190 / 2.5 / 0.5 / 0 / 0 / 600 / 0.5 / 0.5 / 0 / 0.5 | 190 / 2.5 / 0.5 / 0 / 0 / 600 / 0.5 / 0 / 0 / 0.5 |
| Wine - Red | 6 oz. | differ: sodium_mg, carbs_g | 160 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 1 / 0 | 160 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 1 / 0 |
| Wine - Red | 1.5L | differ: sodium_mg, carbs_g, protein_g | 1310 / 0 / 0 / 0 / 0 / 0 / 43 / 0 / 10 / 1 | 1310 / 0 / 0 / 0 / 0 / 43 / 1 / 0 / 10 / 0 |
| Wine - Red | 3L | differ: sodium_mg, carbs_g, protein_g | 2620 / 0 / 0 / 0 / 0 / 0 / 85 / 0 / 20 / 2 | 2620 / 0 / 0 / 0 / 0 / 85 / 2 / 0 / 20 / 0 |
| Wine - White | 1.5L | differ: protein_g | 1250 / 0 / 0 / 0 / 0 / 75 / 32 / 0 / 14 / 1 | 1250 / 0 / 0 / 0 / 0 / 75 / 32 / 0 / 14 / 0 |
| Wine - White | 3L | differ: protein_g | 2510 / 0 / 0 / 0 / 0 / 150 / 64 / 0 / 29 / 2 | 2510 / 0 / 0 / 0 / 0 / 150 / 64 / 0 / 29 / 0 |

## Spot check (7 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Passion Fruit Mojito | 1 serving | 300 / 0 / 0 / 0 / 0 / 85 / 43 / 10 / 31 / 0 |
| Lobster Bisque | Cup | 320 / 26 / 13 / 0 / 95 / 870 / 10 / 0 / 2 / 13 |
| Oaxacan | 1 serving | 180 / 0 / 0 / 0 / 0 / 0 / 12 / 0.5 / 11 / 0 |
| Field Greens Salad with Parmesan Vinaigrette | 1 serving | 120 / 9 / 1.5 / 0 / 0 / 250 / 9 / 3 / 5 / 2 |
| Cognac/Brandy | 2 oz. | 130 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| Straight Up with Gin | 1 serving | 190 / 1.5 / 0 / 0 / 0 / 290 / 2 / 0 / 1 / 0 |
| Lobster and Crab Cake with Lemon Basil Aioli | per serving (serves 2) | 350 / 32 / 7 / 0 / 100 / 620 / 3 / 0 / 0.5 / 15 |
