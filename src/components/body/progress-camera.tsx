import { CameraView, useCameraPermissions, type CameraType } from 'expo-camera';
import { Image } from 'expo-image';
import { RefreshCw, X } from 'lucide-react-native';
import { useRef, useState } from 'react';
import { ActivityIndicator, Linking, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { colors } from '@/constants/colors';
import { haptics } from '@/lib/haptics';
import { PHOTO_POSE_LABELS, type PhotoPose } from '@/shared/body';

export type TakenPhoto = { uri: string; width?: number; height?: number };

type ProgressCameraProps = {
  pose: PhotoPose;
  /** The last photo in this pose, shown faintly over the camera to line up with. */
  ghostUrl: string | null;
  onPhoto: (photo: TakenPhoto) => void;
  onClose: () => void;
};

/**
 * Full-screen camera for a progress photo. The last photo in the same pose shows faintly on top,
 * so the new one lines up. Front-camera photos are saved as seen (mirrored), like the ghost.
 */
export function ProgressCamera({ pose, ghostUrl, onPhoto, onClose }: ProgressCameraProps) {
  const insets = useSafeAreaInsets();
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>('back');
  const [capturing, setCapturing] = useState(false);

  const take = async () => {
    if (!cameraRef.current || capturing) return;
    setCapturing(true);
    haptics.medium();
    try {
      const picture = await cameraRef.current.takePictureAsync({ quality: 0.9, shutterSound: false });
      if (picture) onPhoto({ uri: picture.uri, width: picture.width, height: picture.height });
    } finally {
      setCapturing(false);
    }
  };

  return (
    <Modal visible animationType="slide" presentationStyle="fullScreen" onRequestClose={onClose}>
      <View className="flex-1 bg-black">
        {!permission ? (
          <ActivityIndicator color={colors.canvas} className="flex-1" />
        ) : !permission.granted ? (
          <View className="flex-1 justify-center gap-4 px-8">
            <Text className="text-center text-[17px] leading-6 text-white">
              Weight Class needs the camera for progress photos. They stay private and are never used for AI.
            </Text>
            {permission.canAskAgain ? (
              <Button title="Allow camera" variant="secondary" onPress={() => void requestPermission()} />
            ) : (
              <Button title="Open Settings" variant="secondary" onPress={() => void Linking.openSettings()} />
            )}
            <Button title="Cancel" variant="ghost" className="bg-transparent" onPress={onClose} />
          </View>
        ) : (
          <>
            <CameraView ref={cameraRef} style={StyleSheet.absoluteFill} facing={facing} mirror animateShutter />
            {ghostUrl ? (
              <Image
                source={{ uri: ghostUrl }}
                style={[StyleSheet.absoluteFill, { opacity: 0.3 }]}
                contentFit="cover"
                accessibilityLabel="Your last photo in this pose, to line up with"
              />
            ) : null}
            <View className="flex-row items-center justify-between px-5" style={{ paddingTop: insets.top + 8 }}>
              <IconButton accessibilityLabel="Close" variant="dark" icon={<X size={20} color={colors.canvas} />} onPress={onClose} />
              <View className="rounded-full bg-black/40 px-4 py-2">
                <Text className="text-[15px] font-semibold text-white">
                  {PHOTO_POSE_LABELS[pose]}
                  {ghostUrl ? ' · line up with last time' : ''}
                </Text>
              </View>
              <IconButton
                accessibilityLabel="Switch camera"
                variant="dark"
                icon={<RefreshCw size={18} color={colors.canvas} />}
                onPress={() => setFacing((f) => (f === 'back' ? 'front' : 'back'))}
              />
            </View>
            <View className="absolute bottom-0 left-0 right-0 items-center" style={{ paddingBottom: insets.bottom + 28 }}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Take photo"
                disabled={capturing}
                onPress={() => void take()}
                className="h-[78px] w-[78px] items-center justify-center rounded-full border-4 border-white active:opacity-70">
                <View className="h-[62px] w-[62px] rounded-full bg-white" />
              </Pressable>
            </View>
          </>
        )}
      </View>
    </Modal>
  );
}
