import { type FC } from 'react';
import './Hero.css';

export const Hero: FC = () => {
  return (
    <header className="hero-section" id="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-badge">Est. 1928</span>
        <h1 className="hero-title">
          ROYAL DAIRY
        </h1>
        <p className="hero-subtitle">
          The Pinnacle of Purity and Organic Luxury
        </p>
        <div className="hero-actions">
          <a href="#products" className="btn-primary">
            Experience Purity
          </a>
          <a href="#about" className="btn-secondary">
            Our Story
          </a>
        </div>
      </div>
    </header>
  );
};
