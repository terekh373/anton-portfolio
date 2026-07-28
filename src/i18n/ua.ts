import type { Dictionary } from './dictionary';

export const ua: Dictionary = {
  meta: {
    title: 'Антон Терещенко — Junior .NET Developer',
    description:
      'Бекенд на C# та ASP.NET Core, підкріплений фронтендом. Портфоліо Антона Терещенка, Junior .NET Developer з Харкова, Україна, відкритий до remote та outstaff.'
  },
  nav: {
    work: 'Проєкти',
    skills: 'Навички',
    about: 'Про мене',
    contact: 'Контакти',
    switchTo: 'EN'
  },
  hero: {
    eyebrow: 'Junior .NET Developer',
    name: 'Антон Терещенко',
    role: 'Бекенд на C# / ASP.NET Core',
    location: 'Харків, Україна — відкритий до remote / outstaff',
    tagline:
      'Бекенд на C# та ASP.NET Core, підкріплений фронтендом. Шість реалізованих проєктів, один у продакшені, дві команди під моїм керівництвом.',
    ctaEmail: 'Написати',
    ctaGithub: 'GitHub',
    ctaLinkedin: 'LinkedIn',
    ctaCv: 'Завантажити CV',
    diagramCaption: 'URL-скорочувач, намальований як власна система'
  },
  work: {
    heading: 'Обрані проєкти',
    intro:
      'Три проєкти — три різні задачі: керівництво командою, production-grade API та підтримка сервісу, що працює цілодобово.',
    viewCase: 'Детальніше про кейс',
    liveDemo: 'Живе демо',
    projects: [
      {
        title: 'Vexa',
        subtitle: 'Маркетплейс онлайн-курсів',
        period: 'Лип 2026 — дотепер',
        role: 'Team Lead, команда з 4 розробників · дипломний проєкт',
        stack: ['TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'Docker', 'REST API'],
        description: [
          'Веду команду з чотирьох розробників — архітектура, дизайн REST API, схема бази даних, ревʼю через pull request.',
          'Спроєктував схему PostgreSQL: 30 моделей, 22 enum, міграції Prisma, seed-дані, Docker Compose.',
          'Написав повне технічне завдання, налаштував git flow команди, трекінг задач та двотижневі Scrum-спринти.'
        ],
        github: 'https://github.com/terekh373/Vexa',
        slug: 'vexa'
      },
      {
        title: 'URL Shortener',
        subtitle: 'Full-stack скорочувач посилань',
        period: 'Тра 2026',
        role: 'Соло',
        stack: ['ASP.NET Core 8', 'Angular 17', 'EF Core', 'SQL Server', 'JWT', 'xUnit', 'Moq'],
        description: [
          'Full-stack скорочувач посилань: REST API на ASP.NET Core 8, SPA на Angular 17 (RxJS HttpClient + JWT-інтерцептор).',
          'Clean Architecture, SOLID, repository pattern, dependency injection на рівнях API / Core / Infrastructure / Tests.',
          'Рольовий доступ для Admin та User через ASP.NET Core Identity та JWT.',
          'Пошук дублікатів, пошук і фільтрація — LINQ-запити через EF Core до SQL Server.',
          '11 юніт-тестів на xUnit та Moq — рівні repository та controller.'
        ],
        github: 'https://github.com/terekh373/urlshortener-aspnet-angular',
        slug: 'url-shortener'
      },
      {
        title: 'TaskFlow',
        subtitle: 'Kanban-дошка в реальному часі',
        period: 'Бер 2026',
        role: 'Соло · працює цілодобово',
        stack: ['React 18', 'TypeScript', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT'],
        description: [
          'Kanban-менеджер задач із колаборацією в реальному часі через WebSocket — зміни синхронізуються миттєво в усіх учасників дошки.',
          'Повний цикл автентифікації (JWT + bcrypt), drag and drop, пріоритети, дедлайни, дашборд аналітики на Chart.js.',
          'Frontend на Vercel, backend на Render, база даних на MongoDB Atlas.'
        ],
        github: 'https://github.com/terekh373/React_CourseWork',
        demo: 'https://react-course-work-mu.vercel.app',
        slug: 'taskflow'
      }
    ]
  },
  moreWork: {
    heading: 'Інші проєкти',
    projects: [
      {
        title: 'CryptoTracker',
        meta: 'Тра 2026 · Соло',
        stack: 'C# 12 · .NET 8 · WPF · MVVM · LiveCharts · CoinGecko API',
        description:
          'Десктопний трекер криптовалют із суворим поділом MVVM. Топ-10 монет за капіталізацією, графіки 1D/7D/30D/1Y, конвертер топ-20 валют. CommunityToolkit.Mvvm source generators, async/await поверх спільного HttpClient, теми Dark/Light у рантаймі.',
        github: 'https://github.com/terekh373/crypto-tracker-wpf'
      },
      {
        title: 'HabitGhost',
        meta: 'Чер 2025 · Team Lead, команда з 4 осіб',
        stack: 'C# · WPF · .NET · SQL Server',
        description:
          '1-ше місце в потоці академії. Вів команду з чотирьох осіб через ітеративні Agile-спринти, координовані через Git. Спроєктував UI/UX та моделі даних, реалізував логіку менеджера звичок і централізовану обробку винятків.',
        github: 'https://github.com/terekh373/HabitGhost_Csharp_dotNET'
      },
      {
        title: 'Telegram Shop Bot',
        meta: 'Python · aiogram · Redis · PostgreSQL',
        stack: '~3500 рядків',
        description: 'Доказ, що бекенд-навички працюють і поза .NET.'
      }
    ]
  },
  skills: {
    heading: 'Навички',
    groups: [
      {
        label: 'Основне',
        items: ['C#', '.NET 8', 'ASP.NET Core', 'REST / Web API', 'EF Core', 'LINQ', 'SQL Server', 'PostgreSQL', 'JWT']
      },
      {
        label: 'Фронтенд',
        items: ['Angular 17', 'RxJS', 'React 18', 'Redux', 'TypeScript', 'JavaScript (ES6)', 'HTML', 'CSS']
      },
      {
        label: 'Архітектура та тестування',
        items: ['Clean Architecture', 'SOLID', 'MVVM', 'Repository Pattern', 'Dependency Injection', 'xUnit', 'Moq']
      },
      {
        label: 'Інструменти',
        items: ['Git / GitHub', 'Docker', 'Azure', 'CI/CD', 'Agile / Scrum']
      },
      {
        label: 'Також знайомий з',
        items: ['WPF', 'Node.js / Express', 'NestJS', 'Prisma', 'MongoDB', 'Socket.IO', 'C / C++', 'Python']
      }
    ]
  },
  about: {
    heading: 'Про мене',
    paragraph:
      'Я обрав бекенд, бо мені подобаються системи, які мають лишатися коректними, а не просто один раз запрацювати. ASP.NET Core дає для цього все потрібне: типізовану мову, зрілу екосистему і достатньо структури, щоб команда могла підтримувати код по-справжньому. Зараз я завершую навчання і одночасно веду команду з чотирьох розробників над Vexa, шукаю першу комерційну роль, де можна продовжувати писати production-код і вчитися в людей, які роблять це довше за мене.',
    educationHeading: 'Освіта',
    education: [
      {
        institution: 'IT STEP Computer Academy',
        period: 'Вер 2021 — Вер 2026',
        detail: 'Професійна програма з розробки програмного забезпечення, останній курс'
      },
      {
        institution: 'Харківський університет технологій "STEP"',
        period: 'Вер 2025 — Чер 2029',
        detail: 'Бакалавр, Інформаційні системи та технології'
      },
      {
        institution: 'C++ Institute',
        period: '',
        detail: 'CPA — Programming Essentials in C++'
      }
    ],
    languagesHeading: 'Мови',
    languages: ['Англійська — B2', 'Німецька — A2–B1', 'Українська — рідна']
  },
  contact: {
    heading: 'Контакти',
    intro: 'Відкритий до remote та outstaff у Європі та США. Найшвидший спосіб звʼязатися — email.',
    emailLabel: 'Email',
    phoneLabel: 'Телефон',
    cvLabel: 'Резюме',
    cvEn: 'CV англійською',
    cvUa: 'CV українською'
  },
  footer: {
    text: 'Зроблено на Astro та Tailwind CSS. Без трекерів, без cookies.'
  },
  notFound: {
    title: '404',
    body: 'Цей маршрут нічому не відповідає — як foreign key без відповідного рядка.',
    backHome: 'Повернутися до схеми'
  }
};
