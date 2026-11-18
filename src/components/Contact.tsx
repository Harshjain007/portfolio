import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { siteConfig } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './icons';
import { SectionLabel } from './motion';
import { EASE } from '../hooks/ease';

const FORMSPREE_URL = 'https://formspree.io/f/mlgwvlvw';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const EMPTY_FORM = { name: '', email: '', subject: '', message: '', budget: '', timeline: '' };

const NEEDS = [
  'Real-time backend',
  'Gaming / iGaming platform',
  'SaaS MVP or dashboard',
  'AI feature or tool',
  'Reliability audit',
  'Something else',
];

const BUDGETS = ['Not sure yet', 'Under $1k', '$1k – $5k', '$5k – $15k', '$15k+'];
const TIMELINES = ['Flexible', 'Within a month', '1 – 3 months', '3+ months'];

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [needs, setNeeds] = useState<string[]>([]);
  const [status, setStatus] = useState<FormStatus>('idle');

  const update =
    (field: keyof typeof EMPTY_FORM) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const toggleNeed = (n: string) =>
    setNeeds((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...formData,
          project_needs: needs.join(', '),
          subject: formData.subject || `Project inquiry from ${formData.name}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData(EMPTY_FORM);
        setNeeds([]);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 6000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionLabel>Contact</SectionLabel>

        <div className="contact__grid">
          {/* ── Details ── */}
          <motion.div
            className="panel contact__card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h3 className="contact__title">Let’s talk about your project</h3>
            <p className="contact__desc">
              I’m available for freelance builds and contracts — real-time systems, gaming platforms, SaaS MVPs and AI-powered tools. Tell
              me what you need and I’ll reply personally.
            </p>

            <div className="contact__rows">
              <a className="contact__row" href={`mailto:${siteConfig.email}`}>
                <span className="contact__key">Email</span>
                <span className="contact__val">{siteConfig.email}</span>
              </a>
              <div className="contact__row">
                <span className="contact__key">Working</span>
                <span className="contact__val">{siteConfig.location}</span>
              </div>
            </div>

            <div className="socials">
              <motion.a
                className="social"
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ y: -4, rotate: -6 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                className="social"
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ y: -4, rotate: 6 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedinIcon />
              </motion.a>
            </div>
          </motion.div>

          {/* ── Form ── */}
          <motion.form
            onSubmit={handleSubmit}
            className="panel form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="field">
              <span className="field__label">What do you need?</span>
              <div className="needs" role="group" aria-label="Project needs">
                {NEEDS.map((n) => {
                  const on = needs.includes(n);
                  return (
                    <motion.button
                      key={n}
                      type="button"
                      className={`need${on ? ' need--on' : ''}`}
                      aria-pressed={on}
                      onClick={() => toggleNeed(n)}
                      whileTap={{ scale: 0.92 }}
                      animate={{ scale: on ? 1.04 : 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      {on ? '✓ ' : ''}
                      {n}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="field__row">
              <div className="field">
                <label className="field__label" htmlFor="cf-name">Your name</label>
                <input id="cf-name" className="field__input" type="text" placeholder="Jane Doe" value={formData.name} onChange={update('name')} required />
              </div>
              <div className="field">
                <label className="field__label" htmlFor="cf-email">Email address</label>
                <input id="cf-email" className="field__input" type="email" placeholder="jane@company.com" value={formData.email} onChange={update('email')} required />
              </div>
            </div>

            <div className="field__row">
              <div className="field">
                <label className="field__label" htmlFor="cf-budget">Budget (optional)</label>
                <select id="cf-budget" className="field__input" value={formData.budget} onChange={update('budget')}>
                  <option value="">Select…</option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label className="field__label" htmlFor="cf-timeline">Timeline (optional)</label>
                <select id="cf-timeline" className="field__input" value={formData.timeline} onChange={update('timeline')}>
                  <option value="">Select…</option>
                  {TIMELINES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <label className="field__label" htmlFor="cf-subject">Subject</label>
              <input id="cf-subject" className="field__input" type="text" placeholder="Project inquiry" value={formData.subject} onChange={update('subject')} />
            </div>

            <div className="field">
              <label className="field__label" htmlFor="cf-message">Tell me about it</label>
              <textarea id="cf-message" className="field__input" placeholder="What are you building, who is it for, and what does done look like?" value={formData.message} onChange={update('message')} required />
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.p key="ok" className="form__alert form__alert--ok" role="status" initial={{ opacity: 0, y: 8, height: 0 }} animate={{ opacity: 1, y: 0, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                  ✓ Message sent — I’ll get back to you shortly.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p key="err" className="form__alert form__alert--err" role="alert" initial={{ opacity: 0, y: 8, height: 0 }} animate={{ opacity: 1, y: 0, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                  ✕ Something went wrong. Please email me directly.
                </motion.p>
              )}
            </AnimatePresence>

            <motion.button type="submit" className="btn btn--solid" disabled={status === 'sending'} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              {status === 'sending' ? 'Sending…' : 'Send project inquiry →'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
