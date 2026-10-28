import type { ReactNode } from 'react';
import { Circle, Ellipse, G, Path, Rect } from 'react-native-svg';

import { BOTTOM_COLORS, HAIR_COLORS, SKIN_TONES, TOP_COLORS, type GearKey, type Look } from '@/shared/character';

/**
 * The character's drawing (CHARACTER.md §2), in a 200 × 290 box: flat cartoon parts built from the look, the
 * strength tier (protein days, never weight), worn gear and the mood. `CharacterView` animates the layers.
 */
export const FIGURE_WIDTH = 200;
export const FIGURE_HEIGHT = 290;

export type FigureMood = 'happy' | 'waiting' | 'missing' | 'cheer';
export type FigureOptions = {
  look: Look;
  strength: 0 | 1 | 2;
  /** Worn gear (only earned items). */
  gear: Partial<Record<GearKey, boolean>>;
  /** Energy: a warm glow behind the character. */
  glow: boolean;
  mood: FigureMood;
};
/** Base: everything but what animates; eyes and the waving arm are their own layers when animated. */
export type FigureLayer = 'all' | 'base' | 'eyes-open' | 'eyes-closed' | 'wave-arm';

const INK = '#2A2026';
const MOUTH = '#6A2B2B';
const GLOVE = '#D93A3A';
const GOLD = '#E7B53C';

