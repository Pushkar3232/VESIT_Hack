"use client";

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
    <div className="page-container pb-8 animate-enter">
      <Navbar variant="detail" title="Predict Crowd" />

      <div className="mt-2 space-y-6">
        <div>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[22px] lg:text-[28px] font-bold text-[var(--text-primary)] mb-1"
          >
            Crowd Prediction
          </h2>
          <p className="text-[13px] text-[var(--text-muted)] max-w-[500px]">
            Select a place, date & time to get AI-powered crowd density predictions
          </p>
        </div>

        {/* Two-column on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <PredictionForm onSubmit={handleSubmit} isLoading={isLoading} />
          </div>

          <div>
            {isLoading && (
              <div className="py-16 text-center">
                <Loader size={36} />
                <p className="text-[13px] text-[var(--text-muted)] mt-4">
                  Analyzing crowd patterns...
                </p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 text-[var(--error)] rounded-[var(--radius-md)] p-4 text-[13px] border border-red-200">
                {error}
              </div>
            )}

            {result && !isLoading && (
              <div className="space-y-5 screen-enter">
                <PredictionResultCard result={result} />
              </div>
            )}
          </div>
        </div>

        {/* Full width chart and factors below */}
        {result && !isLoading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 screen-enter">
            {result.hourlyForecast && <CrowdChart data={result.hourlyForecast} />}
            <FactorsPanel factors={result.factors} />
          </div>
        )}
      </div>
    </div>
  );
}
