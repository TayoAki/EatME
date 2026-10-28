import { router } from 'expo-router';
import { Bell, CalendarCheck, Check, ChevronRight, Sparkles } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { FlamieView } from '@/components/flamie/flamie-view';
import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { cn } from '@/lib/cn';
import { formatTimeOfDay } from '@/lib/reminder-plan';
import { useReminderStore } from '@/lib/reminder-store';
import { addDays, toIsoDate } from '@/lib/time';
import { SPARK_LABELS, SPARKS, type FlamieMood, type FlamieStage, type Spark } from '@/shared/flamie';

type StreakSheetProps = {
  visible: boolean;
  onClose: () => void;
  streak: number;
  loggedDates: readonly string[];
  /** Calm mode: the days logged (never resets) instead of the streak, and no Flamie. */
  calm?: boolean;
  daysLogged?: number;
  flamie?: {
    mood: FlamieMood;
    stage: FlamieStage;
    nextStage: FlamieStage | null;
    line: string;
    /** Today's goals reached (the habit boosts). */
    sparks: readonly Spark[];
    /** A milestone opened the sheet: Flamie cheers and says so. */
    cheerKey?: number;
    celebration?: string;
  };
};

const WEEKDAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

/** The check-ins live with the other reminders; this row says whether they're on. */
function CheckInsRow({ onClose }: { onClose: () => void }) {
  const checkIn = useReminderStore((s) => s.settings.flamie);
  return (
    <Pressable
      accessibilityRole="link"
      onPress={() => {
        onClose();
        router.push('/reminders');
      }}
      className="mt-5 flex-row items-center gap-3 rounded-[20px] border border-line px-4 py-3 active:bg-surface">
      <Bell size={18} color={colors.ink} />
      <View className="flex-1">
        <Text className="text-[15px] font-semibold text-ink">Check-ins</Text>
        <Text className="mt-0.5 text-[13px] leading-[18px] text-muted">
          {checkIn.enabled ? `On: evenings at ${formatTimeOfDay(checkIn)}, only when nothing's logged yet` : 'Off: let Flamie nudge you on evenings with nothing logged'}
        </Text>
      </View>
      <ChevronRight size={18} color={colors.faint} />
    </Pressable>
  );
}

/** The streak sheet opened from the streak button on Home: Flamie, sized by the streak (FLAMIE.md §2). */
export function StreakSheet({ visible, onClose, streak, loggedDates, calm = false, daysLogged = 0, flamie }: StreakSheetProps) {
  const logged = new Set(loggedDates);
  const today = new Date();
  const monday = addDays(today, -((today.getDay() + 6) % 7));
  const week = WEEKDAYS.map((label, i) => {
    const iso = toIsoDate(addDays(monday, i));
    return { label, iso, done: logged.has(iso) };
  });
  const showFlamie = !calm && flamie;

  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <View className="items-center">
        {showFlamie ? (
          <FlamieView
            size={168}
            mood={flamie.cheerKey !== undefined ? 'cheer' : flamie.mood}
            stage={flamie.stage.key}
            cheerKey={flamie.cheerKey}
            accessibilityLabel={`Flamie, a ${flamie.stage.label}`}
          />
        ) : (
          <CalendarCheck size={64} color={colors.ink} strokeWidth={1.4} />
        )}
        <Text className="mt-1 text-[64px] font-bold leading-[70px] tracking-tighter text-ink">{calm ? daysLogged : streak}</Text>
        <Text className="text-[26px] font-bold tracking-tight text-ink">{calm ? (daysLogged === 1 ? 'Day logged' : 'Days logged') : 'Day streak'}</Text>
        {showFlamie ? (
          <Text className="mt-1 text-[15px] text-muted">
            {flamie.nextStage
              ? `${flamie.stage.label === 'Ember' ? 'An' : 'A'} ${flamie.stage.label} · ${flamie.nextStage.label} at ${flamie.nextStage.from} ${flamie.nextStage.from === 1 ? 'day' : 'days'}`
              : 'A Supernova: as bright as Flamie gets'}
          </Text>
        ) : null}
        {showFlamie && flamie.celebration ? (
          <Text className="mt-3 text-center text-[17px] font-semibold text-ink">{flamie.celebration}</Text>
        ) : null}
      </View>

      <View className="mt-6 flex-row justify-between px-1">
        {week.map((day) => (
          <View key={day.iso} className="items-center gap-2">
            <Text className="text-[13px] font-medium text-ink">{day.label}</Text>
            <View className={cn('h-9 w-9 items-center justify-center rounded-full', day.done ? (calm ? 'bg-ink' : 'bg-flame') : 'bg-surface')}>
              {day.done ? <Check size={18} color={colors.canvas} strokeWidth={3} /> : null}
            </View>
          </View>
        ))}
      </View>

      {showFlamie ? (
        <View className="mt-5 flex-row flex-wrap items-center justify-center gap-2" accessibilityLabel={`Today's sparks: ${flamie.sparks.map((s) => SPARK_LABELS[s]).join(', ') || 'none yet'}`}>
          {SPARKS.map((spark) => {
            const lit = flamie.sparks.includes(spark);
            return (
              <View key={spark} className={cn('h-8 flex-row items-center gap-1.5 rounded-full px-3', lit ? 'bg-flame/15' : 'bg-surface')}>
                <Sparkles size={14} color={lit ? colors.flame : colors.faint} />
                <Text className={cn('text-[13px] font-semibold', lit ? 'text-ink' : 'text-muted')}>{SPARK_LABELS[spark]}</Text>
              </View>
            );
          })}
        </View>
      ) : null}

      <Text className="mt-5 text-center text-[16px] leading-[22px] text-muted">
        {calm ? 'Every day you log counts. Nothing resets.' : flamie ? `${flamie.line} Goals reached today give Flamie a spark.` : ''}
      </Text>
      {showFlamie ? <CheckInsRow onClose={onClose} /> : null}
      <Button title={calm ? 'Done' : 'Keep going'} className="mt-6" onPress={onClose} />
    </BottomSheet>
  );
}
