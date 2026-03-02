import { NextResponse } from "next/server";
import type { Alert } from "@/types/alert";

export async function GET() {
  // In production, fetch real-time alerts from database
  const mockAlerts: Alert[] = [
    {
      id: "alert-1",
      placeId: "csmt",
      placeName: "CSMT Station",
      message: "Crowd levels rising due to festival rush. Consider alternative routes.",
      severity: "warning",
      crowdScore: 78,
      timestamp: new Date().toISOString(),
      isRead: false,
    },
    {
      id: "alert-2",
      placeId: "dadar",
      placeName: "Dadar Station",
      message: "Critical crowding detected at Platform 1. Avoid if possible.",
      severity: "critical",
      crowdScore: 92,
      timestamp: new Date(Date.now() - 600000).toISOString(),
      isRead: false,
    },
    {
      id: "alert-3",
      placeId: "andheri",
      placeName: "Andheri Station",
      message: "Moderate crowd levels. Expected to increase in 30 minutes.",
      severity: "info",
      crowdScore: 55,
      timestamp: new Date(Date.now() - 1800000).toISOString(),
      isRead: true,
    },
  ];

  return NextResponse.json({ alerts: mockAlerts });
}
