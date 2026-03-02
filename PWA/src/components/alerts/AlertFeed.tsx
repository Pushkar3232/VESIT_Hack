"use client";

import AlertCard from "./AlertCard";
import type { Alert } from "@/types/alert";
import { Bell } from "lucide-react";

interface AlertFeedProps {
  alerts: Alert[];
}

export default function AlertFeed({ alerts }: AlertFeedProps) {
  if (alerts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--bg-surface-soft)] flex items-center justify-center mb-4">
          <Bell size={28} className="text-[var(--text-muted)]" />
        </div>
        <p
          style={{ fontFamily: "var(--font-display)" }}
          className="text-[16px] font-semibold text-[var(--text-primary)]"
        >
          No Active Alerts
        </p>
        <p className="text-[13px] text-[var(--text-muted)] mt-1 max-w-[280px]">
          All monitored stations are within normal crowd levels
        </p>
      </div>
    );
  }

  return (
    <div className="grid-cards">
      {alerts.map((alert, i) => (
        <div key={alert.id} className={`animate-enter stagger-${Math.min(i + 1, 5)}`}>
          <AlertCard alert={alert} />
        </div>
      ))}
    </div>
  );
}
