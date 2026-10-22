# Chain menus for What to order

Every US chain with 20 or more locations must publish its nutrition (21 CFR 101.11). We take the numbers from
each chain's **own** guide, as many chains as we can, biggest first: 100 for launch, then on down the list. These
are the only restaurant numbers Weight Class ranks (`WHAT-TO-ORDER.md` §7).

| Path | What it is |
| --- | --- |
| `ranking.csv` | The order we work in: the Technomic Top 500, 2026 edition (2025 US system sales), ranks 1-250 as published by Restaurant Business (restaurantbusinessonline.com/top-500-2026-ranking, read 21 Oct 2026). `site` is the chain's own US website (checked 22 Oct 2026 by loading each homepage), the only place its guide is looked for; `guide_url` is the nutrition page or PDF in use, `notes` the last run's result |
| `menus/<chain>.csv` | One chain's items (columns below). `menus/_template.csv` holds the header |
| `review/<chain>.md` | What a person checks for that chain: the lines the two drafts disagreed on, and a sample of agreed lines |
| `.cache/` | The guides as read (git-ignored: only the numbers are kept) |

```bash
npm run chains:draft -- --rank 1-250 --guides-only   # find, read and check the guides first (Firecrawl only, no AI)
npm run chains:draft -- --rank 1-250             # find, read and draft chains 1 to 250 (picks up where it stopped)
npm run chains:draft -- --chain "Chick-fil-A"    # one chain (--url <guide> to set its guide, --refetch to read it again)
npm run chains:build -- --check                  # check every menu file, write nothing
npm run chains:build                             # check, then write data/chains.json (commit it with the CSVs)
npm run db:chains                                # load data/chains.json into DATABASE_URL by hand
```

`chains:draft` needs `OPENROUTER_API_KEY` and, to find guides and read PDFs or script-built pages,
`FIRECRAWL_API_KEY`. It works on 3 chains at a time (`--parallel`), skips chains that already have a menu file
(`--redo` drafts them again, keeping lines a person checked), and costs about 5 US cents of AI a chain with the
default models (about $10–20 for all 250, prices read 22 October 2026). Firecrawl bills a search, each page read and
each PDF page, so PDFs are read up to 40 pages. When either runs out of credit the run stops; the same command
picks up after a top-up. The server loads `data/chains.json` into `chain_items` when it starts (`server/chains.mjs`), only
when it changed. An item left out of the CSV is **retired**, never deleted.

## How a line gets checked

1. Firecrawl searches **only the chain's own site** (`site`) for its **US** nutrition page or PDF and reads it once.
   Copy sites such as Nutritionix, FatSecret or fan pages are never a source, even when they carry the chain's name
   in their domain (popeyesnutrition.us); other countries' sites and guides are skipped, since menus differ. Up to
   three pages are tried, and a page without numbers is followed to the nutrition PDF it links (which may sit on
   the chain's file host, such as assets.ctfassets.net). Only text is kept; no
   photos or logos. Many chains have Nutritionix run their nutrition page (Taco Bell's, for one): those are skipped
   with a note, and need the chain's own PDF in `guide_url`. Pages without numbers (calculators built by script) are
   skipped before any AI is spent.
2. Two AI models from different makers (`CHAIN_DRAFT_MODELS`, by default OpenAI's and Anthropic's) copy the guide
   into rows on their own, told to copy numbers as printed and never to calculate or guess.
3. Code compares the drafts. A line where both agree on every number goes in with `check` = `two-drafts`. A line
   they disagree on, that only one found, or where the guide leaves out a required number goes in as `pending`
   and is never loaded.
4. A person opens `review/<chain>.md`: fixes each pending line from the guide and sets its `check` to `person` (or
   deletes it), and compares the spot-check sample (about 1 in 20 agreed lines, 3 to 15 per chain) with the guide.
   A wrong sample line means the whole chain gets a closer look. Re-running a draft never overwrites `person` lines.
5. `npm run chains:build` checks everything again before anything ships.

## What the notes in `ranking.csv` mean

| Note | What to do |
| --- | --- |
| `guide read …: ready to draft` | Nothing: the next `chains:draft` run drafts it |
| `drafted …: N agreed, M for a person` | Open `review/<chain>.md` (see below) |
| `no nutrition numbers found in the guide` | The page is a calculator built by script, or the numbers sit on one page per item (McDonald's, Starbucks, Wendy's). Set `guide_url` to the chain's PDF if it has one; otherwise it waits for item pages to be read one by one |
| `no nutrition page found on <site>` | Look on the chain's site by hand and set `guide_url` |
| `guide is run by Nutritionix` | Set `guide_url` to the chain's own PDF if there is one; otherwise it waits (Nutritionix is a later decision, `WHAT-TO-ORDER.md` §7) |
| `guide looks like another country’s` | Set `guide_url` to the US guide |
| `dated 2023: look for a newer guide` | The guide is two or more years old: look for a newer one on the chain's site, else draft it and say so in the review |
| `few items: check the guide is the whole menu` | Fewer than 20 lines: likely one promotion or one page, not the whole guide |

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
| `source_url` | The `https://` page or PDF on the chain's own site with these numbers. The app cites it on every item ("Source: Chick-fil-A nutrition information · checked 22 Oct 2026", with a link), so it is always the chain's own page or file, never a copy site |
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
