import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Contact } from './Contact';

describe('Contact Section', () => {
  test('renders inquiry fields and displays success card on submit', () => {
    render(<Contact />);
    expect(screen.getByText('CONCIERGE DESK')).toBeInTheDocument();

    const nameInput = screen.getByPlaceholderText('Your Name');
    const emailInput = screen.getByPlaceholderText('you@example.com');
    const messageInput = screen.getByPlaceholderText('How may we serve you?');
    const submitBtn = screen.getByRole('button', { name: 'Submit Inquiry' });

    // Populate
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    fireEvent.change(emailInput, { target: { value: 'jane@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Catering request for private event.' } });

    // Submit
    fireEvent.click(submitBtn);

    // Assert success screen is visible
    expect(screen.getByTestId('success-card')).toBeInTheDocument();
    expect(screen.getByText('Thank you, Jane Doe')).toBeInTheDocument();
  });
});
