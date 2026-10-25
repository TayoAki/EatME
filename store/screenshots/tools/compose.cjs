// Composes the App Store screenshots (store/screenshots/README.md): a tinted background, the Premium pill for
// Premium features, a two-line headline with an accent phrase, a two-line line under it, and the app screen in a
// rounded card under an iOS status bar. Writes ios-6.9 (1320 x 2868) and ios-6.5 (1284 x 2778), PNG without alpha.
//
//   node store/screenshots/tools/compose.cjs --app <dir> [name ...]     (all screenshots without names)
//
// <dir>/<name>.png is the app screen for <name>, as capture.cjs takes it: the web build at 440 x 956 points and 3x,
// tab bar hidden. Needs Playwright's Chromium, the Inter and Inter Display fonts, and ImageMagick (`convert`).
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { chromium } = require('playwright');

// store/screenshots, from this script's own path.
const ROOT = path.dirname(path.dirname(path.resolve(process.argv[1])));

// Headline lines (<a>…</a> is the accent phrase), the line under them, the status bar time, colors.
const SPECS = {
  '01-home': { time: '3:45', tint: '#ffe7d6', accent: '#d35400', lines: ['Snap a meal.', 'See what’s <a>left</a>.'], sub: ['Calories, protein, carbs and fat,', 'tracked against a plan made for you.'] },
  '02-meal': { time: '3:45', tint: '#fce4e2', accent: '#d2433b', lines: ['An estimate', 'you can <a>check</a>'], sub: ['Weight Class names the foods and', 'portions. Change any number in a tap.'] },
  '03-glp1': { time: '3:45', tint: '#d5f2ef', accent: '#0b8577', lines: ['Built for', '<a>GLP-1</a> medicines'], sub: ['Doses, pens and injection sites,', 'with protein, fiber and water first.'] },
  '04-what-to-order': { time: '12:10', tint: '#e6e5fd', accent: '#4a43d6', premium: true, lines: ['Eating out?', 'See <a>what fits</a>'], sub: ['Chain menus ranked for what’s left', 'of your day, with their own numbers.'] },
  '05-scanned-menu': { time: '12:10', tint: '#fde3ee', accent: '#c22a64', premium: true, lines: ['Not a chain?', 'Scan <a>the menu</a>'], sub: ['Dishes likely to fit your day,', 'each an estimate with a range.'] },
  '06-plan-tomorrow': { time: '6:40', tint: '#fdefdc', accent: '#b86a00', premium: true, lines: ['Plan tomorrow', 'in <a>one tap</a>'], sub: ['A draft of your day from meals you', 'already eat. Swap, shuffle, done.'] },
  '07-calm': { time: '3:45', tint: '#f1e3f1', accent: '#8e3f90', lines: ['Calm mode for', '<a>calmer</a> days'], sub: ['Swap calorie counts for simple', 'words whenever you like.'] },
  '08-weight': { time: '3:45', tint: '#daf1e5', accent: '#1c8249', lines: ['See the <a>trend</a>,', 'not the noise'], sub: ['A smoothed weight trend with', 'your goal and milestones.'] },
  '09-search': { time: '3:45', tint: '#e0ebfd', accent: '#2c6ad8', lines: ['Search or scan,', '<a>no AI</a> needed'], sub: ['Everyday foods and', 'barcodes, weighed your way.'] },
};

const line = (text) => text.replace(/&/g, '&amp;').replace(/<a>/g, '<span class="accent">').replace(/<\/a>/g, '</span>');

