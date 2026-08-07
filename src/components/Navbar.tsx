import { useEffect, useState } from 'react';
import { siteConfig } from '../data/portfolio';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const classes = ['nav', scrolled && 'nav--scrolled', open && 'nav--open']
    .filter(Boolean)
    .join(' ');

  return (
    <header className={classes}>
      <div className="nav__inner">
        <a href="#hero" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="pulse-dot" />
          <strong>Harsh.Jain</strong>
          <span>/ Dev Console</span>
        </a>

        <nav className="nav__links">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav__link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <ThemeToggle />
          <a href="#contact" className="btn btn--solid">
            Hire me
          </a>
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
    </header>
  );
}
