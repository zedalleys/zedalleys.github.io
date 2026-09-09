// Static reference maps, one per discipline, surfaced at /roadmaps.html.
//
// Adapted from the public "UX/UI Product Design Roadmap"
// (product-design-roadmap.com) and the "Frontend Developer" and "Backend
// Developer" roadmaps (roadmap.sh/frontend, roadmap.sh/backend) as a fixed
// reference — not a live or linked copy. Every item is plain text: nothing
// here fetches a resource, links out, or nests into its own page. A category
// with no `sections` renders as "coming soon".
//
// This used to be a route inside the Learning Hub React app
// (`_hub/src/data/roadmap.ts`); it was pulled out into a standalone page so
// Roadmaps is a peer of Work / Journal / Learning Hub, not nested under one.

const productDesignSections = [
  {
    id: "product-thinking",
    title: "Product Thinking",
    clusters: [
      {
        title: "Pre-launch",
        items: [
          "Product Vision",
          "Product Strategy",
          "Value Proposition",
          "Product-Market Fit",
          "Product Roadmap",
          "Product Pitch",
        ],
      },
      { title: "Launch", items: ["MVP", "Product Launch", "Press Release"] },
      {
        title: "Post-Launch",
        items: ["Product Usage Analytics", "Customer Retention", "Product Pivot"],
      },
      { title: "Success Metrics", items: ["Business Metrics", "Design Metrics"] },
    ],
  },
  {
    id: "design-research",
    title: "Design Research",
    clusters: [
      {
        title: "Discover (Primary Research)",
        items: ["Interviews", "Usability Test", "Surveys", "Contextual Inquiry"],
      },
      {
        title: "Types of Research",
        items: [
          "Competitive Research",
          "SWOT Analysis",
          "Qualitative Research",
          "Quantitative Research",
        ],
      },
      {
        title: "Explore & Experiment",
        items: ["Task Analysis", "Analytics", "A/B Testing", "Card Sorting"],
      },
      {
        title: "Planning & Analysis",
        items: ["Research Planning", "Analysis of Findings", "Research Repository"],
      },
    ],
  },
  {
    id: "user-experience",
    title: "User Experience",
    clusters: [
      {
        title: "Design Thinking",
        items: [
          "Define",
          "Problem Statement",
          "Ideate",
          "Brainstorming",
          "Information Architecture",
          "User Flow",
          "Mind Map",
          "Prototype",
          "Sketching",
          "Wireframing",
          "Prototyping",
          "Test and Iterate",
          "Usability Test",
        ],
      },
      {
        title: "Interaction Design",
        items: [
          "Human-Computer Interaction",
          "Cognitive Psychology",
          "Basics & Principles",
          "Gestalt Principles",
          "Visual Hierarchy",
          "Jobs-to-be-Done",
          "User Story",
        ],
      },
      {
        title: "Visual Design",
        items: [
          "Personas",
          "Empathy Map",
          "Customer Journey Map",
          "UX Benchmarking",
          "Content Strategy",
          "UX Storytelling",
        ],
      },
    ],
  },
  {
    id: "user-interface",
    title: "User Interface",
    clusters: [
      {
        title: "Fundamentals",
        items: ["Color Palette", "Typography", "Grids & Spacings", "Iconography"],
      },
      {
        title: "Components & Patterns",
        items: [
          "Component Library",
          "Design Guidelines",
          "Interactions",
          "Components",
          "UI Patterns",
          "Design Principles",
          "Documentation",
        ],
      },
      {
        title: "Usability & Accessibility",
        items: [
          "Usability Principles",
          "Usability Issues",
          "Accessible Design",
          "Inclusive Design",
          "Tools & Checklist",
        ],
      },
      {
        title: "Web & Mobile",
        items: [
          "Web Design",
          "HTML & CSS",
          "Responsive Layouts",
          "Mobile App Design",
          "iOS & Android",
          "Mobile UI Patterns",
        ],
      },
      {
        title: "Motion & Systems",
        items: [
          "UI Animation",
          "Micro-interactions",
          "Design Systems",
          "Atomic Design",
          "Design Handoff",
          "Design Tools",
        ],
      },
    ],
  },
  {
    id: "communication",
    title: "Communication",
    clusters: [
      {
        title: "Product Teams",
        items: [
          "Collaborating with Stakeholders",
          "Team Structure",
          "Analysis & Alignment",
          "Collaboration",
        ],
      },
      {
        title: "Interview Skills",
        items: ["Interview Skills", "Interview Guide", "Interview Questions"],
      },
      {
        title: "Design Portfolio",
        items: [
          "Design Portfolio",
          "Presentation Skills",
          "Best Practices",
          "Case Studies",
          "Design Presentation",
        ],
      },
      {
        title: "Methodologies",
        items: ["Project Planning", "Methodologies", "Agile UX", "Lean UX", "Define OKRs"],
      },
      {
        title: "Soft Skills",
        items: ["Soft Skills", "Management", "Collecting Feedback", "Design Questions"],
      },
    ],
  },
];

