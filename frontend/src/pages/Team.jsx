import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

// Animation Variants
const photoVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.9, ease: [0.165, 0.84, 0.44, 1] } 
  }
};

const contentVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, delay: 0.3, ease: 'easeOut', staggerChildren: 0.1 } 
  }
};

const contentVariantsReverse = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, delay: 0.3, ease: 'easeOut', staggerChildren: 0.1 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Team() {
  return (
    <div>
      <header className="team-hero">
        <div className="team-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <span className="eyebrow" style={{ display: 'block', marginBottom: '24px', color: 'var(--gold)', letterSpacing: '0.15em' }}>
              Storyline Design &amp; Events
            </span>
            <h1>Meet The <em style={{ color: 'var(--gold)' }}>Team.</em></h1>
            <p style={{ margin: '32px auto 0', maxWidth: '520px', color: 'var(--white-muted)', fontSize: '17px', lineHeight: '1.7' }}>
              Every Storyline event passes through the same six hands — from the first digital blueprint to the final overnight transformation.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="team-scroll-container">
        {teamMembers.map((member, index) => {
          const isReverse = index % 2 !== 0;
          return (
            <div key={member.id} className={`team-scroll-section ${isReverse ? 'reverse' : ''}`}>
              {/* Photo Area */}
              <motion.div 
                className="team-scroll-photo-wrapper"
                variants={photoVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="team-scroll-photo">
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
                      fallback.style.height = '100%';
                      fallback.style.fontSize = '80px';
                      fallback.style.color = 'var(--gold-muted)';
                      fallback.style.fontFamily = 'var(--font-heading)';
                      fallback.innerText = member.initials;
                      e.target.parentNode.appendChild(fallback);
                    }} 
                  />
                </div>
              </motion.div>

              {/* Content Area */}
              <motion.div 
                className="team-scroll-content"
                variants={isReverse ? contentVariantsReverse : contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.span variants={itemVariants} className="team-scroll-index">Plate {member.id}</motion.span>
                <motion.h2 variants={itemVariants} className="team-scroll-name">{member.name}</motion.h2>
                <motion.div variants={itemVariants} className="team-scroll-title">{member.title}</motion.div>
                <motion.p variants={itemVariants} className="team-scroll-bio">{member.bio}</motion.p>
                
                <motion.div variants={itemVariants} className="team-tags">
                  {member.tags.map(tag => (
                    <span key={tag} className="team-tag">{tag}</span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </section>

      <section className="cta" style={{ textAlign: 'center', padding: '140px 24px 150px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>Now Booking 2026 / 2027</span>
          <h2 style={{ marginTop: '20px', fontSize: 'clamp(28px,5vw,46px)', maxWidth: '640px', margin: '20px auto 0' }}>Six specialists. One blueprint. Every build.</h2>
          <p style={{ color: 'var(--white-muted)', margin: '24px 0 40px', fontSize: '15px' }}>Bring this team to your wedding or your next corporate production.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Start Your Inquiry</Link>
        </motion.div>
      </section>
    </div>
  );
}
