'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, ChevronDown } from 'lucide-react';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  };

  const isDarkPage = pathname.startsWith('/services') || pathname.startsWith('/areas') || pathname === '/contact' || pathname === '/about';
  const headerClass = `${isScrolled ? 'scrolled' : ''} ${isDarkPage && !isScrolled && !menuOpen ? 'dark-bg-page' : ''}`.trim();

  return (
    <header className={headerClass}>
      <div className="header-inner">
        {/* Logo */}
        <Link href="/" className="header-logo" onClick={close}>
          <Sparkles className="icon-animated" size={24} /> Fairy Legacy
        </Link>

        {/* Desktop Nav */}
        <nav>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            <li>
              <Link href="/" className={pathname === '/' ? 'active' : ''} onClick={close}>Home</Link>
            </li>
            <li 
              className={`dropdown${servicesOpen ? ' mobile-open' : ''}`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <div className="dropdown-trigger" onClick={() => setServicesOpen(!servicesOpen)}>
                <span>Services</span>
                <ChevronDown size={16} />
              </div>
              <ul className="dropdown-menu">
                {services.map(s => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} onClick={close}>{s.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li 
              className={`dropdown${areasOpen ? ' mobile-open' : ''}`}
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <div className="dropdown-trigger" onClick={() => setAreasOpen(!areasOpen)}>
                <span>Service Areas</span>
                <ChevronDown size={16} />
              </div>
              <ul className="dropdown-menu">
                {locations.map(l => (
                  <li key={l.slug}>
                    <Link href={`/areas/${l.slug}`} onClick={close}>{l.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={close}>About</Link>
            </li>
            <li>
              <Link href="/contact" className="btn-nav" onClick={close}>
                Book Now
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`mobile-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
