import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
  title: 'Our Magical Cleaning Services',
  description: 'Explore Fairy Legacy Cleaning services: Deep Cleaning, Move In/Out, Airbnb Cleaning, and Regular Maintenance. Tailored to your needs.',
  alternates: { canonical: 'https://fairylegacycleaning.com/services' },
};

export default function ServicesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://fairylegacycleaning.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://fairylegacycleaning.com/services',
      },
    ],
  };

  const servicesList = [
    {
      id: 'deep-cleaning',
      title: 'Deep Cleaning',
      desc: 'A meticulous top-to-bottom scrub designed for homes that need extra magic. We get into the nooks and crannies that regular cleaning misses.',
      features: ['Baseboards & Doors', 'Inside Ovens & Fridges', 'Deep Dusting', 'Detailed Bathroom Scrub'],
      icon: '🧹',
      colorClass: 'primary',
    },
    {
      id: 'move-in-out',
      title: 'Move In / Out Cleaning',
      desc: 'Starting fresh? We ensure your new space is pristine or leave your old one sparkling for the next legacy. Perfect for landlords and tenants.',
      features: ['Empty Cabinet Cleaning', 'Wall Spot Checking', 'Thorough Floor Care', 'Appliance Inside/Out'],
      icon: '📦',
      colorClass: 'secondary',
    },
    {
      id: 'airbnb',
      title: 'Airbnb & Vacation Rental',
      desc: 'Hospitality-grade cleaning that guarantees 5-star reviews. We handle rapid turnovers with hotel-standard finishing and staging.',
      features: ['Linens & Towels Change', 'Restocking Supplies', 'Damage Reporting', 'Staging & Presentation'],
      icon: '🏠',
      colorClass: 'tertiary',
    },
    {
      id: 'regular',
      title: 'Regular Maintenance',
      desc: 'Keep the magic alive with weekly, bi-weekly, or monthly cleaning schedules tailored to your lifestyle.',
      features: ['Surface Dusting & Wiping', 'Vacuuming & Mopping', 'Kitchen & Bath Basics', 'Trash Removal'],
      icon: '✨',
      colorClass: 'quaternary',
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(/img/services-hero.jpg)' }}></div>
        <div className="page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>Services</span>
          </div>
          <span className="page-hero-label">What We Offer</span>
          <h1>Our Magical Services</h1>
          <p>Choose the perfect spell for your home&apos;s transformation. Expert care for every corner.</p>
        </div>
      </section>

      <section className="services-section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {servicesList.map((srv, index) => (
              <RevealOnScroll key={srv.id}>
                <div id={srv.id} className="glass-card" style={{ padding: '3rem', borderRadius: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                     <div className={`service-icon ${srv.colorClass}-icon`} style={{ width: '6rem', height: '6rem', fontSize: '3rem', margin: '0 auto 1.5rem' }}>{srv.icon}</div>
                     <h2 style={{ fontSize: '2rem', color: `var(--${srv.colorClass === 'quaternary' ? 'primary' : srv.colorClass})` }}>{srv.title}</h2>
                  </div>
                  <div>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{srv.desc}</p>
                    <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                      {srv.features.map(f => (
                        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ color: 'var(--primary)' }}>✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/contact?service=${srv.id}`} className="btn btn-primary">
                      Book this Service
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      
      <section style={{ background: 'var(--surface-container-low)', padding: '5rem 40px', textAlign: 'center' }}>
         <div className="container">
             <RevealOnScroll>
                 <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Need a Custom Spell?</h2>
                 <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>We know every home is unique. Contact us to craft a personalized cleaning plan just for you.</p>
                 <Link href="/contact" className="btn btn-secondary btn-pill">Contact Us Today</Link>
             </RevealOnScroll>
         </div>
      </section>
    </>
  );
}
