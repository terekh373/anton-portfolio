import type { Dictionary } from './dictionary';

export const ua: Dictionary = {
  meta: {
    title: 'Антон Терещенко — Junior .NET Developer',
    description:
      'Junior .NET розробник із Харкова: C#, ASP.NET Core, EF Core, SQL Server, фронтенд на Angular або React. Ремоут, аутстаф або офіс у Харкові.'
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
    role: 'C# / ASP.NET Core',
    location: 'Харків, Україна — ремоут, аутстаф або офіс',
    tagline:
      'Роблю REST API на ASP.NET Core і фронтенд до них. Вів команду з чотирьох розробників, яка зробила Vexa — маркетплейс курсів на vexa-edu.com; там 45 із 88 злитих pull request’ів — мої. Два мої курсові проєкти посіли перші місця в потоці.',
    ctaEmail: 'Написати',
    ctaGithub: 'GitHub',
    ctaLinkedin: 'LinkedIn',
    ctaCv: 'Завантажити CV',
    diagramCaption: 'URL-скорочувач, намальований як власна система'
  },
  work: {
    heading: 'Обрані проєкти',
    intro:
      'API на .NET, зроблений так, як цього чекає команда; продукт, який ми випустили з командою під моїм керівництвом; і застосунок у реальному часі, який я зробив сам.',
    viewCase: 'Детальніше про кейс',
    liveDemo: 'Живе демо',
    video: 'Відео-демо',
    projects: [
      {
        title: 'URL Shortener',
        subtitle: 'API на ASP.NET Core + SPA на Angular',
        period: 'Тра 2026',
        role: 'Самостійний проєкт',
        stack: ['C#', 'ASP.NET Core 8', 'EF Core', 'SQL Server', 'Identity', 'JWT', 'Angular 21', 'xUnit', 'Moq'],
        description: [
          'REST API на ASP.NET Core 8: 7 ендпоінтів для входу, посилань і редиректів, описані у Swagger.',
          'Identity + JWT, ролі Admin і User: користувач видаляє лише свої посилання, адмін — усі.',
          'Чотири проєкти (API, Core, Infrastructure, Tests) і 13 xUnit-тестів з Moq та in-memory провайдером EF Core.'
        ],
        github: 'https://github.com/terekh373/urlshortener-aspnet-angular',
        slug: 'url-shortener',
        metaDescription:
          'Скорочувач посилань, зроблений самостійно на ASP.NET Core 8, EF Core та Angular 21: ролі через Identity + JWT, шари, 13 xUnit-тестів.',
        task: 'Якщо потрібен лише редирект, скорочувач посилань пишеться за вечір. Я використав його, щоб відпрацювати те, що справді важливо для .NET-команди: рішення, розбите на шари, автентифікацію з ролями, міграції й тести, яким не потрібна база даних.',
        responsibilities: [
          'Зробив REST API на ASP.NET Core 8: 7 ендпоінтів для входу, посилань і редиректів, описані у Swagger.',
          'Зробив SPA на Angular 21 (сервіси на HttpClient і JWT-інтерцептор) та Razor Pages для входу.',
          'Налаштував ASP.NET Core Identity + JWT; ролі Admin і User створюються на старті. Користувач видаляє лише свої посилання, адмін — будь-які.',
          'Описав дані code-first в EF Core на SQL Server, з міграціями. Дубль URL відсікає LINQ-запит перед вставкою, а про всяк випадок — ще й унікальний індекс.',
          'Написав 13 xUnit-тестів: 6 для репозиторію на in-memory провайдері EF Core, 7 для контролера з Moq.'
        ],
        architecture:
          'Рішення складається з чотирьох проєктів. Core містить сутності та інтерфейс репозиторію, Infrastructure реалізує його на EF Core, API з’єднує їх через dependency injection. Контролер знає лише інтерфейс, тому в тестах замість нього підставляється мок із Moq, а репозиторій тестується на in-memory провайдері — SQL Server для тестів не потрібен. Дубль перевіряється двічі навмисно: LINQ-запит дає користувачу зрозумілу відповідь, а унікальний індекс ловить випадок, коли два запити одночасно проскочили перевірку.',
        screenshots: []
      },
      {
        title: 'Vexa',
        subtitle: 'Маркетплейс онлайн-курсів',
        period: 'Лип 2026 — дотепер',
        role: 'Team Lead, 4 розробники · дипломний проєкт',
        stack: ['Node.js', 'Express 5', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'React', 'Docker', 'GitHub Actions'],
        description: [
          'Дипломний проєкт IT STEP, оцінка 12 із 12: 5 релізів, 88 злитих pull request’ів, 80+ REST-ендпоінтів, 270+ автотестів.',
          'Написав 45 із 88 PR: схему PostgreSQL (33 таблиці), автентифікацію з ротацією refresh-токенів і покупку через LiqPay.',
          'Провів команду через 7 спринтів: ТЗ на 55 сторінок, 80+ задач, перевірив 40 із 43 PR колег.'
        ],
        github: 'https://github.com/terekh373/Vexa',
        demo: 'https://vexa-edu.com',
        video: 'https://youtu.be/1U90UNY5lus',
        slug: 'vexa',
        metaDescription:
          'Vexa — маркетплейс курсів, який зробила команда з чотирьох розробників під моїм керівництвом: 88 злитих pull request’ів, 80+ REST-ендпоінтів, 270+ тестів, оцінка 12 із 12.',
        task: 'Vexa — маркетплейс, де автори публікують курси, а студенти купують і проходять їх; окремі сценарії для гостя, студента, автора й адміністратора. Це наш дипломний проєкт в IT STEP: чотири розробники й окрема команда з чотирьох дизайнерів, сім двотижневих спринтів і ТЗ, за яким ми звітували. MVP закрив усі обов’язкові модулі ТЗ; журі поставило 12 із 12 і назвало його найсильнішим проєктом за останні пару років. Розробка триває.',
        responsibilities: [
          'Написав технічне завдання на 55 сторінок, розбив його на 80+ задач у GitHub і провів сім двотижневих спринтів.',
          'Перевірив 40 із 43 pull request’ів, які злили колеги; встановив правила роботи з Git.',
          'Спроєктував схему PostgreSQL: 33 таблиці, 21 enum, міграції Prisma і демо-дані.',
          'Зробив автентифікацію: JWT access-токени з ротацією refresh-токенів, хешування паролів argon2, ролі.',
          'Зробив покупку: кошик, замовлення, оплата LiqPay (sandbox) з ідемпотентним вебхуком, комісія платформи 15%.',
          'Налаштував монорепозиторій і CI на GitHub Actions: 5 обов’язкових перевірок на кожен PR (lint, lint вебу, typecheck, тести, build), захищені гілки, CODEOWNERS; випустив 5 релізів і відповідав за деплой.'
        ],
        architecture:
          'Коли четверо працюють в одному репозиторії, правила мають жити в інструментах, а не в чаті. Кожен pull request проходить п’ять обов’язкових перевірок, перш ніж його можна злити, а контракт API лежить в окремому пакеті, який імпортують і сервер, і вебклієнт, тож обидві сторони компілюються проти тих самих типів. Вебхук оплати ідемпотентний: LiqPay може надіслати той самий callback кілька разів, і повторний не має вдруге відкрити доступ чи записати платіж.',
        screenshots: [{ caption: 'Головна сторінка Vexa, vexa-edu.com', src: '/work/vexa-home.webp', width: 1440, height: 900 }]
      },
      {
        title: 'TaskFlow',
        subtitle: 'Kanban-дошка в реальному часі',
        period: 'Бер 2026',
        role: 'Самостійно · 1-ше місце з 5 курсових',
        stack: ['React 18', 'TypeScript', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT'],
        description: [
          'Kanban-дошка, де зміни миттєво бачать усі учасники дошки — через Socket.IO.',
          'Автентифікація JWT + bcrypt, drag and drop, пріоритети, дедлайни, аналітика на Chart.js.',
          '1-ше місце з 5 курсових проєктів: робив сам проти команд із двох і більше людей. Працює на Vercel, Render і MongoDB Atlas.'
        ],
        github: 'https://github.com/terekh373/React_CourseWork',
        demo: 'https://react-course-work-mu.vercel.app',
        slug: 'taskflow',
        metaDescription:
          'Kanban-дошка в реальному часі, зроблена самостійно: React, Redux і Socket.IO. 1-ше місце з 5 курсових проєктів, працює з березня 2026.',
        task: 'Зробити Kanban-дошку просто. Складно — тримати її синхронною для всіх, хто на неї дивиться: перенесена картка чи новий дедлайн мають з’являтися в кожного одразу, а не після оновлення сторінки. Решта курсу розбилася на команди з двох і більше людей; я робив сам, і проєкт посів перше місце з п’яти.',
        responsibilities: [
          'Зробив увесь стек сам: клієнт на React 18 і Redux поверх API на Node.js та Express.',
          'Реалізував синхронізацію в реальному часі через Socket.IO: зміни на дошці отримують усі підключені клієнти.',
          'Зробив автентифікацію на JWT і bcrypt, а також drag and drop, пріоритети й дедлайни.',
          'Зробив дашборд аналітики на Chart.js.',
          'Розгорнув як три сервіси: фронтенд на Vercel, API на Render, база даних на MongoDB Atlas.'
        ],
        architecture:
          'Сервер сам надсилає кожну зміну дошки підключеним клієнтам через Socket.IO, а не чекає, поки вони опитають його, — у цьому різниця між дошкою, яка відчувається спільною, і формою, яку постійно оновлюєш. Той самий JWT автентифікує і REST-ендпоінти, і socket-з’єднання. Фронтенд, API і база працюють як три окремі сервіси, тож кожен можна передеплоїти, не чіпаючи інших, а робота без перерви з березня вже показала проблеми, яких одноразове демо не бачить: перепідключення й застарілий стан.',
        screenshots: [{ caption: 'Вигляд дошки', src: '/work/taskflow-board.webp', width: 1440, height: 437 }]
      }
    ]
  },
  caseStudy: {
    backLink: '← Усі проєкти',
    taskHeading: 'Задача',
    workHeading: 'Що я зробив',
    architectureHeading: 'Архітектурне рішення',
    stackHeading: 'Стек',
    screenshotsHeading: 'Скриншоти',
    linksHeading: 'Посилання',
    githubLink: 'Переглянути код на GitHub',
    demoLink: 'Відкрити живе демо',
    videoLink: 'Подивитися відео-демо'
  },
  moreWork: {
    heading: 'Інші проєкти',
    projects: [
      {
        title: 'CryptoTracker',
        meta: 'Тра 2026 · Самостійно',
        stack: 'C# 12 · .NET 8 · WPF · MVVM · LiveCharts · CoinGecko API',
        description:
          'Десктоп на WPF із суворим MVVM на source generators CommunityToolkit.Mvvm: топ-10 монет, графіки від 1D до 1Y, пошук, конвертер топ-20 валют. CoinGecko REST API через async/await зі спільним HttpClient; теми Dark і Light перемикаються в рантаймі.',
        github: 'https://github.com/terekh373/crypto-tracker-wpf'
      },
      {
        title: 'HabitGhost',
        meta: 'Чер 2025 · Team Lead, команда з 4 осіб',
        stack: 'C# · WinForms · TCP-клієнт · SQL Server',
        description:
          'Трекер звичок, 1-ше місце з 4 команд потоку академії. Керував командою і зробив клієнт на WinForms, який працює по TCP із сервером колеги: UI (п’ять вкладок, іконка в треї, темна й світла теми), моделі даних, логіку звичок і обробку винятків.',
        github: 'https://github.com/terekh373/HabitGhost_Csharp_dotNET'
      },
      {
        title: 'Telegram Shop Bot',
        meta: 'Python · aiogram',
        stack: 'Redis · PostgreSQL',
        description: 'Бот-магазин для Telegram: ті самі бекенд-звички, тільки поза .NET.'
      }
    ]
  },
  skills: {
    heading: 'Навички',
    groups: [
      {
        label: 'Основне',
        items: ['C#', '.NET 8', 'ASP.NET Core Web API', 'EF Core', 'LINQ', 'MS SQL Server', 'REST API', 'Identity', 'JWT']
      },
      {
        label: 'Фронтенд',
        items: ['Angular', 'RxJS', 'React', 'Redux', 'TypeScript', 'JavaScript (ES6)', 'HTML', 'CSS', 'Bootstrap']
      },
      {
        label: 'Архітектура й тестування',
        items: ['ООП', 'SOLID', 'Clean Architecture', 'MVVM', 'Repository Pattern', 'Dependency Injection', 'xUnit', 'Moq']
      },
      {
        label: 'Інструменти й практики',
        items: ['Git / GitHub', 'GitHub Actions (CI)', 'Docker', 'Swagger / OpenAPI', 'Code review', 'Agile / Scrum']
      },
      {
        label: 'Також знайомий',
        items: ['WPF', 'WinForms', 'Dapper', 'PostgreSQL', 'Node.js / Express', 'Prisma', 'Redis', 'MongoDB', 'C / C++', 'Python']
      }
    ]
  },
  about: {
    heading: 'Про мене',
    paragraph:
      'Я пішов у бекенд, бо люблю системи, які мають працювати правильно постійно, а не один раз. C# і ASP.NET Core дають типізацію та структуру, щоб будувати їх так, аби команда могла їх підтримувати. У жовтні 2026 я закінчив чотирирічну програму з розробки ПЗ в IT STEP Computer Academy. На дипломному проєкті Vexa я побачив, з чого складається робота тімліда щодня: писати ТЗ, перевіряти кожен pull request, випускати релізи. Тепер шукаю першу комерційну роль у .NET — у команді, де можна писати production-код і вчитися в людей, які роблять це довше.',
    educationHeading: 'Освіта',
    education: [
      {
        institution: 'Комп’ютерна академія IT STEP',
        period: 'Вер 2022 — Жов 2026',
        detail: 'Диплом, програма «Розробка програмного забезпечення» (4 роки). Середній бал 11,8 із 12.'
      },
      {
        institution: 'Харківський університет технологій «STEP»',
        period: 'Вер 2025 — Чер 2029',
        detail: 'Студент бакалаврату, спеціальність F6 — Інформаційні системи та технології'
      },
      {
        institution: 'C++ Institute · Cisco Networking Academy',
        period: '',
        detail: 'CPA: Programming Essentials in C++'
      }
    ],
    languagesHeading: 'Мови',
    languages: ['Англійська — B2', 'Німецька — A2–B1', 'Українська — рідна']
  },
  contact: {
    heading: 'Контакти',
    intro: 'Готовий до full-time: ремоут, аутстаф або офіс у Харкові. Найшвидше — написати на email.',
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
