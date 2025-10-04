/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://vommuli.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/tools/',
        allow: '/services/',
      },
    ],
    additionalSitemaps: [
      'https://vommuli.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customConfig = {
      '/': { priority: 1.0, changefreq: 'daily' },
      '/services': { priority: 0.9, changefreq: 'weekly' },
      '/services/nvidia-h100': { priority: 0.95, changefreq: 'weekly' },
      '/services/nvidia-a100': { priority: 0.95, changefreq: 'weekly' },
      '/services/emergency-procurement': { priority: 0.98, changefreq: 'weekly' },
      '/services/geographic-arbitrage': { priority: 0.9, changefreq: 'weekly' },
      '/tools/commission-calculator': { priority: 0.95, changefreq: 'weekly' },
      '/tools/timeline-planner': { priority: 0.9, changefreq: 'weekly' },
      '/tools/supply-intelligence': { priority: 0.9, changefreq: 'daily' },
      '/about': { priority: 0.8, changefreq: 'monthly' },
      '/contact': { priority: 0.9, changefreq: 'monthly' },
    }

    const custom = customConfig[path] || {}
    
    return {
      loc: path,
      changefreq: custom.changefreq || config.changefreq,
      priority: custom.priority || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}