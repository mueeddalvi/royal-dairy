import { renderHook } from '@testing-library/react';
import { type ReactNode } from 'react';
import { describe, test, expect } from 'vitest';
import { ThemeProvider, useTheme } from './ThemeContext';

describe('Theme System', () => {
  test('should provide the design tokens', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.colors.background).toBe('#020B1E');
    expect(result.current.colors.accent).toBe('#D4AF37');
    expect(result.current.fonts.heading).toBe("'Playfair Display', serif");
  });
});
