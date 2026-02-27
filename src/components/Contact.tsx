import { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/portfolio';

const FORMSPREE_URL = 'https://formspree.io/f/mlgwvlvw';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Contact from ' + formData.name,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="sec-head">
          <span className="sec-label">Contact</span>
          <h2 className="sec-title">Let's Build Something</h2>
          <p className="sec-desc">Open to full-time roles, freelance projects, and exciting collaborations</p>
        </div>

        <div className="row g-4" style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Info Side */}
          <div className="col-lg-6">
            <div className="card-custom contact-main-card h-100">
              <h3 className="contact-title">Get In Touch</h3>
              <p className="contact-desc">
                Have a project in mind or looking for a skilled developer? Let's connect and create something impactful together.
              </p>

              <div className="d-flex flex-column gap-3">
                <a href={'mailto:' + siteConfig.email} className="d-flex align-items-center gap-3 text-decoration-none">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <div className="contact-info-val">{siteConfig.email}</div>
                  </div>
                </a>
                {/* <div className="d-flex align-items-center gap-3"> */}
                  {/* <div className="contact-icon">📞</div> */}
                  {/* <div>
                    <div className="contact-info-label">Phone</div>
                    <div className="contact-info-val">{siteConfig.phone}</div>
                  </div> */}
                {/* </div> */}
                <div className="d-flex align-items-center gap-3">
                  <div className="contact-icon">📍</div>
                  <div>
                    <div className="contact-info-label">Location</div>
                    <div className="contact-info-val">{siteConfig.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="d-flex gap-3 mt-4 pt-2">
                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="social-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="social-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="card-custom contact-form-card h-100">
              <div className="mb-4">
                <label className="form-label-custom">Your Name</label>
                <input
                  type="text"
                  className="form-input-custom"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label-custom">Email Address</label>
                <input
                  type="email"
                  className="form-input-custom"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label-custom">Subject</label>
                <input
                  type="text"
                  className="form-input-custom"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="form-label-custom">Message</label>
                <textarea
                  className="form-input-custom"
                  placeholder="Tell me about your project or opportunity..."
                  style={{ height: 120, resize: 'none' }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              {status === 'success' && (
                <div className="mb-3 p-3" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 8, color: '#10b981', fontSize: 14, textAlign: 'center' }}>
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="mb-3 p-3" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 8, color: '#ef4444', fontSize: 14, textAlign: 'center' }}>
                  ❌ Failed to send message. Please try again or email me directly.
                </div>
              )}
              <motion.button
                type="submit"
                className="btn-primary-custom w-100 justify-content-center"
                style={{ padding: '14px', opacity: status === 'sending' ? 0.7 : 1 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    Sending...
                    <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
