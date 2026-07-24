'use client';

import Link from 'next/link';
import { Mail, MapPin, Shield, Globe } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Accredian',
    links: [
      { label: 'About Us', href: 'https://accredian.com/About' },
      { label: 'Why Accredian', href: 'https://accredian.com/whyaccredian' },
      { label: 'Blog & Resources', href: 'https://blog.accredian.com/' },
      { label: 'Enterprise Contact', href: '#contact' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Corporate Upskilling', href: '#cat' },
      { label: 'Executive Leadership', href: '#edge' },
      { label: 'Gen-AI & Tech Learning', href: '#edge' },
      { label: 'Data & Product Hub', href: '#edge' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Schedule Consultation', href: '#contact' },
      { label: 'Careers', href: 'https://accredian.com/' },
      { label: 'Privacy Policy', href: 'https://accredian.com/privacy' },
      { label: 'Terms of Service', href: 'https://accredian.com/terms' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-12 md:pt-20 md:pb-16 border-t border-slate-800">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo & Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md shadow-primary/30">
                <span className="text-white text-xl font-extrabold tracking-tight">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight leading-none">
                  Accredian
                </span>
                <span className="text-xs font-medium text-gray-400 tracking-wide mt-0.5">
                  Credentials that matter
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Transforming enterprise workforce capabilities with industry-recognized executive certifications, custom skill blueprints, and measurable learning outcomes.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://in.linkedin.com/school/accredianedu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                </svg>
              </a>
              <a
                href="https://x.com/accredianedu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/accredianlearn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z" />
                </svg>
              </a>
              <a
                href="https://enterprise.accredian.com/#accredianEdge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
                aria-label="Website"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm font-normal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <p>
              &copy; {currentYear} Accredian — A Brand of FullStack Education Pvt Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <span className="inline-flex items-center gap-1.5">
                <Mail size={14} className="text-primary" />
                enterprise@accredian.com
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-primary" />
                Gurugram, India
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Shield size={14} className="text-primary" />
                ISO Certified Enterprise Education
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}