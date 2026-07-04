import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Partners } from './Partners';

describe('Partners Section', () => {
  test('renders list of partner labels', () => {
    render(<Partners />);
    expect(screen.getByText('Organic Association')).toBeInTheDocument();
  });
});
