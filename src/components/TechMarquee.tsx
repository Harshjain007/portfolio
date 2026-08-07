import { marqueeTech } from '../data/portfolio';

/** Infinite scrolling technology strip. The list is duplicated so the
 *  -50% keyframe translation loops seamlessly. */
export default function TechMarquee() {
  const loop = [...marqueeTech, ...marqueeTech];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((tech, i) => (
          <span className="marquee__item" key={`${tech}-${i}`}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
