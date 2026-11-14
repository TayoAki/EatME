// Composes the App Store screenshots (store/screenshots/README.md): a dark background with a soft glow in the
// screenshot's color, the Premium pill for Premium features, a two-line headline with an accent word and a line under
// it, the real app screen in a phone with an iOS status bar, and callouts: cards cut from real screens and shown
// bigger, and food labels that point at foods in the photo. Writes ios-6.9 (1320 x 2868) and ios-6.5 (1284 x 2778),
// PNG without alpha.
//
//   node store/screenshots/tools/compose.cjs --app <dir> [--frame plain|apple --bezel <png>] [name ...]
//
// <dir>/<capture>.png are the app screens as capture.cjs takes them (440 x 956 points at 3x, the whole screen).
// The frame is our own plain phone. `--frame apple` puts the screen in Apple's iPhone 18 Pro Max bezel instead
// (Apple Design Resources, downloaded from developer.apple.com and never committed): its license only covers
// mock-ups of apps that run only on Apple platforms, and Weight Class is on Google Play too (README.md → Frame).
// Needs Playwright's Chromium, the Inter and Inter Display fonts, and ImageMagick (`convert`).
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { chromium } = require('playwright');

// store/screenshots, from this script's own path.
const ROOT = path.dirname(path.dirname(path.resolve(process.argv[1])));

const W = 1320;
const H = 2868;
const PT = 3; // capture pixels per point
const SCREEN_W = 960; // the phone's screen on the canvas
const K = SCREEN_W / (440 * PT); // canvas pixels per capture pixel
const SCREEN_H = Math.round(956 * PT * K);
const SCREEN_R = Math.round(56 * PT * K); // the display's corner radius, 56 pt
const RIM = 18;
const PHONE_TOP = 700;
const SCREEN_X = (W - SCREEN_W) / 2;
const SCREEN_Y = PHONE_TOP + RIM;

