import { motion, type Variants } from 'framer-motion';
import { skillCategories } from '../data/portfolio';
import { SectionLabel } from './motion';
import { EASE } from '../hooks/ease';

const tagsParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.025, delayChildren: 0.15 } },
};
const tagChild: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 360, damping: 22 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionLabel>Skill Matrix</SectionLabel>

        <div className="skills__grid">
          {skillCategories.map((category, i) => (
            <motion.article
              className="panel panel--hover skillcard"
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5, ease: EASE }}
            >
              <header className="skillcard__head">
                <h3 className="skillcard__title">{category.title}</h3>
                <span className="skillcard__count">{String(category.skills.length).padStart(2, '0')}</span>
              </header>
              <motion.div
                className="skillcard__tags"
                variants={tagsParent}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
              >
                {category.skills.map((skill) => (
                  <motion.span className="tag" key={skill.name} variants={tagChild} whileHover={{ y: -3, scale: 1.06 }}>
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
