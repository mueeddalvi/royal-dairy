import { useState, type FC } from 'react';
import './Header.css';

export const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: 'Top', href: '#hero' },
    { label: 'Collection', href: '#products' },
    { label: 'Heritage', href: '#about' },
    { label: 'Testimonials', href: '#reviews' },
    { label: 'Concierge', href: '#contact' },
  ];

  const handleToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="header-nav" role="navigation" aria-label="Main Navigation">
      <div className="header-container">
        <a href="#hero" className="header-brand" aria-label="Royal Dairy Homepage">
          ROYAL DAIRY
        </a>

        {/* Desktop Links */}
        <div className="desktop-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu trigger */}
        <button
          className={`mobile-menu-trigger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={handleToggle}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} 
        data-testid="mobile-drawer"
      >
        <div className="mobile-drawer-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
