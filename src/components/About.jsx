const EXPERIENCE = [
  {
    role: 'Security Automation Engineer',
    company: 'EchoStar / Dish Network Technologies',
    meta: 'Fortune 500 · Aug 2023 – Jan 2026',
    points: [
      'Built and scaled security-focused automation frameworks, eliminating 60+ hours of manual testing effort across critical business systems',
      'Developed an automated security defect-reporting tool (Python, Robot Framework, JIRA API) - reduced manual security review effort by 70%',
      'Applied OWASP security practices validating APIs for Apple and Amazon B2B integrations, identifying security misconfigurations before production',
      'Designed CI/CD pipelines with embedded security controls, enabling reliable and secure deployments across the delivery lifecycle',
    ],
  },
  {
    role: 'Master of Cybersecurity',
    company: 'Monash University, Melbourne',
    meta: 'Mar 2026 – Dec 2027 (in progress)',
    points: [
      'Completed: Cyber Operations - insider threats, SOC operations, threat hunting, and incident response',
      'Completed: Computer Architecture & Networks - networking, routing, and network security foundations',
      'Currently enrolled: Software Security, Cryptography, Network & Cloud Security',
    ],
  },
  {
    role: 'Security Research & Labs',
    company: 'TryHackMe · Independent Projects',
    meta: 'Ongoing',
    points: [
      'Building a CI/CD-integrated vulnerability scanner (SecAudit) that auto-raises GitHub Issues for OWASP-mapped findings',
      'Developed AI Log Anomaly Detector - hybrid ML + rule-based system detecting brute force, scanning, and odd-hour access patterns',
      'Working through TryHackMe Pre-Security path as a structured baseline before SOC-focused defensive rooms',
    ],
  },
];

function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <p className="section-eyebrow">// whoami</p>
        <h2 className="section-title">Background</h2>
        <p className="about-text">
          Security Automation Engineer with 2.6 years of professional experience at EchoStar / Dish Network,
          a Fortune 500 company. My background is building automated systems that catch problems before they
          reach production - security defect detection, API validation, CI/CD pipelines with security controls.
          I'm now completing a Master of Cybersecurity at Monash University, applying that same engineering
          instinct to vulnerability scanning, threat detection, and DevSecOps tooling.
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
      </div>
    </section>
  );
}

export default About;
