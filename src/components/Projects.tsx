import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { professionalProjects, type Project } from '../data/portfolio';
import { SectionLabel } from './motion';
import { EASE } from '../hooks/ease';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      className="panel panel--hover work"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: EASE }}
      whileHover={{ y: -3 }}
    >
      <header className="work__head">
        <h3 className="work__title">{project.title}</h3>
        <span className="work__badge">{project.subtitle}</span>
      </header>

      <p className="work__desc">{project.description}</p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            className="work__more"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {project.highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * i }}
              >
                {h}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <div className="work__tags">
        {project.techStack.map((tech) => (
          <span className="tag" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className="work__links">
        <button type="button" className="work__toggle" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
          <motion.span animate={{ rotate: open ? 90 : 0 }} style={{ display: 'inline-block' }}>
            ▸
          </motion.span>{' '}
          {open ? 'Hide details' : 'What I built'}
        </button>
        {project.teamSize && <span className="work__link">team of {project.teamSize}</span>}
      </div>
    </motion.article>
  );
}

/** Left column of the Work section — professional / team projects. */
export default function Projects() {
  return (
    <div>
      <SectionLabel>Client &amp; team work</SectionLabel>
      <div className="stack">
        {professionalProjects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
