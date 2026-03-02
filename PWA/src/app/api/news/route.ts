import { NextRequest, NextResponse } from "next/server";
import { getRelevantNews } from "@/lib/api/newsClient";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const location = searchParams.get("location") ?? "Mumbai";

  const articles = await getRelevantNews(location);
  return NextResponse.json({ articles });
}
