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
        slug: 'vexa'
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
        slug: 'url-shortener'
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
        slug: 'taskflow'
      }
    ]
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
