"use client";

import React from "react";
import type { CrowdLevel } from "@/types/prediction";

interface BadgeProps {
  level?: CrowdLevel;
  children?: React.ReactNode;
  variant?: "filled" | "outlined";
  className?: string;
}

const levelColors: Record<CrowdLevel, { bg: string; text: string }> = {
  LOW: { bg: "#DCFCE7", text: "#166534" },
  MEDIUM: { bg: "#FEF9C3", text: "#854D0E" },
  HIGH: { bg: "#FEE2E2", text: "#991B1B" },
  CRITICAL: { bg: "#FEE2E2", text: "#7F1D1D" },
};

export default function Badge({ level, children, variant = "filled", className = "" }: BadgeProps) {
  const colors = level ? levelColors[level] : { bg: "var(--color-tag-bg)", text: "var(--color-tag-text)" };

  if (variant === "outlined") {
    return (
      <span
        className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium border border-[var(--color-border)] text-[var(--color-tag-text)] ${className}`}
      >
        {children ?? level}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold ${className}`}
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {children ?? level}
    </span>
  );
}
