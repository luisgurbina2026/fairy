export default function sitemap() {
  const baseUrl = 'https://fairylegacycleaning.com';

  const routes = ['', '/services', '/about', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
