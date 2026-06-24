import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const CERTIFICATIONS = [
  {
    title: 'OWASP Top 10 for LLM Applications',
    issuer: 'LinkedIn Learning',
    images: ['/images/certs/owasp-llm.png'],
  },
  {
    title: 'Cloud Security and Audit Fundamentals',
    issuer: 'AWS, Microsoft Azure, Google Cloud · LinkedIn Learning',
    images: ['/images/certs/cloud-security-audit.png'],
  },
  {
    title: 'Cryptography and Network Security',
    issuer: 'LinkedIn Learning',
    images: ['/images/certs/cryptography-network-security.png'],
  },
  {
    title: 'Cybersecurity Foundations',
    issuer: 'LinkedIn Learning',
    images: ['/images/certs/cybersecurity-foundations.png'],
  },
  {
    title: 'PractiTest Certified User',
    issuer: 'PractiTest · Aug 2024',
    images: ['/images/certs/practitest.png'],
  },
  {
    title: 'EchoStar AI Aware Graduate',
    issuer: 'EchoStar / Dish Network',
    images: ['/images/certs/echostar-ai-aware.png'],
  },
  {
    title: 'Spot Award, Dev-Fi Test Automation',
    issuer: 'Dish Network Technologies · Sep 2024',
    images: ['/images/certs/spot-award.png'],
    badge: 'AWARD',
    badgeColor: '#E8A33D',
  },
  {
    title: '1st Place, 24-Hour Hackathon',
    issuer: 'Sahaj Software · JSSSTU · May 2022',
    images: ['/images/certs/hackathon-certificate.png'],
    badge: 'WIN',
    badgeColor: '#2da44e',
  },
  {
    title: 'IBM / EchoStar AI Academy',
    issuer: '8 courses completed',
    images: [
      '/images/certs/ibm/ibm-1.png',
      '/images/certs/ibm/ibm-2.png',
      '/images/certs/ibm/ibm-3.png',
      '/images/certs/ibm/ibm-4.png',
      '/images/certs/ibm/ibm-5.png',
      '/images/certs/ibm/ibm-6.png',
      '/images/certs/ibm/ibm-7.png',
      '/images/certs/ibm/ibm-8.png',
    ],
  },
];

function CertModal({ cert, onClose }) {
  const [index, setIndex] = useState(0);
  if (!cert) return null;

  const multi = cert.images.length > 1;
  const next = () => setIndex((i) => (i + 1) % cert.images.length);
  const prev = () => setIndex((i) => (i - 1 + cert.images.length) % cert.images.length);

  return (
    <div className="cert-modal-overlay" onClick={onClose}>
      <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cert-modal-close" onClick={onClose} aria-label="Close"><X size={20} /></button>
        <img src={cert.images[index]} alt={`${cert.title}`} />
        {multi && (
          <>
            <button className="cert-modal-nav cert-modal-nav-prev" onClick={prev}><ChevronLeft size={22} /></button>
            <button className="cert-modal-nav cert-modal-nav-next" onClick={next}><ChevronRight size={22} /></button>
            <div className="cert-modal-counter">{index + 1} / {cert.images.length}</div>
          </>
        )}
        <div className="cert-modal-caption">
          <p className="cert-title">{cert.title}</p>
          <p className="cert-issuer">{cert.issuer}</p>
        </div>
      </div>
    </div>
  );
}

function Certifications() {
  const [active, setActive] = useState(null);

  return (
    <section id="certifications" className="section">
      <div className="container">
        <p className="section-eyebrow">// credentials</p>
        <h2 className="section-title">Certifications and Awards</h2>
        <div className="cert-grid">
          {CERTIFICATIONS.map((cert) => (
            <button
              key={cert.title}
              className="cert-card cert-card-with-image"
              onClick={() => setActive(cert)}
            >
              <div className="cert-image-wrap">
                <img src={cert.images[0]} alt={cert.title} />
                {cert.images.length > 1 && (
                  <span className="cert-count-badge">+{cert.images.length - 1} more</span>
                )}
                {cert.badge && (
                  <span className="cert-badge" style={{ background: cert.badgeColor }}>{cert.badge}</span>
                )}
              </div>
              <div className="cert-card-text">
                <p className="cert-title">{cert.title}</p>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <CertModal cert={active} onClose={() => setActive(null)} />
    </section>
  );
}

export default Certifications;
