import { Mail } from 'lucide-react';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.74.4-1.26.72-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5Z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
  </svg>
);

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-status">
          <span className="status-dot" />
          Open to internships & graduate roles in Australia
        </div>
        <div className="footer-links">
          <a href="https://github.com/hvarsh-cyber" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="https://linkedin.com/in/himavarsh-s-0a215b213" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href="mailto:himavarshs329@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
