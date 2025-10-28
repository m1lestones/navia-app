import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';
import Compass from '../common/Compass';

const NavigationScreen = () => {
  const gates = [
    { name: 'B22', degrees: 25 },
    { name: 'C15', degrees: 135 },
    { name: 'A5', degrees: 250 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧭 Gate Navigation</Text>
      <Text style={styles.subtitle}>Find your way to your gate</Text>
      
      <View style={styles.compassContainer}>
        <Compass size={250} showGates={true} gates={gates} />
      </View>
      
      <View style={styles.gateInfo}>
        <Text style={styles.gateLabel}>YOUR GATE</Text>
        <Text style={styles.gateNumber}>B22</Text>
        <Text style={styles.gateDirection}>25° NNE • 8 min walk</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    marginTop: 60,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 30,
  },
  compassContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  gateInfo: {
    backgroundColor: colors.primary + '1A',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary + '4D',
  },
  gateLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.textTertiary,
    letterSpacing: 1,
    marginBottom: 5,
  },
  gateNumber: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 5,
  },
  gateDirection: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});

export default NavigationScreen;
