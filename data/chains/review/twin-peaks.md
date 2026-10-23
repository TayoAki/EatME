# Twin Peaks: lines for a person

Guide: https://api.twinpeaksrestaurant.com/wp-content/uploads/Twin-Peaks-Nutritional-Guide_Jan2025.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (135)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/twin-peaks.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| BOURBON TERIYAKI | per 6 Wings | differ: fat_g, saturated_fat_g | 140 / 1.5 / 0 / 0 / 0 / 1380 / 27 / 0 / 21 / 2 | 140 / 15 / 1.5 / 0 / 0 / 1380 / 27 / 0 / 21 / 2 | A: numbers found after the name (line 52); check the size; B: numbers found after the name (line 52); check the size |
| THE CLASSIC | per 6 Wings | differ: fat_g, saturated_fat_g | 40 / 4 / 0 / 0 / 0 / 1720 / 0 / 0 / 0 / 0 | 40 / 35 / 4 / 0 / 0 / 1720 / 0 / 0 / 0 / 0 | A: numbers found after the name (line 64); check the size; B: numbers found after the name (line 64); check the size |
| TIKKA | per 6 Wings | differ: fat_g, saturated_fat_g, trans_fat_g | 100 / 6.5 / 3 / 0 / 15 / 650 / 8 / 1 / 6 / 1 | 100 / 60 / 6.5 / 3 / 15 / 650 / 8 / 1 / 6 / 1 | A: numbers found after the name (line 65); check the size; B: numbers found after the name (line 65); check the size |
| BOWL | Brisket Chili without Slice of Grilled Sourdough | only in draft A | 340 / 22 / 9 / 0.5 / 65 / 930 / 14 / 4 / 5 / 20 | not found | A: numbers found after the name (line 145); check the size |
| CUP | Brisket Chili without Slice of Grilled Sourdough | only in draft A | 240 / 16 / 6 / 0.5 / 50 / 680 / 10 / 3 / 4 / 15 | not found | A: numbers found after the name (line 146); check the size |
| BOWL | Green Chile Chicken without Slice of Grilled Sourdough | only in draft A | 190 / 10 / 2 / 0 / 65 / 1370 / 11 / 2 / 4 / 14 | not found | A: numbers found after the name (line 148); check the size |
| CUP | Green Chile Chicken without Slice of Grilled Sourdough | only in draft A | 120 / 6 / 1 / 0 / 30 / 930 / 8 / 1 / 3 / 7 | not found | A: numbers found after the name (line 149); check the size |
| ADD SLICE OF GRILLED SOURDOUGH | 1 slice | only in draft A | 100 / 5 / 1 / 0 / 0 / 95 / 11 / 1 / 0 / 2 | not found | A: numbers found after the name (line 150); check the size |
| BRISKET CHILI without Slice of Grilled Sourdough | Bowl | only in draft B | not found | 340 / 22 / 9 / 0.5 / 65 / 930 / 14 / 4 / 5 / 20 | B: numbers found after the name (line 144); check the size |
| BRISKET CHILI without Slice of Grilled Sourdough | Cup | only in draft B | not found | 240 / 16 / 6 / 0.5 / 50 / 680 / 10 / 3 / 4 / 15 | B: numbers found after the name (line 144); check the size |
| GREEN CHILE CHICKEN without Slice of Grilled Sourdough | Bowl | only in draft B | not found | 190 / 10 / 2 / 0 / 65 / 1370 / 11 / 2 / 4 / 14 | B: numbers found after the name (line 147); check the size |
| GREEN CHILE CHICKEN without Slice of Grilled Sourdough | Cup | only in draft B | not found | 120 / 6 / 1 / 0 / 30 / 930 / 8 / 1 / 3 / 7 | B: numbers found after the name (line 147); check the size |
| AMARETTO SOUR | 1 serving | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 20 / 60 / 0 / 56 / 0 | B: numbers found after the name (line 286); check the size |
| APEROL SPRITZ | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 105 / 23 / 0 / 21 / 0 | B: numbers found after the name (line 287); check the size |
| BLACKBERRY BRAMBLE | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 0 / 27 / 1 / 24 / 0 | B: numbers found after the name (line 288); check the size |
| BLACKBERRY SMASH | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 14 / 1 / 12 / 0 | B: numbers found after the name (line 289); check the size |
| BLOODY MARY | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 1830 / 6 / 1 / 3 / 1 | B: numbers found after the name (line 290); check the size |
| BLUE MOFO | 1 serving | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 20 / 29 / 0 / 27 / 0 | B: numbers found after the name (line 292); check the size |
| CARAJILLO | 1 serving | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 0 / 32 / 0 / 32 / 0 | B: numbers found after the name (line 293); check the size |
| CINCORO MARGARITA | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 770 / 18 / 1 / 13 / 0 | B: numbers found after the name (line 294); check the size |
| CLASSIC MARTINI with Grey Goose Vodka | 1 serving | only in draft B | not found | 160 / 1 / 0 / 0 / 0 / 330 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 295); check the size |
| CLASSIC MARTINI with Hendrick's Gin | 1 serving | only in draft B | not found | 180 / 1 / 0 / 0 / 0 / 330 / 2 / 0 / 1 / 0 | B: numbers found after the name (line 296); check the size |
| COSMOPOLITAN | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 9 / 0 | B: numbers found after the name (line 297); check the size |
| CUBAN OLD FASHIONED | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 7 / 0 / 6 / 0 | B: numbers found after the name (line 298); check the size |
| DOBEL CRISTALINO MARGARITA | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 1920 / 19 / 1 / 13 / 0 | B: numbers found after the name (line 299); check the size |
| ENERGIZED CHERRY LIMEADE | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 20 / 33 / 0 / 29 / 0 | B: numbers found after the name (line 300); check the size |
| ESPRESSO MARTINI - CASAMIGOS REPOSADO | 1 serving | only in draft B | not found | 300 / 1 / 0 / 0 / 0 / 0 / 30 / 0 / 30 / 0 | B: numbers found after the name (line 301); check the size |
| ESPRESSO MARTINI - ELIJAH CRAIG TOASTED BARREL | 1 serving | only in draft B | not found | 320 / 1 / 0 / 0 / 0 / 0 / 30 / 0 / 29 / 0 | B: numbers found after the name (line 302); check the size |
| ESPRESSO MARTINI - SKREWBALL PEANUT BUTTER WHISKEY | 1 serving | only in draft B | not found | 320 / 1 / 0 / 0 / 0 / 0 / 40 / 0 / 40 / 0 | B: numbers found after the name (line 303); check the size |
| ESPRESSO MARTINI - TULLAMORE D.E.W. | 1 serving | only in draft B | not found | 300 / 1 / 0 / 0 / 0 / 0 / 30 / 0 / 29 / 0 | B: numbers found after the name (line 304); check the size |
| ESPRESSO MARTINI - WHEATLY VODKA | 1 serving | only in draft B | not found | 300 / 1 / 0 / 0 / 0 / 0 / 30 / 0 / 29 / 0 | B: numbers found after the name (line 305); check the size |
| HENDRICK'S & FEVER TREE TONIC | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 0 / 7 / 1 / 4 / 0 | B: numbers found after the name (line 306); check the size |
| HOUSE LONG ISLAND ICED TEA | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 25 / 30 / 0 / 27 / 0 | B: numbers found after the name (line 307); check the size |
| HOUSE MARGARITA | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 1920 / 32 / 0 / 28 / 0 | B: numbers found after the name (line 308); check the size |
| ILEGAL MARGARITA | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 760 / 18 / 0 / 14 / 0 | B: numbers found after the name (line 309); check the size |
| IRISH COFFEE | 1 serving | only in draft B | not found | 300 / 1 / 0 / 0 / 0 / 0 / 30 / 0 / 29 / 0 | B: numbers found after the name (line 310); check the size |
| IRISH TRASHCAN | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 110 / 37 / 0 / 35 / 0 | B: numbers found after the name (line 311); check the size |
| JAMESON & GINGER | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 10 / 13 / 0 / 12 / 0 | B: numbers found after the name (line 312); check the size |
| LEMON DROP MARTINI | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 16 / 0 / 13 / 0 | B: numbers found after the name (line 313); check the size |
| LIQUID MARJUANA | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 10 / 29 / 0 / 27 / 0 | B: numbers found after the name (line 314); check the size |
| LONG ISLAND ICED TEA | 1 serving | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 25 / 28 / 0 / 26 / 0 | B: numbers found after the name (line 315); check the size |
| LYNCHBURG LEMONADE | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 20 / 28 / 0 / 25 / 0 | B: numbers found after the name (line 316); check the size |
| MAI TAI | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 8 / 0 | B: numbers found after the name (line 317); check the size |
| MANGO MARGARITA | 1 serving | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 390 / 33 / 0 / 30 / 0 | B: numbers found after the name (line 318); check the size |
| MANHATTAN - RUSSELL'S RESERVE 10 | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 7 / 0 | B: numbers found after the name (line 319); check the size |
| MANHATTAN - 1792 FULL PROOF BARREL SELECT | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 0 / 9 / 0 / 7 / 0 | B: numbers found after the name (line 320); check the size |
| MEXICAN MARTINI | 1 serving | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 2280 / 36 / 0 / 31 / 0 | B: numbers found after the name (line 321); check the size |
| MICHELADA - DOS XX LAGER with Ice | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 2390 / 18 / 2 / 2 / 3 | B: numbers found after the name (line 322); check the size |
| MICHELADA - DOS XX LAGER without Ice | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 2390 / 24 / 2 / 2 / 3 | B: numbers found after the name (line 323); check the size |
| MICHELADA - MODELO ESPECIAL with Ice | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 2410 / 20 / 2 / 2 / 3 | B: numbers found after the name (line 324); check the size |
| MICHELADA - MODELO ESPECIAL without Ice | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 2420 / 28 / 2 / 2 / 3 | B: numbers found after the name (line 325); check the size |
| MIMOSA with Cranberry Juice | 1 serving | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 15 / 35 / 0 / 32 / 1 | B: numbers found after the name (line 326); check the size |
| MIMOSA with Grapefruit Juice | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 15 / 24 / 1 / 22 / 2 | B: numbers found after the name (line 327); check the size |
| MIMOSA with Orange Juice | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 10 / 29 / 0 / 26 / 1 | B: numbers found after the name (line 328); check the size |
| MIMOSA with Pineapple Juice | 1 serving | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 10 / 33 / 0 / 31 / 2 | B: numbers found after the name (line 329); check the size |
| MOJITO | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 5 / 34 / 0 / 30 / 0 | B: numbers found after the name (line 330); check the size |
| MULE - CROWN APPLE | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 18 / 0 / 16 / 0 | B: numbers found after the name (line 331); check the size |
| MULE - KETEL ONE | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 22 / 0 / 20 / 0 | B: numbers found after the name (line 332); check the size |
| MULE - MAKER'S MARK | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 0 / 22 / 0 / 20 / 0 | B: numbers found after the name (line 333); check the size |
| MULE - MEZCAL PASSION FRUIT | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 18 / 0 | B: numbers found after the name (line 334); check the size |
| MULE - PROPER NO. TWELVE | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 22 / 0 / 20 / 0 | B: numbers found after the name (line 335); check the size |
| OLD FASHIONED - ANGEL'S ENVY BARREL SELECT | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 9 / 0 | B: numbers found after the name (line 336); check the size |
| OLD FASHIONED - BUFFALO TRACE BARREL SELECT | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 9 / 0 | B: numbers found after the name (line 337); check the size |
| OLD FASHIONED - BULLEIT RYE | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 9 / 0 | B: numbers found after the name (line 338); check the size |
| OLD FASHIONED - MAKER'S MARK PRIVATE SELECTION BARREL SELECT | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 9 / 0 | B: numbers found after the name (line 339); check the size |
| OLD FASHIONED - OAXACA | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 7 / 0 / 6 / 0 | B: numbers found after the name (line 340); check the size |
| OLD FASHIONED - OLD FORESTER | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 9 / 0 | B: numbers found after the name (line 341); check the size |
| OLD FASHIONED - WHISTLEPIG MAPLE | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 9 / 0 | B: numbers found after the name (line 342); check the size |
| PALOMA | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 380 / 21 / 0 / 20 / 0 | B: numbers found after the name (line 343); check the size |
| PAPER PLANE | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 2 / 0 | B: numbers found after the name (line 344); check the size |
| PASSION FRUIT SPLASH | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 20 / 28 / 0 / 26 / 0 | B: numbers found after the name (line 345); check the size |
| PATRON MARGARITA | 1 serving | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 1920 / 32 / 0 / 28 / 0 | B: numbers found after the name (line 346); check the size |
| PEAKS MARGARITA | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 1920 / 32 / 0 / 28 / 0 | B: numbers found after the name (line 347); check the size |
| PEAKS PUNCH | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 34 / 0 / 32 / 0 | B: numbers found after the name (line 348); check the size |
| PORN STAR MARTINI | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 0 / 23 / 0 / 21 / 0 | B: numbers found after the name (line 349); check the size |
| RYE RUMBLE | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 10 / 15 / 0 / 12 / 0 | B: numbers found after the name (line 350); check the size |
| SANGRIA - RED | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 5 / 27 / 1 / 23 / 0 | B: numbers found after the name (line 351); check the size |
| SANGRIA - WHITE | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 5 / 19 / 0 / 16 / 0 | B: numbers found after the name (line 352); check the size |
| SPICY MANGO LEMONADE | 1 serving | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 0 / 39 / 0 / 36 / 0 | B: numbers found after the name (line 353); check the size |
| SPICY MARGARITA | 1 serving | only in draft B | not found | 150 / 0 / 0.1 / 0 / 0 / 380 / 13 / 1 / 10 / 0 | B: numbers found after the name (line 354); check the size |
| SPICY STRAWBERRY MARGARITA | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 380 / 18 / 1 / 13 / 0 | B: numbers found after the name (line 355); check the size |
| STONE SOUR - BUFFALO TRACE BARREL SELECT | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 0 / 32 / 0 / 28 / 0 | B: numbers found after the name (line 356); check the size |
| STRAWBERRY LEMONADE | 1 serving | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 5 / 38 / 0 / 34 / 0 | B: numbers found after the name (line 357); check the size |
| STRAWBERRY SLING | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 29 / 0 / 24 / 0 | B: numbers found after the name (line 358); check the size |
| TEQUILA & SODA/RANCH WATER | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 20 / 3 / 0.5 / 1 / 0 | B: numbers found after the name (line 359); check the size |
| TEQUILA SUNRISE | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 23 / 0 / 20 / 0 | B: numbers found after the name (line 366); check the size |
| TITO'S & RED BULL | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 110 / 30 / 0 / 28 / 0 | B: numbers found after the name (line 368); check the size |
| TRANSFUSION | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 10 / 17 / 0 / 13 / 0 | B: numbers found after the name (line 369); check the size |
| TRAVELLER WHISKEY SOUR | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 30 / 0 / 27 / 0 | B: numbers found after the name (line 370); check the size |
| TWIN PEAKS BARREL SELECT MARGARITA | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 1930 / 32 / 0 / 29 / 0 | B: numbers found after the name (line 371); check the size |
| WATERMELON MARGARITA | 1 serving | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 480 / 60 / 0 / 56 / 0 | B: numbers found after the name (line 372); check the size |
| WOODFORD SOUR | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 29 / 0 / 27 / 0 | B: numbers found after the name (line 373); check the size |
| DEEP EDDY LEMON | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 4 / 0 / 3 / 0 | B: numbers found after the name (line 375); check the size |
| DEEP EDDY LIME | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 4 / 0 / 3 / 0 | B: numbers found after the name (line 376); check the size |
| DEEP EDDY RUBY RED | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 3 / 0 | B: numbers found after the name (line 377); check the size |
| FIREBALL CINNAMON WHISKY | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 0 / 7 / 0 / 7 / 0 | B: numbers found after the name (line 378); check the size |
| HOWLER HEAD BANANA BOURBON | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 379); check the size, mostly zeros: look |
| JACK DANIEL'S TENNESSEE APPLE | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 5 / 0 | B: numbers found after the name (line 380); check the size |
| JACK DANIEL'S TENNESSEE FIRE | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 3 / 0 | B: numbers found after the name (line 381); check the size |
| JACK DANIEL'S TENNESSEE HONEY | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 3 / 0 | B: numbers found after the name (line 382); check the size |
| JÄGERMEISTER | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 383); check the size, mostly zeros: look |
| JOSE CUERVO DEVIL'S RESERVE | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 384); check the size, mostly zeros: look |
| JOSE CUERVO TRADICIONAL BLANCO | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 385); check the size, mostly zeros: look |
| OLE SMOKY APPLE PIE MOONSHINE | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 386); check the size, mostly zeros: look |
| OLE SMOKY SALTY CARAMEL WHISKEY | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 387); check the size, mostly zeros: look |
| OLE SMOKY SALTY WATERMELON WHISKEY | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 388); check the size, mostly zeros: look |
| RUMPLE MINZE | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 389); check the size, mostly zeros: look |
| SKREWBALL PEANUT BUTTER WHISKEY | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 0 / 7 / 0 / 7 / 0 | B: numbers found after the name (line 390); check the size |
| TUACA | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 4 / 0 / 4 / 0 | B: numbers found after the name (line 391); check the size |
| BUTTERY NIPPLE | 1 serving | only in draft B | not found | 90 / 2 / 1 / 0 / 5 / 45 / 10 / 0 / 9 / 0 | B: numbers found after the name (line 393); check the size |
| CHOCOLATE CAKE | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 11 / 0 | B: numbers found after the name (line 394); check the size |
| CINNAMON TOAST | 1 serving | only in draft B | not found | 180 / 2.5 / 1.5 / 0 / 5 / 15 / 18 / 0 / 14 / 1 | B: numbers found after the name (line 395); check the size |
| DEEP IN CIDER | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 10 / 0 | B: numbers found after the name (line 396); check the size |
| GET LEI'ED | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 50 / 24 / 0 / 24 / 0 | B: numbers found after the name (line 397); check the size |
| GRAND MARNIER | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 | B: numbers found after the name (line 398); check the size, mostly zeros: look |
| GREEN TEA | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 5 / 0 | B: numbers found after the name (line 399); check the size |
| JÄGER BOMB | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 35 / 14 / 0 / 13 / 0 | B: numbers found after the name (line 400); check the size |
| JAMESON PICKLE BACK | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 310 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 401); check the size, mostly zeros: look |
| LEMON DROP | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 11 / 0 | B: numbers found after the name (line 402); check the size |
| LIQUID MARIJUANA | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 10 / 0 | B: numbers found after the name (line 403); check the size |
| MEXICAN CANDY | 1 serving | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 390 / 2 / 0 / 2 / 0 | B: numbers found after the name (line 404); check the size |
| ORANGE TEA | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 7 / 0 / 6 / 0 | B: numbers found after the name (line 405); check the size |
| PINEAPPLE UPSIDE DOWN CAKE | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 50 / 23 / 0 / 22 / 0 | B: numbers found after the name (line 406); check the size |
| SCOOBY SNACK | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 15 / 0 / 8 / 0 | B: numbers found after the name (line 407); check the size |
| SPICY MANGO | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 380 / 27 / 0 / 25 / 0 | B: numbers found after the name (line 408); check the size |
| STAR F*CKER | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 11 / 0 | B: name not in the guide text |
| STARBURST | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 13 / 0 | B: numbers found after the name (line 410); check the size |
| THIN MINTY | 1 serving | only in draft B | not found | 210 / 3 / 2 / 0 / 0 / 0 / 20 / 0 / 19 / 1 | B: numbers found after the name (line 411); check the size |
| VEGAS BOMB | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 55 / 18 / 0 / 17 / 0 | B: numbers found after the name (line 412); check the size |
| WASHINGTON APPLE | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 12 / 0 | B: numbers found after the name (line 413); check the size |
| WATER MOCCASIN | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 7 / 0 / 7 / 0 | B: numbers found after the name (line 414); check the size |
| WATERMELON JOLLY RANCHER | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 1320 / 9 / 0 / 8 / 0 | B: numbers found after the name (line 415); check the size |
| WHITE GUMMY BEAR | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 25 / 29 / 0 / 26 / 0 | B: numbers found after the name (line 416); check the size |
| WHITE TEA | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 4 / 0 / 4 / 0 | B: numbers found after the name (line 417); check the size |
| FRENCH FRIENDS with Retrap | 1 serving | both read it the same, but its protein, carbs and fat make 546 kcal, not 998 | 998 / 30 / 4 / 0 / 0 / 1708 / 67 / 2 / 19 / 2 | 998 / 30 / 4 / 0 / 0 / 1708 / 67 / 2 / 19 / 2 | A: numbers found after the name (line 224); check the size; B: numbers found after the name (line 224); check the size |

