"use client";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { TravelRecommendation } from "@/types/travel";
import { getCrowdLevel, getCrowdEmoji } from "@/lib/utils/crowdLevel";
import { formatTime } from "@/lib/utils/timeUtils";

interface TravelResultProps {
  result: TravelRecommendation;
}

export default function TravelResult({ result }: TravelResultProps) {
  const { recommendation, allWindows } = result;

  return (
    <div className="space-y-4">
      {/* Best Recommendation */}
      <Card className="border-2 border-green-200 !bg-green-50">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[18px]">🟢</span>
          <h3 className="text-[16px] font-bold text-green-800">Best Time to Leave</h3>
        </div>
        <p className="text-[28px] font-extrabold text-green-700">
          {formatTime(recommendation.departureTime)}
        </p>
        <div className="flex gap-4 mt-3">
          <div>
            <p className="text-[11px] text-[var(--color-text-muted)] uppercase tracking-wider">Source</p>
            <Badge level={getCrowdLevel(recommendation.crowdScoreSource)}>
              {getCrowdEmoji(getCrowdLevel(recommendation.crowdScoreSource))} {recommendation.crowdScoreSource}/100
            </Badge>
          </div>
          <div>
            <p className="text-[11px] text-[var(--color-text-muted)] uppercase tracking-wider">Destination</p>
            <Badge level={getCrowdLevel(recommendation.crowdScoreDest)}>
              {getCrowdEmoji(getCrowdLevel(recommendation.crowdScoreDest))} {recommendation.crowdScoreDest}/100
            </Badge>
          </div>
        </div>
        <p className="text-[12px] text-green-700 mt-3">
          Est. Arrival: {formatTime(recommendation.arrivalTime)} ✅
        </p>
      </Card>

      {/* All Windows */}
      <h3 className="text-[15px] font-semibold text-[var(--color-text-primary)]">
        Other Options
      </h3>
      <div className="space-y-2">
        {allWindows.slice(1).map((window, i) => (
          <Card key={i} className="flex items-center justify-between !p-3">
            <div>
              <p className="text-[14px] font-semibold text-[var(--color-text-primary)]">
                Leave at {formatTime(window.departureTime)}
              </p>
              <p className="text-[11px] text-[var(--color-text-muted)]">
                Arrive ~{formatTime(window.arrivalTime)}
              </p>
            </div>
            <Badge level={getCrowdLevel(window.overallScore)}>
              {window.overallScore}/100
            </Badge>
          </Card>
        ))}
      </div>
    </div>
  );
}
