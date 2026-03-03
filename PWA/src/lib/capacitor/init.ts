/**
 * Initialize Capacitor plugins and native app lifecycle
 */
export const initializeCapacitor = async () => {
  // Dynamic import to only load in native environment
  try {
    const { App } = await import('@capacitor/app');
    const { SplashScreen } = await import('@capacitor/splash-screen');
    
    // Hide splash screen when app is ready
    try {
      await SplashScreen.hide();
    } catch (error) {
      console.log('Splash screen not available:', error);
    }

    // Handle app pause/resume
    App.addListener('pause', () => {
      console.log('App paused');
    });

    App.addListener('resume', () => {
      console.log('App resumed');
    });

    // Handle back button on Android
    App.addListener('backButton', ({ canGoBack }) => {
      if (!canGoBack) {
        // Exit app
        App.exitApp();
      } else {
        // Go back
        window.history.back();
      }
    });
  } catch (error) {
    console.log('Capacitor not available (running on web):', error);
  }
};

/**
 * Check if app is running in Capacitor native environment
 */
export const isNativeApp = (): boolean => {
  return (window as any).capacitor !== undefined;
};

/**
 * Get platform info
 */
export const getPlatform = async () => {
  try {
    const { App } = await import('@capacitor/app');
    const info = await App.getInfo();
    return info;
  } catch (error) {
    console.log('Cannot get app info:', error);
    return null;
  }
};
