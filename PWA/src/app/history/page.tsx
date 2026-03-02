"use client";

import Navbar from "@/components/layout/Navbar";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Clock, Calendar } from "lucide-react";
import type { CrowdLevel } from "@/types/prediction";

export default function HistoryPage() {
  const historyItems = [
    { id: 1, place: "CSMT Station", date: "2026-03-01", time: "09:00", score: 82, level: "HIGH" as CrowdLevel },
    { id: 2, place: "Dadar Station", date: "2026-03-01", time: "08:30", score: 91, level: "CRITICAL" as CrowdLevel },
    { id: 3, place: "Andheri Station", date: "2026-02-28", time: "18:00", score: 67, level: "HIGH" as CrowdLevel },
    { id: 4, place: "Thane Station", date: "2026-02-28", time: "07:00", score: 35, level: "MEDIUM" as CrowdLevel },
    { id: 5, place: "Kalyan Station", date: "2026-02-27", time: "09:15", score: 44, level: "MEDIUM" as CrowdLevel },
  ];

  return (
    <div className="page-container pb-8 animate-enter">
      <Navbar variant="detail" title="History" />

      <div className="mt-2 space-y-6">
        <div>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[22px] lg:text-[28px] font-bold text-[var(--text-primary)] mb-1"
          >
            Historical Data
          </h2>
          <p className="text-[13px] text-[var(--text-muted)]">
            Past crowd density records and trends
          </p>
        </div>

        <div className="grid-cards">
          {historyItems.map((item, i) => (
            <div key={item.id} className={`animate-enter stagger-${Math.min(i + 1, 5)}`}>
              <Card className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--bg-surface-soft)] flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-[var(--text-muted)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-[14px] font-semibold text-[var(--text-primary)] truncate"
                  >
                    {item.place}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar size={11} className="text-[var(--text-muted)]" />
                    <span className="text-[11px] text-[var(--text-muted)]">
                      {item.date} at {item.time}
                    </span>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end gap-1.5">
                  <Badge level={item.level}>{item.level}</Badge>
                  <span
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-[20px] font-bold text-[var(--text-primary)]"
                  >
                    {item.score}
                  </span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
