import { useState, useRef, useEffect } from 'react';

const QA_BANK = [
  {
    keywords: ['strongest', 'best project', 'favorite project', 'favourite project', 'proudest'],
    answer: "The AI Log Anomaly Detector. Not because the code is fancy — because I broke it twice before getting it right. First version flagged 10% of normal traffic as 'suspicious' for no real reason. Fixing that taught me more about security engineering than building it did."
  },
  {
    keywords: ['available', 'start date', 'when can you start', 'availability', 'notice period'],
    answer: "Available now for internships, and graduating end of 2027 for graduate roles. Currently working part-time at 7-Eleven on Mondays, so I'm used to juggling commitments."
  },
  {
    keywords: ['visa', 'sponsor', 'work rights', 'work authorization', 'authorisation'],
    answer: "Full working rights in Australia on a student visa. Happy to discuss specifics directly — just reach out via email or LinkedIn."
  },
  {
    keywords: ['experience', 'background', 'work history', 'echostar', 'dish network'],
    answer: "2.6 years as a QA Automation Engineer at EchoStar/Dish Network, a Fortune 500 company — built automated defect-reporting tools, validated APIs for Apple and Amazon integrations, and designed CI/CD pipelines with security controls. Now applying that automation background to cybersecurity through my Master's at Monash."
  },
  {
    keywords: ['python', 'programming', 'language', 'code', 'tech stack', 'skills'],
    answer: "Python is the main one — used it for both SecAudit and the anomaly detector. Also comfortable with JavaScript, SQL, and Robot Framework from my QA automation background."
  },
  {
    keywords: ['secaudit', 'vulnerability scanner', 'scanner'],
    answer: "SecAudit scans live websites for OWASP-mapped vulnerabilities and automatically opens GitHub Issues for every finding — same automation pattern I used for JIRA at EchoStar, just rebuilt as an open-source security tool."
  },
  {
    keywords: ['anomaly', 'machine learning', 'ml', 'log detector', 'ai project'],
    answer: "A hybrid rule-based and ML system that catches brute force attacks, endpoint scanning, and odd-hour automated access in server logs. The interesting part wasn't the model — it was figuring out that security rules, not the ML score, should decide what counts as a real threat."
  },
  {
    keywords: ['certification', 'certificate', 'owasp', 'security+', 'qualification'],
    answer: "OWASP Top 10 for LLM Applications certified. Currently working toward CompTIA Security+ and ISC2 CC to round things out."
  },
  {
    keywords: ['education', 'monash', 'degree', 'masters', 'university', 'study'],
    answer: "Master of Cybersecurity at Monash University, Melbourne, expected completion late 2027. Bachelor of Engineering in Information Science from JSS Science and Technology University, India, with 8.93/10 CGPA."
  },
  {
    keywords: ['hackathon', 'stack truck', 'sahaj'],
    answer: "Won 1st place at the Sahaj Software 24-hour hackathon, leading backend development for a logistics platform — Node.js and MongoDB under serious time pressure."
  },
  {
    keywords: ['contact', 'email', 'reach', 'linkedin', 'hire', 'get in touch'],
    answer: "Best ways to reach me: himavarshs329@gmail.com, or connect on LinkedIn — links are in the footer below."
  },
  {
    keywords: ['7-eleven', '7 eleven', 'retail', 'part time job'],
    answer: "Yes, I work Monday night shifts at 7-Eleven alongside my Master's. Keeps me sharp on reliability and juggling commitments — also great for staying awake during late-night debugging sessions."
  },
];

const FUNNY_FALLBACKS = [
  "That one's above my pay grade — I'm a static React component, not a fortune teller.",
  "I've checked my training data (which is just a JS array) and I've got nothing on that. Try asking about Python, OWASP, or why I debug things at 2am.",
  "Bold question. Unfortunately I only know things Himavarsha actually told me to know. Try asking about his projects instead.",
  "I'm flattered you think I know that, but I'm basically a glorified if-statement. Ask me about SecAudit instead — that one I'm good at.",
  "404: Answer not found. Unlike Himavarsha's scanner, I don't auto-generate a GitHub Issue for this. Try a different question?",
  "That's outside my detection rules — and unlike the anomaly detector, I don't have an ML model to fall back on. Ask about his skills or projects instead.",
];

function getResponse(question) {
  const q = question.toLowerCase();
  for (const entry of QA_BANK) {
    if (entry.keywords.some((kw) => q.includes(kw))) {
      return entry.answer;
    }
  }
  return FUNNY_FALLBACKS[Math.floor(Math.random() * FUNNY_FALLBACKS.length)];
}

const SUGGESTIONS = [
  "What's his strongest project?",
  "Is he available for internships?",
  "What's his tech stack?",
  "Tell me about his EchoStar experience",
];

function AskMeAnything() {
  const [messages, setMessages] = useState([
    { role: 'system', text: "Ask me anything about Himavarsha — his projects, experience, or availability. I'll do my best. If I don't know, I'll at least be funny about it." }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (text) => {
    const question = (text ?? input).trim();
    if (!question) return;

    const answer = getResponse(question);
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: question },
      { role: 'bot', text: answer },
    ]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <section id="ask" className="section section-alt">
      <div className="container">
        <p className="section-eyebrow">// query --recruiter-mode</p>
        <h2 className="section-title">Ask Me Anything</h2>

        <div className="ama-box">
          <div className="ama-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`ama-msg ama-${m.role}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="ama-suggestions">
            {SUGGESTIONS.map((s) => (
              <button key={s} className="ama-chip" onClick={() => handleSend(s)}>
                {s}
              </button>
            ))}
          </div>

          <div className="ama-input-row">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about projects, skills, availability..."
              aria-label="Ask a question about Himavarsha"
            />
            <button onClick={() => handleSend()} aria-label="Send question">Ask</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AskMeAnything;
