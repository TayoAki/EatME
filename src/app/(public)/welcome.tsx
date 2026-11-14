import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { Rise } from '@/components/ui/motion';
import { Screen } from '@/components/ui/screen';
import { FIRST_STEP_HREF } from '@/lib/onboarding-steps';

const DEMO_ASPECT_RATIO = 628 / 1255;

/** The phone settles in, then floats gently; the words and buttons rise in after it. */
export default function WelcomeScreen() {
  const reduceMotion = useReducedMotion();
  const float = useSharedValue(0);
  useEffect(() => {
    if (reduceMotion) return;
    float.value = withDelay(
      900,
      withRepeat(withTiming(1, { duration: 2600, easing: Easing.inOut(Easing.sin) }), -1, true),
    );
  }, [reduceMotion, float]);
  const floatStyle = useAnimatedStyle(() => ({ transform: [{ translateY: -8 * float.value }] }));

  return (
    <Screen>
      <Rise style={{ alignItems: 'center', paddingTop: 12 }}>
        <Logo size={48} withWordmark stacked />
      </Rise>

      <Animated.View entering={FadeIn.duration(700).delay(150)} style={{ flex: 1 }}>
        <Animated.View
          style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 20 }, floatStyle]}>
          <Image
            source={require('@/assets/images/welcome-screen-demo-image.png')}
            style={{ height: '100%', aspectRatio: DEMO_ASPECT_RATIO }}
            contentFit="contain"
            accessibilityLabel="The Weight Class camera scanning a plate of salmon, rice and avocado"
          />
        </Animated.View>
      </Animated.View>

      <View className="px-6">
        <Rise index={1} after={250}>
          <Text
            accessibilityRole="header"
            className="text-center text-[36px] font-bold leading-[42px] tracking-tight text-ink">
            Calorie tracking{'\n'}made effortless
          </Text>
        </Rise>

        <Rise index={2} after={250} style={{ marginTop: 32 }}>
          <Button title="Get started" onPress={() => router.push(FIRST_STEP_HREF)} />
        </Rise>

        <Rise index={3} after={250}>
          <View className="mt-5 flex-row items-center justify-center">
            <Text className="text-[15px] text-muted">Already have an account? </Text>
            <Pressable accessibilityRole="link" hitSlop={10} onPress={() => router.push('/sign-in')}>
              <Text className="text-[15px] font-semibold text-ink">Sign in</Text>
            </Pressable>
          </View>
        </Rise>
      </View>
    </Screen>
  );
}
