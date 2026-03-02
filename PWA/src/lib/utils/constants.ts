export const APP_NAME = "SmartDensity";
export const APP_DESCRIPTION = "AI-powered crowd density predictor for public places & transport";

export const CROWD_LEVELS = {
  LOW: { min: 0, max: 30, label: "Low", color: "#22C55E" },
  MEDIUM: { min: 31, max: 60, label: "Medium", color: "#F59E0B" },
  HIGH: { min: 61, max: 85, label: "High", color: "#EF4444" },
  CRITICAL: { min: 86, max: 100, label: "Critical", color: "#DC2626" },
} as const;

export const NAV_ITEMS = [
  { href: "/dashboard", label: "Home", icon: "Home" },
  { href: "/predict", label: "Predict", icon: "BarChart3" },
  { href: "/travel-planner", label: "Travel", icon: "Map" },
  { href: "/alerts", label: "Alerts", icon: "Bell" },
  { href: "/settings", label: "Settings", icon: "Settings" },
] as const;

export const DEFAULT_PLACES = [
  { id: "csmt", name: "CSMT Station", type: "STATION" as const, city: "Mumbai" },
  { id: "dadar", name: "Dadar Station", type: "STATION" as const, city: "Mumbai" },
  { id: "kalyan", name: "Kalyan Station", type: "STATION" as const, city: "Mumbai" },
  { id: "thane", name: "Thane Station", type: "STATION" as const, city: "Mumbai" },
  { id: "andheri", name: "Andheri Station", type: "STATION" as const, city: "Mumbai" },
  { id: "bandra", name: "Bandra Station", type: "STATION" as const, city: "Mumbai" },
] as const;
