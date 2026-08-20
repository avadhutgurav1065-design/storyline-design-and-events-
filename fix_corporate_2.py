import os
import re

filepath = r'C:\storyline website\frontend\src\pages\Corporate.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Expand the infraData tabs
tabs_regex = r'\{\/\* Dynamic Tab Buttons \*\/\}.*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>'
replacement_infra = """{/* All Services Displayed Sequentially */}
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
          </div>
        </div>
      </section>"""
content = re.sub(tabs_regex, replacement_infra, content, flags=re.DOTALL)


# 2. Update Case Studies
case_studies_regex = r'const caseStudies = \[.*?\];'
replacement_case_studies = """const caseStudies = [
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
content = re.sub(case_studies_regex, replacement_case_studies, content, flags=re.DOTALL)


# 3. Remove Download Corporate Production Deck CTA
cta_regex = r'<div className="text-center" style=\{\{ marginTop: \'var\(--space-3xl\)\' \}\}>.*?<\/div>\s*<\/div>\s*<\/section>'
replacement_cta = """</div>
      </section>"""
content = re.sub(cta_regex, replacement_cta, content, flags=re.DOTALL)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Corporate updates applied securely.")
