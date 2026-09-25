import { useProfile } from './queries';

/** Calm mode (Preferences): hide calorie and macro numbers, no streak pressure. */
export function useCalmMode() {
  return !!useProfile()?.preferences.calmMode;
}
