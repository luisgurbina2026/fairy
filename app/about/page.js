import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
  title: 'About Us | The Fairy Difference',
  description: 'Learn about Fairy Legacy Cleaning. Our mission, our eco-friendly values, and why we are the most trusted cleaning service.',
  alternates: { canonical: 'https://fairylegacycleaning.com/about' },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairylegacycleaning.com' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://fairylegacycleaning.com/about' },
    ],
  };

  const values = [
    { icon: '🌱', title: 'Eco-Friendly', desc: 'We only use safe, non-toxic, and sustainable cleaning products.' },
    { icon: '🛡️', title: 'Trusted Team', desc: 'Every fairy is background-checked, insured, and highly trained.' },
    { icon: '⭐', title: 'Excellence', desc: 'We don\'t just clean; we transform. 5-star quality is our baseline.' }
  ];

  const stats = [
    { number: '500+', label: 'Happy Homes' },
    { number: '5', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction' },
    { number: '47', label: '5-Star Reviews' }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(/img/about-hero.jpg)' }}></div>
        <div className="page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>About Us</span>
          </div>
          <span className="page-hero-label">Our Story</span>
          <h1>The Fairy Difference</h1>
          <p>Building a legacy of trust, one spotless home at a time.</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <RevealOnScroll>
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              {/* Fallback color if image not present yet */}
              <div style={{ width: '100%', height: '500px', background: 'var(--surface-dim)' }}></div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>More than just a cleaning service.</h2>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              At Fairy Legacy, we believe your home is your sanctuary. Our mission started with a simple idea: to provide a cleaning service that not only leaves your home immaculate but also gives you back your most valuable asset—time.
            </p>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              We bring the magic of a pristine environment to every client. Our team treats every home with the same respect and attention to detail as if it were our own.
            </p>
            <Link href="/contact" className="btn btn-primary">Join Our Family</Link>
          </RevealOnScroll>
        </div>
      </section>

      <section style={{ background: 'var(--surface-container-low)', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide every sweep, scrub, and polish.</p>
          </div>
          <div className="values-grid">
            {values.map(v => (
              <RevealOnScroll key={v.title}>
                <div className="value-card">
                  <div className="value-icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="stats-band-grid">
          {stats.map((s, i) => (
             <RevealOnScroll key={s.label}>
               <div className="stat-number">{s.number}</div>
               <div className="stat-label">{s.label}</div>
             </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
