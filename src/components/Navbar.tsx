import { useState } from 'react';
import { siteConfig } from '../data/portfolio';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar-custom">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <a href="#" className="d-flex align-items-center text-decoration-none">
            <span className="nav-brand-name">{siteConfig.name}</span>
            <span className="nav-title-sep">{siteConfig.title}</span>
          </a>

          {/* Desktop Nav */}
          <div className="d-none d-lg-flex align-items-center gap-1">
            {siteConfig.navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link-custom">
                {link.label}
              </a>
            ))}
            <a href={siteConfig.resumeUrl} className="nav-cta" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="d-lg-none bg-transparent border-0 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#ECDFCC" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="d-lg-none mt-3 pb-3 d-flex flex-column gap-2">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link-custom"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href={siteConfig.resumeUrl} className="nav-cta text-center mt-2" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
