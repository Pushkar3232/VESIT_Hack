"use client";

import Card from "@/components/ui/Card";
import type { PredictionFactor } from "@/types/prediction";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface FactorsPanelProps {
  factors: PredictionFactor[];
}

export default function FactorsPanel({ factors }: FactorsPanelProps) {
  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case "positive":
        return <TrendingDown size={16} className="text-[var(--success)]" />;
      case "negative":
        return <TrendingUp size={16} className="text-[var(--error)]" />;
      default:
        return <Minus size={16} className="text-[var(--text-muted)]" />;
    }
  };

  const getImpactBg = (impact: string) => {
    switch (impact) {
      case "positive": return "bg-green-50 border-green-100";
      case "negative": return "bg-red-50 border-red-100";
      default: return "bg-[var(--bg-surface-soft)] border-[var(--border)]";
    }
  };

  return (
    <Card hover={false}>
      <h3
        style={{ fontFamily: "var(--font-display)" }}
        className="text-[15px] font-semibold text-[var(--text-primary)] mb-4"
      >
        Factors Affecting Prediction
      </h3>
      <div className="space-y-2.5">
        {factors.map((factor, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 p-3 rounded-[var(--radius-sm)] border ${getImpactBg(factor.impact)}`}
          >
            <div className="flex-shrink-0">{getImpactIcon(factor.impact)}</div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-[var(--text-primary)]">
                {factor.name}
              </p>
              <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                {factor.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
