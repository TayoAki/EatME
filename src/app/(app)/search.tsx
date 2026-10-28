import * as Sentry from '@sentry/react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FoodSearchView } from '@/components/scan/food-search-view';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { allowDrinksInHealth } from '@/lib/health';
import { useLogDrink, useLogFood } from '@/lib/queries';
import { todayIso } from '@/lib/time';

/**
 * Search foods from Home's meals section: a database food or a drink is logged on the day Home shows
 * (`date`, today when left out) at once, with no AI, and the screen goes back to Home, where it's in the list.
 */
export default function SearchScreen() {
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ date?: string }>();
  const today = todayIso();
  const date = params.date && /^\d{4}-\d{2}-\d{2}$/.test(params.date) && params.date <= today ? params.date : today;
  const logFood = useLogFood();
  const logDrink = useLogDrink();

  const logged = () => {
    haptics.success();
    router.back();
  };
  const failed = (kind: 'food' | 'drink') => (error: Error) => {
    Sentry.logger.error('Logging from Search failed', { kind, error: error.message });
    notify(`We couldn't log this ${kind}`, error.message);
  };

  return (
    <FoodSearchView
      bottomSpace={insets.bottom + 16}
      date={date}
      backLabel="Back to Home"
      saving={logFood.isPending}
      onBack={() => router.back()}
      onLog={(food, grams) => logFood.mutate({ foodId: food.id, grams, date }, { onSuccess: logged, onError: failed('food') })}
      onLogDrink={(drink) => {
        // The drink form has no spinner of its own: a second tap while it saves logs nothing.
        if (logDrink.isPending) return;
        void allowDrinksInHealth();
        logDrink.mutate({ drink, date }, { onSuccess: logged, onError: failed('drink') });
      }}
      onLoggedDish={() => router.back()}
      // Describe a meal lives on the Scan tab and logs at "now", so only for today.
      onDescribe={date === today ? (text) => router.navigate({ pathname: '/scan', params: { describe: text, at: String(Date.now()) } }) : undefined}
    />
  );
}
