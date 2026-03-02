"use client";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { PredictionResult } from "@/types/prediction";
import { getCrowdColor, getCrowdEmoji } from "@/lib/utils/crowdLevel";

interface PredictionResultProps {
  result: PredictionResult;
}

export default function PredictionResultCard({ result }: PredictionResultProps) {
  const color = getCrowdColor(result.level);
  const emoji = getCrowdEmoji(result.level);

  return (
    <div className="space-y-4">
      <Card hover={false} className="text-center">
        <div className="mb-4">
          <Badge level={result.level} className="text-[12px] !px-4 !py-1.5">
            {emoji} {result.level}
          </Badge>
        </div>
        <p
          style={{ fontFamily: "var(--font-display)", color }}
          className="text-[56px] font-extrabold leading-none"
        >
          {result.crowdScore}
        </p>
        <p className="text-[13px] text-[var(--text-muted)] mt-2">/100 crowd score</p>
        <div className="mt-4 pt-4 border-t border-[var(--border)]">
          <p className="text-[12px] text-[var(--text-muted)]">
            Confidence: <span className="font-semibold text-[var(--text-primary)]">{Math.round(result.confidence * 100)}%</span>
          </p>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card hover={false} className="!p-4 text-center">
          <p className="text-[11px] text-[var(--text-muted)] uppercase tracking-[1.5px] font-medium">Peak Time</p>
          <p
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[20px] font-bold text-[var(--text-primary)] mt-2"
          >
            {result.peakTime}
          </p>
        </Card>
        <Card hover={false} className="!p-4 text-center">
          <p className="text-[11px] text-[var(--text-muted)] uppercase tracking-[1.5px] font-medium">Best Time</p>
          <p
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[20px] font-bold text-[var(--success)] mt-2"
          >
            {result.bestTime}
          </p>
        </Card>
      </div>
    </div>
  );
}
