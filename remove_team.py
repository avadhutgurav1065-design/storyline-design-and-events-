import os

# 1. Delete Team.jsx
team_path = r'C:\storyline website\frontend\src\pages\Team.jsx'
if os.path.exists(team_path):
    os.remove(team_path)

# 2. Update App.jsx
app_path = r'C:\storyline website\frontend\src\App.jsx'
with open(app_path, 'r', encoding='utf-8') as f:
    app_content = f.read()
app_content = app_content.replace("import Team from './pages/Team';\n", "")
app_content = app_content.replace('<Route path="/team" element={<Team />} />\n', "")
with open(app_path, 'w', encoding='utf-8') as f:
    f.write(app_content)

# 3. Update Navbar.jsx
navbar_path = r'C:\storyline website\frontend\src\components\Navbar.jsx'
with open(navbar_path, 'r', encoding='utf-8') as f:
    nav_content = f.read()
nav_content = nav_content.replace("      { to: '/team', label: 'Team' },\n", "")
with open(navbar_path, 'w', encoding='utf-8') as f:
    f.write(nav_content)

# 4. Update Footer.jsx
footer_path = r'C:\storyline website\frontend\src\components\Footer.jsx'
with open(footer_path, 'r', encoding='utf-8') as f:
    footer_content = f.read()
footer_content = footer_content.replace('                <Link to="/team">Meet The Team</Link>\n', '')
with open(footer_path, 'w', encoding='utf-8') as f:
    f.write(footer_content)

print("Team page and routes completely removed.")
