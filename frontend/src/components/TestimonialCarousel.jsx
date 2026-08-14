import { useState, useEffect } from 'react';

export default function TestimonialCarousel({ testimonials = [] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (!testimonials.length) {
    // Fallback testimonials when API is not connected
    const fallbackTestimonials = [
      {
        id: 1,
        clientName: 'Priya & Rohit Sharma',
        role: 'Wedding Clients',
        quote: 'Storyline did not just decorate our wedding — they engineered an experience. The floral ceiling was the single most photographed element across three days.',
        rating: 5,
      },
      {
        id: 2,
        clientName: 'Anand Kulkarni',
        role: 'VP Events, Tech Corp India',
        quote: 'We needed a 500-seat stage built overnight with zero room for error. Storyline delivered a flawless setup — rigging, LED integration, sound — all tested and ready by 6 AM.',
        rating: 5,
      },
      {
        id: 3,
        clientName: 'Meera & Aditya Patil',
        role: 'Wedding Clients',
        quote: 'Our mandap was a piece of architecture, not decoration. The woodwork, the floral pillars, the lighting — every detail was considered.',
        rating: 5,
      },
    ];
    testimonials = fallbackTestimonials;
  }

  const goTo = (index) => setCurrent(index);

  return (
    <div className="testimonial-carousel" id="testimonial-carousel">
      <div className="testimonial-card" style={{ minHeight: '320px' }}>
        <div className="testimonial-stars">
          {'★'.repeat(testimonials[current]?.rating || 5)}
        </div>
        <div className="testimonial-quote-mark">"</div>
        <p className="testimonial-text">
          {testimonials[current]?.quote}
        </p>
        <div className="testimonial-author">
          {testimonials[current]?.clientName}
        </div>
        <div className="testimonial-role">
          {testimonials[current]?.role}
        </div>
      </div>

      {testimonials.length > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              style={{
                width: current === index ? '32px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                background: current === index ? 'var(--gold)' : 'var(--charcoal-light)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
