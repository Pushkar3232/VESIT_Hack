"use client";

import Card from "@/components/ui/Card";
import { Cloud, Sun, CloudRain, Thermometer, Droplets } from "lucide-react";

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
      return <CloudRain size={28} className="text-blue-400" />;
    case "clouds":
      return <Cloud size={28} className="text-gray-400" />;
    default:
      return <Sun size={28} className="text-yellow-400" />;
  }
}

export default function WeatherWidget({ condition, temp, humidity, city = "Mumbai" }: WeatherWidgetProps) {
  return (
    <Card className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-[var(--radius-md)] bg-blue-50 flex items-center justify-center flex-shrink-0">
        {getWeatherIcon(condition)}
      </div>
      <div className="flex-1">
        <p
          style={{ fontFamily: "var(--font-display)" }}
          className="text-[15px] font-semibold text-[var(--text-primary)]"
        >
          {condition} in {city}
        </p>
        <div className="flex items-center gap-4 mt-1.5">
          <span className="flex items-center gap-1.5 text-[13px] text-[var(--text-muted)]">
            <Thermometer size={14} /> {Math.round(temp)}°C
          </span>
          <span className="flex items-center gap-1.5 text-[13px] text-[var(--text-muted)]">
            <Droplets size={14} /> {humidity}%
          </span>
        </div>
      </div>
    </Card>
  );
}
