"use client";

import AlertCard from "./AlertCard";
import type { Alert } from "@/types/alert";

interface AlertFeedProps {
  alerts: Alert[];
}

export default function AlertFeed({ alerts }: AlertFeedProps) {
  if (alerts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-[40px] mb-3">🔔</p>
        <p className="text-[16px] font-semibold text-[var(--color-text-primary)]">
          No Active Alerts
        </p>
        <p className="text-[13px] text-[var(--color-text-muted)] mt-1">
          All monitored stations are within normal crowd levels
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {alerts.map((alert) => (
        <AlertCard key={alert.id} alert={alert} />
      ))}
    </div>
  );
}
