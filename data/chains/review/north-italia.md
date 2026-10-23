# North Italia: lines for a person

Guide: https://www.northitalia.com/wp-content/uploads/2026/04/North-Italia-Nutritional-Guide-04-2026-1.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (156)

Fix each line in `menus/north-italia.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| CRISPY EGGPLANT PARMESAN | 1 serving | differ: trans_fat_g | 770 / 66 / 34 / 1 / 145 / 1580 / 24 / 3 / 8 / 18 | 770 / 66 / 34 / 1.5 / 145 / 1580 / 24 / 3 / 8 / 18 |
| CACIO E PEPE DIRTY MARTINI | 1 serving | differ: fat_g, saturated_fat_g | 230 / 10 / 1.5 / 0 / 0 / 510 / 1 / 0 / 1 / 0 | 230 / 1.5 / 0 / 0 / 0 / 510 / 1 / 0 / 1 / 0 |
| CACIO E PEPE DIRTY MARTINI (Idaho) | 1 serving | differ: fat_g, saturated_fat_g | 110 / 10 / 1.5 / 0 / 0 / 430 / 0 / 0 / 0 / 0 | 110 / 1.5 / 0 / 0 / 0 / 430 / 0 / 0 / 0 / 0 |
| ESPRESSO MARTINI | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g | 360 / 40 / 4 / 1.5 / 5 / 45 / 9 / 1 / 5 / 1 | 360 / 4 / 1.5 / 0 / 5 / 45 / 9 / 1 / 5 / 1 |
| ESPRESSO MARTINI (Utah) | 1 serving | differ: fat_g, saturated_fat_g, trans_fat_g | 250 / 30 / 3.5 / 1 / 5 / 40 / 11 / 1 / 8 / 1 | 250 / 3.5 / 1 / 0 / 5 / 40 / 11 / 1 / 8 / 1 |
| RED SANGRIA (Idaho & Utah) | glass | both read numbers that can't be right: sugars 26 g above carbs 17 g | 290 / 0 / 0 / 0 / 0 / 10 / 17 / 0 / 26 / 0 | 290 / 0 / 0 / 0 / 0 / 10 / 17 / 0 / 26 / 0 |
| RED SANGRIA (Idaho & Utah) | pitcher | both read numbers that can't be right: sugars 104 g above carbs 75 g | 1240 / 0 / 0 / 0 / 0 / 30 / 75 / 0 / 104 / 2 | 1240 / 0 / 0 / 0 / 0 / 30 / 75 / 0 / 104 / 2 |
| ZERO PROOF WINE | 750 ml bottle | both read numbers that can't be right: sugars 32 g above carbs 30 g | 130 / 0 / 0 / 0 / 0 / 30 / 30 / 0 / 32 / 0 | 130 / 0 / 0 / 0 / 0 / 30 / 30 / 0 / 32 / 0 |
| POTATO & SPINACH | 1 serving | only in draft B | not found | 1490 / 73 / 31 / 1.5 / 130 / 3400 / 152 / 11 / 8 / 57 |
| PROSCIUTTO & ARTICHOKE | 1 serving | only in draft B | not found | 1400 / 67 / 26 / 1.5 / 105 / 3500 / 146 / 10 / 7 / 54 |
| PROSCIUTTO COTTO | 1 serving | only in draft B | not found | 1540 / 77 / 20 / 1 / 75 / 4090 / 152 / 10 / 12 / 62 |
| ROASTED VEGETABLE | 1 serving | only in draft B | not found | 1170 / 43 / 17 / 1 / 65 / 3230 / 151 / 14 / 12 / 48 |
| SALISCIA | 1 serving | only in draft B | not found | 1550 / 75 / 30 / 1.5 / 180 / 3920 / 146 / 10 / 7 / 70 |
| SAUSAGE | 1 serving | only in draft B | not found | 1450 / 69 / 29 / 1.5 / 155 / 3550 / 144 / 9 / 7 / 62 |
| SHRIMP FRA DIAVOLO | 1 serving | only in draft B | not found | 1620 / 80 / 34 / 1.5 / 205 / 4200 / 149 / 8 / 10 / 72 |
| Bomba Style add to pizza | 1 serving | only in draft B | not found | 270 / 21 / 9 / 0 / 35 / 1380 / 12 / 1 / 3 / 8 |
| AGNOLOTTI AL POMEDORO | 1 serving | only in draft B | not found | 1030 / 87 / 50 / 2 / 515 / 2160 / 34 / 2 / 6 / 29 |
| BRAISED SHORT RIB LUMACHE | 1 serving | only in draft B | not found | 1930 / 132 / 74 / 3.5 / 350 / 3360 / 120 / 8 / 15 / 67 |
| TROTTOLE CHICKEN PESTO | 1 serving | only in draft B | not found | 1480 / 91 / 29 / 1 / 200 / 2080 / 103 / 7 / 4 / 68 |
| STROZZAPRETI | 1 serving | only in draft B | not found | 2110 / 145 / 76 / 3.5 / 445 / 2940 / 117 / 9 / 13 / 85 |
| SPICY RIGATONI VODKA | 1 serving | only in draft B | not found | 1920 / 131 / 66 / 3 / 350 / 3250 / 112 / 9 / 18 / 66 |
| BOLOGNESE | 1 serving | only in draft B | not found | 940 / 45 / 19 / 1 / 100 / 1590 / 97 / 9 / 6 / 35 |
| CRUSHED MEATBALL RAGU | 1 serving | only in draft B | not found | 1630 / 105 / 31 / 1 / 180 / 3850 / 115 / 10 / 13 / 62 |
| SPAGHETTI & MEATBALLS | 1 serving | only in draft B | not found | 1110 / 60 / 26 / 2 / 155 / 2080 / 107 / 9 / 11 / 38 |
| SUNDAY NIGHT LASAGNA | 1 serving | only in draft B | not found | 710 / 43 / 20 / 0.5 / 315 / 2420 / 40 / 4 / 11 / 39 |
| SQUID INK TONNARELLI | 1 serving | only in draft B | not found | 970 / 58 / 21 / 1 / 390 / 2410 / 56 / 8 / 12 / 39 |
| RICOTTA CAVATELLI | 1 serving | only in draft B | not found | 1380 / 103 / 54 / 3 / 405 / 1210 / 68 / 6 / 3 / 47 |
| PESTO PRIMAVERA | 1 serving | only in draft B | not found | 1310 / 86 / 25 / 1 / 80 / 2160 / 106 / 8 / 8 / 36 |
| CHICKEN PESTO | 1 serving | only in draft B | not found | 1270 / 90 / 29 / 1 / 200 / 2090 / 69 / 3 / 3 / 52 |
| BREAKFAST CARBONARA PASTA* | 1 serving | only in draft B | not found | 950 / 70 / 33 / 0.5 / 410 / 1970 / 39 / 7 / 9 / 40 |
| ROASTED SALMON* | 1 serving | only in draft B | not found | 1330 / 104 / 36 / 1.5 / 210 / 2720 / 47 / 6 / 9 / 54 |
| GRILLED BRANZINO* | 1 serving | only in draft B | not found | 700 / 47 / 21 / 1 / 135 / 2240 / 24 / 7 / 7 / 46 |
| CHICKEN SCARPARIELLO | 1 serving | only in draft B | not found | 1640 / 125 / 48 / 2 / 485 / 3250 / 41 / 5 / 17 / 87 |
| CHICKEN PARMESAN | 1 serving | only in draft B | not found | 2000 / 135 / 72 / 3 / 525 / 3360 / 98 / 5 / 16 / 96 |
| SEARED SEA SCALLOPS | 1 serving | only in draft B | not found | 1000 / 65 / 28 / 1 / 150 / 3130 / 61 / 4 / 7 / 42 |
| BRAISED SHORT RIB MARSALA | 1 serving | only in draft B | not found | 1550 / 108 / 47 / 2.5 / 245 / 2200 / 61 / 7 / 11 / 76 |
| PRIME NEW YORK TAGLIATA* | 1 serving | only in draft B | not found | 1090 / 67 / 22 / 1.5 / 260 / 1680 / 31 / 11 / 18 / 102 |
| CHICKEN PARMIGIANA VERDE | 1 serving | only in draft B | not found | 1490 / 96 / 48 / 2 / 300 / 3210 / 88 / 6 / 16 / 64 |
| CHICKEN SCARPARIELLO lunch | 1 serving | only in draft B | not found | 1480 / 116 / 46 / 2 / 395 / 3000 / 40 / 5 / 17 / 68 |
| SPICY BROCCOLINI | 1 serving | only in draft B | not found | 360 / 26 / 7 / 0 / 20 / 640 / 15 / 8 / 3 / 18 |
| TUSCAN KALE & SPINACH | 1 serving | only in draft B | not found | 150 / 12 / 2.5 / 0 / 0 / 330 / 9 / 3 / 1 / 4 |
| GRILLED ASPARAGUS | 1 serving | only in draft B | not found | 300 / 23 / 4 / 0 / 5 / 740 / 20 / 7 / 10 / 9 |
| ROASTED MUSHROOMS | 1 serving | only in draft B | not found | 790 / 68 / 34 / 1 / 150 / 1120 / 39 / 8 / 18 / 12 |
| GLAZED CHIOGGIA BEETS | 1 serving | only in draft B | not found | 330 / 22 / 10 / 0.5 / 30 / 1510 / 27 / 5 / 18 / 8 |
| SWEET CORN & FONTINA POLENTA | 1 serving | only in draft B | not found | 650 / 53 / 33 / 1.5 / 160 / 840 / 29 / 2 / 6 / 20 |
| SUMMER VEGETABLE RISOTTO | 1 serving | only in draft B | not found | 700 / 23 / 13 / 0.5 / 55 / 600 / 103 / 4 / 5 / 22 |
| CRISPY PARMESAN FRENCH FRIES | 1 serving | only in draft B | not found | 650 / 39 / 10 / 0 / 10 / 1550 / 66 / 6 / 12 / 10 |
| BANANA COFFEE CAKE | 1 serving | only in draft B | not found | 1850 / 123 / 76 / 4.5 / 415 / 1100 / 183 / 5 / 149 / 11 |
| STRAWBERRIES & CREAM FRENCH TOAST | 1 serving | only in draft B | not found | 1660 / 84 / 49 / 2 / 610 / 1010 / 194 / 7 / 114 / 36 |
| AMERICANO* with fried eggs & bacon | 1 serving | only in draft B | not found | 1180 / 84 / 24 / 0 / 440 / 2740 / 68 / 6 / 2 / 43 |
| AMERICANO* with fried eggs & prosciutto | 1 serving | only in draft B | not found | 940 / 58 / 12 / 0 / 385 / 2810 / 68 / 6 / 2 / 41 |
| AMERICANO* with scrambled eggs & bacon | 1 serving | only in draft B | not found | 1160 / 82 / 23 / 0 / 365 / 2710 / 68 / 6 / 2 / 40 |
| AMERICANO* with scrambled eggs & prosciutto | 1 serving | only in draft B | not found | 880 / 53 / 12 / 0 / 305 / 2540 / 68 / 6 / 2 / 35 |
| EGGS IN PURGATORY* | 1 serving | only in draft B | not found | 760 / 46 / 11 / 0 / 390 / 2610 / 59 / 5 / 8 / 29 |
| POLLO FRITTO* | 1 serving | only in draft B | not found | 1220 / 73 / 19 / 0 / 555 / 1650 / 64 / 5 / 3 / 77 |
| TUSCAN HASH* | 1 serving | only in draft B | not found | 1310 / 88 / 20 / 0 / 440 / 1880 / 85 / 9 / 9 / 50 |
| GRILLED CHICKEN HASH* | 1 serving | only in draft B | not found | 1270 / 81 / 15 / 0 / 485 / 2130 / 84 / 9 / 8 / 56 |
| SMOKED SALMON AVOCADO TOAST* | 1 serving | only in draft B | not found | 520 / 36 / 5 / 0 / 15 / 1570 / 40 / 9 / 4 / 18 |
| BISTRO STEAK & EGGS* | 1 serving | only in draft B | not found | 1350 / 99 / 37 / 2 / 630 / 2870 / 65 / 7 / 7 / 57 |
| THE BREAKFAST SANDWICH* | 1 serving | only in draft B | not found | 2330 / 169 / 48 / 1 / 645 / 4730 / 118 / 9 / 28 / 86 |
| MORING MARKET BOARD | 1 serving | only in draft B | not found | 950 / 74 / 35 / 1 / 565 / 2130 / 34 / 3 / 10 / 39 |
| MORING MARKET BOARD with prosciutto | 1 serving | only in draft B | not found | 1060 / 82 / 35 / 1 / 565 / 2880 / 35 / 3 / 10 / 50 |
| ITALIAN DONUTS | 1 serving | only in draft B | not found | 490 / 21 / 9 / 0 / 140 / 260 / 68 / 2 / 45 / 9 |
| APPLEWOOD BACON | 1 serving | only in draft B | not found | 490 / 46 / 16 / 0 / 80 / 930 / 0 / 0 / 0 / 17 |
| CRISPY HASH POTATOES | 1 serving | only in draft B | not found | 420 / 25 / 6 / 0 / 5 / 440 / 38 / 4 / 0 / 10 |
| FRESH FRUIT | 1 serving | only in draft B | not found | 60 / 0.5 / 0 / 0 / 0 / 0 / 15 / 6 / 8 / 1 |
| SALTED CARAMEL BUDINO | 1 serving | only in draft B | not found | 760 / 57 / 33 / 1.5 / 205 / 280 / 58 / 2 / 47 / 7 |
| LEMONCELLO BOMBOLINI | 1 serving | only in draft B | not found | 670 / 31 / 13 / 0.5 / 175 / 320 / 91 / 2 / 60 / 10 |
| BROOKIE GELATO SUNDAE | 1 serving | only in draft B | not found | 1300 / 82 / 51 / 1.5 / 200 / 380 / 129 / 8 / 102 / 16 |
| ITALIAN BUTTER CAKE | 1 serving | only in draft B | not found | 900 / 59 / 35 / 2 / 220 / 320 / 88 / 1 / 69 / 8 |
| SEASONAL BUTTER CAKE | 1 serving | only in draft B | not found | 720 / 29 / 16 / 1 / 130 / 300 / 102 / 2 / 82 / 16 |
| CHOCOLATE HAZELNUT TORTA | 1 serving | only in draft B | not found | 820 / 52 / 13 / 0 / 130 / 260 / 79 / 6 / 66 / 15 |
| TIRAMISU* | 1 serving | only in draft B | not found | 600 / 38 / 24 / 0.5 / 220 / 150 / 49 / 2 / 36 / 9 |
| AFFOGATO | 1 serving | only in draft B | not found | 240 / 13 / 8 / 0 / 35 / 60 / 29 / 1 / 25 / 4 |
| JUMP START | 1 serving | only in draft B | not found | 120 / 3.5 / 2 / 0 / 10 / 30 / 23 / 0 / 20 / 1 |
| CAFFÉ PIAZZA | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 15 / 17 / 0 / 12 / 0 |
| CAPPUCCINO whole milk | 1 serving | only in draft B | not found | 70 / 4 / 2 / 0 / 10 / 60 / 6 / 0 / 5 / 4 |
| CAPPUCCINO nonfat milk | 1 serving | only in draft B | not found | 45 / 0 / 0 / 0 / 0 / 55 / 7 / 0 / 6 / 4 |
| CAPPUCCINO soy milk | 1 serving | only in draft B | not found | 70 / 2 / 0 / 0 / 0 / 65 / 8 / 1 / 4 / 4 |
| CAPPUCCINO almond milk | 1 serving | only in draft B | not found | 35 / 2 / 0 / 0 / 0 / 90 / 4 / 0 / 2 / 1 |
| ESPRESSO | 1 serving | only in draft B | not found | 5 / 0 / 0 / 0 / 10 / 1 / 0 / 0 / 0 / 0 |
| DRIP COFFEE | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| HOT TEA | 1 serving | only in draft B | not found | 0 / 0 / 0 / 0 / 5 / 1 / 0 / 0 / 0 / 0 |
| DIRTY ALMOND CHAI | 1 serving | only in draft B | not found | 250 / 0.5 / 0 / 0 / 0 / 250 / 20 / 1 / 13 / 1 |
| LATTE whole milk | 1 serving | only in draft B | not found | 90 / 4.5 / 2.5 / 0 / 15 / 65 / 8 / 0 / 6 / 4 |
| LATTE nonfat milk | 1 serving | only in draft B | not found | 50 / 0 / 0 / 0 / 5 / 65 / 8 / 0 / 7 / 5 |
| LATTE soy milk | 1 serving | only in draft B | not found | 80 / 2.5 / 0 / 0 / 0 / 80 / 10 / 1 / 5 / 4 |
| LATTE almond milk | 1 serving | only in draft B | not found | 45 / 2.5 / 0 / 0 / 0 / 105 / 4 / 0 / 3 / 1 |
| MACCHIATO whole milk | 1 serving | only in draft B | not found | 20 / 1 / 0 / 0 / 0 / 20 / 2 / 0 / 1 / 1 |
| MACCHIATO nonfat milk | 1 serving | only in draft B | not found | 15 / 0 / 0 / 0 / 0 / 20 / 2 / 0 / 1 / 1 |
| MACCHIATO soy milk | 1 serving | only in draft B | not found | 20 / 0.5 / 0 / 0 / 0 / 20 / 3 / 0 / 1 / 1 |
| MACCHIATO almond milk | 1 serving | only in draft B | not found | 10 / 0.5 / 0 / 0 / 0 / 25 / 2 / 0 / 0 / 0 |
| PROSCIUTTO BRUSCHETTA | 1 serving | only in draft B | not found | 450 / 27 / 9 / 0 / 30 / 1160 / 32 / 3 / 3 / 25 |
| TOMATO BRUSCHETTA | 1 serving | only in draft B | not found | 660 / 51 / 16 / 0 / 50 / 1880 / 43 / 4 / 10 / 16 |
| MARGHERITA PIZZA | 1 serving | only in draft B | not found | 1270 / 55 / 25 / 0 / 110 / 3070 / 141 / 8 / 8 / 52 |
| FARMERS MARKET BOARD | 1 serving | only in draft B | not found | 940 / 63 / 11 / 0 / 15 / 2560 / 87 / 14 / 27 / 18 |
| CHEF'S BOARD | 1 serving | only in draft B | not found | 1360 / 84 / 17 / 0 / 20 / 4780 / 100 / 11 / 21 / 55 |
| RIGATONI with butter | 1 serving | only in draft B | not found | 670 / 44 / 27 / 1.5 / 115 / 160 / 58 / 4 / 1 / 13 |
| RIGATONI with red sauce | 1 serving | only in draft B | not found | 510 / 24 / 14 / 1 / 55 / 430 / 62 / 5 / 3 / 14 |
| RIGATONI with white sauce | 1 serving | only in draft B | not found | 1130 / 79 / 51 / 2.5 / 240 / 1200 / 70 / 4 / 7 / 32 |
| RIGATONI with meat sauce | 1 serving | only in draft B | not found | 480 / 17 / 9 / 0.5 / 45 / 700 / 62 / 5 / 3 / 19 |
| add MEATBALLS | 1 serving | only in draft B | not found | 300 / 21 / 9 / 1 / 110 / 770 / 6 / 1 / 1 / 20 |
| CHEESE PIZZA | 1 serving | only in draft B | not found | 890 / 28 / 14 / 0 / 75 / 2260 / 120 / 7 / 6 / 37 |
| GRILLED CHICKEN with alfredo noodles | 1 serving | only in draft B | not found | 1650 / 115 / 68 / 3.5 / 415 / 1750 / 83 / 5 / 9 / 68 |
| GRILLED CHICKEN with sautéed vegetables | 1 serving | only in draft B | not found | 340 / 15 / 3 / 0 / 120 / 330 / 10 / 4 / 3 / 40 |
| KIDS CHICKEN PARMESAN | 1 serving | only in draft B | not found | 490 / 30 / 12 / 0 / 150 / 940 / 16 / 1 / 3 / 39 |
| KIDS MEATBALL SLIDERS with choice of side | 1 serving | only in draft B | not found | 580 / 29 / 16 / 1 / 90 / 1190 / 61 / 3 / 3 / 20 |
| CRISPY CHICKEN STRIPS with crispy fries | 1 serving | only in draft B | not found | 1030 / 55 / 12 / 0 / 150 / 1820 / 85 / 5 / 18 / 51 |
| GRILLED CHEESE with choice of side | 1 serving | only in draft B | not found | 1100 / 82 / 51 / 1.5 / 295 / 1080 / 63 / 3 / 17 / 31 |
| side CRISPY FRIES | 1 serving | only in draft B | not found | 540 / 31 / 7 / 0 / 0 / 1440 / 63 / 5 / 16 / 5 |
| side GREEN SALAD | 1 serving | only in draft B | not found | 100 / 9 / 1 / 0 / 0 / 240 / 4 / 1 / 2 / 1 |
| COKE | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 5 / 20 / 0 / 19 / 0 |
| DIET COKE | 1 serving | only in draft B | not found | 5 / 0 / 0 / 0 / 0 / 15 / 1 / 0 / 0 / 0 |
| SHIRLY TEMPLE with grenadine | 1 serving | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 35 / 64 / 0 / 50 / 0 |
| SPRITE | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 15 / 18 / 0 / 18 / 0 |
| DR. PEPPER | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 20 / 19 / 0 / 0 / 0 |
| MILK- 2% | 1 serving | only in draft B | not found | 90 / 3.5 / 2 / 0 / 15 / 85 / 8 / 0 / 8 / 6 |
| MILK- CHOCOLATE with whole milk | 1 serving | only in draft B | not found | 250 / 6 / 3.5 / 0 / 20 / 95 / 45 / 2 / 39 / 7 |
| MILK- NONFAT | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 5 / 75 / 9 / 0 / 9 / 6 |
| MILK- WHOLE | 1 serving | only in draft B | not found | 110 / 6 / 3.5 / 0 / 20 / 75 / 8 / 0 / 8 / 6 |
| ORANGE JUICE | 1 serving | only in draft B | not found | 40 / 0 / 0 / 0 / 0 / 5 / 10 / 0 / 8 / 0 |
| DONUT HOLES with chocolate dipping sauce | 1 serving | only in draft B | not found | 480 / 18 / 7 / 0 / 40 / 270 / 76 / 2 / 54 / 7 |
| GELATO- CHOCOLATE | one scoop | only in draft B | not found | 170 / 8 / 4.5 / 0 / 60 / 45 / 24 / 2 / 21 / 4 |
| GELATO- VANILLA | one scoop | only in draft B | not found | 170 / 9 / 6 / 0 / 35 / 50 / 19 / 0 / 19 / 3 |
| AMARO | 2 oz. pour | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 6 / 0 |
| FERNET BRANCA | 2 oz. pour | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| LIMONCELLO / ORANGECELLO | 2 oz. pour | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 17 / 0 |
| RASPBERRY LIMONCELLO | 2 oz. pour | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 16 / 0 / 16 / 0 |
| GRAND MARNIER | 2 oz. pour | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 13 / 0 |
| REMY MARTIN | 2 oz. pour | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| CAFFÉ BORGHETTI | 2 oz. pour | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| PORT | 2 oz. pour | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 5 / 8 / 0 / 5 / 0 |
| JUST PEACHY | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 5 / 36 / 3 / 31 / 1 |
| PINA NO LADA | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 15 / 45 / 0 / 42 / 0 |
| 00SPRITZ | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 6 / 0 |
| LA SPEZIA | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 770 / 21 / 1 / 14 / 1 |
| FAUX ME TWICE | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 28 / 1 / 25 / 0 |
| PHONY NEGRONI | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 10 / 24 / 0 / 24 / 0 |
| SUNSET ALIBIS | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 9 / 0 |
| SUNSET ALIBIS (Idaho & Utah) | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 10 / 0 |
| PARADISO | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 5 / 18 / 18 / 0 / 16 / 0 |
| PARADISO (Idaho) | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 5 / 23 / 23 / 0 / 22 / 0 |
| PARADISO (Utah) | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 5 / 18 / 18 / 0 / 17 / 0 |
| ORANGE BLOSSOM GIMLET | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 11 / 0 |
| ORANGE BLOssom GIMLET (Idaho) | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 14 / 0 / 12 / 0 |
| ORANGE BLOssom GIMLET (Utah) | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 18 / 0 / 16 / 0 |
| LITTLE ITALY | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 7 / 0 / 6 / 0 |
| LITTLE ITALY (Idaho) | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 4 / 0 |
| LITTLE ITALY (Utah) | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 6 / 0 / 5 / 0 |
| NEW ITALIAN SPRITZ | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 10 / 18 / 0 / 18 / 0 |
| LIMONCELLO SBAGLIATO | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 5 / 18 / 0 / 18 / 0 |
| CIAO, BELLA! | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 22 / 0 / 21 / 0 |
| CIAO, BELLA! (Idaho) | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 20 / 0 |
| ROMAN HOLIDAY | 1 serving | only in draft B | not found | 240 / 3.5 / 3 / 0 / 0 / 5 / 19 / 0 / 17 / 0 |
| ROMAN HOLIDAY (Idaho & Utah) | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 19 / 0 |
| ALTA ROSSA | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 20 / 0 / 18 / 0 |

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
