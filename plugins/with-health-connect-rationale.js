// Health Connect's permission screen links to the app's privacy policy, and Google checks that
// link for apps that read health data. react-native-health-connect's plugin sends it to the main
// activity, which would only open the app. This plugin adds a small activity that opens EatME's
// privacy policy in the browser and points both entries at it: the rationale intent (through
// Android 13) and the ViewPermissionUsageActivity alias (Android 14 and later).
//
// List this plugin BEFORE "react-native-health-connect" in app.json: mods run in reverse order of
// registration, so it then runs after that plugin has added its intent filter and alias.
const fs = require('fs');
const path = require('path');

const { AndroidConfig, withAndroidManifest, withDangerousMod } = require('expo/config-plugins');

const RATIONALE_ACTION = 'androidx.health.ACTION_SHOW_PERMISSIONS_RATIONALE';
const ACTIVITY = 'HealthPrivacyActivity';
const ALIAS = 'ViewPermissionUsageActivity';

/** The privacy policy served by the EatME server (EXPO_PUBLIC_LEGAL_URL in eas.json). */
function privacyUrl() {
  const base = (process.env.EXPO_PUBLIC_LEGAL_URL || 'https://api-production-174d.up.railway.app').replace(/\/$/, '');
  return `${base}/privacy`;
}

const kotlin = (pkg, url) => `package ${pkg}

import android.app.Activity
import android.content.ActivityNotFoundException
import android.content.Intent
import android.net.Uri
import android.os.Bundle

/** Health Connect's "privacy policy" link: EatME's privacy policy, in the browser. */
class ${ACTIVITY} : Activity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    try {
      startActivity(Intent(Intent.ACTION_VIEW, Uri.parse("${url}")))
    } catch (error: ActivityNotFoundException) {
      // No browser: nothing to show.
    }
    finish()
  }
}
`;

const withActivitySource = (config) =>
  withDangerousMod(config, [
    'android',
    async (config) => {
      const pkg = config.android?.package;
      if (!pkg) throw new Error('with-health-connect-rationale: android.package is not set');
      const dir = path.join(config.modRequest.platformProjectRoot, 'app', 'src', 'main', 'java', ...pkg.split('.'));
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, `${ACTIVITY}.kt`), kotlin(pkg, privacyUrl()));
      return config;
    },
  ]);

const withActivityManifest = (config) =>
  withAndroidManifest(config, (config) => {
    const application = AndroidConfig.Manifest.getMainApplicationOrThrow(config.modResults);
    const main = AndroidConfig.Manifest.getMainActivityOrThrow(config.modResults);
    const answersRationale = (filter) => (filter.action ?? []).some((action) => action.$['android:name'] === RATIONALE_ACTION);

    main['intent-filter'] = (main['intent-filter'] ?? []).filter((filter) => !answersRationale(filter));
    application.activity = (application.activity ?? []).filter((activity) => activity.$['android:name'] !== `.${ACTIVITY}`);
    application.activity.push({
      $: { 'android:name': `.${ACTIVITY}`, 'android:exported': 'true', 'android:theme': '@android:style/Theme.Translucent.NoTitleBar' },
      'intent-filter': [{ action: [{ $: { 'android:name': RATIONALE_ACTION } }] }],
    });
    for (const alias of application['activity-alias'] ?? []) {
      if (alias.$['android:name'] === ALIAS) alias.$['android:targetActivity'] = `.${ACTIVITY}`;
    }
    return config;
  });

module.exports = (config) => withActivityManifest(withActivitySource(config));
