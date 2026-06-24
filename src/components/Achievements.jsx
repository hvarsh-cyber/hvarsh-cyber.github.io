import { useEffect, useRef } from 'react';

const ACHIEVEMENTS = [
  {
    title: 'Spot Award, Dev-Fi Test Automation',
    org: 'EchoStar / Dish Network Technologies',
    date: 'Sep 2024',
    description: 'Awarded for demonstrating quick learning ability and saving significant manual effort through Dev-Fi test automation. Signed by Sudeep Kumar Dash, Manager Software Quality.',
    tag: 'AWARD',
    metric: '★',
  },
  {
    title: '1st Place, 24-Hour Hackathon',
    org: 'JSS Science and Technology University, Mysuru',
    date: 'May 2022',
    description: 'Won 1st place building Stack Truck, a full-stack logistics platform enabling goods pooling and real-time driver-client coordination. Built in 24 hours with Node.js and MongoDB.',
    tag: 'WIN',
    metric: '★',
  },
  {
    title: 'Onshore Manager Recognitions',
    org: 'EchoStar / Dish Network Technologies',
    date: 'FY2024 to 2025',
    description: 'Recognised twice by onshore managers for automating critical workflows, consistent delivery quality, and upholding company values across cross-functional teams.',
    tag: 'RECOGNITION',
    metric: '★',
  },
  {
    title: '40%+ Reduction in Manual Execution Effort',
    org: 'EchoStar / Dish Network Technologies',
    date: 'FY2023 to FY2026',
    description: 'Automation scripts developed across critical regression suites delivered over 40% reduction in manual execution and regression coverage effort, freeing the team to focus on exploratory and security testing.',
    tag: 'IMPACT',
    metric: '★',
  },


];

const tagColor = {
  CURRENT: 'var(--accent)',
  EMPLOYER: 'var(--blue)',
  AWARD: 'var(--amber)',
  WIN: '#2da44e',
  IMPACT: 'var(--accent)',
  RECOGNITION: 'var(--blue)',
};

function Achievements() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1 }
    );
    const cards = ref.current?.querySelectorAll('.achievement-card');
    cards?.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="section section-alt" ref={ref}>
      <div className="container">
        <p className="section-eyebrow">// recognition.log</p>
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <div
              key={a.title}
              className="achievement-card reveal-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="achievement-card-top">
                <span className="severity-badge" style={{ color: tagColor[a.tag], borderColor: tagColor[a.tag] }}>
                  {a.tag}
                </span>
                <span className="achievement-date">{a.date}</span>
              </div>
              {a.metric && (
                <div className="achievement-metric" style={{ color: tagColor[a.tag] }}>
                  {a.metric}
                </div>
              )}
              <h3 className="achievement-title">{a.title}</h3>
              <p className="achievement-org">{a.org}</p>
              <p className="achievement-desc">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
