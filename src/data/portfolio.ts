export const siteConfig = {
  name: "Harsh Jain",
  title: "Full Stack Developer",
  tagline: "Building High-Performance Web Experiences",
  description:
    "Performance-driven MERN Stack Developer with 3+ years of experience specializing in secure full-stack solutions with a focus on frontend architecture, real-time technologies, and scalable systems.",
  email: "harsh8425@gmail.com",
  phone: "+91 8251087474",
  location: "Indore, India",
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.png",
  social: {
    github: "https://github.com/harshjain",
    linkedin: "https://linkedin.com/in/harshjain",
    twitter: "https://twitter.com/harshjain",
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};

export const aboutStats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Delivered", value: "6+" },
  { label: "Technologies", value: "15+" },
  { label: "Team Leadership", value: "4 devs" },
];

export const aboutHighlights = [
  "Specialized in MERN stack with PostgreSQL for building scalable, real-time web applications",
  "Expert in frontend architecture using React.js, Redux, and modern state management patterns",
  "Proficient in real-time technologies including Socket.IO, WebRTC, and Zego Cloud",
  "Experienced with cloud services (AWS S3, CloudFront) and containerization (Docker)",
  "Strong advocate of Agile methodologies with cross-functional team collaboration",
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
      { name: "Redux" },
      { name: "Redux-Thunk" },
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "CSS3" },
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
      { name: "REST APIs" },
      { name: "JWT Auth" },
      { name: "Sequelize ORM" },
      { name: "Middleware" },
      { name: "WebRTC" },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: [{ name: "PostgreSQL" }, { name: "MongoDB" }],
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
      { name: "AWS S3" },
      { name: "CloudFront" },
      { name: "CI/CD" },
      { name: "Git" },
      { name: "GitHub" },
    ],
  },
  {
    title: "Methodologies",
    icon: "methods",
    skills: [
      { name: "Agile" },
      { name: "Scrum" },
      { name: "Component Architecture" },
      { name: "Performance Profiling" },
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
  // Add your personal projects here. Example:
  // {
  //   title: "My Personal App",
  //   subtitle: "A cool side project",
  //   description: "Description of what it does...",
  //   highlights: ["Feature 1", "Feature 2"],
  //   techStack: ["React", "Node.js"],
  //   github: "https://github.com/harshjain/project",
  //   demo: "https://project.vercel.app",
  // },
];

export const professionalProjects: Project[] = [
  {
    title: "AfterHours / LiveChance",
    subtitle: "B2C Live Casino Gaming Platform",
    description:
      "A scalable, real-time live casino platform featuring multiple third-party provider integrations, live-host gaming with video streaming, and a synchronized round system using atomic clock logic.",
    highlights: [
      "Built real-time UI with React.js & Redux using lazy loading and dynamic routing",
      "Developed backend APIs with Node.js, Express.js, and Sequelize for gameplay orchestration",
      "Integrated Pragmatic Play, NetEnt, Evolution into a unified backend pipeline",
      "Engineered Zego Cloud + Socket.IO for live-host games with high-concurrency interactions",
      "Designed tamper-proof round system using UTC atomic clock logic",
    ],
    techStack: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "Sequelize",
      "PostgreSQL",
      "Docker",
      "AWS S3",
      "Zego Cloud",
      "Socket.IO",
    ],
    teamSize: 2,
  },
  {
    title: "PokerOne",
    subtitle: "Real-Time Poker Game",
    description:
      "A full-featured real-time multiplayer poker game with custom rules, spectator mode, room-based architecture, and real-time state synchronization.",
    highlights: [
      "Led a team of 4 developers for end-to-end development",
      "Engineered real-time poker logic with custom rules and spectator mode",
      "Designed room-based architecture with Socket.IO for state synchronization",
      "Built responsive UI with React.js, Redux, and animations",
      "Optimized real-time reliability through performance profiling",
    ],
    techStack: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "Sequelize",
      "PostgreSQL",
      "Socket.IO",
      "JWT",
    ],
    teamSize: 4,
  },
  {
    title: "Redes Holding / GreenCage / Living Pixels / Roliify",
    subtitle: "B2B Multi-Gaming Platform",
    description:
      "A comprehensive B2B platform featuring multiple casino-style games with modular UIs, dynamic admin panel, and PixiJS-based slot game integration.",
    highlights: [
      "Built modular UIs for Dice, Blackjack, Roulette, Plinko, Video Poker",
      "Created dynamic admin panel for transaction tracking and user monitoring",
      "Integrated PixiJS-based slot games with dynamic build file rendering",
      "Implemented debouncing and throttling for efficient bet placement",
    ],
    techStack: [
      "React.js",
      "Redux",
      "Socket.IO",
      "PixiJS",
      "Chart.js",
      "Express.js",
      "Sequelize",
      "Material UI",
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
    company: "Gammastack (GrepRuby Webtech)",
    location: "Indore",
    role: "Full Stack Developer | Frontend Developer | Solution Engineer",
    period: "Jun 2022 - Present",
    type: "fulltime",
    description:
      "Full-stack Developer building responsive, real-time web applications using the MERN stack with PostgreSQL.",
    achievements: [
      "Developed scalable frontend applications using React.js, Redux, and React Router DOM",
      "Created real-time gaming interfaces with Socket.IO for high concurrency gameplay",
      "Integrated multi-language support using React I18next with asynchronous loading",
      "Designed admin dashboards and internal tools for managing game content and analytics",
      "Implemented RESTful APIs with Node.js and Express.js for user management and game operations",
      "Integrated JWT-based authentication with role-based access control",
      "Utilized AWS S3 and CloudFront for secure media asset delivery",
      "Employed Docker, Git, GitHub, and CI/CD workflows for deployment",
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
      "Created modular and responsive UI components with React.js and Redux",
      "Integrated dynamic data from APIs into reusable components",
      "Upgraded legacy jQuery-based ad templates to Vanilla JS and React solutions",
      "Developed personalized ad modules with Dynamic Yield (DY)",
      "Employed component-based architecture for debugging, testing, and performance tuning",
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
    institution: "Lakshmi Narain College of Technology Excellence",
    degree: "B.Tech",
    field: "Computer Science and Technology",
    period: "2018 - 2022",
    grade: "8.33 CGPA",
  },
  {
    institution: "St. Joseph's Convent School Kotma",
    degree: "Schooling",
    field: "General",
    period: "",
  },
];
