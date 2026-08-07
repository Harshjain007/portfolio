import { motion } from 'framer-motion';
import { aboutStats, siteConfig } from '../data/portfolio';
import TechMarquee from './TechMarquee';

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const [firstName, ...rest] = siteConfig.name.split(' ');

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero__grid">
          {/* ── Main panel ── */}
          <motion.div
            className="panel hero__main"
            initial="hidden"
            animate="show"
            custom={0}
            variants={rise}
          >
            <motion.p className="hero__eyebrow" custom={1} variants={rise}>
              {siteConfig.title} · {siteConfig.location}
            </motion.p>

            <motion.h1 className="hero__name" custom={2} variants={rise}>
              <span>{firstName}</span>
              <span className="last">{rest.join(' ')}</span>
            </motion.h1>

            <motion.p className="hero__desc" custom={3} variants={rise}>
              {siteConfig.heroPitch}
            </motion.p>

            <motion.div className="hero__stats" custom={4} variants={rise}>
              {aboutStats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <div className="stat__value">{stat.value}</div>
                  <div className="stat__label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Portrait + status ── */}
          <motion.div
            className="hero__aside"
            initial="hidden"
            animate="show"
            custom={2}
            variants={rise}
          >
            <div className="hero__portrait">
              <img
                src={siteConfig.profileImage}
                alt={`${siteConfig.name} — illustrated portrait`}
                loading="eager"
              />
            </div>
            <div className="hero__status">
              <span className="pulse-dot" />
              status:&nbsp;<b>{siteConfig.availability}</b>
            </div>
          </motion.div>
        </div>

        <TechMarquee />
      </div>
    </section>
  );
}
