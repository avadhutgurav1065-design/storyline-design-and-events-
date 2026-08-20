import os

filepath = r'C:\storyline website\frontend\src\pages\About.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

old_h4 = "<h4 style={{ fontSize: '1.8rem', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '0.05em' }}>{member.name}</h4>"
new_h4 = "<h4 style={{ fontSize: '1.8rem', margin: 0, fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{member.name}</h4>"

old_span = "<span style={{ color: 'var(--rose-deeper)', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '0.1em', marginBottom: '10px', display: 'block' }}>{member.role}</span>"
new_span = "<span style={{ color: '#ffb3c6', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '0.1em', marginBottom: '10px', display: 'block', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>{member.role}</span>"

old_p = "<p style={{ fontSize: '0.95rem', color: '#ccc', lineHeight: '1.6', margin: 0, opacity: 0.9 }}>{member.bio}</p>"
new_p = "<p style={{ fontSize: '0.95rem', color: '#f0f0f0', lineHeight: '1.6', margin: 0, opacity: 0.95, textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>{member.bio}</p>"

content = content.replace(old_h4, new_h4)
content = content.replace(old_span, new_span)
content = content.replace(old_p, new_p)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("About page text colors fixed.")
