import os

filepath = r'C:\storyline website\frontend\src\components\Navbar.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("{ to: '/design-studio', label: 'Studio' }", "{ to: '/design-studio', label: 'Design Studio' }")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Navbar updated.")
