Pod::Spec.new do |s|
  s.name           = 'MenuText'
  s.version        = '1.0.0'
  s.summary        = 'Reads the text of a menu photo on the iPhone (Apple Vision).'
  s.description    = 'Local Expo module of Weight Class (EatME): What to order reads menus on the phone, so only the text is sent.'
  s.license        = { :type => 'Proprietary' }
  s.author         = 'UGC Mediakits'
  s.homepage       = 'https://docs.expo.dev/modules/'
  s.platforms      = { :ios => '16.4' }
  s.swift_version  = '5.9'
  s.source         = { git: '' }
  s.static_framework = true

  s.dependency 'ExpoModulesCore'
  s.frameworks = 'Vision'

  s.source_files = "**/*.{h,m,swift}"
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
    'SWIFT_COMPILATION_MODE' => 'wholemodule'
  }
end
