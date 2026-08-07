import { motion } from 'framer-motion';
import { siteConfig } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h2 className="cta__title">
              Let's build something <em>real-time.</em>
            </h2>
            <p className="cta__meta">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <span className="cta__sep">·</span>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
              <span className="cta__sep">·</span>
              <span>{siteConfig.location}</span>
            </p>
          </div>

          <a href="#contact" className="btn btn--solid">
            Start a conversation
          </a>
        </motion.div>

        <div className="footer__base">
          <span>
            © {year} {siteConfig.name} — built with React, TypeScript &amp; too much coffee.
          </span>
          <div className="footer__links">
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
              Résumé
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
