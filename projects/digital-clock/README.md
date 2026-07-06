# 🕐 Pexih Digital Clock

A beautiful, modern digital clock application that displays the current time in multiple time zones simultaneously. Built with the Pexih design system for a premium user experience.

## ✨ Features

- **Multi-Timezone Support** - Add up to 12 different time zones simultaneously
- **Real-Time Updates** - Clock updates every second for precise time display
- **24/12 Hour Format** - Toggle between 24-hour and 12-hour (AM/PM) formats
- **Dark/Light Theme** - Switch between dark and light themes based on preference
- **Responsive Design** - Looks great on desktop, tablet, and mobile devices
- **Local Storage** - Saves your timezone preferences and settings
- **Beautiful UI** - Modern glassmorphic design with smooth animations
- **30+ Timezones** - Includes major cities and regions worldwide

## 🎨 Design System

Built with the **Pexih Design System** featuring:

- Primary Blue: `#0066FF`
- Dark Background: `#0A1428`
- Glassmorphic Cards with blur effects
- Smooth transitions and animations
- Professional typography and spacing
- Accessibility-first approach

## 🚀 Quick Start

### Usage

1. **Open the Application**
   - Open `index.html` in your web browser
   - No server or installation required

2. **Add Time Zones**
   - Select a timezone from the dropdown menu
   - Click "Add Zone" button
   - The clock card will appear in the grid

3. **Customize Display**
   - Toggle between 24-hour and 12-hour formats
   - Click the theme button to switch between dark and light modes
   - Your preferences are automatically saved

4. **Manage Time Zones**
   - Click the "✕ Remove" button on any clock card to remove it
   - You can add and remove zones at any time
   - Maximum of 12 time zones can be displayed

## 📁 Project Structure

```
projects/digital-clock/
├── index.html          # HTML structure
├── styles.css          # Styling and responsive design
├── script.js           # JavaScript functionality
└── README.md          # Documentation
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No dependencies required
- **Local Storage API** - Persistent user preferences
- **CSS Variables** - Dynamic theming

## 🌍 Available Time Zones

### Americas
- Eastern (New York)
- Central (Chicago)
- Mountain (Denver)
- Pacific (Los Angeles)
- Alaska (Anchorage)
- Hawaii (Honolulu)
- Toronto
- Mexico City
- São Paulo
- Buenos Aires

### Europe
- London (GMT/BST)
- Paris (CET/CEST)
- Berlin (CET/CEST)
- Madrid (CET/CEST)
- Rome (CET/CEST)
- Amsterdam (CET/CEST)
- Moscow (MSK)
- Istanbul (EET/EEST)

### Asia
- Dubai (GST)
- India (IST)
- Bangkok (ICT)
- Singapore (SGT)
- Hong Kong (HKT)
- Shanghai (CST)
- Tokyo (JST)
- Seoul (KST)
- Manila (PHT)
- Sydney (AEDT/AEST)

### Africa
- Cairo (EET)
- Johannesburg (SAST)
- Lagos (WAT)
- Nairobi (EAT)

## 💾 Data Storage

The application uses browser's `localStorage` to save:
- Selected time zones
- Time format preference (12/24 hour)
- Theme preference (dark/light mode)

No data is sent to any server.

## 🔧 Key Functions

### `getTimeInTimezone(timezone)`
Returns the current time in the specified timezone with hour, minute, and second values.

### `formatTime(timeObj)`
Formats the time object according to the selected format (12/24 hour).

### `updateClocks()`
Updates all clock displays with the current time.

### `toggleTheme()`
Switches between dark and light themes.

### `savePreferences()` / `loadPreferences()`
Manages user preferences in localStorage.

## 🎨 Customization

### Change Color Scheme
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-blue: #0066FF;      /* Primary color */
    --dark-blue: #003D99;         /* Secondary color */
    --dark-bg: #0A1428;           /* Background */
    --card-bg: #1a2332;           /* Card background */
    /* ... more colors ... */
}
```

### Add More Time Zones
Edit the `DEFAULT_TIMEZONES` array and the timezone options in `index.html`:

```javascript
const DEFAULT_TIMEZONES = [
    'UTC',
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo'
];
```

### Change Update Frequency
Modify the interval in `script.js`:

```javascript
setInterval(updateClocks, 1000); // Change 1000 to desired milliseconds
```

## 📱 Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Zero Dependencies** - No external libraries required
- **Lightweight** - CSS and JS combined < 50KB
- **Efficient Updates** - Only updates visible elements
- **Smooth Animations** - 60fps performance

## 🔒 Privacy

This application:
- ✅ Runs entirely in your browser
- ✅ Doesn't track your activity
- ✅ Doesn't send data to external servers
- ✅ Uses browser time zone data from your system
- ✅ Only stores preferences locally

## 🐛 Troubleshooting

### Clock shows wrong time
- Ensure your system time is set correctly
- Check that the browser has permission to access system timezone
- Try refreshing the page

### Timezone not appearing
- Some timezone names are OS-dependent
- Try selecting a different timezone
- Check browser console for errors

### Preferences not saving
- Ensure localStorage is enabled in your browser
- Check browser's private/incognito mode (may not save data)
- Try clearing browser cache and reloading

## 📄 License

MIT License - Feel free to use and modify for your projects.

## 👨‍💻 Author

**Pexih Dev** - Building innovative solutions with clean code

- Portfolio: https://github.com/pexihdev
- Design System: Pexih

## 🌟 Future Enhancements

- [ ] Analog clock display
- [ ] Alarm functionality
- [ ] Stopwatch/Timer modes
- [ ] Timezone comparison chart
- [ ] Keyboard shortcuts
- [ ] Export clock as image
- [ ] PWA support for offline use
- [ ] Multiple language support

---

**Made with ❤️ by Pexih Dev**