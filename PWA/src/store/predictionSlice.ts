import { create } from "zustand";
import type { PredictionResult } from "@/types/prediction";

interface PredictionState {
  currentResult: PredictionResult | null;
  history: PredictionResult[];
  setResult: (result: PredictionResult) => void;
  clearResult: () => void;
}

export const usePredictionStore = create<PredictionState>((set) => ({
  currentResult: null,
  history: [],
  setResult: (result) =>
    set((state) => ({
      currentResult: result,
      history: [result, ...state.history].slice(0, 20),
    })),
  clearResult: () => set({ currentResult: null }),
}));
