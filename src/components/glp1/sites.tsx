import { Text, View } from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { Chip } from '@/components/ui/chip';
import { colors } from '@/constants/colors';
import { BODY_SIDES, BODY_SIDE_LABELS, INJECTION_SITE_LABELS, INJECTION_SITES, siteName, type BodySide, type DoseLog, type InjectionSite, type LastSite } from '@/shared/glp1';

/** "7 days ago", "today", "yesterday". */
export function daysAgoText(iso: string) {
  const start = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const days = Math.round((start(new Date()) - start(new Date(iso))) / 86_400_000);
  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  return `${days} days ago`;
}

export const lastSiteText = (last: LastSite) => `Last: ${siteName(last.site, last.side).toLowerCase()} · ${daysAgoText(last.takenAt)}`;

type SitePickerProps = {
  site: InjectionSite | null;
  side: BodySide | null;
  onChange: (site: InjectionSite | null, side: BodySide | null) => void;
  last: LastSite | null;
};

/**
 * Where the dose went: stomach, thigh or upper arm, on the left or the right. The last site is
 * shown; a next site is never suggested (the label and the prescriber say how to rotate).
 */
export function SitePicker({ site, side, onChange, last }: SitePickerProps) {
  return (
    <View>
      <View className="mb-2 flex-row items-baseline justify-between">
        <Text className="text-[14px] font-semibold text-ink">Where (optional)</Text>
        {last ? <Text className="text-[13px] text-muted">{lastSiteText(last)}</Text> : null}
      </View>
      <View className="gap-2">
        {INJECTION_SITES.map((place) => (
          <View key={place} className="flex-row items-center gap-2">
            <Text className="w-[84px] text-[15px] text-ink">{INJECTION_SITE_LABELS[place]}</Text>
            {BODY_SIDES.map((s) => {
              const selected = site === place && side === s;
              return (
                <Chip
                  key={s}
                  label={BODY_SIDE_LABELS[s]}
                  selected={selected}
                  onPress={() => (selected ? onChange(null, null) : onChange(place, s))}
                  className="flex-1"
                />
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}

// Positions on the outline, as you see your own body: your left on the left.
const SPOTS: Record<InjectionSite, Record<BodySide, { x: number; y: number }>> = {
  abdomen: { left: { x: 88, y: 118 }, right: { x: 112, y: 118 } },
  thigh: { left: { x: 86, y: 182 }, right: { x: 114, y: 182 } },
  upper_arm: { left: { x: 52, y: 84 }, right: { x: 148, y: 84 } },
};

/** The last six doses with a site as dots on a front-view outline, the latest in black. */
export function RecentSites({ doses }: { doses: DoseLog[] }) {
  const recent = doses.filter((d) => d.site).slice(0, 6);
  if (recent.length === 0) return null;
  const latest = recent[0];
  const described = recent.map((d) => siteName(d.site!, d.side).toLowerCase()).join(', ');
  return (
    <View>
      <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">Recent sites</Text>
      <View className="flex-row items-center gap-4 rounded-[20px] border border-line px-4 py-3">
        <View accessible accessibilityRole="image" accessibilityLabel={`Your last ${recent.length} sites, the latest first: ${described}`}>
          <Svg width={120} height={156} viewBox="0 0 200 260">
            <Circle cx={100} cy={26} r={18} fill={colors.surface} stroke={colors.faint} strokeWidth={2} />
            <Path d="M62 54 Q100 44 138 54 L132 150 Q100 158 68 150 Z" fill={colors.surface} stroke={colors.faint} strokeWidth={2} />
            <Rect x={40} y={56} width={20} height={92} rx={10} fill={colors.surface} stroke={colors.faint} strokeWidth={2} />
            <Rect x={140} y={56} width={20} height={92} rx={10} fill={colors.surface} stroke={colors.faint} strokeWidth={2} />
            <Rect x={70} y={150} width={27} height={100} rx={12} fill={colors.surface} stroke={colors.faint} strokeWidth={2} />
            <Rect x={103} y={150} width={27} height={100} rx={12} fill={colors.surface} stroke={colors.faint} strokeWidth={2} />
            {[...recent].reverse().map((dose) => {
              const isLatest = dose.id === latest.id;
              if (!dose.side) {
                // Older doses have no side: a ring on both sides of that area.
                return BODY_SIDES.map((s) => (
                  <Circle
                    key={`${dose.id}-${s}`}
                    cx={SPOTS[dose.site!][s].x}
                    cy={SPOTS[dose.site!][s].y}
                    r={7}
                    fill="none"
                    stroke={isLatest ? colors.ink : colors.muted}
                    strokeWidth={2}
                    opacity={isLatest ? 1 : 0.55}
                  />
                ));
              }
              const spot = SPOTS[dose.site!][dose.side];
              return (
                <Circle
                  key={dose.id}
                  cx={spot.x}
                  cy={spot.y}
                  r={isLatest ? 9 : 7}
                  fill={isLatest ? colors.ink : colors.muted}
                  opacity={isLatest ? 1 : 0.55}
                  stroke={colors.canvas}
                  strokeWidth={2}
                />
              );
            })}
          </Svg>
          <View className="mt-1 flex-row justify-between px-2">
            <Text className="text-[11px] text-muted">Left</Text>
            <Text className="text-[11px] text-muted">Right</Text>
          </View>
        </View>
        <View className="flex-1 gap-1.5">
          {recent.map((dose, index) => (
            <Text key={dose.id} className={index === 0 ? 'text-[14px] font-semibold text-ink' : 'text-[13px] text-muted'}>
              {siteName(dose.site!, dose.side)} · {daysAgoText(dose.takenAt)}
            </Text>
          ))}
        </View>
      </View>
      <Text className="ml-1 mt-2 text-[13px] leading-[18px] text-muted">
        Follow your medicine&apos;s leaflet or your prescriber on where to inject. EatME only shows where you logged.
      </Text>
    </View>
  );
}
