import { useState, type FC } from 'react';
import { products } from '../../data/products';
import { ProductCard } from '../ProductCard';
import './ProductGrid.css';

type FilterCategory = 'all' | 'milk' | 'cheese' | 'butter-ghee' | 'yogurt-cream';

const categories: { key: FilterCategory; label: string; emoji: string }[] = [
  { key: 'all', label: 'All', emoji: '✦' },
  { key: 'milk', label: 'Milk', emoji: '🥛' },
  { key: 'cheese', label: 'Cheese', emoji: '🧀' },
  { key: 'butter-ghee', label: 'Butter & Ghee', emoji: '🧈' },
  { key: 'yogurt-cream', label: 'Yogurt & Cream', emoji: '🍶' },
];

export const ProductGrid: FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="catalog-section" id="products" aria-label="Our Catalog">
      {/* Section header */}
      <div className="catalog-head">
        <span className="catalog-eyebrow">Curated Collection</span>
        <h2 className="catalog-title">The Royal <em>Selection</em></h2>
        <p className="catalog-lead">
          Each product is crafted with uncompromising care — from pasture to pour.
        </p>
      </div>

      {/* Filter pills */}
      <div className="catalog-filters" role="tablist" aria-label="Product categories">
        {categories.map((cat) => (
          <button
            key={cat.key}
            role="tab"
            aria-selected={activeCategory === cat.key}
            className={`cat-pill ${activeCategory === cat.key ? 'cat-pill--active' : ''}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            <span className="cat-pill__emoji" aria-hidden="true">{cat.emoji}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product grid / horizontal scroll on mobile */}
      <div className="products-track" data-testid="products-grid">
        {filteredProducts.map((product, i) => (
          <div
            key={product.id}
            className="track-item"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Mobile scroll hint */}
      <p className="scroll-hint" aria-hidden="true">Swipe to explore →</p>
    </section>
  );
};
