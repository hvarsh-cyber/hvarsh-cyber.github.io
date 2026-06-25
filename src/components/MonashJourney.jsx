import { useEffect, useRef } from 'react';

const UNITS = [
  {
    status: 'awaiting',
    code: 'FIT9136',
    title: 'Introduction to Python',
    topics: ['Python', 'Automation', 'Problem Solving', 'Data Structures'],
  },
  {
    status: 'awaiting',
    code: 'FIT9137',
    title: 'Computer Architecture and Networks',
    topics: ['Networking', 'Routing', 'Computer Systems', 'Network Security Foundations'],
  },
  {
    status: 'awaiting',
    code: 'FIT5129',
    title: 'Cyber Operations',
    topics: ['Threat Hunting', 'SOC Operations', 'Incident Response', 'Security Monitoring'],
  },
  {
    status: 'awaiting',
    code: 'FIT5057',
    title: 'Project Management',
    topics: ['Agile', 'Risk Management', 'Cost Management', 'Leadership'],
  },
  {
    status: 'upcoming',
    code: null,
    title: 'Cryptography',
    topics: ['Symmetric and Asymmetric Encryption', 'PKI', 'Hash Functions', 'Protocol Security'],
  },
  {
    status: 'upcoming',
    code: null,
    title: 'Software Security',
    topics: ['Secure SDLC', 'Vulnerability Analysis', 'Code Review', 'Exploit Techniques'],
  },
  {
    status: 'upcoming',
    code: null,
    title: 'Network Security',
    topics: ['Firewall Design', 'Intrusion Detection', 'VPN', 'Network Monitoring'],
  },
  {
    status: 'upcoming',
    code: null,
    title: 'Cloud Security',
    topics: ['Cloud Architecture', 'Zero Trust', 'IAM', 'Cloud Misconfigurations'],
  },
];

const STATUS_META = {
  awaiting: { label: 'Completed · Awaiting Results', color: 'var(--amber)' },
  upcoming: { label: 'Upcoming', color: '#60A5FA' },
};

const STATUS_ORDER = ['awaiting', 'upcoming'];

function MonashJourney() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal-card');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const grouped = STATUS_ORDER.reduce((acc, s) => {
    acc[s] = UNITS.filter(u => u.status === s);
    return acc;
  }, {});

  return (
    <section id="monash" className="section section-alt" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow">// monash_university.msc</p>
        <h2 className="section-title">What I'm Studying</h2>

        <div className="monash-headline reveal-card">
          <p className="monash-degree">Master of Cybersecurity</p>
          <p className="monash-uni">Monash University, Melbourne</p>
          <p className="monash-dates">Mar 2026 to Dec 2027</p>
        </div>

        <div className="monash-grid">
          {STATUS_ORDER.map((status, groupIdx) => {
            const units = grouped[status];
            const meta = STATUS_META[status];
            if (!units.length) return null;
            return (
              <div key={status} className="monash-group">
                <div className="monash-group-label">
                  <span className="monash-dot" style={{ background: meta.color }} />
                  <span style={{ color: meta.color, fontSize: '13px', fontFamily: 'var(--mono)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {meta.label}
                  </span>
                </div>
                <div className="monash-cards">
                  {units.map((unit, i) => (
                    <div
                      key={unit.title}
                      className={`monash-card monash-card-${status} reveal-card`}
                      style={{ transitionDelay: `${(groupIdx * 4 + i) * 80}ms` }}
                    >
                      {unit.code && <span className="monash-code">{unit.code}</span>}
                      <h3 className="monash-unit-title">{unit.title}</h3>
                      <div className="monash-topics">
                        {unit.topics.map(t => (
                          <span key={t} className={`monash-topic monash-topic-${status}`}>{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="monash-graduation reveal-card" style={{ transitionDelay: '640ms' }}>
          <div className="monash-grad-text">
            <p className="monash-grad-label">Expected Graduation</p>
            <p className="monash-grad-date">December 2027</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MonashJourney;
