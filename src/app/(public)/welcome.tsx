import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { Screen } from '@/components/ui/screen';
import { FIRST_STEP_HREF } from '@/lib/onboarding-steps';

const DEMO_ASPECT_RATIO = 628 / 1255;

export default function WelcomeScreen() {
  return (
    <Screen>
      <View className="items-center pt-3">
        <Logo size={48} withWordmark stacked />
      </View>

      <View className="flex-1 items-center justify-center py-5">
        <Image
          source={require('@/assets/images/welcome-screen-demo-image.png')}
          style={{ height: '100%', aspectRatio: DEMO_ASPECT_RATIO }}
          contentFit="contain"
          accessibilityLabel="The EatME camera scanning a plate of salmon, rice and avocado"
        />
      </View>

      <View className="px-6">
        <Text
          accessibilityRole="header"
          className="text-center text-[36px] font-bold leading-[42px] tracking-tight text-ink">
          Calorie tracking{'\n'}made effortless
        </Text>

        <Button title="Get started" className="mt-8" onPress={() => router.push(FIRST_STEP_HREF)} />

        <View className="mt-5 flex-row items-center justify-center">
          <Text className="text-[15px] text-muted">Already have an account? </Text>
          <Pressable accessibilityRole="link" hitSlop={10} onPress={() => router.push('/sign-in')}>
            <Text className="text-[15px] font-semibold text-ink">Sign in</Text>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}
