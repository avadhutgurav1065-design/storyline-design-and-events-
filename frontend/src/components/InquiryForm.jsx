import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InquiryForm({ className = '' }) {
  const [activeTab, setActiveTab] = useState('WEDDING');
  const [formData, setFormData] = useState({
    enquiryType: 'WEDDING',
    name: '',
    email: '',
    phone: '',
    city: '',
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
      const response = await fetch('http://localhost:8080/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          enquiryType: activeTab,
          name: '',
          email: '',
          phone: '',
          city: '',
          eventDate: '',
          venue: '',
          guestCount: '',
          budgetRange: '',
          referenceLink: '',
          message: '',
        });
      } else {
        const errorData = await response.text();
        setError(`Failed to submit enquiry: ${errorData}`);
      }
    } catch (err) {
      setError('A network error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`inquiry-form-container ${className}`}>
      <div className="inquiry-form">
        <div className="form-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`form-tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => handleTabChange(tab.key)}
            >
              {tab.label}
              {activeTab === tab.key && (
                <motion.div
                  layoutId="activeTabUnderline"
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'var(--rose-deeper)'
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid cards-grid">
            <div className="floating-input-card">
              <label htmlFor="inquiry-name">Full Name *</label>
              <input type="text" id="inquiry-name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="floating-input-card">
              <label htmlFor="inquiry-email">Email *</label>
              <input type="email" id="inquiry-email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="floating-input-card">
              <label htmlFor="inquiry-phone">Phone *</label>
              <input type="tel" id="inquiry-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 93071 95947" />
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>

            <div className="floating-input-card">
              <label htmlFor="inquiry-city">City</label>
              <input type="text" id="inquiry-city" name="city" value={formData.city} onChange={handleChange} placeholder="Event city" />
            </div>

            <div className="floating-input-card">
              <label htmlFor="inquiry-date">Event Date</label>
              <input type="date" id="inquiry-date" name="eventDate" value={formData.eventDate} onChange={handleChange} />
            </div>

            <div className="floating-input-card">
              <label htmlFor="inquiry-venue">Venue / Location</label>
              <input type="text" id="inquiry-venue" name="venue" value={formData.venue} onChange={handleChange} placeholder="Specific venue if known" />
            </div>

            <div className="floating-input-card">
              <label htmlFor="inquiry-guests">Estimated Guest Count</label>
              <select id="inquiry-guests" name="guestCount" value={formData.guestCount} onChange={handleChange}>
                <option value="">Select guest count</option>
                <option value="Up to 100">Up to 100</option>
                <option value="100-300">100 – 300</option>
                <option value="300-500">300 – 500</option>
                <option value="500-1000">500 – 1,000</option>
                <option value="1000+">1,000+</option>
              </select>
            </div>

            <div className="floating-input-card">
              <label htmlFor="inquiry-budget">Expected Budget</label>
              <select id="inquiry-budget" name="budgetRange" value={formData.budgetRange} onChange={handleChange}>
                <option value="">Select budget range</option>
                {budgetOptions[activeTab]?.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="floating-input-card full-width">
              <label htmlFor="inquiry-link">Reference Link (Pinterest / Instagram)</label>
              <input type="url" id="inquiry-link" name="referenceLink" value={formData.referenceLink} onChange={handleChange} placeholder="https://" />
            </div>

            <div className="floating-input-card full-width">
              <label htmlFor="inquiry-message">Tell us about your vision</label>
              <textarea id="inquiry-message" name="message" value={formData.message} onChange={handleChange} placeholder="Describe what you have in mind..." rows="4"></textarea>
            </div>
          </div>
          
          {error && <div className="form-error-main">{error}</div>}

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <button type="submit" className="btn btn-solid submit-btn" disabled={loading} style={{ minWidth: '200px' }}>
              {loading ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </div>
        </form>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              style={{
                position: 'fixed',
                bottom: '40px',
                right: '40px',
                background: 'var(--white)',
                boxShadow: 'var(--shadow-dramatic)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(164, 105, 127, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                zIndex: 9999,
                padding: '24px 32px',
                maxWidth: '400px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--rose-deeper)' }}></div>
                <h3 style={{ color: 'var(--rose-deeper)', fontSize: '1.2rem', margin: 0 }}>Inquiry Received</h3>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)', marginBottom: '20px', lineHeight: 1.5 }}>
                Thank you for reaching out! We will be in touch shortly to discuss your vision.
              </p>
              <button 
                type="button" 
                className="btn btn-outline"
                style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                onClick={() => setSubmitted(false)}
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
