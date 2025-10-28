# 🚀 NAVIA APP - INSTALLATION & SETUP GUIDE

## 📦 What's Included

Your download includes:
- ✅ Complete React Native source code
- ✅ All components and screens
- ✅ Design system (theme + styles)
- ✅ HTML mockups for reference
- ✅ Full documentation
- ✅ Project structure

## 🎯 Quick Start

### Step 1: Extract the Project

```bash
unzip navia-app-complete.zip
cd navia-app
```

### Step 2: Install Dependencies

```bash
# Install Node.js packages
npm install

# For iOS (Mac only)
cd ios && pod install && cd ..
```

### Step 3: Run the App

```bash
# Run on web browser
npm run web

# Run on iOS simulator (Mac only)
npm run ios

# Run on Android emulator
npm run android
```

## 📁 Project Structure

```
navia-app/
├── App.js                          # Main entry point
├── package.json                    # Dependencies
├── README.md                       # Documentation
│
├── src/
│   ├── components/
│   │   ├── common/                 # Reusable components
│   │   │   ├── Compass.js          # 360° compass
│   │   │   ├── WingmateMessage.js  # AI messages
│   │   │   └── ProfileScreen.js    # Profile screen
│   │   │
│   │   ├── dashboard/              # Flight tracking
│   │   │   └── DashboardScreen.js
│   │   │
│   │   ├── navigation/             # Gate navigation
│   │   │   └── NavigationScreen.js
│   │   │
│   │   └── automation/             # Workflows
│   │       └── AutomationScreen.js
│   │
│   ├── styles/
│   │   ├── theme.js                # Design tokens
│   │   └── globalStyles.js         # Global styles
│   │
│   └── config/
│       └── api.js                  # API configuration
│
└── docs/
    ├── app-mockup.html             # Visual mockup
    └── compass-demo.html           # Compass demo
```

## 🎨 Design System

All colors, spacing, fonts are in `src/styles/theme.js`:

```javascript
import { colors, spacing, fontSize } from './src/styles/theme';

// Use in components:
color: colors.primary        // Sky blue #0EA5E9
backgroundColor: colors.background  // Dark #0F172A
padding: spacing.xl          // 20px
fontSize: fontSize.xl        // 18px
```

## 🔧 Configuration

### 1. API Keys

Edit `src/config/api.js`:

```javascript
export const API_CONFIG = {
  FLIGHT_API_KEY: 'your_flight_api_key',
  MAPS_API_KEY: 'your_maps_api_key',
  UBER_API_KEY: 'your_uber_api_key',
};
```

### 2. Environment Variables

Create `.env` file:

```env
REACT_APP_API_URL=https://api.navia.com
REACT_APP_FLIGHT_API_KEY=your_key_here
REACT_APP_MAPS_API_KEY=your_key_here
REACT_APP_UBER_API_KEY=your_key_here
```

## 📱 Screens Included

### 1. Dashboard Screen (`DashboardScreen.js`)
- ✅ Live flight tracking
- ✅ Progress bar with animation
- ✅ Mini compass
- ✅ Wingmate AI messages
- ✅ Quick actions

### 2. Navigation Screen (`NavigationScreen.js`)
- ✅ Full 360° compass
- ✅ Gate markers
- ✅ Walking distance
- ✅ Cardinal directions

### 3. Automation Screen (`AutomationScreen.js`)
- ✅ Active workflows
- ✅ Workflow cards
- ✅ Create new button
- ✅ Status indicators

### 4. Profile Screen (`ProfileScreen.js`)
- ✅ Basic layout
- ⚠️ Coming soon features

## 🎨 Components Guide

### Compass Component

```javascript
import Compass from './src/components/common/Compass';

// Basic usage
<Compass size={200} />

// With gates
<Compass 
  size={250}
  showGates={true}
  gates={[
    { name: 'B22', degrees: 25 },
    { name: 'C15', degrees: 135 },
  ]}
/>
```

### Wingmate Message

```javascript
import WingmateMessage from './src/components/common/WingmateMessage';

<WingmateMessage
  message="You're halfway there! ✨"
  timestamp="Just now"
/>
```

## 🔌 API Integration

### Example Flight API Call

```javascript
import axios from 'axios';
import { API_CONFIG } from './src/config/api';

const getFlightStatus = async (flightId) => {
  try {
    const response = await axios.get(
      `${API_CONFIG.FLIGHT_API_URL}/flights/${flightId}`,
      {
        headers: {
          'X-API-Key': API_CONFIG.FLIGHT_API_KEY
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching flight:', error);
  }
};
```

