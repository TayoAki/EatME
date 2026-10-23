# Mountain Mike's Pizza: lines for a person

Guide: https://www.mountainmikespizza.com/wp-content/uploads/2018/10/Menu_Pizza_Calorie_Chart.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (168)

Fix each line in `menus/mountain-mikes-pizza.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Diamond Head | 1 slice (Mountain 20") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 309.52 / – / – / – / – / – / – / – / – / – | 309.52 / – / – / – / – / – / – / – / – / – |
| Diamond Head | 1 slice (Large 14") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 226.26 / – / – / – / – / – / – / – / – / – | 226.26 / – / – / – / – / – / – / – / – / – |
| Diamond Head | 1 slice (Medium 12") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 196.37 / – / – / – / – / – / – / – / – / – | 196.37 / – / – / – / – / – / – / – / – / – |
| Diamond Head | 1 slice (Small 10") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 141.54 / – / – / – / – / – / – / – / – / – | 141.54 / – / – / – / – / – / – / – / – / – |
| Garlic Tuscan | 1 slice (Mountain 20") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 390.07 / – / – / – / – / – / – / – / – / – | 390.07 / – / – / – / – / – / – / – / – / – |
| Garlic Tuscan | 1 slice (Large 14") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 283.79 / – / – / – / – / – / – / – / – / – | 283.79 / – / – / – / – / – / – / – / – / – |
| Garlic Tuscan | 1 slice (Medium 12") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 246.71 / – / – / – / – / – / – / – / – / – | 246.71 / – / – / – / – / – / – / – / – / – |
| Garlic Tuscan | 1 slice (Small 10") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 187.79 / – / – / – / – / – / – / – / – / – | 187.79 / – / – / – / – / – / – / – / – / – |
| Mt St Helens | 1 slice (Mountain 20") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 321.86 / – / – / – / – / – / – / – / – / – | 321.86 / – / – / – / – / – / – / – / – / – |
| Mt St Helens | 1 slice (Large 14") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 294.04 / – / – / – / – / – / – / – / – / – | 294.04 / – / – / – / – / – / – / – / – / – |
| Mt St Helens | 1 slice (Medium 12") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 203.73 / – / – / – / – / – / – / – / – / – | 203.73 / – / – / – / – / – / – / – / – / – |
| Mt St Helens | 1 slice (Small 10") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 152.62 / – / – / – / – / – / – / – / – / – | 152.62 / – / – / – / – / – / – / – / – / – |
| Mt Veggiemore | 1 slice (Mountain 20") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 308.73 / – / – / – / – / – / – / – / – / – | 308.73 / – / – / – / – / – / – / – / – / – |
| Mt Veggiemore | 1 slice (Large 14") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 225.69 / – / – / – / – / – / – / – / – / – | 225.69 / – / – / – / – / – / – / – / – / – |
| Mt Veggiemore | 1 slice (Medium 12") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 195.15 / – / – / – / – / – / – / – / – / – | 195.15 / – / – / – / – / – / – / – / – / – |
| Mt Veggiemore | 1 slice (Small 10") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 147.12 / – / – / – / – / – / – / – / – / – | 147.12 / – / – / – / – / – / – / – / – / – |
| Pikes Peak | 1 slice (Mountain 20") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 476.92 / – / – / – / – / – / – / – / – / – | 476.92 / – / – / – / – / – / – / – / – / – |
| Pikes Peak | 1 slice (Large 14") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 286.86 / – / – / – / – / – / – / – / – / – | 286.86 / – / – / – / – / – / – / – / – / – |
| Pikes Peak | 1 slice (Medium 12") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 249.5 / – / – / – / – / – / – / – / – / – | 249.5 / – / – / – / – / – / – / – / – / – |
| Pikes Peak | 1 slice (Small 10") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 189.94 / – / – / – / – / – / – / – / – / – | 189.94 / – / – / – / – / – / – / – / – / – |
| Robbers Roost | 1 slice (Mountain 20") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 295.56 / – / – / – / – / – / – / – / – / – | 295.56 / – / – / – / – / – / – / – / – / – |
| Robbers Roost | 1 slice (Large 14") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 229.31 / – / – / – / – / – / – / – / – / – | 229.31 / – / – / – / – / – / – / – / – / – |
| Robbers Roost | 1 slice (Medium 12") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 198.82 / – / – / – / – / – / – / – / – / – | 198.82 / – / – / – / – / – / – / – / – / – |
| Robbers Roost | 1 slice (Small 10") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 148.98 / – / – / – / – / – / – / – / – / – | 148.98 / – / – / – / – / – / – / – / – / – |
| Sizzlin Bacon | 1 slice (Mountain 20") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 376.44 / – / – / – / – / – / – / – / – / – | 376.44 / – / – / – / – / – / – / – / – / – |
| Sizzlin Bacon | 1 slice (Large 14") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 274.06 / – / – / – / – / – / – / – / – / – | 274.06 / – / – / – / – / – / – / – / – / – |
| Sizzlin Bacon | 1 slice (Medium 12") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 238.2 / – / – / – / – / – / – / – / – / – | 238.2 / – / – / – / – / – / – / – / – / – |
| Sizzlin Bacon | 1 slice (Small 10") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 180.86 / – / – / – / – / – / – / – / – / – | 180.86 / – / – / – / – / – / – / – / – / – |
| Snowy Alps (Combo) | 1 slice (Mountain 20") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 341.22 / – / – / – / – / – / – / – / – / – | 341.22 / – / – / – / – / – / – / – / – / – |
| Snowy Alps (Combo) | 1 slice (Large 14") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 248.9 / – / – / – / – / – / – / – / – / – | 248.9 / – / – / – / – / – / – / – / – / – |
| Snowy Alps (Combo) | 1 slice (Medium 12") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 216.18 / – / – / – / – / – / – / – / – / – | 216.18 / – / – / – / – / – / – / – / – / – |
| Snowy Alps (Combo) | 1 slice (Small 10") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 163.24 / – / – / – / – / – / – / – / – / – | 163.24 / – / – / – / – / – / – / – / – / – |
| Snowy Alps (Veggie) | 1 slice (Mountain 20") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 311.53 / – / – / – / – / – / – / – / – / – | 311.53 / – / – / – / – / – / – / – / – / – |
| Snowy Alps (Veggie) | 1 slice (Large 14") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 227.69 / – / – / – / – / – / – / – / – / – | 227.69 / – / – / – / – / – / – / – / – / – |
| Snowy Alps (Veggie) | 1 slice (Medium 12") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 197.72 / – / – / – / – / – / – / – / – / – | 197.72 / – / – / – / – / – / – / – / – / – |
| Snowy Alps (Veggie) | 1 slice (Small 10") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 148.4 / – / – / – / – / – / – / – / – / – | 148.4 / – / – / – / – / – / – / – / – / – |
| Chicken Club | 1 slice (Mountain 20") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 390.76 / – / – / – / – / – / – / – / – / – | 390.76 / – / – / – / – / – / – / – / – / – |
| Chicken Club | 1 slice (Large 14") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 284.29 / – / – / – / – / – / – / – / – / – | 284.29 / – / – / – / – / – / – / – / – / – |
| Chicken Club | 1 slice (Medium 12") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 246.03 / – / – / – / – / – / – / – / – / – | 246.03 / – / – / – / – / – / – / – / – / – |
| Chicken Club | 1 slice (Small 10") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 185.33 / – / – / – / – / – / – / – / – / – | 185.33 / – / – / – / – / – / – / – / – / – |
| Everest | 1 slice (Mountain 20") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 369.49 / – / – / – / – / – / – / – / – / – | 369.49 / – / – / – / – / – / – / – / – / – |
| Everest | 1 slice (Large 14") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 269.09 / – / – / – / – / – / – / – / – / – | 269.09 / – / – / – / – / – / – / – / – / – |
| Everest | 1 slice (Medium 12") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 232.61 / – / – / – / – / – / – / – / – / – | 232.61 / – / – / – / – / – / – / – / – / – |
| Everest | 1 slice (Small 10") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 176.04 / – / – / – / – / – / – / – / – / – | 176.04 / – / – / – / – / – / – / – / – / – |
| Pineapple Chicken | 1 slice (Mountain 20") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 407.76 / – / – / – / – / – / – / – / – / – | 407.76 / – / – / – / – / – / – / – / – / – |
| Pineapple Chicken | 1 slice (Large 14") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 296.43 / – / – / – / – / – / – / – / – / – | 296.43 / – / – / – / – / – / – / – / – / – |
| Pineapple Chicken | 1 slice (Medium 12") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 255.97 / – / – / – / – / – / – / – / – / – | 255.97 / – / – / – / – / – / – / – / – / – |
| Pineapple Chicken | 1 slice (Small 10") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 192.1 / – / – / – / – / – / – / – / – / – | 192.1 / – / – / – / – / – / – / – / – / – |
| Cheese | 1 slice (Mountain 20") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 268.1 / – / – / – / – / – / – / – / – / – | 268.1 / – / – / – / – / – / – / – / – / – |
| Cheese | 1 slice (Large 14") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 196.71 / – / – / – / – / – / – / – / – / – | 196.71 / – / – / – / – / – / – / – / – / – |
| Cheese | 1 slice (Medium 12") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 170.81 / – / – / – / – / – / – / – / – / – | 170.81 / – / – / – / – / – / – / – / – / – |
| Cheese | 1 slice (Small 10") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 126.8 / – / – / – / – / – / – / – / – / – | 126.8 / – / – / – / – / – / – / – / – / – |
| Pepperoni | 1 slice (Mountain 20") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 347.14 / – / – / – / – / – / – / – / – / – | 347.14 / – / – / – / – / – / – / – / – / – |
| Pepperoni | 1 slice (Large 14") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 253.35 / – / – / – / – / – / – / – / – / – | 253.35 / – / – / – / – / – / – / – / – / – |
| Pepperoni | 1 slice (Medium 12") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 217.44 / – / – / – / – / – / – / – / – / – | 217.44 / – / – / – / – / – / – / – / – / – |
| Pepperoni | 1 slice (Small 10") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 166.32 / – / – / – / – / – / – / – / – / – | 166.32 / – / – / – / – / – / – / – / – / – |
| Sausage (Italian) | 1 slice (Mountain 20") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 246.21 / – / – / – / – / – / – / – / – / – | 246.21 / – / – / – / – / – / – / – / – / – |
| Sausage (Italian) | 1 slice (Large 14") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 233.19 / – / – / – / – / – / – / – / – / – | 233.19 / – / – / – / – / – / – / – / – / – |
| Sausage (Italian) | 1 slice (Medium 12") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 202.73 / – / – / – / – / – / – / – / – / – | 202.73 / – / – / – / – / – / – / – / – / – |
| Sausage (Italian) | 1 slice (Small 10") | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 152.33 / – / – / – / – / – / – / – / – / – | 152.33 / – / – / – / – / – / – / – / – / – |
| Pizza Dough | 1 slice, Mountain 20" (2.60 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 188.25 / – / – / – / – / – / – / – / – / – | 188.25 / – / – / – / – / – / – / – / – / – |
| Pizza Dough | 1 slice, Large 14" (2.60 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 139.74 / – / – / – / – / – / – / – / – / – | 139.74 / – / – / – / – / – / – / – / – / – |
| Pizza Dough | 1 slice, Medium 12" (2.60 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 120.91 / – / – / – / – / – / – / – / – / – | 120.91 / – / – / – / – / – / – / – / – / – |
| Pizza Dough | 1 slice, Small 10" (2.60 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 86.88 / – / – / – / – / – / – / – / – / – | 86.88 / – / – / – / – / – / – / – / – / – |
| Pizza Sauce | 1 slice, Mountain 20" (0.40 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 6.89 / – / – / – / – / – / – / – / – / – | 6.89 / – / – / – / – / – / – / – / – / – |
| Pizza Sauce | 1 slice, Large 14" (0.40 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 4.99 / – / – / – / – / – / – / – / – / – | 4.99 / – / – / – / – / – / – / – / – / – |
| Pizza Sauce | 1 slice, Medium 12" (0.40 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 4.3 / – / – / – / – / – / – / – / – / – | 4.3 / – / – / – / – / – / – / – / – / – |
| Pizza Sauce | 1 slice, Small 10" (0.40 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 3.44 / – / – / – / – / – / – / – / – / – | 3.44 / – / – / – / – / – / – / – / – / – |
| Mozzarella Cheese | 1 slice, Mountain 20" (0.80 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 72.96 / – / – / – / – / – / – / – / – / – | 72.96 / – / – / – / – / – / – / – / – / – |
| Mozzarella Cheese | 1 slice, Large 14" (0.80 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 51.98 / – / – / – / – / – / – / – / – / – | 51.98 / – / – / – / – / – / – / – / – / – |
| Mozzarella Cheese | 1 slice, Medium 12" (0.80 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 45.6 / – / – / – / – / – / – / – / – / – | 45.6 / – / – / – / – / – / – / – / – / – |
| Mozzarella Cheese | 1 slice, Small 10" (0.80 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 36.48 / – / – / – / – / – / – / – / – / – | 36.48 / – / – / – / – / – / – / – / – / – |
| Topping Cheese | 1 slice, Mountain 20" (0.10 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 9.59 / – / – / – / – / – / – / – / – / – | 9.59 / – / – / – / – / – / – / – / – / – |
| Topping Cheese | 1 slice, Large 14" (0.10 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 6.71 / – / – / – / – / – / – / – / – / – | 6.71 / – / – / – / – / – / – / – / – / – |
| Topping Cheese | 1 slice, Medium 12" (0.10 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 5.99 / – / – / – / – / – / – / – / – / – | 5.99 / – / – / – / – / – / – / – / – / – |
| Topping Cheese | 1 slice, Small 10" (0.10 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 4.79 / – / – / – / – / – / – / – / – / – | 4.79 / – / – / – / – / – / – / – / – / – |
| Ham | 1 slice, Mountain 20" (0.40 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 11.49 / – / – / – / – / – / – / – / – / – | 11.49 / – / – / – / – / – / – / – / – / – |
| Ham | 1 slice, Large 14" (0.40 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 8.2 / – / – / – / – / – / – / – / – / – | 8.2 / – / – / – / – / – / – / – / – / – |
| Ham | 1 slice, Medium 12" (0.40 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 7.18 / – / – / – / – / – / – / – / – / – | 7.18 / – / – / – / – / – / – / – / – / – |
| Ham | 1 slice, Small 10" (0.40 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 5.73 / – / – / – / – / – / – / – / – / – | 5.73 / – / – / – / – / – / – / – / – / – |
| Canadian Bacon | 1 slice, Mountain 20" (0.40 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 11.94 / – / – / – / – / – / – / – / – / – | 11.94 / – / – / – / – / – / – / – / – / – |
| Canadian Bacon | 1 slice, Large 14" (0.40 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 8.53 / – / – / – / – / – / – / – / – / – | 8.53 / – / – / – / – / – / – / – / – / – |
| Canadian Bacon | 1 slice, Medium 12" (0.40 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 7.46 / – / – / – / – / – / – / – / – / – | 7.46 / – / – / – / – / – / – / – / – / – |
| Canadian Bacon | 1 slice, Small 10" (0.40 oz) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 5.96 / – / – / – / – / – / – / – / – / – | 5.96 / – / – / – / – / – / – / – / – / – |
| Salami | 1 slice, Mountain 20" (0.40 oz) | only in draft B | not found | 46.61 / – / – / – / – / – / – / – / – / – |
| Salami | 1 slice, Large 14" (0.40 oz) | only in draft B | not found | 33.29 / – / – / – / – / – / – / – / – / – |
| Salami | 1 slice, Medium 12" (0.40 oz) | only in draft B | not found | 29.13 / – / – / – / – / – / – / – / – / – |
| Salami | 1 slice, Small 10" (0.40 oz) | only in draft B | not found | 23.3 / – / – / – / – / – / – / – / – / – |
| Pepperoni | 1 slice, Mountain 20" (0.40 oz) | only in draft B | not found | 52.69 / – / – / – / – / – / – / – / – / – |
| Pepperoni | 1 slice, Large 14" (0.40 oz) | only in draft B | not found | 37.63 / – / – / – / – / – / – / – / – / – |
| Pepperoni | 1 slice, Medium 12" (0.40 oz) | only in draft B | not found | 32.93 / – / – / – / – / – / – / – / – / – |
| Pepperoni | 1 slice, Small 10" (0.40 oz) | only in draft B | not found | 26.34 / – / – / – / – / – / – / – / – / – |
| Mushrooms | 1 slice, Mountain 20" (0.40 oz) | only in draft B | not found | 2.43 / – / – / – / – / – / – / – / – / – |
| Mushrooms | 1 slice, Large 14" (0.40 oz) | only in draft B | not found | 1.73 / – / – / – / – / – / – / – / – / – |
| Mushrooms | 1 slice, Medium 12" (0.40 oz) | only in draft B | not found | 1.52 / – / – / – / – / – / – / – / – / – |
| Mushrooms | 1 slice, Small 10" (0.40 oz) | only in draft B | not found | 1.2 / – / – / – / – / – / – / – / – / – |
| Black Olives | 1 slice, Mountain 20" (0.40 oz) | only in draft B | not found | 17.73 / – / – / – / – / – / – / – / – / – |
| Black Olives | 1 slice, Large 14" (0.40 oz) | only in draft B | not found | 12.66 / – / – / – / – / – / – / – / – / – |
| Black Olives | 1 slice, Medium 12" (0.40 oz) | only in draft B | not found | 11.08 / – / – / – / – / – / – / – / – / – |
| Black Olives | 1 slice, Small 10" (0.40 oz) | only in draft B | not found | 8.86 / – / – / – / – / – / – / – / – / – |
| Green Bell Peppers | 1 slice, Mountain 20" (0.20 oz) | only in draft B | not found | 1.14 / – / – / – / – / – / – / – / – / – |
| Green Bell Peppers | 1 slice, Large 14" (0.20 oz) | only in draft B | not found | 0.81 / – / – / – / – / – / – / – / – / – |
| Green Bell Peppers | 1 slice, Medium 12" (0.20 oz) | only in draft B | not found | 0.71 / – / – / – / – / – / – / – / – / – |
| Green Bell Peppers | 1 slice, Small 10" (0.20 oz) | only in draft B | not found | 0.56 / – / – / – / – / – / – / – / – / – |
| Onions | 1 slice, Mountain 20" (0.20 oz) | only in draft B | not found | 2.52 / – / – / – / – / – / – / – / – / – |
| Onions | 1 slice, Large 14" (0.20 oz) | only in draft B | not found | 1.8 / – / – / – / – / – / – / – / – / – |
| Onions | 1 slice, Medium 12" (0.20 oz) | only in draft B | not found | 1.57 / – / – / – / – / – / – / – / – / – |
| Onions | 1 slice, Small 10" (0.20 oz) | only in draft B | not found | 0.9 / – / – / – / – / – / – / – / – / – |
| Garlic | 1 slice, Mountain 20" (0.20 oz) | only in draft B | not found | 8.47 / – / – / – / – / – / – / – / – / – |
| Garlic | 1 slice, Large 14" (0.20 oz) | only in draft B | not found | 6.05 / – / – / – / – / – / – / – / – / – |
| Garlic | 1 slice, Medium 12" (0.20 oz) | only in draft B | not found | 5.29 / – / – / – / – / – / – / – / – / – |
| Garlic | 1 slice, Small 10" (0.20 oz) | only in draft B | not found | 4.23 / – / – / – / – / – / – / – / – / – |
| Artichokes | 1 slice, Mountain 20" (0.60 oz) | only in draft B | not found | 15.2 / – / – / – / – / – / – / – / – / – |
| Artichokes | 1 slice, Large 14" (0.60 oz) | only in draft B | not found | 10.85 / – / – / – / – / – / – / – / – / – |
| Artichokes | 1 slice, Medium 12" (0.60 oz) | only in draft B | not found | 9.5 / – / – / – / – / – / – / – / – / – |
| Artichokes | 1 slice, Small 10" (0.60 oz) | only in draft B | not found | 7.6 / – / – / – / – / – / – / – / – / – |
| Jalapeno Slices | 1 slice, Mountain 20" (0.60 oz) | only in draft B | not found | 3.06 / – / – / – / – / – / – / – / – / – |
| Jalapeno Slices | 1 slice, Large 14" (0.60 oz) | only in draft B | not found | 2.18 / – / – / – / – / – / – / – / – / – |
| Jalapeno Slices | 1 slice, Medium 12" (0.60 oz) | only in draft B | not found | 1.91 / – / – / – / – / – / – / – / – / – |
| Jalapeno Slices | 1 slice, Small 10" (0.60 oz) | only in draft B | not found | 1.53 / – / – / – / – / – / – / – / – / – |
| Green Chiles | 1 slice, Mountain 20" (0.80 oz) | only in draft B | not found | 3.78 / – / – / – / – / – / – / – / – / – |
| Green Chiles | 1 slice, Large 14" (0.80 oz) | only in draft B | not found | 2.7 / – / – / – / – / – / – / – / – / – |
| Green Chiles | 1 slice, Medium 12" (0.80 oz) | only in draft B | not found | 2.36 / – / – / – / – / – / – / – / – / – |
| Green Chiles | 1 slice, Small 10" (0.80 oz) | only in draft B | not found | 1.89 / – / – / – / – / – / – / – / – / – |
| Pineapple | 1 slice, Mountain 20" (0.80 oz) | only in draft B | not found | 14.88 / – / – / – / – / – / – / – / – / – |
| Pineapple | 1 slice, Large 14" (0.80 oz) | only in draft B | not found | 10.63 / – / – / – / – / – / – / – / – / – |
| Pineapple | 1 slice, Medium 12" (0.80 oz) | only in draft B | not found | 9.3 / – / – / – / – / – / – / – / – / – |
| Pineapple | 1 slice, Small 10" (0.80 oz) | only in draft B | not found | 7.44 / – / – / – / – / – / – / – / – / – |
| Green Onions | 1 slice, Mountain 20" (0.15 oz) | only in draft B | not found | 1.36 / – / – / – / – / – / – / – / – / – |
| Green Onions | 1 slice, Large 14" (0.15 oz) | only in draft B | not found | 0.97 / – / – / – / – / – / – / – / – / – |
| Green Onions | 1 slice, Medium 12" (0.15 oz) | only in draft B | not found | 0.75 / – / – / – / – / – / – / – / – / – |
| Green Onions | 1 slice, Small 10" (0.15 oz) | only in draft B | not found | 0.68 / – / – / – / – / – / – / – / – / – |
| Sun Dried Tomatoes | 1 slice, Mountain 20" (0.20 oz) | only in draft B | not found | 13.05 / – / – / – / – / – / – / – / – / – |
| Sun Dried Tomatoes | 1 slice, Large 14" (0.20 oz) | only in draft B | not found | 9.32 / – / – / – / – / – / – / – / – / – |
| Sun Dried Tomatoes | 1 slice, Medium 12" (0.20 oz) | only in draft B | not found | 8.15 / – / – / – / – / – / – / – / – / – |
| Sun Dried Tomatoes | 1 slice, Small 10" (0.20 oz) | only in draft B | not found | 6.52 / – / – / – / – / – / – / – / – / – |
| Linguica | 1 slice, Mountain 20" (0.48 oz) | only in draft B | not found | 38.5 / – / – / – / – / – / – / – / – / – |
| Linguica | 1 slice, Large 14" (0.48 oz) | only in draft B | not found | 27.56 / – / – / – / – / – / – / – / – / – |
| Linguica | 1 slice, Medium 12" (0.48 oz) | only in draft B | not found | 23.67 / – / – / – / – / – / – / – / – / – |
| Linguica | 1 slice, Small 10" (0.48 oz) | only in draft B | not found | 18.24 / – / – / – / – / – / – / – / – / – |
| Ground Beef | 1 slice, Mountain 20" (0.48 oz) | only in draft B | not found | 34.23 / – / – / – / – / – / – / – / – / – |
| Ground Beef | 1 slice, Large 14" (0.48 oz) | only in draft B | not found | 24.5 / – / – / – / – / – / – / – / – / – |
| Ground Beef | 1 slice, Medium 12" (0.48 oz) | only in draft B | not found | 21.04 / – / – / – / – / – / – / – / – / – |
| Ground Beef | 1 slice, Small 10" (0.48 oz) | only in draft B | not found | 16.21 / – / – / – / – / – / – / – / – / – |
| Italian Sausage | 1 slice, Mountain 20" (0.48 oz) | only in draft B | not found | 34.65 / – / – / – / – / – / – / – / – / – |
| Italian Sausage | 1 slice, Large 14" (0.48 oz) | only in draft B | not found | 24.8 / – / – / – / – / – / – / – / – / – |
| Italian Sausage | 1 slice, Medium 12" (0.48 oz) | only in draft B | not found | 21.3 / – / – / – / – / – / – / – / – / – |
| Italian Sausage | 1 slice, Small 10" (0.48 oz) | only in draft B | not found | 16.41 / – / – / – / – / – / – / – / – / – |
| Hot Link Sausage | 1 slice, Mountain 20" (0.48 oz) | only in draft B | not found | 40.37 / – / – / – / – / – / – / – / – / – |
| Hot Link Sausage | 1 slice, Large 14" (0.48 oz) | only in draft B | not found | 28.9 / – / – / – / – / – / – / – / – / – |
| Hot Link Sausage | 1 slice, Medium 12" (0.48 oz) | only in draft B | not found | 24.82 / – / – / – / – / – / – / – / – / – |
| Hot Link Sausage | 1 slice, Small 10" (0.48 oz) | only in draft B | not found | 19.12 / – / – / – / – / – / – / – / – / – |
| Chicken | 1 slice, Mountain 20" (0.48 oz) | only in draft B | not found | 20.91 / – / – / – / – / – / – / – / – / – |
| Chicken | 1 slice, Large 14" (0.48 oz) | only in draft B | not found | 14.97 / – / – / – / – / – / – / – / – / – |
| Chicken | 1 slice, Medium 12" (0.48 oz) | only in draft B | not found | 12.85 / – / – / – / – / – / – / – / – / – |
| Chicken | 1 slice, Small 10" (0.48 oz) | only in draft B | not found | 9.9 / – / – / – / – / – / – / – / – / – |
| Bacon Pieces | 1 slice, Mountain 20" (0.48 oz) | only in draft B | not found | 80.86 / – / – / – / – / – / – / – / – / – |
| Bacon Pieces | 1 slice, Large 14" (0.48 oz) | only in draft B | not found | 57.88 / – / – / – / – / – / – / – / – / – |
| Bacon Pieces | 1 slice, Medium 12" (0.48 oz) | only in draft B | not found | 49.71 / – / – / – / – / – / – / – / – / – |
| Bacon Pieces | 1 slice, Small 10" (0.48 oz) | only in draft B | not found | 38.3 / – / – / – / – / – / – / – / – / – |
| Anchovies | 1 slice, Mountain 20" (1.60 fillets) | only in draft B | not found | 6.66 / – / – / – / – / – / – / – / – / – |
| Anchovies | 1 slice, Large 14" (1.60 fillets) | only in draft B | not found | 4.7 / – / – / – / – / – / – / – / – / – |
| Anchovies | 1 slice, Medium 12" (1.60 fillets) | only in draft B | not found | 4.16 / – / – / – / – / – / – / – / – / – |
| Anchovies | 1 slice, Small 10" (1.60 fillets) | only in draft B | not found | 3.33 / – / – / – / – / – / – / – / – / – |
| Tomato Slices | 1 slice, Mountain 20" (1.20 medium slices) | only in draft B | not found | 4.8 / – / – / – / – / – / – / – / – / – |
| Tomato Slices | 1 slice, Large 14" (1.20 medium slices) | only in draft B | not found | 6.8 / – / – / – / – / – / – / – / – / – |
| Tomato Slices | 1 slice, Medium 12" (1.20 medium slices) | only in draft B | not found | 2.68 / – / – / – / – / – / – / – / – / – |
| Tomato Slices | 1 slice, Small 10" (1.20 medium slices) | only in draft B | not found | 2.4 / – / – / – / – / – / – / – / – / – |

## Spot check (0 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
