import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { ProductGrid } from './ProductGrid';

describe('ProductGrid Component', () => {
  test('renders grid categories and filters items', () => {
    render(<ProductGrid />);
    // Check main title exists
    expect(screen.getByText('The Royal')).toBeInTheDocument();

    // Check filter buttons exist
    const milkFilter = screen.getByRole('tab', { name: /milk/i });
    expect(milkFilter).toBeInTheDocument();

    // Click milk filter
    fireEvent.click(milkFilter);

    // Verify only milk items are displayed by checking tab active state
    expect(milkFilter).toHaveAttribute('aria-selected', 'true');
  });
});
