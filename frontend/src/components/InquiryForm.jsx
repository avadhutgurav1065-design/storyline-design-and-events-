import { useState } from 'react';
import { submitInquiry } from '../services/api';

export default function InquiryForm({ defaultTab = 'WEDDING' }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    enquiryType: defaultTab,
    eventDate: '',
    venue: '',
    guestCount: '',
    budgetRange: '',
    referenceLink: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const tabs = [
    { key: 'WEDDING', label: 'Wedding' },
    { key: 'CORPORATE', label: 'Corporate' },
    { key: 'DESIGN_STUDIO', label: 'Design Studio' },
  ];

  const budgetOptions = {
    WEDDING: ['₹8 – 15 Lakh', '₹15 – 40 Lakh', '₹40 Lakh +', 'Flexible / To Discuss'],
    CORPORATE: ['₹3 – 7 Lakh', '₹7 – 20 Lakh', '₹20 Lakh +', 'Flexible / To Discuss'],
    DESIGN_STUDIO: ['₹10,000 – 50,000', '₹50,000 – 2 Lakh', '₹2 Lakh +', 'Flexible / To Discuss'],
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData((prev) => ({ ...prev, enquiryType: tab }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setError('');
    try {
      await submitInquiry(formData);
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to submit inquiry. Please try again or contact us directly via email/WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="inquiry-form" id="inquiry-form">
        <div className="form-success">
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✓</div>
          <h3>Thank you for your inquiry</h3>
          <p>We have received your submission and will get back to you within 24 hours.</p>
          <button
            className="btn btn-outline"
            style={{ marginTop: '24px' }}
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '', email: '', phone: '', city: '',
                enquiryType: activeTab, eventDate: '', venue: '',
                guestCount: '', budgetRange: '', referenceLink: '', message: '',
              });
            }}
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="inquiry-form" id="inquiry-form">
      <div className="form-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`form-tab ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => handleTabChange(tab.key)}
            type="button"
            id={`tab-${tab.key.toLowerCase()}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="inquiry-name">Full Name *</label>
            <input
              type="text"
              id="inquiry-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="inquiry-email">Email *</label>
            <input
              type="email"
              id="inquiry-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="inquiry-phone">Phone *</label>
            <input
              type="tel"
              id="inquiry-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
            />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="inquiry-city">City</label>
            <input
              type="text"
              id="inquiry-city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Pune"
            />
          </div>

          <div className="form-group">
            <label htmlFor="inquiry-date">Event Date(s)</label>
            <input
              type="text"
              id="inquiry-date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              placeholder="e.g. December 2026 or 15-17 Jan 2027"
            />
          </div>

          <div className="form-group">
            <label htmlFor="inquiry-venue">Venue (if known)</label>
            <input
              type="text"
              id="inquiry-venue"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              placeholder="Venue name or location"
            />
          </div>

          <div className="form-group">
            <label htmlFor="inquiry-guests">Estimated Guest Count</label>
            <select
              id="inquiry-guests"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
            >
              <option value="">Select guest count</option>
              <option value="Up to 100">Up to 100</option>
              <option value="100-300">100 – 300</option>
              <option value="300-500">300 – 500</option>
              <option value="500-1000">500 – 1,000</option>
              <option value="1000+">1,000+</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="inquiry-budget">Budget Range</label>
            <select
              id="inquiry-budget"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
            >
              <option value="">Select budget range</option>
              {(budgetOptions[activeTab] || []).map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="form-group full-width">
            <label htmlFor="inquiry-reference">Reference / Pinterest / Instagram Link</label>
            <input
              type="url"
              id="inquiry-reference"
              name="referenceLink"
              value={formData.referenceLink}
              onChange={handleChange}
              placeholder="https://pinterest.com/... or Instagram post URL"
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="inquiry-message">Tell us about your event</label>
            <textarea
              id="inquiry-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your vision, key requirements, or any specific details you'd like us to know..."
              rows="5"
            ></textarea>
          </div>
        </div>

        <div className="form-submit">
          {error && (
            <div style={{
              background: 'rgba(220, 53, 69, 0.15)',
              border: '1px solid rgba(220, 53, 69, 0.4)',
              color: '#ff6b6b',
              padding: '12px 16px',
              borderRadius: '8px',
              marginBottom: '16px',
              fontSize: 'var(--fs-small)',
              textAlign: 'center',
            }}>
              {error}
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={loading}
            id="submit-inquiry-btn"
          >
            {loading ? 'Submitting...' : 'Submit Inquiry'}
          </button>
        </div>
      </form>
    </div>
  );
}
