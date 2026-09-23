import { Stack } from 'expo-router';

import { colors } from '@/constants/colors';

export const unstable_settings = {
  initialRouteName: 'welcome',
};

export default function PublicLayout() {
  return <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.canvas } }} />;
}
