import { ChevronRight, type LucideIcon } from 'lucide-react-native';
import { Children, Fragment, type ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { haptics } from '@/lib/haptics';

export function SettingsGroup({ title, children }: { title?: string; children: ReactNode }) {
  const items = Children.toArray(children);
  return (
    <View>
      {title ? <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">{title}</Text> : null}
      <View className="overflow-hidden rounded-[20px] border border-line bg-canvas">
        {items.map((child, index) => (
          <Fragment key={index}>
            {index > 0 ? <View className="ml-[52px] h-px bg-line" /> : null}
            {child}
          </Fragment>
        ))}
      </View>
    </View>
  );
}

type SettingsRowProps = {
  icon: LucideIcon;
  label: string;
  value?: string;
  onPress: () => void;
};

export function SettingsRow({ icon: Icon, label, value, onPress }: SettingsRowProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => {
        haptics.selection();
        onPress();
      }}
      className="min-h-[56px] flex-row items-center gap-4 px-4 active:bg-surface">
      <Icon size={21} color={colors.ink} strokeWidth={1.6} />
      <Text className="flex-1 text-[16px] text-ink">{label}</Text>
      {value ? <Text className="text-[15px] text-muted">{value}</Text> : null}
      <ChevronRight size={18} color={colors.faint} />
    </Pressable>
  );
}
