import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="sec-label">Skill Matrix</h2>

        <div className="skills__grid">
          {skillCategories.map((category, i) => (
            <motion.article
              className="panel panel--hover skillcard"
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 3) * 0.07, duration: 0.45 }}
            >
              <header className="skillcard__head">
                <h3 className="skillcard__title">{category.title}</h3>
                <span className="skillcard__count">
                  {String(category.skills.length).padStart(2, '0')}
                </span>
              </header>
              <div className="skillcard__tags">
                {category.skills.map((skill) => (
                  <span className="tag" key={skill.name}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
