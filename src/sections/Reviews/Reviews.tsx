import { useState, type FC } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Reviews.css';

interface Review {
  quote: string;
  author: string;
  role: string;
}

export const Reviews: FC = () => {
  const revealRef = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const reviews: Review[] = [
    {
      quote: "The Imperial A2 Milk is unlike anything available in standard grocers. Its taste is exceptionally rich, and it has resolved my lactose sensitivities entirely.",
      author: "Charlotte Vanderhoof",
      role: "Fine Food Critic",
    },
    {
      quote: "Royal Cheddar Cave aged cheese was the highlight of our gala. The crystallization and sharp profile represent the pinnacle of artisanal cheese-making.",
      author: "Lord Sterling",
      role: "Estate Sommelier",
    },
    {
      quote: "Their cultured butter makes even simple sourdough toast taste like a Michelin-starred experience. Truly outstanding.",
      author: "Chef Antoine Laurent",
      role: "Michelin-Starred Chef",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const activeReview = reviews[activeIndex];

  return (
    <section className="reviews-section reveal-up" id="reviews" ref={revealRef}>
      <span className="section-badge">Client Testimonials</span>
      <h2 className="reviews-title">CONCIERGE REVIEWS</h2>

      <div className="reviews-slider">
        <button className="slider-arrow prev" onClick={handlePrev} aria-label="Previous review">
          &#8249;
        </button>

        <div className="review-card-container">
          <div className="review-card" data-testid="review-card">
            <span className="quote-mark">“</span>
            <p className="review-quote">{activeReview.quote}</p>
            <div className="review-author-meta">
              <span className="review-author">{activeReview.author}</span>
              <span className="review-role">{activeReview.role}</span>
            </div>
          </div>
        </div>

        <button className="slider-arrow next" onClick={handleNext} aria-label="Next review">
          &#8250;
        </button>
      </div>

      <div className="reviews-dots" role="tablist" aria-label="Select review slides">
        {reviews.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeIndex === index}
            aria-label={`Show testimonial ${index + 1}`}
            className={`review-dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};
