// Takes the app screens for the App Store screenshots from the local web build (npx expo start --web), signed in
// as the demo account: the whole iPhone 16/17/18 Pro Max screen, 440 x 956 points at 3x, with the iPhone's safe
// areas emulated (62 pt status bar, 34 pt home indicator) so every screen sits where it does on the phone.
// compose.cjs draws the status bar over the top and adds the captions. The web build's tab bar is hidden (iOS
// shows the native one).
//
//   EMAIL=… PASSWORD=… TIME_ZONE=Asia/Dhaka MEAL=<meal id> FEED=<camera.y4m> \
//     node store/screenshots/tools/capture.cjs <out dir> [screen ...]
//
// Screens: scan-result (logs a meal from PHOTO with the AI, as a person does), camera, meal, meal-items, home,
// home-meals, home-glp1, flamie, glp1, what-to-order, plan, weight, calm, search. Each writes <out dir>/<screen>.png
// and, for the ones with callouts, <screen>.boxes.json (the cards around some texts, in points).
//
// The account's time zone is what makes the time of day: pick one where it is now the time the screenshot says
// (store/screenshots/README.md → How they were made). The password is the demo account's own, never committed.
// FEED is the camera's picture: Chromium's fake camera plays a Y4M file (ffmpeg -loop 1 -i photo.jpg -t 2 -r 10
// -vf "scale=1440:1920,format=yuv420p" camera.y4m).
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const BASE = process.env.BASE ?? 'http://localhost:8081';
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const TIME_ZONE = process.env.TIME_ZONE;
const MEAL = process.env.MEAL;
const FEED = process.env.FEED;
const PHOTO = process.env.PHOTO;
const CHAIN = process.env.CHAIN ?? 'cava';
const INSETS = { top: 62, bottom: 34 };

async function signIn() {
  const res = await fetch(`${BASE}/api/auth/sign-in/email`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: BASE },
    body: JSON.stringify({ email: EMAIL, password: PASSWORD }),
  });
  if (!res.ok) throw new Error(`Sign-in failed (${res.status})`);
  return res.headers.getSetCookie().map((cookie) => {
    const [pair] = cookie.split(';');
    const [name, ...value] = pair.split('=');
    return { name, value: value.join('='), domain: new URL(BASE).hostname, path: '/' };
  });
}

async function open(cookies, camera) {
  if (camera && !FEED) throw new Error('FEED is the Y4M file the camera shows');
  const browser = await chromium.launch({
    args: camera ? ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', `--use-file-for-fake-video-capture=${FEED}`] : [],
  });
  const context = await browser.newContext({
    viewport: { width: 440, height: 956 },
    deviceScaleFactor: 3,
    timezoneId: TIME_ZONE,
    locale: 'en-US',
    permissions: camera ? ['camera'] : [],
  });
  await context.addCookies(cookies);
  // Safe areas only apply with viewport-fit=cover, as in the app, which draws under the status bar.
  await context.addInitScript(() => {
    const fit = () => {
      const meta = document.querySelector('meta[name="viewport"]');
      if (meta && !meta.content.includes('viewport-fit')) meta.content += ', viewport-fit=cover';
      return !!meta;
    };
    if (!fit()) new MutationObserver((_, observer) => fit() && observer.disconnect()).observe(document, { childList: true, subtree: true });
  });
  const page = await context.newPage();
  const cdp = await context.newCDPSession(page);
  const side = (name, value) => ({ [name]: value, [`${name}Max`]: value });
  await cdp.send('Emulation.setSafeAreaInsetsOverride', {
    insets: { ...side('top', INSETS.top), ...side('bottom', INSETS.bottom), ...side('left', 0), ...side('right', 0) },
  });
  page.setDefaultNavigationTimeout(300_000);
  page.setDefaultTimeout(240_000);
  return { browser, page };
}

/** The dev server keeps a connection open, and images off screen load lazily: wait a little for both, at most. */
async function settle(page, ms = 1500) {
  await page.waitForLoadState('networkidle', { timeout: 6000 }).catch(() => {});
  await page.evaluate(async () => {
    await document.fonts.ready;
    const loads = [...document.images].filter((img) => !img.complete).map((img) => new Promise((r) => { img.onload = img.onerror = r; }));
    await Promise.race([Promise.all(loads), new Promise((r) => setTimeout(r, 5000))]);
  });
  await page.waitForTimeout(ms);
}

