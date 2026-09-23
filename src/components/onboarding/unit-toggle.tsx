import { SegmentedControl } from '@/components/ui/segmented-control';
import { useOnboardingStore } from '@/lib/onboarding-store';
import type { UnitSystem } from '@/shared/onboarding';

const OPTIONS = [
  { label: 'Imperial', value: 'imperial' },
  { label: 'Metric', value: 'metric' },
] as const satisfies readonly { label: string; value: UnitSystem }[];

/** Imperial / Metric switch — values are always stored in metric. */
export function UnitToggle() {
  const unit = useOnboardingStore((s) => s.answers.unitSystem) ?? 'metric';
  const setAnswers = useOnboardingStore((s) => s.setAnswers);
  return (
    <SegmentedControl options={OPTIONS} value={unit} onChange={(unitSystem) => setAnswers({ unitSystem })} />
  );
}
