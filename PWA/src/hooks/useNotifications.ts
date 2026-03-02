"use client";

import { useState, useCallback } from "react";

export function useNotifications() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const subscribe = useCallback(async () => {
    setIsLoading(true);
    try {
      const vapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
      if (!vapidKey || vapidKey === "your_vapid_public_key_here") {
        console.warn("VAPID public key not configured. Set NEXT_PUBLIC_VAPID_PUBLIC_KEY in .env.local");
        setIsLoading(false);
        return;
      }

      if (typeof window === "undefined" || !("Notification" in window) || !("serviceWorker" in navigator)) {
        console.warn("Push notifications are not supported in this environment");
        setIsLoading(false);
        return;
      }

      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        throw new Error("Notification permission denied");
      }

      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: vapidKey,
      });

      // Send subscription to server
      await fetch("/api/notifications/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sub),
      });

      setIsSubscribed(true);
    } catch (err) {
      console.error("Failed to subscribe to notifications:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { subscribe, isSubscribed, isLoading };
}
