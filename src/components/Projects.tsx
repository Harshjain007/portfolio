import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalProjects, professionalProjects } from '../data/portfolio';

type Tab = 'personal' | 'professional';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>('professional');
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
                        <div className="proj-tech">
                          {project.techStack.map((t) => (
                            <span key={t} className="tag">{t}</span>
                          ))}
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
