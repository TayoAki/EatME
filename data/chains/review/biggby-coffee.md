# Biggby Coffee: lines for a person

Guide: https://biggby.com/wp-content/uploads/2026/02/BIGGBY_Nutrition_February_2026.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (114)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/biggby-coffee.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| Rainbow Rooibos Tea Latte, Hot | 20oz | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, sugars_g, protein_g | 300 / 8 / 5 / 0 / 35 / 190 / 43 / 0 / 43 / 13 | 360 / 9 / 6 / 0 / 40 / 230 / 52 / 0 / 52 / 16 | A: not as drafted (line 2594 lacks 300, 8, 5, 35, 190, 43, 43, 13); B: numbers found after the name (line 2721); check the size |
| Rainbow Rooibos Tea Latte, Hot | 24oz | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, sugars_g, protein_g | 360 / 9 / 6 / 0 / 40 / 230 / 52 / 0 / 52 / 16 | 160 / 3.5 / 2.5 / 0 / 15 / 95 / 26 / 0 / 26 / 6 | A: numbers found after the name (line 2721); check the size; B: numbers found after the name (line 2722); check the size |
| Rainbow Rooibos Tea Latte, Iced | 16oz | differ: calories, fat_g, saturated_fat_g, cholesterol_mg, sodium_mg, carbs_g, sugars_g, protein_g | 160 / 3.5 / 2.5 / 0 / 15 / 95 / 26 / 0 / 26 / 6 | 210 / 4.5 / 3 / 0 / 20 / 120 / 35 / 0 / 35 / 8 | A: not as drafted (line 2724 lacks 160, 2.5, 15, 95, 26, 26, 6); B: numbers found after the name (line 2723); check the size |
| Rainbow Rooibos Tea Latte, Iced | 20oz | differ: calories, fat_g, saturated_fat_g, sodium_mg, carbs_g, sugars_g, protein_g | 210 / 4.5 / 3 / 0 / 20 / 120 / 35 / 0 / 35 / 8 | 250 / 5 / 3.5 / 0 / 20 / 140 / 42 / 0 / 42 / 9 | A: numbers found after the name (line 2723); check the size; B: numbers found after the name (line 2724); check the size |
| Rainbow Rooibos Tea Latte, Iced | 24oz | only in draft A | 250 / 5 / 3.5 / 0 / 20 / 140 / 42 / 0 / 42 / 9 | not found | A: numbers found after the name (line 2724); check the size |
| Tropic Biggby Blast® | Iced, 24oz | only in draft A | 240 / 0 / 0 / 0 / 0 / 40 / 58 / 1 / 50 / 0 | not found | A: not as drafted (line 3177 lacks 40) |
| Frozen Lemonade | 20oz | differ: calories, fat_g, saturated_fat_g, sodium_mg, carbs_g, sugars_g, protein_g | 420 / 5 / 5 / 0 / 0 / 200 / 90 / 0 / 76 / 2 | 510 / 6 / 6 / 0 / 0 / 240 / 111 / 0 / 94 / 3 | A: not as drafted (line 3227 lacks 420, 5, 5, 200, 90, 76); B: numbers found after the name (line 3237); check the size |
| Frozen Lemonade | 24oz | differ: calories, fat_g, saturated_fat_g, sodium_mg, carbs_g, sugars_g, protein_g | 510 / 6 / 6 / 0 / 0 / 240 / 111 / 0 / 94 / 3 | 150 / 0 / 0 / 0 / 0 / 15 / 38 / 0 / 37 / 0 | A: numbers found after the name (line 3237); check the size; B: numbers found after the name (line 3238); check the size |
| Lemonade | 24oz | differ: calories, sugars_g | 150 / 0 / 0 / 0 / 0 / 15 / 38 / 0 / 37 / 0 | 140 / 0 / 0 / 0 / 0 / 15 / 38 / 0 / 36 / 0 | A: numbers found after the name (line 3238); check the size; B: numbers found after the name (line 3241); check the size |
| HALAL Beef Sausage, Egg, & Cheese Bragel® | 1 serving | both read numbers that can't be right: saturated and trans fat above fat | 610 / 26 / 52 / 0 / 175 / 1110 / 62 / 2 / 6 / 28 | 610 / 26 / 52 / 0 / 175 / 1110 / 62 / 2 / 6 / 28 | A: numbers found after the name (line 3273); check the size; B: numbers found after the name (line 3273); check the size |
| Black Bear Latte, Frozen | 16oz | only in draft B | not found | 500 / 14 / 10 / 0 / 30 / 240 / 90 / 1 / 75 / 2 | B: numbers found after the name (line 249); check the size |
| Black Bear Latte, Frozen | 20oz | only in draft B | not found | 570 / 15 / 12 / 0 / 35 / 280 / 103 / 1 / 85 / 3 | B: numbers found after the name (line 250); check the size |
| Black Bear Latte, Frozen | 24oz | only in draft B | not found | 710 / 18 / 14 / 0 / 40 / 360 / 133 / 1 / 111 / 4 | B: numbers found after the name (line 251); check the size |
| Black Bear Latte, Hot | 16oz | only in draft B | not found | 380 / 11 / 7 / 0 / 35 / 240 / 64 / 1 / 57 / 8 | B: numbers found after the name (line 252); check the size |
| Black Bear Latte, Hot | 20oz | only in draft B | not found | 440 / 12 / 8 / 0 / 40 / 290 / 77 / 1 / 68 / 10 | B: numbers found after the name (line 253); check the size |
| Black Bear Latte, Hot | 24oz | only in draft B | not found | 520 / 14 / 9 / 0 / 50 / 340 / 90 / 1 / 80 / 12 | B: numbers found after the name (line 254); check the size |
| Black Bear Latte, Iced | 16oz | only in draft B | not found | 400 / 13 / 9 / 0 / 45 / 220 / 64 / 1 / 57 / 7 | B: numbers found after the name (line 255); check the size |
| Black Bear Latte, Iced | 20oz | only in draft B | not found | 490 / 16 / 10 / 0 / 55 / 280 / 79 / 1 / 70 / 10 | B: numbers found after the name (line 256); check the size |
| Black Bear Latte, Iced | 24oz | only in draft B | not found | 560 / 18 / 12 / 0 / 60 / 330 / 91 / 1 / 81 / 11 | B: numbers found after the name (line 257); check the size |
| Mint Mocha Latte, Frozen | 16oz | only in draft B | not found | 480 / 13 / 10 / 0 / 30 / 190 / 86 / 1 / 75 / 3 | B: numbers found after the name (line 258); check the size |
| Mint Mocha Latte, Frozen | 20oz | only in draft B | not found | 550 / 15 / 11 / 0 / 30 / 230 / 99 / 1 / 85 / 3 | B: numbers found after the name (line 259); check the size |
| Mint Mocha Latte, Frozen | 24oz | only in draft B | not found | 700 / 17 / 13 / 0 / 35 / 280 / 129 / 2 / 112 / 4 | B: numbers found after the name (line 260); check the size |
| Mint Mocha Latte, Hot | 16oz | only in draft B | not found | 360 / 10 / 6 / 0 / 35 / 160 / 60 / 1 / 58 / 9 | B: numbers found after the name (line 261); check the size |
| Mint Mocha Latte, Hot | 20oz | only in draft B | not found | 430 / 11 / 7 / 0 / 40 / 190 / 72 / 2 / 70 / 10 | B: numbers found after the name (line 262); check the size |
| Mint Mocha Latte, Hot | 24oz | only in draft B | not found | 500 / 13 / 8 / 0 / 45 / 230 / 85 / 2 / 82 / 12 | B: numbers found after the name (line 263); check the size |
| Mint Mocha Latte, Iced | 16oz | only in draft B | not found | 390 / 12 / 8 / 0 / 45 / 140 / 60 / 1 / 58 / 7 | B: numbers found after the name (line 264); check the size |
| Mint Mocha Latte, Iced | 20oz | only in draft B | not found | 470 / 15 / 10 / 0 / 50 / 190 / 74 / 2 / 72 / 10 | B: numbers found after the name (line 265); check the size |
| Mint Mocha Latte, Iced | 24oz | only in draft B | not found | 550 / 17 / 11 / 0 / 60 / 210 / 86 / 2 / 83 / 11 | B: numbers found after the name (line 266); check the size |
| Mocha Caramel Latte, Frozen | 16oz | only in draft B | not found | 500 / 14 / 11 / 0 / 30 / 240 / 91 / 1 / 74 / 3 | B: numbers found after the name (line 267); check the size |
| Mocha Caramel Latte, Frozen | 20oz | only in draft B | not found | 570 / 15 / 12 / 0 / 35 / 270 / 104 / 1 / 85 / 3 | B: numbers found after the name (line 436); check the size |
| Mocha Caramel Latte, Frozen | 24oz | only in draft B | not found | 710 / 18 / 14 / 0 / 40 / 350 / 131 / 1 / 107 / 4 | B: numbers found after the name (line 437); check the size |
| Mocha Caramel Latte, Hot | 16oz | only in draft B | not found | 370 / 11 / 7 / 0 / 35 / 220 / 62 / 1 / 54 / 8 | B: numbers found after the name (line 438); check the size |
| Mocha Caramel Latte, Hot | 20oz | only in draft B | not found | 450 / 12 / 8 / 0 / 45 / 280 / 79 / 1 / 68 / 10 | B: numbers found after the name (line 439); check the size |
| Mocha Caramel Latte, Hot | 24oz | only in draft B | not found | 550 / 15 / 9 / 0 / 50 / 340 / 96 / 1 / 82 / 12 | B: numbers found after the name (line 440); check the size |
| Mocha Caramel Latte, Iced | 16oz | only in draft B | not found | 400 / 14 / 9 / 0 / 45 / 200 / 62 / 1 / 54 / 7 | B: numbers found after the name (line 441); check the size |
| Mocha Caramel Latte, Iced | 20oz | only in draft B | not found | 500 / 16 / 11 / 0 / 55 / 280 / 81 / 1 / 70 / 10 | B: numbers found after the name (line 442); check the size |
| Mocha Caramel Latte, Iced | 24oz | only in draft B | not found | 590 / 18 / 12 / 0 / 65 / 330 / 97 / 1 / 83 / 11 | B: numbers found after the name (line 443); check the size |
| Avalanche Latte, Frozen | 16oz | only in draft B | not found | 500 / 13 / 10 / 0 / 30 / 210 / 88 / 1 / 74 / 3 | B: numbers found after the name (line 444); check the size |
| Avalanche Latte, Frozen | 20oz | only in draft B | not found | 560 / 15 / 11 / 0 / 30 / 250 / 101 / 1 / 85 / 3 | B: numbers found after the name (line 445); check the size |
| Avalanche Latte, Frozen | 24oz | only in draft B | not found | 700 / 17 / 13 / 0 / 35 / 320 / 128 / 1 / 107 / 4 | B: numbers found after the name (line 446); check the size |
| Avalanche Latte, Hot | 16oz | only in draft B | not found | 370 / 10 / 6 / 0 / 35 / 190 / 62 / 1 / 56 / 9 | B: numbers found after the name (line 447); check the size |
| Avalanche Latte, Hot | 20oz | only in draft B | not found | 440 / 11 / 7 / 0 / 40 / 230 / 74 / 1 / 68 / 11 | B: numbers found after the name (line 448); check the size |
| Avalanche Latte, Hot | 24oz | only in draft B | not found | 520 / 13 / 8 / 0 / 45 / 270 / 87 / 1 / 79 / 13 | B: numbers found after the name (line 449); check the size |
| Avalanche Latte, Iced | 16oz | only in draft B | not found | 400 / 12 / 8 / 0 / 45 / 170 / 62 / 1 / 56 / 7 | B: numbers found after the name (line 450); check the size |
| Avalanche Latte, Iced | 20oz | only in draft B | not found | 710 / 15 / 10 / 0 / 50 / 310 / 133 / 3 / 123 / 12 | B: numbers found after the name (line 451); check the size |
| Avalanche Latte, Iced | 24oz | only in draft B | not found | 560 / 17 / 11 / 0 / 60 / 260 / 88 / 1 / 80 / 12 | B: numbers found after the name (line 452); check the size |
| German Mocha Latte, Frozen | 16oz | only in draft B | not found | 550 / 14 / 11 / 0 / 30 / 240 / 102 / 1 / 86 / 3 | B: numbers found after the name (line 453); check the size |
| German Mocha Latte, Frozen | 20oz | only in draft B | not found | 620 / 15 / 12 / 0 / 35 / 270 / 115 / 1 / 97 / 3 | B: numbers found after the name (line 454); check the size |
| German Mocha Latte, Frozen | 24oz | only in draft B | not found | 780 / 18 / 14 / 0 / 40 / 350 / 149 / 1 / 125 / 4 | B: numbers found after the name (line 455); check the size |
| German Mocha Latte, Hot | 16oz | only in draft B | not found | 360 / 10 / 7 / 0 / 35 / 180 / 59 / 0 / 54 / 8 | B: numbers found after the name (line 456); check the size |
| German Mocha Latte, Hot | 20oz | only in draft B | not found | 440 / 11 / 7 / 0 / 40 / 220 / 74 / 1 / 68 / 10 | B: numbers found after the name (line 457); check the size |
| German Mocha Latte, Hot | 24oz | only in draft B | not found | 520 / 14 / 9 / 0 / 50 / 260 / 90 / 1 / 83 / 12 | B: numbers found after the name (line 458); check the size |
| German Mocha Latte, Iced | 16oz | only in draft B | not found | 380 / 13 / 9 / 0 / 45 / 160 / 59 / 0 / 54 / 6 | B: numbers found after the name (line 459); check the size |
| German Mocha Latte, Iced | 20oz | only in draft B | not found | 480 / 15 / 10 / 0 / 55 / 220 / 76 / 1 / 70 / 9 | B: numbers found after the name (line 460); check the size |
| German Mocha Latte, Iced | 24oz | only in draft B | not found | 570 / 17 / 11 / 0 / 60 / 250 / 91 / 1 / 84 / 10 | B: numbers found after the name (line 625); check the size |
| Spotted Owl Latte, Frozen | 16oz | only in draft B | not found | 480 / 13 / 10 / 0 / 30 / 220 / 85 / 0 / 71 / 3 | B: numbers found after the name (line 626); check the size |
| Spotted Owl Latte, Frozen | 20oz | only in draft B | not found | 550 / 14 / 11 / 0 / 30 / 260 / 98 / 0 / 81 / 3 | B: numbers found after the name (line 627); check the size |
| Spotted Owl Latte, Frozen | 24oz | only in draft B | not found | 680 / 17 / 13 / 0 / 35 / 330 / 124 / 0 / 103 / 4 | B: numbers found after the name (line 628); check the size |
| Spotted Owl Latte, Hot | 16oz | only in draft B | not found | 350 / 9 / 6 / 0 / 35 / 200 / 55 / 0 / 50 / 9 | B: numbers found after the name (line 629); check the size |
| Spotted Owl Latte, Hot | 20oz | only in draft B | not found | 420 / 10 / 7 / 0 / 40 / 260 / 70 / 0 / 63 / 11 | B: numbers found after the name (line 630); check the size |
| Spotted Owl Latte, Hot | 24oz | only in draft B | not found | 510 / 12 / 8 / 0 / 45 / 300 / 85 / 0 / 76 / 13 | B: numbers found after the name (line 631); check the size |
| Spotted Owl Latte, Iced | 16oz | only in draft B | not found | 370 / 12 / 8 / 0 / 45 / 180 / 55 / 0 / 50 / 7 | B: numbers found after the name (line 632); check the size |
| Spotted Owl Latte, Iced | 20oz | only in draft B | not found | 470 / 14 / 9 / 0 / 50 / 250 / 72 / 0 / 65 / 10 | B: numbers found after the name (line 633); check the size |
| Spotted Owl Latte, Iced | 24oz | only in draft B | not found | 550 / 16 / 10 / 0 / 60 / 290 / 86 / 0 / 78 / 11 | B: numbers found after the name (line 634); check the size |
| Golden Honey Latte, Frozen | 16oz | only in draft B | not found | 340 / 4 / 4 / 0 / 0 / 160 / 74 / 0 / 64 / 2 | B: numbers found after the name (line 635); check the size |
| Golden Honey Latte, Frozen | 20oz | only in draft B | not found | 460 / 5 / 5 / 0 / 0 / 200 / 100 / 0 / 81 / 2 | B: numbers found after the name (line 636); check the size |
| Golden Honey Latte, Frozen | 24oz | only in draft B | not found | 600 / 6 / 6 / 0 / 0 / 240 / 131 / 0 / 107 / 3 | B: numbers found after the name (line 637); check the size |
| Golden Honey Latte, Hot | 16oz | only in draft B | not found | 250 / 6 / 3.5 / 0 / 25 / 135 / 41 / 0 / 37 / 9 | B: numbers found after the name (line 638); check the size |
| Golden Honey Latte, Hot | 20oz | only in draft B | not found | 330 / 7 / 4.5 / 0 / 30 / 180 / 54 / 0 / 48 / 12 | B: numbers found after the name (line 639); check the size |
| Golden Honey Latte, Hot | 24oz | only in draft B | not found | 400 / 8 / 5 / 0 / 35 / 200 / 66 / 0 / 59 / 14 | B: numbers found after the name (line 640); check the size |
| Golden Honey Latte, Iced | 16oz | only in draft B | not found | 230 / 4.5 / 3 / 0 / 20 / 115 / 39 / 0 / 34 / 8 | B: numbers found after the name (line 641); check the size |
| Golden Honey Latte, Iced | 20oz | only in draft B | not found | 300 / 6 / 4 / 0 / 25 / 150 / 51 / 0 / 45 / 10 | B: numbers found after the name (line 642); check the size |
| Golden Honey Latte, Iced | 24oz | only in draft B | not found | 360 / 7 / 4.5 / 0 / 30 / 170 / 63 / 0 / 55 / 12 | B: numbers found after the name (line 643); check the size |
| Honey Cinnamon Vanilla Latte, Frozen | 16oz | only in draft B | not found | 350 / 4.5 / 4 / 0 / 0 / 160 / 77 / 0 / 66 / 2 | B: numbers found after the name (line 644); check the size |
| Honey Cinnamon Vanilla Latte, Frozen | 20oz | only in draft B | not found | 410 / 5 / 5 / 0 / 0 / 190 / 89 / 0 / 76 / 2 | B: numbers found after the name (line 645); check the size |
| Honey Cinnamon Vanilla Latte, Frozen | 24oz | only in draft B | not found | 530 / 6 / 6 / 0 / 0 / 230 / 115 / 0 / 99 / 3 | B: numbers found after the name (line 646); check the size |
| Honey Cinnamon Vanilla Latte, Hot | 16oz | only in draft B | not found | 220 / 6 / 3.5 / 0 / 25 / 135 / 33 / 0 / 33 / 9 | B: numbers found after the name (line 647); check the size |
| Honey Cinnamon Vanilla Latte, Hot | 20oz | only in draft B | not found | 280 / 7 / 4.5 / 0 / 30 / 170 / 44 / 0 / 43 / 12 | B: numbers found after the name (line 648); check the size |
| Honey Cinnamon Vanilla Latte, Hot | 24oz | only in draft B | not found | 340 / 8 / 5 / 0 / 35 / 200 / 53 / 0 / 52 / 14 | B: numbers found after the name (line 649); check the size |
| Honey Cinnamon Vanilla Latte, Iced | 16oz | only in draft B | not found | 190 / 4.5 / 3 / 0 / 20 / 115 / 31 / 0 / 30 / 8 | B: numbers found after the name (line 772); check the size |
| Honey Cinnamon Vanilla Latte, Iced | 20oz | only in draft B | not found | 250 / 6 / 4 / 0 / 25 / 150 / 41 / 0 / 40 / 10 | B: numbers found after the name (line 773); check the size |
| Honey Cinnamon Vanilla Latte, Iced | 24oz | only in draft B | not found | 300 / 7 / 4.5 / 0 / 30 / 170 / 49 / 0 / 48 / 12 | B: numbers found after the name (line 774); check the size |
| Black Forest Latte, Frozen | 16oz | only in draft B | not found | 500 / 14 / 10 / 0 / 30 / 220 / 90 / 1 / 75 / 2 | B: numbers found after the name (line 775); check the size |
| Black Forest Latte, Frozen | 20oz | only in draft B | not found | 570 / 15 / 12 / 0 / 35 / 260 / 103 / 1 / 85 / 3 | B: numbers found after the name (line 776); check the size |
| Black Forest Latte, Frozen | 24oz | only in draft B | not found | 710 / 18 / 14 / 0 / 40 / 330 / 133 / 1 / 110 / 4 | B: numbers found after the name (line 777); check the size |
| Black Forest Latte, Hot | 16oz | only in draft B | not found | 380 / 11 / 7 / 0 / 35 / 210 / 64 / 1 / 57 / 8 | B: numbers found after the name (line 778); check the size |
| Black Forest Latte, Hot | 20oz | only in draft B | not found | 440 / 12 / 8 / 0 / 40 / 250 / 77 / 1 / 68 / 10 | B: numbers found after the name (line 779); check the size |
| Black Forest Latte, Hot | 24oz | only in draft B | not found | 520 / 14 / 9 / 0 / 50 / 290 / 89 / 1 / 79 / 12 | B: numbers found after the name (line 780); check the size |
| Black Forest Latte, Iced | 16oz | only in draft B | not found | 400 / 13 / 9 / 0 / 45 / 190 / 64 / 1 / 57 / 7 | B: numbers found after the name (line 781); check the size |
| Black Forest Latte, Iced | 20oz | only in draft B | not found | 490 / 16 / 10 / 0 / 55 / 250 / 78 / 1 / 70 / 10 | B: numbers found after the name (line 782); check the size |
| Black Forest Latte, Iced | 24oz | only in draft B | not found | 560 / 18 / 12 / 0 / 60 / 280 / 91 / 1 / 81 / 11 | B: numbers found after the name (line 783); check the size |
| Cinnabuzz Latte, Frozen | 16oz | only in draft B | not found | 490 / 13 / 10 / 0 / 30 / 250 / 86 / 0 / 71 / 3 | B: numbers found after the name (line 784); check the size |
| Cinnabuzz Latte, Frozen | 20oz | only in draft B | not found | 560 / 14 / 11 / 0 / 30 / 280 / 99 / 0 / 81 / 3 | B: numbers found after the name (line 785); check the size |
| Cinnabuzz Latte, Frozen | 24oz | only in draft B | not found | 700 / 17 / 13 / 0 / 35 / 370 / 129 / 0 / 105 / 5 | B: numbers found after the name (line 786); check the size |
| Cinnabuzz Latte, Hot | 16oz | only in draft B | not found | 370 / 9 / 6 / 0 / 35 / 250 / 60 / 0 / 51 / 9 | B: numbers found after the name (line 787); check the size |
| Cinnabuzz Latte, Hot | 20oz | only in draft B | not found | 440 / 10 / 7 / 0 / 40 / 300 / 73 / 0 / 62 / 11 | B: numbers found after the name (line 788); check the size |
| Cinnabuzz Latte, Hot | 24oz | only in draft B | not found | 510 / 12 / 8 / 0 / 45 / 350 / 85 / 0 / 73 / 13 | B: numbers found after the name (line 789); check the size |
| Cinnabuzz Latte, Iced | 16oz | only in draft B | not found | 390 / 12 / 8 / 0 / 45 / 230 / 60 / 0 / 51 / 7 | B: numbers found after the name (line 790); check the size |
| Cinnabuzz Latte, Iced | 20oz | only in draft B | not found | 480 / 14 / 9 / 0 / 50 / 300 / 75 / 0 / 64 / 11 | B: numbers found after the name (line 791); check the size |
| Cinnabuzz Latte, Iced | 24oz | only in draft B | not found | 560 / 16 / 11 / 0 / 60 / 340 / 87 / 0 / 74 / 12 | B: numbers found after the name (line 792); check the size |
| Coconut Creme Latte, Frozen | 16oz | only in draft B | not found | 350 / 4.5 / 4 / 0 / 0 / 160 / 75 / 0 / 65 / 2 | B: numbers found after the name (line 793); check the size |
| Coconut Creme Latte, Frozen | 20oz | only in draft B | not found | 410 / 5 / 5 / 0 / 0 / 200 / 88 / 0 / 75 / 2 | B: numbers found after the name (line 794); check the size |
| Coconut Creme Latte, Frozen | 24oz | only in draft B | not found | 520 / 6 / 6 / 0 / 0 / 240 / 112 / 0 / 97 / 3 | B: numbers found after the name (line 795); check the size |
| Coconut Creme Latte, Hot | 16oz | only in draft B | not found | 220 / 6 / 3.5 / 0 / 25 / 135 / 32 / 0 / 32 / 9 | B: numbers found after the name (line 796); check the size |
| Coconut Creme Latte, Hot | 20oz | only in draft B | not found | 280 / 7 / 4.5 / 0 / 30 / 180 / 42 / 0 / 42 / 12 | B: numbers found after the name (line 969); check the size |
| Coconut Creme Latte, Hot | 24oz | only in draft B | not found | 330 / 8 / 5 / 0 / 35 / 200 / 51 / 0 / 51 / 14 | B: numbers found after the name (line 970); check the size |
| Coconut Creme Latte, Iced | 16oz | only in draft B | not found | 190 / 4.5 / 3 / 0 / 20 / 115 / 29 / 0 / 29 / 8 | B: numbers found after the name (line 971); check the size |
| Coconut Creme Latte, Iced | 20oz | only in draft B | not found | 250 / 6 / 4 / 0 / 25 / 150 / 39 / 0 / 39 / 10 | B: numbers found after the name (line 972); check the size |
| Coconut Creme Latte, Iced | 24oz | only in draft B | not found | 300 / 7 / 4.5 / 0 / 30 / 170 / 47 / 0 / 47 / 11 | B: numbers found after the name (line 973); check the size |
| Firefly Latte, Frozen | 16oz | only in draft B | not found | 490 / 13 / 10 / 0 / 30 / 210 / 86 / 0 / 71 / 3 | B: numbers found after the name (line 974); check the size |
| Firefly Latte, Frozen | 20oz | only in draft B | not found | 550 / 15 / 11 / 0 / 30 / 250 / 99 / 0 / 82 / 3 | B: numbers found after the name (line 975); check the size |
| Firefly Latte, Frozen | 24oz | only in draft B | not found | 690 / 17 / 13 / 0 / 35 / 300 / 125 / 0 / 104 / 4 | B: numbers found after the name (line 976); check the size |
| Tropic Biggby Blast®, Iced | 24oz | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 45 / 58 / 1 / 50 / 0 | B: numbers found after the name (line 3177); check the size |
| HALAL Turkey Ham & Cheese Bragel® | 1 serving | both read it the same, but its protein, carbs and fat make 580 kcal, not 450 | 450 / 28 / 6 / 0 / 50 / 1020 / 61 / 2 / 6 / 21 | 450 / 28 / 6 / 0 / 50 / 1020 / 61 / 2 / 6 / 21 | A: numbers found after the name (line 3274); check the size; B: numbers found after the name (line 3274); check the size |

