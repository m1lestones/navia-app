# NAVIA App - Project Structure

## 📁 Directory Organization

```
navia-app/
├── App.js                          # Main app entry point
├── package.json                    # Dependencies and scripts
├── README.md                       # Project documentation
├── .gitignore                      # Git ignore rules
│
├── src/                            # Source code
│   ├── assets/                     # Static assets
│   │   ├── images/                 # Image files
│   │   ├── icons/                  # Icon files
│   │   └── fonts/                  # Custom fonts
│   │
│   ├── components/                 # React components
│   │   ├── common/                 # Reusable components
│   │   │   ├── Compass.js          # Compass component
│   │   │   ├── WingmateMessage.js  # Wingmate AI message
│   │   │   └── ProfileScreen.js    # Profile screen
│   │   │
│   │   ├── dashboard/              # Dashboard screens
│   │   │   └── DashboardScreen.js  # Main dashboard
│   │   │
│   │   ├── navigation/             # Navigation components
│   │   │   └── NavigationScreen.js # Gate navigation
│   │   │
│   │   └── automation/             # Automation features
│   │       └── AutomationScreen.js # Workflow automation
│   │
│   ├── styles/                     # Styling
│   │   ├── theme.js                # Theme configuration
│   │   └── globalStyles.js         # Global styles
│   │
│   ├── utils/                      # Utility functions
│   │   └── (utility files here)
│   │
│   ├── config/                     # Configuration
│   │   └── api.js                  # API configuration
│   │
│   ├── services/                   # API services
│   │   └── (service files here)
│   │
│   └── hooks/                      # Custom React hooks
│       └── (custom hooks here)
│
├── public/                         # Public static files
│   └── index.html
│
└── docs/                           # Documentation
    └── (documentation files here)
```

## 🎨 Key Files

### Entry Point
- **App.js** - Main application with navigation setup

### Components
- **Compass.js** - 360° navigation compass with gate markers
- **WingmateMessage.js** - AI assistant message component
- **DashboardScreen.js** - Main flight tracking dashboard
- **NavigationScreen.js** - Gate navigation with compass
- **AutomationScreen.js** - Workflow automation center
- **ProfileScreen.js** - User profile (coming soon)

### Styles
- **theme.js** - Complete design system (colors, spacing, fonts)
- **globalStyles.js** - Reusable style definitions

### Configuration
- **api.js** - API keys and endpoint configuration
- **package.json** - Project dependencies

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure APIs**
   - Edit `src/config/api.js`
   - Add your API keys

3. **Run Development Server**
   ```bash
   npm run web      # For web
   npm run ios      # For iOS
   npm run android  # For Android
   ```

## 📱 Screen Structure

### Dashboard (✈️)
- Live flight tracking
- Progress bar with plane animation
- Mini compass
- Wingmate AI messages
- Quick action buttons

### Navigate (🧭)
- Full 360° compass
- Gate markers
- Walking distance
- Real-time positioning

### Automate (⚡)
- Active workflows
- Automation cards
- Create new workflows
- Wingmate suggestions

### Profile (👤)
- User settings
- Account management
- Preferences

## 🎨 Design System

### Colors
- Primary: #0EA5E9 (Sky Blue)
- Secondary: #1E3A8A (Navy)
- Accent: #F59E0B (Gold)
- Success: #10B981 (Green)
- Error: #EF4444 (Red)

### Typography
- Font: System UI fonts
- Weights: 400, 500, 600, 700, 800

### Spacing
- xs: 4px
- sm: 8px
- md: 12px
- lg: 16px
- xl: 20px
- xxl: 24px
- xxxl: 32px

### Border Radius
- sm: 8px
- md: 12px
- lg: 16px
- xl: 20px
- round: 9999px

## 🔧 Configuration

### Environment Variables
Create a `.env` file:
```
REACT_APP_API_URL=https://api.navia.com
REACT_APP_FLIGHT_API_KEY=your_key
REACT_APP_MAPS_API_KEY=your_key
REACT_APP_UBER_API_KEY=your_key
```

### API Keys Required
- FlightAware API (flight data)
- Google Maps API (maps and location)
- Uber API (ride booking)
- Twilio API (SMS notifications)
- SendGrid API (email)

## 📦 Dependencies

### Core
- react
- react-native
- react-navigation

### UI Components
- react-native-vector-icons
- react-native-linear-gradient
- react-native-svg

### APIs
- axios (HTTP client)
- react-native-maps
- react-native-geolocation-service

### Storage
- @react-native-async-storage/async-storage

### Utilities
- date-fns (date formatting)

## 🧪 Testing

```bash
npm test              # Run all tests
npm test -- --coverage # With coverage
```

## 🏗️ Building

```bash
npm run build         # Production build
```

## 📝 Next Steps

1. Add more screens
2. Implement API integration
3. Add authentication
4. Implement push notifications
5. Add offline support
6. Write tests
7. Deploy to stores

## 🤝 Contributing

See CONTRIBUTING.md for contribution guidelines.

## 📄 License

MIT License - see LICENSE file

---

**Made with 💙 by the Navia Team**
