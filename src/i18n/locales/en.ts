export default {
  hero: {
    title: 'Frontend Developer',
    subtitle: 'Vue 3 • TypeScript • Architecture',

    description: {
      general: `Frontend developer (Vue.js / TypeScript) with experience building scalable and high-load web applications.
Specializing in frontend architecture, performance optimization, UI systems, and user experience quality.`,
      experience: `Experienced in full development lifecycle: architecture design, stack selection, performance & security optimization, and production support.
Actively involved in architectural decisions and code reviews.`,
    }
  },

  experience: {
    title: 'Experience',

    stack: 'Stack',
    libraries: 'Libraries',
    tests: 'Tests',

    items: [
      {
        id: 'it-expertise',

        company: 'IT-Expertise',
        role: 'Frontend Developer',
        location: 'Moscow, Russia',
        period: 'Nov 2024 — Nov 2025',

        summary:
          'Designed frontend architecture and core UI modules for a security platform, improving performance and product stability.',

        projects: [
          {
            name: 'Information Security Platform (NDA)',

            stack: ['Vue 3', 'TypeScript', 'Pinia'],
            libraries: ['Custom UI kit (Vuetify-based)'],
            testing: ['Vitest'],

            achievements: [
              'Designed and implemented FSD architecture, improving scalability and maintainability.',
              'Built a custom UI kit based on Vuetify as a product design system.',
              'Developed complex tables and dashboards (14k+ rows).',
              'Optimized performance: -23% bundle size, -18% LCP.',
              'Increased unit test coverage from ~19% to ~61%.',
              'Reduced frontend vulnerabilities by 41%.',
            ],
          },
        ],
      },

      {
        id: 'flycode',

        company: 'FlyCode',
        role: 'Frontend Developer',
        location: 'Tambov, Russia',
        period: 'Jan 2022 — Jul 2024',

        summary:
          'Developed and scaled SPA applications, improving time-to-market and UX metrics.',

        projects: [
          {
            name: 'Beauty & Health Calendar',

            stack: ['Vue 3', 'Nuxt', 'TypeScript', 'Pinia'],
            libraries: ['Bootstrap 5'],
            testing: ['Jest'],

            achievements: [
              'Developed SPA from scratch (Vue 3, TypeScript, Pinia).',
              'Reduced user scheduling errors by ~24%.',
              'Implemented i18n (5 languages) and centralized HTTP error handling.',
              'Built passwordless authentication via token.',
            ],
          },
          {
            name: 'Logistics Platform',

            stack: ['Vue 2', 'JavaScript', 'Vuex'],

            achievements: [
              'Extended transport module (non-standard cargo), increasing business coverage by ~26%.',
              'Refactored legacy codebase.',
            ],
          },
        ],
      },

      {
        id: 'demis',

        company: 'Demis Group',
        role: 'Frontend Developer',
        location: 'Tambov, Russia',
        period: 'Dec 2021 — Jun 2022',

        summary:
          'Developed responsive interfaces and optimized web projects, improving performance and accessibility.',

        projects: [
          {
            name: 'Web projects (landing pages, e-commerce, clinics)',

            stack: ['HTML', 'CSS', 'JavaScript'],

            achievements: [
              'Improved accessibility score from 34 to 62 (WCAG AA).',
              'Optimized performance, cross-browser compatibility, and SEO.',
              'Configured analytics (Yandex.Metrica, Google Analytics).',
            ],
          },
        ],
      },
    ],
  },

  tech: {
    title: 'Skills',
    vue: 'Composition API, reactivity, UI performance',
    ts: 'Strong typing, generics, safer code',
    pinia: 'State management, modular stores',
    vite: 'Fast bundling, HMR, dev performance',
    vueRouter: 'SPA routing, guards, lazy loading',
    nuxt3: 'SSR/SSG, server APIs, fullstack',
    vitest: 'Unit testing, fast runner',
    vue2: 'Options API, legacy architecture',
    vuex: 'Global state, actions/mutations',
    nuxt4: 'Next-gen Nuxt, improved SSR',
    webpack: 'Bundling, plugins, flexible config',
    jest: 'Unit & integration testing',
    html: 'Semantic markup, accessibility',
    css: 'Flexbox, Grid, responsive UI',
    js: 'ES6+, async, event loop',
    tailwind: 'Utility-first, rapid UI',
    vuetify: 'Material UI components',
    rest: 'REST APIs, HTTP integration',
    grpc: 'High-performance RPC',
    git: 'Version control, code review',
    docker: 'Containers, isolation, deployment',
  },

  contacts: {
    title: 'Contacts',
    description:
      'Open to new opportunities and interesting projects. Feel free to reach out!',
    copy: 'Copy',
    copied: 'Copied!',
  },
}