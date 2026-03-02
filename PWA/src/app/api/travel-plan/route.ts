import { NextRequest, NextResponse } from "next/server";
import { addMinutes, subtractMinutes } from "@/lib/utils/timeUtils";
import { getCrowdLevel } from "@/lib/utils/crowdLevel";

// Simulated average journey times (in minutes)
const journeyTimes: Record<string, Record<string, number>> = {
  kalyan: { csmt: 75, dadar: 55, thane: 20, andheri: 45, bandra: 50 },
  csmt: { kalyan: 75, dadar: 20, thane: 55, andheri: 40, bandra: 35 },
  dadar: { kalyan: 55, csmt: 20, thane: 35, andheri: 20, bandra: 15 },
  thane: { kalyan: 20, csmt: 55, dadar: 35, andheri: 30, bandra: 35 },
  andheri: { kalyan: 45, csmt: 40, dadar: 20, thane: 30, bandra: 10 },
  bandra: { kalyan: 50, csmt: 35, dadar: 15, thane: 35, andheri: 10 },
};

function getAvgJourneyTime(source: string, destination: string): number {
  return journeyTimes[source]?.[destination] ?? 60;
}

function simulateCrowdScore(time: string): number {
  const hour = parseInt(time.split(":")[0]);
  let base = 35;
  if (hour >= 8 && hour <= 10) base = 70 + Math.floor(Math.random() * 20);
  else if (hour >= 17 && hour <= 20) base = 65 + Math.floor(Math.random() * 20);
  else if (hour >= 12 && hour <= 14) base = 45 + Math.floor(Math.random() * 15);
  else base = 20 + Math.floor(Math.random() * 25);
  return Math.min(100, Math.max(0, base));
}

export async function POST(req: NextRequest) {
  try {
    const { source, destination, arrivalTime } = await req.json();

    if (!source || !destination || !arrivalTime) {
      return NextResponse.json(
        { error: "Missing required fields: source, destination, arrivalTime" },
        { status: 400 }
      );
    }

    const avgDuration = getAvgJourneyTime(source, destination);
    const idealDeparture = subtractMinutes(arrivalTime, avgDuration);

    const offsets = [-30, -15, 0, 15, 30];
    const allWindows = offsets.map((offset) => {
      const departTime = addMinutes(idealDeparture, offset);
      const arriveTime = addMinutes(departTime, avgDuration);
      const crowdScoreSource = simulateCrowdScore(departTime);
      const crowdScoreDest = simulateCrowdScore(arriveTime);
      const overallScore = Math.round((crowdScoreSource + crowdScoreDest) / 2);

      return {
        departureTime: departTime,
        arrivalTime: arriveTime,
        crowdScoreSource,
        crowdScoreDest,
        crowdLevelSource: getCrowdLevel(crowdScoreSource),
        crowdLevelDest: getCrowdLevel(crowdScoreDest),
        overallScore,
      };
    });

    // Sort by overall crowd score (lowest first = best)
    allWindows.sort((a, b) => a.overallScore - b.overallScore);

    return NextResponse.json({
      recommendation: allWindows[0],
      allWindows,
      avgDuration,
    });
  } catch (error) {
    console.error("Travel plan error:", error);
    return NextResponse.json(
      { error: "Failed to generate travel plan" },
      { status: 500 }
    );
  }
}
