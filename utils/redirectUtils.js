// utils/redirectUtils.js
import { trackEvent } from "./trackEvent";

export const handleStoreRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const maxTouchPoints = navigator.maxTouchPoints || 0;
    const isTouchDevice = maxTouchPoints > 0 || 'ontouchend' in document;

    // Track the event
    trackEvent({ eventName: 'Lead', customData: { content_name: 'Download Button' } });

    const appleStore = "https://apps.apple.com/in/app/long-drive-cars/id6466695391";
    const googleStore = "https://play.google.com/store/apps/details?id=com.long_drive_cars.car";

    // Detect iOS (Standard UA OR iPad/iPhone spoofing desktop mode)
    const isIOSUA = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isIOSDesktopMode = /Macintosh/.test(userAgent) && isTouchDevice;

    // Detect Android (Standard UA OR Android spoofing desktop mode)
    const isAndroidUA = /android/i.test(userAgent);
    const isAndroidDesktopMode = /Linux/.test(userAgent) && isTouchDevice && !/Macintosh|Windows/.test(userAgent);

    if (isIOSUA || isIOSDesktopMode) {
        window.location.assign(appleStore);
    } else if (isAndroidUA || isAndroidDesktopMode) {
        window.location.assign(googleStore);
    } else {
        alert("App is available only on mobile devices.");
    }
};