export type CrowdLevel = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export interface PredictionInput {
  placeId: string;
  date: string;
  time: string;
  destination?: string;
}

export interface PredictionFactor {
  name: string;
  impact: "positive" | "negative" | "neutral";
  description: string;
}

export interface PredictionResult {
  crowdScore: number;
  level: CrowdLevel;
  peakTime: string;
  bestTime: string;
  factors: PredictionFactor[];
  confidence: number;
  hourlyForecast?: { hour: string; score: number }[];
}
