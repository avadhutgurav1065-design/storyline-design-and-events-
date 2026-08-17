import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

const teamMembers = [
  {
    id: '01',
    name: 'Avadhut Gurav',
    title: 'Founder / Production & Technical Expert',
    bio: 'The architectural force behind Storyline. Avadhut merges deep operational and systems expertise to plan the complex logistics behind luxury weddings and massive corporate launches alike â€” run on a strict zero-error philosophy, from structural rigging to full technical integration.',
    tags: ['Large-Scale Operations', 'Structural Integrity', 'Systems Integration'],
    image: '/images/team/avadhut.jpg',
    initials: 'AG'
  },
  {
    id: '02',
    name: 'Jayesh Mahajan',
    title: 'Co-Architect / Design & Animation Head',
    bio: 'The visual architect behind every Storyline build. Before a single truss is rigged, Jayesh renders the venue in full 3D â€” animated stage blueprints the client can walk through, so the final physical build matches the creative vision exactly.',
    tags: ['3D Spatial Design', 'Venue Rendering', 'Technical Stage Mapping'],
    image: '/images/team/jayesh.jpg',
    initials: 'JM'
  },
  {
    id: '03',
    name: 'Aishwarya Thite',
    title: 'Hospitality & Rituals Head',
    bio: 'The anchor of the luxury wedding division. Aishwarya manages seamless VIP check-ins and white-glove hospitality while orchestrating complex traditional rituals on a strict timeline â€” keeping the emotional narrative of the day completely uninterrupted.',
    tags: ['VIP Guest Relations', 'Ritual Coordination', 'Event Flow'],
    image: '/images/team/aishwarya.jpg',
    initials: 'AT'
  },
  {
    id: '04',
    name: 'Rutuja Thite',
    title: 'Marketing Head & Celebrity Mgr',
    bio: 'The force behind Storyline\'s brand positioning and elite client relations. Rutuja manages high-profile corporate collaborations and acts as direct liaison for HNI and celebrity clients â€” with absolute discretion at every step.',
    tags: ['PR & Communications', 'Talent Management', 'Brand Positioning'],
    image: '/images/team/rutuja.jpg',
    initials: 'RT'
  },
  {
    id: '05',
    name: 'Devesh Agrawal',
    title: 'Production & Execution Head',
    bio: 'The commander on the ground. When a venue needs a 12-hour overnight transformation, Devesh leads the charge â€” bridging digital blueprint and physical reality, directing fabrication, floral and staging crews to build every element safely and exactly to spec.',
    tags: ['On-Site Fabrication', 'Crew Management', 'Rapid Transformation'],
    image: '/images/team/devesh.jpg',
    initials: 'DA'
  },
  {
    id: '06',
    name: 'Adesh Ghanwat',
    title: 'Logistics Head',
    bio: 'The backbone of Storyline\'s supply chain. Moving structural iron trusses, delicate florals and heavy lighting rigs across Pune takes military-level precision â€” Adesh controls the timeline so the right assets hit the loading dock at the exact right minute.',
    tags: ['Supply Chain', 'Vendor Coordination', 'Timeline Enforcement'],
    image: '/images/team/adesh.jpg',
    initials: 'AG'
  }
];
function TiltCard({ member, isSelected, onClick, onClose }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);

  function handleMouseMove(event) {
    if (isSelected) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div 
      layout
      layoutId={`card-container-${member.id}`}
      className={`team-card ${isSelected ? 'expanded' : ''}`}
      onClick={!isSelected ? onClick : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX: isSelected ? 0 : rotateX, 
        rotateY: isSelected ? 0 : rotateY, 
        transformStyle: "preserve-3d", 
        perspective: 1200 
      }}
      whileHover={!isSelected ? { scale: 1.05, zIndex: 10, boxShadow: "0 30px 60px rgba(0,0,0,0.4)" } : {}}
      whileTap={!isSelected ? { scale: 0.98 } : {}}
      transition={{ layout: { type: "spring", stiffness: 300, damping: 30 } }}
    >
      <div className="team-card-inner">
        <motion.div layout className="team-card-image-wrapper">
          <motion.img 
            layout
            layoutId={`card-image-${member.id}`}
            src={member.image}
            alt={member.name}
            className="team-card-photo"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <AnimatePresence>
            {!isSelected && (
              <motion.div 
                className="team-card-overlay"
                layoutId={`card-overlay-${member.id}`}
                style={{ transform: "translateZ(50px)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.h3 layoutId={`card-name-${member.id}`} style={{ transform: "translateZ(80px)" }}>{member.name}</motion.h3>
                <motion.p layoutId={`card-title-${member.id}`} style={{ transform: "translateZ(60px)" }}>{member.title}</motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {isSelected && (
          <motion.div 
            className="team-expanded-details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <button className="team-close-btn" onClick={(e) => { e.stopPropagation(); onClose(); }}>Ã—</button>
            <motion.span className="team-modal-index">Plate {member.id}</motion.span>
            <motion.h2 layoutId={`card-name-${member.id}`} className="team-modal-name">{member.name}</motion.h2>
            <motion.div layoutId={`card-title-${member.id}`} className="team-modal-title">{member.title}</motion.div>
            <p className="team-modal-bio">{member.bio}</p>
            <div className="team-modal-tags">
              {member.tags.map(tag => <span key={tag} className="team-tag">{tag}</span>)}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function Team() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="team-app-page">
      <header className="team-app-header">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1>Meet The <em>Team.</em></h1>
          <p>Click on any specialist to view their full profile.</p>
        </motion.div>
      </header>

      {/* The Grid */}
      <motion.div layout className="team-grid">
        <AnimatePresence>
          {teamMembers.map((member) => (
            <TiltCard 
              key={member.id} 
              member={member}
              isSelected={selectedId === member.id}
              onClick={() => setSelectedId(member.id)} 
              onClose={() => setSelectedId(null)}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

