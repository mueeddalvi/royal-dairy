import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { ProductCard } from './ProductCard';
import { type Product } from '../../data/products';

const mockProduct: Product = {
  id: 'test-01',
  name: 'Premium Test Milk',
  category: 'milk',
  description: 'Test description',
  price: 5.99,
  image: 'milk',
  specs: ['Organic', 'A2'],
  volume: '1L',
};

describe('ProductCard Component', () => {
  test('renders product name and formatted price', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('Premium Test Milk')).toBeInTheDocument();
    expect(screen.getByText('$5.99')).toBeInTheDocument();
    expect(screen.getByText('Inquire')).toBeInTheDocument();
  });
});
