import React, { useState, useEffect } from 'react';
import CurrentWeather from './components/CurrentWeather';
import ForecastWidget from './components/ForecastWidget';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('New York');
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favoriteCities');
    return saved ? JSON.parse(saved) : [];
  });

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/weather?city=${cityName}`);
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setCurrentWeather(data.current);
      setForecast(data.forecast);
      setCity(cityName);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = (cityName) => {
    if (!favorites.includes(cityName)) {
      const updated = [...favorites, cityName];
      setFavorites(updated);
      localStorage.setItem('favoriteCities', JSON.stringify(updated));
    }
  };

  const removeFromFavorites = (cityName) => {
    const updated = favorites.filter(fav => fav !== cityName);
    setFavorites(updated);
    localStorage.setItem('favoriteCities', JSON.stringify(updated));
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <h1>🌦️ Weather Dashboard</h1>
        <p>Real-time weather information at your fingertips</p>
      </header>

      <SearchBar onSearch={fetchWeather} />

      {error && <div className="error-message">❌ {error}</div>}

      {loading && <div className="loading">Loading weather data...</div>}

      {currentWeather && (
        <>
          <CurrentWeather
            weather={currentWeather}
            city={city}
            isFavorite={favorites.includes(city)}
            onAddFavorite={() => addToFavorites(city)}
            onRemoveFavorite={() => removeFromFavorites(city)}
          />

          {forecast && <ForecastWidget forecast={forecast} />}
        </>
      )}

      {favorites.length > 0 && (
        <section className="favorites-section">
          <h2>⭐ Favorite Cities</h2>
          <div className="favorites-grid">
            {favorites.map(fav => (
              <button
                key={fav}
                className="favorite-btn"
                onClick={() => fetchWeather(fav)}
              >
                {fav}
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default App;
