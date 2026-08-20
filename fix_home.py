import os
import re

filepath = r'C:\storyline website\frontend\src\pages\Home.jsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. "Unforgettable Memories Since 2008" -> "2020"
content = content.replace("Unforgettable Memories Since 2008", "Unforgettable Memories Since 2020")

# 2. "Since our inception in 2008" -> "2020"
content = content.replace("Since our inception in 2008", "Since our inception in 2020")

# 3. Change numbers in useCountUp
# Weddings Decorated: 10000 -> 1000
content = content.replace("useCountUp(10000)", "useCountUp(1000)")
# Corporate Events Styled: 7000 -> 500
content = content.replace("useCountUp(7000)", "useCountUp(500)")
# Venue Partners: 30 -> 10
content = content.replace("useCountUp(30)", "useCountUp(10)")
# Years of Excellence: 18 -> 6
content = content.replace("useCountUp(18)", "useCountUp(6)")

# 4. Remove Testimonials block entirely
# We'll use regex to remove the block between {/* ===== TESTIMONIALS ===== */} and the next section or container end
testimonial_regex = r'\{\/\* ===== TESTIMONIALS ===== \*\/\}.*?</section>'
content = re.sub(testimonial_regex, '', content, flags=re.DOTALL)

# Remove getTestimonials import and usage to avoid unused var warnings
content = content.replace("import TestimonialCarousel from '../components/TestimonialCarousel';\n", "")
content = content.replace(", getTestimonials", "")
content = content.replace("const [testimonials, setTestimonials] = useState([]);", "")
content = content.replace("getTestimonials().then(res => setTestimonials(res.data || [])).catch(() => setTestimonials([]));", "")

# 5. Remove "TAJ" from marquee track
# It appears multiple times, so we'll replace the exact line:
taj_line = "              <h2 style={{ color: 'var(--text-light)', opacity: 0.5 }}>TAJ</h2>\n"
content = content.replace(taj_line, "")
taj_line2 = "              <h2 style={{ color: 'var(--text-light)', opacity: 0.5 }}>TAJ</h2>\r\n"
content = content.replace(taj_line2, "")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Modifications applied successfully.")
