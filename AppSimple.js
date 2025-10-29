import { useState, useEffect } from 'react';
import EnhancedLoginScreen from './src/components/auth/EnhancedLoginScreen';
import EnhancedSignupScreen from './src/components/auth/EnhancedSignupScreen';
import DashboardSimple from './src/components/dashboard/DashboardSimple';
import NavigationSimple from './src/components/navigation/NavigationSimple';
import AutomationSimple from './src/components/automation/AutomationSimple';
import ProfileSimple from './src/components/common/ProfileSimple';

const AppSimple = () => {
  const [user, setUser] = useState(null);
  const [authMode, setAuthMode] = useState('login');
  const [activeTab, setActiveTab] = useState('Flights');

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

  if (!user) {
    return authMode === 'login' ? (
      <EnhancedLoginScreen
        onLogin={handleLogin}
        onToggleMode={() => setAuthMode('signup')}
      />
    ) : (
      <EnhancedSignupScreen
        onSignup={handleSignup}
        onToggleMode={() => setAuthMode('login')}
      />
    );
  }

  const screens = {
    Flights: <DashboardSimple />,
    Navigate: <NavigationSimple />,
    Automate: <AutomationSimple />,
    Profile: <ProfileSimple />,
  };

  const tabs = [
    { name: 'Flights', icon: '✈️' },
    { name: 'Navigate', icon: '🧭' },
    { name: 'Automate', icon: '⚡' },
    { name: 'Profile', icon: '👤' },
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.userInfo}>
          <div style={styles.avatar}>{user.name.charAt(0).toUpperCase()}</div>
          <div>
            <h3 style={styles.userName}>{user.name}</h3>
            <p style={styles.userEmail}>{user.email}</p>
          </div>
        </div>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Sign Out
        </button>
      </div>

      {/* Content */}
      <div style={styles.content}>{screens[activeTab]}</div>

      {/* Bottom Navigation */}
      <div style={styles.tabBar}>
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            style={{
              ...styles.tab,
              backgroundColor: activeTab === tab.name ? '#1a2332' : 'transparent',
              borderTop: activeTab === tab.name ? '3px solid #0EA5E9' : '3px solid transparent',
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
    backgroundColor: '#0f172a',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a2332',
    borderBottom: '1px solid #334155',
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
    backgroundColor: '#0EA5E9',
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
    color: '#e2e8f0',
  },
  userEmail: {
    margin: 0,
    fontSize: '12px',
    color: '#94a3b8',
  },
  logoutButton: {
    padding: '8px 16px',
    fontSize: '13px',
    fontWeight: '600',
    backgroundColor: 'transparent',
    color: '#0EA5E9',
    border: '1px solid #0EA5E9',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
  },
  content: {
    flex: 1,
    overflow: 'auto',
    backgroundColor: '#0f172a',
  },
  tabBar: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#1a2332',
    borderTop: '1px solid #334155',
    paddingBottom: '20px',
    paddingTop: '10px',
    minHeight: '80px',
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
    color: '#94a3b8',
    fontWeight: '500',
  },
};

export default AppSimple;
