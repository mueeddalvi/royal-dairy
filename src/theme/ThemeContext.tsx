import React, { createContext, useContext, useEffect, useState } from 'react';
import { themeConfig, type ThemeTokens } from './themeConfig';

const ThemeContext = createContext<ThemeTokens>(themeConfig);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme] = useState<ThemeTokens>(themeConfig);

  useEffect(() => {
    const root = document.documentElement;

    // Apply colors
    Object.entries(theme.colors).forEach(([key, val]) => {
      root.style.setProperty(`--color-${key}`, val);
    });

    // Apply fonts
    Object.entries(theme.fonts).forEach(([key, val]) => {
      root.style.setProperty(`--font-${key}`, val);
    });

    // Apply spacing
    Object.entries(theme.spacing).forEach(([key, val]) => {
      root.style.setProperty(`--spacing-${key}`, val);
    });

    // Apply shadows
    Object.entries(theme.shadows).forEach(([key, val]) => {
      root.style.setProperty(`--shadow-${key}`, val);
    });

    // Apply border-radii
    Object.entries(theme.radii).forEach(([key, val]) => {
      root.style.setProperty(`--radius-${key}`, val);
    });

    // Apply transitions
    Object.entries(theme.transitions).forEach(([key, val]) => {
      root.style.setProperty(`--transition-${key}`, val);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
