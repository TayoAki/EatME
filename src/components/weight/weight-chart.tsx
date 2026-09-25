import { useState } from 'react';
import { View } from 'react-native';
import Svg, { Circle, Line, Path, Text as SvgText } from 'react-native-svg';

import { colors } from '@/constants/colors';
import { fromIsoDate } from '@/lib/time';

/** A weigh-in and the trend that day, in the unit shown (kg or lb). */
export type ChartPoint = { date: string; value: number; trend: number };

type WeightChartProps = {
  points: ChartPoint[];
  /** Goal weight in the same unit, drawn as a dashed line when it is near enough to the weigh-ins. */
  goal: number | null;
  unit: 'kg' | 'lb';
};

const HEIGHT = 210;
const PAD = { top: 14, right: 14, bottom: 26, left: 44 };

const shortDate = (iso: string) => fromIsoDate(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
const dayNumber = (iso: string) => fromIsoDate(iso).getTime() / 86_400_000;

/** Evenly spaced round values (1, 2, 2.5 or 5 × a power of ten) covering min–max. */
function ticks(min: number, max: number, count = 4) {
  const rough = (max - min) / count;
  const power = 10 ** Math.floor(Math.log10(rough));
  const n = rough / power;
  const step = (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * power;
  const values: number[] = [];
  for (let v = Math.floor(min / step) * step; v <= Math.ceil(max / step) * step + step / 1000; v += step) {
    values.push(Math.round(v * 100) / 100);
  }
  return values;
}

/** The trend line over time on a date scale, the weigh-ins as dots, and the goal weight. */
export function WeightChart({ points, goal, unit }: WeightChartProps) {
  const [width, setWidth] = useState(0);
  if (points.length === 0) return null;

  const values = points.flatMap((p) => [p.value, p.trend]);
  const dataLow = Math.min(...values);
  const dataHigh = Math.max(...values);
  // A far-away goal would flatten the line: it is drawn when within ~10 kg or the data's own spread.
  const reach = Math.max(unit === 'lb' ? 22 : 10, 3 * (dataHigh - dataLow));
  const goalShown = goal !== null && goal >= dataLow - reach && goal <= dataHigh + reach ? goal : null;
  let low = Math.min(dataLow, goalShown ?? Infinity);
  let high = Math.max(dataHigh, goalShown ?? -Infinity);
  if (high - low < 2) {
    const mid = (high + low) / 2;
    low = mid - 1;
    high = mid + 1;
  }
  const yTicks = ticks(low, high);
  const yMin = yTicks[0];
  const yMax = yTicks[yTicks.length - 1];
  const innerW = Math.max(1, width - PAD.left - PAD.right);
  const innerH = HEIGHT - PAD.top - PAD.bottom;
  const first = dayNumber(points[0].date);
  const last = dayNumber(points[points.length - 1].date);
  const x = (date: string) => (last === first ? PAD.left + innerW / 2 : PAD.left + ((dayNumber(date) - first) / (last - first)) * innerW);
  const y = (value: number) => PAD.top + (1 - (value - yMin) / (yMax - yMin)) * innerH;
  const line = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(p.date).toFixed(1)},${y(p.trend).toFixed(1)}`).join(' ');
  const end = points[points.length - 1];
  const summary = `Weight trend from ${points[0].trend.toFixed(1)} ${unit} on ${shortDate(points[0].date)} to ${end.trend.toFixed(1)} ${unit} on ${shortDate(end.date)}, ${points.length} ${points.length === 1 ? 'weigh-in' : 'weigh-ins'}${goal !== null ? `, goal ${goal.toFixed(1)} ${unit}` : ''}`;
  const xLabels = last === first ? [points[0].date] : [points[0].date, end.date];

  return (
    <View
      accessible
      accessibilityRole="image"
      accessibilityLabel={summary}
      className="h-[210px]"
      onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
      {width > 0 ? (
        <Svg width={width} height={HEIGHT}>
          {yTicks.map((tick) => (
            <Line key={`grid-${tick}`} x1={PAD.left} x2={width - PAD.right} y1={y(tick)} y2={y(tick)} stroke={colors.line} strokeWidth={1} />
          ))}
          {yTicks.map((tick) => (
            <SvgText key={`label-${tick}`} x={PAD.left - 8} y={y(tick) + 4} fontSize={11} fill={colors.muted} textAnchor="end">
              {tick % 1 === 0 ? tick : tick.toFixed(1)}
            </SvgText>
          ))}
          {goalShown !== null ? (
            <>
              <Line
                x1={PAD.left}
                x2={width - PAD.right}
                y1={y(goalShown)}
                y2={y(goalShown)}
                stroke={colors.success}
                strokeWidth={1.5}
                strokeDasharray="5 5"
              />
              <SvgText x={width - PAD.right} y={y(goalShown) - 6} fontSize={11} fontWeight="600" fill={colors.success} textAnchor="end">
                Goal
              </SvgText>
            </>
          ) : null}
          {points.map((p) => (
            <Circle key={`w-${p.date}`} cx={x(p.date)} cy={y(p.value)} r={points.length > 60 ? 2 : 3} fill={colors.faint} />
          ))}
          <Path d={line} stroke={colors.ink} strokeWidth={2.5} fill="none" strokeLinejoin="round" strokeLinecap="round" />
          <Circle cx={x(end.date)} cy={y(end.trend)} r={5} fill={colors.ink} stroke={colors.canvas} strokeWidth={2} />
          {xLabels.map((date, i) => (
            <SvgText
              key={`x-${date}`}
              x={xLabels.length === 1 ? x(date) : i === 0 ? PAD.left : width - PAD.right}
              y={HEIGHT - 6}
              fontSize={11}
              fill={colors.muted}
              textAnchor={xLabels.length === 1 ? 'middle' : i === 0 ? 'start' : 'end'}>
              {shortDate(date)}
            </SvgText>
          ))}
        </Svg>
      ) : null}
    </View>
  );
}
