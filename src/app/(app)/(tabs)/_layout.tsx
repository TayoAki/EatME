import { NativeTabs } from 'expo-router/unstable-native-tabs';

import { colors } from '@/constants/colors';

/** Native tabs — the system tab bar, with the liquid glass look on iOS 26. */
export default function TabsLayout() {
  return (
    <NativeTabs tintColor={colors.ink} iconColor={{ default: colors.muted, selected: colors.ink }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Icon sf={{ default: 'house', selected: 'house.fill' }} md="home" />
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="scan">
        <NativeTabs.Trigger.Icon sf="viewfinder" md="center_focus_strong" />
        <NativeTabs.Trigger.Label>Scan</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Icon sf={{ default: 'person', selected: 'person.fill' }} md="person" />
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
