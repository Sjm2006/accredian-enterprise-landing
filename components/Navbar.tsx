'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Stats', href: '#stats' },
  { label: 'Clients', href: '#clients' },
  { label: 'Accredian Edge', href: '#edge' },
  { label: 'CAT', href: '#cat' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-medium/30 bg-white/95 backdrop-blur-xl shadow-soft">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-between gap-4 h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <span className="text-white text-lg font-bold">A</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm uppercase tracking-[0.35em] text-gray-muted">Accredian</p>
              <span className="text-lg font-semibold text-dark">Enterprise</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-dark hover:text-primary font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#how-it-works"
              onClick={(e) => handleSmoothScroll(e, '#how-it-works')}
              className="btn-primary btn-sm"
            >
              Talk to Advisor
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden rounded-lg border border-gray-medium/50 bg-white p-2 text-gray-700 shadow-sm"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-medium animate-slide-down">
          <div className="container-custom py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="block text-dark hover:text-primary font-medium py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#how-it-works"
              onClick={(e) => handleSmoothScroll(e, '#how-it-works')}
              className="btn-primary btn-sm w-full text-center"
            >
              Talk to Advisor
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}