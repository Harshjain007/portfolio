import { useState } from 'react';
import { siteConfig } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './icons';

const FORMSPREE_URL = 'https://formspree.io/f/mlgwvlvw';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<FormStatus>('idle');

  const update = (field: keyof typeof EMPTY_FORM) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: formData.subject || `Portfolio contact from ${formData.name}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData(EMPTY_FORM);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="sec-label">Contact</h2>

        <div className="contact__grid">
          {/* ── Details ── */}
          <div className="panel contact__card">
            <h3 className="contact__title">Get in touch</h3>
            <p className="contact__desc">
              Open to senior full stack roles, freelance builds and collaborations on
              real-time or AI-driven products.
            </p>

            <div className="contact__rows">
              <a className="contact__row" href={`mailto:${siteConfig.email}`}>
                <span className="contact__key">Email</span>
                <span className="contact__val">{siteConfig.email}</span>
              </a>
              <a className="contact__row" href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>
                <span className="contact__key">Phone</span>
                <span className="contact__val">{siteConfig.phone}</span>
              </a>
              <div className="contact__row">
                <span className="contact__key">Location</span>
                <span className="contact__val">{siteConfig.location}</span>
              </div>
            </div>

            <div className="socials">
              <a
                className="social"
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                className="social"
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* ── Form ── */}
          <form onSubmit={handleSubmit} className="panel form">
            <div className="field">
              <label className="field__label" htmlFor="cf-name">Your name</label>
              <input
                id="cf-name"
                className="field__input"
                type="text"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={update('name')}
                required
              />
            </div>

            <div className="field">
              <label className="field__label" htmlFor="cf-email">Email address</label>
              <input
                id="cf-email"
                className="field__input"
                type="email"
                placeholder="jane@company.com"
                value={formData.email}
                onChange={update('email')}
                required
              />
            </div>

            <div className="field">
              <label className="field__label" htmlFor="cf-subject">Subject</label>
              <input
                id="cf-subject"
                className="field__input"
                type="text"
                placeholder="Project inquiry"
                value={formData.subject}
                onChange={update('subject')}
              />
            </div>

            <div className="field">
              <label className="field__label" htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                className="field__input"
                placeholder="Tell me about the role or project..."
                value={formData.message}
                onChange={update('message')}
                required
              />
            </div>

            {status === 'success' && (
              <p className="form__alert form__alert--ok" role="status">
                ✓ Message sent — I'll get back to you shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="form__alert form__alert--err" role="alert">
                ✕ Something went wrong. Please email me directly.
              </p>
            )}

            <button type="submit" className="btn btn--solid" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
