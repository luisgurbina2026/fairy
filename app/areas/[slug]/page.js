import { locations } from '@/data/locations';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) return { title: 'Area Not Found' };
  return { title: location.metaTitle, description: location.metaDescription };
}

export default async function AreaPage({ params }) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) notFound();

  const nearbyLocations = (location.nearby || [])
    .map((ns) => locations.find((l) => l.slug === ns))
    .filter(Boolean);

  return (
    <main>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(135deg, rgba(0,30,80,0.85) 0%, rgba(0,0,0,0.65) 100%), url(/img/areas-hero.png)',
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
            {location.preTag}
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', marginBottom: '1rem', lineHeight: '1.15' }}>
            {location.h1}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', lineHeight: '1.7' }}>
            Premium cleaning services tailored for {location.name}, {location.state}.
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
          }}>
            Get a Free Quote in {location.name} →
          </Link>
        </div>
      </section>

      {/* ── ABOUT AREA ────────────────────────────────────── */}
      <section style={{ padding: '6rem 5%' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <div>
            <span style={{ color: 'var(--primary)', fontWeight: '700', letterSpacing: '0.1em', fontSize: '0.85rem', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
              About This Area
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '2rem', lineHeight: '1.25' }}>
              Serving {location.name} with Pride
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {location.paragraphs.map((p, i) => (
                <p key={i} style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--on-surface-variant)' }}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Who We Serve */}
          <div style={{
            background: 'linear-gradient(135deg, var(--surface-variant) 0%, white 100%)',
            borderRadius: '20px',
            padding: '2.5rem',
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
            position: 'sticky',
            top: '100px',
          }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              Who We Serve in {location.name}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {location.whoWeServe.map((item, i) => (
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

      {/* ── SERVICES IN THIS AREA ─────────────────────────── */}
      <section style={{ background: 'var(--surface-variant)', padding: '5rem 5%' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: 'var(--primary)', fontWeight: '700', letterSpacing: '0.1em', fontSize: '0.85rem', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
              What We Do
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
              Our Services in {location.name}
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {services.map((svc) => (
              <Link key={svc.slug} href={`/services/${svc.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2.25rem',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}>
                  <div style={{
                    width: '48px', height: '48px',
                    background: 'var(--surface-variant)',
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.3rem',
                  }}>✦</div>
                  <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--primary)' }}>{svc.name}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--on-surface-variant)', lineHeight: '1.6', flex: 1 }}>
                    {svc.metaDescription}
                  </div>
                  <div style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem', marginTop: 'auto' }}>
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEARBY AREAS ──────────────────────────────────── */}
      {nearbyLocations.length > 0 && (
        <section style={{ padding: '5rem 5%' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
              Nearby Areas We Also Serve
            </h2>
            <p style={{ color: 'var(--on-surface-variant)', marginBottom: '3rem' }}>
              We cover all of Central Florida. Explore other communities we serve near {location.name}.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/areas" style={{
                display: 'inline-block', padding: '0.75rem 1.75rem',
                border: '2px solid var(--primary)', color: 'var(--primary)',
                borderRadius: '50px', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem'
              }}>
                View All Service Areas →
              </Link>
              {nearbyLocations.map((nearby) => (
                <Link key={nearby.slug} href={`/areas/${nearby.slug}`} style={{
                  display: 'inline-block', padding: '0.75rem 1.75rem',
                  background: 'var(--surface-variant)',
                  border: '2px solid transparent',
                  color: 'var(--on-surface)', borderRadius: '50px',
                  textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem'
                }}>
                  {nearby.name}, {nearby.state} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
        padding: '5rem 5%',
        textAlign: 'center',
        color: 'white',
      }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'white', marginBottom: '1rem' }}>
            Ready for a Magic Clean in {location.name}?
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem' }}>
            Get a free, no-obligation estimate. We&apos;ll build a custom cleaning plan for your {location.name} property.
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
            Get Your Free Quote →
          </Link>
        </div>
      </section>
    </main>
  );
}
