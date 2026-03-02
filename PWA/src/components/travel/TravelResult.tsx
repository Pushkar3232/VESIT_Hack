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
      <Card hover={false} className="!border-2 !border-green-200 !bg-green-50">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-[var(--success)] flex items-center justify-center">
            <span className="text-white text-[12px] font-bold">✓</span>
          </div>
          <h3
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[16px] font-bold text-green-800"
          >
            Best Time to Leave
          </h3>
        </div>
        <p
          style={{ fontFamily: "var(--font-display)" }}
          className="text-[32px] font-extrabold text-green-700"
        >
          {formatTime(recommendation.departureTime)}
        </p>
        <div className="flex gap-4 mt-4">
          <div>
            <p className="text-[11px] text-[var(--text-muted)] uppercase tracking-[1.5px] font-medium">
              Source
            </p>
            <Badge level={getCrowdLevel(recommendation.crowdScoreSource)} className="mt-1">
              {getCrowdEmoji(getCrowdLevel(recommendation.crowdScoreSource))} {recommendation.crowdScoreSource}/100
            </Badge>
          </div>
          <div>
            <p className="text-[11px] text-[var(--text-muted)] uppercase tracking-[1.5px] font-medium">
              Destination
            </p>
            <Badge level={getCrowdLevel(recommendation.crowdScoreDest)} className="mt-1">
              {getCrowdEmoji(getCrowdLevel(recommendation.crowdScoreDest))} {recommendation.crowdScoreDest}/100
            </Badge>
          </div>
        </div>
        <p className="text-[12px] text-green-700 mt-3 font-medium">
          Est. Arrival: {formatTime(recommendation.arrivalTime)} ✓
        </p>
      </Card>

      {allWindows.length > 1 && (
        <>
          <h3
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[15px] font-semibold text-[var(--text-primary)]"
          >
            Other Options
          </h3>
          <div className="space-y-2.5">
            {allWindows.slice(1).map((window, i) => (
              <Card key={i} hover={false} className="flex items-center justify-between !p-4">
                <div>
                  <p className="text-[14px] font-semibold text-[var(--text-primary)]">
                    Leave at {formatTime(window.departureTime)}
                  </p>
                  <p className="text-[11px] text-[var(--text-muted)]">
                    Arrive ~{formatTime(window.arrivalTime)}
                  </p>
                </div>
                <Badge level={getCrowdLevel(window.overallScore)}>
                  {window.overallScore}/100
                </Badge>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
