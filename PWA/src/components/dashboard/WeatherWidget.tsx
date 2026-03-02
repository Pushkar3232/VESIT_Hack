"use client";

import Card from "@/components/ui/Card";
import { Cloud, Sun, CloudRain, Thermometer } from "lucide-react";

interface WeatherWidgetProps {
  condition: string;
  temp: number;
  humidity: number;
  city?: string;
}

function getWeatherIcon(condition: string) {
  switch (condition.toLowerCase()) {
    case "rain":
    case "drizzle":
    case "thunderstorm":
      return <CloudRain size={24} className="text-blue-400" />;
    case "clouds":
      return <Cloud size={24} className="text-gray-400" />;
    default:
      return <Sun size={24} className="text-yellow-400" />;
  }
}

export default function WeatherWidget({ condition, temp, humidity, city = "Mumbai" }: WeatherWidgetProps) {
  return (
    <Card className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-[var(--radius-md)] bg-blue-50 flex items-center justify-center">
        {getWeatherIcon(condition)}
      </div>
      <div className="flex-1">
        <p className="text-[14px] font-semibold text-[var(--color-text-primary)]">
          {condition} in {city}
        </p>
        <div className="flex items-center gap-3 mt-1">
          <span className="flex items-center gap-1 text-[12px] text-[var(--color-text-muted)]">
            <Thermometer size={12} /> {Math.round(temp)}°C
          </span>
          <span className="text-[12px] text-[var(--color-text-muted)]">
            💧 {humidity}%
          </span>
        </div>
      </div>
    </Card>
  );
}
