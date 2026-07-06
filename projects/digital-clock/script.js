// Global state
const state = {
    timezones: [],
    format: '24',
    isDarkMode: true
};

// Default timezones
const DEFAULT_TIMEZONES = [
    'UTC',
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo'
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    updateClocks();
    setInterval(updateClocks, 1000);
});

function initializeApp() {
    // Load saved preferences
    loadPreferences();
    
    // Set up event listeners
    document.getElementById('addBtn').addEventListener('click', addTimezone);
    document.getElementById('timezoneSelect').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTimezone();
    });
    
    // Format toggle
    document.querySelectorAll('input[name="format"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            state.format = e.target.value;
            savePreferences();
            updateClocks();
        });
    });
    
    // Theme toggle
    document.getElementById('themeBtn').addEventListener('click', toggleTheme);
    
    // Initialize with default or saved timezones
    if (state.timezones.length === 0) {
        state.timezones = DEFAULT_TIMEZONES;
    }
    
    renderClocks();
}

function addTimezone() {
    const select = document.getElementById('timezoneSelect');
    const timezone = select.value;
    
    if (!timezone) {
        alert('Please select a timezone');
        return;
    }
    
    if (state.timezones.includes(timezone)) {
        alert('This timezone is already added');
        return;
    }
    
    if (state.timezones.length >= 12) {
        alert('Maximum 12 timezones allowed');
        return;
    }
    
    state.timezones.push(timezone);
    select.value = '';
    savePreferences();
    renderClocks();
}

function removeTimezone(timezone) {
    if (state.timezones.length === 1) {
        alert('You must have at least one timezone');
        return;
    }
    
    state.timezones = state.timezones.filter(tz => tz !== timezone);
    savePreferences();
    renderClocks();
}

function renderClocks() {
    const grid = document.getElementById('clocksGrid');
    
    if (state.timezones.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <div class="empty-state-icon">⏰</div>
                <h3>No Time Zones Added</h3>
                <p>Select a timezone above to get started</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = state.timezones.map(timezone => `
        <div class="clock-card" data-timezone="${timezone}">
            <div class="clock-timezone">${getDisplayName(timezone)}</div>
            <div class="clock-time" data-timezone="${timezone}">--:--:--</div>
            <div class="clock-period" data-period="${timezone}"></div>
            <div class="clock-date" data-date="${timezone}"></div>
            <button class="clock-remove" onclick="removeTimezone('${timezone}')" title="Remove timezone">✕ Remove</button>
        </div>
    `).join('');
}

function updateClocks() {
    state.timezones.forEach(timezone => {
        const time = getTimeInTimezone(timezone);
        const timeElement = document.querySelector(`[data-timezone="${timezone}"].clock-time`);
        const periodElement = document.querySelector(`[data-period="${timezone}"]`);
        const dateElement = document.querySelector(`[data-date="${timezone}"]`);
        
        if (timeElement) {
            timeElement.textContent = formatTime(time);
        }
        
        if (periodElement) {
            periodElement.textContent = state.format === '12' ? (time.hour >= 12 ? 'PM' : 'AM') : '';
        }
        
        if (dateElement) {
            dateElement.textContent = formatDate(time);
        }
    });
}

function getTimeInTimezone(timezone) {
    const now = new Date();
    const utcTime = now.toLocaleString('en-US', { timeZone: timezone });
    const date = new Date(utcTime);
    
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
        date: date
    };
}

function formatTime(timeObj) {
    const { hour, minute, second } = timeObj;
    
    if (state.format === '12') {
        const displayHour = hour % 12 || 12;
        return `${pad(displayHour)}:${pad(minute)}:${pad(second)}`;
    }
    
    return `${pad(hour)}:${pad(minute)}:${pad(second)}`;
}

function formatDate(timeObj) {
    const date = timeObj.date;
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function pad(num) {
    return String(num).padStart(2, '0');
}

function getDisplayName(timezone) {
    const names = {
        'UTC': 'UTC',
        'America/New_York': 'New York (EST/EDT)',
        'America/Chicago': 'Chicago (CST/CDT)',
        'America/Denver': 'Denver (MST/MDT)',
        'America/Los_Angeles': 'Los Angeles (PST/PDT)',
        'America/Anchorage': 'Anchorage (AKST/AKDT)',
        'Pacific/Honolulu': 'Honolulu (HST)',
        'America/Toronto': 'Toronto (EST/EDT)',
        'America/Mexico_City': 'Mexico City (CST/CDT)',
        'America/Sao_Paulo': 'São Paulo (BRT)',
        'America/Buenos_Aires': 'Buenos Aires (ART)',
        'Europe/London': 'London (GMT/BST)',
        'Europe/Paris': 'Paris (CET/CEST)',
        'Europe/Berlin': 'Berlin (CET/CEST)',
        'Europe/Madrid': 'Madrid (CET/CEST)',
        'Europe/Rome': 'Rome (CET/CEST)',
        'Europe/Amsterdam': 'Amsterdam (CET/CEST)',
        'Europe/Moscow': 'Moscow (MSK)',
        'Europe/Istanbul': 'Istanbul (EET/EEST)',
        'Asia/Dubai': 'Dubai (GST)',
        'Asia/Kolkata': 'India (IST)',
        'Asia/Bangkok': 'Bangkok (ICT)',
        'Asia/Singapore': 'Singapore (SGT)',
        'Asia/Hong_Kong': 'Hong Kong (HKT)',
        'Asia/Shanghai': 'Shanghai (CST)',
        'Asia/Tokyo': 'Tokyo (JST)',
        'Asia/Seoul': 'Seoul (KST)',
        'Asia/Manila': 'Manila (PHT)',
        'Australia/Sydney': 'Sydney (AEDT/AEST)',
        'Africa/Cairo': 'Cairo (EET)',
        'Africa/Johannesburg': 'Johannesburg (SAST)',
        'Africa/Lagos': 'Lagos (WAT)',
        'Africa/Nairobi': 'Nairobi (EAT)'
    };
    
    return names[timezone] || timezone;
}

function toggleTheme() {
    state.isDarkMode = !state.isDarkMode;
    document.body.classList.toggle('light-mode', !state.isDarkMode);
    savePreferences();
}

function savePreferences() {
    localStorage.setItem('pexihClockPrefs', JSON.stringify({
        timezones: state.timezones,
        format: state.format,
        isDarkMode: state.isDarkMode
    }));
}

function loadPreferences() {
    const saved = localStorage.getItem('pexihClockPrefs');
    if (saved) {
        const prefs = JSON.parse(saved);
        state.timezones = prefs.timezones || DEFAULT_TIMEZONES;
        state.format = prefs.format || '24';
        state.isDarkMode = prefs.isDarkMode !== false;
        
        // Apply theme
        if (!state.isDarkMode) {
            document.body.classList.add('light-mode');
        }
        
        // Apply format
        document.querySelector(`input[name="format"][value="${state.format}"]`).checked = true;
    }
}