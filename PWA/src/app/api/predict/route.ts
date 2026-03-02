import { NextRequest, NextResponse } from "next/server";
import { retrieveContext } from "@/lib/rag/retriever";
import { runPrediction } from "@/lib/rag/predictor";
import { getWeather } from "@/lib/api/weatherClient";
import { getRelevantNews } from "@/lib/api/newsClient";

export async function POST(req: NextRequest) {
  try {
    const { placeId, date, time } = await req.json();

    if (!placeId || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields: placeId, date, time" },
        { status: 400 }
      );
    }

    const [ragContext, weather, news] = await Promise.all([
      retrieveContext(placeId, date, time),
      getWeather(placeId),
      getRelevantNews(placeId),
    ]);

    const prediction = await runPrediction({
      ragContext,
      weather,
      news,
      date,
      time,
    });

    return NextResponse.json(prediction);
  } catch (error) {
    console.error("Prediction error:", error);
    return NextResponse.json(
      { error: "Failed to generate prediction" },
      { status: 500 }
    );
  }
}
