import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, spacing, fontSize, fontWeight, borderRadius } from '../../styles/theme';

const AutomationScreen = () => {
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

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>⚡ Automation</Text>
        <Text style={styles.subtitle}>Set it and forget it workflows</Text>
      </View>

      {/* Active Status */}
      <View style={styles.statusBar}>
        <View style={styles.statusDot} />
        <Text style={styles.statusText}>
          {workflows.filter(w => w.active).length} WORKFLOWS ACTIVE
        </Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Workflows */}
        {workflows.map((workflow) => (
          <View key={workflow.id} style={styles.workflowCard}>
            <View style={styles.workflowHeader}>
              <View style={styles.statusBadge}>
                <View style={styles.activeDot} />
                <Text style={styles.statusBadgeText}>ACTIVE</Text>
              </View>
              <Text style={styles.triggerText}>{workflow.trigger}</Text>
            </View>

            <Text style={styles.workflowIcon}>{workflow.icon}</Text>
            <Text style={styles.workflowTitle}>{workflow.title}</Text>
            <Text style={styles.workflowDescription}>{workflow.description}</Text>

            <View style={styles.tags}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Flight AA 1234</Text>
              </View>
            </View>
          </View>
        ))}

        {/* Add New Button */}
        <View style={styles.addButton}>
          <Text style={styles.addIcon}>➕</Text>
          <Text style={styles.addTitle}>Create New Workflow</Text>
          <Text style={styles.addSubtitle}>Automate your next trip</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  
  header: {
    padding: spacing.xl,
    paddingTop: 60,
  },
  
  title: {
    fontSize: fontSize.hero,
    fontWeight: fontWeight.extrabold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  
  subtitle: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
  },
  
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: spacing.md,
    backgroundColor: colors.success + '26',
    borderBottomWidth: 1,
    borderBottomColor: colors.success + '4D',
  },
  
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.success,
  },
  
  statusText: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.bold,
    color: colors.success,
    letterSpacing: 1,
  },
  
  content: {
    padding: spacing.xl,
  },
  
  workflowCard: {
    backgroundColor: colors.success + '1A',
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.success + '4D',
  },
  
  workflowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.success,
  },
  
  statusBadgeText: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.bold,
    color: colors.success,
  },
  
  triggerText: {
    fontSize: fontSize.xs,
    color: colors.textSecondary,
  },
  
  workflowIcon: {
    fontSize: fontSize.display,
    marginBottom: spacing.sm,
  },
  
  workflowTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  
  workflowDescription: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    marginBottom: spacing.md,
    lineHeight: 20,
  },
  
  tags: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  
  tag: {
    backgroundColor: colors.card,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.md,
  },
  
  tagText: {
    fontSize: fontSize.xs,
    color: colors.textSecondary,
  },
  
  addButton: {
    backgroundColor: colors.primary + '33',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.primary + '80',
    borderRadius: borderRadius.lg,
    padding: spacing.xxl,
    alignItems: 'center',
    marginTop: spacing.md,
  },
  
  addIcon: {
    fontSize: fontSize.display,
    marginBottom: spacing.sm,
  },
  
  addTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  
  addSubtitle: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
  },
});

export default AutomationScreen;
