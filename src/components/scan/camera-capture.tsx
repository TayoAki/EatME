import { CameraView, useCameraPermissions, type BarcodeScanningResult, type BarcodeType } from 'expo-camera';
import { router, useIsFocused } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { Camera, Image as ImageIcon, Keyboard, PenLine, Search, SquarePlus, Star, Zap, ZapOff } from 'lucide-react-native';
import { useRef, useState } from 'react';
import { ActivityIndicator, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { QuickAddSheet } from '@/components/meal/quick-add-sheet';
import { BarcodeEntrySheet } from '@/components/scan/barcode-entry-sheet';
import { FavoritesSheet } from '@/components/scan/favorites-sheet';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { colors } from '@/constants/colors';
import { cn } from '@/lib/cn';
import { haptics } from '@/lib/haptics';
import { barcodeCandidates } from '@/shared/barcodes';
import type { PhotoMode } from '@/shared/meals';

export type Photo = { uri: string; width?: number; height?: number };

/** What the camera looks at: a meal (estimated), a nutrition label (read) or a barcode (looked up). */
export type ScanMode = PhotoMode | 'barcode';

type CameraCaptureProps = {
  onPhoto: (photo: Photo) => void;
  /** Space reserved at the bottom for the tab bar. */
  bottomSpace: number;
  mode: ScanMode;
  onModeChange: (mode: ScanMode) => void;
  /** Log a meal by typing (or dictating) it instead. */
  onDescribe: () => void;
  /** Pick a food from the USDA database instead. */
  onSearch: () => void;
  /** A barcode was read by the camera or typed in. */
  onBarcode: (code: string) => void;
};

const MODE_OPTIONS = [
  { label: 'Meal', value: 'meal' },
  { label: 'Nutrition label', value: 'label' },
  { label: 'Barcode', value: 'barcode' },
] as const;

/** Barcodes on food packaging. */
const BARCODE_TYPES: BarcodeType[] = ['ean13', 'ean8', 'upc_a', 'upc_e'];

const COPY: Record<ScanMode, { title: string; hint: string; permission: string }> = {
  meal: {
    title: 'Scan food',
    hint: 'Center your meal in the frame',
    permission: 'EatME uses your camera to scan meals and estimate their calories and macros.',
  },
  label: {
    title: 'Scan label',
    hint: 'Fit the nutrition facts in the frame',
    permission: 'EatME uses your camera to read nutrition labels on food packaging.',
  },
  barcode: {
    title: 'Scan barcode',
    hint: 'Point the camera at the barcode',
    permission: 'EatME uses your camera to read barcodes on food packaging.',
  },
};

/** Meal / label / barcode switch on the dark camera screen. */
function ModeSwitch({ mode, onChange }: { mode: ScanMode; onChange: (mode: ScanMode) => void }) {
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

export function CameraCapture({ onPhoto, bottomSpace, mode, onModeChange, onDescribe, onSearch, onBarcode }: CameraCaptureProps) {
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [flash, setFlash] = useState(false);
  const [capturing, setCapturing] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [quickOpen, setQuickOpen] = useState(false);
  const scanned = useRef(false);
  const sheets = (
    <>
      <FavoritesSheet visible={favoritesOpen} onClose={() => setFavoritesOpen(false)} />
      <QuickAddSheet visible={quickOpen} onClose={() => setQuickOpen(false)} onLogged={() => router.navigate('/')} />
      <BarcodeEntrySheet
        visible={typing}
        onClose={() => setTyping(false)}
        onSubmit={(code) => {
          setTyping(false);
          onBarcode(code);
        }}
      />
    </>
  );

  /** The camera reports the same code many times a second: act on the first complete one. */
  const onScanned = ({ data }: BarcodeScanningResult) => {
    const code = data.replace(/\D/g, '');
    if (scanned.current || !barcodeCandidates(code)) return;
    scanned.current = true;
    haptics.success();
    onBarcode(code);
  };

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
          <Text className="mt-2 text-center text-[16px] leading-[22px] text-muted">{COPY[mode].permission}</Text>
        </View>
        <View className="gap-2">
          {permission.canAskAgain ? (
            <Button title="Allow camera" onPress={() => void requestPermission()} />
          ) : (
            <Button title="Open Settings" onPress={() => void Linking.openSettings()} />
          )}
          {mode === 'barcode' ? (
            <Button title="Type the barcode" variant="secondary" onPress={() => setTyping(true)} />
          ) : (
            <Button title="Choose from gallery" variant="secondary" onPress={() => void openGallery()} />
          )}
          <View className="flex-row">
            <Button title="Describe a meal" variant="ghost" className="flex-1" onPress={onDescribe} />
            <Button title="Search foods" variant="ghost" className="flex-1" onPress={onSearch} />
          </View>
          <View className="flex-row">
            <Button title="Favourites" variant="ghost" className="flex-1" onPress={() => setFavoritesOpen(true)} />
            <Button title="Quick add" variant="ghost" className="flex-1" onPress={() => setQuickOpen(true)} />
          </View>
        </View>
        {sheets}
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
        barcodeScannerSettings={mode === 'barcode' ? { barcodeTypes: BARCODE_TYPES } : undefined}
        onBarcodeScanned={mode === 'barcode' && isFocused ? onScanned : undefined}
      />

      <View className="flex-row items-center justify-between px-5" style={{ paddingTop: insets.top + 8 }}>
        <View className="flex-row gap-2">
          <IconButton
            accessibilityLabel="Favourites"
            variant="dark"
            size={44}
            icon={<Star size={20} color={colors.canvas} />}
            onPress={() => setFavoritesOpen(true)}
          />
          <IconButton
            accessibilityLabel="Quick add"
            variant="dark"
            size={44}
            icon={<SquarePlus size={20} color={colors.canvas} />}
            onPress={() => setQuickOpen(true)}
          />
        </View>
        <View pointerEvents="none" className="absolute inset-x-0 bottom-0 h-11 items-center justify-center">
          <Text className="text-[18px] font-semibold text-white">{COPY[mode].title}</Text>
        </View>
        <View className="flex-row gap-2">
          <IconButton
            accessibilityLabel="Search foods"
            variant="dark"
            size={44}
            icon={<Search size={20} color={colors.canvas} />}
            onPress={onSearch}
          />
          <IconButton
            accessibilityLabel="Describe a meal"
            variant="dark"
            size={44}
            icon={<PenLine size={20} color={colors.canvas} />}
            onPress={onDescribe}
          />
        </View>
      </View>

      <View pointerEvents="none" className="flex-1 items-center justify-center">
        <View style={mode === 'label' ? styles.labelFrame : mode === 'barcode' ? styles.barcodeFrame : styles.frame}>
          <Corner style={{ top: 0, left: 0, borderTopWidth: 4, borderLeftWidth: 4, borderTopLeftRadius: 28 }} />
          <Corner style={{ top: 0, right: 0, borderTopWidth: 4, borderRightWidth: 4, borderTopRightRadius: 28 }} />
          <Corner style={{ bottom: 0, left: 0, borderBottomWidth: 4, borderLeftWidth: 4, borderBottomLeftRadius: 28 }} />
          <Corner
            style={{ bottom: 0, right: 0, borderBottomWidth: 4, borderRightWidth: 4, borderBottomRightRadius: 28 }}
          />
        </View>
        <Text className="mt-6 text-[15px] font-medium text-white">{COPY[mode].hint}</Text>
      </View>

      <ModeSwitch mode={mode} onChange={onModeChange} />
      <View className="flex-row items-center justify-between px-10 pt-5" style={{ paddingBottom: bottomSpace }}>
        {mode === 'barcode' ? (
          <View className="w-[52px]" />
        ) : (
          <IconButton
            accessibilityLabel="Choose a photo from your gallery"
            variant="dark"
            size={52}
            icon={<ImageIcon size={24} color={colors.canvas} />}
            onPress={() => void openGallery()}
          />
        )}
        {mode === 'barcode' ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Type the barcode"
            onPress={() => setTyping(true)}
            className="h-20 w-20 items-center justify-center rounded-full border-4 border-white active:opacity-80">
            <Keyboard size={30} color={colors.canvas} />
          </Pressable>
        ) : (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Take photo"
            disabled={capturing}
            onPress={() => void takePhoto()}
            className="h-20 w-20 items-center justify-center rounded-full border-4 border-white active:opacity-80">
            <View className="h-16 w-16 rounded-full bg-white" />
          </Pressable>
        )}
        <IconButton
          accessibilityLabel={flash ? 'Turn flash off' : 'Turn flash on'}
          variant="dark"
          size={52}
          icon={flash ? <Zap size={24} color={colors.canvas} /> : <ZapOff size={24} color={colors.canvas} />}
          onPress={() => setFlash((on) => !on)}
        />
      </View>
      {sheets}
    </View>
  );
}

const styles = StyleSheet.create({
  frame: { width: 270, height: 270 },
  labelFrame: { width: 240, height: 330 },
  barcodeFrame: { width: 300, height: 170 },
  corner: { position: 'absolute', width: 56, height: 56, borderColor: '#FFFFFF' },
});
