import { useMemo } from 'react';
import { View } from 'react-native';

import { WheelPicker } from '@/components/ui/wheel-picker';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const ITEM_HEIGHT = 44;
const VISIBLE = 7;

const daysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate();
const pad = (n: number) => String(n).padStart(2, '0');

type DateWheelsProps = {
  /** YYYY-MM-DD */
  value: string;
  onChange: (value: string) => void;
  minAge?: number;
  maxAge?: number;
};

/** Month / day / year wheels sharing one selection band. */
export function DateWheels({ value, onChange, minAge = 13, maxAge = 100 }: DateWheelsProps) {
  const [year, month, day] = value.split('-').map(Number);
  const thisYear = new Date().getFullYear();

  const years = useMemo(
    () =>
      Array.from({ length: maxAge - minAge + 1 }, (_, i) => {
        const y = thisYear - maxAge + i;
        return { label: String(y), value: y };
      }),
    [maxAge, minAge, thisYear],
  );
  const months = useMemo(() => MONTHS.map((label, i) => ({ label, value: i + 1 })), []);
  const dayCount = daysInMonth(year, month);
  const days = useMemo(
    () => Array.from({ length: dayCount }, (_, i) => ({ label: String(i + 1), value: i + 1 })),
    [dayCount],
  );

  const update = (next: { year?: number; month?: number; day?: number }) => {
    const y = next.year ?? year;
    const m = next.month ?? month;
    const d = Math.min(next.day ?? day, daysInMonth(y, m));
    onChange(`${y}-${pad(m)}-${pad(d)}`);
  };

  return (
    <View className="relative flex-row">
      <View
        pointerEvents="none"
        style={{ top: (ITEM_HEIGHT * (VISIBLE - 1)) / 2, height: ITEM_HEIGHT }}
        className="absolute left-0 right-0 rounded-xl bg-surface"
      />
      <WheelPicker
        accessibilityLabel="Month"
        className="flex-[1.6]"
        showBand={false}
        items={months}
        value={month}
        onChange={(m) => update({ month: m })}
      />
      <WheelPicker
        key={`days-${dayCount}`}
        accessibilityLabel="Day"
        className="flex-1"
        showBand={false}
        items={days}
        value={Math.min(day, dayCount)}
        onChange={(d) => update({ day: d })}
      />
      <WheelPicker
        accessibilityLabel="Year"
        className="flex-[1.2]"
        showBand={false}
        items={years}
        value={Math.min(Math.max(year, thisYear - maxAge), thisYear - minAge)}
        onChange={(y) => update({ year: y })}
      />
    </View>
  );
}
