import React, { useMemo, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check,
  ChevronDown, Code2, Database, Download, ExternalLink, Github, GraduationCap,
  Laptop, Linkedin, Mail, MapPin, Menu, MessageCircle, Moon, Sparkles,
  Terminal, X, Zap
} from 'lucide-react'
import { profile, education, skillGroups, projects, experience } from './data'

const navItems = [
  ['Overview', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Education', '#education'],
  ['Contact', '#contact'],
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function App() {
  const [activeNav, setActiveNav] = useState('Overview')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [copied, setCopied] = useState(false)

  const categories = ['All', 'AI & Data', 'Full-Stack', 'Web Development']
  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects
    if (filter === 'AI & Data') return projects.filter(p => /AI|Data|Analytics|Dashboard|SQL/.test(p.title + p.category))
    if (filter === 'Full-Stack') return projects.filter(p => /Full-Stack|Security/.test(p.category))
    return projects.filter(p => /Web Development|Education/.test(p.category))
  }, [filter])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const handleNav = (name, href) => {
    setActiveNav(name)
    setMobileMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <aside className={`sidebar ${mobileMenuOpen ? 'sidebar-open' : ''}`}>
        <a className="brand" href="#home" onClick={() => setMobileMenuOpen(false)}>
          <span className="brand-mark">SK<span>.</span></span>
          <span className="brand-name">Shrinivas<span>Portfolio</span></span>
        </a>

        <div className="sidebar-label">WORKSPACE</div>
        <nav className="side-nav" aria-label="Main navigation">
          {navItems.map(([name, href], i) => {
            const Icon = [Laptop, MessageCircle, Code2, BriefcaseBusiness, GraduationCap, Mail][i]
            return (
              <a key={name} href={href} className={`nav-link ${activeNav === name ? 'active' : ''}`}
                onClick={e => { e.preventDefault(); handleNav(name, href) }}>
                <Icon size={17} strokeWidth={1.8} />
                <span>{name}</span>
                {activeNav === name && <span className="active-indicator" />}
              </a>
            )
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="availability-card">
            <span className="status-pulse" />
            <div><strong>Open to opportunities</strong><span>Internships · Entry-level roles</span></div>
          </div>
          <div className="sidebar-user">
            <div className="avatar-small">SK</div>
            <div className="user-meta"><strong>Shrinivas Karad</strong><span>IT Engineering Student</span></div>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><ArrowUpRight size={16}/></a>
          </div>
        </div>
      </aside>

      {mobileMenuOpen && <button className="mobile-backdrop" aria-label="Close navigation" onClick={() => setMobileMenuOpen(false)} />}
      <main className="main-content">
        <header className="topbar">
          <button className="mobile-menu-button icon-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">
            {mobileMenuOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
          <div className="breadcrumb"><span>Portfolio</span><span className="crumb-slash">/</span><strong>{activeNav}</strong></div>
          <div className="topbar-right">
            <span className="local-time"><span className="status-pulse" /> Available for opportunities</span>
            <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
            <a className="icon-button" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
          </div>
        </header>

        <div className="page-content">
          <section id="home" className="hero-section">
            <div className="hero-copy">
              <div className="hero-status"><span className="status-pulse" /> PERSONAL PORTFOLIO <span className="status-divider">/</span> 2026</div>
              <h1>Building useful things<br/>with <span className="gradient-text">code & data.</span></h1>
              <p className="hero-description">{profile.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects" onClick={() => setActiveNav('Projects')}>Explore my work <ArrowRight size={16}/></a>
                <a className="button button-secondary" href={`mailto:${profile.email}`}>Contact me <ArrowUpRight size={16}/></a>
              </div>
              <div className="hero-socials">
                <span><MapPin size={14}/>{profile.location}</span>
                <a href={profile.github} target="_blank" rel="noreferrer"><Github size={14}/> GitHub <ArrowUpRight size={12}/></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14}/> LinkedIn <ArrowUpRight size={12}/></a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-glow" />
              <div className="code-window">
                <div className="window-top"><div className="window-dots"><i/><i/><i/></div><span>developer.tsx</span><Terminal size={14}/></div>
                <div className="code-body">
                  <div><span className="line-no">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div>
                  <div><span className="line-no">02</span><span className="code-key">name</span>: <span className="code-green">'Shrinivas Karad'</span>,</div>
                  <div><span className="line-no">03</span><span className="code-key">focus</span>: [</div>
                  <div><span className="line-no">04</span><span className="indent code-green">'Software Development'</span>,</div>
                  <div><span className="line-no">05</span><span className="indent code-green">'Data Analytics'</span>,</div>
                  <div><span className="line-no">06</span><span className="indent code-green">'Applied AI'</span></div>
                  <div><span className="line-no">07</span>],</div>
                  <div><span className="line-no">08</span><span className="code-key">mindset</span>: <span className="code-green">'Always learning'</span></div>
                  <div><span className="line-no">09</span>{'}'};</div>
                  <div className="code-cursor-line"><span className="line-no">10</span><span className="code-purple">export default</span> developer;<span className="cursor"/></div>
                </div>
              </div>
              <div className="floating-chip chip-top"><Sparkles size={14}/> Curious by design</div>
              <div className="floating-chip chip-bottom"><Zap size={14}/> Learn · Build · Improve</div>
            </div>
          </section>

          <section className="stats-grid" aria-label="Portfolio highlights">
            <div className="stat-card"><div className="stat-icon blue"><BriefcaseBusiness size={18}/></div><div className="stat-label">PROJECTS</div><div className="stat-value">06<span className="stat-unit">+</span></div><div className="stat-foot">Across multiple domains</div></div>
            <div className="stat-card"><div className="stat-icon violet"><Code2 size={18}/></div><div className="stat-label">TECHNICAL SKILLS</div><div className="stat-value">20<span className="stat-unit">+</span></div><div className="stat-foot">Tools, languages & frameworks</div></div>
            <div className="stat-card"><div className="stat-icon cyan"><GraduationCap size={18}/></div><div className="stat-label">CURRENT DEGREE</div><div className="stat-value">B.E.<span className="stat-unit"> IT</span></div><div className="stat-foot">Expected graduation · 2027</div></div>
            <div className="stat-card"><div className="stat-icon green"><Database size={18}/></div><div className="stat-label">CORE INTERESTS</div><div className="stat-value stat-value-text">AI + Data</div><div className="stat-foot">Building practical solutions</div></div>
          </section>

          <section id="about" className="content-section about-section">
            <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curiosity into capability." description="A quick overview of what I do and what drives me."/>
            <div className="about-grid">
              <div className="about-panel panel">
                <div className="panel-kicker"><span className="tiny-square"/> PROFILE</div>
                <p className="about-lead">I enjoy working at the intersection of <span>software, data, and AI</span>.</p>
                <p className="muted-copy">From developing web applications and working with relational databases to building data dashboards and AI-powered tools, I focus on understanding the problem first and creating a useful solution.</p>
                <div className="about-tags"><span>Problem solving</span><span>Continuous learning</span><span>User-first thinking</span></div>
              </div>
              <div className="focus-panel panel">
                <div className="panel-kicker"><span className="tiny-square"/> WHAT I'M FOCUSED ON</div>
                <div className="focus-item"><div className="focus-icon"><Code2 size={17}/></div><div><strong>Software Development</strong><p>Building clean, maintainable applications and APIs.</p></div><ArrowUpRight size={15} className="focus-arrow"/></div>
                <div className="focus-item"><div className="focus-icon"><Database size={17}/></div><div><strong>Data Analytics</strong><p>Turning raw data into clear insights and dashboards.</p></div><ArrowUpRight size={15} className="focus-arrow"/></div>
                <div className="focus-item"><div className="focus-icon"><Sparkles size={17}/></div><div><strong>Applied AI</strong><p>Exploring AI integrations for real-world workflows.</p></div><ArrowUpRight size={15} className="focus-arrow"/></div>
              </div>
            </div>
          </section>

          <section id="skills" className="content-section">
            <SectionHeading eyebrow="MY TOOLKIT" title="Skills & technologies." description="Technologies I've worked with across coursework, practice, and projects."/>
            <div className="skills-grid">
              {skillGroups.map((group, i) => (
                <div className="skill-panel panel" key={group.title}>
                  <div className="skill-panel-top"><div className={`skill-icon skill-icon-${i}`}>{[<Code2 size={18}/>,<Laptop size={18}/>,<Database size={18}/>,<Sparkles size={18}/>][i]}</div><span className="skill-index">0{i+1}</span></div>
                  <h3>{group.title}</h3>
                  <div className="skill-pills">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="content-section">
            <div className="section-heading-row">
              <SectionHeading eyebrow="SELECTED WORK" title="Projects & experiments." description="A selection of applications and analytical work I've explored."/>
              <a className="text-link desktop-link" href={profile.github} target="_blank" rel="noreferrer">All repositories <ArrowUpRight size={15}/></a>
            </div>
            <div className="filter-row" role="group" aria-label="Filter projects">
              {categories.map(category => <button key={category} className={`filter-button ${filter === category ? 'selected' : ''}`} onClick={() => setFilter(category)}>{category}</button>)}
              <span className="project-count">{filteredProjects.length} projects</span>
            </div>
            <div className="projects-grid">
              {filteredProjects.map(project => (
                <article className={`project-card panel ${project.featured ? 'project-featured' : ''}`} key={project.number}>
                  <div className="project-card-top"><span className="project-number">{project.number}</span><span className="project-category">{project.category}</span><a className="project-link-icon" href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}><ArrowUpRight size={17}/></a></div>
                  <div className="project-illustration">
                    {project.number === '01' ? <div className="mini-chart"><div className="mini-chart-head"><span>Data overview</span><span className="mini-live">● LIVE</span></div><div className="mini-bars">{[35,57,43,75,51,88,66,96,60,78,47,70].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div><div className="mini-chart-bottom"><span>INSIGHTS</span><span>↗ +24.8%</span></div></div>
                    : project.number === '02' ? <div className="vault-art"><div className="vault-halo"/><div className="vault-lock"><div className="lock-shackle"/><div className="lock-body"><span/></div></div><span className="vault-caption">AES-256 · ENCRYPTED</span></div>
                    : project.number === '03' ? <div className="project-symbol animal-symbol"><Sparkles size={34}/><span>AI FOR GOOD</span></div>
                    : project.number === '04' ? <div className="project-symbol mentor-symbol"><Code2 size={35}/><span>{'{ learn(); }'}</span></div>
                    : project.number === '05' ? <div className="project-symbol road-symbol"><div className="road-line"/><span>ROAD SAFETY INSIGHTS</span></div>
                    : <div className="project-symbol sql-symbol"><Database size={32}/><span>SELECT · ANALYZE · INSIGHT</span></div>}
                  </div>
                  <div className="project-content"><h3>{project.title}</h3><p>{project.description}</p><div className="tech-stack">{project.stack.map(s => <span key={s}>{s}</span>)}</div></div>
                  <div className="project-card-footer"><span><span className="project-status-dot"/> Project profile</span><a href={project.github} target="_blank" rel="noreferrer">View details <ArrowRight size={14}/></a></div>
                </article>
              ))}
            </div>
            <div className="projects-footer"><span>More work and code samples are available on GitHub.</span><a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> Visit GitHub <ExternalLink size={13}/></a></div>
          </section>

          <section id="education" className="content-section education-section">
            <SectionHeading eyebrow="LEARNING JOURNEY" title="Education & training." description="The foundation behind my technical journey."/>
            <div className="timeline-layout">
              <div className="timeline-column">
                <h3 className="subsection-title"><GraduationCap size={18}/> Education</h3>
                <div className="timeline">
                  {education.map((item, i) => <div className="timeline-item" key={item.school}><div className={`timeline-marker ${item.current ? 'marker-current' : ''}`}/><div className="timeline-card panel"><div className="timeline-top"><span>{item.period}</span>{item.current && <span className="current-badge">IN PROGRESS</span>}</div><h4>{item.degree}</h4><p>{item.school}</p><div className="education-result">{item.result}</div></div></div>)}
                </div>
              </div>
              <div className="timeline-column">
                <h3 className="subsection-title"><BriefcaseBusiness size={18}/> Industrial Training</h3>
                <div className="timeline">
                  {experience.map(item => <div className="timeline-item" key={item.role}><div className="timeline-marker"/><div className="timeline-card panel"><div className="timeline-top"><span>{item.period}</span><span className="current-badge">COMPLETED</span></div><h4>{item.role}</h4><p>{item.organization}</p><p className="experience-description">{item.description}</p></div></div>)}
                  <div className="learning-note"><Sparkles size={17}/><p><strong>Always learning</strong><span>Growing through projects, practice, and collaboration.</span></p></div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="contact-section">
            <div className="contact-glow"/>
            <div className="contact-content">
              <span className="eyebrow"><span className="eyebrow-dot"/> WHAT'S NEXT?</span>
              <h2>Have a good problem<br/>to <span className="gradient-text">solve together?</span></h2>
              <p>I'm interested in software development, data analytics, and AI opportunities. Let's connect and build something meaningful.</p>
              <div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}> <Mail size={16}/> Get in touch <ArrowUpRight size={15}/></a><button className="button button-secondary" onClick={copyEmail}>{copied ? <Check size={16}/> : <MessageCircle size={16}/>} {copied ? 'Email copied' : 'Copy email'}</button></div>
              <div className="contact-details"><span><Mail size={14}/>{profile.email}</span><span><MapPin size={14}/>{profile.location}</span></div>
            </div>
            <div className="contact-decoration"><div className="decoration-ring ring-a"/><div className="decoration-ring ring-b"/><div className="decoration-core">SK<span>.</span></div></div>
          </section>

          <footer className="footer">
            <a className="footer-brand" href="#home">SK<span>.</span></a>
            <span>Designed & built with care · © {new Date().getFullYear()} Shrinivas Karad</span>
            <div><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={`mailto:${profile.email}`}>Email</a></div>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
