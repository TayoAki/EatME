import { requireOptionalNativeModule } from 'expo';

import { dishLinesFromText, type TextBox } from '@/shared/menu-lines';
import { MAX_MENU_LINES, type DishLine } from '@/shared/menus';

type MenuTextModule = {
  /** Text lines Apple's Vision framework finds, with boxes normalized to 0–1000 (top-left origin). */
  read(uri: string): Promise<TextBox[]>;
};

/** The local module in modules/menu-text (iOS only; missing on the web, on Android and in Expo Go). */
const native = requireOptionalNativeModule<MenuTextModule>('MenuText');

/** Whether this phone reads menus itself (only the text is sent) or sends the photos. */
export const readsMenusOnDevice = !!native;

/**
 * The menu's dish lines, read on the phone page by page, for the person to confirm. Null when the
 * phone can't read it: the app sends the photos instead.
 */
export async function readMenuOnDevice(pages: readonly { uri: string }[]): Promise<DishLine[] | null> {
  if (!native) return null;
  try {
    const lines: DishLine[] = [];
    for (const page of pages) {
      const boxes = await native.read(page.uri);
      lines.push(...dishLinesFromText(boxes.filter((b) => b.text.trim()).slice(0, 400)));
    }
    const seen = new Set<string>();
    return lines.filter((line) => !seen.has(line.name.toLowerCase()) && seen.add(line.name.toLowerCase())).slice(0, MAX_MENU_LINES);
  } catch {
    return null;
  }
}
