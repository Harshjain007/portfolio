import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { categories, featuredProducts, products, type Category, type Product, type Status } from '../data/products';
import Walkthrough from './Walkthrough';
import { Reveal, SectionLabel } from './motion';
import { EASE } from '../hooks/ease';

const TONE: Record<Status, 'ok' | 'mid' | 'low'> = {
  Published: 'ok',
  'Shipped app': 'ok',
  Live: 'ok',
  'Working build': 'mid',
  'Early build': 'low',
  'In progress': 'low',
};

function StatusBadge({ status }: { status: Status }) {
  return <span className={`dotbadge dotbadge--${TONE[status]}`}>{status}</span>;
}

function Links({ product }: { product: Product }) {
  if (!product.links?.length) return null;
  return (
    <div className="work__links">
      {product.links.map((l) => (
        <a key={l.href} className="work__link" href={l.href} target="_blank" rel="noopener noreferrer">
          ↗ {l.label}
        </a>
      ))}
    </div>
  );
}

/* ───────────── Featured: big panels with an inline, auto-playing walkthrough ───────────── */

function FeaturedProduct({ product, index }: { product: Product; index: number }) {
  return (
    <motion.article
      className="panel feat"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: EASE }}
    >
      <header className="feat__head">
        <div>
          <p className="feat__kicker">
            <span className="feat__no">{String(index + 1).padStart(2, '0')}</span>
            {product.category}
          </p>
          <h3 className="feat__name">{product.name}</h3>
          <p className="feat__tag">{product.tagline}</p>
        </div>
        <StatusBadge status={product.status} />
      </header>

      <div className="feat__cols">
        <p className="feat__sum">{product.summary}</p>
        <p className="feat__proves">
          <b>Good fit for</b>
          {product.fit}
        </p>
      </div>

      <Walkthrough product={product} />

      <footer className="feat__foot">
        <div className="work__tags">
          {product.stack.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <Links product={product} />
      </footer>
    </motion.article>
  );
}

/* ───────────── Grid card with 3D tilt + cursor spotlight ───────────── */

function ProductCard({ product, onOpen }: { product: Product; onOpen: (p: Product) => void }) {
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const spot = useMotionTemplate`radial-gradient(260px circle at ${mx}% ${my}%, var(--accent-soft), transparent 70%)`;

  return (
    <motion.article
      layout
      className="panel pcard"
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.4, ease: EASE }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        mx.set(px * 100);
        my.set(py * 100);
        ry.set((px - 0.5) * 9);
        rx.set((0.5 - py) * 9);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      whileTap={{ scale: 0.985 }}
    >
      <motion.span className="pcard__spot" style={{ background: spot }} aria-hidden="true" />
      <div className="pcard__top">
        <span className="pcard__cat">{product.category}</span>
        <StatusBadge status={product.status} />
      </div>
      <h3 className="pcard__name">{product.name}</h3>
      <p className="pcard__tag">{product.tagline}</p>
      <div className="work__tags">
        {product.stack.slice(0, 4).map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <button type="button" className="pcard__play" onClick={() => onOpen(product)}>
        <motion.span className="pcard__tri" whileHover={{ scale: 1.15 }}>
          ▶
        </motion.span>
        Watch walkthrough
        <em>{product.steps.length} steps</em>
      </button>
    </motion.article>
  );
}

/* ───────────── Modal ───────────── */

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="panel modal__panel"
        role="dialog"
        aria-modal="true"
        aria-label={`${product.name} walkthrough`}
        initial={{ opacity: 0, y: 60, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal__close" onClick={onClose} aria-label="Close walkthrough" autoFocus>
          ✕
        </button>
        <header className="feat__head">
          <div>
            <p className="feat__kicker">{product.category}</p>
            <h3 className="feat__name">{product.name}</h3>
            <p className="feat__tag">{product.tagline}</p>
          </div>
          <StatusBadge status={product.status} />
        </header>
        <div className="feat__cols">
          <p className="feat__sum">{product.summary}</p>
          <p className="feat__proves">
            <b>Good fit for</b>
            {product.fit}
          </p>
        </div>
        <Walkthrough product={product} />
        <footer className="feat__foot">
          <div className="work__tags">
            {product.stack.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <div className="work__links">
            {product.links?.map((l) => (
              <a key={l.href} className="work__link" href={l.href} target="_blank" rel="noopener noreferrer">
                ↗ {l.label}
              </a>
            ))}
            <a className="work__link" href="#contact" onClick={onClose}>
              → Want something like this?
            </a>
          </div>
        </footer>
      </motion.div>
    </motion.div>
  );
}

/* ───────────── Section ───────────── */

type Filter = 'All' | Category;

export default function Products() {
  const rest = products.filter((p) => !p.featured);
  const [filter, setFilter] = useState<Filter>('All');
  const [open, setOpen] = useState<Product | null>(null);

  const available = categories.filter((c) => rest.some((p) => p.category === c));
  const chips: Filter[] = ['All', ...available];
  const shown = filter === 'All' ? rest : rest.filter((p) => p.category === filter);

  return (
    <section id="products" className="section">
      <div className="container">
        <SectionLabel>Products · built end to end</SectionLabel>

        <Reveal>
          <div className="prod-intro">
            <h2 className="prod-intro__title">
              {products.length} products I designed, built and ran myself.
            </h2>
            <p className="prod-intro__sub">
              Each one is real, working code. Press play on a walkthrough to see how it works — the badge on every product shows
              whether it is shipped, a working build or still early.
            </p>
          </div>
        </Reveal>

        <div className="feat-stack">
          {featuredProducts.map((p, i) => (
            <FeaturedProduct key={p.id} product={p} index={i} />
          ))}
        </div>

        <Reveal>
          <div className="prod-more">
            <h3 className="prod-more__title">More products</h3>
            <div className="chips" role="tablist" aria-label="Filter products">
              {chips.map((c) => (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={filter === c}
                  className={`chip${filter === c ? ' chip--active' : ''}`}
                  onClick={() => setFilter(c)}
                >
                  {filter === c && <motion.span className="chip__bg" layoutId="chip-bg" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                  <span className="chip__label">
                    {c}
                    <i>{c === 'All' ? rest.length : rest.filter((p) => p.category === c).length}</i>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <motion.div layout className="pgrid">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <ProductCard key={p.id} product={p} onOpen={setOpen} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {createPortal(
        <AnimatePresence>{open && <ProductModal key={open.id} product={open} onClose={() => setOpen(null)} />}</AnimatePresence>,
        document.body,
      )}
    </section>
  );
}
