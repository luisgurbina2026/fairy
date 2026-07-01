export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/thank-you', '/404', '/*?utm_*', '/*?ref=*'],
    },
    sitemap: 'https://fairylegacyclean.com/sitemap.xml',
  };
}
