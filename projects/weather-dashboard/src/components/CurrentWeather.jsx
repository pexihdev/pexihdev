import React from 'react';
import '../styles/CurrentWeather.css';

const CurrentWeather = ({ weather, city, isFavorite, onAddFavorite, onRemoveFavorite }) => {
  const getWeatherIcon = (description) => {
    const desc = description.toLowerCase();
    if (desc.includes('clear') || desc.includes('sunny')) return '☀️';
    if (desc.includes('cloud')) return '☁️';
    if (desc.includes('rain')) return '🌧️';
    if (desc.includes('snow')) return '❄️';
    if (desc.includes('thunder')) return '⛈️';
    if (desc.includes('wind')) return '💨';
    if (desc.includes('fog') || desc.includes('mist')) return '🌫️';
    return '🌡️';
  };

  return (
    <div className="current-weather">
      <div className="weather-main">
        <div className="weather-header">
          <h2>{city}</h2>
          <button
            className="favorite-btn"
            onClick={isFavorite ? onRemoveFavorite : onAddFavorite}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>

        <div className="weather-content">
          <div className="temperature-section">
            <span className="weather-icon">{getWeatherIcon(weather.description)}</span>
            <span className="temperature">{Math.round(weather.temp)}°C</span>
          </div>

          <div className="description">{weather.description}</div>

          <div className="weather-details">
            <div className="detail-item">
              <span className="label">Feels Like</span>
              <span className="value">{Math.round(weather.feels_like)}°C</span>
            </div>
            <div className="detail-item">
              <span className="label">Humidity</span>
              <span className="value">{weather.humidity}%</span>
            </div>
            <div className="detail-item">
              <span className="label">Wind Speed</span>
              <span className="value">{weather.wind_speed} m/s</span>
            </div>
            <div className="detail-item">
              <span className="label">Pressure</span>
              <span className="value">{weather.pressure} hPa</span>
            </div>
            <div className="detail-item">
              <span className="label">UV Index</span>
              <span className="value">{weather.uvi || 'N/A'}</span>
            </div>
            <div className="detail-item">
              <span className="label">Visibility</span>
              <span className="value">{(weather.visibility / 1000).toFixed(1)} km</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
