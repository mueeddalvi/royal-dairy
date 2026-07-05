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

    expect(result.current.colors.background).toBe('#14213d');
    expect(result.current.colors.accent).toBe('#C9A84C');
    expect(result.current.fonts.heading).toBe("'Playfair Display', serif");
  });
});
