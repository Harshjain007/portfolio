import { motion } from 'framer-motion';
import { siteConfig } from '../data/portfolio';

const techPills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '💚' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Express', icon: '🚂' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'SQL', icon: '🗄️' },
];

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* === Content === */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="hero-role-badge" style={{ display: 'inline-flex' }}>
                <span className="hero-role-icon">⚡</span>
                {siteConfig.title}
              </div>
            </motion.div>

            <motion.h1
              className="hero-name"
              style={{ textAlign: 'center' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="hi">Hi, I'm</span>
              <span className="name-text">{siteConfig.name}.</span>
            </motion.h1>

            <motion.p
              className="hero-tagline"
              style={{ textAlign: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              I build &amp; design <span className="hero-highlight">Web Applications.</span>
            </motion.p>

            <motion.p
              className="hero-desc"
              style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Full Stack Developer specializing in building exceptional digital experiences using{' '}
              <strong>React.js, Node.js, MongoDB, SQL.</strong>
            </motion.p>

            <motion.div
              className="hero-ctas"
              style={{ justifyContent: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="#projects" className="btn-primary-custom">
                View Projects
              </a>
              <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-custom">
                Download Resume
              </a>
            </motion.div>

            <motion.div
              className="hero-tech-pills"
              style={{ justifyContent: 'center' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              {techPills.map((tech) => (
                <span key={tech.name} className="hero-pill">
                  <span className="hero-pill-icon">{tech.icon}</span>
                  {tech.name}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator">
          <motion.div
            className="hero-scroll-mouse"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="hero-scroll-dot" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
