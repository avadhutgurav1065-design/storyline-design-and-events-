import { useEffect, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import { getPortfolio } from '../services/api';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    document.title = 'Portfolio — Storyline Design & Events';

    getPortfolio()
      .then((res) => setProjects(res.data || []))
      .catch(() => setProjects(fallbackProjects));
  }, []);

  const fallbackProjects = [
    {
      id: 1, title: 'The Grand Ceiling', category: 'WEDDING',
      description: 'A breathtaking floral ceiling installation spanning the entire reception hall — 2,000+ custom floral stems suspended from engineered rigging, creating an immersive botanical canopy.',
      imageUrl: '/images/portfolio/grand-ceiling.png',
      stats: '2000+ Custom Floral Stems | Engineered Suspension Rigging | 12-Hour Overnight Setup | 40-Person Crew',
      clientName: 'The Sharma Family', location: 'Pune, Maharashtra',
    },
    {
      id: 2, title: 'The Corporate Stage', category: 'CORPORATE',
      description: 'Precision staging for 500+ attendees — custom LED backdrop integration, architectural stage design, and full AV production delivered on a 24-hour turnaround.',
      imageUrl: '/images/portfolio/corporate-stage.png',
      stats: 'Custom LED Backdrop | 500+ Attendee Staging | Precision Lighting | 24-Hour Build Turnaround',
      clientName: 'Tech Corp India', location: 'Pune, Maharashtra',
    },
    {
      id: 3, title: 'The Royal Mandap', category: 'WEDDING',
      description: 'A bespoke multi-tiered mandap structure combining traditional Maharashtrian design with contemporary architectural elements.',
      imageUrl: '/images/portfolio/royal-mandap.png',
      stats: 'Custom Woodwork | 8 Floral Pillars | Integrated Lighting | 3-Day Installation',
      clientName: 'The Patil Family', location: 'Lonavala, Maharashtra',
    },
    {
      id: 4, title: 'Leadership Summit 2026', category: 'CORPORATE',
      description: 'Three-day corporate leadership summit with full stage rigging, branded environments across four breakout rooms.',
      imageUrl: '/images/portfolio/leadership-summit.png',
      stats: '3-Day Multi-Stage Build | 4 Breakout Rooms | 800+ Attendees | Live Content Production',
      clientName: 'Enterprise Solutions Ltd', location: 'Pune, Maharashtra',
    },
  ];

  const displayProjects = projects.length ? projects : fallbackProjects;

  const filters = ['ALL', 'WEDDING', 'CORPORATE'];
  const filtered = activeFilter === 'ALL'
    ? displayProjects
    : displayProjects.filter(p => p.category === activeFilter);

  return (
    <div>
      {/* Hero */}
      <section className="page-hero" id="portfolio-hero">
        <div className="content">
          <span className="label">Our Work</span>
          <h1>Portfolio & <span className="text-gold">Case Studies</span></h1>
          <div className="gold-line-center"></div>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: 'var(--fs-body-lg)' }} className="text-muted">
            Every project is a case study in scale and craft. Browse our signature builds.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section" id="portfolio-grid">
        <div className="container">
          <div className="portfolio-filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
                id={`filter-${f.toLowerCase()}`}
              >
                {f === 'ALL' ? 'All Projects' : f === 'WEDDING' ? 'Weddings' : 'Corporate'}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filtered.map((project, index) => (
              <ScrollReveal key={project.id || index}>
                <div className="portfolio-card">
                  <img
                    src={project.imageUrl?.replace('.jpg', '.png') || '/images/portfolio/grand-ceiling.png'}
                    alt={project.title}
                  />
                  <div className="portfolio-card-overlay">
                    <span className="portfolio-card-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="portfolio-card-stats">
                      {(project.stats || '').split('|').map((stat, i) => (
                        <span key={i} className="portfolio-stat">{stat.trim()}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 'var(--space-3xl) 0' }}>
              <p className="text-muted">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
