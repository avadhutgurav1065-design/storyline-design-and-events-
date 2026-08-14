import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function Team() {
  return (
    <div>
      <header className="team-hero">
        <div className="team-hero-inner">
          <ScrollReveal>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '22px', color: 'var(--gold)' }}>Storyline Design &amp; Events — The Team</span>
            <h1>The people who build it, <em style={{ color: 'var(--gold)' }}>before it's built.</em></h1>
            <p style={{ margin: '26px auto 0', maxWidth: '480px', color: 'var(--white-muted)', fontSize: '16px', lineHeight: '1.65' }}>
              Every Storyline event passes through the same six hands — from the first digital blueprint to the final overnight transformation.
            </p>
            <div style={{ width: '64px', height: '1px', background: 'var(--gold-muted)', margin: '34px auto 0' }}></div>
          </ScrollReveal>
        </div>
      </header>

      <section className="team-block" aria-labelledby="leadership-h">
        <ScrollReveal>
          <div className="team-section-head">
            <div>
              <span className="eyebrow" style={{ color: 'var(--gold)' }}>Plates 01–02</span>
              <h2 id="leadership-h">Leadership</h2>
            </div>
            <p className="desc">The two who set the blueprint before a single piece of iron is rigged.</p>
          </div>
        </ScrollReveal>

        <div className="leadership-grid">
          <ScrollReveal delay={100}>
            <article className="team-plate">
              <div className="team-plate-top">
                <div>
                  <span className="team-plate-index">Plate 01 — Founder</span>
                  <div className="team-plate-name">Avadhut Gurav</div>
                  <div className="team-plate-title">Production &amp; Technical Expert</div>
                </div>
                <div className="team-avatar" aria-hidden="true">
                  <img src="/images/team/avadhut.jpg" alt="Avadhut Gurav" onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerText = 'AG'; }} />
                </div>
              </div>
              <div className="team-dim-line"></div>
              <p className="team-plate-bio">The architectural force behind Storyline. Avadhut merges deep operational and systems expertise to plan the complex logistics behind luxury weddings and massive corporate launches alike — run on a strict zero-error philosophy, from structural rigging to full technical integration.</p>
              <div className="team-tags">
                <span className="team-tag">Large-Scale Operations</span>
                <span className="team-tag">Structural Integrity</span>
                <span className="team-tag">Systems Integration</span>
              </div>
              <div className="corner-br"></div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <article className="team-plate">
              <div className="team-plate-top">
                <div>
                  <span className="team-plate-index">Plate 02 — Co-Architect</span>
                  <div className="team-plate-name">Jayesh Mahajan</div>
                  <div className="team-plate-title">Design &amp; Animation Head</div>
                </div>
                <div className="team-avatar" aria-hidden="true">
                  <img src="/images/team/jayesh.jpg" alt="Jayesh Mahajan" onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerText = 'JM'; }} />
                </div>
              </div>
              <div className="team-dim-line"></div>
              <p className="team-plate-bio">The visual architect behind every Storyline build. Before a single truss is rigged, Jayesh renders the venue in full 3D — animated stage blueprints the client can walk through, so the final physical build matches the creative vision exactly.</p>
              <div className="team-tags">
                <span className="team-tag">3D Spatial Design</span>
                <span className="team-tag">Venue Rendering</span>
                <span className="team-tag">Technical Stage Mapping</span>
              </div>
              <div className="corner-br"></div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section className="team-block heads" aria-labelledby="heads-h">
        <ScrollReveal>
          <div className="team-section-head">
            <div>
              <span className="eyebrow" style={{ color: 'var(--gold)' }}>Plates 03–06</span>
              <h2 id="heads-h">The Heads</h2>
            </div>
            <p className="desc">Four specialists, each commanding one discipline of the build.</p>
          </div>
        </ScrollReveal>

        <div className="heads-grid">
          <ScrollReveal delay={100}>
            <article className="team-plate">
              <div className="team-plate-top">
                <div>
                  <span className="team-plate-index">Plate 03 — Hospitality &amp; Rituals</span>
                  <div className="team-plate-name">Aishwarya Thite</div>
                  <div className="team-plate-title">Hospitality &amp; Rituals Head</div>
                </div>
                <div className="team-avatar" aria-hidden="true">
                  <img src="/images/team/aishwarya.jpg" alt="Aishwarya Thite" onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerText = 'AT'; }} />
                </div>
              </div>
              <div className="team-dim-line"></div>
              <p className="team-plate-bio">The anchor of the luxury wedding division. Aishwarya manages seamless VIP check-ins and white-glove hospitality while orchestrating complex traditional rituals on a strict timeline — keeping the emotional narrative of the day completely uninterrupted.</p>
              <div className="team-tags">
                <span className="team-tag">VIP Guest Relations</span>
                <span className="team-tag">Ritual Coordination</span>
                <span className="team-tag">Event Flow</span>
              </div>
              <div className="corner-br"></div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <article className="team-plate">
              <div className="team-plate-top">
                <div>
                  <span className="team-plate-index">Plate 04 — Marketing &amp; Talent</span>
                  <div className="team-plate-name">Rutuja Thite</div>
                  <div className="team-plate-title">Marketing Head &amp; Celebrity Mgr</div>
                </div>
                <div className="team-avatar" aria-hidden="true">
                  <img src="/images/team/rutuja.jpg" alt="Rutuja Thite" onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerText = 'RT'; }} />
                </div>
              </div>
              <div className="team-dim-line"></div>
              <p className="team-plate-bio">The force behind Storyline's brand positioning and elite client relations. Rutuja manages high-profile corporate collaborations and acts as direct liaison for HNI and celebrity clients — with absolute discretion at every step.</p>
              <div className="team-tags">
                <span className="team-tag">PR &amp; Communications</span>
                <span className="team-tag">Talent Management</span>
                <span className="team-tag">Brand Positioning</span>
              </div>
              <div className="corner-br"></div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <article className="team-plate">
              <div className="team-plate-top">
                <div>
                  <span className="team-plate-index">Plate 05 — On-Site Execution</span>
                  <div className="team-plate-name">Devesh Agrawal</div>
                  <div className="team-plate-title">Production &amp; Execution Head</div>
                </div>
                <div className="team-avatar" aria-hidden="true">
                  <img src="/images/team/devesh.jpg" alt="Devesh Agrawal" onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerText = 'DA'; }} />
                </div>
              </div>
              <div className="team-dim-line"></div>
              <p className="team-plate-bio">The commander on the ground. When a venue needs a 12-hour overnight transformation, Devesh leads the charge — bridging digital blueprint and physical reality, directing fabrication, floral and staging crews to build every element safely and exactly to spec.</p>
              <div className="team-tags">
                <span className="team-tag">On-Site Fabrication</span>
                <span className="team-tag">Crew Management</span>
                <span className="team-tag">Rapid Transformation</span>
              </div>
              <div className="corner-br"></div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <article className="team-plate">
              <div className="team-plate-top">
                <div>
                  <span className="team-plate-index">Plate 06 — Logistics</span>
                  <div className="team-plate-name">Adesh Ghanwat</div>
                  <div className="team-plate-title">Logistics Head</div>
                </div>
                <div className="team-avatar" aria-hidden="true">
                  <img src="/images/team/adesh.jpg" alt="Adesh Ghanwat" onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerText = 'AG'; }} />
                </div>
              </div>
              <div className="team-dim-line"></div>
              <p className="team-plate-bio">The backbone of Storyline's supply chain. Moving structural iron trusses, delicate florals and heavy lighting rigs across Pune takes military-level precision — Adesh controls the timeline so the right assets hit the loading dock at the exact right minute.</p>
              <div className="team-tags">
                <span className="team-tag">Supply Chain</span>
                <span className="team-tag">Vendor Coordination</span>
                <span className="team-tag">Timeline Enforcement</span>
              </div>
              <div className="corner-br"></div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section className="cta" style={{ textAlign: 'center', padding: '110px 24px 130px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', marginTop: '60px', position: 'relative' }}>
        <ScrollReveal>
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>Now Booking 2026 / 2027</span>
          <h2 style={{ marginTop: '16px', fontSize: 'clamp(26px,4vw,40px)', maxWidth: '560px', margin: '16px auto 0' }}>Six specialists. One blueprint. Every build.</h2>
          <p style={{ color: 'var(--white-muted)', margin: '18px 0 36px', fontSize: '14.5px' }}>Bring this team to your wedding or your next corporate production.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Start Your Inquiry</Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
