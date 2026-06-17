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
    severity: 'HIGH',
    title: 'SecAudit — Automated Security Vulnerability Scanner',
    tags: ['Python', 'GitHub Actions', 'DevSecOps'],
    summary: 'Automated scanner that detects OWASP-mapped vulnerabilities and auto-creates GitHub Issues for every finding.',
    details: 'Scans live web applications for missing security headers, HTTPS enforcement, and insecure cookie configurations. Runs on a CI/CD pipeline via GitHub Actions — on every code push and on a weekly schedule — and automatically raises severity-rated GitHub Issues for each vulnerability found, mirroring a JIRA defect-automation tool built professionally at EchoStar.',
    metrics: [
      { value: 'Weekly', label: 'Scan schedule' },
      { value: 'CI/CD', label: 'GitHub Actions' },
      { value: 'Auto', label: 'Issue creation' },
    ],
    lessons: 'The same pattern I used professionally for JIRA defect automation translates directly to security tooling — auto-creating tickets for findings is what makes a scanner actually get used, instead of producing a report nobody reads.',
    future: 'Add deduplication logic so repeated scans of the same target don\'t create duplicate issues for the same finding.',
    github: 'https://github.com/hvarsh-cyber/secaudit',
  },
  {
    id: 2,
    severity: 'HIGH',
    title: 'AI Log Anomaly Detector',
    tags: ['Python', 'scikit-learn', 'Machine Learning'],
    summary: 'Hybrid rule-based + ML system that detects brute force attacks, endpoint scanning, and odd-hour access in server logs.',
    details: 'Uses an Isolation Forest model for anomaly scoring, combined with security detection rules as the deciding logic. First version had a false-positive problem from a fixed contamination assumption — redesigned across three iterations so rules determine what counts as a threat, and the ML score is used purely to rank severity. Caught all three injected attack patterns with zero false positives on the final version.',
    metrics: [
      { value: '531', label: 'Logs tested' },
      { value: '3/3', label: 'Attacks caught' },
      { value: '0', label: 'False positives' },
    ],
    lessons: 'ML is good at finding statistical outliers, not at deciding what a human should care about. Letting security rules make the threat decision — and using the ML score only to rank severity — fixed both false positives and false negatives.',
    future: 'Extend the rule set to cover lateral movement patterns, and test against a larger, more varied log dataset.',
    github: 'https://github.com/hvarsh-cyber/ai-log-anomaly-detector',
  },
  {
    id: 3,
    severity: 'PLANNED',
    title: 'Cloud Security Posture Tool',
    tags: ['Python', 'AWS', 'boto3'],
    summary: 'AWS misconfiguration scanner benchmarked against CIS standards.',
    details: 'In progress. Will enumerate S3 buckets, security groups, and IAM policies via boto3, flagging misconfigurations against CIS Benchmarks and producing a structured findings report.',
    metrics: null,
    lessons: null,
    future: 'Currently scoping CIS Benchmark coverage and boto3 permission requirements before starting implementation.',
    github: null,
  },
];

const severityColor = {
  HIGH: 'var(--red)',
  MEDIUM: 'var(--amber)',
  PLANNED: 'var(--text-tertiary)',
};

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="project-card">
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
          <p>{project.details}</p>

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
        <p className="section-eyebrow">// issues — open</p>
        <h2 className="section-title">Projects</h2>
        <div className="project-list">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
