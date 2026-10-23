# Buffalo Wild Wings: lines for a person

Guide: https://assets.ctfassets.net/6dxmiqksdkqb/2XgznB5cOqQ9l1r7PQAasB/dd312340082cc00107545e7ab21318a7/BWW_Nutrition_Guide__08-18-2026_-_11-17-2026_.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (349)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/buffalo-wild-wings.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Saucy Chicken Sandwich | 1 serving | only in draft A | – / – / – / – / – / – / – / – / – / – | not found | no numbers to look for |
| Classic Chicken Wrap with Pulled Chicken or Boneless Wings | 1 serving | only in draft A | – / – / – / – / – / – / – / – / – / – | not found | no numbers to look for |
| Add Signature Sauce | 2 fl oz | only in draft A | – / – / – / – / – / – / – / – / – / – | not found | no numbers to look for |
| American Breakfast, with Bacon or Sausage, JFK Airport | 1 serving | only in draft A | – / – / – / 0 / – / – / 40 / 2 / – / – | not found | A: numbers found after the name (line 808); check the size, mostly zeros: look |
| Add Signature Sauce | 1 serving | only in draft A | – / – / – / 0 / – / – / – / – / – / – | not found | A: numbers found after the name (line 7); check the size, mostly zeros: look |
| Breakfast Sandwich, with Bacon or Sausage, JFK Airport | 1 serving | only in draft A | – / – / – / 0 / – / – / 35 / 2 / – / – | not found | A: numbers found after the name (line 814); check the size, mostly zeros: look |
| Breakfast Wrap, with Bacon or Sausage, JFK Airport | 1 serving | only in draft A | – / – / – / 0 / – / – / 52 / 1 / 3 / – | not found | A: numbers found after the name (line 815); check the size |
| Original Chicken Dippers | 25 ea | only in draft A | 4780 / 201 / 76 / 12 / 1140 / 15950 / 433 / 31 / 0 / 310 | not found | A: numbers found after the name (line 863); check the size |
| B-Dubs Dip | 8 fl oz | only in draft A | 1050 / 103 / 17 / 1.5 / 80 / 3200 / 26 / 2 / 19 / 4 | not found | A: numbers found after the name (line 864); check the size |
| Spicy Chicken Dippers | 25 ea | only in draft A | 4140 / 196 / 69 / 9 / 980 / 14180 / 317 / 29 / 16 / 274 | not found | A: numbers found after the name (line 865); check the size |
| Grilled Chicken Dippers | 25 ea | only in draft A | 2370 / 29 / 9 / 0 / 1150 / 14000 / 17 / 0 / 0 / 514 | not found | A: numbers found after the name (line 867); check the size |
| Classic Chicken Wraps with Pulled Chicken or Boneless Wings | 6 ea | only in draft A | – / – / – / – / – / – / – / 17 / 32 / – | not found | A: numbers found after the name (line 869); check the size, mostly zeros: look |
| Chili con Queso with Chips | 1 serving | only in draft A | 3320 / 189 / 93 / 7 / 455 / 9330 / 286 / 30 / 38 / 122 | not found | A: numbers found after the name (line 872); check the size |
| Chips & House-made Guacamole | 1 serving | only in draft A | 2420 / 152 / 42 / 3.5 / 50 / 3200 / 262 / 30 / 7 / 36 | not found | A: numbers found after the name (line 873); check the size |
| Everything Pretzel Knots, with New Belgium Fat Tire® Beer Cheese and Honey Mustard | 1 serving | only in draft A | 2120 / 113 / 29 / 1 / 110 / 7070 / 226 / 7 / 37 / 47 | not found | A: numbers found after the name (line 874); check the size |
| Party Sampler | 1 serving | only in draft A | 4250 / 297 / 91 / 10 / 245 / 11570 / 332 / 18 / 53 / 67 | not found | A: numbers found after the name (line 876); check the size |
| Baked Mac & Cheese | 1 serving | only in draft A | 3870 / 227 / 102 / 3.5 / 505 / 10280 / 303 / 11 / 76 / 148 | not found | A: numbers found after the name (line 878); check the size |
| Caesar Salad with Caesar Dressing | 1 serving | only in draft A | 1570 / 121 / 25 / 0 / 95 / 4000 / 89 / 11 / 15 / 31 | not found | A: numbers found after the name (line 879); check the size |
| Potato Wedges | 1 serving | only in draft A | 2240 / 113 / 50 / 7 / 95 / 6190 / 270 / 36 / 4 / 36 | not found | A: numbers found after the name (line 881); check the size |
| Add Bacon Crumbles | 1 serving | only in draft A | 460 / 33 / 13 / 0 / 140 / 1700 / 4 / 1 / 1 / 37 | not found | A: numbers found after the name (line 882); check the size |
| Add Beer Cheese | 1 serving | only in draft A | 470 / 34 / 21 / 0 / 85 / 1730 / 18 / 0 / 11 / 18 | not found | A: numbers found after the name (line 883); check the size |
| Add Cheddar Jack Cheese | 1 serving | only in draft A | 650 / 52 / 31 / 2 / 160 / 1040 / 5 / 1 / 0 / 40 | not found | A: numbers found after the name (line 884); check the size |
| Add Hatch Queso | 1 serving | only in draft A | 440 / 32 / 18 / 1 / 110 / 2060 / 16 / 1 / 9 / 23 | not found | A: numbers found after the name (line 885); check the size |
| Diet Pepsi® | 20 oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 35 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 910); check the size, mostly zeros: look |
| Dr Pepper® | 20 oz | only in draft A | 100 / 0 / 0 / 0 / 0 / 50 / 26 / 0 / 26 / 0 | not found | A: numbers found after the name (line 911); check the size |
| Mountain Dew® | 20 oz | only in draft A | 110 / 0 / 0 / 0 / 0 / 50 / 30 / 0 / 30 / 0 | not found | A: numbers found after the name (line 912); check the size |
| Mug® Root Beer | 20 oz | only in draft A | 100 / 0 / 0 / 0 / 0 / 30 / 26 / 0 / 26 / 0 | not found | A: numbers found after the name (line 913); check the size |
| Pepsi® | 20 oz | only in draft A | 100 / 0 / 0 / 0 / 0 / 30 / 28 / 0 / 28 / 0 | not found | A: numbers found after the name (line 914); check the size |
| Pepsi Zero® | 20 oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 45 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 915); check the size, mostly zeros: look |
| Starry™ | 20 oz | only in draft A | 100 / 0 / 0 / 0 / 0 / 20 / 26 / 0 / 26 / 0 | not found | A: numbers found after the name (line 916); check the size |
| Tropicana® Lemonade | 20 oz | only in draft A | 100 / 0 / 0 / 0 / 0 / 105 / 27 / 0 / 27 / 0 | not found | A: numbers found after the name (line 917); check the size |
| Fresh-Brewed Lipton® Unsweetened Iced Tea | 20 oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 10 / 1 / 0 / 0 / 0 | not found | A: numbers found after the name (line 918); check the size, mostly zeros: look |
| Sweet Tea - at select locations | 20 oz | only in draft A | 110 / 0 / 0 / 0 / 0 / 10 / 29 / 0 / 28 / 0 | not found | A: numbers found after the name (line 919); check the size |
| Lipton Brisk® Iced Tea - at select locations | 20 oz | only in draft A | 70 / 0 / 0 / 0 / 0 / 50 / 18 / 0 / 18 / 0 | not found | A: numbers found after the name (line 920); check the size |
| Coffee | 20 oz | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 921); check the size, mostly zeros: look |
| Aquafina Bottled Water | 1 serving | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 922); check the size, mostly zeros: look |
| bubly™ sparkling water - at select locations | 1 serving | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 923); check the size, mostly zeros: look |
| Mug® Root Beer Bottle | 1 serving | only in draft A | 260 / 0 / 0 / 0 / 0 / 105 / 72 / 0 / 71 / 0 | not found | A: numbers found after the name (line 924); check the size |
| Lowfat Milk - at select locations | 1 serving | only in draft A | 110 / 2.5 / 1.5 / 0 / 10 / 110 / 12 / 0 / 12 / 8 | not found | A: numbers found after the name (line 925); check the size |
| Chocolate Milk - at select locations | 1 serving | only in draft A | 140 / 2.5 / 1.5 / 0 / 10 / 130 / 22 / 1 / 22 / 9 | not found | A: numbers found after the name (line 926); check the size |
| Apple Juice - at select locations | 1 serving | only in draft A | 80 / 0 / 0 / 0 / 0 / 10 / 20 / 0 / 19 / 0 | not found | A: numbers found after the name (line 927); check the size |
| Orange Juice - at select locations | 1 serving | only in draft A | 80 / 0 / 0 / 0 / 0 / 45 / 22 / 0 / 22 / 1 | not found | A: numbers found after the name (line 928); check the size |
| Black Cherry | 1 serving | only in draft A | 50 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 12 / 0 | not found | A: numbers found after the name (line 930); check the size |
| Mango | 1 serving | only in draft A | 50 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 13 / 0 | not found | A: numbers found after the name (line 931); check the size |
| Passion Fruit | 1 serving | only in draft A | 50 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 12 / 0 | not found | A: numbers found after the name (line 932); check the size |
| Peach | 1 serving | only in draft A | 50 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 12 / 0 | not found | A: numbers found after the name (line 933); check the size |
| Pineapple | 1 serving | only in draft A | 50 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 13 / 0 | not found | A: numbers found after the name (line 934); check the size |
| Strawberry | 1 serving | only in draft A | 50 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 12 / 0 | not found | A: numbers found after the name (line 935); check the size |
| Watermelon | 1 serving | only in draft A | 50 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 12 / 0 | not found | A: numbers found after the name (line 936); check the size |
| Ginger Beer | 1 serving | only in draft A | 80 / 0 / 0 / 0 / 0 / 15 / 20 / 0 / 18 / 0 | not found | A: numbers found after the name (line 938); check the size |
| Tonic | 1 serving | only in draft A | 50 / 0 / 0 / 0 / 0 / 12 / 12 / 0 / 9 / 0 | not found | A: numbers found after the name (line 939); check the size |
| Club Soda | 1 serving | only in draft A | 0 / 0 / 0 / 0 / 0 / 35 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 940); check the size, mostly zeros: look |
| O Hibiscus Ginger Beer | 1 serving | only in draft A | 90 / 0 / 0 / 0 / 0 / 10 / 20 / 0 / 20 / 0 | not found | A: numbers found after the name (line 941); check the size |
| Red Bull® | 1 serving | only in draft A | 110 / 0 / 0 / 0 / 0 / 105 / 28 / 0 / 27 / 0 | not found | A: numbers found after the name (line 942); check the size |
| Red Bull® Sugarfree | 1 serving | only in draft A | 10 / 0 / 0 / 0 / 0 / 100 / 3 / 0 / 0 / 0 | not found | A: numbers found after the name (line 943); check the size |
| Red Bull® Peach Edition (White Peach) | 1 serving | only in draft A | 110 / 0 / 0 / 0 / 0 / 90 / 28 / 0 / 27 / 0 | not found | A: numbers found after the name (line 944); check the size |
| Red Bull® Sea Blue Edition (Juneberry) | 1 serving | only in draft A | 110 / 0 / 0 / 0 / 0 / 90 / 28 / 0 / 26 / 0 | not found | A: numbers found after the name (line 945); check the size |
| Red Bull® Red Edition (Watermelon) | 1 serving | only in draft A | 110 / 0 / 0 / 0 / 0 / 90 / 28 / 0 / 26 / 0 | not found | A: numbers found after the name (line 946); check the size |
| B-Dubs Bloody Mary - at select locations | 1 serving | only in draft A | 140 / 1.5 / 0 / 0 / 0 / 1450 / 8 / 2 / 4 / 2 | not found | A: numbers found after the name (line 948); check the size |
| Blue Long Island Iced Tea | 1 serving | only in draft A | 220 / 0 / 0 / 0 / 0 / 40 / 26 / 0 / 24 / 0 | not found | A: numbers found after the name (line 949); check the size |
| Blue Watermelon Cooler | 1 serving | only in draft A | 190 / 0 / 0 / 0 / 0 / 20 / 29 / 0 / 26 / 0 | not found | A: numbers found after the name (line 950); check the size |
| Boozy Dunkin' 'Cold Brew | 1 serving | only in draft A | 300 / 8 / 5 / 0 / 30 / 25 / 31 / 0 / 28 / 1 | not found | A: numbers found after the name (line 951); check the size |
| Bourbon Old Fashioned - at select locations | 1 serving | only in draft A | 200 / 0 / 0 / 0 / 0 / 0 / 16 / 0 / 15 / 0 | not found | A: numbers found after the name (line 952); check the size |
| Buffalo Trace Old Fashioned - at select locations | 1 serving | only in draft A | 220 / 0 / 0 / 0 / 0 / 0 / 18 / 0 / 18 / 0 | not found | A: numbers found after the name (line 953); check the size |
| Buffalo Zoo - limited time | 1 serving | only in draft A | 240 / 0 / 0 / 0 / 0 / 20 / 30 / 0 / 26 / 1 | not found | A: numbers found after the name (line 954); check the size |
| Caesar - at select locations (ND & SD only) | 1 serving | only in draft A | 180 / 0 / 0 / 0 / 0 / 1370 / 19 / 1 / 7 / 1 | not found | A: numbers found after the name (line 966); check the size |
| Classic Espresso Martini | 1 serving | only in draft A | 210 / 0 / 0 / 0 / 0 / 25 / 24 / 0 / 21 / 0 | not found | A: numbers found after the name (line 967); check the size |
| House Margarita | 1 serving | only in draft A | 230 / 0 / 0 / 0 / 0 / 800 / 27 / 1 / 21 / 0 | not found | A: numbers found after the name (line 968); check the size |
| Old Fashioned | 1 serving | only in draft A | 220 / 0 / 0 / 0 / 0 / 0 / 16 / 0 / 15 / 0 | not found | A: numbers found after the name (line 969); check the size |
| Mezcal Margarita | 1 serving | only in draft A | 230 / 0 / 0 / 0 / 0 / 190 / 24 / 1 / 19 / 0 | not found | A: numbers found after the name (line 970); check the size |
| Modelo Michelada | 1 serving | only in draft A | 140 / 0 / 0 / 0 / 0 / 1320 / 16 / 1 / 2 / 1 | not found | A: numbers found after the name (line 971); check the size |
| Patrón Margarita | 1 serving | only in draft A | 220 / 0 / 0 / 0 / 0 / 0 / 24 / 1 / 15 / 0 | not found | A: numbers found after the name (line 973); check the size |
| Red Bull® Sunrise | 1 serving | only in draft A | 400 / 0 / 0 / 0 / 0 / 105 / 74 / 1 / 67 / 1 | not found | A: numbers found after the name (line 974); check the size |
| Red, White & Booze - at select locations | 1 serving | only in draft A | 380 / 0 / 0 / 0 / 0 / 40 / 60 / 0 / 57 / 0 | not found | A: numbers found after the name (line 975); check the size |
| Salted Caramel Espresso Martini | 1 serving | only in draft A | 330 / 6 / 3 / 0 / 0 / 30 / 40 / 0 / 32 / 0 | not found | A: numbers found after the name (line 976); check the size |
| Spicy Margarita | 1 serving | only in draft A | 230 / 0 / 0 / 0 / 0 / 190 / 23 / 1 / 19 / 0 | not found | A: numbers found after the name (line 977); check the size |
| Spicy Pickle Bloody Mary | 1 serving | only in draft A | 140 / 1.5 / 0 / 0 / 0 / 1750 / 7 / 2 / 3 / 2 | not found | A: numbers found after the name (line 978); check the size |
| Strawberry Margarita | 1 serving | only in draft A | 260 / 0 / 0 / 0 / 0 / 800 / 34 / 1 / 29 / 0 | not found | A: numbers found after the name (line 979); check the size |
| Tito's® Spiked Lemonade | 1 serving | only in draft A | 270 / 0 / 0 / 0 / 0 / 35 / 37 / 0 / 35 / 0 | not found | A: numbers found after the name (line 980); check the size |
| Top Shelf Long Island Iced Tea | 1 serving | only in draft A | 290 / 0 / 0 / 0 / 0 / 60 / 35 / 0 / 33 / 0 | not found | A: numbers found after the name (line 981); check the size |
| Tropical Margarita | 1 serving | only in draft A | 280 / 0 / 0 / 0 / 0 / 95 / 40 / 1 / 34 / 0 | not found | A: numbers found after the name (line 982); check the size |
| Barefoot, Pinot Grigio | 6.7 fl oz | only in draft A | 160 / 0 / 0 / 0 / 0 / 30 / 4 / 0 / 6 / 0 | not found | A: numbers found after the name (line 984); check the size |
| Butter, Chardonnay | 8.4 fl oz | only in draft A | 210 / 0 / 0 / 0 / 0 / 10 / 5 / 0 / 2 / 0 | not found | A: numbers found after the name (line 985); check the size |
| Josh, Chardonnay | 12.7 fl oz | only in draft A | 310 / 0 / 0 / 0 / 0 / 20 / 8 / 0 / 4 / 0 | not found | A: numbers found after the name (line 986); check the size |
| Barefoot, Cabernet Sauvignon | 6.7 fl oz | only in draft A | 160 / 0 / 0 / 0 / 0 / – / 5 / 0 / – / 0 | not found | A: numbers found after the name (line 987); check the size, mostly zeros: look |
| Archer Roose, Pinot Noir | 8.4 fl oz | only in draft A | 200 / 0 / 0 / 0 / 0 / – / 6 / 0 / – / 0 | not found | A: numbers found after the name (line 988); check the size, mostly zeros: look |
| Josh, Cabernet Sauvignon | 12.7 fl oz | only in draft A | 310 / 0 / 0 / 0 / 0 / – / 10 / 0 / – / 0 | not found | A: numbers found after the name (line 989); check the size, mostly zeros: look |
| Francis Coppola, Prosecco | 187 mL | only in draft A | 160 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 0 / 0 | not found | A: numbers found after the name (line 990); check the size, mostly zeros: look |
| Graham & Fish, Moscato w/ Bubbles | 250 mL | only in draft A | 210 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 0 / 0 | not found | A: numbers found after the name (line 991); check the size, mostly zeros: look |
| Asian Zing* | 6 count | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 860 / 31 / 1 / 29 / 1 | B: numbers found after the name (line 9); check the size |
| Black Garlic Glaze - limited time, at select locations | 6 count | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 630 / 21 / 0 / 19 / 1 | B: numbers found after the name (line 10); check the size |
| Blazin* Knockout | 6 count | only in draft B | not found | 80 / 3 / 0 / 0 / 0 / 1370 / 12 / 1 / 10 / 0 | B: not as drafted (line 198 lacks 80, 3, 1370, 12, 10) |
| Buffalo Ranch | 6 count | only in draft B | not found | 80 / 8 / 1.5 / 0 / 10 / 1290 / 3 / 1 / 0 / 1 | B: numbers found after the name (line 12); check the size |
| Caribbean Jerk | 6 count | only in draft B | not found | 110 / 4 / 0.5 / 0 / 0 / 490 / 19 / 1 / 17 / 0 | B: numbers found after the name (line 13); check the size |
| Golden Fire | 6 count | only in draft B | not found | 90 / 2 / 0 / 0 / 0 / 760 / 19 / 1 / 17 / 1 | B: numbers found after the name (line 14); check the size |
| Honey BBQ | 6 count | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 620 / 25 / 0 / 21 / 0 | B: numbers found after the name (line 15); check the size |
| Honey Garlic | 6 count | only in draft B | not found | 120 / 0.5 / 0 / 0 / 0 / 1060 / 29 / 0 / 26 / 1 | B: numbers found after the name (line 16); check the size |
| Hot | 6 count | only in draft B | not found | 70 / 6 / 1 / 0 / 0 / 1650 / 3 / 1 / 0 / 1 | B: numbers found after the name (line 17); check the size |
| Hot BBQ - limited time | 6 count | only in draft B | not found | 50 / 2.5 / 0 / 0 / 0 / 1010 / 8 / 1 / 5 / 1 | B: numbers found after the name (line 18); check the size |
| Jammin' Jalapeño | 6 count | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 1020 / 30 / 0 / 24 / 0 | B: numbers found after the name (line 19); check the size |
| Lemon Pepper | 6 count | only in draft B | not found | 230 / 23 / 4.5 / 0 / 15 / 850 / 4 / 1 / 2 / 0 | B: numbers found after the name (line 20); check the size |
| Lemon Pepper Hot - limited time | 6 count | only in draft B | not found | 160 / 17 / 3.5 / 0 / 5 / 1400 / 2 / 1 / 0 / 0 | B: numbers found after the name (line 21); check the size |
| Mango Habanero™ | 6 count | only in draft B | not found | 110 / 1 / 0 / 0 / 0 / 650 / 26 / 1 / 20 / 0 | B: numbers found after the name (line 22); check the size |
| Medium | 6 count | only in draft B | not found | 50 / 4 / 0.5 / 0 / 10 / 1630 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 23); check the size |
| Mild | 6 count | only in draft B | not found | 70 / 7 / 1 / 0 / 10 / 1390 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 24); check the size |
| Original Buffalo | 6 count | only in draft B | not found | 170 / 18 / 3.5 / 0 / 0 / 1480 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 25); check the size |
| Parmesan Garlic | 6 count | only in draft B | not found | 190 / 19 / 3.5 / 0 / 20 / 940 / 5 / 1 / 2 / 2 | B: numbers found after the name (line 26); check the size |
| Spicy Garlic | 6 count | only in draft B | not found | 70 / 6 / 1 / 0 / 10 / 1700 / 3 / 0 / 0 / 1 | B: numbers found after the name (line 27); check the size |
| Sweet BBQ | 6 count | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 840 / 17 / 1 / 13 / 1 | B: numbers found after the name (line 28); check the size |
| Teriyaki | 6 count | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 1090 / 22 / 0 / 18 / 3 | B: numbers found after the name (line 29); check the size |
| Thai Curry | 6 count | only in draft B | not found | 220 / 22 / 4 / 0 / 15 / 1350 / 6 / 1 / 3 / 1 | B: numbers found after the name (line 30); check the size |
| Wild* | 6 count | only in draft B | not found | 70 / 6 / 1 / 0 / 0 / 1280 / 4 / 1 / 1 / 0 | B: numbers found after the name (line 31); check the size |
| Buffalo Dry Rub | 6 count | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 480 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 33); check the size |
| Chipotle BBQ Dry Rub | 6 count | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 360 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 34); check the size |
| Desert Heat Dry Rub | 6 count | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 250 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 35); check the size |
| Lemon Pepper Dry Rub | 6 count | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 290 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 36); check the size |
| Salt & Vinegar Dry Rub | 6 count | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 540 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 37); check the size |
| Asian Zing* | 10 count | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 1150 / 41 / 1 / 38 / 1 | B: numbers found after the name (line 40); check the size |
| Black Garlic Glaze - limited time, at select locations | 10 count | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 840 / 28 / 1 / 25 / 1 | B: numbers found after the name (line 41); check the size |
| Blazin* Knockout | 10 count | only in draft B | not found | 100 / 4 / 0.5 / 0 / 0 / 1820 / 16 / 1 / 13 / 1 | B: not as drafted (line 320 lacks 100, 4, 0.5, 1820, 16, 13) |
| Buffalo Ranch | 10 count | only in draft B | not found | 110 / 10 / 2 / 0 / 15 / 1720 / 4 / 1 / 0 / 1 | B: numbers found after the name (line 43); check the size |
| Caribbean Jerk | 10 count | only in draft B | not found | 150 / 5 / 1 / 0 / 0 / 660 / 26 / 1 / 23 / 1 | B: numbers found after the name (line 44); check the size |
| Golden Fire | 10 count | only in draft B | not found | 130 / 2.5 / 0 / 0 / 0 / 1020 / 25 / 1 / 22 / 1 | B: numbers found after the name (line 45); check the size |
| Honey BBQ | 10 count | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 830 / 34 / 0 / 28 / 0 | B: numbers found after the name (line 46); check the size |
| Honey Garlic | 10 count | only in draft B | not found | 160 / 1 / 0 / 0 / 0 / 1410 / 39 / 0 / 34 / 1 | B: numbers found after the name (line 47); check the size |
| Hot | 10 count | only in draft B | not found | 90 / 8 / 1.5 / 0 / 0 / 2200 / 4 / 1 / 0 / 1 | B: numbers found after the name (line 48); check the size |
| Hot BBQ - limited time | 10 count | only in draft B | not found | 70 / 3.5 / 0.5 / 0 / 0 / 1340 / 10 / 1 / 7 / 1 | B: numbers found after the name (line 49); check the size |
| Jammin' Jalapeño | 10 count | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 1360 / 40 / 0 / 32 / 0 | B: numbers found after the name (line 50); check the size |
| Lemon Pepper | 10 count | only in draft B | not found | 300 / 31 / 6 / 0.5 / 25 / 1130 / 5 / 1 / 2 / 1 | B: numbers found after the name (line 51); check the size |
| Lemon Pepper Hot - limited time | 10 count | only in draft B | not found | 210 / 23 / 4.5 / 0 / 5 / 1860 / 3 / 1 / 0 / 1 | B: numbers found after the name (line 52); check the size |
| Mango Habanero™ | 10 count | only in draft B | not found | 150 / 1 / 0 / 0 / 0 / 870 / 35 / 1 / 26 / 0 | B: numbers found after the name (line 53); check the size |
| Medium | 10 count | only in draft B | not found | 60 / 6 / 1 / 0 / 10 / 2170 / 3 / 0 / 0 / 1 | B: numbers found after the name (line 64); check the size |
| Mild | 10 count | only in draft B | not found | 100 / 9 / 1.5 / 0 / 10 / 1850 / 3 / 0 / 0 / 1 | B: numbers found after the name (line 65); check the size |
| Original Buffalo | 10 count | only in draft B | not found | 220 / 24 / 4.5 / 0 / 0 / 1980 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 66); check the size |
| Parmesan Garlic | 10 count | only in draft B | not found | 260 / 25 / 4.5 / 0 / 25 / 1250 / 6 / 1 / 2 / 2 | B: numbers found after the name (line 67); check the size |
| Spicy Garlic | 10 count | only in draft B | not found | 90 / 8 / 1.5 / 0 / 15 / 2270 / 4 / 0 / 0 / 1 | B: numbers found after the name (line 68); check the size |
| Sweet BBQ | 10 count | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 1120 / 23 / 1 / 17 / 1 | B: numbers found after the name (line 69); check the size |
| Teriyaki | 10 count | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 1450 / 30 / 1 / 24 / 4 | B: numbers found after the name (line 70); check the size |
| Thai Curry | 10 count | only in draft B | not found | 290 / 29 / 5 / 0 / 15 / 1800 / 8 / 1 / 4 / 1 | B: numbers found after the name (line 71); check the size |
| Wild' | 10 count | only in draft B | not found | 100 / 8 / 1.5 / 0 / 0 / 1710 / 5 / 1 / 2 / 1 | B: numbers found after the name (line 72); check the size |
| Buffalo Dry Rub | 10 count | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 640 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 74); check the size |
| Chipotle BBQ Dry Rub | 10 count | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 480 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 75); check the size |
| Desert Heat' Dry Rub | 10 count | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 330 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 76); check the size |
| Lemon Pepper Dry Rub | 10 count | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 390 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 77); check the size |
| Salt & Vinegar Dry Rub | 10 count | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 710 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 78); check the size |
| Asian Zing' | 15 count | only in draft B | not found | 260 / 0.5 / 0 / 0 / 0 / 1720 / 62 / 1 / 57 / 1 | B: numbers found after the name (line 81); check the size |
| Black Garlic Glaze - limited time, at select locations | 15 count | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 1250 / 42 / 1 / 37 / 1 | B: numbers found after the name (line 82); check the size |
| Blazin" Knockout | 15 count | only in draft B | not found | 150 / 6 / 1 / 0 / 0 / 2740 / 24 / 2 / 19 / 1 | B: numbers found after the name (line 83); check the size |
| Buffalo Ranch | 15 count | only in draft B | not found | 170 / 15 / 3 / 0 / 20 / 2580 / 5 / 2 / 1 / 1 | B: numbers found after the name (line 84); check the size |
| Caribbean Jerk | 15 count | only in draft B | not found | 230 / 8 / 1.5 / 0 / 0 / 990 / 39 / 1 / 34 / 1 | B: numbers found after the name (line 85); check the size |
| Golden Fire | 15 count | only in draft B | not found | 190 / 4 / 0 / 0 / 0 / 1530 / 38 / 2 / 34 / 2 | B: numbers found after the name (line 86); check the size |
| Honey BBQ | 15 count | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 1240 / 50 / 1 / 41 / 1 | B: numbers found after the name (line 87); check the size |
| Honey Garlic | 15 count | only in draft B | not found | 250 / 1.5 / 0 / 0 / 0 / 2120 / 59 / 1 / 51 / 1 | B: numbers found after the name (line 88); check the size |
| Hot | 15 count | only in draft B | not found | 140 / 12 / 2 / 0 / 0 / 3300 / 6 / 1 / 0 / 1 | B: numbers found after the name (line 89); check the size |
| Hot BBQ - limited time | 15 count | only in draft B | not found | 110 / 5 / 1 / 0 / 0 / 2010 / 15 / 1 / 10 / 1 | B: numbers found after the name (line 90); check the size |
| Jammin' Jalapeño | 15 count | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 2040 / 60 / 0 / 48 / 0 | B: numbers found after the name (line 91); check the size |
| Lemon Pepper | 15 count | only in draft B | not found | 450 / 47 / 9 / 1 / 35 / 1690 / 8 / 2 / 4 / 1 | B: numbers found after the name (line 92); check the size |
| Lemon Pepper Hot - limited time | 15 count | only in draft B | not found | 320 / 34 / 7 / 0 / 5 / 2790 / 4 / 2 / 1 / 1 | B: numbers found after the name (line 93); check the size |
| Mango Habanero™ | 15 count | only in draft B | not found | 220 / 1.5 / 0 / 0 / 0 / 1300 / 53 / 1 / 40 / 1 | B: numbers found after the name (line 94); check the size |
| Medium | 15 count | only in draft B | not found | 100 / 8 / 1.5 / 0 / 20 / 3260 / 4 / 0 / 0 / 1 | B: numbers found after the name (line 95); check the size |
| Mild | 15 count | only in draft B | not found | 150 / 14 / 2.5 / 0 / 15 / 2770 / 4 / 0 / 0 / 1 | B: numbers found after the name (line 96); check the size |
| Original Buffalo | 15 count | only in draft B | not found | 330 / 36 / 7 / 0 / 0 / 2960 / 3 / 0 / 0 / 1 | B: numbers found after the name (line 97); check the size |
| Parmesan Garlic | 15 count | only in draft B | not found | 390 / 38 / 7 / 0.5 / 35 / 1880 / 9 / 1 / 3 / 3 | B: numbers found after the name (line 98); check the size |
| Spicy Garlic | 15 count | only in draft B | not found | 140 / 12 / 2 / 0 / 20 / 3400 / 6 / 0 / 0 / 1 | B: numbers found after the name (line 99); check the size |
| Sweet BBQ | 15 count | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 1680 / 35 / 2 / 25 / 1 | B: numbers found after the name (line 100); check the size |
| Teriyaki | 15 count | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 2170 / 45 / 1 / 35 / 6 | B: numbers found after the name (line 101); check the size |
| Thai Curry | 15 count | only in draft B | not found | 440 / 43 / 8 / 0.5 / 25 / 2710 / 11 / 2 / 7 / 2 | B: numbers found after the name (line 102); check the size |
| Wild' | 15 count | only in draft B | not found | 150 / 12 / 2 / 0 / 0 / 2560 / 8 / 1 / 3 / 1 | B: numbers found after the name (line 103); check the size |
| Buffalo Dry Rub | 15 count | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 950 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 105); check the size |
| Chipotle BBQ Dry Rub | 15 count | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 720 / 3 / 0 / 1 / 0 | B: numbers found after the name (line 106); check the size |
| Desert Heat' Dry Rub | 15 count | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 500 / 3 / 1 / 1 / 0 | B: numbers found after the name (line 107); check the size |
| Lemon Pepper Dry Rub | 15 count | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 580 / 2 / 1 / 0 / 0 | B: numbers found after the name (line 108); check the size |
| Salt & Vinegar Dry Rub | 15 count | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 1070 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 109); check the size |
| Asian Zing* | 20 count | only in draft B | not found | 340 / 1 / 0 / 0 / 0 / 2290 / 83 / 2 / 77 / 2 | B: numbers found after the name (line 123); check the size |
| Black Garlic Glaze - limited time, at select locations | 20 count | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 1670 / 55 / 1 / 49 / 2 | B: numbers found after the name (line 124); check the size |
| Blazin** Knockout | 20 count | only in draft B | not found | 200 / 8 / 1 / 0 / 0 / 3650 / 32 / 2 / 26 / 1 | B: numbers found after the name (line 435); check the size |
| Buffalo Ranch | 20 count | only in draft B | not found | 220 / 21 / 4 / 0 / 25 / 3440 / 7 / 2 / 1 / 1 | B: numbers found after the name (line 126); check the size |
| Caribbean Jerk | 20 count | only in draft B | not found | 300 / 10 / 2 / 0 / 0 / 1320 / 52 / 2 / 46 / 1 | B: numbers found after the name (line 127); check the size |
| Golden Fire | 20 count | only in draft B | not found | 250 / 5 / 0.5 / 0 / 0 / 2040 / 50 / 3 / 45 / 3 | B: numbers found after the name (line 128); check the size |
| Honey BBQ | 20 count | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 1650 / 67 / 1 / 55 / 1 | B: numbers found after the name (line 129); check the size |
| Honey Garlic | 20 count | only in draft B | not found | 330 / 2 / 0 / 0 / 0 / 2820 / 78 / 1 / 68 / 2 | B: numbers found after the name (line 130); check the size |
| Hot | 20 count | only in draft B | not found | 180 / 16 / 2.5 / 0 / 0 / 4400 / 7 / 1 / 1 / 2 | B: numbers found after the name (line 131); check the size |
| Hot BBQ - limited time | 20 count | only in draft B | not found | 150 / 7 / 1 / 0 / 0 / 2680 / 20 / 2 / 14 / 2 | B: numbers found after the name (line 132); check the size |
| Jammin' Jalapeño | 20 count | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 2720 / 80 / 0 / 64 / 0 | B: numbers found after the name (line 133); check the size |
| Lemon Pepper | 20 count | only in draft B | not found | 600 / 62 / 12 / 1 / 45 / 2260 / 10 / 2 / 5 / 1 | B: numbers found after the name (line 134); check the size |
| Lemon Pepper Hot - limited time | 20 count | only in draft B | not found | 430 / 46 / 9 / 0.5 / 10 / 3730 / 5 / 2 / 1 / 1 | B: numbers found after the name (line 135); check the size |
| Mango Habanero™ | 20 count | only in draft B | not found | 300 / 2 / 0 / 0 / 0 / 1740 / 70 / 2 / 53 / 1 | B: numbers found after the name (line 136); check the size |
| Medium | 20 count | only in draft B | not found | 130 / 11 / 2 / 0 / 25 / 4350 / 5 / 0 / 0 / 1 | B: numbers found after the name (line 137); check the size |
| Mild | 20 count | only in draft B | not found | 200 / 19 / 3 / 0 / 25 / 3700 / 5 / 0 / 0 / 1 | B: numbers found after the name (line 138); check the size |
| Original Buffalo | 20 count | only in draft B | not found | 450 / 47 / 9 / 0.5 / 0 / 3950 / 4 / 1 / 0 / 1 | B: numbers found after the name (line 139); check the size |
| Parmesan Garlic | 20 count | only in draft B | not found | 520 / 50 / 9 / 1 / 45 / 2500 / 12 / 2 / 5 / 5 | B: numbers found after the name (line 140); check the size |
| Spicy Garlic | 20 count | only in draft B | not found | 180 / 16 / 3 / 0 / 30 / 4530 / 8 / 1 / 0 / 2 | B: numbers found after the name (line 141); check the size |
| Sweet BBQ | 20 count | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 2230 / 46 / 2 / 34 / 1 | B: numbers found after the name (line 142); check the size |
| Teriyaki | 20 count | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 2900 / 60 / 1 / 47 / 8 | B: numbers found after the name (line 143); check the size |
| Thai Curry | 20 count | only in draft B | not found | 580 / 58 / 11 / 1 / 35 / 3610 / 15 / 2 / 9 / 3 | B: numbers found after the name (line 144); check the size |
| Wild* | 20 count | only in draft B | not found | 190 / 17 / 2.5 / 0 / 0 / 3410 / 10 / 2 / 3 / 1 | B: numbers found after the name (line 145); check the size |
| Buffalo Dry Rub | 20 count | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 1110 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 147); check the size |
| Chipotle BBQ Dry Rub | 20 count | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 840 / 3 / 0 / 2 / 0 | B: numbers found after the name (line 148); check the size |
| Desert Heat* Dry Rub | 20 count | only in draft B | not found | 15 / 0.5 / 0 / 0 / 0 / 590 / 3 / 1 / 1 / 0 | B: not as drafted (line 35 lacks 15, 0.5, 590, 3) |
| Lemon Pepper Dry Rub | 20 count | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 680 / 2 / 1 / 0 / 0 | B: numbers found after the name (line 150); check the size |
| Salt & Vinegar Dry Rub | 20 count | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 1250 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 151); check the size |
| Asian Zing* | 30 count | only in draft B | not found | 520 / 1.5 / 0 / 0 / 0 / 3440 / 124 / 3 / 115 / 2 | B: numbers found after the name (line 154); check the size |
| Black Garlic Glaze - limited time, at select locations | 30 count | only in draft B | not found | 350 / 0.5 / 0 / 0 / 0 / 2510 / 83 / 2 / 74 / 2 | B: numbers found after the name (line 155); check the size |
| Blazin** Knockout | 30 count | only in draft B | not found | 300 / 12 / 1.5 / 0 / 0 / 5470 / 48 / 3 / 38 / 2 | B: not as drafted (line 198 lacks 300, 12, 1.5, 5470, 48, 3, 38) |
| Buffalo Ranch | 30 count | only in draft B | not found | 330 / 31 / 6 / 0.5 / 40 / 5160 / 11 / 3 / 1 / 2 | B: numbers found after the name (line 157); check the size |
| Caribbean Jerk | 30 count | only in draft B | not found | 450 / 15 / 3 / 0 / 0 / 1980 / 77 / 3 / 69 / 2 | B: numbers found after the name (line 158); check the size |
| Golden Fire | 30 count | only in draft B | not found | 380 / 8 / 1 / 0 / 0 / 3050 / 75 / 4 / 67 / 4 | B: numbers found after the name (line 159); check the size |
| Honey BBQ | 30 count | only in draft B | not found | 410 / 0 / 0 / 0 / 0 / 2480 / 101 / 1 / 83 / 1 | B: numbers found after the name (line 160); check the size |
| Honey Garlic | 30 count | only in draft B | not found | 490 / 2.5 / 0 / 0 / 0 / 4230 / 118 / 1 / 103 / 3 | B: numbers found after the name (line 161); check the size |
| Hot | 30 count | only in draft B | not found | 270 / 24 / 4 / 0 / 0 / 6610 / 11 / 2 / 1 / 2 | B: numbers found after the name (line 162); check the size |
| Hot BBQ - limited time | 30 count | only in draft B | not found | 220 / 10 / 1.5 / 0 / 0 / 4030 / 30 / 3 / 21 / 2 | B: numbers found after the name (line 163); check the size |
| Jammin' Jalapeño | 30 count | only in draft B | not found | 540 / 0 / 0 / 0 / 0 / 4080 / 120 / 0 / 96 / 0 | B: numbers found after the name (line 164); check the size |
| Lemon Pepper | 30 count | only in draft B | not found | 910 / 93 / 18 / 1.5 / 70 / 3390 / 16 / 3 / 7 / 2 | B: numbers found after the name (line 165); check the size |
| Lemon Pepper Hot - limited time | 30 count | only in draft B | not found | 640 / 69 / 13 / 1 / 15 / 5590 / 8 / 3 / 1 / 2 | B: numbers found after the name (line 166); check the size |
| Mango Habanero™ | 30 count | only in draft B | not found | 450 / 3 / 0 / 0 / 0 / 2610 / 106 / 3 / 79 / 1 | B: numbers found after the name (line 175); check the size |
| Medium | 30 count | only in draft B | not found | 190 / 17 / 3 / 0 / 35 / 6520 / 8 / 1 / 0 / 2 | B: numbers found after the name (line 176); check the size |
| Mild | 30 count | only in draft B | not found | 290 / 28 / 4.5 / 0 / 35 / 5540 / 8 / 1 / 0 / 2 | B: numbers found after the name (line 177); check the size |
| Original Buffalo | 30 count | only in draft B | not found | 670 / 71 / 14 / 1 / 0 / 5930 / 7 / 1 / 0 / 1 | B: numbers found after the name (line 178); check the size |
| Parmesan Garlic | 30 count | only in draft B | not found | 770 / 75 / 14 / 1 / 70 / 3750 / 18 / 2 / 7 / 7 | B: numbers found after the name (line 179); check the size |
| Spicy Garlic | 30 count | only in draft B | not found | 270 / 24 / 4 / 0 / 45 / 6800 / 11 / 1 / 0 / 3 | B: numbers found after the name (line 180); check the size |
| Sweet BBQ | 30 count | only in draft B | not found | 290 / 0.5 / 0 / 0 / 0 / 3350 / 70 / 3 / 51 / 2 | B: numbers found after the name (line 181); check the size |
| Teriyaki | 30 count | only in draft B | not found | 400 / 0 / 0 / 0 / 0 / 4350 / 90 / 2 / 71 / 11 | B: numbers found after the name (line 182); check the size |
| Thai Curry | 30 count | only in draft B | not found | 880 / 86 / 16 / 1 / 50 / 5410 / 23 / 4 / 13 / 4 | B: numbers found after the name (line 183); check the size |
| Wild* | 30 count | only in draft B | not found | 290 / 25 / 4 / 0 / 0 / 5120 / 15 / 2 / 5 / 2 | B: numbers found after the name (line 184); check the size |
| Buffalo Dry Rub | 30 count | only in draft B | not found | 20 / 0.5 / 0 / 0 / 0 / 1910 / 4 / 0 / 0 / 0 | B: numbers found after the name (line 186); check the size |
| Chipotle BBQ Dry Rub | 30 count | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 1450 / 6 / 1 / 3 / 0 | B: numbers found after the name (line 187); check the size |
| Desert Heat* Dry Rub | 30 count | only in draft B | not found | 30 / 1 / 0 / 0 / 0 / 1000 / 6 / 1 / 2 / 1 | B: not as drafted (line 751 lacks 30, 1000, 6, 1) |
| Lemon Pepper Dry Rub | 30 count | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 1160 / 3 / 1 / 0 / 0 | B: numbers found after the name (line 189); check the size |
| Salt & Vinegar Dry Rub | 30 count | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 2140 / 4 / 0 / 2 / 0 | B: numbers found after the name (line 190); check the size |
| Desert Heat™ Dry Rub | 6 count | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 250 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 35); check the size |
| Wild* | 10 count | only in draft B | not found | 70 / 6 / 1 / 0 / 0 / 1280 / 4 / 1 / 1 / 0 | B: numbers found after the name (line 31); check the size |
| Desert Heat* Dry Rub | 10 count | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 330 / 2 / 0 / 1 / 0 | B: not as drafted (line 751 lacks 330) |
| Asian Zing* | 15 count | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 1150 / 41 / 1 / 38 / 1 | B: numbers found after the name (line 40); check the size |
| Blazin* Knockout | 15 count | only in draft B | not found | 100 / 4 / 0.5 / 0 / 0 / 1820 / 16 / 1 / 13 / 1 | B: not as drafted (line 320 lacks 100, 4, 0.5, 1820, 16, 13) |
| Wild' | 20 count | only in draft B | not found | 150 / 12 / 2 / 0 / 0 / 2560 / 8 / 1 / 3 / 1 | B: numbers found after the name (line 103); check the size |
| Desert Heat' Dry Rub | 20 count | only in draft B | not found | 15 / 0.5 / 0 / 0 / 0 / 590 / 3 / 1 / 1 / 0 | B: not as drafted (line 107 lacks 0.5, 590) |
| Honey BBQ | 1 serving | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 1650 / 67 / 1 / 55 / 1 | B: numbers found after the name (line 129); check the size |
| Honey Garlic | 1 serving | only in draft B | not found | 330 / 2 / 0 / 0 / 0 / 2820 / 78 / 1 / 68 / 2 | B: numbers found after the name (line 130); check the size |
| Hot | 1 serving | only in draft B | not found | 180 / 16 / 2.5 / 0 / 0 / 4400 / 7 / 1 / 1 / 2 | B: numbers found after the name (line 131); check the size |
| Hot BBQ - limited time | 1 serving | only in draft B | not found | 150 / 7 / 1 / 0 / 0 / 2680 / 20 / 2 / 14 / 2 | B: numbers found after the name (line 132); check the size |
| Jammin' Jalapeño | 1 serving | only in draft B | not found | 360 / 0 / 0 / 0 / 0 / 2720 / 80 / 0 / 64 / 0 | B: numbers found after the name (line 133); check the size |
| Lemon Pepper | 1 serving | only in draft B | not found | 600 / 62 / 12 / 1 / 45 / 2260 / 10 / 2 / 5 / 1 | B: numbers found after the name (line 134); check the size |
| Lemon Pepper Hot - limited time | 1 serving | only in draft B | not found | 430 / 46 / 9 / 0.5 / 10 / 3730 / 5 / 2 / 1 / 1 | B: numbers found after the name (line 135); check the size |
| Mango Habanero™ | 1 serving | only in draft B | not found | 210 / 2 / 0 / 0 / 0 / 1470 / 52 / 1 / 40 / 1 | B: numbers found after the name (line 371); check the size |
| Medium | 1 serving | only in draft B | not found | 130 / 11 / 2 / 0 / 25 / 4350 / 5 / 0 / 0 / 1 | B: numbers found after the name (line 137); check the size |
| Mild | 1 serving | only in draft B | not found | 200 / 19 / 3 / 0 / 25 / 3700 / 5 / 0 / 0 / 1 | B: numbers found after the name (line 138); check the size |
| Original Buffalo | 1 serving | only in draft B | not found | 450 / 47 / 9 / 0.5 / 0 / 3950 / 4 / 1 / 0 / 1 | B: numbers found after the name (line 139); check the size |
| Parmesan Garlic | 1 serving | only in draft B | not found | 520 / 50 / 9 / 1 / 45 / 2500 / 12 / 2 / 5 / 5 | B: numbers found after the name (line 140); check the size |
| Spicy Garlic | 1 serving | only in draft B | not found | 180 / 16 / 3 / 0 / 30 / 4530 / 8 / 1 / 0 / 2 | B: numbers found after the name (line 141); check the size |
| Sweet BBQ | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 2230 / 46 / 2 / 34 / 1 | B: numbers found after the name (line 142); check the size |
| Teriyaki | 1 serving | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 2900 / 60 / 1 / 47 / 8 | B: numbers found after the name (line 143); check the size |
| Thai Curry | 1 serving | only in draft B | not found | 580 / 58 / 11 / 1 / 35 / 3610 / 15 / 2 / 9 / 3 | B: numbers found after the name (line 144); check the size |
| Wild* | 1 serving | only in draft B | not found | 190 / 17 / 2.5 / 0 / 0 / 3410 / 10 / 2 / 3 / 1 | B: numbers found after the name (line 145); check the size |
| Buffalo Dry Rub | 1 serving | only in draft B | not found | 20 / 0.5 / 0 / 0 / 0 / 1910 / 4 / 0 / 0 / 0 | B: numbers found after the name (line 186); check the size |
| Chipotle BBQ Dry Rub | 1 serving | only in draft B | not found | 25 / 0 / 0 / 0 / 0 / 1450 / 6 / 1 / 3 / 0 | B: numbers found after the name (line 187); check the size |
| Desert Heat* Dry Rub | 1 serving | only in draft B | not found | 30 / 1 / 0 / 0 / 0 / 1000 / 6 / 1 / 2 / 1 | B: not as drafted (line 751 lacks 30, 1000, 6, 1) |
| Lemon Pepper Dry Rub | 1 serving | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 1160 / 3 / 1 / 0 / 0 | B: numbers found after the name (line 189); check the size |
| Salt & Vinegar Dry Rub | 1 serving | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 2140 / 4 / 0 / 2 / 0 | B: numbers found after the name (line 190); check the size |
| Asian Zing* | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 1150 / 41 / 1 / 38 / 1 | B: numbers found after the name (line 40); check the size |
| Black Garlic Glaze - limited time, at select locations | 1 serving | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 840 / 28 / 1 / 25 / 1 | B: numbers found after the name (line 41); check the size |
| Blazin** Knockout | 1 serving | only in draft B | not found | 100 / 4 / 0.5 / 0 / 0 / 1820 / 16 / 1 / 13 / 1 | B: not as drafted (line 320 lacks 100, 4, 0.5, 1820, 16, 13) |
| Buffalo Ranch | 1 serving | only in draft B | not found | 110 / 10 / 2 / 0 / 15 / 1720 / 4 / 1 / 0 / 1 | B: numbers found after the name (line 43); check the size |
| Caribbean Jerk | 1 serving | only in draft B | not found | 150 / 5 / 1 / 0 / 0 / 660 / 28 / 1 / 23 / 1 | B: numbers found after the name (line 394); check the size |
| Golden Fire | 1 serving | only in draft B | not found | 130 / 2.5 / 0 / 0 / 0 / 1020 / 25 / 1 / 22 / 1 | B: numbers found after the name (line 45); check the size |
| Blazin™ Knockout | 1 serving | only in draft B | not found | 200 / 8 / 1 / 0 / 0 / 3650 / 32 / 2 / 26 / 1 | B: numbers found after the name (line 435); check the size |
| Asian Zing* | 2 fl oz | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 1150 / 41 / 1 / 38 / 1 | B: numbers found after the name (line 40); check the size |
| Black Garlic Glaze - limited time, at select locations | 2 fl oz | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 840 / 28 / 1 / 25 / 1 | B: numbers found after the name (line 41); check the size |
| Blazin* Knockout | 2 fl oz | only in draft B | not found | 100 / 4 / 0.5 / 0 / 0 / 1820 / 16 / 1 / 13 / 1 | B: not as drafted (line 320 lacks 100, 4, 0.5, 1820, 16, 13) |
| Buffalo Ranch | 2 fl oz | only in draft B | not found | 110 / 10 / 2 / 0 / 15 / 1720 / 4 / 1 / 0 / 1 | B: numbers found after the name (line 43); check the size |
| Caribbean Jerk | 2 fl oz | only in draft B | not found | 150 / 5 / 1 / 0 / 0 / 660 / 26 / 1 / 23 / 1 | B: numbers found after the name (line 44); check the size |
| Golden Fire | 2 fl oz | only in draft B | not found | 130 / 2.5 / 0 / 0 / 0 / 1020 / 25 / 1 / 22 / 1 | B: numbers found after the name (line 45); check the size |
| Honey BBQ | 2 fl oz | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 830 / 34 / 0 / 28 / 0 | B: numbers found after the name (line 46); check the size |
| Honey Garlic | 2 fl oz | only in draft B | not found | 160 / 1 / 0 / 0 / 0 / 1410 / 39 / 0 / 34 / 1 | B: numbers found after the name (line 47); check the size |
| Hot | 2 fl oz | only in draft B | not found | 90 / 8 / 1.5 / 0 / 0 / 2200 / 4 / 1 / 0 / 1 | B: numbers found after the name (line 48); check the size |
| Hot BBQ - limited time | 2 fl oz | only in draft B | not found | 70 / 3.5 / 0.5 / 0 / 0 / 1340 / 10 / 1 / 7 / 1 | B: numbers found after the name (line 49); check the size |
| Jammin' Jalapeño | 2 fl oz | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 1360 / 40 / 0 / 32 / 0 | B: numbers found after the name (line 50); check the size |
| Lemon Pepper | 2 fl oz | only in draft B | not found | 300 / 31 / 6 / 0.5 / 25 / 1130 / 5 / 1 / 2 / 1 | B: numbers found after the name (line 51); check the size |
| Mango Habanero*™ | 2 fl oz | only in draft B | not found | 160 / 1 / 0 / 0 / 0 / 890 / 36 / 1 / 26 / 0 | B: numbers found after the name (line 497); check the size |
| Medium | 2 fl oz | only in draft B | not found | 60 / 6 / 1 / 0 / 10 / 2170 / 3 / 0 / 0 / 1 | B: numbers found after the name (line 64); check the size |
| Mild | 2 fl oz | only in draft B | not found | 100 / 9 / 1.5 / 0 / 10 / 1850 / 3 / 0 / 0 / 1 | B: numbers found after the name (line 65); check the size |
| Original Buffalo | 2 fl oz | only in draft B | not found | 220 / 24 / 4.5 / 0 / 0 / 1980 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 66); check the size |
| Parmesan Garlic | 2 fl oz | only in draft B | not found | 260 / 25 / 4.5 / 0 / 25 / 1250 / 6 / 1 / 2 / 2 | B: numbers found after the name (line 67); check the size |
| Spicy Garlic | 2 fl oz | only in draft B | not found | 90 / 8 / 1.5 / 0 / 15 / 2270 / 4 / 0 / 0 / 1 | B: numbers found after the name (line 68); check the size |
| Sweet BBQ | 2 fl oz | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 1120 / 23 / 1 / 17 / 1 | B: numbers found after the name (line 69); check the size |
| Teriyaki | 2 fl oz | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 1450 / 30 / 1 / 24 / 4 | B: numbers found after the name (line 70); check the size |
| Thai Curry | 2 fl oz | only in draft B | not found | 290 / 29 / 5 / 0 / 15 / 1800 / 8 / 1 / 4 / 1 | B: numbers found after the name (line 71); check the size |
| Wild* | 2 fl oz | only in draft B | not found | 100 / 8 / 1.5 / 0 / 0 / 1710 / 5 / 1 / 2 / 1 | B: numbers found after the name (line 72); check the size |
| Buffalo Dry Rub | 1 tsp | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 670 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 508); check the size |
| Desert Heat* Dry Rub | 1 tsp | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 290 / 2 / 0 / 1 / 0 | B: not as drafted (line 751 lacks 290) |
| Chipotle BBQ Dry Rub | 1 tsp | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 330 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 510); check the size |
| Lemon Pepper Dry Rub | 1 tsp | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 460 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 511); check the size |
| Salt & Vinegar Dry Rub | 1 tsp | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 520 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 512); check the size |
| Asian Zing® | 3 count | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 1150 / 41 / 1 / 38 / 1 | B: numbers found after the name (line 40); check the size |
| Asian Zing® | 5 count | only in draft B | not found | 260 / 0.5 / 0 / 0 / 0 / 1720 / 62 / 1 / 57 / 1 | B: numbers found after the name (line 81); check the size |
| Black Garlic Glaze - limited time, at select locations | 3 count | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 840 / 28 / 1 / 25 / 1 | B: numbers found after the name (line 41); check the size |
| Black Garlic Glaze - limited time, at select locations | 5 count | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 1250 / 42 / 1 / 37 / 1 | B: numbers found after the name (line 82); check the size |
| BlazinTM Knockout | 3 count | only in draft B | not found | 100 / 4 / 0.5 / 0 / 0 / 1820 / 16 / 1 / 13 / 1 | B: numbers found after the name (line 556); check the size |
| BlazinTM Knockout | 5 count | only in draft B | not found | 150 / 6 / 1 / 0 / 0 / 2740 / 24 / 2 / 19 / 1 | B: numbers found after the name (line 556); check the size |
| Buffalo Ranch | 3 count | only in draft B | not found | 110 / 10 / 2 / 0 / 15 / 1720 / 4 / 1 / 0 / 1 | B: numbers found after the name (line 43); check the size |
| Buffalo Ranch | 5 count | only in draft B | not found | 170 / 15 / 3 / 0 / 20 / 2580 / 5 / 2 / 1 / 1 | B: numbers found after the name (line 84); check the size |
| Caribbean Jerk | 3 count | only in draft B | not found | 150 / 5 / 1 / 0 / 0 / 660 / 26 / 1 / 23 / 0 | B: numbers found after the name (line 558); check the size |
| Caribbean Jerk | 5 count | only in draft B | not found | 230 / 8 / 1.5 / 0 / 0 / 990 / 39 / 1 / 34 / 0 | B: numbers found after the name (line 558); check the size |
| Golden Fire | 3 count | only in draft B | not found | 130 / 2.5 / 0 / 0 / 0 / 1020 / 25 / 1 / 22 / 1 | B: numbers found after the name (line 45); check the size |
| Golden Fire | 5 count | only in draft B | not found | 190 / 4 / 0 / 0 / 0 / 1530 / 38 / 2 / 34 / 2 | B: numbers found after the name (line 86); check the size |
| Honey BBQ | 3 count | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 830 / 34 / 0 / 28 / 0 | B: numbers found after the name (line 46); check the size |
| Honey BBQ | 5 count | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 1240 / 50 / 1 / 41 / 1 | B: numbers found after the name (line 87); check the size |
| Honey Garlic | 3 count | only in draft B | not found | 160 / 1 / 0 / 0 / 0 / 1410 / 39 / 0 / 34 / 1 | B: numbers found after the name (line 47); check the size |
| Honey Garlic | 5 count | only in draft B | not found | 250 / 1.5 / 0 / 0 / 0 / 2120 / 59 / 1 / 51 / 1 | B: numbers found after the name (line 88); check the size |
| Hot | 3 count | only in draft B | not found | 90 / 8 / 1.5 / 0 / 0 / 2200 / 4 / 1 / 0 / 1 | B: numbers found after the name (line 48); check the size |
| Hot | 5 count | only in draft B | not found | 140 / 12 / 2 / 0 / 0 / 3300 / 6 / 1 / 0 / 1 | B: numbers found after the name (line 89); check the size |
| Jammin' Jalapeño | 3 count | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 1360 / 40 / 0 / 32 / 0 | B: numbers found after the name (line 50); check the size |
| Jammin' Jalapeño | 5 count | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 2040 / 60 / 0 / 48 / 0 | B: numbers found after the name (line 91); check the size |
| Lemon Pepper | 3 count | only in draft B | not found | 300 / 31 / 6 / 0.5 / 25 / 1130 / 5 / 1 / 2 / 1 | B: numbers found after the name (line 51); check the size |
| Lemon Pepper | 5 count | only in draft B | not found | 450 / 47 / 9 / 2 / 35 / 1690 / 8 / 2 / 4 / 1 | B: numbers found after the name (line 565); check the size |
| Mango HabaneroTM | 3 count | only in draft B | not found | 150 / 1 / 0 / 0 / 0 / 870 / 35 / 1 / 26 / 0 | B: numbers found after the name (line 566); check the size |
| Mango HabaneroTM | 5 count | only in draft B | not found | 220 / 1.5 / 0 / 0 / 0 / 1300 / 53 / 1 / 40 / 1 | B: numbers found after the name (line 94); check the size |
| Spicy Chicken Dippers | 1 serving | only in draft B | not found | 330 / 16 / 6 / 0.5 / 80 / 1130 / 25 / 2 / 1 / 22 | B: numbers found after the name (line 543); check the size |
| Buffalo Chips - limited time | 1 serving | only in draft B | not found | 370 / 15 / 5 / 1 / 10 / 750 / 54 / 5 / 0 / 6 | B: numbers found after the name (line 638); check the size |
| Cauliflower Wings | 1 serving | only in draft B | not found | 520 / 29 / 11 / 1.5 / 35 / 650 / 58 / 5 / 4 / 8 | B: numbers found after the name (line 387); check the size |
| Cheddar Cheese Curds | 1 serving | only in draft B | not found | 530 / 38 / 22 / 2 / 110 / 1180 / 18 / 1 / 2 / 28 | B: numbers found after the name (line 641); check the size |
| Cheeseburger Sliders - at select locations | 1 serving | only in draft B | not found | 360 / 15 / 7 / 0.5 / 65 / 810 / 38 / 1 / 17 / 17 | B: numbers found after the name (line 642); check the size |
| Everything Pretzel Knots | 1 serving | only in draft B | not found | 330 / 9 / 1 / 0 / 0 / 1150 / 54 / 2 / 1 / 9 | B: numbers found after the name (line 647); check the size |
| Fried Pickles | 1 serving | only in draft B | not found | 450 / 25 / 11 / 1.5 / 25 / 2390 / 49 / 5 / 1 / 7 | B: numbers found after the name (line 648); check the size |
| Garlic Mushrooms - limited time | 1 serving | only in draft B | not found | 320 / 14 / 5 / 1 / 10 / 620 / 42 / 6 / 4 / 5 | B: numbers found after the name (line 649); check the size |
| Jumbo Stuffed Tots - at select locations | 1 serving | only in draft B | not found | 260 / 16 / 7 / 0.5 / 0 / 820 / 17 / 2 / 0 / 10 | B: numbers found after the name (line 650); check the size |
| Mini Corn Dogs - limited time | 1 serving | only in draft B | not found | 310 / 19 / 6 / 1 / 50 / 620 / 27 / 1 / 6 / 8 | B: numbers found after the name (line 651); check the size |
| Mozzarella Sticks | 1 serving | only in draft B | not found | 310 / 16 / 8 / 1 / 35 / 940 / 30 / 4 / 1 / 13 | B: numbers found after the name (line 652); check the size |
| Caramel Sauce - at select locations | 1 serving | only in draft B | not found | 130 / 0.5 / 0 / 0 / 5 / 75 / 30 / 0 / 23 / 0 | B: numbers found after the name (line 656); check the size |
| Hatch Queso - at select locations | 1 serving | only in draft B | not found | 110 / 8 / 4.5 / 0 / 25 / 520 / 4 / 0 / 2 / 6 | B: numbers found after the name (line 657); check the size |
| Honey Mustard - at select locations | 1 serving | only in draft B | not found | 220 / 20 / 3 / 0 / 15 / 650 / 11 / 1 / 9 / 1 | B: numbers found after the name (line 658); check the size |
| New Belgium Fat Tire® Beer Cheese - at select locations | 1 serving | only in draft B | not found | 120 / 9 / 5 / 0 / 20 / 430 / 5 / 0 / 3 / 5 | B: numbers found after the name (line 660); check the size |
| Southwestern Ranch Dressing | 1 serving | only in draft B | not found | 340 / 37 / 6 / 0.5 / 15 / 800 / 2 / 0 / 1 / 1 | B: numbers found after the name (line 662); check the size |
| Chipotle BBQ Dry Rub | Regular | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 180 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 750); check the size |
| Chipotle BBQ Dry Rub | Large | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 540 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 750); check the size |
| Desert Heat® Dry Rub | Regular | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 125 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 751); check the size |
| Desert Heat® Dry Rub | Large | only in draft B | not found | 10 / 0 / 0 / 0 / 0 / 380 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 751); check the size |
| Lemon Pepper Dry Rub | Regular | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 150 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 752); check the size, mostly zeros: look |
| Lemon Pepper Dry Rub | Large | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 440 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 752); check the size |
| Salt & Vinegar Dry Rub | Regular | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 270 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 753); check the size, mostly zeros: look |
| Salt & Vinegar Dry Rub | Large | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 800 / 1 / 0 / 1 / 0 | B: numbers found after the name (line 753); check the size |
| Classic Chicken Wrap with Pulled Chicken or Boneless Wings | with Pulled Chicken | only in draft B | not found | 680 / 25 / 11 / 0 / 145 / 2000 / 57 / 2 / 6 / 56 | B: numbers found after the name (line 756); check the size |
| Classic Chicken Wrap with Pulled Chicken or Boneless Wings | with Boneless Wings | only in draft B | not found | 670 / 29 / 12 / 1 / 85 / 1900 / 68 / 3 / 5 / 34 | B: numbers found after the name (line 756); check the size |
| American Breakfast, with Bacon or Sausage, JFK Airport | with Bacon | only in draft B | not found | 590 / 32 / 13 / 0 / 580 / 6870 / 40 / 2 / 3 / 33 | B: numbers found after the name (line 808); check the size |
| American Breakfast, with Bacon or Sausage, JFK Airport | with Sausage | only in draft B | not found | 660 / 42 / 16 / 0 / 595 / 6730 / 40 / 2 / 2 / 29 | B: numbers found after the name (line 808); check the size |
| Breakfast Sandwich, with Bacon or Sausage, JFK Airport | with Bacon | only in draft B | not found | 560 / 31 / 13 / 0 / 580 / 6960 / 35 / 2 / 6 / 34 | B: numbers found after the name (line 814); check the size |
| Breakfast Sandwich, with Bacon or Sausage, JFK Airport | with Sausage | only in draft B | not found | 640 / 41 / 16 / 0 / 595 / 6820 / 35 / 2 / 5 / 31 | B: numbers found after the name (line 814); check the size |
| Breakfast Wrap, with Bacon or Sausage, JFK Airport | with Bacon | only in draft B | not found | 690 / 36 / 14 / 0 / 580 / 7350 / 52 / 1 / 3 / 38 | B: numbers found after the name (line 815); check the size |
| Breakfast Wrap, with Bacon or Sausage, JFK Airport | with Sausage | only in draft B | not found | 770 / 46 / 17 / 0 / 595 / 7220 / 52 / 1 / 3 / 34 | B: numbers found after the name (line 815); check the size |
| Black Bean Burger Patty | 1 serving | both read it the same, but its protein, carbs and fat make 250 kcal, not 200 | 200 / 6 / 1 / 0 / 0 / 540 / 31 / 11 / 4 / 18 | 200 / 6 / 1 / 0 / 0 / 540 / 31 / 11 / 4 / 18 | A: numbers found after the name (line 678); check the size; B: numbers found after the name (line 678); check the size |