// Measured on the 2026-09 set: the Premium pill moves everything below it 63 px down; the card's inside starts at
// x 150, y 786, and the app screen 125 px below that, 1020 px wide (2.32 px a point).
function page(spec, appSrc) {
  const shift = spec.premium ? 63 : 0;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  html,body{margin:0;padding:0}
  body{width:1320px;height:2868px;overflow:hidden;position:relative;background:#fefefe;-webkit-font-smoothing:antialiased}
  .bg{position:absolute;inset:0;background:radial-gradient(1400px 1100px at 660px 0px, ${spec.tint} 0%, #fefefe 100%)}
  .pill{position:absolute;top:156px;left:50%;transform:translateX(-50%);height:80px;box-sizing:border-box;padding:0 44px;border-radius:40px;background:#111111;color:#fff;display:flex;align-items:center;gap:16px;font-family:'Inter';font-weight:700;font-size:36px;letter-spacing:4px;white-space:nowrap}
  .pill svg{width:32px;height:32px}
  h1{position:absolute;left:0;right:0;top:${215 + shift}px;margin:0;text-align:center;font-family:'Inter Display';font-weight:800;font-size:110px;line-height:114px;letter-spacing:-2.8px;color:#111111}
  h1 .accent{color:${spec.accent}}
  .sub{position:absolute;left:0;right:0;top:${478 + shift}px;margin:0;text-align:center;font-family:'Inter';font-weight:400;font-size:48.5px;line-height:66px;letter-spacing:-0.2px;color:#55555b}
  .card{position:absolute;left:147px;top:783px;width:1026px;height:2400px;box-sizing:border-box;border:3px solid #d9d9d9;border-bottom:none;border-radius:135px 135px 0 0;background:#ffffff;box-shadow:0 40px 120px rgba(17,17,17,0.16);overflow:hidden}
  .time{position:absolute;left:114px;top:47px;font-family:'Inter Display';font-weight:600;font-size:46px;letter-spacing:-0.5px;line-height:1;color:#111111}
  .icon{position:absolute}
  .app{position:absolute;left:0;top:125px;width:1020px;display:block}
  </style></head><body>
  <div class="bg"></div>
  ${spec.premium ? '<div class="pill"><svg viewBox="0 0 24 24"><path fill="#fff" d="M12 2.6l2.83 6.13 6.7.73-5 4.53 1.39 6.6L12 17.24 6.08 20.6l1.39-6.6-5-4.53 6.7-.73z"/></svg><span>PREMIUM</span></div>' : ''}
  <h1>${line(spec.lines[0])}<br>${line(spec.lines[1])}</h1>
  <p class="sub">${line(spec.sub[0])}<br>${line(spec.sub[1])}</p>
  <div class="card">
    <div class="time">${spec.time}</div>
    <svg class="icon" style="left:729px;top:51px" width="54" height="36" viewBox="0 0 54 36"><rect x="0" y="24" width="9" height="12" rx="2.5" fill="#111"/><rect x="15" y="17" width="9" height="19" rx="2.5" fill="#111"/><rect x="30" y="9" width="9" height="27" rx="2.5" fill="#111"/><rect x="45" y="0" width="9" height="36" rx="2.5" fill="#111"/></svg>
    <svg class="icon" style="left:801px;top:52px" width="42" height="33" viewBox="0 -1 44 33" preserveAspectRatio="none"><path fill="#111" d="M22 5.5c6.9 0 13.2 2.6 17.9 6.9.6.6 1.6.6 2.2 0l1.4-1.5c.6-.6.6-1.6-.1-2.2C37.8 3.4 30.2.4 22 .4S6.2 3.4.6 8.7c-.7.6-.7 1.6-.1 2.2l1.4 1.5c.6.6 1.6.6 2.2 0C8.8 8.1 15.1 5.5 22 5.5z"/><path fill="#111" d="M22 14.6c4.4 0 8.4 1.6 11.5 4.3.6.5 1.6.5 2.1-.1l1.5-1.5c.6-.6.6-1.6-.1-2.2C33 11.7 27.7 9.6 22 9.6s-11 2.1-15 5.5c-.7.6-.7 1.6-.1 2.2l1.5 1.5c.6.6 1.5.6 2.1.1 3.1-2.7 7.1-4.3 11.5-4.3z"/><path fill="#111" d="M22 22.6c1.9 0 3.6.6 5 1.7.7.5.8 1.5.2 2.1l-4.1 4.3c-.6.6-1.6.6-2.2 0l-4.1-4.3c-.6-.6-.5-1.6.2-2.1 1.4-1.1 3.1-1.7 5-1.7z"/></svg>
    <svg class="icon" style="left:861px;top:51px" width="79" height="39" viewBox="0 0 79 39"><rect x="1.5" y="1.5" width="69" height="36" rx="10.5" fill="none" stroke="#a0a0a0" stroke-width="3"/><rect x="6" y="6" width="51" height="27" rx="6.5" fill="#111"/><path d="M75 13h1.5c1.4 0 2.5 1.1 2.5 2.5v8c0 1.4-1.1 2.5-2.5 2.5H75z" fill="#949494"/></svg>
    <img class="app" src="${appSrc}">
  </div>
  </body></html>`;
}

(async () => {
  const args = process.argv.slice(2);
  const at = args.indexOf('--app');
  if (at < 0 || !args[at + 1]) throw new Error('Usage: node store/screenshots/tools/compose.cjs --app <dir> [name ...]');
  const appDir = args[at + 1];
  const names = args.filter((_, i) => i !== at && i !== at + 1);
  const browser = await chromium.launch();
  const tab = await browser.newPage({ viewport: { width: 1320, height: 2868 }, deviceScaleFactor: 1 });
  for (const name of names.length ? names : Object.keys(SPECS)) {
    const spec = SPECS[name];
    if (!spec) throw new Error(`No caption for ${name}`);
    const app = `data:image/png;base64,${fs.readFileSync(path.join(appDir, `${name}.png`)).toString('base64')}`;
    await tab.setContent(page(spec, app), { waitUntil: 'load' });
    await tab.evaluate(() => document.fonts.ready);
    const raw = path.join(appDir, `${name}.composed.png`);
    await tab.screenshot({ path: raw });
    const big = path.join(ROOT, 'ios-6.9', `${name}.png`);
    // App Store Connect refuses images with an alpha channel. The 6.5" set is the same image 1284 wide, 6 px off
    // the top and the bottom.
    execFileSync('convert', [raw, '-background', '#fefefe', '-alpha', 'remove', '-alpha', 'off', '-strip', `PNG24:${big}`]);
    execFileSync('convert', [big, '-resize', '1284x2790!', '-gravity', 'center', '-crop', '1284x2778+0+0', '+repage', '-alpha', 'off', '-strip', `PNG24:${path.join(ROOT, 'ios-6.5', `${name}.png`)}`]);
    fs.unlinkSync(raw);
    console.log('wrote', name);
  }
  await browser.close();
})().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
