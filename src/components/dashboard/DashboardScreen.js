import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, spacing, fontSize, fontWeight, borderRadius } from '../../styles/theme';
import Compass from '../common/Compass';
import WingmateMessage from '../common/WingmateMessage';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoIcon}>🧭</Text>
          <Text style={styles.logoText}>NAVIA</Text>
        </View>
        <View style={styles.headerActions}>
          <Text style={styles.iconBtn}>🔔</Text>
          <Text style={styles.iconBtn}>⚙️</Text>
        </View>
      </View>

      {/* Live Status */}
      <View style={styles.liveStatus}>
        <View style={styles.liveDot} />
        <Text style={styles.liveText}>LIVE TRACKING</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {/* Flight Card */}
        <View style={styles.flightCard}>
          <View style={styles.flightHeader}>
            <Text style={styles.flightNumber}>AA 1234</Text>
            <View style={styles.flightStatus}>
              <View style={styles.statusPulse} />
              <Text style={styles.statusText}>IN FLIGHT</Text>
            </View>
          </View>

          <View style={styles.flightRoute}>
            <View style={styles.airport}>
              <Text style={styles.airportCode}>JFK</Text>
              <Text style={styles.airportName}>New York</Text>
            </View>

            <View style={styles.flightProgress}>
              <View style={styles.progressBar}>
                <View style={styles.progressFill}>
                  <Text style={styles.planeIcon}>✈️</Text>
                </View>
              </View>
              <View style={styles.flightTimes}>
                <Text style={styles.timeText}>14:30</Text>
                <Text style={styles.timeText}>2h 15m remaining</Text>
                <Text style={styles.timeText}>19:45</Text>
              </View>
            </View>

            <View style={styles.airport}>
              <Text style={styles.airportCode}>LAX</Text>
              <Text style={styles.airportName}>Los Angeles</Text>
            </View>
          </View>

          <View style={styles.flightInfo}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>GATE</Text>
              <Text style={styles.infoValue}>B22</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>SEAT</Text>
              <Text style={styles.infoValue}>12A</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>ALTITUDE</Text>
              <Text style={styles.infoValue}>35K ft</Text>
            </View>
            <View style={styles.infoItem}>
              <Compass size={70} />
            </View>
          </View>
        </View>

        {/* Wingmate Section */}
        <WingmateMessage
          message="You're halfway there! Flight is on schedule. I'll alert you 30 minutes before landing. ✨"
          timestamp="Just now"
        />

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionIcon}>📍</Text>
            <Text style={styles.actionLabel}>Track Map</Text>
          </View>
          <View style={styles.actionBtn}>
            <Text style={styles.actionIcon}>📞</Text>
            <Text style={styles.actionLabel}>Notify Contact</Text>
          </View>
          <View style={styles.actionBtn}>
            <Text style={styles.actionIcon}>🚗</Text>
            <Text style={styles.actionLabel}>Book Ride</Text>
          </View>
          <View style={styles.actionBtn}>
            <Text style={styles.actionIcon}>⚙️</Text>
            <Text style={styles.actionLabel}>Automation</Text>
          </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.xl,
    paddingTop: 50,
    backgroundColor: colors.primary + '1A',
    borderBottomWidth: 1,
    borderBottomColor: colors.primary + '33',
  },
  
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  
  logoIcon: {
    fontSize: fontSize.xxxl,
  },
  
  logoText: {
    fontSize: fontSize.xxxl,
    fontWeight: fontWeight.extrabold,
    color: colors.primary,
  },
  
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  
  iconBtn: {
    fontSize: fontSize.xl,
  },
  
  liveStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: spacing.md,
    backgroundColor: colors.success + '26',
    borderBottomWidth: 1,
    borderBottomColor: colors.success + '4D',
  },
  
  liveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.success,
  },
  
  liveText: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.bold,
    color: colors.success,
    letterSpacing: 1,
  },
  
  content: {
    padding: spacing.xl,
  },
  
  flightCard: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  
  flightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  
  flightNumber: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.primary,
  },
  
  flightStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.success + '33',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.round,
  },
  
  statusPulse: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.success,
  },
  
  statusText: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.semibold,
    color: colors.success,
  },
  
  flightRoute: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  
  airport: {
    alignItems: 'center',
  },
  
  airportCode: {
    fontSize: fontSize.display,
    fontWeight: fontWeight.extrabold,
    color: colors.text,
  },
  
  airportName: {
    fontSize: fontSize.xs,
    color: colors.textSecondary,
  },
  
  flightProgress: {
    flex: 1,
    marginHorizontal: spacing.lg,
  },
  
  progressBar: {
    height: 4,
    backgroundColor: colors.border,
    borderRadius: 2,
    overflow: 'hidden',
  },
  
  progressFill: {
    height: '100%',
    width: '65%',
    backgroundColor: colors.primary,
    borderRadius: 2,
    position: 'relative',
  },
  
  planeIcon: {
    position: 'absolute',
    right: -10,
    top: -8,
    fontSize: fontSize.lg,
  },
  
  flightTimes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.sm,
  },
  
  timeText: {
    fontSize: fontSize.xs,
    color: colors.textSecondary,
  },
  
  flightInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  
  infoItem: {
    alignItems: 'center',
  },
  
  infoLabel: {
    fontSize: fontSize.xs,
    color: colors.textTertiary,
    marginBottom: spacing.xs,
  },
  
  infoValue: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
    color: colors.primary,
  },
  
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  
  actionBtn: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.card,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  
  actionIcon: {
    fontSize: fontSize.xxxl,
    marginBottom: spacing.xs,
  },
  
  actionLabel: {
    fontSize: fontSize.xs,
    color: colors.textSecondary,
  },
});

export default DashboardScreen;
