import { motion } from 'framer-motion';
import { experiences, education } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section-padding section-gradient">
      <div className="container">
        <div className="sec-head">
          <span className="sec-label">Experience</span>
          <h2 className="sec-title">Work History</h2>
          <p className="sec-desc">My professional journey building real-world products at scale</p>
        </div>

        <div className="d-flex flex-column gap-4" style={{ maxWidth: 900, margin: '0 auto' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="card-custom exp-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="d-flex justify-content-between align-items-start gap-3 mb-4">
                <div>
                  <p className={exp.type === 'fulltime' ? 'exp-type-ft' : 'exp-type-intern'}>
                    {exp.type === 'fulltime' ? '● Full-time' : '◌ Internship'}
                  </p>
                  <h3 className="exp-company">{exp.company}</h3>
                  <p className="exp-role">{exp.role} · {exp.location}</p>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>

              <p className="exp-desc">{exp.description}</p>

              <div className="row g-2">
                {exp.achievements.map((a, i) => (
                  <div key={i} className="col-md-6 exp-ach">
                    <span className="exp-ach-arrow">→</span> {a}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-5 pt-4">
          <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 700, color: 'var(--cream)', textAlign: 'center', marginBottom: 40 }}>
            Education
          </h3>
          <div className="row g-4 justify-content-center" style={{ maxWidth: 800, margin: '0 auto' }}>
            {education.map((edu, index) => (
              <div key={index} className="col-md-6">
                <motion.div
                  className="card-custom p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="d-flex align-items-start gap-3">
                    <div className="edu-icon">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#ECDFCC" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 600, fontSize: 14, color: 'var(--cream)' }}>{edu.institution}</h4>
                      <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 4 }}>{edu.degree} - {edu.field}</p>
                      {edu.grade && <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 4 }}>{edu.grade}</p>}
                      {edu.period && <p style={{ fontSize: 11, color: 'rgba(105,117,101,0.6)' }}>{edu.period}</p>}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
