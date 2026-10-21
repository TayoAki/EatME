# Chain menus for What to order

Every US chain with 20 or more locations must publish its nutrition (21 CFR 101.11). We take the numbers from
each chain's **own** guide, as many chains as we can, biggest first: 100 for launch, then on down the list. These
are the only restaurant numbers Weight Class ranks (`WHAT-TO-ORDER.md` §7).

| Path | What it is |
| --- | --- |
| `ranking.csv` | The order we work in: the Technomic Top 500, 2026 edition (2025 US system sales), ranks 1-250 as published by Restaurant Business (restaurantbusinessonline.com/top-500-2026-ranking, read 21 Oct 2026). `guide_url` is the chain's own nutrition page or PDF, `notes` the last run's result |
| `menus/<chain>.csv` | One chain's items (columns below). `menus/_template.csv` holds the header |
| `review/<chain>.md` | What a person checks for that chain: the lines the two drafts disagreed on, and a sample of agreed lines |
| `.cache/` | The guides as read (git-ignored: only the numbers are kept) |

```bash
npm run chains:draft -- --rank 1-10              # find, read and draft chains 1 to 10
npm run chains:draft -- --chain "Chick-fil-A"    # one chain (--url <guide> to set its guide, --refetch to read it again)
npm run chains:build -- --check                  # check every menu file, write nothing
npm run chains:build                             # check, then write data/chains.json (commit it with the CSVs)
npm run db:chains                                # load data/chains.json into DATABASE_URL by hand
```

`chains:draft` needs `OPENROUTER_API_KEY` and, to find guides and read PDFs or script-built pages,
`FIRECRAWL_API_KEY`. The server loads `data/chains.json` into `chain_items` when it starts (`server/chains.mjs`), only
when it changed. An item left out of the CSV is **retired**, never deleted.

## How a line gets checked

1. Firecrawl finds the chain's nutrition page or PDF **on the chain's own site** (copy sites such as Nutritionix,
   FatSecret or fan pages are never a source) and reads it once. Only text is kept; no photos or logos.
2. Two AI models from different makers (`CHAIN_DRAFT_MODELS`, by default OpenAI's and Google's) copy the guide into
   rows on their own, told to copy numbers as printed and never to calculate or guess.
3. Code compares the drafts. A line where both agree on every number goes in with `check` = `two-drafts`. A line
   they disagree on, that only one found, or where the guide leaves out a required number goes in as `pending`
   and is never loaded.
4. A person opens `review/<chain>.md`: fixes each pending line from the guide and sets its `check` to `person` (or
   deletes it), and compares the spot-check sample (about 1 in 20 agreed lines, 3 to 15 per chain) with the guide.
   A wrong sample line means the whole chain gets a closer look. Re-running a draft never overwrites `person` lines.
5. `npm run chains:build` checks everything again before anything ships.

## Columns

| Column | What goes in it |
| --- | --- |
| `chain` | The chain's name as customers know it: `Chipotle`, `McDonald's`, `Chick-fil-A` (the same on every line) |
| `section` | The guide's menu section: `Burritos`, `Breakfast`, `Drinks` |
| `name` | The item as the menu names it, without size: `Chicken Burrito`, `Big Mac` |
| `serving` | The size or amount as the guide gives it: `1 burrito`, `Medium (21 fl oz)`, `4 oz`. One line per size |
| `serving_g` | Grams when the guide prints them, else empty |
| `kind` | `main` (a meal: ranked), `side`, `drink`, `extra` (sauces, toppings, add-ons) or `dessert` (listed, never ranked as a meal). The draft sets it from the section; fix it by hand when it's wrong |
| `calories` | kcal, whole number, as printed |
| `fat_g`, `saturated_fat_g`, `trans_fat_g` | grams (`trans_fat_g` may be empty when the guide leaves it out) |
| `cholesterol_mg`, `sodium_mg` | milligrams (`cholesterol_mg` may be empty) |
| `carbs_g`, `fiber_g`, `sugars_g`, `protein_g` | grams |
| `source_url` | The `https://` page or PDF on the chain's own site with these numbers |
| `checked_on` | The day the line was checked (the drafts agreed, or a person checked it): `2026-10-21` |
| `check` | `two-drafts`, `person` or `pending` (above) |

These are the FDA's menu-labeling items (calories from fat is fat × 9, so it isn't stored).

## Rules

- **Numbers only.** Facts carry no copyright; a guide's wording, layout, photos and logos do, and Apple rejects apps
  that use third-party material without permission (5.2.1). Don't copy descriptions, don't keep PDFs or images.
- **Write what's printed.** `<1` becomes `0.5`, `<5 mg` becomes `2.5`; a dash or blank means the chain doesn't say.
- **Every size is its own line**; combos, kids' meal bundles and catering are left out (the ranking builds orders).
- **Recheck** each chain every six months, or when someone reports an item (the build warns after 183 days).

The build stops on: a missing or misspelled column, a value that isn't a plain number, a `kind` or `check` not in the
lists, sugars or fiber above carbs, saturated plus trans fat above fat, a date in the future, a non-https link, two
lines with the same name and serving. It warns when protein, carbs and fat don't add up to the calories (more than 25
kcal and 15% apart): guides do have typos.
