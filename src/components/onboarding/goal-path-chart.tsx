import { useEffect, useState } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedProps,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, Defs, Line, LinearGradient, Path, Stop } from 'react-native-svg';

import { useCountUp } from '@/components/ui/motion';
import { colors } from '@/constants/colors';
import { haptics } from '@/lib/haptics';
import type { UnitSystem } from '@/shared/onboarding';
import { kgToLb } from '@/shared/units';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const HEIGHT = 190;
/** Room under the plot for the month labels. */
const AXIS = 24;
const PAD_LEFT = 8;
/** Room for the goal dot's pulse on the right and at the top. */
const PAD_RIGHT = 22;
const PAD_TOP = 24;
/** How long the line takes to reach the goal. */
export const DRAW_MS = 1300;
/** Small dots the line passes on its way (a quarter, half and three quarters of the way). */
const WAYPOINTS = [0.25, 0.5, 0.75];

type GoalPathChartProps = {
  startKg: number;
  goalKg: number;
  goalDate: Date;
  unit: UnitSystem;
  /** Milliseconds before the line starts drawing (while the screen rises in). */
  delay?: number;
};

/** Kilograms to 0.1 when the weight has a fraction (the pickers' half kilograms), else whole; pounds whole. */
const kgDecimals = (kg: number) => (Number.isInteger(Math.round(kg * 10) / 10) ? 0 : 1);

/** A weight in the person's units, as the pickers show it. */
export function weightIn(kg: number, unit: UnitSystem, decimals = kgDecimals(kg)) {
  return unit === 'metric' ? `${(Math.round(kg * 10) / 10).toFixed(decimals)} kg` : `${Math.round(kgToLb(kg))} lb`;
}

/** Month (or, past two years, year) labels at their real place between today and the goal date. */
function timeTicks(from: Date, to: Date) {
  const span = to.getTime() - from.getTime();
  if (span <= 0) return [];
  const at = (d: Date) => (d.getTime() - from.getTime()) / span;
  const ticks: { at: number; label: string }[] = [];
  const months = (to.getFullYear() - from.getFullYear()) * 12 + to.getMonth() - from.getMonth();
  if (months <= 24) {
    const every = Math.max(1, Math.ceil(months / 5));
    for (let i = 1; i <= months; i += every) {
      const d = new Date(from.getFullYear(), from.getMonth() + i, 1);
      if (d >= to) break;
      ticks.push({ at: at(d), label: d.toLocaleDateString([], { month: 'short' }) });
    }
  } else {
    const years = to.getFullYear() - from.getFullYear();
    const every = Math.max(1, Math.ceil(years / 5));
    for (let y = from.getFullYear() + 1; y <= to.getFullYear(); y += every) {
      const d = new Date(y, 0, 1);
      if (d >= to) break;
      ticks.push({ at: at(d), label: String(y) });
    }
  }
  // Labels too close to either end would run into "Today" or the goal date above them.
  return ticks.filter((t) => t.at > 0.1 && t.at < 0.9);
}

/**
 * The path from today's weight to the goal at the chosen pace: a straight line, because the goal date assumes the
 * pace holds (Sources → Daily calories says so). It draws itself, the goal weight counts down (or up) with it, and
 * the goal dot lands with a pulse. Reduce Motion shows it finished.
 */
