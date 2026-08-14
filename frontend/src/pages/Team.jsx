import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const teamMembers = [
  {
    id: '01',
    name: 'Avadhut Gurav',
    title: 'Founder / Production & Technical Expert',
    bio: 'The architectural force behind Storyline. Avadhut merges deep operational and systems expertise to plan the complex logistics behind luxury weddings and massive corporate launches alike — run on a strict zero-error philosophy, from structural rigging to full technical integration.',
    tags: ['Large-Scale Operations', 'Structural Integrity', 'Systems Integration'],
    image: '/images/team/avadhut.jpg',
    initials: 'AG'
  },
  {
    id: '02',
    name: 'Jayesh Mahajan',
    title: 'Co-Architect / Design & Animation Head',
    bio: 'The visual architect behind every Storyline build. Before a single truss is rigged, Jayesh renders the venue in full 3D — animated stage blueprints the client can walk through, so the final physical build matches the creative vision exactly.',
    tags: ['3D Spatial Design', 'Venue Rendering', 'Technical Stage Mapping'],
    image: '/images/team/jayesh.jpg',
    initials: 'JM'
  },
  {
    id: '03',
    name: 'Aishwarya Thite',
    title: 'Hospitality & Rituals Head',
    bio: 'The anchor of the luxury wedding division. Aishwarya manages seamless VIP check-ins and white-glove hospitality while orchestrating complex traditional rituals on a strict timeline — keeping the emotional narrative of the day completely uninterrupted.',
    tags: ['VIP Guest Relations', 'Ritual Coordination', 'Event Flow'],
    image: '/images/team/aishwarya.jpg',
    initials: 'AT'
  },
  {
    id: '04',
    name: 'Rutuja Thite',
    title: 'Marketing Head & Celebrity Mgr',
    bio: 'The force behind Storyline\'s brand positioning and elite client relations. Rutuja manages high-profile corporate collaborations and acts as direct liaison for HNI and celebrity clients — with absolute discretion at every step.',
    tags: ['PR & Communications', 'Talent Management', 'Brand Positioning'],
    image: '/images/team/rutuja.jpg',
    initials: 'RT'
  },
  {
    id: '05',
    name: 'Devesh Agrawal',
    title: 'Production & Execution Head',
    bio: 'The commander on the ground. When a venue needs a 12-hour overnight transformation, Devesh leads the charge — bridging digital blueprint and physical reality, directing fabrication, floral and staging crews to build every element safely and exactly to spec.',
    tags: ['On-Site Fabrication', 'Crew Management', 'Rapid Transformation'],
    image: '/images/team/devesh.jpg',
    initials: 'DA'
  },
  {
    id: '06',
    name: 'Adesh Ghanwat',
    title: 'Logistics Head',
    bio: 'The backbone of Storyline\'s supply chain. Moving structural iron trusses, delicate florals and heavy lighting rigs across Pune takes military-level precision — Adesh controls the timeline so the right assets hit the loading dock at the exact right minute.',
    tags: ['Supply Chain', 'Vendor Coordination', 'Timeline Enforcement'],
    image: '/images/team/adesh.jpg',
    initials: 'AG'
  }
];

export default function Team() {
  const targetRef = useRef(null);
  
  // Calculate horizontal scroll based on vertical scroll of the target container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scroll progress 0 -> 1 to x translation (e.g. 1% to -85%)
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div className="team-page">
      {/* Hero Section (Fades out as horizontal scroll begins) */}
      <motion.header 
        className="team-hero-h"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ zIndex: 1, position: 'relative' }}
        >
          <span className="eyebrow" style={{ display: 'block', marginBottom: '24px', color: 'var(--gold)', letterSpacing: '0.2em' }}>
            Storyline Design &amp; Events
          </span>
          <h1>Meet The <em style={{ color: 'var(--gold)' }}>Team.</em></h1>
          <p style={{ margin: '32px auto 0', maxWidth: '520px', color: 'var(--white-muted)', fontSize: '18px', lineHeight: '1.7' }}>
            Scroll down to explore the specialists behind every production.
          </p>
        </motion.div>
      </motion.header>

      {/* Horizontal Scroll Section */}
      <section ref={targetRef} className="horizontal-scroll-section">
        <div className="horizontal-sticky-container">
          <motion.div style={{ x }} className="horizontal-track">
            
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card-h">
                <div className="team-card-photo-wrapper">
                  <div className="team-card-photo">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      onError={(e) => { 
                        e.target.style.display = 'none'; 
                        const fallback = document.createElement('div');
                        fallback.style.display = 'flex';
                        fallback.style.alignItems = 'center';
                        fallback.style.justifyContent = 'center';
                        fallback.style.width = '100%';
                        fallback.style.aspectRatio = '3/4';
                        fallback.style.fontSize = '80px';
                        fallback.style.color = 'var(--gold-muted)';
                        fallback.style.fontFamily = 'var(--font-heading)';
                        fallback.innerText = member.initials;
                        e.target.parentNode.appendChild(fallback);
                      }} 
                    />
                  </div>
                </div>

                <div className="team-card-content">
                  <span className="team-card-index">Plate {member.id}</span>
                  <h2 className="team-card-name">{member.name}</h2>
                  <div className="team-card-title">{member.title}</div>
                  <p className="team-card-bio">{member.bio}</p>
                  
                  <div className="team-tags">
                    {member.tags.map(tag => (
                      <span key={tag} className="team-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="cta" style={{ textAlign: 'center', padding: '160px 24px 180px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>Now Booking 2026 / 2027</span>
          <h2 style={{ marginTop: '24px', fontSize: 'clamp(32px,6vw,52px)', maxWidth: '700px', margin: '24px auto 0', lineHeight: 1.1 }}>Six specialists.<br/>One blueprint.<br/><em style={{ color: 'var(--gold)' }}>Every build.</em></h2>
          <p style={{ color: 'var(--white-muted)', margin: '32px 0 48px', fontSize: '16px' }}>Bring this team to your wedding or your next corporate production.</p>
          <Link to="/contact" className="btn btn-primary btn-lg" style={{ padding: '16px 48px', fontSize: '16px', letterSpacing: '0.1em' }}>START YOUR INQUIRY</Link>
        </motion.div>
      </section>
    </div>
  );
}
