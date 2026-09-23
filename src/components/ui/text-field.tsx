import { forwardRef, type ReactNode } from 'react';
import { Text, TextInput, View, type TextInputProps } from 'react-native';

import { colors } from '@/constants/colors';

type TextFieldProps = TextInputProps & {
  label: string;
  /** Element on the right side of the field (e.g. a show-password button). */
  right?: ReactNode;
};

/** Labelled text input in the app's style (surface background, rounded field). */
export const TextField = forwardRef<TextInput, TextFieldProps>(function TextField({ label, right, ...props }, ref) {
  return (
    <View>
      <Text className="mb-2 text-[14px] font-semibold text-ink">{label}</Text>
      <View className="h-14 flex-row items-center rounded-field bg-surface pl-4 pr-2">
        <TextInput
          ref={ref}
          accessibilityLabel={label}
          placeholderTextColor={colors.faint}
          className="min-w-0 flex-1 text-[17px] text-ink"
          {...props}
        />
        {right}
      </View>
    </View>
  );
});
