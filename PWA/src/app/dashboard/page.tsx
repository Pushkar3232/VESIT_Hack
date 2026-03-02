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
    <div className="page-container pb-8 animate-enter">
      <Navbar userName="User" />

      <div className="mt-2 space-y-6 lg:space-y-8">
        {/* Feature Banner Card */}
        <Card featured className="relative overflow-visible">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[13px] text-[var(--feature-text)] font-medium opacity-80">Live Monitoring</p>
              <h2
                style={{ fontFamily: "var(--font-display)" }}
                className="text-[18px] lg:text-[22px] font-bold text-[var(--feature-text)] mt-1"
              >
                Crowd Density Tracker
              </h2>
              <p className="text-[12px] text-[var(--feature-text)] opacity-70 mt-1">
                Real-time updates across {places.length} stations
              </p>
              <div className="flex items-baseline gap-2 mt-3">
                <span
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-[32px] font-extrabold text-[var(--feature-text)]"
                >
                  {places.length}
                </span>
                <span className="text-[12px] text-[var(--feature-text)] opacity-60">stations monitored</span>
              </div>
            </div>
            <div className="flex -space-x-2">
              {["🚉", "🚇", "🚌"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-white/90 border-2 border-white flex items-center justify-center text-[14px] shadow-[var(--shadow-xs)]"
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/predict"
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[var(--shadow-sm)] no-underline hover:scale-105 transition-transform"
          >
            <ArrowUpRight size={18} className="text-[var(--feature-text)]" />
          </Link>
        </Card>

        {/* Two column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats */}
            <QuickStats
              totalPlaces={places.length}
              avgCrowdScore={avgScore}
              highAlerts={highAlerts}
              trend={avgScore > 50 ? "up" : "down"}
            />

            {/* Crowd Heatmap */}
            <CrowdHeatmap />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Weather Widget */}
            <WeatherWidget
              condition={weather.condition}
              temp={weather.temp}
              humidity={weather.humidity}
            />
          </div>
        </div>

        {/* Station List */}
        <div>
          <div className="section-header">
            <h2 style={{ fontFamily: "var(--font-display)" }}>Top Stations</h2>
            <Link href="/predict" className="text-[13px] font-medium text-[var(--accent-hover)] no-underline hover:underline">
              See All →
            </Link>
          </div>

          <div className="grid-cards">
            {places.map((place, i) => (
              <div key={place.id} className={`animate-enter stagger-${Math.min(i + 1, 5)}`}>
                <StationCard
                  name={place.name}
                  city={place.city}
                  crowdScore={place.currentCrowdScore ?? 0}
                  type={place.type}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