const frontEndSections = [
  {
    id: "web-fundamentals",
    title: "Web Fundamentals",
    clusters: [
      {
        title: "How the Web Works",
        items: [
          "How Does the Internet Work",
          "What is HTTP",
          "DNS and How It Works",
          "What is Domain Name",
          "What is Hosting",
          "Browsers and How They Work",
        ],
      },
      {
        title: "Version Control",
        items: ["Git", "GitHub", "GitLab", "Version Control Systems", "Repo Hosting Services"],
      },
      {
        title: "Package Managers",
        items: ["npm", "Yarn", "pnpm", "Bun"],
      },
    ],
  },
  {
    id: "html-css",
    title: "HTML & CSS",
    clusters: [
      {
        title: "HTML",
        items: [
          "HTML Basics",
          "Semantic HTML",
          "Forms & Validations",
          "Accessibility",
          "SEO Basics",
          "Conventions & Best Practices",
        ],
      },
      {
        title: "CSS",
        items: ["CSS Basics", "Layouts (Flexbox & Grid)", "Responsive Design", "Modern CSS"],
      },
      {
        title: "CSS at Scale",
        items: [
          "CSS Architecture (BEM)",
          "CSS Preprocessors (Sass)",
          "CSS Frameworks (Tailwind)",
          "Design Systems",
        ],
      },
    ],
  },
  {
    id: "javascript-typescript",
    title: "JavaScript & TypeScript",
    clusters: [
      {
        title: "JavaScript Fundamentals",
        items: [
          "JavaScript Basics",
          "DOM Manipulation",
          "Fetch API / AJAX",
          "ES6+ Syntax",
          "Events & Event Bubbling",
          "Hoisting & Closures",
          "Prototype & this Keyword",
        ],
      },
      {
        title: "Web APIs & Browser Features",
        items: ["Web APIs", "Web Components", "Custom Elements", "Shadow DOM", "Service Workers"],
      },
      {
        title: "TypeScript",
        items: ["TypeScript", "Type Checkers"],
      },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Meta-Frameworks",
    clusters: [
      {
        title: "Pick a Framework",
        items: ["React", "Vue", "Angular", "Svelte", "Solid.js"],
      },
      {
        title: "Meta-Frameworks",
        items: ["Next.js", "Nuxt.js", "SvelteKit", "Astro", "SSR", "SSG"],
      },
      {
        title: "Routing & Data",
        items: ["React Router", "GraphQL", "Apollo", "TanStack"],
      },
      {
        title: "Mobile & Desktop",
        items: ["React Native", "Flutter", "Ionic", "Electron", "Tauri"],
      },
    ],
  },
  {
    id: "build-test-ship",
    title: "Build, Test & Ship",
    clusters: [
      {
        title: "Build Tools",
        items: ["Vite", "Module Bundlers (Webpack, Rollup, Parcel)", "esbuild", "SWC"],
      },
      {
        title: "Code Quality",
        items: ["ESLint", "Prettier", "Linters & Formatters", "Code Reviews", "Refactoring"],
      },
      {
        title: "Testing",
        items: ["Jest", "Vitest", "Cypress", "Playwright", "Unit & E2E Testing"],
      },
      {
        title: "Deployment & Hosting",
        items: ["Netlify", "Vercel", "Cloudflare", "GitHub Pages"],
      },
    ],
  },
  {
    id: "security-performance",
    title: "Security, Performance & Practice",
    clusters: [
      {
        title: "Security",
        items: ["Web Security", "CORS", "CSP", "OWASP Top Risks", "Auth Strategies", "HTTPS"],
      },
      {
        title: "Performance",
        items: ["Web Performance", "Cache Control", "Lighthouse", "PWAs", "Service Workers"],
      },
      {
        title: "Working with AI",
        items: [
          "Prompting Techniques",
          "AI-Assisted Coding",
          "AI Coding Agents",
          "Implementing AI Features",
          "MCP",
        ],
      },
    ],
  },
];

const backEndSections = [
  {
    id: "web-fundamentals",
    title: "Web Fundamentals",
    clusters: [
      {
        title: "How the Web Works",
        items: [
          "How Does the Internet Work",
          "What is HTTP",
          "DNS and How It Works",
          "What is Domain Name",
          "What is Hosting",
          "Browsers and How They Work",
        ],
      },
      {
        title: "Version Control",
        items: ["Git", "GitHub", "GitLab", "Version Control Systems", "Repo Hosting Services"],
      },
      {
        title: "Frontend Basics",
        items: ["HTML", "CSS", "JavaScript", "Frontend Basics"],
      },
    ],
  },
  {
    id: "languages-apis",
    title: "Languages & APIs",
    clusters: [
      {
        title: "Pick a Language",
        items: ["Python", "JavaScript (Node.js)", "Java", "Go", "Rust", "PHP", "Ruby", "C"],
      },
      {
        title: "Learn About APIs",
        items: ["REST", "JSON APIs", "GraphQL", "gRPC", "SOAP", "Open API Specs (Swagger)"],
      },
      {
        title: "Web Servers",
        items: ["Nginx", "Apache", "Caddy", "MS IIS"],
      },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    clusters: [
      {
        title: "Relational Databases",
        items: ["PostgreSQL", "MySQL", "MariaDB", "MS SQL", "Oracle", "SQLite"],
      },
      {
        title: "NoSQL Databases",
        items: ["MongoDB", "CouchDB", "DynamoDB", "Cassandra", "Redis", "Neo4j"],
      },
      {
        title: "Database Fundamentals",
        items: ["ACID", "Transactions", "Normalization", "Database Indexes", "ORMs", "Migrations"],
      },
      {
        title: "Scaling Databases",
        items: ["Sharding Strategies", "Data Replication", "CAP Theorem", "N+1 Problem"],
      },
    ],
  },
  {
    id: "caching-security",
    title: "Caching & Security",
    clusters: [
      {
        title: "Caching",
        items: ["Redis", "Memcached", "HTTP Caching", "Server-Side Caching", "Client-Side Caching"],
      },
      {
        title: "Security Fundamentals",
        items: [
          "HTTPS / SSL & TLS",
          "CORS",
          "CSP",
          "OWASP Top Risks",
          "Server Security",
          "Hashing (MD5, SHA, bcrypt, scrypt)",
        ],
      },
      {
        title: "Authentication",
        items: [
          "Basic Authentication",
          "OAuth",
          "Cookie-Based Auth",
          "JWT",
          "Token Authentication",
          "SAML",
          "OpenID",
        ],
      },
    ],
  },
  {
    id: "architecture-operations",
    title: "Architecture & Operations",
    clusters: [
      {
        title: "Architectural Patterns",
        items: ["Monolith", "Microservices", "SOA", "Service Mesh", "Serverless"],
      },
      {
        title: "Message Brokers & Real-Time",
        items: ["Kafka", "RabbitMQ", "WebSockets", "Server-Sent Events", "Long & Short Polling"],
      },
      {
        title: "Building for Scale",
        items: [
          "Twelve-Factor Apps",
          "Graceful Degradation",
          "Circuit Breaker",
          "Backpressure",
          "Load Shifting",
          "Throttling",
        ],
      },
      {
        title: "Observability",
        items: [
          "Monitoring",
          "Instrumentation",
          "Telemetry",
          "Profiling Performance",
          "Failure Modes",
        ],
      },
    ],
  },
  {
    id: "testing-delivery-ai",
    title: "Testing, Delivery & AI",
    clusters: [
      {
        title: "Testing",
        items: ["Unit Testing", "Integration Testing", "Functional Testing"],
      },
      {
        title: "CI/CD & Code Quality",
        items: ["CI/CD Pipelines", "Code Reviews", "Refactoring", "Documentation Generation"],
      },
      {
        title: "Search Engines",
        items: ["Elasticsearch", "Solr"],
      },
      {
        title: "Working with AI",
        items: [
          "Prompting Techniques",
          "AI-Assisted Coding",
          "AI Coding Agents",
          "MCP",
          "Embeddings & Vectors",
          "RAGs",
          "Function Calling",
          "Structured Outputs",
        ],
      },
    ],
  },
];

module.exports = [
  { id: "product-design", label: "Product Design", sections: productDesignSections },
  { id: "front-end", label: "Front-End", sections: frontEndSections },
  { id: "back-end", label: "Back-End", sections: backEndSections },
  { id: "product-management", label: "Product Management" },
  { id: "business-analysis", label: "Business Analysis" },
  { id: "project-management", label: "Project Management" },
];
