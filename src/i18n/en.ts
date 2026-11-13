import type { Dictionary } from './dictionary';

export const en: Dictionary = {
  meta: {
    title: 'Anton Tereshchenko — Junior .NET Developer',
    description:
      'Junior .NET Developer in Kharkiv, Ukraine: C#, ASP.NET Core, EF Core, SQL Server, with Angular or React on the front end. Open to remote, outstaff, or a Kharkiv office.'
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
    role: 'C# / ASP.NET Core',
    location: 'Kharkiv, Ukraine — remote, outstaff, or office',
    tagline:
      'I build REST APIs on ASP.NET Core and the front end to go with them. I led the four-developer team behind Vexa, a course marketplace at vexa-edu.com, and wrote 45 of its 88 merged pull requests. Two of my course projects took first place in their cohorts.',
    ctaEmail: 'Email me',
    ctaGithub: 'GitHub',
    ctaLinkedin: 'LinkedIn',
    ctaCv: 'Download CV',
    diagramCaption: 'A URL shortener, drawn as its own system'
  },
  work: {
    heading: 'Selected work',
    intro:
      'A .NET API built the way a team would expect it, a product shipped with a team I led, and a real-time app I built alone.',
    viewCase: 'View case study',
    liveDemo: 'Live demo',
    video: 'Demo video',
    projects: [
      {
        title: 'URL Shortener',
        subtitle: 'ASP.NET Core API + Angular SPA',
        period: 'May 2026',
        role: 'Solo',
        stack: ['C#', 'ASP.NET Core 8', 'EF Core', 'SQL Server', 'Identity', 'JWT', 'Angular 21', 'xUnit', 'Moq'],
        description: [
          'REST API on ASP.NET Core 8: 7 endpoints for sign-in, links and redirects, documented in Swagger.',
          'Identity + JWT with Admin and User roles: users delete only their own links, admins any.',
          'Four projects (API, Core, Infrastructure, Tests) and 13 xUnit tests with Moq and the EF Core in-memory provider.'
        ],
        github: 'https://github.com/terekh373/urlshortener-aspnet-angular',
        slug: 'url-shortener',
        metaDescription:
          'A link shortener built solo on ASP.NET Core 8, EF Core and Angular 21: Identity + JWT roles, a layered solution, 13 xUnit tests.',
        task: "A link shortener fits in an afternoon if all you want is a redirect. I used it to practise the parts a .NET team actually cares about: a layered solution, authentication with roles, migrations, and tests that run without a database.",
        responsibilities: [
          'Built the ASP.NET Core 8 REST API: 7 endpoints for sign-in, links and redirects, documented in Swagger.',
          'Built the Angular 21 SPA (HttpClient services and a JWT interceptor) plus Razor Pages for sign-in.',
          'Set up ASP.NET Core Identity + JWT; Admin and User roles are seeded at startup. Users can delete only their own links, admins any.',
          'Modelled the data code-first with EF Core on SQL Server, with migrations. A duplicate URL is caught by a LINQ lookup before insert and, as a backstop, by a unique index.',
          'Wrote 13 xUnit tests: 6 for the repository against the EF Core in-memory provider, 7 for the controller with Moq.'
        ],
        architecture:
          'The solution has four projects. Core holds the entities and the repository interface, Infrastructure implements that interface with EF Core, and API wires the two together through dependency injection. Because the controller only knows the interface, its tests swap in a Moq mock, and the repository tests run on the in-memory provider, so the suite needs no SQL Server. The duplicate check is done twice on purpose: the LINQ lookup gives the user a clean answer, and the unique index covers the case where two requests slip past the lookup at the same moment.',
        screenshots: []
      },
      {
        title: 'Vexa',
        subtitle: 'Online course marketplace',
        period: 'Jul 2026 — Present',
        role: 'Team Lead, 4 developers · capstone',
        stack: ['Node.js', 'Express 5', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'React', 'Docker', 'GitHub Actions'],
        description: [
          'Capstone at IT STEP, graded 12 out of 12: 5 releases, 88 merged pull requests, 80+ REST endpoints, 270+ automated tests.',
          'Wrote 45 of the 88 PRs: the PostgreSQL schema (33 tables), auth with refresh-token rotation, and the LiqPay purchase flow.',
          'Led the team through 7 sprints: wrote the 55-page spec, broke it into 80+ issues, reviewed 40 of 43 teammates’ PRs.'
        ],
        github: 'https://github.com/terekh373/Vexa',
        demo: 'https://vexa-edu.com',
        video: 'https://youtu.be/1U90UNY5lus',
        slug: 'vexa',
        metaDescription:
          'Vexa, a course marketplace built by a four-developer team I led: 88 merged pull requests, 80+ REST endpoints, 270+ tests, graded 12 out of 12.',
        task: 'Vexa is a marketplace where authors publish courses and students buy and take them, with separate flows for guests, students, authors and admins. It was our capstone at IT STEP Computer Academy: four developers and a separate team of four designers, seven two-week sprints, and a written spec to deliver against. The MVP covered every required module of the spec; the jury graded it 12 out of 12 and called it the strongest project of the last couple of years. Work on it continues.',
        responsibilities: [
          'Wrote the 55-page technical specification, broke it into 80+ GitHub issues and ran seven two-week sprints.',
          'Reviewed 40 of the 43 pull requests my teammates merged, and set the team’s Git workflow.',
          'Designed the PostgreSQL schema: 33 tables, 21 enums, Prisma migrations and demo data.',
          'Built authentication: JWT access tokens with rotating refresh tokens, argon2 password hashing, roles.',
          'Built the purchase flow: cart, orders, LiqPay checkout (sandbox) with an idempotent webhook, 15% platform commission.',
          'Set up the monorepo and GitHub Actions CI with 5 required checks on every PR (lint, web lint, typecheck, tests, build), protected branches and CODEOWNERS; cut the 5 tagged releases and handled deployment.'
        ],
        architecture:
          'With four people in one repository, the rules had to live in the tooling rather than in chat. Every pull request runs five required checks before it can merge, and the API contract sits in a shared package that both the server and the web client import, so the two sides compile against the same types. The payment webhook is idempotent: LiqPay can deliver the same callback more than once, and a repeated callback must not grant access or record a payment twice.',
        screenshots: [{ caption: 'Vexa home page, vexa-edu.com', src: '/work/vexa-home.webp', width: 1440, height: 900 }]
      },
      {
        title: 'TaskFlow',
        subtitle: 'Real-time Kanban board',
        period: 'Mar 2026',
        role: 'Solo · 1st of 5 course projects',
        stack: ['React 18', 'TypeScript', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT'],
        description: [
          'Kanban board where changes reach every member of the board instantly over Socket.IO.',
          'JWT + bcrypt auth, drag and drop, priorities, deadlines, analytics dashboard on Chart.js.',
          'Took 1st place of 5 course projects, built solo against teams of two or more. Live on Vercel, Render and MongoDB Atlas.'
        ],
        github: 'https://github.com/terekh373/React_CourseWork',
        demo: 'https://react-course-work-mu.vercel.app',
        slug: 'taskflow',
        metaDescription:
          'A real-time Kanban board built solo: React, Redux and Socket.IO. 1st place of 5 course projects, live since March 2026.',
        task: 'A Kanban board is easy. Keeping it in sync for everyone looking at it is the real work: a moved card or a new deadline has to show up for every collaborator right away, not after a page refresh. Everyone else on the course split into teams of two or more; I built it alone, and it took first place of five.',
        responsibilities: [
          'Built the full stack alone: a React 18 and Redux client on a Node.js and Express API.',
          'Implemented real-time sync over Socket.IO, so board changes go out to every connected client.',
          'Built authentication with JWT and bcrypt, plus drag and drop, priorities and deadlines.',
          'Built the analytics dashboard with Chart.js.',
          'Deployed it as three services: frontend on Vercel, API on Render, database on MongoDB Atlas.'
        ],
        architecture:
          'The server pushes every board change to connected clients over Socket.IO instead of having them poll, which is the difference between a board that feels shared and a form you keep refreshing. The same JWT authenticates both the REST endpoints and the socket connection. Frontend, API and database run as three separate services, so each can be redeployed without touching the others, and keeping it online since March has surfaced the problems a one-off demo never meets, such as reconnects and stale state.',
        screenshots: [{ caption: 'Board view', src: '/work/taskflow-board.webp', width: 1440, height: 437 }]
      }
    ]
  },
  caseStudy: {
    backLink: '← Back to work',
    taskHeading: 'The task',
    workHeading: 'What I did',
    architectureHeading: 'Architecture decision',
    stackHeading: 'Stack',
    screenshotsHeading: 'Screenshots',
    linksHeading: 'Links',
    githubLink: 'View source on GitHub',
    demoLink: 'Open live demo',
    videoLink: 'Watch the demo video'
  },
  moreWork: {
    heading: 'More work',
    projects: [
      {
        title: 'CryptoTracker',
        meta: 'May 2026 · Solo',
        stack: 'C# 12 · .NET 8 · WPF · MVVM · LiveCharts · CoinGecko API',
        description:
          'WPF desktop app with strict MVVM on CommunityToolkit.Mvvm source generators: top 10 coins, 1D to 1Y charts, search, a converter for the top 20 currencies. Calls the CoinGecko REST API with async/await over a shared HttpClient; Dark and Light themes switch at runtime.',
        github: 'https://github.com/terekh373/crypto-tracker-wpf'
      },
      {
        title: 'HabitGhost',
        meta: 'Jun 2025 · Team Lead, 4 people',
        stack: 'C# · WinForms · TCP client · SQL Server',
        description:
          'Habit tracker that took 1st place of 4 teams in the academy cohort. I led the team and built the WinForms client, which talks over TCP to a teammate’s server: the UI (five tabs, tray icon, dark and light themes), data models, habit logic and exception handling.',
        github: 'https://github.com/terekh373/HabitGhost_Csharp_dotNET'
      },
      {
        title: 'Telegram Shop Bot',
        meta: 'Python · aiogram',
        stack: 'Redis · PostgreSQL',
        description: 'A shop bot for Telegram: the same backend habits, outside .NET.'
      }
    ]
  },
  skills: {
    heading: 'Skills',
    groups: [
      {
        label: 'Core',
        items: ['C#', '.NET 8', 'ASP.NET Core Web API', 'EF Core', 'LINQ', 'MS SQL Server', 'REST API', 'Identity', 'JWT']
      },
      {
        label: 'Frontend',
        items: ['Angular', 'RxJS', 'React', 'Redux', 'TypeScript', 'JavaScript (ES6)', 'HTML', 'CSS', 'Bootstrap']
      },
      {
        label: 'Architecture & Testing',
        items: ['OOP', 'SOLID', 'Clean Architecture', 'MVVM', 'Repository Pattern', 'Dependency Injection', 'xUnit', 'Moq']
      },
      {
        label: 'Tools & Practices',
        items: ['Git / GitHub', 'GitHub Actions (CI)', 'Docker', 'Swagger / OpenAPI', 'Code review', 'Agile / Scrum']
      },
      {
        label: 'Also familiar',
        items: ['WPF', 'WinForms', 'Dapper', 'PostgreSQL', 'Node.js / Express', 'Prisma', 'Redis', 'MongoDB', 'C / C++', 'Python']
      }
    ]
  },
  about: {
    heading: 'About',
    paragraph:
      "I went into backend because I like systems that have to stay correct, not just work once, and C# with ASP.NET Core gives me the typing and structure to build them so a team can maintain them. In October 2026 I finished the four-year software development program at IT STEP Computer Academy. Its capstone, Vexa, taught me what leading developers involves day to day: writing the spec, reviewing every pull request, cutting releases. Now I'm looking for a first commercial .NET role on a team where I can ship production code and learn from people who have done it longer.",
    educationHeading: 'Education',
    education: [
      {
        institution: 'IT STEP Computer Academy',
        period: 'Sep 2022 — Oct 2026',
        detail: 'Diploma in Software Development, 4-year program. Average grade 11.8 out of 12.'
      },
      {
        institution: 'Kharkiv University of Technology "STEP"',
        period: 'Sep 2025 — Jun 2029',
        detail: 'BSc student, Information Systems and Technologies (Major F6)'
      },
      {
        institution: 'C++ Institute · Cisco Networking Academy',
        period: '',
        detail: 'CPA: Programming Essentials in C++'
      }
    ],
    languagesHeading: 'Languages',
    languages: ['English — B2', 'German — A2–B1', 'Ukrainian — native']
  },
  contact: {
    heading: 'Contact',
    intro: 'Available full-time: remote, outstaff, or an office in Kharkiv. Email is the fastest way to reach me.',
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
