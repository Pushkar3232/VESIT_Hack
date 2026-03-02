/**
 * Vector Store Client
 * Connects to Pinecone for RAG-based retrieval
 */

export interface VectorDocument {
  id: string;
  content: string;
  metadata: Record<string, string | number>;
  score?: number;
}

export async function queryVectorStore(
  query: string,
  topK: number = 5
): Promise<VectorDocument[]> {
  // Placeholder: In production, connect to Pinecone
  // const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });
  // const index = pinecone.index(process.env.PINECONE_INDEX!);
  // const results = await index.query({ vector: embedding, topK });

  console.log(`[VectorStore] Querying for: "${query}" (top ${topK})`);

  // Return mock data for development
  return [
    {
      id: "doc-1",
      content: "CSMT station typically sees peak crowds between 8:30 AM and 10:00 AM on weekdays.",
      metadata: { place: "csmt", type: "historical" },
      score: 0.92,
    },
    {
      id: "doc-2",
      content: "Rainy days increase crowd density at covered stations by approximately 20-30%.",
      metadata: { type: "weather-pattern" },
      score: 0.85,
    },
  ];
}
