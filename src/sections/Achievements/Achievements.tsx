import { type FC } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Achievements.css';

export const Achievements: FC = () => {
  const revealRef = useScrollReveal();
  const metrics = [
    { value: '150+', label: 'Heritage Cows' },
    { value: '100%', label: 'Grass-Fed pastures' },
    { value: '0%', label: 'Additive chemicals' },
    { value: '3', label: 'Generations of purity' },
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
