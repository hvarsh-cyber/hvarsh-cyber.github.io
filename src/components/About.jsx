const EXPERIENCE = [
  {
    role: 'QA Automation Engineer',
    company: 'EchoStar / Dish Network Technologies',
    meta: 'Fortune 500 · Aug 2023 – Jan 2026',
    points: [
      'Built and scaled automation frameworks, eliminating 60+ hours of manual testing effort',
      'Built an automated security defect-reporting tool (Python, Robot Framework, JIRA API) — cut manual review effort by 70%',
      'Applied OWASP security practices validating APIs for Apple and Amazon B2B integrations',
      'Designed CI/CD pipelines with security controls for reliable, secure deployments',
    ],
  },
];

const CURRENT_LEARNING = {
  completed: [
    { unit: 'Cyber Operations', focus: ['Insider Threats', 'Social Engineering', 'Human-Centric Security', 'Security Awareness'] },
  ],
  upcoming: ['Cryptography', 'Software Security', 'Network Security', 'Cloud Security'],
};

function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <p className="section-eyebrow">// whoami</p>
        <h2 className="section-title">Background</h2>
        <p className="about-text">
          QA Automation Engineer with 2.6 years of experience at a Fortune 500
          company, currently completing a Master of Cybersecurity in Melbourne.
          My background is in building automated systems that catch problems
          before a human has to — test automation, defect detection, CI/CD.
          I'm applying that same instinct to security: automated vulnerability
          scanning, anomaly detection, and DevSecOps tooling, while formally
          building out security fundamentals through my Master's.
        </p>

        <div className="timeline">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <p className="timeline-meta">{exp.company} · {exp.meta}</p>
                <ul>
                  {exp.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="learning-journey">
          <h3 className="learning-journey-title">Current Learning Journey</h3>
          <p className="learning-journey-meta">Master of Cybersecurity · Monash University, Melbourne</p>

          <div className="learning-columns">
            <div className="learning-col">
              <p className="learning-col-label">
                <span className="learning-dot learning-dot-done" />
                Completed
              </p>
              {CURRENT_LEARNING.completed.map((c) => (
                <div key={c.unit} className="learning-unit">
                  <p className="learning-unit-name">{c.unit}</p>
                  <div className="learning-tags">
                    {c.focus.map((f) => (
                      <span key={f} className="learning-tag">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="learning-col">
              <p className="learning-col-label">
                <span className="learning-dot learning-dot-upcoming" />
                Upcoming
              </p>
              <div className="learning-tags">
                {CURRENT_LEARNING.upcoming.map((u) => (
                  <span key={u} className="learning-tag learning-tag-upcoming">{u}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
