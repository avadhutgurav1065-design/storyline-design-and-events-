import os

filepath = r'C:\storyline website\frontend\src\pages\Corporate.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
skip = False
for line in lines:
    if '{/* Dynamic Tab Buttons */}' in line:
        skip = True
        new_lines.append("""          {/* All Services Displayed Sequentially */}
          <div className="services-list" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3xl)' }}>
            {infraData.map((service, index) => (
              <ScrollReveal key={index} animation={index % 2 === 0 ? "reveal-left" : "reveal-right"}>
                <div className="service-row" style={{ 
                  background: 'var(--white)', 
                  padding: 'var(--space-2xl)', 
                  borderRadius: '24px',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-xl)'
                }}>
                  <div className="service-row-header" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                    <div style={{ fontSize: '3rem', color: 'var(--rose-deeper)' }}>{service.icon}</div>
                    <div>
                      <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>{service.title}</h2>
                    </div>
                  </div>
                  <p className="panel-desc" style={{ fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--text-dark)' }}>{service.description}</p>
                  <div className="panel-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="panel-detail-item">
                        <h4 style={{ color: 'var(--rose-deeper)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{detail.label}</h4>
                        <p style={{ color: 'var(--text-muted)' }}>{detail.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>\n""")
    elif '<div className="b2b-cta"' in line:
        skip = True
    
    if skip:
        # Check when to stop skipping
        # For infraData tabs, it ends with </div> of dynamic-content-panel. Let's look for SECTION 4
        if '{/* ===== SECTION 4:' in line:
            skip = False
            new_lines.append(line)
        # For b2b-cta, it ends right before SECTION 5
        elif '{/* ===== SECTION 5:' in line:
            skip = False
            new_lines.append(line)
    else:
        new_lines.append(line)

content = ''.join(new_lines)

# Replace case studies string
old_case_studies = """  const caseStudies = [
    {
      src: '/images/portfolio/709d4ce8f06310e107cf6ac6e7fe17c0.jpg',
      tags: 'LED Mapping, Stage Fabrication, Registration Flow',
      title: '500-Pax Tech Summit'
    },
    {
      src: '/images/portfolio/7275c62519f387d8b04aa08cd435b1c8.jpg',
      tags: 'Heavy Truss Rigging, 1000+ Seating Grid, VIP Security',
      title: 'Institutional Convocation'
    },
    {
      src: '/images/portfolio/78452b62c4e4df528f3239e95ace0ea8.jpg',
      tags: 'Kabuki Drop Reveal, Press Media Wall, Intelligent Lighting',
      title: 'Brand Product Launch'
    }
  ];"""

new_case_studies = """  const caseStudies = [
    {
      src: '/images/portfolio/512314d3077a801ae45d506c9de6f114.jpg',
      tags: 'LED Mapping, Stage Fabrication, Corporate Seating',
      title: 'Fujifilm Partnership Summit'
    },
    {
      src: '/images/portfolio/7275c62519f387d8b04aa08cd435b1c8.jpg',
      tags: 'Gala Dinner Layout, Ambient Lighting, Table Styling',
      title: 'Champions For Change Gala'
    },
    {
      src: '/images/portfolio/ffbb4ae875a587366019e69a37ea3750.jpg',
      tags: 'Brand Installation, Milestone Timeline, Event Fabrication',
      title: 'ABBANK 30th Anniversary'
    }
  ];"""

content = content.replace(old_case_studies, new_case_studies)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Corporate updates applied safely.")
