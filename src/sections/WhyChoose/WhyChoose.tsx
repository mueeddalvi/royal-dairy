import { type FC } from 'react';
import './WhyChoose.css';

export const WhyChoose: FC = () => {
  const usps = [
    {
      title: 'A2 Heritage Cattle',
      desc: 'Our cows belong to pure heritage lines producing exclusively A2 beta-casein proteins, which are gentle on digestion.',
      icon: '🐄',
    },
    {
      title: '100% Organic Pastures',
      desc: 'Free from synthetic pesticides, herbicides, or GMOs. Our cattle graze on native wild grasses, clover, and clean herbs.',
      icon: '🌱',
    },
    {
      title: 'Artisanal Maturation',
      desc: 'We cave-mature cheddar for 24 months and slow-churn cultured butter using traditional methods passed down over decades.',
      icon: '🧀',
    },
  ];

  return (
    <section className="why-choose-section" id="why-choose">
      <div className="why-header">
        <span className="section-badge">Our Pillars</span>
        <h2 className="why-title">WHY CHOOSE ROYAL DAIRY</h2>
      </div>

      <div className="usps-grid">
        {usps.map((usp, index) => (
          <div key={index} className="usp-card">
            <span className="usp-icon" role="img" aria-label={usp.title}>
              {usp.icon}
            </span>
            <h3 className="usp-card-title">{usp.title}</h3>
            <p className="usp-card-desc">{usp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
