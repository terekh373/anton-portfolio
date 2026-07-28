# Бриф для Claude Code — портфолио-сайт Антона Терещенко

> Вставь этот файл целиком в Claude Code первым сообщением.
> Перед этим: `mkdir anton-portfolio && cd anton-portfolio && claude`

---

## 0. Что делаем

Персональный сайт-портфолио Junior .NET разработчика. Цель сайта — за 30 секунд
убедить тимлида или рекрутера аутстаф/аутсорс-компании позвать меня на собеседование
на позицию Junior/Trainee C#/.NET Developer (remote / outstaff, Европа и US).

Аудитория: технические люди. Они смотрят на доказательства, не на прилагательные.

Единственная задача главной страницы: довести читателя до кнопки «связаться»
или до GitHub, убедив по дороге, что я уже писал работающий код и вёл команду.

Используй скилл **frontend-design**. Работай по его процессу: сначала план
(токены, типографика, layout, signature), самокритика плана, только потом код.

---

## 1. Стек — решено, не обсуждается

- **Astro 5** + TypeScript, статическая генерация (`output: 'static'`)
- **Tailwind CSS v4**
- React-островки (`client:visible`) — только там, где реально нужна интерактивность.
  По умолчанию — ноль JS на клиенте.
- Шрифты — локально через `@fontsource` или self-hosted woff2. Никаких запросов к Google Fonts.
- Деплой: **Vercel**, статик. `@astrojs/vercel` adapter не нужен для статики.
- Никакого CMS, никакой базы, никаких аналитик-трекеров.
- Не подключай shadcn/ui, готовые шаблоны и UI-киты. Всё пишется руками.

Почему Astro: у 90% джуниор-портфолио — Next.js + shadcn, и они выглядят одинаково.
Плюс здесь нужен статический сайт с идеальным Lighthouse, а не приложение.

---

## 2. Языки

Английский — основной. Украинский — переключатель.

- Роутинг: `/` (EN, дефолт) и `/ua/`
- i18n через нативный роутинг Astro + один словарь `src/i18n/en.ts` / `src/i18n/ua.ts`
- `hreflang`-теги, переключатель языка сохраняет текущую страницу
- Английский текст ниже — финальный, бери как есть.
  Украинский переведи сам: технический, сухой, без канцелярита и без кальки с русского.
  Термины (Clean Architecture, pull request, Team Lead) не переводить.

---

## 3. Структура

**Главная (одна длинная страница):**
1. Hero
2. Selected work — 3 главных проекта карточками
3. More work — 3 остальных, компактно
4. Skills
5. About + education
6. Contact

**Отдельные страницы кейсов:** `/work/[slug]` для трёх главных проектов
(vexa, url-shortener, taskflow). Формат кейса: что за задача → что я решал →
архитектурное решение → стек → ссылки. Скриншоты я добавлю сам, оставь
для них семантические слоты с подписями.

**404** — не забудь, сделай её осмысленной.

---

## 4. Контент (EN, финальный)

### Hero
- Имя: **Anton Tereshchenko**
- Роль: Junior .NET Developer
- Локация: Kharkiv, Ukraine — open to remote / outstaff
- Позиционирующая строка (можешь переформулировать под свою типографику, смысл сохрани):
  *Backend on C# and ASP.NET Core, with the frontend to match. Six projects shipped, one running in production, two teams led.*
- Первичное действие: Email. Вторичное: GitHub, LinkedIn, Download CV.

### Selected work

**1. Vexa — Online Course Marketplace**
- Jul 2026 — Present · Team Lead, 4-developer team · diploma project
- TypeScript · NestJS · PostgreSQL · Prisma · Docker · REST API
- github.com/terekh373/Vexa
- Что я делаю: веду команду из четырёх разработчиков — архитектура, дизайн REST API,
  схема базы, ревью через pull requests.
- Спроектировал схему PostgreSQL: 30 моделей, 22 enum, миграции Prisma, seed-данные, Docker Compose.
- Написал полное техническое задание, настроил git-флоу команды, трекинг задач и двухнедельные Scrum-спринты.

**2. URL Shortener**
- May 2026 · Solo
- ASP.NET Core 8 · Angular 17 · EF Core · SQL Server · JWT · xUnit · Moq
- github.com/terekh373/urlshortener-aspnet-angular
- Full-stack сокращатель ссылок: REST API на ASP.NET Core 8, SPA на Angular 17
  (RxJS HttpClient + JWT-интерцептор).
- Clean Architecture, SOLID, repository pattern, DI по слоям API / Core / Infrastructure / Tests.
- Ролевой доступ Admin/User через ASP.NET Core Identity и JWT.
- Поиск дублей, поиск и фильтрация — LINQ-запросы через EF Core к SQL Server.
- 11 юнит-тестов на xUnit + Moq: уровни репозитория и контроллеров.
- **Это главный проект для .NET-вакансии. Он должен читаться как самый серьёзный.**

**3. TaskFlow**
- March 2026 · Solo · **Live 24/7**
- React 18 · TypeScript · Redux · Node.js · Express · MongoDB · Socket.IO · JWT
- github.com/terekh373/React_CourseWork
- Демо: react-course-work-mu.vercel.app
- Kanban-менеджер задач с коллаборацией в реальном времени через WebSockets —
  изменения синхронизируются мгновенно у всех участников доски.
- Полный цикл аутентификации (JWT + bcrypt), drag & drop, приоритеты, дедлайны,
  дашборд аналитики на Chart.js.
