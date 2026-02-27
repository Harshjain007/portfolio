import { motion } from 'framer-motion';
import { siteConfig } from '../data/portfolio';

const ReactAtom = ({ size = 40, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="0.7" />
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="0.7" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="0.7" transform="rotate(120 12 12)" />
  </svg>
);

const techPills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '💚' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'SQL', icon: '🗄️' },
];

export default function Hero() {
  return (
    <section className="hero-section">
      {/* === Background Layers === */}

      {/* Large green glow - top right */}
      <div className="hero-glow hero-glow-1" />
      {/* Secondary glow - center */}
      <div className="hero-glow hero-glow-2" />
      {/* Bottom glow */}
      <div className="hero-glow hero-glow-3" />

      {/* Flowing wave shapes */}
      <svg className="hero-wave hero-wave-1" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,197.3C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
      <svg className="hero-wave hero-wave-2" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,213.3C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>

      {/* Floating React atoms */}
      <div className="hero-float hero-float-1"><ReactAtom size={52} /></div>
      <div className="hero-float hero-float-2"><ReactAtom size={36} /></div>
      <div className="hero-float hero-float-3"><ReactAtom size={28} /></div>
      <div className="hero-float hero-float-4"><ReactAtom size={44} /></div>

      {/* Floating particles */}
      <div className="hero-particle hero-particle-1" />
      <div className="hero-particle hero-particle-2" />
      <div className="hero-particle hero-particle-3" />
      <div className="hero-particle hero-particle-4" />
      <div className="hero-particle hero-particle-5" />
      <div className="hero-particle hero-particle-6" />
      <div className="hero-particle hero-particle-7" />
      <div className="hero-particle hero-particle-8" />

      {/* Decorative circles */}
      <div className="hero-ring hero-ring-1" />
      <div className="hero-ring hero-ring-2" />
      <div className="hero-ring hero-ring-3" />

      {/* === Content === */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 col-xl-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="hero-role-badge">
                <span className="hero-role-icon">⚡</span>
                {siteConfig.title}
              </div>
            </motion.div>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="hi">Hi, I'm</span>
              <span className="name-text">{siteConfig.name}.</span>
            </motion.h1>

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              I build &amp; design <span className="hero-highlight">Web Applications.</span>
            </motion.p>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Full Stack Developer specializing in building exceptional digital experiences using{' '}
              <strong>React.js, Node.js, MongoDB, SQL.</strong>
            </motion.p>

            <motion.div
              className="hero-ctas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="#projects" className="btn-primary-custom">
                View Projects
              </a>
              <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-custom">
                Download Resume
              </a>
            </motion.div>

            <motion.div
              className="hero-tech-pills"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              {techPills.map((tech) => (
                <span key={tech.name} className="hero-pill">
                  <span className="hero-pill-icon">{tech.icon}</span>
                  {tech.name}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <div className="col-lg-6 col-xl-7 d-none d-lg-block">
            <motion.div
              className="hero-profile"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 80 }}
            >
              <div className="hero-profile-wrapper">
                {/* Gradient backdrop behind image */}
                <div className="hero-profile-backdrop" />
                <img
                  src={`${import.meta.env.BASE_URL}profile.png`}
                  alt={siteConfig.name}
                  className="hero-profile-img"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement!.querySelector('.hero-profile-fallback') as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hero-profile-fallback" style={{ display: 'none' }}>
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#697565" strokeWidth="0.8">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator">
          <motion.div
            className="hero-scroll-mouse"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="hero-scroll-dot" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
