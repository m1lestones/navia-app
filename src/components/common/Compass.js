import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { colors, fontSize, fontWeight } from '../../styles/theme';

const Compass = ({ size = 200, showGates = false, gates = [] }) => {
  const pulseAnim = new Animated.Value(1);
  const rotateAnim = new Animated.Value(0);

  React.useEffect(() => {
    // Pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 750,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 750,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Rotation animation
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {/* Pulse Rings */}
      <Animated.View
        style={[
          styles.pulseRing,
          {
            transform: [{ scale: pulseAnim }],
            opacity: pulseAnim.interpolate({
              inputRange: [1, 1.2],
              outputRange: [0.8, 0],
            }),
          },
        ]}
      />

      {/* Outer Ring */}
      <Animated.View
        style={[
          styles.outerRing,
          {
            transform: [{ rotate }],
          },
        ]}
      >
        {/* Degree markers would go here */}
      </Animated.View>

      {/* Cardinal Directions */}
      <Text style={[styles.cardinal, styles.cardinalN]}>N</Text>
      <Text style={[styles.cardinal, styles.cardinalE]}>E</Text>
      <Text style={[styles.cardinal, styles.cardinalS]}>S</Text>
      <Text style={[styles.cardinal, styles.cardinalW]}>W</Text>

      {/* Intercardinal Directions */}
      <Text style={[styles.intercardinal, styles.intercardinalNE]}>NE</Text>
      <Text style={[styles.intercardinal, styles.intercardinalSE]}>SE</Text>
      <Text style={[styles.intercardinal, styles.intercardinalSW]}>SW</Text>
      <Text style={[styles.intercardinal, styles.intercardinalNW]}>NW</Text>

      {/* Inner Face */}
      <View style={styles.innerFace} />

      {/* Center Hub */}
      <Animated.View
        style={[
          styles.centerHub,
          {
            transform: [{ scale: pulseAnim }],
          },
        ]}
      />

      {/* Gate Markers */}
      {showGates &&
        gates.map((gate, index) => (
          <View
            key={index}
            style={[
              styles.gateMarker,
              {
                transform: [
                  { rotate: `${gate.degrees}deg` },
                  { translateY: -size * 0.35 },
                ],
              },
            ]}
          >
            <Text style={styles.gateText}>{gate.name}</Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  pulseRing: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  
  outerRing: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 9999,
    backgroundColor: colors.secondary,
    borderWidth: 3,
    borderColor: colors.primary + '40',
  },
  
  innerFace: {
    position: 'absolute',
    width: '70%',
    height: '70%',
    borderRadius: 9999,
    backgroundColor: colors.secondaryDark,
    borderWidth: 2,
    borderColor: colors.primary + '40',
  },
  
  cardinal: {
    position: 'absolute',
    fontSize: fontSize.xxxl,
    fontWeight: fontWeight.extrabold,
    color: colors.primary,
  },
  
  cardinalN: { top: 10 },
  cardinalE: { right: 10 },
  cardinalS: { bottom: 10 },
  cardinalW: { left: 10 },
  
  intercardinal: {
    position: 'absolute',
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
    color: colors.primary + 'CC',
  },
  
  intercardinalNE: { top: 25, right: 25 },
  intercardinalSE: { bottom: 25, right: 25 },
  intercardinalSW: { bottom: 25, left: 25 },
  intercardinalNW: { top: 25, left: 25 },
  
  centerHub: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.accent,
    borderWidth: 3,
    borderColor: colors.white,
  },
  
  gateMarker: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.accent,
    borderWidth: 3,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  gateText: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.bold,
    color: colors.white,
  },
});

export default Compass;
