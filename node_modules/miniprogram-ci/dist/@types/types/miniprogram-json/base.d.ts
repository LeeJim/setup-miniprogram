export declare namespace BaseInfo {
    type NavigationBarTextStyle = 'black' | 'white';
    type NavigationStyle = 'default' | 'custom';
    type BackgroundTextStyle = 'dark' | 'light';
    type PageOrientation = 'portrait' | 'auto' | 'landscape';
    type RuntimePageOrientation = Exclude<PageOrientation, 'auto'>;
    type DeviceOrientation = RuntimePageOrientation | 'landscapeLeft' | 'landscapeRight';
}
