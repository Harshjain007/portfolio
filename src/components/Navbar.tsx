import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { siteConfig, sectionIds } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const classes = ['nav', scrolled && 'nav--scrolled', open && 'nav--open'].filter(Boolean).join(' ');

  return (
    <motion.header
      className={classes}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="nav__progress" style={{ scaleX: progress }} aria-hidden="true" />
      <div className="nav__inner">
        <a href="#hero" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="pulse-dot" />
          <strong>Harsh.Jain</strong>
          <span>/ Dev Console</span>
        </a>

        <nav className="nav__links">
          {siteConfig.navLinks.map((link) => {
            const isActive = `#${active}` === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav__link${isActive ? ' nav__link--active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
                {isActive && <motion.span className="nav__underline" layoutId="nav-underline" />}
              </a>
            );
          })}
        </nav>

        <div className="nav__actions">
          <ThemeToggle />
          <motion.a
            href="#contact"
            className="btn btn--solid nav__hire"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="nav__hire-dot" /> Hire me
          </motion.a>
          <button
            type="button"
            className="nav__burger"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
