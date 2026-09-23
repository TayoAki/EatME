# EatME website: landing page + legal pages

Static site for EatME: the landing page, the Privacy Policy and the Terms of Service that the app links to.
Plain HTML and one stylesheet: no build step, no JavaScript, no cookies, no analytics, no external requests.
It is served by the EatME server on Railway (`server/index.mjs`), the same server that runs the API.

| File | What it is |
| --- | --- |
| `index.html` | Landing page (`/`) |
| `privacy.html` | Privacy Policy (`/privacy`) |
| `terms.html` | Terms of Service (`/terms`) |
| `404.html` | Not-found page, served for unknown URLs (uses root-relative paths) |
| `style.css` | All styles, using the app's colors and radii |
| `images/` | Logo, app icon (also the favicon), phone mockups |

## How it is served

`server/index.mjs` serves this folder next to the API routes (`/api/*`):

- `/` → `index.html`, `/privacy` → `privacy.html`, `/terms` → `terms.html`
- `/style.css` and `/images/<file>` as they are (files directly inside `images/`, no subfolders)
- old links such as `/privacy.html`, `/terms.html` and `/index.html` redirect (301) to the clean URLs, so the
  `privacy.html` / `terms.html` links between the pages keep working
- any other path gets `404.html` with status 404

HTML is sent with `Cache-Control: no-cache`, CSS and images are cached for a day. The server only knows the routes
above: if you add a page, add it to `PAGES` in `server/index.mjs` as well.

## Preview

- Quick look: open `legal/index.html` in a browser. The links between the pages work from the file system.
  `404.html` only renders correctly when it is served (see below).
- Like production, with clean URLs (`/privacy`, `/terms`), the redirects and the 404 page: run the production server
  from the repo root.

  ```bash
  npm run build:server   # exports the API routes into dist/ (once, and again after API changes)
  npm run start:server   # http://localhost:3000 (set PORT to use another port)
  ```

  `start:server` applies the database migrations before it starts listening, so it needs a `DATABASE_URL`. It does not
  read `.env`: pass the variable inline (`DATABASE_URL=... npm run start:server`) and point it at a development
  database, not production. Without it, the server logs a warning, skips the migrations and still serves these pages,
  but the API routes will not work. The files are read from disk on every request, so edits show up after a reload
  (a hard reload for CSS and images).

## Deploy

There is no separate deploy: the site ships with every Railway deploy of the EatME server. Railway runs
`npm run build:server` and `npm run start:server` (see `railway.json`), and the server serves this folder, so a change
to `legal/` goes live with the next deploy of the branch Railway builds from.

The app opens `${EXPO_PUBLIC_LEGAL_URL}/privacy` and `${EXPO_PUBLIC_LEGAL_URL}/terms` (see `src/lib/links.ts`). Set
`EXPO_PUBLIC_LEGAL_URL` to the Railway server URL (the same value as `EXPO_PUBLIC_API_URL`, no trailing slash) in `.env`
and in your EAS environment variables. `EXPO_PUBLIC_*` values are baked in at build time, so rebuild the app after
changing it, for example when you add a custom domain to the Railway service.

## Before submitting to the App Store

Every placeholder is written in square brackets and highlighted in yellow on the page
(`<mark class="placeholder">[…]</mark>`). Replace each whole `<mark class="placeholder">[…]</mark>` element with the
real value, and also the `[Contact Email]` inside every `href="mailto:[Contact Email]"`.

- [ ] `[Company Legal Name]`: the legal name of the person or company that publishes the app
- [ ] `[Registered Address]`: postal address of that person or company
- [ ] `[Contact Email]`: an inbox you monitor for privacy, deletion, lost-password and support requests (EatME sends no
      emails of its own yet, so this inbox is the only way users can reach you)
- [ ] `[Governing Law Jurisdiction]`: the country or state whose law governs the Terms
- [ ] `[Effective Date]`: the date the documents take effect (on both pages)
- [ ] `[EU Representative, if applicable]`: name and address of your Article 27 GDPR representative if you have
      no establishment in the EU but offer the app there; otherwise delete that line from `privacy.html`
- [ ] Nothing is left: `grep -rn 'class="placeholder"\|\[[A-Z]' legal/*.html` prints nothing
- [ ] Optional: refresh the phone mockups (`images/phone-plan.png`, `images/phone-home.png`,
      `images/phone-scan.png`) if the screens change. They are real app screens in a phone frame: transparent
      PNG, 600 × 1258 px, no shadow. Keep the `width`/`height` attributes in `index.html` in sync
- [ ] Re-read both documents against the app you ship: features, service providers (Railway, OpenRouter and OpenAI,
      Sentry) and the statements that depend on your settings:
  - OpenRouter privacy settings: training by providers and logging of your requests are turned off (the Privacy
    Policy says so). If the server calls OpenAI directly instead (`OPENAI_API_KEY`), update the AI sections and the
    provider list
  - Railway: the service, Postgres and the bucket stay in the US West regions; your plan's log retention matches
    "typically between 7 and 30 days"; if you turn on Postgres backups or point-in-time recovery, keep their retention
    within the 30 days the policy promises (Railway keeps monthly backups for 3 months)
  - Sentry, if `EXPO_PUBLIC_SENTRY_DSN` is set: data retention (about 90 days) and masked replays in production
  - When you add an email service (password reset, email verification) or another sign-in method, add it to both
    documents first
- [ ] Accept each provider's data processing agreement (Railway, OpenRouter, Sentry), and have the documents reviewed
      by a lawyer
- [ ] Deploy, check `/privacy`, `/terms`, `/privacy.html` (redirect) and a random URL (404 page) on a phone, set
      `EXPO_PUBLIC_LEGAL_URL`, and add the Privacy Policy URL to App Store Connect and Google Play Console. Your App
      Privacy answers must match the policy
