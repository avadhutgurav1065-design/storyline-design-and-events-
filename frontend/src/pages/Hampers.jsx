import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import { FaPlaneArrival, FaBed, FaGem, FaGift, FaBuilding, FaChevronDown, FaTimes } from 'react-icons/fa';

export default function Hampers() {
  useEffect(() => {
    document.title = 'Storyline Hampers — Curated Luxury Gifting | Pune';
  }, []);

  const [openAccordion, setOpenAccordion] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Lock body scroll when gallery modal is open
  useEffect(() => {
    if (isGalleryOpen || selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isGalleryOpen, selectedImage]);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const hamperCategories = [
    {
      icon: <FaPlaneArrival />,
      title: 'Transit & Arrival',
      tagline: 'The first impression, before the event even begins.',
      items: [
        {
          name: 'The Chauffeur Hamper',
          description: 'A branded welcome awaiting your guests in their car — cold facial towels for travel-fatigue relief, artisanal water, a handwritten welcome note, and signature mints.'
        },
        {
          name: 'The Check-In Kit',
          description: 'A curated registration experience — premium room key sleeve, a beautifully bound itinerary booklet, emergency contact card, and a QR code linking to your digital wedding app.'
        }
      ]
    },
    {
      icon: <FaBed />,
      title: 'Room & Accommodation',
      tagline: 'Transform every room into a personal sanctuary.',
      items: [
        {
          name: 'The Guest Room Hamper',
          description: 'A thoughtfully assembled welcome — roasted makhana, imported chocolates, an artisanal tea flight with three curated blends, and a personalized welcome letter.'
        },
        {
          name: 'The Presidential Suite Hamper',
          description: 'Our most elevated experience — champagne or bespoke mocktails, monogrammed bathrobes, fresh floral arrangements, crystal glassware, and a handwritten note.'
        }
      ]
    },
    {
      icon: <FaGem />,
      title: 'Function-Specific Favors',
      tagline: 'The most Instagrammed touchpoints of your event.',
      items: [
        {
          name: 'Haldi & Mehendi Hamper',
          description: 'Custom floral jewelry or designer sunglasses in a potli bag, paired with organic turmeric scrubs and hand fans matching your event’s color palette.'
        },
        {
          name: 'Sangeet Comfort Kit',
          description: 'The practical essentials your guests will silently thank you for — blister pads, hair ties, breath spray, heel protectors, and pocket perfume.'
        }
      ]
    },
    {
      icon: <FaGift />,
      title: 'Departure & Farewell',
      tagline: 'The last memory they carry home.',
      items: [
        {
          name: 'The Grand Return Gift',
          description: 'A lasting keepsake in a rigid magnetic-closure box — pashmina shawls, premium tableware, or curated perfume with personal handover.'
        },
        {
          name: 'The Sweet Goodbye Box',
          description: 'Premium shelf-stable sweets — dates, dry fruits, and artisanal treats in an assorted box selected for travel durability and presentation.'
        }
      ]
    }
  ];

  const tiers = [
    {
      name: 'Signature',
      tagline: 'Refined Essentials',
      description: 'Locally sourced, single-variety fills with clean, elegant packaging. Perfect for large guest counts where volume meets taste.',
      color: 'var(--card-sage)'
    },
    {
      name: 'Premium',
      tagline: 'The Full Experience',
      description: 'A balanced mix of artisanal essentials and elevated additions. Our most popular tier — where thoughtfulness meets luxury without excess.',
      color: 'var(--card-pink)'
    },
    {
      name: 'Regal',
      tagline: 'Uncompromised Luxury',
      description: 'Every hamper at its absolute finest. Monogrammed packaging, imported ingredients, crystal and silver accents. For flagship celebrations.',
      color: 'var(--card-mauve)'
    }
  ];

  // 3 photos for the beautiful main page collage
  const previewImages = [
    { src: '/images/hampers/blue-fabric-boxes.jpg', alt: 'Blue Fabric Wrapped Favors' },
    { src: '/images/hampers/green-floral-basket.jpg', alt: 'Green Basket with Golden Ribbon' },
    { src: '/images/hampers/wire-ribbon-basket.png', alt: 'Wire Basket' },
  ];

  // All 14 photos for the full asymmetric modal gallery
  const fullGalleryImages = [
    { src: '/images/hampers/blue-fabric-boxes.jpg', alt: 'Blue Fabric Boxes', title: 'The Ethereal Wrap', desc: 'Soft pastel blue pleated fabric wrapped meticulously around favors, topped with fresh baby\'s breath and yellow gerberas for a sun-kissed welcome.', size: 'large' },
    { src: '/images/hampers/green-floral-basket.jpg', alt: 'Green Basket', title: 'Emerald & Gold', desc: 'A bespoke cane and leatherette basket featuring velvet potlis tied with premium golden dori and a statement floral motif.', size: 'tall' },
    { src: '/images/hampers/wire-ribbon-basket.png', alt: 'Wire Basket', title: 'The Golden Arch', desc: 'A minimalist arched golden wire basket containing premium jars, soft florals, and finished with a custom satin ribbon.', size: 'medium' },
    { src: '/images/hampers/satmya-basket.jpg', alt: 'Satmya Basket', title: 'The Satmya Collection', desc: 'Sustainable hand-woven basket featuring premium artisanal boxes and delicate dried florals. Perfect for eco-conscious luxury.', size: 'small' },
    { src: '/images/hampers/wax-seals.jpg', alt: 'Wax Seals', title: 'The Heritage Seal', desc: 'Round kraft boxes elevated with chiffon ribbons, custom monogrammed wax seals, and sprigs of dried botanicals.', size: 'wide' },
    { src: '/images/hampers/woven-lids.jpg', alt: 'Woven Lids', title: 'Rustic Elegance', desc: 'Bohemian woven baskets with matching lids, detailed with macrame fringed edges, pastel roses, and custom wooden tags.', size: 'large' },
    { src: '/images/hampers/clear-box-chocs.jpg', alt: 'Clear Box', title: 'The Crystal Favor', desc: 'Modern transparent acrylic box showcasing Ferrero Rocher, gourmet chocolate, traditional jhumkas, and a vibrant scrunchie.', size: 'small' },
    { src: '/images/hampers/babys-breath.png', alt: 'Baby Breath', title: 'Ethereal Welcome', desc: 'A romantic wicker basket completely encircled by fresh baby\'s breath and finished with a sheer organza bow.', size: 'tall' },
    { src: '/images/hampers/pink-knot.png', alt: 'Pink Knot', title: 'The Furoshiki Wrap', desc: 'Traditional Japanese cloth wrapping technique in soft blush, paired with premium tea tins and preserved foliage.', size: 'medium' },
    { src: '/images/hampers/jute-bag-notebook.jpg', alt: 'Jute Bag Shells', title: 'Bohemian Retreat', desc: 'A chic jute tote adorned with a macrame flower and cowrie shell tassel. Filled with a notebook and vacation essentials.', size: 'wide' },
    { src: '/images/hampers/gold-mesh.jpg', alt: 'Gold Mesh', title: 'The Gilded Basket', desc: 'Elegant wicker bowl baskets wrapped in shimmering gold mesh and tied with a satin ribbon. A classic festive presentation.', size: 'small' },
    { src: '/images/hampers/red-ribbon.jpg', alt: 'Red Ribbon', title: 'Festive Grandeur', desc: 'A striking round seagrass tote featuring a bold crimson burlap band, custom gift tag, and filled with celebratory treats.', size: 'medium' },
    { src: '/images/hampers/birthday-hamper.jpg', alt: 'Birthday Bestie', title: 'The Bestie Box', desc: 'A curated pink monochrome box featuring Miss Dior perfume, delicate pearl jewelry, silk scrunchies, and a claw clip.', size: 'tall' },
    { src: '/images/hampers/jute-bag-nuts.png', alt: 'Nuts Jute Bag', title: 'The Classic Festive', desc: 'A structured jute bag with a clear window displaying premium cashews, almonds, and traditional silver bowls.', size: 'large' },
  ];

  return (
    <div className="hampers-page">

      {/* ===== SECTION 1: HERO ===== */}
      <section className="hamper-hero" style={{ background: 'var(--cream)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', background: 'radial-gradient(circle at center, transparent 0%, var(--cream) 75%), radial-gradient(circle at 80% 20%, rgba(164, 105, 127, 0.5) 0%, transparent 70%), radial-gradient(circle at 20% 80%, rgba(117, 141, 113, 0.5) 0%, transparent 70%)' }}></div>
          <img src="/images/hampers/birthday-hamper.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }} />
        </div>

        <div className="container" style={{ zIndex: 10, position: 'relative', width: '100%', textAlign: 'center' }}>
          <ScrollReveal>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--rose-deeper)', marginBottom: '20px' }}>
              Curated Gifting by Storyline
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="mega-heading" style={{ textAlign: 'center', marginBottom: '25px', lineHeight: 1 }}>
              <span className="text-reveal-mask"><span className="text-reveal-item delay-1">Every Gift,</span></span><br />
              <span className="text-reveal-mask"><span className="text-reveal-item delay-2">A Chapter</span></span><br />
              <span className="text-reveal-mask"><span className="text-reveal-item delay-3 accent">of Your Story.</span></span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="reveal-scale">
            <p style={{ textAlign: 'center', fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto 40px', lineHeight: 1.7, fontWeight: 500 }}>
              We don't just gift — we author an experience across every touchpoint of your event. From the first car ride to the final farewell, every hamper is a curated chapter.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="reveal-scale">
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <a href="#hamper-inquiry" className="btn btn-primary btn-lg hover-lift">
                Commission a Hamper
              </a>
              <a href="#hamper-gallery-preview" className="btn btn-outline btn-lg hover-lift">
                View Gallery
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION 2: THE HAMPER JOURNEY ===== */}
      <section className="section" style={{ background: 'var(--blush-soft)', textAlign: 'center' }}>
        <div className="container-narrow">
          <ScrollReveal>
            <SectionHeading
              label="The Philosophy"
              title="A Designed Journey, Not a Shopping List"
              description="Most gifting feels transactional — a box handed at the door. We treat your guest touchpoints as one authored experience. A signature scent in the car sachet reappears in the room hamper's tea blend. Consistency is what separates a gift from a story."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SECTION 3: HAMPER CATEGORIES (ACCORDION) ===== */}
      <section className="section" id="hamper-categories" style={{ background: 'var(--cream)' }}>
        <SectionHeading
          label="The Collection"
          title="Hamper Categories"
          description="Categories designed to cover every moment of the guest journey — from the first car ride to the last goodbye."
        />

        <div className="container-narrow" style={{ marginTop: 'var(--space-2xl)' }}>
          {hamperCategories.map((category, index) => (
            <ScrollReveal key={index}>
              <div className={`hamper-accordion-item ${openAccordion === index ? 'open' : ''}`}>
                <button className="hamper-accordion-trigger" onClick={() => toggleAccordion(index)}>
                  <div className="hamper-accordion-left">
                    <span className="hamper-accordion-icon">{category.icon}</span>
                    <div>
                      <h3 className="hamper-accordion-title">{category.title}</h3>
                      <p className="hamper-accordion-tagline">{category.tagline}</p>
                    </div>
                  </div>
                  <FaChevronDown className={`hamper-chevron ${openAccordion === index ? 'rotated' : ''}`} />
                </button>

                <div className={`hamper-accordion-body ${openAccordion === index ? 'expanded' : ''}`}>
                  <div className="hamper-items-grid">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="hamper-item-card">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== SECTION 4: GALLERY PREVIEW ===== */}
      <section className="section" id="hamper-gallery-preview" style={{ background: 'var(--white)' }}>
        <SectionHeading
          label="Our Work"
          title="The Hamper Gallery"
          description="A glimpse into the craftsmanship behind every box, basket, and bundle we deliver."
        />

        <div className="container-narrow" style={{ marginTop: 'var(--space-2xl)' }}>
          <ScrollReveal animation="reveal-scale">
            <div className="main-gallery-collage">
              {previewImages.map((img, index) => (
                <div key={index} onClick={() => setIsGalleryOpen(true)}>
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </ScrollReveal>
          
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <button 
              className="btn btn-outline btn-lg hover-lift" 
              onClick={() => setIsGalleryOpen(true)}
              style={{ padding: '15px 40px', borderColor: 'var(--rose-deeper)', color: 'var(--rose-deeper)' }}
            >
              View Full Hamper Gallery
            </button>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: INQUIRY CTA ===== */}
      <section className="section" id="hamper-inquiry" style={{ background: 'var(--card-pink)' }}>
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
            <ScrollReveal>
              <h2 className="mega-heading" style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: 'var(--space-md)' }}>Commission Your Hampers.</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                Tell us about your event, guest count, and vision. Our curation team will design a bespoke hamper journey tailored to your celebration.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <form className="hamper-inquiry-form" onSubmit={(e) => e.preventDefault()}>
              <div className="c-form-row">
                <div className="c-form-group">
                  <label>Full Name *</label>
                  <input type="text" className="c-input" placeholder="Your full name" required />
                </div>
                <div className="c-form-group">
                  <label>Email *</label>
                  <input type="email" className="c-input" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="c-form-row">
                <div className="c-form-group">
                  <label>Phone *</label>
                  <input type="tel" className="c-input" placeholder="+91 93071 95947" required />
                </div>
                <div className="c-form-group">
                  <label>Event Type</label>
                  <select className="c-input c-select">
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="festival">Festival / Diwali</option>
                    <option value="birthday">Birthday / Anniversary</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="c-form-row">
                <div className="c-form-group">
                  <label>Estimated Hamper Count</label>
                  <select className="c-input c-select">
                    <option value="">Select count</option>
                    <option value="1-50">1 - 50</option>
                    <option value="50-200">50 - 200</option>
                    <option value="200-500">200 - 500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>
                <div className="c-form-group">
                  <label>Preferred Tier</label>
                  <select className="c-input c-select">
                    <option value="">Select a tier</option>
                    <option value="signature">Signature</option>
                    <option value="premium">Premium</option>
                    <option value="regal">Regal</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
              </div>
              <div className="c-form-group" style={{ width: '100%' }}>
                <label>Tell us about your vision</label>
                <textarea className="c-input" rows="4" placeholder="Describe your event, theme, and any specific hamper ideas you have in mind..."></textarea>
              </div>
              <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)' }}>
                <button type="submit" className="btn btn-primary btn-lg hover-lift">Submit Inquiry</button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FULL GALLERY MODAL ===== */}
      <div className={`hamper-modal ${isGalleryOpen ? 'open' : ''}`}>
        <div className="hamper-modal-overlay" onClick={() => setIsGalleryOpen(false)}></div>
        
        <button className="hamper-modal-close" onClick={() => setIsGalleryOpen(false)}>
          <FaTimes />
        </button>

        <div className="hamper-modal-content" data-lenis-prevent="true">
          <div className="hamper-modal-header">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--text-dark)' }}>Premium Collection</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>An asymmetric showcase of our finest curated hampers.</p>
          </div>

          <div className="asymmetric-gallery">
            {fullGalleryImages.map((img, index) => (
              <div key={index} className={`asymmetric-item ${img.size}`}>
                <div 
                  className="asymmetric-img-wrapper" 
                  onClick={() => setSelectedImage(img)}
                  style={{ cursor: 'zoom-in' }}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <div className="asymmetric-img-hover-hint">View Full Image</div>
                </div>
                <div className="asymmetric-details">
                  <h3>{img.title}</h3>
                  <p>{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== LIGHTBOX FOR SINGLE FULL IMAGE ===== */}
      {selectedImage && (
        <div className="hamper-lightbox" onClick={() => setSelectedImage(null)}>
          <button className="hamper-lightbox-close" onClick={() => setSelectedImage(null)}>
            <FaTimes />
          </button>
          <img src={selectedImage.src} alt={selectedImage.alt} className="hamper-lightbox-img" onClick={(e) => e.stopPropagation()} />
          <div className="hamper-lightbox-caption">
            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.desc}</p>
          </div>
        </div>
      )}

    </div>
  );
}
