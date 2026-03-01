import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalProjects, professionalProjects } from '../data/portfolio';

type Tab = 'personal' | 'professional';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>('personal');
  const hasPersonal = personalProjects.length > 0;

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="sec-head">
          <span className="sec-label">Projects</span>
          <h2 className="sec-title">Featured Work</h2>
          <p className="sec-desc">Real-time applications and platforms built with modern technologies</p>
        </div>

        {/* Tabs */}
        <div className="proj-tabs">
          <div className="tabs-inner">
            <button
              className={'tab-btn' + (activeTab === 'personal' ? ' active' : '')}
              onClick={() => setActiveTab('personal')}
            >
              Personal Projects
            </button>
            <button
              className={'tab-btn' + (activeTab === 'professional' ? ' active' : '')}
              onClick={() => setActiveTab('professional')}
            >
              Professional Projects
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'personal' && (
            <motion.div
              key="personal"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {hasPersonal ? (
                <div className="row g-4">
                  {personalProjects.map((project) => (
                    <div key={project.title} className="col-md-6">
                      <div className="card-custom proj-card">
                        <p className="proj-sub">{project.subtitle}</p>
                        <h3 className="proj-title mb-3">{project.title}</h3>
                        <p className="proj-desc">{project.description}</p>
                        <div className="row g-2 mb-4">
                          {project.highlights.map((h, i) => (
                            <div key={i} className="col-12 proj-hi">
                              <span className="proj-hi-arrow">→</span> {h}
                            </div>
                          ))}
                        </div>
                        <div className="proj-tech mb-3">
                          {project.techStack.map((t) => (
                            <span key={t} className="tag">{t}</span>
                          ))}
                        </div>
                        <div className="d-flex gap-3">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline-custom" style={{ padding: '8px 18px', fontSize: '12px' }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                              Source Code
                            </a>
                          )}
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary-custom" style={{ padding: '8px 18px', fontSize: '12px' }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" strokeLinecap="round" strokeLinejoin="round"/><polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round"/><line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="card-custom coming-soon-card text-center">
                  <div style={{ width: 64, height: 64, borderRadius: 12, background: 'var(--elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#697565" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 700, color: 'var(--cream)', marginBottom: 12 }}>Coming Soon</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', maxWidth: 400, margin: '0 auto', lineHeight: 1.6 }}>
                    Personal projects are currently being built. Check out the professional projects in the meantime.
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'professional' && (
            <motion.div
              key="professional"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {professionalProjects.map((project) => (
                <div key={project.title} className="card-custom proj-card">
                  <div className="d-flex justify-content-between align-items-start gap-3 mb-4">
                    <div>
                      <p className="proj-sub">{project.subtitle}</p>
                      <h3 className="proj-title">{project.title}</h3>
                    </div>
                    {project.teamSize && (
                      <span className="team-badge">Team of {project.teamSize}</span>
                    )}
                  </div>
                  <p className="proj-desc">{project.description}</p>
                  <div className="row g-2 mb-4">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="col-md-6 proj-hi">
                        <span className="proj-hi-arrow">→</span> {h}
                      </div>
                    ))}
                  </div>
                  <div className="proj-tech">
                    {project.techStack.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
