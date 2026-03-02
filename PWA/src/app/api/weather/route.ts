import { NextRequest, NextResponse } from "next/server";
import { getWeather } from "@/lib/api/weatherClient";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city") ?? "Mumbai";

  const weather = await getWeather(city);
  return NextResponse.json(weather);
}