// Every screenshot: the capture in the phone, the status bar time (light = white status bar), the colors, the
// headline (<a>…</a> is the accent), the line under it, callouts (crop [x, y, w, h] in points of a capture, zoom
// against the phone, top-left corner on the canvas) and food labels (`to` is the food, in points of the capture).
const SPECS = {
  '01-snap': {
    capture: 'camera', light: true, time: '3:45', accent: '#F2665E',
    lines: ['Snap a meal.', 'Get the <a>numbers</a>.'],
    sub: ['Weight Class names the foods and estimates', 'calories, protein, carbs and fat.'],
    callouts: [{ capture: 'scan-result', crop: [20, 436, 400, 222], zoom: 1.18, at: [130, 2190] }],
  },
  '02-estimate': {
    capture: 'meal', time: '3:45', accent: '#F4A63A',
    lines: ['An estimate', 'you can <a>check</a>'],
    sub: ['Every food with its grams and calories.', 'Change any number in a tap.'],
    chips: [
      { name: 'Avocado', detail: '50 g · 80 kcal', color: '#2FB36B', y: 990, to: [167, 187] },
      { name: 'Salmon', detail: '90 g · 169 kcal', color: '#F2665E', side: 'right', y: 1150, to: [220, 277] },
      { name: 'Edamame', detail: '60 g · 84 kcal', color: '#8BC34A', y: 1400, to: [143, 300] },
      { name: 'Sushi rice', detail: '150 g · 194 kcal', color: '#F4A63A', side: 'right', y: 1560, to: [176, 356] },
    ],
  },
  '03-glp1': {
    capture: 'home-glp1', time: '3:45', accent: '#14B8A6', accentText: '#2DD4BF',
    lines: ['Built for', '<a>GLP-1</a> medicines'],
    sub: ['Doses, pens and injection sites, with', 'protein, fiber and water first.'],
    callouts: [{ capture: 'glp1', crop: [20, 597, 400, 196], radius: 20, zoom: 1.15, at: [158, 2312] }],
  },
  '04-flamie': {
    capture: 'flamie', time: '3:45', accent: '#FF7A1A', accentText: '#FF8A33',
    lines: ['Meet <a>Flamie</a>,', 'your streak flame'],
    sub: ['It grows with every day you log,', 'never with your weight.'],
  },
  '05-home': {
    capture: 'home', time: '3:45', accent: '#2FB36B', accentText: '#3DD07F',
    lines: ['See what’s', '<a>left</a> today'],
    sub: ['Calories, protein, carbs and fat,', 'against a plan made for you.'],
    callouts: [
      { capture: 'home-meals', crop: [20, 276, 400, 110], radius: 22, zoom: 1.2, at: [56, 2196] },
      { capture: 'home-meals', crop: [20, 398, 400, 110], radius: 22, zoom: 1.2, at: [217, 2516] },
    ],
  },
  '06-what-to-order': {
    capture: 'what-to-order', time: '3:45', accent: '#4F8EF7', accentText: '#6EA4FF', premium: true,
    lines: ['Eating out?', 'See <a>what fits</a>'],
    sub: ['Chain menus ranked for what’s left', 'of your day, with their own numbers.'],
    callouts: [{ capture: 'what-to-order', crop: [20, 212, 400, 100], zoom: 1.2, at: [137, 1150] }],
  },
  '07-plan-tomorrow': {
    capture: 'plan', time: '7:05', accent: '#B15FB0', accentText: '#D17FD0', premium: true,
    lines: ['Plan tomorrow', 'in <a>one tap</a>'],
    sub: ['A draft of your day from meals you', 'already eat. Swap a meal or shuffle.'],
    // Over the breakfast and lunch rows, and the grocery line above them (no money in screenshots, 2.3.7).
    callouts: [{ capture: 'plan', crop: [20, 414, 400, 254], zoom: 1.15, at: [158, 1484] }],
  },
  '08-weight': {
    capture: 'weight', time: '3:45', accent: '#2FB36B', accentText: '#3DD07F',
    lines: ['See the <a>trend</a>,', 'not the noise'],
    sub: ['A smoothed weight trend with', 'your goal and milestones.'],
    callouts: [{ capture: 'weight', crop: [20, 563, 400, 322], zoom: 1.12, at: [171, 1950] }],
  },
  '09-calm': {
    capture: 'calm', time: '3:45', accent: '#A78BFA', accentText: '#C4B5FD',
    lines: ['Calm mode for', '<a>calmer</a> days'],
    sub: ['Swap calorie counts for simple', 'words whenever you like.'],
    callouts: [{ capture: 'calm', crop: [20, 219, 400, 146], zoom: 1.2, at: [137, 1170] }],
  },
  '10-search': {
    capture: 'search', time: '3:45', accent: '#22C3E6', accentText: '#5AD8F2',
    lines: ['Search or scan,', '<a>no AI</a> needed'],
    sub: ['Everyday foods and barcodes,', 'weighed your way.'],
  },
};

