/**
 * Theme Configuration
 * Centralized theme constants for consistent styling across the application
 */

export const COLORS = {
  // Brand Colors
  primary: '#009d8d',
  primaryHover: '#008177',
  
  // Neutral Colors
  black: '#000',
  white: '#fff',
  gray: {
    50: '#f5f5f5',
    100: '#e0e0e0',
    200: '#d0d0d0',
    300: '#b0b0b0',
    400: '#999',
    500: '#666',
  },
  
  // Status Colors
  success: '#d4f4dd',
  successText: '#2d5f3e',
  error: '#ffcccc',
  errorText: '#8b0000',
  warning: '#fff4cc',
  warningText: '#856404',
  
  // Background Colors
  background: {
    primary: '#f5f5f5',
    secondary: '#fff',
    card: '#fff',
  },
};

export const TYPOGRAPHY = {
  fontFamily: {
    primary: 'Inter, sans-serif',
    secondary: 'Outfit, sans-serif',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    base: 15,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
    '4xl': 40,
    '5xl': 48,
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
};

export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

export const TRANSITIONS = {
  fast: '0.15s ease',
  normal: '0.3s ease',
  slow: '0.5s ease',
};

export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
};

export const Z_INDEX = {
  navbar: 100,
  modal: 1000,
  tooltip: 1100,
};
