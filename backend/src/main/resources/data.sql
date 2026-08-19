-- ============================================
-- Storyline Design & Events — Seed Data
-- ============================================

-- Service Offerings (20 departments from the business plan)
INSERT INTO service_offerings (id, name, category, description, icon, display_order, is_active) VALUES
(1, 'Core Event Management', 'CORE', 'Overall event direction, operations, planning & coordination, command centre, timeline management, vendor and client coordination.', 'command', 1, true),
(2, 'Guest & VIP Management', 'CORE', 'RSVP & registration, guest management, VIP/VVIP protocol, hospitality, airport reception, accommodation, transportation, luggage management.', 'users', 2, true),
(3, 'Artist & Talent Management', 'CORE', 'Artist booking & contracts, hospitality, transportation, accommodation, green room, rider management, celebrity & influencer coordination.', 'star', 3, true),
(4, 'Food & Beverage', 'CORE', 'F&B management, catering, guest and artist meals, VIP dining, beverage management, service staff, food hygiene & quality control.', 'utensils', 4, true),
(5, 'Production & Technical', 'CORPORATE', 'Stage management & setup, sound/audio, lighting, LED screens, trussing & rigging, power/generator, AV support, backstage, show calling, technical rehearsals.', 'settings', 5, true),
(6, 'Logistics', 'CORE', 'Material transportation, loading & unloading, vehicle management, equipment movement, warehouse & storage, inventory, vendor & artist logistics.', 'truck', 6, true),
(7, 'Creative & Design', 'DESIGN_STUDIO', 'Graphic design, branding & visual identity, stage design, venue branding, invitation design, signage & wayfinding, social media creatives, printing & production.', 'palette', 7, true),
(8, 'Décor & Venue', 'WEDDING', 'Venue management, décor, floral & props, furniture, entrance & registration area, table setup, lounge/VIP area, green room, theming & styling.', 'flower', 8, true),
(9, 'Rituals & Protocol', 'WEDDING', 'Traditional ceremony coordination, religious & cultural requirements, ritual materials, priest coordination, VIP protocol, ceremony scheduling.', 'scroll', 9, true),
(10, 'Hampers & Gifting', 'WEDDING', 'Gift procurement & packaging, welcome kits, guest hampers, artist gifts, VIP gifts, distribution management.', 'gift', 10, true),
(11, 'Security & Safety', 'CORE', 'Crowd management, VIP security, entry/exit control, access pass management, fire safety, emergency response, medical/first aid, evacuation planning.', 'shield', 11, true),
(12, 'Hospitality & Backstage', 'CORE', 'Hospitality desk, backstage & green room management, artist requirements, crew hospitality, volunteer management, staff coordination.', 'coffee', 12, true),
(13, 'Registration & Accreditation', 'CORPORATE', 'Registration, RSVP, guest database, QR/digital check-in, ID/badge printing, access passes, accreditation, attendance tracking.', 'clipboard', 13, true),
(14, 'Marketing & Communication', 'CORE', 'Social media, PR & media relations, photography, videography, influencer management, press/media desk, live updates, content creation.', 'megaphone', 14, true),
(15, 'Finance & Procurement', 'CORE', 'Budget management, accounts, vendor payments, purchase/procurement, quotations & negotiation, contracts, expense tracking.', 'calculator', 15, true),
(16, 'Sponsorship & Partnerships', 'CORPORATE', 'Sponsorship acquisition & management, brand deliverables, partner coordination, sponsor branding & hospitality.', 'handshake', 16, true),
(17, 'Volunteers & Manpower', 'CORE', 'Staff allocation, duty roster, shift management, training & briefing, attendance, uniform/ID distribution.', 'users-cog', 17, true),
(18, 'Documentation & Compliance', 'CORE', 'Contracts & agreements, permissions, licenses, insurance, vendor documentation, government coordination, event documentation.', 'file-text', 18, true),
(19, 'Photography & Media', 'CORE', 'Event photography, videography, live streaming, reels/short-form content, event aftermovie, media coordination.', 'camera', 19, true),
(20, 'Post-Event', 'CORE', 'Event closure, vendor settlement, material return, inventory reconciliation, guest/client feedback, event report, financial closing.', 'check-circle', 20, true)
ON CONFLICT (id) DO NOTHING;

