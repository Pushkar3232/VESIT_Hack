export async function getRelevantNews(location: string) {
  const apiKey = process.env.NEWS_API_KEY;
  if (!apiKey) {
    return [];
  }

  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(location)}+transport+crowd+event&apiKey=${apiKey}&pageSize=5`
    );
    const data = await res.json();
    return (data.articles ?? []).map((a: Record<string, string>) => ({
      title: a.title,
      description: a.description,
      publishedAt: a.publishedAt,
    }));
  } catch {
    return [];
  }
}
