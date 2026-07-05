import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Hero } from './Hero';

describe('Hero Section', () => {
  test('renders title and CTA links', () => {
    render(<Hero />);
    expect(screen.getByText('ROYAL')).toBeInTheDocument();
    expect(screen.getByText('DAIRY')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /explore products/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /our story/i })).toBeInTheDocument();
  });
});
