# EatME — Flamie, your streak flame (v2.6 plan, App Store version 1.2)

> Written 28 October 2026 from the owner's answers and a read of the code as it is. Read it with `PLAN.md` (the app as
> it is) and `AGENTS.md` (how we build). People see the app as **Weight Class**; the code keeps EatME. Tick the boxes
> here as parts ship and add them to `PLAN.md`.
>
> **Release:** Flamie ships in **1.2**, after 1.1 (What to order). Version 1.1.0 is built from commit `dc57641`; everything
> after it on this branch is 1.2 (`store/release.md`).
>
> **Flamie replaces the character.** The customizable character (`CHARACTER.md`) was built for 1.2 and shelved the same
> day: its code left the app (the last commit with it is `88324b1`), its tables stay untouched, and its 3D models stay
> as design files (`design/character-3d`).

## 1. The idea

The streak flame on Home comes alive: **Flamie**, a little flame with a face that grows taller and brighter the more
days in a row you log, is happy when you've shown up, saves you a seat when you haven't yet, and dozes as embers when
you've been away. It borrows Duolingo's mechanics (a mascot with moods, a streak that grows, celebrations, warm nudges
that escalate and then stop), never its owl, art or words. The look is the Ember row of the pet concept sheet of
28 October.

**The owner's decisions:**

| Question | Decision |
| --- | --- |
| What is it? | Flamie, the streak flame as a character (the "Ember" concept), flat 2D like the concept sheet |
| The character? | **Replaced** by Flamie |
| Where? | The **Home streak pill**, the **streak sheet**, and **check-in notifications** |
| What changes its mood? | **Showing up, plus habit boosts** (from the earlier answers). Never calories, weight or going over a target |
| Notifications | **Warm and playful.** They escalate gently over a few days away, then stop. Never guilt about food. Only for people who turn them on |
| When | 1.2 |

## 2. What the person sees

- **Home streak pill** (top right): Flamie's face instead of the flame icon, alive (it flickers, and blinks while it
  waits), and the day count. Bright when you've logged today, a little smaller and hopeful when not yet, pale embers
  asleep after days away. A goal reached today makes it cheer once (a hop, sparks and a success haptic).
- **Streak sheet** (a tap on the pill): Flamie large, sized by its stage, with the day count, the stage and the next
  one ("A Blaze · Bonfire at 30 days"), the week's dots, today's sparks (protein, water and fiber goals reached
  today), Flamie's line, a **Check-ins** row (to Reminders) and **Keep going**.
- **Milestones** (3, 7, 14, 30, 50, 100, 200, 365 days in a row): the streak sheet opens by itself once, with Flamie
  cheering and confetti ("7 days in a row! Flamie grew into a Blaze"). The phone remembers what it celebrated, so a
  milestone or a goal cheers once.
- **Calm mode:** no Flamie. Calm mode has no streak pressure: the pill keeps its calendar and days logged, the sheet
  its "nothing resets" line, and Flamie's check-ins are off.
- **Reduce Motion:** Flamie is still (no flicker, hop or confetti).

## 3. How Flamie grows

The stage follows the streak (`GET /api/streak`: days in a row with a logged meal; today without a meal yet doesn't
break it):

| Streak | Stage | Looks |
| --- | --- | --- |
| 0 | Ember | small; pale and asleep when the streak ended |
| 1–2 | Spark | |
| 3–6 | Flame | |
| 7–29 | Blaze | brighter |
| 30–99 | Bonfire | two little flames at its sides |
| 100+ | Supernova | a white-hot core and a glow |

Each stage is a little taller than the one before. Weight, calories and targets never change it.

## 4. Moods

| Mood | When | Looks | Line |
| --- | --- | --- | --- |
| Lit | Logged a meal today | ^‿^ eyes, smile | "You showed up today!" |
| Waiting | Not yet today; logged yesterday or never yet | round eyes, little "o" | "Saved you a seat" (never logged: "Log your first meal to light Flamie") |
| Embers | Last logged two or more days ago | pale, sleepy, floating "z" | "Missed you! Any meal lights Flamie up again" |
| Cheering (a moment) | A milestone, or a goal reached today | ^‿^ eyes, open mouth, sparks | "7 days in a row!" · "Protein goal reached!" |

