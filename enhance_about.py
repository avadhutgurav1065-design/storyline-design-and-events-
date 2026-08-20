import os

filepath = r'C:\storyline website\frontend\src\pages\About.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Enhance Leadership Section
old_leadership = """<h2 className="editorial-section-header mb-5">The Leadership</h2>
            </ScrollReveal>

            <ScrollReveal>
              <div className="founder-profile mb-5">"""
new_leadership = """<h2 className="editorial-section-header mb-5" style={{ fontSize: '3rem', color: 'var(--text-dark)' }}>The Leadership.</h2>
            </ScrollReveal>

            <ScrollReveal>
              <div className="founder-profile mb-5" style={{ padding: '20px', background: 'var(--white)', borderRadius: '16px', boxShadow: 'var(--shadow-elevated)' }}>"""
content = content.replace(old_leadership, new_leadership)

old_jayesh = """<div className="founder-profile">"""
new_jayesh = """<div className="founder-profile" style={{ padding: '20px', background: 'var(--white)', borderRadius: '16px', boxShadow: 'var(--shadow-elevated)' }}>"""
content = content.replace(old_jayesh, new_jayesh)

# Enhance Production Engine Grid
old_grid = """<div className="core-team-grid">
            {coreTeam.map((member, idx) => (
              <ScrollReveal key={idx} animation="reveal-scale">
                <div className="core-member-card">
                  <div className="member-image-wrapper">
                    <img src={member.img} alt={member.name} className="member-image bw-to-color" />
                    <div className="member-info-overlay glassmorphism">
                      <h4>{member.name}</h4>
                      <span className="member-role">{member.role}</span>
                      <p className="member-bio">{member.bio}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>"""

new_grid = """<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {coreTeam.map((member, idx) => (
              <ScrollReveal key={idx} animation="reveal-scale">
                <div style={{ 
                  position: 'relative', 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-card)',
                  height: '450px',
                  group: 'true',
                  cursor: 'pointer'
                }} className="team-card-enhanced">
                  <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="team-img-hover" />
                  <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '30px',
                    color: 'white',
                    transition: 'all 0.3s ease'
                  }}>
                    <h4 style={{ fontSize: '1.8rem', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '0.05em' }}>{member.name}</h4>
                    <span style={{ color: 'var(--rose-deeper)', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '0.1em', marginBottom: '10px', display: 'block' }}>{member.role}</span>
                    <p style={{ fontSize: '0.95rem', color: '#ccc', lineHeight: '1.6', margin: 0, opacity: 0.9 }}>{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            .team-card-enhanced:hover .team-img-hover {
               transform: scale(1.08);
            }
          `}} />"""
content = content.replace(old_grid, new_grid)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("About page enhanced.")
