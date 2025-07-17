const siteMetadata = {
  title: 'Poleiro Do Infinito - Uma aventura através do conhecimento',
  author: 'Raphael Chaves',
  fullName: 'Raphael Almeida Chaves',
  headerTitle: 'Poleiro Do Infinito',
  description: 'Desejo partilhar um pouco do que aprendi ao longo da minha jornada.',
  language: 'pt-BR',
  theme: 'system',
  siteUrl: 'https://karhdo.dev',
  analyticsURL: 'https://analytics.karhdo.dev/share/Z3eSINRnbzydz1gK/karhdo.dev',
  siteRepo: 'https://github.com/Karhdo/karhdo.dev',
  siteLogo: '/static/images/avatar.jpg',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/projects/karhdo-blog.png',
  email: 'raphaeljq@gmail.com',
  github: 'https://github.com/raphaerus',
  facebook: '',
  linkedin: '',
  twitter: '',
  youtube: '',
  locale: 'pt-BR',
  stickyNav: false,
  socialAccounts: {
    github: 'raphaerus',
    linkedin: 'raphaeljq',
    facebook: 'raphaeljq',
  },
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.UMAMI_WEBSITE_ID,
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: '', // ← desativa Giscus completamente
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
};

module.exports = siteMetadata;
