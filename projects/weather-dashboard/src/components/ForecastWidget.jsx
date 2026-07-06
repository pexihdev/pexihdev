import React from 'react';
import '../styles/ForecastWidget.css';

const ForecastWidget = ({ forecast }) => {
  const getWeatherIcon = (description) => {
    const desc = description.toLowerCase();
    if (desc.includes('clear') || desc.includes('sunny')) return '☀️';
    if (desc.includes('cloud')) return '☁️';
    if (desc.includes('rain')) return '🌧️';
    if (desc.includes('snow')) return '❄️';
    if (desc.includes('thunder')) return '⛈️';
    return '🌡️';
  };

  const formatDate = (date) => {
    const d = new Date(date * 1000);
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const formatTime = (date) => {
    const d = new Date(date * 1000);
    return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="forecast-widget">
      <h2>📅 5-Day Forecast</h2>
      <div className="forecast-grid">
        {forecast.map((day, idx) => (
          <div key={idx} className="forecast-card">
            <div className="forecast-date">{formatDate(day.dt)}</div>
            <div className="forecast-icon">{getWeatherIcon(day.weather[0].main)}</div>
            <div className="forecast-description">{day.weather[0].main}</div>
            <div className="forecast-temps">
              <span className="max-temp">↑ {Math.round(day.main.temp_max)}°</span>
              <span className="min-temp">↓ {Math.round(day.main.temp_min)}°</span>
            </div>
            <div className="forecast-details">
              <span>💧 {day.main.humidity}%</span>
              <span>💨 {day.wind.speed} m/s</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastWidget;
