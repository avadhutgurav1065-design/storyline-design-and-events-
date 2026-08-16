import { useState } from 'react';

export default function DesignStudioForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactInfo: '',
    eventDate: '',
    brief: ''
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    'Full Event Print & Stationery',
    'Social Media Reel & Content Production',
    '3D Venue Rendering',
    'Corporate Branding & Access Credentials',
    'Custom Packaging & Gifting'
  ];

  const handleToggleService = (service) => {
    setSelectedServices(prev => 
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

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
      <div className="studio-form-success">
        <div className="success-icon">✨</div>
        <h3>Creative Brief Received</h3>
        <p>Our studio lead will review your aesthetic requirements and schedule a technical consultation shortly.</p>
        <button className="btn btn-outline mt-4" onClick={() => setSubmitted(false)}>Submit Another Brief</button>
      </div>
    );
  }

  return (
    <div className="studio-form-wrapper">
      <form onSubmit={handleSubmit} className="studio-form">
        
        <div className="form-group full-width">
          <label>Core Requirement (Select multiple)</label>
          <div className="pill-selector-group">
            {servicesList.map(service => (
              <button 
                type="button" 
                key={service}
                className={`service-pill-btn ${selectedServices.includes(service) ? 'selected' : ''}`}
                onClick={() => handleToggleService(service)}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        <div className="studio-form-grid">
          <div className="form-group">
            <label htmlFor="fullName">Full Name / Corporate Entity *</label>
            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="e.g. Acme Corp or Jane Doe" />
          </div>

          <div className="form-group">
            <label htmlFor="contactInfo">Contact Number & Official Email *</label>
            <input type="text" id="contactInfo" name="contactInfo" value={formData.contactInfo} onChange={handleChange} required placeholder="Email or Phone Number" />
          </div>

          <div className="form-group full-width">
            <label htmlFor="eventDate">Event Date & Target Venue</label>
            <input type="text" id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange} placeholder="e.g. Q3 2026, JW Marriott" />
          </div>

          <div className="form-group full-width">
            <label htmlFor="brief">Design Brief / Vision Notes</label>
            <textarea id="brief" name="brief" value={formData.brief} onChange={handleChange} placeholder="Detail your primary aesthetic requirements, color palettes, or reference moods..." rows="4"></textarea>
          </div>
        </div>
        
        <div className="form-submit mt-4" style={{ textAlign: 'center' }}>
          <button type="submit" className="btn btn-primary btn-lg" disabled={loading} style={{ width: '100%', maxWidth: '400px' }}>
            {loading ? 'Processing...' : 'Submit Creative Brief'}
          </button>
        </div>
      </form>
    </div>
  );
}
