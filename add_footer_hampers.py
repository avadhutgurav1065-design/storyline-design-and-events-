import os
import re

filepath = r'C:\storyline website\frontend\src\components\Footer.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add to Navigate
old_nav = """              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>"""
new_nav = """              <Link to="/about">About Us</Link>
              <Link to="/hampers">Hampers & Gifting</Link>
              <Link to="/contact">Contact</Link>"""
content = content.replace(old_nav, new_nav)

# Add to Services
old_serv = """              <Link to="/design-studio">Print & Digital Design</Link>"""
new_serv = """              <Link to="/design-studio">Print & Digital Design</Link>
              <Link to="/hampers">Curated Hampers</Link>"""
content = content.replace(old_serv, new_serv)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Hampers link added to footer.")
