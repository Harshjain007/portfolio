import { useEffect, useState } from 'react';

// ─── Tech SVG Icons ───
const techIcons = [
  // React atom
  (s: number) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="0.7" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="0.7" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="0.7" transform="rotate(120 12 12)" />
    </svg>
  ),
  // Node.js hexagon
  (s: number) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="currentColor" strokeWidth="0.8" />
      <path d="M12 7v10" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <path d="M7 9.5l5 3 5-3" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
    </svg>
  ),
  // TypeScript T
  (s: number) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="0.8" />
      <path d="M8 9h8M12 9v8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  // Database cylinder
  (s: number) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="0.8" />
      <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="currentColor" strokeWidth="0.8" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    </svg>
  ),
  // Docker whale
  (s: number) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="11" width="3" height="3" stroke="currentColor" strokeWidth="0.6" />
      <rect x="7" y="11" width="3" height="3" stroke="currentColor" strokeWidth="0.6" />
      <rect x="11" y="11" width="3" height="3" stroke="currentColor" strokeWidth="0.6" />
      <rect x="7" y="7" width="3" height="3" stroke="currentColor" strokeWidth="0.6" />
      <rect x="11" y="7" width="3" height="3" stroke="currentColor" strokeWidth="0.6" />
      <path d="M2 15c1 3 4 5 9 5 6 0 10-3 11-8" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  ),
  // Git branch
  (s: number) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="7" cy="6" r="2" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="17" cy="10" r="2" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="0.8" />
      <path d="M7 8v8M9 6.5c3 1 6 2 8 3.5" stroke="currentColor" strokeWidth="0.7" />
    </svg>
  ),
  // API brackets
  (s: number) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M8 4L4 12l4 8" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M16 4l4 8-4 8" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M14 4l-4 16" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
    </svg>
  ),
  // Socket/plug
  (s: number) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="0.7" />
      <path d="M12 3v4M8 5l2 3M16 5l-2 3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
      <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  ),
  // Cloud
  (s: number) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M6 19a4 4 0 01-.85-7.91A6 6 0 0117.27 8.6 5 5 0 0118 19H6z" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  ),
  // Terminal
  (s: number) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="0.8" />
      <path d="M7 10l3 2-3 2" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 14h4" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  ),
];

interface FloatingIcon {
  id: number;
  iconIndex: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  rotation: number;
}

function generateIcons(count: number): FloatingIcon[] {
  const icons: FloatingIcon[] = [];
  for (let i = 0; i < count; i++) {
    icons.push({
      id: i,
      iconIndex: i % techIcons.length,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 28,
      opacity: 0.04 + Math.random() * 0.08,
      duration: 15 + Math.random() * 25,
      delay: Math.random() * -20,
      driftX: -30 + Math.random() * 60,
      driftY: -40 + Math.random() * 80,
      rotation: Math.random() * 360,
    });
  }
  return icons;
}

export default function FloatingBackground() {
  const [icons] = useState(() => generateIcons(30));
  const [glowOffset, setGlowOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setGlowOffset(window.scrollY * 0.15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="floating-bg" aria-hidden="true">
      {/* Global ambient glows that follow scroll */}
      <div
        className="global-glow global-glow-1"
        style={{ transform: `translateY(${glowOffset}px)` }}
      />
      <div
        className="global-glow global-glow-2"
        style={{ transform: `translateY(${glowOffset * 0.6}px)` }}
      />
      <div
        className="global-glow global-glow-3"
        style={{ transform: `translateY(${glowOffset * 0.8}px)` }}
      />

      {/* Floating tech icons */}
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="floating-icon"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            opacity: icon.opacity,
            color: 'rgba(120, 180, 130, 0.9)',
            animationDuration: `${icon.duration}s`,
            animationDelay: `${icon.delay}s`,
            ['--drift-x' as string]: `${icon.driftX}px`,
            ['--drift-y' as string]: `${icon.driftY}px`,
            ['--rotation' as string]: `${icon.rotation}deg`,
          }}
        >
          {techIcons[icon.iconIndex](icon.size)}
        </div>
      ))}
    </div>
  );
}
