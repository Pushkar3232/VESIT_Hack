"use client";

import Card from "@/components/ui/Card";
import type { TravelWindow } from "@/types/travel";
import { getCrowdColor, getCrowdLevel } from "@/lib/utils/crowdLevel";
import { formatTime } from "@/lib/utils/timeUtils";

interface RouteTimelineProps {
  windows: TravelWindow[];
  source: string;
  destination: string;
}

export default function RouteTimeline({ windows, source, destination }: RouteTimelineProps) {
  return (
    <Card hover={false}>
      <h3
        style={{ fontFamily: "var(--font-display)" }}
        className="text-[15px] font-semibold text-[var(--text-primary)] mb-5"
      >
        Journey Timeline
      </h3>

      <div className="relative">
        <div className="absolute left-[18px] top-2 bottom-2 w-0.5 bg-[var(--border)]" />

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-[var(--accent-light)] flex items-center justify-center z-10 flex-shrink-0 border-2 border-[var(--bg-surface)]">
              <span className="text-[12px]">📍</span>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[var(--text-primary)]">{source}</p>
              <p className="text-[11px] text-[var(--text-muted)]">Departure station</p>
            </div>
          </div>

          {windows.slice(0, 3).map((w, i) => (
            <div key={i} className="flex items-start gap-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center z-10 flex-shrink-0 border-2 border-[var(--bg-surface)]"
                style={{ backgroundColor: getCrowdColor(getCrowdLevel(w.overallScore)) + "22" }}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: getCrowdColor(getCrowdLevel(w.overallScore)) }}
                />
              </div>
              <div>
                <p className="text-[13px] font-medium text-[var(--text-primary)]">
                  {formatTime(w.departureTime)}
                </p>
                <p className="text-[11px] text-[var(--text-muted)]">
                  Score: {w.overallScore}/100
                </p>
              </div>
            </div>
          ))}

          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-[var(--accent)] flex items-center justify-center z-10 flex-shrink-0 border-2 border-[var(--bg-surface)]">
              <span className="text-[12px]">🏁</span>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[var(--text-primary)]">{destination}</p>
              <p className="text-[11px] text-[var(--text-muted)]">Arrival station</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
