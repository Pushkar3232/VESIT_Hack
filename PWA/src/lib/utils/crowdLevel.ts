import type { CrowdLevel } from "@/types/prediction";

export function getCrowdLevel(score: number): CrowdLevel {
  if (score <= 30) return "LOW";
  if (score <= 60) return "MEDIUM";
  if (score <= 85) return "HIGH";
  return "CRITICAL";
}

export function getCrowdColor(level: CrowdLevel): string {
  switch (level) {
    case "LOW":
      return "#22C55E";
    case "MEDIUM":
      return "#F59E0B";
    case "HIGH":
      return "#EF4444";
    case "CRITICAL":
      return "#DC2626";
    default:
      return "#999999";
  }
}

export function getCrowdEmoji(level: CrowdLevel): string {
  switch (level) {
    case "LOW":
      return "🟢";
    case "MEDIUM":
      return "🟡";
    case "HIGH":
      return "🟠";
    case "CRITICAL":
      return "🔴";
    default:
      return "⚪";
  }
}
