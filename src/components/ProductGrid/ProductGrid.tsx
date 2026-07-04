import { useState, type FC } from 'react';
import { products } from '../../data/products';
import { ProductCard } from '../ProductCard';
import './ProductGrid.css';

type FilterCategory = 'all' | 'milk' | 'cheese' | 'butter-ghee' | 'yogurt-cream';

export const ProductGrid: FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const categories: { key: FilterCategory; label: string }[] = [
    { key: 'all', label: 'All Collection' },
    { key: 'milk', label: 'Imperial Milk' },
    { key: 'cheese', label: 'Artisanal Cheese' },
    { key: 'butter-ghee', label: 'Butter & Ghee' },
    { key: 'yogurt-cream', label: 'Yogurt & Cream' },
  ];

  return (
    <section className="catalog-section" aria-label="Our Catalog">
      <div className="catalog-header">
        <h2 className="catalog-title">THE ROYAL SELECTION</h2>
        <div className="filter-bar" role="tablist" aria-label="Product categories">
          {categories.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={activeCategory === cat.key}
              className={`filter-button ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid-container" data-testid="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="grid-item-fade">
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="empty-catalog-state">
            <h3>No Products Found</h3>
            <p>Please select another category or check back later.</p>
          </div>
        )}
      </div>
    </section>
  );
};
