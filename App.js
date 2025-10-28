import { useState, useEffect } from 'react';
import DashboardScreen from './src/components/dashboard/DashboardScreen';
import NavigationScreen from './src/components/navigation/NavigationScreen';
import AutomationScreen from './src/components/automation/AutomationScreen';
import ProfileScreen from './src/components/common/ProfileScreen';
import LoginScreen from './src/components/auth/LoginScreen';
import SignupScreen from './src/components/auth/SignupScreen';
import { colors } from './src/styles/theme';

const App = () => {
  const [activeTab, setActiveTab] = useState('Flights');
  const [user, setUser] = useState(null);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('naviaUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('naviaUser', JSON.stringify(userData));
  };

  const handleSignup = (userData) => {
    setUser(userData);
    localStorage.setItem('naviaUser', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('naviaUser');
    setAuthMode('login');
  };

  // Show auth screens if not logged in
  if (!user) {
    return authMode === 'login' ? (
      <LoginScreen
        onLogin={handleLogin}
        onToggleMode={() => setAuthMode('signup')}
      />
    ) : (
      <SignupScreen
        onSignup={handleSignup}
        onToggleMode={() => setAuthMode('login')}
      />
    );
  }

  const screens = {
    Flights: DashboardScreen,
    Navigate: NavigationScreen,
    Automate: AutomationScreen,
    Profile: ProfileScreen,
  };

  const ActiveScreen = screens[activeTab];

  const tabs = [
    { name: 'Flights', icon: '✈️' },
    { name: 'Navigate', icon: '🧭' },
    { name: 'Automate', icon: '⚡' },
    { name: 'Profile', icon: '👤' },
  ];

  return (
    <div style={styles.container}>
      {/* Header with user info */}
      <div style={styles.header}>
        <div style={styles.userInfo}>
          <div style={styles.avatar}>{user.name.charAt(0).toUpperCase()}</div>
          <div>
            <h3 style={styles.userName}>{user.name}</h3>
            <p style={styles.userEmail}>{user.email}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          style={styles.logoutButton}
        >
          Sign Out
        </button>
      </div>

      <div style={styles.content}>
        <ActiveScreen />
      </div>

      <div style={styles.tabBar}>
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            style={{
              ...styles.tab,
              backgroundColor: activeTab === tab.name ? colors.backgroundDark : 'transparent',
              borderTop: activeTab === tab.name ? `3px solid ${colors.primary}` : '3px solid transparent',
            }}
          >
            <span style={styles.icon}>{tab.icon}</span>
            <span style={styles.tabLabel}>{tab.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: colors.background,
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.backgroundDark,
    borderBottom: `1px solid ${colors.border}`,
    padding: '16px 24px',
    gap: '20px',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: colors.primary,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: '700',
  },
  userName: {
    margin: '0 0 4px 0',
    fontSize: '14px',
    fontWeight: '600',
    color: colors.text,
  },
  userEmail: {
    margin: 0,
    fontSize: '12px',
    color: colors.textSecondary,
  },
  logoutButton: {
    padding: '8px 16px',
    fontSize: '13px',
    fontWeight: '600',
    backgroundColor: 'transparent',
    color: colors.primary,
    border: `1px solid ${colors.primary}`,
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
  },
  content: {
    flex: 1,
    overflow: 'auto',
    backgroundColor: colors.background,
  },
  tabBar: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: colors.backgroundDark,
    borderTop: `1px solid ${colors.border}`,
    paddingBottom: 20,
    paddingTop: 10,
    minHeight: 80,
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: '10px 0',
  },
  icon: {
    fontSize: '28px',
    marginBottom: '5px',
  },
  tabLabel: {
    fontSize: '12px',
    color: colors.textSecondary,
    fontWeight: '500',
  },
};

export default App;
