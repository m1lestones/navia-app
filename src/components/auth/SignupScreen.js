import { useState } from 'react';
import { colors } from '../../styles/theme';

const SignupScreen = ({ onSignup, onToggleMode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validation
    setTimeout(() => {
      if (!name || !email || !password || !confirmPassword) {
        setError('Please fill in all fields');
      } else if (password !== confirmPassword) {
        setError('Passwords do not match');
      } else if (password.length < 6) {
        setError('Password must be at least 6 characters');
      } else if (!email.includes('@')) {
        setError('Please enter a valid email');
      } else {
        // Signup successful
        onSignup({
          name,
          email,
          id: Math.random().toString(36).substr(2, 9),
        });
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
          <p style={styles.subtitle}>Create Your Account</p>
        </div>

        <form onSubmit={handleSignup} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              style={styles.input}
            />
          </div>

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

          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            Already have an account?{' '}
            <button
              onClick={onToggleMode}
              style={styles.toggleButton}
            >
              Sign In
            </button>
          </p>
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
    gap: '20px',
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
  footer: {
    textAlign: 'center',
    marginTop: '32px',
  },
  footerText: {
    fontSize: '14px',
    color: colors.textSecondary,
    margin: 0,
  },
  toggleButton: {
    background: 'none',
    border: 'none',
    color: colors.primary,
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'underline',
    padding: 0,
  },
};

export default SignupScreen;