-- Portfolio / Case Studies
INSERT INTO portfolio (id, title, description, category, image_url, stats, client_name, location, event_date, is_featured, display_order) VALUES
(1, 'The Sunshine Mandap', 'A towering, custom-built yellow wooden mandap structure elegantly draped in white and yellow floral cascading garlands, creating a breathtaking outdoor ceremony space.', 'WEDDING', '/images/portfolio/275270396e14239b73a536bd95f3b39d.jpg', 'Custom Woodwork | 1000+ Floral Garlands | 2-Day Setup', 'The Patel Family', 'Jaipur, Rajasthan', '2026-01-01', true, 1),
(2, 'Tech Partnership Summit', 'A massive corporate partnership summit featuring a custom-built stage with ultra-wide LED screens, intelligent truss lighting, and seating for over 800 global delegates.', 'CORPORATE', '/images/portfolio/512314d3077a801ae45d506c9de6f114.jpg', '800+ Attendees | Ultra-wide LED | Truss Rigging | 24-Hour Build', 'Fujifilm India', 'Kochi, Kerala', '2026-03-01', true, 2),
(3, 'Rajasthani Sangeet Courtyard', 'An incredible Rajasthani-style outdoor courtyard setup for a vibrant Sangeet. Features colorful floor cushions, low tables, hanging lanterns, and a beautifully decorated traditional swing.', 'WEDDING', '/images/portfolio/709d4ce8f06310e107cf6ac6e7fe17c0.jpg', 'Authentic Props | Custom Floor Seating | 300+ Guests', 'The Singh Family', 'Udaipur, Rajasthan', '2025-12-01', true, 3),
(4, 'Champions Charity Gala', 'An elegant corporate dinner gala setup. Features round tables with deep purple ambient lighting, tropical floral centerpieces, plated service, and a fully branded stage production.', 'CORPORATE', '/images/portfolio/7275c62519f387d8b04aa08cd435b1c8.jpg', '500+ Guests | Ambient Lighting | Plated Service | Stage Production', 'Skin Cancer Foundation', 'Mumbai, Maharashtra', '2026-02-01', true, 4),
(5, 'The Botanical Walkway', 'An immersive, fully floral arched walkway bursting with thousands of fresh orange, yellow, and peach roses and orchids to welcome guests into the main venue.', 'WEDDING', '/images/portfolio/24b5efff1c8e03140bb67798dba5bceb.jpg', '1500+ Stem Count | Custom Arches | Immersive Design', 'The Deshmukh Family', 'Pune, Maharashtra', '2026-01-15', true, 5),
(6, 'Minimalist Corporate Welcome', 'A sleek, minimalist welcome installation for a business charity gala night, setting a sophisticated tone right from the entrance with clean typography and structural easels.', 'CORPORATE', '/images/portfolio/5935ecbe0930010e497bf5030d0b6215.jpg', 'Custom Signage | Minimalist Design | VIP Reception', 'Business & Co', 'Delhi, NCR', '2026-04-01', true, 6)
ON CONFLICT (id) DO UPDATE SET image_url = EXCLUDED.image_url, title = EXCLUDED.title, description = EXCLUDED.description, category = EXCLUDED.category, stats = EXCLUDED.stats, client_name = EXCLUDED.client_name;

-- Testimonials
INSERT INTO testimonials (id, client_name, role, quote, rating, category, is_active, display_order) VALUES
(1, 'Priya & Rohit Sharma', 'Wedding Clients', 'Storyline did not just decorate our wedding — they engineered an experience. The floral ceiling was the single most photographed element across three days. Every guest asked who built it.', 5, 'WEDDING', true, 1),
(2, 'Anand Kulkarni', 'VP Events, Tech Corp India', 'We needed a 500-seat stage built overnight with zero room for error. Storyline delivered a flawless setup — rigging, LED integration, sound — all tested and ready by 6 AM. That is the standard we now hold every vendor to.', 5, 'CORPORATE', true, 2),
(3, 'Meera & Aditya Patil', 'Wedding Clients', 'Our mandap was a piece of architecture, not decoration. The woodwork, the floral pillars, the lighting — every detail was considered. We felt like we were getting married inside a work of art.', 5, 'WEDDING', true, 3),
(4, 'Sneha Joshi', 'Director, Enterprise Solutions Ltd', 'Three days, four stages, 800 attendees — and not a single technical hiccup. Storyline runs a command centre, not a decoration service. That distinction matters when your CEO is on stage.', 5, 'CORPORATE', true, 4),
(5, 'The Deshmukh Family', 'Wedding Clients', 'The transition from indoor ceremony to outdoor reception was seamless. Storyline thought about the guest journey in a way no other vendor we spoke to even mentioned.', 5, 'WEDDING', true, 5)
ON CONFLICT (id) DO NOTHING;

