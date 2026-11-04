// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update the site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Vijay Patil',
  firstName: 'Vijay',
  role: 'Backend Engineer',
  location: 'Mumbai, India',
  email: 'patilvijay98968@gmail.com',
  phone: '+91 7447366742',
  // TODO: replace with your real profile URLs
  linkedin: 'https://www.linkedin.com/in/vijaypatil333/',
  github: 'https://github.com/Vijaypatil333/',
  leetcode: 'https://leetcode.com/Almighty333/',
  resume: './Vijay_Patil_Resume.pdf',
  openToWork: true,
  rotatingTitles: [
    'scalable backends.',
    'high-volume email pipelines.',
    'fast, cached REST APIs.',
    'secure, reliable systems.',
  ],
  summary:
    'Backend-focused Software Engineer with 2+ years of experience building scalable, high-volume systems serving millions of users. I work across Node.js, PHP, REST APIs, MySQL, Redis, AWS and asynchronous processing — with a focus on API design, microservices, job queues, RBAC, caching, security and performance.',
  about: [
    "I'm a backend engineer who enjoys the parts of software most people never see: the queues, caches, retries and indexes that keep a product fast when traffic spikes.",
    'At FeedSpot I build and scale systems used by millions of readers — including an email pipeline that sends over 3 million emails a day. I care about measurable wins: lower latency, fewer failures, less database load.',
    "Outside work I sharpen my problem solving on LeetCode and GeeksforGeeks, and I'm always digging into how large-scale systems are designed.",
  ],
};

export const stats = [
  { value: 3, suffix: 'M+', label: 'emails sent daily' },
  { value: 40, suffix: '%', label: 'fewer send failures' },
  { value: 35, prefix: '~', suffix: '%', label: 'less DB load at peak' },
  { value: 1825, suffix: '', label: 'LeetCode rating' },
];

export const experience = [
  {
    role: 'Software Developer',
    company: 'FeedSpot',
    period: "Sep '24 — Present",
    current: true,
    summary:
      'Building and scaling high-traffic backend systems for FeedSpot Reader, Email Digest, Teams, Widgets, RSS Builder and RSS Generator.',
    highlights: [
      { metric: '25–30%', text: 'lower API latency by optimizing REST APIs and Redis caching' },
      { metric: '~35%', text: 'less database load during peak traffic' },
      { metric: '3M+/day', text: 'Email Digest sends — scaled the pipeline end-to-end' },
      { metric: '40%', text: 'fewer failures after optimizing the SES microservice' },
    ],
    bullets: [
      'Implemented click tracking, auto-login and conversion flows for the Email Digest.',
      'Built the Teams module with RBAC permissions, content sharing, folders/pinboards and team-specific digests.',
      'Built RSS generation for websites and social platforms with Puppeteer, Bright Data, Redis and MySQL — handling scraping, rate limits, scheduling and Reader integration.',
    ],
    stack: ['PHP', 'MySQL', 'Redis', 'AWS SES', 'Puppeteer', 'Bright Data'],
  },
];

