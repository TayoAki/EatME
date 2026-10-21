# Chain menus for What to order

One CSV per chain (`chipotle.csv`, `mcdonalds.csv`, …), entered from the chain's **own** nutrition guide. These
are the only restaurant numbers Weight Class ranks, so every line is checked by a person against the guide
(`WHAT-TO-ORDER.md` §7). `_template.csv` holds the header; files starting with `_` are skipped.

```bash
npm run chains:build -- --check   # check the CSVs, write nothing
npm run chains:build              # check, then write data/chains.json (commit it with the CSVs)
npm run db:chains                 # load data/chains.json into DATABASE_URL by hand
```

The server loads `data/chains.json` into `chain_items` when it starts (`server/chains.mjs`), only when the file
changed. An item left out of the CSV is **retired**, never deleted.

## Columns

| Column | What goes in it |
| --- | --- |
| `chain` | The chain's name as customers know it: `Chipotle`, `McDonald's`, `Chick-fil-A` (the same on every line) |
| `section` | The guide's menu section: `Burritos`, `Breakfast`, `Drinks` |
| `name` | The item as the menu names it, without size: `Chicken Burrito`, `Big Mac` |
| `serving` | The size or amount as the guide gives it: `1 burrito`, `Medium (21 fl oz)`, `4 oz`. One line per size |
| `serving_g` | Grams when the guide prints them, else empty |
| `kind` | `main` (a meal: ranked), `side`, `drink`, `extra` (sauces, toppings, add-ons) or `dessert` (listed, never ranked as a meal) |
| `calories` | kcal, whole number, as printed |
| `fat_g`, `saturated_fat_g`, `trans_fat_g` | grams |
| `cholesterol_mg`, `sodium_mg` | milligrams |
| `carbs_g`, `fiber_g`, `sugars_g`, `protein_g` | grams |
| `source_url` | The `https://` page or PDF on the chain's own site where these numbers are (not a third party, not a Nutritionix-hosted page) |
| `checked_on` | The day a person checked the line against that page: `2026-10-21` |

These are the eleven items the FDA menu-labeling rule makes chains publish (21 CFR 101.11; calories from fat is
fat × 9, so it isn't stored).

## Rules

- **Numbers only.** Facts carry no copyright; a guide's wording, layout, photos and logos do. Don't copy
  descriptions, don't store PDFs or images.
- **Write what's printed.** `<1` becomes `0.5`, `<5 mg` becomes `2.5`; a dash or blank in the guide means the chain
  doesn't say: leave the line out and note it in the pull request, never guess.
- **Every size is its own line**; combos are not entered (the ranking builds orders from items).
- **AI may draft, a person checks every line** against the guide and sets `checked_on`.
- **Recheck** each item every six months, or when someone reports it (the build warns after 183 days).

The build stops on: a missing or misspelled column, a value that isn't a plain number, a `kind` not in the list,
sugars or fiber above carbs, saturated plus trans fat above fat, a date in the future, a non-https link, two lines
with the same name and serving. It warns when protein, carbs and fat don't add up to the calories (more than 25 kcal
and 15% apart): check that line again, guides do have typos.
