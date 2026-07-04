import { type FC } from 'react';
import './Footer.css';

export const Footer: FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-brand-column">
          <span className="footer-logo">ROYAL DAIRY</span>
          <p className="footer-tagline">
            Serving pure taste and organic prestige since 1928.
          </p>
        </div>

        <div className="footer-links-column">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#hero">Top</a></li>
            <li><a href="#products">Collection</a></li>
            <li><a href="#about">Heritage</a></li>
            <li><a href="#contact">Concierge</a></li>
          </ul>
        </div>

        <div className="footer-links-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#privacy">Privacy Registry</a></li>
            <li><a href="#terms">Terms of Purity</a></li>
            <li><a href="#sourcing">Sourcing Codes</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Royal Dairy. All rights reserved. Crafted for Prestige.</p>
      </div>
    </footer>
  );
};
