import { motion } from 'framer-motion';
import { sectionIds } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';

/** Right-hand dot rail that highlights the section currently in view. */
export default function SectionNav() {
  const active = useActiveSection(sectionIds);

  return (
    <motion.nav
      className="dotnav"
      aria-label="Section navigation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.6 }}
    >
      {sectionIds.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={id}
          aria-current={active === id ? 'true' : undefined}
          className={`dotnav__dot${active === id ? ' dotnav__dot--active' : ''}`}
        >
          {active === id && <motion.span className="dotnav__ring" layoutId="dot-ring" />}
          <span className="dotnav__tip">{id}</span>
        </a>
      ))}
    </motion.nav>
  );
}
