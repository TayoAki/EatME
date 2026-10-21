import { useCameraPermissions } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { AppState, Platform } from 'react-native';

/**
 * Camera permission with no screen of our own in front of the system alert (App Review 5.1.1(iv)):
 * the phone asks as soon as the camera is on screen and the purpose string in app.json says why.
 * `asking` is true while the status is read or the alert is up. Someone who said no (or dismissed a
 * browser prompt) gets our "camera is off" screen; coming back from Settings re-checks, so the camera
 * starts without leaving the screen.
 */
export function useCameraAccess(active: boolean) {
  const [permission, requestPermission, getPermission] = useCameraPermissions();
  const asked = useRef(false);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    if (!active || asked.current || permission?.status !== 'undetermined') return;
    asked.current = true;
    requestPermission()
      .catch(() => undefined)
      .finally(() => setAnswered(true));
  }, [active, permission?.status, requestPermission]);

  // Phones only: a browser that can't read the camera permission reports "undetermined" on every check.
  useEffect(() => {
    if (Platform.OS === 'web') return;
    const subscription = AppState.addEventListener('change', (state) => {
      if (state === 'active') void getPermission();
    });
    return () => subscription.remove();
  }, [getPermission]);

  const asking = !permission || (permission.status === 'undetermined' && !answered);
  return { permission, asking, requestPermission };
}
