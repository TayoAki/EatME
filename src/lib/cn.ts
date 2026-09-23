/** Join class names, skipping falsy values. Avoid passing conflicting utilities. */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
