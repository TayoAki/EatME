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
order: a single-purpose app, a hard paywall, more than $1M a month after store fees by August 2026. Weight Class
can do the same job better because it already knows what the person ate today.

**What to order**: at any restaurant, Weight Class lists the menu items that fit what's left today, best first,
with where each number comes from, and logs the one the person orders in one tap.

- **Chains**: the chain's own numbers (a licensed restaurant database), ranked by our code.
- **Any other restaurant**: the person takes a photo of the menu; the phone reads the text, the AI breaks each
  dish into foods and restaurant-size portions, and the numbers come from our USDA database, the same way meal
  photos work today. Estimates show a range.

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
here copies MenuFit's code, data or text; the ideas are common to the category (about 41 similar apps launched
since August 2025).

**The questions**

| # | Question | Status |
| --- | --- | --- |
| Q1 | What does MenuFit do, screen by screen, and how does it make money? | Answered (screens after the 30 Sep 2026 redesign: partly) |
| Q2 | How well does it work for people, and where does it fail? | Answered (store reviews; Reddit could not be read) |
| Q3 | Where do its restaurants, menus and numbers come from? | Partly: reported, not verified |
| Q4 | Who else does this, and what do people tracking calories want when eating out? | Answered |
| Q5 | Which data sources' licences allow ranked "best fits" and keeping logged meals? | Answered, with written confirmations still to get |
| Q6 | How accurate are AI estimates of restaurant dishes, and how do we make them better? | Partly: no study of menu text against chain values |
| Q7 | What are the safety, privacy and App Review risks? | Answered |
| Q8 | What in Weight Class can we reuse? | Answered (from the code) |

---

## 3. Findings ledger

Type: **O** observed in a primary source · **R** reported by someone else (press, founder, review sites) ·
**I** our inference. Details and links are in the research report.

| # | Finding | Type | What it means for us |
| --- | --- | --- | --- |
| F1 | MenuFit chooses what to order; it has **no food diary**. Long onboarding (about 25–34 screens: goal, body, favourite chains, likes, dislikes, allergies), then a rating prompt, sign-up and a hard paywall. Menus are ranked with a 0–100 score, plus a "Healthify" swap tool and an AI chat. | O | Ranking against **what's left today** and **logging the order** are things it can't do. |
| F2 | It's big: iOS 4.77★ from about 54,500 ratings, #13 in Health & Fitness; reportedly over $1M a month after store fees (August 2026). | O / R | The demand is real and people pay for it. |
| F3 | Its written reviews average about 2.6–2.7★: trial charges and support, calories off by 28–40% (one test: 400 shown, about 860 real), "macro-gamed" picks (burger patties with the buns thrown away), dislikes ignored, out-of-date menus. | O | Honest numbers with a source, real orderable items only, dislikes respected, a plain paywall. |
| F4 | Its data reportedly comes from **Nutritionix** (chains), the Mifflin–St Jeor formula and **OpenAI**. The "22.3 million locations" matches no public dataset. | R / I | Chains need a licensed database; "every restaurant" needs AI. |
| F5 | About 41 copycats since August 2025, nearly all a 0–100 fit score. Big trackers (MyFitnessPal, Lose It!, Nutritionix Track) log chain items but don't pick for you; MyNetDiary has a menu scan in its top tier; AI photo trackers (Cal AI, MacroFactor) help only after the meal. | O | No big tracker ranks the menu against the day. That's the gap. |
| F6 | Eating out was 56.3% of US food spending in 2025. Over 70% of restaurants are single-unit; the top 50 chains have 24% of locations. | O | A chain-only database misses most restaurants: the menu photo route is required. |
| F7 | GLP-1 users still eat out but order less: 62% order less food, 87% would order a smaller version of a dish, 89% say protein grams would sway them (Toast, August 2026). | R | GLP-1 mode ranks by protein first and suggests smaller portions. |
| F8 | **FatSecret** §1.7(iii) forbids using its API "to provide diet, nutrition or health advice, guidance". Ranking FatSecret numbers is that, whether our code or an AI does it. | O | No ranking on FatSecret data. |
| F9 | **Nutritionix** allows apps that give dietary guidance, but caching is "strictly prohibited" (even item IDs) below the MVP plan ($999 a month, billed yearly, 1,000 users); freemium apps get custom pricing. | O | Not now: on cheaper plans a logged meal couldn't keep its item. |
| F10 | **Edamam**: about 130,000 restaurant items; its terms (revised 28 Feb 2023) have no advice or ranking ban; the Core plan ($69 a month) may keep the ID, name and four macros "in the end user's account". | O | First choice for chains, after a trial and written confirmation. |
| F11 | **USDA FoodData Central** is public domain. Our meal-photo pipeline already gets its numbers from it (`src/lib/server/food-match.ts`). | O | Estimates for any restaurant need no licence. |
| F12 | Places: Google forbids storing names and addresses and use "in a listings or directory service"; Yelp forbids ranking its content and feeding it to AI; Apple Maps allows storing Place IDs and gives 25,000 free calls a day. | O | Restaurant finding, when we add it, uses Apple Maps. |
| F13 | AI calorie estimates from photos miss by about 30–36% on average and **underestimate more as portions grow**; adding facts helps most (cooking fat and sauce: 30.5% → 24.4%; an ingredient list: 13.9%). Models' own confidence is overconfident. | O | Ground in a database, ask one question when it matters, take ranges from measured error. |
| F14 | Allergen duties sit with restaurants; FARE says to tell staff every time. About half of people with disordered eating say calorie labels worsen their symptoms; hiding numbers was the most wanted option. | O | "Tell staff about allergies", never "safe"; calm mode everywhere. |
| F15 | Washington's My Health My Data Act covers health data inferred by machine learning; precise location is sensitive in several states; Apple's own example of an app needing only approximate location is "restaurants within driving distance". Apple added 2.5.19 (hidden or undocumented features) on 16 October 2026. | O | Approximate location only, and the feature is on in the reviewed build. |

