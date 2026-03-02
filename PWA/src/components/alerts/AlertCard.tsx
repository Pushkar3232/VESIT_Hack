"use client";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { Alert, AlertSeverity } from "@/types/alert";
import { AlertTriangle, Info, AlertCircle } from "lucide-react";

interface AlertCardProps {
  alert: Alert;
  onClick?: () => void;
}

function getSeverityIcon(severity: AlertSeverity) {
  switch (severity) {
    case "critical":
      return <AlertCircle size={20} className="text-red-500" />;
    case "warning":
      return <AlertTriangle size={20} className="text-amber-500" />;
    default:
      return <Info size={20} className="text-blue-500" />;
  }
}

function getSeverityBorder(severity: AlertSeverity) {
  switch (severity) {
    case "critical":
      return "border-l-4 border-l-red-500";
    case "warning":
      return "border-l-4 border-l-amber-500";
    default:
      return "border-l-4 border-l-blue-500";
  }
}

export default function AlertCard({ alert, onClick }: AlertCardProps) {
  return (
    <Card onClick={onClick} className={`!p-4 ${getSeverityBorder(alert.severity)}`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{getSeverityIcon(alert.severity)}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-[14px] font-semibold text-[var(--color-text-primary)] truncate">
              {alert.placeName}
            </h4>
            <Badge level={alert.crowdScore > 85 ? "CRITICAL" : alert.crowdScore > 60 ? "HIGH" : "MEDIUM"}>
              {alert.crowdScore}/100
            </Badge>
          </div>
          <p className="text-[13px] text-[var(--color-text-secondary)] line-clamp-2">
            {alert.message}
          </p>
          <p className="text-[11px] text-[var(--color-text-muted)] mt-2">
            {new Date(alert.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </p>
        </div>
      </div>
    </Card>
  );
}