-- Team Members (from org structure)
INSERT INTO team_members (id, name, role, bio, display_order, is_active) VALUES
(1, 'Avadhut', 'Founder & Creative Director', 'Brand vision, key client relationships, and final design sign-off on every project. The creative force behind Storyline''s signature aesthetic — where structural precision meets organic artistry.', 1, true),
(2, 'Event Director', 'Operations Head', 'The command centre for every live event — overseeing core event management, timeline execution, and on-ground operations.', 2, true),
(3, 'Client Servicing Lead', 'Client & VIP Coordination', 'Client and guest communication, RSVP management, timelines, and VIP protocol — ensuring every touchpoint feels intentional.', 3, true),
(4, 'Production Head', 'Technical & Staging', 'Staging, rigging, sound, lighting, LED, and power — engineering-grade execution on every build.', 4, true),
(5, 'Design Studio Lead', 'Creative & Print', 'Décor, floral design, and all print/graphic design — visual consistency from the save-the-date to the Instagram recap.', 5, true),
(6, 'Vendor & Logistics Manager', 'Supply Chain', 'Vendor sourcing, transport, inventory, and warehousing — the operational backbone of every event.', 6, true)
ON CONFLICT (id) DO NOTHING;

-- Event Packages — Weddings
INSERT INTO event_packages (id, name, tier, scope, price_range, category, features, is_popular, display_order) VALUES
(1, 'Signature', 'SIGNATURE', 'Single-function décor + coordination (mandap or reception only)', '₹8 – 15 Lakh', 'WEDDING', 'Single venue styling,Floral design for one function,Basic lighting design,Day-of coordination,Vendor liaison for décor elements,Setup and teardown management', false, 1),
(2, 'Bespoke', 'BESPOKE', 'Full 2–3 function wedding — décor, floral, planning, guest management', '₹15 – 40 Lakh', 'WEDDING', 'Multi-function design (Mehendi/Sangeet/Wedding/Reception),Custom floral installations,Luxury drapery and styling,Full planning and coordination,Guest and VIP management,RSVP and registration,Vendor management,Design Studio collateral (invites/signage)', true, 2),
(3, 'Full-Scale Production', 'FULL_SCALE', 'Multi-day / destination-style wedding, custom structures, full logistics', '₹40 Lakh +', 'WEDDING', 'All Bespoke features included,Custom structural fabrication,Engineered installations (mandaps/ceilings),Full logistics and transportation,Accommodation management,Artist and entertainment management,Photography and videography coordination,Dedicated command centre,Post-event documentation', false, 3)
ON CONFLICT (id) DO NOTHING;

-- Event Packages — Corporate
INSERT INTO event_packages (id, name, tier, scope, price_range, category, features, is_popular, display_order) VALUES
(4, 'Essential', 'ESSENTIAL', 'Single-day activation or panel stage, up to 150 pax', '₹3 – 7 Lakh', 'CORPORATE', 'Single-day event setup,Stage and podium design,Basic sound and lighting,Branded backdrop,Registration setup,Day-of coordination', false, 4),
(5, 'Premium', 'PREMIUM', 'Conference/launch with custom staging, LED, branded environment', '₹7 – 20 Lakh', 'CORPORATE', 'Custom stage fabrication,LED screen integration,Full AV production,Branded environments,Sponsor deliverables,Registration and accreditation,Photography coverage,Crew and volunteer management', true, 5),
(6, 'Flagship', 'FLAGSHIP', 'Multi-day summit or 500+ pax build, full rigging & production', '₹20 Lakh +', 'CORPORATE', 'All Premium features included,Multi-day stage builds,Full trussing and rigging,Power and generator management,Multiple breakout rooms,Live streaming capability,Dedicated command centre,Security and safety management,Post-event reporting and analysis', false, 6)
ON CONFLICT (id) DO NOTHING;

-- Sync sequences for all tables using IDENTITY so that new inserts do not clash with hardcoded IDs
SELECT setval(pg_get_serial_sequence('service_offerings', 'id'), coalesce(max(id), 1), true) FROM service_offerings;
SELECT setval(pg_get_serial_sequence('portfolio', 'id'), coalesce(max(id), 1), true) FROM portfolio;
SELECT setval(pg_get_serial_sequence('testimonials', 'id'), coalesce(max(id), 1), true) FROM testimonials;
SELECT setval(pg_get_serial_sequence('team_members', 'id'), coalesce(max(id), 1), true) FROM team_members;
SELECT setval(pg_get_serial_sequence('event_packages', 'id'), coalesce(max(id), 1), true) FROM event_packages;
