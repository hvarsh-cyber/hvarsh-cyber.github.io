export const POSTS = [
  {
    slug: 'automation-engineering-to-security',
    title: 'Why Automation Engineering Is the Best Foundation for Security',
    date: 'February 2026',
    excerpt: 'Most security engineers learn to break things. I spent 2.6 years building systems that catch failures automatically. That instinct turns out to be exactly what security automation needs.',
    content: [
      { type: 'p', text: 'There is a common path into cybersecurity: study networking, get a CompTIA cert, do some TryHackMe rooms, apply for a SOC role. My path was different. I spent 2.6 years as a Security Automation Engineer at a Fortune 500 company before starting my Master of Cybersecurity at Monash University.' },
      { type: 'h3', text: 'Building Systems That Catch Problems Automatically' },
      { type: 'p', text: 'My professional background is in building automation systems that find failures before humans have to. Automated defect detection, CI/CD security controls, API validation frameworks for Apple and Amazon integrations. The core skill is the same as security engineering: design a system that reliably identifies a problem, every time, without manual intervention.' },
      { type: 'h3', text: 'The Security Instinct Was Already There' },
      { type: 'p', text: 'When you spend years asking "what can fail?" about software systems, the mental shift to "what can be exploited?" is smaller than it sounds. The methodology is nearly identical. You define what normal looks like, then you build detectors for deviations.' },
      { type: 'ul', items: ['Automated defect detection becomes vulnerability scanning', 'JIRA defect workflows become GitHub Issues for security findings', 'CI/CD quality gates become CI/CD security gates', 'API test coverage becomes API security validation'] },
      { type: 'h3', text: 'What the Master of Cybersecurity Adds' },
      { type: 'p', text: 'Monash fills in the formal foundations: cryptography, network security, software security analysis, threat modelling. The engineering instinct was already there from professional experience. The coursework gives it the right vocabulary and adversarial threat model.' },
      { type: 'h3', text: 'The Projects Prove the Point' },
      { type: 'p', text: 'SecAudit auto-creates GitHub Issues for vulnerability findings. The AI Log Anomaly Detector applies ML to threat detection in server logs. Both are built by someone who spent years thinking about how to make checks automatic, reliable, and scalable. The domain changed. The approach did not.' },
    ],
  },
  {
    slug: '300-automated-checks-security-lessons',
    title: 'What 300+ Automated Checks Taught Me About Security Engineering',
    date: 'March 2026',
    excerpt: 'Before my Master of Cybersecurity, I built over 300 automated checks at a Fortune 500 company. The engineering lessons apply directly to security.',
    content: [
      { type: 'p', text: 'Before starting my Master of Cybersecurity, I spent 2.6 years building automated systems at EchoStar / Dish Network. During that time, I built and ran more than 300 automated checks across critical business processes. Many of the engineering lessons from that work apply directly to security.' },
      { type: 'h3', text: 'Automation Is About Trust, Not Speed' },
      { type: 'p', text: 'People think automation is about going faster. It is actually about trust. A manual check is only as reliable as the person running it under time pressure. An automated check runs the same way every time, every night, on every push.' },
      { type: 'p', text: 'That principle is exactly why security automation matters. A scanner that runs on every commit is more reliable than a penetration test scheduled once a quarter.' },
      { type: 'h3', text: 'Defect Automation and Security Finding Automation Are the Same Pattern' },
      { type: 'p', text: 'At EchoStar, I built a tool that automatically created JIRA tickets for security defects found during execution. The tool would detect the finding, classify its severity, and raise a ticket with no human in the loop for routine work.' },
      { type: 'p', text: 'SecAudit does exactly this for vulnerability scanning: detect a missing security header, classify its severity, raise a GitHub Issue automatically. The pattern is identical. The domain changed.' },
      { type: 'h3', text: 'Thinking About Adversarial Failure' },
      { type: 'p', text: 'Automation engineering teaches you to ask: what can fail? Security engineering asks: what can be deliberately exploited? The transition between the two is less about learning new tools and more about shifting from unintentional failure to adversarial failure.' },
      { type: 'h3', text: 'Conclusion' },
      { type: 'p', text: 'My background in automation engineering is not a gap in my security profile. It is the foundation of it. The instinct to build systems that check things automatically, consistently, and at scale is exactly what security automation requires.' },
    ],
  },
  {
    slug: 'humans-weakest-link-cybersecurity',
    title: 'Why Humans Are the Weakest Link in Cybersecurity',
    date: 'April 2026',
    excerpt: 'Firewalls and encryption matter, but attackers keep succeeding because they understand human psychology better than most security programs account for.',
    content: [
      { type: 'p', text: 'When people think about cybersecurity, they imagine sophisticated technical attacks. The reality is that most successful breaches exploit something much simpler: human behaviour. Despite investments in firewalls, encryption, and security tooling, attackers keep succeeding because they understand human psychology.' },
      { type: 'h3', text: 'The Cyber Operations Perspective' },
      { type: 'p', text: 'In my Cyber Operations unit at Monash, we covered insider threats, social engineering, and human-centric security in depth. One takeaway stood out: the most technically sophisticated defence is irrelevant if an attacker can convince the right person to click the wrong link.' },
      { type: 'h3', text: 'Social Engineering Works Because Humans Are Helpful' },
      { type: 'ul', items: ['Authority bias: people comply with apparent authority figures', 'Urgency: time pressure degrades decision quality', 'Familiarity: people lower their guard with people they recognise', 'Reciprocity: small favours create a sense of obligation'] },
      { type: 'h3', text: 'What Automation Can and Cannot Fix' },
      { type: 'p', text: 'Automated security controls can reduce the surface area significantly. DMARC reduces email spoofing. MFA raises the bar for account takeover. Anomaly detection flags unusual access patterns before they become incidents.' },
      { type: 'p', text: 'But they cannot eliminate the human element entirely. The AI Log Anomaly Detector I built flags odd-hour access and unusual request patterns. It cannot detect a legitimate credential used by the wrong person. That is where behavioural analytics, insider threat programs, and security culture matter.' },
      { type: 'h3', text: 'Conclusion' },
      { type: 'p', text: 'Effective security requires both technical controls and human-centred design. The goal is not to make humans infallible. It is to design systems that limit the blast radius when they are not.' },
    ],
  },
];

export function getPostBySlug(slug) {
  return POSTS.find(p => p.slug === slug) || null;
}
