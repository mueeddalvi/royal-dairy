import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Reviews } from './Reviews';

describe('Reviews Section', () => {
  test('renders slider controls and changes visible review', () => {
    render(<Reviews />);
    expect(screen.getByText('CONCIERGE REVIEWS')).toBeInTheDocument();

    const initialQuote = screen.getByText(/The Imperial A2 Milk is unlike anything available in standard grocers/);
    expect(initialQuote).toBeInTheDocument();

    // Click next slide arrow
    const nextBtn = screen.getByRole('button', { name: 'Next review' });
    fireEvent.click(nextBtn);

    // Verify second quote renders
    const secondQuote = screen.getByText(/Royal Cheddar Cave aged cheese was the highlight of our gala/);
    expect(secondQuote).toBeInTheDocument();
  });
});
