# P.F. Chang's: lines for a person

Guide: https://www.pfchangs.com/docs/default-source/pdf/pfc-national-menu-nutrition-autumn-in-kyoto-2026.pdf?sfvrsn=c1edf3f2_9 (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (70)

Fix each line in `menus/p-f-changs.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| GF Chang's Spicy Chicken | 1 | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1160 / 60 / 12 / 0 / 160 / 1900 / 96 / 4 / 62 / 78 | 550 / 27 / 5 / 0 / 55 / 990 / 34 / 1 / 32 / 25 |
| GF Mongolian Beef | 1 | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 740 / 40 / 12 / 0 / 120 / 1960 / 28 / 2 / 24 / 66 | 350 / 17 / 5 / 0 / 35 / 1110 / 23 / 1 / 18 / 26 |
| GF Beef with Broccoli | 1 | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 680 / 32 / 9 / 0 / 90 / 2000 / 42 / 6 / 32 / 56 | 380 / 19 / 4 / 0 / 55 / 1040 / 31 / 3 / 24 / 22 |
| Hot & Sour Soup Cup | 1 | only in draft B | not found | 70 / 2 / 0 / 0 / 30 / 580 / 9 / 0 / 1 / 4 |
| Egg Drop Soup Cup | 1 | only in draft B | not found | 40 / 1 / 0 / 0 / 30 / 560 / 6 / 0 / 2 / 1 |
| Mongolian Beef | 1 | only in draft B | not found | 510 / 24 / 7 / 0 / 45 / 2080 / 38 / 1 / 30 / 36 |
| Beef with Broccoli | 1 | only in draft B | not found | 260 / 11 / 3 / 0 / 20 / 1030 / 23 / 2 / 16 / 19 |
| Teriyaki Beef | 1 | only in draft B | not found | 720 / 25 / 6 / 0 / 35 / 2360 / 98 / 2 / 71 / 28 |
| Pepper Steak | 1 | only in draft B | not found | 400 / 19 / 6 / 0 / 35 / 2020 / 28 / 3 / 16 / 28 |
| Sesame Beef | 1 | only in draft B | not found | 650 / 23 / 6 / 0 / 35 / 2070 / 78 / 5 / 49 / 32 |
| Kung Pao Beef | 1 | only in draft B | not found | 770 / 47 / 9 / 0 / 35 / 2190 / 50 / 7 / 23 / 42 |
| Chang's Spicy Chicken | 1 | only in draft B | not found | 800 / 35 / 7 / 0 / 75 / 1590 / 66 / 2 / 61 / 33 |
| Crispy Honey Chicken | 1 | only in draft B | not found | 1180 / 68 / 11 / 0 / 40 / 700 / 100 / 5 / 41 / 36 |
| Sesame Chicken | 1 | only in draft B | not found | 860 / 41 / 8 / 0 / 75 / 1980 / 60 / 5 / 49 / 39 |
| Orange Chicken | 1 | only in draft B | not found | 1060 / 60 / 10 / 0 / 40 / 1100 / 97 / 6 / 48 / 35 |
| Sweet & Sour Chicken | 1 | only in draft B | not found | 730 / 34 / 5 / 0 / 80 / 480 / 83 / 3 / 45 / 24 |
| Teriyaki Chicken | 1 | only in draft B | not found | 850 / 37 / 7 / 0 / 65 / 2230 / 82 / 2 / 71 / 31 |
| Kung Pao Chicken | 1 | only in draft B | not found | 850 / 57 / 9 / 0 / 55 / 1820 / 31 / 7 / 20 / 41 |
| Black Pepper Chicken | 1 | only in draft B | not found | 760 / 39 / 7 / 0 / 95 / 2110 / 77 / 6 / 40 / 24 |
| Firecracker Shrimp | 1 | only in draft B | not found | 530 / 32 / 14 / 1 / 275 / 2300 / 28 / 6 / 18 / 35 |
| Crispy Honey Shrimp | 1 | only in draft B | not found | 980 / 64 / 11 / 0 / 95 / 1760 / 71 / 5 / 38 / 24 |
| Kung Pao Shrimp | 1 | only in draft B | not found | 680 / 48 / 7 / 0 / 70 / 2260 / 40 / 7 / 20 / 29 |
| Stir-Fried Eggplant | 1 | only in draft B | not found | 400 / 25 / 4 / 0.5 / 0 / 1710 / 43 / 6 / 27 / 3 |
| Buddha's Feast | 1 | only in draft B | not found | 400 / 23 / 4 / 1 / 0 / 1390 / 35 / 9 / 13 / 13 |
| Ma Po Tofu | 1 | only in draft B | not found | 730 / 42 / 6 / 0 / 0 / 2760 / 58 / 12 / 30 / 40 |
| Mongolian Trio | 1 | only in draft B | not found | 700 / 31 / 7 / 0 / 70 / 3090 / 62 / 3 / 49 / 33 |
| Teriyaki Trio | 1 | only in draft B | not found | 930 / 36 / 7 / 0 / 70 / 3190 / 111 / 3 / 92 / 34 |
| NY Prime Strip Steak Takaki* | 1 | only in draft B | not found | 970 / 70 / 28 / 0.5 / 165 / 1820 / 42 / 3 / 32 / 39 |
| Black Pepper Fillet* | 1 | only in draft B | not found | 1240 / 74 / 13 / 1 / 100 / 2850 / 99 / 12 / 68 / 46 |
| Miso Glazed Salmon* | 1 | only in draft B | not found | 680 / 38 / 6 / 0 / 150 / 1200 / 32 / 4 / 20 / 52 |
| Oolong Chilean Seabass* | 1 | only in draft B | not found | 900 / 61 / 10 / 0.5 / 85 / 1370 / 56 / 13 / 27 / 39 |
| Salt & Pepper Prawns | 1 | only in draft B | not found | 660 / 46 / 14 / 0 / 170 / 2460 / 38 / 4 / 12 / 28 |
| Pad Thai | 1 | only in draft B | not found | 1320 / 46 / 9 / 0 / 370 / 3000 / 194 / 6 / 54 / 36 |
| Chicken Pad Thai | 1 | only in draft B | not found | 1480 / 50 / 10 / 0 / 430 / 3220 / 194 / 6 / 54 / 64 |
| Tofu Pad Thai | 1 | only in draft B | not found | 1680 / 76 / 14 / 3 / 370 / 3020 / 206 / 8 / 54 / 44 |
| Beef Pad Thai | 1 | only in draft B | not found | 1520 / 58 / 12 / 0 / 400 / 3340 / 196 / 6 / 54 / 56 |
| Shrimp Pad Thai | 1 | only in draft B | not found | 1440 / 50 / 10 / 0 / 510 / 4060 / 194 / 6 / 54 / 56 |
| Fried Rice with Vegetables | 1 | only in draft B | not found | 900 / 16 / 3 / 0 / 190 / 1540 / 162 / 8 / 22 / 24 |
| Fried Rice with Beef | 1 | only in draft B | not found | 1040 / 26 / 7 / 0 / 220 / 1840 / 154 / 4 / 18 / 42 |
| Fried Rice with Chicken | 1 | only in draft B | not found | 1020 / 20 / 4 / 0 / 250 / 1760 / 152 / 4 / 18 / 54 |
| Fried Rice with Shrimp | 1 | only in draft B | not found | 920 / 16 / 3 / 0 / 300 / 2140 / 152 / 4 / 18 / 34 |
| Fried Rice with Tofu | 1 | only in draft B | not found | 1200 / 44 / 9 / 2 / 190 / 1540 / 164 / 6 / 18 / 30 |
| Duck Fried Rice | 1 | only in draft B | not found | 1660 / 90 / 29 / 1.5 / 580 / 3290 / 155 / 8 / 30 / 53 |
| Lobster & Prawn Fried Rice | 1 | only in draft B | not found | 1280 / 74 / 28 / 2 / 505 / 2480 / 106 / 5 / 15 / 48 |
| Longlife Noodles & Prawns | 1 | only in draft B | not found | 1270 / 59 / 19 / 1 / 335 / 5290 / 131 / 7 / 39 / 56 |
| Singapore Street Noodles | 1 | only in draft B | not found | 1220 / 14 / 3 / 0 / 100 / 2920 / 224 / 6 / 22 / 52 |
| Lo Mein Vegetables | 1 | only in draft B | not found | 720 / 14 / 2 / 0 / 0 / 3100 / 126 / 10 / 28 / 22 |
| Lo Mein Beef | 1 | only in draft B | not found | 860 / 26 / 6 / 0 / 30 / 3380 / 118 / 6 / 24 / 40 |
| Lo Mein Chicken | 1 | only in draft B | not found | 860 / 22 / 4 / 0 / 70 / 3260 / 120 / 8 / 24 / 44 |
| Lo Mein Shrimp | 1 | only in draft B | not found | 780 / 18 / 3 / 0 / 140 / 4120 / 116 / 6 / 24 / 38 |
| Lo Mein Tofu | 1 | only in draft B | not found | 1000 / 44 / 8 / 2 / 0 / 3080 / 128 / 8 / 24 / 28 |
| Chicken - steamed | 1 | only in draft B | not found | 100 / 3 / 0 / 0 / 40 / 100 / 0 / 0 / 0 / 18 |
| Chicken - wok fried | 1 | only in draft B | not found | 120 / 6 / 0 / 0 / 40 / 120 / 2 / 0 / 0 / 16 |
| Chicken - wok fried w/ starch | 1 | only in draft B | not found | 200 / 12 / 2 / 0 / 30 / 110 / 0 / 0 / 0 / 12 |
| Chicken - Crispy | 1 | only in draft B | not found | 240 / 14 / 2 / 0 / 20 / 110 / 16 / 2 / 0 / 12 |
| Tofu | 1 | only in draft B | not found | 120 / 11 / 1.5 / 0 / 0 / 25 / 2 / 0 / 0 / 5 |
| Beef - wok fried | 1 | only in draft B | not found | 120 / 7 / 2 / 0 / 20 / 190 / 2 / 0 / 0 / 12 |
| Beef - wok fried w/ starch | 1 | only in draft B | not found | 140 / 7 / 2 / 0 / 20 / 190 / 6 / 0 / 0 / 12 |
| Shrimp - Steamed | 1 | only in draft B | not found | 40 / 0 / 0 / 0 / 70 / 380 / 0 / 0 / 0 / 8 |
| Shrimp - wok fried | 1 | only in draft B | not found | 80 / 3 / 0 / 0 / 90 / 560 / 0 / 0 / 0 / 12 |
| Shrimp - wok fried w/ starch | 1 | only in draft B | not found | 120 / 8 / 2 / 0 / 40 / 300 / 4 / 0 / 0 / 6 |
| Beef & Broccoli | 1 | only in draft B | not found | 390 / 17 / 5 / 0 / 30 / 1600 / 34 / 3 / 24 / 26 |
| Fried Rice | 1 | only in draft B | not found | 500 / 15 / 3 / 0 / 185 / 800 / 76 / 2 / 9 / 13 |
| Lo Mein Noodles | 1 | only in draft B | not found | 560 / 12 / 2 / 0 / 0 / 2280 / 97 / 3 / 12 / 15 |
| White Rice | 8oz | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 0 / 65 / 1 / 1 / 5 |
| Brown Rice | 8oz | only in draft B | not found | 250 / 2 / 0 / 0 / 0 / 0 / 53 / 4 / 0 / 5 |
| GF White Rice | 8oz | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 0 / 65 / 1 / 1 / 5 |
| GF Brown Rice | 8oz | only in draft B | not found | 250 / 2 / 0 / 0 / 0 / 0 / 53 / 4 / 0 / 5 |
| GF Fried Rice | 8oz | only in draft B | not found | 420 / 15 / 3 / 0 / 185 / 520 / 58 / 2 / 7 / 11 |
| Kids Soda | 1 | only in draft B | not found | – / 0 / – / 0 / 0 / – / – / 0 / – / 0 |

## Spot check (6 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Japanese Philly Roll* | 1 serving | 950 / 58 / 13 / 0.5 / 50 / 1030 / 87 / 6 / 13 / 19 |
| Pork Dumplings Steamed | 3 ct half order | 240 / 10.5 / 3 / 0 / 30 / 780 / 24 / 0 / 6 / 9 |
| Spicy Tuna Hand Roll* | 1 ct | 110 / 6 / 1 / 0 / 10 / 310 / 9 / 2 / 3 / 5 |
| Spicy Tuna Crispy Rice* | 1 serving | 570 / 33 / 5 / 0 / 20 / 1080 / 53 / 6 / 15 / 17 |
| California Roll* | 1 serving | 400 / 14 / 2 / 0 / 20 / 1200 / 60 / 4 / 19 / 11 |
| Hong Kong Beef | 1 serving | 350 / 17 / 4.5 / 0 / 30 / 1750 / 26 / 3 / 13 / 24 |
