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
          'Веду команду з чотирьох розробників — архітектура, дизайн REST API, схема бази даних, рев’ю через pull request.',
          'Спроєктував схему PostgreSQL: 30 моделей, 22 enum, міграції Prisma, seed-дані, Docker Compose.',
          'Написав повне технічне завдання, налаштував git flow команди, трекінг задач та двотижневі Scrum-спринти.'
        ],
        github: 'https://github.com/terekh373/Vexa',
        slug: 'vexa',
        metaDescription:
          'Як я веду команду з чотирьох розробників над Vexa, маркетплейсом онлайн-курсів — від схеми PostgreSQL до дизайну REST API.',
        task: 'Vexa — маркетплейс онлайн-курсів, платформа для викладачів і студентів: викладачі публікують курси, студенти записуються. Це дипломний проєкт команди з чотирьох осіб під моїм керівництвом, який ми будуємо на рівні реального продукту: автентифікація, керування курсами та записами, схема, що витримує постійне додавання нових функцій.',
        responsibilities: [
          'Веду команду з чотирьох розробників — розбиваю технічне завдання на задачі, рев’ю кожного pull request, слідкую за спринтом.',
          'Проєктую контракт REST API та пишу технічне завдання, за яким працює решта команди.',
          'Моделюю схему PostgreSQL у Prisma: 30 моделей, 22 enum, міграції, seed-дані.',
          'Налаштовую git flow команди, трекінг задач та двотижневі Scrum-спринти.'
        ],
        architecture:
          'Модульна система NestJS — контролери, провайдери, dependency injection — дозволяє чотирьом розробникам працювати в одній кодовій базі без постійних конфліктів при мерджі, бо кожна функціональна область має власний модуль. Prisma робить схему єдиним джерелом істини: 30 моделей і 22 enum описані один раз, мігруються автоматично й лишаються синхронізованими на машинах усієї команди через seed-дані та Docker Compose.',
        screenshots: [
          { caption: 'Каталог курсів і процес запису' },
          { caption: 'Схема PostgreSQL (ERD)' },
          { caption: 'Дашборд викладача' }
        ]
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
        slug: 'url-shortener',
        metaDescription:
          'Full-stack скорочувач посилань, зроблений соло на ASP.NET Core 8 та Angular 17 — Clean Architecture, JWT-автентифікація та 11 тестів xUnit.',
        task: 'Скорочувач посилань — задача, яку можна вирішити за день, і водночас достатньо конкретна, щоб показати, що я вмію структурувати .NET-рішення так, як цього очікує команда. Мета була не просто в робочому редиректі, а в REST API та SPA-клієнті, побудованих з тією самою дисципліною шарів, тестування й автентифікації, яка потрібна production-коду.',
        responsibilities: [
          'Спроєктував і побудував REST API на ASP.NET Core 8 повністю самостійно.',
          'Побудував SPA-клієнт на Angular 17, включно з сервісним шаром RxJS HttpClient та JWT-інтерцептором.',
          'Реалізував рольовий доступ для Admin та User через ASP.NET Core Identity та JWT.',
          'Додав пошук дублікатів, пошук і фільтрацію через LINQ-запити до EF Core.',
          'Написав 11 юніт-тестів на xUnit та Moq — рівні repository та controller.'
        ],
        architecture:
          'Рішення розділене на проєкти API, Core, Infrastructure та Tests, тож бізнес-логіка ніколи не залежить напряму від ASP.NET Core чи EF Core. Core визначає інтерфейси repository; Infrastructure реалізує їх для SQL Server; API зв’язує все через dependency injection. Саме цей поділ робить можливими тести на xUnit/Moq без бази даних — repository мокається, а не опитується.',
        screenshots: [
          { caption: 'Адмін-дашборд із рольовим доступом' },
          { caption: 'Створення посилань і аналітика переходів' },
          { caption: 'Запуск тестів xUnit' }
        ]
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
        slug: 'taskflow',
        metaDescription:
          'Kanban-дошка в реальному часі, що працює з березня 2026 — React, Redux і Socket.IO тримають усі дошки синхронізованими.',
        task: 'Kanban-дошку зробити просто; складно зробити так, щоб вона лишалася синхронізованою для кожного, хто на неї дивиться. У TaskFlow зміни — перенесена картка, встановлений дедлайн — мали з’являтися миттєво в усіх учасників дошки, а не після оновлення сторінки.',
        responsibilities: [
          'Побудував увесь стек самостійно: клієнт на React 18 і Redux поверх API на Node.js та Express.',
          'Реалізував синхронізацію в реальному часі через Socket.IO — зміни на дошці розсилаються всім підключеним клієнтам.',
          'Реалізував повний цикл автентифікації на JWT і bcrypt, а також drag and drop, пріоритети й дедлайни.',
          'Побудував дашборд аналітики на Chart.js.',
          'Розгорнув і підтримую поділ на три сервіси: frontend на Vercel, API на Render, база даних на MongoDB Atlas.'
        ],
        architecture:
          'WebSocket через Socket.IO надсилає кожну зміну дошки підключеним клієнтам одразу, а не змушує їх опитувати сервер — це різниця між дошкою, яка відчувається спільною, і дошкою, яку постійно доводиться оновлювати вручну. JWT покриває автентифікацію і для REST-ендпоінтів, і для socket-з’єднання, а поділ frontend, API та бази даних на три незалежні сервіси дозволяє розгортати кожен окремо. Це єдиний проєкт на сайті, що працює безперервно з моменту запуску, а це виявляє проблеми, які не виникають в одноразовому демо — обробку перепідключень, застарілий стан.',
        screenshots: [
          { caption: 'Вигляд дошки з колаборацією в реальному часі' },
          { caption: 'Дашборд аналітики' },
          { caption: 'Мобільний вигляд дошки' }
        ]
      }
    ]
  },
  caseStudy: {
    backLink: '← Усі проєкти',
    taskHeading: 'Задача',
    workHeading: 'Що я робив',
    architectureHeading: 'Архітектурне рішення',
    stackHeading: 'Стек',
    screenshotsHeading: 'Скриншоти',
    linksHeading: 'Посилання',
    githubLink: 'Переглянути код на GitHub',
    demoLink: 'Відкрити живе демо',
    imagePending: 'Зображення буде додано'
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
    intro: 'Відкритий до remote та outstaff у Європі та США. Найшвидший спосіб зв’язатися — email.',
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
