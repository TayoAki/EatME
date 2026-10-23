# Twin Peaks: lines for a person

Guide: https://api.twinpeaksrestaurant.com/wp-content/uploads/Twin-Peaks-Nutritional-Guide_Jan2025.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (134)

Fix each line in `menus/twin-peaks.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B |
| --- | --- | --- | --- | --- |
| BOURBON TERIYAKI | per 6 Wings | differ: fat_g, saturated_fat_g | 140 / 1.5 / 0 / 0 / 0 / 1380 / 27 / 0 / 21 / 2 | 140 / 15 / 1.5 / 0 / 0 / 1380 / 27 / 0 / 21 / 2 |
| THE CLASSIC | per 6 Wings | differ: fat_g, saturated_fat_g | 40 / 4 / 0 / 0 / 0 / 1720 / 0 / 0 / 0 / 0 | 40 / 35 / 4 / 0 / 0 / 1720 / 0 / 0 / 0 / 0 |
| TIKKA | per 6 Wings | differ: fat_g, saturated_fat_g, trans_fat_g | 100 / 6.5 / 3 / 0 / 15 / 650 / 8 / 1 / 6 / 1 | 100 / 60 / 6.5 / 3 / 15 / 650 / 8 / 1 / 6 / 1 |
| BOWL | Brisket Chili without Slice of Grilled Sourdough | only in draft A | 340 / 22 / 9 / 0.5 / 65 / 930 / 14 / 4 / 5 / 20 | not found |
| CUP | Brisket Chili without Slice of Grilled Sourdough | only in draft A | 240 / 16 / 6 / 0.5 / 50 / 680 / 10 / 3 / 4 / 15 | not found |
| BOWL | Green Chile Chicken without Slice of Grilled Sourdough | only in draft A | 190 / 10 / 2 / 0 / 65 / 1370 / 11 / 2 / 4 / 14 | not found |
| CUP | Green Chile Chicken without Slice of Grilled Sourdough | only in draft A | 120 / 6 / 1 / 0 / 30 / 930 / 8 / 1 / 3 / 7 | not found |
| ADD SLICE OF GRILLED SOURDOUGH | 1 slice | only in draft A | 100 / 5 / 1 / 0 / 0 / 95 / 11 / 1 / 0 / 2 | not found |
| BRISKET CHILI without Slice of Grilled Sourdough | Bowl | only in draft B | not found | 340 / 22 / 9 / 0.5 / 65 / 930 / 14 / 4 / 5 / 20 |
| BRISKET CHILI without Slice of Grilled Sourdough | Cup | only in draft B | not found | 240 / 16 / 6 / 0.5 / 50 / 680 / 10 / 3 / 4 / 15 |
| GREEN CHILE CHICKEN without Slice of Grilled Sourdough | Bowl | only in draft B | not found | 190 / 10 / 2 / 0 / 65 / 1370 / 11 / 2 / 4 / 14 |
| GREEN CHILE CHICKEN without Slice of Grilled Sourdough | Cup | only in draft B | not found | 120 / 6 / 1 / 0 / 30 / 930 / 8 / 1 / 3 / 7 |
| AMARETTO SOUR | 1 serving | only in draft B | not found | 280 / 0 / 0 / 0 / 0 / 20 / 60 / 0 / 56 / 0 |
| APEROL SPRITZ | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 105 / 23 / 0 / 21 / 0 |
| BLACKBERRY BRAMBLE | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 0 / 27 / 1 / 24 / 0 |
| BLACKBERRY SMASH | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 14 / 1 / 12 / 0 |
| BLOODY MARY | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 1830 / 6 / 1 / 3 / 1 |
| BLUE MOFO | 1 serving | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 20 / 29 / 0 / 27 / 0 |
| CARAJILLO | 1 serving | only in draft B | not found | 300 / 0 / 0 / 0 / 0 / 0 / 32 / 0 / 32 / 0 |
| CINCORO MARGARITA | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 770 / 18 / 1 / 13 / 0 |
| CLASSIC MARTINI with Grey Goose Vodka | 1 serving | only in draft B | not found | 160 / 1 / 0 / 0 / 0 / 330 / 2 / 0 / 1 / 0 |
| CLASSIC MARTINI with Hendrick's Gin | 1 serving | only in draft B | not found | 180 / 1 / 0 / 0 / 0 / 330 / 2 / 0 / 1 / 0 |
| COSMOPOLITAN | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 9 / 0 |
| CUBAN OLD FASHIONED | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 7 / 0 / 6 / 0 |
| DOBEL CRISTALINO MARGARITA | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 1920 / 19 / 1 / 13 / 0 |
| ENERGIZED CHERRY LIMEADE | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 20 / 33 / 0 / 29 / 0 |
| ESPRESSO MARTINI - CASAMIGOS REPOSADO | 1 serving | only in draft B | not found | 300 / 1 / 0 / 0 / 0 / 0 / 30 / 0 / 30 / 0 |
| ESPRESSO MARTINI - ELIJAH CRAIG TOASTED BARREL | 1 serving | only in draft B | not found | 320 / 1 / 0 / 0 / 0 / 0 / 30 / 0 / 29 / 0 |
| ESPRESSO MARTINI - SKREWBALL PEANUT BUTTER WHISKEY | 1 serving | only in draft B | not found | 320 / 1 / 0 / 0 / 0 / 0 / 40 / 0 / 40 / 0 |
| ESPRESSO MARTINI - TULLAMORE D.E.W. | 1 serving | only in draft B | not found | 300 / 1 / 0 / 0 / 0 / 0 / 30 / 0 / 29 / 0 |
| ESPRESSO MARTINI - WHEATLY VODKA | 1 serving | only in draft B | not found | 300 / 1 / 0 / 0 / 0 / 0 / 30 / 0 / 29 / 0 |
| HENDRICK'S & FEVER TREE TONIC | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 0 / 7 / 1 / 4 / 0 |
| HOUSE LONG ISLAND ICED TEA | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 25 / 30 / 0 / 27 / 0 |
| HOUSE MARGARITA | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 1920 / 32 / 0 / 28 / 0 |
| ILEGAL MARGARITA | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 760 / 18 / 0 / 14 / 0 |
| IRISH COFFEE | 1 serving | only in draft B | not found | 300 / 1 / 0 / 0 / 0 / 0 / 30 / 0 / 29 / 0 |
| IRISH TRASHCAN | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 110 / 37 / 0 / 35 / 0 |
| JAMESON & GINGER | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 10 / 13 / 0 / 12 / 0 |
| LEMON DROP MARTINI | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 16 / 0 / 13 / 0 |
| LIQUID MARJUANA | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 10 / 29 / 0 / 27 / 0 |
| LONG ISLAND ICED TEA | 1 serving | only in draft B | not found | 290 / 0 / 0 / 0 / 0 / 25 / 28 / 0 / 26 / 0 |
| LYNCHBURG LEMONADE | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 20 / 28 / 0 / 25 / 0 |
| MAI TAI | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 8 / 0 |
| MANGO MARGARITA | 1 serving | only in draft B | not found | 270 / 0 / 0 / 0 / 0 / 390 / 33 / 0 / 30 / 0 |
| MANHATTAN - RUSSELL'S RESERVE 10 | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 7 / 0 |
| MANHATTAN - 1792 FULL PROOF BARREL SELECT | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 0 / 9 / 0 / 7 / 0 |
| MEXICAN MARTINI | 1 serving | only in draft B | not found | 310 / 0 / 0 / 0 / 0 / 2280 / 36 / 0 / 31 / 0 |
| MICHELADA - DOS XX LAGER with Ice | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 2390 / 18 / 2 / 2 / 3 |
| MICHELADA - DOS XX LAGER without Ice | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 2390 / 24 / 2 / 2 / 3 |
| MICHELADA - MODELO ESPECIAL with Ice | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 2410 / 20 / 2 / 2 / 3 |
| MICHELADA - MODELO ESPECIAL without Ice | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 2420 / 28 / 2 / 2 / 3 |
| MIMOSA with Cranberry Juice | 1 serving | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 15 / 35 / 0 / 32 / 1 |
| MIMOSA with Grapefruit Juice | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 15 / 24 / 1 / 22 / 2 |
| MIMOSA with Orange Juice | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 10 / 29 / 0 / 26 / 1 |
| MIMOSA with Pineapple Juice | 1 serving | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 10 / 33 / 0 / 31 / 2 |
| MOJITO | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 5 / 34 / 0 / 30 / 0 |
| MULE - CROWN APPLE | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 18 / 0 / 16 / 0 |
| MULE - KETEL ONE | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 22 / 0 / 20 / 0 |
| MULE - MAKER'S MARK | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 0 / 22 / 0 / 20 / 0 |
| MULE - MEZCAL PASSION FRUIT | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 21 / 0 / 18 / 0 |
| MULE - PROPER NO. TWELVE | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 0 / 22 / 0 / 20 / 0 |
| OLD FASHIONED - ANGEL'S ENVY BARREL SELECT | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 9 / 0 |
| OLD FASHIONED - BUFFALO TRACE BARREL SELECT | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 9 / 0 |
| OLD FASHIONED - BULLEIT RYE | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 9 / 0 |
| OLD FASHIONED - MAKER'S MARK PRIVATE SELECTION BARREL SELECT | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 9 / 0 |
| OLD FASHIONED - OAXACA | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 0 / 7 / 0 / 6 / 0 |
| OLD FASHIONED - OLD FORESTER | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 9 / 0 |
| OLD FASHIONED - WHISTLEPIG MAPLE | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 9 / 0 |
| PALOMA | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 380 / 21 / 0 / 20 / 0 |
| PAPER PLANE | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 10 / 0 / 2 / 0 |
| PASSION FRUIT SPLASH | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 20 / 28 / 0 / 26 / 0 |
| PATRON MARGARITA | 1 serving | only in draft B | not found | 260 / 0 / 0 / 0 / 0 / 1920 / 32 / 0 / 28 / 0 |
| PEAKS MARGARITA | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 1920 / 32 / 0 / 28 / 0 |
| PEAKS PUNCH | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 34 / 0 / 32 / 0 |
| PORN STAR MARTINI | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 0 / 23 / 0 / 21 / 0 |
| RYE RUMBLE | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 10 / 15 / 0 / 12 / 0 |
| SANGRIA - RED | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 5 / 27 / 1 / 23 / 0 |
| SANGRIA - WHITE | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 5 / 19 / 0 / 16 / 0 |
| SPICY MANGO LEMONADE | 1 serving | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 0 / 39 / 0 / 36 / 0 |
| SPICY MARGARITA | 1 serving | only in draft B | not found | 150 / 0 / 0.1 / 0 / 0 / 380 / 13 / 1 / 10 / 0 |
| SPICY STRAWBERRY MARGARITA | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 380 / 18 / 1 / 13 / 0 |
| STONE SOUR - BUFFALO TRACE BARREL SELECT | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 0 / 32 / 0 / 28 / 0 |
| STRAWBERRY LEMONADE | 1 serving | only in draft B | not found | 250 / 0 / 0 / 0 / 0 / 5 / 38 / 0 / 34 / 0 |
| STRAWBERRY SLING | 1 serving | only in draft B | not found | 230 / 0 / 0 / 0 / 0 / 0 / 29 / 0 / 24 / 0 |
| TEQUILA & SODA/RANCH WATER | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 20 / 3 / 0.5 / 1 / 0 |
| TEQUILA SUNRISE | 1 serving | only in draft B | not found | 190 / 0 / 0 / 0 / 0 / 0 / 23 / 0 / 20 / 0 |
| TITO'S & RED BULL | 1 serving | only in draft B | not found | 210 / 0 / 0 / 0 / 0 / 110 / 30 / 0 / 28 / 0 |
| TRANSFUSION | 1 serving | only in draft B | not found | 200 / 0 / 0 / 0 / 0 / 10 / 17 / 0 / 13 / 0 |
| TRAVELLER WHISKEY SOUR | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 30 / 0 / 27 / 0 |
| TWIN PEAKS BARREL SELECT MARGARITA | 1 serving | only in draft B | not found | 240 / 0 / 0 / 0 / 0 / 1930 / 32 / 0 / 29 / 0 |
| WATERMELON MARGARITA | 1 serving | only in draft B | not found | 350 / 0 / 0 / 0 / 0 / 480 / 60 / 0 / 56 / 0 |
| WOODFORD SOUR | 1 serving | only in draft B | not found | 220 / 0 / 0 / 0 / 0 / 0 / 29 / 0 / 27 / 0 |
| DEEP EDDY LEMON | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 4 / 0 / 3 / 0 |
| DEEP EDDY LIME | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 4 / 0 / 3 / 0 |
| DEEP EDDY RUBY RED | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 3 / 0 |
| FIREBALL CINNAMON WHISKY | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 0 / 7 / 0 / 7 / 0 |
| HOWLER HEAD BANANA BOURBON | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| JACK DANIEL'S TENNESSEE APPLE | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 5 / 0 |
| JACK DANIEL'S TENNESSEE FIRE | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 3 / 0 |
| JACK DANIEL'S TENNESSEE HONEY | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 3 / 0 |
| JÄGERMEISTER | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| JOSE CUERVO DEVIL'S RESERVE | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| JOSE CUERVO TRADICIONAL BLANCO | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| OLE SMOKY APPLE PIE MOONSHINE | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| OLE SMOKY SALTY CARAMEL WHISKEY | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| OLE SMOKY SALTY WATERMELON WHISKEY | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| RUMPLE MINZE | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
| SKREWBALL PEANUT BUTTER WHISKEY | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 0 / 7 / 0 / 7 / 0 |
| TUACA | 1 serving | only in draft B | not found | 70 / 0 / 0 / 0 / 0 / 0 / 4 / 0 / 4 / 0 |
| BUTTERY NIPPLE | 1 serving | only in draft B | not found | 90 / 2 / 1 / 0 / 5 / 45 / 10 / 0 / 9 / 0 |
| CHOCOLATE CAKE | 1 serving | only in draft B | not found | 140 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 11 / 0 |
| CINNAMON TOAST | 1 serving | only in draft B | not found | 180 / 2.5 / 1.5 / 0 / 5 / 15 / 18 / 0 / 14 / 1 |
| DEEP IN CIDER | 1 serving | only in draft B | not found | 150 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 10 / 0 |
| GET LEI'ED | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 50 / 24 / 0 / 24 / 0 |
| GRAND MARNIER | 1 serving | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 0 / 0 |
| GREEN TEA | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 5 / 0 / 5 / 0 |
| JÄGER BOMB | 1 serving | only in draft B | not found | 180 / 0 / 0 / 0 / 0 / 35 / 14 / 0 / 13 / 0 |
| JAMESON PICKLE BACK | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 310 / 0 / 0 / 0 / 0 |
| LEMON DROP | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 0 / 12 / 0 / 11 / 0 |
| LIQUID MARIJUANA | 1 serving | only in draft B | not found | 80 / 0 / 0 / 0 / 0 / 0 / 11 / 0 / 10 / 0 |
| MEXICAN CANDY | 1 serving | only in draft B | not found | 120 / 0 / 0 / 0 / 0 / 390 / 2 / 0 / 2 / 0 |
| ORANGE TEA | 1 serving | only in draft B | not found | 100 / 0 / 0 / 0 / 0 / 0 / 7 / 0 / 6 / 0 |
| PINEAPPLE UPSIDE DOWN CAKE | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 50 / 23 / 0 / 22 / 0 |
| SCOOBY SNACK | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 15 / 0 / 8 / 0 |
| SPICY MANGO | 1 serving | only in draft B | not found | 170 / 0 / 0 / 0 / 0 / 380 / 27 / 0 / 25 / 0 |
| STAR F*CKER | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 11 / 0 |
| STARBURST | 1 serving | only in draft B | not found | 110 / 0 / 0 / 0 / 0 / 0 / 13 / 0 / 13 / 0 |
| THIN MINTY | 1 serving | only in draft B | not found | 210 / 3 / 2 / 0 / 0 / 0 / 20 / 0 / 19 / 1 |
| VEGAS BOMB | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 55 / 18 / 0 / 17 / 0 |
| WASHINGTON APPLE | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 12 / 0 |
| WATER MOCCASIN | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 7 / 0 / 7 / 0 |
| WATERMELON JOLLY RANCHER | 1 serving | only in draft B | not found | 130 / 0 / 0 / 0 / 0 / 1320 / 9 / 0 / 8 / 0 |
| WHITE GUMMY BEAR | 1 serving | only in draft B | not found | 160 / 0 / 0 / 0 / 0 / 25 / 29 / 0 / 26 / 0 |
| WHITE TEA | 1 serving | only in draft B | not found | 90 / 0 / 0 / 0 / 0 / 0 / 4 / 0 / 4 / 0 |

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
