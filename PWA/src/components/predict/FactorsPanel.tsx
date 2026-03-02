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
        return <TrendingDown size={16} className="text-green-500" />;
      case "negative":
        return <TrendingUp size={16} className="text-red-500" />;
      default:
        return <Minus size={16} className="text-gray-400" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "positive":
        return "bg-green-50 border-green-200";
      case "negative":
        return "bg-red-50 border-red-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  return (
    <div>
      <h3 className="text-[15px] font-semibold text-[var(--color-text-primary)] mb-3">
        Factors Affecting Prediction
      </h3>
      <div className="space-y-2">
        {factors.map((factor, i) => (
          <Card
            key={i}
            className={`!p-3 flex items-center gap-3 border ${getImpactColor(factor.impact)}`}
          >
            {getImpactIcon(factor.impact)}
            <div className="flex-1">
              <p className="text-[13px] font-medium text-[var(--color-text-primary)]">
                {factor.name}
              </p>
              <p className="text-[11px] text-[var(--color-text-muted)]">
                {factor.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
