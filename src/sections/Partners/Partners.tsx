import { type FC } from 'react';
import './Partners.css';

export const Partners: FC = () => {
  const partners = [
    { name: 'Organic Association', icon: '✦' },
    { name: 'A2 Dairy Certification', icon: '✦' },
    { name: 'Concierge Fine Foods', icon: '✦' },
    { name: 'Luxe Gastronomy Club', icon: '✦' },
  ];

  return (
    <section className="partners-section" id="partners">
      <div className="partners-container">
        {partners.map((partner, index) => (
          <div key={index} className="partner-logo-box">
            <span className="partner-icon">{partner.icon}</span>
            <span className="partner-name">{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
