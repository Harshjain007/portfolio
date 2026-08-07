import { useEffect, useState } from 'react';
import { sectionIds } from '../data/portfolio';

/** Right-hand dot rail that highlights the section currently in view. */
export default function SectionNav() {
  const [active, setActive] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="dotnav" aria-label="Section navigation">
      {sectionIds.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={id}
          aria-current={active === id ? 'true' : undefined}
          className={`dotnav__dot${active === id ? ' dotnav__dot--active' : ''}`}
        >
          <span className="dotnav__tip">{id}</span>
        </a>
      ))}
    </nav>
  );
}
