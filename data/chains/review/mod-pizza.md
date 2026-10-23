# MOD Pizza: lines for a person

Guide: https://modpizza.com/nutrition/ (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (124)

Fix each line in `menus/mod-pizza.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| Veg Out | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 670 / – / – / – / – / – / – / – / – / – | 670 / – / – / – / – / – / – / – / – / – |
| Smoke Show | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 954 / – / – / – / – / – / – / – / – / – | 954 / – / – / – / – / – / – / – / – / – |
| Perfect Pesto | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 888 / – / – / – / – / – / – / – / – / – | 888 / – / – / – / – / – / – / – / – / – |
| MOD-gherita | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 725 / – / – / – / – / – / – / – / – / – | 725 / – / – / – / – / – / – / – / – / – |
| Loaded Legend | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1011 / – / – / – / – / – / – / – / – / – | 1011 / – / – / – / – / – / – / – / – / – |
| Firebird | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 850 / – / – / – / – / – / – / – / – / – | 850 / – / – / – / – / – / – / – / – / – |
| Aloha | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 660 / – / – / – / – / – / – / – / – / – | 660 / – / – / – / – / – / – / – / – / – |
| Carnivore | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1121 / – / – / – / – / – / – / – / – / – | 1121 / – / – / – / – / – / – / – / – / – |
| OG Pepperoni | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 906 / – / – / – / – / – / – / – / – / – | 906 / – / – / – / – / – / – / – / – / – |
| Maddy's Favorite | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 682 / – / – / – / – / – / – / – / – / – | 682 / – / – / – / – / – / – / – / – / – |
| small (thin 6-inch) | 1 serving | only in draft A | 200 / – / – / – / – / – / – / – / – / – | not found |
| regular (thin 11-inch) | 1 serving | only in draft A | 467 / – / – / – / – / – / – / – / – / – | not found |
| gluten-friendly* | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 650 / – / – / – / – / – / – / – / – / – | 650 / – / – / – / – / – / – / – / – / – |
| crushed red pepper flakes | per ¼ c | only in draft A | 0 / – / – / – / – / – / – / – / – / – | not found |
| pepper | per ¼ c | only in draft A | 0 / – / – / – / – / – / – / – / – / – | not found |
| Mediterranean | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 460 / – / – / – / – / – / – / – / – / – | 460 / – / – / – / – / – / – / – / – / – |
| Italian Chop | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 375 / – / – / – / – / – / – / – / – / – | 375 / – / – / – / – / – / – / – / – / – |
| Garden | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 125 / – / – / – / – / – / – / – / – / – | 125 / – / – / – / – / – / – / – / – / – |
| Caesar | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 428 / – / – / – / – / – / – / – / – / – | 428 / – / – / – / – / – / – / – / – / – |
| cheesy garlic bread | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1340 / – / – / – / – / – / – / – / – / – | 1340 / – / – / – / – / – / – / – / – / – |
| caramelized pear ice tea | 16 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 80 / – / – / – / – / – / – / – / – / – | 80 / – / – / – / – / – / – / – / – / – |
| caramelized pear ice tea | 24 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 120 / – / – / – / – / – / – / – / – / – | 120 / – / – / – / – / – / – / – / – / – |
| vintage lemonade | 16 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 250 / – / – / – / – / – / – / – / – / – | 250 / – / – / – / – / – / – / – / – / – |
| vintage lemonade | 24 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 380 / – / – / – / – / – / – / – / – / – | 380 / – / – / – / – / – / – / – / – / – |
| marionberry lemonade | 16 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 320 / – / – / – / – / – / – / – / – / – | 320 / – / – / – / – / – / – / – / – / – |
| marionberry lemonade | 24 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 480 / – / – / – / – / – / – / – / – / – | 480 / – / – / – / – / – / – / – / – / – |
| Coca-Cola | 16 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 200 / – / – / – / – / – / – / – / – / – | 200 / – / – / – / – / – / – / – / – / – |
| Coca-Cola | 24 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 300 / – / – / – / – / – / – / – / – / – | 300 / – / – / – / – / – / – / – / – / – |
| Diet Coke | 16 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – |
| Diet Coke | 24 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – |
| Sprite | 16 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 200 / – / – / – / – / – / – / – / – / – | 200 / – / – / – / – / – / – / – / – / – |
| Sprite | 24 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 300 / – / – / – / – / – / – / – / – / – | 300 / – / – / – / – / – / – / – / – / – |
| Barq's Root Beer | 16 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 220 / – / – / – / – / – / – / – / – / – | 220 / – / – / – / – / – / – / – / – / – |
| Barq's Root Beer | 24 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 320 / – / – / – / – / – / – / – / – / – | 320 / – / – / – / – / – / – / – / – / – |
| Fanta Orange | 16 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 220 / – / – / – / – / – / – / – / – / – | 220 / – / – / – / – / – / – / – / – / – |
| Fanta Orange | 24 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 320 / – / – / – / – / – / – / – / – / – | 320 / – / – / – / – / – / – / – / – / – |
| Powerade Mountain Blast | 16 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 110 / – / – / – / – / – / – / – / – / – | 110 / – / – / – / – / – / – / – / – / – |
| Powerade Mountain Blast | 24 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 160 / – / – / – / – / – / – / – / – / – | 160 / – / – / – / – / – / – / – / – / – |
| Coke Zero | 16 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – |
| Coke Zero | 24 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – |
| Dr. Pepper | 16 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 190 / – / – / – / – / – / – / – / – / – | 190 / – / – / – / – / – / – / – / – / – |
| Dr. Pepper | 24 fl oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 290 / – / – / – / – / – / – / – / – / – | 290 / – / – / – / – / – / – / – / – / – |
| no name cake | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 290 / – / – / – / – / – / – / – / – / – | 290 / – / – / – / – / – / – / – / – / – |
| strawberry lemonade no name cake (limited edition) | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 330 / – / – / – / – / – / – / – / – / – | 330 / – / – / – / – / – / – / – / – / – |
| mega cookie | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1610 / – / – / – / – / – / – / – / – / – | 1610 / – / – / – / – / – / – / – / – / – |
| cinnaMOD | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1182 / – / – / – / – / – / – / – / – / – | 1182 / – / – / – / – / – / – / – / – / – |
| cake pop - pink vanilla | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 140 / – / – / – / – / – / – / – / – / – | 140 / – / – / – / – / – / – / – / – / – |
| cake pop - pumpkin spice | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 140 / – / – / – / – / – / – / – / – / – | 140 / – / – / – / – / – / – / – / – / – |
| sea salt caramel sauce | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 50 / – / – / – / – / – / – / – / – / – | 50 / – / – / – / – / – / – / – / – / – |
| cinnamon | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 20 / – / – / – / – / – / – / – / – / – | 20 / – / – / – / – / – / – / – / – / – |
| vanilla icing | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 80 / – / – / – / – / – / – / – / – / – | 80 / – / – / – / – / – / – / – / – / – |
| sugar | 1 serving | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 15 / – / – / – / – / – / – / – / – / – | 15 / – / – / – / – / – / – / – / – / – |
| thick crust (11-inch) | thick crust (11-inch) | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 933 / – / – / – / – / – / – / – / – / – | 933 / – / – / – / – / – / – / – / – / – |
| cauliflower crust | cauliflower crust | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 520 / – / – / – / – / – / – / – / – / – | 520 / – / – / – / – / – / – / – / – / – |
| balsamic fig glaze | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 30 / – / – / – / – / – / – / – / – / – | 30 / – / – / – / – / – / – / – / – / – |
| BBQ sauce | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 30 / – / – / – / – / – / – / – / – / – | 30 / – / – / – / – / – / – / – / – / – |
| creamy alfredo sauce | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 15 / – / – / – / – / – / – / – / – / – | 15 / – / – / – / – / – / – / – / – / – |
| Frank's Redhot Buffalo Sauce | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – |
| garlic rub | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 15 / – / – / – / – / – / – / – / – / – | 15 / – / – / – / – / – / – / – / – / – |
| Mike’s Hot Honey | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 70 / – / – / – / – / – / – / – / – / – | 70 / – / – / – / – / – / – / – / – / – |
| olive oil | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 120 / – / – / – / – / – / – / – / – / – | 120 / – / – / – / – / – / – / – / – / – |
| pesto | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 45 / – / – / – / – / – / – / – / – / – | 45 / – / – / – / – / – / – / – / – / – |
| ranch | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 50 / – / – / – / – / – / – / – / – / – | 50 / – / – / – / – / – / – / – / – / – |
| spicy tomato sauce | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 12 / – / – / – / – / – / – / – / – / – | 12 / – / – / – / – / – / – / – / – / – |
| sriracha | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 25 / – / – / – / – / – / – / – / – / – | 25 / – / – / – / – / – / – / – / – / – |
| sriracha ranch | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 35 / – / – / – / – / – / – / – / – / – | 35 / – / – / – / – / – / – / – / – / – |
| tomato sauce | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 5 / – / – / – / – / – / – / – / – / – | 5 / – / – / – / – / – / – / – / – / – |
| butter flavored spread | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 243 / – / – / – / – / – / – / – / – / – | 243 / – / – / – / – / – / – / – / – / – |
| asiago | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 110 / – / – / – / – / – / – / – / – / – | 110 / – / – / – / – / – / – / – / – / – |
| cheddar | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 110 / – / – / – / – / – / – / – / – / – | 110 / – / – / – / – / – / – / – / – / – |
| feta | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 70 / – / – / – / – / – / – / – / – / – | 70 / – / – / – / – / – / – / – / – / – |
| gorgonzola | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 100 / – / – / – / – / – / – / – / – / – | 100 / – / – / – / – / – / – / – / – / – |
| mozzarella | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 90 / – / – / – / – / – / – / – / – / – | 90 / – / – / – / – / – / – / – / – / – |
| parmesan | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 130 / – / – / – / – / – / – / – / – / – | 130 / – / – / – / – / – / – / – / – / – |
| plant-based cheese | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 80 / – / – / – / – / – / – / – / – / – | 80 / – / – / – / – / – / – / – / – / – |
| ricotta | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 100 / – / – / – / – / – / – / – / – / – | 100 / – / – / – / – / – / – / – / – / – |
| anchovies | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 30 / – / – / – / – / – / – / – / – / – | 30 / – / – / – / – / – / – / – / – / – |
| bacon | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 140 / – / – / – / – / – / – / – / – / – | 140 / – / – / – / – / – / – / – / – / – |
| canadian bacon | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 50 / – / – / – / – / – / – / – / – / – | 50 / – / – / – / – / – / – / – / – / – |
| egg – scrambled (limited locations) | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 80 / – / – / – / – / – / – / – / – / – | 80 / – / – / – / – / – / – / – / – / – |
| grilled chicken | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 70 / – / – / – / – / – / – / – / – / – | 70 / – / – / – / – / – / – / – / – / – |
| ground beef | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 210 / – / – / – / – / – / – / – / – / – | 210 / – / – / – / – / – / – / – / – / – |
| mild Italian sausage | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 240 / – / – / – / – / – / – / – / – / – | 240 / – / – / – / – / – / – / – / – / – |
| pepperoni | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 50 / – / – / – / – / – / – / – / – / – | 50 / – / – / – / – / – / – / – / – / – |
| plant-based Italian sausage | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 90 / – / – / – / – / – / – / – / – / – | 90 / – / – / – / – / – / – / – / – / – |
| salami | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 90 / – / – / – / – / – / – / – / – / – | 90 / – / – / – / – / – / – / – / – / – |
| spicy chicken sausage | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 90 / – / – / – / – / – / – / – / – / – | 90 / – / – / – / – / – / – / – / – / – |
| artichokes | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 30 / – / – / – / – / – / – / – / – / – | 30 / – / – / – / – / – / – / – / – / – |
| arugula | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – |
| banana peppers (limited locations) | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 5 / – / – / – / – / – / – / – / – / – | 5 / – / – / – / – / – / – / – / – / – |
| basil | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – |
| black olives | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 50 / – / – / – / – / – / – / – / – / – | 50 / – / – / – / – / – / – / – / – / – |
| broccoli – roasted | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 15 / – / – / – / – / – / – / – / – / – | 15 / – / – / – / – / – / – / – / – / – |
| cilantro | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – |
| croutons | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 120 / – / – / – / – / – / – / – / – / – | 120 / – / – / – / – / – / – / – / – / – |
| chickpeas | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 50 / – / – / – / – / – / – / – / – / – | 50 / – / – / – / – / – / – / – / – / – |
| chopped garlic | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 15 / – / – / – / – / – / – / – / – / – | 15 / – / – / – / – / – / – / – / – / – |
| corn – roasted | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 45 / – / – / – / – / – / – / – / – / – | 45 / – / – / – / – / – / – / – / – / – |
| cucumbers | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 10 / – / – / – / – / – / – / – / – / – | 10 / – / – / – / – / – / – / – / – / – |
| jalapenos | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 5 / – / – / – / – / – / – / – / – / – | 5 / – / – / – / – / – / – / – / – / – |
| green bell peppers | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 5 / – / – / – / – / – / – / – / – / – | 5 / – / – / – / – / – / – / – / – / – |
| mama lil's sweet hot peppas | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 50 / – / – / – / – / – / – / – / – / – | 50 / – / – / – / – / – / – / – / – / – |
| mixed spring greens | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 5 / – / – / – / – / – / – / – / – / – | 5 / – / – / – / – / – / – / – / – / – |
| mushrooms | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – |
| oregano | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – |
| pineapple | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 40 / – / – / – / – / – / – / – / – / – | 40 / – / – / – / – / – / – / – / – / – |
| red onion | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 10 / – / – / – / – / – / – / – / – / – | 10 / – / – / – / – / – / – / – / – / – |
| red peppers – roasted | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 15 / – / – / – / – / – / – / – / – / – | 15 / – / – / – / – / – / – / – / – / – |
| roasted garlic | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 60 / – / – / – / – / – / – / – / – / – | 60 / – / – / – / – / – / – / – / – / – |
| romaine | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – |
| rosemary – fresh chopped | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 10 / – / – / – / – / – / – / – / – / – | 10 / – / – / – / – / – / – / – / – / – |
| sea salt | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – |
| serrano peppers (limited locations) | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 10 / – / – / – / – / – / – / – / – / – | 10 / – / – / – / – / – / – / – / – / – |
| spinach | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – |
| tomatoes | per ¼ c | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 20 / – / – / – / – / – / – / – / – / – | 20 / – / – / – / – / – / – / – / – / – |
| balsamic vinaigrette | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 55 / – / – / – / – / – / – / – / – / – | 55 / – / – / – / – / – / – / – / – / – |
| caesar dressing | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 100 / – / – / – / – / – / – / – / – / – | 100 / – / – / – / – / – / – / – / – / – |
| champagne vinaigrette | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 67 / – / – / – / – / – / – / – / – / – | 67 / – / – / – / – / – / – / – / – / – |
| oil and vinegar | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 60 / – / – / – / – / – / – / – / – / – | 60 / – / – / – / – / – / – / – / – / – |
| red wine vinegar | per 1 tbsp | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 0 / – / – / – / – / – / – / – / – / – | 0 / – / – / – / – / – / – / – / – / – |
| crust | small (thin 6-inch) | only in draft B | not found | 200 / – / – / – / – / – / – / – / – / – |
| crust | regular (thin 11-inch) | only in draft B | not found | 467 / – / – / – / – / – / – / – / – / – |
| crushed red pepper flakes | ¼ c | only in draft B | not found | 0 / – / – / – / – / – / – / – / – / – |
| pepper | ¼ c | only in draft B | not found | 0 / – / – / – / – / – / – / – / – / – |

## Spot check (0 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
