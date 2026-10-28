import { useEffect, useMemo, type ReactNode } from 'react';
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
import Svg from 'react-native-svg';

import { FIGURE_HEIGHT, FIGURE_WIDTH, figureGeometry, figureParts, type FigureOptions } from './figure';

type CharacterViewProps = FigureOptions & {
  /** Height in points; the width follows the drawing. */
  height: number;
  /** A still drawing (editor thumbnails); Reduce Motion makes every character still. */
  still?: boolean;
  /** A new value plays the cheer (a jump and confetti) once. */
  cheerKey?: number;
  accessibilityLabel?: string;
};

const VIEW_BOX = `0 0 ${FIGURE_WIDTH} ${FIGURE_HEIGHT}`;
const CONFETTI = ['#FF8A3D', '#4A90E2', '#12A150', '#E94A8B', '#FFC23D', '#7B61FF'];

/** The character, alive: it breathes and blinks, waves when you've shown up, dozes while you're away, cheers. */
export function CharacterView({ height, still = false, cheerKey, accessibilityLabel, ...options }: CharacterViewProps) {
  const reduceMotion = useReducedMotion();
  const width = (height * FIGURE_WIDTH) / FIGURE_HEIGHT;
  return (
    <View accessible={!!accessibilityLabel} accessibilityRole="image" accessibilityLabel={accessibilityLabel} style={{ width, height }}>
      {still || reduceMotion ? (
        <Svg width={width} height={height} viewBox={VIEW_BOX}>
          {figureParts(options, 'all')}
        </Svg>
      ) : (
        <LiveCharacter width={width} height={height} cheerKey={cheerKey} options={options} />
      )}
    </View>
  );
}

function Layer({ width, height, children }: { width: number; height: number; children: ReactNode }) {
  return (
    <Svg width={width} height={height} viewBox={VIEW_BOX} style={{ position: 'absolute', left: 0, top: 0 }}>
      {children}
    </Svg>
  );
}

function LiveCharacter({ width, height, cheerKey, options }: { width: number; height: number; cheerKey?: number; options: FigureOptions }) {
  const { mood } = options;
  const breathe = useSharedValue(0);
  const blink = useSharedValue(0);
  const wave = useSharedValue(0);
  const jump = useSharedValue(0);
  const burst = useSharedValue(1);
  const doze = useSharedValue(0);

  useEffect(() => {
    breathe.value = withRepeat(withTiming(1, { duration: mood === 'missing' ? 2200 : 1400, easing: Easing.inOut(Easing.sin) }), -1, true);
    blink.value =
      mood === 'happy' || mood === 'waiting'
        ? withRepeat(withSequence(withDelay(2800, withTiming(1, { duration: 70 })), withTiming(0, { duration: 110 })), -1)
        : 0;
    wave.value =
      mood === 'happy'
        ? withRepeat(
            withSequence(
              withDelay(1800, withTiming(1, { duration: 200 })),
              withTiming(-1, { duration: 260 }),
              withTiming(1, { duration: 260 }),
              withTiming(0, { duration: 200 }),
            ),
            -1,
          )
        : 0;
    doze.value = mood === 'missing' ? withRepeat(withTiming(1, { duration: 2600, easing: Easing.linear }), -1) : 0;
    return () => [breathe, blink, wave, doze].forEach(cancelAnimation);
  }, [mood, breathe, blink, wave, doze]);

  useEffect(() => {
    if (cheerKey === undefined) return;
    jump.value = withSequence(withTiming(-height * 0.09, { duration: 240, easing: Easing.out(Easing.quad) }), withSpring(0, { damping: 7, stiffness: 170 }));
    burst.value = 0;
    burst.value = withTiming(1, { duration: 1200, easing: Easing.out(Easing.cubic) });
  }, [cheerKey, height, jump, burst]);

  const bodyStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: jump.value - 2 * breathe.value }, { scaleY: 1 + 0.012 * breathe.value }],
  }));
  const openEyes = useAnimatedStyle(() => ({ opacity: 1 - blink.value }));
  const closedEyes = useAnimatedStyle(() => ({ opacity: blink.value }));
  const shoulder = figureGeometry(options.look, options.strength).right;
  const armStyle = useAnimatedStyle(() => ({ transform: [{ rotate: `${12 * wave.value}deg` }] }));
  const pieces = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        angle: -Math.PI / 2 + ((i - 6.5) / 6.5) * 1.25,
        distance: height * (0.32 + ((i * 37) % 10) / 40),
        color: CONFETTI[i % CONFETTI.length],
        spin: ((i * 53) % 360) - 180,
      })),
    [height],
  );

  return (
    <>
      <Animated.View style={[{ position: 'absolute', left: 0, top: 0, width, height, transformOrigin: 'center bottom' }, bodyStyle]}>
        <Layer width={width} height={height}>
          {figureParts(options, 'base')}
        </Layer>
        <Animated.View style={[{ position: 'absolute', left: 0, top: 0, width, height }, openEyes]}>
          <Layer width={width} height={height}>
            {figureParts(options, 'eyes-open')}
          </Layer>
        </Animated.View>
        {mood === 'happy' || mood === 'waiting' ? (
          <Animated.View style={[{ position: 'absolute', left: 0, top: 0, width, height }, closedEyes]}>
            <Layer width={width} height={height}>
              {figureParts(options, 'eyes-closed')}
            </Layer>
          </Animated.View>
        ) : null}
        {mood === 'happy' ? (
          <Animated.View
            style={[
              {
                position: 'absolute',
                left: 0,
                top: 0,
                width,
                height,
                transformOrigin: `${(shoulder.x / FIGURE_WIDTH) * width}px ${(shoulder.y / FIGURE_HEIGHT) * height}px`,
              },
              armStyle,
            ]}>
            <Layer width={width} height={height}>
              {figureParts(options, 'wave-arm')}
            </Layer>
          </Animated.View>
        ) : null}
      </Animated.View>
      {mood === 'missing' ? (
        <>
          <Zee progress={doze} delay={0} x={width * 0.74} y={height * 0.12} size={height * 0.075} />
          <Zee progress={doze} delay={0.5} x={width * 0.84} y={height * 0.05} size={height * 0.055} />
        </>
      ) : null}
      {cheerKey !== undefined
        ? pieces.map((piece, i) => <Piece key={i} progress={burst} originX={width / 2} originY={height * 0.3} size={Math.max(5, height * 0.03)} {...piece} />)
        : null}
    </>
  );
}

/** A "z" that floats up and fades while the character dozes. */
function Zee({ progress, delay, x, y, size }: { progress: SharedValue<number>; delay: number; x: number; y: number; size: number }) {
  const style = useAnimatedStyle(() => {
    const p = (progress.value + delay) % 1;
    return { opacity: p < 0.15 ? p / 0.15 : 1 - (p - 0.15) / 0.85, transform: [{ translateY: -size * 1.6 * p }, { translateX: size * 0.4 * p }] };
  });
  return (
    <Animated.View style={[{ position: 'absolute', left: x, top: y }, style]}>
      <Text style={{ fontSize: size, fontWeight: '800', color: '#9A9AA0' }}>z</Text>
    </Animated.View>
  );
}

/** One piece of confetti thrown from the character's head, falling as it fades. */
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
