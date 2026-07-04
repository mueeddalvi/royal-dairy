import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Footer } from './Footer';

describe('Footer Section', () => {
  test('renders logo name and copyright tagline', () => {
    render(<Footer />);
    expect(screen.getByText('ROYAL DAIRY')).toBeInTheDocument();
    expect(screen.getByText(/Serving pure taste and organic prestige/)).toBeInTheDocument();
  });
});
