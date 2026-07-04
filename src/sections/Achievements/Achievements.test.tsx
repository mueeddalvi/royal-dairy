import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Achievements } from './Achievements';

describe('Achievements Section', () => {
  test('renders metric values and labels', () => {
    render(<Achievements />);
    expect(screen.getByText('1000+ kg')).toBeInTheDocument();
    expect(screen.getByText('Paneer Supplied')).toBeInTheDocument();
    expect(screen.getByText('100+')).toBeInTheDocument();
    expect(screen.getByText('Partner Restaurants')).toBeInTheDocument();
  });
});
