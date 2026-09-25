import type { UnitSystem } from './onboarding';

/** Values are always stored in metric (cm / kg). These helpers only convert for display and input. */

export const CM_PER_INCH = 2.54;
export const KG_PER_LB = 0.45359237;

export const kgToLb = (kg: number) => kg / KG_PER_LB;
export const lbToKg = (lb: number) => lb * KG_PER_LB;

export function cmToFeetInches(cm: number) {
  const totalInches = Math.round(cm / CM_PER_INCH);
  return { feet: Math.floor(totalInches / 12), inches: totalInches % 12 };
}

export const feetInchesToCm = (feet: number, inches: number) => (feet * 12 + inches) * CM_PER_INCH;

const roundTo = (value: number, step: number) => Math.round(value / step) * step;

export function formatWeight(kg: number, unit: UnitSystem, decimals = 1) {
  const value = unit === 'metric' ? kg : kgToLb(kg);
  const rounded = roundTo(value, decimals === 0 ? 1 : 0.1);
  return `${rounded.toFixed(decimals)} ${unit === 'metric' ? 'kg' : 'lb'}`;
}

export function formatHeight(cm: number, unit: UnitSystem) {
  if (unit === 'metric') return `${Math.round(cm)} cm`;
  const { feet, inches } = cmToFeetInches(cm);
  return `${feet}′ ${inches}″`;
}

export const weightUnitLabel = (unit: UnitSystem) => (unit === 'metric' ? 'kg' : 'lb');

export const ML_PER_FL_OZ = 29.5735;
export const mlToFlOz = (ml: number) => ml / ML_PER_FL_OZ;
export const flOzToMl = (flOz: number) => flOz * ML_PER_FL_OZ;

/** "1.25 L" / "750 ml" in metric, "42 fl oz" in imperial. */
export function formatVolume(ml: number, unit: UnitSystem) {
  if (unit === 'imperial') return `${Math.round(mlToFlOz(ml))} fl oz`;
  if (ml >= 1000) return `${(Math.round(ml / 50) * 50 / 1000).toLocaleString(undefined, { maximumFractionDigits: 2 })} L`;
  return `${Math.round(ml)} ml`;
}

/** One-tap water amounts: a glass, a bottle, a big bottle (8 / 16 / 24 fl oz in imperial). */
export function waterAmounts(unit: UnitSystem): { ml: number; label: string }[] {
  if (unit === 'imperial') {
    return [8, 16, 24].map((oz) => ({ ml: Math.round(flOzToMl(oz)), label: `${oz} fl oz` }));
  }
  return [250, 500, 750].map((ml) => ({ ml, label: `${ml} ml` }));
}
