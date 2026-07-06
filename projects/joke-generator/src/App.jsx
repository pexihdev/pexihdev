import React, { useState, useEffect } from 'react';
import JokeDisplay from './components/JokeDisplay';
import JokeControls from './components/JokeControls';
import './App.css';

const App = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [jokeHistory, setJokeHistory] = useState([]);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.example.com/jokes/random');
      if (!response.ok) throw new Error('Failed to fetch joke');
      const data = await response.json();
      setJoke(data);
      setJokeHistory([data, ...jokeHistory.slice(0, 9)]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <h1>😂 Random Joke Generator</h1>
        <p>Get a laugh with random jokes from the internet</p>
      </header>

      <main className="main-content">
        <JokeDisplay joke={joke} loading={loading} error={error} />
        <JokeControls onGenerateJoke={fetchJoke} loading={loading} />
      </main>

      {jokeHistory.length > 0 && (
        <section className="history-section">
          <h2>Recent Jokes</h2>
          <div className="history-list">
            {jokeHistory.map((j, idx) => (
              <div key={idx} className="history-item">
                {j.type === 'single' ? j.joke : `${j.setup}\n${j.delivery}`}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default App;
