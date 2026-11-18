import { useEffect, useId, useMemo, useRef, useState } from 'react';
import {
  AnimatePresence,
  LayoutGroup,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion';
import type { Product, Visual } from '../data/products';
import { EASE } from '../hooks/ease';

const STEP_SECONDS = 6.5;

/* ───────────── visual renderers ───────────── */

function ImageVisual({ v }: { v: Extract<Visual, { kind: 'image' }> }) {
  return (
    <motion.img
      className="vis-img"
      src={v.src}
      alt={v.alt}
      loading="lazy"
      initial={{ scale: 1.06 }}
      animate={{ scale: 1 }}
      transition={{ duration: 6, ease: 'linear' }}
    />
  );
}

function TerminalVisual({ v }: { v: Extract<Visual, { kind: 'terminal' }> }) {
  return (
    <div className="vis-term" role="img" aria-label={v.title}>
      <p className="vis-term__title">{v.title}</p>
      {v.lines.map((l, i) => (
        <motion.p
          key={i}
          className={`vis-term__line vis-term__line--${l.k}`}
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
          animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          transition={{ delay: 0.25 + i * 0.4, duration: 0.45, ease: 'easeOut' }}
        >
          {l.k === 'cmd' && <span className="accent">$ </span>}
          {l.s}
        </motion.p>
      ))}
      <motion.span
        className="caret"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 + v.lines.length * 0.4 }}
      />
    </div>
  );
}

function FlowVisual({ v }: { v: Extract<Visual, { kind: 'flow' }> }) {
  const [lit, setLit] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setLit((x) => (x + 1) % v.nodes.length), 1100);
    return () => clearInterval(t);
  }, [v.nodes.length]);

  return (
    <div className="vis-flow">
      {v.note && <p className="vis-flow__note">{v.note}</p>}
      {v.nodes.map((n, i) => (
        <div key={n} className="vis-flow__item">
          <motion.div
            className={`vis-flow__node${lit === i ? ' is-lit' : ''}`}
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: lit === i ? 1.04 : 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.4, ease: EASE }}
          >
            <span className="vis-flow__idx">{String(i + 1).padStart(2, '0')}</span>
            {n}
          </motion.div>
          {i < v.nodes.length - 1 && (
            <motion.span
              className="vis-flow__link"
              aria-hidden="true"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              style={{ originY: 0 }}
              transition={{ delay: i * 0.12 + 0.2, duration: 0.3 }}
            >
              {lit === i && (
                <motion.i
                  className="vis-flow__pulse"
                  initial={{ top: '0%' }}
                  animate={{ top: '100%' }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                />
              )}
            </motion.span>
          )}
        </div>
      ))}
    </div>
  );
}

interface BoardItem {
  id: string;
  text: string;
}
type BoardCols = { title: string; items: BoardItem[] }[];

/** The first card of each column hops one column to the right, step by step. */
function boardAt(initial: BoardCols, tick: number): BoardCols {
  const cols: BoardCols = initial.map((c) => ({ title: c.title, items: [...c.items] }));
  for (let k = 0; k < tick; k++) {
    const from = k % Math.max(cols.length - 1, 1);
    const item = cols[from]?.items.shift();
    if (item && cols[from + 1]) cols[from + 1].items.push(item);
  }
  return cols;
}

