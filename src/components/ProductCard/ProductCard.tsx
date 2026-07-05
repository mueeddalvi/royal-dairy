import { type FC } from 'react';
import { type Product } from '../../data/products';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

/** Per-category gradient palette for the card visual zone */
const categoryStyles: Record<Product['category'], { gradient: string; accent: string }> = {
  milk:         { gradient: 'linear-gradient(135deg, #1c3a6b 0%, #2a5298 50%, #3d7abf 100%)', accent: '#7bb8f5' },
  cheese:       { gradient: 'linear-gradient(135deg, #4a2800 0%, #8b5e1a 50%, #c9a84c 100%)', accent: '#f3d07e' },
  'butter-ghee':{ gradient: 'linear-gradient(135deg, #3d2a00 0%, #a06800 50%, #d4930a 100%)', accent: '#f0b429' },
  'yogurt-cream':{ gradient: 'linear-gradient(135deg, #1e3a2e 0%, #2d6a50 50%, #3d9e78 100%)', accent: '#7fddb0' },
};

const ProductIcons: Record<Product['category'], string> = {
  milk: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 6h16v6l4 8v20a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V20l4-8V6z"/>
    <path d="M16 6h16M12 20h24"/>
    <circle cx="24" cy="32" r="4"/>
  </svg>`,
  cheese: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 40h36V28L24 8 6 28v12z"/>
    <circle cx="18" cy="30" r="3"/>
    <circle cx="30" cy="26" r="2"/>
    <circle cx="26" cy="36" r="2"/>
  </svg>`,
  'butter-ghee': `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="16" width="36" height="20" rx="4"/>
    <line x1="6" y1="26" x2="42" y2="26"/>
    <circle cx="24" cy="26" r="5"/>
    <path d="M20 8 C20 8 24 4 28 8"/>
  </svg>`,
  'yogurt-cream': `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 4h20v4a10 10 0 0 1 0 20H14a10 10 0 0 1 0-20V4z"/>
    <path d="M8 44h32l-4-16H12L8 44z"/>
    <path d="M18 16 C18 10 30 10 30 16"/>
  </svg>`,
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const style = categoryStyles[product.category];

  return (
    <article className="pcard" data-testid={`product-${product.id}`}>
      {/* Visual zone with category gradient */}
      <div className="pcard__visual" style={{ background: style.gradient }}>
        <div className="pcard__noise" aria-hidden="true" />
        <span
          className="pcard__icon"
          style={{ color: style.accent }}
          dangerouslySetInnerHTML={{ __html: ProductIcons[product.category] }}
        />
        <div className="pcard__visual-footer">
          <span className="pcard__volume">{product.volume}</span>
        </div>
      </div>

      {/* Info zone */}
      <div className="pcard__body">
        {/* Spec badges */}
        <div className="pcard__specs">
          {product.specs.map((spec, i) => (
            <span key={i} className="pcard__spec">{spec}</span>
          ))}
        </div>

        <h3 className="pcard__name">{product.name}</h3>
        <p className="pcard__desc">{product.description}</p>

        <div className="pcard__footer">
          <div className="pcard__price-wrap">
            <span className="pcard__price-label">From</span>
            <span className="pcard__price">${product.price.toFixed(2)}</span>
          </div>
          <button
            className="pcard__cta"
            aria-label={`Inquire about ${product.name}`}
          >
            <span>Inquire</span>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};
