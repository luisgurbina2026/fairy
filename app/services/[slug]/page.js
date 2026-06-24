import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  return { title: service.metaTitle, description: service.metaDescription };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <main>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(135deg, rgba(0,75,70,0.88) 0%, rgba(0,0,0,0.7) 100%), url(/img/services-hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        padding: '6rem 5% 6rem',
      }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', marginTop: '80px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: 'white',
            padding: '0.4rem 1.2rem',
            borderRadius: '50px',
            fontSize: '0.85rem',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            Fairy Legacy · Premium Service
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem', lineHeight: '1.15' }}>
            {service.h1}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', lineHeight: '1.7' }}>
            {service.tagline}
          </p>
          <Link href="/contact" style={{
            display: 'inline-block',
            background: 'white',
            color: 'var(--primary)',
            fontWeight: '700',
            padding: '0.9rem 2.5rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}>
            Get a Free Quote →
          </Link>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────── */}
      <section style={{ background: 'var(--primary)', padding: '2rem 5%' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          {service.stats.map((stat, i) => (
            <div key={i} style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', fontFamily: 'var(--font-display)' }}>{stat.value}</div>
              <div style={{ fontSize: '0.85rem', opacity: '0.85', letterSpacing: '0.05em' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SECTION ─────────────────────────────────── */}
      <section style={{ padding: '6rem 5%' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <span style={{ color: 'var(--primary)', fontWeight: '700', letterSpacing: '0.1em', fontSize: '0.85rem', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
              About This Service
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '2rem', lineHeight: '1.25' }}>
              More Than Cleaning — A Complete Experience
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {service.paragraphs.map((p, i) => (
                <p key={i} style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--on-surface-variant)' }}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* What's Included */}
          <div style={{
            background: 'linear-gradient(135deg, var(--surface-variant) 0%, white 100%)',
            borderRadius: '20px',
            padding: '2.5rem',
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
          }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              What&apos;s Included
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {service.includes.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: '22px', height: '22px', minWidth: '22px',
                    background: 'var(--primary)', borderRadius: '50%',
                    color: 'white', fontSize: '0.7rem', fontWeight: '700', marginTop: '2px'
                  }}>✓</span>
                  <span style={{ fontSize: '0.95rem', color: 'var(--on-surface)', lineHeight: '1.5' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── AREAS WE SERVE ────────────────────────────────── */}
      <section style={{ background: 'var(--surface-variant)', padding: '5rem 5%' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: 'var(--primary)', fontWeight: '700', letterSpacing: '0.1em', fontSize: '0.85rem', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
            Our Coverage
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Areas We Serve
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--on-surface-variant)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            We bring our premium {service.name.toLowerCase()} service to the following communities across Central Florida:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {locations.map((loc) => (
              <Link key={loc.slug} href={`/areas/${loc.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  cursor: 'pointer',
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📍</div>
                  <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--on-surface)', marginBottom: '0.25rem' }}>{loc.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--primary)' }}>{loc.state} {loc.zip}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER SERVICES ────────────────────────────────── */}
      <section style={{ padding: '5rem 5%' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', textAlign: 'center', marginBottom: '3rem' }}>
            Other Services You May Need
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'var(--surface-variant)',
                  borderRadius: '16px',
                  padding: '2rem',
                  border: '1px solid rgba(0,0,0,0.05)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  height: '100%',
                }}>
                  <div style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>✦</div>
                  <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{s.name}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--on-surface-variant)', lineHeight: '1.5' }}>{s.tagline}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
        padding: '5rem 5%',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'white', marginBottom: '1rem' }}>
            Ready to book your {service.name}?
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem' }}>
            Join hundreds of happy clients across Central Florida. Get your free, no-obligation estimate today.
          </p>
          <Link href="/contact" style={{
            display: 'inline-block',
            background: 'white',
            color: 'var(--primary)',
            fontWeight: '700',
            padding: '1rem 3rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '1.05rem',
          }}>
            Book Your Cleaning Today →
          </Link>
        </div>
      </section>
    </main>
  );
}
