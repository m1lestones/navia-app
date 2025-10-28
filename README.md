# ✈️ FlightPulse - Real-Time Flight Tracking & Automation

**Your travel, in real-time.**

FlightPulse is a modern web application for tracking flights in real-time and automating travel tasks. Perfect for business travelers, families, and anyone who flies.

## 🎯 Features

- ✅ Real-time flight tracking
- ✅ Live notifications for delays, gate changes
- ✅ Powerful automation workflows
- ✅ Beautiful, modern UI
- ✅ Interactive flight map
- ✅ Travel statistics & achievements
- ✅ Multi-airline support

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Custom CSS with CSS Variables
- **Icons**: Emoji & Unicode
- **Fonts**: Inter (Google Fonts)
- **Maps**: Mapbox GL JS (for flight tracking map)
- **Storage**: LocalStorage (for demo data)

## 📁 Project Structure

```
flightpulse/
├── index.html              # Landing page
├── app.html                # Main app dashboard
├── css/
│   ├── style.css          # Global styles
│   ├── variables.css      # CSS variables (colors, spacing)
│   ├── components.css     # Reusable components
│   └── responsive.css     # Mobile responsiveness
├── js/
│   ├── app.js             # Main app logic
│   ├── flights.js         # Flight data & API mock
│   ├── automation.js      # Automation engine
│   ├── notifications.js   # Notification system
│   └── utils.js           # Helper functions
├── assets/
│   ├── images/            # Images & icons
│   └── fonts/             # Local fonts (if needed)
├── pages/
│   ├── search.html        # Flight search page
│   ├── details.html       # Flight details page
│   ├── automation.html    # Automation builder
│   ├── profile.html       # User profile
│   └── settings.html      # Settings page
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Live Server extension for VS Code (optional but recommended)

### Installation

1. **Clone or download this project**
   ```bash
   # If you have the files, just extract them
   # Or create a new folder and copy all files
   ```

2. **Open in VS Code**
   ```bash
   cd flightpulse
   code .
   ```

3. **Install Live Server (VS Code Extension)**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
   - Search for "Live Server"
   - Install by Ritwick Dey
   - Right-click `index.html` and select "Open with Live Server"

4. **Or open directly in browser**
   - Simply double-click `index.html`
   - Navigate through the app

## 📖 Development Guide

### File Purpose:

**HTML Files:**
- `index.html` - Landing/marketing page
- `app.html` - Main dashboard (logged in view)
- `pages/*.html` - Individual app pages

**CSS Files:**
- `css/variables.css` - Design tokens (colors, fonts, spacing)
- `css/style.css` - Global styles, typography, layout
- `css/components.css` - Reusable UI components
- `css/responsive.css` - Mobile/tablet breakpoints

**JavaScript Files:**
- `js/app.js` - App initialization, routing
- `js/flights.js` - Flight data management
- `js/automation.js` - Automation workflow engine
- `js/notifications.js` - Push notification system
- `js/utils.js` - Helper functions

### Adding a New Page:

1. Create HTML file in `pages/` folder
2. Include CSS and JS files
3. Add navigation link in main menu
4. Update routing in `js/app.js`

### Customizing Styles:

1. Edit `css/variables.css` for colors, fonts
2. Modify `css/components.css` for UI elements
3. Adjust `css/responsive.css` for mobile views

## 🎨 Design System

### Colors:
- Primary Blue: `#0066FF`
- Sky Blue: `#00CCFF`
- Success Green: `#10B981`
- Warning Amber: `#F59E0B`
- Error Red: `#EF4444`

### Typography:
- Font Family: Inter (Google Fonts)
- Headings: 700-800 weight
- Body: 400-500 weight

### Spacing:
- Base unit: 8px
- Small: 4px, 8px, 12px
- Medium: 16px, 20px, 24px
- Large: 32px, 40px, 48px

## 🧪 Testing

### Browser Testing:
- Chrome (primary)
- Firefox
- Safari
- Edge

### Mobile Testing:
- Use browser DevTools (F12 → Device Toolbar)
- Test on actual devices if available

### Responsive Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📦 Deployment

### GitHub Pages (Free):
1. Create GitHub repository
2. Push code to `main` branch
3. Go to Settings → Pages
4. Select `main` branch → Save
5. Access at: `https://yourusername.github.io/flightpulse`

### Netlify (Free):
1. Sign up at netlify.com
2. Drag and drop your project folder
3. Get instant URL
4. Optional: Add custom domain

### Vercel (Free):
1. Sign up at vercel.com
2. Import from GitHub or upload
3. Auto-deploy on every commit

## 🔮 Future Enhancements

### Phase 1 (Current - School Project):
- ✅ Static HTML/CSS/JS
- ✅ Mock flight data
- ✅ Simulated notifications
- ✅ Demo automation workflows

### Phase 2 (After School):
- 🔄 Real flight API integration
- 🔄 User authentication
- 🔄 Database (Firebase/Supabase)
- 🔄 Real-time updates (WebSockets)

### Phase 3 (Production):
- 🔮 Mobile apps (React Native)
- 🔮 Payment integration
- 🔮 Advanced automation
- 🔮 Analytics dashboard

## 🐛 Known Issues / Limitations

- Flight data is mocked (not real API)
- No user authentication (demo mode)
- LocalStorage used instead of database
- Notifications are browser-based only
- No backend server (frontend only)

**Note**: This is a school project demo. For production, you'd need:
- Real flight tracking API (FlightAware, AviationStack)
- Backend server (Node.js, Python)
- Database (PostgreSQL, MongoDB)
- Authentication system (Auth0, Firebase)

## 📝 Assignment Notes

### For Your School Project:

**What works:**
- ✅ Full UI/UX implementation
- ✅ Interactive components
- ✅ Simulated data flow
- ✅ Demo automation
- ✅ Responsive design

**What's simulated:**
- ⚠️ Flight data (using mock data)
- ⚠️ Real-time updates (simulated)
- ⚠️ API calls (mocked)
- ⚠️ User accounts (no backend)

**Present it as:**
- "Proof of concept with simulated data"
- "Frontend implementation ready for backend integration"
- "Full UI/UX design and user experience"

## 👨‍💻 Development Tips

### VS Code Extensions (Recommended):
- Live Server (for live reload)
- Prettier (code formatting)
- Auto Rename Tag
- IntelliSense for CSS
- Path Intellisense

### Keyboard Shortcuts:
- `Ctrl/Cmd + S` - Save
- `Alt + Shift + F` - Format document
- `Ctrl/Cmd + /` - Toggle comment
- `Ctrl/Cmd + P` - Quick file open

### Git Commands (Optional):
```bash
git init                    # Initialize repo
git add .                   # Stage all files
git commit -m "message"     # Commit changes
git push origin main        # Push to GitHub
```

## 📚 Resources

### Learning:
- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS reference
- [CSS Tricks](https://css-tricks.com/) - CSS guides
- [JavaScript.info](https://javascript.info/) - JS tutorials

### Design Inspiration:
- [Dribbble](https://dribbble.com/) - UI designs
- [Awwwards](https://awwwards.com/) - Web design awards
- [Behance](https://behance.net/) - Design portfolios

### Tools:
- [Figma](https://figma.com/) - Design mockups
- [Coolors](https://coolors.co/) - Color palettes
- [Google Fonts](https://fonts.google.com/) - Web fonts

## 🤝 Contributing

This is a school project, but if you want to improve it:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This is a school project created for educational purposes.
Feel free to use it for learning and reference.

## 👤 Author

**Your Name**
- School Project - [Year]
- Course: [Course Name]
- Instructor: [Instructor Name]

## 🙏 Acknowledgments

- Inter font by Rasmus Andersson
- Flight data structure inspired by real aviation APIs
- UI/UX patterns from modern travel apps
- Emoji icons from Unicode standard

---

## 🚀 Quick Start Commands

```bash
# 1. Open project
cd flightpulse

# 2. Open in VS Code
code .

# 3. Start Live Server
# Right-click index.html → "Open with Live Server"

# 4. Or open in browser
# Double-click index.html
```

---

**Ready to fly?** ✈️

Start by opening `index.html` in your browser and explore the FlightPulse experience!

For questions or issues, check the code comments or refer to this README.

**Happy coding!** 🚀💙
