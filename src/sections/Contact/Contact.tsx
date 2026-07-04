import { useState, type FC, type FormEvent } from 'react';
import './Contact.css';

export const Contact: FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('milk');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setCategory('milk');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <span className="section-badge">Get in Touch</span>
          <h2 className="contact-title">CONCIERGE DESK</h2>
          <p className="contact-lead">
            Contact our private registry for catering requests, premium subscription setup, or custom micro-batch orders.
          </p>
          <div className="office-details">
            <div className="detail-item">
              <span className="detail-icon">✉</span>
              <span>concierge@royaldairy.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📞</span>
              <span>+1 (800) 555-ROYAL</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <span>100 Heritage Lane, Pasture Valley</span>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          {submitted ? (
            <div className="success-card" data-testid="success-card">
              <span className="success-badge">Inquiry Received</span>
              <h3>Thank you, {name}</h3>
              <p>
                Our private concierge team has received your request and will contact you within 2 hours.
              </p>
              <button className="btn-primary reset-button" onClick={handleReset}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name-input">Full Name</label>
                <input
                  id="name-input"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email-input">Email Address</label>
                <input
                  id="email-input"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="category-select">Inquiry Type</label>
                <select
                  id="category-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="milk">Imperial A2 Milk Registry</option>
                  <option value="cheese">Reserve Cheese Volcanic Caves</option>
                  <option value="subscription">Premium Pasture Subscriptions</option>
                  <option value="other">General Concierge Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message-input">Message</label>
                <textarea
                  id="message-input"
                  rows={4}
                  required
                  placeholder="How may we serve you?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button type="submit" className="btn-primary submit-button">
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
