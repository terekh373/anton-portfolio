import type { Dictionary } from './dictionary';

export const en: Dictionary = {
  meta: {
    title: 'Anton Tereshchenko — Junior .NET Developer',
    description:
      'Backend on C# and ASP.NET Core, with the frontend to match. Portfolio of Anton Tereshchenko, Junior .NET Developer based in Kharkiv, Ukraine, open to remote and outstaff roles.'
  },
  nav: {
    work: 'Work',
    skills: 'Skills',
    about: 'About',
    contact: 'Contact',
    switchTo: 'UA'
  },
  hero: {
    eyebrow: 'Junior .NET Developer',
    name: 'Anton Tereshchenko',
    role: 'Backend on C# / ASP.NET Core',
    location: 'Kharkiv, Ukraine — open to remote / outstaff',
    tagline:
      'Backend on C# and ASP.NET Core, with the frontend to match. Six projects shipped, one running in production, two teams led.',
    ctaEmail: 'Email me',
    ctaGithub: 'GitHub',
    ctaLinkedin: 'LinkedIn',
    ctaCv: 'Download CV',
    diagramCaption: 'A URL shortener, drawn as its own system'
  },
  work: {
    heading: 'Selected work',
    intro: 'Three projects, three different jobs: leading a team, shipping a production-grade API, and keeping something alive around the clock.',
    viewCase: 'View case study',
    liveDemo: 'Live demo',
    projects: [
      {
        title: 'Vexa',
        subtitle: 'Online Course Marketplace',
        period: 'Jul 2026 — Present',
        role: 'Team Lead, 4-developer team · diploma project',
        stack: ['TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'Docker', 'REST API'],
        description: [
          'Leading a four-developer team — architecture, REST API design, database schema, pull request review.',
          'Designed the PostgreSQL schema: 30 models, 22 enums, Prisma migrations, seed data, Docker Compose.',
          "Wrote the full technical specification and set up the team's git flow, task tracking, and two-week Scrum sprints."
        ],
        github: 'https://github.com/terekh373/Vexa',
        slug: 'vexa',
        metaDescription:
          "How I'm leading a four-developer team building Vexa, an online course marketplace, from the PostgreSQL schema to the REST API design.",
        task: "Vexa is an online course marketplace — a two-sided platform where instructors publish courses and students enroll. It's the diploma project for a four-person team I lead, built to the surface area of a real product: authentication, course and enrollment management, and a schema that has to hold up as the team keeps adding features.",
        responsibilities: [
          'Leading a four-developer team — breaking the spec into tasks, reviewing every pull request, keeping the sprint on track.',
          'Designing the REST API contract and writing the technical specification the rest of the team builds against.',
          'Modeling the PostgreSQL schema in Prisma: 30 models, 22 enums, migrations, and seed data.',
          "Setting up the team's git flow, task tracking, and two-week Scrum sprints."
        ],
        architecture:
          "NestJS's module system — controllers, providers, dependency injection — lets four developers work in the same codebase without constant merge conflicts, since each feature area owns its own module. Prisma makes the schema the single source of truth: 30 models and 22 enums are defined once, migrated automatically, and kept in sync across everyone's machine through seed data and Docker Compose.",
        screenshots: [
          { caption: 'Course catalog and enrollment flow' },
          { caption: 'PostgreSQL schema (ERD)' },
          { caption: 'Instructor dashboard' }
        ]
      },
      {
        title: 'URL Shortener',
        subtitle: 'Full-stack link shortener',
        period: 'May 2026',
        role: 'Solo',
        stack: ['ASP.NET Core 8', 'Angular 17', 'EF Core', 'SQL Server', 'JWT', 'xUnit', 'Moq'],
        description: [
          'Full-stack link shortener: REST API on ASP.NET Core 8, SPA on Angular 17 (RxJS HttpClient + JWT interceptor).',
          'Clean Architecture, SOLID, repository pattern, dependency injection across API / Core / Infrastructure / Tests layers.',
          'Role-based access for Admin and User via ASP.NET Core Identity and JWT.',
          'Duplicate detection, search and filtering — LINQ queries through EF Core against SQL Server.',
          '11 unit tests with xUnit and Moq, covering the repository and controller layers.'
        ],
        github: 'https://github.com/terekh373/urlshortener-aspnet-angular',
        slug: 'url-shortener',
        metaDescription:
          'A full-stack link shortener built solo on ASP.NET Core 8 and Angular 17 — Clean Architecture, JWT auth, and 11 xUnit tests.',
        task: "A link shortener is a small enough problem to solve in an afternoon — and specific enough to prove I can structure a .NET solution the way a team would expect. The goal wasn't just a working redirect; it was a REST API and SPA client built with the same layering, testing, and auth discipline a production codebase needs.",
        responsibilities: [
          'Designed and built the ASP.NET Core 8 REST API end to end, solo.',
          'Built the Angular 17 SPA client, including the RxJS HttpClient service layer and a JWT interceptor.',
          'Implemented role-based access for Admin and User through ASP.NET Core Identity and JWT.',
          'Added duplicate detection, search, and filtering with LINQ queries through EF Core.',
          'Wrote 11 unit tests with xUnit and Moq, covering the repository and controller layers.'
        ],
        architecture:
          'The solution is split into API, Core, Infrastructure, and Tests projects, so business logic never depends on ASP.NET Core or EF Core directly. Core defines the repository interfaces; Infrastructure implements them against SQL Server; API wires the pieces together through dependency injection. That separation is what makes the xUnit/Moq tests possible without touching a database — the repository gets mocked, not queried.',
        screenshots: [
          { caption: 'Admin dashboard with role-based access' },
          { caption: 'Link creation and click analytics' },
          { caption: 'xUnit test run' }
        ]
      },
      {
        title: 'TaskFlow',
        subtitle: 'Real-time Kanban board',
        period: 'March 2026',
        role: 'Solo · live 24/7',
        stack: ['React 18', 'TypeScript', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT'],
        description: [
          'Kanban task manager with real-time collaboration over WebSockets — changes sync instantly for every board member.',
          'Full authentication flow (JWT + bcrypt), drag and drop, priorities, deadlines, analytics dashboard built with Chart.js.',
          'Frontend on Vercel, backend on Render, database on MongoDB Atlas.'
        ],
        github: 'https://github.com/terekh373/React_CourseWork',
        demo: 'https://react-course-work-mu.vercel.app',
        slug: 'taskflow',
        metaDescription:
          'A real-time Kanban board, live since March 2026 — React, Redux, and Socket.IO keeping every board in sync.',
        task: "A Kanban board is easy; a Kanban board that stays in sync for every person looking at it is the actual problem. TaskFlow needed changes — a card moved, a deadline set — to appear instantly for every collaborator on the board, not on the next page refresh.",
        responsibilities: [
          'Built the full stack solo: a React 18 and Redux client on top of a Node.js and Express API.',
          'Implemented real-time sync over Socket.IO so board changes broadcast to every connected client.',
          'Built the full authentication flow with JWT and bcrypt, plus drag-and-drop, priorities, and deadlines.',
          'Built the analytics dashboard with Chart.js.',
          'Deployed and maintained the three-service split: frontend on Vercel, API on Render, database on MongoDB Atlas.'
        ],
        architecture:
          "WebSockets over Socket.IO push every board change to connected clients as it happens, instead of clients polling for updates — the difference between a board that feels shared and one that feels like a form you have to refresh. JWT covers auth for both the REST endpoints and the socket connection, and splitting the frontend, API, and database across three independent services keeps each one deployable without touching the others. It's the only project on this site that's been running continuously since launch, which surfaces problems a one-time demo doesn't — reconnect handling, stale state — in a way a course project usually doesn't have to deal with.",
        screenshots: [
          { caption: 'Board view with live collaboration' },
          { caption: 'Analytics dashboard' },
          { caption: 'Mobile board view' }
        ]
      }
    ]
  },
  caseStudy: {
    backLink: '← Back to work',
    taskHeading: 'The task',
    workHeading: 'What I worked on',
    architectureHeading: 'Architecture decision',
    stackHeading: 'Stack',
    screenshotsHeading: 'Screenshots',
    linksHeading: 'Links',
    githubLink: 'View source on GitHub',
    demoLink: 'Open live demo',
    imagePending: 'Image pending'
  },
  moreWork: {
    heading: 'More work',
    projects: [
      {
        title: 'CryptoTracker',
        meta: 'May 2026 · Solo',
        stack: 'C# 12 · .NET 8 · WPF · MVVM · LiveCharts · CoinGecko API',
        description:
          'Desktop crypto tracker with strict MVVM separation. Top 10 coins by market cap, 1D/7D/30D/1Y charts, converter for the top 20 currencies. CommunityToolkit.Mvvm source generators, async/await over a shared HttpClient, runtime Dark/Light theming.',
        github: 'https://github.com/terekh373/crypto-tracker-wpf'
      },
      {
        title: 'HabitGhost',
        meta: 'June 2025 · Team Lead, 4 people',
        stack: 'C# · WPF · .NET · SQL Server',
        description:
          '1st place in the academy cohort. Led a four-person team through iterative Agile sprints coordinated over Git. Designed the UI/UX and data models, implemented the habit manager logic and centralized exception handling.',
        github: 'https://github.com/terekh373/HabitGhost_Csharp_dotNET'
      },
      {
        title: 'Telegram Shop Bot',
        meta: 'Python · aiogram · Redis · PostgreSQL',
        stack: '~3,500 lines',
        description: 'Proof the backend habit holds outside .NET too.'
      }
    ]
  },
  skills: {
    heading: 'Skills',
    groups: [
      {
        label: 'Core',
        items: ['C#', '.NET 8', 'ASP.NET Core', 'REST / Web API', 'EF Core', 'LINQ', 'SQL Server', 'PostgreSQL', 'JWT']
      },
      {
        label: 'Frontend',
        items: ['Angular 17', 'RxJS', 'React 18', 'Redux', 'TypeScript', 'JavaScript (ES6)', 'HTML', 'CSS']
      },
      {
        label: 'Architecture & Testing',
        items: ['Clean Architecture', 'SOLID', 'MVVM', 'Repository Pattern', 'Dependency Injection', 'xUnit', 'Moq']
      },
      {
        label: 'Tools',
        items: ['Git / GitHub', 'Docker', 'Azure', 'CI/CD', 'Agile / Scrum']
      },
      {
        label: 'Also familiar',
        items: ['WPF', 'Node.js / Express', 'NestJS', 'Prisma', 'MongoDB', 'Socket.IO', 'C / C++', 'Python']
      }
    ]
  },
  about: {
    heading: 'About',
    paragraph:
      "I got into backend because I like systems that have to stay correct, not just work once. ASP.NET Core gives me that: a typed language, a mature ecosystem, and enough structure to build something a team can actually maintain. Right now I'm finishing my degree while leading a four-person team on Vexa, and looking for a first commercial role where I can keep shipping production code and learn from people who've done this longer than I have.",
    educationHeading: 'Education',
    education: [
      {
        institution: 'IT STEP Computer Academy',
        period: 'Sep 2021 — Sep 2026',
        detail: 'Professional software development program, final year'
      },
      {
        institution: 'Kharkiv University of Technology "STEP"',
        period: 'Sep 2025 — Jun 2029',
        detail: 'BSc, Information Systems and Technologies'
      },
      {
        institution: 'C++ Institute',
        period: '',
        detail: 'CPA — Programming Essentials in C++'
      }
    ],
    languagesHeading: 'Languages',
    languages: ['English — B2', 'German — A2–B1', 'Ukrainian — native']
  },
  contact: {
    heading: 'Contact',
    intro: "Open to remote and outstaff roles across Europe and the US. The fastest way to reach me is email.",
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    cvLabel: 'Résumé',
    cvEn: 'English CV',
    cvUa: 'Ukrainian CV'
  },
  footer: {
    text: 'Built with Astro and Tailwind CSS. No trackers, no cookies.'
  },
  notFound: {
    title: '404',
    body: "This route doesn't resolve to anything — like a foreign key with no matching row.",
    backHome: 'Back to the schema'
  }
};
