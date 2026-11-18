import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { engagements, process, services } from '../data/services';
import { Magnetic, Reveal, SectionLabel, Stagger, StaggerItem } from './motion';
import { EASE } from '../hooks/ease';

function Icon({ paths }: { paths: string[] }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths.map((d) => (
        <motion.path
          key={d}
          d={d}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  );
}

function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <div className="proc">
      <h3 className="proc__title">How a project runs</h3>
      <ol className="proc__list" ref={ref}>
        <span className="proc__rail" aria-hidden="true">
          <motion.span className="proc__line" style={{ scaleX: line, scaleY: line }} />
        </span>
        {process.map((s, i) => (
          <motion.li
            key={s.title}
            className="proc__step"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
          >
            <motion.span
              className="proc__dot"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.15, type: 'spring', stiffness: 300, damping: 16 }}
            >
              {i + 1}
            </motion.span>
            <h4>{s.title}</h4>
            <p>{s.text}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionLabel>Work with me</SectionLabel>

        <Reveal>
          <div className="prod-intro">
            <h2 className="prod-intro__title">
              Hire a senior engineer who has already built the thing you’re asking for.
            </h2>
            <p className="prod-intro__sub">
              I’m taking on freelance projects and contracts. Here’s what I do best, with the products above as proof.
            </p>
          </div>
        </Reveal>

        <Stagger className="svc-grid">
          {services.map((s) => (
            <StaggerItem key={s.id}>
              <motion.article className="panel svc" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <div className="svc__icon">
                  <Icon paths={s.icon} />
                </div>
                <h3 className="svc__title">{s.title}</h3>
                <p className="svc__blurb">{s.blurb}</p>
                <ul className="svc__points">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p className="svc__proof">
                  <b>Proof:</b> {s.proof.join(' · ')}
                </p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>

        <Process />

        <Stagger className="eng-grid">
          {engagements.map((e) => (
            <StaggerItem key={e.title}>
              <div className="eng">
                <h4>{e.title}</h4>
                <p>{e.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <div className="panel svc-cta">
            <div>
              <h3>Have something in mind?</h3>
              <p>Tell me what you’re building and when you need it. I reply to every message personally.</p>
            </div>
            <Magnetic>
              <a href="#contact" className="btn btn--solid btn--lg">
                Start a conversation →
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
