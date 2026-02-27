import { motion } from 'framer-motion';
import { aboutStats, aboutHighlights, siteConfig } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="sec-head">
          <span className="sec-label">About</span>
          <h2 className="sec-title">Who I Am</h2>
          <p className="sec-desc">A passionate developer turning ideas into high-performance digital experiences</p>
        </div>

        <div className="row g-4">
          {/* Main Card */}
          <div className="col-lg-6">
            <div className="card-custom about-main-card h-100">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="about-icon">👤</div>
                <span className="about-card-title">About Me</span>
              </div>
              <p className="about-desc">{siteConfig.description}</p>
              <ul className="about-highlights">
                {aboutHighlights.map((h, i) => (
                  <li key={i}>
                    <span className="about-highlight-check">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="col-lg-6">
            <div className="row g-4">
              {aboutStats.map((stat, i) => (
                <div key={stat.label} className="col-6">
                  <motion.div
                    className="card-custom stat-card h-100 d-flex flex-column align-items-center justify-content-center text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08, type: 'spring' }}
                  >
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="col-md-6">
            <div className="card-custom info-card h-100">
              <div className="d-flex align-items-center gap-3">
                <div className="info-icon">📍</div>
                <div>
                  <div className="info-strong">{siteConfig.location}</div>
                  <div className="info-sub">Open to remote opportunities worldwide</div>
                </div>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div className="col-md-6">
            <div className="card-custom info-card h-100">
              <div className="d-flex align-items-center justify-content-between w-100 flex-wrap gap-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="info-icon">✉️</div>
                  <div>
                    <div className="info-strong">Let's Connect</div>
                    <div className="info-sub">{siteConfig.email}</div>
                  </div>
                </div>
                <a href={'mailto:' + siteConfig.email} className="btn-primary-custom" style={{ padding: '8px 20px', fontSize: '12px' }}>
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
