"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import PredictionForm from "@/components/predict/PredictionForm";
import PredictionResultCard from "@/components/predict/PredictionResult";
import CrowdChart from "@/components/predict/CrowdChart";
import FactorsPanel from "@/components/predict/FactorsPanel";
import Loader from "@/components/ui/Loader";
import { usePrediction } from "@/hooks/usePrediction";

export default function PredictPage() {
  const { predict, result, isLoading, error } = usePrediction();

  const handleSubmit = async (data: { placeId: string; date: string; time: string }) => {
    await predict(data);
  };

  return (
    <div className="px-5 pb-6">
      <Navbar variant="detail" title="Predict Crowd" />

      <div className="mt-4 space-y-6">
        <div>
          <h2 className="text-[22px] font-bold text-[var(--color-text-primary)] mb-1">
            Crowd Prediction
          </h2>
          <p className="text-[13px] text-[var(--color-text-muted)]">
            Select a place, date & time to get AI-powered crowd density predictions
          </p>
        </div>

        <PredictionForm onSubmit={handleSubmit} isLoading={isLoading} />

        {isLoading && (
          <div className="py-12">
            <Loader size={32} />
            <p className="text-center text-[13px] text-[var(--color-text-muted)] mt-3">
              Analyzing crowd patterns...
            </p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-700 rounded-[var(--radius-md)] p-4 text-[13px]">
            {error}
          </div>
        )}

        {result && !isLoading && (
          <div className="space-y-5 screen-enter">
            <PredictionResultCard result={result} />
            {result.hourlyForecast && <CrowdChart data={result.hourlyForecast} />}
            <FactorsPanel factors={result.factors} />
          </div>
        )}
      </div>
    </div>
  );
}
