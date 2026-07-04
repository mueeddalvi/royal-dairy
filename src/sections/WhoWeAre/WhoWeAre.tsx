import { type FC } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './WhoWeAre.css';

export const WhoWeAre: FC = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="who-we-are-section reveal-up" id="about" ref={revealRef}>
      <div className="section-container">
        <div className="story-content">
          <span className="section-badge">Our Heritage</span>
          <h2 className="section-title">WHO WE ARE</h2>
          <p className="story-lead">
            For three generations, Royal Dairy has stood as a sanctuary of pure dairy craft. We believe in the natural synergy of pristine pastures, heritage cows, and time-honored methods.
          </p>
          <div className="story-body">
            <p>
              Nestled in the mist-crowned hills, our cows graze on organic grasslands rich in native clover and rye. We slow-churn our butter and cave-mature our cheeses, preserving the raw nutrients and deep textures that modern mass-production compromises.
            </p>
            <p>
              We bypass standard industrial processing in favor of organic micro-batches. The result is dairy of rare quality, crafted with passion and served to those who appreciate the absolute finest in taste and purity.
            </p>
          </div>
        </div>

        <div className="visual-graphic">
          <div className="ambient-glow"></div>
          <svg className="nature-graphic" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" stroke="var(--color-border)" strokeWidth="1" />
            <path d="M40 140 Q70 80 100 120 T160 100" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
            <path d="M60 160 Q100 110 140 150" stroke="var(--color-silver)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="100" cy="70" r="15" stroke="var(--color-accent)" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
};
