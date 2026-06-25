import { useEffect, useState, useRef } from 'react';

const TYPEWRITER_TEXT = 'Security Automation Engineer';

const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 0.5,
  speedX: (Math.random() - 0.5) * 0.015,
  speedY: (Math.random() - 0.5) * 0.015,
  opacity: Math.random() * 0.5 + 0.1,
}));

function ParticleNetwork() {
  const canvasRef = useRef(null);
  const particlesRef = useRef(PARTICLES.map(p => ({ ...p })));
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const pts = particlesRef.current;

      // Move particles
      pts.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = 100;
        if (p.x > 100) p.x = 0;
        if (p.y < 0) p.y = 100;
        if (p.y > 100) p.y = 0;
      });

      // Draw connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = (pts[i].x - pts[j].x) * width / 100;
          const dy = (pts[i].y - pts[j].y) * height / 100;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(pts[i].x * width / 100, pts[i].y * height / 100);
            ctx.lineTo(pts[j].x * width / 100, pts[j].y * height / 100);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      pts.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x * width / 100, p.y * height / 100, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

function TerminalHero() {
  const [displayed, setDisplayed] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    let i = 0;
    const interval = setInterval(() => {
      if (i < TYPEWRITER_TEXT.length) {
        setDisplayed(TYPEWRITER_TEXT.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 55);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!done) return;
    const blink = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(blink);
  }, [done]);

  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      <ParticleNetwork />

      {/* Glow orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="container hero-inner" style={{ position: 'relative', zIndex: 1 }}>
        <div className={`hero-identity ${visible ? 'visible' : ''}`}>

          <div className="hero-status-bar">
            <span className="hero-status-dot" />
            <span>Available for internships and graduate roles · Melbourne, AU</span>
          </div>

          <h1 className="hero-name">Himavarsha<br />Sathyanarayana</h1>

          <p className="hero-tagline">
            <span>{displayed}</span>
            <span className={`hero-cursor ${cursorVisible ? 'visible' : 'hidden'}`}>_</span>
          </p>

          <p className="hero-sub">
            2.6 years building automated systems at EchoStar / Dish Network, a Fortune 500 company.
            Now completing a Master of Cybersecurity at Monash University, Melbourne.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View projects</a>
            <a href="/Himavarsha_Sathyanarayana_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Resume</a>
            <a href="https://github.com/hvarsh-cyber" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub</a>
          </div>

          <div className="hero-badges">
            <div className="hero-badge">
              <span className="hero-badge-value hero-badge-live">
                <span className="stat-live-dot" />
                2.6 yrs
              </span>
              <span className="hero-badge-label">Fortune 500 Experience</span>
            </div>
            <div className="hero-badge-divider" />
            <div className="hero-badge">
              <span className="hero-badge-value hero-badge-live">
                <span className="stat-live-dot" />
                Monash University
              </span>
              <span className="hero-badge-label">Master of Cybersecurity</span>
            </div>
            <div className="hero-badge-divider" />
            <div className="hero-badge">
              <span className="hero-badge-value hero-badge-live">
                <span className="stat-live-dot" />
                Melbourne
              </span>
              <span className="hero-badge-label">Open to Work</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TerminalHero;