## Spot check (10 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Southwestern Ranch | Large | 1360 / 146 / 24 / 2 / 50 / 3180 / 9 / 1 / 6 / 3 |
| Chips & Dip Trio | 1 serving | 1490 / 87 / 33 / 2.5 / 105 / 4210 / 155 / 26 / 20 / 37 |
| Kickin' Chicken Sandwich | 1 serving | 970 / 64 / 18 / 1 / 135 / 3080 / 62 / 5 / 7 / 39 |
| House-Made Guacamole | 1 serving | 100 / 10 / 1.5 / 0 / 0 / 125 / 6 / 4 / 0 / 2 |
| New Belgium Fat Tire® Beer Cheese | Regular | 120 / 9 / 5 / 0 / 20 / 430 / 5 / 0 / 3 / 5 |
| NEW Crispy Battered French Fries | 1 serving | 370 / 18 / 7 / 1 / 15 / 950 / 47 / 2 / 0 / 5 |
| Bleu Cheese Dressing | Large | 1130 / 117 / 23 / 2 / 140 / 2190 / 9 / 1 / 7 / 8 |
| Lite Balsamic with Olive Oil Vinaigrette | 2 fl oz | 140 / 12 / 2 / 0 / 0 / 540 / 6 / 0 / 4 / 0 |
| Whipped Cream | 1 serving | 40 / 4.5 / 2.5 / 0 / 15 / 0 / 0 / 0 / 0 / 0 |
| Mozzarella Sticks, with Marinara | 1 serving | 520 / 25 / 13 / 1 / 55 / 1700 / 53 / 7 / 7 / 21 |