async function hideTabBar(page) {
  await page.evaluate(() => {
    for (const list of document.querySelectorAll('[role="tablist"]')) {
      const tabs = [...list.querySelectorAll('[role="tab"]')].map((tab) => tab.textContent?.trim());
      if (!tabs.includes('Home') || !tabs.includes('Profile')) continue;
      let node = list;
      while (node.parentElement && !['fixed', 'absolute'].includes(getComputedStyle(node).position)) node = node.parentElement;
      node.style.display = 'none';
    }
  });
}

/** The card around each text (its nearest ancestor with a border or a fill and rounded corners), in points. */
async function boxes(page, texts) {
  return page.evaluate((texts) => {
    const out = {};
    const shown = [...document.querySelectorAll('div, span, input')].filter((d) => {
      const r = d.getBoundingClientRect();
      return r.width > 0 && r.height > 0 && getComputedStyle(d).visibility !== 'hidden';
    });
    for (const [key, text] of Object.entries(texts)) {
      const el = shown.find((d) => (d.value ?? d.textContent).trim() === text && [...d.children].every((c) => c.textContent.trim() !== text));
      if (!el) {
        out[key] = null;
        continue;
      }
      let node = el;
      while (node && node !== document.body) {
        const s = getComputedStyle(node);
        const filled = s.backgroundColor !== 'rgba(0, 0, 0, 0)' && s.backgroundColor !== 'rgb(255, 255, 255)';
        if ((parseFloat(s.borderTopWidth) > 0 || filled) && parseFloat(s.borderTopLeftRadius) >= 12) break;
        node = node.parentElement;
      }
      const card = node && node !== document.body ? node : el;
      const r = card.getBoundingClientRect();
      out[key] = { x: r.x, y: r.y, w: r.width, h: r.height, radius: parseFloat(getComputedStyle(card).borderTopLeftRadius) || 0 };
    }
    return out;
  }, texts);
}

/** Home with today's meals and the streak loaded, and the weekly check-in offer put away ("Not now"). */
async function home(page, streakLabel = 'day streak') {
  await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
  await page.getByText("Today's meals", { exact: true }).first().waitFor();
  await page.locator(`[aria-label*="${streakLabel}"]`).first().waitFor();
  const notNow = page.getByLabel('Not now', { exact: true });
  if (await notNow.count()) await notNow.first().click().catch(() => {});
  await page.waitForFunction(() => !document.body.innerText.includes('fine-tune your target'), null, { timeout: 15_000 }).catch(() => {});
}

async function meal(page) {
  if (!MEAL) throw new Error('MEAL is the id of the meal to show');
  await page.goto(`${BASE}/meal/${MEAL}`, { waitUntil: 'domcontentloaded' });
  await page.getByText('Portion', { exact: true }).first().waitFor();
}

async function clickVisible(locator) {
  for (let i = 0; i < (await locator.count()); i++) {
    if (await locator.nth(i).isVisible()) return locator.nth(i).click();
  }
  throw new Error('Nothing visible to click');
}

