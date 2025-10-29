// src/components/dashboard/DashboardSimple.js

import React from 'react';

const DashboardSimple = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>✈️ Flight Tracking</h2>
        <p style={styles.subtitle}>Real-time flight status</p>

        <div style={styles.flightCard}>
          <div style={styles.flightHeader}>
            <div>
              <p style={styles.route}>JFK → LAX</p>
              <p style={styles.airline}>United Airlines UA-451</p>
            </div>
            <div style={{...styles.status, backgroundColor: '#10b981'}}>Active</div>
          </div>

          <div style={styles.progressContainer}>
            <div style={styles.progressLabel}>Progress</div>
            <div style={styles.progressBar}>
              <div style={styles.progressFill}></div>
            </div>
            <div style={styles.progressPercent}>65%</div>
          </div>

          <div style={styles.details}>
            <div style={styles.detailItem}>
              <span style={styles.label}>Departure</span>
              <span style={styles.value}>2:30 PM</span>
            </div>
            <div style={styles.detailItem}>
              <span style={styles.label}>Arrival (Est.)</span>
              <span style={styles.value}>5:45 PM</span>
            </div>
            <div style={styles.detailItem}>
              <span style={styles.label}>Altitude</span>
              <span style={styles.value}>35,000 ft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '24px',
    backgroundColor: '#0f172a',
    minHeight: '100%',
  },
  card: {
    backgroundColor: '#1a2332',
    borderRadius: '12px',
    padding: '24px',
    maxWidth: '600px',
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
    margin: '0 0 24px 0',
  },
  flightCard: {
    backgroundColor: '#0f172a',
    borderRadius: '8px',
    padding: '16px',
    border: '1px solid #334155',
  },
  flightHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px',
  },
  route: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#e2e8f0',
    margin: '0 0 4px 0',
  },
  airline: {
    fontSize: '12px',
    color: '#94a3b8',
    margin: 0,
  },
  status: {
    padding: '4px 12px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '600',
    color: 'white',
  },
  progressContainer: {
    marginBottom: '16px',
  },
  progressLabel: {
    fontSize: '12px',
    color: '#94a3b8',
    marginBottom: '8px',
    fontWeight: '600',
  },
  progressBar: {
    width: '100%',
    height: '6px',
    backgroundColor: '#334155',
    borderRadius: '3px',
    overflow: 'hidden',
    marginBottom: '6px',
  },
  progressFill: {
    height: '100%',
    width: '65%',
    backgroundColor: '#0EA5E9',
  },
  progressPercent: {
    fontSize: '12px',
    color: '#0EA5E9',
    textAlign: 'right',
  },
  details: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  label: {
    fontSize: '11px',
    color: '#94a3b8',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  value: {
    fontSize: '14px',
    color: '#e2e8f0',
    fontWeight: '600',
  },
};

export default DashboardSimple;
