import React from 'react';

const AutomationSimple = () => {
  const workflows = [
    {
      id: 1,
      icon: '📱',
      title: 'Notify Family',
      description: 'Send SMS to Mom: "Landed safely! ✈️"',
      trigger: 'When landing',
      active: true,
    },
    {
      id: 2,
      icon: '🚗',
      title: 'Request Uber',
      description: 'Book Uber to "123 Main St, Los Angeles"',
      trigger: '30 min before landing',
      active: true,
    },
    {
      id: 3,
      icon: '📧',
      title: 'Email Boss',
      description: '"My flight is delayed. Will be late to meeting."',
      trigger: 'On delay',
      active: true,
    },
  ];

  const activeCount = workflows.filter((w) => w.active).length;

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>⚡ Automation</h2>
        <p style={styles.subtitle}>Set it and forget it workflows</p>
      </div>

      {/* Active Status */}
      <div style={styles.statusBar}>
        <div style={styles.statusDot}></div>
        <span style={styles.statusText}>{activeCount} WORKFLOWS ACTIVE</span>
      </div>

      {/* Content */}
      <div style={styles.content}>
        {/* Workflows */}
        {workflows.map((workflow) => (
          <div key={workflow.id} style={styles.workflowCard}>
            <div style={styles.workflowHeader}>
              <div style={styles.statusBadge}>
                <div style={styles.activeDot}></div>
                <span style={styles.statusBadgeText}>ACTIVE</span>
              </div>
              <span style={styles.triggerText}>{workflow.trigger}</span>
            </div>

            <div style={styles.workflowIcon}>{workflow.icon}</div>
            <h3 style={styles.workflowTitle}>{workflow.title}</h3>
            <p style={styles.workflowDescription}>{workflow.description}</p>

            <div style={styles.tags}>
              <div style={styles.tag}>
                <span style={styles.tagText}>Flight AA 1234</span>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Button */}
        <div style={styles.addButton}>
          <div style={styles.addIcon}>➕</div>
          <h3 style={styles.addTitle}>Create New Workflow</h3>
          <p style={styles.addSubtitle}>Automate your next trip</p>
        </div>
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
    padding: '24px',
    paddingTop: '24px',
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

  statusBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '16px 24px',
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    borderBottom: '1px solid rgba(16, 185, 129, 0.3)',
  },

  statusDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#10b981',
  },

  statusText: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#10b981',
    letterSpacing: '1px',
  },

  content: {
    padding: '24px',
    flex: 1,
    overflow: 'auto',
  },

  workflowCard: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px',
    border: '1px solid rgba(16, 185, 129, 0.3)',
  },

  workflowHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },

  statusBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },

  activeDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#10b981',
  },

  statusBadgeText: {
    fontSize: '10px',
    fontWeight: '700',
    color: '#10b981',
    letterSpacing: '0.5px',
  },

  triggerText: {
    fontSize: '10px',
    color: '#94a3b8',
  },

  workflowIcon: {
    fontSize: '32px',
    marginBottom: '12px',
  },

  workflowTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#e2e8f0',
    margin: '0 0 8px 0',
  },

  workflowDescription: {
    fontSize: '13px',
    color: '#94a3b8',
    margin: '0 0 16px 0',
    lineHeight: '1.5',
  },

  tags: {
    display: 'flex',
    gap: '12px',
  },

  tag: {
    backgroundColor: '#1a2332',
    padding: '6px 12px',
    borderRadius: '8px',
  },

  tagText: {
    fontSize: '11px',
    color: '#94a3b8',
  },

  addButton: {
    backgroundColor: 'rgba(14, 165, 233, 0.2)',
    border: '2px dashed rgba(14, 165, 233, 0.5)',
    borderRadius: '12px',
    padding: '40px 20px',
    textAlign: 'center',
    marginTop: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  addIcon: {
    fontSize: '32px',
    marginBottom: '12px',
  },

  addTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#0EA5E9',
    margin: '0 0 8px 0',
  },

  addSubtitle: {
    fontSize: '13px',
    color: '#94a3b8',
    margin: 0,
  },
};

export default AutomationSimple;