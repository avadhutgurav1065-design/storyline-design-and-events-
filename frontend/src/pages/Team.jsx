import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

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

// --- Magnetic Cutout Component ---
function MagneticCutout({ src, name, initials }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="team-scroll-photo-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 150, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="team-scroll-photo">
        <img 
          src={src} 
          alt={name} 
          onError={(e) => { 
            e.target.style.display = 'none'; 
            const fallback = document.createElement('div');
            fallback.style.display = 'flex';
            fallback.style.alignItems = 'center';
            fallback.style.justifyContent = 'center';
            fallback.style.width = '100%';
            fallback.style.aspectRatio = '4/5';
            fallback.style.fontSize = '120px';
            fallback.style.color = 'var(--gold-muted)';
            fallback.style.fontFamily = 'var(--font-heading)';
            fallback.innerText = initials;
            e.target.parentNode.appendChild(fallback);
          }} 
        />
      </div>
    </motion.div>
  );
}

// --- Animated Text Component ---
function AnimatedText({ member, isReverse }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.4 } 
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Character by character for name
  const nameVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div 
      className="team-scroll-content"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.span variants={textVariants} className="team-scroll-index">Plate {member.id}</motion.span>
      
      <h2 className="team-scroll-name" style={{ perspective: '1000px' }}>
        {member.name.split('').map((char, index) => (
          <motion.span key={index} variants={nameVariants}>
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </h2>
      
      <motion.div variants={textVariants} className="team-scroll-title">{member.title}</motion.div>
      <motion.p variants={textVariants} className="team-scroll-bio">{member.bio}</motion.p>
      
      <motion.div variants={textVariants} className="team-tags">
        {member.tags.map(tag => (
          <span key={tag} className="team-tag">{tag}</span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Team() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div>
      <header className="team-hero">
        <motion.div className="team-hero-inner" style={{ y: heroY }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow" style={{ display: 'block', marginBottom: '24px', color: 'var(--gold)', letterSpacing: '0.2em' }}>
              Storyline Design &amp; Events
            </span>
            <h1>Meet The <em style={{ color: 'var(--gold)' }}>Team.</em></h1>
            <p style={{ margin: '32px auto 0', maxWidth: '520px', color: 'var(--white-muted)', fontSize: '18px', lineHeight: '1.7' }}>
              Every Storyline event passes through the same six hands — from the first digital blueprint to the final overnight transformation.
            </p>
          </motion.div>
        </motion.div>
      </header>

      <section className="team-scroll-container">
        {teamMembers.map((member, index) => {
          const isReverse = index % 2 !== 0;
          return (
            <div key={member.id} className={`team-scroll-section ${isReverse ? 'reverse' : ''}`}>
              <MagneticCutout src={member.image} name={member.name} initials={member.initials} />
              <AnimatedText member={member} isReverse={isReverse} />
            </div>
          );
        })}
      </section>

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
