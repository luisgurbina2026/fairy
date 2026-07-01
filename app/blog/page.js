import Link from 'next/link';

export const metadata = {
  title: 'Cleaning Tips & Blog | Fairy Legacy Clean',
  description: 'Read the latest cleaning tips, home maintenance advice, and news from Fairy Legacy Clean in Central Florida.',
  alternates: { canonical: 'https://fairylegacyclean.com/blog' },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairylegacyclean.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://fairylegacyclean.com/blog' },
    ],
  };

  const dummyPosts = [
    { id: 1, title: 'How to Keep Your Vacation Rental Guest-Ready All Season', date: 'Oct 12, 2023', category: 'Airbnb Cleaning' },
    { id: 2, title: 'The Ultimate Move-Out Cleaning Checklist', date: 'Sep 28, 2023', category: 'Moving' },
    { id: 3, title: 'Why Photo-Documented Cleaning is the Future', date: 'Sep 10, 2023', category: 'Company News' },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ padding: '8rem 5% 4rem', background: 'var(--surface-variant)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem', color: 'var(--on-surface)' }}>Our Blog</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--on-surface-variant)' }}>
            Insights, cleaning tips, and updates from the Fairy Legacy Clean team.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 5%' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {dummyPosts.map((post) => (
              <div key={post.id} style={{
                background: 'white',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                  {post.category}
                </div>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                  {post.title}
                </h2>
                <div style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem', marginTop: 'auto', marginBottom: '1.5rem' }}>
                  {post.date}
                </div>
                <div style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.95rem', cursor: 'pointer' }}>
                  Read article →
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '5rem', padding: '3rem', background: 'var(--surface-variant)', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>More Articles Coming Soon</h3>
            <p style={{ color: 'var(--on-surface-variant)' }}>We are currently crafting comprehensive guides to help you maintain a pristine home.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
