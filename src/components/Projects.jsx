import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.74.4-1.26.72-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5Z"/>
  </svg>
);

const PROJECTS = [
  {
    id: 1,
    severity: 'FLAGSHIP',
    title: 'AI Log Anomaly Detector',
    tags: ['Python', 'scikit-learn', 'Machine Learning', 'Security Engineering'],
    summary: 'Hybrid rule-based + ML system that detects brute force attacks, endpoint scanning, and odd-hour automated access in server logs. 3/3 attacks caught, 0 false positives.',
    screenshots: [
      { src: '/images/screenshots/anomaly-run.png', caption: 'Model run - 531 logs processed, 31 anomalies detected' },
      { src: '/images/screenshots/anomaly-detections.png', caption: 'Detection output - brute force and odd-hour access flagged' },
    ],
    details: 'Built a hybrid detection system combining Isolation Forest anomaly scoring with deterministic security rules. The key architectural decision: rules decide what counts as a threat; the ML score ranks severity only. This solved the false-positive problem from the first version, which flagged 10% of normal traffic. Tested against 531 log entries with three injected attack patterns - all caught, zero false alarms.',
    architecture: [
      'Log ingestion & parsing - structured extraction from raw server logs',
      'Rule engine - deterministic detection for brute force, endpoint scanning, and odd-hour access',
      'Isolation Forest model - statistical anomaly scoring used as severity signal only, not decision layer',
      'Severity ranking - ML score prioritises findings from rules that fired',
    ],
    metrics: [
      { value: '531', label: 'Logs tested' },
      { value: '3/3', label: 'Attacks caught' },
      { value: '0', label: 'False positives' },
    ],
    impact: 'Demonstrates the difference between ML-as-decision (high false positives) and ML-as-ranking (reliable signal). Rebuilt across 3 iterations - each fixing a specific detection flaw.',
    lessons: 'ML is good at finding statistical outliers, not at deciding what a human should care about. Letting security rules decide the threat - and using ML only to rank severity - fixed both false positives and false negatives.',
    future: 'Extend rule set to cover lateral movement patterns, test against larger varied log datasets.',
    github: 'https://github.com/hvarsh-cyber/ai-log-anomaly-detector',
  },
  {
    id: 2,
    severity: 'HIGH',
    title: 'SecAudit - Automated Security Vulnerability Scanner',
    tags: ['Python', 'GitHub Actions', 'DevSecOps', 'OWASP'],
    summary: 'CI/CD-integrated scanner that detects OWASP-mapped vulnerabilities and auto-creates GitHub Issues for every finding - runs on every push and weekly.',
    screenshots: [
      { src: '/images/screenshots/secaudit-scan.png', caption: 'SecAudit scan output - vulnerabilities detected and issues raised' },
    ],
    details: 'Scans live web applications for missing security headers, HTTPS enforcement, and insecure cookie configurations. Runs on a CI/CD pipeline via GitHub Actions - on every code push and weekly - and automatically raises severity-rated GitHub Issues for each vulnerability found. Mirrors the JIRA defect-automation tool built professionally at EchoStar.',
    architecture: null,
    metrics: [
      { value: 'Weekly', label: 'Scan schedule' },
      { value: 'CI/CD', label: 'GitHub Actions' },
      { value: 'Auto', label: 'Issue creation' },
    ],
    impact: null,
    lessons: 'Auto-creating tickets for findings is what makes a scanner actually get used, instead of producing a report nobody reads.',
    future: 'Add deduplication logic so repeated scans don\'t create duplicate issues for the same finding.',
    github: 'https://github.com/hvarsh-cyber/secaudit',
  },
  {
    id: 3,
    severity: 'PLANNED',
    title: 'Cloud Security Posture Tool',
    tags: ['Python', 'AWS', 'boto3', 'CIS Benchmarks'],
    summary: 'AWS misconfiguration scanner benchmarked against CIS standards - S3, security groups, and IAM policy enumeration.',
    screenshots: [],
    details: 'In progress. Will enumerate S3 buckets, security groups, and IAM policies via boto3, flagging misconfigurations against CIS Benchmarks and producing a structured severity-rated findings report.',
    architecture: null,
    metrics: null,
    impact: null,
    lessons: null,
    future: 'Currently scoping CIS Benchmark coverage and boto3 permission requirements.',
    github: null,
  },
  {
    id: 4,
    severity: 'WIN',
    title: 'Stack Truck - 1st Place, 24-Hour Hackathon',
    tags: ['Node.js', 'MongoDB Atlas', 'EJS', 'Bootstrap', 'JavaScript'],
    summary: 'Full-stack logistics platform enabling goods pooling and real-time driver-client coordination. Won 1st place at Sahaj Software\'s 24-hour hackathon.',
    screenshots: [],
    details: 'Built in 24 hours at the Institution\'s Innovation Council hackathon at JSS Science and Technology University, Mysuru (May 2022). Stack Truck let multiple shippers pool goods into shared truck loads and gave drivers and clients a real-time channel to coordinate pickups, routes, and delivery status.',
    architecture: null,
    metrics: [
      { value: '1st', label: 'Place, 24hr hackathon' },
      { value: '24hrs', label: 'Build time' },
      { value: 'Full-stack', label: 'Node + MongoDB' },
    ],
    impact: null,
    lessons: 'Shipping end-to-end in 24 hours taught me to prioritise the riskiest unknowns first and cut scope ruthlessly.',
    future: null,
    github: null,
  },
];

