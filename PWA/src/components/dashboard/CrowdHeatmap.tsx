"use client";

import Card from "@/components/ui/Card";
import { Users, ArrowUpRight } from "lucide-react";

export default function CrowdHeatmap() {
  return (
    <Card hover={false} className="relative overflow-hidden min-h-[220px] lg:min-h-[280px]">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-light)] to-[#E0F7FA] rounded-[var(--radius-lg)]">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center mx-auto mb-4 shadow-[var(--shadow-sm)]">
              <Users size={28} className="text-[var(--accent-hover)]" />
            </div>
            <p
              style={{ fontFamily: "var(--font-display)" }}
              className="text-[16px] font-bold text-[var(--text-primary)]"
            >
              Crowd Density Map
            </p>
            <p className="text-[13px] text-[var(--text-muted)] mt-1">
              Interactive heatmap coming soon
            </p>
          </div>
        </div>
      </div>
      <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[var(--shadow-xs)] hover:scale-105 transition-transform">
        <ArrowUpRight size={16} className="text-[var(--text-primary)]" />
      </button>
    </Card>
  );
}
