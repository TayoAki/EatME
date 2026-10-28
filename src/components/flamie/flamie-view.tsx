import { useEffect, useId, useMemo, type ReactNode } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import Svg, { Circle, Defs, Ellipse, G, LinearGradient, Path, RadialGradient, Stop } from 'react-native-svg';

import type { FlamieMood, FlamieStageKey } from '@/shared/flamie';

/**
 * Flamie (FLAMIE.md): the streak flame with a face, from the Ember concept (28 October), in a 200 × 200 box. Taller and
 * brighter by stage; the mood picks the face and colors. `tiny` draws a bolder face for the Home streak pill.
 */
export type FlamieLook = {
  mood: FlamieMood | 'cheer';
  stage: FlamieStageKey;
  /** Size by stage (the sheet); off in the pill, which keeps one size. */
  grow?: boolean;
  tiny?: boolean;
};
type PartLayer = 'all' | 'base' | 'eyes-open' | 'eyes-closed';

const INK = '#2A2026';
const BOTTOM = 182;
const STAGE_SCALE: Record<FlamieStageKey, number> = { ember: 0.62, spark: 0.72, flame: 0.82, blaze: 0.92, bonfire: 1, supernova: 1.04 };
const CONFETTI = ['#FF8A3D', '#4A90E2', '#12A150', '#E94A8B', '#FFC23D', '#7B61FF'];

function palette(mood: FlamieLook['mood'], stage: FlamieStageKey) {
  if (mood === 'embers') return { top: '#F2C9A8', bottom: '#E6A98A', core: '#FBE6D4', face: '#7A5A48' };
  if (stage === 'supernova') return { top: '#FFD36B', bottom: '#FF6A1F', core: '#FFF6CF', face: INK };
  if (stage === 'blaze' || stage === 'bonfire') return { top: '#FFC04D', bottom: '#FF5A1F', core: '#FFE08A', face: INK };
  return { top: '#FFB347', bottom: '#FF6A2B', core: '#FFE08A', face: INK };
}

/** How big the flame is drawn: the stage (when growing), a little smaller while waiting or asleep. */
export function flamieScale({ mood, stage, grow = true }: FlamieLook) {
  const base = grow ? STAGE_SCALE[stage] : 0.98;
  return base * (mood === 'waiting' ? 0.94 : mood === 'embers' ? 0.9 : 1);
}

