import { router } from 'expo-router';
import { ArrowLeft, Dumbbell, Footprints, Moon } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, Platform, ScrollView, Text, View } from 'react-native';
import Svg, { G, Rect, Text as SvgText } from 'react-native-svg';

import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { useActivity } from '@/lib/activity';
import { formatSleep, formatSteps, type DayActivity } from '@/lib/activity-plan';
import { healthName, loadHealthConnect } from '@/lib/health';
import { useHealthStore } from '@/lib/health-store';
import { useProfile } from '@/lib/queries';
import { formatDay, fromIsoDate } from '@/lib/time';

const CHART_HEIGHT = 150;

/** Steps per day as bars, today's in black, with the day's initial under each. */
function StepsChart({ days }: { days: DayActivity[] }) {
  const [width, setWidth] = useState(0);
  const max = Math.max(1, ...days.map((d) => d.steps ?? 0));
  const barWidth = width > 0 ? Math.min(28, (width - 12 * (days.length - 1)) / days.length) : 0;
  const gap = days.length > 1 ? (width - barWidth * days.length) / (days.length - 1) : 0;
  const withSteps = days.filter((d) => d.steps !== null);
  const average = withSteps.length > 0 ? Math.round(withSteps.reduce((sum, d) => sum + (d.steps ?? 0), 0) / withSteps.length) : null;
  return (
    <View>
      <View
        accessible
        accessibilityRole="image"
        accessibilityLabel={`Steps: ${days.map((d) => `${formatDay(d.date)} ${d.steps === null ? 'no data' : formatSteps(d.steps)}`).join(', ')}`}
        className="h-[172px]"
        onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
        {width > 0 ? (
          <Svg width={width} height={CHART_HEIGHT + 22}>
            {days.map((day, i) => {
              const h = day.steps ? Math.max(4, (day.steps / max) * (CHART_HEIGHT - 20)) : 0;
              const x = i * (barWidth + gap);
              const isLast = i === days.length - 1;
              return (
                <G key={day.date}>
                  {day.steps !== null ? (
                    <Rect x={x} y={CHART_HEIGHT - h} width={barWidth} height={Math.max(h, 2)} rx={6} fill={isLast ? colors.ink : colors.faint} />
                  ) : null}
                  <SvgText x={x + barWidth / 2} y={CHART_HEIGHT + 16} fontSize={11} fill={colors.muted} textAnchor="middle">
                    {fromIsoDate(day.date).toLocaleDateString('en-US', { weekday: 'narrow' })}
                  </SvgText>
                </G>
              );
            })}
          </Svg>
        ) : null}
      </View>
      {average !== null ? <Text className="mt-1 text-[13px] text-muted">Average {formatSteps(average)} steps a day</Text> : null}
    </View>
  );
}

/** The last 7 days of steps, workouts and sleep from the health app. It stays on the phone. */
export default function ActivityScreen() {
  const profile = useProfile();
  const calm = !!profile?.preferences.calmMode;
  const readEnabled = useHealthStore((s) => s.readEnabled);
  const activity = useActivity(7);
  const days = activity.data ?? [];
  const hasData = days.some((d) => d.steps !== null || d.workouts.length > 0 || d.sleepMinutes !== null);

  return (
    <Screen>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Go back" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={() => router.back()} />
      </View>
      <ScrollView contentContainerClassName="gap-5 px-5 pb-10" showsVerticalScrollIndicator={false}>
        <View>
          <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
            Activity
          </Text>
          <Text className="mt-1 text-[15px] leading-[21px] text-muted">
            From {Platform.OS === 'web' ? 'your health app' : healthName}. It stays on your phone and isn&apos;t added to your
            calorie goal.
          </Text>
        </View>

        {!readEnabled ? (
          <View className="gap-3 rounded-2xl bg-surface p-4">
            <Text className="text-[14px] leading-5 text-ink">Turn on “Read activity and sleep” to see your steps, workouts and sleep here.</Text>
            <Button title="Open Health apps" size="md" variant="outline" onPress={() => router.push('/health')} />
          </View>
        ) : activity.isPending ? (
          <ActivityIndicator color={colors.ink} />
        ) : activity.isError ? (
          <Text className="text-[15px] text-muted">We couldn&apos;t read your activity. Try again in a moment.</Text>
        ) : !hasData ? (
          <View className="gap-3 rounded-2xl bg-surface p-4">
            <Text className="text-[14px] leading-5 text-ink">
              {Platform.OS === 'android'
                ? 'No data yet. If you turned access off, allow EatME to read steps, exercise and sleep in Health Connect.'
                : 'No data yet — if you turned this off, change it in Settings → Health → Data Access & Devices → EatME.'}
            </Text>
            {Platform.OS === 'android' ? (
              <Button title="Open Health Connect" size="md" variant="outline" onPress={() => loadHealthConnect()?.openHealthConnectSettings()} />
            ) : null}
          </View>
        ) : (
          <>
            <View className="rounded-card border border-line p-4">
              <View className="mb-2 flex-row items-center gap-2">
                <Footprints size={18} color={colors.ink} strokeWidth={1.8} />
                <Text className="text-[16px] font-semibold text-ink">Steps</Text>
              </View>
              <StepsChart days={days} />
            </View>

            <View className="gap-3">
              {[...days].reverse().map((day) => (
                <View key={day.date} className="rounded-[20px] border border-line px-4 py-3">
                  <Text className="text-[16px] font-semibold text-ink">{formatDay(day.date)}</Text>
                  <View className="mt-1.5 gap-1">
                    <View className="flex-row items-center gap-2">
                      <Footprints size={15} color={colors.muted} />
                      <Text className="text-[14px] text-ink">
                        {day.steps === null ? 'No steps' : `${formatSteps(day.steps)} steps`}
                        {!calm && day.activeKcal !== null ? <Text className="text-muted"> · {day.activeKcal} active kcal</Text> : null}
                      </Text>
                    </View>
                    {day.workouts.map((workout) => (
                      <View key={workout.id} className="flex-row items-center gap-2">
                        <Dumbbell size={15} color={colors.muted} />
                        <Text className="text-[14px] text-ink">
                          {workout.name} · {workout.minutes} min
                          {!calm && workout.kcal !== null ? <Text className="text-muted"> · {Math.round(workout.kcal)} kcal</Text> : null}
                        </Text>
                      </View>
                    ))}
                    <View className="flex-row items-center gap-2">
                      <Moon size={15} color={colors.muted} />
                      <Text className="text-[14px] text-ink">{day.sleepMinutes === null ? 'No sleep data' : `${formatSleep(day.sleepMinutes)} asleep`}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </>
        )}
      </ScrollView>
    </Screen>
  );
}