const severityColor = {
  FLAGSHIP: 'var(--accent)',
  HIGH: 'var(--amber)',
  PLANNED: 'var(--text-tertiary)',
  WIN: '#2da44e',
};

function ScreenshotGallery({ screenshots }) {
  const [active, setActive] = useState(0);
  if (!screenshots || screenshots.length === 0) return null;

  return (
    <div className="project-gallery">
      <div className="project-screenshot">
        <img src={screenshots[active].src} alt={screenshots[active].caption} />
      </div>
      {screenshots[active].caption && (
        <p className="screenshot-caption">{screenshots[active].caption}</p>
      )}
      {screenshots.length > 1 && (
        <div className="screenshot-tabs">
          {screenshots.map((s, i) => (
            <button
              key={i}
              className={`screenshot-tab ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              Screenshot {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`project-card ${project.severity === 'FLAGSHIP' ? 'project-flagship' : ''}`}>
      <button
        className="project-header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="severity-badge"
          style={{ color: severityColor[project.severity], borderColor: severityColor[project.severity] }}
        >
          {project.severity}
        </span>
        <div className="project-header-text">
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </div>
        <ChevronDown className={`chevron ${open ? 'open' : ''}`} size={18} />
      </button>

      {open && (
        <div className="project-body">
          <ScreenshotGallery screenshots={project.screenshots} />

          <p>{project.details}</p>

          {project.architecture && (
            <div className="project-architecture">
              <span className="project-note-label">Architecture</span>
              <ul className="arch-list">
                {project.architecture.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          )}

          {project.metrics && (
            <div className="project-metrics">
              {project.metrics.map((m) => (
                <div key={m.label} className="project-metric">
                  <div className="project-metric-value">{m.value}</div>
                  <div className="project-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="tag-row">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {project.impact && (
            <div className="project-note project-note-impact">
              <span className="project-note-label">Business impact</span>
              <p>{project.impact}</p>
            </div>
          )}

          {project.lessons && (
            <div className="project-note">
              <span className="project-note-label">Lessons learned</span>
              <p>{project.lessons}</p>
            </div>
          )}

          {project.future && (
            <div className="project-note">
              <span className="project-note-label">Next up</span>
              <p>{project.future}</p>
            </div>
          )}

          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <GithubIcon /> View repository <ExternalLink size={12} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-eyebrow">// issues - open</p>
        <h2 className="section-title">Projects</h2>
        <div className="project-list">
          {PROJECTS.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}

export default Projects;
