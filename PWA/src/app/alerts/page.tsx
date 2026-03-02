"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import AlertFeed from "@/components/alerts/AlertFeed";
import Card from "@/components/ui/Card";
import Loader from "@/components/ui/Loader";
import { AlertTriangle, AlertCircle, Info } from "lucide-react";
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
  const infoCount = alerts.length - criticalCount - warningCount;

  return (
    <div className="page-container pb-8 animate-enter">
      <Navbar variant="detail" title="Live Alerts" />

      <div className="mt-2 space-y-6">
        <div>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[22px] lg:text-[28px] font-bold text-[var(--text-primary)] mb-1"
          >
            Crowd Alerts
          </h2>
          <p className="text-[13px] text-[var(--text-muted)]">
            Real-time crowd alerts from monitored stations
          </p>
        </div>

        {!isLoading && alerts.length > 0 && (
          <div className="stats-grid">
            <Card hover={false} className="!p-4 text-center !border-red-100 !bg-red-50">
              <AlertCircle size={20} className="text-[var(--error)] mx-auto mb-2" />
              <p style={{ fontFamily: "var(--font-display)" }} className="text-[22px] font-bold text-[var(--error)]">
                {criticalCount}
              </p>
              <p className="text-[11px] text-[var(--error)] font-medium mt-0.5">Critical</p>
            </Card>
            <Card hover={false} className="!p-4 text-center !border-amber-100 !bg-amber-50">
              <AlertTriangle size={20} className="text-[var(--warning)] mx-auto mb-2" />
              <p style={{ fontFamily: "var(--font-display)" }} className="text-[22px] font-bold text-[var(--warning)]">
                {warningCount}
              </p>
              <p className="text-[11px] text-[var(--warning)] font-medium mt-0.5">Warnings</p>
            </Card>
            <Card hover={false} className="!p-4 text-center !border-blue-100 !bg-blue-50">
              <Info size={20} className="text-[var(--info)] mx-auto mb-2" />
              <p style={{ fontFamily: "var(--font-display)" }} className="text-[22px] font-bold text-[var(--info)]">
                {infoCount}
              </p>
              <p className="text-[11px] text-[var(--info)] font-medium mt-0.5">Info</p>
            </Card>
          </div>
        )}

        {isLoading ? (
          <div className="py-16 text-center">
            <Loader size={36} />
          </div>
        ) : (
          <AlertFeed alerts={alerts} />
        )}
      </div>
    </div>
  );
}
