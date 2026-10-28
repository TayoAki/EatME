/**
 * The character's 3D parts from Tripo (design/prompts/17-character-3d.md). Not used by the app yet: version 1.2
 * draws the 2D character. Text to 3D makes each part; the two bodies get Tripo's auto rig and preset clips.
 *
 * Usage:
 *   npm run character:3d -- balance              the Tripo credits left
 *   npm run character:3d -- generate [part ...]  text to 3D for the parts without a model (or the ones named)
 *   npm run character:3d -- rig [body ...]       rig check, then auto rig (biped, Mixamo skeleton)
 *   npm run character:3d -- animate [body ...]   the preset clips on each rigged body
 *   npm run character:3d -- wait                 waits for running tasks and downloads what finished
 * Options: --redo (generate named parts again; the earlier task stays in the manifest's history).
 *
 * Task ids, seeds and credits go to design/character-3d/manifest.json and Tripo's previews to
 * design/character-3d/previews/. Models go to design/character-3d/models/, which git ignores (several MB each).
 * Credits (October 2026): text to 3D with texture 20, auto rig 25, each clip 10; failed tasks are free.
 * Needs TRIPO_API_KEY.
 */
import { config } from 'dotenv';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

config({ quiet: true });

const API = 'https://openapi.tripo3d.ai/v3';
const DIR = path.join(process.cwd(), 'design', 'character-3d');
const MANIFEST = path.join(DIR, 'manifest.json');
const BRIEF = path.join(process.cwd(), 'design', 'prompts', '17-character-3d.md');

const STYLE =
  'Stylized 3D cartoon, mobile game avatar style: chunky rounded shapes, smooth clean surfaces, flat matte solid colors, no fine texture detail, no text, no logos.';
const NEGATIVE = {
  body: 'realistic, photo, skin pores, wrinkles, hair strands, text, letters, logo, watermark, pedestal, base, ground, multiple characters, extra limbs, weapon',
  prop: 'realistic, photo, text, letters, logo, watermark, pedestal, base, ground, head, face, body, mannequin, hands',
};

type Part = { kind: 'body' | 'prop'; faceLimit: number; subject: string };

const hairpiece = (style: string) =>
  `A single stylized 3D cartoon hairpiece on its own, made to sit on a big round cartoon head: ${style} medium brown, hollow underneath. No head, no face, no body.`;
const body = (who: 'man' | 'woman', build: string) =>
  `Full-body 3D cartoon character, a friendly young ${who} with chibi proportions: a big round head about one third of ${who === 'man' ? 'his' : 'her'} height on a short visible neck, ${build}, round ears. Smooth bald head. Smooth blank face with no eyes, eyebrows or mouth, only a small rounded nose. Plain white crew-neck t-shirt, plain gray jogger pants, simple dark gray sneakers. Simple rounded hands with short fingers. T-pose: arms straight out to the sides and clear of the body, legs straight and slightly apart, symmetrical, facing forward.`;

/** One model per option of the look (src/shared/character.ts); the app colors them. */
const PARTS: Record<string, Part> = {
  body_guy: { kind: 'body', faceLimit: 20000, subject: body('man', 'a short sturdy body') },
  body_girl: { kind: 'body', faceLimit: 20000, subject: body('woman', 'a short slim body with slightly narrower shoulders') },
  hair_short: { kind: 'prop', faceLimit: 8000, subject: hairpiece('short tidy hair with a soft fringe swept to one side. Chunky smooth sculpted clumps,') },
  hair_long: {
    kind: 'prop',
    faceLimit: 8000,
    subject: hairpiece(
      'long straight hair falling past the shoulders at the back and sides, a soft fringe parted in the middle, open at the front where the face goes. Chunky smooth sculpted clumps,',
    ),
  },
  hair_bun: {
    kind: 'prop',
    faceLimit: 8000,
    subject: hairpiece('hair pulled back smoothly into a round bun on top of the head, with a short soft fringe. Chunky smooth sculpted shapes,'),
  },
  hair_ponytail: {
    kind: 'prop',
    faceLimit: 8000,
    subject: hairpiece('hair pulled back smoothly into a high ponytail at the back that swings out, with a soft fringe. Chunky smooth sculpted clumps,'),
  },
  beard: {
    kind: 'prop',
    faceLimit: 5000,
    subject:
      'A single stylized 3D cartoon beard on its own, made for a big round cartoon head: a short rounded beard along the jaw line and chin, no moustache, open around the mouth. Chunky smooth sculpted shape, medium brown. No head, no face, no body.',
  },
  glasses_round: {
    kind: 'prop',
    faceLimit: 4000,
    subject:
      'A pair of stylized 3D cartoon glasses on their own: big perfectly round frames, thick chunky dark frames, clear flat lenses, short straight arms, facing forward. No face, no head.',
  },
  glasses_square: {
    kind: 'prop',
    faceLimit: 4000,
    subject:
      'A pair of stylized 3D cartoon glasses on their own: big square frames with rounded corners, thick chunky dark frames, clear flat lenses, short straight arms, facing forward. No face, no head.',
  },
  gear_headband: {
    kind: 'prop',
    faceLimit: 3000,
    subject: 'A stylized 3D cartoon sports sweatband headband on its own: a thick soft terry-cloth ring, perfectly round, plain white. No head.',
  },
  gear_wristband: {
    kind: 'prop',
    faceLimit: 2000,
    subject: 'A single stylized 3D cartoon sports wristband on its own: a short thick soft terry-cloth tube, plain white. No arm, no hand.',
  },
  gear_medal: {
    kind: 'prop',
    faceLimit: 4000,
    subject:
      'A stylized 3D cartoon gold medal on its own: a thick round gold medal with a raised star in the middle and a raised rim, hanging from a short blue V-shaped ribbon. No person.',
  },
  gear_glove: {
    kind: 'prop',
    faceLimit: 5000,
    subject:
      'A single stylized 3D cartoon boxing glove on its own, for the right hand: big, round and puffy, red with a white cuff, the thumb tucked along the side. No arm.',
  },
  gear_belt: {
    kind: 'prop',
    faceLimit: 6000,
    subject:
      'A stylized 3D cartoon boxing champion belt on its own, closed into a ring as if worn around a waist: a wide gold band, a big oval gold center plate with a raised star, two small gold side plates. No text, no person.',
  },
};
const BODIES = Object.keys(PARTS).filter((name) => PARTS[name].kind === 'body');

