# EatME website: landing page + legal pages

Static site for EatME: the landing page, the Privacy Policy and the Terms of Service that the app links to.
Plain HTML and one stylesheet: no build step, no JavaScript, no cookies, no analytics, no external requests.
It is deployed to Cloudflare Workers as static assets.

| File | What it is |
| --- | --- |
| `index.html` | Landing page (`/`) |
| `privacy.html` | Privacy Policy (`/privacy`) |
| `terms.html` | Terms of Service (`/terms`) |
| `404.html` | Not-found page, served for unknown URLs (uses root-relative paths) |
| `style.css` | All styles, using the app's colors and radii |
| `images/` | Logo, app icon (also the favicon), phone mockups |
| `wrangler.jsonc` | Cloudflare config (Worker `eatme-legal`) |
| `.assetsignore` | Files that are not uploaded |

## Preview

- Quick look: open `legal/index.html` in a browser. The links between the pages work from the file system.
  `404.html` only renders correctly when it is served (see below).
- Like production, with clean URLs (`/privacy`, `/terms`) and the 404 page. Run from the repo root:

  ```bash
  npm run legal:dev   # http://localhost:8787
  ```

  The script passes `--persist-to .wrangler/state`. Keep it if you run Wrangler yourself: the assets directory is
  `legal/` itself, so without the flag Wrangler writes its local state into `legal/.wrangler/`, sees that as an
  asset change and reloads endlessly (pages never load).

## Deploy

```bash
npx wrangler@4 login   # once: connect Wrangler to your Cloudflare account
npm run legal:deploy   # runs: npx wrangler@4 deploy --config legal/wrangler.jsonc
```

Wrangler prints the site URL, for example `https://eatme-legal.<your-subdomain>.workers.dev`. You can attach a
custom domain later in the Cloudflare dashboard.

Then point the app at it: set `EXPO_PUBLIC_LEGAL_URL` to that URL (no trailing slash) in `.env` and in your EAS
environment variables. The app opens `${EXPO_PUBLIC_LEGAL_URL}/privacy` and `${EXPO_PUBLIC_LEGAL_URL}/terms`
(see `src/lib/links.ts`). `EXPO_PUBLIC_*` values are baked in at build time, so rebuild the app after changing it.

## Before submitting to the App Store

Every placeholder is written in square brackets and highlighted in yellow on the page
(`<mark class="placeholder">[…]</mark>`). Replace each whole `<mark class="placeholder">[…]</mark>` element with the
real value, and also the `[Contact Email]` inside every `href="mailto:[Contact Email]"`.

- [ ] `[Company Legal Name]`: the legal name of the person or company that publishes the app
- [ ] `[Registered Address]`: postal address of that person or company
- [ ] `[Contact Email]`: an inbox you monitor for privacy, deletion and support requests
- [ ] `[Governing Law Jurisdiction]`: the country or state whose law governs the Terms
- [ ] `[Effective Date]`: the date the documents take effect (on both pages)
- [ ] `[EU Representative, if applicable]`: name and address of your Article 27 GDPR representative if you have
      no establishment in the EU but offer the app there; otherwise delete that line from `privacy.html`
- [ ] Nothing is left: `grep -rn 'class="placeholder"\|\[[A-Z]' legal/*.html` prints nothing
- [ ] Optional: refresh the phone mockups (`images/phone-plan.png`, `images/phone-home.png`,
      `images/phone-scan.png`) if the screens change. They are real app screens in a phone frame: transparent
      PNG, 600 × 1258 px, no shadow. Keep the `width`/`height` attributes in `index.html` in sync
- [ ] Re-read both documents against the app you ship: features, service providers, retention settings (Sentry,
      Trigger.dev, Neon) and your OpenRouter privacy settings (no training on or logging of your requests).
      Accept each provider's data processing agreement, and have the documents reviewed by a lawyer
- [ ] Deploy, check `/privacy`, `/terms` and a random URL (404 page) on a phone, set `EXPO_PUBLIC_LEGAL_URL`, and
      add the Privacy Policy URL to App Store Connect and Google Play Console. Your App Privacy answers must match
      the policy
