import { services } from '@/data/services';
import { locations } from '@/data/locations';

export default function sitemap() {
  const baseUrl = 'https://fairylegacyclean.com';
  const now = new Date().toISOString();

  const staticRoutes = [
    { url: baseUrl + '/',            lastModified: now, changeFrequency: 'weekly',   priority: 1.0 },
    { url: baseUrl + '/services',    lastModified: now, changeFrequency: 'monthly',  priority: 0.8 },
    { url: baseUrl + '/about',       lastModified: now, changeFrequency: 'monthly',  priority: 0.6 },
    { url: baseUrl + '/contact',     lastModified: now, changeFrequency: 'monthly',  priority: 0.7 },
    { url: baseUrl + '/for-realtors',lastModified: now, changeFrequency: 'monthly',  priority: 0.7 },
    { url: baseUrl + '/blog',        lastModified: now, changeFrequency: 'weekly',   priority: 0.7 },
  ];

  const serviceRoutes = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const areaRoutes = locations.map((l) => ({
    url: `${baseUrl}/areas/${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
