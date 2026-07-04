import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Achievements } from './Achievements';

describe('Achievements Section', () => {
  test('renders metric values and labels', () => {
    render(<Achievements />);
    expect(screen.getByText('150+')).toBeInTheDocument();
    expect(screen.getByText('Heritage Cows')).toBeInTheDocument();
  });
});
