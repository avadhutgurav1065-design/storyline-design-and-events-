import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [selectedId, setSelectedId] = useState(null);

  const selectedMember = teamMembers.find(m => m.id === selectedId);

  return (
    <div className="team-app-page">
      <header className="team-app-header">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1>Meet The <em>Team.</em></h1>
          <p>Click on any specialist to view their full profile.</p>
        </motion.div>
      </header>

      {/* The Grid */}
      <div className="team-grid">
        {teamMembers.map((member) => (
          <motion.div 
            key={member.id}
            layoutId={`card-container-${member.id}`}
            className="team-card"
            onClick={() => setSelectedId(member.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.img 
              layoutId={`card-image-${member.id}`}
              src={member.image}
              alt={member.name}
              className="team-card-photo"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <motion.div 
              className="team-card-overlay"
              layoutId={`card-overlay-${member.id}`}
            >
              <motion.h3 layoutId={`card-name-${member.id}`}>{member.name}</motion.h3>
              <motion.p layoutId={`card-title-${member.id}`}>{member.title}</motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* The Expanded Modal */}
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            className="team-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              layoutId={`card-container-${selectedId}`}
              className="team-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="team-modal-close" onClick={() => setSelectedId(null)}>×</button>
              
              <motion.img 
                layoutId={`card-image-${selectedId}`}
                src={selectedMember.image}
                alt={selectedMember.name}
                className="team-modal-photo"
                onError={(e) => { e.target.style.display = 'none'; }}
              />

              <div className="team-modal-details">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.2 }}
                  className="team-modal-index"
                >
                  Plate {selectedMember.id}
                </motion.span>
                
                <motion.h2 
                  layoutId={`card-name-${selectedId}`}
                  className="team-modal-name"
                >
                  {selectedMember.name}
                </motion.h2>
                
                <motion.div 
                  layoutId={`card-title-${selectedId}`}
                  className="team-modal-title"
                >
                  {selectedMember.title}
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.3 }}
                  className="team-modal-bio"
                >
                  {selectedMember.bio}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.4 }}
                  className="team-modal-tags"
                >
                  {selectedMember.tags.map(tag => (
                    <span key={tag} className="team-tag">{tag}</span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
