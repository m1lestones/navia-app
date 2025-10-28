import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { colors, spacing, fontSize, fontWeight, borderRadius } from '../../styles/theme';

const WingmateMessage = ({ message, timestamp }) => {
  const floatAnim = new Animated.Value(0);

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -5,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.avatar,
          {
            transform: [{ translateY: floatAnim }],
          },
        ]}
      >
        <Text style={styles.avatarIcon}>🦅</Text>
      </Animated.View>
      
      <View style={styles.content}>
        <Text style={styles.name}>WINGMATE AI</Text>
        <Text style={styles.message}>{message}</Text>
        {timestamp && <Text style={styles.timestamp}>{timestamp}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing.md,
    backgroundColor: colors.accent + '1A',
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: colors.accent + '4D',
  },
  
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  avatarIcon: {
    fontSize: fontSize.xxxl,
  },
  
  content: {
    flex: 1,
  },
  
  name: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.bold,
    color: colors.accent,
    letterSpacing: 1,
    marginBottom: spacing.xs,
  },
  
  message: {
    fontSize: fontSize.md,
    color: colors.text,
    lineHeight: 22,
  },
  
  timestamp: {
    fontSize: fontSize.xs,
    color: colors.textTertiary,
    marginTop: spacing.xs,
  },
});

export default WingmateMessage;
