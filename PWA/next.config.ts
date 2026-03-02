import type { NextConfig } from "next";
import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/api\.openweathermap\.org/,
      handler: "NetworkFirst",
      options: {
        cacheName: "weather-cache",
        expiration: { maxAgeSeconds: 600 },
      },
    },
    {
      urlPattern: /\/api\/places/,
      handler: "StaleWhileRevalidate",
      options: { cacheName: "places-cache" },
    },
  ],
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {},
};

export default withPWA(nextConfig);
