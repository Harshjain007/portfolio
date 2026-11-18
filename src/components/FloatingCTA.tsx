import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { sectionIds } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';

/** Appears after the hero: a persistent "start a project" pill + back-to-top. */
export default function FloatingCTA() {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);
  const show = scrolled && active !== 'contact';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 640);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fab"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        >
          <motion.a href="#contact" className="fab__cta" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <span className="pulse-dot" /> Start a project
          </motion.a>
          <motion.a
            href="#hero"
            className="fab__top"
            aria-label="Back to top"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            ↑
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
