import os
import re

# Update Navbar.jsx
navbar_path = r'C:\storyline website\frontend\src\components\Navbar.jsx'
with open(navbar_path, 'r', encoding='utf-8') as f:
    nav_content = f.read()

# Use regex to remove lines containing "/team"
nav_content = re.sub(r'^\s*\{.*to:\s*[\'"]/team[\'"].*\}.*$\n?', '', nav_content, flags=re.MULTILINE)

with open(navbar_path, 'w', encoding='utf-8') as f:
    f.write(nav_content)


# Update Footer.jsx
footer_path = r'C:\storyline website\frontend\src\components\Footer.jsx'
with open(footer_path, 'r', encoding='utf-8') as f:
    footer_content = f.read()

# Use regex to remove lines containing "/team"
footer_content = re.sub(r'^\s*<Link.*to=[\'"]/team[\'"].*</Link>.*$\n?', '', footer_content, flags=re.MULTILINE)

with open(footer_path, 'w', encoding='utf-8') as f:
    f.write(footer_content)

print("Team links thoroughly removed via regex.")
