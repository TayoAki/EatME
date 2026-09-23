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

Expo SDK 57 · Expo Router (`src/app`) · NativeWind v4 · Clerk (`@clerk/expo`) · Neon Postgres +
Drizzle · Trigger.dev v4 · OpenAI SDK → OpenRouter (`openai/gpt-5.6-luna`) · ImageKit ·
TanStack Query · Zustand · Sentry.

## Project structure

```
src/app/            routes only (screens, layouts, API routes)
  (public)/         welcome + sign-in (signed-out only)
  onboarding/       onboarding questions → building plan → plan ready
  (app)/            signed-in area: (tabs) home/scan/profile, meal/[id], personal-details
  api/              Expo API routes (`*+api.ts`) — server only
src/components/     UI components (ui/ = primitives, feature folders for the rest)
src/lib/            client utilities (api client, queries, stores, formatting)
src/lib/server/     server-only helpers (auth, imagekit, account deletion) — never import from screens
src/shared/         code shared by client, API routes and tasks (zod schemas, nutrition math, types)
src/db/             Drizzle schema + client (server only)
src/trigger/        Trigger.dev tasks (server only)
design/             AI-generated UI references
legal/              landing page, privacy policy, terms (static site, Cloudflare)
drizzle/            generated SQL migrations — never edit by hand
```

## Rules

- Styling: NativeWind `className` everywhere; colors and radii come from `tailwind.config.js`
  (`bg-surface`, `text-muted`, `text-protein` …). Inline `style` only for dynamic values
  (animations, SVG, measured sizes). Light theme only.
- Screens stay thin: data fetching lives in `src/lib/queries.ts` (TanStack Query hooks),
  calls go through `useApi()` in `src/lib/api.ts`, which attaches the Clerk session token.
- API routes: authenticate with `requireUserId(request)` from `src/lib/server/auth.ts`, validate
  input with zod, wrap handlers with `handle()` so errors become JSON responses.
- Server-only modules (`src/db`, `src/trigger`, `src/lib/server`) must never be imported by a
  screen or component. Screens may use `import type` from task files (for Realtime typing).
- AI calls run **only** inside Trigger.dev tasks (retries, no timeouts). Use the client in
  `src/trigger/ai.ts`; models come from env (`AI_MODEL`, `AI_VISION_MODEL`).
- Use Trigger.dev `logger` inside tasks, `Sentry.logger` in the app for important events.
- Database changes: edit `src/db/schema.ts` → `npm run db:generate` → `npm run db:migrate`.
- Secrets live in `.env` (git-ignored). Only `EXPO_PUBLIC_*` values may be read by the app;
  everything else is server-only. Document new variables in `.env.example`.
- Apple rules to keep: Sign in with Apple must stay next to Google, "Delete account" must stay
  in Profile, Privacy Policy + Terms links must work.
- No automated test suites in V1 — verify manually and run lint + typecheck.

## Local development

Run these in separate terminals and keep them open:

```bash
npx expo start                     # app + API routes (dev build: press i / a)
npx trigger.dev@latest dev         # Trigger.dev tasks (npm run trigger:dev)
ngrok http --url=<your-domain> 8081  # Clerk webhooks → /api/webhooks/clerk
```

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
npm run trigger:dev         # run Trigger.dev tasks locally
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
