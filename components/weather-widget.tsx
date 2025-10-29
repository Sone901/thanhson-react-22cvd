"use client"

import { useEffect, useState } from "react"

interface WeatherData {
  description: string
  temperature: number
  windSpeed: number
  loading: boolean
  error: boolean
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData>({
    description: "",
    temperature: 0,
    windSpeed: 0,
    loading: true,
    error: false,
  })

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=10.7769&longitude=106.7009&current=temperature_2m,weather_code,wind_speed_10m&timezone=Asia/Ho_Chi_Minh",
        )
        const data = await response.json()
        const current = data.current

        const weatherDescriptions: Record<number, string> = {
          0: "☀️ Clear Sky",
          1: "🌤️ Mostly Clear",
          2: "⛅ Partly Cloudy",
          3: "☁️ Overcast",
          45: "🌫️ Foggy",
          48: "🌫️ Depositing Rime Fog",
          51: "🌧️ Light Drizzle",
          61: "🌧️ Rain",
          80: "🌧️ Rain Showers",
          95: "⛈️ Thunderstorm",
        }

        const weatherDesc = weatherDescriptions[current.weather_code] || "🌤️ Unknown"

        setWeather({
          description: weatherDesc,
          temperature: current.temperature_2m,
          windSpeed: current.wind_speed_10m,
          loading: false,
          error: false,
        })
      } catch (error) {
        console.error("Error fetching weather:", error)
        setWeather((prev) => ({
          ...prev,
          loading: false,
          error: true,
        }))
      }
    }

    fetchWeather()
  }, [])

  return (
    <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 text-white p-5 rounded-lg text-center mt-5 shadow-lg border border-purple-700">
      <h3 className="mb-3 font-semibold">🌤️ Current Weather</h3>
      <div className="text-base leading-relaxed">
        {weather.loading && <span>⏳ Loading...</span>}
        {weather.error && <span>❌ Unable to load weather information</span>}
        {!weather.loading && !weather.error && (
          <>
            <div>{weather.description}</div>
            <div>
              Temperature: <strong>{weather.temperature}°C</strong>
            </div>
            <div>
              Wind Speed: <strong>{weather.windSpeed} km/h</strong>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
