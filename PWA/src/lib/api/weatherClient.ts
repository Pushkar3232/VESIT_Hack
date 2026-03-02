export async function getWeather(location: string) {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) {
    return {
      condition: "Clear",
      temp: 30,
      humidity: 60,
    };
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();
    return {
      condition: data.weather?.[0]?.main ?? "Clear",
      temp: data.main?.temp ?? 30,
      humidity: data.main?.humidity ?? 60,
    };
  } catch {
    return {
      condition: "Clear",
      temp: 30,
      humidity: 60,
    };
  }
}
