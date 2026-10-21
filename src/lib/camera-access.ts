import { useCameraPermissions } from 'expo-camera';
import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';

/**
 * Camera permission with no screen of our own in front of the system alert (App Review 5.1.1(iv)):
 * the phone asks as soon as the camera is on screen and the purpose string in app.json says why.
 * Someone who said no gets our "camera is off" screen with a way to Settings; coming back from
 * Settings re-checks, so the camera starts without leaving the screen.
 */
export function useCameraAccess(active: boolean) {
  const [permission, requestPermission, getPermission] = useCameraPermissions();
  const asked = useRef(false);

  useEffect(() => {
    if (!active || asked.current || permission?.status !== 'undetermined') return;
    asked.current = true;
    void requestPermission();
  }, [active, permission?.status, requestPermission]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (state) => {
      if (state === 'active') void getPermission();
    });
    return () => subscription.remove();
  }, [getPermission]);

  return [permission, requestPermission] as const;
}
