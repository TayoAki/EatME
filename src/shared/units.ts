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
