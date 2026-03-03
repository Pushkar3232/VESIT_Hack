import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.smartdensity.pwa',
  appName: 'SmartDensity',
  webDir: 'public',
  
  // Web server configuration for development
  server: {
    // point to the publicly hosted web app URL for live deployment
    url: process.env.CAPACITOR_SERVE_URL || 'https://smartdensity.pushkarshinde.in',
    androidScheme: 'https',
    cleartext: true,
    allowNavigation: ['*'],
  },
  
  // iOS specific configuration
  ios: {
    limitsNavigationsToAppBoundDomains: false,
    scrollEnabled: true,
    preferredContentMode: 'mobile',
  },
  
  // Android specific configuration
  android: {
    allowMixedContent: true,
    webContentsDebuggingEnabled: process.env.NODE_ENV === 'development',
    captureInput: true,
  },
  
  // Plugins configuration
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: '#ffffff',
      showSpinner: false,
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#ffffff',
    },
  },
};

export default config;