function Eyes({ mood, tiny, color, open }: { mood: FlamieLook['mood']; tiny: boolean; color: string; open: boolean }) {
  const s = tiny ? 1.5 : 0.85;
  const cy = tiny ? 132 : 136;
  const gap = tiny ? 17 : 15 * s;
  const width = 4.5 * s * (tiny ? 1.25 : 1);
  return (
    <G>
      {[100 - gap, 100 + gap].map((x) => {
        if (!open || mood === 'embers') {
          return <Path key={x} d={`M${x - 7 * s} ${cy} q${7 * s} ${5 * s} ${14 * s} 0`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" />;
        }
        if (mood === 'lit' || mood === 'cheer') {
          return <Path key={x} d={`M${x - 7 * s} ${cy + 2 * s} q${7 * s} ${-9 * s} ${14 * s} 0`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" />;
        }
        return (
          <G key={x}>
            <Ellipse cx={x} cy={cy} rx={5.5 * s} ry={7 * s} fill={color} />
            <Circle cx={x + 2 * s} cy={cy - 3 * s} r={1.8 * s} fill="#FFFFFF" />
          </G>
        );
      })}
    </G>
  );
}

function Mouth({ mood, tiny, color }: { mood: FlamieLook['mood']; tiny: boolean; color: string }) {
  const s = tiny ? 1.4 : 0.85;
  const cx = 100;
  const cy = tiny ? 132 : 136;
  const width = 4.5 * s * (tiny ? 1.2 : 1);
  if (mood === 'cheer') return <Path d={`M${cx - 10 * s} ${cy + 12 * s} q${10 * s} ${15 * s} ${20 * s} 0 z`} fill={color} />;
  if (mood === 'lit') return <Path d={`M${cx - 9 * s} ${cy + 13 * s} q${9 * s} ${10 * s} ${18 * s} 0`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" />;
  if (mood === 'embers') return <Path d={`M${cx - 7 * s} ${cy + 18 * s} q${7 * s} ${-6 * s} ${14 * s} 0`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" />;
  return <Ellipse cx={cx} cy={cy + 15 * s} rx={4.5 * s} ry={5 * s} fill={color} />;
}

/** Flamie's parts in the 200 × 200 box; the animated view puts the eyes on their own layers so they can blink. */
export function flamieParts(look: FlamieLook, layer: PartLayer, id: string): ReactNode {
  const { mood, stage, tiny = false } = look;
  const colors = palette(mood, stage);
  const scale = flamieScale(look);
  const anchor = `translate(100 ${BOTTOM}) scale(${scale}) translate(-100 -${BOTTOM})`;
  if (layer === 'eyes-open' || layer === 'eyes-closed') {
    return (
      <G transform={anchor}>
        <Eyes mood={mood} tiny={tiny} color={colors.face} open={layer === 'eyes-open'} />
      </G>
    );
  }
  const big = (stage === 'bonfire' || stage === 'supernova') && mood !== 'embers' && look.grow !== false;
  return (
    <G>
      <Defs>
        <LinearGradient id={`${id}-flame`} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor={colors.top} />
          <Stop offset="1" stopColor={colors.bottom} />
        </LinearGradient>
        <RadialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <Stop offset="0" stopColor="#FFC24D" stopOpacity={0.55} />
          <Stop offset="1" stopColor="#FFC24D" stopOpacity={0} />
        </RadialGradient>
      </Defs>
      {stage === 'supernova' && mood !== 'embers' && look.grow !== false ? <Circle cx={100} cy={118} r={96} fill={`url(#${id}-glow)`} /> : null}
      <G transform={anchor}>
        {big ? (
          <G>
            {/* Two little flames at its sides from 30 days in a row. */}
            <Path d="M46 182 C30 176 22 160 26 142 C28 132 34 126 38 118 C42 132 48 136 54 138 C52 150 56 168 66 182 Z" fill={`url(#${id}-flame)`} />
            <Path d="M154 182 C170 176 178 160 174 142 C172 132 166 126 162 118 C158 132 152 136 146 138 C148 150 144 168 134 182 Z" fill={`url(#${id}-flame)`} />
          </G>
        ) : null}
        <Path
          d="M100 18 C118 52 160 74 160 124 C160 160 134 182 100 182 C66 182 40 160 40 124 C40 96 58 82 66 62 C74 80 80 86 88 88 C86 62 90 40 100 18 Z"
          fill={`url(#${id}-flame)`}
        />
        <Path d="M100 86 C112 104 132 116 132 140 C132 160 118 172 100 172 C82 172 68 160 68 140 C68 120 88 108 100 86 Z" fill={colors.core} />
        {mood !== 'embers' ? (
          <G>
            <Ellipse cx={tiny ? 70 : 78.75} cy={tiny ? 148 : 144.5} rx={tiny ? 9 : 6} ry={tiny ? 6 : 3.8} fill="#FFB3A7" opacity={0.8} />
            <Ellipse cx={tiny ? 130 : 121.25} cy={tiny ? 148 : 144.5} rx={tiny ? 9 : 6} ry={tiny ? 6 : 3.8} fill="#FFB3A7" opacity={0.8} />
          </G>
        ) : null}
        <Mouth mood={mood} tiny={tiny} color={colors.face} />
        {layer === 'all' ? <Eyes mood={mood} tiny={tiny} color={colors.face} open /> : null}
      </G>
    </G>
  );
}

type FlamieViewProps = FlamieLook & {
  /** Width and height in points. */
  size: number;
  /** A still drawing; Reduce Motion makes Flamie still everywhere. */
  still?: boolean;
  /** A new value plays the cheer (a hop and confetti) once. */
  cheerKey?: number;
  accessibilityLabel?: string;
};

/** Flamie, alive: it flickers, blinks while it waits, sends up sparks once it's a Blaze, dozes as embers, cheers. */
export function FlamieView({ size, still = false, cheerKey, accessibilityLabel, ...look }: FlamieViewProps) {
  const reduceMotion = useReducedMotion();
  // Gradient ids are global on the web: each Flamie gets its own.
  const id = `flamie${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  return (
    <View accessible={!!accessibilityLabel} accessibilityRole="image" accessibilityLabel={accessibilityLabel} style={{ width: size, height: size }}>
      {still || reduceMotion ? (
        <Svg width={size} height={size} viewBox="0 0 200 200">
          {flamieParts(look, 'all', id)}
        </Svg>
      ) : (
        <LiveFlamie size={size} cheerKey={cheerKey} look={look} id={id} />
      )}
    </View>
  );
}

function Layer({ size, children }: { size: number; children: ReactNode }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" style={{ position: 'absolute', left: 0, top: 0 }}>
      {children}
    </Svg>
  );
}

function LiveFlamie({ size, cheerKey, look, id }: { size: number; cheerKey?: number; look: FlamieLook; id: string }) {
  const { mood, stage } = look;
  const flicker = useSharedValue(0);
  const blink = useSharedValue(0);
  const drift = useSharedValue(0);
  const hop = useSharedValue(0);
  const burst = useSharedValue(1);
  const asleep = mood === 'embers';
  const sparks = !asleep && look.grow !== false && (stage === 'blaze' || stage === 'bonfire' || stage === 'supernova');

  useEffect(() => {
    flicker.value = withRepeat(withTiming(1, { duration: asleep ? 2600 : 900, easing: Easing.inOut(Easing.sin) }), -1, true);
    blink.value = mood === 'waiting' ? withRepeat(withSequence(withDelay(2600, withTiming(1, { duration: 70 })), withTiming(0, { duration: 110 })), -1) : 0;
    drift.value = asleep || sparks ? withRepeat(withTiming(1, { duration: asleep ? 2600 : 1800, easing: Easing.linear }), -1) : 0;
    return () => [flicker, blink, drift].forEach(cancelAnimation);
  }, [mood, asleep, sparks, flicker, blink, drift]);

  useEffect(() => {
    if (cheerKey === undefined) return;
    hop.value = withSequence(withTiming(-size * 0.12, { duration: 220, easing: Easing.out(Easing.quad) }), withSpring(0, { damping: 7, stiffness: 170 }));
    burst.value = 0;
    burst.value = withTiming(1, { duration: 1100, easing: Easing.out(Easing.cubic) });
  }, [cheerKey, size, hop, burst]);

  // The flame sways from its base: a little taller and leaning, back and forth.
  const sway = asleep ? 1.5 : 4;
  const bodyStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: hop.value },
      { scaleY: 1 + (asleep ? 0.02 : 0.045) * flicker.value },
      { skewX: `${(flicker.value - 0.5) * sway}deg` },
    ],
  }));
  const openEyes = useAnimatedStyle(() => ({ opacity: 1 - blink.value }));
  const closedEyes = useAnimatedStyle(() => ({ opacity: blink.value }));
  const fill = { position: 'absolute', left: 0, top: 0, width: size, height: size } as const;
  const top = size * (BOTTOM - 164 * flamieScale(look)) / 200;
  const pieces = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        angle: -Math.PI / 2 + ((i - 5.5) / 5.5) * 1.3,
        distance: size * (0.32 + ((i * 37) % 10) / 45),
        color: CONFETTI[i % CONFETTI.length],
        spin: ((i * 53) % 360) - 180,
      })),
    [size],
  );

  return (
    <>
      <Animated.View style={[fill, { transformOrigin: `${size / 2}px ${(size * BOTTOM) / 200}px` }, bodyStyle]}>
        <Layer size={size}>{flamieParts(look, 'base', id)}</Layer>
        <Animated.View style={[fill, openEyes]}>
          <Layer size={size}>{flamieParts(look, 'eyes-open', id)}</Layer>
        </Animated.View>
        {mood === 'waiting' ? (
          <Animated.View style={[fill, closedEyes]}>
            <Layer size={size}>{flamieParts(look, 'eyes-closed', id)}</Layer>
          </Animated.View>
        ) : null}
      </Animated.View>
      {sparks ? [0, 0.33, 0.66].map((delay, i) => <Rising key={delay} progress={drift} delay={delay} x={size * (0.38 + i * 0.12)} y={top} size={Math.max(3, size * 0.03)} />) : null}
      {asleep ? <Zee progress={drift} x={size * 0.72} y={size * 0.28} size={size * 0.12} /> : null}
      {cheerKey !== undefined
        ? pieces.map((piece, i) => <Piece key={i} progress={burst} originX={size / 2} originY={size * 0.45} size={Math.max(4, size * 0.035)} {...piece} />)
        : null}
    </>
  );
}

/** A spark rising off the flame's tip and fading. */
function Rising({ progress, delay, x, y, size }: { progress: SharedValue<number>; delay: number; x: number; y: number; size: number }) {
  const style = useAnimatedStyle(() => {
    const p = (progress.value + delay) % 1;
    return { opacity: p < 0.2 ? p / 0.2 : 1 - (p - 0.2) / 0.8, transform: [{ translateY: -size * 9 * p }, { translateX: Math.sin(p * 6) * size }] };
  });
  return <Animated.View style={[{ position: 'absolute', left: x, top: y, width: size, height: size, borderRadius: size, backgroundColor: '#FFC24D' }, style]} />;
}

/** A "z" that floats up and fades while Flamie dozes. */
function Zee({ progress, x, y, size }: { progress: SharedValue<number>; x: number; y: number; size: number }) {
  const style = useAnimatedStyle(() => {
    const p = progress.value;
    return { opacity: p < 0.15 ? p / 0.15 : 1 - (p - 0.15) / 0.85, transform: [{ translateY: -size * 1.4 * p }, { translateX: size * 0.4 * p }] };
  });
  return (
    <Animated.View style={[{ position: 'absolute', left: x, top: y }, style]}>
      <Text style={{ fontSize: size, fontWeight: '800', color: '#9A9AA0' }}>z</Text>
    </Animated.View>
  );
}

/** One piece of confetti thrown from Flamie, falling as it fades. */
function Piece({
  progress,
  originX,
  originY,
  size,
  angle,
  distance,
  color,
  spin,
}: {
  progress: SharedValue<number>;
  originX: number;
  originY: number;
  size: number;
  angle: number;
  distance: number;
  color: string;
  spin: number;
}) {
  const style = useAnimatedStyle(() => {
    const p = progress.value;
    return {
      opacity: p >= 1 ? 0 : p < 0.7 ? 1 : 1 - (p - 0.7) / 0.3,
      transform: [
        { translateX: Math.cos(angle) * distance * p },
        { translateY: Math.sin(angle) * distance * p + distance * 0.6 * p * p },
        { rotate: `${spin * p}deg` },
      ],
    };
  });
  return <Animated.View style={[{ position: 'absolute', left: originX, top: originY, width: size * 1.8, height: size, borderRadius: 2, backgroundColor: color }, style]} />;
}
