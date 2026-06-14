import React, { useEffect, useRef } from 'react';
import '../App.css';

/* ── RSA palette (same as Rates) ── */
const INK_PALETTE = [
  [0,   200,  77],   // green
  [255, 182,  18],   // gold/yellow
  [222,  56,  49],   // red
  [0,    35, 149],   // blue
  [0,     0,   0],   // black
];

/* ── tunables — softer, fewer, faster than Rates ── */
const SPAWN_P    = 0.03;
const MIN_R      = 10;
const MAX_R      = 22;
const SPLAT_LIFE = 100;

class InkSplat {
  constructor(W, H) {
    this.x         = Math.random() * W;
    this.y         = Math.random() * H;
    this.r         = MIN_R + Math.random() * (MAX_R - MIN_R);
    this.age       = 0;
    this.maxAge    = SPLAT_LIFE + ~~(Math.random() * 30);
    this.baseAlpha = 0.45 + Math.random() * 0.30;
    this.rgb       = INK_PALETTE[~~(Math.random() * INK_PALETTE.length)];

    /* softer: fewer rays, shorter, no sharp tips */
    const n = 2 + ~~(Math.random() * 3);   // 2–4 rays only
    this.rays = Array.from({ length: n }, (_, i) => ({
      angle: (Math.PI * 2 * i) / n + (Math.random() - 0.5) * 0.8,
      len:   this.r * (0.6 + Math.random() * 1.2),   // short rays
      w:     0.4 + Math.random() * 0.8,
    }));
  }

  draw(ctx, prog) {
    this.age++;
    const { age, maxAge, r, x, y, rays, baseAlpha, rgb } = this;
    const fadeIn = 8, fadeOut = 20;
    const env = age < fadeIn
      ? age / fadeIn
      : age > maxAge - fadeOut
        ? (maxAge - age) / fadeOut
        : 1;
    const a = env * baseAlpha * prog;
    if (a < 0.005) return;

    const [r_, g_, b_] = rgb;
    const ink = `rgba(${r_},${g_},${b_},${a.toFixed(3)})`;

    ctx.save();

    /* soft main drop — filled circle only, no hard edge */
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0,   `rgba(${r_},${g_},${b_},${a.toFixed(3)})`);
    grad.addColorStop(0.6, `rgba(${r_},${g_},${b_},${(a * 0.7).toFixed(3)})`);
    grad.addColorStop(1,   `rgba(${r_},${g_},${b_},0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();

    /* short soft rays */
    rays.forEach(ray => {
      const x1 = x + Math.cos(ray.angle) * r * 0.7;
      const y1 = y + Math.sin(ray.angle) * r * 0.7;
      const x2 = x + Math.cos(ray.angle) * (r + ray.len);
      const y2 = y + Math.sin(ray.angle) * (r + ray.len);
      ctx.strokeStyle = ink;
      ctx.lineWidth   = ray.w;
      ctx.lineCap     = 'round';
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    });

    ctx.restore();
  }

  dead() { return this.age >= this.maxAge; }
}

/* ══════════════════════════════════════════════════════ */
const About = ({ id }) => {
  const secRef  = useRef(null);
  const cvRef   = useRef(null);
  const splats  = useRef([]);
  const progRef = useRef(0);
  const rafId   = useRef(null);

  useEffect(() => {
    const sec = secRef.current;
    const cv  = cvRef.current;
    const ctx = cv.getContext('2d');

    const fit = () => { cv.width = sec.offsetWidth; cv.height = sec.offsetHeight; };
    fit();
    window.addEventListener('resize', fit);

    const onScroll = () => {
      const { top, height } = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      progRef.current = Math.max(0, Math.min(1,
        (vh - top) / (vh * 0.48 + height * 0.22)
      ));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const tick = () => {
      const p = progRef.current;
      const W = cv.width, H = cv.height;
      ctx.clearRect(0, 0, W, H);

      if (p > 0.02 && Math.random() < p * SPAWN_P)
        splats.current.push(new InkSplat(W, H));

      splats.current.forEach(s => s.draw(ctx, p));
      splats.current = splats.current.filter(s => !s.dead());

      rafId.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener('resize', fit);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section id={id} ref={secRef} className="about-section about-splatter">
      <canvas ref={cvRef} className="rain-canvas" />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">About Betana</h2>

        <p className="about-description">
          Betana is a registered digital solutions studio based in Gqeberha, Eastern Cape.
          We design and build web applications, data systems, and software products for
          businesses across South Africa - combining technical depth with a clear focus
          on delivering real business value.
        </p>
        <p className="about-description" style={{ marginTop: '1rem' }}>
          We are a lean, skilled team bringing together design, engineering, business
          analysis, and strategic thinking on every engagement. Every project we take on
          is treated as a partnership - we invest in understanding your business before
          we write a single line of code.
        </p>

        <h3 className="sub-header-pink">How We Work</h3>
        <div className="hire-me-list">
          {[
            { title: "Transparent Communication", desc: "We keep clients informed at every stage and set honest expectations upfront." },
            { title: "Quality Over Speed",        desc: "We prioritise clean, maintainable solutions that hold up long after delivery." },
            { title: "Deadline Accountability",   desc: "Reliable planning and honest timelines — we deliver what we commit to." },
            { title: "Honest Capability",         desc: "We are upfront about what we can build today and where we are growing." },
          ].map((item, idx) => (
            <div className="hire-item" key={idx}>
              <i className="far fa-check-circle hire-icon"></i>
              <div className="hire-text">
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="sub-header-pink">Engagement</h3>
        <div className="availability-grid">
          <div className="availability-card">
            <div className="card-header"><i className="far fa-clock card-icon"></i><h4>Working Hours</h4></div>
            <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
            <p className="sub-text">Weekends available on request</p>
          </div>
          <div className="availability-card">
            <div className="card-header"><i className="far fa-calendar-alt card-icon"></i><h4>Project Types</h4></div>
            <p>Freelance, contract, or retainer</p>
            <p className="sub-text">Short and long-term engagements</p>
          </div>
          <div className="availability-card">
            <div className="card-header"><i className="far fa-calendar-check card-icon"></i><h4>Start Date</h4></div>
            <p>Available for new projects</p>
            <p className="sub-text">Contact us to discuss timelines</p>
          </div>
        </div>

        <h3 className="sub-header-pink">Location</h3>
        <div className="location-grid">
          <div className="location-item">
            <i className="fas fa-desktop location-icon"></i>
            <div className="location-text"><h5>Remote-First</h5><p>Fully equipped for remote delivery with reliable infrastructure.</p></div>
          </div>
          <div className="location-item">
            <i className="fas fa-building location-icon"></i>
            <div className="location-text"><h5>Hybrid / On-Site</h5><p>Available for on-site work within South Africa by arrangement.</p></div>
          </div>
          <div className="location-item">
            <i className="fas fa-map-marker-alt location-icon"></i>
            <div className="location-text"><h5>Based In</h5><p>Gqeberha (Port Elizabeth), Eastern Cape.</p></div>
          </div>
        </div>

        <div className="meet-team-cta">
          <p>Want to know who's behind the work?</p>
          <a href="/projects#team" className="btn btn-projects">Meet the Team →</a>
        </div>
      </div>
    </section>
  );
};

export default About;