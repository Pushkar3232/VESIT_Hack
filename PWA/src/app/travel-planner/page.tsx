"use client";

import Navbar from "@/components/layout/Navbar";
import TravelForm from "@/components/travel/TravelForm";
import TravelResult from "@/components/travel/TravelResult";
import RouteTimeline from "@/components/travel/RouteTimeline";
import Loader from "@/components/ui/Loader";
import { useTravelPlan } from "@/hooks/useTravelPlan";
import { DEFAULT_PLACES } from "@/lib/utils/constants";

export default function TravelPlannerPage() {
  const { planTravel, result, isLoading, error } = useTravelPlan();

  const handleSubmit = async (data: { source: string; destination: string; arrivalTime: string }) => {
    await planTravel(data);
  };

  const getPlaceName = (id: string) =>
    DEFAULT_PLACES.find((p) => p.id === id)?.name ?? id;

  return (
    <div className="px-5 pb-6">
      <Navbar variant="detail" title="Travel Planner" />

      <div className="mt-4 space-y-6">
        <div>
          <h2 className="text-[22px] font-bold text-[var(--color-text-primary)] mb-1">
            Plan Your Travel
          </h2>
          <p className="text-[13px] text-[var(--color-text-muted)]">
            Get the best departure time to avoid crowds on your route
          </p>
        </div>

        <TravelForm onSubmit={handleSubmit} isLoading={isLoading} />

        {isLoading && (
          <div className="py-12">
            <Loader size={32} />
            <p className="text-center text-[13px] text-[var(--color-text-muted)] mt-3">
              Analyzing travel windows...
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
            <TravelResult result={result} />
            <RouteTimeline
              windows={result.allWindows}
              source={getPlaceName(result.allWindows[0]?.departureTime ?? "")}
              destination={getPlaceName(result.allWindows[0]?.arrivalTime ?? "")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
