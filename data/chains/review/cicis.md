# Cicis: lines for a person

Guide: https://www.cicis.com/media/ksla20m4/nutrition_facts_060122.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (29)

Fix each line in `menus/cicis.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Flatbread Pizza Crust | 1 Slice | differ: fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 32.91 / 0.73 / 0.27 / – / – / 14.63 / 5.49 / 0.18 / 0.18 / 0.91 | 32.91 / – / – / – / – / – / – / – / – / – |
| Zesty Sauce | 1 oz | the guide gives no fiber_g | 41.4 / 4.44 / 0.74 / – / 1.48 / 124.21 / 0.59 / – / 0.3 / 0.59 | 41.4 / 4.44 / 0.74 / – / 1.48 / 124.21 / 0.59 / – / 0.3 / 0.59 |
| Honey BBQ | 1 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, protein_g | 19.84 / – / – / – / – / 79.38 / 5.1 / – / 4.54 / – | 19.84 / – / – / – / – / 79.38 / 5.1 / – / 4.54 / – |
| Pizza Cheese | 1 oz | the guide gives no fiber_g, sugars_g | 90.16 / 7.01 / 4.51 / 0 / 20.03 / 250.33 / 0 / – / – / 7.01 | 90.16 / 7.01 / 4.51 / 0 / 20.03 / 250.33 / 0 / – / – / 7.01 |
| Cheddar Cheese | 1 oz | the guide gives no sugars_g | 112.17 / 9.18 / 5.1 / – / 25.49 / 193.63 / 2.02 / 0.02 / – / 6.12 | 112.17 / 9.18 / 5.1 / – / 25.49 / 193.63 / 2.02 / 0.02 / – / 6.12 |
| Bacon | 1 oz | the guide gives no fiber_g | 143.18 / 12.27 / 4.09 / 0 / 40.91 / 388.67 / 0 / – / 0 / 8.18 | 143.18 / 12.27 / 4.09 / 0 / 40.91 / 388.67 / 0 / – / 0 / 8.18 |
| Chicken | 1 oz | the guide gives no fiber_g, sugars_g | 36.85 / 1.7 / 0.57 / 0.03 / 15.88 / 161.59 / 0 / – / – / 4.99 | 36.85 / 1.7 / 0.57 / 0.03 / 15.88 / 161.59 / 0 / – / – / 4.99 |
| Ham | 1 oz | the guide gives no fiber_g | 29.84 / 0.75 / 0.25 / – / 9.95 / 363.16 / 1.49 / – / 0.5 / 3.48 | 29.84 / 0.75 / 0.25 / – / 9.95 / 363.16 / 1.49 / – / 0.5 / 3.48 |
| Black Olives | 1 oz | the guide gives no sodium_mg | 35.52 / 3.2 / 0.62 / – / – / – / 0.51 / 0.88 / 0.14 / 0.28 | 35.52 / 3.2 / 0.62 / – / – / – / 0.51 / 0.88 / 0.14 / 0.28 |
| Jalapeno Peppers | 1 oz | the guide gives no fat_g, saturated_fat_g | 2.83 / – / – / – / – / 104.89 / 0.28 / 0.28 / 0.28 / 0.28 | 2.83 / – / – / – / – / 104.89 / 0.28 / 0.28 / 0.28 / 0.28 |
| Naked Wings | 1 Wing | the guide gives no fiber_g, sugars_g | 84.28 / 6.21 / 1.55 / – / 37.7 / 164.02 / 0.44 / – / – / 6.21 | 84.28 / 6.21 / 1.55 / – / 37.7 / 164.02 / 0.44 / – / – / 6.21 |
| Mild Buffalo Wings | 1 Wing | the guide gives no fiber_g, sugars_g | 105.63 / 8.78 / 1.98 / 0.04 / 37.42 / 285.21 / 0.72 / – / – / 6.16 | 105.63 / 8.78 / 1.98 / 0.04 / 37.42 / 285.21 / 0.72 / – / – / 6.16 |
| Hot Buffalo Wings | 1 Wing | the guide gives no fiber_g, sugars_g | 88.34 / 6.39 / 1.56 / – / 37.99 / 350.57 / 0.99 / – / – / 6.26 | 88.34 / 6.39 / 1.56 / – / 37.99 / 350.57 / 0.99 / – / – / 6.26 |
| BBQ Wings | 1 Wing | the guide gives no fiber_g | 87.26 / 6.16 / 1.54 / – / 37.42 / 186.6 / 1.97 / – / 1.36 / 6.16 | 87.26 / 6.16 / 1.54 / – / 37.42 / 186.6 / 1.97 / – / 1.36 / 6.16 |
| Bacon Bits | 1 oz | the guide gives no saturated_fat_g, sugars_g | 121.5 / 4.05 / – / – / – / 526.45 / 4.05 / 4.05 / – / 12.15 | 121.5 / 4.05 / – / – / – / 526.45 / 4.05 / 4.05 / – / 12.15 |
| Banana Peppers | 1 oz | the guide gives no fat_g, saturated_fat_g | 12.02 / – / – / – / – / 300.5 / 1 / 1 / 1 / 1 | 12.02 / – / – / – / – / 300.5 / 1 / 1 / 1 / 1 |
| Croutons | 1 oz | the guide gives no saturated_fat_g, fiber_g, sugars_g | 121.5 / 4.05 / – / – / – / 303.62 / 16.2 / – / – / 4.05 | 121.5 / 4.05 / – / – / – / 303.62 / 16.2 / – / – / 4.05 |
| Pickle Slices | 1 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / 180.3 / 0 / – / – / – | 0 / – / – / – / – / 180.3 / 0 / – / – / – |
| 1000 Island Dressing | 2 oz | the guide gives no fiber_g, protein_g | 200.35 / 16.03 / 3.01 / – / 20.03 / 400.86 / 16.03 / – / 8.01 / – | 200.35 / 16.03 / 3.01 / – / 20.03 / 400.86 / 16.03 / – / 8.01 / – |
| Blue Cheese Dressing | 2 oz | the guide gives no fiber_g | 260.45 / 28.05 / 5.01 / – / 20.03 / 641.27 / 2 / – / 2 / 2 | 260.45 / 28.05 / 5.01 / – / 20.03 / 641.27 / 2 / – / 2 / 2 |
| Lite Italian Dressing | 2 oz | the guide gives no saturated_fat_g, fiber_g, protein_g | 18.17 / 0.09 / – / – / – / 908.88 / 1.82 / – / 1.82 / – | 18.17 / 0.09 / – / – / – / 908.88 / 1.82 / – / 1.82 / – |
| Red Wine Vinegar | 2 oz | the guide gives no fat_g, saturated_fat_g, fiber_g, sugars_g, protein_g | 1.83 / – / – / – / – / 0.35 / 0.46 / – / – / – | 1.83 / – / – / – / – / 0.35 / 0.46 / – / – / – |
| Soybean Oil | 2 oz | the guide gives no sodium_mg, fiber_g, sugars_g, protein_g | 485.99 / 56.7 / 8.1 / – / – / – / 0 / – / – / – | 485.99 / 56.7 / 8.1 / – / – / – / 0 / – / – / – |
| Traditional Round: Medium 12” | 1 Slice (10 slices/Pizza) | only in draft B | not found | 129.27 / 1.22 / 0.2 / 0 / 0 / 120.86 / 25.38 / 0.87 / 0.73 / 4.02 |
| Traditional Round: Large 14” | 1 Slice (10 slices/Pizza) | only in draft B | not found | 172.36 / 1.63 / 0.26 / 0 / 0 / 161.15 / 33.84 / 1.16 / 0.97 / 5.36 |
| Traditional Round: Giant 16” | 1 Slice (12 slices/Pizza) | only in draft B | not found | 197.5 / 1.86 / 0.3 / 0 / 0 / 184.65 / 38.77 / 1.32 / 1.11 / 6.14 |
| Flatbread Pizza Crust | 1 Slice (12 slices/Pizza) | only in draft B | not found | 32.91 / 0.73 / 0.27 / – / – / 14.63 / 5.49 / 0.18 / 0.18 / 0.91 |
| Carrots (Baby) | 1/4 cup | only in draft B | not found | – / 0.08 / 0.01 / 0 / 0 / 47.97 / 3.26 / 1.78 / 2.93 / 0.39 |
| Cucumber (sliced) | 1/4 cup | only in draft B | not found | – / 0.05 / 0 / 0 / 0 / 0.6 / 0.45 / 0.21 / 0.41 / 0.18 |

## Spot check (7 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Stuffed Crust Pizza | 1 Slice (12 slices/Pizza) | 204.12 / 5.03 / 2.5 / 0 / 10.02 / 276.24 / 31.72 / 1.08 / 0.91 / 8.53 |
| Red Onions | 1 oz | 8.5 / 0 / 0 / 0 / 0 / 0.85 / 1.54 / 0.57 / 1.72 / 0.19 |
| Alfredo Sauce | 1 oz | 29.2 / 1.87 / 1.63 / 0 / 0.91 / 215.45 / 2.84 / 0.12 / 0.3 / 0.24 |
| Pasta | 5 oz | 255.15 / 3.83 / 0.37 / 0 / 0 / 2.78 / 47.6 / 2.44 / 2.44 / 8.54 |
| Cicis Brewed Sweet Tea (No Ice) | 18 fl oz. | 390 / 0 / 0 / 0 / 0 / 0 / 99 / 0 / 99 / 0 |
| Minute Maid Premium Lemonade | 18 fl oz. | 210 / 0 / 0 / 0 / 0 / 150 / 54 / 0 / 52 / 0 |
| Red Pasta Sauce | 2 oz | 17.01 / 0 / 0 / 0 / 0 / 150.57 / 3.43 / 0.94 / 2.19 / 0.62 |
