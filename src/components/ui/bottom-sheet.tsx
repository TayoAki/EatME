import type { ReactNode } from 'react';
import { KeyboardAvoidingView, Modal, Platform, Pressable, View } from 'react-native';
import Animated, { SlideInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SHEET_POSITION = { position: 'absolute', left: 0, right: 0, bottom: 0 } as const;

type BottomSheetProps = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
};

/**
 * Modal bottom sheet: the dark overlay fades in (Modal `fade`) while the sheet slides up from the
 * bottom — the overlay itself never slides.
 */
export function BottomSheet({ visible, onClose, children }: BottomSheetProps) {
  const insets = useSafeAreaInsets();
  return (
    <Modal visible={visible} transparent animationType="fade" statusBarTranslucent onRequestClose={onClose}>
      <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Pressable accessibilityLabel="Close" className="flex-1 bg-black/45" onPress={onClose} />
        {/* NativeWind classes don't apply to Reanimated components: position with `style`. */}
        <Animated.View entering={SlideInDown.springify().damping(20).stiffness(180)} style={SHEET_POSITION}>
          <View
            style={{ paddingBottom: Math.max(insets.bottom, 16) + 8 }}
            className="rounded-t-[32px] bg-canvas px-6 pt-3">
            <View className="mb-5 h-1.5 w-10 self-center rounded-full bg-line" />
            {children}
          </View>
        </Animated.View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
