import { prisma } from "./prisma";

export async function getPlaces() {
  return prisma.place.findMany({
    orderBy: { name: "asc" },
  });
}

export async function getPlaceById(id: string) {
  return prisma.place.findUnique({
    where: { id },
    include: { crowdData: { orderBy: { timestamp: "desc" }, take: 24 } },
  });
}

export async function getLatestCrowdData(placeId: string) {
  return prisma.crowdRecord.findFirst({
    where: { placeId },
    orderBy: { timestamp: "desc" },
  });
}

export async function saveTravelSearch(data: {
  userId?: string;
  source: string;
  destination: string;
  arrivalTime: string;
  result: Record<string, unknown>;
}) {
  return prisma.travelSearch.create({ data });
}
