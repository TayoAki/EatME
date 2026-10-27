# Weight Class landing page — site specification

The landing page (`legal/index.html` + `legal/home.css`, served at `/`) rebuilt on 27 October 2026 with the
site-clone workflow: the structure and polish of a reference landing page we liked (www.bulkyai.app, scraped with
Firecrawl into the session's scratchpad, not kept here), redrawn with Weight Class's own brand, copy and screens.
Nothing of the reference's copy, images or brand is used. This spec is what the page is built from; change the page
by changing this first.

## 1. Project overview

- **Product:** Weight Class, the AI calorie counter for iPhone (live on the App Store since 26 October 2026,
  `https://apps.apple.com/app/weight-class/id6816738487`).
- **The page's one job:** make someone on a phone or laptop understand the app in ten seconds and tap through to
  the App Store; answer the questions that stop them (price, AI and data, medical, cancelling).
- **Stack:** static HTML and CSS, no build step, served by `server/index.mjs` with the other pages. Rules that
  stay: no cookies, no analytics, no external requests (fonts are the system's), no JavaScript (the FAQ is
  `<details>`). The legal pages keep `style.css`; only the landing page uses `home.css`.
- **What it doesn't show:** What to order (version 1.1) until 1.1 is live.

## 2. Design tokens

### 2.1 Color palette

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#ffffff` | page |
| `--surface` | `#f6f6f7` | showcase band, open FAQ item, image wells (the app's surface) |
| `--primary` | `#111111` | headings, primary buttons, dark cards and bands (the app's ink) |
| `--text` | `#1a1a1a` | body text |
| `--muted` | `#6b6b6b` | secondary text (5.3:1 on white) |
| `--border` | `#e8e8ea` | card and nav borders |
| `--accent` | `#fff1e6` | icon tiles, step numbers (flame tint) |
| `--accent-2` | `#ffe2c6` | headline highlight, hero glow |
| `--accent-3` | `#ffc994` | eyebrow and plan tags |
| `--accent-ink` | `#7a3a05` | text on accent fills |
| `--flame` | `#ff7a1a` | the app's flame (streak chip) |
| `--success` | `#12a150` | check marks, the live dot |
| `--protein` / `--carbs` / `--fat` | `#f2665e` / `#f4a63a` / `#4f8ef7` | macro dots in chips (the app's macro colors) |

Gradients:
- Hero glow: `radial-gradient(46% 44% at 74% 34%, rgba(255, 201, 148, 0.42), transparent 70%)` and
  `radial-gradient(40% 38% at 8% 4%, rgba(255, 241, 230, 0.9), transparent 72%)` on a 780 px band behind the hero.
- Phone rail (titanium): `linear-gradient(142deg, #f2f2f5 0%, #9a9aa4 12%, #5c5c66 30%, #d8d8de 47%, #6e6e78 63%,
  #3f3f47 78%, #cfcfd6 94%, #7a7a84 100%)`.
- Dark band overlay: `linear-gradient(92deg, rgba(10,10,10,.96) 30%, rgba(10,10,10,.78) 58%, rgba(10,10,10,.35))`.
- Headline highlight: `linear-gradient(180deg, transparent 62%, var(--accent-2) 62%)`.

### 2.2 Typography

- Family (body and display): the system stack the legal pages use, so iPhones and Macs get SF Pro like the app:
  `-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", "Segoe UI", Roboto, "Helvetica Neue", Arial,
  sans-serif`. No web fonts.
- Body 17px / 1.6, antialiased. Lede 18.5px muted, max 52ch.
- h1: `clamp(40px, 6.4vw, 68px)` / 1.02 / -0.04em / 800, max 11ch.
- h2: `clamp(30px, 4.2vw, 44px)` / 1.08 / -0.035em / 800.
- h3: 19px / 650 / -0.015em.
- Small text: eyebrow 13.5px, notes 14.5px, fine print 13.5px.

### 2.3 Spacing, radius, shadows

- Container 1140px, side padding 20px. Sections 96px top and bottom (64px under 720px).
- Radius: cards 22px (`--r`), bands 28px, FAQ items 16px, chips 16px, pills 999px.
- `--shadow: 0 4px 24px rgba(0, 0, 0, 0.06)`; `--shadow-lg: 0 30px 60px -24px rgba(17, 17, 17, 0.28)`.

### 2.4 Animations

- Floating chips: `float` 6s ease-in-out infinite, 0 → -9px → 0, staggered delays.
- Phones: tilted with `rotateY/rotateX/rotate`, easing back toward flat on hover (0.6s cubic-bezier(.2,.7,.2,1)).
- Cards lift 4px on hover (0.25s). Buttons lift 1px.
- `prefers-reduced-motion: reduce`: no float, no tilt transitions, smooth scrolling off.

## 3. Global styles

`home.css` holds everything: tokens on `:root`, `box-sizing: border-box`, `html { scroll-behavior: smooth }` (off
with reduced motion), `body` 17px/1.6 on `--bg`, `img { max-width: 100%; display: block }`, `.wrap` container,
`:focus-visible` outline 2px `--primary` offset 3px, `.skip-link` shown on focus.

## 4. Buttons

- Base: inline-flex, 13px 24px padding, pill radius, 15.5px/600, 1px transparent border, transitions.
- `.btn-primary`: `--primary` fill, white text, `0 10px 24px -12px rgba(17,17,17,.7)`; hover `#2b2b2b`, -1px.
- `.btn-ghost`: white, `--border` border; hover border `#c9c9c9`, `--surface` fill.
- `.btn-invert` (on dark): white fill, `--primary` text; hover `--accent`.
- `.btn-sm`: 9px 18px, 14.5px. The App Store link is a text button, "Get it on the App Store": Apple's
  official badge replaces it when its artwork is added (`images/app-store-badge.svg`, from Apple's marketing tools;
  never a home-made copy of the badge).

## 5. Section-by-section

1. **Nav** (sticky, `rgba(255,255,255,.82)` with 14px blur, 1px bottom border, 66px): logo (30px, 9px radius)
   and "Weight Class" bold; links How it works (`#how`), Features (`#features`), Pricing (`#pricing`), Support
   (`support.html`) in muted 15px; small primary "Get the app" (App Store link). Under 720px only the brand and the
   button.
2. **Hero** (light, glow behind; grid 1.02fr / 0.98fr, 40px gap; one column under 900px):
   - Eyebrow pill: tag "New" + "Now on the App Store".
   - h1 "Snap a meal. <highlight>See what's left.</highlight>"
   - Lede: "Take a photo, describe it in a few words or scan a barcode. Weight Class estimates the calories,
     protein, carbs, fat and fiber, and keeps your day on track against a plan made for you."
   - Buttons: primary "Get it on the App Store", ghost "See how it works" (`#how`).
   - Note with the live dot: "Free to start · 3 AI scans a day · No ads".
   - Stage (min-height 640px): three framed phones in perspective — main `phone-home.png` (width 62%, left 16%),
     back `phone-weight.png` (50%, right -2%, top 92px), front `phone-meal.png` (40%, left 4%, top 270px) — over a
     glow blob. Chips (each from a real screen): "15-day streak" / "logged every day" (flame) top-right, by the
     home screen's flame; "Chicken Caesar salad · 539 kcal" with the macro dots (49g, 19g, 29g) middle-right;
     "−0.7 lb a week" / "weight trend vs. goal line" bottom.
3. **How it works** (`#how`, centered head): h2 "A meal logged in three steps"; lede "Snap it, check it and see
   where your day stands. No weighing every ingredient." Three cards (white, border, shadow, 22px), media well
   250px tall on `--surface` (phone image cropped), body 20px 22px 26px, number badge 26px on `--accent`:
   1. "Snap it" — "Take a photo of your plate, describe it in a few words or scan a barcode. Add a second photo or
      a note like “cooked in butter” for a closer estimate." (media: `phone-meal.png`, top)
   2. "Check the estimate" — "AI names the foods and portions, and the numbers come from the USDA food database
      wherever a food matches. Wrong portion? Change it in a tap." (media: `phone-meal.png`, the numbers)
   3. "See what's left" — "Calories, protein, carbs, fat, fiber and water fill up against your plan, so you know
      what's left for the rest of the day." (media: `phone-home.png`, top)
4. **Dark band** (28px radius, `--primary`, min-height 440px, the page's one dark moment): left text (max 560px,
   56px 44px padding) h2 "An estimate you can check." and "A number only helps if you can check it. Weight Class
   shows the foods and portions it saw, takes the numbers from the USDA food database wherever a food matches,
   and lets you change anything in a tap. It remembers your fixes for next time, and every calculation links to
   its sources in the app." Right: `phone-meal.png` tilted, partly cropped by the band.
5. **Features** (`#features`): h2 "Tracking that fits into real life"; lede "Weight Class takes the busywork out
   of counting calories, so logging a meal takes seconds, not minutes." 3×2 grid of white bordered cards, 26px
   padding, 44px icon tile on `--accent` (14px radius) with the line icons of the old page:
   "A plan made for you", "See the trend, not the noise", "Plan tomorrow" (Premium tag), "Calm mode",
   "Works with Apple Health", "Your data, your call" (AI only after you allow it; delete everything any time).
6. **Showcase** (full bleed `--surface`, borders top and bottom; grid 1fr / 1fr, 56px gap): two tilted phones
   (`phone-glp1.png` front-left, `phone-home.png` back-right, 720px tall stage); text: h2 "Built for GLP-1
   medicines"; lede "For people taking a GLP-1 medicine, with protein, fiber and water first while your appetite
   is lower." Ticks (green ✓, bold lead):
   - **Doses and sites.** Log each dose and see where you injected last.
   - **Pens and vials.** Keep count of what's left and when it's due to be used.
   - **Protein, fiber and water first.** Targets that suit a smaller appetite.
   - **Never dosing advice.** Your prescriber decides; Weight Class keeps the log.
7. **Pricing** (`#pricing`): h2 "Free to use, Premium if you want more"; lede "Start free. Upgrade when you
   want unlimited scans." Two plans (max 360px each, centered):
   - Free (white): "$0" / "no time limit"; ✓ 3 AI meal scans a day · Barcodes, food search and quick add ·
     Your plan, fiber and water goals, vitamins and minerals · Weight trend, body measurements and progress photos
     · GLP-1 mode, drinks and supplements · Apple Health, calm mode, reminders; ghost button "Get it on the App
     Store".
   - Weight Class Premium (dark, tag "Free trial"): "$39.99" / "a year"; note "or $7.99 a month"; ✓ Unlimited AI
     scans of meals, labels and descriptions (fair use: 50 a day) · Up to 3 photos of one meal · A weekly check-in
     that suggests a calorie target from your weight trend (you decide) · Plan tomorrow: a draft of your day from
     your own meals; invert button "Start in the app".
   - Fine print (centered, 13.5px): "US prices; the app shows the price for your country before you subscribe.
     New subscribers can start with a one-month free trial; the app shows whether you can get it. Renews
     automatically until you cancel in your App Store settings, at least 24 hours before the end of the period.
     How to cancel · Terms of Service · Privacy Policy."
8. **FAQ** (`#faq`, max 760px): h2 "Questions, answered"; bordered `<details>` items (16px radius, open state on
   `--surface`, + / − marker): the seven questions and answers of the old page, devices answer "iPhone, from the
   App Store. An Android version is on the way."
9. **Final call to action** (dark, 28px radius, centered, 76px padding, warm glow): h2 "Start with your next
   meal"; lede "Weight Class is on the App Store now: free to download, with Weight Class Premium if you want
   more."; invert button "Get it on the App Store"; "Questions or feedback: support@ugcmediakits.com".
10. **Footer** (light, top border, 44px): brand and tagline "AI calorie tracking, made effortless."; links
    Support, Privacy Policy, Terms of Service, Consumer Health Data Privacy Policy (Washington: linked from the
    homepage), Delete your account, the support email; bottom row "© 2026 UGC Mediakits" and "This website uses no
    cookies and no analytics."

## 6. Assets

- Existing: `images/logo.png`, `app-icon.png`, `og.png`, and the framed phones `phone-home.png`,
  `phone-meal.png`, `phone-weight.png`, `phone-glp1.png` (600 × 1258, 1.0's screens, transparent corners).
- To add when available: `images/app-store-badge.svg` (Apple's official badge).

## 7. Head

Title, description and Open Graph tags as before; `<meta name="apple-itunes-app" content="app-id=6816738487">`
(Safari's own App Store banner); `home.css` only.

## 8. Checks before shipping

Desktop 1440px and phone 390px screenshots; no horizontal scroll; keyboard focus visible; every link works
(`#how`, `#features`, `#pricing`, `#faq`, the legal pages, the App Store); no request leaves the server; the
Washington link in the footer; "Weight Class" in every visible name; no "healthy", "accurate" or "verified".
