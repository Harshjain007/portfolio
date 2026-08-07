export const siteConfig = {
  name: "Harsh Jain",
  title: "Senior Full Stack Developer",
  tagline: "Building High-Performance Web Experiences",
  description:
    "Senior Full Stack Developer with 4+ years of experience delivering secure, scalable web applications across real-time gaming platforms, B2B/B2C admin dashboards, and multi-tenant microservices architectures. Expert in React.js, Node.js, PostgreSQL, MongoDB, Redis, BullMQ, Socket.IO, Docker, REST API design, JWT/RBAC, and CI/CD pipelines. Actively expanding into Generative AI, AI Agents, LLM integration, and MCP (Model Context Protocol).",
  email: "harsh8425@gmail.com",
  phone: "+91 82510 87474",
  location: "Indore, India",
  resumeUrl: "/portfolio/resume.pdf",
  availability: "available for senior / freelance roles",
  heroPitch:
    "I build secure, scalable systems — real-time gaming platforms, B2B/B2C admin dashboards and multi-tenant microservices. Now pushing deep into Generative AI, agents and MCP.",
  social: {
    github: "https://github.com/Harshjain007",
    linkedin: "https://www.linkedin.com/in/harsh-jain-0109/",
  },
  navLinks: [
    { label: "Profile", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Timeline", href: "#timeline" },
    { label: "Contact", href: "#contact" },
  ],
};

/** Sections tracked by the right-hand dot navigation, in document order. */
export const sectionIds = [
  "hero",
  "about",
  "skills",
  "work",
  "timeline",
  "contact",
] as const;

/** Technologies cycled through the hero marquee strip. */
export const marqueeTech = [
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Socket.IO",
  "Redis",
  "Docker",
  "AWS",
  "BullMQ",
  "MongoDB",
  "Express.js",
  "GitHub Actions",
];

export const aboutStats = [
  { label: "Years Shipping", value: "4+" },
  { label: "Gaming Platforms", value: "10+" },
  { label: "REST APIs Built", value: "100+" },
  { label: "Fewer Deploy Fails", value: "~80%" },
];

export const aboutHighlights = [
  "Delivered 10+ production gaming platforms end-to-end using React.js, Node.js, PostgreSQL, and Socket.IO",
  "Expert in frontend architecture using React.js, Redux Toolkit, and modern state management patterns",
  "Proficient in real-time and backend technologies including Socket.IO, WebRTC, Redis, and BullMQ",
  "Experienced with AWS (S3, CloudFront, EC2, Lambda, ECS, CloudWatch), Docker, and GitHub Actions CI/CD",
  "Actively expanding into Generative AI, AI Agents, LLM integration, and MCP (Model Context Protocol)",
];

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "frontend",
    skills: [
      { name: "React.js" },
      { name: "Redux Toolkit" },
      { name: "Redux-Thunk" },
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "SASS" },
      { name: "Material UI" },
      { name: "Bootstrap" },
      { name: "PixiJS" },
      { name: "Chart.js" },
      { name: "React Router" },
      { name: "React I18next" },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "Backend",
    icon: "backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Python" },
      { name: "REST API Design" },
      { name: "Socket.IO" },
      { name: "WebRTC" },
      { name: "BullMQ" },
      { name: "Sequelize ORM" },
      { name: "Microservices" },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" },
    ],
  },
  {
    title: "Real-Time",
    icon: "realtime",
    skills: [
      { name: "Socket.IO" },
      { name: "Zego Cloud" },
      { name: "WebSockets" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "devops",
    skills: [
      { name: "Docker" },
      { name: "Docker Compose" },
      { name: "Nginx" },
      { name: "AWS S3" },
      { name: "CloudFront" },
      { name: "EC2" },
      { name: "Lambda" },
      { name: "ECS" },
      { name: "CloudWatch" },
      { name: "Git" },
      { name: "GitHub Actions" },
      { name: "CI/CD" },
    ],
  },
  {
    title: "Practices",
    icon: "methods",
    skills: [
      { name: "Full Stack Development" },
      { name: "HLD/LLD (System Design)" },
      { name: "Agile/Scrum" },
      { name: "JWT Auth" },
      { name: "RBAC" },
      { name: "Performance Optimization" },
      { name: "Code Review" },
    ],
  },
  {
    title: "AI & Emerging",
    icon: "ai",
    skills: [
      { name: "AI-Assisted Development" },
      { name: "Claude Code" },
      { name: "GitHub Copilot" },
      { name: "Generative AI" },
      { name: "LLM APIs" },
      { name: "RAG" },
      { name: "MCP (Model Context Protocol)" },
      { name: "AI Agents" },
      { name: "Prompt Engineering" },
    ],
  },
];

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  teamSize?: number;
  github?: string;
  demo?: string;
}

export const personalProjects: Project[] = [
  {
    title: "Portfolio",
    subtitle: "Personal Developer Portfolio",
    description:
      "A modern, responsive developer portfolio built with React, TypeScript, and Vite. Features floating tech-icon background animations, scroll-aware navigation, Formspree contact form integration, and automated GitHub Pages deployment.",
    highlights: [
      "Built with React 19, TypeScript, and Vite for blazing-fast performance",
      "Animated floating tech-icon background with parallax scroll using Framer Motion",
      "Integrated Formspree for direct contact form email delivery",
      "Scroll-aware dot navigation and Open to Work banner",
      "Automated CI/CD deployment to GitHub Pages via gh-pages",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Framer Motion",
      "Bootstrap",
      "GitHub Pages",
    ],
    github: "https://github.com/Harshjain007/portfolio",
    demo: "https://harshjain007.github.io/portfolio/",
  },
];