---

## 4. What we build, and where it beats MenuFit

| Where MenuFit falls short (F1, F3) | What to order |
| --- | --- |
| No diary: picks are blind to the day | Ranks against **what's left today**, and logs the order in one tap |
| Numbers 28–40% off, no source shown | Every number says where it's from (**the chain**, **our database** or **an estimate**); estimates show a range |
| "Macro-gamed" picks (throw the bun away) | Only items you can order as they are, plus simple tweaks a server can make ("sauce on the side") |
| Dislikes ignored | Foods to skip are filtered out, and the list says how many were hidden |
| A hard paywall and trial charges | The existing Weight Class Premium, priced on screen, no surprise trial |
| "Guilt free", 0–100 health scores | No scores or "healthy" labels: "Fits what's left", "A bigger meal". Calm mode hides every number |
| Chains through a database, the rest guessed | Chains from the chain's own numbers; any other menu from a photo, priced from the USDA database |

Also for GLP-1 mode (F7): protein first, and smaller-portion ideas (a starter as a main, half portions) when a
full dish is too much for what's left.

---

## 5. What the person sees

- [ ] **Entry points**: Scan gets a **Menu** mode next to Meal and Label. Search → Restaurants shows **What fits**
  on a chain's menu. A Home card later, once we know people use it.
- [ ] **Scan a menu**: one to three photos (long menus have pages). The phone reads the text; "Reading the
  menu…" while the AI works (about as long as a meal scan). An optional field for the restaurant's name.
- [ ] **The list**: a header with what's left today ("About 850 kcal and 60 g protein left"), then **Fits best**
  (up to five items) and **Everything else**. Each row: the dish, calories (a range for estimates), protein, a
  source tag (Chain · Database · Estimate) and one reason ("Leaves room for dinner", "45 g protein"). A toggle
  shows items that are over what's left instead of hiding them.
- [ ] **A dish**: its numbers and where they come from, the foods and portions behind an estimate (editable, as in
  the meal screen), and up to two tweaks with their effect ("Dressing on the side: about −150 kcal").
- [ ] **Order it**: **Log it** saves the meal now; **Save for later** keeps it in Saved meals to log when the food
  arrives (the plate builder and Saved meals we already have). A logged estimate can be edited like any meal.
- [ ] **Foods to skip**: Profile → Preferences gets a short list (for example mushrooms, pork). Matching dishes
  drop out of Fits best; the list says "3 dishes hidden: foods you skip".
- [ ] **Allergies**: one line on every list, "Tell staff about allergies: Weight Class can't know what's in a
  dish." We don't ask for or store allergies.
