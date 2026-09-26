// Privacy manifest for the water widget extension (ExpoWidgetsTarget). App Store Connect rejects a
// build whose app or app extension uses "required reason" APIs without declaring why (ITMS-91053).
// The app's own manifest comes from `ios.privacyManifests` in app.json and CocoaPods adds the
// libraries' reasons to it, but nothing covers the extension, which links React Native, the Expo
// modules and expo-widgets (the widget's data lives in the App Group's user defaults).
//
// List this plugin BEFORE "expo-widgets" in app.json: mods run in reverse order of registration,
// so it then runs after expo-widgets has added the widget target to the Xcode project.
const fs = require('fs');
const path = require('path');

const { IOSConfig, withDangerousMod, withXcodeProject } = require('expo/config-plugins');

const TARGET = 'ExpoWidgetsTarget';
const FILE = 'PrivacyInfo.xcprivacy';

/** [API category, reasons] — the same categories the app declares, as far as the extension links them. */
const ACCESSED_APIS = [
  // CA92.1: the app's own defaults (React Native); 1C8F.1: the App Group shared with the app.
  ['NSPrivacyAccessedAPICategoryUserDefaults', ['CA92.1', '1C8F.1']],
  // C617.1: file dates inside the app container (React Native, Expo modules).
  ['NSPrivacyAccessedAPICategoryFileTimestamp', ['C617.1']],
  // 35F9.1: time since boot to measure elapsed time (React Native).
  ['NSPrivacyAccessedAPICategorySystemBootTime', ['35F9.1']],
];

const MANIFEST = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>NSPrivacyTracking</key>
	<false/>
	<key>NSPrivacyTrackingDomains</key>
	<array/>
	<key>NSPrivacyCollectedDataTypes</key>
	<array/>
	<key>NSPrivacyAccessedAPITypes</key>
	<array>
${ACCESSED_APIS.map(
  ([type, reasons]) => `		<dict>
			<key>NSPrivacyAccessedAPIType</key>
			<string>${type}</string>
			<key>NSPrivacyAccessedAPITypeReasons</key>
			<array>
${reasons.map((reason) => `				<string>${reason}</string>`).join('\n')}
			</array>
		</dict>`,
).join('\n')}
	</array>
</dict>
</plist>
`;

module.exports = function withWidgetPrivacyManifest(config) {
  config = withDangerousMod(config, [
    'ios',
    (config) => {
      const dir = path.join(config.modRequest.platformProjectRoot, TARGET);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, FILE), MANIFEST);
      return config;
    },
  ]);

  return withXcodeProject(config, (config) => {
    const project = config.modResults;
    const targetUuid = project.findTargetKey(TARGET);
    if (!targetUuid) {
      throw new Error(`${TARGET} is missing: list ./plugins/with-widget-privacy-manifest before expo-widgets in app.json.`);
    }
    // The target's own Resources phase (the xcode library would fall back to the app's phase).
    const phases = project.pbxNativeTargetSection()[targetUuid].buildPhases ?? [];
    if (!phases.some((phase) => phase.comment === 'Resources')) {
      project.addBuildPhase([], 'PBXResourcesBuildPhase', 'Resources', targetUuid);
    }
    // Skips the file when the group already has it (prebuild without --clean).
    config.modResults = IOSConfig.XcodeUtils.addResourceFileToGroup({
      filepath: FILE,
      groupName: TARGET,
      project,
      isBuildFile: true,
      targetUuid,
    });
    return config;
  });
};
