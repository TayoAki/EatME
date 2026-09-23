import { useMemo } from 'react';
import { View } from 'react-native';

import { WheelPicker } from '@/components/ui/wheel-picker';
import type { UnitSystem } from '@/shared/onboarding';
import { cmToFeetInches, feetInchesToCm, kgToLb, lbToKg } from '@/shared/units';

const CM = Array.from({ length: 111 }, (_, i) => ({ label: String(120 + i), value: 120 + i }));
const FEET = [3, 4, 5, 6, 7].map((ft) => ({ label: String(ft), value: ft }));
const INCHES = Array.from({ length: 12 }, (_, i) => ({ label: String(i), value: i }));
const KG = Array.from({ length: 221 }, (_, i) => ({ label: String(30 + i), value: 30 + i }));
const LB = Array.from({ length: 485 }, (_, i) => ({ label: String(66 + i), value: 66 + i }));

const ITEM_HEIGHT = 44;
const VISIBLE = 7;
const round1 = (n: number) => Math.round(n * 10) / 10;

type HeightWheelsProps = { heightCm: number; unit: UnitSystem; onChange: (heightCm: number) => void };

/** Height in cm (metric) or feet + inches (imperial). Always reports centimeters. */
export function HeightWheels({ heightCm, unit, onChange }: HeightWheelsProps) {
  const { feet, inches } = useMemo(() => cmToFeetInches(heightCm), [heightCm]);

  if (unit === 'metric') {
    return (
      <WheelPicker
        key="cm"
        accessibilityLabel="Height in centimeters"
        items={CM}
        value={Math.min(230, Math.max(120, Math.round(heightCm)))}
        suffix="cm"
        onChange={onChange}
      />
    );
  }

  return (
    <View className="relative flex-row">
      <View
        pointerEvents="none"
        style={{ top: (ITEM_HEIGHT * (VISIBLE - 1)) / 2, height: ITEM_HEIGHT }}
        className="absolute left-0 right-0 rounded-xl bg-surface"
      />
      <WheelPicker
        key="ft"
        accessibilityLabel="Height in feet"
        className="flex-1"
        showBand={false}
        items={FEET}
        value={Math.min(7, Math.max(3, feet))}
        suffix="ft"
        onChange={(ft) => onChange(round1(feetInchesToCm(ft, inches)))}
      />
      <WheelPicker
        key="in"
        accessibilityLabel="Height in inches"
        className="flex-1"
        showBand={false}
        items={INCHES}
        value={inches}
        suffix="in"
        onChange={(inch) => onChange(round1(feetInchesToCm(feet, inch)))}
      />
    </View>
  );
}

type WeightWheelProps = { weightKg: number; unit: UnitSystem; onChange: (weightKg: number) => void; label?: string };

/** Weight in kg or lb. Always reports kilograms. */
export function WeightWheel({ weightKg, unit, onChange, label = 'Weight' }: WeightWheelProps) {
  if (unit === 'metric') {
    return (
      <WheelPicker
        key="kg"
        accessibilityLabel={`${label} in kilograms`}
        items={KG}
        value={Math.min(250, Math.max(30, Math.round(weightKg)))}
        suffix="kg"
        onChange={onChange}
      />
    );
  }
  return (
    <WheelPicker
      key="lb"
      accessibilityLabel={`${label} in pounds`}
      items={LB}
      value={Math.min(550, Math.max(66, Math.round(kgToLb(weightKg))))}
      suffix="lb"
      onChange={(lb) => onChange(round1(lbToKg(lb)))}
    />
  );
}
