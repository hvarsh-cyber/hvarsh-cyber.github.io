const STATS = [
  { label: 'Experience', value: '2.6+ yrs', sub: 'QA Automation' },
  { label: 'Test cases', value: '300+', sub: 'Automated' },
  { label: 'Employer', value: 'Fortune 500', sub: 'EchoStar / Dish' },
  { label: 'Currently', value: 'Monash', sub: 'M.Cybersecurity', live: true },
];

function TerminalHero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-identity visible">
          <p className="hero-eyebrow">// QA automation engineer → cybersecurity</p>
          <h1 className="hero-name">Himavarsha Sathyanarayana</h1>
          <p className="hero-sub">
            2.6 years as a QA Automation Engineer at a Fortune 500 company.
            Now completing a Master of Cybersecurity at Monash University,
            building systems that find vulnerabilities automatically.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View projects</a>
            <a href="/Himavarsha_Sathyanarayana_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Resume</a>
            <a href="https://github.com/hvarsh-cyber" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub →</a>
          </div>
        </div>

        <div className="stat-bar" role="group" aria-label="Quick facts">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-cell">
              <div className="stat-label">
                {stat.live && <span className="stat-live-dot" />}
                {stat.label}
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TerminalHero;
