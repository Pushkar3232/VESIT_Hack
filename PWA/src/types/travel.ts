export interface TravelInput {
  source: string;
  destination: string;
  arrivalTime: string;
}

export interface TravelWindow {
  departureTime: string;
  arrivalTime: string;
  crowdScoreSource: number;
  crowdScoreDest: number;
  crowdLevelSource: string;
  crowdLevelDest: string;
  overallScore: number;
}

export interface TravelRecommendation {
  recommendation: TravelWindow;
  allWindows: TravelWindow[];
  avgDuration: number;
}
