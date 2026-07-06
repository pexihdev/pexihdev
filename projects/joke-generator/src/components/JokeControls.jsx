import React from 'react';
import '../styles/JokeControls.css';

const JokeControls = ({ onGenerateJoke, loading }) => {
  return (
    <div className="controls">
      <button
        className="btn btn-primary"
        onClick={onGenerateJoke}
        disabled={loading}
      >
        {loading ? '⏳ Loading...' : '🎲 Get New Joke'}
      </button>
      <div className="btn-group">
        <button className="btn btn-secondary" title="Copy joke">
          📋 Copy
        </button>
        <button className="btn btn-secondary" title="Share joke">
          🔗 Share
        </button>
        <button className="btn btn-secondary" title="Save to favorites">
          ❤️ Save
        </button>
      </div>
    </div>
  );
};

export default JokeControls;