export function GoalPathChart({ startKg, goalKg, goalDate, unit, delay = 450 }: GoalPathChartProps) {
  const reduceMotion = useReducedMotion();
  const window = useWindowDimensions();
  // The card's inner width: the screen's 24-point sides and the card's 20-point padding, until it's measured.
  const [width, setWidth] = useState(Math.max(200, window.width - 88));
  const losing = goalKg < startKg;

  const x0 = PAD_LEFT;
  const x1 = width - PAD_RIGHT;
  const yHigh = PAD_TOP + 6;
  const yLow = HEIGHT - AXIS - 8;
  const y0 = losing ? yHigh : yLow;
  const y1 = losing ? yLow : yHigh;
  const base = HEIGHT - AXIS;
  const length = Math.hypot(x1 - x0, y1 - y0);
  const today = new Date();
  const ticks = timeTicks(today, goalDate);

  const drawn = useSharedValue(reduceMotion ? 1 : 0);
  const landed = useSharedValue(reduceMotion ? 1 : 0);
  const pulse = useSharedValue(0);
  useEffect(() => {
    if (reduceMotion) return;
    // Eases out like the goal weight counting beside it, so the two arrive together.
    drawn.value = withDelay(delay, withTiming(1, { duration: DRAW_MS, easing: Easing.out(Easing.cubic) }));
    landed.value = withDelay(delay + DRAW_MS - 80, withSpring(1, { damping: 7, stiffness: 160 }));
    pulse.value = withDelay(
      delay + DRAW_MS,
      withRepeat(withTiming(1, { duration: 1500, easing: Easing.out(Easing.quad) }), -1),
    );
    const tick = setTimeout(() => haptics.light(), delay + DRAW_MS);
    return () => clearTimeout(tick);
  }, [reduceMotion, delay, drawn, landed, pulse]);

  const lineProps = useAnimatedProps(() => ({ strokeDashoffset: length * (1 - drawn.value) }));
  const areaProps = useAnimatedProps(() => ({ opacity: interpolate(drawn.value, [0.35, 1], [0, 1], 'clamp') }));
  const goalDotProps = useAnimatedProps(() => ({ r: 7 * landed.value }));
  const pulseProps = useAnimatedProps(() => ({
    r: 7 + 14 * pulse.value,
    opacity: landed.value * 0.3 * (1 - pulse.value),
  }));
  const waypointProps = [
    useAnimatedProps(() => ({
      r: interpolate(drawn.value, [WAYPOINTS[0] - 0.02, WAYPOINTS[0] + 0.04], [0, 3.5], 'clamp'),
    })),
    useAnimatedProps(() => ({
      r: interpolate(drawn.value, [WAYPOINTS[1] - 0.02, WAYPOINTS[1] + 0.04], [0, 3.5], 'clamp'),
    })),
    useAnimatedProps(() => ({
      r: interpolate(drawn.value, [WAYPOINTS[2] - 0.02, WAYPOINTS[2] + 0.04], [0, 3.5], 'clamp'),
    })),
  ];

  // The goal weight on the right counts from today's weight to the goal while the line draws.
  const shown = useCountUp(1, { duration: DRAW_MS, delay });
  const goalLabel = weightIn(startKg + (goalKg - startKg) * shown, unit, kgDecimals(goalKg));
  const finalGoal = weightIn(goalKg, unit);
  const dateLabel = goalDate.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <View
      accessible
      accessibilityRole="image"
      accessibilityLabel={`A line from ${weightIn(startKg, unit)} today to ${finalGoal} around ${dateLabel}.`}>
      <View className="flex-row justify-between">
        <View>
          <Text className="text-[13px] text-muted">Today</Text>
          <Text className="mt-0.5 text-[20px] font-bold tracking-tight text-ink">{weightIn(startKg, unit)}</Text>
        </View>
        <View className="items-end">
          <Text className="text-[13px] text-muted">{dateLabel}</Text>
          <Text
            className="mt-0.5 text-[20px] font-bold tracking-tight text-ink"
            style={{ fontVariant: ['tabular-nums'] }}>
            {goalLabel}
          </Text>
        </View>
      </View>

      <View
        className="mt-3"
        style={{ height: HEIGHT }}
        onLayout={(e) => setWidth(Math.round(e.nativeEvent.layout.width))}>
        <Svg width={width} height={HEIGHT}>
          <Defs>
            <LinearGradient id="goalPathFill" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor={colors.ink} stopOpacity={0.12} />
              <Stop offset="1" stopColor={colors.ink} stopOpacity={0} />
            </LinearGradient>
          </Defs>
          <Line x1={x0} y1={base} x2={x1} y2={base} stroke={colors.line} strokeWidth={1} />
          <Line x1={x0} y1={y1} x2={x1} y2={y1} stroke={colors.faint} strokeWidth={1} strokeDasharray="3 5" />
          {ticks.map((t) => (
            <Line
              key={t.label}
              x1={x0 + t.at * (x1 - x0)}
              y1={base}
              x2={x0 + t.at * (x1 - x0)}
              y2={base + 4}
              stroke={colors.faint}
              strokeWidth={1}
            />
          ))}
          <AnimatedPath
            d={`M${x0} ${y0} L${x1} ${y1} L${x1} ${base} L${x0} ${base} Z`}
            fill="url(#goalPathFill)"
            animatedProps={areaProps}
          />
          <AnimatedPath
            d={`M${x0} ${y0} L${x1} ${y1}`}
            stroke={colors.ink}
            strokeWidth={3.5}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${length} ${length}`}
            animatedProps={lineProps}
          />
          {WAYPOINTS.map((f, i) => (
            <AnimatedCircle
              key={f}
              cx={x0 + f * (x1 - x0)}
              cy={y0 + f * (y1 - y0)}
              fill={colors.canvas}
              stroke={colors.ink}
              strokeWidth={2}
              animatedProps={waypointProps[i]}
            />
          ))}
          <Circle cx={x0} cy={y0} r={5} fill={colors.ink} />
          <AnimatedCircle cx={x1} cy={y1} fill={colors.ink} animatedProps={pulseProps} />
          <AnimatedCircle
            cx={x1}
            cy={y1}
            fill={colors.ink}
            stroke={colors.canvas}
            strokeWidth={2.5}
            animatedProps={goalDotProps}
          />
        </Svg>
        {ticks.map((t) => (
          <Text
            key={t.label}
            className="absolute text-center text-[12px] text-muted"
            style={{ left: x0 + t.at * (x1 - x0) - 24, width: 48, top: base + 7 }}>
            {t.label}
          </Text>
        ))}
      </View>
    </View>
  );
}
