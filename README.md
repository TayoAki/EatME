# EatME

**AI calorie tracker built with Expo (React Native).** Snap a photo of your meal — an AI agent estimates
the calories, protein, carbs and fat — and track it against a daily plan that AI builds for you during
onboarding.

<p align="center">
  <img src="design/design-system.png" alt="EatME screens: welcome, onboarding, home, scan, profile" width="820">
</p>

- **Product plan & every decision:** [`PLAN.md`](./PLAN.md)
- **Agent / contributor instructions:** [`AGENTS.md`](./AGENTS.md) (`CLAUDE.md` imports it)
- **Design references + prompts:** [`design/`](./design)
- **Landing page, privacy policy, terms:** [`legal/`](./legal)

## Stack

| | |
| --- | --- |
| App | Expo SDK 57, React Native, Expo Router (native tabs), NativeWind v4, TanStack Query, Zustand |
| Auth | Clerk — Sign in with Apple + Google |
| Backend | Expo Router API routes (`src/app/api`) |
| Database | Neon Postgres + Drizzle ORM |
| AI agents / background jobs | Trigger.dev v4 (+ Realtime) |
| AI model | `openai/gpt-5.6-luna` via OpenRouter (OpenAI SDK) — or OpenAI directly |
| Images | ImageKit (direct uploads, on-the-fly resizing) |
| Monitoring | Sentry (errors, logs, tracing, session replay, user feedback) |
| Legal site | Static HTML on Cloudflare (Wrangler) |

## How it works

```
Onboarding answers ──▶ POST /api/plan ──▶ Trigger.dev "generate-plan" ──▶ OpenRouter (GPT)
                                     ◀── Realtime progress + daily targets ──┘
Sign in (Clerk) ──▶ POST /api/onboarding ──▶ Neon (users)
Clerk webhooks ──▶ /api/webhooks/clerk ──▶ Trigger.dev "clerk-user-*" ──▶ Neon (users)

Photo ──▶ ImageKit (signed direct upload) ──▶ POST /api/meals ──▶ Neon (meal: analyzing)
                                                    └──▶ Trigger.dev "analyze-meal" ──▶ OpenRouter vision
                                                              └──▶ Neon (calories + macros) ──▶ Realtime ──▶ app
```

## Setup

You need Node.js 20+, and Xcode (iOS) or Android Studio — or an [EAS](https://expo.dev/eas) account to
build in the cloud. All services below have free tiers.

```bash
npm install
cp .env.example .env
```

Fill in `.env` as you go:

1. **Clerk** — create an application with **Google** and **Apple** sign-in.
   - `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` from *Configure → API keys*.
   - *Native applications*: allow the redirect URL `eatme://` for mobile SSO.
2. **Neon** — create a project and copy the connection string into `DATABASE_URL`, then create the tables:
   ```bash
   npm run db:migrate
   ```
3. **OpenRouter** — create a key for `OPENROUTER_API_KEY`. `AI_MODEL` / `AI_VISION_MODEL` default to
   `openai/gpt-5.6-luna`. (Prefer OpenAI directly? Leave OpenRouter empty and set `OPENAI_API_KEY`.)
4. **ImageKit** — *Developer options*: `IMAGEKIT_PUBLIC_KEY`, `IMAGEKIT_PRIVATE_KEY`, `IMAGEKIT_URL_ENDPOINT`.
5. **Trigger.dev** — create a project: `TRIGGER_PROJECT_REF` (*Project settings*) and the development
   `TRIGGER_SECRET_KEY` (*API keys*). In development the tasks read the same `.env`.
6. **ngrok** — claim your free static domain, then in **Clerk → Webhooks** add the endpoint
   `https://<your-ngrok-domain>/api/webhooks/clerk` with the `user.created`, `user.updated` and
   `user.deleted` events. Copy its signing secret into `CLERK_WEBHOOK_SIGNING_SECRET`.
7. **Sentry** — create a *React Native* project: `EXPO_PUBLIC_SENTRY_DSN`. For readable stack traces in
   release builds also set `SENTRY_AUTH_TOKEN`, `SENTRY_ORG`, `SENTRY_PROJECT`.
8. **Legal site** — deploy `legal/` (see [`legal/README.md`](./legal/README.md)), replace its placeholders,
   and put the URL in `EXPO_PUBLIC_LEGAL_URL`.

## Run it

EatME uses native modules, so it runs in a **development build**, not Expo Go:

```bash
npx expo run:ios          # or: npx expo run:android  (or: eas build --profile development)
```

Then keep these three terminals open:

```bash
npx expo start                              # app + API routes
npm run trigger:dev                         # Trigger.dev tasks
ngrok http --url=<your-ngrok-domain> 8081   # Clerk webhooks → your machine
```

In the simulator the camera is black — use **Choose from gallery** on the Scan tab. Want data without
scanning? `npm run db:seed -- --email you@example.com` adds two weeks of sample meals.

## Deploy

| Piece | How |
| --- | --- |
| API routes | `npx expo export --platform web` then `npx eas-cli@latest deploy` (EAS Hosting). Add the server env vars in EAS and set `EXPO_PUBLIC_API_URL` to the deployment URL for app builds. |
| Trigger.dev tasks | Add `DATABASE_URL`, `OPENROUTER_API_KEY`, `AI_MODEL`, `AI_VISION_MODEL` and the ImageKit keys to the *Production* environment in the Trigger.dev dashboard, then `npm run trigger:deploy`. |
| Clerk webhook | Point it at `https://<your-api-domain>/api/webhooks/clerk` for production. |
| Legal site | `npm run legal:deploy` (Cloudflare) |
| App | `npx eas-cli@latest build --profile production` and `eas submit` |

Before submitting to the App Store: Sign in with Apple is next to Google, **Delete account** is in Profile,
and the Privacy Policy / Terms of Service links point to your deployed legal site.

## Scripts

| Command | What it does |
| --- | --- |
| `npm start` | Expo dev server (app + API routes) |
| `npm run ios` / `npm run android` | Build and run the development build |
| `npm run lint` / `npm run typecheck` | ESLint / TypeScript |
| `npm run db:generate` / `db:migrate` / `db:push` / `db:studio` | Drizzle migrations and database browser |
| `npm run db:seed -- --email you@example.com` | Sample meals for testing |
| `npm run trigger:dev` / `trigger:deploy` | Run / deploy the Trigger.dev tasks |
| `npm run legal:dev` / `legal:deploy` | Preview / deploy the legal site on Cloudflare |

## Project structure

```
src/app/            screens and layouts (Expo Router) + API routes in src/app/api
src/components/     UI (ui/ primitives, home/, scan/, onboarding/, pickers/, profile/)
src/lib/            client helpers (API client, queries, stores, Sentry, formatting)
src/lib/server/     server-only helpers (Clerk auth, ImageKit, account deletion, streaks)
src/shared/         zod schemas + nutrition math shared by app, API and tasks
src/db/             Drizzle schema and client
src/trigger/        Trigger.dev tasks and AI prompts
drizzle/            SQL migrations
design/             AI-generated UI references (and the prompts that made them)
legal/              landing page, privacy policy, terms of service
```

## Notes

- **Realtime on React Native:** `@trigger.dev/react-hooks` pulls in two server-only libraries (`jose`,
  `@s2-dev/streamstore`) that can't be bundled for iOS/Android. `metro.config.js` swaps them for empty
  modules on native — the app never calls them. The scan and plan screens also poll the API as a fallback.
- **Costs:** one plan or one meal analysis with `gpt-5.6-luna` costs a fraction of a cent.
