const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'frontend', 'src', 'components', 'InquiryForm.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// The file is badly mangled between <form onSubmit={handleSubmit}> and the end of the form grid.
// We will replace the entire form-grid block.
const formStartIdx = content.indexOf('<div className="form-grid">');
const formEndIdx = content.indexOf('</div>\n        <div className="form-group full-width">');

if (formStartIdx !== -1 && formEndIdx !== -1) {
  const correctGrid = `<div className="form-grid">
          <div className="form-group">
            <label htmlFor="inquiry-name">Full Name *</label>
            <input type="text" id="inquiry-name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="inquiry-email">Email *</label>
            <input type="email" id="inquiry-email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="inquiry-phone">Phone *</label>
            <input type="tel" id="inquiry-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 93071 95947" />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="inquiry-city">City</label>
            <input type="text" id="inquiry-city" name="city" value={formData.city} onChange={handleChange} placeholder="Pune" />
          </div>

          <div className="form-group">
            <label htmlFor="inquiry-date">Event Date(s)</label>
            <input type="date" id="inquiry-date" name="eventDate" value={formData.eventDate} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="inquiry-venue">Venue (if known)</label>
            <input type="text" id="inquiry-venue" name="venue" value={formData.venue} onChange={handleChange} placeholder="Venue name or location" />
          </div>

          <div className="form-group">
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

          <div className="form-group">
            <label htmlFor="inquiry-budget">Budget Range</label>
            <select id="inquiry-budget" name="budgetRange" value={formData.budgetRange} onChange={handleChange}>
              <option value="">Select budget range</option>
              {budgetOptions[activeTab]?.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        `;

  const newContent = content.substring(0, formStartIdx) + correctGrid + content.substring(formEndIdx);
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log("Fixed InquiryForm.jsx");
} else {
  console.error("Could not find boundaries");
}
