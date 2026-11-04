import { useState } from 'react';
import {
  profile,
  stats,
  experience,
  projects,
  skills,
  interests,
  education,
  achievements,
} from './data.js';
import { useReveal, useTypewriter, useFitText, useCountUp, useActiveSection, useTheme } from './hooks.js';
import { Icon } from './Icons.jsx';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'interests', label: 'Interests' },
  { id: 'contact', label: 'Contact' },
];
const NAV_IDS = ['home', ...NAV.map((n) => n.id)];

export default function App() {
  useReveal();
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Interests />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ───────────────────────── Header ───────────────────────── */
function Header() {
  const active = useActiveSection(NAV_IDS);
  const [theme, toggle] = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">VP</span>
          <span className="logo-text">vijay<span className="accent">.dev</span></span>
        </a>

        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Primary">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <a href={profile.resume} className="btn btn-sm btn-primary nav-cta" download>
            Resume
          </a>
        </nav>

        <div className="header-actions">
          <button className="icon-btn" onClick={toggle} aria-label="Toggle colour theme">
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  const typed = useTypewriter(profile.rotatingTitles);
  const subRef = useFitText(0.62);
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          {profile.openToWork && (
            <span className="pill pill-live">
              <span className="dot" /> Open to new opportunities
            </span>
          )}
          <h1>
            Hi, I'm <span className="gradient-text">{profile.name}</span>.
            {/* Invisible copies of every title reserve the longest one's width;
                the font shrinks so that one line always fits — no layout shift. */}
            <span className="hero-sub" ref={subRef}>
              {profile.rotatingTitles.map((t) => (
                <span key={t} className="hero-sub-ghost" aria-hidden="true">
                  I build <span className="typed">{t}</span>
                  <span className="caret" />
                </span>
              ))}
              <span className="hero-sub-live">
                I build <span className="typed">{typed}</span>
                <span className="caret" aria-hidden="true" />
              </span>
            </span>
          </h1>
          <p className="lead">{profile.summary}</p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View my work <Icon name="arrow" />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" /></a>
            <span className="socials-loc"><Icon name="pin" /> {profile.location}</span>
          </div>
        </div>

        <Terminal />
      </div>

      <div className="container">
        <div className="stats">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Terminal() {
  return (
    <div className="terminal" aria-label="Code snippet describing Vijay">
      <div className="terminal-bar">
        <span /><span /><span />
        <em>~/vijay/profile.js</em>
      </div>
      <pre>
<code>
<span className="c">// currently shipping @ Feedspot</span>{'\n'}
<span className="k">const</span> <span className="v">engineer</span> = {'{'}{'\n'}
{'  '}name: <span className="s">'Vijay Patil'</span>,{'\n'}
{'  '}role: <span className="s">'Backend Engineer'</span>,{'\n'}
{'  '}experience: <span className="n">'2+ years'</span>,{'\n'}
{'  '}stack: [<span className="s">'Node.js'</span>, <span className="s">'PHP'</span>,{'\n'}
{'          '}<span className="s">'Redis'</span>, <span className="s">'MySQL'</span>, <span className="s">'AWS'</span>],{'\n'}
{'  '}scale: <span className="s">'3M+ emails / day'</span>,{'\n'}
{'  '}loves: [<span className="s">'queues'</span>, <span className="s">'caching'</span>, <span className="s">'clean APIs'</span>],{'\n'}
{'}'};{'\n'}{'\n'}
<span className="k">await</span> engineer.<span className="f">build</span>(<span className="s">'something great'</span>);{'\n'}
<span className="ok">✔ deployed</span> <span className="c">in 42ms</span>
</code>
      </pre>
    </div>
  );
}

function Stat({ value, prefix = '', suffix, label }) {
  const [ref, val] = useCountUp(value);
  return (
    <div className="stat reveal" ref={ref}>
      <div className="stat-value">
        {prefix}
        {val.toLocaleString()}
        <span className="accent">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

/* ───────────────────────── Shared ───────────────────────── */
function SectionHead({ index, kicker, title, children }) {
  return (
    <div className="section-head reveal">
      <span className="kicker">
        <span className="mono">{index}.</span> {kicker}
      </span>
      <h2>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </div>
  );
}

const Tags = ({ items }) => (
  <ul className="tags">
    {items.map((t) => (
      <li key={t}>{t}</li>
    ))}
  </ul>
);

/* ───────────────────────── About ───────────────────────── */
function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead index="01" kicker="About me" title="Engineering the parts you don't see." />
        <div className="about-grid">
          <div className="about-text reveal">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <aside className="about-card reveal">
            <div className="avatar" aria-hidden="true">VP</div>
            <h3>{profile.name}</h3>
            <p className="muted">{profile.role} · Feedspot</p>
            <ul className="facts">
              <li><Icon name="pin" /> {profile.location}</li>
              <li><Icon name="cap" /> B.E. EXTC · CGPA 9.41</li>
              <li><Icon name="code" /> LeetCode 1825</li>
              <li><Icon name="mail" /> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            </ul>
            <a href={profile.resume} className="btn btn-primary btn-block" download>
              <Icon name="download" /> Download resume
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Experience ───────────────────────── */
function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead index="02" kicker="Experience" title="Where I've been building." />
        <div className="timeline">
          {experience.map((job) => (
            <article key={job.company} className="job reveal">
              <div className="job-marker" aria-hidden="true" />
              <div className="card job-card">
                <header className="job-head">
                  <div>
                    <h3>
                      {job.role} <span className="at">@ {job.company}</span>
                    </h3>
                    <p className="muted">{job.summary}</p>
                  </div>
                  <span className={`pill ${job.current ? 'pill-live' : ''}`}>
                    {job.current && <span className="dot" />} {job.period}
                  </span>
                </header>

                <div className="impact">
                  {job.highlights.map((h) => (
                    <div key={h.text} className="impact-item">
                      <strong>{h.metric}</strong>
                      <span>{h.text}</span>
                    </div>
                  ))}
                </div>

                <ul className="bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <Tags items={job.stack} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Projects ───────────────────────── */
function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead index="03" kicker="Projects" title="Systems built for scale.">
          Production systems I've designed and shipped, each with a simplified view of how data flows through it.
        </SectionHead>
        <div className="projects">
          {projects.map((p, i) => (
            <article key={p.title} className={`card project accent-${p.accent} reveal`} style={{ transitionDelay: `${i * 80}ms` }}>
              <header className="project-head">
                <span className="project-num mono">0{i + 1}</span>
                <span className={`pill ${p.status === 'Ongoing' ? 'pill-live' : 'pill-done'}`}>
                  {p.status === 'Ongoing' && <span className="dot" />}
                  {p.status}
                </span>
              </header>
              <h3>{p.title}</h3>
              <p className="project-tagline">{p.tagline}</p>
              <p className="muted">{p.description}</p>

              <div className="flow" aria-label="Architecture flow">
                {p.flow.map((step, j) => (
                  <span key={step} className="flow-step">
                    <span className="flow-node">{step}</span>
                    {j < p.flow.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
                  </span>
                ))}
              </div>

              <ul className="checks">
                {p.points.map((pt) => (
                  <li key={pt}><Icon name="check" /> {pt}</li>
                ))}
              </ul>
              <Tags items={p.stack} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Skills ───────────────────────── */
function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead index="04" kicker="Skills" title="My toolkit." />
        <div className="skills">
          {skills.map((s, i) => (
            <div key={s.group} className="card skill reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="skill-head">
                <span className="skill-icon" aria-hidden="true">{s.icon}</span>
                <h3>{s.group}</h3>
              </div>
              <Tags items={s.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Interests ───────────────────────── */
function Interests() {
  return (
    <section id="interests" className="section">
      <div className="container">
        <SectionHead index="05" kicker="Interests" title="Beyond the day job." />
        <div className="interests">
          {interests.map((it, i) => (
            <div key={it.title} className="card interest reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="interest-emoji" aria-hidden="true">{it.emoji}</span>
              <h3>{it.title}</h3>
              <p className="muted">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Education & Achievements ───────────────────────── */
function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHead index="06" kicker="Education & achievements" title="Foundations." />
        <div className="edu-grid">
          <div className="card reveal">
            <h3 className="card-title"><Icon name="cap" /> Education</h3>
            <ul className="edu-list">
              {education.map((e) => (
                <li key={e.title}>
                  <div>
                    <strong>{e.title}</strong>
                    <span className="muted">
                      {e.place}
                      {e.period && ` · ${e.period}`}
                    </span>
                  </div>
                  <span className="score">{e.score}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="achievements">
            {achievements.map((a) => {
              const href = a.linkKey ? profile[a.linkKey] : null;
              const Tag = href ? 'a' : 'div';
              return (
                <Tag
                  key={a.title}
                  className="card achievement reveal"
                  {...(href ? { href, target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <Icon name="trophy" />
                  <div>
                    <span className="muted small">{a.title}</span>
                    <div className="achievement-big gradient-text">{a.big}</div>
                    <p className="muted">{a.text}</p>
                  </div>
                </Tag>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Contact ───────────────────────── */
function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact card reveal">
          <span className="kicker"><span className="mono">07.</span> Contact</span>
          <h2>Let's build something that scales.</h2>
          <p className="muted">
            I'm open to backend and full-stack roles, freelance work and interesting conversations about systems. My inbox is always open.
          </p>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <Icon name="mail" /> Say hello
            </a>
            <button className="btn btn-ghost" onClick={copy}>
              <Icon name={copied ? 'check' : 'copy'} /> {copied ? 'Copied!' : 'Copy email'}
            </button>
          </div>
          <div className="contact-links">
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Icon name="phone" /> {profile.phone}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}. Built with React.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
