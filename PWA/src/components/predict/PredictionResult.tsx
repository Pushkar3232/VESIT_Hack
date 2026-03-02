"use client";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { PredictionResult } from "@/types/prediction";
import { getCrowdColor, getCrowdEmoji } from "@/lib/utils/crowdLevel";
import { formatTime } from "@/lib/utils/timeUtils";

interface PredictionResultProps {
  result: PredictionResult;
}

export default function PredictionResultCard({ result }: PredictionResultProps) {
  const color = getCrowdColor(result.level);
  const emoji = getCrowdEmoji(result.level);

  return (
    <div className="space-y-4">
      {/* Main Score Card */}
      <Card className="text-center">
        <div className="mb-3">
          <Badge level={result.level}>
            {emoji} {result.level}
          </Badge>
        </div>
        <p
          className="text-[48px] font-extrabold leading-none"
          style={{ color }}
        >
          {result.crowdScore}
        </p>
        <p className="text-[13px] text-[var(--color-text-muted)] mt-1">/100 crowd score</p>
        <p className="text-[12px] text-[var(--color-text-muted)] mt-2">
          Confidence: {Math.round(result.confidence * 100)}%
        </p>
      </Card>

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="!p-4 text-center">
          <p className="text-[11px] text-[var(--color-text-muted)] uppercase tracking-wider">Peak Time</p>
          <p className="text-[18px] font-bold text-[var(--color-text-primary)] mt-1">
            {result.peakTime}
          </p>
        </Card>
        <Card className="!p-4 text-center">
          <p className="text-[11px] text-[var(--color-text-muted)] uppercase tracking-wider">Best Time</p>
          <p className="text-[18px] font-bold text-green-600 mt-1">
            {result.bestTime}
          </p>
        </Card>
      </div>
    </div>
  );
}
