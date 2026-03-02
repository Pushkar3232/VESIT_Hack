"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import AlertFeed from "@/components/alerts/AlertFeed";
import Loader from "@/components/ui/Loader";
import type { Alert } from "@/types/alert";

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/alerts")
      .then((res) => res.json())
      .then((data) => setAlerts(data.alerts ?? []))
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, []);

  const criticalCount = alerts.filter((a) => a.severity === "critical").length;
  const warningCount = alerts.filter((a) => a.severity === "warning").length;

  return (
    <div className="px-5 pb-6">
      <Navbar variant="detail" title="Live Alerts" />

      <div className="mt-4 space-y-5">
        <div>
          <h2 className="text-[22px] font-bold text-[var(--color-text-primary)] mb-1">
            Crowd Alerts
          </h2>
          <p className="text-[13px] text-[var(--color-text-muted)]">
            Real-time crowd alerts from monitored stations
          </p>
        </div>

        {/* Alert Summary */}
        {!isLoading && alerts.length > 0 && (
          <div className="flex gap-3">
            <div className="flex-1 bg-red-50 rounded-[var(--radius-md)] p-3 text-center">
              <p className="text-[20px] font-bold text-red-600">{criticalCount}</p>
              <p className="text-[11px] text-red-500 font-medium">Critical</p>
            </div>
            <div className="flex-1 bg-amber-50 rounded-[var(--radius-md)] p-3 text-center">
              <p className="text-[20px] font-bold text-amber-600">{warningCount}</p>
              <p className="text-[11px] text-amber-500 font-medium">Warnings</p>
            </div>
            <div className="flex-1 bg-blue-50 rounded-[var(--radius-md)] p-3 text-center">
              <p className="text-[20px] font-bold text-blue-600">
                {alerts.length - criticalCount - warningCount}
              </p>
              <p className="text-[11px] text-blue-500 font-medium">Info</p>
            </div>
          </div>
        )}

        {isLoading ? (
          <div className="py-12">
            <Loader size={32} />
          </div>
        ) : (
          <AlertFeed alerts={alerts} />
        )}
      </div>
    </div>
  );
}
