import { Check, Pill, Syringe } from 'lucide-react-native';
import { Text, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { fromIsoDate } from '@/lib/time';
import type { Glp1Response } from '@/shared/glp1';
import type { UnitSystem } from '@/shared/onboarding';
import { formatVolume } from '@/shared/units';

function FocusBar({ label, value, goal, color, text }: { label: string; value: number; goal: number; color: string; text: string }) {
  const ratio = goal > 0 ? Math.min(1, value / goal) : 0;
  return (
    <View className="flex-row items-center gap-3">
      <Text className="w-[58px] text-[14px] text-ink">{label}</Text>
      <View className="h-2 flex-1 overflow-hidden rounded-full bg-surface">
        <View style={{ width: `${ratio * 100}%`, backgroundColor: color }} className="h-full rounded-full" />
      </View>
      <Text className="w-[92px] text-right text-[13px] text-muted">{text}</Text>
    </View>
  );
}

type Glp1CardProps = {
  glp1: Glp1Response;
  proteinG: number;
  proteinGoalG: number;
  fiberG: number;
  fiberGoalG: number;
  waterMl: number;
  waterGoalMl: number;
  unit: UnitSystem;
  onLogDose: () => void;
  onLogSymptoms: () => void;
};

/**
 * GLP-1 mode on Home: the dose schedule the user entered, and protein, fiber and water first —
 * they protect muscle and keep digestion comfortable while appetite is low.
 */
export function Glp1Card({ glp1, proteinG, proteinGoalG, fiberG, fiberGoalG, waterMl, waterGoalMl, unit, onLogDose, onLogSymptoms }: Glp1CardProps) {
  const settings = glp1.settings;
  if (!settings) return null;
  const Icon = settings.medication === 'semaglutide_tablet' ? Pill : Syringe;
  const status = glp1.takenToday
    ? 'Dose logged today'
    : glp1.nextDose === glp1.today
      ? 'Dose day today'
      : glp1.nextDose
        ? `Next dose ${fromIsoDate(glp1.nextDose).toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}`
        : '';

  return (
    <View className="mx-5 mb-4 rounded-card border border-line bg-canvas p-4">
      <View className="flex-row items-center gap-2">
        <Icon size={18} color={colors.ink} strokeWidth={1.8} />
        <Text className="text-[16px] font-bold tracking-tight text-ink">GLP-1</Text>
        <Text className="text-[16px] text-faint">·</Text>
        <Text className="flex-1 text-[15px] text-ink" numberOfLines={1}>
          {status}
        </Text>
        {glp1.takenToday ? <Check size={18} color={colors.success} strokeWidth={2.4} /> : null}
      </View>
      <Text className="mt-1 text-[13px] leading-[18px] text-muted">
        Protein at every meal, fiber and water through the day.
      </Text>
      <View className="mt-3 gap-2">
        <FocusBar label="Protein" value={proteinG} goal={proteinGoalG} color={colors.protein} text={`${proteinG} / ${proteinGoalG} g`} />
        <FocusBar label="Fiber" value={fiberG} goal={fiberGoalG} color={colors.fiber} text={`${fiberG} / ${fiberGoalG} g`} />
        <FocusBar
          label="Water"
          value={waterMl}
          goal={waterGoalMl}
          color={colors.water}
          text={`${formatVolume(waterMl, unit)}`}
        />
      </View>
      <View className="mt-4 flex-row gap-2">
        <Button title={glp1.takenToday ? 'Log another dose' : 'Log dose'} size="md" variant="secondary" className="flex-1 px-3" onPress={onLogDose} />
        <Button title="How do you feel?" size="md" variant="outline" className="flex-1 px-3" onPress={onLogSymptoms} />
      </View>
    </View>
  );
}