export function shade(hex: string, factor: number) {
  const n = parseInt(hex.slice(1), 16);
  const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => Math.max(0, Math.min(255, Math.round(v * factor))));
  return `#${c.map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}

/** Sizes from the build the person picked and the strength they earned. */
export function figureGeometry(look: Look, strength: number) {
  const size = ({ slim: 0, medium: 1, full: 2 } as const)[look.build] ?? 1;
  const girl = look.body === 'girl';
  const shoulder = 34 + size * 5 + strength * 7 - (girl ? 3 : 0);
  const waist = 28 + size * 11 + strength * 2 - (girl ? 2 : 0);
  return {
    size,
    shoulder,
    waist,
    belly: size * 7,
    armWidth: 15 + strength * 4 + size * 3 - (girl ? 1 : 0),
    legWidth: 20 + size * 4 + strength,
    headRx: 41 + size * 2,
    /** Shoulder joints (the waving arm turns around the right one). */
    left: { x: 100 - shoulder + 8, y: 142 },
    right: { x: 100 + shoulder - 8, y: 142 },
  };
}

type Point = { x: number; y: number };

function Arm({ points, width, skin, sleeve, wristband, gloves }: { points: Point[]; width: number; skin: string; sleeve: string; wristband?: string; gloves: boolean }) {
  const [a, b] = points;
  const end = points[points.length - 1];
  const before = points[points.length - 2];
  const at = (p: Point, q: Point, t: number) => ({ x: p.x + (q.x - p.x) * t, y: p.y + (q.y - p.y) * t });
  const sleeveEnd = at(a, b, 0.42);
  const bandFrom = at(before, end, 0.62);
  const bandTo = at(before, end, 0.8);
  return (
    <G>
      <Path d={points.map((p, i) => `${i ? 'L' : 'M'}${p.x} ${p.y}`).join(' ')} fill="none" stroke={skin} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
      <Path d={`M${a.x} ${a.y} L${sleeveEnd.x} ${sleeveEnd.y}`} stroke={sleeve} strokeWidth={width + 4} strokeLinecap="round" />
      {wristband && !gloves ? <Path d={`M${bandFrom.x} ${bandFrom.y} L${bandTo.x} ${bandTo.y}`} stroke={wristband} strokeWidth={width + 3} /> : null}
      {gloves ? (
        <G>
          <Path d={`M${bandFrom.x} ${bandFrom.y} L${at(before, end, 0.86).x} ${at(before, end, 0.86).y}`} stroke="#FFFFFF" strokeWidth={width + 4} />
          <Circle cx={end.x} cy={end.y} r={width * 0.95} fill={GLOVE} />
          <Ellipse cx={end.x - width * 0.3} cy={end.y - width * 0.3} rx={width * 0.28} ry={width * 0.18} fill="#FFFFFF" opacity={0.35} />
        </G>
      ) : (
        <Circle cx={end.x} cy={end.y} r={width * 0.62} fill={skin} />
      )}
    </G>
  );
}

function Eyes({ mood, girl, open }: { mood: FigureMood; girl: boolean; open: boolean }) {
  return (
    <G>
      {[83, 117].map((x) => {
        if (!open || mood === 'missing') {
          return <Path key={x} d={`M${x - 8} 87 Q${x} 92 ${x + 8} 87`} fill="none" stroke={INK} strokeWidth={4.5} strokeLinecap="round" />;
        }
        if (mood === 'cheer') {
          return <Path key={x} d={`M${x - 8} 88 Q${x} 76 ${x + 8} 88`} fill="none" stroke={INK} strokeWidth={4.5} strokeLinecap="round" />;
        }
        const up = mood === 'waiting' ? -2.5 : 0;
        const look = mood === 'waiting' ? 1.5 : 0;
        const outer = x < 100 ? -1 : 1;
        return (
          <G key={x}>
            <Ellipse cx={x} cy={86} rx={8.5} ry={10} fill="#FFFFFF" />
            <Circle cx={x + look} cy={87 + up} r={5.6} fill="#4A2F22" />
            <Circle cx={x + look} cy={87 + up} r={2.8} fill="#111111" />
            <Circle cx={x + 2} cy={84 + up} r={1.7} fill="#FFFFFF" />
            {girl ? <Path d={`M${x + outer * 6} 78 L${x + outer * 10} 74`} stroke={INK} strokeWidth={2.5} strokeLinecap="round" /> : null}
          </G>
        );
      })}
    </G>
  );
}

const MOUTHS: Record<FigureMood, ReactNode> = {
  happy: <Path d="M87 109 Q100 122 113 109" fill="none" stroke={MOUTH} strokeWidth={4} strokeLinecap="round" />,
  waiting: <Path d="M93 112 Q100 116 107 112" fill="none" stroke={MOUTH} strokeWidth={4} strokeLinecap="round" />,
  missing: <Path d="M92 116 Q100 110 108 116" fill="none" stroke={MOUTH} strokeWidth={4} strokeLinecap="round" />,
  cheer: (
    <G>
      <Path d="M85 107 Q100 130 115 107 Z" fill={MOUTH} />
      <Ellipse cx={100} cy={117} rx={7} ry={4} fill="#E86B6B" />
    </G>
  ),
};

/** The arm raised in a wave (its own layer, turned around the right shoulder). */
export function waveArmPoints(look: Look, strength: number): Point[] {
  const g = figureGeometry(look, strength);
  return [g.right, { x: g.right.x + 24, y: 116 }, { x: g.right.x + 28, y: 84 }];
}

export function figureParts({ look, strength, gear, glow, mood }: FigureOptions, layer: FigureLayer): ReactNode {
  const g = figureGeometry(look, strength);
  const girl = look.body === 'girl';
  const skin = SKIN_TONES[look.skin] ?? SKIN_TONES[1];
  const skinShade = shade(skin, 0.86);
  const hair = HAIR_COLORS[look.hairColor];
  const top = TOP_COLORS[look.top];
  const bottom = BOTTOM_COLORS[look.bottom];
  const pose = mood === 'cheer' ? 'up' : mood === 'happy' ? 'wave' : 'down';
  const wristband = gear.wristbands ? shade(top, 0.82) : undefined;
  const armProps = { width: g.armWidth, skin, sleeve: top, wristband, gloves: !!gear.gloves };

  if (layer === 'eyes-open' || layer === 'eyes-closed') return <Eyes mood={mood} girl={girl} open={layer === 'eyes-open'} />;
  if (layer === 'wave-arm') return pose === 'wave' ? <Arm points={waveArmPoints(look, strength)} {...armProps} /> : null;

  const leftDown = [g.left, { x: g.left.x - 8 - g.size * 3, y: 204 }];
  const rightDown = [g.right, { x: g.right.x + 8 + g.size * 3, y: 204 }];
  const leftUp = [g.left, { x: g.left.x - 22, y: 112 }, { x: g.left.x - 30, y: 80 }];
  const rightUp = [g.right, { x: g.right.x + 22, y: 112 }, { x: g.right.x + 30, y: 80 }];
  const hrx = g.headRx;

  return (
    <G>
      {glow ? (
        <G>
          <Circle cx={100} cy={150} r={96} fill="#FFB347" opacity={0.16} />
          <Circle cx={100} cy={150} r={74} fill="#FFB347" opacity={0.14} />
        </G>
      ) : null}

      {/* Hair behind the head */}
      {look.hair === 'long' ? <Path d="M54 82 C48 26 152 26 146 82 L150 150 C140 160 124 158 118 148 L82 148 C76 158 60 160 50 150 Z" fill={hair} /> : null}
      {look.hair === 'bun' ? <Circle cx={100} cy={24} r={17} fill={hair} /> : null}
      {look.hair === 'ponytail' ? <Path d="M138 56 C170 58 176 100 160 128 C154 108 146 90 132 78 Z" fill={hair} /> : null}

      {/* Legs and shoes */}
      <Rect x={100 - g.legWidth - 2} y={200} width={g.legWidth} height={60} rx={g.legWidth / 2.4} fill={bottom} />
      <Rect x={102} y={200} width={g.legWidth} height={60} rx={g.legWidth / 2.4} fill={bottom} />
      <Ellipse cx={100 - g.legWidth / 2 - 4} cy={262} rx={g.legWidth / 2 + 6} ry={8} fill="#2B2B33" />
      <Ellipse cx={100 + g.legWidth / 2 + 4} cy={262} rx={g.legWidth / 2 + 6} ry={8} fill="#2B2B33" />

      {/* Arms (the waving one is its own layer when animated) */}
      <Arm points={pose === 'up' ? leftUp : leftDown} {...armProps} />
      {pose === 'up' ? <Arm points={rightUp} {...armProps} /> : null}
      {pose === 'down' ? <Arm points={rightDown} {...armProps} /> : null}
      {pose === 'wave' && layer === 'all' ? <Arm points={waveArmPoints(look, strength)} {...armProps} /> : null}

      {/* Neck and shirt */}
      <Rect x={90} y={112} width={20} height={24} fill={skinShade} />
      <Path
        d={`M${100 - g.shoulder} 146 C${100 - g.shoulder} 134 ${100 - g.shoulder + 6} 130 ${100 - g.shoulder + 16} 130 L${100 + g.shoulder - 16} 130 C${100 + g.shoulder - 6} 130 ${100 + g.shoulder} 134 ${100 + g.shoulder} 146 C${100 + g.waist + g.belly} 172 ${100 + g.waist + g.belly} 196 ${100 + g.waist} 206 L${100 - g.waist} 206 C${100 - g.waist - g.belly} 196 ${100 - g.waist - g.belly} 172 ${100 - g.shoulder} 146 Z`}
        fill={top}
      />
      <Path d="M88 130 Q100 144 112 130" fill="none" stroke={shade(top, 0.8)} strokeWidth={4} strokeLinecap="round" />
      {gear.belt ? (
        <G>
          <Rect x={100 - g.waist - 2} y={194} width={2 * g.waist + 4} height={12} rx={4} fill={GOLD} />
          <Rect x={88} y={190} width={24} height={20} rx={5} fill={shade(GOLD, 0.82)} stroke={GOLD} strokeWidth={2} />
        </G>
      ) : null}
      {gear.medal ? (
        <G>
          <Path d="M93 136 L100 158 L107 136" fill="none" stroke="#4A90E2" strokeWidth={4} />
          <Circle cx={100} cy={166} r={10} fill="#FFC23D" stroke="#E09A1A" strokeWidth={3} />
        </G>
      ) : null}

      {/* Head */}
      <Circle cx={100 - hrx} cy={88} r={9} fill={skin} />
      <Circle cx={100 + hrx} cy={88} r={9} fill={skin} />
      <Ellipse cx={100} cy={80} rx={hrx} ry={45} fill={skin} />
      {look.facialHair === 'beard' ? (
        <Path
          d={`M${100 - hrx + 6} 88 C${100 - hrx + 8} 118 84 126 100 126 C116 126 ${100 + hrx - 8} 118 ${100 + hrx - 6} 88 C${100 + hrx - 12} 104 112 108 100 108 C88 108 ${100 - hrx + 12} 104 ${100 - hrx + 6} 88 Z`}
          fill={hair}
          opacity={0.92}
        />
      ) : null}
      {look.facialHair === 'stubble' ? (
        <Path d={`M${100 - hrx + 8} 92 C${100 - hrx + 10} 116 84 124 100 124 C116 124 ${100 + hrx - 10} 116 ${100 + hrx - 8} 92 C${100 + hrx - 14} 106 112 112 100 112 C88 112 ${100 - hrx + 14} 106 ${100 - hrx + 8} 92 Z`} fill={hair} opacity={0.32} />
      ) : null}

      {/* Face */}
      {layer === 'all' ? <Eyes mood={mood} girl={girl} open /> : null}
      {mood === 'missing' ? (
        <Path d="M74 70 L90 66 M110 66 L126 70" stroke={hair} strokeWidth={4.5} strokeLinecap="round" />
      ) : (
        <Path
          d={(() => {
            const y = mood === 'waiting' || mood === 'cheer' ? 66 : 70;
            return `M74 ${y + 1} Q82 ${y - 4} 91 ${y} M109 ${y} Q118 ${y - 4} 126 ${y + 1}`;
          })()}
          fill="none"
          stroke={look.hair === 'bald' ? shade(skin, 0.6) : hair}
          strokeWidth={4.5}
          strokeLinecap="round"
        />
      )}
      <Path d="M99 95 q5 4 0 8" fill="none" stroke={skinShade} strokeWidth={3} strokeLinecap="round" />
      {mood !== 'missing' ? (
        <G>
          <Ellipse cx={71} cy={101} rx={7} ry={4.5} fill="#FF8F8F" opacity={0.45} />
          <Ellipse cx={129} cy={101} rx={7} ry={4.5} fill="#FF8F8F" opacity={0.45} />
        </G>
      ) : null}
      {MOUTHS[mood]}
      {look.glasses === 'round' ? (
        <G>
          <Circle cx={83} cy={86} r={12} fill="#FFFFFF" fillOpacity={0.12} stroke={INK} strokeWidth={3} />
          <Circle cx={117} cy={86} r={12} fill="#FFFFFF" fillOpacity={0.12} stroke={INK} strokeWidth={3} />
          <Path d={`M95 85 Q100 81 105 85 M71 84 L${100 - hrx + 2} 81 M129 84 L${100 + hrx - 2} 81`} fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />
        </G>
      ) : null}
      {look.glasses === 'square' ? (
        <G>
          <Rect x={70} y={76} width={26} height={20} rx={5} fill="#FFFFFF" fillOpacity={0.12} stroke={INK} strokeWidth={3} />
          <Rect x={104} y={76} width={26} height={20} rx={5} fill="#FFFFFF" fillOpacity={0.12} stroke={INK} strokeWidth={3} />
          <Path d={`M96 85 L104 85 M70 82 L${100 - hrx + 2} 80 M130 82 L${100 + hrx - 2} 80`} fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />
        </G>
      ) : null}

      {/* Hair in front */}
      {look.hair === 'short' ? <Path d="M58 80 C54 36 80 24 102 26 C126 26 148 40 142 80 C138 62 128 54 114 52 C100 62 80 62 66 58 C62 64 60 72 58 80 Z" fill={hair} /> : null}
      {look.hair === 'long' || look.hair === 'ponytail' ? <Path d="M58 82 C55 38 80 26 100 28 C120 26 146 38 142 82 C134 60 116 48 100 44 C84 48 66 60 58 82 Z" fill={hair} /> : null}
      {look.hair === 'bun' ? <Path d="M60 74 C58 42 80 32 100 32 C120 32 142 42 140 74 C130 56 116 50 100 50 C84 50 70 56 60 74 Z" fill={hair} /> : null}
      {look.hair === 'buzz' ? <Path d="M60 70 C60 38 80 30 100 30 C120 30 140 38 140 70 C130 54 116 48 100 48 C84 48 70 54 60 70 Z" fill={hair} opacity={0.9} /> : null}
      {look.hair === 'bald' ? <Ellipse cx={86} cy={50} rx={12} ry={6} fill="#FFFFFF" opacity={0.25} /> : null}
      {gear.headband ? (
        <Path d={`M${100 - hrx + 2} 64 Q100 54 ${100 + hrx - 2} 64 L${100 + hrx - 1} 73 Q100 63 ${100 - hrx + 1} 73 Z`} fill={shade(top, 0.92)} />
      ) : null}
    </G>
  );
}
