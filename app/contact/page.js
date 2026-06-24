import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';
import EstimateForm from '@/components/EstimateForm';

export const metadata = {
  title: 'Contact Us | Request an Estimate',
  description: 'Get in touch with Fairy Legacy Cleaning to request a free estimate or ask a question. We respond within 2 hours.',
  alternates: { canonical: 'https://fairylegacycleaning.com/contact' },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairylegacycleaning.com' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://fairylegacycleaning.com/contact' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero" style={{ minHeight: '40vh', paddingBottom: '3rem' }}>
        <div className="page-hero-bg" style={{ background: 'var(--primary)', opacity: 1 }}></div>
        <div className="page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>Contact</span>
          </div>
          <h1>Get in Touch</h1>
          <p>We&apos;re here to bring the magic to your home.</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container contact-grid">
          
          <RevealOnScroll>
            <div className="contact-info-card">
              <h3>Let&apos;s Talk</h3>
              <p>Have questions about our services or need a custom quote? Reach out to us directly.</p>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">📞</div>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <div className="contact-info-value">(555) 123-4567</div>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">✉️</div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">hello@fairylegacycleaning.com</div>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">🕒</div>
                <div>
                  <div className="contact-info-label">Business Hours</div>
                  <div className="contact-info-value">Mon-Sat: 8am - 8pm</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="contact-form-wrap">
              <h2>Request an Estimate</h2>
              <p>Fill out the form below and we will get back to you within 2 hours with a free, no-obligation quote.</p>
              {/* Note: In a real app we might pass props to pre-select a service if coming from the Services page */}
              <EstimateForm showSizeField={true} />
            </div>
          </RevealOnScroll>

        </div>
      </section>
    </>
  );
}
