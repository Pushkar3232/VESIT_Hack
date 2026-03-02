"use client";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { MapPin, Users } from "lucide-react";
import { getCrowdLevel } from "@/lib/utils/crowdLevel";

interface StationCardProps {
  name: string;
  city: string;
  crowdScore: number;
  type: string;
  onClick?: () => void;
}

export default function StationCard({ name, city, crowdScore, type, onClick }: StationCardProps) {
  const level = getCrowdLevel(crowdScore);

  return (
    <Card onClick={onClick} className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center flex-shrink-0">
        <Users size={20} className="text-[var(--color-accent-dark)]" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-[16px] font-semibold text-[var(--color-text-primary)] truncate">
          {name}
        </h3>
        <div className="flex items-center gap-1 mt-1">
          <MapPin size={12} className="text-[var(--color-text-muted)]" />
          <span className="text-[12px] text-[var(--color-text-muted)]">
            {city} · {type}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1.5">
        <Badge level={level}>{level}</Badge>
        <span className="text-[20px] font-bold text-[var(--color-text-primary)]">
          {crowdScore}
        </span>
      </div>
    </Card>
  );
}
