import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function SectionNav() {
  const [active, setActive] = useState('hero');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 200px
      setVisible(window.scrollY > 200);

      // Find current section
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActive(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`section-nav ${visible ? 'section-nav-visible' : ''}`}
      aria-label="Section navigation"
    >
      {sections.map((section) => (
        <button
          key={section.id}
          className={`section-nav-dot ${active === section.id ? 'active' : ''}`}
          onClick={() => scrollTo(section.id)}
          aria-label={section.label}
          title={section.label}
        >
          <span className="section-nav-tooltip">{section.label}</span>
          <span className="section-nav-circle" />
        </button>
      ))}
    </nav>
  );
}
