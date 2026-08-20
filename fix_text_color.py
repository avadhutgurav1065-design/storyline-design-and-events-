import os
import re

filepath = r'C:\storyline website\frontend\src\pages\DesignStudio.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Update the hero body text style to have white color and a text shadow
old_style = 'className="hero-body-text" style={{ fontSize: \'1.3rem\', lineHeight: \'1.8\', opacity: 0.9, marginBottom: \'var(--space-2xl)\' }}'
new_style = 'className="hero-body-text" style={{ fontSize: \'1.3rem\', lineHeight: \'1.8\', opacity: 0.95, marginBottom: \'var(--space-2xl)\', color: \'var(--white)\', textShadow: \'0 2px 10px rgba(0,0,0,0.8)\' }}'

content = content.replace(old_style, new_style)

# Just in case, let's also make sure the mega-heading has a text shadow for better legibility against the background
old_heading_style = 'className="mega-heading" style={{ fontSize: \'4.5rem\', marginBottom: \'var(--space-md)\', color: \'var(--white)\' }}'
new_heading_style = 'className="mega-heading" style={{ fontSize: \'4.5rem\', marginBottom: \'var(--space-md)\', color: \'var(--white)\', textShadow: \'0 2px 15px rgba(0,0,0,0.9)\' }}'
content = content.replace(old_heading_style, new_heading_style)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Text visibility fixed.")
