import { Check } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import Animated, { FadeIn, LinearTransition, ZoomIn } from 'react-native-reanimated';

import { FlamieView } from '@/components/flamie/flamie-view';
import { OnboardingScreen, ROWS_AFTER_MS } from '@/components/onboarding/onboarding-screen';
import { rise } from '@/components/ui/motion';
import { colors } from '@/constants/colors';
import { cn } from '@/lib/cn';
import { haptics } from '@/lib/haptics';
import { OBSTACLE_INFO, OBSTACLES, type Obstacle, type ObstacleFlags } from '@/lib/onboarding-obstacles';
import { useOnboardingStore } from '@/lib/onboarding-store';
import { useFeatures } from '@/lib/queries';

/** Rows slide to make room when one opens to show what helps. */
const MAKE_ROOM = LinearTransition.springify().damping(18).stiffness(200);

/**
 * The last question (PLAN.md §3): what got in the way before. Any number, none included. Each pick opens to show
 * what in Weight Class is made for it; the plan-ready screen lists them again. Kept on this phone only.
 */
export default function ObstaclesStep() {
  const picked = useOnboardingStore((s) => s.obstacles);
  const toggle = useOnboardingStore((s) => s.toggleObstacle);
  const features = useFeatures();
  const flags: ObstacleFlags = { payments: !!features.data?.payments, whatToOrder: !!features.data?.whatToOrder };

  return (
    <OnboardingScreen
      step="obstacles"
      contentEnters={false}
      scrollable
      title="What's gotten in the way before?"
      subtitle="Pick any that apply. Your answers stay on this phone.">
      <View className="gap-3">
        {OBSTACLES.map((obstacle, index) => (
          <ObstacleRow
            key={obstacle}
            obstacle={obstacle}
            index={index}
            selected={picked.includes(obstacle)}
            flags={flags}
            onPress={() => toggle(obstacle)}
          />
        ))}
      </View>
    </OnboardingScreen>
  );
}

type ObstacleRowProps = {
  obstacle: Obstacle;
  index: number;
  selected: boolean;
  flags: ObstacleFlags;
  onPress: () => void;
};

function ObstacleRow({ obstacle, index, selected, flags, onPress }: ObstacleRowProps) {
  const { title, icon: Icon, help } = OBSTACLE_INFO[obstacle];
  return (
    <Animated.View entering={rise(index, ROWS_AFTER_MS)} layout={MAKE_ROOM}>
      <Pressable
        accessibilityRole="checkbox"
        accessibilityState={{ checked: selected }}
        accessibilityHint={selected ? undefined : 'Shows what helps with it'}
        onPress={() => {
          haptics.selection();
          onPress();
        }}
        className={cn('rounded-[20px] px-5 py-4 active:opacity-80', selected ? 'bg-ink' : 'bg-surface')}>
        <View className="min-h-[32px] flex-row items-center gap-4">
          <Icon size={22} strokeWidth={1.7} color={selected ? colors.canvas : colors.ink} />
          <Text className={cn('flex-1 text-[17px] font-semibold', selected ? 'text-white' : 'text-ink')}>{title}</Text>
          {selected ? (
            <Animated.View
              key="on"
              entering={ZoomIn.springify().damping(12).stiffness(240)}
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.canvas,
              }}>
              <Check size={15} color={colors.ink} strokeWidth={3} />
            </Animated.View>
          ) : (
            <View key="off" className="h-6 w-6 rounded-full border-[1.5px] border-faint" />
          )}
        </View>
        {selected ? (
          <Animated.View
            entering={FadeIn.duration(260).delay(60)}
            style={{ marginTop: 10, flexDirection: 'row', gap: 10 }}>
            {obstacle === 'consistency' ? <FlamieView size={30} mood="lit" stage="spark" /> : null}
            <Text className="flex-1 text-[15px] leading-[21px] text-white/80">{help(flags)}</Text>
          </Animated.View>
        ) : null}
      </Pressable>
    </Animated.View>
  );
}
