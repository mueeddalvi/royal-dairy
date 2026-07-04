import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { WhoWeAre } from './WhoWeAre';

describe('WhoWeAre Section', () => {
  test('renders heritage subtitle and title', () => {
    render(<WhoWeAre />);
    expect(screen.getByText('WHO WE ARE')).toBeInTheDocument();
    expect(screen.getByText('Our Heritage')).toBeInTheDocument();
  });
});