const SCREENS = {
  // Scan → the gallery → Analyze the food: the AI's result for PHOTO. This logs the meal (set its time afterwards).
  'scan-result': { camera: true, run: async (page) => {
    if (!PHOTO) throw new Error('PHOTO is the meal photo to scan');
    await page.goto(`${BASE}/scan`, { waitUntil: 'domcontentloaded' });
    await page.getByLabel('Take photo').first().waitFor();
    const [chooser] = await Promise.all([page.waitForEvent('filechooser'), clickVisible(page.getByLabel('Choose a photo from your gallery'))]);
    await chooser.setFiles(PHOTO);
    const created = page.waitForResponse((r) => r.url().endsWith('/api/meals') && r.request().method() === 'POST');
    await page.getByText('Analyze the food', { exact: true }).first().click();
    console.log('meal', (await (await created).json()).meal?.id);
    await page.getByText('Done', { exact: true }).first().waitFor();
  } },
  // Scan with FEED as the live camera.
  camera: { camera: true, run: async (page) => {
    await page.goto(`${BASE}/scan`, { waitUntil: 'domcontentloaded' });
    await page.getByLabel('Take photo').first().waitFor();
    await page.waitForFunction(() => [...document.querySelectorAll('video')].some((v) => v.videoWidth > 0));
    await page.waitForTimeout(2500);
  } },
  meal: { run: meal },
  'meal-items': { boxes: { foods: 'Foods' }, run: async (page) => {
    await meal(page);
    await settle(page);
    await page.getByText('Foods', { exact: true }).first().scrollIntoViewIfNeeded();
  } },
  home: { run: (page) => home(page) },
  // Home scrolled down to Today's meals.
  'home-meals': { run: async (page) => {
    await home(page);
    await settle(page);
    await page.mouse.move(220, 500);
    await page.mouse.wheel(0, Number(process.env.SCROLL ?? 640));
    await page.waitForTimeout(1500);
  } },
  // Home with GLP-1 mode on (the GLP-1 card on top).
  'home-glp1': { run: (page) => home(page) },
  flamie: { run: async (page) => {
    await home(page);
    await settle(page);
    await page.locator('[aria-label*="day streak"]').first().click();
    await page.getByText('Day streak', { exact: true }).first().waitFor();
    await page.waitForTimeout(2500);
  } },
  glp1: { boxes: { pens: 'Pens & vials' }, run: async (page) => {
    await page.goto(`${BASE}/glp1`, { waitUntil: 'domcontentloaded' });
    await page.getByText('Pens & vials', { exact: true }).first().waitFor();
  } },
  // Search → Restaurants → a chain: What fits, from its own numbers.
  'what-to-order': { run: async (page) => {
    await page.goto(`${BASE}/restaurant/${CHAIN}`, { waitUntil: 'domcontentloaded' });
    await page.getByText('Fits well', { exact: true }).first().waitFor();
  } },
  // In the evening: Home's Plan tomorrow card → Draft tomorrow (or See the draft), scrolled to the top.
  plan: { run: async (page) => {
    await home(page);
    const draft = page.getByText('Draft tomorrow', { exact: true });
    const see = page.getByText('See the draft', { exact: true });
    await Promise.race([draft.first().waitFor(), see.first().waitFor()]);
    if (await see.count()) await see.first().click();
    else await draft.first().click();
    await page.getByText('Shuffle', { exact: true }).first().waitFor();
    await page.mouse.move(220, 300);
    await page.mouse.wheel(0, -3000);
    await page.waitForTimeout(1500);
  } },
  weight: { boxes: { summary: '182.5 lb' }, run: async (page) => {
    await page.goto(`${BASE}/weight`, { waitUntil: 'domcontentloaded' });
    await page.getByText('Weigh-ins', { exact: true }).first().waitFor();
  } },
  // Home with calm mode on (Profile → Preferences).
  calm: { run: (page) => home(page, 'days logged') },
  // Search foods with 150 g of rotisserie chicken breast (a search no chain dish matches).
  search: { camera: true, run: async (page) => {
    await page.goto(`${BASE}/scan`, { waitUntil: 'domcontentloaded' });
    await page.getByLabel('Take photo').first().waitFor();
    await clickVisible(page.getByLabel('Search foods', { exact: true }));
    await page.getByPlaceholder('e.g. banana, rice, Big Mac').fill('rotisserie chicken breast');
    const food = page.getByText('Chicken breast, rotisserie, skin not eaten', { exact: true }).first();
    await food.waitFor();
    await food.click();
    const grams = page.getByLabel('Grams', { exact: true });
    await grams.waitFor();
    await grams.fill('150');
    // As on the phone once the keyboard is down: no focus ring or selected digits.
    await grams.blur();
    await page.evaluate(() => window.getSelection()?.removeAllRanges());
  } },
};

(async () => {
  const [outDir, ...names] = process.argv.slice(2);
  if (!outDir || !EMAIL || !PASSWORD || !TIME_ZONE) throw new Error('Usage: EMAIL=… PASSWORD=… TIME_ZONE=… node capture.cjs <out dir> [screen ...]');
  fs.mkdirSync(outDir, { recursive: true });
  const cookies = await signIn();
  for (const name of names.length ? names : Object.keys(SCREENS).filter((n) => n !== 'scan-result')) {
    const screen = SCREENS[name];
    if (!screen) throw new Error(`No screen ${name}`);
    const { browser, page } = await open(cookies, screen.camera);
    await screen.run(page);
    await hideTabBar(page);
    await settle(page);
    await page.screenshot({ path: path.join(outDir, `${name}.png`) });
    if (screen.boxes) fs.writeFileSync(path.join(outDir, `${name}.boxes.json`), JSON.stringify(await boxes(page, screen.boxes), null, 1));
    console.log('captured', name);
    await browser.close();
  }
})().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
