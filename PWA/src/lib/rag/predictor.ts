import type { VectorDocument } from "./vectorStore";
import type { PredictionResult } from "@/types/prediction";
import { getCrowdLevel } from "@/lib/utils/crowdLevel";

interface PredictionInput {
  ragContext: VectorDocument[];
  weather: { condition: string; temp: number; humidity: number };
  news: { title: string; description: string; publishedAt: string }[];
  date: string;
  time: string;
}

/**
 * Main prediction pipeline
 * In production, this sends context to an LLM via LangChain
 */
export async function runPrediction(input: PredictionInput): Promise<PredictionResult> {
  // Placeholder: In production, use LangChain with OpenAI/Gemini
  // const chain = RetrievalQAChain.fromLLM(llm, retriever);
  // const result = await chain.call({ query: prompt });

  const { weather, date, time } = input;

  // Simple heuristic prediction for development
  const hour = parseInt(time.split(":")[0]);
  let baseScore = 40;

  // Time-based adjustments
  if (hour >= 8 && hour <= 10) baseScore += 30; // morning rush
  if (hour >= 17 && hour <= 20) baseScore += 25; // evening rush
  if (hour >= 12 && hour <= 14) baseScore += 10; // lunch hour

  // Weather adjustments
  if (weather.condition === "Rain" || weather.condition === "Thunderstorm") {
    baseScore += 15;
  }
  if (weather.temp > 40) baseScore -= 10;

  // Day of week adjustment
  const dayOfWeek = new Date(date).getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) baseScore -= 20; // weekends

  // News impact (if any events found)
  if (input.news.length > 0) baseScore += 10;

  // Clamp score
  const crowdScore = Math.max(0, Math.min(100, baseScore));

  return {
    crowdScore,
    level: getCrowdLevel(crowdScore),
    peakTime: "9:00 AM",
    bestTime: "6:30 AM",
    factors: [
      {
        name: "Time of Day",
        impact: hour >= 8 && hour <= 10 ? "negative" : "positive",
        description: hour >= 8 && hour <= 10 ? "Morning rush hour" : "Off-peak hours",
      },
      {
        name: "Weather",
        impact: weather.condition === "Clear" ? "positive" : "negative",
        description: `Current condition: ${weather.condition}, ${weather.temp}°C`,
      },
      {
        name: "Day Type",
        impact: dayOfWeek === 0 || dayOfWeek === 6 ? "positive" : "neutral",
        description: dayOfWeek === 0 || dayOfWeek === 6 ? "Weekend — lower crowds" : "Weekday",
      },
    ],
    confidence: 0.82,
    hourlyForecast: Array.from({ length: 12 }, (_, i) => {
      const h = 6 + i;
      let score = 30;
      if (h >= 8 && h <= 10) score = 75 + Math.random() * 15;
      else if (h >= 17 && h <= 19) score = 65 + Math.random() * 15;
      else score = 25 + Math.random() * 20;
      return { hour: `${h}:00`, score: Math.round(score) };
    }),
  };
}
