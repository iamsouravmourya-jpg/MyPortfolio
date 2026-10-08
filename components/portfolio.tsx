'use client'

import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  Braces,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
  Workflow,
} from 'lucide-react'
import PortfolioChatbot from './portfolio-chatbot'

const projects = [
  {
    number: 'Project 01',
    id: 'lernex',
    name: 'LernexAI',
    category: 'Learning, made personal',
    description:
      'A learning companion designed to help students move beyond collecting content. LernexAI turns a big subject into a clear path, then gives learners a patient place to ask, practise, and build confidence.',
    role: 'Product direction, experience design & build',
    focus: ['Learning journeys', 'AI tutor experience', 'Progress & feedback'],
    repo: 'https://github.com/iamsouravmourya-jpg/LernexAI',
    live: 'https://lernexai.vercel.app/',
    details: [
      { title: 'Learn by doing', text: 'Structured courses pair focused lessons with in-browser coding sandboxes for C, Python, Java, JavaScript and SQL.' },
      { title: 'A tutor with context', text: 'The AI tutor uses lesson and learner context, with Groq model rotation and fallback handling for resilient help.' },
      { title: 'Proof that travels', text: 'Proctored assessments connect to QR-verifiable certificates, with learner progress and credentials backed by Supabase.' },
    ],
    technologies: ['React', 'TypeScript', 'Supabase', 'Groq', 'Vercel'],
    accent: 'lernex',
    mark: 'L',
  },
  {
    number: 'Project 02',
    id: 'corex',
    name: 'Corex Quantum Studio',
    category: 'A creative studio in your browser',
    description:
      'A browser-native workspace concept for making complex creative tools feel immediate. The experience keeps the canvas front and centre while controls stay close, clear, and ready when needed.',
    role: 'Product concept, interface & system architecture',
    focus: ['Creative canvas', 'Scene graph', 'Fast, focused controls'],
    repo: 'https://github.com/iamsouravmourya-jpg/Corex',
    live: 'https://corex-vert.vercel.app/',
    details: [
      { title: 'Brief to editable design', text: 'A four-step planner turns a natural-language brief into reviewable tasks that the local studio bot can execute.' },
      { title: 'A canvas that stays yours', text: 'The 60 FPS bot builds editable vector layers on the live stage instead of returning a flattened image.' },
      { title: 'Designed for the workstation', text: 'WebGL2 shader tools, an OPFS .cxbin vault, a 64-frame command ledger and multi-format export support the creative workflow.' },
    ],
    technologies: ['React 19', 'TypeScript', 'WebGL2', 'OPFS', 'Zustand'],
    accent: 'corex',
    mark: 'C',
  },
]

