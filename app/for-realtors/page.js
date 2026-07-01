import Link from 'next/link';
import { ShieldCheck, Clock, CheckCircle, Camera } from 'lucide-react';

export const metadata = {
  title: 'For Realtors & Property Managers | Fairy Legacy Clean',
  description: 'Partner with Fairy Legacy Clean for consistent, photo-documented cleaning services that impress clients and protect your reputation in Central Florida.',
  alternates: { canonical: 'https://fairylegacyclean.com/for-realtors' },
};

export default function ForRealtorsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairylegacyclean.com' },
      { '@type': 'ListItem', position: 2, name: 'For Realtors', item: 'https://fairylegacyclean.com/for-realtors' },
    ],
  };

  const benefits = [
    { icon: <Clock size={32} className="icon-animated" />, title: 'Reliable Scheduling', desc: 'We understand real estate moves fast. We accommodate tight timelines for open houses and closings.' },
    { icon: <Camera size={32} className="icon-animated" />, title: 'Photo Documentation', desc: 'Timestamped photos after every clean give you proof of condition without needing to visit the property.' },
    { icon: <ShieldCheck size={32} className="icon-animated" />, title: 'Fully Insured', desc: 'Our team is fully bonded and insured, protecting you, your clients, and the property.' },
    { icon: <CheckCircle size={32} className="icon-animated" />, title: 'Consistent Quality', desc: 'Dedicated teams ensure the standard is maintained across your entire portfolio of properties.' }
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(0,75,70,0.9) 0%, rgba(0,0,0,0.8) 100%), url(/img/realtors-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '6rem 5%',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', marginTop: '4rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)',
            padding: '0.4rem 1.2rem', borderRadius: '50px', fontSize: '0.85rem',
            fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem'
          }}>
            Partnership Program
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            A Cleaning Partner You Can Trust With Your Reputation
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', lineHeight: 1.6 }}>
            For Realtors, Property Managers, and Investors in Central Florida. We deliver the reliable, high-standard cleaning your properties demand.
          </p>
          <Link href="/contact" className="btn btn-pill" style={{ background: 'white', color: 'var(--primary)', fontWeight: 700, padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
            Discuss a Partnership →
          </Link>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section style={{ padding: '6rem 5%', background: 'var(--surface-variant)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>Why Partner With Fairy Legacy Clean?</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--on-surface-variant)', maxWidth: '700px', margin: '0 auto' }}>
              We know that every property you manage or sell reflects your brand. We are structured to make you look good.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ background: 'white', padding: '2rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{b.icon}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{b.title}</h3>
                <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 5%', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1.5rem' }}>Ready to elevate your properties?</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--on-surface-variant)', marginBottom: '2.5rem' }}>
            Contact us today to discuss volume pricing, scheduling integration, and how we can support your business goals.
          </p>
          <Link href="/contact" className="btn btn-pill" style={{ background: 'var(--primary)', color: 'white', fontWeight: 700, padding: '1rem 3rem', fontSize: '1.05rem' }}>
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
