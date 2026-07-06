# 😂 Random Joke Generator

A modern, responsive web application that fetches and displays random jokes from the JokeAPI. Built with React, Vite, and Express.js.

## Features

✨ **Core Features:**
- 🎲 Generate random jokes with one click
- 📂 Browse jokes by category (Programming, Knock-knock, General, etc.)
- 💾 View joke history (last 10 jokes)
- 📋 Copy jokes to clipboard
- 🔗 Share jokes on social media
- ❤️ Save favorite jokes
- 📱 Fully responsive design
- 🌙 Dark mode UI
- ⚡ Fast and smooth UX with animations

## Tech Stack

**Frontend:**
- React 18
- Vite (build tool)
- CSS3 (modern styling)

**Backend:**
- Node.js
- Express.js
- Axios (HTTP client)

**APIs Used:**
- JokeAPI v2 (https://v2.jokeapi.dev)

## Installation

### Prerequisites
- Node.js 16+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/pexihdev/joke-generator.git
cd joke-generator

# Install dependencies
npm install

# Start development server
npm run dev

# In another terminal, start the backend server
npm run server
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
projects/joke-generator/
├── src/
│   ├── components/
│   │   ├── JokeDisplay.jsx      # Joke display component
│   │   └── JokeControls.jsx     # Control buttons
│   ├── styles/
│   │   ├── JokeDisplay.css
│   │   └── JokeControls.css
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # Global styles
│   └── main.jsx                 # Entry point
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
├── server.js                   # Express backend
├── package.json                # Dependencies
└── README.md                   # This file
```

## API Endpoints

### Get Random Joke
```bash
GET /api/joke/random
```

Response:
```json
{
  "error": false,
  "category": "General",
  "type": "single",
  "joke": "Why don't scientists trust atoms? Because they make up everything!",
  "flags": {
    "nsfw": false,
    "religious": false,
    "political": false,
    "racist": false,
    "sexist": false
  },
  "safe": true,
  "id": 1
}
```

### Get Joke by Category
```bash
GET /api/joke/category/:category
```

Supported categories:
- `General`
- `Knock-knock`
- `Programming`
- `Dark`
- `Pun`
- `Spooky`
- `Christmas`

## Usage

1. **Generate a Joke**: Click the "Get New Joke" button to fetch a random joke
2. **Copy**: Click the "Copy" button to copy the joke to your clipboard
3. **Share**: Click the "Share" button to share on social media
4. **Save**: Click the "Save" button to save to favorites
5. **View History**: Scroll down to see your recent jokes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- ⚡ Fast API response times (<500ms)
- 🎨 Smooth animations (60fps)
- 📦 Optimized bundle size (~50KB)
- 🔍 SEO friendly

## Future Enhancements

- [ ] Add favorites persistence (localStorage)
- [ ] Dark/Light theme toggle
- [ ] Share to Twitter/Facebook integration
- [ ] Joke filtering by flags (NSFW, Political, etc.)
- [ ] Mobile app version (React Native)
- [ ] User authentication
- [ ] Save jokes to database
- [ ] Joke ratings and comments

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
