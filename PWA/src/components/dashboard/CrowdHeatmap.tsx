"use client";

import Card from "@/components/ui/Card";
import { ArrowUpRight, Users } from "lucide-react";

export default function CrowdHeatmap() {
  // Placeholder for map integration (Leaflet/Mapbox)
  return (
    <Card className="relative overflow-hidden min-h-[200px]">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-light)] to-[#E0F7FA] rounded-[var(--radius-lg)]">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <Users size={40} className="text-[var(--color-accent)] mx-auto mb-3" />
            <p className="text-[14px] font-semibold text-[var(--color-text-primary)]">
              Crowd Density Map
            </p>
            <p className="text-[12px] text-[var(--color-text-muted)] mt-1">
              Interactive heatmap coming soon
            </p>
          </div>
        </div>
      </div>
      <button className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-[var(--shadow-icon-btn)]">
        <ArrowUpRight size={16} className="text-[#111111]" />
      </button>
    </Card>
  );
}
