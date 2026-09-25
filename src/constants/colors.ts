/** Same palette as tailwind.config.js — for places that need raw values (SVG, icons, native props). */
export const colors = {
  ink: '#111111',
  canvas: '#FFFFFF',
  surface: '#F6F6F7',
  line: '#EDEDED',
  track: '#EFEFF1',
  muted: '#8E8E93',
  faint: '#C7C7CC',
  protein: '#F2665E',
  carbs: '#F4A63A',
  fat: '#4F8EF7',
  /** Plum and teal: checked for colourblind separation against protein, carbs and fat. */
  fiber: '#B15FB0',
  water: '#14B8A6',
  flame: '#FF7A1A',
  danger: '#E5484D',
  success: '#2FB36B',
} as const;
