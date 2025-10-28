import { useState } from 'react';
import { colors } from '../../styles/theme';

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        if (password.length < 6) {
          setError('Password must be at least 6 characters');
        } else {
          // Login successful
          onLogin({
            email,
            name: email.split('@')[0],
            id: Math.random().toString(36).substr(2, 9),
          });
        }
      } else {
        setError('Please fill in all fields');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logo}>✈️</div>
          <h1 style={styles.title}>NAVIA</h1>
          <p style={styles.subtitle}>Navigate Every Journey</p>
        </div>

        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={styles.input}
            />
          </div>

          {error && <div style={styles.error}>{error}</div>}

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.button,
              opacity: loading ? 0.6 : 1,
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div style={styles.divider}>
          <span>Demo Credentials</span>
        </div>
        <div style={styles.demoBox}>
          <p style={styles.demoText}>📧 demo@navia.com</p>
          <p style={styles.demoText}>🔑 password123</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: colors.backgroundDark,
    padding: '20px',
  },
  card: {
    backgroundColor: colors.background,
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '420px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  logo: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  title: {
    fontSize: '32px',
    fontWeight: '800',
    color: colors.text,
    margin: '0 0 8px 0',
    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    fontSize: '14px',
    color: colors.textSecondary,
    margin: 0,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: colors.text,
  },
  input: {
    padding: '12px 16px',
    fontSize: '16px',
    border: `2px solid ${colors.border}`,
    borderRadius: '8px',
    backgroundColor: colors.backgroundDark,
    color: colors.text,
    fontFamily: 'inherit',
    transition: 'border-color 0.3s ease',
    outline: 'none',
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '600',
    backgroundColor: colors.primary,
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '16px',
  },
  error: {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    marginTop: '-12px',
  },
  divider: {
    textAlign: 'center',
    color: colors.textSecondary,
    fontSize: '12px',
    margin: '32px 0 16px 0',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  demoBox: {
    backgroundColor: colors.backgroundDark,
    padding: '16px',
    borderRadius: '8px',
    border: `1px solid ${colors.border}`,
  },
  demoText: {
    margin: '0 0 8px 0',
    fontSize: '13px',
    color: colors.textSecondary,
  },
};

export default LoginScreen;
