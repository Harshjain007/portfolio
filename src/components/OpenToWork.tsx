import { useEffect, useState } from 'react';

export default function OpenToWork() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="#contact"
      className={`otw-fixed ${scrolled ? 'otw-scrolled' : ''}`}
      aria-label="Actively looking for opportunities – Get in touch"
    >
      <span className="otw-pulse" />
      <span className="otw-text">Actively looking for opportunities</span>
    </a>
  );
}
