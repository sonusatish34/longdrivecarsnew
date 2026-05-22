// utils/redirectUtils.js
import { trackEvent } from "./trackEvent";

export const handleStoreRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Track the event
    trackEvent({ eventName: 'Lead', customData: { content_name: 'Download Button' } });

    const appleStore = "https://apps.apple.com/in/app/long-drive-cars/id6466695391";
    const googleStore = "https://play.google.com/store/apps/details?id=com.long_drive_cars.car";

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Redirect to App Store - Use window.location.assign instead of window.open
        window.location.assign(appleStore);
    } else if (/android/i.test(userAgent)) {
        // Redirect to Play Store - Use window.location.assign
        window.location.assign(googleStore);
    } else {
        alert("App is available only on mobile devices.");
    }
};