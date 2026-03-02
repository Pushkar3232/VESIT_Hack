"use client";

import Card from "@/components/ui/Card";
import { TrendingUp, TrendingDown, Users, MapPin, AlertTriangle } from "lucide-react";

interface QuickStatsProps {
  totalPlaces: number;
  avgCrowdScore: number;
  highAlerts: number;
  trend: "up" | "down";
}

export default function QuickStats({ totalPlaces, avgCrowdScore, highAlerts, trend }: QuickStatsProps) {
  return (
    <div className="stats-grid">
      <Card hover={false} className="!p-4 text-center">
        <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--accent-light)] flex items-center justify-center mx-auto mb-2">
          <MapPin size={18} className="text-[var(--accent-hover)]" />
        </div>
        <p style={{ fontFamily: "var(--font-display)" }} className="text-[22px] font-bold text-[var(--text-primary)]">
          {totalPlaces}
        </p>
        <p className="text-[11px] text-[var(--text-muted)] mt-0.5">Places</p>
      </Card>

      <Card hover={false} className="!p-4 text-center">
        <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-blue-50 flex items-center justify-center mx-auto mb-2">
          <Users size={18} className="text-[var(--info)]" />
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <p style={{ fontFamily: "var(--font-display)" }} className="text-[22px] font-bold text-[var(--text-primary)]">
            {avgCrowdScore}
          </p>
          {trend === "up" ? (
            <TrendingUp size={14} className="text-[var(--error)]" />
          ) : (
            <TrendingDown size={14} className="text-[var(--success)]" />
          )}
        </div>
        <p className="text-[11px] text-[var(--text-muted)] mt-0.5">Avg Score</p>
      </Card>

      <Card hover={false} className="!p-4 text-center">
        <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-red-50 flex items-center justify-center mx-auto mb-2">
          <AlertTriangle size={18} className="text-[var(--error)]" />
        </div>
        <p style={{ fontFamily: "var(--font-display)" }} className="text-[22px] font-bold text-[var(--text-primary)]">
          {highAlerts}
        </p>
        <p className="text-[11px] text-[var(--text-muted)] mt-0.5">Alerts</p>
      </Card>
    </div>
  );
}
