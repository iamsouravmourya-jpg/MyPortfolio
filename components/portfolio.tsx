'use client'

import { ArrowDown, ArrowUpRight, Code2, GitBranch, Link2, Mail, MapPin, Sparkles } from 'lucide-react'

const projects = [
  {
    number: 'Project 01',
    name: 'LernexAI',
    kicker: 'Adaptive learning, made human',
    description:
      'LernexAI is a learning companion for students who do not need another content library. They need a patient, context-aware guide that helps them move from confusion to confidence.',
    details: ['Product strategy', 'AI tutoring flow', 'Full-stack build'],
    accent: 'blush',
    visual: 'lernex',
    gallery: ['Dashboard overview', 'Learning path', 'Tutor conversation', 'Progress insights'],
  },
  {
    number: 'Project 02',
    name: 'Corex Quantum Studio',
    kicker: 'A workstation inside the browser',
    description:
      'Corex is a browser-native creative workstation that keeps complex project state close, fast, and portable. No waiting rooms, no unnecessary cloud round trips.',
    details: ['System architecture', 'WebGL interface', 'Performance engineering'],
    accent: 'lilac',
    visual: 'corex',
    gallery: ['Workspace canvas', 'Scene graph', 'Vector controls', 'Export flow'],
  },
]

function ProjectVisual({ type }: { type: string }) {
  if (type === 'lernex') {
    return (
      <div className="project-visual lernex-visual" aria-label="LernexAI interface preview">
        <div className="visual-top"><span className="visual-logo">Lernex<span>AI</span></span><span className="visual-pill">Focus mode</span></div>
        <div className="lernex-content"><span className="visual-label">TODAY&apos;S LEARNING PATH</span><strong>Understand it.<br /><em>Don&apos;t just memorize it.</em></strong><div className="progress-track"><span /></div><small>3 of 5 concepts complete</small></div>
        <div className="floating-card"><Sparkles size={14} /><span>Try explaining this in your own words.</span></div>
      </div>
    )
  }
  return (
    <div className="project-visual corex-visual" aria-label="Corex Quantum Studio interface preview">
      <div className="visual-top"><span className="visual-logo">corex</span><span className="visual-pill">Untitled / 04</span></div>
      <div className="canvas-grid"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="core-dot" /><span className="axis axis-x" /><span className="axis axis-y" /></div>
      <div className="tool-palette"><Code2 size={14} /><span>Scene graph</span><span className="palette-active">Vector field</span><span>Export SVG</span></div>
    </div>
  )
}

function ProjectGallery({ items, accent }: { items: string[]; accent: string }) {
  return (
    <div className={`project-gallery ${accent}`} aria-label="Project image gallery">
      <div className="gallery-header"><span>Inside the product</span><span>Swipe to explore</span></div>
      <div className="gallery-track">
        {items.map((item, index) => (
          <div className="gallery-slide" key={item}>
            <div className={`image-placeholder placeholder-${index + 1}`}><span className="placeholder-plus">+</span><span>Add image</span></div>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="gallery-controls"><span className="gallery-progress"><i /><i /><i /><i /></span><span>Drag or scroll horizontally</span></div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <main className="site-shell">
      <nav className="topbar page-grid" aria-label="Primary navigation">
        <a className="brand" href="#top">SOURAV<span className="brand-dot">.</span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></div>
        <a className="availability" href="mailto:iamsouravamaurya@gmail.com"><span />Available for select builds</a>
      </nav>

      <section id="top" className="hero page-grid">
        <div className="hero-copy">
          <p className="greeting">Hello, I&apos;m Sourav.</p>
          <h1>I build digital products that feel <em>clear, useful,</em> and a little bit special.</h1>
          <p className="hero-lede">Product-minded engineer and technical mentor. I turn messy ideas into thoughtful interfaces and systems people enjoy using.</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">See selected work <ArrowDown size={15} /></a><a className="quiet-link" href="#about">More about me <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="hero-note"><div className="portrait-mark">S<span>.</span></div><p>Currently exploring the intersection of thoughtful design, practical engineering, and AI.</p><span className="scroll-cue">Scroll to explore <ArrowDown size={14} /></span></div>
      </section>

      <section id="about" className="about page-grid">
        <div className="section-label">A little about me</div>
        <div className="about-main"><h2>Curious by nature.<br /><em>Intentional by practice.</em></h2><p>I&apos;m Sourav Maurya, a builder based in Delhi. I enjoy working from the first sketch all the way to the moment a product clicks for someone. My background in mentoring and engineering means I care about both sides of the screen: the person using the product and the system making it possible.</p><p>When I&apos;m not building, I&apos;m usually learning something new, simplifying a complicated idea, or helping someone else get unstuck.</p><div className="about-facts"><span>Based in <strong>Delhi, India</strong></span><span>Focus <strong>Product &amp; engineering</strong></span><span>Open to <strong>Interesting problems</strong></span></div></div>
      </section>

      <section id="work" className="work page-grid">
        <div className="work-heading"><div><div className="section-label">Selected work</div><h2>A few things I&apos;ve<br /><em>made meaningful.</em></h2></div><p>Two projects, built with care from the inside out.</p></div>
        <div className="project-stack">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.name}><div className="project-card-copy"><span className="project-number">{project.number}</span><h3>{project.name}</h3><p className="project-kicker">{project.kicker}</p><p className="project-description">{project.description}</p><div className="project-details">{project.details.map(detail => <span key={detail}>{detail}</span>)}</div><a className="case-link" href="#contact">View the thinking <ArrowUpRight size={15} /></a></div><div className="project-media"><ProjectVisual type={project.visual} /><ProjectGallery items={project.gallery} accent={project.accent} /></div></article>)}</div>
      </section>

      <section className="principles page-grid"><div className="section-label">How I work</div><div className="principle-grid"><div><span>01</span><h3>Start with the person.</h3><p>Good products begin with empathy, not features. I look for the real friction before choosing the technology.</p></div><div><span>02</span><h3>Make complexity feel simple.</h3><p>Strong systems disappear into clear experiences. Every detail should earn its place.</p></div><div><span>03</span><h3>Build for the next version.</h3><p>I care about foundations that are fast today and flexible enough for whatever comes next.</p></div></div></section>

      <footer id="contact" className="footer page-grid"><div className="section-label">Have a good problem?</div><div className="footer-content"><h2>Let&apos;s make<br /><em>something great.</em></h2><p>I&apos;m always happy to hear about ambitious ideas, early concepts, or products that need a little more clarity.</p><a className="button button-dark" href="mailto:iamsouravamaurya@gmail.com">Start a conversation <Mail size={15} /></a><div className="contact-meta"><span><MapPin size={14} />Delhi, India</span><span><Mail size={14} />iamsouravamaurya@gmail.com</span><span className="socials"><a href="https://github.com" aria-label="GitHub"><GitBranch size={16} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><Link2 size={16} /></a></span></div></div><div className="footer-bottom"><span>© 2026 Sourav Maurya</span><span>Built with intent.</span></div></footer>
    </main>
  )
}
