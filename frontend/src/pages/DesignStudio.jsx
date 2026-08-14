import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import InquiryForm from '../components/InquiryForm';
import { FaFileAlt, FaPaintBrush, FaIdCard, FaGift, FaBullhorn, FaChair } from 'react-icons/fa';

export default function DesignStudio() {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    document.title = 'Design Studio — Creative & Print Services | Storyline Design & Events';
  }, []);

  const categories = [
    { key: 'all', label: 'All Services' },
    { key: 'stationery', label: 'Stationery & Invites' },
    { key: 'table', label: 'On-Table & Seating' },
    { key: 'signage', label: 'Signage & Wayfinding' },
    { key: 'passes', label: 'Passes & Credentials' },
    { key: 'gifting', label: 'Gifting & Packaging' },
    { key: 'marketing', label: 'Marketing & Print' },
  ];

  const items = [
    // Stationery & Invites
    { name: 'Save the Date Design', cat: 'stationery', icon: <FaFileAlt /> },
    { name: 'Invitation Card Design', cat: 'stationery', icon: <FaFileAlt /> },
    { name: 'RSVP Card Design', cat: 'stationery', icon: <FaFileAlt /> },
    { name: 'Welcome Card Design', cat: 'stationery', icon: <FaFileAlt /> },
    { name: 'Thank You Card Design', cat: 'stationery', icon: <FaFileAlt /> },
    { name: 'Wedding Program Card', cat: 'stationery', icon: <FaFileAlt /> },
    { name: 'Digital Invitation Design', cat: 'stationery', icon: <FaFileAlt /> },
    { name: 'Social Media Invite Design', cat: 'stationery', icon: <FaFileAlt /> },
    // On-Table & Seating
    { name: 'Tent Card Design', cat: 'table', icon: <FaChair /> },
    { name: 'Table Number Design', cat: 'table', icon: <FaChair /> },
    { name: 'Name Card / Place Card', cat: 'table', icon: <FaChair /> },
    { name: 'Seating Card Design', cat: 'table', icon: <FaChair /> },
    { name: 'Menu Card Design', cat: 'table', icon: <FaChair /> },
    { name: 'Menu Stand Design', cat: 'table', icon: <FaChair /> },
    { name: 'Table Topper Design', cat: 'table', icon: <FaChair /> },
    // Signage & Wayfinding
    { name: 'Welcome Board Design', cat: 'signage', icon: <FaPaintBrush /> },
    { name: 'Signage Design', cat: 'signage', icon: <FaPaintBrush /> },
    { name: 'Direction Board Design', cat: 'signage', icon: <FaPaintBrush /> },
    { name: 'Standee Design', cat: 'signage', icon: <FaPaintBrush /> },
    { name: 'Backdrop Design', cat: 'signage', icon: <FaPaintBrush /> },
    { name: 'Welcome Backdrop Design', cat: 'signage', icon: <FaPaintBrush /> },
    { name: 'Photo Booth Frame Design', cat: 'signage', icon: <FaPaintBrush /> },
    // Passes & Credentials
    { name: 'Entry Pass Design', cat: 'passes', icon: <FaIdCard /> },
    { name: 'VIP Pass Design', cat: 'passes', icon: <FaIdCard /> },
    { name: 'ID Card / Badge Design', cat: 'passes', icon: <FaIdCard /> },
    { name: 'Lanyard Design', cat: 'passes', icon: <FaIdCard /> },
    { name: 'Certificate Design', cat: 'passes', icon: <FaIdCard /> },
    // Gifting & Packaging
    { name: 'Gift Tag Design', cat: 'gifting', icon: <FaGift /> },
    { name: 'Return Gift Tag Design', cat: 'gifting', icon: <FaGift /> },
    { name: 'Sticker Design', cat: 'gifting', icon: <FaGift /> },
    { name: 'Label Design', cat: 'gifting', icon: <FaGift /> },
    { name: 'Envelope Design', cat: 'gifting', icon: <FaGift /> },
    { name: 'Bag / Gift Bag Design', cat: 'gifting', icon: <FaGift /> },
    { name: 'Box Packaging Design', cat: 'gifting', icon: <FaGift /> },
    { name: 'Hamper Card Design', cat: 'gifting', icon: <FaGift /> },
    { name: 'Bottle Label Design', cat: 'gifting', icon: <FaGift /> },
    { name: 'Water Bottle Sticker', cat: 'gifting', icon: <FaGift /> },
    // Marketing & Print
    { name: 'Brochure Design', cat: 'marketing', icon: <FaBullhorn /> },
    { name: 'Flyer Design', cat: 'marketing', icon: <FaBullhorn /> },
    { name: 'Poster Design', cat: 'marketing', icon: <FaBullhorn /> },
    { name: 'Banner Design', cat: 'marketing', icon: <FaBullhorn /> },
    { name: 'Event Schedule Card', cat: 'marketing', icon: <FaBullhorn /> },
    { name: 'Agenda Card Design', cat: 'marketing', icon: <FaBullhorn /> },
    { name: 'Instagram Story / Post', cat: 'marketing', icon: <FaBullhorn /> },
  ];

  const filtered = activeCategory === 'all'
    ? items
    : items.filter(item => item.cat === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="page-hero" id="studio-hero">
        <div className="content">
          <span className="label">Design Studio</span>
          <h1>Creative & <span className="text-gold">Print Services</span></h1>
          <div className="gold-line-center"></div>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: 'var(--fs-body-lg)' }} className="text-muted">
            Every printed, signed, and digital touchpoint of your event — 
            designed in-house for visual consistency.
          </p>
          <div style={{ marginTop: 'var(--space-lg)' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Book Design Services</Link>
          </div>
        </div>
      </section>

      {/* Categories & Items */}
      <section className="section" id="studio-catalog">
        <SectionHeading
          label="Full Catalog"
          title="Design Services"
          description="Available as part of a full event package or as à la carte bookings."
        />
        <div className="container">
          <div className="studio-categories">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`studio-category-btn ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
                id={`studio-cat-${cat.key}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="studio-grid">
            {filtered.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="studio-item">
                  <div className="studio-item-icon">{item.icon}</div>
                  <span>{item.name}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--charcoal-deep)' }} id="studio-inquiry">
        <SectionHeading
          label="Get Started"
          title="Book Design Services"
          description="Tell us what you need. We will provide a custom quote."
        />
        <div className="container-narrow">
          <ScrollReveal>
            <InquiryForm defaultTab="DESIGN_STUDIO" />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
