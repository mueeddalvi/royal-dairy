import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Preloader } from './Preloader';

describe('Preloader Component', () => {
  test('should render the brand title', () => {
    render(<Preloader />);
    const brandElement = screen.getByText('ROYAL DAIRY');
    expect(brandElement).toBeInTheDocument();
  });
});
