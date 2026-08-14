import { useEffect, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import { getTeam } from '../services/api';
import { FaCrosshairs, FaPaintBrush, FaBookOpen, FaFileContract, FaUserShield } from 'react-icons/fa';

export default function About() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    document.title = 'About — Storyline Design & Events';

    getTeam()
      .then((res) => setTeam(res.data || []))
      .catch(() => setTeam(fallbackTeam));
  }, []);

  const fallbackTeam = [
    { id: 1, name: 'Avadhut', role: 'Founder & Creative Director', bio: 'Brand vision, key client relationships, and final design sign-off on every project.' },
    { id: 2, name: 'Event Director', role: 'Operations Head', bio: 'The command centre for every live event.' },
    { id: 3, name: 'Client Servicing Lead', role: 'Client & VIP Coordination', bio: 'Client and guest communication, RSVP management, timelines.' },
    { id: 4, name: 'Production Head', role: 'Technical & Staging', bio: 'Staging, rigging, sound, lighting, LED, and power.' },
    { id: 5, name: 'Design Studio Lead', role: 'Creative & Print', bio: 'Décor, floral design, and all print/graphic design.' },
    { id: 6, name: 'Vendor & Logistics Manager', role: 'Supply Chain', bio: 'Vendor sourcing, transport, inventory, and warehousing.' },
  ];

  const displayTeam = team.length ? team : fallbackTeam;

  const values = [
    { icon: <FaCrosshairs />, title: 'Precision', desc: 'Engineering-grade rigging, timelines to the minute, zero-surprise execution.' },
    { icon: <FaPaintBrush />, title: 'Craft', desc: 'In-house design sensibility on every floral, structural, and print element — nothing generic.' },
    { icon: <FaBookOpen />, title: 'Duality with Discipline', desc: 'Weddings and corporate run as distinct brands internally, with shared quality standards.' },
    { icon: <FaFileContract />, title: 'Transparency', desc: 'Clear contracts, milestone billing, and documented scope with every client and vendor.' },
    { icon: <FaUserShield />, title: 'Discretion', desc: 'HNI, celebrity, and VIP client details are handled under strict confidentiality.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="about-hero" id="about-hero">
        <span className="label">Our Story</span>
        <h1>We Build the Structure.<br /><span className="text-gold">You Live the Story.</span></h1>
        <div className="gold-line-center"></div>
        <p style={{ maxWidth: '600px', margin: '16px auto 0', fontSize: 'var(--fs-body-lg)' }} className="text-muted">
          Storyline Design & Events is a premium event styling and production house 
          based in Pune — rebuilt from the ground up as a house of craftsmanship.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="section" id="vision-mission">
        <div className="container">
          <div className="grid-2">
            <ScrollReveal animation="reveal-left">
              <div className="glass-card">
                <span className="label">Vision</span>
                <h3 style={{ marginTop: '12px', marginBottom: '16px' }}>
                  Pune's Most Trusted Name
                </h3>
                <p>
                  To be the studio high-net-worth families and serious corporate clients 
                  call first — for both the emotion of a wedding and the precision of a stage build.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="reveal-right">
              <div className="glass-card">
                <span className="label">Mission</span>
                <h3 style={{ marginTop: '12px', marginBottom: '16px' }}>
                  One Disciplined Process
                </h3>
                <p>
                  To deliver every event through a clear blueprint, custom fabrication and design, 
                  and flawless on-site execution — so that clients experience the day and never 
                  see the machinery behind it.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="section" style={{ background: 'var(--charcoal-deep)' }} id="brand-pillars">
        <SectionHeading
          label="Brand Pillars"
          title="What We Stand For"
        />
        <div className="container">
          <div className="grid-3">
            <ScrollReveal>
              <div className="glass-card" style={{ textAlign: 'center' }}>
                <div className="service-card-icon" style={{ margin: '0 auto 16px' }}>
                  <FaCrosshairs />
                </div>
                <h3>Structural Precision</h3>
                <p>Engineering-grade execution — trussing, rigging, staging, power — done with zero margin for error.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="glass-card" style={{ textAlign: 'center' }}>
                <div className="service-card-icon" style={{ margin: '0 auto 16px' }}>
                  <FaPaintBrush />
                </div>
                <h3>Artistry & Aesthetic</h3>
                <p>Floral design, drape, lighting, and styling treated as fine craft, not decoration.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="glass-card" style={{ textAlign: 'center' }}>
                <div className="service-card-icon" style={{ margin: '0 auto 16px' }}>
                  <FaBookOpen />
                </div>
                <h3>Narrative</h3>
                <p>Every event is framed as a story with a beginning, a build, and a climax — not a checklist of vendors.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" id="values">
        <SectionHeading
          label="Core Values"
          title="How We Operate"
        />
        <div className="container">
          <div className="values-grid">
            {values.map((value, i) => (
              <ScrollReveal key={i}>
                <div className="value-card">
                  <div style={{ color: 'var(--gold)', fontSize: '1.3rem', marginBottom: '12px' }}>
                    {value.icon}
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: 'var(--charcoal-deep)' }} id="team">
        <SectionHeading
          label="The Team"
          title="Who Builds Your Story"
          description="A lean core team backed by a vetted freelance and vendor bench."
        />
        <div className="container">
          <div className="grid-3">
            {displayTeam.map((member, i) => (
              <ScrollReveal key={member.id || i}>
                <div className="glass-card" style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '72px', height: '72px',
                    background: 'var(--gradient-gold)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 16px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.6rem', fontWeight: '700',
                    color: 'var(--charcoal)',
                  }}>
                    {member.name.charAt(0)}
                  </div>
                  <h4>{member.name}</h4>
                  <span className="label" style={{ fontSize: 'var(--fs-xs)', display: 'block', marginBottom: '12px' }}>
                    {member.role}
                  </span>
                  <p style={{ fontSize: 'var(--fs-small)' }}>{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
