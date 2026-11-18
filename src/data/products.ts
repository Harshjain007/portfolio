/* Products I have built outside client work. Every claim below comes from the
   project's own README / PRD — statuses are deliberately honest. */

export type Category =
  | 'Developer tools'
  | 'AI apps'
  | 'SaaS platforms'
  | 'Real-time & video'
  | 'iGaming'
  | 'Consumer & mobile';

export const categories: Category[] = [
  'Developer tools',
  'AI apps',
  'SaaS platforms',
  'Real-time & video',
  'iGaming',
  'Consumer & mobile',
];

export type Status =
  | 'Published'
  | 'Shipped app'
  | 'Live'
  | 'Working build'
  | 'Early build'
  | 'In progress';

export type TermKind = 'cmd' | 'out' | 'ok' | 'warn' | 'dim';
export interface TermLine {
  k: TermKind;
  s: string;
}

export type Visual =
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'terminal'; title: string; lines: TermLine[] }
  | { kind: 'flow'; nodes: string[]; note?: string }
  | { kind: 'board'; columns: { title: string; items: string[] }[] }
  | { kind: 'metrics'; items: { value: string; label: string }[] };

export interface Step {
  title: string;
  text: string;
  visual: Visual;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: Category;
  status: Status;
  summary: string;
  /** Who or what this product is relevant for, written for a prospective client. */
  fit: string;
  stack: string[];
  steps: Step[];
  featured?: boolean;
  links?: { label: string; href: string }[];
}

const img = (file: string) => `${import.meta.env.BASE_URL}products/${file}`;