const hex = (h, a) => {
  const n = parseInt(h.slice(1), 16);
  return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`;
};
const line = (text) => text.replace(/&/g, '&amp;').replace(/<a>/g, '<span class="accent">').replace(/<\/a>/g, '</span>');

// The status bar and home indicator, in points on the 440 pt screen (measured on iPhone 16 Pro Max screenshots).
function statusBar(time, light) {
  const c = light ? '#fff' : '#000';
  const p = (v) => (v * PT * K).toFixed(1);
  return `<div class="sb">
    <div style="position:absolute;left:${p(49.1)}px;top:${p(20.3)}px;color:${c};font:600 ${p(19.8)}px/1 'Inter Display';letter-spacing:-0.3px">${time}</div>
    <svg style="position:absolute;left:${p(314.2)}px;top:${p(22)}px" width="${p(23.3)}" height="${p(15.5)}" viewBox="0 0 54 36"><rect x="0" y="24" width="9" height="12" rx="2.5" fill="${c}"/><rect x="15" y="17" width="9" height="19" rx="2.5" fill="${c}"/><rect x="30" y="9" width="9" height="27" rx="2.5" fill="${c}"/><rect x="45" y="0" width="9" height="36" rx="2.5" fill="${c}"/></svg>
    <svg style="position:absolute;left:${p(345.3)}px;top:${p(22.4)}px" width="${p(18.1)}" height="${p(14.2)}" viewBox="0 -1 44 33" preserveAspectRatio="none"><path fill="${c}" d="M22 5.5c6.9 0 13.2 2.6 17.9 6.9.6.6 1.6.6 2.2 0l1.4-1.5c.6-.6.6-1.6-.1-2.2C37.8 3.4 30.2.4 22 .4S6.2 3.4.6 8.7c-.7.6-.7 1.6-.1 2.2l1.4 1.5c.6.6 1.6.6 2.2 0C8.8 8.1 15.1 5.5 22 5.5z"/><path fill="${c}" d="M22 14.6c4.4 0 8.4 1.6 11.5 4.3.6.5 1.6.5 2.1-.1l1.5-1.5c.6-.6.6-1.6-.1-2.2C33 11.7 27.7 9.6 22 9.6s-11 2.1-15 5.5c-.7.6-.7 1.6-.1 2.2l1.5 1.5c.6.6 1.5.6 2.1.1 3.1-2.7 7.1-4.3 11.5-4.3z"/><path fill="${c}" d="M22 22.6c1.9 0 3.6.6 5 1.7.7.5.8 1.5.2 2.1l-4.1 4.3c-.6.6-1.6.6-2.2 0l-4.1-4.3c-.6-.6-.5-1.6.2-2.1 1.4-1.1 3.1-1.7 5-1.7z"/></svg>
    <svg style="position:absolute;left:${p(371.1)}px;top:${p(22)}px" width="${p(34)}" height="${p(16.8)}" viewBox="0 0 79 39"><rect x="1.5" y="1.5" width="69" height="36" rx="10.5" fill="none" stroke="${c}" stroke-opacity="0.4" stroke-width="3"/><rect x="6" y="6" width="51" height="27" rx="6.5" fill="${c}"/><path d="M75 13h1.5c1.4 0 2.5 1.1 2.5 2.5v8c0 1.4-1.1 2.5-2.5 2.5H75z" fill="${c}" fill-opacity="0.4"/></svg>
    <div style="position:absolute;left:50%;bottom:${p(8)}px;width:${p(134)}px;height:${p(5)}px;margin-left:-${p(67)}px;border-radius:${p(3)}px;background:${c}"></div>
  </div>`;
}

// A piece of a real screen, `zoom` times the size it has in the phone, clipped to the card's rounded corners.
function callout(c, src) {
  const s = K * (c.zoom ?? 1.2);
  const [x, y, w, h] = c.crop;
  const px = (v) => (v * PT * s).toFixed(1);
  return `<div class="callout" style="left:${c.at[0]}px;top:${c.at[1]}px;width:${px(w)}px;height:${px(h)}px;border-radius:${px(c.radius ?? 24)}px">
    <img src="${src(c.capture)}" style="left:${px(-x)}px;top:${px(-y)}px;width:${px(440)}px">
  </div>`;
}

// A food label at the canvas edge; the page script draws its line to the dot on the food once it has its width.
function chip(c) {
  const tx = SCREEN_X + c.to[0] * PT * K;
  const ty = SCREEN_Y + c.to[1] * PT * K;
  const edge = c.side === 'right' ? 'right:44px' : 'left:44px';
  return `<div class="chip" data-tx="${tx}" data-ty="${ty}" data-side="${c.side ?? 'left'}" data-color="${c.color}" style="${edge};top:${c.y}px"><span class="dot" style="background:${c.color}"></span><span>${c.name}</span><span class="detail">${c.detail}</span></div>`;
}

const DRAW_LINES = `<svg id="lines" width="${W}" height="${H}"></svg><script>
  document.fonts.ready.then(() => {
    let out = '';
    for (const chip of document.querySelectorAll('.chip')) {
      const r = chip.getBoundingClientRect();
      const tx = +chip.dataset.tx, ty = +chip.dataset.ty;
      const x = chip.dataset.side === 'right' ? r.left + 4 : r.right - 4;
      const y = r.top + r.height / 2;
      out += '<line x1="' + x + '" y1="' + y + '" x2="' + tx + '" y2="' + ty + '" stroke="#fff" stroke-width="5" stroke-linecap="round"/>' +
        '<circle cx="' + tx + '" cy="' + ty + '" r="16" fill="#fff"/><circle cx="' + tx + '" cy="' + ty + '" r="9" fill="' + chip.dataset.color + '"/>';
    }
    document.getElementById('lines').innerHTML = out;
    document.body.dataset.ready = '1';
  });
</script>`;

function page(spec, src, frame) {
  const accent = spec.accent;
  const screen = `<div class="screen"><img src="${src(spec.capture)}">${statusBar(spec.time, spec.light)}</div>`;
  const phone =
    frame.kind === 'apple'
      ? `${screen}<img class="bezel" src="${frame.bezel}" style="left:${(SCREEN_X - 75 * K).toFixed(1)}px;top:${(SCREEN_Y - 66 * K).toFixed(1)}px;width:${(1470 * K).toFixed(1)}px">`
      : `<div class="phone"></div>${screen}`;
  const top = 150 + (spec.premium ? 104 : 0);
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  html,body{margin:0;padding:0}
  body{width:${W}px;height:${H}px;overflow:hidden;position:relative;background:#0d0d0e;-webkit-font-smoothing:antialiased}
  .bg{position:absolute;inset:0;background:
    radial-gradient(1100px 1100px at 50% 1700px, ${hex(accent, 0.3)} 0%, ${hex(accent, 0.1)} 45%, transparent 75%),
    radial-gradient(900px 640px at 12% 6%, ${hex(accent, 0.16)} 0%, transparent 70%),
    radial-gradient(1400px 900px at 0% 0%, rgba(255,255,255,0.06), transparent 70%),
    linear-gradient(180deg, #161617 0%, #0b0b0c 100%)}
  .pill{position:absolute;left:96px;top:150px;height:76px;box-sizing:border-box;padding:0 34px 0 28px;border-radius:38px;background:${hex(accent, 0.16)};border:2px solid ${hex(accent, 0.55)};color:#fff;display:flex;align-items:center;gap:14px;font:700 32px/1 'Inter';letter-spacing:3px}
  .pill svg{width:30px;height:30px}
  h1{position:absolute;left:96px;right:80px;top:${top}px;margin:0;font:800 122px/118px 'Inter Display';letter-spacing:-2px;word-spacing:4px;color:#fff}
  h1 .accent{color:${spec.accentText ?? accent}}
  .sub{position:absolute;left:96px;right:96px;top:${top + 2 * 118 + 34}px;margin:0;font:400 46px/62px 'Inter';letter-spacing:-0.3px;color:#a1a1a8}
  .phone{position:absolute;left:${SCREEN_X - RIM}px;top:${PHONE_TOP}px;width:${SCREEN_W + 2 * RIM}px;height:${SCREEN_H + 2 * RIM}px;border-radius:${SCREEN_R + RIM}px;background:#040404;box-shadow:inset 0 0 0 3px #2c2c2f,0 0 0 2px #4a4a4f,0 70px 160px rgba(0,0,0,0.7)}
  .screen{position:absolute;left:${SCREEN_X}px;top:${SCREEN_Y}px;width:${SCREEN_W}px;height:${SCREEN_H}px;border-radius:${SCREEN_R}px;overflow:hidden;background:#fff}
  .screen>img{position:absolute;left:0;top:0;width:${SCREEN_W}px;height:${SCREEN_H}px}
  .sb{position:absolute;inset:0}
  .bezel{position:absolute}
  .callout{position:absolute;overflow:hidden;background:#fff;box-shadow:0 50px 110px rgba(0,0,0,0.55),0 10px 30px rgba(0,0,0,0.35),0 0 0 2px rgba(255,255,255,0.9)}
  .callout img{position:absolute;max-width:none}
  #lines{position:absolute;left:0;top:0;filter:drop-shadow(0 4px 10px rgba(0,0,0,0.45))}
  .chip{position:absolute;box-sizing:border-box;height:100px;padding:0 32px 0 28px;border-radius:50px;background:#fff;display:flex;align-items:center;gap:14px;box-shadow:0 24px 60px rgba(0,0,0,0.45);font:600 38px/1 'Inter';color:#111;white-space:nowrap}
  .chip .dot{width:22px;height:22px;border-radius:11px;flex:none}
  .chip .detail{color:#6e6e73;font-weight:500}
  </style></head><body>
  <div class="bg"></div>
  ${spec.premium ? `<div class="pill"><svg viewBox="0 0 24 24"><path fill="${accent}" d="M12 2.6l2.83 6.13 6.7.73-5 4.53 1.39 6.6L12 17.24 6.08 20.6l1.39-6.6-5-4.53 6.7-.73z"/></svg><span>PREMIUM</span></div>` : ''}
  <h1>${spec.lines.map(line).join('<br>')}</h1>
  <p class="sub">${spec.sub.map(line).join('<br>')}</p>
  ${phone}
  ${spec.chips ? DRAW_LINES : '<script>document.body.dataset.ready = "1"</script>'}
  ${(spec.chips ?? []).map(chip).join('')}
  ${(spec.callouts ?? []).map((c) => callout(c, src)).join('')}
  </body></html>`;
}

