// @ts-check

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Branimir Kirilov',
  author: 'Branimir Kirilov',
  headerTitle: 'Branimir Kirilov blog',
  description: 'The personal site / blog of Branimir Kirilov',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://bkirilov.com/',
  siteRepo: 'https://github.com/branimir-kirilov/blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'kirilov.branimir@gmail.com',
  github: 'https://github.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    posthogProjectApiKey: '', // e.g. AhnJK8392ndPOav87as450xd
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
}

module.exports = siteMetadata
