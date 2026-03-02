"use client";

import Card from "@/components/ui/Card";
import { TrendingUp, TrendingDown, Users, MapPin } from "lucide-react";

interface QuickStatsProps {
  totalPlaces: number;
  avgCrowdScore: number;
  highAlerts: number;
  trend: "up" | "down";
}

export default function QuickStats({ totalPlaces, avgCrowdScore, highAlerts, trend }: QuickStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <Card className="!p-3 text-center">
        <MapPin size={16} className="text-[var(--color-accent)] mx-auto mb-1" />
        <p className="text-[18px] font-bold text-[var(--color-text-primary)]">{totalPlaces}</p>
        <p className="text-[11px] text-[var(--color-text-muted)]">Places</p>
      </Card>
      <Card className="!p-3 text-center">
        <Users size={16} className="text-[var(--color-accent)] mx-auto mb-1" />
        <div className="flex items-center justify-center gap-1">
          <p className="text-[18px] font-bold text-[var(--color-text-primary)]">{avgCrowdScore}</p>
          {trend === "up" ? (
            <TrendingUp size={14} className="text-red-500" />
          ) : (
            <TrendingDown size={14} className="text-green-500" />
          )}
        </div>
        <p className="text-[11px] text-[var(--color-text-muted)]">Avg Score</p>
      </Card>
      <Card className="!p-3 text-center">
        <div className="w-4 h-4 rounded-full bg-red-500 mx-auto mb-1 flex items-center justify-center">
          <span className="text-[8px] text-white font-bold">{highAlerts}</span>
        </div>
        <p className="text-[18px] font-bold text-[var(--color-text-primary)]">{highAlerts}</p>
        <p className="text-[11px] text-[var(--color-text-muted)]">Alerts</p>
      </Card>
    </div>
  );
}
