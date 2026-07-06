# 🌦️ Weather Dashboard

A modern, responsive weather dashboard built with React that fetches real-time weather data from OpenWeatherMap API. Display current conditions, 5-day forecasts, and manage your favorite cities.

## Features

✨ **Core Features:**
- 🌍 Search weather by city name
- 📍 Display current weather conditions
- 📅 5-day weather forecast
- ⭐ Save favorite cities
- 💾 Persistent storage (localStorage)
- 📱 Fully responsive design
- 🎨 Beautiful dark theme UI
- ⚡ Real-time data updates
- 🌡️ Multiple weather metrics (temp, humidity, wind, pressure)

## Tech Stack

**Frontend:**
- React 18
- Vite (build tool)
- CSS3 (modern styling)
- Axios (HTTP client)

**Backend:**
- Node.js
- Express.js
- CORS

**APIs Used:**
- OpenWeatherMap API v2.5

## Installation

### Prerequisites
- Node.js 16+
- npm or yarn
- OpenWeatherMap API Key (free at https://openweathermap.org/api)

### Setup

```bash
# Clone the repository
git clone https://github.com/pexihdev/pexihdev.git
cd pexihdev/projects/weather-dashboard

# Install dependencies
npm install

# Set environment variable
export OPENWEATHER_API_KEY="your_api_key_here"

# Start development server (Terminal 1)
npm run dev

# In another terminal, start the backend (Terminal 2)
npm run server
```

Open [http://localhost:5174](http://localhost:5174) in your browser.

## Project Structure

```
projects/weather-dashboard/
├── src/
│   ├── components/
│   │   ├── CurrentWeather.jsx    # Current weather display
│   │   ├── ForecastWidget.jsx    # 5-day forecast
│   │   └── SearchBar.jsx          # Search functionality
│   ├── styles/
│   │   ├── CurrentWeather.css
│   │   ├── ForecastWidget.css
│   │   └── SearchBar.css
│   ├── App.jsx                     # Main app component
│   ├── App.css                     # Global styles
│   └── main.jsx                    # Entry point
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
├── server.js                       # Express backend
├── package.json                    # Dependencies
├── .env.example                    # Environment template
└── README.md                       # This file
```

## API Endpoints

### Get Weather by City
```bash
GET /api/weather?city=London
```

Response:
```json
{
  "current": {
    "temp": 15.2,
    "feels_like": 14.5,
    "humidity": 72,
    "wind_speed": 4.5,
    "pressure": 1013,
    "visibility": 10000,
    "description": "Partly Cloudy",
    "uvi": 3
  },
  "forecast": [
    {
      "dt": 1234567890,
      "main": {
        "temp_max": 18,
        "temp_min": 12,
        "humidity": 70
      },
      "weather": [{"main": "Cloudy"}],
      "wind": {"speed": 5}
    }
    // ... more days
  ]
}
```

## Features in Detail

### 🔍 Search Weather
- Search any city in the world
- Auto-fetches current weather and forecast
- Error handling for invalid cities

### ⭐ Favorite Cities
- Add/remove favorite cities
- Quick access buttons
- Persists in browser storage
- One-click city switching

### 📊 Weather Metrics
- Temperature & "Feels Like"
- Humidity percentage
- Wind speed
- Atmospheric pressure
- Visibility distance
- UV Index

### 📅 5-Day Forecast
- Daily weather overview
- High/low temperatures
- Weather icons & description
- Humidity & wind speed
- Hover for more details

## Usage

1. **Search City**: Type a city name and click search
2. **View Current Weather**: See detailed conditions on main card
3. **Check Forecast**: Scroll down for 5-day prediction
4. **Add to Favorites**: Click the heart button to save
5. **Quick Switch**: Click any favorite city button to instantly view

## Environment Variables

Create `.env` file:
```env
OPENWEATHER_API_KEY=your_api_key_here
```

Get a free API key at: https://openweathermap.org/api

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- ⚡ Fast API responses (<1s)
- 🎨 Smooth animations (60fps)
- 📦 Optimized bundle (~60KB)
- 📱 Mobile-first responsive
- 🔄 Efficient data fetching

## Future Enhancements

- [ ] Hourly forecast
- [ ] Weather alerts
- [ ] Multiple location comparison
- [ ] Historical weather data
- [ ] Air quality index
- [ ] Weather maps
- [ ] Unit conversion (C/F)
- [ ] Dark/Light theme toggle
- [ ] Geolocation support
- [ ] Weather notifications

## Troubleshooting

### API Key Error
- Ensure `OPENWEATHER_API_KEY` is set
- Check API key is valid at openweathermap.org
- Wait a few minutes after creating new key

### CORS Error
- Backend must be running on port 3002
- Check proxy in vite.config.js

### City Not Found
- Verify city name spelling
- Use official city names
- Try with country code: "London, UK"

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Author

**pexihdev** - [GitHub](https://github.com/pexihdev)

## Support

If you find this project useful, please consider giving it a ⭐ on GitHub!

---

Made with ❤️ by pexihdev | 2026
