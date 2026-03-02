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
      return <AlertCircle size={20} className="text-[var(--error)]" />;
    case "warning":
      return <AlertTriangle size={20} className="text-[var(--warning)]" />;
    default:
      return <Info size={20} className="text-[var(--info)]" />;
  }
}

function getSeverityBorder(severity: AlertSeverity) {
  switch (severity) {
    case "critical": return "!border-l-4 !border-l-[var(--error)]";
    case "warning": return "!border-l-4 !border-l-[var(--warning)]";
    default: return "!border-l-4 !border-l-[var(--info)]";
  }
}

export default function AlertCard({ alert, onClick }: AlertCardProps) {
  return (
    <Card onClick={onClick} className={`!p-4 ${getSeverityBorder(alert.severity)}`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex-shrink-0">{getSeverityIcon(alert.severity)}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <h4
              style={{ fontFamily: "var(--font-display)" }}
              className="text-[14px] font-semibold text-[var(--text-primary)] truncate"
            >
              {alert.placeName}
            </h4>
            <Badge level={alert.crowdScore > 85 ? "CRITICAL" : alert.crowdScore > 60 ? "HIGH" : "MEDIUM"}>
              {alert.crowdScore}/100
            </Badge>
          </div>
          <p className="text-[13px] text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
            {alert.message}
          </p>
          <p className="text-[11px] text-[var(--text-muted)] mt-2">
            {new Date(alert.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </p>
        </div>
      </div>
    </Card>
  );
}
