import { motion } from 'framer-motion';
import {
  FiArrowDown,
  FiArrowUpRight,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiMail,
  FiMenu,
  FiRadio,
  FiX,
} from 'react-icons/fi';
import { useEffect, useState } from 'react';
import heroImage from './assets/mission-control-hero.png';
import { contactLinks, metrics, navItems, operations, projects, skills } from './data';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Section({ id, eyebrow, title, children }) {
  return (
    <motion.section
      id={id}
      className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      variants={fadeUp}
    >
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-signal">{eyebrow}</p>
        <h2 className="text-3xl font-bold tracking-tight text-frost sm:text-4xl lg:text-5xl">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function GlassCard({ children, className = '' }) {
  return <div className={`glass-card ${className}`}>{children}</div>;
}

function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-300/10 bg-void/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-frost">
          <span className="flex h-8 w-8 items-center justify-center rounded border border-cyan-300/20 bg-cyan-300/10 text-signal">
            <FiRadio />
          </span>
          BB
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden rounded border border-cyan-300/20 px-4 py-2 text-sm font-semibold text-frost transition hover:border-cyan-300/60 hover:bg-cyan-300/10 lg:inline-flex">
          Ground Control
        </a>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-cyan-300/20 text-frost lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-cyan-300/10 bg-void/95 px-5 py-5 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link text-base" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.16),transparent_28%),linear-gradient(90deg,rgba(2,6,23,0.92),rgba(2,6,23,0.62)_48%,rgba(2,6,23,0.38))]" />
        <div className="grid-overlay" />
        <div className="star-field" />
      </div>
      <motion.div
        className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center px-5 py-20 sm:px-8 lg:px-10"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 border border-cyan-300/20 bg-slate-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-signal backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-signal shadow-[0_0_18px_rgba(56,189,248,0.9)]" />
            Mission Control Portfolio
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-frost sm:text-7xl lg:text-8xl">
            Bricio Blancas Salgado
          </h1>
          <p className="mt-6 text-xl font-semibold text-cyan-100 sm:text-2xl">
            Software Engineer | Computer Science Graduate
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Building scalable software systems, AI-powered applications, and cloud infrastructure with a passion for
            innovation and exploration.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#missions" className="primary-button">
              View Missions <FiArrowDown />
            </a>
            <a href="/resume.pdf" className="secondary-button">
              Download Resume <FiDownload />
            </a>
            <a href="#contact" className="secondary-button">
              Contact Ground Control <FiMail />
            </a>
          </div>
        </div>
        <div className="mt-14 grid max-w-4xl gap-3 sm:grid-cols-3">
          {metrics.map((metric) => (
            <GlassCard key={metric.value} className="p-5">
              <p className="text-2xl font-bold text-frost">{metric.value}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{metric.label}</p>
            </GlassCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Briefing() {
  return (
    <Section id="briefing" eyebrow="Mission Briefing" title="Engineering reliable systems for ambitious product goals.">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <GlassCard className="p-7 sm:p-9">
          <p className="text-lg leading-8 text-slate-200">
            Bricio Blancas Salgado is a software engineer and computer science graduate focused on full-stack development,
            cloud-native architecture, and practical AI applications. His work spans distributed backend services,
            recruiter-ready product interfaces, NLP systems, and tools that turn complex workflows into clear user
            experiences.
          </p>
          <p className="mt-6 text-lg leading-8 text-muted">
            The portfolio is organized like an operations console: systems, missions, logs, and communication channels
            that show how engineering decisions support dependable software.
          </p>
        </GlassCard>
        <GlassCard className="p-7 sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-signal">Current Trajectory</p>
          <div className="mt-6 space-y-5">
            {['Cloud infrastructure', 'AI-powered applications', 'Scalable full-stack systems'].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <span className="h-px w-10 bg-cyan-300/50" />
                <span className="text-base font-semibold text-frost">{item}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </Section>
  );
}

function Systems() {
  return (
    <Section id="systems" eyebrow="Systems" title="Technical capabilities across the modern software stack.">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((group) => {
          const Icon = group.icon;
          return (
            <GlassCard key={group.title} className="group p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded border border-cyan-300/20 bg-cyan-300/10 text-xl text-signal">
                    <Icon />
                  </span>
                  <h3 className="text-xl font-bold text-frost">{group.title}</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}

function Missions() {
  return (
    <Section id="missions" eyebrow="Missions" title="Selected projects built around real engineering problems.">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <GlassCard key={project.name} className="mission-card p-7">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-signal">
                  Mission {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-frost">{project.name}</h3>
              </div>
              <span className="rounded border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                {project.status}
              </span>
            </div>
            <p className="text-base leading-7 text-muted">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-7 flex gap-3">
              <a className="icon-link" href="https://github.com/bbs17" target="_blank" rel="noreferrer">
                <FiGithub /> GitHub
              </a>
              <a className="icon-link" href="#contact">
                <FiExternalLink /> Demo
              </a>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

function OperationsLog() {
  return (
    <Section id="education" eyebrow="Education" title="Computer science training backed by practical operations experience.">
      <div className="grid gap-6 lg:grid-cols-3">
        {operations.map((item) => {
          const Icon = item.icon;
          return (
            <GlassCard key={item.title} className="p-7">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded border border-cyan-300/20 bg-cyan-300/10 text-xl text-signal">
                <Icon />
              </span>
              <h3 className="text-xl font-bold text-frost">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.detail}</p>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Ground Control" title="Ready for software engineering conversations.">
      <GlassCard className="overflow-hidden p-7 sm:p-9">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Connect with Bricio for roles and teams working on full-stack engineering, cloud infrastructure,
              AI-enabled products, and systems that need thoughtful execution.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a key={link.label} href={link.href} className="secondary-button">
                    {link.label} <Icon />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="border border-cyan-300/15 bg-slate-950/50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-signal">Transmission Status</p>
            <div className="mt-5 space-y-4">
              {['Recruiter review', 'Technical interview', 'Project walkthrough'].map((item) => (
                <div key={item} className="flex items-center justify-between border-b border-cyan-300/10 pb-3">
                  <span className="text-sm text-muted">{item}</span>
                  <span className="flex items-center gap-2 text-sm font-semibold text-cyan-100">
                    Online <FiArrowUpRight />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-void text-frost">
      <Navigation />
      <main>
        <Hero />
        <Briefing />
        <Systems />
        <Missions />
        <OperationsLog />
        <Contact />
      </main>
      <footer className="border-t border-cyan-300/10 px-5 py-8 text-center text-sm text-muted">
        Bricio Blancas Salgado | Mission Control Portfolio
      </footer>
    </div>
  );
}
