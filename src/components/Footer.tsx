import { motion } from 'framer-motion';
import { siteConfig } from '../data/portfolio';
import { Magnetic } from './motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="cta"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="cta__clip" aria-hidden="true">
            <motion.span
              className="cta__sheen"
              animate={{ x: ['-120%', '300%'] }}
              transition={{ duration: 5, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
            />
          </span>
          <div>
            <h2 className="cta__title">
              Have a product in mind? <em>Let’s build it.</em>
            </h2>
            <p className="cta__meta">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <span className="cta__sep">·</span>
              <span>{siteConfig.location}</span>
            </p>
          </div>

          <Magnetic>
            <a href="#contact" className="btn btn--solid">
              Start a conversation
            </a>
          </Magnetic>
        </motion.div>

        <div className="footer__base">
          <span>
            © {year} {siteConfig.name} — built with React, TypeScript &amp; Framer Motion.
          </span>
          <div className="footer__links">
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">Résumé</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
