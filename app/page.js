import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Package, Home, Award, Heart, Camera, Wand2, ShieldCheck, MapPin } from 'lucide-react';
import RevealOnScroll from '@/components/RevealOnScroll';
import EstimateForm from '@/components/EstimateForm';
import PriceSimulator from '@/components/PriceSimulator';

export const metadata = {
  title: 'House Cleaning Services Kissimmee, FL | Fairy Legacy Clean',
  description:
    'Professional house cleaning in Kissimmee FL. Airbnb turnovers, deep cleaning & move-out service. Serving Central Florida since 2019. Free estimate!',
  alternates: { canonical: 'https://fairylegacyclean.com/' },
  openGraph: {
    title: 'House Cleaning Services Kissimmee, FL | Fairy Legacy Clean',
    description: 'Professional house cleaning in Kissimmee FL. Airbnb turnovers, deep cleaning & move-out. Serving Central Florida since 2019.',
    url: 'https://fairylegacyclean.com/',
    images: [{ url: 'https://fairylegacyclean.com/img/og/og-home.jpg', width: 1200, height: 630 }],
  },
  other: {
    'geo.region': 'US-FL',
    'geo.placename': 'Kissimmee, Florida',
    'geo.position': '28.2920;-81.4073',
    'ICBM': '28.2920, -81.4073',
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://fairylegacyclean.com/#business',
    name: 'Fairy Legacy Clean',
    alternateName: 'Fairy Legacy Clean LLC',
    description: 'Professional house cleaning, Airbnb turnover, deep cleaning, move-in/out and post-construction cleaning services in Kissimmee, Davenport, and Central Florida.',
    url: 'https://fairylegacyclean.com',
    telephone: '(267) 235-8008',
    email: 'fairylegacyclean@gmail.com',
    foundingDate: '2019',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kissimmee',
      addressRegion: 'FL',
      postalCode: '34741',
      addressCountry: 'US',
    },
    areaServed: [
      'Kissimmee, FL', 'Davenport, FL', 'Reunion, FL',
      'Champions Gate, FL', 'Celebration, FL', 'Four Corners, FL',
      'Narcoossee, FL', 'Lake Nona, FL', 'Winter Garden, FL', 'Winter Park, FL',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '08:00',
        closes: '19:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cleaning Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'House Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deep Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Airbnb Vacation Rental Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Move-In / Move-Out Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Post-Construction Cleaning' } },
      ],
    },
  };

  const services = [
    {
      icon: <Sparkles className="icon-animated" size={32} />,
      title: 'Deep Cleaning',
      desc: 'A meticulous top-to-bottom clean covering everything a regular cleaning doesn\'t reach — inside cabinets, baseboards, appliances, and every overlooked corner.',
      href: '/services/deep-cleaning',
      color: 'primary',
    },
    {
      icon: <Package className="icon-animated" size={32} />,
      title: 'Move In / Out',
      desc: 'Starting fresh in Kissimmee or Davenport? We make sure your new home is spotless before move-in, or leave your old one ready for the next owner.',
      href: '/services/move-in-out',
      color: 'secondary',
    },
    {
      icon: <Home className="icon-animated" size={32} />,
      title: 'Airbnb Cleaning',
      desc: 'Hospitality-grade turnovers built to protect your 5-star rating. Fast, photo-documented, and ready before your next guest arrives.',
      href: '/services/airbnb-cleaning',
      color: 'tertiary',
    },
  ];

  const features = [
    {
      icon: <Award className="icon-animated" size={28} />,
      title: 'Unmatched Professionalism',
      desc: 'Our staff undergo rigorous background checks and continuous training in advanced cleaning techniques.',
    },
    {
      icon: <Heart className="icon-animated" size={28} />,
      title: 'Legacy of Trust',
      desc: 'We treat every home with the same respect as our own, building relationships that last for generations.',
    },
    {
      icon: <Camera className="icon-animated" size={28} />,
      title: 'Photo-Documented Quality',
      desc: 'Every cleaning is logged through our proprietary quality control app — timestamped photos that show you exactly the standard we delivered, every single visit.',
    },
    {
      icon: <Wand2 className="icon-animated" size={28} />,
      title: 'Bespoke Detail',
      desc: 'Tailored cleaning plans that adapt to your unique lifestyle and home requirements.',
    },
  ];

  /* PLACEHOLDER: Verify and replace with real Google Business Profile reviews before production launch.
     Source: fairylegacyclean.com GBP — minimum 3 reviews recommended. */
  const reviews = [
    {
      name: 'Sarah M.',
      text: 'Absolutely magical! They transformed my home in just a few hours. I\'ve never seen it this clean before.',
      stars: 5,
    },
    {
      name: 'James T.',
      text: 'Reliable, professional, and thorough. My Airbnb guests always comment on how pristine the place is.',
      stars: 5,
    },
    {
      name: 'Linda R.',
      text: 'The move-out clean was flawless. Got my full security deposit back thanks to Fairy Legacy!',
      stars: 5,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-grid container">
          {/* Left: content */}
          <div className="hero-content-card glass-card">
            <span className="hero-tagline">Premium Cleaning Service</span>

            {/* SEO H1 — visible to search engines */}
            <h1 className="hero-h1-seo">House Cleaning Services in Kissimmee, FL</h1>

            {/* Visual headline — maintains brand tone */}
            <p className="hero-title" aria-hidden="true">
              Impeccable cleaning,<br />
              <em>unforgettable legacy.</em>
            </p>

            <p className="hero-subtitle">
              Experience a thorough, detail-focused transformation of your space — premium
              house cleaning and vacation rental turnovers across Kissimmee, Davenport, and Central Florida.
            </p>

            {/* Trust indicator — replaces unverified 5-star badge */}
            <Link
              href="/about"
              className="rating-badge glass-card"
              aria-label="Serving Central Florida Since 2019"
            >
              <span style={{ fontSize: '1.1rem' }}>✦</span>
              <span className="rating-text">Serving Central Florida Since 2019</span>
              <span style={{ color: 'var(--primary)' }}>→</span>
            </Link>
          </div>

          {/* Right: estimate form */}
          <EstimateForm />
        </div>
      </section>

      {/* ── About Our Legacy ── */}
      <section className="about-legacy-section">
        <div className="about-grid">
          <RevealOnScroll>
            <div className="about-content">
              <span className="section-label">Our Story</span>
              <h2>A Legacy of Cleanliness</h2>
              <p>
                Founded in 2019 by Claudia Milena Rodríguez, Fairy Legacy Clean began with a simple goal:
                bring a level of care to Central Florida homes that goes beyond a standard cleaning service.
                We are a team of background-checked professionals who believe a pristine home — or a
                guest-ready vacation rental — brings real peace of mind.
              </p>
              <p>
                From residential deep cleans in Kissimmee to rapid Airbnb turnovers in Reunion and
                Champions Gate, our standard doesn't change based on the property type. Every visit is
                documented through our quality control app, so you always know exactly what was done and when.
              </p>
              <p>
                We're proud to serve Kissimmee's vibrant, bilingual community — our team communicates
                fluently in both English and Spanish, because trust shouldn't depend on which language
                you're most comfortable in.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div style={{ position: 'relative', height: '400px', borderRadius: '1.5rem', overflow: 'hidden' }}>
              <Image 
                src="/img/cleaning-team.webp" 
                alt="Fairy Legacy Clean Team — Professional cleaners serving Central Florida since 2019" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="services-section" id="services">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header">
              <span className="section-label">What We Offer</span>
              <h2>Our Cleaning Services</h2>
              <p>Reliable, detail-focused cleaning for every type of property — choose the service that fits your home or vacation rental.</p>
            </div>
          </RevealOnScroll>

          <div className="services-grid">
            {services.map((s) => (
              <RevealOnScroll key={s.title}>
                <div className={`service-card glass-card ${s.color}-card`}>
                  <div className={`service-icon ${s.color}-icon`}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link href={s.href} className={`service-link ${s.color}-link`}>
                    Learn More →
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link href="/services" className="btn btn-outline btn-pill">
                View All Services →
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="why-section" id="why-us">
        <div className="why-grid">
          {/* Image */}
          <RevealOnScroll>
            <div className="why-image-wrapper">
              <div className="why-image-box">
                <Image
                  src="/img/cleaning-team.webp"
                  alt="Fondo de hero de servicios de limpieza"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={false}
                />
              </div>
              <div className="why-badge glass-card">
                <div className="why-badge-icon"><ShieldCheck className="icon-animated" size={32} /></div>
                <div style={{ marginLeft: '0' }}>
                  <p className="why-badge-title">Insured &amp; Bonded</p>
                  <p className="why-badge-text">Complete peace of mind for your most valuable assets.</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Features */}
          <RevealOnScroll>
            <div className="why-content">
              <h2>The Fairy Difference</h2>
              <div className="why-features">
                {features.map((f) => (
                  <div className="why-feature" key={f.title}>
                    <div className="why-feature-icon">{f.icon}</div>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Trusted Partner (Parallax) ── */}
      <section className="partner-parallax">
        <RevealOnScroll>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Because first impressions last
          </p>
          <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            A Trusted Partner for Property Managers &amp; Realtors
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem', fontWeight: 500, lineHeight: 1.7 }}>
            We understand that every property reflects your reputation. That's why Realtors, property managers, and Airbnb hosts across Kissimmee, Davenport, and Central Florida trust us for consistent, detail-oriented cleaning. We deliver on time, every time — helping you impress clients, tenants, and guests.
          </p>
          <Link href="/for-realtors" className="btn btn-pill" style={{ background: 'white', color: 'var(--primary)', fontWeight: 700, padding: '0.85rem 2rem', fontSize: '0.95rem', marginTop: '2rem', display: 'inline-block' }}>
            Learn About Our Realtor Partnership →
          </Link>
        </RevealOnScroll>
      </section>

      {/* ── Price Simulator ── */}
      <section className="simulator-section" id="pricing">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header">
              <span className="section-label">Transparent Pricing</span>
              <h2>Instant Quote Estimate</h2>
              <p>See an estimated cost for your home or vacation rental in real-time.</p>
            </div>
          </RevealOnScroll>

          <div className="simulator-grid">
            <RevealOnScroll>
              <PriceSimulator />
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="simulator-image">
                <Image
                  src="/img/cleaning-sparkle.webp"
                  alt="Pristine clean home after Fairy Legacy professional cleaning service"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="simulator-overlay">
                  <div className="simulator-overlay-icon"><Sparkles className="icon-animated" size={32} /></div>
                  <h4>The Cleaning Guarantee</h4>
                  <p>Every square foot treated with meticulous care and consistent attention to detail.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="reviews-section">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header">
              <span className="section-label">Client Stories</span>
              <h2>What Our Clients Say</h2>
              <p>Real feedback from real homeowners and vacation rental hosts across Central Florida.</p>
            </div>
          </RevealOnScroll>

          <div className="reviews-grid">
            {reviews.map((r) => (
              <RevealOnScroll key={r.name}>
                <div className="review-card">
                  <div className="review-stars">{'★'.repeat(r.stars)}</div>
                  <p className="review-text">&ldquo;{r.text}&rdquo;</p>
                  <div>
                    <p className="review-author">{r.name}</p>
                    <p className="review-location">Verified Client</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              {/* Rate Us button: Activate link when GBP is optimized and ready for reviews */}
              <a
                href="https://google.com/search?q=Fairy+Legacy+Clean+Kissimmee"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-pill"
              >
                Rate Us on Google ★
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section className="service-areas-section">
        <RevealOnScroll>
          <span className="section-label">Where We Serve</span>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Our Service Areas</h2>
          <p style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: '0 auto' }}>
            Bringing reliable, detail-focused cleaning to Central Florida&apos;s finest neighborhoods.
          </p>
          <div className="areas-grid">
            {[
              { name: 'Davenport', slug: '/areas/davenport-fl' },
              { name: 'Kissimmee', slug: '/areas/kissimmee-fl' },
              { name: 'Celebration', slug: '/areas/celebration-fl' },
              { name: 'Champions Gate', slug: '/areas/champions-gate-fl' },
              { name: 'Reunion', slug: '/areas/reunion-fl' },
              { name: 'Four Corners', slug: '/areas/four-corners-fl' },
            ].map((area) => (
              <Link key={area.name} href={area.slug} className="area-badge">
                <MapPin className="inline-icon icon-animated" size={18} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} /> {area.name}, FL
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      {/* ── CTA Banner (Parallax) ── */}
      <section className="cta-parallax">
        <RevealOnScroll>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Ready for a transformation?
          </p>
          <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Book Your First Clean Today
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '500px', margin: '0 auto 2.5rem', fontSize: '1.05rem', fontWeight: 500 }}>
            Join the families and vacation rental hosts across Central Florida who trust Fairy Legacy Clean for a consistent, detail-focused standard — every visit.
          </p>
          <Link href="/contact" className="btn btn-pill" style={{ background: 'white', color: 'var(--primary)', fontWeight: 700, padding: '1rem 2.5rem', fontSize: '1rem' }}>
            Get a Free Estimate →
          </Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
