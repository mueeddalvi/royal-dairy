import { type FC } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Achievements.css';

export const Achievements: FC = () => {
  const revealRef = useScrollReveal();
  const metrics = [
    { value: '1000+ kg', label: 'Paneer Supplied' },
    { value: '100+', label: 'Partner Restaurants' },
    { value: '10,000+', label: 'Daily Litres Fresh' },
    { value: '100%', label: 'Organic Certified' },
  ];

  return (
    <section className="achievements-section reveal-up" id="achievements" ref={revealRef}>
      <div className="achievements-container">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-box">
            <span className="metric-value">{metric.value}</span>
            <span className="metric-label">{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
