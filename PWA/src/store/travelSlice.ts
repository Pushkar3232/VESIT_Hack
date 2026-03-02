import { create } from "zustand";
import type { TravelRecommendation } from "@/types/travel";

interface TravelState {
  currentPlan: TravelRecommendation | null;
  recentSearches: { source: string; destination: string; arrivalTime: string }[];
  setPlan: (plan: TravelRecommendation) => void;
  addSearch: (search: { source: string; destination: string; arrivalTime: string }) => void;
  clearPlan: () => void;
}

export const useTravelStore = create<TravelState>((set) => ({
  currentPlan: null,
  recentSearches: [],
  setPlan: (plan) => set({ currentPlan: plan }),
  addSearch: (search) =>
    set((state) => ({
      recentSearches: [search, ...state.recentSearches].slice(0, 10),
    })),
  clearPlan: () => set({ currentPlan: null }),
}));
