import { CameraView, useCameraPermissions } from 'expo-camera';
import { useIsFocused } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { Camera, Image as ImageIcon, PenLine, Star, Zap, ZapOff } from 'lucide-react-native';
import { useRef, useState } from 'react';
import { ActivityIndicator, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FavoritesSheet } from '@/components/scan/favorites-sheet';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { colors } from '@/constants/colors';
import { cn } from '@/lib/cn';
import { haptics } from '@/lib/haptics';
import type { PhotoMode } from '@/shared/meals';

export type Photo = { uri: string; width?: number; height?: number };

type CameraCaptureProps = {
  onPhoto: (photo: Photo) => void;
  /** Space reserved at the bottom for the tab bar. */
  bottomSpace: number;
  /** A meal (estimated) or a nutrition label (read). */
  mode: PhotoMode;
  onModeChange: (mode: PhotoMode) => void;
  /** Log a meal by typing (or dictating) it instead. */
  onDescribe: () => void;
};

const MODE_OPTIONS = [
  { label: 'Meal', value: 'meal' },
  { label: 'Nutrition label', value: 'label' },
] as const;

/** Meal / label switch on the dark camera screen. */
function ModeSwitch({ mode, onChange }: { mode: PhotoMode; onChange: (mode: PhotoMode) => void }) {
  return (
    <View accessibilityRole="tablist" className="flex-row self-center rounded-full bg-black/45 p-1">
      {MODE_OPTIONS.map((option) => {
        const selected = option.value === mode;
        return (
          <Pressable
            key={option.value}
            accessibilityRole="tab"
            accessibilityState={{ selected }}
            onPress={() => {
              if (selected) return;
              haptics.selection();
              onChange(option.value);
            }}
            className={cn('h-9 items-center justify-center rounded-full px-4', selected && 'bg-white')}>
            <Text className={cn('text-[14px] font-semibold', selected ? 'text-ink' : 'text-white')}>{option.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

async function pickFromGallery(): Promise<Photo | null> {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    quality: 0.8,
    allowsEditing: false,
  });
  if (result.canceled || !result.assets[0]) return null;
  const { uri, width, height } = result.assets[0];
  return { uri, width, height };
}

function Corner({ style }: { style: object }) {
  return <View style={[styles.corner, style]} />;
}

export function CameraCapture({ onPhoto, bottomSpace, mode, onModeChange, onDescribe }: CameraCaptureProps) {
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [flash, setFlash] = useState(false);
  const [capturing, setCapturing] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const favoritesSheet = <FavoritesSheet visible={favoritesOpen} onClose={() => setFavoritesOpen(false)} />;

  const openGallery = async () => {
    const photo = await pickFromGallery();
    if (photo) onPhoto(photo);
  };

  if (!permission) {
    return (
      <View className="flex-1 items-center justify-center bg-canvas">
        <ActivityIndicator color={colors.ink} />
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 bg-canvas px-6" style={{ paddingTop: insets.top + 12, paddingBottom: bottomSpace }}>
        <SegmentedControl options={MODE_OPTIONS} value={mode} onChange={onModeChange} />
        <View className="flex-1 items-center justify-center">
          <View className="h-20 w-20 items-center justify-center rounded-full bg-surface">
            <Camera size={34} color={colors.ink} strokeWidth={1.6} />
          </View>
          <Text className="mt-6 text-center text-[26px] font-bold tracking-tight text-ink">Allow camera access</Text>
          <Text className="mt-2 text-center text-[16px] leading-[22px] text-muted">
            {mode === 'label'
              ? 'EatME uses your camera to read nutrition labels on food packaging.'
              : 'EatME uses your camera to scan meals and estimate their calories and macros.'}
          </Text>
        </View>
        <View className="gap-2">
          {permission.canAskAgain ? (
            <Button title="Allow camera" onPress={() => void requestPermission()} />
          ) : (
            <Button title="Open Settings" onPress={() => void Linking.openSettings()} />
          )}
          <Button title="Choose from gallery" variant="secondary" onPress={() => void openGallery()} />
          <View className="flex-row">
            <Button title="Describe a meal" variant="ghost" className="flex-1" onPress={onDescribe} />
            <Button title="Favourites" variant="ghost" className="flex-1" onPress={() => setFavoritesOpen(true)} />
          </View>
        </View>
        {favoritesSheet}
      </View>
    );
  }

  const takePhoto = async () => {
    if (!cameraRef.current || capturing) return;
    setCapturing(true);
    haptics.medium();
    try {
      const picture = await cameraRef.current.takePictureAsync({ quality: 0.8, shutterSound: false });
      if (picture) onPhoto({ uri: picture.uri, width: picture.width, height: picture.height });
    } finally {
      setCapturing(false);
    }
  };

  return (
    <View className="flex-1 bg-black">
      <CameraView
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        facing="back"
        enableTorch={flash}
        active={isFocused}
        animateShutter
      />

      <View className="flex-row items-center justify-between px-5" style={{ paddingTop: insets.top + 8 }}>
        <IconButton
          accessibilityLabel="Favourites"
          variant="dark"
          size={44}
          icon={<Star size={20} color={colors.canvas} />}
          onPress={() => setFavoritesOpen(true)}
        />
        <Text className="text-[18px] font-semibold text-white">{mode === 'label' ? 'Scan label' : 'Scan food'}</Text>
        <IconButton
          accessibilityLabel="Describe a meal"
          variant="dark"
          size={44}
          icon={<PenLine size={20} color={colors.canvas} />}
          onPress={onDescribe}
        />
      </View>

      <View pointerEvents="none" className="flex-1 items-center justify-center">
        <View style={mode === 'label' ? styles.labelFrame : styles.frame}>
          <Corner style={{ top: 0, left: 0, borderTopWidth: 4, borderLeftWidth: 4, borderTopLeftRadius: 28 }} />
          <Corner style={{ top: 0, right: 0, borderTopWidth: 4, borderRightWidth: 4, borderTopRightRadius: 28 }} />
          <Corner style={{ bottom: 0, left: 0, borderBottomWidth: 4, borderLeftWidth: 4, borderBottomLeftRadius: 28 }} />
          <Corner
            style={{ bottom: 0, right: 0, borderBottomWidth: 4, borderRightWidth: 4, borderBottomRightRadius: 28 }}
          />
        </View>
        <Text className="mt-6 text-[15px] font-medium text-white">
          {mode === 'label' ? 'Fit the nutrition facts in the frame' : 'Center your meal in the frame'}
        </Text>
      </View>

      <ModeSwitch mode={mode} onChange={onModeChange} />
      <View className="flex-row items-center justify-between px-10 pt-5" style={{ paddingBottom: bottomSpace }}>
        <IconButton
          accessibilityLabel="Choose a photo from your gallery"
          variant="dark"
          size={52}
          icon={<ImageIcon size={24} color={colors.canvas} />}
          onPress={() => void openGallery()}
        />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Take photo"
          disabled={capturing}
          onPress={() => void takePhoto()}
          className="h-20 w-20 items-center justify-center rounded-full border-4 border-white active:opacity-80">
          <View className="h-16 w-16 rounded-full bg-white" />
        </Pressable>
        <IconButton
          accessibilityLabel={flash ? 'Turn flash off' : 'Turn flash on'}
          variant="dark"
          size={52}
          icon={flash ? <Zap size={24} color={colors.canvas} /> : <ZapOff size={24} color={colors.canvas} />}
          onPress={() => setFlash((on) => !on)}
        />
      </View>
      {favoritesSheet}
    </View>
  );
}

const styles = StyleSheet.create({
  frame: { width: 270, height: 270 },
  labelFrame: { width: 240, height: 330 },
  corner: { position: 'absolute', width: 56, height: 56, borderColor: '#FFFFFF' },
});
