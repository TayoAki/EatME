# How long should Weight Class's onboarding be? (14 November 2026)

> Written for the owner's ask: "We can make the onboarding more dynamic, can you study how long [the Galaxies.dev
> video on onboarding funnels] and make it dynamic and animated". What was built from it is in `PLAN.md` §3 (v2.8).

## The short answer

Weight Class asked fewer questions than any app it competes with: **12 to 14 screens** from Welcome to sign-up (7 to 9
questions). Health and fitness apps average **36**. Length itself doesn't convert, though: what works in the long
flows is that every screen either personalizes the plan or shows the person their plan taking shape. So v2.8 adds the
two screens that do that and an optional "How did you hear about Weight Class?" (**14 to 17 screens** now), puts motion
on every screen, and keeps the parts of the video's funnel that break Weight Class's own rules out of onboarding: a
rating prompt (it comes after the first good scan instead), testimonials and results claims. The video's trial pages
became a Premium offer after sign-up.

## How long the others are

| App | Onboarding | Source |
| --- | --- | --- |
| Weight Class before v2.8 | 12–14 screens: Welcome, 7–9 questions, AI consent, building, plan ready, sign-up | this repo |
| Weight Class v2.8 | 14–17 screens: adds "Your path to 65 kg" (lose or gain), "What's gotten in the way before?" and "How did you hear about Weight Class?" (optional), then a Premium offer after sign-up for people who can get a free trial | this repo |
| Average of 1,460 flows (986 apps) | 25 screens (from 3 to 187); **Health & Fitness 35.8**, Food & Drink 18.8 | [Mobbin](https://mobbin.com/blog/the-long-onboarding-a-study-of-1-460-flows) |
| Cal AI | "25+ onboarding cards before serving a tailored paywall", with stats between the questions | [Adapty](https://adapty.io/blog/markdown/how-to-personalize-onboarding-and-paywalls-in-your-mobile-app.md); screens at [ScreensDesign](https://screensdesign.com/apps/cal-ai-calorie-tracker/) |
| MenuFit | 34 steps, then a hard paywall; the founder says 99.8% finish the quiz (unverified) | `research/menufit-teardown.md` |
| TapCook | 19 steps, a rating prompt at step 16, then a hard paywall | `research/tapcook-teardown.md` |
| Me+ | 45–50 screens, 7–8 minutes | [RevenueCat](https://www.revenuecat.com/blog/growth/why-your-onboarding-experience-might-be-too-short) |
| Noom | 113 screens | [Mobbin](https://mobbin.com/blog/the-long-onboarding-a-study-of-1-460-flows) |

## What the evidence says

- **Longer can convert better, when it does work.** Lose It!'s trial starts "went up double digits" as its onboarding
  got longer, and Fitbod ends with a three-month projection from the person's answers before its paywall; the same
  article warns that friction loses people and that only realized revenue per customer, not trial starts, shows
  whether a longer flow paid off ([RevenueCat](https://www.revenuecat.com/blog/growth/why-your-onboarding-experience-might-be-too-short)).
  Adapty's team puts health and fitness flows at 25 to 30 screens "when each screen addresses a real user problem"
  ([Adapty](https://adapty.io/blog/markdown/how-to-personalize-onboarding-and-paywalls-in-your-mobile-app.md)).
- **The first session is where people start trials.** 89.4% of trial starts happen on the day of install, so
  RevenueCat says to show the paywall in the first session, but after one moment of value, not before the onboarding
  ([RevenueCat](https://www.revenuecat.com/blog/engineering/android-paywall-gap/)).
- **Asking is rare and it's what the long flows do.** 71% of the apps with a paywall in onboarding never ask anything
  about the person; the 6% that ask personal questions run the longest flows
  ([Mobbin](https://mobbin.com/blog/the-long-onboarding-a-study-of-1-460-flows)).
- **Rating prompts in onboarding inflate stars and backfire.** TapCook's 4.76 stars sit on top of written reviews
  averaging 2.54, and MenuFit shows the same gap; both ask for a rating inside the quiz, before any real use
  (`research/tapcook-teardown.md`, `research/menufit-teardown.md`).

## The video's funnel, piece by piece

| The video suggests | Weight Class | Why |
| --- | --- | --- |
| A survey with a progress bar | Kept; the bar now eases as it fills | Already there |
| Pain-point questions | **Added**: "What's gotten in the way before?", seven answers, any number | Each answer opens to show the part of the app made for it, and the plan-ready screen lists them again ("Built for what got in your way"). Kept on the phone: never sent to the server, the AI or Sentry (one answer is about a GLP-1 medicine) |
| An interstitial on how the app helps | **Added**: "Your path to 65 kg", a chart that draws itself from the person's weight, goal and pace | The honest version of Cal AI's weight-trend screen: the date is the plan's own (`goalDate`), the line says it assumes the pace holds, and Sources is one tap away. No "users lose 2× more" claim |
| Fade-ins 100 ms apart, haptics on select | **Added** everywhere: title, subtitle and rows rise 100 ms apart; rows give under the finger and pop when picked, with a selection haptic; Continue pops when the question gets its answer | Reanimated entrances follow Reduce Motion |
| "Customizing your plan" spinner | Kept and livelier: the bar keeps up with the number, the checklist ticks with a haptic and names the person's own answers ("to lose 0.5 kg a week", "Active", "Vegetarian diet") | |
| Plan reveal | Livelier: the check pops with a burst of the macro colors, the goal and the four targets count up | |
| "How did you hear about us?" | **Added** (14 November): the last question, optional ("Skip"), saved on the account | New data sent to our server, so the Privacy Policy and App Privacy name it; never sent to AI or used for ads |
| A rating prompt | **Not in onboarding**; after the first good scan instead (14 November) | `PLAN.md`: no rating prompt before a first good scan; the TapCook and MenuFit evidence above |
| Testimonials | **No** | No real ones yet; invented or paid-for reviews break the FTC's rule on reviews and testimonials (16 CFR 465) |
| Trial features page, trial reminder with a bell, then the paywall | **Added after sign-up** (14 November), not in onboarding | Shown once, only to people the store will give a free trial, with a real reminder two days before it ends; onboarding itself stays free of a paywall |

## What came next (built 14 November 2026, the owner's ask)

1. **A soft Premium offer right after sign-up**, the honest version of the video's last three screens: what Premium
   adds, then a ringing bell over a timeline (today, the reminder two days before the trial ends, the day the price
   starts), the billed price as the biggest price, "Not now" as easy as "Start free trial", and a real reminder
   notification Weight Class schedules. Only for people the store will give a trial (`PLAN.md` §3).
2. **"How did you hear about Weight Class?"**, optional, one tap, saved on the account; the Privacy Policy names it
   and App Privacy gets Other Data (Analytics) (`store/README.md`).
3. **The rating prompt after the first good scan**: the store's own sheet, once, never in onboarding (`PLAN.md`).

Still to do: **measure before adding more screens**. Sentry logs "Onboarding plan generated", "Onboarding
completed", "Premium offer shown", "Premium offer: not now" and "Premium offer: trial started"; their ratios show how
many reach the plan, make an account and start a trial. A step-by-step drop-off needs an analytics event per screen,
which the Privacy Policy would have to name. The answers to "How did you hear about Weight Class?" can be counted in
Railway → Postgres (read only): `select referral_source, count(*) from users where onboarding_completed_at > now() -
interval '30 days' group by 1 order by 2 desc;`
