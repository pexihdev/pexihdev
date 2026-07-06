import express from 'express';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3001;

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Fetch random joke from JokeAPI
app.get('/api/joke/random', async (req, res) => {
  try {
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single,twopart');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch joke', details: error.message });
  }
});

// Fetch joke by category
app.get('/api/joke/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const response = await axios.get(`https://v2.jokeapi.dev/joke/${category}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch joke', details: error.message });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🤣 Joke Generator API running on http://localhost:${PORT}`);
});
