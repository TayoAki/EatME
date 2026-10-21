# EatME — What to order (v2.5 plan)

> Written 18 October 2026, after the MenuFit research (`research/menufit-teardown.md`) and a read of the code as it
> is. Not built yet. Read it with `PLAN.md` (the app as it is) and `AGENTS.md` (how we build). People see the
> app as **Weight Class**; the code keeps EatME. Tick the boxes here as parts ship and add them to `PLAN.md`.

## Contents

1. [The idea](#1-the-idea)
2. [How this plan was made](#2-how-this-plan-was-made)
3. [Findings ledger](#3-findings-ledger)
4. [What we build, and where it beats MenuFit](#4-what-we-build-and-where-it-beats-menufit)
5. [What the person sees](#5-what-the-person-sees)
6. [Where the numbers come from, and how items are ranked](#6-where-the-numbers-come-from-and-how-items-are-ranked)
7. [Data sources and licences](#7-data-sources-and-licences)
8. [Data, API and code](#8-data-api-and-code)
9. [Premium, limits and costs](#9-premium-limits-and-costs)
10. [Privacy, safety and App Review](#10-privacy-safety-and-app-review)
11. [Before we build: three checks](#11-before-we-build-three-checks)
12. [Build order](#12-build-order)
13. [Decisions for the owner](#13-decisions-for-the-owner)
14. [Unknowns we carry](#14-unknowns-we-carry)

---

## 1. The idea

MenuFit ("your personalized healthy menu for every restaurant") showed that people will pay to know what to
order: a single-purpose app, a hard paywall, reportedly more than $1M a month after store fees by August 2026.
Weight Class can do the same job better because it already knows what the person ate today.

**What to order**: at a restaurant, Weight Class lists the menu items that fit what's left today, best first,
says where each number comes from, and logs the one the person orders in one tap.

- **Big chains**: the chain's own published numbers, kept in our own table, ranked by our code.
- **Any other restaurant**: the person takes a photo of the menu; the phone reads the text, the AI breaks each
  dish into foods and restaurant-size portions, and the numbers come from our USDA database, the way meal photos
  already work. These are estimates and show a range.

The split follows the evidence: published numbers where they exist, our code for the ranking, and AI only to read
menus and estimate what nobody publishes.

---

## 2. How this plan was made

The REA skill's method for broad investigations (`morluto/rea`, `reverse-engineer-anything`): turn the request into
questions, name the evidence each answer needs, keep a ledger that separates what was observed from what was
inferred or is still unknown, corroborate before building, and end by checking every question.

**Evidence used**: public material only. MenuFit's website, privacy policy and terms (read 18 October 2026), its
App Store and Google Play listings and reviews, press (36Kr, 14 October 2026), licence and pricing pages of the
data providers, published studies, Apple's guidelines and state laws. Full sources: `research/menufit-teardown.md`.

**Not done, on purpose**: MenuFit's terms (§11) forbid scraping, automated collection, reverse engineering and
decompiling, so we did not download, decompile or trace its app, sign up, or call its services. REA's static
JavaScript analyzer had nothing to analyze: menufit.com is a marketing page, the product lives in the app. Nothing
here copies MenuFit's code, data or text; the ideas are common to the category (at least 41 similar apps launched
since August 2025).

**The questions**

| # | Question | Status |
| --- | --- | --- |
| Q1 | What does MenuFit do, screen by screen, and how does it make money? | Answered (screens after the 30 Sep 2026 redesign: partly) |
| Q2 | How well does it work for people, and where does it fail? | Answered (store reviews; Reddit could not be read) |
| Q3 | Where do its restaurants, menus and numbers come from? | Partly: reported by the company, not verified |
| Q4 | Who else does this, and what do people tracking calories want when eating out? | Answered |
| Q5 | Which data sources allow ranked "best fits" and keeping logged meals? | Answered |
| Q6 | How accurate are AI estimates of restaurant dishes, and how do we make them better? | Partly: no study of menu text against chain values |
| Q7 | What are the safety, privacy and App Review risks? | Answered (Apple's new 2.5.19 text not read in full) |
| Q8 | What in Weight Class can we reuse? | Answered (from the code) |

---

## 3. Findings ledger

Type: **O** observed in a primary source · **R** reported by someone else (press, founder, review sites) ·
**I** our inference. Details and links are in the research report.

| # | Finding | Type | What it means for us |
| --- | --- | --- | --- |
| F1 | MenuFit chooses what to order; it has **no food diary**. A 25–34 screen quiz (goal, body, favourite chains, likes, dislikes, allergies), a rating prompt, sign-up, then a hard paywall with a card-required trial. Menus show meal combinations with a 0–100 score, a "Healthify" swap tool and an AI chat. | O | Ranking against **what's left today** and **logging the order** are things it can't do. |
| F2 | It's big: iOS 4.77★ from 54,507 US ratings, #13 in Health & Fitness (18 Oct 2026); reportedly over $1M a month after store fees (August 2026). Growth came from the founder's fast-food comparison videos and about 400 live Meta ads. | O / R | The demand is real. Distribution, not data, is its moat. |
| F3 | Its written reviews average about 2.6–2.7★: trial and billing anger, calories 28–40% low (one test: 400 shown, about 860 on the chain's menu), "macro-gamed" picks (patties with the buns thrown away scored "98 Excellent"), an egg dish without the eggs, dislikes ignored. | O | These are the failures of letting an AI assemble orders. Our code ranks real items; numbers show their source. |
| F4 | Per the company: **Nutritionix** for chain data, Mifflin–St Jeor for targets, and **OpenAI** to combine items and write reasons. The "22.3 million locations" matches no published dataset. | R / I | Chains need published numbers; "every restaurant" needs AI. |
| F5 | At least 41 similar apps since August 2025, together 13% of MenuFit's ratings; nearly all a 0–100 score. Big trackers log chain items but don't pick (users say MyFitnessPal and Lose It! dropped browsing by restaurant in 2026, unconfirmed); MyNetDiary has a menu scan in its $14.99 tier; Cal AI and MacroFactor help only after the meal. Newer apps (MacroBite, 2nd Menu) rank against what's left and link a source for every number. | O | Ranking against the day plus a real diary is rare, and native to a tracker. Sources on numbers are becoming table stakes. |
| F6 | Eating out was 56.3% of US food spending in 2025. Over 70% of restaurants are single-unit; the **top 50 chains take 61% of restaurant spending** from 24% of locations. | O | A chain table covers most of the money, a menu photo covers the rest. |
| F7 | GLP-1 users still eat out but order less: 62% order less food, 87% would order a smaller version of a dish, 44% have ordered a starter as a main, 89% say protein grams would sway them (Toast, August 2026). | R | GLP-1 mode: protein first and smaller-portion ideas. |
| F8 | **FatSecret** §1.7(iii) forbids using its API "to provide diet, nutrition or health advice, guidance". Ranking its numbers is that, however it's computed. Its values can't seed our own table either (its storage clause). | O | FatSecret stays for plain lookups and logging at most; never in a ranked list. |
| F9 | **Nutritionix** allows apps that give dietary guidance, but caching is "strictly prohibited" (even item IDs) below MVP ($999 a month, billed yearly, 1,000 users), freemium apps get custom quotes (from about $22,200 a year), and §2 and §9 claim derived data and its deletion on leaving. | O | Not now. Reopen at scale, with written terms. |
| F10 | **Edamam** has 130,000 restaurant items and no ranking ban, but may keep only calories, protein, net carbs and fat for a logged item. | O | Not for logging: our sugar note needs sugar and sodium. |
| F11 | Chains with **20 or more locations must publish 11 nutrients** (sugars and sodium included), online menus count, and facts can't be copyrighted (Feist). The risk left is chain website terms; hand-checked entry with a source link per item keeps it low. MacroBite built 3,212 meals at 206 chains this way. | O | **Our own chain table** is the only source we may rank, label and keep indefinitely for free. |
| F12 | **USDA FoodData Central** is public domain. Our meal-photo pipeline already prices AI-named foods from it (`computeItems` in `src/lib/server/food-match.ts`). | O | Estimates for any restaurant need no licence. |
| F13 | Places: Google forbids storing names and addresses and use "in a listings or directory service"; Yelp forbids ranking and generative-AI use; Apple Maps allows stored Place IDs (results shown with an Apple map); Overture's open places data has 1.59M US food places, chain brands tagged. | O | Name search first; "near me" later with Apple Maps or Overture. |
| F14 | AI calorie estimates from photos miss by about 30–36% and **underestimate more as portions grow**; facts help most (cooking fat and sauce: 30.5% → 24.4%; an ingredient list: 13.9%); models' own confidence runs high. Even chain labels are off by 20%+ for 15–35% of items. | O | Ground in published numbers, ask one question when it matters, take ranges from measured error, rank estimates by the top of their range. |
| F15 | Allergen duties sit with restaurants; FARE says to tell staff every time. Half of people with disordered eating say calorie labels worsen symptoms; optional labels were the most wanted policy. The FTC punished an unsubstantiated "98% accurate" claim (Workado, 2025). | O | "Ask staff", never "safe"; calm mode; no accuracy claims. |
| F16 | Washington's My Health My Data Act covers health data inferred by machine learning and needs separate consent to share; precise location is sensitive in several states; Apple's own example of an app that needs only approximate location is "restaurants within driving distance". Apple added **2.5.19** (hidden, dormant or undocumented features) on 16 October 2026. | O | Consent names what goes to the AI; approximate location only; the feature is on in the build Apple reviews. |

---

## 4. What we build, and where it beats MenuFit

| Where MenuFit falls short (F1, F3) | What to order |
| --- | --- |
| No diary: picks are blind to the day | Ranks against **what's left today**, and logs the order in one tap |
| Numbers 28–40% low, no source shown | Every number says where it's from: **the restaurant** (with a link) or **an estimate** with a range |
| An AI assembles "macro-gamed" orders | Our code ranks whole dishes as sold, plus simple tweaks a server can make ("sauce on the side") |
| Dislikes ignored | Foods to skip are filtered out, and the list says how many dishes were hidden |
| A quiz, then a hard paywall and trial charges | The existing Weight Class Premium, priced on screen, with a free try first |
| "Guilt free", 0–100 health scores | No scores or "healthy" labels: "Fits what's left", "A bigger meal". Calm mode hides every number |

For GLP-1 mode (F7): protein first, and smaller-portion ideas (a starter as a main, a half portion) when a full
dish is too much for what's left.

---

## 5. What the person sees

- [ ] **Entry points**: Scan gets a **Menu** mode next to Meal and Label. Search → Restaurants finds a chain by
  name and shows **What fits** on its menu. A Home card later, once we know people use it.
- [ ] **Scan a menu**: one to three photos (long menus have pages). The phone reads the text and shows the dish
  list to confirm or fix (wrong lines removed, a dish typed in); then "Working out what fits…" while the AI
  works. An optional field for the restaurant's name.
- [ ] **The list**: a header with what's left today ("About 850 kcal and 60 g protein left"), then **Fits well**
  (up to five, shown as a group when their ranges overlap, not a false first-second-third) and **Everything
  else**. Each row: the dish, calories (a range for estimates), protein, the source ("From the restaurant" or
  "Estimate") and one reason ("Leaves about 500 kcal for dinner", "45 g protein"). Items over what's left are
  listed last, never hidden.
- [ ] **When nothing fits** or the day's budget is spent: no ranking, a neutral line ("Nothing here fits what's
  left today; these are the lighter dishes") and the list sorted by size.
- [ ] **A dish**: its numbers and where they're from (the chain's page and the date we checked it, or the foods
  and portions behind an estimate, editable as in the meal screen), and up to two tweaks with their effect
  ("Dressing on the side: about −150 kcal").
- [ ] **One question when it matters**: for an estimate where the answer moves the number most, one tap
  ("Grilled or fried?", "Side or entrée size?"), like the follow-up question on photo scans.
- [ ] **Order it**: **Log it** saves the meal now; **Save for later** keeps it in Saved meals to log when the food
  arrives (the plate builder and Saved meals we already have). A logged estimate can be edited like any meal.
- [ ] **Foods to skip**: Profile → Preferences gets a short list (for example mushrooms, pork). Dishes whose name
  or description mentions one drop out of Fits well; the list says "3 dishes hidden: foods you skip" and "This
  can't spot hidden ingredients".
- [ ] **Allergies**: one line on every list, "Tell staff about allergies: Weight Class can't know what's in a
  dish." We don't ask for or store allergies, and never call a dish safe.
- [ ] **Calm mode**: words instead of numbers ("Fits what's left", "A bigger meal", "A lighter choice").
- [ ] **States**: the phone couldn't read the menu ("Try again in better light, or type the dishes"); the AI
  failed (the scan isn't counted); no free scans left (the Premium screen).

**Wording**: "fits what's left", "from the restaurant", "an estimate". Never "healthy", "guilt free", "safe",
"accurate", "verified", "dietitian-approved" or a score.

---

## 6. Where the numbers come from, and how items are ranked

**Numbers, in this order** (the AI never writes a number it was given, and never makes one up for a chain):
1. **From the restaurant**: our chain table (section 7), each item with the chain's page and the date we checked
   it.
2. **Priced from our database**: for any other menu, the AI breaks each dish into foods and restaurant-size
   portions (priors by restaurant type, since estimates run low on big plates), and `computeItems`
   (`src/lib/server/food-match.ts`) prices them from USDA, as meal photos do today. "Your usual" applies too.
3. **The AI's own estimate**, only for dishes the database can't match, with a wider range.

**Two passes, to keep a long menu cheap**: the AI reads the confirmed dish list once (foods, portions, a quick
estimate each, likely tweaks); our code pre-ranks; then the top eight are priced properly from the database. The
list marks the rest as quick estimates.

**Ranges** come from the error measured in the accuracy pilot (section 11), per kind of dish, not from the AI's
confidence (F14). A measured underestimate is corrected upward.

**Ranking is our code, never the AI** (`src/shared/menu-fit.ts`, built on `dayScore` in
`src/shared/day-draft.ts`). It returns the same answer twice, costs nothing and can be published, which 1.4.1 asks
for:
- **The aim for this meal**: what's left today divided by the main meals still to come (from the person's own meal
  times, as Plan tomorrow does), never planning below the calorie floor.
- **The score**: distance from that aim (both over and too small: the lowest-calorie dish never wins), a protein
  shortfall cost (protein first in GLP-1 mode, then protein per 100 kcal), and an estimate counts at the **top of
  its range**, so uncertainty can't make a heavy plate look like it fits.
- **Real orders only**: whole dishes as sold, plus tweaks a server can make; no removing a dish's main parts
  (F3), at most two items per order, and a meal-sized floor.
- **Filters**: foods to skip; drinks and sides are listed, not ranked as meals.

**The AI's four jobs** (server only, `src/lib/server/menu-analysis.ts`, prompts in `prompts.ts`, after the AI
consent, like every scan): read menu text into dishes; break dishes into foods and portions; turn a wish ("no
bun", "something with eggs") into filters for our code; and fill the one-line reason from a template with numbers
our code computed. Our server never sends the AI the person's targets, what's left, weight or foods to skip.

---

## 7. Data sources and licences

| Need | Choice | Why |
| --- | --- | --- |
| Chains, ranked and logged | **Our chain table**: the top 25 US chains first (then 50), entered from each chain's own nutrition guide, all 11 required nutrients, with the source link and the date checked; a "report a wrong item" button (like product reports) | Facts carry no copyright; the only source we may rank, label and keep indefinitely for free (F11). It is also the test set for our AI estimates |
| Any other restaurant | Menu photo → USDA FoodData Central via `computeItems` | Public domain; already our database (F12) |
| Chains beyond the table | Name search falls back to the menu photo route | Keeps the ranked list on numbers we may rank |
| FatSecret | Not used. Its Eating out screens were retired on 21 October 2026 and the code removed (section 13) | It forbids advice and ranking (F8) and needs static IPs |
| Nutritionix | Not now; reopen when restaurant use justifies about $22,000 a year, with written terms on storage, ranking and derived data | F9 |
| Edamam | Not used | Keeps only four numbers per logged item (F10) |
| Finding restaurants nearby (v2.6) | Apple Maps (MapKit) with approximate location and stored Place IDs, or a self-hosted US subset of Overture's open places data | Google's and Yelp's terms rule them out (F13) |

**How the chain table is kept honest**: entered by hand (AI may draft from the chain's guide, a person checks every
line), no copied PDFs, layouts or logos; where a chain's nutrition page is hosted by Nutritionix, we use the chain's
own PDF. Each item is rechecked every six months or when a report comes in.

---

## 8. Data, API and code

**Data** (migrations `chain_items` and `menu_scans`)
- `chain_items`: `id`, `chain`, `name`, `section`, `serving` (text), the 11 nutrients plus fiber, `source_url`,
  `checked_on`, `status` (`live` | `retired`), timestamps. Loaded from a checked CSV by
  `scripts/load-chain-items.ts`.
- `menu_scans`: `id`, `user_id` (cascade), `restaurant` (name, optional), `chain` (when it's one of ours),
  `dishes` (jsonb: name, section, description, source, foods, nutrients, range, tweaks, priced), `status`
  (`reading` | `ready` | `failed`), timestamps. Deleted after 30 days by a nightly job. Menu photos are never stored
  when the phone read the text; when photos are sent, they're deleted once read.
- Meals: a new meal source `menu`; `meal_items.menu` (scan or chain item, dish name, source, range) next to the
  existing `restaurant` field.
- Reports: `chain_item_reports`, the same shape as product reports.

**API**
- `GET /api/chains?q=` and `GET /api/chains/:chain/menu`: our table, ranked for the person's day.
- `POST /api/menu-scans`: the confirmed dish lines (or photos when the phone can't read them) and an optional
  restaurant name. Runs the AI in the background, like meal analysis; counts as an AI scan.
- `GET /api/menu-scans/:id`: the dishes, ranked on every read, so the list follows what's been eaten since.
- `POST /api/menu-scans/:id/dishes/:n/log` (and `save`), and the same for chain items: logs or saves the dish (with
  a tweak if chosen). Tapping twice logs once.
- `POST /api/chain-items/:id/report`: "this item is wrong".

**App**
- On-device menu reading: Apple's Vision text recognition in a small local Expo module (`modules/menu-text`),
  adapted from the one written for the ChartME app (`modules/chart-text-recognition` in that repo), reading lines
  in order and keeping prices (WWDC25's document reading handles price columns). The photo stays on the phone;
  only the text is sent. Android and older builds send the photo instead.
- Screens: `src/components/menu/` (dish list, confirm step, dish sheet, skip list), reusing the plate bar and
  Saved meals.

---

## 9. Premium, limits and costs

- **Decided (21 October 2026)**: What to order is **Premium**, like Plan tomorrow, with one free try so people see
  it before the Premium screen (unlike MenuFit's quiz-then-paywall). Menu scans count against the AI scan limits we
  have (3 a day free, 50 a day Premium). Chain menus by name cost no AI.
- **Costs**: no licence fees. A menu scan is text only (cheaper than a photo scan) plus pricing up to eight
  dishes, measured in the pilot. The chain table is staff time.
- **Server switch**: `WHAT_TO_ORDER`, for outages only. It is on in the build Apple reviews and is never turned on
  after a review (2.5.19).

---

## 10. Privacy, safety and App Review

- **AI consent (5.1.2(i), Washington)**: the consent screen names what's sent; add "menu text or photos and the
  restaurant's name". People who already agreed see the change once. Never sent: location, targets, weight,
  what's left, foods to skip.
- **Health claims (1.4.1)**: every number has its source; chain numbers link to the chain's page; estimates say so
  and show a range; the method (where numbers come from, how the ranking works) goes on the support page's
  sources section, linked from the list. The "check with a doctor" line stays in Daily goals. No accuracy claims in
  the app, store text or ads (F15).
- **Allergens**: the line on every list; we never filter by allergy or call a dish safe (F15).
- **Eating disorders**: no scores or "guilt free"; the lowest-calorie dish never wins; no ranking once the day's
  budget is spent; calm mode hides numbers (F15).
- **Location** (only when "near me" arrives): approximate only, asked when the person taps it, never stored or
  sent to the AI; name search works without it (5.1.1(iv)).
- **Washington health data policy and Privacy Policy**: add menu scans (what's read, kept 30 days, sent to the AI
  providers, never sold) and the chain table's sources.
- **App Review**: on in the reviewed build and in the review notes, with a test menu image on the support page a
  reviewer can photograph from a second screen, so it can be tried without a restaurant (2.1, 2.5.19).
  Screenshots show it with the Premium badge.
- **Store listing**: describe What to order plainly; no "healthy", "guilt free" or "accurate". If we borrow
  MenuFit's best marketing idea, fast-food swap comparisons, the numbers in them come from our chain table.

---

## 11. Before we build: three checks

The REA method corroborates before building on a finding. Each check has a pass line; if one fails, the plan
changes before any app code.

- [ ] **Chain table, first ten chains**: entered and checked (about 600 items), with the load script. This is
  the ground truth for the next check.
- [ ] **Accuracy pilot** (like the week-1 pilot run for ChartME): 60 dishes from those ten chains, their menu text
  through our pipeline (read → foods and portions → USDA) against the chains' published numbers. Pass: median
  calorie error 20% or less, the published top five and ours share at least three dishes, and no underestimate on
  big plates we can't correct. It also sets the range widths.
- [ ] **Menu reading on a phone**: the Vision module on 10 real menus (printed, chalkboard, dim light). Pass: 9 of
  10 give usable dish lines after the confirm step; otherwise we send the photo, as meal scans do.

---

## 12. Build order

| Step | What | Days |
| --- | --- | --- |
| 1 | Chain table: schema, load script, first ten chains; the accuracy pilot; menu reading on a phone | 4 |
| 2 | Ranking (`menu-fit.ts`) with its tests, foods to skip, calm mode words | 2 |
| 3 | Server: chain menu routes, menu reading and two-pass pricing, `menu_scans`, logging, limits, reports | 4 |
| 4 | App: chain search and What fits, Menu scan mode, the reading module, confirm step, list, dish sheet, log and save | 5 |
| 5 | Chain table to 25 chains | 3 |
| 6 | Consent, Privacy Policy, Washington policy, sources page, test menu, store text, review notes | 1.5 |
| 7 | Tests: server end-to-end, UI suite, device checklist (camera, Vision) | 2 |
| | **Total** | **≈ 21.5** |

Release as v2.5 with one EAS build. Then 50 chains, "near me" (Apple Maps or Overture) and a Home card in v2.6, if
people use it.

---

## 13. Decisions for the owner

1. **Premium**: **decided 21 October 2026: Premium with one free try** (the first list free for every account,
   then Premium; section 9).
2. **The first chains**: which ten, then which 25 (proposed: the most visited US chains in the Circana top 50,
   plus the ones our testers log most). Open.
3. **FatSecret**: **decided 21 October 2026: retired.** Its Eating out screens were switched off in the binary
   (a dormant feature to App Review, 2.3.1(a)) and its terms forbid the ranking this feature needs; the code was
   removed in build 4 (PLAN.md §16, Eating out). The chain table covers the chains that matter.
4. **Name**: "What to order" (proposed), or another plain name. Not "healthy menu". Open.

---

## 14. Unknowns we carry

| Unknown | Why it matters | What would settle it |
| --- | --- | --- |
| How MenuFit really covers "every restaurant" (22.3M places) | Only to judge our own coverage claims | Not knowable without breaking its terms; not needed |
| AI accuracy on **menu text**, not photos | Sets our ranges and the pass line | The accuracy pilot (section 11) |
| Apple's full 2.5.19 text | How we describe the server switch | Read it before the review notes are written |
| Whether Washington's health-data law and the FTC breach rule reach menu scans | Consent wording | Counsel, with the existing legal review |
| What people in forums say about eating out (Reddit couldn't be read) | Wording and priorities | A manual read of r/loseit, r/CICO, r/Zepbound before design |
| MenuFit's revenue and the incumbents' removed restaurant browsing | Only for positioning | Third-party estimates and user reports; watch monthly |