## Spot check (15 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| Snow Bear Latte | Iced, 24oz | 550 / 16 / 11 / 0 / 60 / 300 / 84 / 0 / 73 / 12 |
| Chai Tea Latte, Hot | 24oz | 380 / 9 / 6 / 0 / 35 / 220 / 60 / 0 / 49 / 15 |
| Nutty Buddy Latte | Frozen, 24oz | 510 / 6 / 6 / 0 / 0 / 250 / 109 / 0 / 94 / 3 |
| Chai Charger Latte, Frozen | 24oz | 470 / 6 / 6 / 0 / 0 / 230 / 99 / 0 / 77 / 3 |
| Mocha Mocha Latte, Hot | 20oz | 430 / 11 / 7 / 0 / 40 / 210 / 73 / 2 / 70 / 11 |
| Island Bear Latte, Hot | 16oz | 360 / 11 / 7 / 0 / 40 / 200 / 59 / 0 / 51 / 8 |
| Purple Haze Latte | Frozen, 16oz | 560 / 16 / 12 / 0 / 35 / 280 / 102 / 0 / 81 / 3 |
| Sweet Foam Red Velvet Cold Brew | 20oz | 430 / 17 / 16 / 0 / 10 / 250 / 67 / 1 / 64 / 3 |
| Vanilla Bean Latte, Hot, Sugar-Free Syrup | 16oz | 150 / 6 / 3.5 / 0 / 25 / 140 / 18 / 0 / 14 / 9 |
| Blackberry Bolt Red Bull® Mocktail | Iced, 20oz | 280 / 0 / 0 / 0 / 0 / 85 / 70 / 0 / 68 / 1 |
| Purple Haze Latte | Iced, 20oz | 570 / 19 / 12 / 0 / 65 / 330 / 91 / 0 / 75 / 10 |
| Red Bull® Energy Drink | 1 serving | 110 / 0 / 0 / 0 / 0 / 70 / 28 / 0 / 27 / 1 |
| Mocha Mocha Latte, Iced | 16oz | 380 / 13 / 8 / 0 / 45 / 150 / 58 / 2 / 55 / 7 |
| Sweet Foam Black Forest Cold Brew | 24oz | 500 / 19 / 17 / 0 / 15 / 220 / 84 / 1 / 70 / 2 |
| Island Bear Latte, Iced | 20oz | 480 / 16 / 10 / 0 / 55 / 240 / 77 / 0 / 67 / 9 |
