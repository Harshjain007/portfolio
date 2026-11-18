import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '../data/portfolio';
import { products } from '../data/products';
import TechMarquee from './TechMarquee';
import { CountUp, Magnetic, SplitText } from './motion';
import { EASE } from '../hooks/ease';

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: EASE },
  }),
};

const ROLES = ['real-time platforms', 'SaaS products', 'AI-powered tools', 'iGaming engines', 'developer tooling'];

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="rotator" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[i]}
          className="rotator__word"
          initial={{ y: '70%', opacity: 0, filter: 'blur(6px)' }}
          animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-70%', opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.38, ease: EASE }}
        >
          {ROLES[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const STATUS_TONE: Record<string, string> = {
  Published: 'ok',
  'Shipped app': 'ok',
  Live: 'ok',
  'Working build': 'mid',
  'Early build': 'low',
  'In progress': 'low',
};

/** A little "ls ~/products" window: rows slide in, a highlight bar hops between them. */
function HeroConsole() {
  const rows = products.slice(0, 10);
  const [hl, setHl] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setHl((v) => (v + 1) % rows.length), 1500);
    return () => clearInterval(t);
  }, [rows.length]);

  return (
    <motion.aside
      className="panel console"
      initial={{ opacity: 0, x: 40, rotateY: -8 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: EASE }}
      aria-label="Products built"
    >
      <div className="console__bar">
        <span /> <span /> <span />
        <b>~/products</b>
      </div>
      <p className="console__cmd">
        <span className="accent">$</span> ls -1 | wc -l <span className="console__count">→ {products.length}</span>
      </p>
      <ul className="console__list">
        {rows.map((p, i) => (
          <motion.li
            key={p.id}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + i * 0.09, duration: 0.45, ease: EASE }}
          >
            <a href="#products" className="console__row">
              {hl === i && <motion.span className="console__hl" layoutId="console-hl" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
              <span className="console__name">{p.name}</span>
              <span className={`dotbadge dotbadge--${STATUS_TONE[p.status]}`}>{p.status}</span>
            </a>
          </motion.li>
        ))}
      </ul>
      <p className="console__more">
        +{products.length - rows.length} more <span className="caret" aria-hidden="true" />
      </p>
    </motion.aside>
  );
}

export default function Hero() {
  const [firstName, ...rest] = siteConfig.name.split(' ');
  const { scrollY } = useScroll();
  const orbY = useTransform(scrollY, [0, 600], [0, -90]);
  const fade = useTransform(scrollY, [0, 500], [1, 0.35]);

  return (
    <section id="hero" className="hero">
      <motion.div className="hero__orb" style={{ y: orbY, opacity: fade }} aria-hidden="true" />
      <div className="container">
        <div className="hero__grid">
          <motion.div className="panel hero__main" initial="hidden" animate="show" custom={0} variants={rise}>
            <motion.p className="hero__eyebrow" custom={1} variants={rise}>
              {siteConfig.title} · {siteConfig.location}
            </motion.p>

            <h1 className="hero__name">
              <SplitText text={firstName} delay={0.2} />
              <SplitText className="last" text={rest.join(' ')} delay={0.45} gradient />
            </h1>

            <motion.p className="hero__line" custom={3} variants={rise}>
              I design and build <RotatingRole />
            </motion.p>

            <motion.p className="hero__desc" custom={4} variants={rise}>
              {siteConfig.heroPitch}
            </motion.p>

            <motion.div className="hero__actions" custom={5} variants={rise}>
              <Magnetic>
                <a className="btn btn--solid btn--lg" href="#contact">
                  Hire me for a project →
                </a>
              </Magnetic>
              <Magnetic>
                <a className="btn btn--ghost btn--lg" href="#products">
                  Explore {products.length} products
                </a>
              </Magnetic>
            </motion.div>

            <motion.div className="hero__stats" custom={6} variants={rise}>
              <div className="stat">
                <div className="stat__value"><CountUp to={4} suffix="+" /></div>
                <div className="stat__label">Years shipping</div>
              </div>
              <div className="stat">
                <div className="stat__value"><CountUp to={10} suffix="+" /></div>
                <div className="stat__label">Gaming platforms</div>
              </div>
              <div className="stat">
                <div className="stat__value"><CountUp to={100} suffix="+" /></div>
                <div className="stat__label">REST APIs built</div>
              </div>
              <div className="stat">
                <div className="stat__value"><CountUp to={products.length} /></div>
                <div className="stat__label">Products built</div>
              </div>
            </motion.div>

            <motion.div className="hero__status" custom={7} variants={rise}>
              <span className="pulse-dot" />
              status:&nbsp;<b>{siteConfig.availability}</b>
              <a className="hero__cta" href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
                ↓ Résumé
              </a>
            </motion.div>
          </motion.div>

          <HeroConsole />
        </div>

        <TechMarquee />
      </div>
    </section>
  );
}