function ProjectDetails({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="project-details-panel" id={`${project.id}-details`}>
      <div className="details-panel-heading"><span className="eyebrow">Under the hood</span><span className="details-count">0{project.details.length} PRODUCT IDEAS</span></div>
      <div className="details-list">
        {project.details.map((detail, index) => <article className="detail-row" key={detail.title}>
          <span className="detail-index">0{index + 1}</span>
          <div><h4>{detail.title}</h4><p>{detail.text}</p></div>
          <ArrowUpRight size={15} aria-hidden="true" />
        </article>)}
      </div>
      <div className="technology-row"><span className="eyebrow">Built with</span><div>{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
      <div className="project-links"><a className="repo-link" href={project.live} target="_blank" rel="noreferrer">Visit the product <ArrowUpRight size={14} /></a><a className="repo-link" href={project.repo} target="_blank" rel="noreferrer">Explore the repository <ArrowUpRight size={14} /></a></div>
    </div>
  )
}

function ProjectChapter({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className={`project-chapter ${project.accent}`} id={project.id}>
      <div className="chapter-inner">
        <div className="chapter-copy">
          <span className="project-number"><span>{project.number}</span><span className="chapter-mark">{project.mark}</span></span>
          <p className="project-category">{project.category}</p>
          <h3>{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-role"><span className="eyebrow">My focus</span><p>{project.role}</p></div>
          <ul className="project-focus">{project.focus.map((item) => <li key={item}>{item}</li>)}</ul>
          <a className="text-link" href={`#${project.id}-details`}>Explore the product <ArrowDown size={15} /></a>
        </div>
        <div className="chapter-visual" aria-label={`${project.name} featured screenshot placeholder`}>
          <div className="visual-chrome"><span /><span /><span /><p>{project.name}</p><Sparkles size={16} /></div>
          <div className="featured-slot"><span className="featured-index">FEATURED SCREEN</span><span className="featured-mark">{project.mark}</span><span className="featured-prompt">Your product screenshot goes here</span><span className="featured-caption">Replace this space with a real product image</span></div>
        </div>
        <ProjectDetails project={project} />
      </div>
    </article>
  )
}

const architectureViews = {
  lernex: {
    label: 'LernexAI',
    eyebrow: 'Learning platform',
    title: 'One learning loop. Several trusted layers.',
    summary: 'Lessons, coding practice and assessments meet in one learner experience. Serverless routes coordinate AI tutoring, payments and support, while Supabase protects learner records and progress.',
    points: [
      { icon: GraduationCap, title: 'Learning surface', text: 'Lessons, in-browser coding sandboxes, contextual tutoring and proctored assessments.' },
      { icon: Workflow, title: 'Service layer', text: 'Serverless APIs handle AI tutor failover, payment verification and privacy-aware support.' },
      { icon: Boxes, title: 'Persistence and proof', text: 'Supabase PostgreSQL and row-level security support progress and verifiable credentials.' },
    ],
    diagram: `LEARNER EXPERIENCE\n  lessons  ·  code sandbox  ·  proctored exam\n                    │\n                    ▼\n      SERVERLESS API / SERVICE LAYER\n       ├─ contextual AI tutor + failover\n       ├─ payment signature verification\n       └─ privacy-aware support bridge\n                    │\n          ┌─────────┴─────────┐\n          ▼                   ▼\n   GROQ / GEMINI       RAZORPAY / TELEGRAM\n          │\n          ▼\n    SUPABASE POSTGRES\n    ├─ auth + learner progress\n    ├─ row-level security\n    └─ verifiable credential records`,
  },
  corex: {
    label: 'Corex',
    eyebrow: 'Browser-native creative studio',
    title: 'A brief becomes an editable stage.',
    summary: 'Corex turns a design brief into reviewable tasks, queues them through the editor store, then builds editable layers on the local canvas. The stage, binary project vault and command history stay in one browser-native workflow.',
    points: [
      { icon: Workflow, title: 'Plan before paint', text: 'A four-step blueprint turns the brief into validated, safe-zone-aware tasks.' },
      { icon: Sparkles, title: 'Build on the stage', text: 'The local 60 FPS bot applies shaders, bundled assets and editable vectors to the live canvas.' },
      { icon: Boxes, title: 'Keep work portable', text: 'OPFS project storage and a compressed command ledger support persistence and undo/redo.' },
    ],
    diagram: `NATURAL-LANGUAGE BRIEF\n          │\n          ▼\n  4-STEP BLUEPRINT PLANNER\n          │  validated task queue\n          ▼\n     ZUSTAND EDITOR STORE\n          │\n          ▼\n   LOCAL 60 FPS STUDIO BOT\n     ├─ WebGL2 shader layer\n     ├─ bundled asset vault\n     └─ editable vector objects\n          │\n          ▼\n      LIVE STAGE CANVAS\n     ├─ OPFS .cxbin project vault\n     ├─ compressed undo / redo ledger\n     └─ multi-format artifact export`,
  },
} as const

function ArchitectureConsole() {
  const [activeView, setActiveView] = useState<keyof typeof architectureViews>('lernex')
  const view = architectureViews[activeView]

  return (
    <section className="architecture page-grid" aria-labelledby="architecture-title">
      <div className="architecture-heading">
        <span className="eyebrow">After the product comes the system</span>
        <h2 id="architecture-title">The thinking<br /><em>behind the screen.</em></h2>
        <p>A closer look at how each product fits together, from the first user action to the underlying system.</p>
        <div className="architecture-tabs" role="tablist" aria-label="Choose project architecture">
          {(Object.keys(architectureViews) as (keyof typeof architectureViews)[]).map((key) => <button key={key} type="button" role="tab" aria-selected={activeView === key} className={activeView === key ? 'active' : ''} onClick={() => setActiveView(key)}>{architectureViews[key].label}</button>)}
        </div>
      </div>
      <div className="architecture-screen">
        <div className="architecture-windowbar"><span><i /><i /><i /></span><p><Braces size={13} /> SYSTEM MAP / {view.label.toUpperCase()}</p><span>FIELD NOTES 01</span></div>
        <div className="architecture-content" role="tabpanel">
          <div className="architecture-code"><div className="code-label"><span>ASCII / FLOW</span><span>0{activeView === 'lernex' ? '1' : '2'}</span></div><pre>{view.diagram}</pre></div>
          <div className="architecture-explainer">
            <span className="eyebrow">{view.eyebrow}</span>
            <h3>{view.title}</h3>
            <p className="architecture-summary">{view.summary}</p>
            <div className="architecture-points">{view.points.map(({ icon: Icon, title, text }, index) => <article key={title}><span className="architecture-point-icon"><Icon size={16} /></span><div><span className="eyebrow">0{index + 1}</span><h4>{title}</h4><p>{text}</p></div></article>)}</div>
          </div>
        </div>
        <div className="architecture-screenfoot"><span>SYSTEMS ARE EXPERIENCES, TOO.</span><span>{view.label.toUpperCase()} <ArrowUpRight size={13} /></span></div>
      </div>
    </section>
  )
}

export default function Portfolio() {
  return (
    <main className="site-shell">
      <PortfolioChatbot />
      <nav className="topbar page-grid" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Sourav, back to top"><span className="brand-mark">S<span>.</span></span><span className="brand-lockup"><span className="brand-name">SOURAV</span><span className="brand-caption">PRODUCT · ENGINEERING</span></span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#work">Projects</a><a href="#contact">Contact</a></div>
        <a className="nav-contact" href="mailto:iamsouravamaurya@gmail.com"><span className="nav-contact-dot" />Let&apos;s build something <ArrowUpRight size={15} /></a>
      </nav>

      <section id="top" className="hero page-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-kicker"><span className="availability-dot" /> PRODUCT-MINDED ENGINEER <span className="kicker-slash">/</span> DELHI, INDIA</p>
          <h1>Hi, I&apos;m <span className="hero-name">Sourav.</span><br />I make ideas work <em>beautifully.</em></h1>
          <p className="hero-lede">I bring product thinking and engineering together to turn complex ideas into digital experiences that feel clear, useful, and human.</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">Explore my projects <ArrowDown size={16} /></a><a className="text-link" href="#about">Get to know me <ArrowUpRight size={16} /></a></div>
        </div>
        <div className="hero-stage" aria-label="Sourav's approach to building products">
          <div className="stage-topline"><span>THOUGHTFUL BY DESIGN</span><span>BUILT TO BE USEFUL</span></div>
          <div className="stage-type">Make it<br /><em>make sense.</em></div>
          <div className="stage-bottom"><Sparkles size={17} /><span>From the first sketch<br />to the finished detail.</span><span className="stage-arrow"><ArrowDown size={18} /></span></div>
          <span className="stage-index">S / 2026</span>
          <span className="stage-sticker">IDEA<br /><b>→</b><br />IMPACT</span>
        </div>
        <a className="hero-scroll" href="#about"><span>Scroll to explore</span><ArrowDown size={14} /></a>
      </section>

      <section className="craft-ribbon" aria-label="Product design and engineering skills">
        <div className="craft-ribbon-track">
          {[0, 1].map((copy) => <div className="craft-ribbon-set" key={copy} aria-hidden={copy === 1}>
            <span>PRODUCT THINKING</span><i>✳</i><span>INTERFACE DESIGN</span><i>✳</i><span>FRONT-END ENGINEERING</span><i>✳</i><span>AI EXPERIENCES</span><i>✳</i>
          </div>)}
        </div>
      </section>

      <section id="about" className="about page-grid">
        <div className="about-heading"><span className="eyebrow">A little about me</span><h2>Curious mind.<br /><em>Builder&apos;s hands.</em></h2><span className="about-stamp">S<span>.</span></span></div>
        <div className="about-copy">
          <p className="about-lede">I&apos;m Sourav, a product-minded engineer and technical mentor based in Delhi, India.</p>
          <p>I like taking an idea from the first rough sketch to something people can actually use. That means asking the right questions, making the experience feel simple, and caring just as much about the engineering underneath as the pixels on screen.</p>
          <p>I&apos;m at my best when a problem is still a little messy: finding the useful shape inside it, testing what works, and learning my way toward a better answer. I also enjoy sharing what I learn and helping other people find their way through technical challenges.</p>
          <div className="about-details"><div><span className="eyebrow">I care about</span><p>Product thinking · thoughtful interfaces · practical engineering</p></div><div><span className="eyebrow">Currently curious about</span><p>AI experiences · learning tools · browser-native products</p></div></div>
        </div>
      </section>

      <section id="work" className="work-intro page-grid">
        <span className="eyebrow">Selected projects · 2026</span>
        <div><h2>Good ideas,<br /><em>made tangible.</em></h2><p>Two product explorations, each with a different problem to solve.</p></div>
        <a className="work-index" href="#lernex"><span>01</span> LernexAI <ArrowDown size={15} /></a>
      </section>

      <div className="project-list">{projects.map((project) => <ProjectChapter project={project} key={project.id} />)}</div>

      <ArchitectureConsole />

      <section className="approach page-grid">
        <span className="eyebrow">How I like to work</span>
        <div className="approach-list">
          <article><span>01</span><div><h3>Start with the real problem.</h3><p>Understand what someone needs before deciding what to build.</p></div><Sparkles size={19} /></article>
          <article><span>02</span><div><h3>Make the hard parts feel clear.</h3><p>Shape the interface and the system together, so neither gets in the way.</p></div><Sparkles size={19} /></article>
          <article><span>03</span><div><h3>Keep learning as you build.</h3><p>Stay open to a better answer, and make each detail earn its place.</p></div><Sparkles size={19} /></article>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="footer-inner page-grid">
          <div className="footer-orbit" aria-hidden="true"><span>S</span><i /><i /><i /></div>
          <span className="eyebrow"><span className="availability-dot" /> OPEN TO THE RIGHT PROBLEM</span>
          <h2>Have a good one?<br /><em>Let&apos;s make it real.</em></h2>
          <p className="footer-note">A thoughtful product starts with a good conversation. Tell me what you&apos;re working on.</p>
          <div className="footer-bottom">
            <a className="button button-light" href="mailto:iamsouravamaurya@gmail.com">Start a conversation <Mail size={16} /></a>
            <div className="contact-info"><a href="mailto:iamsouravamaurya@gmail.com">iamsouravamaurya@gmail.com</a><span><MapPin size={14} /> Delhi, India</span></div>
            <a className="social-link" href="https://github.com/iamsouravmourya-jpg" aria-label="Sourav's GitHub profile"><GitBranch size={19} /></a>
          </div>
          <div className="footer-signoff"><span>GOOD IDEAS DESERVE GOOD EXECUTION</span><span>S<span>.</span></span><span>© 2026 SOURAV</span></div>
          <div className="copyright"><span>Designed with curiosity. Built with care.</span><a href="#top">Back to top ↑</a></div>
        </div>
      </footer>
    </main>
  )
}
