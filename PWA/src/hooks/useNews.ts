"use client";

import { useState, useEffect, useCallback } from "react";

interface NewsItem {
  title: string;
  description: string;
  publishedAt: string;
}

export function useNews(location: string = "Mumbai") {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNews = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/news?location=${encodeURIComponent(location)}`);
      if (!res.ok) throw new Error("Failed to fetch news");
      const data = await res.json();
      setNews(data.articles ?? []);
    } catch {
      setNews([]);
    } finally {
      setIsLoading(false);
    }
  }, [location]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return { news, isLoading, refetch: fetchNews };
}
