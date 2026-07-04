import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Header } from './Header';

describe('Header Navigation Bar', () => {
  test('renders logo branding and toggles mobile burger drawer', () => {
    render(<Header />);
    expect(screen.getByText('ROYAL DAIRY')).toBeInTheDocument();

    const trigger = screen.getByRole('button', { name: 'Toggle Navigation Menu' });
    expect(trigger).toBeInTheDocument();

    // Verify initial closed states
    const mobileDrawer = screen.getByTestId('mobile-drawer');
    expect(mobileDrawer).not.toHaveClass('open');

    // Toggle menu click
    fireEvent.click(trigger);

    // Verify drawer opened class toggled
    expect(mobileDrawer).toHaveClass('open');
  });
});