/** Mood clips from Tripo's preset library, which needs its v1.0 rig. There's no sleep preset for `doze`. */
const RIG_MODEL = 'v1.0-20240301';
const CLIPS = {
  idle: 'preset:biped:idle',
  wave: 'preset:biped:wave_goodbye_01',
  waiting: 'preset:biped:wait',
  cheer: 'preset:biped:cheer',
};

type TaskRecord = {
  taskId: string;
  status: string;
  startedAt: string;
  request: Record<string, unknown>;
  credits?: number;
  files?: Record<string, string>;
  output?: unknown;
  error?: string;
  history?: Omit<TaskRecord, 'history'>[];
};
/** Keyed "<step>:<part>", e.g. "model:body_guy", "rig-check:body_guy", "rig:body_guy", "clips:body_guy". */
type Manifest = { tasks: Record<string, TaskRecord> };

const FINAL = new Set(['success', 'failed', 'cancelled', 'banned', 'expired', 'unknown']);

function readManifest(): Manifest {
  return existsSync(MANIFEST) ? (JSON.parse(readFileSync(MANIFEST, 'utf8')) as Manifest) : { tasks: {} };
}

function saveManifest(manifest: Manifest) {
  mkdirSync(DIR, { recursive: true });
  writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
}

async function tripo<T>(method: 'GET' | 'POST', endpoint: string, body?: object): Promise<T> {
  const key = process.env.TRIPO_API_KEY;
  if (!key) throw new Error('Set TRIPO_API_KEY.');
  for (let attempt = 1; ; attempt++) {
    const response = await fetch(`${API}${endpoint}`, {
      method,
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    });
    const json = (await response.json().catch(() => ({}))) as { code?: number; message?: string; suggestion?: string; data?: T };
    if (response.ok && json.code === 0 && json.data !== undefined) return json.data;
    // Busy: Tripo limits requests and tasks at once. Wait and try again, five times at most.
    if ((response.status === 429 || response.status >= 500) && attempt < 5) {
      await new Promise((resolve) => setTimeout(resolve, 15000 * attempt));
      continue;
    }
    throw new Error(`Tripo ${method} ${endpoint}: HTTP ${response.status}, code ${json.code}: ${json.message ?? ''} ${json.suggestion ?? ''}`.trim());
  }
}

const seed = () => Math.floor(Math.random() * 1_000_000_000);

async function start(manifest: Manifest, label: string, endpoint: string, request: Record<string, unknown>) {
  const { task_id } = await tripo<{ task_id: string }>('POST', endpoint, request);
  const previous = manifest.tasks[label];
  let history: TaskRecord['history'];
  if (previous) {
    const { history: earlier = [], ...rest } = previous;
    history = [...earlier, rest];
  }
  manifest.tasks[label] = { taskId: task_id, status: 'queued', startedAt: new Date().toISOString(), request, ...(history ? { history } : {}) };
  saveManifest(manifest);
  console.log(`${label}: started ${task_id}`);
}

function checkBrief(name: string, prompt: string) {
  if (!readFileSync(BRIEF, 'utf8').includes(prompt)) throw new Error(`${name}'s prompt differs from design/prompts/17-character-3d.md`);
}

