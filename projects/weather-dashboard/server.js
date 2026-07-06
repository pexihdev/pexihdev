import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3002;
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY || 'YOUR_API_KEY_HERE';

// Middleware
app.use(cors());
app.use(express.json());

// Fetch weather data
app.get('/api/weather', async (req, res) => {
  try {
    const { city } = req.query;
    if (!city) {
      return res.status(400).json({ error: 'City parameter is required' });
    }

    // Get current weather and forecast
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${OPENWEATHER_API_KEY}`
    );

    const weatherData = response.data;
    const currentWeather = {
      temp: weatherData.list[0].main.temp,
      feels_like: weatherData.list[0].main.feels_like,
      humidity: weatherData.list[0].main.humidity,
      wind_speed: weatherData.list[0].wind.speed,
      pressure: weatherData.list[0].main.pressure,
      visibility: weatherData.list[0].visibility,
      description: weatherData.list[0].weather[0].main,
      uvi: weatherData.list[0].main.temp // Placeholder
    };

    // Process forecast (5-day)
    const forecast = weatherData.list
      .filter((_, idx) => idx % 8 === 0) // Get one entry per day
      .slice(0, 5);

    res.json({ current: currentWeather, forecast });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch weather data',
      details: error.message
    });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🌦️  Weather Dashboard API running on http://localhost:${PORT}`);
  console.log(`Please set OPENWEATHER_API_KEY environment variable`);
});
