import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { WhyChoose } from './WhyChoose';

describe('WhyChoose Section', () => {
  test('renders section header and card titles', () => {
    render(<WhyChoose />);
    expect(screen.getByText('WHY CHOOSE ROYAL DAIRY')).toBeInTheDocument();
    expect(screen.getByText('A2 Heritage Cattle')).toBeInTheDocument();
  });
});
