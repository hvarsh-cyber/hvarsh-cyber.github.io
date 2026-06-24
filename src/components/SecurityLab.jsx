const LAB_ITEMS = [
  {
    status: 'In progress',
    title: 'Cloud Security Posture Tool',
    detail: 'AWS misconfiguration scanner benchmarked against CIS standards - enumerates S3 buckets, security groups, and IAM policies via boto3, flagging findings with structured severity ratings.',
    tags: ['Python', 'AWS', 'boto3', 'CIS Benchmarks'],
    category: 'Detection Engineering',
  },
  {
    status: 'In progress',
    title: 'TryHackMe - Pre-Security Path',
    detail: 'Working through foundational offensive and defensive security fundamentals. Building structured baseline before SOC-focused defensive rooms.',
    tags: ['SOC Fundamentals', 'Network Security', 'Linux', 'Web Security'],
    category: 'Security Research',
  },
  {
    status: 'Next up',
    title: 'ISC2 Certified in Cybersecurity (CC)',
    detail: 'Entry-level security certification covering security principles, access controls, network security, and incident response. Scheduled to sit before end of 2026.',
    tags: ['ISC2', 'Security Fundamentals', 'Certification'],
    category: 'Certification Track',
  },
];

function SecurityLab() {
  return (
    <section id="lab" className="section section-alt">
      <div className="container">
        <p className="section-eyebrow">// security_lab.sh</p>
        <h2 className="section-title">Security Lab</h2>
        <p className="lab-sub">Active research, tooling, and certification work in progress.</p>
        <div className="lab-grid">
          {LAB_ITEMS.map((item) => (
            <div key={item.title} className="lab-card">
              <div className="lab-card-top">
                <span className="lab-category">{item.category}</span>
                <span className="lab-status-badge">
                  <span className="building-pulse" />
                  {item.status}
                </span>
              </div>
              <h3 className="lab-title">{item.title}</h3>
              <p className="lab-detail">{item.detail}</p>
              <div className="tag-row">
                {item.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecurityLab;
