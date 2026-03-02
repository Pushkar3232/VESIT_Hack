/**
 * Text Embedding Utility
 * Generates embeddings for RAG retrieval
 */

export async function generateEmbedding(text: string): Promise<number[]> {
  // Placeholder: In production, use OpenAI embeddings
  // const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  // const response = await openai.embeddings.create({
  //   model: "text-embedding-3-small",
  //   input: text,
  // });
  // return response.data[0].embedding;

  console.log(`[Embeddings] Generating embedding for: "${text.substring(0, 50)}..."`);

  // Return mock embedding for development
  return Array.from({ length: 1536 }, () => Math.random() * 2 - 1);
}
