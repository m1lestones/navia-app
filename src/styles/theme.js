// Navia App Theme Configuration
// Color palette and design tokens

export const colors = {
  // Primary Colors
  primary: '#0EA5E9',        // Sky Blue - Navigation, trust
  primaryDark: '#0284C7',    // Deep Sky Blue
  primaryLight: '#38BDF8',   // Light Sky Blue
  
  // Secondary Colors
  secondary: '#1E3A8A',      // Navy Blue - Background, depth
  secondaryDark: '#1E293B',  // Dark Navy
  secondaryLight: '#3B82F6', // Light Navy
  
  // Accent Colors
  accent: '#F59E0B',         // Gold - Compass, highlights
  accentDark: '#D97706',     // Dark Gold
  accentLight: '#FBBF24',    // Light Gold
  
  // Status Colors
  pulse: '#FF0066',          // Red - Live, urgent
  success: '#10B981',        // Green - Active, on-time
  warning: '#F59E0B',        // Amber - Waiting, caution
  error: '#EF4444',          // Red - Error, delayed
  info: '#0EA5E9',           // Blue - Information
  
  // Background Colors
  background: '#0F172A',      // Dark background
  backgroundDark: '#0A0F1A',  // Darker background
  backgroundLight: '#1E293B', // Lighter background
  
  // Card Colors
  card: 'rgba(255, 255, 255, 0.08)',
  cardBorder: 'rgba(255, 255, 255, 0.15)',
  cardHover: 'rgba(255, 255, 255, 0.12)',
  
  // Text Colors
  text: '#FFFFFF',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  textTertiary: 'rgba(255, 255, 255, 0.5)',
  textDisabled: 'rgba(255, 255, 255, 0.3)',
  
  // Border Colors
  border: 'rgba(255, 255, 255, 0.1)',
  borderLight: 'rgba(255, 255, 255, 0.05)',
  borderDark: 'rgba(255, 255, 255, 0.2)',
  
  // Overlay Colors
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.3)',
  overlayDark: 'rgba(0, 0, 0, 0.7)',
  
  // Gradient Colors
  gradientStart: '#1E3A8A',
  gradientEnd: '#0F172A',
  
  // White & Black
  white: '#FFFFFF',
  black: '#000000',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  round: 9999,
};

export const fontSize = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 20,
  xxxl: 24,
  display: 32,
  hero: 40,
};

export const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 12,
  },
};

export const animations = {
  // Duration in milliseconds
  fast: 150,
  normal: 300,
  slow: 500,
  
  // Pulse rhythm (matches app design)
  pulseInterval: 1500,
  
  // Easing curves
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  linear: 'linear',
};

export const breakpoints = {
  // Mobile
  mobile: 320,
  mobileLarge: 375,
  mobileXLarge: 414,
  
  // Tablet
  tablet: 768,
  tabletLarge: 1024,
  
  // Desktop
  desktop: 1280,
  desktopLarge: 1440,
  desktopXLarge: 1920,
};

// Export default theme
export default {
  colors,
  spacing,
  borderRadius,
  fontSize,
  fontWeight,
  shadows,
  animations,
  breakpoints,
};
