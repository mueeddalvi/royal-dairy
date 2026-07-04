import { useEffect, useState, type FC } from 'react';
import './Preloader.css';

export const Preloader: FC = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 800); // Match CSS fadeout duration
      return () => clearTimeout(removeTimer);
    }, 1500); // Display duration

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader-overlay ${fadeOut ? 'fade-out' : ''}`} aria-hidden="true">
      <div className="preloader-container">
        <div className="gold-ring"></div>
        <div className="brand-logo">
          <svg className="crown-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 80 L30 40 L50 60 L70 40 L80 80 Z"
              fill="none"
              stroke="var(--color-accent, #D4AF37)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="50" cy="35" r="5" fill="var(--color-accent, #D4AF37)" />
            <circle cx="20" cy="80" r="4" fill="var(--color-accent, #D4AF37)" />
            <circle cx="80" cy="80" r="4" fill="var(--color-accent, #D4AF37)" />
            <circle cx="30" cy="40" r="4" fill="var(--color-accent, #D4AF37)" />
            <circle cx="70" cy="40" r="4" fill="var(--color-accent, #D4AF37)" />
          </svg>
          <h1 className="brand-title">ROYAL DAIRY</h1>
          <p className="brand-subtitle">Est. 2026</p>
        </div>
      </div>
    </div>
  );
};
