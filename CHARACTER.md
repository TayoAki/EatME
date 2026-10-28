# EatME — Your character (v2.6 plan, App Store version 1.2)

> Written 28 October 2026 from the owner's answers (27–28 October) and a read of the code as it is. Read it with
> `PLAN.md` (the app as it is) and `AGENTS.md` (how we build). People see the app as **Weight Class**; the code keeps
> EatME. Tick the boxes here as parts ship and add them to `PLAN.md`.
>
> **Release:** the character ships in **1.2**, after 1.1 (What to order). Version 1.1.0 is built from commit
> `dc57641`, the last 1.1 commit; everything after it on this branch is 1.2 (`store/release.md`).

## 1. The idea

Every person gets a character: a customizable cartoon of themselves, like a game character, that grows with their
habits. Showing up makes it happy, good-habit days make it stronger, and days away make it miss you. It borrows
Duolingo's mechanics (a character with moods, a streak, celebrations, warm nudges that escalate and then stop), never
its owl, art or words.

**The owner's decisions:**

| Question | Decision |
| --- | --- |
| What is it? | A character of the person, flat cartoon style (the concept sheet of 28 October): girl or guy, skin tone, hair style and colour, facial hair, glasses, outfit colours. Original art, nothing from Bitmoji or Duolingo |
| What makes it grow? | **Game stats from habits.** Strength from protein days, Energy from water days, Vitality from fiber days, and the streak from showing up. Higher levels look stronger and unlock gear. **Weight never changes its body**: the body type is the person's own pick |
| What changes its mood? | **Showing up, plus habit boosts.** Never calories, weight or going over a target |
| Notifications | **Warm and playful.** They escalate gently over a few days away, then stop. Never guilt about food. Only for people who turn them on |
| Price | **All free.** Gear is earned with levels, never bought |
| Hair | No curly hair for now |
| When | 1.2, after 1.1 |

## 2. What the person sees

