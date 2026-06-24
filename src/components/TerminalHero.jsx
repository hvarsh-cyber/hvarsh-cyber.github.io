import { useEffect, useState } from 'react';

const TYPEWRITER_TEXT = 'Security Automation Engineer';

function TerminalHero() {
  const [displayed, setDisplayed] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
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
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-identity visible">

          <h1 className="hero-name">Himavarsha Sathyanarayana</h1>

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