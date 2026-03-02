"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import PredictionResultCard from "@/components/predict/PredictionResult";
import CrowdChart from "@/components/predict/CrowdChart";
import FactorsPanel from "@/components/predict/FactorsPanel";
import Loader from "@/components/ui/Loader";
import { DEFAULT_PLACES } from "@/lib/utils/constants";
import type { PredictionResult } from "@/types/prediction";

export default function PlacePredictionPage() {
  const params = useParams();
  const placeId = params.placeId as string;
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const place = DEFAULT_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const now = new Date();
    const time = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;

    fetch("/api/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ placeId, date: today, time }),
    })
      .then((res) => res.json())
      .then(setResult)
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, [placeId]);

  return (
    <div className="page-container pb-8 animate-enter">
      <Navbar variant="detail" title={place?.name ?? "Station"} />

      <div className="mt-4 space-y-6">
        {isLoading && (
          <div className="py-16 text-center">
            <Loader size={36} />
            <p className="text-[13px] text-[var(--text-muted)] mt-4">
              Loading predictions for {place?.name}...
            </p>
          </div>
        )}

        {result && !isLoading && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 screen-enter">
              <PredictionResultCard result={result} />
              {result.hourlyForecast && <CrowdChart data={result.hourlyForecast} />}
            </div>
            <FactorsPanel factors={result.factors} />
          </>
        )}
      </div>
    </div>
  );
}
