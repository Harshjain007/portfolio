export interface Service {
  id: string;
  title: string;
  blurb: string;
  points: string[];
  proof: string[];
  /** SVG path(s) for the animated line icon (24×24 viewBox). */
  icon: string[];
}

export const services: Service[] = [
  {
    id: 'realtime',
    title: 'Real-time backends',
    blurb:
      'Socket.IO and WebSocket systems that stay correct under load — rooms, reconnection, state sync and Redis fan-out.',
    points: [
      'Multiplayer / live-state architecture',
      'Reconnect, resume and ordering guarantees',
      'A short written reliability audit of your existing real-time layer',
    ],
    proof: ['WeUMeet', 'Web Streaming Platform', 'PokerOne'],
    icon: ['M3 12h4l3-8 4 16 3-8h4'],
  },
  {
    id: 'gaming',
    title: 'Gaming & iGaming platforms',
    blurb:
      'Game front ends, round engines, wallets and back-office tooling — plus white-label skinning so one codebase serves many brands.',
    points: [
      'React + PixiJS game UIs',
      'Admin panels: transactions, rounds, user and IP monitoring',
      'Provider integrations and branded re-skins',
    ],
    proof: ['GameSkin Studio', 'AfterHours / LiveChance', 'Multi-gaming B2B platform'],
    icon: ['M6 8h12a4 4 0 0 1 4 4v1a3 3 0 0 1-5.2 2L15 13H9l-1.8 2A3 3 0 0 1 2 13v-1a4 4 0 0 1 4-4z', 'M7 10.5v3M5.5 12h3'],
  },
  {
    id: 'saas',
    title: 'SaaS MVPs & dashboards',
    blurb:
      'Multi-tenant products with auth, roles, billing and the dashboards your team actually uses — scoped tight and shipped in slices.',
    points: [
      'Multi-tenant data model and RBAC',
      'Stripe billing, webhooks, email and background jobs',
      'Dockerized setup your next developer can run in one command',
    ],
    proof: ['Parrot', 'Contriii CRM', 'FlowDesk'],
    icon: ['M3 4h18v12H3z', 'M8 20h8M12 16v4', 'M7 12l3-3 3 2 4-4'],
  },
  {
    id: 'ai',
    title: 'AI features & internal tools',
    blurb:
      'LLM features that are useful and verifiable — local or hosted models, agents and MCP, plus bots and desktop tools that remove manual work.',
    points: [
      'LLM integrations with human approval where it matters',
      'Local / private model setups',
      'Automation bots, Electron desktop apps, VS Code extensions',
    ],
    proof: ['hiref', 'TalentForge + PrepOS', 'Content Digest Bot'],
    icon: ['M12 3l1.8 4.6L18.5 9l-4.7 1.4L12 15l-1.8-4.6L5.5 9l4.7-1.4z', 'M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z'],
  },
];

export const process = [
  { title: 'Intro call', text: 'A short conversation about your goal, users and constraints — then I tell you plainly if I’m the right fit.' },
  { title: 'Scoped plan', text: 'A written scope with milestones, so you know what ships first and what it takes.' },
  { title: 'Build in slices', text: 'A working vertical slice early, then regular demos — you see progress, not promises.' },
  { title: 'Hand-off', text: 'Docs, tests where they count, a one-command setup and a walkthrough so you’re never locked in.' },
];

export const engagements = [
  { title: 'Fixed-scope project', text: 'A defined deliverable at an agreed price — best for MVPs and clear features.' },
  { title: 'Monthly / hourly', text: 'Ongoing capacity for evolving products and teams that need a senior engineer on call.' },
  { title: 'Short audit', text: 'A few days on one question — e.g. “why does our real-time layer drop connections?” — with a written report.' },
];
