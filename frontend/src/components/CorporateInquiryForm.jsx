import { useState } from 'react';

export default function CorporateInquiryForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    eventType: '',
    guestCount: '',
    eventDate: '',
    venue: '',
    projectScope: '',
    rfpFile: null
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'rfpFile') {
      setFormData(prev => ({ ...prev, rfpFile: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
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
      <div className="b2b-form-success">
        <div className="success-icon">✓</div>
        <h3>RFP Received Successfully</h3>
        <p>Our production leads will review your logistical requirements and schedule a technical consultation shortly.</p>
        <button className="btn btn-outline mt-4" onClick={() => setSubmitted(false)}>Submit Another Project</button>
      </div>
    );
  }

  return (
    <div className="b2b-form-wrapper">
      <form onSubmit={handleSubmit} className="b2b-form">
        <div className="b2b-form-grid">
          
          <div className="form-group">
            <label htmlFor="companyName">Company / Organization Name *</label>
            <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required placeholder="e.g. Acme Corp" />
          </div>

          <div className="form-group">
            <label htmlFor="contactPerson">Contact Person & Designation *</label>
            <input type="text" id="contactPerson" name="contactPerson" value={formData.contactPerson} onChange={handleChange} required placeholder="e.g. Jane Doe, VP Marketing" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Official Corporate Email *</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="jane@acmecorp.com" />
          </div>

          <div className="form-group">
            <label htmlFor="eventType">Event Type</label>
            <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} required>
              <option value="">Select Event Type</option>
              <option value="Conference">Conference / Summit</option>
              <option value="Expo">Trade Show / Expo</option>
              <option value="Launch">Product Launch</option>
              <option value="Seminar">Seminar / Workshop</option>
              <option value="Corporate Mixer">Corporate Mixer / Gala</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="guestCount">Estimated Pax (Guest Count)</label>
            <select id="guestCount" name="guestCount" value={formData.guestCount} onChange={handleChange} required>
              <option value="">Select Capacity</option>
              <option value="Under 100">Under 100</option>
              <option value="100-500">100 - 500</option>
              <option value="500-1000">500 - 1,000</option>
              <option value="1000+">1,000+</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="eventDate">Event Date & Target Venue</label>
            <input type="text" id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange} placeholder="e.g. Q3 2026, JW Marriott" />
          </div>

          <div className="form-group full-width">
            <label htmlFor="rfpFile">Upload RFP / Brief (PDF, DOCX)</label>
            <div className="file-upload-wrapper">
              <input type="file" id="rfpFile" name="rfpFile" accept=".pdf,.doc,.docx" onChange={handleChange} className="file-input" />
              <div className="file-upload-btn">
                <span>{formData.rfpFile ? formData.rfpFile.name : 'Choose File...'}</span>
              </div>
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="projectScope">Project Scope Notes</label>
            <textarea id="projectScope" name="projectScope" value={formData.projectScope} onChange={handleChange} placeholder="Detail your primary logistical requirements, structural needs, or specific A/V technical constraints..." rows="4"></textarea>
          </div>
          
        </div>
        
        <div className="form-submit mt-4">
          <button type="submit" className="btn btn-primary btn-lg" disabled={loading} style={{ width: '100%' }}>
            {loading ? 'Processing...' : 'Request Technical Consultation'}
          </button>
        </div>
      </form>
    </div>
  );
}
