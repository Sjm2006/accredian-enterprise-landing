'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Programs', href: '#programs' },
  { label: 'Features', href: '#features' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
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
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline text-dark group-hover:text-primary transition-colors">
              Accredian
            </span>
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
              href="#lead-form"
              onClick={(e) => handleSmoothScroll(e, '#lead-form')}
              className="btn-primary btn-sm"
            >
              Contact Sales
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-light rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-6 bg-dark transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-dark transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-dark transition-transform duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}
              />
            </div>
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
              href="#lead-form"
              onClick={(e) => handleSmoothScroll(e, '#lead-form')}
              className="btn-primary btn-sm w-full text-center"
            >
              Contact Sales
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}