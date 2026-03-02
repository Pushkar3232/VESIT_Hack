"use client";

import React from "react";
import type { CrowdLevel } from "@/types/prediction";

interface BadgeProps {
  level?: CrowdLevel;
  children?: React.ReactNode;
  variant?: "filled" | "outlined" | "accent" | "dark";
  className?: string;
}

const levelColors: Record<CrowdLevel, { bg: string; text: string }> = {
  LOW: { bg: "#DCFCE7", text: "#166534" },
  MEDIUM: { bg: "#FEF9C3", text: "#854D0E" },
  HIGH: { bg: "#FEE2E2", text: "#991B1B" },
  CRITICAL: { bg: "#FEE2E2", text: "#7F1D1D" },
};

export default function Badge({ level, children, variant = "filled", className = "" }: BadgeProps) {
  const colors = level
    ? levelColors[level]
    : { bg: "var(--chip-bg)", text: "var(--chip-text)" };

  const variantClasses: Record<string, string> = {
    filled: "",
    outlined: "!bg-transparent border border-[var(--border)] !text-[var(--chip-text)]",
    accent: "!bg-[var(--accent-light)] !text-[var(--accent-hover)]",
    dark: "!bg-[var(--selected-bg)] !text-[var(--selected-text)]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold leading-none ${variantClasses[variant] || ""} ${className}`}
      style={
        variant === "filled"
          ? { backgroundColor: colors.bg, color: colors.text }
          : undefined
      }
    >
      {children ?? level}
    </span>
  );
}
