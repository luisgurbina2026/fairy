import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Package, Home, Award, Heart, Leaf, Wand2, ShieldCheck, MapPin } from 'lucide-react';
import RevealOnScroll from '@/components/RevealOnScroll';
import EstimateForm from '@/components/EstimateForm';
import PriceSimulator from '@/components/PriceSimulator';

export const metadata = {
  title: 'Fairy Legacy Cleaning | Professional Cleaning Services',
  description:
    'Impeccable cleaning, unforgettable legacy. Premium residential, deep cleaning, move in/out, and Airbnb cleaning. Eco-friendly products. 5-Star Google rated.',
  alternates: { canonical: 'https://fairylegacycleaning.com/' },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://fairylegacycleaning.com/#business',
    name: 'Fairy Legacy Cleaning',
    url: 'https://fairylegacycleaning.com',
    description: 'Premium professional cleaning services — residential, deep cleaning, move in/out, and Airbnb cleaning.',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '47',
      bestRating: '5',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
  };

  const services = [
    {
      icon: <Sparkles className="icon-animated" size={32} />,
      title: 'Deep Cleaning',
      desc: 'A meticulous top-to-bottom scrub designed for homes that need extra magic. No dust bunny left behind.',
      href: '/services#deep-cleaning',
      color: 'primary',
    },
    {
      icon: <Package className="icon-animated" size={32} />,
      title: 'Move In / Out',
      desc: 'Starting fresh? We ensure your new space is pristine or leave your old one sparkling for the next legacy.',
      href: '/services#move-in-out',
      color: 'secondary',
    },
    {
      icon: <Home className="icon-animated" size={32} />,
      title: 'Airbnb Cleaning',
      desc: 'Hospitality-grade cleaning that guarantees 5-star reviews. Rapid turnover with hotel-standard finishing.',
      href: '/services#airbnb',
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
      icon: <Leaf className="icon-animated" size={28} />,
      title: 'Eco-Magic Ingredients',
      desc: 'Sustainable, non-toxic products that are safe for your family, pets, and the delicate planet we share.',
    },
    {
      icon: <Wand2 className="icon-animated" size={28} />,
      title: 'Bespoke Detail',
      desc: 'Tailored cleaning plans that adapt to your unique lifestyle and home requirements.',
    },
  ];

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

            <h1 className="hero-title">
              Impeccable cleaning,<br />
              <em>unforgettable legacy.</em>
            </h1>

            <p className="hero-subtitle">
              Experience a magical transformation of your space with our premium,
              professional cleaning services tailored for modern lifestyles.
            </p>

            {/* Google Rating Badge */}
            <a
              href="https://google.com/search?q=Fairy+Legacy+Cleaning"
              target="_blank"
              rel="noopener noreferrer"
              className="rating-badge glass-card"
              aria-label="5-Star Google Rating"
            >
              <span style={{ fontSize: '1.1rem' }}>G</span>
              <div className="rating-stars">★★★★★</div>
              <span className="rating-text">5-Star Google Rating</span>
              <span style={{ color: 'var(--primary)' }}>→</span>
            </a>
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
                Founded with a mission to bring magical transformations to homes across Florida, 
                Fairy Legacy Cleaning is more than just a service. We are a team of dedicated 
                professionals who believe that a pristine home brings peace of mind and joy to your family.
              </p>
              <p>
                From residential deep cleans to rapid Airbnb turnovers, our standard is excellence, 
                and our signature is the sparkle we leave behind.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div style={{ position: 'relative', height: '400px', borderRadius: '1.5rem', overflow: 'hidden' }}>
              <Image 
                src="/img/cleaning-team.webp" 
                alt="Fairy Legacy Cleaning Team" 
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
              <h2>Our Magical Services</h2>
              <p>Choose the perfect spell for your home&apos;s transformation. Expert care for every corner.</p>
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
            A Trusted Partner for Property Managers & Realtors
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem', fontWeight: 500, lineHeight: 1.7 }}>
            We understand that every property reflects your reputation. That’s why realtors, property managers, and Airbnb hosts in Central Florida trust us for consistent, detail-oriented cleaning. We deliver on time, every time—helping you impress clients, tenants, and guests.
          </p>
        </RevealOnScroll>
      </section>

      {/* ── Price Simulator ── */}
      <section className="simulator-section" id="pricing">
        <div className="container">
          <RevealOnScroll>
            <div className="section-header">
              <span className="section-label">Transparent Pricing</span>
              <h2>Instant Quote Magic</h2>
              <p>See the transformation cost for your sanctuary in real-time.</p>
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
                  <h4>The Sparkle Guarantee</h4>
                  <p>Every square foot treated with meticulous care and magical attention to detail.</p>
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
              <p>Real feedback from real homeowners who experienced the Fairy Legacy difference.</p>
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
              <a
                href="https://google.com/search?q=Fairy+Legacy+Cleaning"
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
            Bringing the Fairy Legacy magic to central Florida&apos;s finest neighborhoods.
          </p>
          <div className="areas-grid">
            {['Davenport', 'Kissimmee', 'Celebration', 'Champions Gate'].map((area) => (
              <div key={area} className="area-badge">
                <MapPin className="inline-icon icon-animated" size={18} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} /> {area}, FL
              </div>
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
            Join hundreds of happy homeowners who trust Fairy Legacy for their cleanest home ever.
          </p>
          <Link href="/contact" className="btn btn-pill" style={{ background: 'white', color: 'var(--primary)', fontWeight: 700, padding: '1rem 2.5rem', fontSize: '1rem' }}>
            Get a Free Estimate →
          </Link>
        </RevealOnScroll>
      </section>
    </>
  );
}
