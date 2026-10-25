// Takes the app screens for the App Store screenshots from the local web build (npx expo start --web), signed in
// as a demo account: the iPhone 16 Pro Max screen, 440 x 956 points at 3x, with the web build's tab bar hidden
// (on iOS it floats at the bottom, below what a screenshot shows). compose.cjs adds the captions.
//
//   EMAIL=… PASSWORD=… TIME_ZONE=America/Phoenix CHAIN=cava SCAN_ID=<menu scan id> \
//     node store/screenshots/tools/capture.cjs <out dir> [04-what-to-order 05-scanned-menu 09-search]
//
// The account's time zone is what makes the time of day: pick one where it is now the time the screenshot says
// (store/screenshots/README.md → How they were made). The password is the demo account's own, never committed.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const BASE = process.env.BASE ?? 'http://localhost:8081';
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const TIME_ZONE = process.env.TIME_ZONE;
const CHAIN = process.env.CHAIN ?? 'cava';
const SCAN_ID = process.env.SCAN_ID;

const SCREENS = {
  // Search → Restaurants → a chain: What fits, from its own numbers.
  '04-what-to-order': async (page) => {
    await page.goto(`${BASE}/restaurant/${CHAIN}`, { waitUntil: 'domcontentloaded' });
    await page.getByText('Fits well', { exact: true }).first().waitFor();
  },
  // A menu read from a photo (or dish lines sent to POST /api/menu-scans): Likely fits with ranges.
  '05-scanned-menu': async (page) => {
    if (!SCAN_ID) throw new Error('SCAN_ID is the menu scan to show');
    await page.goto(`${BASE}/menu/${SCAN_ID}`, { waitUntil: 'domcontentloaded' });
    await page.getByText('Likely fits', { exact: true }).first().waitFor();
  },
  // Search foods with 150 g of rotisserie chicken breast (a search no chain dish matches).
  '09-search': async (page) => {
    await page.goto(`${BASE}/scan`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(4000);
    const buttons = page.getByText('Search foods', { exact: true });
    let opened = false;
    for (let i = 0; i < (await buttons.count()) && !opened; i++) {
      if (await buttons.nth(i).isVisible()) {
        await buttons.nth(i).click();
        opened = true;
      }
    }
    if (!opened) await page.getByLabel('Search foods').first().click();
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
  },
};

(async () => {
  const [outDir, ...names] = process.argv.slice(2);
  if (!outDir || !EMAIL || !PASSWORD || !TIME_ZONE) throw new Error('Usage: EMAIL=… PASSWORD=… TIME_ZONE=… node capture.cjs <out dir> [name ...]');
  fs.mkdirSync(outDir, { recursive: true });
  const signIn = await fetch(`${BASE}/api/auth/sign-in/email`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: BASE },
    body: JSON.stringify({ email: EMAIL, password: PASSWORD }),
  });
  if (!signIn.ok) throw new Error(`Sign-in failed (${signIn.status})`);
  const cookies = signIn.headers.getSetCookie().map((cookie) => {
    const [pair] = cookie.split(';');
    const [name, ...value] = pair.split('=');
    return { name, value: value.join('='), domain: new URL(BASE).hostname, path: '/' };
  });

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 440, height: 956 }, deviceScaleFactor: 3, timezoneId: TIME_ZONE, locale: 'en-US' });
  await context.addCookies(cookies);
  const page = await context.newPage();
  page.setDefaultNavigationTimeout(300_000);
  page.setDefaultTimeout(240_000);
  for (const name of names.length ? names : Object.keys(SCREENS)) {
    await SCREENS[name](page);
    // The tab bar's own pill, not the segmented controls inside screens.
    await page.evaluate(() => {
      for (const list of document.querySelectorAll('[role="tablist"]')) {
        const tabs = [...list.querySelectorAll('[role="tab"]')].map((tab) => tab.textContent?.trim());
        if (!tabs.includes('Home') || !tabs.includes('Profile')) continue;
        let node = list;
        while (node.parentElement && !['fixed', 'absolute'].includes(getComputedStyle(node).position)) node = node.parentElement;
        node.style.display = 'none';
      }
    });
    await page.waitForTimeout(1200);
    await page.screenshot({ path: path.join(outDir, `${name}.png`) });
    console.log('captured', name);
  }
  await browser.close();
})().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