(async () => {
  const args = process.argv.slice(2);
  const option = (name) => {
    const at = args.indexOf(`--${name}`);
    return at < 0 ? undefined : args.splice(at, 2)[1];
  };
  const appDir = option('app');
  const kind = option('frame') ?? 'plain';
  const bezel = option('bezel');
  if (!appDir || !['plain', 'apple'].includes(kind) || (kind === 'apple' && !bezel)) {
    throw new Error('Usage: node store/screenshots/tools/compose.cjs --app <dir> [--frame plain|apple --bezel <png>] [name ...]');
  }
  const data = (file) => `data:image/png;base64,${fs.readFileSync(file).toString('base64')}`;
  const src = (capture) => data(path.join(appDir, `${capture}.png`));
  const frame = { kind, bezel: bezel && data(bezel) };
  for (const dir of ['ios-6.9', 'ios-6.5']) fs.mkdirSync(path.join(ROOT, dir), { recursive: true });
  const browser = await chromium.launch();
  const tab = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  for (const name of args.length ? args : Object.keys(SPECS)) {
    const spec = SPECS[name];
    if (!spec) throw new Error(`No screenshot ${name}`);
    await tab.setContent(page(spec, src, frame), { waitUntil: 'load' });
    await tab.evaluate(() => document.fonts.ready);
    await tab.waitForFunction(() => document.body.dataset.ready === '1');
    const raw = path.join(appDir, `${name}.composed.png`);
    await tab.screenshot({ path: raw });
    const big = path.join(ROOT, 'ios-6.9', `${name}.png`);
    // App Store Connect refuses images with an alpha channel. The 6.5" set is the same image 1284 wide, 6 px off
    // the top and the bottom.
    execFileSync('convert', [raw, '-background', '#0d0d0e', '-alpha', 'remove', '-alpha', 'off', '-strip', `PNG24:${big}`]);
    execFileSync('convert', [big, '-resize', '1284x2790!', '-gravity', 'center', '-crop', '1284x2778+0+0', '+repage', '-alpha', 'off', '-strip', `PNG24:${path.join(ROOT, 'ios-6.5', `${name}.png`)}`]);
    fs.unlinkSync(raw);
    console.log('wrote', name);
  }
  await browser.close();
})().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
