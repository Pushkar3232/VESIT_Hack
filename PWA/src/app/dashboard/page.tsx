"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Card from "@/components/ui/Card";
import QuickStats from "@/components/dashboard/QuickStats";
import StationCard from "@/components/dashboard/StationCard";
import WeatherWidget from "@/components/dashboard/WeatherWidget";
import CrowdHeatmap from "@/components/dashboard/CrowdHeatmap";
import { ArrowUpRight, Users } from "lucide-react";
import Link from "next/link";
import type { Place } from "@/types/place";

export default function DashboardPage() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [weather, setWeather] = useState({ condition: "Clear", temp: 30, humidity: 60 });

  useEffect(() => {
    fetch("/api/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data.places ?? []))
      .catch(() => {});

    fetch("/api/weather?city=Mumbai")
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch(() => {});
  }, []);

  const avgScore = places.length
    ? Math.round(places.reduce((sum, p) => sum + (p.currentCrowdScore ?? 0), 0) / places.length)
    : 0;
  const highAlerts = places.filter((p) => (p.currentCrowdScore ?? 0) > 70).length;

  return (
    <div className="px-5 pb-6">
      <Navbar userName="User" />

      <div className="mt-4 space-y-5">
        {/* Feature Banner Card */}
        <Card featured className="relative overflow-hidden">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[13px] text-[#333333] font-medium">Live Monitoring</p>
              <h2 className="text-[18px] font-bold text-[#111111] mt-1">
                Crowd Density Tracker
              </h2>
              <p className="text-[12px] text-[#555555] mt-1">
                Real-time updates across {places.length} stations
              </p>
              <div className="flex items-baseline gap-2 mt-3">
                <span className="text-[28px] font-extrabold text-[#111111]">
                  {places.length}
                </span>
                <span className="text-[12px] text-[#666666]">stations monitored</span>
              </div>
            </div>
            <div className="flex -space-x-2">
              {["🚉", "🚇", "🚌"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-[14px]"
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/predict"
            className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-[var(--shadow-icon-btn)] no-underline"
          >
            <ArrowUpRight size={16} className="text-[#111111]" />
          </Link>
        </Card>

        {/* Weather Widget */}
        <WeatherWidget
          condition={weather.condition}
          temp={weather.temp}
          humidity={weather.humidity}
        />

        {/* Quick Stats */}
        <QuickStats
          totalPlaces={places.length}
          avgCrowdScore={avgScore}
          highAlerts={highAlerts}
          trend={avgScore > 50 ? "up" : "down"}
        />

        {/* Crowd Heatmap */}
        <CrowdHeatmap />

        {/* Station List */}
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] font-bold text-[var(--color-text-primary)]">
            Top Stations
          </h2>
          <Link href="/predict" className="text-[13px] font-medium text-[var(--color-accent)] no-underline">
            See All
          </Link>
        </div>

        <div className="space-y-3">
          {places.map((place) => (
            <StationCard
              key={place.id}
              name={place.name}
              city={place.city}
              crowdScore={place.currentCrowdScore ?? 0}
              type={place.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
