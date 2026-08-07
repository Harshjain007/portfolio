import { motion } from 'framer-motion';
import { education, experiences } from '../data/portfolio';

interface TimelineEntry {
  id: string;
  period: string;
  heading: string;
  sub: string;
  points: string[];
  muted?: boolean;
}

/** Experience and education flattened into one chronological rail. */
function buildEntries(): TimelineEntry[] {
  const roles: TimelineEntry[] = experiences.map((job) => ({
    id: `${job.company}-${job.period}`,
    period: job.period,
    heading: job.role,
    sub: `${job.company}, ${job.location}`,
    points: job.achievements.slice(0, 3),
  }));

  const study: TimelineEntry[] = education.map((item) => ({
    id: `${item.institution}-${item.period}`,
    period: item.period || '—',
    heading: item.grade
      ? `${item.degree}, ${item.field} — CGPA ${item.grade.replace(' CGPA', '')}`
      : `${item.degree}, ${item.field}`,
    sub: item.institution,
    points: [],
    muted: true,
  }));

  return [...roles, ...study];
}

/** Right column of the Work section. */
export default function Timeline() {
  const entries = buildEntries();

  return (
    <div id="timeline">
      <h2 className="sec-label">Timeline</h2>

      <div className="timeline">
        {entries.map((entry, i) => (
          <motion.div
            className={`tl-item${entry.muted ? ' tl-item--muted' : ''}`}
            key={entry.id}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.05, duration: 0.45 }}
          >
            <article className="panel panel--hover tl-card">
              <p className="tl-period">{entry.period}</p>
              <h3 className="tl-role">{entry.heading}</h3>
              <p className="tl-org">{entry.sub}</p>
              {entry.points.length > 0 && (
                <ul className="tl-points">
                  {entry.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </article>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