export const projects = [
  {
    title: 'Enterprise Emergency Alert System',
    status: 'Completed',
    tagline: 'Multi-channel emergency notifications that reliably reach every employee.',
    description:
      'An enterprise-grade notification backend that fans out alerts over Email, SMS, WhatsApp, Voice and Push — with one/two-way responses, dynamic employee targeting and full delivery tracking.',
    flow: ['Alert API', 'BullMQ', 'Workers', 'Email · SMS · WhatsApp · Voice · Push'],
    points: [
      'BullMQ async dispatch with retries, delivery tracking and per-channel audit logs',
      'Logic-based employee groups, RBAC and async Excel bulk imports',
      'PII protected with AWS KMS envelope encryption',
      'JWT auth, Zod validation, Redis caching and background workers',
    ],
    stack: ['Node.js', 'Express.js', 'MySQL', 'Redis', 'BullMQ', 'AWS KMS', 'Zod', 'JWT'],
    accent: 'red',
  },
  {
    title: 'Email Digest System',
    status: 'Ongoing',
    tagline: 'Millions of personalised emails, delivered every single day.',
    description:
      'Scalable email delivery and Reader backend workflows with caching, tracking, auto-login and analytics serving millions of users.',
    flow: ['Reader data', 'Redis cache', 'Digest builder', 'AWS SES', 'Inbox'],
    points: [
      '3M+ emails sent daily',
      '40% fewer sending failures via SES delivery improvements',
      'Click tracking, auto-login and conversion analytics',
      'Redis caching plus API and query optimization',
    ],
    stack: ['PHP', 'MySQL', 'PHPMailer', 'AWS SES', 'Redis', 'CronJob'],
    accent: 'green',
  },
  {
    title: 'RSS Builder & Generator',
    status: 'Ongoing',
    tagline: 'Turn any website or social profile into a clean RSS feed.',
    description:
      'End-to-end pipelines that transform website HTML and Instagram, LinkedIn and X/Twitter content into structured RSS feeds, integrated with FeedSpot Reader.',
    flow: ['Website / Social', 'Puppeteer + Bright Data', 'DOM extraction', 'RSS feed'],
    points: [
      'DOM extraction and automated scraping',
      'Redis-backed job scheduling and rate-limit handling',
      'Anti-bot workflows and platform-specific extraction',
      'Feeds plug straight into FeedSpot Reader',
    ],
    stack: ['PHP', 'Redis', 'Puppeteer', 'MySQL', 'Bright Data'],
    accent: 'blue',
  },
];

export const skills = [
  { group: 'Languages', icon: '{ }', items: ['PHP', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'] },
  { group: 'Backend', icon: '⚙', items: ['Node.js', 'Express.js', 'REST APIs', 'Microservices', 'BullMQ', 'RBAC', 'JWT', 'Auth', 'Web Scraping'] },
  { group: 'Database & Cache', icon: '◫', items: ['MySQL', 'Redis', 'Query Optimization', 'Caching'] },
  { group: 'Cloud & Security', icon: '☁', items: ['AWS', 'AWS KMS', 'Amazon SES', 'Encryption', 'bcrypt', 'Rate Limiting'] },
  { group: 'Tools & Testing', icon: '⚒', items: ['Git', 'GitHub Actions', 'CI/CD', 'Jest', 'Supertest', 'Zod', 'Puppeteer', 'Bright Data', 'PHPMailer'] },
  { group: 'Core', icon: '◈', items: ['DSA', 'OOP', 'DBMS', 'System Design', 'SDLC', 'Performance'] },
];

// TODO: personalise these — tell me your real interests and I'll update them
export const interests = [
  { emoji: '🧩', title: 'Competitive Programming', text: 'Weekly LeetCode contests and GFG challenges — rated 1825, global rank 1024 of 25K+.' },
  { emoji: '🏗️', title: 'System Design', text: 'Studying how large-scale systems handle millions of requests, and applying it at work.' },
  { emoji: '⚡', title: 'Performance Tuning', text: 'Profiling slow queries and shaving milliseconds off hot API paths.' },
  { emoji: '🔐', title: 'Security', text: 'Encryption, auth and keeping user data safe by default.' },
  { emoji: '📚', title: 'Tech Reading', text: 'Engineering blogs and RSS feeds — fitting, given what I build.' },
  { emoji: '🌱', title: 'Learning in Public', text: 'Exploring new tools and sharing what I learn along the way.' },
];

export const education = [
  { title: 'B.E. Electronics & Telecommunication', place: 'University of Mumbai', period: '2020 – 2024', score: 'CGPA 9.41' },
  { title: 'HSC', place: 'Annasaheb Vartak College', period: '2019', score: '68.15%' },
  { title: 'SSC', place: 'Rajguru H. M. Pandit Vidyalaya', period: '2017', score: '94.60%' },
];

export const achievements = [
  { title: 'LeetCode', big: '1825', text: 'Contest rating · Global rank 1024 / 25K+ in Weekly Contest 368', linkKey: 'leetcode' },
  { title: 'GeeksforGeeks', big: '#1', text: 'Institute rank · Coding score 2000+', linkKey: null },
];
