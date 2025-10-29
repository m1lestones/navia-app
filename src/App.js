// import React from 'react';

// const App = () => {
//   return (
//     <div style={{ backgroundColor: 'white', color: 'black', padding: '50px' }}>
//       <h1>TEST - Can you see this?</h1>
//       <p>If you see this, React is working!</p>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import DashboardSimple from './components/dashboard/DashboardSimple';
import NavigationSimple from './components/navigation/NavigationSimple';
import AutomationSimple from './components/automation/AutomationSimple';
import ProfileSimple from './components/common/ProfileSimple';

const BottomNav = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav style={styles.bottomNav}>
      <Link to="/" style={styles.navLink}>
        <div style={{...styles.navItem, ...(isActive('/') ? styles.navItemActive : {})}}>
          <div style={styles.navIcon}>✈️</div>
          <div style={styles.navLabel}>Flights</div>
        </div>
      </Link>
      
      <Link to="/navigate" style={styles.navLink}>
        <div style={{...styles.navItem, ...(isActive('/navigate') ? styles.navItemActive : {})}}>
          <div style={styles.navIcon}>🧭</div>
          <div style={styles.navLabel}>Navigate</div>
        </div>
      </Link>
      
      <Link to="/automate" style={styles.navLink}>
        <div style={{...styles.navItem, ...(isActive('/automate') ? styles.navItemActive : {})}}>
          <div style={styles.navIcon}>⚡</div>
          <div style={styles.navLabel}>Automate</div>
        </div>
      </Link>
      
      <Link to="/profile" style={styles.navLink}>
        <div style={{...styles.navItem, ...(isActive('/profile') ? styles.navItemActive : {})}}>
          <div style={styles.navIcon}>👤</div>
          <div style={styles.navLabel}>Profile</div>
        </div>
      </Link>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div style={styles.app}>
        {/* App Header */}
        <header style={styles.appHeader}>
          <div style={styles.logoSection}>
            <div style={styles.logoIcon}>🧭</div>
            <div style={styles.logoText}>NAVIA</div>
          </div>
          <div style={styles.headerActions}>
            <button style={styles.iconBtn}>🔔</button>
            <button style={styles.iconBtn}>⚙️</button>
          </div>
        </header>

        {/* Main Content */}
        <main style={styles.content}>
          <Routes>
            <Route path="/" element={<DashboardSimple />} />
            <Route path="/navigate" element={<NavigationSimple />} />
            <Route path="/automate" element={<AutomationSimple />} />
            <Route path="/profile" element={<ProfileSimple />} />
          </Routes>
        </main>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </Router>
  );
};

const styles = {
  app: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0f172a',
  },
  appHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    backgroundColor: 'rgba(14, 165, 233, 0.1)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(14, 165, 233, 0.2)',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoIcon: {
    width: '35px',
    height: '35px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #0EA5E9, #0284C7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #0EA5E9, #0284C7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  headerActions: {
    display: 'flex',
    gap: '12px',
  },
  iconBtn: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
  },
  content: {
    flex: 1,
    overflow: 'auto',
    backgroundColor: '#0f172a',
  },
  bottomNav: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(15, 23, 42, 0.95)',
    backdropFilter: 'blur(20px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '15px 20px 25px',
  },
  navLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: '#94a3b8',
  },
  navItemActive: {
    color: '#0EA5E9',
  },
  navIcon: {
    fontSize: '1.3rem',
  },
  navLabel: {
    fontSize: '0.7rem',
  },
};

export default App;