- Frontend на Vercel, backend на Render, база на MongoDB Atlas.
- **Единственный проект с живой демкой — это самый убедительный аргумент на сайте.
  Ссылка на демо должна быть заметна и не выглядеть как обычная ссылка в тексте.**

### More work (компактно, без отдельных страниц)

**CryptoTracker** — May 2026 · Solo · C# 12 · .NET 8 · WPF · MVVM · LiveCharts · CoinGecko API
· github.com/terekh373/crypto-tracker-wpf
Десктопный трекер криптовалют, строгое разделение MVVM. Топ-10 монет по капитализации,
графики 1D/7D/30D/1Y, конвертер топ-20 валют. CommunityToolkit.Mvvm source generators,
async/await поверх общего HttpClient, темы Dark/Light в рантайме.

**HabitGhost** — June 2025 · Team Lead, 4 человека · C# · WPF · .NET · SQL Server
· github.com/terekh373/HabitGhost_Csharp_dotNET
1-е место в потоке академии. Вёл команду из четырёх человек через итеративные Agile-спринты
с координацией через Git. Спроектировал UI/UX и модели данных, реализовал логику
менеджера привычек и централизованную обработку исключений.

**Telegram Shop Bot** — Python · aiogram · Redis · PostgreSQL
Бот интернет-магазина, ~3500 строк. Здесь важен только сигнал «умею и вне .NET» — одна строка, не больше.

### Skills
- **Core:** C#, .NET 8, ASP.NET Core, REST / Web API, EF Core, LINQ, SQL Server, PostgreSQL, JWT
- **Frontend:** Angular 17, RxJS, React 18, Redux, TypeScript, JavaScript (ES6), HTML, CSS
- **Architecture & Testing:** Clean Architecture, SOLID, MVVM, Repository Pattern, Dependency Injection, xUnit, Moq
- **Tools:** Git / GitHub, Docker, Azure, CI/CD, Agile / Scrum
- **Also familiar:** WPF, Node.js / Express, NestJS, Prisma, MongoDB, Socket.IO, C / C++, Python

Не рисуй проценты владения, progress-бары и звёздочки — это мгновенно читается как студенческий сайт.

### About + Education
- IT STEP Computer Academy — Sep 2021 — Sep 2026, professional software development program, final year
- Kharkiv University of Technology "STEP" — Sep 2025 — Jun 2029, BSc, Information Systems and Technologies
- CPA: Programming Essentials in C++ (C++ Institute)
- Languages: English B2 · German A2–B1 · Ukrainian native

Короткий абзац от первого лица: почему .NET, что мне интересно в бэкенде,
что ищу первую коммерческую роль. Пиши прямо, без «passionate» и «I am a highly motivated».

### Contact
- terekh.anton.08@gmail.com
- +380 66 056 9914
- github.com/terekh373
- linkedin.com/in/anton-tereshchenko-o
- CV: `/cv/Tereshchenko_Anton_Resume_EN.pdf` и `/cv/Tereshchenko_Anton_Resume_UA.pdf`
  (я положу файлы в `public/cv/` сам — сделай ссылки заранее)

---

## 5. Дизайн — решай сам, но по правилам

Визуальное направление я намеренно не задаю: выбери его сам по процессу из скилла
frontend-design, отталкиваясь от предмета — инженер, бэкенд, архитектура, тесты, схемы данных.

Обязательно:
- Сначала покажи мне **2–3 варианта направления** коротко: палитра (4–6 хексов),
  пара шрифтов, layout-концепт в ASCII, и signature-элемент. Жду мой выбор, потом код.
- Смелость трать в одном месте. Signature-элемент — один, всё вокруг тихое.
- Типографика — характерная. Не Inter + серый фон.

Запрещено (это ровно «как у всех»):
- Тёмный фон + фиолетово-синий градиент + glassmorphism-карточки
- Тёмный фон + один кислотно-зелёный акцент
- Кремовый фон #F4F1EA + контрастный serif + терракотовый акцент
- Generic-broadsheet: hairline-линейки, нулевой border-radius, газетные колонки
- Эмодзи как иконки, анимированные градиентные blob'ы, «typewriter»-эффект в hero
- Нумерация 01/02/03 просто ради декора
- Секция «Testimonials» и любые выдуманные цифры/метрики

Движение: сдержанно. Одна оркестрованная сцена лучше десяти разрозненных эффектов.
`prefers-reduced-motion` уважать обязательно.

---

## 6. Quality floor

- Lighthouse 100/100/100/100 на проде. Проверь перед тем, как сказать «готово».
- Мобильный первым классом, не «тоже работает»
- Семантический HTML, видимый keyboard focus, контраст WCAG AA
- Meta + OpenGraph + Twitter card, sitemap, robots.txt, favicon
- OG-изображение сгенерируй статикой на этапе билда
- Ноль ошибок в `astro check` и `astro build`
- README с командами запуска и деплоя

---

## 7. Порядок работы

1. Прочитай бриф, задай мне уточняющие вопросы, если что-то не сходится. **Не начинай код.**
2. Инициализируй проект, настрой Astro + Tailwind + i18n, пустой каркас. Покажи, что билдится.
3. Дизайн-план: 2–3 направления. **Стоп, жди мой выбор.**
4. Собери главную по выбранному направлению. Покажи скриншот.
5. Страницы кейсов + украинская версия.
6. Полировка: Lighthouse, доступность, мета-теги, 404.
7. Инструкция по деплою на Vercel.

Коммить осмысленными шагами. После каждого этапа — короткий отчёт, что сделано.
