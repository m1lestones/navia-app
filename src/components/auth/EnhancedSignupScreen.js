import { useState } from 'react';
import { colors } from '../../styles/theme';

const EnhancedSignupScreen = ({ onSignup, onToggleMode }) => {
  const [step, setStep] = useState(1); // 1: Basic info, 2: Payment method
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Payment info
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [cryptoAddress, setCryptoAddress] = useState('');
  const [debitAccountNum, setDebitAccountNum] = useState('');

  const handleBasicInfo = (e) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    // Move to payment step
    setStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate payment info
    if (paymentMethod === 'credit-card') {
      if (!cardNumber || !cardExpiry || !cardCVV) {
        setError('Please fill in all card details');
        setLoading(false);
        return;
      }
      if (cardNumber.length < 13) {
        setError('Invalid card number');
        setLoading(false);
        return;
      }
    } else if (paymentMethod === 'debit-card') {
      if (!debitAccountNum) {
        setError('Please enter your debit account number');
        setLoading(false);
        return;
      }
    } else if (paymentMethod === 'crypto') {
      if (!cryptoAddress) {
        setError('Please enter your crypto wallet address');
        setLoading(false);
        return;
      }
    }

    // Simulate payment processing
    setTimeout(() => {
      onSignup({
        name,
        email,
        id: Math.random().toString(36).substr(2, 9),
        paymentMethod,
      });
      setLoading(false);
    }, 1500);
  };

  if (step === 2) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.header}>
            <h2 style={styles.stepTitle}>Add Payment Method</h2>
            <p style={styles.stepSubtitle}>Choose how you'd like to pay for premium features</p>
          </div>

          <form onSubmit={handlePaymentSubmit} style={styles.form}>
            {/* Payment method tabs */}
            <div style={styles.methodTabs}>
              <button
                type="button"
                onClick={() => setPaymentMethod('credit-card')}
                style={{
                  ...styles.methodTab,
                  borderColor: paymentMethod === 'credit-card' ? colors.primary : colors.border,
                  backgroundColor: paymentMethod === 'credit-card' ? colors.primary + '15' : 'transparent',
                }}
              >
                💳 Credit Card
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('debit-card')}
                style={{
                  ...styles.methodTab,
                  borderColor: paymentMethod === 'debit-card' ? colors.primary : colors.border,
                  backgroundColor: paymentMethod === 'debit-card' ? colors.primary + '15' : 'transparent',
                }}
              >
                🏦 Debit Card
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('crypto')}
                style={{
                  ...styles.methodTab,
                  borderColor: paymentMethod === 'crypto' ? colors.primary : colors.border,
                  backgroundColor: paymentMethod === 'crypto' ? colors.primary + '15' : 'transparent',
                }}
              >
                ₿ Crypto
              </button>
            </div>

            {/* Credit Card */}
            {paymentMethod === 'credit-card' && (
              <div style={styles.paymentSection}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Card Number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
                    placeholder="4532 1234 5678 9010"
                    maxLength="16"
                    style={styles.input}
                  />
                </div>

                <div style={styles.cardRow}>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Expiry (MM/YY)</label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => {
                        let val = e.target.value.replace(/\D/g, '');
                        if (val.length >= 2) val = val.slice(0, 2) + '/' + val.slice(2, 4);
                        setCardExpiry(val);
                      }}
                      placeholder="12/25"
                      maxLength="5"
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>CVV</label>
                    <input
                      type="text"
                      value={cardCVV}
                      onChange={(e) => setCardCVV(e.target.value.replace(/\D/g, ''))}
                      placeholder="123"
                      maxLength="3"
                      style={styles.input}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Debit Card */}
            {paymentMethod === 'debit-card' && (
              <div style={styles.paymentSection}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Debit Account Number</label>
                  <input
                    type="text"
                    value={debitAccountNum}
                    onChange={(e) => setDebitAccountNum(e.target.value)}
                    placeholder="Enter your bank account number"
                    style={styles.input}
                  />
                </div>
                <p style={styles.info}>💡 Your bank details are encrypted and secure</p>
              </div>
            )}

            {/* Crypto */}
            {paymentMethod === 'crypto' && (
              <div style={styles.paymentSection}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Wallet Address</label>
                  <input
                    type="text"
                    value={cryptoAddress}
                    onChange={(e) => setCryptoAddress(e.target.value)}
                    placeholder="0x742d35Cc6634C0532925a3b844Bc1e8c3d5a..."
                    style={styles.input}
                  />
                </div>
                <p style={styles.info}>💡 Supports Bitcoin, Ethereum, and Stablecoins</p>
              </div>
            )}

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
              {loading ? 'Processing...' : 'Complete Signup'}
            </button>
          </form>

          <button
            onClick={() => {
              setStep(1);
              setError('');
            }}
            style={styles.backButton}
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  // Step 1: Basic Info
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logo}>✈️</div>
          <h1 style={styles.title}>Create Account</h1>
          <p style={styles.subtitle}>Join NAVIA today</p>
        </div>

        <form onSubmit={handleBasicInfo} style={styles.form}>
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
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
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
            }}
          >
            Continue to Payment
          </button>
        </form>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            Already have an account?{' '}
            <button
              onClick={onToggleMode}
              style={styles.toggleLink}
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
  stepTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: colors.text,
    margin: '0 0 8px 0',
  },
  stepSubtitle: {
    fontSize: '13px',
    color: colors.textSecondary,
    margin: 0,
  },
  methodTabs: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '12px',
    marginBottom: '24px',
  },
  methodTab: {
    padding: '12px 16px',
    fontSize: '13px',
    fontWeight: '600',
    border: '2px solid',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backgroundColor: 'transparent',
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
  toggleLink: {
    background: 'none',
    border: 'none',
    color: colors.primary,
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'underline',
    padding: 0,
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
  paymentSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  cardRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
  },
  info: {
    fontSize: '12px',
    color: colors.textSecondary,
    backgroundColor: colors.backgroundDark,
    padding: '12px',
    borderRadius: '6px',
    margin: '0',
  },
  footer: {
    textAlign: 'center',
    marginTop: '24px',
  },
  footerText: {
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
};

export default EnhancedSignupScreen;
