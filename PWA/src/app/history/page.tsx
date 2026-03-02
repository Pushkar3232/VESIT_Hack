"use client";

import Navbar from "@/components/layout/Navbar";
import Card from "@/components/ui/Card";
import { Clock, TrendingUp, Calendar } from "lucide-react";

export default function HistoryPage() {
  // Mock historical data
  const historyItems = [
    { id: 1, place: "CSMT Station", date: "2026-03-01", time: "09:00", score: 82, level: "HIGH" },
    { id: 2, place: "Dadar Station", date: "2026-03-01", time: "08:30", score: 91, level: "CRITICAL" },
    { id: 3, place: "Andheri Station", date: "2026-02-28", time: "18:00", score: 67, level: "HIGH" },
    { id: 4, place: "Thane Station", date: "2026-02-28", time: "07:00", score: 35, level: "MEDIUM" },
    { id: 5, place: "Kalyan Station", date: "2026-02-27", time: "09:15", score: 44, level: "MEDIUM" },
  ];

  return (
    <div className="px-5 pb-6">
      <Navbar variant="detail" title="History" />

      <div className="mt-4 space-y-5">
        <div>
          <h2 className="text-[22px] font-bold text-[var(--color-text-primary)] mb-1">
            Historical Data
          </h2>
          <p className="text-[13px] text-[var(--color-text-muted)]">
            Past crowd density records and trends
          </p>
        </div>

        <div className="space-y-3">
          {historyItems.map((item) => (
            <Card key={item.id} className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-[var(--radius-md)] bg-[var(--color-surface-alt)] flex items-center justify-center">
                <Clock size={18} className="text-[var(--color-text-muted)]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[14px] font-semibold text-[var(--color-text-primary)] truncate">
                  {item.place}
                </h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <Calendar size={11} className="text-[var(--color-text-muted)]" />
                  <span className="text-[11px] text-[var(--color-text-muted)]">
                    {item.date} at {item.time}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[18px] font-bold text-[var(--color-text-primary)]">{item.score}</p>
                <span
                  className={`text-[10px] font-medium ${
                    item.level === "CRITICAL"
                      ? "text-red-600"
                      : item.level === "HIGH"
                      ? "text-orange-500"
                      : "text-amber-500"
                  }`}
                >
                  {item.level}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
