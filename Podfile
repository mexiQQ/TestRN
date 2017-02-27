platform :ios, '7.0'

target 'TestRN' do

    # ignore all warnings from all pods
    inhibit_all_warnings!

    pod 'React', :path => './node_modules/react-native', :subspecs => [
        'Core',
        'RCTText',
        'RCTNetwork',
        'RCTWebSocket', # 这个模块是用于调试功能的
        'RCTImage',
        'RCTAnimation',
        'RCTActionSheet'
    ]
end

