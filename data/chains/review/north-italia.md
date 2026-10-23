# North Italia: lines for a person

Guide: https://www.northitalia.com/wp-content/uploads/2026/04/North-Italia-Nutritional-Guide-04-2026-1.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (156)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/north-italia.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| CRISPY EGGPLANT PARMESAN | 1 serving | differ: trans_fat_g | 770 / 66 / 34 / 1 / 145 / 1580 / 24 / 3 / 8 / 18 | 770 / 66 / 34 / 1.5 / 145 / 1580 / 24 / 3 / 8 / 18 | A: not as drafted (line 14 lacks 1); B: numbers found after the name (line 14); check the size |
| CACIO E PEPE DIRTY MARTINI | 1 serving | differ: fat_g, saturated_fat_g | 230 / 10 / 1.5 / 0 / 0 / 510 / 1 / 0 / 1 / 0 | 230 / 1.5 / 0 / 0 / 0 / 510 / 1 / 0 / 1 / 0 | A: numbers found after the name (line 312); check the size; B: numbers found after the name (line 312); check the size |
| CACIO E PEPE DIRTY MARTINI (Idaho) | 1 serving | differ: fat_g, saturated_fat_g | 110 / 10 / 1.5 / 0 / 0 / 430 / 0 / 0 / 0 / 0 | 110 / 1.5 / 0 / 0 / 0 / 430 / 0 / 0 / 0 / 0 | A: numbers found after the name (line 313); check the size; B: numbers found after the name (line 313); check the size |
| ESPRESSO MARTINI | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g | 360 / 40 / 4 / 1.5 / 5 / 45 / 9 / 1 / 5 / 1 | 360 / 4 / 1.5 / 0 / 5 / 45 / 9 / 1 / 5 / 1 | A: numbers found after the name (line 327); check the size; B: numbers found after the name (line 327); check the size |
| ESPRESSO MARTINI (Utah) | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g | 250 / 30 / 3.5 / 1 / 5 / 40 / 11 / 1 / 8 / 1 | 250 / 3.5 / 1 / 0 / 5 / 40 / 11 / 1 / 8 / 1 | A: numbers found after the name (line 334); check the size; B: numbers found after the name (line 334); check the size |
| RED SANGRIA (Idaho & Utah) | glass | both read numbers that can't be right: sugars 26 g above carbs 17 g | 290 / 0 / 0 / 0 / 0 / 10 / 17 / 0 / 26 / 0 | 290 / 0 / 0 / 0 / 0 / 10 / 17 / 0 / 26 / 0 | A: numbers found after the name (line 368); check the size; B: numbers found after the name (line 368); check the size |
| RED SANGRIA (Idaho & Utah) | pitcher | both read numbers that can't be right: sugars 104 g above carbs 75 g | 1240 / 0 / 0 / 0 / 0 / 30 / 75 / 0 / 104 / 2 | 1240 / 0 / 0 / 0 / 0 / 30 / 75 / 0 / 104 / 2 | A: numbers found after the name (line 369); check the size; B: numbers found after the name (line 369); check the size |
| ZERO PROOF WINE | 750 ml bottle | both read numbers that can't be right: sugars 32 g above carbs 30 g | 130 / 0 / 0 / 0 / 0 / 30 / 30 / 0 / 32 / 0 | 130 / 0 / 0 / 0 / 0 / 30 / 30 / 0 / 32 / 0 | A: numbers found after the name (line 376); check the size; B: numbers found after the name (line 376); check the size |
| POTATO & SPINACH | 1 serving | only in draft B | not found | 1490 / 73 / 31 / 1.5 / 130 / 3400 / 152 / 11 / 8 / 57 | B: numbers found after the name (line 96); check the size |
| PROSCIUTTO & ARTICHOKE | 1 serving | only in draft B | not found | 1400 / 67 / 26 / 1.5 / 105 / 3500 / 146 / 10 / 7 / 54 | B: numbers found after the name (line 97); check the size |
| PROSCIUTTO COTTO | 1 serving | only in draft B | not found | 1540 / 77 / 20 / 1 / 75 / 4090 / 152 / 10 / 12 / 62 | B: numbers found after the name (line 98); check the size |
| ROASTED VEGETABLE | 1 serving | only in draft B | not found | 1170 / 43 / 17 / 1 / 65 / 3230 / 151 / 14 / 12 / 48 | B: numbers found after the name (line 99); check the size |
| SALISCIA | 1 serving | only in draft B | not found | 1550 / 75 / 30 / 1.5 / 180 / 3920 / 146 / 10 / 7 / 70 | B: numbers found after the name (line 100); check the size |
| SAUSAGE | 1 serving | only in draft B | not found | 1450 / 69 / 29 / 1.5 / 155 / 3550 / 144 / 9 / 7 / 62 | B: numbers found after the name (line 101); check the size |
| SHRIMP FRA DIAVOLO | 1 serving | only in draft B | not found | 1620 / 80 / 34 / 1.5 / 205 / 4200 / 149 / 8 / 10 / 72 | B: name not in the guide text |
| Bomba Style add to pizza | 1 serving | only in draft B | not found | 270 / 21 / 9 / 0 / 35 / 1380 / 12 / 1 / 3 / 8 | B: numbers found after the name (line 103); check the size |
| AGNOLOTTI AL POMEDORO | 1 serving | only in draft B | not found | 1030 / 87 / 50 / 2 / 515 / 2160 / 34 / 2 / 6 / 29 | B: numbers found after the name (line 105); check the size |
| BRAISED SHORT RIB LUMACHE | 1 serving | only in draft B | not found | 1930 / 132 / 74 / 3.5 / 350 / 3360 / 120 / 8 / 15 / 67 | B: numbers found after the name (line 106); check the size |
| TROTTOLE CHICKEN PESTO | 1 serving | only in draft B | not found | 1480 / 91 / 29 / 1 / 200 / 2080 / 103 / 7 / 4 / 68 | B: numbers found after the name (line 107); check the size |
| STROZZAPRETI | 1 serving | only in draft B | not found | 2110 / 145 / 76 / 3.5 / 445 / 2940 / 117 / 9 / 13 / 85 | B: numbers found after the name (line 108); check the size |
| SPICY RIGATONI VODKA | 1 serving | only in draft B | not found | 1920 / 131 / 66 / 3 / 350 / 3250 / 112 / 9 / 18 / 66 | B: numbers found after the name (line 109); check the size |
| BOLOGNESE | 1 serving | only in draft B | not found | 940 / 45 / 19 / 1 / 100 / 1590 / 97 / 9 / 6 / 35 | B: numbers found after the name (line 110); check the size |
| CRUSHED MEATBALL RAGU | 1 serving | only in draft B | not found | 1630 / 105 / 31 / 1 / 180 / 3850 / 115 / 10 / 13 / 62 | B: numbers found after the name (line 111); check the size |
| SPAGHETTI & MEATBALLS | 1 serving | only in draft B | not found | 1110 / 60 / 26 / 2 / 155 / 2080 / 107 / 9 / 11 / 38 | B: numbers found after the name (line 112); check the size |
| SUNDAY NIGHT LASAGNA | 1 serving | only in draft B | not found | 710 / 43 / 20 / 0.5 / 315 / 2420 / 40 / 4 / 11 / 39 | B: numbers found after the name (line 113); check the size |
| SQUID INK TONNARELLI | 1 serving | only in draft B | not found | 970 / 58 / 21 / 1 / 390 / 2410 / 56 / 8 / 12 / 39 | B: numbers found after the name (line 114); check the size |
| RICOTTA CAVATELLI | 1 serving | only in draft B | not found | 1380 / 103 / 54 / 3 / 405 / 1210 / 68 / 6 / 3 / 47 | B: numbers found after the name (line 115); check the size |
| PESTO PRIMAVERA | 1 serving | only in draft B | not found | 1310 / 86 / 25 / 1 / 80 / 2160 / 106 / 8 / 8 / 36 | B: numbers found after the name (line 116); check the size |
| CHICKEN PESTO | 1 serving | only in draft B | not found | 1270 / 90 / 29 / 1 / 200 / 2090 / 69 / 3 / 3 / 52 | B: numbers found after the name (line 119); check the size |
| BREAKFAST CARBONARA PASTA* | 1 serving | only in draft B | not found | 950 / 70 / 33 / 0.5 / 410 / 1970 / 39 / 7 / 9 / 40 | B: numbers found after the name (line 132); check the size |
| ROASTED SALMON* | 1 serving | only in draft B | not found | 1330 / 104 / 36 / 1.5 / 210 / 2720 / 47 / 6 / 9 / 54 | B: numbers found after the name (line 138); check the size |
| GRILLED BRANZINO* | 1 serving | only in draft B | not found | 700 / 47 / 21 / 1 / 135 / 2240 / 24 / 7 / 7 / 46 | B: numbers found after the name (line 144); check the size |
| CHICKEN SCARPARIELLO | 1 serving | only in draft B | not found | 1640 / 125 / 48 / 2 / 485 / 3250 / 41 / 5 / 17 / 87 | B: numbers found after the name (line 145); check the size |
| CHICKEN PARMESAN | 1 serving | only in draft B | not found | 2000 / 135 / 72 / 3 / 525 / 3360 / 98 / 5 / 16 / 96 | B: numbers found after the name (line 146); check the size |
| SEARED SEA SCALLOPS | 1 serving | only in draft B | not found | 1000 / 65 / 28 / 1 / 150 / 3130 / 61 / 4 / 7 / 42 | B: numbers found after the name (line 147); check the size |
| BRAISED SHORT RIB MARSALA | 1 serving | only in draft B | not found | 1550 / 108 / 47 / 2.5 / 245 / 2200 / 61 / 7 / 11 / 76 | B: numbers found after the name (line 148); check the size |
| PRIME NEW YORK TAGLIATA* | 1 serving | only in draft B | not found | 1090 / 67 / 22 / 1.5 / 260 / 1680 / 31 / 11 / 18 / 102 | B: numbers found after the name (line 149); check the size |
| CHICKEN PARMIGIANA VERDE | 1 serving | only in draft B | not found | 1490 / 96 / 48 / 2 / 300 / 3210 / 88 / 6 / 16 / 64 | B: numbers found after the name (line 150); check the size |
| CHICKEN SCARPARIELLO lunch | 1 serving | only in draft B | not found | 1480 / 116 / 46 / 2 / 395 / 3000 / 40 / 5 / 17 / 68 | B: numbers found after the name (line 151); check the size |
| SPICY BROCCOLINI | 1 serving | only in draft B | not found | 360 / 26 / 7 / 0 / 20 / 640 / 15 / 8 / 3 / 18 | B: numbers found after the name (line 153); check the size |
| TUSCAN KALE & SPINACH | 1 serving | only in draft B | not found | 150 / 12 / 2.5 / 0 / 0 / 330 / 9 / 3 / 1 / 4 | B: numbers found after the name (line 154); check the size |
| GRILLED ASPARAGUS | 1 serving | only in draft B | not found | 300 / 23 / 4 / 0 / 5 / 740 / 20 / 7 / 10 / 9 | B: numbers found after the name (line 155); check the size |
| ROASTED MUSHROOMS | 1 serving | only in draft B | not found | 790 / 68 / 34 / 1 / 150 / 1120 / 39 / 8 / 18 / 12 | B: numbers found after the name (line 156); check the size |
| GLAZED CHIOGGIA BEETS | 1 serving | only in draft B | not found | 330 / 22 / 10 / 0.5 / 30 / 1510 / 27 / 5 / 18 / 8 | B: numbers found after the name (line 157); check the size |
| SWEET CORN & FONTINA POLENTA | 1 serving | only in draft B | not found | 650 / 53 / 33 / 1.5 / 160 / 840 / 29 / 2 / 6 / 20 | B: numbers found after the name (line 158); check the size |
| SUMMER VEGETABLE RISOTTO | 1 serving | only in draft B | not found | 700 / 23 / 13 / 0.5 / 55 / 600 / 103 / 4 / 5 / 22 | B: numbers found after the name (line 159); check the size |
| CRISPY PARMESAN FRENCH FRIES | 1 serving | only in draft B | not found | 650 / 39 / 10 / 0 / 10 / 1550 / 66 / 6 / 12 / 10 | B: numbers found after the name (line 160); check the size |
| BANANA COFFEE CAKE | 1 serving | only in draft B | not found | 1850 / 123 / 76 / 4.5 / 415 / 1100 / 183 / 5 / 149 / 11 | B: numbers found after the name (line 162); check the size |
| STRAWBERRIES & CREAM FRENCH TOAST | 1 serving | only in draft B | not found | 1660 / 84 / 49 / 2 / 610 / 1010 / 194 / 7 / 114 / 36 | B: numbers found after the name (line 163); check the size |
| AMERICANO* with fried eggs & bacon | 1 serving | only in draft B | not found | 1180 / 84 / 24 / 0 / 440 / 2740 / 68 / 6 / 2 / 43 | B: name not in the guide text |
| AMERICANO* with fried eggs & prosciutto | 1 serving | only in draft B | not found | 940 / 58 / 12 / 0 / 385 / 2810 / 68 / 6 / 2 / 41 | B: name not in the guide text |
| AMERICANO* with scrambled eggs & bacon | 1 serving | only in draft B | not found | 1160 / 82 / 23 / 0 / 365 / 2710 / 68 / 6 / 2 / 40 | B: name not in the guide text |
| AMERICANO* with scrambled eggs & prosciutto | 1 serving | only in draft B | not found | 880 / 53 / 12 / 0 / 305 / 2540 / 68 / 6 / 2 / 35 | B: name not in the guide text |
| EGGS IN PURGATORY* | 1 serving | only in draft B | not found | 760 / 46 / 11 / 0 / 390 / 2610 / 59 / 5 / 8 / 29 | B: numbers found after the name (line 168); check the size |
| POLLO FRITTO* | 1 serving | only in draft B | not found | 1220 / 73 / 19 / 0 / 555 / 1650 / 64 / 5 / 3 / 77 | B: numbers found after the name (line 170); check the size |
| TUSCAN HASH* | 1 serving | only in draft B | not found | 1310 / 88 / 20 / 0 / 440 / 1880 / 85 / 9 / 9 / 50 | B: numbers found after the name (line 171); check the size |
| GRILLED CHICKEN HASH* | 1 serving | only in draft B | not found | 1270 / 81 / 15 / 0 / 485 / 2130 / 84 / 9 / 8 / 56 | B: numbers found after the name (line 172); check the size |
| SMOKED SALMON AVOCADO TOAST* | 1 serving | only in draft B | not found | 520 / 36 / 5 / 0 / 15 / 1570 / 40 / 9 / 4 / 18 | B: numbers found after the name (line 173); check the size |
| BISTRO STEAK & EGGS* | 1 serving | only in draft B | not found | 1350 / 99 / 37 / 2 / 630 / 2870 / 65 / 7 / 7 / 57 | B: numbers found after the name (line 174); check the size |
| THE BREAKFAST SANDWICH* | 1 serving | only in draft B | not found | 2330 / 169 / 48 / 1 / 645 / 4730 / 118 / 9 / 28 / 86 | B: numbers found after the name (line 175); check the size |
| MORING MARKET BOARD | 1 serving | only in draft B | not found | 950 / 74 / 35 / 1 / 565 / 2130 / 34 / 3 / 10 / 39 | B: numbers found after the name (line 176); check the size |
| MORING MARKET BOARD with prosciutto | 1 serving | only in draft B | not found | 1060 / 82 / 35 / 1 / 565 / 2880 / 35 / 3 / 10 / 50 | B: numbers found after the name (line 177); check the size |
| ITALIAN DONUTS | 1 serving | only in draft B | not found | 490 / 21 / 9 / 0 / 140 / 260 / 68 / 2 / 45 / 9 | B: numbers found after the name (line 179); check the size |
| APPLEWOOD BACON | 1 serving | only in draft B | not found | 490 / 46 / 16 / 0 / 80 / 930 / 0 / 0 / 0 / 17 | B: numbers found after the name (line 180); check the size |
| CRISPY HASH POTATOES | 1 serving | only in draft B | not found | 420 / 25 / 6 / 0 / 5 / 440 / 38 / 4 / 0 / 10 | B: numbers found after the name (line 181); check the size |
| FRESH FRUIT | 1 serving | only in draft B | not found | 60 / 0.5 / 0 / 0 / 0 / 0 / 15 / 6 / 8 / 1 | B: numbers found after the name (line 182); check the size |
| SALTED CARAMEL BUDINO | 1 serving | only in draft B | not found | 760 / 57 / 33 / 1.5 / 205 / 280 / 58 / 2 / 47 / 7 | B: numbers found after the name (line 184); check the size |
| LEMONCELLO BOMBOLINI | 1 serving | only in draft B | not found | 670 / 31 / 13 / 0.5 / 175 / 320 / 91 / 2 / 60 / 10 | B: numbers found after the name (line 185); check the size |
| BROOKIE GELATO SUNDAE | 1 serving | only in draft B | not found | 1300 / 82 / 51 / 1.5 / 200 / 380 / 129 / 8 / 102 / 16 | B: numbers found after the name (line 186); check the size |
| ITALIAN BUTTER CAKE | 1 serving | only in draft B | not found | 900 / 59 / 35 / 2 / 220 / 320 / 88 / 1 / 69 / 8 | B: numbers found after the name (line 193); check the size |
| SEASONAL BUTTER CAKE | 1 serving | only in draft B | not found | 720 / 29 / 16 / 1 / 130 / 300 / 102 / 2 / 82 / 16 | B: numbers found after the name (line 194); check the size |
| CHOCOLATE HAZELNUT TORTA | 1 serving | only in draft B | not found | 820 / 52 / 13 / 0 / 130 / 260 / 79 / 6 / 66 / 15 | B: numbers found after the name (line 195); check the size |
| TIRAMISU* | 1 serving | only in draft B | not found | 600 / 38 / 24 / 0.5 / 220 / 150 / 49 / 2 / 36 / 9 | B: numbers found after the name (line 196); check the size |
| AFFOGATO | 1 serving | only in draft B | not found | 240 / 13 / 8 / 0 / 35 / 60 / 29 / 1 / 25 / 4 | B: numbers found after the name (line 197); check the size |
| JUMP START | 1 serving | only in draft B | not found | 120 / 3.5 / 2 / 0 / 10 / 30 / 23 / 0 / 20 / 1 | B: numbers found after the name (line 199); check the size |
| CAFFÉ PIAZZA | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 15 / 17 / 0 / 12 / 0 | B: numbers found after the name (line 200); check the size |
| CAPPUCCINO whole milk | 1 serving | only in draft B | not found | 70 / 4 / 2 / 0 / 10 / 60 / 6 / 0 / 5 / 4 | B: numbers found after the name (line 201); check the size |
| CAPPUCCINO nonfat milk | 1 serving | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 55 / 7 / 0 / 6 / 4 | B: numbers found after the name (line 202); check the size |
| CAPPUCCINO soy milk | 1 serving | only in draft B | not found | 70 / 2 / 0 / 0 / 0 / 65 / 8 / 1 / 4 / 4 | B: numbers found after the name (line 203); check the size |
| CAPPUCCINO almond milk | 1 serving | only in draft B | not found | 35 / 2 / 0 / 0 / 0 / 90 / 4 / 0 / 2 / 1 | B: numbers found after the name (line 204); check the size |
| ESPRESSO | 1 serving | only in draft B | not found | 5 / 0 / 0 / 0 / 10 / 1 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 205); check the size |
| DRIP COFFEE | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 206); check the size, mostly zeros: look |
| HOT TEA | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 207); check the size, mostly zeros: look |
| DIRTY ALMOND CHAI | 1 serving | only in draft B | not found | 250 / 0.5 / 0 / 0 / 0 / 250 / 20 / 1 / 13 / 1 | B: numbers found after the name (line 208); check the size |
| LATTE whole milk | 1 serving | only in draft B | not found | 90 / 4.5 / 2.5 / 0 / 15 / 65 / 8 / 0 / 6 / 4 | B: numbers found after the name (line 209); check the size |
| LATTE nonfat milk | 1 serving | only in draft B | not found | 50 / 0 / 0 / 0 / 5 / 65 / 8 / 0 / 7 / 5 | B: numbers found after the name (line 210); check the size |
| LATTE soy milk | 1 serving | only in draft B | not found | 80 / 2.5 / 0 / 0 / 0 / 80 / 10 / 1 / 5 / 4 | B: numbers found after the name (line 211); check the size |
| LATTE almond milk | 1 serving | only in draft B | not found | 45 / 2.5 / 0 / 0 / 0 / 105 / 4 / 0 / 3 / 1 | B: numbers found after the name (line 212); check the size |
| MACCHIATO whole milk | 1 serving | only in draft B | not found | 20 / 1 / 0 / 0 / 0 / 20 / 2 / 0 / 1 / 1 | B: numbers found after the name (line 213); check the size |
| MACCHIATO nonfat milk | 1 serving | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 20 / 2 / 0 / 1 / 1 | B: numbers found after the name (line 214); check the size |
| MACCHIATO soy milk | 1 serving | only in draft B | not found | 20 / 0.5 / 0 / 0 / 0 / 20 / 3 / 0 / 1 / 1 | B: numbers found after the name (line 215); check the size |
| MACCHIATO almond milk | 1 serving | only in draft B | not found | 10 / 0.5 / 0 / 0 / 0 / 25 / 2 / 0 / 0 / 0 | B: numbers found after the name (line 216); check the size |
| PROSCIUTTO BRUSCHETTA | 1 serving | only in draft B | not found | 450 / 27 / 9 / 0 / 30 / 1160 / 32 / 3 / 3 / 25 | B: numbers found after the name (line 219); check the size |
| TOMATO BRUSCHETTA | 1 serving | only in draft B | not found | 660 / 51 / 16 / 0 / 50 / 1880 / 43 / 4 / 10 / 16 | B: numbers found after the name (line 220); check the size |
| MARGHERITA PIZZA | 1 serving | only in draft B | not found | 1270 / 55 / 25 / 0 / 110 / 3070 / 141 / 8 / 8 / 52 | B: numbers found after the name (line 223); check the size |
| FARMERS MARKET BOARD | 1 serving | only in draft B | not found | 940 / 63 / 11 / 0 / 15 / 2560 / 87 / 14 / 27 / 18 | B: numbers found after the name (line 225); check the size |
| CHEF'S BOARD | 1 serving | only in draft B | not found | 1360 / 84 / 17 / 0 / 20 / 4780 / 100 / 11 / 21 / 55 | B: numbers found after the name (line 226); check the size |
| RIGATONI with butter | 1 serving | only in draft B | not found | 670 / 44 / 27 / 1.5 / 115 / 160 / 58 / 4 / 1 / 13 | B: numbers found after the name (line 230); check the size |
| RIGATONI with red sauce | 1 serving | only in draft B | not found | 510 / 24 / 14 / 1 / 55 / 430 / 62 / 5 / 3 / 14 | B: numbers found after the name (line 231); check the size |
| RIGATONI with white sauce | 1 serving | only in draft B | not found | 1130 / 79 / 51 / 2.5 / 240 / 1200 / 70 / 4 / 7 / 32 | B: numbers found after the name (line 232); check the size |
| RIGATONI with meat sauce | 1 serving | only in draft B | not found | 480 / 17 / 9 / 0.5 / 45 / 700 / 62 / 5 / 3 / 19 | B: numbers found after the name (line 233); check the size |
| add MEATBALLS | 1 serving | only in draft B | not found | 300 / 21 / 9 / 1 / 110 / 770 / 6 / 1 / 1 / 20 | B: numbers found after the name (line 234); check the size |
| CHEESE PIZZA | 1 serving | only in draft B | not found | 890 / 28 / 14 / 0 / 75 / 2260 / 120 / 7 / 6 / 37 | B: numbers found after the name (line 235); check the size |
| GRILLED CHICKEN with alfredo noodles | 1 serving | only in draft B | not found | 1650 / 115 / 68 / 3.5 / 415 / 1750 / 83 / 5 / 9 / 68 | B: numbers found after the name (line 241); check the size |
| GRILLED CHICKEN with sautéed vegetables | 1 serving | only in draft B | not found | 340 / 15 / 3 / 0 / 120 / 330 / 10 / 4 / 3 / 40 | B: numbers found after the name (line 242); check the size |
| KIDS CHICKEN PARMESAN | 1 serving | only in draft B | not found | 490 / 30 / 12 / 0 / 150 / 940 / 16 / 1 / 3 / 39 | B: numbers found after the name (line 243); check the size |
| KIDS MEATBALL SLIDERS with choice of side | 1 serving | only in draft B | not found | 580 / 29 / 16 / 1 / 90 / 1190 / 61 / 3 / 3 / 20 | B: numbers found after the name (line 244); check the size |
| CRISPY CHICKEN STRIPS with crispy fries | 1 serving | only in draft B | not found | 1030 / 55 / 12 / 0 / 150 / 1820 / 85 / 5 / 18 / 51 | B: numbers found after the name (line 245); check the size |
| GRILLED CHEESE with choice of side | 1 serving | only in draft B | not found | 1100 / 82 / 51 / 1.5 / 295 / 1080 / 63 / 3 / 17 / 31 | B: numbers found after the name (line 246); check the size |
| side CRISPY FRIES | 1 serving | only in draft B | not found | 540 / 31 / 7 / 0 / 0 / 1440 / 63 / 5 / 16 / 5 | B: numbers found after the name (line 247); check the size |
| side GREEN SALAD | 1 serving | only in draft B | not found | 100 / 9 / 1 / 0 / 0 / 240 / 4 / 1 / 2 / 1 | B: numbers found after the name (line 248); check the size |
| COKE | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 5 / 20 / 0 / 19 / 0 | B: numbers found after the name (line 250); check the size |
| DIET COKE | 1 serving | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 0 | B: numbers found after the name (line 251); check the size |
| SHIRLY TEMPLE with grenadine | 1 serving | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 35 / 64 / 0 / 50 / 0 | B: numbers found after the name (line 252); check the size |
| SPRITE | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 15 / 18 / 0 / 18 / 0 | B: numbers found after the name (line 253); check the size |
| DR. PEPPER | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 19 / 0 / 0 / 0 | B: numbers found after the name (line 254); check the size |
| MILK- 2% | 1 serving | only in draft B | not found | 90 / 3.5 / 2 / 0 / 15 / 85 / 8 / 0 / 8 / 6 | B: numbers found after the name (line 255); check the size |
| MILK- CHOCOLATE with whole milk | 1 serving | only in draft B | not found | 250 / 6 / 3.5 / 0 / 20 / 95 / 45 / 2 / 39 / 7 | B: numbers found after the name (line 256); check the size |
| MILK- NONFAT | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 5 / 75 / 9 / 0 / 9 / 6 | B: numbers found after the name (line 257); check the size |
| MILK- WHOLE | 1 serving | only in draft B | not found | 110 / 6 / 3.5 / 0 / 20 / 75 / 8 / 0 / 8 / 6 | B: numbers found after the name (line 258); check the size |
| ORANGE JUICE | 1 serving | only in draft B | not found | 40 / 0 / 0 / 0 / 0 / 5 / 10 / 0 / 8 / 0 | B: numbers found after the name (line 259); check the size |
| DONUT HOLES with chocolate dipping sauce | 1 serving | only in draft B | not found | 480 / 18 / 7 / 0 / 40 / 270 / 76 / 2 / 54 / 7 | B: numbers found after the name (line 261); check the size |
| GELATO- CHOCOLATE | one scoop | only in draft B | not found | 170 / 8 / 4.5 / 0 / 60 / 45 / 24 / 2 / 21 / 4 | B: numbers found after the name (line 262); check the size |
| GELATO- VANILLA | one scoop | only in draft B | not found | 170 / 9 / 6 / 0 / 35 / 50 / 19 / 0 / 19 / 3 | B: numbers found after the name (line 263); check the size |
| AMARO | 2 oz. pour | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 6 / 0 | B: numbers found after the name (line 264); check the size |
| FERNET BRANCA | 2 oz. pour | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 266); check the size, mostly zeros: look |
| LIMONCELLO / ORANGECELLO | 2 oz. pour | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 17 / 0 | B: numbers found after the name (line 268); check the size |
| RASPBERRY LIMONCELLO | 2 oz. pour | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 16 / 0 / 16 / 0 | B: numbers found after the name (line 269); check the size |
| GRAND MARNIER | 2 oz. pour | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 13 / 0 | B: numbers found after the name (line 270); check the size |
| REMY MARTIN | 2 oz. pour | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 271); check the size, mostly zeros: look |
| CAFFÉ BORGHETTI | 2 oz. pour | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 272); check the size, mostly zeros: look |
| PORT | 2 oz. pour | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 5 / 8 / 0 / 5 / 0 | B: numbers found after the name (line 273); check the size |
| JUST PEACHY | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 5 / 36 / 3 / 31 / 1 | B: numbers found after the name (line 276); check the size |
| PINA NO LADA | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 15 / 45 / 0 / 42 / 0 | B: numbers found after the name (line 277); check the size |
| 00SPRITZ | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 6 / 0 | B: numbers found after the name (line 278); check the size |
| LA SPEZIA | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 770 / 21 / 1 / 14 / 1 | B: numbers found after the name (line 279); check the size |
| FAUX ME TWICE | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 28 / 1 / 25 / 0 | B: numbers found after the name (line 280); check the size |
| PHONY NEGRONI | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 10 / 24 / 0 / 24 / 0 | B: numbers found after the name (line 281); check the size |
| SUNSET ALIBIS | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 9 / 0 | B: numbers found after the name (line 283); check the size |
| SUNSET ALIBIS (Idaho & Utah) | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 10 / 0 | B: numbers found after the name (line 284); check the size |
| PARADISO | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 5 / 18 / 18 / 0 / 16 / 0 | B: not as drafted (line 285 lacks 18) |
| PARADISO (Idaho) | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 5 / 23 / 23 / 0 / 22 / 0 | B: not as drafted (line 286 lacks 23) |
| PARADISO (Utah) | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 5 / 18 / 18 / 0 / 17 / 0 | B: not as drafted (line 287 lacks 18) |
| ORANGE BLOSSOM GIMLET | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 11 / 0 | B: numbers found after the name (line 288); check the size |
| ORANGE BLOssom GIMLET (Idaho) | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 14 / 0 / 12 / 0 | B: numbers found after the name (line 289); check the size |
| ORANGE BLOssom GIMLET (Utah) | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 18 / 0 / 16 / 0 | B: numbers found after the name (line 290); check the size |
| LITTLE ITALY | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 7 / 0 / 6 / 0 | B: numbers found after the name (line 291); check the size |
| LITTLE ITALY (Idaho) | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 4 / 0 | B: numbers found after the name (line 292); check the size |
| LITTLE ITALY (Utah) | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 5 / 0 | B: numbers found after the name (line 293); check the size |
| NEW ITALIAN SPRITZ | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 10 / 18 / 0 / 18 / 0 | B: numbers found after the name (line 295); check the size |
| LIMONCELLO SBAGLIATO | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 5 / 18 / 0 / 18 / 0 | B: numbers found after the name (line 296); check the size |
| CIAO, BELLA! | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 22 / 0 / 21 / 0 | B: numbers found after the name (line 297); check the size |
| CIAO, BELLA! (Idaho) | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 20 / 0 | B: numbers found after the name (line 298); check the size |
| ROMAN HOLIDAY | 1 serving | only in draft B | not found | 240 / 3.5 / 3 / 0 / 0 / 5 / 19 / 0 / 17 / 0 | B: numbers found after the name (line 299); check the size |
| ROMAN HOLIDAY (Idaho & Utah) | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 19 / 0 | B: numbers found after the name (line 300); check the size |
| ALTA ROSSA | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 20 / 0 / 18 / 0 | B: numbers found after the name (line 301); check the size |

## Spot check (7 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| orange juice | 1 oz | 15 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 3 / 0 |
| SPARKING ROSÉ | glass | 140 / 0 / 0 / 0 / 0 / 10 / 8 / 0 / 8 / 0 |
| HEIRLOOM TOMATO & BURRATA | 1 serving | 830 / 66 / 22 / 0 / 70 / 2360 / 45 / 4 / 10 / 20 |
| SPICY MEATBALL | 1 serving | 1420 / 66 / 30 / 1 / 155 / 3810 / 149 / 10 / 11 / 58 |
| GRILLED ARTICHOKE | 1 serving | 510 / 42 / 7 / 0 / 55 / 1240 / 28 / 19 / 1 / 8 |
| BUTTERNUT SQUASH & BRUSSELS | 1 serving | 1450 / 70 / 27 / 0 / 115 / 2950 / 163 / 13 / 12 / 47 |
| REGULAR BEER | 16 oz | 200 / 0 / 0 / 0 / 0 / 20 / 17 / 0 / 0 / 2 |
