import React from 'react';

const ProfileSimple = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.avatar}>👤</div>
        <h2 style={styles.title}>Profile</h2>
        <p style={styles.subtitle}>Manage your account</p>
      </div>

      <div style={styles.content}>
        <div style={styles.comingSoon}>🚧 Coming Soon</div>
        <p style={styles.description}>
          Profile management, settings, and preferences will be available here.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    alignItems: 'center',
    padding: '32px 24px',
    paddingTop: '80px',
    textAlign: 'center',
  },
  avatar: {
    fontSize: '80px',
    marginBottom: '16px',
    lineHeight: '1',
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#e2e8f0',
    margin: '0 0 8px 0',
  },
  subtitle: {
    fontSize: '14px',
    color: '#94a3b8',
    margin: 0,
  },
  content: {
    padding: '24px',
    alignItems: 'center',
    textAlign: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  comingSoon: {
    fontSize: '48px',
    marginBottom: '16px',
    lineHeight: '1',
  },
  description: {
    fontSize: '14px',
    color: '#94a3b8',
    textAlign: 'center',
    lineHeight: '1.5',
    margin: 0,
  },
};

export default ProfileSimple;