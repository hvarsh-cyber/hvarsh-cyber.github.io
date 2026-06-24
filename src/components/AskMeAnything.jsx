import { useState, useRef, useEffect } from 'react';

const SUGGESTED_QUESTIONS = [
  "Tell me about your experience",
  "What cybersecurity projects have you built?",
  "Why are you transitioning into cybersecurity?",
  "What are you studying at Monash?",
  "What certifications do you have?",
  "What technologies do you work with?",
  "Tell me about your AI Log Anomaly Detector",
  "What makes you different from other graduates?",
  "Are you available for internships?",
  "What is your visa status?",
  "Tell me about your hackathon win",
  "What was your Spot Award for?",
];

const KNOWLEDGE_BASE = [
  {
    keywords: ['experience', 'background', 'work history', 'echostar', 'dish', 'professional', 'career', 'job'],
    answer: `I worked as a Security Automation Engineer at EchoStar / Dish Network Technologies - a Fortune 500 company - for 2.6 years (Aug 2023 – Jan 2026).

My work involved building automation frameworks, validating APIs for Apple and Amazon B2B integrations, designing CI/CD pipelines with security controls, and developing defect detection tooling. I automated over 300 test cases and built an automated security defect-reporting tool that cut manual review effort by 70%.

I received a Spot Award in Sep 2024 for automating critical business workflows, and two further onshore manager recognitions for delivery and ownership.`,
  },
  {
    keywords: ['projects', 'portfolio', 'built', 'github', 'secaudit', 'scanner', 'vulnerability'],
    answer: `My cybersecurity portfolio includes:

• AI Log Anomaly Detector - hybrid ML + rule-based system detecting brute force, endpoint scanning, and odd-hour access. 531 logs tested, 3/3 attacks caught, 0 false positives.

• SecAudit - CI/CD-integrated vulnerability scanner that detects OWASP-mapped issues and auto-creates GitHub Issues for every finding. Runs on every push and weekly.

• Cloud Security Posture Tool (in progress) - AWS misconfiguration scanner benchmarked against CIS standards using boto3.

• Stack Truck - 1st place at a 24-hour hackathon (JSSSTU, May 2022). Full-stack logistics platform built with Node.js and MongoDB.

All active projects are on GitHub at github.com/hvarsh-cyber.`,
  },
  {
    keywords: ['transition', 'why cybersecurity', 'switch', 'change', 'move', 'from qa', 'why security'],
    answer: `My background is in automation engineering - building systems that automatically identify defects and validate software quality at scale.

Cybersecurity felt like a natural progression because the same instinct applies directly: instead of finding bugs before production, I'm finding vulnerabilities before attackers do. The tooling is different, but the problem-solving pattern is identical.

I'm now completing a Master of Cybersecurity at Monash University while building security-focused projects - vulnerability scanners, anomaly detection systems, and DevSecOps tooling - to close the gap between my automation background and security engineering.`,
  },
  {
    keywords: ['monash', 'studying', 'masters', 'university', 'degree', 'education', 'units', 'subjects', 'coursework'],
    answer: `I'm completing a Master of Cybersecurity at Monash University (Mar 2026 – Dec 2027).

Completed:
• Introduction to Python
• Computer Architecture & Networks

Completed, awaiting results:
• Cyber Operations - threat hunting, SOC operations, incident response
• Project Management - Agile, risk management, cost management

Upcoming:
• Cryptography
• Software Security
• Network & Cloud Security

Expected graduation: December 2027.`,
  },
  {
    keywords: ['certifications', 'certified', 'owasp', 'ibm', 'practitest', 'credentials', 'qualifications'],
    answer: `My certifications include:

• OWASP Top 10 for LLM Applications
• Cloud Security and Audit Fundamentals (AWS, Azure, GCP)
• Cryptography and Network Security
• Cybersecurity Foundations
• PractiTest Certified User (Aug 2024)
• EchoStar AI Aware Graduate
• IBM / EchoStar AI Academy - 8 courses covering Generative AI, Prompt Engineering, Foundation Models, and Responsible AI

I'm currently planning to sit ISC2 Certified in Cybersecurity (CC) before end of 2026.`,
  },
  {
    keywords: ['technologies', 'tech stack', 'tools', 'skills', 'python', 'programming', 'languages', 'frameworks'],
    answer: `My core stack:

Languages: Python (primary), JavaScript, SQL, Robot Framework

Security tooling: OWASP testing, vulnerability scanning, security automation, API security validation, anomaly detection

DevOps / CI/CD: GitHub Actions, CI/CD pipelines, automated deployment security controls

Data & ML: scikit-learn, pandas, Isolation Forest (anomaly detection)

Cloud: AWS (boto3), security posture assessment

Other: MongoDB, Git, JIRA API integration, automated reporting

I lean toward building tools rather than using them - most of my projects are things I built myself rather than off-the-shelf solutions.`,
  },
  {
    keywords: ['anomaly', 'log detector', 'isolation forest', 'machine learning', 'ml', 'brute force', 'flagship'],
    answer: `The AI Log Anomaly Detector is my flagship security project.

It's a hybrid system combining deterministic security rules with an Isolation Forest ML model. The key architectural decision: security rules decide what counts as a threat; the ML score is used only to rank severity. This solved the false-positive problem from earlier versions.

Results on 531 test log entries:
• 3/3 injected attack patterns detected (brute force, endpoint scanning, odd-hour access)
• 0 false positives
• Built across 3 iterations - each fixing a specific detection flaw

The design principle mirrors how good SIEM tools work: deterministic rules gate alerts, ML prioritises them.

GitHub: github.com/hvarsh-cyber/ai-log-anomaly-detector`,
  },
  {
    keywords: ['different', 'unique', 'stand out', 'why hire', 'advantage', 'value', 'offer', 'graduate'],
    answer: `Most cybersecurity graduates enter the field with theoretical knowledge and lab experience. I come in with 2.6 years of production engineering at a Fortune 500 company.

That means I've already worked in large-scale systems under real delivery pressure, built automation tools used across teams, validated APIs for Apple and Amazon integrations, and managed defect workflows at enterprise scale.

The transition isn't a career change - it's applying the same automation instinct to a security problem. I build things: the projects in my portfolio are real tools, not coursework exercises.`,
  },
  {
    keywords: ['available', 'internship', 'graduate role', 'hire', 'vacationer', 'start date', 'when'],
    answer: `I'm available now for internships and vacationer programs, and available for graduate roles from December 2027 (expected graduation).

I have full working rights in Australia on a student visa. I'm based in Clayton, Melbourne, and open to hybrid or onsite roles in Melbourne, as well as remote opportunities.

Best way to reach me: himavarshs329@gmail.com or LinkedIn at linkedin.com/in/himavarsh-s-0a215b213.`,
  },
  {
    keywords: ['visa', 'work rights', 'authorization', 'authorisation', 'right to work', 'student visa'],
    answer: `I have full working rights in Australia on a student visa. No sponsorship is required for internships or part-time work during my studies.

For graduate roles (post-December 2027), I'd be happy to discuss visa arrangements directly. Feel free to reach out at himavarshs329@gmail.com.`,
  },
  {
    keywords: ['hackathon', 'stack truck', 'first place', '1st place', 'jssstu', 'sahaj'],
    answer: `In May 2022, I won 1st place at the Institution's Innovation Council 24-hour hackathon at JSSSTU, Mysuru - sponsored by Sahaj Software.

The project was Stack Truck: a full-stack platform enabling goods pooling and real-time coordination between truck drivers and clients, aimed at reducing idle truck capacity in last-mile logistics.

Built in 24 hours with Node.js, MongoDB Atlas, EJS, and Bootstrap. The win came down to shipping a working end-to-end product - auth, real-time messaging, and data model - under a hard deadline.`,
  },
  {
    keywords: ['spot award', 'award', 'recognition', 'shoutout', 'dish award'],
    answer: `I received a Spot Award from Dish Network Technologies in September 2024, awarded by Sudeep Kumar Dash (Manager, Software Quality).

The award was for automating critical-path test flows for Apple and OFSLL integrations - specifically for demonstrating quick learning ability and saving significant manual testing effort on Dev-Fi test automation.

I also received two further onshore manager shoutouts during FY2024–2025 for ownership, timely delivery, and handling critical production situations.`,
  },
  {
    keywords: ['contact', 'email', 'reach', 'linkedin', 'get in touch', 'connect'],
    answer: `Best ways to reach me:

• Email: himavarshs329@gmail.com
• LinkedIn: linkedin.com/in/himavarsh-s-0a215b213
• GitHub: github.com/hvarsh-cyber
• Portfolio: hvarsh-cyber.github.io

I'm actively looking for cybersecurity internships and graduate roles in Australia - happy to chat.`,
  },
  {
    keywords: ['resume', 'cv', 'download', 'pdf'],
    answer: `My resume is available as a PDF - click the "Resume" button at the top of the page to download it.

It covers my professional experience at EchoStar / Dish Network, my Monash Master of Cybersecurity, all projects, certifications, and achievements.`,
  },
];

