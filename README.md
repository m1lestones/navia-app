# 🧭 NAVIA - Navigate Every Journey

![Navia Logo](./docs/images/logo.png)

**Professional flight tracking and navigation platform with AI-powered automation**

## 🌟 Features

### Core Features
- ✈️ **Real-time Flight Tracking** - Live updates with 1.5s navigation pulse
- 🧭 **Gate Navigation** - 360° compass with degree-based gate locations
- 🦅 **Wingmate AI Assistant** - Intelligent flight companion
- ⚡ **Smart Automation** - Set-it-and-forget-it workflows
- 📱 **Fully Responsive** - Perfect on all devices (mobile, tablet, desktop)

### Navigation System
- Full 360° compass with cardinal directions (N, S, E, W)
- Intercardinal directions (NE, SE, SW, NW)
- Real-time gate positioning
- Walking distance calculations
- Interactive gate markers

### Automation Workflows
- Automatic notifications on landing
- Ride booking integration
- Contact notifications
- Custom trigger-based actions
- Multi-flight management

## 🚀 Quick Start

### Prerequisites
```bash
node >= 16.0.0
npm >= 8.0.0
react-native-cli
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/navia-app.git
cd navia-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Run on iOS**
```bash
npm run ios
```

4. **Run on Android**
```bash
npm run android
```

5. **Run on Web**
```bash
npm run web
```

## 📁 Project Structure

```
navia-app/
├── src/
│   ├── assets/           # Images, icons, fonts
│   ├── components/       # React components
│   │   ├── common/       # Reusable components
│   │   ├── dashboard/    # Dashboard screens
│   │   ├── navigation/   # Navigation components
│   │   └── automation/   # Automation features
│   ├── styles/           # Global styles & themes
│   ├── utils/            # Utility functions
│   ├── config/           # Configuration files
│   ├── services/         # API services
│   └── hooks/            # Custom React hooks
├── public/               # Static assets
├── docs/                 # Documentation
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary:** Sky Blue (#0EA5E9) - Navigation, trust
- **Secondary:** Navy (#1E3A8A) - Background, depth
- **Accent:** Gold (#F59E0B) - Compass, highlights
- **Pulse:** Red (#FF0066) - Live indicators
- **Success:** Green (#10B981) - Active status

### Typography
- **Font Family:** -apple-system, BlinkMacSystemFont, 'Segoe UI'
- **Logo:** 800 weight, gradient
- **Headings:** 700 weight
- **Body:** 400-500 weight

### Animations
- **Pulse Rhythm:** 1.5s (consistent across app)
- **Compass Rotation:** 8s smooth spin
- **Navigation Rings:** Expanding pulse waves
- **Wingmate Float:** 2s gentle bob

## 🧭 Compass System

The Navia compass uses a 360° degree system for precise gate navigation:

- **0° / 360°** - North (N)
- **90°** - East (E)
- **180°** - South (S)
- **270°** - West (W)

Gates are positioned at specific degrees for intuitive navigation.

## 🦅 Wingmate AI

Wingmate is the intelligent AI assistant that:
- Provides contextual flight updates
- Offers navigation guidance
- Suggests automation workflows
- Sends timely notifications
- Learns user preferences

## ⚡ Automation Examples

### Notify on Landing
```javascript
{
  trigger: "on_landing",
  action: "send_sms",
  recipient: "Mom",
  message: "Landed safely! ✈️"
}
```

### Book Ride
```javascript
{
  trigger: "30_min_before_landing",
  action: "book_uber",
  destination: "Home Address"
}
```

### Email on Delay
```javascript
{
  trigger: "on_delay",
  action: "send_email",
  recipient: "Boss",
  message: "Flight delayed. Will be late."
}
```

## 📱 Responsive Design

Navia is optimized for all devices:

- 📱 **Phones:** iPhone SE to Pro Max, Android devices
- 📱 **Tablets:** iPad, Samsung Galaxy Tab, Surface
- 💻 **Desktop:** Full responsive web experience
- 🖥️ **Ultra-wide:** Optimized for large displays

### Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🔧 Configuration

### API Keys
Edit `src/config/api.js` to add your API keys:

```javascript
export const API_CONFIG = {
  FLIGHT_API_KEY: 'your_flight_api_key',
  MAPS_API_KEY: 'your_maps_api_key',
  UBER_API_KEY: 'your_uber_api_key',
};
```

### Environment Variables
Create a `.env` file:

```
REACT_APP_API_URL=https://api.navia.com
REACT_APP_FLIGHT_API_KEY=your_key_here
REACT_APP_MAPS_API_KEY=your_key_here
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Run specific test
npm test -- ComponentName
```

## 📦 Building

### Development
```bash
npm run web
# App runs on http://localhost:3000
```

### Production Build
```bash
npm run build
# Creates optimized build in /dist
```

### iOS Build
```bash
cd ios && pod install
npm run ios
```

### Android Build
```bash
npm run android
```

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Lead Developer:** Your Name
- **Designer:** Your Name
- **Project Manager:** Your Name

## 📞 Support

- 📧 Email: support@navia.com
- 🌐 Website: https://navia.com
- 📱 Twitter: @NaviaApp
- 💬 Discord: discord.gg/navia

## 🙏 Acknowledgments

- Flight data provided by [FlightAware API](https://flightaware.com)
- Maps powered by [Mapbox](https://mapbox.com)
- Icons from [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)

## 🗺️ Roadmap

### Version 1.1
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Offline mode
- [ ] Apple Watch companion app

### Version 2.0
- [ ] Hotel booking integration
- [ ] Car rental booking
- [ ] Trip planning features
- [ ] Social sharing

---

**Made with 💙 by the Navia Team**

**Navigate Every Journey** 🧭✈️
