const BUILDING = [
  {
    label: 'In progress',
    title: 'Cloud Security Posture Tool',
    detail: 'AWS misconfiguration scanner benchmarked against CIS standards — enumerates S3, security groups, and IAM policies via boto3.',
  },
  {
    label: 'Next up',
    title: 'ISC2 Certified in Cybersecurity (CC)',
    detail: 'Entry-level security certification covering security principles, network security, and incident response fundamentals. Free to sit — on my list to start.',
  },
  {
    label: 'Current unit',
    title: 'Monash — Cyber Operations',
    detail: 'Coursework on insider threats, social engineering, and human-centric security — feeding directly into the writing section below.',
  },
];

function CurrentlyBuilding() {
  return (
    <section id="building" className="section section-alt">
      <div className="container">
        <p className="section-eyebrow">// in_progress</p>
        <h2 className="section-title">Currently Building</h2>
        <div className="building-grid">
          {BUILDING.map((item) => (
            <div key={item.title} className="building-card">
              <span className="building-label">
                <span className="building-pulse" />
                {item.label}
              </span>
              <h3 className="building-title">{item.title}</h3>
              <p className="building-detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentlyBuilding;