## Spot check (10 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| BONE-IN BREADED | 6 Wings | 630 / 38 / 11 / 0 / 315 / 770 / 13 / 1 / 0 / 55 |
| SPICY CAJUN RUB | per 6 Wings | 20 / 0 / 0 / 0 / 0 / 1730 / 5 / 2 / 1 / 1 |
| CREAMY COLESLAW | 1 serving | 120 / 8 / 2.5 / 0.5 / 10 / 570 / 10 / 2 / 6 / 1 |
| Sub Shrimp, without Dressing | without Dressing | 650 / 22 / 10 / 0.5 / 175 / 1690 / 80 / 14 / 23 / 39 |
| add Fire Roasted Salsa | 1 serving | 40 / 2.5 / 1 / 0 / 10 / 110 / 2 / 0 / 1 / 2 |
| AVOCADO SMASH BURGER - Beyond Burger without Fries and Ketchup | without Fries and Ketchup | 770 / 47 / 15 / 0 / 25 / 1260 / 51 / 5 / 6 / 33 |
| HOUSE SIDE SALAD without Dressing | without Dressing | 210 / 15 / 8 / 0 / 30 / 300 / 13 / 2 / 4 / 9 |
| SPRITE | 10 fl oz | 130 / 0 / 0 / 0 / 0 / 30 / 34 / 0 / 30 / 0 |
| MOZARELLA CHEESE BITES with Ranch and Marinara | 1 serving | 1110 / 83 / 29 / 0 / 130 / 2260 / 37 / 2 / 4 / 49 |
| STEAK SALAD without Dressing | without Dressing | 530 / 24 / 11 / 0.5 / 100 / 1580 / 39 / 11 / 8 / 42 |