export const products: Product[] = [
  /* ───────────────────────── Featured ───────────────────────── */
  {
    id: 'papagit',
    name: 'PapaGit',
    tagline: 'A desktop Git client with no account and no paywall',
    category: 'Developer tools',
    status: 'Shipped app',
    featured: true,
    summary:
      'A GitKraken-style desktop Git client for macOS, Windows and Linux. It wraps the real git CLI, so hooks, config and credentials just work — and AI features run on your own keys.',
    fit: "Polished cross-platform desktop apps — packaging, custom visualisation, a guided first-run tour and automated UI tests are all part of how this was built.",
    stack: ['Electron', 'Node.js', 'Git CLI', 'SVG graph layout', 'Playwright'],
    steps: [
      {
        title: 'See your history as a graph',
        text: 'Every branch, tag and stash on one commit graph, with a working-changes panel and a command bar for everything else.',
        visual: { kind: 'image', src: img('papagit-graph.webp'), alt: 'PapaGit commit graph with branches and working changes' },
      },
      {
        title: 'Rebase without fear',
        text: 'Reorder, squash and drop commits visually. Conflict prediction warns you before you merge (git 2.38+).',
        visual: { kind: 'image', src: img('papagit-rebase.webp'), alt: 'PapaGit interactive rebase view' },
      },
      {
        title: 'Review PRs from one inbox',
        text: 'Connect GitHub with your own token and triage pull requests next to your local branches.',
        visual: { kind: 'image', src: img('papagit-inbox.webp'), alt: 'PapaGit pull request inbox' },
      },
      {
        title: 'AI that uses your keys',
        text: 'Draft commit messages and summaries with the model provider you choose — nothing routed through a vendor of mine.',
        visual: { kind: 'image', src: img('papagit-ai.webp'), alt: 'PapaGit AI assistance sheet' },
      },
    ],
  },
  {
    id: 'api-engine',
    name: 'API-Engine',
    tagline: 'Your Express API contract, read straight from the code',
    category: 'Developer tools',
    status: 'Published',
    featured: true,
    summary:
      'Statically scans Express services — no annotations, no running server — and commits a small JSON contract per branch. Gives teams PR breaking-change diffs, a local Postman-style workspace and OpenAPI exports.',
    fit: "Developer tooling and internal platforms — a published CLI, a CI check that catches breaking changes before they merge, and shared docs that stay in sync with the code.",
    stack: ['Node.js', 'TypeScript', 'Static analysis', 'GitHub Actions', 'OpenAPI 3.1'],
    links: [{ label: 'npm package', href: 'https://www.npmjs.com/package/@binary-head/api-engine-cli' }],
    steps: [
      {
        title: 'Three commands to set up',
        text: 'Install, init, open. A pre-commit hook keeps the contract in step with the code and never blocks a commit.',
        visual: {
          kind: 'terminal',
          title: 'your-service — zsh',
          lines: [
            { k: 'cmd', s: 'npm i -D @binary-head/api-engine-cli' },
            { k: 'cmd', s: 'npx api-engine init' },
            { k: 'ok', s: '✓ found Express service · git hooks added · .api-engine/ written' },
            { k: 'cmd', s: 'npx api-engine ui' },
            { k: 'out', s: '→ workspace on http://127.0.0.1:4100' },
          ],
        },
      },
      {
        title: 'Browse every endpoint',
        text: 'Routes, request schemas, response shapes, auth guards and Socket.IO events — documented from the code itself, with a Try-it button.',
        visual: { kind: 'image', src: img('apiengine-docs.webp'), alt: 'API-Engine endpoint documentation view' },
      },
      {
        title: 'Break nothing in a PR',
        text: 'The GitHub Action diffs the PR against the base branch and posts one living comment that flags breaking changes.',
        visual: {
          kind: 'terminal',
          title: 'pull request comment',
          lines: [
            { k: 'warn', s: '2 breaking · 1 added · 1 changed · 1 removed' },
            { k: 'out', s: 'BREAKING  GET  /v1/tags      endpoint removed' },
            { k: 'out', s: 'BREAKING  POST /v1/items     body.sku: added (required)' },
            { k: 'ok', s: 'SAFE      new optional inputs · new output fields' },
          ],
        },
      },
      {
        title: 'Hand clients a clean reference',
        text: 'Export OpenAPI 3.1, a Postman collection or a single-file HTML reference to share outside the team.',
        visual: { kind: 'image', src: img('apiengine-client.webp'), alt: 'API-Engine client-facing HTML documentation' },
      },
    ],
  },
  {
    id: 'parrot',
    name: 'Parrot',
    tagline: 'One workspace for a product’s whole delivery lifecycle',
    category: 'SaaS platforms',
    status: 'Working build',
    featured: true,
    summary:
      'Sprints with drag-and-drop boards, QA approval, documents, client approvals, change requests and a Postman-style API client. Ships as Parrot Cloud (team, browser) and Parrot Local (offline desktop).',
    fit: "SaaS products with several user roles — role-based access, approval workflows, a data layer that can change databases, and a web app plus an offline desktop app from one codebase.",
    stack: ['React', 'TypeScript', 'Vite', 'Supabase / Postgres', 'Express', 'Electron', 'Docker'],
    steps: [
      {
        title: 'Plan in sprints',
        text: 'Drag-and-drop boards carry work from backlog through QA. Anyone can hold several roles on a product.',
        visual: {
          kind: 'board',
          columns: [
            { title: 'To do', items: ['Login screen', 'Invoice export'] },
            { title: 'In progress', items: ['Role permissions'] },
            { title: 'QA', items: ['Sprint report'] },
            { title: 'Approved', items: ['Onboarding tour', 'Team invite'] },
          ],
        },
      },
      {
        title: 'Keep clients in the loop',
        text: 'Client approvals and change requests are first-class, so scope changes are tracked instead of argued about in chat.',
        visual: { kind: 'flow', nodes: ['Story ready', 'QA approves', 'Client approves', 'Change request?', 'Re-plan sprint'], note: 'approval chain' },
      },
      {
        title: 'Test APIs in the same place',
        text: 'A built-in Postman-style client with generated docs. In Parrot Local it can call localhost APIs directly.',
        visual: {
          kind: 'terminal',
          title: 'API workspace',
          lines: [
            { k: 'cmd', s: 'POST  {{base}}/v1/sprints' },
            { k: 'out', s: '201 Created' },
            { k: 'dim', s: 'docs generated · saved to collection · shared with team' },
          ],
        },
      },
      {
        title: 'Cloud for the team, Local for you',
        text: 'Cloud is shared and live with role-based access. Local is a private, offline desktop app with a personal board.',
        visual: {
          kind: 'metrics',
          items: [
            { value: 'Cloud', label: 'browser · team · live' },
            { value: 'Local', label: 'Electron · offline · private' },
            { value: '.xlsx', label: 'workbook import / export' },
          ],
        },
      },
    ],
  },

  /* ───────────────────────── Real-time & video ───────────────────────── */
  {
    id: 'weumeet',
    name: 'WeUMeet',
    tagline: 'Embeddable video infrastructure for other people’s products',
    category: 'Real-time & video',
    status: 'Working build',
    summary:
      'Multi-tenant video API: customers’ backends request room-scoped LiveKit tokens, and WeUMeet meters participant-minutes, bills through Stripe, records, transcribes and delivers signed webhooks.',
    fit: "Products that need video calls, live rooms or recording — secure per-room access, usage metering, Stripe billing and signed webhooks, verified by an end-to-end test suite.",
    stack: ['Fastify', 'LiveKit', 'PostgreSQL', 'Redis', 'Stripe', 'React', 'Docker'],
    steps: [
      {
        title: 'Your backend asks for a token',
        text: 'The customer’s server holds the API key and mints a short-lived, room-scoped token for each participant.',
        visual: { kind: 'flow', nodes: ['Customer backend', 'API key', 'Room token', 'LiveKit SFU', 'Participants'] },
      },
      {
        title: 'Drop in a web component',
        text: 'A framework-agnostic SDK with a <weumeet-room> element and React hooks. The sample “Interviue” app integrates in ~30 lines.',
        visual: {
          kind: 'terminal',
          title: 'embed',
          lines: [
            { k: 'cmd', s: '<weumeet-room token="…" />' },
            { k: 'ok', s: '✓ two participants connected' },
            { k: 'dim', s: 'activity trace on the dashboard lifts off baseline' },
          ],
        },
      },
      {
        title: 'Meter, bill, record',
        text: 'Participant-minutes are metered from the SFU and billed through Stripe. Recordings are composited and transcribed.',
        visual: {
          kind: 'metrics',
          items: [
            { value: 'Minutes', label: 'metered from the SFU' },
            { value: 'Stripe', label: 'usage billing' },
            { value: 'Webhooks', label: 'signed delivery' },
          ],
        },
      },
      {
        title: 'Proven end to end',
        text: 'The smoke test drives the whole customer journey over real HTTP, including tenant isolation and key revocation.',
        visual: {
          kind: 'terminal',
          title: 'npm run smoke — 42 checks',
          lines: [
            { k: 'ok', s: '✓ keys & token scoping' },
            { k: 'ok', s: '✓ tenant isolation' },
            { k: 'ok', s: '✓ recording refusals' },
            { k: 'ok', s: '✓ webhook signatures' },
            { k: 'ok', s: '✓ revocation' },
          ],
        },
      },
    ],
  },
  {
    id: 'web-streaming',
    name: 'Web Streaming Platform',
    tagline: 'Live streaming with a Mediasoup SFU',
    category: 'Real-time & video',
    status: 'Working build',
    summary:
      'Streamers broadcast live video and audio, viewers join from a lobby, and everyone shares a real-time chat — all containerized with Docker.',
    fit: "Live streaming, webinars and broadcast features — one stream served to many viewers, with live chat and a one-command Docker setup.",
    stack: ['React', 'Node.js', 'Express', 'Socket.IO', 'WebRTC', 'Mediasoup', 'Docker'],
    steps: [
      {
        title: 'Go live',
        text: 'A streamer publishes audio and video to the SFU, which fans the stream out to any number of viewers.',
        visual: { kind: 'flow', nodes: ['Streamer', 'WebRTC', 'Mediasoup SFU', 'Viewers'] },
      },
      {
        title: 'Browse the lobby',
        text: 'Viewers see every active stream and join with one click.',
        visual: {
          kind: 'board',
          columns: [
            { title: 'Live now', items: ['Morning coding', 'Game night', 'Q&A'] },
            { title: 'Chat', items: ['viewer joined', 'new message', 'reaction'] },
          ],
        },
      },
      {
        title: 'Run it with one command',
        text: 'Docker Compose brings up the client and server; the theme is plain CSS variables.',
        visual: {
          kind: 'terminal',
          title: 'zsh',
          lines: [
            { k: 'cmd', s: 'docker-compose up --build' },
            { k: 'ok', s: '✓ client on :3000 · server on :3001' },
          ],
        },
      },
    ],
  },

  /* ───────────────────────── iGaming ───────────────────────── */
  {
    id: 'gameskin',
    name: 'GameSkin Studio',
    tagline: 'White-label casino games, re-skinned with a JSON file',
    category: 'iGaming',
    status: 'Working build',
    summary:
      'Five games — Plinko, Crash, Mines, Dice and Blackjack — rendered with React and PixiJS, where every colour, font, radius, size and position is driven by a single theme JSON. Re-skinning for a new client means editing JSON and hitting Export.',
    fit: "Gaming operators and studios that need the same games under many brands — new skins are configuration, not code, and non-developers can edit them in a studio.",
    stack: ['React', 'PixiJS', 'Theme JSON', 'CSS variables', 'Vite'],
    steps: [
      {
        title: 'One theme, five games',
        text: 'Plinko, Crash, Mines, Dice and Blackjack read only from the theme — no hardcoded visuals.',
        visual: {
          kind: 'metrics',
          items: [
            { value: '5', label: 'playable games' },
            { value: '3', label: 'example client skins' },
            { value: '0', label: 'code changes per skin' },
          ],
        },
      },
      {
        title: 'Edit visually, no code',
        text: 'Brand colours, typography, curves, bet-panel side and per-game knobs appear as controls generated from a declarative schema.',
        visual: { kind: 'flow', nodes: ['Theme JSON', 'CSS variables', 'DOM UI', 'Pixi scene rebuild'] },
      },
      {
        title: 'Drag things on the canvas',
        text: 'Position elements such as the Crash multiplier directly on the canvas, then export the theme for the client.',
        visual: {
          kind: 'terminal',
          title: 'theme.json',
          lines: [
            { k: 'dim', s: '{' },
            { k: 'out', s: '  "brand": { "primary": "#d4af37", "radius": 12 },' },
            { k: 'out', s: '  "crash": { "curve": "smooth", "multiplier": { "x": 0.5, "y": 0.4 } }' },
            { k: 'dim', s: '}' },
          ],
        },
      },
    ],
  },

  /* ───────────────────────── AI apps ───────────────────────── */
  {
    id: 'hiref',
    name: 'hiref',
    tagline: 'A local AI copilot for interviews and client meetings',
    category: 'AI apps',
    status: 'Shipped app',
    summary:
      'A macOS app that transcribes the call on your Mac, detects when a question is put to you, drafts what to say, and afterwards writes notes where every item is tied to a word-for-word quote and timestamp.',
    fit: "AI products where privacy matters — speech stays on the user’s machine, every output links back to evidence, and consent is part of the flow.",
    stack: ['Electron', 'React', 'TypeScript', 'whisper.cpp', 'Claude'],
    steps: [
      {
        title: 'Audio stays on your Mac',
        text: 'System audio is transcribed locally with whisper.cpp. Only the detected question and recent lines go to the model.',
        visual: { kind: 'flow', nodes: ['Call audio', 'whisper.cpp (local)', 'Question detection', 'Answer draft'] },
      },
      {
        title: 'Notes you can verify',
        text: 'Every issue, decision and action item links to a verbatim quote and a timestamp — so you check it before sending.',
        visual: {
          kind: 'terminal',
          title: 'meeting notes — illustrative',
          lines: [
            { k: 'ok', s: 'ACTION    Send revised estimate' },
            { k: 'dim', s: '          ▸ “I’ll send it over by Friday”  · 14:32' },
            { k: 'ok', s: 'DECISION  Ship the pilot to one team first' },
            { k: 'dim', s: '          ▸ “let’s start with support”  · 21:07' },
          ],
        },
      },
      {
        title: 'Consent built in',
        text: 'First run asks you to confirm everyone on the call agrees to transcription — privacy is part of the flow, not a footnote.',
        visual: {
          kind: 'metrics',
          items: [
            { value: 'Local', label: 'speech-to-text' },
            { value: 'Verifiable', label: 'quote + timestamp' },
            { value: 'Consent', label: 'confirmed before recording' },
          ],
        },
      },
    ],
  },
  {
    id: 'kahana-fusi',
    name: 'Kahana Fusi',
    tagline: 'Private, offline voice dictation for macOS',
    category: 'AI apps',
    status: 'Published',
    summary:
      'Hold a key, talk, let go — clean text is pasted where your cursor is. English, Hindi and Hinglish (always in Roman letters), 1,000–1,500+ word dictations, and it learns from your corrections.',
    fit: "Voice and speech features that must work offline — long dictation, several languages and a dictionary that learns from corrections, with no audio sent to a server.",
    stack: ['Electron', 'whisper.cpp', 'Ollama', 'Node.js'],
    links: [{ label: 'GitHub', href: 'https://github.com/Harshjain007/kahana-fusi' }],
    steps: [
      {
        title: 'Hold, speak, release',
        text: 'Hold Right Option in any text field. Silence is stripped before transcription and cleanup runs in parallel on ~150-word chunks.',
        visual: { kind: 'flow', nodes: ['Hold key', 'whisper.cpp', 'Silence removal', 'Local cleanup', 'Pasted at cursor'] },
      },
      {
        title: 'It learns your words',
        text: 'Edit any dictation and press Save & learn — the change becomes a dictionary rule applied to every future dictation.',
        visual: {
          kind: 'terminal',
          title: 'dictionary.txt',
          lines: [
            { k: 'dim', s: '# learned from your corrections' },
            { k: 'ok', s: 'chetna sanghatan => Chetna Sangathan' },
          ],
        },
      },
      {
        title: 'Everything stays local',
        text: 'Audio is never saved or uploaded. History and dictionary live in your Library folder, with a switch to turn history off.',
        visual: {
          kind: 'metrics',
          items: [
            { value: '3', label: 'English · Hindi · Hinglish' },
            { value: '1,500+', label: 'words per dictation' },
            { value: '0', label: 'bytes of audio uploaded' },
          ],
        },
      },
    ],
  },
  {
    id: 'talentforge',
    name: 'TalentForge + PrepOS',
    tagline: 'An AI recruiter and interview-prep workspace on a local model',
    category: 'AI apps',
    status: 'Working build',
    summary:
      'Discovers jobs from Greenhouse, Lever and LinkedIn, scores them against your profile, tracks applications on a kanban, tailors resumes per job and turns a job description into interview prep — all on a local Ollama model.',
    fit: "Products that collect data from many sources and add AI on top — scheduled collection, queue workers, résumé parsing, match scoring and a free-to-run local model.",
    stack: ['NestJS', 'Next.js', 'TypeORM', 'BullMQ', 'Playwright', 'Ollama'],
    steps: [
      {
        title: 'Jobs flow in automatically',
        text: 'Greenhouse and Lever via REST (hourly), LinkedIn via Playwright (every 4 hours), deduplicated and scored against your active résumé.',
        visual: { kind: 'flow', nodes: ['Greenhouse · Lever · LinkedIn', 'Cron + queue', 'Skill match score', 'Your job feed'] },
      },
      {
        title: 'Track every application',
        text: 'A kanban from wishlist through offer, rejection or acceptance — with matched and missing skills explained per job.',
        visual: {
          kind: 'board',
          columns: [
            { title: 'Wishlist', items: ['Backend · Series B', 'Platform eng'] },
            { title: 'Applied', items: ['Realtime infra'] },
            { title: 'Interview', items: ['Full stack · fintech'] },
            { title: 'Offer', items: [] },
          ],
        },
      },
      {
        title: 'Tailor and prepare',
        text: 'Pick a résumé and a job to get section-by-section rewrite suggestions, then paste a JD into PrepOS for interview questions and notes.',
        visual: {
          kind: 'metrics',
          items: [
            { value: 'Tailor', label: 'résumé ↔ job fit' },
            { value: 'PrepOS', label: 'questions from a JD' },
            { value: '$0', label: 'per-token cost (local model)' },
          ],
        },
      },
    ],
  },
  {
    id: 'sonet-commune',
    name: 'Sonet Commune',
    tagline: 'An Instagram AI growth employee that learns a creator’s voice',
    category: 'AI apps',
    status: 'Working build',
    summary:
      'Analyses a creator’s post history into a Brand Memory, then plans, writes, schedules and analyses content in that voice — with a human approval click before anything publishes.',
    fit: "AI-assisted content and marketing tools — brand-voice memory, usage-based credits, and human approval before anything is published.",
    stack: ['FastAPI', 'React', 'TypeScript', 'SQLite', 'Tailwind v4', 'Claude'],
    steps: [
      {
        title: 'Learn the brand voice',
        text: 'Tone, themes, caption length, emoji habits and top hashtags are extracted from real post history.',
        visual: { kind: 'flow', nodes: ['Post history', 'Brand Memory', 'Every AI generation'] },
      },
      {
        title: 'Plan the week',
        text: 'Captions, carousels, Reel scripts and a full “plan my week” generator — drafts move to scheduled to published.',
        visual: {
          kind: 'board',
          columns: [
            { title: 'Draft', items: ['Reel script', 'Carousel'] },
            { title: 'Scheduled', items: ['Caption · Tue'] },
            { title: 'Published', items: ['Caption · Mon'] },
          ],
        },
      },
      {
        title: 'Understand the audience',
        text: 'Analytics come from the account’s own history, plus an AI-written audience summary with recommendations. Publishing always needs your explicit approval.',
        visual: {
          kind: 'metrics',
          items: [
            { value: 'Credits', label: 'metered AI actions' },
            { value: 'Human', label: 'approval before publish' },
            { value: 'Demo', label: 'works with zero credentials' },
          ],
        },
      },
    ],
  },
  {
    id: 'content-digest',
    name: 'Content Digest Bot',
    tagline: 'A Telegram bot that files links into a searchable knowledge base',
    category: 'AI apps',
    status: 'Live',
    summary:
      'Send it a link or topic; it works out what it is, extracts the real content (PDFs, Word, slides, sheets via MarkItDown) and files a structured card — published as a static site called The Register.',
    fit: "Automations that turn messy inputs such as links, PDFs and slides into structured records and a published, searchable site.",
    stack: ['Python', 'Telegram Bot API', 'MarkItDown', 'LLM', 'GitHub Pages'],
    links: [
      { label: 'Live site', href: 'https://harshjain007.github.io/content-digest-bot/site/index.html' },
      { label: 'GitHub', href: 'https://github.com/Harshjain007/content-digest-bot' },
    ],
    steps: [
      {
        title: 'Send it anything',
        text: 'A GitHub URL becomes a Tool, an upskilling article becomes a Learning, and a topic or video gets a chat deep-dive.',
        visual: { kind: 'flow', nodes: ['Telegram message', 'Classify', 'Extract content', 'Structured card'] },
      },
      {
        title: 'Documents handled once',
        text: 'Links and attachments share one converter, so headings, lists and tables survive as Markdown structure.',
        visual: {
          kind: 'terminal',
          title: 'data/resources.json',
          lines: [
            { k: 'dim', s: '{ "title": …, "problem it solves": …, ' },
            { k: 'out', s: '  "how it works": …, "links": […] }' },
          ],
        },
      },
      {
        title: 'Browse The Register',
        text: 'Cards are published as a static, searchable site you can open right now.',
        visual: {
          kind: 'metrics',
          items: [
            { value: 'Tools', label: 'resources.json' },
            { value: 'Learnings', label: 'learnings.json' },
            { value: 'Static', label: 'GitHub Pages' },
          ],
        },
      },
    ],
  },

  /* ───────────────────────── SaaS platforms ───────────────────────── */
  {
    id: 'contriii-crm',
    name: 'Contriii CRM',
    tagline: 'A multi-business CRM with POS billing for small shops',
    category: 'SaaS platforms',
    status: 'Working build',
    summary:
      'Secure multi-auth, industry-provisioned CRMs, POS billing, inventory with size/colour variants, customer profiles and branded invoices (print, PDF, WhatsApp). Designed around a clothing store first.',
    fit: "Shops and small businesses that need billing, inventory and customer records in one system — with branded invoices and mobile-OTP sign-in.",
    stack: ['React 18', 'Node.js 22', 'Express', 'PostgreSQL 16', 'Docker'],
    steps: [
      {
        title: 'Provision a CRM per business',
        text: 'Register with email or mobile OTP and get a CRM shaped for your industry, seeded with a demo store so every screen has data.',
        visual: { kind: 'flow', nodes: ['Register', 'Pick industry', 'CRM provisioned', 'Demo data seeded'] },
      },
      {
        title: 'Bill at the counter',
        text: 'POS billing against inventory with size and colour variants, tied to customer profiles.',
        visual: {
          kind: 'board',
          columns: [
            { title: 'Cart', items: ['Linen shirt · M · Sage', 'Chinos · 32'] },
            { title: 'Customer', items: ['Profile + history'] },
            { title: 'Invoice', items: ['Print', 'PDF', 'WhatsApp'] },
          ],
        },
      },
      {
        title: 'One command to run',
        text: 'Docker Compose starts the app, API, pgAdmin and Postgres with migrations and seed data applied automatically.',
        visual: {
          kind: 'terminal',
          title: 'zsh',
          lines: [
            { k: 'cmd', s: 'docker compose up --build' },
            { k: 'ok', s: '✓ app :8080 · api :8081 · pgAdmin :8082' },
          ],
        },
      },
    ],
  },
  {
    id: 'flowdesk',
    name: 'FlowDesk',
    tagline: 'A Jira/Linear-style project management SaaS, built in public',
    category: 'SaaS platforms',
    status: 'In progress',
    summary:
      'A TypeScript monorepo — Next.js frontend, Express and MongoDB backend, shared Zod types — built with production habits: Docker, Husky, lint-staged, CI and documented architecture decisions.',
    fit: "Long-running SaaS builds that must stay maintainable — shared types across front and back end, automated quality checks and documented decisions.",
    stack: ['Next.js', 'TypeScript', 'Express', 'MongoDB', 'Zod', 'Docker'],
    links: [{ label: 'GitHub', href: 'https://github.com/Harshjain007/FlowDesk' }],
    steps: [
      {
        title: 'A monorepo with one source of truth',
        text: 'Frontend, backend and shared types/utilities live side by side so contracts cannot drift.',
        visual: { kind: 'flow', nodes: ['frontend (Next.js)', 'shared types (Zod)', 'backend (Express)', 'MongoDB'] },
      },
      {
        title: 'Quality gates from day one',
        text: 'ESLint, Prettier, Husky and lint-staged run before every commit, with Docker for a reproducible dev environment.',
        visual: {
          kind: 'terminal',
          title: 'pre-commit',
          lines: [
            { k: 'ok', s: '✓ eslint' },
            { k: 'ok', s: '✓ prettier' },
            { k: 'ok', s: '✓ lint-staged' },
          ],
        },
      },
    ],
  },

  /* ───────────────────────── Developer tools ───────────────────────── */
  {
    id: 'bob',
    name: 'Bob: The Builder',
    tagline: 'Many terminals, one window — with SSH tools and a Claude agent',
    category: 'Developer tools',
    status: 'Shipped app',
    summary:
      'A Terminator-style multi-pane terminal for macOS with Termius-style SSH tooling and a built-in Claude AI agent. Fully rebindable keys, installed from a signed .dmg.',
    fit: "Developer-facing desktop tools — terminals, SSH sessions and an embedded AI assistant, shipped as an installable app.",
    stack: ['Electron', 'xterm.js (WebGL)', 'node-pty', 'ssh2'],
    steps: [
      {
        title: 'Split anything, anywhere',
        text: 'Split right or down, move focus with arrows, maximize a pane, resize by dragging or keys.',
        visual: {
          kind: 'terminal',
          title: 'shortcuts',
          lines: [
            { k: 'out', s: '⌘D / ⇧⌘D     split right / down' },
            { k: 'out', s: '⌥⌘ arrows    move focus' },
            { k: 'out', s: '⌃⌘ arrows    resize split' },
          ],
        },
      },
      {
        title: 'SSH like Termius',
        text: 'Saved hosts and ssh2-powered sessions without leaving the window.',
        visual: { kind: 'flow', nodes: ['Saved host', 'ssh2 session', 'Pane in your layout'] },
      },
      {
        title: 'A Claude agent beside the shell',
        text: 'Ask the built-in agent for help next to the terminal it is helping with.',
        visual: {
          kind: 'metrics',
          items: [
            { value: 'WebGL', label: 'fast rendering' },
            { value: 'v1.0', label: 'arm64 .dmg build' },
            { value: 'Claude', label: 'built-in agent' },
          ],
        },
      },
    ],
  },
  {
    id: 'claude-viewer',
    name: 'Claude Document Viewer',
    tagline: 'Read Markdown, PDF, Word and PowerPoint inside VS Code',
    category: 'Developer tools',
    status: 'Shipped app',
    summary:
      'A VS Code extension (v1.1.0) that opens .md, .pdf, .docx/.doc and .pptx/.ppt with a clean reading layout inspired by Claude — pdf.js is bundled, no internet needed.',
    fit: "Editor and IDE extensions — custom viewers, parsing for several document formats and packaged releases.",
    stack: ['TypeScript', 'VS Code API', 'pdf.js', 'mammoth', 'markdown-it'],
    steps: [
      {
        title: 'One viewer, six formats',
        text: 'Markdown renders live as you type; PDFs, Word and PowerPoint open in a consistent reading layout.',
        visual: {
          kind: 'terminal',
          title: 'supported',
          lines: [
            { k: 'ok', s: '.md   rendered · live update' },
            { k: 'ok', s: '.pdf  pdf.js · zoom · fit-width' },
            { k: 'ok', s: '.docx headings · lists · tables · images' },
            { k: 'ok', s: '.pptx full layout via LibreOffice' },
          ],
        },
      },
      {
        title: 'Graceful fallbacks',
        text: 'Legacy .doc and .ppt convert through LibreOffice; without it, .pptx still shows slide text and images.',
        visual: { kind: 'flow', nodes: ['.doc / .ppt', 'LibreOffice → PDF', 'pdf.js viewer'] },
      },
    ],
  },

  /* ───────────────────────── Consumer & mobile ───────────────────────── */
  {
    id: 'contriii-app',
    name: 'Contriii',
    tagline: 'Personal finance and social gaming for Gen-Z India',
    category: 'Consumer & mobile',
    status: 'In progress',
    summary:
      'Reads UPI transaction emails from Gmail, splits bills in groups, plans trips with shared budgets and rewards actions with coins that can be spent in a PixiJS game zone.',
    fit: "Consumer mobile apps backed by several services — automatic expense capture, group splits, rewards and a game layer behind one API gateway.",
    stack: ['React Native / Expo', 'Node.js', 'Prisma', 'PostgreSQL', 'Redis', 'PixiJS', 'Docker'],
    steps: [
      {
        title: 'Money tracking on autopilot',
        text: 'UPI transaction notifications are read from Gmail and turned into a categorised ledger.',
        visual: { kind: 'flow', nodes: ['Gmail UPI emails', 'Parse', 'Ledger', 'Group splits'] },
      },
      {
        title: 'Six containers, one command',
        text: 'API gateway, core service, game service, two databases and Redis for rate limits and sessions.',
        visual: {
          kind: 'terminal',
          title: 'infra/',
          lines: [
            { k: 'cmd', s: 'docker compose up --build' },
            { k: 'ok', s: '✓ gateway :3000 · core :3001 · games :3007' },
          ],
        },
      },
    ],
  },
  {
    id: 'digrobe',
    name: 'AI Digital Wardrobe',
    tagline: 'A mobile-first closet you can search and style from',
    category: 'Consumer & mobile',
    status: 'Early build',
    summary:
      'Milestone 1 of a wardrobe app: auth, database, S3-compatible storage and clothing upload, with the AI pipeline stubbed behind swappable service interfaces.',
    fit: "Mobile apps that will add AI later — sign-in, storage and uploads are in place, and the AI steps sit behind interfaces so real models drop in without rewrites.",
    stack: ['Expo (React Native)', 'FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'MinIO'],
    steps: [
      {
        title: 'Snap, upload, store',
        text: 'Photos go to S3-compatible storage with metadata in PostgreSQL, behind JWT auth.',
        visual: { kind: 'flow', nodes: ['Photo', 'Upload API', 'Object storage', 'Wardrobe'] },
      },
      {
        title: 'AI-ready by design',
        text: 'Categorisation and background removal sit behind service interfaces — stubbed today, swappable for real models.',
        visual: {
          kind: 'terminal',
          title: 'app/services/',
          lines: [
            { k: 'out', s: 'categorize()          → stub' },
            { k: 'out', s: 'remove_background()   → passthrough' },
            { k: 'dim', s: 'swap in real models without touching routes' },
          ],
        },
      },
    ],
  },
  {
    id: 'arx',
    name: 'ARX',
    tagline: 'A spatial-AI platform for AR try-on, avatars and retail SDKs',
    category: 'Consumer & mobile',
    status: 'Early build',
    summary:
      'Early build of a platform spanning a consumer web app, a merchant portal, a catalog / wardrobe / recommendation API and a developer SDK — scoped in a full product requirements document.',
    fit: "Platforms that serve consumers, merchants and developers at once — planned from a full product requirements document.",
    stack: ['TypeScript', 'Node API', 'SQLite', 'React', 'Vite'],
    steps: [
      {
        title: 'Four surfaces, one platform',
        text: 'Consumer app, merchant portal, an API for catalog, wardrobe, recommendations and analytics, and an SDK for retailers.',
        visual: { kind: 'flow', nodes: ['Consumer app', 'Merchant portal', 'API', 'SDK'] },
      },
      {
        title: 'The roadmap',
        text: 'Body tracking and wardrobe first, then clothing try-on, avatars and SDK, then enterprise and marketplace.',
        visual: {
          kind: 'board',
          columns: [
            { title: 'Phase 1', items: ['Body tracking', 'Wardrobe'] },
            { title: 'Phase 2', items: ['Clothing try-on'] },
            { title: 'Phase 3', items: ['Avatars', 'SDK'] },
            { title: 'Phase 4', items: ['Enterprise', 'Marketplace'] },
          ],
        },
      },
    ],
  },
];

export const featuredProducts = products.filter((p) => p.featured);
