import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolio';

const categoryEmojis: Record<string, string> = {
  frontend: '⚛️',
  backend: '⚙️',
  database: '🗄️',
  realtime: '⚡',
  devops: '☁️',
  methods: '🔄',
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding section-gradient">
      <div className="container">
        <div className="sec-head">
          <span className="sec-label">Skills</span>
          <h2 className="sec-title">Tech Arsenal</h2>
          <p className="sec-desc">The technologies and tools I wield to build powerful applications</p>
        </div>

        <div className="row g-4">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className="col-md-6 col-lg-4">
              <motion.div
                className="card-custom skill-card h-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.08 }}
              >
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="skill-icon">{categoryEmojis[category.icon]}</div>
                  <span className="skill-cat-name">{category.title}</span>
                </div>
                <div className="d-flex flex-wrap" style={{ gap: '7px' }}>
                  {category.skills.map((skill) => (
                    <span key={skill.name} className="skill-pill">{skill.name}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
