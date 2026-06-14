import React, { useEffect, useRef } from 'react';
import '../App.css';
import flagVideo from '../assets/videos/Flag.mp4';

const INK_PALETTE = [
  [0,   200,  77],
  [255, 182,  18],
  [222,  56,  49],
  [0,    35, 149],
  [0,     0,   0],
];
const SPAWN_P    = 0.03;
const MIN_R      = 10;
const MAX_R      = 22;
const SPLAT_LIFE = 150;

class InkSplat {
  constructor(W, H) {
    this.x         = Math.random() * W;
    this.y         = Math.random() * H;
    this.r         = MIN_R + Math.random() * (MAX_R - MIN_R);
    this.age       = 0;
    this.maxAge    = SPLAT_LIFE + ~~(Math.random() * 30);
    this.baseAlpha = 0.45 + Math.random() * 0.30;
    this.rgb       = INK_PALETTE[~~(Math.random() * INK_PALETTE.length)];
    const n = 2 + ~~(Math.random() * 3);
    this.rays = Array.from({ length: n }, (_, i) => ({
      angle: (Math.PI * 2 * i) / n + (Math.random() - 0.5) * 0.8,
      len:   this.r * (0.6 + Math.random() * 1.2),
      w:     0.4 + Math.random() * 0.8,
    }));
  }

  draw(ctx, prog) {
    this.age++;
    const { age, maxAge, r, x, y, rays, baseAlpha } = this;
    const fadeIn = 8, fadeOut = 20;
    const env = age < fadeIn
      ? age / fadeIn
      : age > maxAge - fadeOut
        ? (maxAge - age) / fadeOut
        : 1;
    const a = env * baseAlpha * prog;
    if (a < 0.005) return;

    const [r_, g_, b_] = this.rgb;
    ctx.save();

    /* soft radial gradient drop — same as About */
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0,   `rgba(${r_},${g_},${b_},${a.toFixed(3)})`);
    grad.addColorStop(0.6, `rgba(${r_},${g_},${b_},${(a * 0.7).toFixed(3)})`);
    grad.addColorStop(1,   `rgba(${r_},${g_},${b_},0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();

    /* short soft rays, no tip droplets */
    const ink = `rgba(${r_},${g_},${b_},${a.toFixed(3)})`;
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

export default function Rates({ id }) {
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

      if (p > 0.02) {
        if (Math.random() < p * SPAWN_P)
          splats.current.push(new InkSplat(W, H));
        if (p > 0.52 && Math.random() < (p - 0.52) * SPAWN_P * 0.65)
          splats.current.push(new InkSplat(W, H));
      }

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
    <section id={id} ref={secRef} className="rates-section rates-rain">
      <canvas ref={cvRef} className="rain-canvas" />
      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>

        <h2 className="section-title">Pricing</h2>

        <div className="hourly-rate-container">
          <div className="hourly-card">
            <p className="rate-label">Hourly Rate</p>
            <h3 className="rate-value">R150 – R200 <span>/ hour</span></h3>
            <p className="rate-note">Rate depends on scope and complexity of the project.</p>
          </div>
        </div>

        <h3 className="package-title">Package Pricing</h3>

        <div className="package-grid">
          {[
            { name: 'Basic Website',                price: 'R2,500 – R4,000',  desc: 'Simple static site, a few pages' },
            { name: 'Portfolio Website',            price: 'R3,500 – R6,000',  desc: 'Personal or professional portfolio with projects' },
            { name: 'Custom Web Application',       price: 'R8,000+',          desc: 'Custom functionality, backend logic, integrations' },
            { name: 'Data Engineering & Analytics', price: 'R6,000+',          desc: 'Pipelines, dashboards, and analytical systems' },
            { name: 'UX Design & Prototyping',      price: 'R3,500+',          desc: 'Wireframes, Figma prototypes, usability testing' },
            { name: 'Custom Tools & Maintenance',   price: 'R150 – R200 / hr', desc: 'Automation scripts, internal tools, ongoing support' },
          ].map(({ name, price, desc }) => (
            <div className="package-card" key={name}>
              <p className="p-name">{name}</p>
              <h4 className="p-price">{price}</h4>
              <p className="p-desc">{desc}</p>
            </div>
          ))}
        </div>

        <p className="rates-footer-text">
          Prices are in ZAR and based on scope, complexity, and value delivered.
          We're open to discussion depending on your project requirements.
        </p>
<br/><br/><br/><br/>
        {/* Flag video — centred, small, at the bottom of the section */}
        <div className="rates-flag-wrap">
          <video
            className="rates-flag-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={flagVideo} type="video/mp4" />
          </video>
          
        </div>
        <br/>
        <p className="Proudly-SA">Proudly South African</p>

      </div>
    </section>
  );
}