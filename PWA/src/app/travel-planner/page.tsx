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
    <div className="page-container pb-8 animate-enter">
      <Navbar variant="detail" title="Travel Planner" />

      <div className="mt-2 space-y-6">
        <div>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[22px] lg:text-[28px] font-bold text-[var(--text-primary)] mb-1"
          >
            Plan Your Travel
          </h2>
          <p className="text-[13px] text-[var(--text-muted)] max-w-[500px]">
            Get the best departure time to avoid crowds on your route
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <TravelForm onSubmit={handleSubmit} isLoading={isLoading} />
          </div>

          <div>
            {isLoading && (
              <div className="py-16 text-center">
                <Loader size={36} />
                <p className="text-[13px] text-[var(--text-muted)] mt-4">
                  Analyzing travel windows...
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
                <TravelResult result={result} />
              </div>
            )}
          </div>
        </div>

        {result && !isLoading && (
          <RouteTimeline
            windows={result.allWindows}
            source={getPlaceName(result.allWindows[0]?.departureTime ?? "")}
            destination={getPlaceName(result.allWindows[0]?.arrivalTime ?? "")}
          />
        )}
      </div>
    </div>
  );
}
