export interface ThemeTokens {
  colors: {
    background: string;
    backgroundCard: string;
    text: string;
    textSecondary: string;
    accent: string;       // Gold
    accentHover: string;
    silver: string;       // Secondary
    destructive: string;
    border: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  shadows: {
    premium: string;
    goldGlow: string;
  };
  radii: {
    sm: string;
    md: string;
    lg: string;
  };
  transitions: {
    smooth: string;
    slow: string;
  };
}

export const themeConfig: ThemeTokens = {
  colors: {
    background: '#14213d',        // Deep Royal Navy
    backgroundCard: '#1c2e52',    // Slightly lighter navy for cards
    text: '#FFFFFF',              // Pure white
    textSecondary: '#a0aec0',     // Muted blue-grey for secondary text
    accent: '#C9A84C',            // Warm antique gold
    accentHover: '#e2c97e',       // Lighter gold on hover
    silver: '#6c757d',            // Medium grey silver
    destructive: '#8B0000',       // Crimson red
    border: 'rgba(108, 117, 125, 0.25)', // Silver-tinted glass border
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif",
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
  },
  shadows: {
    premium: '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
    goldGlow: '0 0 20px rgba(201, 168, 76, 0.4)',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  transitions: {
    smooth: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};
