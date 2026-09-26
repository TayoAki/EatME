This is an Expo/React Native mobile application. Prioritize mobile-first patterns, performance, and cross-platform compatibility.

# EatME — agent instructions

EatME is a Cal AI–style calorie tracker: onboarding → AI plan → snap a meal → AI estimates
calories and macros. **Read `PLAN.md` before building a feature** — every product decision
(screens, flow, data model, routes, tasks) is written there. Never guess a requirement that
PLAN.md already answers; if something is missing, ask. Tick the checkbox in PLAN.md when a
feature is done.

## Workflow

1. Plan → 2. UI design (`design/*.png` are the references) → 3. build one feature at a time →
4. self-check in the simulator → 5. code review → 6. commit.

**Build & verify loop for UI work:** implement the screen, take a screenshot from the
simulator, compare it with the reference image in `design/`, fix the differences, repeat
until they match closely (layout, spacing, font weights, colors).

## Stack

Expo SDK 57 · Expo Router (`src/app`) · NativeWind v4 · Better Auth (email + password) ·
Railway (server, Postgres + Drizzle, storage bucket) · OpenAI SDK → OpenRouter
(`openai/gpt-5.6-luna`) · TanStack Query · Zustand · Sentry.

## Project structure

```
src/app/            routes only (screens, layouts, API routes)
  (public)/         welcome + sign-in (signed-out only)
  onboarding/       onboarding questions → building plan → plan ready
  (app)/            signed-in area: (tabs) home/scan/profile, meal/[id], personal-details
  api/              Expo API routes (`*+api.ts`) — server only
src/components/     UI components (ui/ = primitives, feature folders for the rest)
src/lib/            client utilities (api client, queries, stores, formatting)
src/lib/server/     server-only helpers (auth, storage, AI, plan, meal analysis, account deletion)
src/shared/         code shared by the app and the API routes (zod schemas, nutrition math, types)
src/db/             Drizzle schema + client (server only)
server/index.mjs    production server on Railway (API routes + legal pages + migrations)
design/             AI-generated UI references
legal/              landing page, privacy policy, terms (served by the server)
store/              App Store and Google Play answers (listing, privacy forms, review notes)
plugins/            local Expo config plugins
drizzle/            generated SQL migrations — never edit by hand
```

## Rules

- Styling: NativeWind `className` everywhere; colors and radii come from `tailwind.config.js`
  (`bg-surface`, `text-muted`, `text-protein` …). Inline `style` only for dynamic values
  (animations, SVG, measured sizes). Light theme only.
- Screens stay thin: data fetching lives in `src/lib/queries.ts` (TanStack Query hooks),
  calls go through `useApi()` in `src/lib/api.ts`, which sends the Better Auth session cookie.
- API routes: authenticate with `requireUserId(request)` from `src/lib/server/auth.ts`, validate
  input with zod, wrap handlers with `handle()` so errors become JSON responses.
- Server-only modules (`src/db`, `src/lib/server`) must never be imported by a screen or
  component.
- AI calls run **only** on the server (`src/lib/server/plan.ts`, `meal-analysis.ts`) with
  retries; long work runs in the background and the app polls. Use the client in
  `src/lib/server/ai.ts`; models come from env (`AI_MODEL`, `AI_VISION_MODEL`).
- Photos live in the private Railway bucket (`src/lib/server/storage.ts`); the app only ever
  gets short-lived signed links.
- `console.*` on the server (Railway logs), `Sentry.logger` in the app for important events.
- Database changes: edit `src/db/schema.ts` → `npm run db:generate` → `npm run db:migrate`.
- Secrets live in `.env` (git-ignored). Only `EXPO_PUBLIC_*` values may be read by the app;
  everything else is server-only. Document new variables in `.env.example`.
- Apple rules to keep: "Delete account" must stay in Profile, Privacy Policy + Terms links
  must work, and if Google sign-in is ever added, Sign in with Apple must be added next to it.
- No automated test suites in V1 — verify manually and run lint + typecheck.

## Local development

One terminal is enough — the Expo dev server runs the app and the API routes (including
sign-in and the AI calls):

```bash
npx expo start                     # dev build: press i / a
```

`.env` needs `DATABASE_URL` (Railway Postgres public URL + `?sslmode=no-verify`),
`BETTER_AUTH_SECRET`, `OPENROUTER_API_KEY` and the `S3_*` bucket credentials. Deploys happen
on Railway when the branch is pushed (`railway.json`).

## Expo has changed — do not trust your training data

Expo ships breaking changes every SDK release. APIs you remember are likely renamed, moved, or removed. Before writing any code that touches an Expo, EAS, or React Native API:

1. Read the major version of the `expo` package in `package.json`.
2. Fetch the matching versioned docs: `https://docs.expo.dev/versions/v<major>.0.0/`
3. For anything else, fetch https://docs.expo.dev/llms.txt — an index of all Expo docs with corrections to common LLM misconceptions. Follow its links to the specific page you need; never answer from memory.

## Commands

Use `bunx` instead of `npx` if the project uses bun (`bun.lock` present).

```bash
npx expo install <package>  # ALWAYS use instead of npm/yarn/pnpm/bun add — resolves SDK-compatible versions
npx expo start              # start the dev server
npx expo lint               # lint
npx tsc --noEmit            # typecheck
npx expo-doctor             # diagnose dependency and config issues
npx expo install --fix      # fix incompatible package versions
npm run db:generate         # create a migration from src/db/schema.ts
npm run db:migrate          # apply migrations to DATABASE_URL
npm run db:studio           # browse the database
npm run build:server        # export the API routes for the production server
npm run start:server        # run the production server (as on Railway)
```

Run lint and typecheck before declaring any task done.

## Navigation & Routing

- Use **Expo Router** for all navigation. Routes live in `src/app/` — every file there is a screen, `_layout.tsx` files define navigators. Keep non-route code (components, hooks, utils) outside `src/app/`.
- Import `Link`, `router`, and `useLocalSearchParams` from `expo-router`.
- Docs: https://docs.expo.dev/router/introduction.md

## Building with EAS

Use EAS to build, sign, and submit the app in the cloud (`eas build`, `eas submit`) and to ship over-the-air updates (`eas update`) — no local Xcode or Android Studio required. Run EAS CLI as `bunx eas-cli <command>` in Bun projects, or `npx eas-cli@latest <command>` otherwise; substitute that for bare `eas` in docs examples.
Docs: https://docs.expo.dev/eas/index.md

## Expo rules

- If `ios/` and `android/` directories do not exist, they are generated (Continuous Native Generation). Never create or edit them by hand — configure native behavior in `app.json` and config plugins.
- Expo Go only includes its bundled native modules. After adding a library with native code, the app needs a development build: `npx expo run:ios|android` locally, or `eas build --profile development`.
- Prefer recommended Expo modules over third-party libraries, and check your available skills before adding dependencies. Docs: https://docs.expo.dev/versions/latest/index.md
