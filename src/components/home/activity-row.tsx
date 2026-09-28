import { router } from 'expo-router';
import { ChevronRight, Footprints } from 'lucide-react-native';
import { Pressable, Text } from 'react-native';

import { colors } from '@/constants/colors';
import { useActivity } from '@/lib/activity';
import { formatSleep, formatSteps, formatWorkoutMinutes } from '@/lib/activity-plan';
import { useHealthStore } from '@/lib/health-store';

/**
 * Steps, workouts and last night's sleep for the day shown on Home, when "Read activity and sleep"
 * is on. No calories here, so calm mode shows it as it is.
 */
export function ActivityRow({ date }: { date: string }) {
  const readEnabled = useHealthStore((s) => s.readEnabled);
  const activity = useActivity(7);
  if (!readEnabled) return null;
  const day = activity.data?.find((d) => d.date === date);
  if (!day) return null;
  const parts = [
    day.steps !== null ? `${formatSteps(day.steps)} steps` : null,
    day.workoutMinutes > 0 ? formatWorkoutMinutes(day.workoutMinutes, day.workouts.length) : null,
    day.sleepMinutes !== null ? `${formatSleep(day.sleepMinutes)} sleep` : null,
  ].filter((part): part is string => part !== null);
  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={`Activity: ${parts.join(', ') || 'no data yet'}. Open`}
      onPress={() => router.push('/activity')}
      className="mx-5 mt-3 flex-row items-center gap-3 rounded-[20px] border border-line px-4 py-3 active:bg-surface">
      <Footprints size={18} color={colors.ink} strokeWidth={1.8} />
      <Text className="flex-1 text-[15px] text-ink" numberOfLines={2}>
        {parts.length > 0 ? parts.join(' · ') : 'No activity data yet'}
      </Text>
      <ChevronRight size={18} color={colors.faint} />
    </Pressable>
  );
}