const FALLBACKS = [
  "I can only answer questions about Himavarsha's background, projects, and experience. Try one of the suggested questions, or reach out directly at himavarshs329@gmail.com.",
  "That's outside what I know about. Try asking about projects, experience, certifications, or availability - or contact Himavarsha directly.",
  "I'm not sure about that one. I know a lot about cybersecurity projects, Monash coursework, and professional experience though - try asking about those.",
];

function sanitize(str) {
  return str.replace(/<[^>]*>/g, '').trim().slice(0, 300).toLowerCase();
}

function getAnswer(question) {
  const q = sanitize(question);
  for (const entry of KNOWLEDGE_BASE) {
    if (entry.keywords.some(k => q.includes(k))) {
      return entry.answer;
    }
  }
  return FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)];
}

function TypingMessage({ text, onDone }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    // Type character by character but in chunks for speed
    const interval = setInterval(() => {
      if (i < text.length) {
        const chunk = Math.min(4, text.length - i);
        setDisplayed(text.slice(0, i + chunk));
        i += chunk;
      } else {
        clearInterval(interval);
        onDone?.();
      }
    }, 12);
    return () => clearInterval(interval);
  }, [text]);

  return <p style={{ whiteSpace: 'pre-line' }}>{displayed}</p>;
}

export default function AskMeAnything() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  function handleSend(question) {
    const q = (question || input).replace(/<[^>]*>/g, '').trim();
    if (!q || typing) return;

    setInput('');
    setShowSuggestions(false);
    setMessages(prev => [...prev, { role: 'user', text: q }]);
    setTyping(true);

    // Small delay to feel natural
    setTimeout(() => {
      const answer = getAnswer(q);
      setMessages(prev => [...prev, { role: 'assistant', text: answer, typing: true }]);
    }, 400);
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function handleReset() {
    setMessages([]);
    setShowSuggestions(true);
    setInput('');
    setTyping(false);
  }

  return (
    <section id="ask" className="section">
      <div className="container">
        <p className="section-eyebrow">// ask_hima --interactive</p>
        <h2 className="section-title">Ask Me Anything</h2>
        <p className="ask-sub">
          Have a recruiter question? Ask below - I'll answer based on my actual experience and background.
        </p>

        {showSuggestions && messages.length === 0 && (
          <div className="ask-suggestions">
            {SUGGESTED_QUESTIONS.map((s) => (
              <button
                key={s}
                className="ask-suggestion-btn"
                onClick={() => handleSend(s)}
                disabled={typing}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {messages.length > 0 && (
          <div className="ask-thread">
            {messages.map((m, i) => (
              <div key={i} className={`ask-msg ask-msg-${m.role}`}>
                <span className="ask-msg-label">{m.role === 'user' ? '> you' : '> hima'}</span>
                {m.role === 'assistant' && m.typing ? (
                  <TypingMessage
                    text={m.text}
                    onDone={() => {
                      setTyping(false);
                      setMessages(prev =>
                        prev.map((msg, idx) =>
                          idx === i ? { ...msg, typing: false } : msg
                        )
                      );
                    }}
                  />
                ) : (
                  <p style={{ whiteSpace: 'pre-line' }}>{m.text}</p>
                )}
              </div>
            ))}
            {typing && messages[messages.length - 1]?.role === 'user' && (
              <div className="ask-msg ask-msg-assistant">
                <span className="ask-msg-label">&gt; hima</span>
                <p className="ask-typing">
                  <span className="ask-dot" /><span className="ask-dot" /><span className="ask-dot" />
                </p>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        )}

        <div className="ask-input-row">
          <input
            className="ask-input"
            type="text"
            placeholder="Ask about projects, experience, availability..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            disabled={typing}
            maxLength={300}
            aria-label="Ask a question"
          />
          <button
            className="ask-send-btn"
            onClick={() => handleSend()}
            disabled={typing || !input.trim()}
          >
            Ask →
          </button>
        </div>

        {messages.length > 0 && (
          <button className="ask-reset-btn" onClick={handleReset}>
            ↺ Ask another question
          </button>
        )}

        <p className="ask-disclaimer">
          Responses based on my actual experience and portfolio content.
        </p>
      </div>
    </section>
  );
}
