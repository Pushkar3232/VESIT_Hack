import { queryVectorStore, type VectorDocument } from "./vectorStore";

/**
 * Retrieve relevant context documents for a prediction query
 */
export async function retrieveContext(
  placeId: string,
  date: string,
  time: string
): Promise<VectorDocument[]> {
  const query = `crowd density at ${placeId} on ${date} at ${time}`;
  const documents = await queryVectorStore(query, 5);
  return documents;
}
