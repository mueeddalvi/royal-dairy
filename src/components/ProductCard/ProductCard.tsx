import { type FC } from 'react';
import { type Product } from '../../data/products';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  // Simple icon helpers based on category type
  const renderIcon = () => {
    switch (product.category) {
      case 'milk':
        return (
          <svg className="product-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 18h12V9L15 4H9L6 9z" />
            <path d="M9 4v5h6V4" />
            <circle cx="12" cy="14" r="2" />
          </svg>
        );
      case 'cheese':
        return (
          <svg className="product-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 21h18N21 11L12 3L3 11z" />
            <circle cx="9" cy="14" r="1.5" />
            <circle cx="15" cy="12" r="1" />
            <circle cx="13" cy="17" r="1" />
          </svg>
        );
      case 'butter-ghee':
        return (
          <svg className="product-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="6" width="18" height="12" rx="2" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
      case 'yogurt-cream':
      default:
        return (
          <svg className="product-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2a5 5 0 0 0-5 5v3h10V7a5 5 0 0 0-5-5z" />
            <path d="M4 10h16v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
          </svg>
        );
    }
  };

  return (
    <article className="product-card" data-testid={`product-${product.id}`}>
      <div className="product-visual">
        <div className="visual-background"></div>
        {renderIcon()}
        <span className="product-volume">{product.volume}</span>
      </div>

      <div className="product-info">
        <div className="product-tags">
          {product.specs.slice(0, 2).map((spec, index) => (
            <span key={index} className="product-tag-badge">{spec}</span>
          ))}
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="product-cta" aria-label={`Select ${product.name}`}>
            Inquire
          </button>
        </div>
      </div>
    </article>
  );
};
