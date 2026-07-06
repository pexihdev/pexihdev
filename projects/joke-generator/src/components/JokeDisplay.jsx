import React from 'react';
import '../styles/JokeDisplay.css';

const JokeDisplay = ({ joke, loading, error }) => {
  if (loading) {
    return (
      <div className="joke-display loading">
        <div className="spinner"></div>
        <p>Loading a funny joke...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="joke-display error">
        <p>🚫 Oops! Something went wrong: {error}</p>
      </div>
    );
  }

  if (!joke) {
    return (
      <div className="joke-display empty">
        <p>No joke loaded yet. Click the button to get started!</p>
      </div>
    );
  }

  return (
    <div className="joke-display">
      <div className="joke-content">
        {joke.type === 'single' ? (
          <p className="joke-text">{joke.joke}</p>
        ) : (
          <>
            <p className="setup">{joke.setup}</p>
            <p className="delivery">{joke.delivery}</p>
          </>
        )}
      </div>
      <div className="joke-meta">
        <span className="category">{joke.category}</span>
        {joke.safe && <span className="badge safe">Family Friendly</span>}
      </div>
    </div>
  );
};

export default JokeDisplay;