function BoardVisual({ v }: { v: Extract<Visual, { kind: 'board' }> }) {
  const initial = useMemo<BoardCols>(
    () => v.columns.map((c, ci) => ({ title: c.title, items: c.items.map((text, ii) => ({ id: `${ci}-${ii}`, text })) })),
    [v.columns],
  );
  const [tick, setTick] = useState(0);
  const cycle = Math.max(v.columns.length, 2);
  const gid = useId();

  useEffect(() => {
    const t = setInterval(() => setTick((x) => (x + 1) % cycle), 1700);
    return () => clearInterval(t);
  }, [cycle]);

  const cols = boardAt(initial, tick);

  return (
    <LayoutGroup id={gid}>
      <div className="vis-board" style={{ gridTemplateColumns: `repeat(${cols.length}, minmax(0, 1fr))` }}>
        {cols.map((c, ci) => (
          <motion.div
            key={c.title}
            className="vis-board__col"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.08, duration: 0.45, ease: EASE }}
          >
            <p className="vis-board__head">
              {c.title} <span>{c.items.length}</span>
            </p>
            {c.items.map((it) => (
              <motion.div
                key={it.id}
                layoutId={it.id}
                className="vis-board__card"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              >
                {it.text}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </LayoutGroup>
  );
}

function MetricsVisual({ v }: { v: Extract<Visual, { kind: 'metrics' }> }) {
  return (
    <div className="vis-metrics">
      {v.items.map((m, i) => (
        <motion.div
          key={m.label}
          className="vis-metrics__card"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1 + i * 0.14, type: 'spring', stiffness: 220, damping: 18 }}
          whileHover={{ y: -4 }}
        >
          <strong>{m.value}</strong>
          <span>{m.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

function VisualView({ v }: { v: Visual }) {
  switch (v.kind) {
    case 'image':
      return <ImageVisual v={v} />;
    case 'terminal':
      return <TerminalVisual v={v} />;
    case 'flow':
      return <FlowVisual v={v} />;
    case 'board':
      return <BoardVisual v={v} />;
    case 'metrics':
      return <MetricsVisual v={v} />;
  }
}

/* ───────────── the player ───────────── */

/** Auto-advancing step player: step list on the left, animated "screen" on the right. */
export default function Walkthrough({ product }: { product: Product }) {
  const [i, setI] = useState(0);
  const [hover, setHover] = useState(false);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.35 });
  const reduce = useReducedMotion();
  const n = product.steps.length;

  const progress = useMotionValue(0);
  const ctl = useRef<ReturnType<typeof animate> | null>(null);
  const running = inView && !hover && !paused && !reduce;

  // Restart the progress bar whenever the step changes.
  useEffect(() => {
    progress.set(0);
    const c = animate(progress, 1, {
      duration: STEP_SECONDS,
      ease: 'linear',
      onComplete: () => setI((v) => (v + 1) % n),
    });
    ctl.current = c;
    if (!running) c.pause();
    return () => c.stop();
    // `running` is handled by the effect below so pausing never resets progress.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, n, progress]);

  useEffect(() => {
    if (running) ctl.current?.play();
    else ctl.current?.pause();
  }, [running]);

  const width = useTransform(progress, (p) => `${p * 100}%`);
  const step = product.steps[i];
  const illustrative = step.visual.kind !== 'image';

  return (
    <div
      ref={rootRef}
      className="wt"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ol className="wt__steps">
        {product.steps.map((s, idx) => {
          const active = idx === i;
          return (
            <li key={s.title}>
              <button
                type="button"
                className={`wt__step${active ? ' is-active' : ''}`}
                onClick={() => setI(idx)}
                aria-current={active ? 'step' : undefined}
              >
                <span className="wt__num">{String(idx + 1).padStart(2, '0')}</span>
                <span className="wt__body">
                  <span className="wt__title">{s.title}</span>
                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.span
                        className="wt__text"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                      >
                        {s.text}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
                <span className="wt__bar" aria-hidden="true">
                  {active && <motion.span className="wt__fill" style={{ width }} />}
                  {idx < i && <span className="wt__fill wt__fill--done" />}
                </span>
              </button>
            </li>
          );
        })}
        <li className="wt__controls">
          <button type="button" className="wt__play" onClick={() => setPaused((p) => !p)}>
            {paused || reduce ? '▶ Play' : '❚❚ Pause'}
          </button>
          <span>
            step {i + 1} / {n}
          </span>
        </li>
      </ol>

      <div className="wt__stage">
        <div className="wt__chrome">
          <span /> <span /> <span />
          <b>{product.name}</b>
          {illustrative && <em>illustrative</em>}
        </div>
        <div className="wt__screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${product.id}-${i}`}
              className="wt__view"
              initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
              transition={{ duration: 0.32, ease: EASE }}
            >
              <VisualView v={step.visual} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
