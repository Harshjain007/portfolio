import Projects from './Projects';
import Timeline from './Timeline';

/** Work section — selected projects beside the career/education timeline. */
export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="split">
          <Projects />
          <Timeline />
        </div>
      </div>
    </section>
  );
}
