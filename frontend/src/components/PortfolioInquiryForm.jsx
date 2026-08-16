import { useState } from 'react';

export default function PortfolioInquiryForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactInfo: '',
    category: '',
    venue: '',
    requirements: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="portfolio-form-success">
        <div className="success-icon" style={{ fontSize: '3rem', color: 'var(--rose-deeper)', marginBottom: '1rem' }}>✓</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--text-dark)' }}>Inquiry Received</h3>
        <p style={{ color: 'var(--text-muted)' }}>Our design team will review your project requirements and be in touch shortly with a formal proposal.</p>
        <button className="btn btn-primary mt-4" onClick={() => setSubmitted(false)}>Submit Another Inquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="portfolio-minimal-form">
      <div className="form-row">
        <div className="input-wrapper">
          <input 
            type="text" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            required 
            placeholder="Full Name / Organization" 
            className="minimal-input"
          />
          <span className="input-underline"></span>
        </div>
        
        <div className="input-wrapper">
          <input 
            type="text" 
            name="contactInfo" 
            value={formData.contactInfo} 
            onChange={handleChange} 
            required 
            placeholder="Contact Number & Official Email" 
            className="minimal-input"
          />
          <span className="input-underline"></span>
        </div>
      </div>
      
      <div className="form-row">
        <div className="input-wrapper">
          <select 
            name="category" 
            value={formData.category} 
            onChange={handleChange} 
            required
            className="minimal-input select-input"
          >
            <option value="" disabled>Event Category</option>
            <option value="Luxury Wedding">Luxury Wedding Fabrication</option>
            <option value="Corporate Summit">Corporate Conference / Summit</option>
            <option value="Product Launch">Product Launch & Expo</option>
            <option value="Private Social">Private Celebration</option>
          </select>
          <span className="input-underline"></span>
        </div>
        
        <div className="input-wrapper">
          <input 
            type="text" 
            name="venue" 
            value={formData.venue} 
            onChange={handleChange} 
            placeholder="Target Venue & Date (Optional)" 
            className="minimal-input"
          />
          <span className="input-underline"></span>
        </div>
      </div>
      
      <div className="input-wrapper full-width">
        <textarea 
          name="requirements" 
          value={formData.requirements} 
          onChange={handleChange} 
          required 
          placeholder="Project Requirements & Scope Notes..." 
          className="minimal-input"
          rows="1"
          style={{ resize: 'vertical', minHeight: '60px' }}
        ></textarea>
        <span className="input-underline"></span>
      </div>
      
      <div className="form-submit mt-4" style={{ textAlign: 'right' }}>
        <button type="submit" className="btn btn-primary" disabled={loading} style={{ background: 'var(--text-dark)', color: 'var(--white)', letterSpacing: '0.1em' }}>
          {loading ? 'Processing...' : 'Request Project Consultation'}
        </button>
      </div>
    </form>
  );
}