export const professionalProjects: Project[] = [
  {
    title: "AfterHours / LiveChance",
    subtitle: "B2C Live Casino Gaming Platform",
    description:
      "A scalable, real-time live casino platform featuring multiple third-party provider integrations, live-host gaming with video streaming, and a synchronized round system using atomic clock logic.",
    highlights: [
      "Led modernization by upgrading legacy packages, improving asset delivery via S3, and implementing lazy loading",
      "Integrated multiple game providers (Pragmatic Play, NetEnt, RedTiger, BigTime Gaming, Evolution) for live casino gameplay",
      "Built a UTC-synchronized round system using atomic clocks to generate results in real time",
      "Developed a live-host gaming module with Zego Cloud for large-scale user interactions and tipping",
    ],
    techStack: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Socket.IO",
      "Docker",
      "AWS S3",
      "Zego Cloud",
    ],
    teamSize: 2,
  },
  {
    title: "PokerOne",
    subtitle: "Real-Time Multiplayer Poker Game",
    description:
      "A full-featured real-time multiplayer poker game with custom rules, spectator mode, socket reconnection, and JWT-based session access control.",
    highlights: [
      "Led a team of 4 to ship a production poker game with custom rules and spectator mode",
      "Built room-based Socket.IO architecture for synchronized player state and turn logic",
      "Implemented socket reconnection handling for reliable real-time sessions",
      "Secured session access with JWT-based authentication",
    ],
    techStack: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
      "Socket.IO",
    ],
    teamSize: 4,
  },
  {
    title: "Redes Holding / GreenCage / Living Pixels / Roliify",
    subtitle: "B2B Multi-Gaming Platform",
    description:
      "A comprehensive B2B platform featuring multiple casino-style games with modular UIs, dynamic admin panel, and PixiJS-based slot game integration.",
    highlights: [
      "Built modular UIs for casino-style games including Dice, Blackjack, Roulette, Plinko, and Video Poker",
      "Created a dynamic admin panel for transaction tracking, round history, user/IP monitoring, and bet management",
      "Integrated PixiJS-based slot games into React with dynamic build file rendering",
      "Used debouncing and throttling techniques for efficient bet placement and reduced server load",
    ],
    techStack: [
      "React.js",
      "Redux",
      "Socket.IO",
      "PixiJS",
      "Material UI",
      "Bootstrap",
      "Sequelize",
      "Express.js",
    ],
    teamSize: 3,
  },
];

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  type: "fulltime" | "intern";
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    company: "Freelance",
    location: "Independent Contractor",
    role: "Full Stack Developer",
    period: "Jan 2026 - Apr 2026",
    type: "fulltime",
    description:
      "Independently delivered client web applications using React.js, Node.js, and MongoDB — owning requirements, architecture decisions, and on-time shipping without team support.",
    achievements: [
      "Owned requirements, architecture decisions, and end-to-end delivery for client web applications",
      "Cut development time by ~35% by integrating Claude Code and GitHub Copilot for code generation, debugging, and refactoring",
      "Managed end-to-end client communication across scope, feedback cycles, and final handoffs",
    ],
  },
  {
    company: "Gammastack (GrepRuby Webtech)",
    location: "Indore",
    role: "Full Stack Developer | Solution Engineer",
    period: "Jun 2022 - Jan 2026",
    type: "fulltime",
    description:
      "Full-stack Developer building responsive, real-time web applications using the MERN stack with PostgreSQL.",
    achievements: [
      "Delivered 10+ production gaming platforms end-to-end using React.js, Node.js, PostgreSQL, and Socket.IO",
      "Achieved sub-second real-time state synchronization across concurrent multi-user sessions",
      "Built 100+ RESTful APIs covering user management, wallet transactions, game operations, and real-time analytics",
      "Containerized the full stack with Docker and established a GitHub Actions CI/CD pipeline, cutting deployment failures by ~80%",
      "Managed AWS services including S3, CloudFront, EC2, Lambda, ECS, and CloudWatch across staging and production",
      "Integrated JWT-based authentication with role-based access control (RBAC)",
    ],
  },
  {
    company: "Gammastack (GrepRuby Webtech)",
    location: "Indore",
    role: "Frontend Developer Intern | Solution Engineer",
    period: "Jan 2022 - Jun 2022",
    type: "intern",
    description:
      "Frontend developer focused on building modular UI components and optimizing performance.",
    achievements: [
      "Built modular, reusable React.js components with Redux for state management, reducing repeated component work",
      "Improved developer onboarding speed across the team through component-based architecture",
      "Improved page load performance by migrating legacy jQuery ad templates to optimized Vanilla JavaScript and React",
      "Removed render-blocking scripts and unused dependencies",
    ],
  },
];

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade?: string;
}

export const education: Education[] = [
  {
    institution: "Lakshmi Narain College of Technology Excellence, Bhopal",
    degree: "B.Tech",
    field: "Computer Science and Technology",
    period: "Aug 2018 - Jun 2022",
    grade: "8.33 CGPA",
  },
  {
    institution: "St. Joseph's Convent School, Kotma",
    degree: "High School",
    field: "Secondary Schooling",
    period: "Completed 2018",
  },
];
