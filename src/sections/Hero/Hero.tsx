import { type FC } from 'react';
import './Hero.css';

export const Hero: FC = () => {
  return (
    <header className="hero-section" id="hero">
      {/* Background image */}
      <div className="hero-bg" aria-hidden="true" />

      {/* Layered gradient overlays */}
      <div className="hero-overlay-dark" aria-hidden="true" />
      <div className="hero-overlay-gradient" aria-hidden="true" />

      {/* Floating stat chips */}
      <div className="hero-stat hero-stat--topleft reveal-up">
        <span className="hero-stat__value">500+</span>
        <span className="hero-stat__label">Happy Farms</span>
      </div>
      <div className="hero-stat hero-stat--topright reveal-up">
        <span className="hero-stat__value">A2</span>
        <span className="hero-stat__label">Certified Milk</span>
      </div>

      {/* Main content */}
      <div className="hero-content">
        <span className="hero-eyebrow">Est. 1928 · Pure &amp; Organic</span>

        <h1 className="hero-title">
          <span className="hero-title__line1">ROYAL</span>
          <span className="hero-title__line2">DAIRY</span>
        </h1>

        <div className="hero-divider" aria-hidden="true">
          <span className="hero-divider__line" />
          <span className="hero-divider__diamond">◆</span>
          <span className="hero-divider__line" />
        </div>

        <p className="hero-subtitle">
          From our verdant pastures to your table —<br />
          nature's finest, with unmatched purity.
        </p>

        <div className="hero-actions">
          <a href="#products" className="btn-primary">
            Explore Products
          </a>
          <a href="#about" className="btn-ghost">
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll-cue" aria-hidden="true">
        <span className="hero-scroll-cue__label">Scroll</span>
        <span className="hero-scroll-cue__bar" />
      </div>

      {/* Bottom fade into page */}
      <div className="hero-bottom-fade" aria-hidden="true" />
    </header>
  );
};
