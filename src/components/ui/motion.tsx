import { useEffect, useState, type ReactNode } from 'react';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import Animated, { Easing, FadeInDown, useReducedMotion } from 'react-native-reanimated';

/**
 * Entrance motion (onboarding, PLAN.md §3): things arrive one after another, rising a little as they fade in. Reanimated's
 * entrances follow the phone's Reduce Motion setting by themselves (shown at once); the hooks here check it too.
 */

/** The gap between two items arriving, one after the other. */
export const STAGGER_MS = 100;

/** Rises into place and fades in, `index` steps after `after` ms (eased on phones; the web can't ease entrances). */
export function rise(index = 0, after = 0) {
  const entrance = FadeInDown.delay(after + index * STAGGER_MS).duration(480);
  return Platform.OS === 'web' ? entrance : entrance.easing(Easing.out(Easing.cubic));
}

type RiseProps = {
  index?: number;
  /** Milliseconds before the first step (e.g. while the screen slides in). */
  after?: number;
  /** NativeWind classes don't reach Reanimated views: lay the wrapper out with `style`. */
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
};

/** A view that rises into place when it first appears. */
export function Rise({ index = 0, after = 0, style, children }: RiseProps) {
  return (
    <Animated.View entering={rise(index, after)} style={style}>
      {children}
    </Animated.View>
  );
}

/** Eases out: fast at first, settling at the end. */
const easeOut = (t: number) => 1 - (1 - t) ** 3;

/**
 * A number that counts up from 0 to `target` once, when the screen opens (later targets show at once). With Reduce
 * Motion it is the target from the start. Show the final value to screen readers, not this one.
 */
export function useCountUp(target: number, { duration = 900, delay = 0 } = {}) {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (reduceMotion) return;
    let frame = 0;
    const start = Date.now() + delay;
    const tick = () => {
      const t = Math.min(1, Math.max(0, (Date.now() - start) / duration));
      setProgress(easeOut(t));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, delay, reduceMotion]);
  return reduceMotion ? target : target * progress;
}
