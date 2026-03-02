export type AlertSeverity = "info" | "warning" | "critical";

export interface Alert {
  id: string;
  placeId: string;
  placeName: string;
  message: string;
  severity: AlertSeverity;
  crowdScore: number;
  timestamp: string;
  isRead: boolean;
}