- [ ] **Calm mode**: words instead of numbers ("Fits what's left", "A bigger meal", "A lighter choice").
- [ ] **States**: the phone couldn't read the menu ("Try again in better light, or type the dish"); the AI failed
  (the scan isn't counted); nothing fits ("Nothing fits what's left: the lightest choices are first"); no free
  scans left (the Premium screen).

**Wording**: "fits what's left", "an estimate", "the chain's numbers". Never "healthy", "guilt free", "safe",
"best for your body" or a score.

---

## 6. Where the numbers come from, and how items are ranked

**Numbers, in order of preference** (the AI never makes up a chain's numbers):
1. **The chain's numbers** from the restaurant database (section 7), as they are.
2. **Our database**: for any other menu, the AI breaks each dish into foods and restaurant-size portions, and
   `computeItems` (`src/lib/server/food-match.ts`) prices them from USDA, as meal photos do today. Personal foods
   ("Your usual") apply too.
3. **The AI's own estimate**, only for dishes the database can't match. Shown as an estimate with a wider range.

**Two passes, to keep a long menu cheap**: the AI reads the whole menu once (dishes, a quick estimate each, likely
tweaks); our code pre-ranks; then the top eight are priced properly from the database. The list shows the priced
numbers for those and the quick estimate, marked, for the rest.

**Ranges** come from the error we measure in the pilot (section 11), not from the AI's confidence (F13). Large
portions get a wider range, and a measured underestimate is corrected upward if the pilot shows one.

**Ranking is our code, not the AI** (`src/shared/menu-fit.ts`, built on the scoring in `src/shared/day-draft.ts`):
- **The aim for this meal**: what's left today divided by the main meals still to come (from the person's own meal
  times, as Plan tomorrow does), never planning below the calorie floor.
- **The score**: distance from that aim, a protein shortfall cost (protein first in GLP-1 mode), and an
  uncertainty cost so a sure 650 kcal beats a vague 600.
- **Filters**: foods to skip; drinks and sides are listed but not ranked as meals.
- **Only real items**: whole dishes as sold, plus tweaks a server can make. No combinations that throw part of a
  dish away (F3).

**The AI's job** (server only, `src/lib/server/menu-analysis.ts`, prompts in `prompts.ts`): turn menu text into
dishes (name, section, description, price if printed), break dishes into foods and portions, suggest up to two
tweaks per dish, and write the one-line reason. It runs after the AI consent, like every scan.

---

## 7. Data sources and licences

| Need | Choice | Why |
| --- | --- | --- |
| Chain menus with numbers we may rank and keep | **Edamam**, Core plan ($69 a month), if the trial and its written answer pass (section 11) | No ranking ban; may keep ID, name and the four macros in the person's account (F10) |
| Fallback for chains | The chains' own published nutrition, entered by us for the top US chains | Facts can't be copyrighted; entering them by hand avoids scraping chain websites |
| Later, with revenue | Nutritionix MVP ($999 a month, yearly) with a written caching clause | Best coverage (860 restaurants), allows guidance, but the price only works at scale (F9) |
| Any other restaurant | Menu photo → USDA FoodData Central via `computeItems` | Public domain; already our database (F11) |
| Finding restaurants nearby (v2.6) | Apple Maps (MapKit), approximate location, Place IDs stored | 25,000 free calls a day; Google and Yelp terms rule them out (F12) |
| FatSecret | Not used for What to order. Its Eating out code stays off; retire it once chains move to Edamam (owner decision) | It forbids advice and ranking (F8) and needs static IPs |

Every source keeps its required credit next to its numbers (for example "Powered by Edamam" where the terms ask).

---

## 8. Data, API and code

**Data** (migration `menu_scans`)
- `menu_scans`: `id`, `user_id` (cascade), `restaurant` (name, optional), `dishes` (jsonb: name, section,
  description, source, nutrients, range, tweaks, priced), `status` (`reading` | `ready` | `failed`), timestamps.
  Kept 30 days, then deleted by a nightly job. Menu photos are never stored when the phone read the text; when
  photos are sent, they're deleted once the menu is read.
- Meals: a new meal source `menu`; `meal_items.menu` (scan ID, dish name, source, range) next to the existing
  `restaurant` field.

**API**
- `POST /api/menu-scans`: menu text (or photos when the phone can't read them) and an optional restaurant name.
  Starts the AI in the background, like meal analysis; counts as an AI scan.
- `GET /api/menu-scans/:id`: the dishes, ranked for the person's day (ranking runs on every read, so it follows
  what they've eaten since).
- `POST /api/menu-scans/:id/dishes/:n/log` (and `save`): logs or saves the dish (with a tweak if chosen). Tapping
  twice logs once.
- Chains: `GET /api/restaurants…` routes move from FatSecret to the new provider; `GET /api/restaurants/menu`
  gains the ranking.

**App**
- On-device menu reading: Apple's Vision text recognition in a small local Expo module (`modules/menu-text`),
  adapted from the one written for the ChartME app (`modules/chart-text-recognition` in that repo): reads lines in
  order and keeps prices. The photo stays on the phone; only the text is sent. Android and older builds send the
  photo instead.
- Screens: `src/components/menu/` (list, dish sheet, skip list), reusing the plate bar and Saved meals.

---

## 9. Premium, limits and costs

- **Proposed**: What to order is a **Premium** feature, like Plan tomorrow. Free accounts get one full try, then
  the Premium screen. Each menu scan counts against the AI scan limits we have (3 a day free, 50 a day Premium).
  Owner decision (section 13).
- **Costs**: one menu read plus pricing eight dishes is about the cost of one or two meal scans (measured in the
  pilot). Edamam Core is $69 a month; Nutritionix is not taken on until revenue covers $12,000+ a year.
- **Kill switch**: `WHAT_TO_ORDER` (server flag) and the existing AI budget.

---

## 10. Privacy, safety and App Review

- **AI consent (5.1.2(i))**: the consent screen names what's sent; add "menu text or photos". People who already
  agreed see the change once.
- **Health claims (1.4.1)**: every number has its source and a working link (chain or USDA); estimates say so and
  show a range; the "check with a doctor" line stays in Daily goals; no accuracy claims in the app, store text or
  ads (F13; the FTC's Workado case).
- **Allergens**: the line on every list (section 5); we never filter by allergy or call a dish safe (F14).
- **Eating disorders**: no scores, no "guilt free"; calm mode hides numbers (F14).
- **Location** (only when nearby restaurants arrive): approximate only, asked when the person taps "Near me", with a
  purpose string saying it finds restaurants nearby and is not stored (F15).
- **Washington health data policy and Privacy Policy**: add menu scans (what's read, kept 30 days, sent to the AI
  providers, never sold), and the restaurant data provider as a service provider.
- **App Review**: the feature is on in the reviewed build and in the review notes, with a test menu (an image on
  the support page a reviewer can photograph from a second screen) so it can be tried without a restaurant (2.1,
  2.5.19).
  Screenshots show it with the Premium badge.
- **Store listing**: name What to order in the description; no "healthy" or "guilt free".

---

## 11. Before we build: three checks

The REA method corroborates before building on a finding. Each check has a pass line; if one fails, the plan
changes before any code.

- [ ] **Accuracy pilot** (like the week-1 pilot run for ChartME): 40 chain dishes from 10 chains, their menu
  text through our pipeline (read → foods and portions → USDA) against the chains' published numbers. Pass:
  median calorie error 20% or less, the top five picks overlap the "true" top five by 3 or more, and no
  systematic underestimate we can't correct. Gives the range widths.
- [ ] **Edamam check**: on a trial, coverage of the top 50 US chains and 50 items checked against the chains'
  published numbers; and Edamam's written answer that we may rank their items and keep the logged ones in the
  person's meal log. If either fails: the chain fallback in section 7.
- [ ] **Menu reading on a phone**: the Vision module on 10 real menus (printed, chalkboard, dim light). Pass: 9 of
  10 give usable dish lines; otherwise we send the photo instead, as meal scans do.

---

## 12. Build order

| Step | What | Days |
| --- | --- | --- |
| 1 | The three checks (section 11) | 2 |
| 2 | Server: menu reading prompt, two-pass pricing, `menu_scans`, logging, limits | 4 |
| 3 | Ranking (`menu-fit.ts`), foods to skip, calm mode words | 1.5 |
| 4 | App: Menu scan mode, on-device reading module, list, dish sheet, log and save | 5 |
| 5 | Chains on Edamam (search, menu, ranking, logging, credit), FatSecret retired | 4 |
| 6 | Consent, Privacy Policy, Washington policy, support page test menu, store text, review notes | 1.5 |
| 7 | Tests: server end-to-end, UI suite, device checklist (camera, Vision) | 2 |
| | **Total** | **≈ 20** |

Release as v2.5 with one EAS build. Nearby restaurants (Apple Maps) and a Home card follow in v2.6 if people use
it.

---

## 13. Decisions for the owner

1. **Premium**: What to order as Premium with one free try (proposed), or free with the scan limits.
2. **Edamam**: start the trial and ask them in writing (the two questions in section 11).
3. **FatSecret**: retire the Eating out code once chains move (proposed), or keep it as plain lookups.
4. **Name**: "What to order" (proposed), or another plain name. Not "healthy menu".

---

## 14. Unknowns we carry

| Unknown | Why it matters | What would settle it |
| --- | --- | --- |
| How MenuFit really gets "every restaurant" (22.3M places) | Only to judge our coverage claims | Nothing we can learn without breaking its terms; not needed |
| AI accuracy on **menu text**, not photos | Sets our ranges and the pass line | The accuracy pilot (section 11) |
| Edamam's coverage and whether its 2023 terms still hold | Decides the chain source | The trial and its written answer |
| What people in forums say about eating out (Reddit couldn't be read) | Wording and priorities | A manual read of r/loseit, r/CICO, r/Zepbound before design |
| How long MenuFit's paywall and pricing tests keep working | Only for our pricing | Watch its store page monthly |