async function generate(manifest: Manifest, names: string[], redo: boolean) {
  for (const name of names.length ? names : Object.keys(PARTS)) {
    const part = PARTS[name];
    if (!part) throw new Error(`No part "${name}". Parts: ${Object.keys(PARTS).join(', ')}`);
    const done = manifest.tasks[`model:${name}`];
    if (done && done.status !== 'failed' && done.status !== 'cancelled' && !redo) continue;
    const prompt = `${part.subject} ${STYLE}`;
    checkBrief(name, prompt);
    await start(manifest, `model:${name}`, '/generation/text-to-model', {
      // H series: 20 credits with texture. The P series (low-poly topology) starts at 100.
      model: 'v3.1-20260211',
      prompt,
      negative_prompt: NEGATIVE[part.kind],
      face_limit: part.faceLimit,
      texture: true,
      pbr: false,
      model_seed: seed(),
      image_seed: seed(),
      texture_seed: seed(),
    });
  }
}

/** Waits for the task, then downloads every file it made: models to models/, previews to previews/. */
async function finish(manifest: Manifest, label: string) {
  const record = manifest.tasks[label];
  for (;;) {
    const task = await tripo<{ status: string; progress?: number; output?: Record<string, unknown>; credits_consumed?: number; error_msg?: string }>(
      'GET',
      `/tasks/${record.taskId}`,
    );
    if (!FINAL.has(task.status)) {
      process.stdout.write(`${label}: ${task.status} ${task.progress ?? 0}%   \r`);
      await new Promise((resolve) => setTimeout(resolve, 10000));
      continue;
    }
    record.status = task.status;
    record.credits = task.credits_consumed;
    record.output = task.output;
    if (task.status !== 'success') record.error = task.error_msg ?? task.status;
    saveManifest(manifest);
    break;
  }
  if (record.status !== 'success') return console.log(`${label}: ${record.status} (${record.error})`);
  const name = label.replace(':', '-').replace(/^model-/, '');
  const urls = Object.entries(record.output as Record<string, unknown>).flatMap(([key, value]) =>
    typeof value === 'string' && value.startsWith('http') ? [[key, value] as const] : [],
  );
  record.files = {};
  for (const [key, url] of urls) {
    const extension = path.extname(new URL(url).pathname) || '.bin';
    const preview = key.includes('image');
    const file = path.join(preview ? 'previews' : 'models', `${name}${key === 'model_url' || key === 'rendered_image_url' ? '' : `-${key.replace(/_url$/, '')}`}${extension}`);
    mkdirSync(path.join(DIR, path.dirname(file)), { recursive: true });
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${label}: downloading ${key} failed (HTTP ${response.status})`);
    writeFileSync(path.join(DIR, file), Buffer.from(await response.arrayBuffer()));
    record.files[key] = file;
  }
  // Tripo's download links expire; the files and the task id are what's kept.
  record.output = Object.fromEntries(Object.entries(record.output as Record<string, unknown>).filter(([, value]) => !(typeof value === 'string' && value.startsWith('http'))));
  saveManifest(manifest);
  console.log(`${label}: ${record.credits ?? '?'} credits → ${Object.values(record.files).join(', ')}`);
}

async function waitAll(manifest: Manifest) {
  for (const [label, record] of Object.entries(manifest.tasks)) {
    if (!FINAL.has(record.status) || (record.status === 'success' && !record.files)) await finish(manifest, label);
  }
}

async function rig(manifest: Manifest, names: string[]) {
  for (const name of names.length ? names : BODIES) {
    const model = manifest.tasks[`model:${name}`];
    if (model?.status !== 'success') throw new Error(`${name} has no model yet.`);
    await start(manifest, `rig-check:${name}`, '/animations/rig-check', { input: model.taskId });
    await finish(manifest, `rig-check:${name}`);
    const check = manifest.tasks[`rig-check:${name}`].output as { riggable?: boolean; rig_type?: string } | undefined;
    if (!check?.riggable) throw new Error(`${name}: Tripo can't rig it (${JSON.stringify(check)}).`);
    await start(manifest, `rig:${name}`, '/animations/rig', { input: model.taskId, model: RIG_MODEL, rig_type: 'biped', spec: 'mixamo', out_format: 'glb' });
  }
}

async function animate(manifest: Manifest, names: string[]) {
  for (const name of names.length ? names : BODIES) {
    const rigged = manifest.tasks[`rig:${name}`];
    if (rigged?.status !== 'success') throw new Error(`${name} isn't rigged yet.`);
    for (const [clip, preset] of Object.entries(CLIPS)) {
      await start(manifest, `clip-${clip}:${name}`, '/animations/retarget', { input: rigged.taskId, animation: preset, out_format: 'glb', animate_in_place: true });
    }
  }
}

async function main() {
  const [command, ...rest] = process.argv.slice(2);
  const names = rest.filter((arg) => !arg.startsWith('--'));
  const manifest = readManifest();
  if (command === 'balance') return console.log(await tripo('GET', '/account/balance'));
  if (command === 'generate') await generate(manifest, names, rest.includes('--redo'));
  else if (command === 'rig') await rig(manifest, names);
  else if (command === 'animate') await animate(manifest, names);
  else if (command !== 'wait') throw new Error('Commands: balance, generate, rig, animate, wait.');
  await waitAll(manifest);
}

main().catch((error: Error) => {
  console.error(error.message);
  process.exit(1);
});
