import os

filepath = r'C:\storyline website\frontend\src\styles\pages.css'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the background image
old_bg = "background-image: url('/images/portfolio/7275c62519f387d8b04aa08cd435b1c8.jpg');"
new_bg = "background-image: url('/images/studio/physical-build.jpg');"
content = content.replace(old_bg, new_bg)

# Replace the overlay color and blend mode
old_overlay = "background: rgba(196, 137, 156, 0.85); /* Deep rose pastel overlay */ z-index: 2; mix-blend-mode: multiply;"
new_overlay = "background: rgba(0, 0, 0, 0.7); z-index: 2;"
content = content.replace(old_overlay, new_overlay)

# There is a duplicate definition in pages.css without the comment, let's catch it too
old_overlay_2 = "background: rgba(196, 137, 156, 0.85); z-index: 2; mix-blend-mode: multiply;"
new_overlay_2 = "background: rgba(0, 0, 0, 0.7); z-index: 2;"
content = content.replace(old_overlay_2, new_overlay_2)

# Ensure text has massive drop shadow
old_title = "text-shadow: 0 4px 20px rgba(0,0,0,0.2);"
new_title = "text-shadow: 0 4px 20px rgba(0,0,0,0.9);"
content = content.replace(old_title, new_title)

old_body = "text-shadow: 0 2px 10px rgba(0,0,0,0.2);"
new_body = "text-shadow: 0 2px 10px rgba(0,0,0,0.9);"
content = content.replace(old_body, new_body)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Infrastructure section fixed.")
