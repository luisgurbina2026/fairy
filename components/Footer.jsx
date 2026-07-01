import Link from 'next/link';
import { Camera, Globe, Search, Sparkles } from 'lucide-react';
export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Sparkles className="icon-animated" size={24} /> Fairy Legacy Clean</h4>
          <p>
            Redefining cleanliness with a touch of magic. Impeccable results,
            every single visit. Photo-documented quality, background-checked team.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram"><Camera size={20} className="icon-animated" /></a>
            <a href="#" aria-label="Facebook"><Globe size={20} className="icon-animated" /></a>
            <a href="#" aria-label="Google"><Search size={20} className="icon-animated" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/areas">Service Areas</Link></li>
            <li><Link href="/for-realtors">For Realtors</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Stay Inspired */}
        <div className="footer-col">
          <h5>Stay Inspired</h5>
          <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
            Join our newsletter for cleaning tips and exclusive magical offers.
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Email address"
              className="newsletter-input"
              aria-label="Newsletter email"
            />
            <button className="newsletter-btn">Join</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Fairy Legacy Clean LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
