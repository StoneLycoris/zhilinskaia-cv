export default {
  hero: {
    title: 'Frontend Developer',
    subtitle: 'Vue 3 • TypeScript • Архитектура',

    description: {
      general: `Frontend developer (Vue.js / TypeScript) с опытом разработки масштабируемых и высоконагруженных web-приложений.
Специализируюсь на архитектуре frontend-решений, производительности, UI-системах и качестве пользовательского опыта.`,
      experience: `Имею опыт полного цикла разработки: архитектура, выбор стека, оптимизация производительности и безопасности, поддержка production.
Участвую в архитектурных решениях и code review.`,
    }
  },

  experience: {
    title: 'Опыт',

    stack: 'Стек',
    libraries: 'Библиотеки',
    tests: 'Тесты',

    items: [
      {
        id: 'it-expertise',

        company: 'IT-Экспертиза',
        role: 'Frontend Developer',
        location: 'Москва, Россия',
        period: 'Ноябрь 2024 — Ноябрь 2025',

        summary:
          'Спроектировала frontend-архитектуру и ключевые UI-модули для платформы безопасности, улучшив производительность и стабильность продукта.',

        projects: [
          {
            name: 'Платформа информационной безопасности (NDA)',

            stack: ['Vue 3', 'TypeScript', 'Pinia'],
            libraries: ['Custom UI kit (Vuetify-based)'],
            testing: ['Vitest'],

            achievements: [
              'Спроектировала и внедрила FSD-архитектуру, повысив масштабируемость фронтенда.',
              'Разработала кастомный UI kit на базе Vuetify как дизайн-систему.',
              'Реализовала сложные таблицы и дашборды (14k+ строк).',
              'Оптимизировала производительность: -23% bundle, -18% LCP.',
              'Увеличила покрытие unit-тестами с ~19% до ~61%.',
              'Снизила уязвимости на 41%.',
            ],
          },
        ],
      },

      {
        id: 'flycode',

        company: 'FlyCode',
        role: 'Frontend Developer',
        location: 'Тамбов, Россия',
        period: 'Январь 2022 — Июль 2024',

        summary:
          'Разработала и масштабировала SPA-приложения, ускорив time-to-market и улучшив UX метрики.',

        projects: [
          {
            name: 'Календарь красоты и здоровья',

            stack: ['Vue 3', 'Nuxt', 'TypeScript', 'Pinia'],
            libraries: ['Bootstrap 5'],
            testing: ['Jest'],

            achievements: [
              'Разработала SPA с нуля (Vue 3, TypeScript, Pinia).',
              'Снизила пользовательские ошибки планирования на ~24%.',
              'Внедрила i18n (5 языков) и централизованную обработку HTTP-ошибок.',
              'Реализовала passwordless-аутентификацию.',
            ],
          },
          {
            name: 'Логистическая платформа',

            stack: ['Vue 2', 'JavaScript', 'Vuex'],

            achievements: [
              'Расширила модуль транспорта (нестандартные габариты), увеличив покрытие бизнес-кейсов на ~26%.',
              'Провела рефакторинг легаси-кода.',
            ],
          },
        ],
      },

      {
        id: 'demis',

        company: 'Demis Group',
        role: 'Frontend Developer',
        location: 'Тамбов, Россия',
        period: 'Декабрь 2021 — Июнь 2022',

        summary:
          'Разработала адаптивные интерфейсы и оптимизировала web-проекты, улучшив производительность и доступность.',

        projects: [
          {
            name: 'Веб-проекты (landing pages, e-commerce, клиники)',

            stack: ['HTML', 'CSS', 'JavaScript'],

            achievements: [
              'Увеличила accessibility score с 34 до 62 (WCAG AA).',
              'Оптимизировала производительность, кроссбраузерную совместимость и SEO.',
              'Настроила аналитику (Яндекс.Метрика, Google Analytics).',
            ],
          },
        ],
      },
    ],
  },

  tech: {
    title: 'Навыки',
    vue: 'Composition API, реактивность, производительность UI',
    ts: 'Строгая типизация, дженерики, безопасность кода',
    pinia: 'Менеджмент состояний, модульные хранилища',
    vite: 'Быстрая сборка, HMR, dev-performance',
    vueRouter: 'SPA-роутинг, guards, lazy loading',
    nuxt3: 'SSR/SSG, серверные API, fullstack',
    vitest: 'Юнит-тесты, быстрый runner',
    vue2: 'Options API, классическая архитектура',
    vuex: 'Глобальный стейт, actions/mutations',
    nuxt4: 'Next-gen Nuxt, улучшенный SSR',
    webpack: 'Сборка, плагины, гибкая конфигурация',
    jest: 'Юнит и интеграционные тесты',
    html: 'Семантика, доступность a11y',
    css: 'Флексбокс, Гриды, адаптивность',
    js: 'ES6+, асинхронность, цикл событий',
    tailwind: 'Utility-first, быстрый UI',
    vuetify: 'Material UI, готовые компоненты',
    rest: 'REST API, HTTP интеграции',
    grpc: 'Высокопроизводительный RPC',
    git: 'Контроль версий, ревью кода',
    docker: 'Контейнеры, изоляция, деплой',
  },

  contacts: {
    title: 'Контакты',
    description:
      'Открыта к новым проектам и интересным задачам. Буду рада обсудить сотрудничество.',
    copy: 'Скопировать',
    copied: 'Скопировано!',
  },
}