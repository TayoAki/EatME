import { Stack } from 'expo-router';

import { colors } from '@/constants/colors';

export const unstable_settings = {
  initialRouteName: 'gender',
};

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        contentStyle: { backgroundColor: colors.canvas },
      }}>
      <Stack.Screen name="building-plan" options={{ gestureEnabled: false, animation: 'fade' }} />
      <Stack.Screen name="plan" options={{ gestureEnabled: false, animation: 'fade' }} />
    </Stack>
  );
}
