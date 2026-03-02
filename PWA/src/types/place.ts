export type PlaceType = "STATION" | "PUBLIC_PLACE" | "BUS_STOP" | "AIRPORT" | "METRO";

export interface Place {
  id: string;
  name: string;
  type: PlaceType;
  city: string;
  latitude: number;
  longitude: number;
  currentCrowdLevel?: string;
  currentCrowdScore?: number;
}
