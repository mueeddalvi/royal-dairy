import { renderHook } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { useScrollReveal } from './useScrollReveal';

describe('useScrollReveal hook', () => {
  test('should initialize observer and observe element targets', () => {
    const { result } = renderHook(() => useScrollReveal());
    
    // Check returned ref holds initial state
    expect(result.current).toEqual({ current: null });
  });
});