## 📦 Required APIs

### 1. FlightAware API
- **Purpose:** Real-time flight data
- **URL:** https://flightaware.com/commercial/aeroapi/
- **Cost:** Free tier available
- **Setup:** Create account, get API key

### 2. Google Maps API
- **Purpose:** Maps and location
- **URL:** https://developers.google.com/maps
- **Cost:** $200/month free credit
- **Setup:** Enable Maps JavaScript API

### 3. Uber API (Optional)
- **Purpose:** Ride booking
- **URL:** https://developer.uber.com/
- **Cost:** Free for integration
- **Setup:** Register app, get client ID

## 🎨 Customization

### Change Colors

Edit `src/styles/theme.js`:

```javascript
export const colors = {
  primary: '#YOUR_COLOR',      // Change main color
  accent: '#YOUR_COLOR',        // Change accent
  background: '#YOUR_COLOR',    // Change background
};
```

### Add New Screen

1. Create file in `src/components/`
2. Import in `App.js`
3. Add to navigation

Example:
```javascript
// src/components/settings/SettingsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

export default SettingsScreen;
```

## 🧪 Testing

```bash
# Run tests
npm test

# With coverage
npm test -- --coverage

# Watch mode
npm test -- --watch
```

## 🏗️ Building for Production

### Web Build
```bash
npm run build
# Output in /dist folder
```

### iOS Build
```bash
cd ios
xcodebuild -workspace Navia.xcworkspace -scheme Navia -configuration Release
```

### Android Build
```bash
cd android
./gradlew assembleRelease
# Output: android/app/build/outputs/apk/release/
```

## 📱 Device Testing

### iOS (Mac only)
```bash
npm run ios
# Simulator opens automatically
```

### Android
```bash
# Start emulator first
# Then run:
npm run android
```

### Physical Device
```bash
# iOS: Use Xcode
# Android: Enable USB debugging, then npm run android
```

## 🐛 Troubleshooting

### Issue: Dependencies won't install
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Issue: iOS pods won't install
```bash
cd ios
pod deintegrate
pod install
cd ..
```

### Issue: Metro bundler errors
```bash
# Reset Metro cache
npx react-native start --reset-cache
```

## 📚 Additional Resources

### Documentation
- `/README.md` - Main documentation
- `/PROJECT_STRUCTURE.md` - File structure
- `/docs/app-mockup.html` - Visual mockup
- `/docs/compass-demo.html` - Compass demo

### External Docs
- React Native: https://reactnative.dev/
- React Navigation: https://reactnavigation.org/
- FlightAware API: https://flightaware.com/aeroapi/

## 🎯 Next Steps

### Immediate Tasks
1. ✅ Install dependencies
2. ✅ Add API keys
3. ✅ Run on device
4. ✅ Review mockups

### Development Tasks
1. 🔄 Implement real API calls
2. 🔄 Add authentication
3. 🔄 Add push notifications
4. 🔄 Add offline mode
5. 🔄 Write tests

### Future Features
1. 📱 Apple Watch app
2. 🌐 Multi-language support
3. 🌙 Dark mode toggle
4. 🏨 Hotel booking
5. 🚗 Car rental

## 💡 Tips & Best Practices

### Performance
- Use `useMemo` for expensive calculations
- Use `useCallback` for event handlers
- Lazy load screens with React.lazy()

### State Management
- Consider Redux for complex state
- Use Context API for theme
- Keep state close to where it's used

### Code Organization
- One component per file
- Group related components
- Use index.js for exports

### Styling
- Use theme variables
- Create reusable styles
- Follow mobile-first approach

## 🆘 Getting Help

### Issues
- Check `/README.md` first
- Review mockups in `/docs`
- Search React Native docs

### Support
- GitHub Issues: (your repo)
- Discord: (your server)
- Email: support@navia.com

## ✅ Checklist

Before deploying:
- [ ] All API keys configured
- [ ] App tested on iOS
- [ ] App tested on Android
- [ ] Error handling added
- [ ] Loading states implemented
- [ ] Offline mode working
- [ ] Push notifications setup
- [ ] Analytics configured
- [ ] App icons added
- [ ] Splash screen added

## 🎉 You're Ready!

Your Navia app is now set up and ready for development!

**Next command:**
```bash
npm run web
```

Then open http://localhost:3000

**Made with 💙 by the Navia Team**

---

## 📞 Quick Reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run web` | Run on web |
| `npm run ios` | Run on iOS |
| `npm run android` | Run on Android |
| `npm test` | Run tests |
| `npm run build` | Production build |

**Happy coding! 🚀✈️🧭**
