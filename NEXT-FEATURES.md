# EatME — next features plan (v2.2 to v2.4)

> Written 27 September 2026 so we can build from it later. **Nothing here is built yet.**
> Read it together with `PLAN.md` (the app as it is: rules, data model, routes) and `AGENTS.md`
> (how we build). This file replaces the v2.2 list and the "Later" list that were in `PLAN.md`.
> When a feature ships, tick its box here and add it to `PLAN.md`.

## Contents

1. [What's in and what's out](#whats-in-and-whats-out)
2. [Rules for every feature](#rules-for-every-feature)
3. [GLP-1: one medicine at a time, with a history](#1-glp-1-one-medicine-at-a-time-with-a-history)
4. [Peptide mode: pens and vials left, use-by and refill reminders](#2-peptide-mode-pens-and-vials-left-use-by-and-refill-reminders)
5. [Injection sites: left and right, the last one shown](#3-injection-sites-left-and-right-the-last-one-shown)
6. [Body measurements and progress photos](#4-body-measurements-and-progress-photos)
7. [Steps, workouts and sleep from Apple Health / Health Connect](#5-steps-workouts-and-sleep-from-apple-health--health-connect)
8. [A calorie target that adjusts to your weight trend](#6-a-calorie-target-that-adjusts-to-your-weight-trend)
9. [Alcoholic drinks](#7-alcoholic-drinks)
10. [Plan tomorrow](#8-plan-tomorrow)
11. [Store, privacy and legal changes](#store-privacy-and-legal-changes)
12. [Build order](#build-order)
13. [Open decisions](#open-decisions)
14. [Also decided: sign-in and password resets](#also-decided-sign-in-and-password-resets)

---

## What's in and what's out

| # | Feature | Release | Free or Premium (proposed) | Effort (developer-days) |
|---|---|---|---|---|
| 1 | GLP-1: one medicine at a time, with a history of switches | v2.2 | Free | 3 |
| 2 | Peptide mode: pens and vials left, use-by and refill reminders | v2.2 | Free | 5 |
| 3 | Injection sites: left and right, the last one shown | v2.2 | Free | 1.5 |
| 4 | Body measurements and progress photos | v2.2 | Free | 6 |
| 5 | Steps, workouts and sleep from Apple Health / Health Connect | v2.3 | Free | 5 |
| 6 | A calorie target that adjusts to your weight trend | v2.3 | Premium | 6 |
| 7 | Alcoholic drinks | v2.4 | Free | 3.5 |
| 8 | Plan tomorrow | v2.4 | Premium | 6 |
| | Design prompts, store and legal updates, builds and testing across the three releases | | | 4 |
| | **Total** | | | **≈ 40** |

**Out of this plan**
- **Export and doctor report**: skipped. Drop the `expo-print` / `expo-sharing` install and the
  `GET /api/export` / `GET /api/report` routes that the old v2.2 notes had.
- **What to eat next**: not requested, parked. Plan tomorrow no longer waits for it.
- **Several GLP-1 medicines at once**: dropped (see feature 1: people take one at a time).
- **Never built**: dose, unit or reconstitution maths, dose suggestions, titration schedules, lists
  of research peptides or "stacks", links to sellers. App Store 1.4.1 and 1.4.2 and FDA rules are
  why (see feature 2).

---

## Rules for every feature

These add to `AGENTS.md`; every item below follows them.

- **Health data stays private.** Medicines, doses, injection sites, supply counts,
  measurements, progress photos, steps, workouts, sleep and drinks never go into server logs,
  Sentry, URLs, notification text or AI prompts. Meals remain the only thing the AI sees, as
  today.
- **No medical advice.** EatME records and shows. It never suggests a dose, a site, a medicine
  change or how much to drink. Where a number could worry someone, show the existing
  "check with a doctor" line.
- **Calm mode** (v2.1) shows words instead of calorie and macro numbers in every new screen.
  Fiber and water numbers stay, as today. Each feature below says what calm mode hides.
- **Old app versions keep working.** Deploy the server first. New columns are nullable, and
  `users.glp1` stays the GLP-1 on/off switch and mirrors the current medicine.
- **What we collect changes with the legal pages.** Every change updates `legal/privacy.html`,
  `legal/health-data.html` (Washington) and `store/README.md` (App Privacy, Play Data safety) in
  the same release.
- **One EAS build per release.** Native changes (Health read permissions, camera and photo
  texts, the HealthKit drinks type) are batched so each release needs a single new build.
- **Premium features** are checked on the server, with the same subscription check as the scan
  limit. The app shows the Premium screen instead of an error.
- **Tests.** Every feature gets a server end-to-end suite and a UI suite (the harness used for
  v2.1), plus a short device checklist for what the web build can't run (Health, notifications,
  camera). Lint and typecheck before each commit, as always.
- Migrations: edit `src/db/schema.ts`, then `npm run db:generate -- --name <name>` (names given
  below).

---

## 1. GLP-1: one medicine at a time, with a history

- [ ] Built

**Why this shape.** People take one GLP-1 medicine at a time; prescribers don't combine two.
What does happen is switching (for example Ozempic → Mounjaro), dose changes and pauses. So
EatME keeps **one current medicine** and **remembers the ones before it**, so doses, side
effects and the weight chart stay tied to the right medicine. The old v2.2 idea of up to five
active medicines is dropped.

**What the person sees**
- **GLP-1 screen**: the current medicine card (name, schedule, dose day), a **Switch medicine**
  button and a **Medicine history** list, for example "Semaglutide injection · 3 Jan – 11 Mar
  2026" and "Tirzepatide · since 12 Mar".
- **Switch medicine**: pick the new medicine (the same list as today, plus Other), its schedule
  and dose day, and the day it starts (today by default). The old one gets an end date; nothing
  is deleted.
- **Other**: a name field "as it's written on your prescription label" (up to 40 characters,
  free text, no suggestions or list). People who already use Other see a one-time, optional
  prompt to add the name.
- **Weight screen**: a small marker on the chart where a medicine started or changed ("Started
  tirzepatide"). It makes no claim about cause.
- **Dose sheet**: the current medicine's name at the top. The dose label is typed as today and
  starts with the last one used.

**Data** (migration `glp1_medications`)
- New table `glp1_medications`:

  | Column | Type | Notes |
  |---|---|---|
  | `id` | uuid | |
  | `user_id` | text | cascade delete |
  | `medication` | enum | today's list: semaglutide injection, tirzepatide, semaglutide tablet, liraglutide, other |
  | `name` | text, null | only for Other, as on the label |
  | `form` | enum `pen` / `vial` / `tablet` | tablets for the tablet medicine; injections ask pen or vial (pen first), since several come as either |
  | `schedule`, `dose_weekday` | as in `users.glp1` today | |
  | `started_on` | date | |
  | `ended_on` | date, null | null means current. Partial unique index: one current row per user |
  | supply columns | | see feature 2 |
  | timestamps | | |

- `dose_logs.medication_id`: nullable, set null when the medication is deleted. New doses carry
  it. Old doses stay null and are shown under whichever medicine was current on their date.
- `users.glp1` stays as the on/off switch and mirrors the current medicine, so v2.1 apps and the
  tester count in `PLAN.md` §16 keep working.
- Existing data moves over on first use: `ensureMedication(userId)` creates the current row from
  `users.glp1`. It is idempotent, runs inside the GLP-1 routes, and needs no SQL at boot.

**API** (`requireUserId`, zod, `handle()`)
- `GET /api/glp1`: today's response plus `current` and `history`.
- `POST /api/glp1/switch` `{ medication, name?, form?, schedule, doseWeekday?, startsOn? }`: ends
  the current medicine, starts the new one and mirrors it to `users.glp1`, in one transaction.
- `PATCH /api/glp1/medications/:id`: fix a name, the form or the dates. Periods can't overlap.
- `POST /api/glp1/doses`: sets `medication_id` to the current medicine.

**Rules**
- `started_on` can't be after today, and a switch can't start before the current medicine's
  `started_on`.
- Turning GLP-1 mode off ends the current medicine (`ended_on` = today). Turning it on again
  starts a new row.
- **Delete my GLP-1 data** removes medications, doses, side effects, supply and sites.
- The medicine name (Other) is health data: never logged, never in notifications.

**Tests**
- A switch keeps old doses under the old medicine.
- A v2.1 app, which sends no medication fields, still logs doses.
- Delete clears everything.
- The Other name never appears in server logs.

**Done when** someone who switches from Ozempic to Mounjaro sees both in the history, their old
doses under Ozempic, new doses under Mounjaro, and a marker on the weight chart.

---

## 2. Peptide mode: pens and vials left, use-by and refill reminders

- [ ] Built

**Name and scope (please decide; see Open decisions).** In the app and the store listing, call
this **Pens & vials** (a Supply card inside GLP-1 mode), not "peptides".
- **App Review risk:** Apple looks hard at apps that track injections (1.4.1 physical harm,
  1.4.2 dose calculators), and "peptides" invites research-peptide use.
- **What it still covers:** any injectable the person was prescribed. They can pick Other and
  type its name. EatME never lists or suggests research peptides.

**What the person sees**
- **A Supply card** on the GLP-1 screen for the current medicine, for example "2 unopened · 3
  doses left in the one you're using · Use by 14 Oct". Tablets show "tablets left". These aren't
  food numbers, so calm mode shows them too.
- **Set up** (a short sheet, all counts the person enters):
  1. What do you use? Pens, vials or tablets (default from the medicine).
  2. "How many doses does one pen (vial, pack) give you?", as the pharmacist or label says (a
     whole number from 1 to 60). No presets: the count depends on the dose, and a wrong preset
     would be a dosing error.
  3. Doses left in the one you're using now (0–60).
  4. How many unopened (0–20).
  5. When you opened the current one, and "Use within … days of opening" from the label
     (1–90; leave it blank for no use-by date).
  6. Remind me when … doses are left (default 2), and the day before the use-by date (on by
     default).
- **Logging a dose** (the existing dose sheet) counts one down. When the one in use is at 0 and
  there are unopened ones, that dose opens the next one (its use-by starts that day) and the
  sheet asks "Started a new one?". Yes needs nothing more. No opens Fix counts, so the person
  can enter what's really left.
- **Refill**: add unopened pens or vials.
- **Fix counts** at any time. Counting starts again from what they enter; the dose log doesn't
  change.
- **The card says "Based on the doses you logged"**, because counts only move when doses are
  logged.

**Never** (also written in the App Review notes):
- No mg → mL → units conversion and no syringe units.
- No reconstitution or bacteriostatic-water maths.
- No dose suggestions or titration schedules.
- No list of research peptides or "stacks", and no sellers.

**Data** (migration `glp1_supply`, can ship with `glp1_medications`)
- New columns on `glp1_medications`, the current medicine's row:

  | Column | Meaning |
  |---|---|
  | `doses_per_container` | doses one pen, vial or pack gives |
  | `count_started_at` | when the person last set or fixed the counts |
  | `doses_left_at_count` | doses left in the open one at that moment |
  | `unopened_at_count` | unopened ones at that moment |
  | `opened_on` | when the current one was opened |
  | `use_within_days` | from the label; null means no use-by |
  | `low_supply_at` | default 2 |
  | `remind_use_by`, `remind_low` | booleans |

- **Doses left now** is replayed on the server from the count. Replaying keeps the counts right
  when a dose is edited or deleted. For each dose of this medicine logged after
  `count_started_at`, in order:
  - If the open one has doses left, take one from it.
  - Otherwise, if there's an unopened one, open it (`opened_on` = that dose's date) and take one
    from it.
  - Otherwise stay at 0 and flag it as overdrawn, which shows "Fix counts".
- **Use-by** = `opened_on` + `use_within_days`.
- **Total doses left** = doses left in the open one + unopened × `doses_per_container`.

**API**
- `PUT /api/glp1/supply`: set up or fix counts, with `{ form, dosesPerContainer, dosesLeft,
  unopened, openedOn?, useWithinDays?, lowSupplyAt, remindUseBy, remindLow }`. Counting starts
  again from now.
- `POST /api/glp1/supply/refill` `{ containers }`: starts a new count from the current replay
  with the extra unopened ones.
- A new one being opened needs no route: the replay opens it on the day of the dose that needed
  it, and a wrong guess is corrected with Fix counts (`PUT`).
- `GET /api/glp1` also returns `supply: { dosesLeft, openLeft, unopened, useBy, low, overdrawn }`.

**Reminders** (local notifications, planned in `src/lib/reminder-plan.ts` from the supply the
app already has; like the "Dose day" reminder, they never name the medicine)
- **Use-by**: the day before, at the dose-reminder time. Title "Supply reminder", body "Check
  the date on the one you're using."
- **Low supply**: after a logged dose leaves total doses ≤ `low_supply_at`, the next morning at
  9:00: "Time to refill: 2 doses left." The GLP-1 screen also shows a banner.
- There are never reminders to take more or less.

**Tests**
- Replay stays right after edits and deletes.
- Rolling over to a new pen works.
- Overdrawn counts show "Fix counts".
- Use-by date and reminder planning are correct.
- No medicine names in notification text.
- A v2.1 app is unaffected.

**Done when** one open pen (2 doses left) plus one unopened (4 doses each), after three logged
doses, shows "0 unopened · 3 doses left in the one you're using · Use by …", and a low-supply
reminder is planned when total doses reach 2.

---

## 3. Injection sites: left and right, the last one shown

- [ ] Built

- **Six sites**: stomach, thigh and upper arm, each left or right.
  - A new `dose_logs.side` column holds `left` or `right`. It's nullable, because old logs have
    no side. The `injection_site` enum doesn't change.
  - Migration `dose_sides`, which can ship with feature 1.
- **Dose sheet**: a front-view body outline with six tap targets, or a 3 × 2 grid of chips (Left
  and Right columns). The last one used is marked, for example "Last: left thigh · 7 days ago".
  Nothing is suggested as the "next" site, because the label and the prescriber say how to
  rotate (an existing decision).
- **GLP-1 screen**: "Recent sites" shows the last six doses as dots on the outline.
- Tablets hide sites.
- **API**: `POST /api/glp1/doses` accepts `side`, and `GET /api/glp1` returns `lastSite: { site,
  side, takenAt }`.
- **Tests**: a side is saved and shown; old doses without a side still show; tablets have no
  site.

---

## 4. Body measurements and progress photos

- [ ] Built

**What the person sees**
- **Profile → Weight & body** (was "Weight"), with three tabs: **Weight | Measurements | Photos**.
- **Measurements**:
  - Waist, hips, chest, arm, thigh and neck, in cm or inches following the unit setting.
  - One entry a day; editing replaces it.
  - A chart for each, in the same style as weight.
  - "Add measurements" takes any of them.
- **Photos**:
  - Front, side and back for each date.
  - The camera shows a faint outline of the last photo in that pose, to line up; or choose from
    the library.
  - A grid by date; tap a photo for full screen.
  - **Compare**: pick two dates to see them side by side, with the nearest weigh-in and
    measurements under each.
- **The Photos tab says**: "Private — only you can see them. Never used for AI." No
  before/after labels, scores or praise.
- **Reminder** (optional, off by default): "Progress photo" every 4 weeks, on the day and at the
  time they pick.
- **Calm mode**: measurements follow what the Weight screen does in calm mode. Photos are
  unchanged.

**Data** (migration `body_tracking`)
- `body_measurements`: `id`, `user_id` (cascade), `date`, then `waist_cm`, `hips_cm`, `chest_cm`,
  `arm_cm`, `thigh_cm` and `neck_cm` (all nullable), and timestamps. Unique on
  (`user_id`, `date`).
- `progress_photos`: `id`, `user_id` (cascade), `date`, `pose` (`front` / `side` / `back`),
  `key` (`progress/<userId>/<id>.jpg`), `width`, `height` and timestamps. Unique on
  (`user_id`, `date`, `pose`); a retake replaces the photo and deletes the old file.
- **Storage** (the private bucket):
  - The phone resizes to 1,600 px, JPEG 0.8. Re-encoding removes location data.
  - Signed links last 30 minutes.
  - Meal analysis refuses any key that isn't under `meals/`.
  - Account deletion and "Delete all photos" clear `progress/<userId>/`.

**API**
- `GET /api/body?from=&to=`: measurements, plus photos with signed links.
- `PUT /api/body/measurements/:date` (upsert) and `DELETE /api/body/measurements/:date`.
- `POST /api/body/photos` (multipart: date, pose, image): stores the photo and returns a signed
  link. Up to 30 uploads a day.
- `DELETE /api/body/photos/:id` and `DELETE /api/body/photos` (all).

**Tests**
- Upload, retake and delete.
- An expired signed link stops working.
- Account deletion clears the folder.
- The AI route refuses progress keys.
- Unit conversion is right both ways.

**Done when** someone can log measurements, take front and side photos lined up with last
month's, compare two dates side by side, and delete everything.

---

## 5. Steps, workouts and sleep from Apple Health / Health Connect

- [ ] Built

**What the person sees**
- **Health screen**: a second switch, **Read activity and sleep**, separate from today's "Save
  meals and water". It asks for read access to steps, active energy, workouts and sleep.
- **Home**: an Activity row under the nutrition summary, for example "8,412 steps · 42 min
  workout · 7 h 10 m sleep". Calm mode keeps steps and sleep but hides active calories.
- **Activity screen** (tap the row): the last 7 days, with steps as bars, workouts (type,
  duration, active calories) and sleep for each night.
- **Nothing is added to the calorie goal in this version.** The activity level chosen in
  onboarding already counts workouts ("Lightly active: 1–3 workouts per week"), so adding them
  again would double-count. The adaptive target (feature 6) follows real activity instead. See
  Open decisions.

**Data stays on the phone.** Activity and sleep are read on demand from Apple Health or Health
Connect and shown in the app. They aren't stored on the server and are never sent to the AI.
- **Stores:** data that never leaves the phone doesn't count as "collected" for the App Store
  or Google Play.
- **Apple:** it also keeps us inside Apple's HealthKit rules (5.1.3) on sharing health data.

**Implementation**
- **Modules**:
  - `src/lib/health-read.ts` (native).
  - `src/lib/activity-plan.ts` (plain logic that can be tested anywhere):
    - Totals by local day.
    - Sleep counted for the day the night ends on.
    - Workout names.
- **iPhone** (`@kingstinct/react-native-healthkit` 16, already installed):
  - Daily steps and active energy for 7 days: `queryStatisticsCollectionForQuantity`
    (StepCount, ActiveEnergyBurned). HealthKit's statistics don't double-count watch and phone.
  - Workouts: `queryWorkoutSamples`.
  - Sleep: `queryCategorySamples` (SleepAnalysis). Only the asleep stages (core, deep, REM,
    unspecified) count; "in bed" and "awake" don't.
- **Android** (`react-native-health-connect` 4, already installed):
  - Steps and ActiveCaloriesBurned: daily aggregates, which Health Connect de-duplicates.
  - ExerciseSession and SleepSession: `readRecords`. Sleep counts every stage except awake,
    awake in bed and out of bed; a session without stages counts from its start to its end.
- **Query hook**: `useActivity(range)`. It runs locally with no API call and refreshes when the
  app comes to the front.
- **Permissions**:
  - iPhone:
    - Add the read types to the HealthKit plugin in `app.json`.
    - `NSHealthShareUsageDescription` changes from "EatME only writes…" to "EatME can read
      your steps, workouts and sleep to show them next to your meals. They stay on your phone."
    - HealthKit hides refused read access, so an empty screen says "No data yet — if you turned
      this off, change it in Settings → Health → Data Access & Devices → EatME."
  - Android:
    - Add `android.permission.health.READ_STEPS`, `READ_ACTIVE_CALORIES_BURNED`,
      `READ_EXERCISE` and `READ_SLEEP` to `app.json`.
    - Update the Health Connect declaration in Play Console, with a reason for each read.
    - Build the native screen that shows the Privacy Policy from Health Connect's permission
      screen (an open item in `PLAN.md` §10). Google checks it for read access.
- A new EAS build is needed.

**Tests**
- The plain logic:
  - Sleep across midnight counts for the right night.
  - Several nights in a row count separately.
  - Workouts are named and totalled correctly.
  - Days with no data show as empty.
- A device checklist on an iPhone with and without a watch, and on an Android phone.

**Done when** someone who turns on reading sees today's steps, workouts and last night's sleep
on Home, and the last 7 days on the Activity screen, with nothing sent to the server.

---

## 6. A calorie target that adjusts to your weight trend

- [ ] Built

**What the person sees**
- **Daily goals**: a switch, **Adjust my calorie target each week** (off by default). After 14
  days of logging with 4 or more weigh-ins, Home offers it once: "Want EatME to fine-tune your
  target from your real results?"
- **Weekly check-in** (Mondays by default, or a day they pick), shown as a Home card:
  - "This week: trend −0.4 kg · you logged about 1,780 kcal a day · your body used about 2,230
    (estimate)."
  - "New target: 1,850 → 1,760 kcal", with **[Use 1,760]** and **[Keep 1,850]**.
  - Protein, carbs and fat are recalculated the way Daily goals does it.
  - A "How this is worked out" sheet explains the maths.
- **Not enough data**: the card says what's missing, for example "Log at least 5 of the last 7
  days and weigh in twice a week for a check-in."
- **Target history** in Daily goals: the date, old → new, and whether it was used or kept.
- **Calm mode**: no check-in card. The switch stays in Daily goals with a words-only
  explanation.

**The maths** (plain functions in `src/shared/adaptive.ts`, run on the server, fully tested)
- **Window**: the last 28 days, or fewer if the person started more recently (at least 14).
- **A day counts** when logged calories are at least 800 and at least half the target. The
  window needs 10 such days, and the weekly card needs 5 of the last 7.
- **Weight**: the existing trend line (`weightTrend` in `src/shared/weight.ts`). It needs 4 or
  more weigh-ins spread over at least 10 days.
- **Energy used, from the data**: average intake on counted days, minus (trend at the end −
  trend at the start) × 7,700 ÷ days in the window (7,700 kcal per kg is `KCAL_PER_KG`, already
  in the code). Days that didn't count are assumed to be like the ones that did.
- **Blend with the formula** (Mifflin–St Jeor × activity level at today's weight, which already
  exists):
  - Data weight: w = counted days ÷ 28, at most 1.
  - Estimate = w × data + (1 − w) × formula. Early on it leans on the formula; when every day
    of the last four weeks counts, it uses the data alone.
  - The estimate stays between 1.1× and 2.4× the resting rate (BMR).
- **Smoothing**: the estimate moves at most 150 kcal from last week's used estimate.
- **Proposed target** = estimate + the goal adjustment (`dailyCalorieAdjustment(goal,
  weeklyGoalKg)`, already in the code), rounded to 10.
- **Guardrails** (the same as the plan today):
  - Never below `minimumCalories(gender)`: 1,500 for men, 1,200 for women.
  - Never a pace faster than 1 kg a week.
  - At most ±150 kcal per check-in.
  - No lower target when the trend is falling faster than 1 kg a week (the existing fast-loss
    note shows instead).
  - No weight-loss target at or under the BMI 18.5 floor; propose maintenance with the doctor
    line.
  - Goal reached (the trend is within 0.5 kg of the goal weight): propose switching to maintain.
  - **GLP-1 mode on**: the check-in never proposes a lower target, because appetite is already
    low and the aim is enough protein. It only proposes a higher one, or keeping it.

**Data** (migration `adaptive_target`)
- `target_checkins`:

  | Column | Meaning |
  |---|---|
  | `id`, `user_id` | cascade delete |
  | `week_start` | date |
  | `estimated_kcal` | estimated energy used |
  | `data_days` | days that counted |
  | `trend_change_kg` | trend change over the window |
  | `previous_kcal`, `proposed_kcal` | old and proposed targets |
  | `status` | `proposed`, `accepted` or `kept` |
  | `reason` | `ok`, `not_enough_logging`, `not_enough_weights`, `floor`, `fast_loss`, `glp1_hold` or `goal_reached` |
  | timestamps | |

  Unique on (`user_id`, `week_start`).
- `users.preferences` gains `adaptiveTarget` (boolean) and `checkInWeekday`.

**API** (no scheduled job: the check-in is worked out when the app asks)
- `GET /api/checkin`: this week's check-in. The first request of the week works it out and saves
  it as `proposed`; without one, it returns the reason.
- `POST /api/checkin/accept`: updates the daily calories and macros (like Daily goals) and
  marks it `accepted`.
- `POST /api/checkin/keep`: marks it `kept`.

**Tests**
- Maths with made-up data:
  - A steady weight gives a data estimate equal to average intake.
  - Losing 0.5 kg a week on 1,800 kcal gives a data estimate of 2,350 (1,800 + 0.5 × 7,700 ÷ 7).
  - 14 counted days weigh the data and the formula about half and half.
  - Noisy weights and gaps don't swing the estimate.
- Every guardrail.
- The GLP-1 hold.
- Accept and keep, end to end.
- Calm mode hides the card.

**Done when** someone with three weeks of logging and weigh-ins gets a Monday check-in with a
sensible new target inside every guardrail, can accept or keep it, and sees it in the target
history.

---

## 7. Alcoholic drinks

- [ ] Built

**What the person sees**
- **Scan → Search foods** gets a third tab, **Drinks**: pick the type, the size, the strength
  (ABV %) and how many, then **Log it**.
  - Types, each with a default strength the person can change: beer, light beer, wine (red,
    white, rosé), sparkling wine, spirit (a shot), cocktail (spirit plus mixer), hard seltzer
    and cider.
  - Sizes follow the unit setting: can 12 oz / 355 ml, pint 16 oz / 473 ml, wine glass 5 oz /
    150 ml, shot 1.5 oz / 44 ml, or custom.
  - Cocktail: 1–3 shots of spirit plus a mixer (none, soda water, tonic, cola, juice or syrup).
- **The result** shows calories and standard drinks, for example "1.2 standard drinks". A US
  standard drink is 14 g of alcohol.
- **Home**: drinks appear as meals with a glass icon. The day's nutrients screen adds "Alcohol:
  28 g (2 standard drinks)".
- **Photos and descriptions** keep working through the AI ("2 IPAs"), and so do barcodes on
  cans.
- **Calm mode**: the drink card shows the name and count ("2 × beer") with no calories.
- **Tone**: no judgment, no tips about drinking less, no "healthy" claims. (Whether Support
  should also list an alcohol helpline is an open decision.)

**The maths** (plain functions in `src/shared/drinks.ts`)
- Alcohol (g) = volume (ml) × ABV ÷ 100 × 0.789.
- Calories = alcohol g × 7 + carbs g × 4.
- **Carbs and sugars per 100 ml** come from the USDA foods table we already load (the beer,
  light beer, wine, cider, cola and tonic entries), picked by code when this is built, rather
  than numbers typed by hand. Spirits have none.
- Standard drinks = alcohol g ÷ 14.
- The server works the numbers out; it never trusts numbers from the phone (like restaurant
  plates).

**Data and API** (migration `drinks`)
- Meal source `drink` (a new enum value). There's one item per drink, with nutrients `calories`,
  `carbsG`, `sugarsG` and `alcohol`; the `alcohol` nutrient key already exists in
  `src/shared/nutrients.ts`.
- `meal_items.drink` (jsonb): `{ type, volumeMl, abv, count, shots?, mixer? }`, stored the same
  way as the `restaurant` field.
- `POST /api/meals` accepts `{ drink: { type, volumeMl, abv, count, shots?, mixer? } }`.
- Log again, Saved meals and edits work because it's a meal.
- **Health**:
  - Calories and carbs sync as nutrition, as today.
  - On iPhone, it also writes the number of drinks (`NumberOfAlcoholicBeverages`), which needs
    that write permission in the v2.3 build.
  - Health Connect has no drinks type, so Android skips that part.

**Tests**
- The maths for each type, size, count and mixer.
- A log can't be sent with made-up numbers.
- Calm mode shows no calories.
- Health gets calories, carbs and the drink count.

**Done when** logging two 12 oz beers at 5% shows about 300 kcal and 2 standard drinks (28 g of
alcohol), appears on Home and in the nutrients screen, and syncs to Apple Health.

---

## 8. Plan tomorrow

- [ ] Built

**What the person sees**
- **In the evening** (after 5 pm), Home shows a **Plan tomorrow** card; it's also on tomorrow in
  the date strip. There's an optional 8 pm reminder, off by default.
- **EatME drafts tomorrow from the person's own meals**: saved meals, meals they eat often (the
  last 30 days) and repeats already planned for tomorrow. It picks one for each slot (breakfast,
  lunch, dinner, and a snack if needed) to land within about 10% of the calorie target with
  enough protein.
- **The draft appears as tomorrow's Planned cards** (the v2.1 cards). Each can be swapped (three
  other choices for that slot) or removed; **Shuffle** changes them all; **Clear draft** removes
  it. Nothing is logged until the person taps Log on the day, the same as repeats.
- **Totals**: "About 1,840 kcal · 125 g protein". Calm mode shows meal names only.
- **Wording**: "a draft of tomorrow", never a diet plan or advice.
- **Not enough history** (fewer than 7 logged days or 5 different meals): "Log a few more meals
  and EatME can draft your day."

**How the draft is picked** (server code in `src/lib/server/day-draft.ts`; the maths in
`src/shared/day-draft.ts`)
- **Slot times** come from the person's own meal times: the middle hour of each slot over 30
  days. The defaults are 8:00, 13:00 and 19:00, with a snack at 16:00.
- **Choices for each slot**: saved meals, plus meals logged in that slot in the last 30 days
  (grouped by name or saved meal and ranked by how often), each with its numbers for one
  portion.
- **Repeats** planned for tomorrow stay in the draft as they are.
- **Scoring**: pick one per slot (the snack only if needed) so the total lands as close to the
  target as possible, with protein at 90% of its target or more. In GLP-1 mode, protein comes
  first, then fit.
  - Never below the calorie floor. If even the biggest combination is under it, the draft says
    "Add a snack to reach your minimum".
  - Avoid the same meal twice in a day, and yesterday's exact line-up when there are other
    choices.
  - Up to 8 choices per slot means at most 4,096 combinations, so checking them all is fine.
- **Shuffle** picks the next-best combination.
- **AI ideas** to fill a gap are not in this version. They could come later behind a setting,
  with the consent screen and counted like scans.

**Data** (migration `day_plans`)
- `day_plans`: `id`, `user_id` (cascade), `date`, and `items` (jsonb: a list of `{ slot, time,
  savedMealId?, sourceMealId?, name, nutrients, status: planned | logged | removed }`), plus
  timestamps. Unique on (`user_id`, `date`).
- Logging a planned item copies it the way Log again does, at that day's time.

**API**
- `POST /api/day-plan/:date/draft`: builds the draft. With `{ shuffle: true }` it builds the
  next one.
- `GET /api/day-plan/:date` returns the draft.
- `PATCH /api/day-plan/:date/items/:n` swaps an item for another choice or removes it.
- `POST /api/day-plan/:date/items/:n/log` logs it. Tapping twice logs it once, like planned
  repeats.
- `DELETE /api/day-plan/:date` clears the draft.
- **Premium**: drafting is a Premium feature (proposed). Free accounts see the card with a
  Premium prompt.

**Tests**
- The draft fits the target and protein.
- The floor gap message shows when it should.
- GLP-1 mode puts protein first.
- Swap, remove and log work.
- Logging twice creates one meal.
- Calm mode hides the numbers.

**Done when** someone with two weeks of meals gets a sensible draft for tomorrow, can swap a
meal, and logs each one with one tap the next day.

---

## Store, privacy and legal changes

| Release | Privacy Policy and Washington policy | App Store (App Privacy, review) | Google Play |
|---|---|---|---|
| v2.2 | Medicine history and supply counts, body measurements, progress photos: kept until deleted, deleted with the account, never used for AI | Photos or Videos (linked, App Functionality); Health & Fitness adds measurements. Review note: "No dose, unit or reconstitution calculations; supply is a count of pens or vials the person enters." Camera and photo permission texts mention progress photos | Data safety: Photos, Health info |
| v2.3 | Reading activity and sleep: stays on the phone, never stored on the server, never sent to AI | Nothing new "collected" (data stays on the phone); the HealthKit usage text changes | Health Connect declaration: the four read types with reasons; the privacy-policy screen |
| v2.4 | Drinks are part of the meal log (already covered) | Age rating: "Alcohol, Tobacco, or Drug Use or References", Infrequent/Mild (the app is already 18+); no alcohol in screenshots | Nothing new |

---

## Build order

1. **v2.2: GLP-1 and body** (≈ 17 days)
   1. Design prompt `design/prompts/15-v2-2.md` and reference images.
   2. Backend: medications, supply, sides and body tracking. Deploy, then check that a v2.1
      build still works.
   3. Screens: the GLP-1 screen, dose sheet and supply card, then Weight & body.
   4. Reminders: use-by, low supply and the photo reminder.
   5. One EAS build, the store and legal updates, then release.
2. **v2.3: activity and the adjusting target** (≈ 12 days)
   1. Health reads and the Activity screen, with the Health Connect privacy screen.
   2. The same build also carries the HealthKit drinks write permission, ready for v2.4.
   3. The adaptive target: maths first, then the check-in card and target history.
3. **v2.4: drinks and planning** (≈ 10 days)
   1. Drinks (no new build, since v2.3 carries its permission).
   2. Plan tomorrow.

For every feature: the design prompt, then the backend with its tests, then the UI compared
against the reference images, then the device checklist, lint and typecheck, then ticks here and
in `PLAN.md`.

---

## Open decisions

1. **Peptide mode name and scope.** Recommended: **Pens & vials** supply tracking inside GLP-1
   mode. It works for any prescribed injectable through Other; there's no separate multi-peptide
   mode, and "peptides" isn't used in the app or the listing.
2. **Free or Premium.** Proposed in the table at the top:
   - Free: GLP-1 and supply, body, activity, drinks.
   - Premium: the adjusting target and Plan tomorrow.
3. **Exercise calories added to the goal.** Recommended: not in v2.3, because the plan's
   activity level already counts workouts. If you want it anyway, the base target would switch
   to "sedentary" and half of each day's workout calories would be added.
4. **Adjusting target defaults.** Recommended:
   - Opt-in, with the check-in on Mondays.
   - At most ±150 kcal a week.
   - Never lower in GLP-1 mode.
5. **Drinks.** Use the US standard drink (14 g). Should Support also list an alcohol helpline?
6. **Progress photos** are kept until the person deletes them, with no automatic expiry.

---

## Also decided: sign-in and password resets

- **EatME already uses Better Auth** for email and password, and Sign in with Apple is already
  built on it.
  - `APPLE_BUNDLE_ID` on Railway turns Sign in with Apple on.
  - `APPLE_TEAM_ID`, `APPLE_KEY_ID` and `APPLE_PRIVATE_KEY` (a "Sign in with Apple" key from the
    Apple Developer site) are also needed, so that deleting an account revokes Apple's tokens
    (App Store 5.1.1(v)).
  - The current build already includes the capability.
- **Sign in with Apple has no password**, so there's nothing to forget. On any iPhone with the
  same Apple ID, one tap signs the person back in.
- **It doesn't rescue password accounts.** Better Auth (1.7.5) only joins an Apple sign-in to an
  existing account whose email was verified, and verifying needs email. Turning that check off
  would let someone register another person's email first and take over their account, so it
  stays on.
- **Before launch**: email through Resend with a domain, for password resets and email
  verification (about 10 minutes and no code; the Resend key and sender address go on Railway).
