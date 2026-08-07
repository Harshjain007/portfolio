import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalProjects, professionalProjects, type Project } from '../data/portfolio';

type TabKey = 'professional' | 'personal';

const TABS: { key: TabKey; label: string; items: Project[] }[] = [
  { key: 'professional', label: 'Professional', items: professionalProjects },
  { key: 'personal', label: 'Personal', items: personalProjects },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="panel panel--hover work"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
    >
      <header className="work__head">
        <h3 className="work__title">{project.title}</h3>
        <span className="work__badge">{project.subtitle}</span>
      </header>

      <p className="work__desc">{project.description}</p>

      <div className="work__tags">
        {project.techStack.map((tech) => (
          <span className="tag" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      {(project.github || project.demo || project.teamSize) && (
        <div className="work__links">
          {project.github && (
            <a className="work__link" href={project.github} target="_blank" rel="noopener noreferrer">
              ↗ Source
            </a>
          )}
          {project.demo && (
            <a className="work__link" href={project.demo} target="_blank" rel="noopener noreferrer">
              ↗ Live demo
            </a>
          )}
          {project.teamSize && <span className="work__link">team of {project.teamSize}</span>}
        </div>
      )}
    </motion.article>
  );
}

/** Left column of the Work section — tabbed project list. */
export default function Projects() {
  const [tab, setTab] = useState<TabKey>('professional');
  const active = TABS.find((t) => t.key === tab) ?? TABS[0];

  return (
    <div>
      <h2 className="sec-label">Selected Work</h2>

      <div className="tabs" role="tablist" aria-label="Project category">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={tab === t.key}
            className={`tab${tab === t.key ? ' tab--active' : ''}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="stack">
        {active.items.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
