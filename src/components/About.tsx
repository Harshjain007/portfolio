import { aboutHighlights } from '../data/portfolio';
import { SectionLabel, Stagger, StaggerItem } from './motion';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionLabel>Why teams work with me</SectionLabel>

        <Stagger className="about__grid">
          {aboutHighlights.map((highlight, i) => (
            <StaggerItem key={highlight} className="about__item">
              <span className="about__idx">{String(i + 1).padStart(2, '0')}</span>
              <span>{highlight}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
