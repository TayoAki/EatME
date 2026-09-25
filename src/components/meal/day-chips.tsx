import { ScrollView } from 'react-native';

import { Chip } from '@/components/ui/chip';
import { formatShortDay, recentDays } from '@/lib/time';

/** How far back meals can be copied from or to (PLAN.md §16: the last 14 days). */
export const COPY_DAYS = 14;

type DayChipsProps = {
  selected: string | null;
  onSelect: (isoDate: string) => void;
  /** A day that can't be picked (the one being copied from or to). */
  exclude?: string;
};

/** Today and the 13 days before it as a row of chips. */
export function DayChips({ selected, onSelect, exclude }: DayChipsProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-2">
      {recentDays(COPY_DAYS)
        .filter((day) => day !== exclude)
        .map((day) => (
          <Chip key={day} label={formatShortDay(day)} selected={selected === day} onPress={() => onSelect(day)} />
        ))}
    </ScrollView>
  );
}
