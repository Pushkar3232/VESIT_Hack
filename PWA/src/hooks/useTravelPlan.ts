"use client";

import { useState } from "react";
import type { TravelInput, TravelRecommendation } from "@/types/travel";

export function useTravelPlan() {
  const [result, setResult] = useState<TravelRecommendation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const planTravel = async (input: TravelInput) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/travel-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      if (!res.ok) throw new Error("Travel planning failed");
      const data = await res.json();
      setResult(data);
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setError(message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { planTravel, result, isLoading, error };
}
