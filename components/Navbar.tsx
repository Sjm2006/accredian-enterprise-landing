'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Stats', href: '#stats' },
  { label: 'Clients', href: '#clients' },
  { label: 'Accredian Edge', href: '#edge' },
  { label: 'CAT Framework', href: '#cat' },
  { label: 'Delivery Model', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
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
    <nav className="sticky top-0 z-50 border-b border-gray-medium/40 bg-white/95 backdrop-blur-xl shadow-soft">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
              <span className="text-white text-xl font-extrabold tracking-tight">A</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold text-dark tracking-tight leading-none">
                Accredian
              </span>
              <span className="text-[11px] font-medium text-gray-muted tracking-wide leading-tight mt-0.5">
                Credentials that matter
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm text-gray-muted hover:text-primary font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="btn-primary btn-sm inline-flex items-center gap-2"
            >
              <span>Talk to Advisor</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden rounded-xl border border-gray-medium/60 bg-white p-2.5 text-gray-700 shadow-sm hover:border-primary/40 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-medium/40 shadow-elevated animate-fade-in-down">
          <div className="container-custom py-5 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="block text-dark hover:text-primary font-medium py-2 text-base transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="btn-primary w-full justify-center text-center py-3"
              >
                Talk to Advisor
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}