import { NextResponse } from "next/server";
import { DEFAULT_PLACES } from "@/lib/utils/constants";

export async function GET() {
  // In production, fetch from database using Prisma
  // const places = await prisma.place.findMany({ orderBy: { name: "asc" } });

  const places = DEFAULT_PLACES.map((p) => ({
    id: p.id,
    name: p.name,
    type: p.type,
    city: p.city,
    latitude: 19.076 + Math.random() * 0.2,
    longitude: 72.877 + Math.random() * 0.2,
    currentCrowdScore: Math.floor(Math.random() * 80) + 10,
    currentCrowdLevel: ["LOW", "MEDIUM", "HIGH"][Math.floor(Math.random() * 3)],
  }));

  return NextResponse.json({ places });
}
