export const COLORS = {
  primary: '#FF8BA7',     // Soft pastel pink
  secondary: '#C3F0CA',   // Soft mint green
  background: '#FAFAFA',  // Clean off-white
  surface: '#FFFFFF',     // White for cards
  text: '#333333',        // Dark grey for readability
  textLight: '#888888',   // Light grey for secondary text
  border: '#EEEEEE',      // Soft border
  accent: '#FFC6C7',      // Lighter pink accent
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
  xxl: 32,
  padding: 24,
  radius: 12,
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.text,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
};
