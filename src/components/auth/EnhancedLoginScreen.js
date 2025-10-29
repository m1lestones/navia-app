import { useState } from 'react';
import { colors } from '../../styles/theme';

const EnhancedLoginScreen = ({ onLogin, onToggleMode }) => {
  const [email, setEmail] = useState('demo@navia.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotLoading, setForgotLoading] = useState(false);
  const [recoveryMessage, setRecoveryMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (email && password) {
        if (password.length < 6) {
          setError('Password must be at least 6 characters');
        } else {
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

  const handleSocialLogin = (provider) => {
    setLoading(true);
    setTimeout(() => {
      onLogin({
        email: `user@${provider}.com`,
        name: `${provider} User`,
        id: Math.random().toString(36).substr(2, 9),
        provider: provider,
      });
      setLoading(false);
    }, 1500);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!forgotEmail) {
      setError('Please enter your email');
      return;
    }
    setForgotLoading(true);
    setTimeout(() => {
      setRecoveryMessage(`Recovery email sent to ${forgotEmail}. Check your inbox!`);
      setForgotLoading(false);
      setTimeout(() => {
        setShowForgotPassword(false);
        setRecoveryMessage('');
        setForgotEmail('');
      }, 2000);
    }, 1000);
  };

  if (showForgotPassword) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.header}>
            <h2 style={styles.forgotTitle}>Reset Password</h2>
            <p style={styles.forgotSubtitle}>Enter your email to receive recovery instructions</p>
          </div>

          <form onSubmit={handleForgotPassword} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address</label>
              <input
                type="email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                placeholder="you@example.com"
                style={styles.input}
              />
            </div>

            {error && <div style={styles.error}>{error}</div>}
            {recoveryMessage && <div style={styles.success}>{recoveryMessage}</div>}

            <button
              type="submit"
              disabled={forgotLoading}
              style={{
                ...styles.button,
                opacity: forgotLoading ? 0.6 : 1,
              }}
            >
              {forgotLoading ? 'Sending...' : 'Send Recovery Email'}
            </button>
          </form>

          <button
            onClick={() => {
              setShowForgotPassword(false);
              setError('');
            }}
            style={styles.backButton}
          >
            ← Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logo}>✈️</div>
          <h1 style={styles.title}>NAVIA</h1>
          <p style={styles.subtitle}>Navigate Every Journey</p>
        </div>

        {/* Social Login Buttons */}
        <div style={styles.socialSection}>
          <p style={styles.socialLabel}>Sign in with</p>
          <div style={styles.socialButtons}>
            <button
              onClick={() => handleSocialLogin('gmail')}
              disabled={loading}
              style={{...styles.socialButton, ...styles.gmailButton}}
              title="Sign in with Google"
            >
              📧 Gmail
            </button>
            <button
              onClick={() => handleSocialLogin('apple')}
              disabled={loading}
              style={{...styles.socialButton, ...styles.appleButton}}
              title="Sign in with Apple"
            >
              🍎 Apple
            </button>
            <button
              onClick={() => handleSocialLogin('faceid')}
              disabled={loading}
              style={{...styles.socialButton, ...styles.faceIdButton}}
              title="Sign in with Face ID"
            >
              👤 Face ID
            </button>
          </div>
        </div>

        <div style={styles.divider}>
          <span>Or continue with email</span>
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
            <div style={styles.passwordWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={styles.passwordInput}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.toggleButton}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
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

        <div style={styles.footer}>
          <button
            onClick={() => setShowForgotPassword(true)}
            style={styles.forgotLink}
          >
            Forgot password?
          </button>
          <p style={styles.footerText}>
            No account?{' '}
            <button
              onClick={onToggleMode}
              style={styles.toggleButton}
            >
              Sign Up
            </button>
          </p>
        </div>

        <div style={styles.demoBox}>
          <p style={styles.demoLabel}>💡 Demo Account</p>
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
    maxWidth: '480px',
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
  socialSection: {
    marginBottom: '32px',
  },
  socialLabel: {
    textAlign: 'center',
    fontSize: '13px',
    fontWeight: '600',
    color: colors.textSecondary,
    margin: '0 0 12px 0',
    textTransform: 'uppercase',
  },
  socialButtons: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '12px',
  },
  socialButton: {
    padding: '12px 16px',
    fontSize: '13px',
    fontWeight: '600',
    border: '2px solid',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backgroundColor: colors.background,
  },
  gmailButton: {
    borderColor: '#EA4335',
    color: '#EA4335',
  },
  appleButton: {
    borderColor: '#555555',
    color: '#555555',
  },
  faceIdButton: {
    borderColor: colors.primary,
    color: colors.primary,
  },
  divider: {
    textAlign: 'center',
    color: colors.textSecondary,
    fontSize: '12px',
    margin: '32px 0 24px 0',
    fontWeight: '600',
    textTransform: 'uppercase',
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
  passwordWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  passwordInput: {
    padding: '12px 16px',
    fontSize: '16px',
    border: `2px solid ${colors.border}`,
    borderRadius: '8px',
    backgroundColor: colors.backgroundDark,
    color: colors.text,
    fontFamily: 'inherit',
    transition: 'border-color 0.3s ease',
    outline: 'none',
    flex: 1,
  },
  toggleButton: {
    position: 'absolute',
    right: '12px',
    background: 'none',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    padding: '8px',
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
  success: {
    backgroundColor: '#dcfce7',
    color: '#166534',
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    marginTop: '-12px',
  },
  footer: {
    textAlign: 'center',
    marginTop: '24px',
  },
  forgotLink: {
    background: 'none',
    border: 'none',
    color: colors.primary,
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'underline',
    padding: 0,
    marginBottom: '12px',
    display: 'block',
  },
  footerText: {
    fontSize: '14px',
    color: colors.textSecondary,
    margin: 0,
  },
  forgotTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: colors.text,
    margin: '0 0 8px 0',
  },
  forgotSubtitle: {
    fontSize: '14px',
    color: colors.textSecondary,
    margin: 0,
  },
  backButton: {
    background: 'none',
    border: 'none',
    color: colors.primary,
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    padding: '12px 0',
    marginTop: '20px',
  },
  demoBox: {
    backgroundColor: colors.backgroundDark,
    padding: '16px',
    borderRadius: '8px',
    border: `1px solid ${colors.border}`,
    marginTop: '24px',
  },
  demoLabel: {
    margin: '0 0 8px 0',
    fontSize: '13px',
    color: colors.textSecondary,
    fontWeight: '600',
  },
  demoText: {
    margin: '4px 0',
    fontSize: '13px',
    color: colors.textSecondary,
  },
};

export default EnhancedLoginScreen;
