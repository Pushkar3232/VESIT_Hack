import { useEffect, useState } from 'react';
import { isNativeApp, initializeCapacitor, getPlatform } from '@/lib/capacitor/init';

type AppInfo = {
  id?: string;
  name?: string;
  version?: string;
  build?: string;
} | null;

/**
 * Hook to initialize and track Capacitor native app environment
 */
export const useCapacitor = () => {
  const [isNative, setIsNative] = useState(false);
  const [appInfo, setAppInfo] = useState<AppInfo>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initApp = async () => {
      // Check if running in native environment
      const native = isNativeApp();
      setIsNative(native);

      if (native) {
        try {
          // Initialize Capacitor plugins
          await initializeCapacitor();

          // Get app platform info
          const info = await getPlatform();
          if (info) {
            setAppInfo(info);
            console.log('Native app initialized:', info);
          }
        } catch (error) {
          console.error('Failed to initialize Capacitor:', error);
        }
      }

      setIsLoading(false);
    };

    initApp().catch((error) => {
      console.error('Failed to initialize Capacitor:', error);
      setIsLoading(false);
    });
  }, []);

  return {
    isNative,
    appInfo,
    isLoading,
  };
};
