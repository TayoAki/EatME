# Pizza Ranch: lines for a person

Guide: https://d3exbi59yykwt2.cloudfront.net/header-images/Pizza-Ranch-ANI-Updated-sent-09.07.2026v1.pdf (read 2026-10-23). Draft A: openai/gpt-5.6-luna. Draft B: anthropic/claude-haiku-5.5.
Numbers in order: calories / fat_g / saturated_fat_g / trans_fat_g / cholesterol_mg / sodium_mg / carbs_g / fiber_g / sugars_g / protein_g.

## Disagreements (341)

The last column comes from `npm run chains:evidence`: whether a draft's numbers sit right after the item's name in the guide text the drafts read. It can't read sizes or sections (one draft called a single 78 g cookie a "6 pack"): check those against the guide, then fix the line and set its check to `person`.

Fix each line in `menus/pizza-ranch.csv` from the guide and set its check to `person` (or delete the line if it isn't on the menu).

| Item | Size | Why | Draft A | Draft B | In the guide text (no AI) |
| --- | --- | --- | --- | --- | --- |
| GARLIC SAUSAGE Original | 1 slice - small | only in draft A | 210 / 10 / 4 / 0 / 35 / 300 / 20 / 1 / 1 / 8 | not found | A: name not in the guide text |
| GARLIC SAUSAGE Original | 1 slice - medium | only in draft A | 220 / 12 / 5 / 0 / 40 / 320 / 19 / 1 / 1 / 8 | not found | A: name not in the guide text |
| GARLIC SAUSAGE Original | 1 slice - large | only in draft A | 260 / 13 / 5 / 0 / 45 / 360 / 23 / 1 / 1 / 10 | not found | A: name not in the guide text |
| GARLIC SAUSAGE Skillet | 1 slice - small | only in draft A | 230 / 12 / 5 / 0 / 35 / 320 / 22 / 1 / 1 / 8 | not found | A: name not in the guide text |
| GARLIC SAUSAGE Skillet | 1 slice - medium | only in draft A | 240 / 14 / 5 / 0 / 40 / 340 / 21 / 1 / 1 / 9 | not found | A: name not in the guide text |
| GARLIC SAUSAGE Skillet | 1 slice - large | only in draft A | 270 / 15 / 5 / 0 / 45 / 370 / 23 / 1 / 1 / 10 | not found | A: name not in the guide text |
| GARLIC SAUSAGE Thin | 1 slice - small | only in draft A | 150 / 10 / 4 / 0 / 35 / 240 / 8 / 0 / 1 / 6 | not found | A: name not in the guide text |
| GARLIC SAUSAGE Thin | 1 slice - medium | only in draft A | 160 / 11 / 4 / 0 / 40 / 270 / 8 / 0 / 1 / 7 | not found | A: name not in the guide text |
| GARLIC SAUSAGE Thin | 1 slice - large | only in draft A | 190 / 12 / 5 / 0 / 45 / 300 / 10 / 1 / 1 / 8 | not found | A: name not in the guide text |
| SAUSAGE Original | 1 slice - small | only in draft A | 190 / 8 / 4 / 0 / 35 / 330 / 20 / 1 / 1 / 8 | not found | A: name not in the guide text |
| SAUSAGE Original | 1 slice - medium | only in draft A | 190 / 8 / 4 / 0 / 45 / 340 / 19 / 1 / 1 / 9 | not found | A: name not in the guide text |
| SAUSAGE Original | 1 slice - large | only in draft A | 220 / 9 / 5 / 0 / 45 / 390 / 24 / 1 / 1 / 10 | not found | A: name not in the guide text |
| SAUSAGE Skillet | 1 slice - small | only in draft A | 210 / 9 / 4 / 0 / 35 / 350 / 22 / 1 / 1 / 9 | not found | A: name not in the guide text |
| SAUSAGE Skillet | 1 slice - medium | only in draft A | 220 / 10 / 5 / 0 / 40 / 360 / 21 / 1 / 1 / 9 | not found | A: name not in the guide text |
| SAUSAGE Skillet | 1 slice - large | only in draft A | 240 / 11 / 5 / 0 / 45 / 400 / 24 / 1 / 1 / 10 | not found | A: name not in the guide text |
| SAUSAGE Thin | 1 slice - small | only in draft A | 130 / 7 / 4 / 0 / 35 / 270 / 8 / 0 / 0 / 6 | not found | A: name not in the guide text |
| SAUSAGE Thin | 1 slice - medium | only in draft A | 140 / 8 / 4 / 0 / 45 / 300 / 9 / 0 / 0 / 7 | not found | A: name not in the guide text |
| SAUSAGE Thin | 1 slice - large | only in draft A | 160 / 8 / 4 / 0 / 45 / 320 / 11 / 0 / 0 / 8 | not found | A: name not in the guide text |
| SAUSAGE, PEPPERS & ONIONS Original | 1 slice - small | only in draft A | 190 / 8 / 4 / 0 / 35 / 330 / 21 / 1 / 1 / 8 | not found | A: name not in the guide text |
| SAUSAGE, PEPPERS & ONIONS Original | 1 slice - medium | only in draft A | 190 / 8 / 4 / 0 / 40 / 340 / 20 / 1 / 1 / 9 | not found | A: name not in the guide text |
| SAUSAGE, PEPPERS & ONIONS Original | 1 slice - large | only in draft A | 230 / 9 / 5 / 0 / 45 / 390 / 24 / 1 / 1 / 10 | not found | A: name not in the guide text |
| SAUSAGE, PEPPERS & ONIONS Skillet | 1 slice - small | only in draft A | 210 / 9 / 4 / 0 / 35 / 350 / 23 / 1 / 1 / 9 | not found | A: name not in the guide text |
| SAUSAGE, PEPPERS & ONIONS Skillet | 1 slice - medium | only in draft A | 220 / 11 / 4.5 / 0 / 45 / 350 / 22 / 1 / 1 / 9 | not found | A: name not in the guide text |
| SAUSAGE, PEPPERS & ONIONS Skillet | 1 slice - large | only in draft A | 240 / 11 / 5 / 0 / 45 / 400 / 24 / 1 / 1 / 10 | not found | A: name not in the guide text |
| SAUSAGE, PEPPERS & ONIONS Thin | 1 slice - small | only in draft A | 130 / 7 / 4 / 0 / 35 / 270 / 9 / 0 / 1 / 6 | not found | A: name not in the guide text |
| SAUSAGE, PEPPERS & ONIONS Thin | 1 slice - medium | only in draft A | 140 / 8 / 4 / 0 / 45 / 300 / 9 / 0 / 1 / 7 | not found | A: name not in the guide text |
| SAUSAGE, PEPPERS & ONIONS Thin | 1 slice - large | only in draft A | 160 / 8 / 4 / 0 / 45 / 330 / 12 / 1 / 1 / 8 | not found | A: name not in the guide text |
| CHOICE YOUR CRUST Values Include Cheese Original | 1 slice - small | only in draft A | 150 / 5 / 3 / 0 / 10 / 180 / 19 / 1 / 1 / 6 | not found | A: name not in the guide text |
| CHOICE YOUR CRUST Values Include Cheese Original | 1 slice - medium | only in draft A | 180 / 7 / 4 / 0 / 20 / 250 / 18 / 1 / 1 / 9 | not found | A: name not in the guide text |
| CHOICE YOUR CRUST Values Include Cheese Original | 1 slice - large | only in draft A | 210 / 8 / 5 / 0 / 25 / 290 / 23 / 1 / 1 / 10 | not found | A: name not in the guide text |
| CHOICE YOUR CRUST Values Include Cheese Skillet | 1 slice - small | only in draft A | 180 / 7 / 3 / 0 / 10 / 200 / 21 / 1 / 1 / 7 | not found | A: name not in the guide text |
| CHOICE YOUR CRUST Values Include Cheese Skillet | 1 slice - medium | only in draft A | 220 / 11 / 5 / 0 / 20 / 270 / 20 / 1 / 1 / 9 | not found | A: name not in the guide text |
| CHOICE YOUR CRUST Values Include Cheese Skillet | 1 slice - large | only in draft A | 230 / 10 / 5 / 0 / 25 / 300 / 23 / 1 / 1 / 10 | not found | A: name not in the guide text |
| CHOICE YOUR CRUST Values Include Cheese Thin | 1 slice - small | only in draft A | 80 / 4 / 2 / 0 / 10 / 130 / 7 / 0 / 0 / 4 | not found | A: name not in the guide text |
| CHOICE YOUR CRUST Values Include Cheese Thin | 1 slice - medium | only in draft A | 90 / 5 / 3 / 0 / 15 / 150 / 7 / 0 / 0 / 5 | not found | A: name not in the guide text |
| CHOICE YOUR CRUST Values Include Cheese Thin | 1 slice - large | only in draft A | 110 / 5 / 3 / 0 / 15 / 170 / 9 / 0 / 0 / 6 | not found | A: name not in the guide text |
| CHEESE | 1 slice - small | only in draft A | 190 / 7 / 4 / 0 / 20 / 290 / 20 / 1 / 2 / 9 | not found | A: numbers found after the name (line 260); check the size |
| CHEESE | 1 slice - medium | only in draft A | 190 / 7 / 4 / 0 / 20 / 290 / 19 / 1 / 2 / 9 | not found | A: numbers found after the name (line 260); check the size |
| CHEESE | 1 slice - large | only in draft A | 220 / 8 / 5 / 0 / 25 / 340 / 24 / 1 / 2 / 11 | not found | A: numbers found after the name (line 260); check the size |
| CHEESE | 1 slice | only in draft A | 330 / 12 / 7 / 0 / 35 / 510 / 37 / 2 / 3 / 16 | not found | A: not as drafted (line 830 lacks 330, 12, 35, 510, 37, 16) |
| CHICKEN | 1 slice - small | only in draft A | 160 / 5 / 3 / 0 / 15 / 270 / 20 / 1 / 2 / 8 | not found | A: numbers found after the name (line 274); check the size |
| CHICKEN | 1 slice - medium | only in draft A | 160 / 5 / 3 / 0 / 20 / 280 / 19 / 1 / 1 / 8 | not found | A: numbers found after the name (line 274); check the size |
| CHICKEN | 1 slice - large | only in draft A | 190 / 6 / 3 / 0 / 20 / 330 / 24 / 1 / 2 / 9 | not found | A: numbers found after the name (line 274); check the size |
| CHICKEN | 1 slice | only in draft A | 120 / 5 / 3 / 0 / 20 / 260 / 11 / 1 / 1 / 7 | not found | A: numbers found after the name (line 304); check the size |
| CANADIAN BACON | 1 slice - small | only in draft A | 160 / 5 / 2 / 0 / 15 / 280 / 20 / 1 / 2 / 7 | not found | A: numbers found after the name (line 307); check the size |
| CANADIAN BACON | 1 slice - medium | only in draft A | 170 / 6 / 3 / 0 / 20 / 360 / 19 / 1 / 2 / 9 | not found | A: numbers found after the name (line 307); check the size |
| CANADIAN BACON | 1 slice - large | only in draft A | 200 / 6 / 3 / 0 / 20 / 410 / 24 / 1 / 2 / 10 | not found | A: numbers found after the name (line 307); check the size |
| CANADIAN BACON | 1 slice | only in draft A | 170 / 6 / 3 / 0 / 20 / 500 / 22 / 1 / 3 / 7 | not found | A: not as drafted (line 307 lacks 500, 22) |
| GARLIC CHEESE | 1 slice - small | only in draft A | 200 / 9 / 4 / 0 / 20 / 260 / 19 / 1 / 1 / 8 | not found | A: numbers found after the name (line 320); check the size |
| GARLIC CHEESE | 1 slice - medium | only in draft A | 210 / 10 / 5 / 0 / 20 / 280 / 18 / 1 / 1 / 9 | not found | A: numbers found after the name (line 320); check the size |
| GARLIC CHEESE | 1 slice - large | only in draft A | 250 / 12 / 5 / 0 / 25 / 330 / 23 / 1 / 1 / 10 | not found | A: numbers found after the name (line 320); check the size |
| ITALIAN SAUSAGE | 1 slice - small | only in draft A | 180 / 7 / 3 / 0 / 20 / 300 / 20 / 1 / 2 / 8 | not found | A: numbers found after the name (line 333); check the size |
| ITALIAN SAUSAGE | 1 slice - medium | only in draft A | 180 / 7 / 4 / 0 / 20 / 310 / 19 / 1 / 1 / 8 | not found | A: numbers found after the name (line 333); check the size |
| ITALIAN SAUSAGE | 1 slice - large | only in draft A | 210 / 8 / 4 / 0 / 20 / 350 / 24 / 1 / 2 / 10 | not found | A: numbers found after the name (line 333); check the size |
| DA BIG POPPER - Skillet Crust | 1 slice - large | only in draft A | 310 / 17 / 8 / 0 / 40 / 540 / 26 / 1 / 3 / 13 | not found | A: name not in the guide text |
| DA BIG POPPER - Stuffed Crust | 1 slice - medium | only in draft A | 280 / 17 / 7 / 0 / 40 / 550 / 20 / 1 / 2 / 11 | not found | A: name not in the guide text |
| DA BIG POPPER - Stuffed Crust | 1 slice - large | only in draft A | 320 / 18 / 8 / 0 / 40 / 631 / 26 / 1 / 3 / 13 | not found | A: name not in the guide text |
| DA BIG POPPER - Thin Crust | 1 slice - small | only in draft A | 150 / 9 / 5 / 0 / 30 / 330 / 10 / 0 / 2 / 6 | not found | A: name not in the guide text |
| DA BIG POPPER - Thin Crust | 1 slice - medium | only in draft A | 170 / 11 / 5 / 0 / 30 / 360 / 10 / 0 / 2 / 7 | not found | A: name not in the guide text |
| DA BIG POPPER - Thin Crust | 1 slice - large | only in draft A | 190 / 12 / 6 / 0 / 35 / 410 / 13 / 1 / 3 / 8 | not found | A: name not in the guide text |
| DA BIG POPPER - Gluten Free Crust | 1 slice | only in draft A | 240 / 12 / 6 / 0 / 30 / 590 / 24 / 1 / 4 / 9 | not found | A: name not in the guide text |
| MACARONI & CHEESE - Original Crust | 1 slice - small | only in draft A | 210 / 9 / 4 / 0 / 20 / 390 / 24 / 1 / 1 / 9 | not found | A: name not in the guide text |
| MACARONI & CHEESE - Original Crust | 1 slice - medium | only in draft A | 220 / 10 / 5 / 0 / 25 / 420 / 23 / 1 / 2 / 9 | not found | A: name not in the guide text |
| MACARONI & CHEESE - Original Crust | 1 slice - large | only in draft A | 260 / 11 / 5 / 0 / 25 / 470 / 28 / 1 / 2 / 11 | not found | A: name not in the guide text |
| MACARONI & CHEESE - Skillet Crust | 1 slice - small | only in draft A | 230 / 10 / 5 / 0 / 20 / 410 / 26 / 1 / 2 / 9 | not found | A: name not in the guide text |
| MACARONI & CHEESE - Skillet Crust | 1 slice - medium | only in draft A | 250 / 11 / 5 / 0 / 25 / 430 / 25 / 1 / 2 / 10 | not found | A: name not in the guide text |
| MACARONI & CHEESE - Skillet Crust | 1 slice - large | only in draft A | 280 / 13 / 6 / 0 / 25 / 480 / 28 / 1 / 2 / 11 | not found | A: name not in the guide text |
| MACARONI & CHEESE - Stuffed Crust | 1 slice - medium | only in draft A | 270 / 14 / 6 / 0 / 25 / 540 / 25 / 1 / 1 / 11 | not found | A: name not in the guide text |
| MACARONI & CHEESE - Stuffed Crust | 1 slice - large | only in draft A | 290 / 15 / 7 / 0 / 30 / 600 / 27 / 1 / 1 / 12 | not found | A: name not in the guide text |
| MACARONI & CHEESE - Thin Crust | 1 slice - small | only in draft A | 150 / 8 / 4 / 0 / 20 / 330 / 12 / 0 / 1 / 7 | not found | A: name not in the guide text |
| MACARONI & CHEESE - Thin Crust | 1 slice - medium | only in draft A | 160 / 9 / 5 / 0 / 25 / 360 / 12 / 0 / 1 / 7 | not found | A: name not in the guide text |
| MACARONI & CHEESE - Thin Crust | 1 slice - large | only in draft A | 190 / 10 / 5 / 0 / 25 / 410 / 15 / 1 / 1 / 9 | not found | A: name not in the guide text |
| PRAIRIE - Original Crust | 1 slice - small | only in draft A | 160 / 5 / 3 / 0 / 10 / 250 / 21 / 1 / 2 / 7 | not found | A: name not in the guide text |
| PRAIRIE - Original Crust | 1 slice - medium | only in draft A | 170 / 5 / 3 / 0 / 15 / 260 / 20 / 1 / 2 / 7 | not found | A: name not in the guide text |
| PRAIRIE - Original Crust | 1 slice - large | only in draft A | 200 / 6 / 3 / 0 / 15 / 310 / 25 / 2 / 2 / 9 | not found | A: name not in the guide text |
| PRAIRIE - Skillet Crust | 1 slice - small | only in draft A | 190 / 6 / 3 / 0 / 10 / 270 / 23 / 2 / 2 / 7 | not found | A: name not in the guide text |
| PRAIRIE - Skillet Crust | 1 slice - medium | only in draft A | 190 / 7 / 4 / 0 / 15 / 280 / 22 / 2 / 2 / 8 | not found | A: name not in the guide text |
| PRAIRIE - Skillet Crust | 1 slice - large | only in draft A | 220 / 8 / 4 / 0 / 15 / 320 / 25 / 2 / 2 / 8 | not found | A: name not in the guide text |
| PRAIRIE - Stuffed Crust | 1 slice - medium | only in draft A | 230 / 11 / 5 / 0 / 20 / 430 / 22 / 1 / 2 / 9 | not found | A: name not in the guide text |
| PRAIRIE - Stuffed Crust | 1 slice - large | only in draft A | 250 / 11 / 5 / 0 / 20 / 470 / 25 / 2 / 2 / 10 | not found | A: name not in the guide text |
| PRAIRIE - Thin Crust | 1 slice - small | only in draft A | 100 / 4 / 2 / 0 / 10 / 190 / 9 / 1 / 1 / 5 | not found | A: name not in the guide text |
| PRAIRIE - Thin Crust | 1 slice - medium | only in draft A | 110 / 5 / 3 / 0 / 15 / 210 / 9 / 1 / 1 / 5 | not found | A: name not in the guide text |
| PRAIRIE - Thin Crust | 1 slice - large | only in draft A | 130 / 5 / 3 / 0 / 15 / 250 / 12 / 1 / 2 / 6 | not found | A: name not in the guide text |
| ROUNDUP - Original Crust | 1 slice - small | only in draft A | 180 / 7 / 3 / 0 / 20 / 314 / 20 / 1 / 2 / 8 | not found | A: name not in the guide text |
| ROUNDUP - Original Crust | 1 slice - medium | only in draft A | 190 / 7 / 4 / 0 / 20 / 340 / 20 / 1 / 2 / 9 | not found | A: name not in the guide text |
| ROUNDUP - Original Crust | 1 slice - large | only in draft A | 220 / 8 / 4 / 0 / 20 / 380 / 25 / 2 / 2 / 10 | not found | A: name not in the guide text |
| ROUNDUP - Skillet Crust | 1 slice - small | only in draft A | 200 / 8 / 4 / 0 / 20 / 330 / 23 / 2 / 2 / 8 | not found | A: name not in the guide text |
| ROUNDUP - Skillet Crust | 1 slice - medium | only in draft A | 210 / 9 / 4 / 0 / 20 / 350 / 22 / 2 / 2 / 9 | not found | A: name not in the guide text |
| ROUNDUP - Skillet Crust | 1 slice - large | only in draft A | 240 / 11 / 5 / 0 / 23 / 400 / 25 / 2 / 2 / 10 | not found | A: name not in the guide text |
| ROUNDUP - Stuffed Crust | 1 slice - medium | only in draft A | 250 / 13 / 6 / 0 / 25 / 490 / 22 / 1 / 1 / 10 | not found | A: name not in the guide text |
| ROUNDUP - Stuffed Crust | 1 slice - large | only in draft A | 270 / 13 / 6 / 0 / 26 / 530 / 25 / 2 / 2 / 11 | not found | A: name not in the guide text |
| ROUNDUP - Thin Crust | 1 slice - small | only in draft A | 120 / 6 / 3 / 0 / 20 / 260 / 9 / 1 / 1 / 6 | not found | A: name not in the guide text |
| ROUNDUP - Thin Crust | 1 slice - medium | only in draft A | 130 / 7 / 4 / 0 / 20 / 280 / 9 / 1 / 1 / 7 | not found | A: name not in the guide text |
| ROUNDUP - Thin Crust | 1 slice - large | only in draft A | 150 / 8 / 4 / 0 / 23 / 330 / 12 / 1 / 2 / 8 | not found | A: name not in the guide text |
| ROUNDUP - Gluten Free Crust | 1 slice | only in draft A | 190 / 7 / 3 / 0 / 20 / 480 / 23 / 1 / 3 / 7 | not found | A: name not in the guide text |
| STAMPEDE - Original Crust | 1 slice - small | only in draft A | 190 / 7 / 3 / 0 / 20 / 340 / 20 / 1 / 2 / 8 | not found | A: name not in the guide text |
| STAMPEDE - Original Crust | 1 slice - medium | only in draft A | 200 / 8 / 4 / 0 / 60 / 370 / 20 / 1 / 2 / 9 | not found | A: name not in the guide text |
| STAMPEDE - Original Crust | 1 slice - large | only in draft A | 230 / 8 / 4 / 0 / 20 / 420 / 25 / 2 / 2 / 10 | not found | A: name not in the guide text |
| STAMPEDE - Skillet Crust | 1 slice - small | only in draft A | 210 / 8 / 4 / 0 / 20 / 360 / 23 / 2 / 2 / 9 | not found | A: name not in the guide text |
| STAMPEDE - Skillet Crust | 1 slice - medium | only in draft A | 220 / 9 / 4 / 0 / 20 / 390 / 22 / 2 / 2 / 9 | not found | A: name not in the guide text |
| STAMPEDE - Skillet Crust | 1 slice - large | only in draft A | 250 / 10 / 5 / 0 / 20 / 430 / 25 / 2 / 2 / 10 | not found | A: name not in the guide text |
| STAMPEDE - Stuffed Crust | 1 slice - medium | only in draft A | 260 / 13 / 6 / 0 / 30 / 510 / 22 / 1 / 2 / 11 | not found | A: name not in the guide text |
| STAMPEDE - Stuffed Crust | 1 slice - large | only in draft A | 280 / 13 / 6 / 0 / 30 / 560 / 25 / 2 / 2 / 11 | not found | A: name not in the guide text |
| STAMPEDE - Thin Crust | 1 slice - small | only in draft A | 130 / 6 / 3 / 0 / 20 / 290 / 9 / 1 / 1 / 6 | not found | A: name not in the guide text |
| STAMPEDE - Thin Crust | 1 slice - medium | only in draft A | 140 / 7 / 4 / 2 / 20 / 320 / 9 / 1 / 1 / 7 | not found | A: name not in the guide text |
| STAMPEDE - Thin Crust | 1 slice - large | only in draft A | 160 / 8 / 4 / 0 / 20 / 360 / 12 / 1 / 2 / 8 | not found | A: name not in the guide text |
| STAMPEDE - Gluten Free Crust | 1 slice | only in draft A | 200 / 8 / 3 / 0 / 2 / 210 / 23 / 1 / 3 / 7 | not found | A: name not in the guide text |
| SWEET CHILI - Original Crust | 1 slice - small | only in draft A | 190 / 5 / 3 / 0 / 15 / 380 / 27 / 1 / 8 / 8 | not found | A: name not in the guide text |
| SWEET CHILI - Original Crust | 1 slice - medium | only in draft A | 180 / 5 / 3 / 0 / 20 / 370 / 25 / 1 / 7 / 8 | not found | A: name not in the guide text |
| SWEET CHILI - Original Crust | 1 slice - large | only in draft A | 220 / 6 / 3 / 0 / 20 / 420 / 30 / 1 / 7 / 10 | not found | A: name not in the guide text |
| SWEET CHILI - Skillet Crust | 1 slice - small | only in draft A | 210 / 6 / 3 / 0 / 15 / 400 / 30 / 1 / 8 / 8 | not found | A: name not in the guide text |
| SWEET CHILI - Skillet Crust | 1 slice - medium | only in draft A | 210 / 7 / 4 / 0 / 20 / 390 / 27 / 1 / 7 / 9 | not found | A: name not in the guide text |
| SWEET CHILI - Skillet Crust | 1 slice - large | only in draft A | 230 / 8 / 4 / 0 / 20 / 430 / 30 / 1 / 7 / 10 | not found | A: name not in the guide text |
| SWEET CHILI - Stuffed Crust | 1 slice - medium | only in draft A | 250 / 11 / 5 / 0 / 25 / 520 / 26 / 1 / 5 / 10 | not found | A: name not in the guide text |
| SWEET CHILI - Stuffed Crust | 1 slice - large | only in draft A | 260 / 11 / 5 / 0 / 25 / 550 / 29 / 1 / 6 / 11 | not found | A: name not in the guide text |
| SWEET CHILI - Thin Crust | 1 slice - small | only in draft A | 120 / 4 / 2 / 0 / 15 / 320 / 16 / 0 / 8 / 6 | not found | A: name not in the guide text |
| SWEET CHILI - Thin Crust | 1 slice - medium | only in draft A | 130 / 5 / 3 / 0 / 20 / 320 / 14 / 0 / 7 / 6 | not found | A: name not in the guide text |
| SWEET CHILI - Thin Crust | 1 slice - large | only in draft A | 150 / 5 / 3 / 0 / 20 / 360 / 17 / 1 / 7 / 7 | not found | A: name not in the guide text |
| SWEET SWINE - Original Crust | 1 slice - small | only in draft A | 170 / 5 / 2.5 / 0 / 20 / 330 / 21 / 1 / 2 / 8 | not found | A: name not in the guide text |
| SWEET SWINE - Original Crust | 1 slice - medium | only in draft A | 170 / 6 / 3 / 0 / 20 / 320 / 20 / 1 / 3 / 8 | not found | A: name not in the guide text |
| SWEET SWINE - Original Crust | 1 slice - large | only in draft A | 200 / 6 / 3 / 0 / 20 / 370 / 26 / 1.5 / 3 / 10 | not found | A: name not in the guide text |
| SWEET SWINE - Skillet Crust | 1 slice - small | only in draft A | 190 / 7 / 3 / 0 / 20 / 350 / 24 / 1.5 / 3 / 9 | not found | A: name not in the guide text |
| SWEET SWINE - Skillet Crust | 1 slice - medium | only in draft A | 200 / 7 / 3 / 0 / 20 / 340 / 22 / 1 / 3 / 9 | not found | A: name not in the guide text |
| SWEET SWINE - Skillet Crust | 1 slice - large | only in draft A | 220 / 8 / 4 / 0 / 20 / 380 / 26 / 2 / 3 / 10 | not found | A: name not in the guide text |
| SWEET SWINE - Stuffed Crust | 1 slice - medium | only in draft A | 240 / 11 / 5 / 0 / 20 / 480 / 23 / 1 / 2 / 10 | not found | A: name not in the guide text |
| SWEET SWINE - Stuffed Crust | 1 slice - large | only in draft A | 250 / 11 / 5 / 0 / 30 / 520 / 25 / 2 / 3 / 11 | not found | A: name not in the guide text |
| SWEET SWINE - Thin Crust | 1 slice - small | only in draft A | 110 / 5 / 2 / 0 / 20 / 270 / 10 / 1 / 2 / 6 | not found | A: name not in the guide text |
| SWEET SWINE - Thin Crust | 1 slice - medium | only in draft A | 110 / 5 / 3 / 0 / 20 / 270 / 10 / 1 / 2 / 7 | not found | A: name not in the guide text |
| SWEET SWINE - Thin Crust | 1 slice - large | only in draft A | 130 / 6 / 3 / 0 / 20 / 310 / 13 / 1 / 3 / 8 | not found | A: name not in the guide text |
| SWEET SWINE - Gluten Free Crust | 1 slice | only in draft A | 180 / 6 / 3 / 0 / 18 / 470 / 23 / 1 / 4 / 7 | not found | A: name not in the guide text |
| TEXAN TACO - Original Crust | 1 slice - small | only in draft A | 180 / 6 / 3 / 0 / 20 / 290 / 21 / 2 / 1 / 8 | not found | A: name not in the guide text |
| TEXAN TACO - Original Crust | 1 slice - medium | only in draft A | 190 / 7 / 4 / 0 / 20 / 330 / 21 / 2 / 2 / 9 | not found | A: name not in the guide text |
| TEXAN TACO - Original Crust | 1 slice - large | only in draft A | 220 / 8 / 4 / 0 / 20 / 380 / 26 / 2 / 2 / 11 | not found | A: name not in the guide text |
| TEXAN TACO - Skillet Crust | 1 slice - small | only in draft A | 200 / 8 / 4 / 0 / 20 / 310 / 24 / 2 / 1 / 9 | not found | A: name not in the guide text |
| TEXAN TACO - Skillet Crust | 1 slice - medium | only in draft A | 220 / 9 / 4 / 0 / 20 / 340 / 23 / 2 / 2 / 10 | not found | A: name not in the guide text |
| TEXAN TACO - Skillet Crust | 1 slice - large | only in draft A | 240 / 10 / 5 / 0 / 20 / 390 / 26 / 2 / 2 / 10 | not found | A: name not in the guide text |
| TEXAN TACO - Stuffed Crust | 1 slice - medium | only in draft A | 270 / 14 / 6 / 0 / 30 / 520 / 23 / 2 / 1 / 12 | not found | A: name not in the guide text |
| TEXAN TACO - Stuffed Crust | 1 slice - large | only in draft A | 280 / 13 / 7 / 0 / 30 / 550 / 26 / 2 / 2 / 12 | not found | A: name not in the guide text |
| TEXAN TACO - Thin Crust | 1 slice - small | only in draft A | 120 / 6 / 3 / 0 / 20 / 240 / 10 / 1 / 1 / 6 | not found | A: name not in the guide text |
| TEXAN TACO - Thin Crust | 1 slice - medium | only in draft A | 130 / 7 / 4 / 0 / 20 / 280 / 10 / 1 / 1 / 7 | not found | A: name not in the guide text |
| TEXAN TACO - Thin Crust | 1 slice - large | only in draft A | 150 / 7 / 4 / 0 / 20 / 310 / 13 / 1 / 1 / 8 | not found | A: name not in the guide text |
| TEXAN TACO - Gluten Free Crust | 1 slice | only in draft A | 190 / 7 / 4 / 0 / 20 / 480 / 24 / 1 / 2 / 7 | not found | A: name not in the guide text |
| TUSCAN ROMA - Original Crust | 1 slice - small | only in draft A | 160 / 6 / 4 / 0 / 15 / 220 / 19 / 1 / 1 / 7 | not found | A: name not in the guide text |
| TUSCAN ROMA - Original Crust | 1 slice - medium | only in draft A | 170 / 7 / 4 / 0 / 20 / 240 / 19 / 1 / 1 / 7 | not found | A: name not in the guide text |
| TUSCAN ROMA - Original Crust | 1 slice - large | only in draft A | 210 / 8 / 5 / 0 / 25 / 290 / 23 / 1 / 1 / 9 | not found | A: name not in the guide text |
| TUSCAN ROMA - Skillet Crust | 1 slice - small | only in draft A | 190 / 8 / 4 / 0 / 15 / 240 / 22 / 1 / 1 / 7 | not found | A: name not in the guide text |
| TUSCAN ROMA - Skillet Crust | 1 slice - medium | only in draft A | 200 / 9 / 5 / 0 / 20 / 260 / 21 / 1 / 1 / 8 | not found | A: name not in the guide text |
| TUSCAN ROMA - Skillet Crust | 1 slice - large | only in draft A | 220 / 10 / 5 / 0 / 25 / 300 / 23 / 1 / 1 / 9 | not found | A: name not in the guide text |
| TUSCAN ROMA - Stuffed Crust | 1 slice - medium | only in draft A | 240 / 13 / 6 / 0 / 25 / 430 / 21 / 1 / 1 / 9 | not found | A: name not in the guide text |
| TUSCAN ROMA - Stuffed Crust | 1 slice - large | only in draft A | 260 / 14 / 7 / 0 / 30 / 470 / 24 / 1 / 1 / 10 | not found | A: name not in the guide text |
| TUSCAN ROMA - Thin Crust | 1 slice - small | only in draft A | 100 / 5 / 3 / 0 / 15 / 160 / 8 / 0 / 1 / 5 | not found | A: name not in the guide text |
| TUSCAN ROMA - Thin Crust | 1 slice - medium | only in draft A | 110 / 6 / 4 / 0 / 20 / 190 / 8 / 0 / 1 / 5 | not found | A: name not in the guide text |
| TUSCAN ROMA - Thin Crust | 1 slice - large | only in draft A | 140 / 8 / 5 / 0 / 25 / 230 / 11 / 1 / 1 / 6 | not found | A: name not in the guide text |
| BREADSTICKS with Marinara | 1 order | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 1430 / 96 / 18 / 0 / 2440 / 113 / 8 / 12 / 20 / – | 1430 / 96 / 18 / 0 / – / 2440 / 113 / 8 / 12 / 20 | A: numbers found after the name (line 716); check the size; B: numbers found after the name (line 716); check the size |
| Single | 1 order | only in draft A | 280 / 23 / 4 / 0 / 20 / 260 / 18 / 3 / 14 / 1 | not found | A: numbers found after the name (line 797); check the size |
| CHICKEN FIESTA SALAD ADD Choice of Dressing | 1 salad | differ: trans_fat_g | 180 / 7 / 3 / 0 / 70 / 800 / 9 / 3 / 5 / 21 | 180 / 7 / 3 / – / 70 / 800 / 9 / 3 / 5 / 21 | A: numbers found after the name (line 872); check the size; B: numbers found after the name (line 872); check the size |
| GARDEN SALAD ADD Choice of Dressing | 1 salad | differ: trans_fat_g | 90 / 5 / 3 / 0 / 15 / 130 / 7 / 3 / 4 / 5 | 90 / 5 / 3 / – / 15 / 130 / 7 / 3 / 4 / 5 | A: numbers found after the name (line 873); check the size; B: numbers found after the name (line 873); check the size |
| ITALIAN CHOP SALAD with Italian Herb Vinaigrette | 1 salad | differ: trans_fat_g | 770 / 68 / 15 / 0 / 250 / 2730 / 17 / 5 / 3 / 16 | 770 / 68 / 15 / – / 250 / 2730 / 17 / 5 / 3 / 16 | A: numbers found after the name (line 874); check the size; B: numbers found after the name (line 874); check the size |
| TACO SALAD ADD Choice of Dressing | 1 salad | differ: trans_fat_g | 480 / 32 / 4 / 0 / 35 / 770 / 37 / 4 / 9 / 13 | 480 / 32 / 4 / – / 35 / 770 / 37 / 4 / 9 / 13 | A: numbers found after the name (line 875); check the size; B: numbers found after the name (line 875); check the size |
| 1000 Island (pouch) | 1 packet | differ: trans_fat_g | 190 / 18 / 3 / 0 / 20 / 350 / 6 / 0 / 6 / 0 | 190 / 18 / 3 / – / 20 / 350 / 6 / 0 / 6 / 0 | A: numbers found after the name (line 877); check the size; B: numbers found after the name (line 877); check the size |
| Blue Cheese (pouch) | 1 packet | differ: trans_fat_g | 230 / 21 / 4 / 0 / 15 / 320 / 2 / 0 / 1 / 1 | 230 / 21 / 4 / – / 15 / 320 / 2 / 0 / 1 / 1 | A: numbers found after the name (line 878); check the size; B: numbers found after the name (line 878); check the size |
| Caesar (pouch) | 1 packet | differ: trans_fat_g | 170 / 17 / 3 / 0 / 20 / 440 / 3 / 0 / 1 / 2 | 170 / 17 / 3 / – / 20 / 440 / 3 / 0 / 1 / 2 | A: numbers found after the name (line 879); check the size; B: numbers found after the name (line 879); check the size |
| Fat Free French (pouch) | 1 packet | differ: trans_fat_g | 50 / 0 / 0 / 0 / 0 / 470 / 12 / 1 / 10 / 0 | 50 / 0 / 0 / – / 0 / 470 / 12 / 1 / 10 / 0 | A: numbers found after the name (line 880); check the size; B: numbers found after the name (line 880); check the size |
| Fat Free Ranch (pouch) | 1 packet | differ: trans_fat_g | 40 / 0 / 0 / 0 / 0 / 520 / 10 / 1 / 4 / 0 | 40 / 0 / 0 / – / 0 / 520 / 10 / 1 / 4 / 0 | A: numbers found after the name (line 881); check the size; B: numbers found after the name (line 881); check the size |
| Lite Italian (pouch) | 1 packet | differ: trans_fat_g | 60 / 5 / 1 / 0 / 0 / 310 / 3 / 0 / 3 / 0 | 60 / 5 / 1 / – / 0 / 310 / 3 / 0 / 3 / 0 | A: numbers found after the name (line 882); check the size; B: numbers found after the name (line 882); check the size |
| Ranch (pouch) | 1 packet | differ: trans_fat_g | 190 / 20 / 3 / 0 / 15 / 270 / 2 / 0 / 0 / 1 | 190 / 20 / 3 / – / 15 / 270 / 2 / 0 / 0 / 1 | A: numbers found after the name (line 883); check the size; B: numbers found after the name (line 883); check the size |
| Chopped Lettuce | 1 cup | differ: trans_fat_g | 10 / 0 / 0 / 0 / 0 / 5 / 2 / 1 / 1 / 1 | 10 / 0 / 0 / – / 0 / 5 / 2 / 1 / 1 / 1 | A: numbers found after the name (line 886); check the size; B: numbers found after the name (line 886); check the size |
| Romaine Chopped | 1 cup | differ: trans_fat_g | 10 / 0 / 0 / 0 / 0 / 0 / 2 / 1 / 1 / 1 | 10 / 0 / 0 / – / 0 / 0 / 2 / 1 / 1 / 1 | A: numbers found after the name (line 887); check the size; B: numbers found after the name (line 887); check the size |
| Shredded Lettuce | 1 cup | differ: trans_fat_g | 10 / 0 / 0 / 0 / 0 / 5 / 2 / 1 / 1 / 1 | 10 / 0 / 0 / – / 0 / 5 / 2 / 1 / 1 / 1 | A: numbers found after the name (line 888); check the size; B: numbers found after the name (line 888); check the size |
| Spinach | 1 cup | differ: trans_fat_g | 5 / 0 / 0 / 0 / 0 / 25 / 1 / 1 / 0 / 1 | 5 / 0 / 0 / – / 0 / 25 / 1 / 1 / 0 / 1 | A: numbers found after the name (line 889); check the size; B: numbers found after the name (line 889); check the size |
| Spring Mix | 1 cup | differ: trans_fat_g | 10 / 0 / 0 / 0 / 0 / 15 / 2 / 1 / 1 / 1 | 10 / 0 / 0 / – / 0 / 15 / 2 / 1 / 1 / 1 | A: numbers found after the name (line 890); check the size; B: numbers found after the name (line 890); check the size |
| 1000 Island | 2 Tbl | differ: trans_fat_g | 110 / 10 / 2 / 0 / 5 / 280 / 5 / 0 / 5 / 0 | 110 / 10 / 2 / – / 5 / 280 / 5 / 0 / 5 / 0 | A: numbers found after the name (line 892); check the size; B: numbers found after the name (line 892); check the size |
| Buttermilk Ranch | 2 Tbl | differ: trans_fat_g | 140 / 15 / 3 / 0 / 5 / 290 / 2 / 0 / 1 / 0 | 140 / 15 / 3 / – / 5 / 290 / 2 / 0 / 1 / 0 | A: numbers found after the name (line 893); check the size; B: numbers found after the name (line 893); check the size |
| Dorothy Lynch Dressing | 2 Tbl | differ: trans_fat_g | 100 / 7 / 1 / 0 / 0 / 120 / 9 / 0 / 0 / 1 | 100 / 7 / 1 / – / 0 / 120 / 9 / 0 / 0 / 1 | A: numbers found after the name (line 894); check the size; B: numbers found after the name (line 894); check the size |
| French | 2 Tbl | differ: trans_fat_g | 140 / 11 / 2 / 0 / 0 / 340 / 11 / 0 / 10 / 0 | 140 / 11 / 2 / – / 0 / 340 / 11 / 0 / 10 / 0 | A: numbers found after the name (line 895); check the size; B: numbers found after the name (line 895); check the size |
| Italian Herb Vinaigrette | 2 Tbl | differ: trans_fat_g | 120 / 13 / 2 / 0 / 0 / 240 / 1 / 0 / 1 / 0 | 120 / 13 / 2 / – / 0 / 240 / 1 / 0 / 1 / 0 | A: numbers found after the name (line 896); check the size; B: numbers found after the name (line 896); check the size |
| Bacon Diced | 2 oz | differ: trans_fat_g | 240 / 16 / 8 / 0 / 80 / 850 / 0 / 0 / 0 / 16 | 240 / 16 / 8 / – / 80 / 850 / 0 / 0 / 0 / 16 | A: numbers found after the name (line 905); check the size; B: numbers found after the name (line 905); check the size |
| Classic Pepperoni | 2 oz | differ: trans_fat_g | 280 / 26 / 11 / 0 / 65 / 1060 / 0 / 0 / 0 / 9 | 280 / 26 / 11 / – / 65 / 1060 / 0 / 0 / 0 / 9 | A: numbers found after the name (line 906); check the size; B: numbers found after the name (line 906); check the size |
| Green Olives | 1 Tbl | differ: cholesterol_mg, sodium_mg | 15 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 | 15 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 / 0 | A: numbers found after the name (line 939); check the size, mostly zeros: look; B: numbers found after the name (line 939); check the size, mostly zeros: look |
| Green Peas | 1/4 cup | differ: sodium_mg, carbs_g, fiber_g | 30 / 0 / 0 / 0 / 0 / 0 / 2 / 0 / 2 / 2 | 30 / 0 / 0 / 0 / 0 / 2 / 0 / 2 / 2 / 2 | A: numbers found after the name (line 940); check the size; B: not as drafted (line 940 lacks 2) |
| Green Peppers | 2 oz | differ: sodium_mg, carbs_g, sugars_g | 10 / 0 / 0 / 0 / 0 / 0 / 3 / 1 / 1 / 0 | 10 / 0 / 0 / 0 / 0 / 3 / 1 / 1 / 0 / 0 | A: numbers found after the name (line 941); check the size; B: numbers found after the name (line 941); check the size |
| Radish | 2 oz | differ: cholesterol_mg, sodium_mg, carbs_g, sugars_g | 10 / 0 / 0 / 0 / 0 / 20 / 2 / 1 / 1 / 0 | 10 / 0 / 0 / 0 / 20 / 2 / 1 / 1 / 0 / 0 | A: numbers found after the name (line 942); check the size; B: numbers found after the name (line 942); check the size |
| Red Bell Peppers | 2 oz | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 20 / 0 / 0 / 0 / 0 / 0 / 3 / 1 / 2 / 1 | 20 / 0 / 0 / 0 / 0 / 3 / 1 / 2 / 1 / 1 | A: numbers found after the name (line 943); check the size; B: not as drafted (line 943 lacks 1) |
| Red Onions | 1/4 cup | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 10 / 0 / 0 / 0 / 0 / 0 / 3 / 0 / 1 / 0 | 10 / 0 / 0 / 0 / 0 / 3 / 0 / 1 / 0 / 0 | A: numbers found after the name (line 944); check the size; B: numbers found after the name (line 944); check the size |
| Bacon Bits | 1 Tbl | differ: cholesterol_mg, sodium_mg, carbs_g | 30 / 1 / 0 / 0 / 0 / 120 / 2 / 0 / 0 / 3 | 30 / 1 / 0 / 0 / 120 / 2 / 0 / 0 / 0 / 3 | A: numbers found after the name (line 946); check the size; B: numbers found after the name (line 946); check the size |
| Banana Peppers | 1 Tbl | differ: cholesterol_mg, sodium_mg | 0 / 0 / 0 / 0 / 0 / 75 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 75 / 0 / 0 / 0 / 0 / 0 | A: numbers found after the name (line 947); check the size, mostly zeros: look; B: numbers found after the name (line 947); check the size, mostly zeros: look |
| Black Olives | 1 Tbl | differ: cholesterol_mg, sodium_mg | 15 / 0 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 | 15 / 0 / 0 / 0 / 10 / 0 / 0 / 0 / 0 / 0 | A: numbers found after the name (line 948); check the size, mostly zeros: look; B: numbers found after the name (line 948); check the size, mostly zeros: look |
| Cheddar Cheese | 1/4 cup | differ: cholesterol_mg, sodium_mg | 30 / 3 / 2 / 0 / 5 / 45 / 0 / 0 / 0 / 2 | 30 / 3 / 2 / 0 / 45 / 0 / 0 / 0 / 0 / 2 | A: numbers found after the name (line 949); check the size; B: not as drafted (line 949 lacks 0) |
| Croutons | 1 Tbl | differ: cholesterol_mg, sodium_mg, carbs_g | 15 / 1 / 0 / 0 / 0 / 45 / 3 / 0 / 0 / 1 | 15 / 1 / 0 / 0 / 45 / 3 / 0 / 0 / 0 / 1 | A: numbers found after the name (line 950); check the size; B: numbers found after the name (line 950); check the size |
| Pickled Beets | 1/4 cup | differ: cholesterol_mg, sodium_mg, carbs_g, fiber_g, sugars_g | 15 / 0 / 0 / 0 / 0 / 85 / 5 / 1 / 3 / 1 | 15 / 0 / 0 / 0 / 85 / 5 / 1 / 3 / 1 / 1 | A: numbers found after the name (line 951); check the size; B: numbers found after the name (line 951); check the size |
| Jalapenos | 1 Tbl | differ: cholesterol_mg, sodium_mg | 0 / 0 / 0 / 0 / 0 / 60 / 0 / 0 / 0 / 0 | 0 / 0 / 0 / 0 / 60 / 0 / 0 / 0 / 0 / 0 | A: numbers found after the name (line 952); check the size, mostly zeros: look; B: numbers found after the name (line 952); check the size, mostly zeros: look |
| Raisins | 1 Tbl | differ: sodium_mg, carbs_g, fiber_g, sugars_g | 25 / 0 / 0 / 0 / 0 / 0 / 7 / 0 / 5 / 0 | 25 / 0 / 0 / 0 / 0 / 7 / 0 / 5 / 0 / 0 | A: numbers found after the name (line 953); check the size; B: numbers found after the name (line 953); check the size |
| Sunflower Seeds | 1 Tbl | differ: cholesterol_mg, sodium_mg, carbs_g | 50 / 5 / 1 / 0 / 0 / 40 / 2 / 0 / 0 / 2 | 50 / 5 / 1 / 0 / 40 / 2 / 0 / 0 / 0 / 2 | A: numbers found after the name (line 954); check the size; B: numbers found after the name (line 954); check the size |
| Taco Chips | 2 chips | differ: cholesterol_mg, sodium_mg, carbs_g | 25 / 1 / 0 / 0 / 0 / 30 / 3 / 0 / 0 / 0 | 25 / 1 / 0 / 0 / 30 / 3 / 0 / 0 / 0 / 0 | A: numbers found after the name (line 955); check the size; B: numbers found after the name (line 955); check the size |
| 8 Pieces | 1 order | only in draft A | 1310 / 75 / 19 / 0 / 640 / 3310 / 28 / 3 / 8 / 130 | not found | A: numbers found after the name (line 1000); check the size |
| CACTUS BREAD | 1 slice | only in draft A | 180 / 5 / 2 / 0 / 0 / 140 / 30 / 1 / 12 / 3 | not found | A: numbers found after the name (line 1375); check the size |
| DESSERT PIZZA - APPLE | 1 slice | only in draft A | 140 / 3 / 1 / 0 / 0 / 105 / 26 / 1 / 8 / 3 | not found | A: numbers found after the name (line 1041); check the size |
| DESSERT PIZZA - BLUEBERRY | 1 slice | only in draft A | 140 / 3 / 1 / 0 / 0 / 110 / 27 / 1 / 8 / 3 | not found | A: numbers found after the name (line 1045); check the size |
| DESSERT PIZZA - CHERRY | 1 slice | only in draft A | 140 / 3 / 1 / 0 / 0 / 110 / 25 / 1 / 7 / 3 | not found | A: numbers found after the name (line 1049); check the size |
| DESSERT PIZZA - PEACH | 1 slice | only in draft A | 140 / 3 / 1 / 0 / 0 / 110 / 25 / 1 / 7 / 3 | not found | A: numbers found after the name (line 1053); check the size |
| CANE BREW - UNSWEET TEA | 18 fl. oz. | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 1441); check the size, mostly zeros: look |
| CANE BREW - UNSWEET TEA | 10 fl. oz. | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 1441); check the size, mostly zeros: look |
| CANE BREW - UNSWEET TEA | 16 fl. oz. | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 1441); check the size, mostly zeros: look |
| CANE BREW - UNSWEET TEA | 21 fl. oz. | only in draft A | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | not found | A: numbers found after the name (line 1441); check the size, mostly zeros: look |
| DR PEPPER | 18 fl. oz. | only in draft A | 220 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 1477); check the size, mostly zeros: look |
| DR PEPPER | 10 fl. oz. | only in draft A | 120 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 1477); check the size, mostly zeros: look |
| DR PEPPER | 16 fl. oz. | only in draft A | 190 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 1477); check the size, mostly zeros: look |
| DR PEPPER | 21 fl. oz. | only in draft A | 250 / – / – / – / – / – / – / – / – / – | not found | A: numbers found after the name (line 1477); check the size, mostly zeros: look |
| MOUNTAIN DEW | 18 fl. oz. | only in draft A | 250 / 0 / 0 / 0 / 0 / 80 / 66 / 0 / 66 / 0 | not found | A: numbers found after the name (line 1482); check the size |
| MOUNTAIN DEW | 10 fl. oz. | only in draft A | 140 / 0 / 0 / 0 / 0 / 45 / 37 / 0 / 37 / 0 | not found | A: numbers found after the name (line 1482); check the size |
| MOUNTAIN DEW | 16 fl. oz. | only in draft A | 220 / 0 / 0 / 0 / 0 / 70 / 59 / 0 / 58 / 0 | not found | A: numbers found after the name (line 1482); check the size |
| MOUNTAIN DEW | 21 fl. oz. | only in draft A | 290 / 0 / 0 / 0 / 0 / 90 / 77 / 0 / 77 / 0 | not found | A: not as drafted (line 1482 lacks 90, 77, 77) |
| MOUNTAIN DEW ZERO SUGAR | 21 fl. oz. | only in draft A | 0 / 0 / 0 / 0 / 0 / 80 / 0 / 0.5 / 0 / 0 | not found | A: not as drafted (line 1487 lacks 80, 0.5) |
| MUG ROOT BEER | 18 fl. oz. | only in draft A | 220 / 0 / 0 / 0 / 0 / 70 / 59 / 0 / 59 / 0 | not found | A: numbers found after the name (line 1492); check the size |
| MUG ROOT BEER | 10 fl. oz. | only in draft A | 120 / 0 / 0 / 0 / 0 / 40 / 33 / 0 / 33 / 0 | not found | A: numbers found after the name (line 1492); check the size |
| MUG ROOT BEER | 16 fl. oz. | only in draft A | 190 / 0 / 0 / 0 / 0 / 60 / 52 / 0 / 52 / 0 | not found | A: numbers found after the name (line 1492); check the size |
| MUG ROOT BEER | 21 fl. oz. | only in draft A | 250 / 0 / 0 / 0 / 0 / 80 / 69 / 0 / 68 / 0 | not found | A: not as drafted (line 1492 lacks 80, 69, 68) |
| PEPSI | 18 fl. oz. | only in draft A | 230 / 0 / 0 / 0 / 0 / 50 / 62 / 0 / 62 / 0 | not found | A: numbers found after the name (line 1497); check the size |
| PEPSI | 10 fl. oz. | only in draft A | 130 / 0 / 0 / 0 / 0 / 25 / 35 / 0 / 34 / 0 | not found | A: numbers found after the name (line 1497); check the size |
| PEPSI | 16 fl. oz. | only in draft A | 200 / 0 / 0 / 0 / 0 / 45 / 55 / 0 / 55 / 0 | not found | A: numbers found after the name (line 1497); check the size |
| PEPSI | 21 fl. oz. | only in draft A | 270 / 0 / 0 / 0 / 0 / 55 / 72 / 0 / 72 / 0 | not found | A: not as drafted (line 1497 lacks 72, 72) |
| STARRY | 18 fl. oz. | only in draft A | 220 / 0 / 0 / 0 / 0 / 50 / 58 / 0 / 58 / 0 | not found | A: numbers found after the name (line 1507); check the size |
| STARRY | 10 fl. oz. | only in draft A | 120 / 0 / 0 / 0 / 0 / 30 / 32 / 0 / 32 / 0 | not found | A: numbers found after the name (line 1507); check the size |
| ALASKAN AMBER | 12 fl.oz | both read numbers that can't be right: fiber 17 g above carbs 0 g | 190 / 0 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 0 | 190 / 0 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 0 | A: numbers found after the name (line 1591); check the size, mostly zeros: look; B: numbers found after the name (line 1591); check the size, mostly zeros: look |
| BUDWEISER | 12 fl.oz | the guide gives no sodium_mg, carbs_g, sugars_g, protein_g | 150 / 0 / 0 / 0 / 0 / – / – / 11 / – / – | 150 / 0 / 0 / 0 / 0 / – / – / 11 / – / – | A: numbers found after the name (line 1593); check the size, mostly zeros: look; B: numbers found after the name (line 1593); check the size, mostly zeros: look |
| BUDWEISER LIGHT | 12 fl.oz | the guide gives no sodium_mg, carbs_g, sugars_g | 110 / 0 / 0 / 0 / 0 / – / – / 7 / – / 0 | 110 / 0 / 0 / 0 / 0 / – / – / 7 / – / 0 | A: numbers found after the name (line 1594); check the size, mostly zeros: look; B: numbers found after the name (line 1594); check the size, mostly zeros: look |
| BUSCH LIGHT | 12 fl.oz | the guide gives no sodium_mg, carbs_g, sugars_g, protein_g | 100 / 0 / 0 / 0 / 0 / – / – / 3 / – / – | 100 / 0 / 0 / 0 / 0 / – / – / 3 / – / – | A: numbers found after the name (line 1595); check the size, mostly zeros: look; B: numbers found after the name (line 1595); check the size, mostly zeros: look |
| CITRADELIC TANGERINE IPA | 12 fl.oz | both read numbers that can't be right: fiber 17 g above carbs 0 g | 180 / 0 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 0 | 180 / 0 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 0 | A: numbers found after the name (line 1596); check the size, mostly zeros: look; B: numbers found after the name (line 1596); check the size, mostly zeros: look |
| COORS BANQUET | 12 fl.oz | the guide gives no sodium_mg, sugars_g, protein_g | 150 / 0 / 0 / 0 / 0 / – / 15 / 12 / – / – | 150 / 0 / 0 / 0 / 0 / – / 15 / 12 / – / – | A: numbers found after the name (line 1597); check the size; B: numbers found after the name (line 1597); check the size |
| COORS LIGHT | 12 fl.oz | the guide gives no protein_g | 100 / 0 / 0 / 0 / 0 / 0 / 10 / 5 / 0 / – | 100 / 0 / 0 / 0 / 0 / 0 / 10 / 5 / 0 / – | A: numbers found after the name (line 1598); check the size; B: numbers found after the name (line 1598); check the size |
| LEINENKUGEL | 12 fl.oz | the guide gives no sodium_mg, sugars_g, protein_g | 150 / 0 / 0 / 0 / 0 / – / 15 / 15 / – / – | 150 / 0 / 0 / 0 / 0 / – / 15 / 15 / – / – | A: numbers found after the name (line 1600); check the size; B: numbers found after the name (line 1600); check the size |
| MICHELOB GOLDEN | 12 fl.oz | the guide gives no sugars_g, protein_g | 120 / 0 / 0 / 0 / 0 / 0 / 10 / 7 / – / – | 120 / 0 / 0 / 0 / 0 / 0 / 10 / 7 / – / – | A: numbers found after the name (line 1601); check the size; B: numbers found after the name (line 1601); check the size |
| MICHELOB ULTRA | 12 fl.oz | the guide gives no sodium_mg, carbs_g, sugars_g, protein_g | 100 / 0 / 0 / 0 / 0 / – / – / 3 / – / – | 100 / 0 / 0 / 0 / 0 / – / – / 3 / – / – | A: numbers found after the name (line 1602); check the size, mostly zeros: look; B: numbers found after the name (line 1602); check the size, mostly zeros: look |
| MILLER LITE | 12 fl.oz | the guide gives no sugars_g, protein_g | 100 / 0 / 0 / 0 / 0 / 0 / 5 / 3 / – / – | 100 / 0 / 0 / 0 / 0 / 0 / 5 / 3 / – / – | A: numbers found after the name (line 1603); check the size; B: numbers found after the name (line 1603); check the size |
| PABST BLUE RIBBON | 12 fl.oz | both read numbers that can't be right: fiber 12 g above carbs 10 g | 140 / 0 / 0 / 0 / 0 / 0 / 10 / 12 / 0 / 4 | 140 / 0 / 0 / 0 / 0 / 0 / 10 / 12 / 0 / 4 | A: numbers found after the name (line 1604); check the size; B: numbers found after the name (line 1604); check the size |
| REDD'S APPLE ALE | 12 fl.oz | the guide gives no sodium_mg, sugars_g, protein_g | 170 / 0 / 0 / 0 / 0 / – / 20 / 17 / – / – | 170 / 0 / 0 / 0 / 0 / – / 20 / 17 / – / – | A: numbers found after the name (line 1605); check the size; B: numbers found after the name (line 1605); check the size |
| SAM ADAM'S LAGER | 12 fl.oz | both read numbers that can't be right: fiber 17 g above carbs 0 g | 180 / 0 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 0 | 180 / 0 / 0 / 0 / 0 / 0 / 0 / 17 / 0 / 0 | A: numbers found after the name (line 1606); check the size, mostly zeros: look; B: numbers found after the name (line 1606); check the size, mostly zeros: look |
| SAM ADAM'S SEASONAL | 12 fl.oz | both read numbers that can't be right: fiber 18 g above carbs 0 g | 200 / 0 / 0 / 0 / 0 / 0 / 0 / 18 / 0 / 0 | 200 / 0 / 0 / 0 / 0 / 0 / 0 / 18 / 0 / 0 | A: numbers found after the name (line 1607); check the size, mostly zeros: look; B: numbers found after the name (line 1607); check the size, mostly zeros: look |
| SMIRNOFF ICE ORIGINAL | 12 fl.oz | both read numbers that can't be right: fiber 32 g above carbs 0 g | 230 / 5 / 0 / 0 / 0 / 0 / 0 / 32 / 0 / 0 | 230 / 5 / 0 / 0 / 0 / 0 / 0 / 32 / 0 / 0 | A: numbers found after the name (line 1609); check the size; B: numbers found after the name (line 1609); check the size |
| VANILLA PORTER | 12 fl.oz | the guide gives no fat_g, saturated_fat_g, sodium_mg, carbs_g, fiber_g, sugars_g, protein_g | 220 / – / – / – / – / – / – / – / – / – | 220 / – / – / – / – / – / – / – / – / – | A: numbers found after the name (line 1610); check the size, mostly zeros: look; B: numbers found after the name (line 1610); check the size, mostly zeros: look |
| WEST O PILSNER | 12 fl.oz | the guide gives no sodium_mg | 180 / 0 / 0 / 0 / 0 / – / 13 / 0 / 0 / 0 | 180 / 0 / 0 / 0 / 0 / – / 13 / 0 / 0 / 0 | A: numbers found after the name (line 1611); check the size, mostly zeros: look; B: numbers found after the name (line 1611); check the size, mostly zeros: look |
| WEST O RED ALE | 12 fl.oz | the guide gives no sodium_mg | 200 / 0 / 0 / 0 / 0 / – / 15 / 0 / 0 / 0 | 200 / 0 / 0 / 0 / 0 / – / 15 / 0 / 0 / 0 | A: numbers found after the name (line 1612); check the size, mostly zeros: look; B: numbers found after the name (line 1612); check the size, mostly zeros: look |
| CABERNET SAUVIGNON | 5 fl oz | the guide gives no carbs_g, fiber_g | 120 / 0 / 0 / 0 / – / 4 / – / – / 0 / 0 | 120 / 0 / 0 / 0 / – / 4 / – / – / 0 / 0 | A: numbers found after the name (line 1638); check the size, mostly zeros: look; B: numbers found after the name (line 1638); check the size, mostly zeros: look |
| PINOT GRIGIO | 5 fl oz | the guide gives no carbs_g, fiber_g | 120 / 0 / 0 / 0 / – / 3 / – / – / 0 / 0 | 120 / 0 / 0 / 0 / – / 3 / – / – / 0 / 0 | A: numbers found after the name (line 1640); check the size, mostly zeros: look; B: numbers found after the name (line 1640); check the size, mostly zeros: look |
| Thin Crust | 1 slice - large | only in draft B | not found | 140 / 6 / 4 / 0 / 20 / 320 / 12 / 1 / 1 / 8 | B: numbers found after the name (line 258); check the size |
| Gluten Free Crust | 1 slice | only in draft B | not found | 180 / 7 / 3 / 0 / 20 / 480 / 23 / 1 / 3 / 7 | B: numbers found after the name (line 259); check the size |
| Jumbo | 1 slice | only in draft B | not found | 330 / 12 / 7 / 0 / 35 / 510 / 37 / 2 / 3 / 16 | B: numbers found after the name (line 272); check the size |
| Stuffed Crust | 1 slice - small | only in draft B | not found | 250 / 12 / 6 / 0 / 30 / 520 / 22 / 1 / 1 / 11 | B: numbers found after the name (line 389); check the size |
| COLESLAW | Single (1 order) | only in draft B | not found | 280 / 23 / 4 / 0 / 20 / 260 / 18 / 3 / 14 / 1 | B: numbers found after the name (line 796); check the size |
| CORN | Single (1 order) | only in draft B | not found | 180 / 1 / 0 / 0 / 0 / 0 / 38 / 4 / 5 / 5 | B: numbers found after the name (line 818); check the size |
| CORN | Family (1 order) | only in draft B | not found | 770 / 4 / 0 / 0 / 0 / 0 / 162 / 15 / 23 / 23 | B: numbers found after the name (line 818); check the size |
| FRENCH FRIES | Single (1 order) | only in draft B | not found | 550 / 34 / 7 / 0 / 0 / 820 / 58 / 3 / 0 / 5 | B: numbers found after the name (line 822); check the size |
| FRENCH FRIES | Family (1 order) | only in draft B | not found | 1040 / 62 / 13 / 0 / 0 / 1640 / 116 / 5 / 0 / 10 | B: numbers found after the name (line 822); check the size |
| GREEN BEANS | Single (1 order) | only in draft B | not found | 60 / 0 / 0 / 0 / 0 / 0 / 13 / 5 / 6 / 3 | B: numbers found after the name (line 826); check the size |
| GREEN BEANS | Family (1 order) | only in draft B | not found | 250 / 2 / 0 / 0 / 0 / 5 / 55 / 22 / 26 / 13 | B: numbers found after the name (line 826); check the size |
| MAC & CHEESE | Family (1 order) | only in draft B | not found | 1100 / 57 / 14 / 1 / 40 / 4380 / 127 / 4 / 20 / 20 | B: numbers found after the name (line 830); check the size |
| MASHED POTATOES with Gravy | Family (1 order) | only in draft B | not found | 1520 / 41 / 8 / 1 / 25 / 12150 / 238 / 8 / 6 / 11 | B: numbers found after the name (line 833); check the size |
| MASHED POTATOES without Gravy | Single (1 order) | only in draft B | not found | 130 / 5 / 2 / 0 / 5 / 490 / 20 / 2 / 1 / 2 | B: numbers found after the name (line 837); check the size |
| MASHED POTATOES without Gravy | Family (1 order) | only in draft B | not found | 690 / 24 / 8 / 1 / 25 / 2560 / 106 / 8 / 6 / 11 | B: numbers found after the name (line 837); check the size |
| RANCH CHIPS | Single (1 order) | only in draft B | not found | 270 / 18 / 3 / 0 / 0 / 120 / 24 / 1 / 0 / 2 | B: numbers found after the name (line 841); check the size |
| RANCH CHIPS | Family (1 order) | only in draft B | not found | 640 / 44 / 6 / 0 / 0 / 280 / 58 / 3 / 0 / 6 | B: numbers found after the name (line 841); check the size |
| RANCH POTATO WEDGES | Family (1 order) | only in draft B | not found | 1270 / 70 / 15 / 0 / 0 / 2600 / 142 / 16 / 0 / 16 | B: numbers found after the name (line 845); check the size |
| PASTA with Marinara | Family (1 order) | only in draft B | not found | 1030 / 40 / 6 / 0 / 0 / 1550 / 150 / 19 / 13 / 23 | B: numbers found after the name (line 957); check the size |
| Chicken Boxes | 8 Pieces (1 order) | only in draft B | not found | 1310 / 75 / 19 / 0 / 640 / 3310 / 28 / 3 / 8 / 130 | B: numbers found after the name (line 999); check the size |
| BROASTED SAUCY CHICKEN BBQ - Breast | 1 breast | only in draft B | not found | 330 / 13 / 4 / 0 / 125 / 1120 / 20 / 2 / 12 / 33 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN BBQ - Drumstick | 1 drumstick | only in draft B | not found | 150 / 5 / 1 / 0 / 55 / 610 / 16 / 1 / 10 / 12 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN BBQ - Thigh | 1 thigh | only in draft B | not found | 270 / 14 / 4 / 0 / 100 / 870 / 19 / 1 / 11 / 17 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN BBQ - Wing | 1 wing | only in draft B | not found | 150 / 5 / 2 / 0 / 40 / 610 / 17 / 1 / 10 / 8 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN BUFFALO - Breast | 1 breast | only in draft B | not found | 270 / 13 / 4 / 0 / 125 / 1530 / 5 / 1 / 2 / 32 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN BUFFALO - Drumstick | 1 drumstick | only in draft B | not found | 90 / 5 / 1 / 0 / 55 / 1020 / 2 / 0 / 1 / 11 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN BUFFALO - Thigh | 1 thigh | only in draft B | not found | 210 / 14 / 4 / 0 / 100 / 1280 / 4 / 1 / 1 / 16 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN BUFFALO - Wing | 1 wing | only in draft B | not found | 90 / 5 / 2 / 0 / 40 / 1010 / 3 / 0 / 0 / 7 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN GARLIC PARMESAN - Breast | 1 breast | only in draft B | not found | 360 / 22 / 5 / 0 / 125 / 1230 / 7 / 1 / 2 / 32 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN GARLIC PARMESAN - Drumstick | 1 drumstick | only in draft B | not found | 180 / 14 / 2 / 0 / 55 / 720 / 4 / 0 / 1 / 11 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN GARLIC PARMESAN - Thigh | 1 thigh | only in draft B | not found | 300 / 23 / 5 / 0 / 100 / 980 / 7 / 1 / 1 / 16 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN GARLIC PARMESAN - Wing | 1 wing | only in draft B | not found | 180 / 14 / 3 / 0 / 40 / 720 / 5 / 0 / 0 / 7 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN HONEY HOT - Breast | 1 breast | only in draft B | not found | 320 / 13 / 3 / 0 / 120 / 1090 / 20 / 1 / 15 / 32 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN HONEY HOT - Drumstick | 1 drumstick | only in draft B | not found | 150 / 5 / 1 / 0 / 60 / 580 / 17 / 0 / 14 / 11 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN HONEY HOT - Thigh | 1 thigh | only in draft B | not found | 270 / 14 / 4 / 0 / 100 / 840 / 20 / 0.5 / 15 / 16 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN HONEY HOT - Wing | 1 wing | only in draft B | not found | 140 / 5 / 1 / 0 / 42 / 580 / 18 / 0 / 13 / 7 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN MANGO HABANERO - Breast | 1 breast | only in draft B | not found | 370 / 13 / 4 / 0 / 125 / 910 / 17 / 1 / 14 / 32 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN MANGO HABANERO - Drumstick | 1 drumstick | only in draft B | not found | 190 / 5 / 1 / 0 / 55 / 400 / 14 / 0 / 13 / 11 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN MANGO HABANERO - Thigh | 1 thigh | only in draft B | not found | 310 / 14 / 4 / 0 / 100 / 660 / 16 / 1 / 13 / 16 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN MANGO HABANERO - Wing | 1 wing | only in draft B | not found | 190 / 5 / 2 / 0 / 40 / 400 / 15 / 0 / 12 / 7 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN NASHVILLE HOT - Breast | 1 breast | only in draft B | not found | 370 / 22 / 5 / 0 / 125 / 1050 / 11 / 2 / 7 / 32 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN NASHVILLE HOT - Drumstick | 1 drumstick | only in draft B | not found | 190 / 14 / 2 / 0 / 60 / 540 / 8 / 1 / 6 / 11 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN NASHVILLE HOT - Thigh | 1 thigh | only in draft B | not found | 310 / 23 / 5 / 0 / 100 / 800 / 10 / 2 / 6 / 16 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN NASHVILLE HOT - Wing | 1 wing | only in draft B | not found | 190 / 14 / 3 / 0 / 40 / 540 / 9 / 1 / 5 / 7 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN SESAME - Breast | 1 breast | only in draft B | not found | 400 / 20 / 4 / 0 / 125 / 1230 / 23 / 1 / 18 / 32 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN SESAME - Drumstick | 1 drumstick | only in draft B | not found | 220 / 11 / 2 / 0 / 55 / 710 / 20 / 0 / 16 / 11 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN SESAME - Thigh | 1 thigh | only in draft B | not found | 340 / 21 / 5 / 0 / 100 / 980 / 23 / 1 / 17 / 16 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN SESAME - Wing | 1 wing | only in draft B | not found | 220 / 12 / 2 / 0 / 40 / 710 / 21 / 0 / 16 / 7 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN SWEET CHILI - Breast | 1 breast | only in draft B | not found | 340 / 13 / 4 / 0 / 125 / 1090 / 23 / 1 / 18 / 32 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN SWEET CHILI - Drumstick | 1 drumstick | only in draft B | not found | 160 / 5 / 1 / 0 / 55 / 580 / 19 / 0 / 17 / 11 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN SWEET CHILI - Thigh | 1 thigh | only in draft B | not found | 280 / 14 / 4 / 0 / 100 / 840 / 22 / 1 / 17 / 16 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN SWEET CHILI - Wing | 1 wing | only in draft B | not found | 160 / 5 / 2 / 0 / 40 / 580 / 21 / 0 / 16 / 7 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN SWEET TERIYAKI - Breast | 1 breast | only in draft B | not found | 320 / 13 / 4 / 0 / 125 / 1310 / 21 / 1 / 16 / 32 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN SWEET TERIYAKI - Drumstick | 1 drumstick | only in draft B | not found | 140 / 5 / 1 / 0 / 55 / 790 / 18 / 0 / 15 / 11 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN SWEET TERIYAKI - Thigh | 1 thigh | only in draft B | not found | 260 / 14 / 4 / 0 / 100 / 1060 / 21 / 1 / 16 / 16 | B: name not in the guide text |
| BROASTED SAUCY CHICKEN SWEET TERIYAKI - Wing | 1 wing | only in draft B | not found | 140 / 5 / 2 / 0 / 40 / 790 / 19 / 0 / 14 / 7 | B: name not in the guide text |
| CHICKEN WINGS with Sauces BUFFALO - Boneless | 1 each | only in draft B | not found | 100 / 7 / 1 / 0 / 10 / 370 / 6 / 0 / 0 / 5 | B: name not in the guide text |
| CHICKEN WINGS with Sauces BUFFALO - Traditional | 1 each | only in draft B | not found | 110 / 8 / 2 / 0 / 20 / 350 / 0 / 0 / 0 / 7 | B: name not in the guide text |
| CHICKEN WINGS with Sauces GARLIC PARMESAN - Boneless | 1 each | only in draft B | not found | 120 / 9 / 1 / 0 / 10 / 280 / 6 / 0 / 0 / 5 | B: name not in the guide text |
| CHICKEN WINGS with Sauces GARLIC PARMESAN - Traditional | 1 each | only in draft B | not found | 120 / 10 / 2 / 0 / 20 / 250 / 1 / 0 / 0 / 7 | B: name not in the guide text |
| CHICKEN WINGS with Sauces HONEY HOT - Boneless | 1 each | only in draft B | not found | 120 / 7 / 1 / 0 / 12 / 250 / 9 / 0 / 3 / 5 | B: name not in the guide text |
| CHICKEN WINGS with Sauces HONEY HOT - Traditional | 1 each | only in draft B | not found | 120 / 8 / 2 / 0 / 20 / 220 / 9 / 0 / 3 / 7 | B: name not in the guide text |
| CHICKEN WINGS with Sauces MANGO HABANERO - Boneless | 1 each | only in draft B | not found | 130 / 7 / 1 / 0 / 10 / 210 / 8 / 0 / 3 / 5 | B: name not in the guide text |
| CHICKEN WINGS with Sauces MANGO HABANERO - Traditional | 1 each | only in draft B | not found | 130 / 8 / 2 / 0 / 20 / 190 / 3 / 0 / 3 / 7 | B: name not in the guide text |
| CHICKEN WINGS with Sauces NASHVILLE HOT - Boneless | 1 each | only in draft B | not found | 130 / 9 / 1 / 0 / 10 / 240 / 7 / 0 / 1 / – | B: name not in the guide text |
| CHICKEN WINGS with Sauces NASHVILLE HOT - Traditional | 1 each | only in draft B | not found | 130 / 10 / 2 / 0 / 20 / 220 / 1 / 0 / 1 / 7 | B: name not in the guide text |
| CHICKEN WINGS with Sauces SESAME - Boneless | 1 each | only in draft B | not found | 130 / 8 / 1 / 0 / 10 / 250 / 8 / 0 / 2 / 5 | B: name not in the guide text |
| CHICKEN WINGS with Sauces SESAME - Traditional | 1 each | only in draft B | not found | 130 / 9 / 2 / 0 / 20 / 230 / 3 / 0 / 2 / 7 | B: name not in the guide text |
| CHICKEN WINGS with Sauces SWEET CHILI - Boneless | 1 each | only in draft B | not found | 120 / 7 / 0 / 0 / 10 / 250 / 9 / 0 / 3 / 5 | B: name not in the guide text |
| CHICKEN WINGS with Sauces SWEET CHILI - Traditional | 1 each | only in draft B | not found | 120 / 8 / 2 / 0 / 20 / 220 / 4 / 0 / 3 / 7 | B: name not in the guide text |
| CHICKEN WINGS with Sauces SWEET TERIYAKI - Boneless | 1 each | only in draft B | not found | 120 / 7 / 1 / 0 / 10 / 300 / 9 / 0 / 3 / 5 | B: name not in the guide text |
| CHICKEN WINGS with Sauces SWEET TERIYAKI - Traditional | 1 each | only in draft B | not found | 120 / 8 / 2 / 0 / 20 / 270 / 3 / 0 / 3 / 7 | B: name not in the guide text |
| Zesta Crackers | 1 packet | only in draft B | not found | 25 / 1 / 0 / 0 / 0 / 60 / 5 / 0 / 0 / 0 | B: numbers found after the name (line 1372); check the size |
| CANE BREW - UNSWEET TEA | Glass (18 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 1441); check the size, mostly zeros: look |
| CANE BREW - UNSWEET TEA | Kid Cup (10 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 1441); check the size, mostly zeros: look |
| CANE BREW - UNSWEET TEA | To-Go Cup (16 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 1441); check the size, mostly zeros: look |
| CANE BREW - UNSWEET TEA | To-Go Cup (21 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 | B: numbers found after the name (line 1441); check the size, mostly zeros: look |
| MOUNTAIN DEW | Glass (18 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 80 / 66 / 0 / 66 / 0 | B: numbers found after the name (line 1482); check the size |
| MOUNTAIN DEW | Kid Cup (10 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 45 / 37 / 0 / 37 / 0 | B: numbers found after the name (line 1482); check the size |
| MOUNTAIN DEW | To-Go Cup (16 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 70 / 59 / 0 / 58 / 0 | B: numbers found after the name (line 1482); check the size |
| MOUNTAIN DEW | To-Go Cup (21 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 90 / 77 / 0 / 77 / 0 | B: not as drafted (line 1446 lacks 90, 77, 77) |
| MOUNTAIN DEW ZERO SUGAR | To-Go Cup (21 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 80 / 0.5 / 0 / 0 / 0 | B: not as drafted (line 1487 lacks 80, 0.5) |
| MUG ROOT BEER | Glass (18 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 70 / 59 / 0 / 59 / 0 | B: numbers found after the name (line 1492); check the size |
| MUG ROOT BEER | Kid Cup (10 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 40 / 33 / 0 / 33 / 0 | B: numbers found after the name (line 1492); check the size |
| MUG ROOT BEER | To-Go Cup (16 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 60 / 52 / 0 / 52 / 0 | B: numbers found after the name (line 1492); check the size |
| MUG ROOT BEER | To-Go Cup (21 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 80 / 69 / 0 / 68 / 0 | B: not as drafted (line 1492 lacks 80, 69, 68) |
| PEPSI | Glass (18 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 50 / 62 / 0 / 62 / 0 | B: numbers found after the name (line 1497); check the size |
| PEPSI | Kid Cup (10 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 25 / 35 / 0 / 34 / 0 | B: numbers found after the name (line 1497); check the size |
| PEPSI | To-Go Cup (16 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 45 / 55 / 0 / 55 / 0 | B: numbers found after the name (line 1497); check the size |
| PEPSI | To-Go Cup (21 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 55 / 72 / 0 / 72 / 0 | B: not as drafted (line 1497 lacks 72, 72) |
| STARRY | Glass (18 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 50 / 58 / 0 / 58 / 0 | B: numbers found after the name (line 1507); check the size |
| STARRY | Kid Cup (10 fl. oz.) | only in draft B | not found | 0 / 0 / 0 / 0 / 0 / 30 / 32 / 0 / 32 / 0 | B: numbers found after the name (line 1507); check the size |
| Mango Habanero Sauce | per 8 wings | both read it the same, but its protein, carbs and fat make 80 kcal, not 170 | 170 / 0 / 0 / 0 / 0 / 300 / 20 / 0 / 20 / 0 | 170 / 0 / 0 / 0 / 0 / 300 / 20 / 0 / 20 / 0 | A: numbers found after the name (line 779); check the size; B: numbers found after the name (line 779); check the size |
| Mango Habanero Sauce | per 16 wings | both read it the same, but its protein, carbs and fat make 160 kcal, not 330 | 330 / 0 / 0 / 0 / 0 / 600 / 40 / 0 / 40 / 0 | 330 / 0 / 0 / 0 / 0 / 600 / 40 / 0 / 40 / 0 | A: numbers found after the name (line 780); check the size; B: numbers found after the name (line 780); check the size |
| Sweet Teriyaki Sauce | per 16 wings | both read it the same, but its protein, carbs and fat make 216 kcal, not 180 | 180 / 0 / 0 / 0 / 0 / 1910 / 54 / 0 / 48 / 0 | 180 / 0 / 0 / 0 / 0 / 1910 / 54 / 0 / 48 / 0 | A: numbers found after the name (line 788); check the size; B: numbers found after the name (line 788); check the size |
| MANGO HABANERO | 2 oz. | both read it the same, but its protein, carbs and fat make 80 kcal, not 170 | 170 / 0 / 0 / 0 / 0 / 300 / 20 / 0 / 20 / 0 | 170 / 0 / 0 / 0 / 0 / 300 / 20 / 0 / 20 / 0 | A: numbers found after the name (line 779); check the size; B: numbers found after the name (line 779); check the size |
| POTATO SALAD | 1/4 cup | both read it the same, but its protein, carbs and fat make 65 kcal, not 90 | 90 / 0.5 / 1 / 0 / 5 / 180 / 14 / 1 / 5 / 1 | 90 / 0.5 / 1 / 0 / 5 / 180 / 14 / 1 / 5 / 1 | A: numbers found after the name (line 1316); check the size; B: numbers found after the name (line 1316); check the size |

## Spot check (15 agreed lines)

Compare with the guide. If one is wrong, fix it, set its check to `person`, and look harder at the rest of this chain.

| Item | Size | Numbers |
| --- | --- | --- |
| LOADED CHEESY RANCH STIX - PEPPERONI - Medium | 1 order | 2300 / 130 / 49 / 0 / 220 / 3650 / 196 / 14 / 14 / 81 |
| Pickled Herring | 2 oz | 90 / 4 / 1 / 0 / 30 / 640 / 7 / 1 / 5 / 8 |
| CHICKEN WINGS with Sauces BBQ - Traditional | 1 each | 120 / 8 / 2 / 0 / 20 / 230 / 3 / 0 / 2 / 7 |
| 2% MILK | To-Go Cup 16 fl. oz. | 250 / 10 / 6 / 0 / 40 / 230 / 24 / 0 / 24 / 16 |
| STARRY | To-Go Cup 16 fl. oz. | 200 / 0 / 0 / 0 / 0 / 45 / 52 / 0 / 52 / 0 |
| DESSERT PIZZA - APPLE | Medium (1 slice) | 160 / 4 / 1 / 0 / 0 / 115 / 29 / 1 / 10 / 3 |
| Garlic Sauce | per medium slice | 30 / 3 / 1 / 0 / 0 / 30 / 0 / 0 / 0 / 0 |
| CACTUS BREAD | Medium (1 slice) | 190 / 6 / 2 / 0 / 0 / 150 / 32 / 1 / 11 / 4 |
| Classic Tomato | per medium slice | 5 / 0 / 0 / 0 / 0 / 35 / 1 / 0 / 1 / 0 |
| PASTA DINNER Includes Breadstick | 1 order | 880 / 42 / 9 / 0 / 10 / 1380 / 108 / 12 / 9 / 19 |
| Canadian Bacon | per small slice | 10 / 0 / 0 / 0 / 5 / 110 / 0 / 0 / 0 / 2 |
| Traditional - Unsauced | 8 piece | 740 / 63 / 14 / 0 / 145 / 920 / 5 / 0 / 0 / 44 |
| DESSERT PIZZA - CHERRY | Small (1 slice) | 140 / 3 / 1 / 0 / 0 / 110 / 25 / 1 / 7 / 3 |
| Boneless - Unsauced | 8 piece | 840 / 56 / 9 / 0 / 95 / 1410 / 45 / 0 / 0 / 38 |
| Spinach | per medium slice | 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 / 0 |
