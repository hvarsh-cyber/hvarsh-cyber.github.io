import { useEffect, useRef } from 'react';

const ACHIEVEMENTS = [
  {
    title: 'Spot Award, Dev-Fi Test Automation',
    org: 'Dish Network Technologies · Sep 2024',
    date: 'Sep 2024',
    description: 'Awarded for quick learning ability and saving significant manual effort through Dev-Fi test automation. Signed by Sudeep Kumar Dash, Manager Software Quality.',
    tag: 'AWARD',
    metric: '🏆',
  },
  {
    title: '1st Place, 24-Hour Hackathon',
    org: 'JSSSTU · May 2022',
    date: 'May 2022',
    description: 'Won 1st place building Stack Truck, a full-stack logistics platform, in a 24-hour hackathon sponsored by Sahaj Software.',
    tag: 'WIN',
    metric: '🥇',
  },
  {
    title: 'Onshore Manager Recognitions',
    org: 'EchoStar · FY2023 to 2026',
    date: 'FY2023 to 2026',
    description: 'Recognised twice by onshore managers for automating critical workflows and consistent delivery quality across cross-functional teams.',
    tag: 'RECOGNITION',
    metric: '🎖️',
  },
  {
    title: '40%+ Reduction in Manual Execution Effort',
    org: 'EchoStar · FY2023 to 2026',
    date: 'FY2023 to 2026',
    description: 'Automation scripts delivered over 40% reduction in manual execution and regression coverage effort, freeing the team for security and exploratory testing.',
    tag: 'IMPACT',
    metric: '📈',
  },
];

const tagColor = {
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
              <div className="achievement-metric">{a.metric}</div>
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
