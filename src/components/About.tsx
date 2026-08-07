import { motion } from 'framer-motion';
import { aboutHighlights } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="sec-label">Profile</h2>

        <div className="about__grid">
          {aboutHighlights.map((highlight, i) => (
            <motion.div
              className="about__item"
              key={highlight}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
            >
              <span className="about__idx">{String(i + 1).padStart(2, '0')}</span>
              <span>{highlight}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