**Habit boosts:** reaching today's protein, water or fiber goal (the Home rings' own goals) adds a spark beside Flamie
in the sheet and cheers once in the pill.

## 5. Nudges (notifications)

**Flamie check-in** (off by default; Reminders → Flamie, or the sheet's Check-ins row). At the chosen time (19:30 by
default), only on days with nothing logged yet. The phone plans the next five days and plans again whenever the app
opens or a meal is logged, so the nudges escalate while the person is away and stop after the fifth:

1. "Flamie saved you a seat" · "Log a meal to keep your streak lit."
2. "Flamie is flickering" · "One log is all it takes to keep going."
3. "Flamie misses you" · "Any meal, big or small, lights Flamie up again."
4. "Flamie kept a spark for you" · "Whenever you're ready."
5. "Flamie will stop nudging" · "No pressure. Flamie will be right here when you're back."

Never about food guilt, calories or weight; never "healthy", "safe", "accurate" or "verified". Local notifications
only, like every other reminder; none in calm mode.

## 6. Data and code

- **Nothing new on the server.** Flamie reads `GET /api/streak` (the streak, the days logged in the last three weeks,
  today) and Home's own totals and goals for today's sparks. What it celebrated is remembered on the phone.
- `src/shared/flamie.ts`: stages, moods, milestones, sparks, the nudges and their plan, the next celebration; tested
  (`npm test`).
- App: `src/components/flamie/` (the drawing in `react-native-svg`, animated with Reanimated), the Home header pill,
  the streak sheet, the celebrations (`src/lib/flamie.ts`), and the check-in in `src/lib/reminder-plan.ts`.
- **The character leaves:** its screens, Home card, queries, `GET/PUT /api/character` and server code are removed.
  `users.character`, `character_days` and migration `0027_character` stay as they are (no migration drops them), so
  it could come back.

## 7. Safety, privacy and App Review

- Flamie never reacts to calories, weight or being over a target; Embers is sleepy, never sad about food.
- Calm mode removes it; nudges are opt-in and stop after five days.
- No new data, permission or AI use: the Privacy Policy and App Privacy don't change.
- Suitable for 4+ screenshots (2.3.8).

## 8. Build order

- [x] Spec (this file); the character shelved (`CHARACTER.md`)
- [x] Rules with tests (`src/shared/flamie.ts`, 19 tests)
- [x] The drawing and its animations (`src/components/flamie/`): flicker, blink, rising sparks, dozing, a hop with
      confetti; still with Reduce Motion
- [x] The streak pill and sheet, celebrations once per phone, Flamie check-ins; the character removed from the app
- [x] Browser run against the local server (every stage and mood, a 7-day milestone, calm mode, Reminders); lint,
      typecheck, tests; `PLAN.md`, `store/release.md`, the App Review reference
- [ ] A phone run of the 1.2 build (`store/release.md` → Flamie on a phone)
- [ ] Later (after 1.2): Flamie in the iOS widget; a share card for milestones

## 9. On 1.2's submission day, not before

- **What's New:** "Meet Flamie, your streak flame. It grows taller and brighter with every day in a row, sparks when
  you reach your protein, water or fiber goals, and can check in on evenings you haven't logged, if you like."
- **Screenshots:** one with Flamie (the streak sheet) in the 1.2 set.
- **Privacy Policy and App Privacy:** nothing to change.

## 10. Choices made without the owner (easy to change)

- The stage names and where they change (Ember, Spark, Flame, Blaze, Bonfire, Supernova at 0, 1, 3, 7, 30 and 100).
- Milestones open the streak sheet by themselves once; goals only cheer in the pill.
- Calm mode hides Flamie.
- The five nudge lines above, and the notification opening Home.
