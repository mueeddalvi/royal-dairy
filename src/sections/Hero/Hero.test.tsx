import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Hero } from './Hero';

describe('Hero Section', () => {
  test('renders main titles and links', () => {
    render(<Hero />);
    expect(screen.getByText('ROYAL DAIRY')).toBeInTheDocument();
    expect(screen.getByText('Experience Purity')).toBeInTheDocument();
  });
});
