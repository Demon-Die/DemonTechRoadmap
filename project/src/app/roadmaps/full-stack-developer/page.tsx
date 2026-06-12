import { RoadmapPageShell } from "../../../components/roadmap/RoadmapPageShell";
import type { ReadinessMetric, RoadmapNode, RoadmapPath, StageSummary, ProjectTrack } from "../../../components/roadmap/RoadmapPageShell";

const stageSummaries: StageSummary[] = [
  {
    stage: "Beginner",
    duration: "16-20 weeks",
    outcome: "Build accessible pages, style responsive UIs, write JavaScript and TypeScript, and collaborate with Git.",
  },
  {
    stage: "Intermediate",
    duration: "26-34 weeks",
    outcome: "Ship React and Next.js apps with backend APIs, databases, authentication, and typed data access.",
  },
  {
    stage: "Advanced",
    duration: "20-28 weeks",
    outcome: "Improve state, testing, performance, CI/CD, Docker, cloud deployments, observability, and architecture.",
  },
  {
    stage: "Expert",
    duration: "18-26 weeks",
    outcome: "Design distributed platforms, advanced frontend/backend systems, production engineering, and leadership paths.",
  },
];

const roadmapNodes: RoadmapNode[] = [
  {
    "id": "internet-fundamentals",
    "title": "Internet Fundamentals",
    "stage": "Beginner",
    "difficulty": "Starter",
    "duration": "2 weeks",
    "description": "Internet Fundamentals connects How the Web Works, DNS, HTTP/HTTPS into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Basic computer literacy"
    ],
    "topics": [
      "How the Web Works",
      "DNS",
      "HTTP/HTTPS",
      "Browsers",
      "Client vs Server",
      "TCP/IP Basics",
      "Hosting & Domains"
    ],
    "skillsGained": [
      "Apply How the Web Works in production-style work",
      "Connect DNS with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Internet Fundamentals fits in a full-stack product",
      "Choose appropriate tools and patterns for How the Web Works",
      "Ship a small feature using How the Web Works and DNS"
    ],
    "resources": [
      {
        "label": "MDN web mechanics",
        "href": "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics",
        "category": "Official Docs"
      },
      {
        "label": "Cloudflare Learning Center",
        "href": "https://www.cloudflare.com/learning/",
        "category": "Official Docs"
      },
      {
        "label": "HTTP Status practice",
        "href": "https://http.cat/",
        "category": "Practice"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for How the Web Works.",
      "Write notes comparing How the Web Works vs DNS.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a internet fundamentals module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Internet Fundamentals to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "html5",
    "title": "HTML5",
    "stage": "Beginner",
    "difficulty": "Starter",
    "duration": "2 weeks",
    "description": "HTML5 connects Semantic HTML, Forms, Accessibility Basics into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Internet Fundamentals"
    ],
    "topics": [
      "Semantic HTML",
      "Forms",
      "Accessibility Basics",
      "SEO Fundamentals"
    ],
    "skillsGained": [
      "Apply Semantic HTML in production-style work",
      "Connect Forms with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where HTML5 fits in a full-stack product",
      "Choose appropriate tools and patterns for Semantic HTML",
      "Ship a small feature using Semantic HTML and Forms"
    ],
    "resources": [
      {
        "label": "MDN HTML",
        "href": "https://developer.mozilla.org/en-US/docs/Web/HTML",
        "category": "Official Docs"
      },
      {
        "label": "web.dev Learn HTML",
        "href": "https://web.dev/learn/html",
        "category": "Practice"
      },
      {
        "label": "WAI forms tutorial",
        "href": "https://www.w3.org/WAI/tutorials/forms/",
        "category": "Official Docs"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Semantic HTML.",
      "Write notes comparing Semantic HTML vs Forms.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a html5 module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain HTML5 to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "css3",
    "title": "CSS3",
    "stage": "Beginner",
    "difficulty": "Starter",
    "duration": "3 weeks",
    "description": "CSS3 connects Selectors, Responsive Design, Flexbox into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "HTML5"
    ],
    "topics": [
      "Selectors",
      "Responsive Design",
      "Flexbox",
      "CSS Grid",
      "Animations"
    ],
    "skillsGained": [
      "Apply Selectors in production-style work",
      "Connect Responsive Design with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where CSS3 fits in a full-stack product",
      "Choose appropriate tools and patterns for Selectors",
      "Ship a small feature using Selectors and Responsive Design"
    ],
    "resources": [
      {
        "label": "MDN CSS",
        "href": "https://developer.mozilla.org/en-US/docs/Web/CSS",
        "category": "Official Docs"
      },
      {
        "label": "CSS Tricks guides",
        "href": "https://css-tricks.com/guides/",
        "category": "Community"
      },
      {
        "label": "Flexbox Froggy",
        "href": "https://flexboxfroggy.com/",
        "category": "Practice"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Selectors.",
      "Write notes comparing Selectors vs Responsive Design.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a css3 module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain CSS3 to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "styling-tools",
    "title": "Styling Tools",
    "stage": "Beginner",
    "difficulty": "Core",
    "duration": "1 week",
    "description": "Styling Tools connects Sass/SCSS, Tailwind CSS into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "CSS3"
    ],
    "topics": [
      "Sass/SCSS",
      "Tailwind CSS"
    ],
    "skillsGained": [
      "Apply Sass/SCSS in production-style work",
      "Connect Tailwind CSS with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Styling Tools fits in a full-stack product",
      "Choose appropriate tools and patterns for Sass/SCSS",
      "Ship a small feature using Sass/SCSS and Tailwind CSS"
    ],
    "resources": [
      {
        "label": "Tailwind CSS docs",
        "href": "https://tailwindcss.com/docs",
        "category": "Official Docs"
      },
      {
        "label": "Sass docs",
        "href": "https://sass-lang.com/documentation/",
        "category": "Official Docs"
      },
      {
        "label": "shadcn/ui",
        "href": "https://ui.shadcn.com/",
        "category": "Community"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Sass/SCSS.",
      "Write notes comparing Sass/SCSS vs Tailwind CSS.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a styling tools module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Styling Tools to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "javascript",
    "title": "JavaScript",
    "stage": "Beginner",
    "difficulty": "Core",
    "duration": "5 weeks",
    "description": "JavaScript connects Variables, Functions, Arrays into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Styling Tools"
    ],
    "topics": [
      "Variables",
      "Functions",
      "Arrays",
      "Objects",
      "DOM Manipulation",
      "ES6+",
      "Async/Await",
      "Fetch API"
    ],
    "skillsGained": [
      "Apply Variables in production-style work",
      "Connect Functions with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where JavaScript fits in a full-stack product",
      "Choose appropriate tools and patterns for Variables",
      "Ship a small feature using Variables and Functions"
    ],
    "resources": [
      {
        "label": "MDN JavaScript",
        "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        "category": "Official Docs"
      },
      {
        "label": "JavaScript.info",
        "href": "https://javascript.info/",
        "category": "Community"
      },
      {
        "label": "freeCodeCamp JavaScript",
        "href": "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/",
        "category": "Practice"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Variables.",
      "Write notes comparing Variables vs Functions.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a javascript module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain JavaScript to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "typescript",
    "title": "TypeScript",
    "stage": "Beginner",
    "difficulty": "Core",
    "duration": "3 weeks",
    "description": "TypeScript connects Types, Interfaces, Generics into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "JavaScript"
    ],
    "topics": [
      "Types",
      "Interfaces",
      "Generics",
      "Type Safety"
    ],
    "skillsGained": [
      "Apply Types in production-style work",
      "Connect Interfaces with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where TypeScript fits in a full-stack product",
      "Choose appropriate tools and patterns for Types",
      "Ship a small feature using Types and Interfaces"
    ],
    "resources": [
      {
        "label": "TypeScript handbook",
        "href": "https://www.typescriptlang.org/docs/",
        "category": "Official Docs"
      },
      {
        "label": "Type Challenges",
        "href": "https://github.com/type-challenges/type-challenges",
        "category": "Practice"
      },
      {
        "label": "Total TypeScript",
        "href": "https://www.totaltypescript.com/",
        "category": "Video"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Types.",
      "Write notes comparing Types vs Interfaces.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a typescript module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain TypeScript to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "git-and-github",
    "title": "Git & GitHub",
    "stage": "Beginner",
    "difficulty": "Core",
    "duration": "1 week",
    "description": "Git & GitHub connects Version Control, Branching, Pull Requests into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "TypeScript"
    ],
    "topics": [
      "Version Control",
      "Branching",
      "Pull Requests",
      "Collaboration Workflow"
    ],
    "skillsGained": [
      "Apply Version Control in production-style work",
      "Connect Branching with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Git & GitHub fits in a full-stack product",
      "Choose appropriate tools and patterns for Version Control",
      "Ship a small feature using Version Control and Branching"
    ],
    "resources": [
      {
        "label": "Git docs",
        "href": "https://git-scm.com/doc",
        "category": "Official Docs"
      },
      {
        "label": "GitHub Skills",
        "href": "https://skills.github.com/",
        "category": "Practice"
      },
      {
        "label": "DemonTech Git roadmap",
        "href": "/roadmaps/git",
        "category": "Community"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Version Control.",
      "Write notes comparing Version Control vs Branching.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a git & github module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Git & GitHub to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "package-managers",
    "title": "Package Managers",
    "stage": "Beginner",
    "difficulty": "Core",
    "duration": "1 week",
    "description": "Package Managers connects npm, pnpm, yarn into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Git & GitHub"
    ],
    "topics": [
      "npm",
      "pnpm",
      "yarn"
    ],
    "skillsGained": [
      "Apply npm in production-style work",
      "Connect pnpm with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Package Managers fits in a full-stack product",
      "Choose appropriate tools and patterns for npm",
      "Ship a small feature using npm and pnpm"
    ],
    "resources": [
      {
        "label": "npm docs",
        "href": "https://docs.npmjs.com/",
        "category": "Official Docs"
      },
      {
        "label": "pnpm docs",
        "href": "https://pnpm.io/motivation",
        "category": "Official Docs"
      },
      {
        "label": "Yarn docs",
        "href": "https://yarnpkg.com/getting-started",
        "category": "Official Docs"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for npm.",
      "Write notes comparing npm vs pnpm.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a package managers module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Package Managers to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "react-js",
    "title": "React.js",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "4 weeks",
    "description": "React.js connects Components, Hooks, State Management into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Package Managers"
    ],
    "topics": [
      "Components",
      "Hooks",
      "State Management",
      "Context API"
    ],
    "skillsGained": [
      "Apply Components in production-style work",
      "Connect Hooks with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where React.js fits in a full-stack product",
      "Choose appropriate tools and patterns for Components",
      "Ship a small feature using Components and Hooks"
    ],
    "resources": [
      {
        "label": "React docs",
        "href": "https://react.dev/learn",
        "category": "Official Docs"
      },
      {
        "label": "React patterns",
        "href": "https://www.patterns.dev/react",
        "category": "Community"
      },
      {
        "label": "Epic React",
        "href": "https://www.epicreact.dev/",
        "category": "Video"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Components.",
      "Write notes comparing Components vs Hooks.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a react.js module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain React.js to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "next-js",
    "title": "Next.js",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "4 weeks",
    "description": "Next.js connects App Router, Server Components, API Routes into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "React.js"
    ],
    "topics": [
      "App Router",
      "Server Components",
      "API Routes",
      "Middleware",
      "Deployment"
    ],
    "skillsGained": [
      "Apply App Router in production-style work",
      "Connect Server Components with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Next.js fits in a full-stack product",
      "Choose appropriate tools and patterns for App Router",
      "Ship a small feature using App Router and Server Components"
    ],
    "resources": [
      {
        "label": "Next.js docs",
        "href": "https://nextjs.org/docs",
        "category": "Official Docs"
      },
      {
        "label": "Vercel templates",
        "href": "https://vercel.com/templates/next.js",
        "category": "Practice"
      },
      {
        "label": "Next.js Learn",
        "href": "https://nextjs.org/learn",
        "category": "Practice"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for App Router.",
      "Write notes comparing App Router vs Server Components.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a next.js module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Next.js to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "frontend-architecture",
    "title": "Frontend Architecture",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "3 weeks",
    "description": "Frontend Architecture connects Folder Structure, Component Design, Reusability into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Next.js"
    ],
    "topics": [
      "Folder Structure",
      "Component Design",
      "Reusability",
      "Performance Optimization"
    ],
    "skillsGained": [
      "Apply Folder Structure in production-style work",
      "Connect Component Design with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Frontend Architecture fits in a full-stack product",
      "Choose appropriate tools and patterns for Folder Structure",
      "Ship a small feature using Folder Structure and Component Design"
    ],
    "resources": [
      {
        "label": "Patterns.dev",
        "href": "https://www.patterns.dev/",
        "category": "Community"
      },
      {
        "label": "web.dev performance",
        "href": "https://web.dev/performance/",
        "category": "Official Docs"
      },
      {
        "label": "Frontend checklist",
        "href": "https://frontendchecklist.io/",
        "category": "Community"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Folder Structure.",
      "Write notes comparing Folder Structure vs Component Design.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a frontend architecture module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Frontend Architecture to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "backend-fundamentals",
    "title": "Backend Fundamentals",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "3 weeks",
    "description": "Backend Fundamentals connects Node.js, Runtime Environment, Event Loop into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Frontend Architecture"
    ],
    "topics": [
      "Node.js",
      "Runtime Environment",
      "Event Loop",
      "Modules"
    ],
    "skillsGained": [
      "Apply Node.js in production-style work",
      "Connect Runtime Environment with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Backend Fundamentals fits in a full-stack product",
      "Choose appropriate tools and patterns for Node.js",
      "Ship a small feature using Node.js and Runtime Environment"
    ],
    "resources": [
      {
        "label": "Node.js docs",
        "href": "https://nodejs.org/en/docs",
        "category": "Official Docs"
      },
      {
        "label": "Node best practices",
        "href": "https://github.com/goldbergyoni/nodebestpractices",
        "category": "Community"
      },
      {
        "label": "NodeSchool",
        "href": "https://nodeschool.io/",
        "category": "Practice"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Node.js.",
      "Write notes comparing Node.js vs Runtime Environment.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a backend fundamentals module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Backend Fundamentals to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "express-js-nestjs",
    "title": "Express.js / NestJS",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "4 weeks",
    "description": "Express.js / NestJS connects Routing, Middleware, Controllers into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Backend Fundamentals"
    ],
    "topics": [
      "Routing",
      "Middleware",
      "Controllers",
      "Services"
    ],
    "skillsGained": [
      "Apply Routing in production-style work",
      "Connect Middleware with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Express.js / NestJS fits in a full-stack product",
      "Choose appropriate tools and patterns for Routing",
      "Ship a small feature using Routing and Middleware"
    ],
    "resources": [
      {
        "label": "Express docs",
        "href": "https://expressjs.com/",
        "category": "Official Docs"
      },
      {
        "label": "NestJS docs",
        "href": "https://docs.nestjs.com/",
        "category": "Official Docs"
      },
      {
        "label": "NestJS courses",
        "href": "https://courses.nestjs.com/",
        "category": "Video"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Routing.",
      "Write notes comparing Routing vs Middleware.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a express.js / nestjs module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Express.js / NestJS to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "databases",
    "title": "Databases",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "5 weeks",
    "description": "Databases connects SQL, PostgreSQL, MySQL into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Express.js / NestJS"
    ],
    "topics": [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "Database Design",
      "Indexing"
    ],
    "skillsGained": [
      "Apply SQL in production-style work",
      "Connect PostgreSQL with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Databases fits in a full-stack product",
      "Choose appropriate tools and patterns for SQL",
      "Ship a small feature using SQL and PostgreSQL"
    ],
    "resources": [
      {
        "label": "PostgreSQL docs",
        "href": "https://www.postgresql.org/docs/",
        "category": "Official Docs"
      },
      {
        "label": "SQLBolt",
        "href": "https://sqlbolt.com/",
        "category": "Practice"
      },
      {
        "label": "Use The Index, Luke",
        "href": "https://use-the-index-luke.com/",
        "category": "Community"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for SQL.",
      "Write notes comparing SQL vs PostgreSQL.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a databases module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Databases to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "nosql-databases",
    "title": "NoSQL Databases",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "3 weeks",
    "description": "NoSQL Databases connects MongoDB, Redis into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Databases"
    ],
    "topics": [
      "MongoDB",
      "Redis"
    ],
    "skillsGained": [
      "Apply MongoDB in production-style work",
      "Connect Redis with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where NoSQL Databases fits in a full-stack product",
      "Choose appropriate tools and patterns for MongoDB",
      "Ship a small feature using MongoDB and Redis"
    ],
    "resources": [
      {
        "label": "MongoDB docs",
        "href": "https://www.mongodb.com/docs/",
        "category": "Official Docs"
      },
      {
        "label": "Redis docs",
        "href": "https://redis.io/docs/latest/",
        "category": "Official Docs"
      },
      {
        "label": "MongoDB University",
        "href": "https://learn.mongodb.com/",
        "category": "Video"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for MongoDB.",
      "Write notes comparing MongoDB vs Redis.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a nosql databases module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain NoSQL Databases to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "apis",
    "title": "APIs",
    "stage": "Intermediate",
    "difficulty": "Advanced",
    "duration": "4 weeks",
    "description": "APIs connects REST, GraphQL, API Documentation into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "NoSQL Databases"
    ],
    "topics": [
      "REST",
      "GraphQL",
      "API Documentation",
      "API Versioning"
    ],
    "skillsGained": [
      "Apply REST in production-style work",
      "Connect GraphQL with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where APIs fits in a full-stack product",
      "Choose appropriate tools and patterns for REST",
      "Ship a small feature using REST and GraphQL"
    ],
    "resources": [
      {
        "label": "OpenAPI specification",
        "href": "https://spec.openapis.org/oas/latest.html",
        "category": "Official Docs"
      },
      {
        "label": "GraphQL Learn",
        "href": "https://graphql.org/learn/",
        "category": "Official Docs"
      },
      {
        "label": "Postman Learning Center",
        "href": "https://learning.postman.com/",
        "category": "Practice"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for REST.",
      "Write notes comparing REST vs GraphQL.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a apis module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain APIs to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "authentication-and-security",
    "title": "Authentication & Security",
    "stage": "Intermediate",
    "difficulty": "Advanced",
    "duration": "4 weeks",
    "description": "Authentication & Security connects JWT, OAuth, Sessions into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "APIs"
    ],
    "topics": [
      "JWT",
      "OAuth",
      "Sessions",
      "RBAC",
      "Security Best Practices"
    ],
    "skillsGained": [
      "Apply JWT in production-style work",
      "Connect OAuth with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Authentication & Security fits in a full-stack product",
      "Choose appropriate tools and patterns for JWT",
      "Ship a small feature using JWT and OAuth"
    ],
    "resources": [
      {
        "label": "OWASP Top 10",
        "href": "https://owasp.org/www-project-top-ten/",
        "category": "Official Docs"
      },
      {
        "label": "Auth0 docs",
        "href": "https://auth0.com/docs",
        "category": "Official Docs"
      },
      {
        "label": "PortSwigger Academy",
        "href": "https://portswigger.net/web-security",
        "category": "Practice"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for JWT.",
      "Write notes comparing JWT vs OAuth.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a authentication & security module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Authentication & Security to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "orms-and-data-access",
    "title": "ORMs & Data Access",
    "stage": "Intermediate",
    "difficulty": "Applied",
    "duration": "2 weeks",
    "description": "ORMs & Data Access connects Prisma, Drizzle ORM, TypeORM into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Authentication & Security"
    ],
    "topics": [
      "Prisma",
      "Drizzle ORM",
      "TypeORM"
    ],
    "skillsGained": [
      "Apply Prisma in production-style work",
      "Connect Drizzle ORM with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where ORMs & Data Access fits in a full-stack product",
      "Choose appropriate tools and patterns for Prisma",
      "Ship a small feature using Prisma and Drizzle ORM"
    ],
    "resources": [
      {
        "label": "Prisma docs",
        "href": "https://www.prisma.io/docs",
        "category": "Official Docs"
      },
      {
        "label": "Drizzle docs",
        "href": "https://orm.drizzle.team/docs/overview",
        "category": "Official Docs"
      },
      {
        "label": "TypeORM docs",
        "href": "https://typeorm.io/",
        "category": "Official Docs"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Prisma.",
      "Write notes comparing Prisma vs Drizzle ORM.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a orms & data access module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain ORMs & Data Access to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "state-management",
    "title": "State Management",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "3 weeks",
    "description": "State Management connects Redux Toolkit, Zustand, TanStack Query into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "ORMs & Data Access"
    ],
    "topics": [
      "Redux Toolkit",
      "Zustand",
      "TanStack Query"
    ],
    "skillsGained": [
      "Apply Redux Toolkit in production-style work",
      "Connect Zustand with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where State Management fits in a full-stack product",
      "Choose appropriate tools and patterns for Redux Toolkit",
      "Ship a small feature using Redux Toolkit and Zustand"
    ],
    "resources": [
      {
        "label": "Redux Toolkit docs",
        "href": "https://redux-toolkit.js.org/",
        "category": "Official Docs"
      },
      {
        "label": "Zustand docs",
        "href": "https://zustand.docs.pmnd.rs/",
        "category": "Official Docs"
      },
      {
        "label": "TanStack Query docs",
        "href": "https://tanstack.com/query/latest",
        "category": "Official Docs"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Redux Toolkit.",
      "Write notes comparing Redux Toolkit vs Zustand.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a state management module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain State Management to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "testing",
    "title": "Testing",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "4 weeks",
    "description": "Testing connects Jest, Vitest, Playwright into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "State Management"
    ],
    "topics": [
      "Jest",
      "Vitest",
      "Playwright",
      "Cypress",
      "Integration Testing"
    ],
    "skillsGained": [
      "Apply Jest in production-style work",
      "Connect Vitest with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Testing fits in a full-stack product",
      "Choose appropriate tools and patterns for Jest",
      "Ship a small feature using Jest and Vitest"
    ],
    "resources": [
      {
        "label": "Jest docs",
        "href": "https://jestjs.io/docs/getting-started",
        "category": "Official Docs"
      },
      {
        "label": "Vitest docs",
        "href": "https://vitest.dev/guide/",
        "category": "Official Docs"
      },
      {
        "label": "Playwright docs",
        "href": "https://playwright.dev/docs/intro",
        "category": "Official Docs"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Jest.",
      "Write notes comparing Jest vs Vitest.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a testing module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Testing to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "performance-optimization",
    "title": "Performance Optimization",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "4 weeks",
    "description": "Performance Optimization connects Lazy Loading, Code Splitting, Caching into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Testing"
    ],
    "topics": [
      "Lazy Loading",
      "Code Splitting",
      "Caching",
      "Web Vitals",
      "Lighthouse"
    ],
    "skillsGained": [
      "Apply Lazy Loading in production-style work",
      "Connect Code Splitting with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Performance Optimization fits in a full-stack product",
      "Choose appropriate tools and patterns for Lazy Loading",
      "Ship a small feature using Lazy Loading and Code Splitting"
    ],
    "resources": [
      {
        "label": "web.dev performance",
        "href": "https://web.dev/performance/",
        "category": "Official Docs"
      },
      {
        "label": "Lighthouse docs",
        "href": "https://developer.chrome.com/docs/lighthouse/overview",
        "category": "Official Docs"
      },
      {
        "label": "Core Web Vitals",
        "href": "https://web.dev/vitals/",
        "category": "Official Docs"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Lazy Loading.",
      "Write notes comparing Lazy Loading vs Code Splitting.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a performance optimization module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Performance Optimization to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "devops-fundamentals",
    "title": "DevOps Fundamentals",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "3 weeks",
    "description": "DevOps Fundamentals connects Linux, Bash, CI/CD into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Performance Optimization"
    ],
    "topics": [
      "Linux",
      "Bash",
      "CI/CD",
      "GitHub Actions"
    ],
    "skillsGained": [
      "Apply Linux in production-style work",
      "Connect Bash with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where DevOps Fundamentals fits in a full-stack product",
      "Choose appropriate tools and patterns for Linux",
      "Ship a small feature using Linux and Bash"
    ],
    "resources": [
      {
        "label": "GitHub Actions docs",
        "href": "https://docs.github.com/en/actions",
        "category": "Official Docs"
      },
      {
        "label": "Linux Journey",
        "href": "https://linuxjourney.com/",
        "category": "Practice"
      },
      {
        "label": "Bash guide",
        "href": "https://mywiki.wooledge.org/BashGuide",
        "category": "Community"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Linux.",
      "Write notes comparing Linux vs Bash.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a devops fundamentals module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain DevOps Fundamentals to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "docker",
    "title": "Docker",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "3 weeks",
    "description": "Docker connects Images, Containers, Docker Compose into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "DevOps Fundamentals"
    ],
    "topics": [
      "Images",
      "Containers",
      "Docker Compose"
    ],
    "skillsGained": [
      "Apply Images in production-style work",
      "Connect Containers with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Docker fits in a full-stack product",
      "Choose appropriate tools and patterns for Images",
      "Ship a small feature using Images and Containers"
    ],
    "resources": [
      {
        "label": "Docker docs",
        "href": "https://docs.docker.com/",
        "category": "Official Docs"
      },
      {
        "label": "Play with Docker",
        "href": "https://labs.play-with-docker.com/",
        "category": "Practice"
      },
      {
        "label": "Docker curriculum",
        "href": "https://docker-curriculum.com/",
        "category": "Community"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Images.",
      "Write notes comparing Images vs Containers.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a docker module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Docker to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "cloud-fundamentals",
    "title": "Cloud Fundamentals",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "4 weeks",
    "description": "Cloud Fundamentals connects AWS, Vercel, Railway into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Docker"
    ],
    "topics": [
      "AWS",
      "Vercel",
      "Railway",
      "Render"
    ],
    "skillsGained": [
      "Apply AWS in production-style work",
      "Connect Vercel with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Cloud Fundamentals fits in a full-stack product",
      "Choose appropriate tools and patterns for AWS",
      "Ship a small feature using AWS and Vercel"
    ],
    "resources": [
      {
        "label": "AWS docs",
        "href": "https://docs.aws.amazon.com/",
        "category": "Official Docs"
      },
      {
        "label": "Vercel docs",
        "href": "https://vercel.com/docs",
        "category": "Official Docs"
      },
      {
        "label": "Railway docs",
        "href": "https://docs.railway.com/",
        "category": "Official Docs"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for AWS.",
      "Write notes comparing AWS vs Vercel.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a cloud fundamentals module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Cloud Fundamentals to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "monitoring-and-observability",
    "title": "Monitoring & Observability",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "3 weeks",
    "description": "Monitoring & Observability connects Logging, Metrics, Error Tracking into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Cloud Fundamentals"
    ],
    "topics": [
      "Logging",
      "Metrics",
      "Error Tracking"
    ],
    "skillsGained": [
      "Apply Logging in production-style work",
      "Connect Metrics with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Monitoring & Observability fits in a full-stack product",
      "Choose appropriate tools and patterns for Logging",
      "Ship a small feature using Logging and Metrics"
    ],
    "resources": [
      {
        "label": "OpenTelemetry docs",
        "href": "https://opentelemetry.io/docs/",
        "category": "Official Docs"
      },
      {
        "label": "Sentry docs",
        "href": "https://docs.sentry.io/",
        "category": "Official Docs"
      },
      {
        "label": "Grafana docs",
        "href": "https://grafana.com/docs/",
        "category": "Official Docs"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Logging.",
      "Write notes comparing Logging vs Metrics.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a monitoring & observability module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Monitoring & Observability to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "architecture-patterns",
    "title": "Architecture Patterns",
    "stage": "Advanced",
    "difficulty": "Advanced",
    "duration": "4 weeks",
    "description": "Architecture Patterns connects MVC, Clean Architecture, Monolith into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Monitoring & Observability"
    ],
    "topics": [
      "MVC",
      "Clean Architecture",
      "Monolith",
      "Microservices"
    ],
    "skillsGained": [
      "Apply MVC in production-style work",
      "Connect Clean Architecture with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Architecture Patterns fits in a full-stack product",
      "Choose appropriate tools and patterns for MVC",
      "Ship a small feature using MVC and Clean Architecture"
    ],
    "resources": [
      {
        "label": "Martin Fowler architecture",
        "href": "https://martinfowler.com/architecture/",
        "category": "Community"
      },
      {
        "label": "Microservices.io",
        "href": "https://microservices.io/",
        "category": "Community"
      },
      {
        "label": "Clean Architecture guide",
        "href": "https://8thlight.com/insights/a-color-coded-guide-to-ports-and-adapters",
        "category": "Community"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for MVC.",
      "Write notes comparing MVC vs Clean Architecture.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a architecture patterns module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Architecture Patterns to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "kubernetes",
    "title": "Kubernetes",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "4 weeks",
    "description": "Kubernetes connects Pods, Services, Deployments into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Architecture Patterns"
    ],
    "topics": [
      "Pods",
      "Services",
      "Deployments"
    ],
    "skillsGained": [
      "Apply Pods in production-style work",
      "Connect Services with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Kubernetes fits in a full-stack product",
      "Choose appropriate tools and patterns for Pods",
      "Ship a small feature using Pods and Services"
    ],
    "resources": [
      {
        "label": "Kubernetes docs",
        "href": "https://kubernetes.io/docs/home/",
        "category": "Official Docs"
      },
      {
        "label": "Play with Kubernetes",
        "href": "https://labs.play-with-k8s.com/",
        "category": "Practice"
      },
      {
        "label": "Kubernetes tutorials",
        "href": "https://kubernetes.io/docs/tutorials/",
        "category": "Practice"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Pods.",
      "Write notes comparing Pods vs Services.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a kubernetes module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Kubernetes to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "infrastructure-as-code",
    "title": "Infrastructure as Code",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "4 weeks",
    "description": "Infrastructure as Code connects Terraform, Pulumi into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Kubernetes"
    ],
    "topics": [
      "Terraform",
      "Pulumi"
    ],
    "skillsGained": [
      "Apply Terraform in production-style work",
      "Connect Pulumi with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Infrastructure as Code fits in a full-stack product",
      "Choose appropriate tools and patterns for Terraform",
      "Ship a small feature using Terraform and Pulumi"
    ],
    "resources": [
      {
        "label": "Terraform docs",
        "href": "https://developer.hashicorp.com/terraform/docs",
        "category": "Official Docs"
      },
      {
        "label": "Pulumi docs",
        "href": "https://www.pulumi.com/docs/",
        "category": "Official Docs"
      },
      {
        "label": "Terraform tutorials",
        "href": "https://developer.hashicorp.com/terraform/tutorials",
        "category": "Practice"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Terraform.",
      "Write notes comparing Terraform vs Pulumi.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a infrastructure as code module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Infrastructure as Code to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "system-design",
    "title": "System Design",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "6 weeks",
    "description": "System Design connects Scalability, Load Balancing, Distributed Systems into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Infrastructure as Code"
    ],
    "topics": [
      "Scalability",
      "Load Balancing",
      "Distributed Systems",
      "Caching Strategies"
    ],
    "skillsGained": [
      "Apply Scalability in production-style work",
      "Connect Load Balancing with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where System Design fits in a full-stack product",
      "Choose appropriate tools and patterns for Scalability",
      "Ship a small feature using Scalability and Load Balancing"
    ],
    "resources": [
      {
        "label": "System Design Primer",
        "href": "https://github.com/donnemartin/system-design-primer",
        "category": "Community"
      },
      {
        "label": "AWS Well-Architected",
        "href": "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
        "category": "Official Docs"
      },
      {
        "label": "Google SRE books",
        "href": "https://sre.google/books/",
        "category": "Official Docs"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Scalability.",
      "Write notes comparing Scalability vs Load Balancing.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a system design module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain System Design to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "advanced-backend-engineering",
    "title": "Advanced Backend Engineering",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "4 weeks",
    "description": "Advanced Backend Engineering connects Message Queues, Kafka, RabbitMQ into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "System Design"
    ],
    "topics": [
      "Message Queues",
      "Kafka",
      "RabbitMQ",
      "Event-Driven Architecture"
    ],
    "skillsGained": [
      "Apply Message Queues in production-style work",
      "Connect Kafka with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Advanced Backend Engineering fits in a full-stack product",
      "Choose appropriate tools and patterns for Message Queues",
      "Ship a small feature using Message Queues and Kafka"
    ],
    "resources": [
      {
        "label": "Kafka docs",
        "href": "https://kafka.apache.org/documentation/",
        "category": "Official Docs"
      },
      {
        "label": "RabbitMQ tutorials",
        "href": "https://www.rabbitmq.com/tutorials",
        "category": "Official Docs"
      },
      {
        "label": "AWS event-driven architecture",
        "href": "https://aws.amazon.com/event-driven-architecture/",
        "category": "Official Docs"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Message Queues.",
      "Write notes comparing Message Queues vs Kafka.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a advanced backend engineering module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Advanced Backend Engineering to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "advanced-frontend-engineering",
    "title": "Advanced Frontend Engineering",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "4 weeks",
    "description": "Advanced Frontend Engineering connects PWAs, WebSockets, GraphQL Clients into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Advanced Backend Engineering"
    ],
    "topics": [
      "PWAs",
      "WebSockets",
      "GraphQL Clients",
      "Micro Frontends"
    ],
    "skillsGained": [
      "Apply PWAs in production-style work",
      "Connect WebSockets with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Advanced Frontend Engineering fits in a full-stack product",
      "Choose appropriate tools and patterns for PWAs",
      "Ship a small feature using PWAs and WebSockets"
    ],
    "resources": [
      {
        "label": "MDN PWA",
        "href": "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",
        "category": "Official Docs"
      },
      {
        "label": "WebSocket API",
        "href": "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
        "category": "Official Docs"
      },
      {
        "label": "GraphQL clients",
        "href": "https://www.apollographql.com/docs/react/",
        "category": "Official Docs"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for PWAs.",
      "Write notes comparing PWAs vs WebSockets.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a advanced frontend engineering module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Advanced Frontend Engineering to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "production-engineering",
    "title": "Production Engineering",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "5 weeks",
    "description": "Production Engineering connects Reliability, High Availability, Disaster Recovery into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Advanced Frontend Engineering"
    ],
    "topics": [
      "Reliability",
      "High Availability",
      "Disaster Recovery",
      "Cost Optimization"
    ],
    "skillsGained": [
      "Apply Reliability in production-style work",
      "Connect High Availability with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Production Engineering fits in a full-stack product",
      "Choose appropriate tools and patterns for Reliability",
      "Ship a small feature using Reliability and High Availability"
    ],
    "resources": [
      {
        "label": "Google SRE books",
        "href": "https://sre.google/books/",
        "category": "Official Docs"
      },
      {
        "label": "AWS reliability pillar",
        "href": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
        "category": "Official Docs"
      },
      {
        "label": "FinOps Foundation",
        "href": "https://www.finops.org/introduction/what-is-finops/",
        "category": "Community"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Reliability.",
      "Write notes comparing Reliability vs High Availability.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a production engineering module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Production Engineering to a junior developer, and what mistake should they avoid first?"
  },
  {
    "id": "technical-leadership",
    "title": "Technical Leadership",
    "stage": "Expert",
    "difficulty": "Expert",
    "duration": "3 weeks",
    "description": "Technical Leadership connects Code Reviews, Documentation, Team Collaboration into a practical full-stack engineering skill you can use in real products.",
    "prerequisites": [
      "Production Engineering"
    ],
    "topics": [
      "Code Reviews",
      "Documentation",
      "Team Collaboration",
      "Software Design Decisions"
    ],
    "skillsGained": [
      "Apply Code Reviews in production-style work",
      "Connect Documentation with the rest of the stack",
      "Document tradeoffs and implementation decisions",
      "Build portfolio-ready proof of skill"
    ],
    "learningOutcomes": [
      "Explain where Technical Leadership fits in a full-stack product",
      "Choose appropriate tools and patterns for Code Reviews",
      "Ship a small feature using Code Reviews and Documentation"
    ],
    "resources": [
      {
        "label": "Google engineering practices",
        "href": "https://google.github.io/eng-practices/",
        "category": "Community"
      },
      {
        "label": "Architecture decision records",
        "href": "https://adr.github.io/",
        "category": "Community"
      },
      {
        "label": "Staff Engineer",
        "href": "https://staffeng.com/",
        "category": "Community"
      }
    ],
    "practiceExercises": [
      "Create a focused lab for Code Reviews.",
      "Write notes comparing Code Reviews vs Documentation.",
      "Add this topic to a production-style full-stack app."
    ],
    "miniProject": "Build a technical leadership module for a full-stack product dashboard.",
    "realWorldApplications": [
      "SaaS product delivery",
      "Team collaboration and review",
      "Production debugging and iteration"
    ],
    "quiz": "How would you explain Technical Leadership to a junior developer, and what mistake should they avoid first?"
  }
];

const projectTracks: ProjectTrack[] = [
  {
    "stage": "Beginner",
    "projects": [
      "Personal Portfolio",
      "Landing Page",
      "Weather App",
      "Todo Application"
    ]
  },
  {
    "stage": "Intermediate",
    "projects": [
      "Authentication System",
      "Blog Platform",
      "Task Management App",
      "E-commerce Frontend"
    ]
  },
  {
    "stage": "Advanced",
    "projects": [
      "Full Stack SaaS",
      "Social Media Platform",
      "Real-Time Chat Application",
      "Learning Management System"
    ]
  },
  {
    "stage": "Expert",
    "projects": [
      "Netflix Clone Architecture",
      "Scalable Multi-Tenant SaaS",
      "Distributed Microservices Platform",
      "Enterprise Project Management Tool"
    ]
  }
];


const careerPaths: RoadmapPath[] = [
  {
    title: "Junior Full Stack Developer",
    focus: "Build CRUD features, responsive UI, API routes, database reads, and clean pull requests.",
    milestones: ["Portfolio app", "Auth flow", "Team-ready Git workflow"],
  },
  {
    title: "Mid-Level Full Stack Developer",
    focus: "Own features end-to-end, improve performance, write tests, and make pragmatic architecture choices.",
    milestones: ["Production Next.js app", "Tested API", "Database-backed dashboard"],
  },
  {
    title: "Senior Full Stack Developer",
    focus: "Lead product architecture, mentor others, review code, and design scalable systems.",
    milestones: ["System design docs", "Observability rollout", "Reusable platform patterns"],
  },
  {
    title: "Staff Engineer Path",
    focus: "Set technical direction, reduce system risk, and guide cross-team software design decisions.",
    milestones: ["Architecture decision records", "Platform roadmap", "Reliability strategy"],
  },
  {
    title: "Freelancing Path",
    focus: "Package discovery, estimates, client communication, delivery, deployment, and maintenance.",
    milestones: ["Client proposal", "Reusable starter", "Launch checklist"],
  },
  {
    title: "Startup Founder Path",
    focus: "Build MVPs, validate product ideas, instrument analytics, and optimize cost while moving fast.",
    milestones: ["MVP launch", "Payments", "Multi-tenant SaaS baseline"],
  },
];

const achievementBadges: string[] = [
  "Frontend Shipper",
  "API Architect",
  "Database Designer",
  "Security Defender",
  "Cloud Operator",
  "System Design Lead",
  "Production Engineer",
  "Technical Mentor",
];


const gamificationCards: Array<[string, string]> = [
  ["Project Milestones", "Track shipped full-stack projects from starter apps to SaaS-grade systems."],
  ["Achievement Badges", "Unlock visible badges for frontend, backend, database, cloud, security, and leadership mastery."],
  ["Notes & Quizzes", "Capture per-topic notes and use quiz prompts to reinforce architecture decisions."],
];

const resourceCategories: string[] = ["Official Docs", "Video", "Practice", "Community"];

const readinessMetrics: ReadinessMetric[] = [
  { label: "Frontend readiness", icon: "server", topicTitles: ["HTML5", "CSS3", "React.js", "Next.js"] },
  { label: "Backend readiness", icon: "layers", topicTitles: ["Backend Fundamentals", "APIs", "Databases", "Authentication"] },
  { label: "Product readiness", icon: "shield", topicTitles: ["Testing", "Deployment", "System Design", "Production Engineering"] },
];

export default function FullStackDeveloperRoadmap() {
  return (
    <RoadmapPageShell
      storageKey="demontech-full-stack-roadmap"
      breadcrumb="Full Stack Developer"
      eyebrow="Production Full Stack Engineering Path"
      title="Full Stack Developer Roadmap"
      description="A complete end-to-end learning journey across frontend, backend, databases, DevOps, cloud, system design, product engineering, and technical leadership."
      stats={[["33", "Roadmap nodes", "layers"], ["76-102 weeks", "Total duration", "clock"], ["140+", "Skills tracked", "badge"], ["16", "Project builds", "target"]]}
      architectureLabel="Stack Architecture"
      projectIntro="Every level ends with shippable product work that combines UI, APIs, data, auth, deployment, reliability, and collaboration skills."
      journeyTitle="Vertical Full Stack Journey"
      journeyDescription="Expand each node for prerequisites, learning outcomes, resources, practice exercises, mini projects, quizzes, bookmarks, and notes."
      resourceTitle="Full Stack Resource Matrix"
      pathTitle="Career Paths"
      pathDescription="Choose a full-stack specialization track based on product depth, platform complexity, and leadership goals."
      gamificationTitle="Learning Features"
      progressTitle="Full Stack Progress"
      readinessTitle="Full Stack Readiness"
      estimatedTime="76-102w"
      miniProjectLabel="Mini Project"
      stageSummaries={stageSummaries}
      roadmapNodes={roadmapNodes}
      projectTracks={projectTracks}
      resourceCategories={resourceCategories}
      paths={careerPaths}
      gamificationCards={gamificationCards}
      achievementBadges={achievementBadges}
      readinessMetrics={readinessMetrics}
    />
  );
}