- **Home, today:** a character card under the date strip. It shows the character (alive: breathing, blinking, a wave
  when you've logged), its name and level, the XP bar to the next level, and one line about today ("Showed up today:
  +10 XP" · "Protein goal: +10 XP" · "Saving you a seat" · "Missed you!"). A tap opens the character screen.
  Before the person has made their character, the card says "Meet your character" with **Make yours**.
- **Character screen** (`/character`): the character large, its name and level, XP to the next level, the stats
  (Strength · protein days, Energy · water days, Vitality · fiber days, Streak · days in a row), the gear (earned and
  still to earn, with the level it needs), **Customize**, the nudge switch, and a line on how it grows: "Your
  character grows with your habits. It never changes with your weight."
- **Customize** (`/character/edit`): a live preview over tabs: Body (Girl / Guy, and a build: slim, medium or
  full, the person's pick), Skin (8 tones), Hair (short, long,
  bun, ponytail, buzz, bald), Hair colour (8), Face (no facial hair, stubble, beard; no glasses, round, square),
  Outfit (top and bottom colours), Gear (earned items on or off), and the name (default **Champ**, up to 16
  characters). Save.
- **Celebrations:** a level up, a streak milestone (7, 14, 30, 50, 100, 200, 365 days) or a habit goal reached today
  shows the character cheering with confetti and a success haptic, once (the phone remembers which it showed).
- **Calm mode:** the character stays (it has no calorie numbers); the XP bar and levels stay too.
- **Reduce Motion:** no breathing, waving, jumping or confetti; the character is still.

## 3. How it grows

Each local day (the person's time zone, like the streak) earns XP once:

| On that day | XP |
| --- | --- |
| Showed up: at least one logged meal (the streak's own rule) | 10 |
| Protein goal reached (the day's protein at or above the daily goal) | 10 |
| Water goal reached | 5 |
| Fiber goal reached | 5 |

At most 30 a day. Goals are the person's current ones (`toProfile`). A day's flags only ever turn on: deleting a meal
later never takes XP back, so **levels never go down**. People who used the app before 1.2 start with the XP of their
history (up to 400 days back, like the streak).

**Levels:** level *n* needs `5 × (n − 1) × (n + 4)` XP: level 2 at 30, 5 at 180, 10 at 630, 20 at 2,280, up to level
50. A typical 20-XP day reaches level 5 in about 9 days and level 10 in about a month.

**What changes with stats (never weight):**

| Stat | Changes |
| --- | --- |
| Strength (protein days) | Shoulders and arms: stronger at 10 protein days, strongest at 30 |
| Level | Gear: headband (5), wristbands (8), medal (12), boxing gloves (16), champion belt (25) |
| Energy (water days) | A warm glow around the character at 14 water days |
| Streak | A streak flame by the level from 7 days in a row |

## 4. Moods

| Mood | When | Looks |
| --- | --- | --- |
| Happy | Showed up today | Smiles and waves |
| Waiting | Not yet today, and showed up yesterday (or never yet) | Looks up, hopeful |
| Missing you | Last showed up two or more days ago | Sleepy, small frown, floating "z" |
| Cheering (a moment) | A level up, a streak milestone, a habit goal today | Arms up, confetti |

The mood never comes from calories, weight or being over a target.

## 5. Nudges (notifications)

A new reminder, **Character check-in** (off by default; Reminders, or the switch on the character screen). At the
chosen time (19:30 by default), only on days with nothing logged yet. The phone plans the next five days ahead and
plans again whenever the app opens or a meal is logged, so the nudges escalate while the person is away and stop after
the fifth:

1. "{name} saved you a seat" · "Log a meal to keep your streak going."
2. "{name} is warming up without you" · "One log is all it takes to pick things back up."
3. "{name} misses you" · "Your streak can start again with any meal, big or small."
4. "{name} kept your spot warm" · "Whenever you're ready."
5. "{name} will stop nudging" · "No pressure. {name} will be right here when you're back."

Never about food guilt, calories or weight; never "healthy", "safe", "accurate" or "verified". Local notifications
only (no push server), like every other reminder.

## 6. Data, API and code

- **`users.character`** (jsonb, null until made): `{ name, look: { body, skin, hair, hairColor, facialHair, glasses,
  top, bottom }, gear: { [item]: on }, madeAt }`, checked by `characterSchema` (`src/shared/character.ts`).
- **`character_days`**: `user_id`, `date` (local), `showed_up`, `protein`, `water`, `fiber`; one row per day. Flags
  only turn on.
- **`GET /api/character`**: brings the days up to date (backfill from the account's first day, then the last two
  days each time), then returns the look, name, level, XP (with the level's start and the next level), stats, today's
  flags, the last day shown up, the streak and the gear earned.
- **`PUT /api/character`**: the look, name and gear switches (only earned gear can be on).
- `src/shared/character.ts`: options (skins, hair, colours, gear), XP and level math, strength tier, gear unlocks,
  mood; tested (`npm test`).
- App: `src/components/character/` (the drawing in `react-native-svg`, animated with Reanimated), the Home card,
  `src/app/(app)/character/` (screen, customize), the celebration, and the check-in in `src/lib/reminder-plan.ts`.

## 7. Safety, privacy and App Review

- No body change from weight, ever; the person picks their body type and can change it any time.
- No shame: missing-you is sleepy, not sad about food; nudges stop after five days.
- The look is stored on the account like the profile; nothing about it goes to AI.
- Suitable for 4+ screenshots (2.3.8): no alcohol, needles or body photos.
- No new permission: nudges use the notification permission Reminders already asks for.

## 8. Build order

- [x] Spec (this file), version 1.2.0 in `app.json`, 1.1 builds from `dc57641` (28 October 2026)
- [x] Shared model and math with tests (`src/shared/character.ts`, 22 tests)
- [x] Server: migration `0027_character`, `GET/PUT /api/character`, the days backfill
- [x] The drawing and its animations (`src/components/character/`): breathing, blinking, a wave, dozing, cheering;
  still with Reduce Motion
- [x] Home card, character screen (`/character`), customize (`/character/edit`), celebrations once per phone
- [x] Character check-in nudges (Reminders → Your character; `nudgePlan` in `src/shared/character.ts`)
- [x] Browser run of every screen against the local server; lint, typecheck, tests; `PLAN.md`
- [ ] A phone run of the 1.2 build (`store/release.md` → The character on a phone)
- [ ] Later (after 1.2): the iOS widget with the character's mood; a share card for milestones

## 9. On 1.2's submission day, not before

- **Privacy Policy** (`legal/privacy.html`, after What to order, and the "Last updated" date): "**Your character.** If
  you make a character, we store the look you choose (body, build, skin tone, hair, facial hair, glasses and outfit
  colours), its name and the gear it wears. For each day, we store which of these earned it XP: a logged meal, and
  reaching your protein, water or fiber goal, worked out on our server from what you log. Nothing about your
  character goes to an AI provider. It is deleted with your account."
- **App Privacy** needs no new type: the look is Other User Content, already declared.
- **What's New:** "Meet your character: make it look like you, and watch it grow with your habits (protein, water,
  fiber and showing up), never your weight. Earn gear as you level up, and let it check in on evenings you haven't
  logged, if you like."
- **Screenshots:** one of the character (the 1.2 set).

## 10. Choices made without the owner (easy to change)

- The default name **Champ** (Weight Class: a boxing word, like the gloves and belt).
- XP amounts, level curve, gear levels and the five nudge lines above.
- "Showed up" means a logged meal, the same as the streak.
