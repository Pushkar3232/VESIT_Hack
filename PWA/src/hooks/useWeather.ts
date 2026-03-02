"use client";

import { useState, useEffect, useCallback } from "react";

interface WeatherData {
  condition: string;
  temp: number;
  humidity: number;
}

export function useWeather(city: string = "Mumbai") {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
      if (!res.ok) throw new Error("Failed to fetch weather");
      const data = await res.json();
      setWeather(data);
    } catch {
      // Fallback data
      setWeather({ condition: "Clear", temp: 30, humidity: 60 });
    } finally {
      setIsLoading(false);
    }
  }, [city]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return { weather, isLoading, refetch: fetchWeather };
}
